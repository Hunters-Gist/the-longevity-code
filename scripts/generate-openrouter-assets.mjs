import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import process from "node:process";

const root = process.cwd();
const manifestPath = join(root, "content/asset-manifest.json");
const envPath = join(root, ".env.local");

function parseArgs(argv) {
  const args = { phase: "phase-1", force: false, only: null };
  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    if (arg === "--phase") args.phase = argv[index + 1];
    if (arg === "--only") args.only = argv[index + 1];
    if (arg === "--force") args.force = true;
  }
  return args;
}

async function readEnvFileKey() {
  try {
    const envText = await readFile(envPath, "utf8");
    for (const line of envText.split(/\r?\n/)) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("#")) continue;
      const [key, ...valueParts] = trimmed.split("=");
      if (key === "OPENROUTER_API_KEY") {
        return valueParts.join("=").trim().replace(/^["']|["']$/g, "");
      }
    }
  } catch {
    return "";
  }
  return "";
}

async function getOpenRouterKey() {
  const fromProcess = process.env.OPENROUTER_API_KEY?.trim();
  if (fromProcess) return fromProcess;
  return readEnvFileKey();
}

function getImageUrl(message) {
  const image = message?.images?.[0];
  return image?.image_url?.url ?? image?.imageUrl?.url ?? "";
}

async function pathExists(path) {
  try {
    await readFile(path);
    return true;
  } catch {
    return false;
  }
}

function decodeDataUrl(dataUrl) {
  const match = dataUrl.match(/^data:image\/([a-zA-Z0-9+.-]+);base64,(.+)$/);
  if (!match) {
    throw new Error("OpenRouter did not return a base64 image data URL.");
  }
  return Buffer.from(match[2], "base64");
}

async function generateAsset({ apiKey, model, sharedNegativePrompt, asset }) {
  const outputPath = join(root, asset.outputPath);
  const negativePrompt = asset.negativePrompt
    ? `${sharedNegativePrompt} ${asset.negativePrompt}`
    : sharedNegativePrompt;
  const prompt = `${asset.prompt}\n\nNegative prompt: ${negativePrompt}`;

  const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
      "HTTP-Referer": "https://thesilacode.com",
      "X-Title": "The Sila Code Asset Generator",
    },
    body: JSON.stringify({
      model,
      messages: [{ role: "user", content: prompt }],
      modalities: ["image", "text"],
      image_config: {
        aspect_ratio: asset.aspectRatio,
        image_size: asset.imageSize,
      },
      stream: false,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`OpenRouter request failed for ${asset.id}: ${response.status} ${errorText}`);
  }

  const result = await response.json();
  const message = result.choices?.[0]?.message;
  const imageUrl = getImageUrl(message);
  const imageBuffer = decodeDataUrl(imageUrl);

  await mkdir(dirname(outputPath), { recursive: true });
  await writeFile(outputPath, imageBuffer);
  await writeFile(
    `${outputPath}.meta.json`,
    JSON.stringify(
      {
        id: asset.id,
        provider: "OpenRouter",
        model,
        generatedAt: new Date().toISOString(),
        usage: asset.usage,
        prompt: asset.prompt,
        aspectRatio: asset.aspectRatio,
        imageSize: asset.imageSize,
      },
      null,
      2,
    ),
  );

  console.log(`Generated ${asset.id} -> ${asset.outputPath}`);
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const apiKey = await getOpenRouterKey();
  if (!apiKey) {
    throw new Error("OPENROUTER_API_KEY is required in the shell environment or .env.local.");
  }

  const manifest = JSON.parse(await readFile(manifestPath, "utf8"));
  const model = manifest.model;
  const sharedNegativePrompt = manifest.sharedNegativePrompt;
  const assets = manifest.assets.filter(
    (asset) => asset.phase === args.phase && (!args.only || asset.id === args.only),
  );

  if (assets.length === 0) {
    throw new Error(`No assets matched phase=${args.phase}${args.only ? ` only=${args.only}` : ""}.`);
  }

  for (const asset of assets) {
    const outputPath = join(root, asset.outputPath);
    if (!args.force && (await pathExists(outputPath))) {
      console.log(`Skipping existing ${asset.id} -> ${asset.outputPath}`);
      continue;
    }
    await generateAsset({ apiKey, model, sharedNegativePrompt, asset });
  }
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
