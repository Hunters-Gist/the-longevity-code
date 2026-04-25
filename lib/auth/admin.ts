import "server-only";

import { auth, currentUser } from "@clerk/nextjs/server";
import { isProductionDeployment } from "@/lib/env/production";

export type AdminAuthResult =
  | {
      ok: true;
      userId: string;
      email: string | null;
    }
  | {
      ok: false;
      status: 401 | 403;
      message: string;
    };

function parseAllowlist(value: string | undefined) {
  return new Set(
    (value ?? "")
      .split(",")
      .map((item) => item.trim().toLowerCase())
      .filter(Boolean),
  );
}

export function adminMethodNotAllowed(allowedMethods: string[]) {
  return Response.json(
    { error: "method_not_allowed" },
    {
      status: 405,
      headers: {
        Allow: allowedMethods.join(", "),
      },
    },
  );
}

export function adminAuthResponse(result: AdminAuthResult) {
  if (result.ok) return null;
  return Response.json({ error: result.message }, { status: result.status });
}

export async function requireAdmin(): Promise<AdminAuthResult> {
  const { userId } = await auth();

  if (!userId) {
    return {
      ok: false,
      status: 401,
      message: "unauthenticated",
    };
  }

  const adminUserIds = parseAllowlist(process.env.ADMIN_USER_IDS);
  const adminEmails = parseAllowlist(process.env.ADMIN_EMAILS);

  if (adminUserIds.size === 0 && adminEmails.size === 0) {
    if (isProductionDeployment()) {
      console.error("[admin-auth] ADMIN_USER_IDS or ADMIN_EMAILS must be configured.");
      return {
        ok: false,
        status: 403,
        message: "admin_allowlist_not_configured",
      };
    }

    console.warn(
      "[admin-auth] No admin allowlist configured; allowing signed-in user in non-production.",
    );
    return { ok: true, userId, email: null };
  }

  if (adminUserIds.has(userId.toLowerCase())) {
    return { ok: true, userId, email: null };
  }

  const user = await currentUser();
  const email =
    user?.emailAddresses.find((address) => address.id === user.primaryEmailAddressId)
      ?.emailAddress ?? user?.emailAddresses[0]?.emailAddress ?? null;

  if (email && adminEmails.has(email.toLowerCase())) {
    return { ok: true, userId, email };
  }

  return {
    ok: false,
    status: 403,
    message: "forbidden",
  };
}
