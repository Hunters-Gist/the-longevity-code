const PRODUCTION_MARKERS = new Set(["production", "prod"]);

function isEnabled(value: string | undefined) {
  return value === "1" || value === "true" || value === "yes";
}

export function isProductionDeployment() {
  return (
    PRODUCTION_MARKERS.has(process.env.VERCEL_ENV ?? "") ||
    PRODUCTION_MARKERS.has(process.env.SILA_APP_ENV ?? "") ||
    isEnabled(process.env.SILA_VALIDATE_PRODUCTION_ENV)
  );
}

function isDevelopmentClerkPublishableKey(value: string | undefined) {
  if (!value) return false;
  const normalized = value.toLowerCase();
  return (
    normalized.startsWith("pk_test_") ||
    normalized.includes("clerk.accounts.dev") ||
    normalized.includes("test")
  );
}

function isDevelopmentClerkSecretKey(value: string | undefined) {
  if (!value) return false;
  return value.toLowerCase().startsWith("sk_test_");
}

export function assertProductionEnvironment() {
  if (!isProductionDeployment()) {
    return;
  }

  const errors: string[] = [];
  const publishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;
  const secretKey = process.env.CLERK_SECRET_KEY;

  if (!publishableKey) {
    errors.push("NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY is required in production.");
  } else if (isDevelopmentClerkPublishableKey(publishableKey)) {
    errors.push(
      "NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY appears to be a Clerk development/test key.",
    );
  }

  if (!secretKey) {
    errors.push("CLERK_SECRET_KEY is required in production.");
  } else if (isDevelopmentClerkSecretKey(secretKey)) {
    errors.push("CLERK_SECRET_KEY appears to be a Clerk development/test key.");
  }

  if (errors.length > 0) {
    throw new Error(`[production-env] ${errors.join(" ")}`);
  }
}
