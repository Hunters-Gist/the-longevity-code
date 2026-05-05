import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const root = process.cwd();
const failures = [];

function fail(message) {
  failures.push(message);
}

function walk(dir, predicate, files = []) {
  for (const entry of readdirSync(dir)) {
    if (
      entry === "node_modules" ||
      entry === ".next" ||
      entry === ".git" ||
      entry === ".firecrawl" ||
      entry === ".superpowers"
    ) {
      continue;
    }
    const fullPath = join(dir, entry);
    const stats = statSync(fullPath);
    if (stats.isDirectory()) {
      walk(fullPath, predicate, files);
    } else if (predicate(fullPath)) {
      files.push(fullPath);
    }
  }
  return files;
}

function read(path) {
  return readFileSync(join(root, path), "utf8");
}

const sourceFiles = walk(root, (file) => /\.(ts|tsx|js|mjs|json)$/.test(file));

for (const file of sourceFiles) {
  const rel = relative(root, file);
  const text = readFileSync(file, "utf8");
  const nonCanonicalDomain = "https://" + "www." + "thesilacode.com";
  if (text.includes(nonCanonicalDomain)) {
    fail(`${rel} contains non-canonical www domain.`);
  }
}

const imageRefs = new Set();
for (const file of sourceFiles) {
  const text = readFileSync(file, "utf8");
  const matches = text.matchAll(/["'`]([^"'`]*\/images\/[^"'`]+)["'`]/g);
  for (const match of matches) {
    const ref = match[1].split("?")[0];
    if (ref.startsWith("/images/")) imageRefs.add(ref);
  }
}

for (const imageRef of imageRefs) {
  const decoded = decodeURIComponent(imageRef);
  if (!existsSync(join(root, "public", decoded))) {
    fail(`Missing public asset referenced in code: ${imageRef}`);
  }
}

const brandMark = read("components/ui/BrandMark.tsx");
const brandAssets = read("lib/brand/assets.ts");
const approvedLogoPath = "/images/hero/the sila code logo.png";
if (!brandMark.includes("brandAssets.logo") || !brandAssets.includes(approvedLogoPath)) {
  fail(`BrandMark does not render the approved logo: ${approvedLogoPath}`);
}

const assetManifestPath = "content/asset-manifest.json";
if (!existsSync(join(root, assetManifestPath))) {
  fail(`Missing OpenRouter asset manifest: ${assetManifestPath}`);
} else {
  const manifest = JSON.parse(read(assetManifestPath));
  const assets = Array.isArray(manifest.assets) ? manifest.assets : [];
  const missingPhaseOneAssets = assets.filter(
    (asset) =>
      asset.phase === "phase-1" &&
      typeof asset.outputPath === "string" &&
      !existsSync(join(root, asset.outputPath)),
  );
  for (const asset of missingPhaseOneAssets) {
    fail(`Missing generated Phase 1 asset: ${asset.outputPath}`);
  }
}

const blockedGenericImageNames = [
  ["windows-241bwQl2uWE", "-unsplash-scaled.webp"].join(""),
  [
    "abstract-polygonal-brain-glowing-dots-lines-network-connections",
    "-artificial-intelligence-self-development-concept-267581796.webp",
  ].join(""),
  [
    "how-to-fuel-your-skin-for-a-radiant-complexion",
    "-9ed1e6a9-6df8-4a4a-b29b-d2ea7d1f05c7.webp",
  ].join(""),
  ["premium_photo-1676815865390", "-8e3a9336f64b.avif"].join(""),
  ["premium_photo-1681882038701", "-96b1874e3ea8.avif"].join(""),
  ["a-person-walking-down", "-a-path-in-the-woods.jpg"].join(""),
  ["Peptides-_Your_Power_Play", "_for_Reducing_Redness.webp"].join(""),
  ["photo-1559757148", "-5c350d0d3c56.jpeg"].join(""),
];

for (const file of sourceFiles) {
  const rel = relative(root, file);
  const text = readFileSync(file, "utf8");
  for (const blockedImage of blockedGenericImageNames) {
    if (text.includes(blockedImage)) {
      fail(`${rel} still references generic imagery: ${blockedImage}`);
    }
  }
}

const requiredLegalRoutes = [
  "app/legal/terms/page.tsx",
  "app/legal/privacy/page.tsx",
  "app/legal/disclaimer/page.tsx",
  "app/legal/refund/page.tsx",
  "app/legal/shipping/page.tsx",
  "app/legal/subscription/page.tsx",
  "app/legal/research/page.tsx",
  "app/legal/assessment/page.tsx",
  "app/legal/support/page.tsx",
];

for (const route of requiredLegalRoutes) {
  if (!existsSync(join(root, route))) {
    fail(`Missing legal route: ${route}`);
  }
}

const proxy = read("proxy.ts");
if (!proxy.includes("/boh(.*)") || !proxy.includes("/api/boh(.*)")) {
  fail("proxy.ts does not protect /boh and /api/boh routes.");
}

for (const route of [
  "app/api/boh/merch/route.ts",
  "app/api/boh/community-insights/route.ts",
]) {
  const text = read(route);
  if (!text.includes("requireAdmin")) {
    fail(`${route} does not call requireAdmin.`);
  }
  if (!text.includes("adminMethodNotAllowed")) {
    fail(`${route} does not define explicit 405 handling.`);
  }
}

if (!read("app/boh/page.tsx").includes("requireAdmin")) {
  fail("BOH page does not require admin authorization server-side.");
}

if (!read("app/api/assessment/capture/route.ts").includes("assessmentSubmissions")) {
  fail("Assessment capture route is not wired to assessmentSubmissions.");
}

if (!read("lib/stripe/pricing.ts").includes("NEXT_PUBLIC_ENABLE_FOUNDING_100")) {
  fail("Founding 100 feature flag is not enforced in pricing.");
}

if (!read("lib/env/production.ts").includes("pk_test_")) {
  fail("Production Clerk guard does not reject test publishable keys.");
}

if (failures.length > 0) {
  console.error("Smoke checks failed:");
  for (const failure of failures) {
    console.error(`- ${failure}`);
  }
  process.exit(1);
}

console.log(`Smoke checks passed (${imageRefs.size} image references verified).`);
