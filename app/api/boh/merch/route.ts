import type { MerchProduct } from "@/content/community";
import {
  createMerchProduct,
  deleteMerchProduct,
  getMerchProducts,
} from "@/lib/merchCatalog";
import {
  adminAuthResponse,
  adminMethodNotAllowed,
  requireAdmin,
} from "@/lib/auth/admin";

export const dynamic = "force-dynamic";

export async function GET() {
  const authResult = await requireAdmin();
  const authResponse = adminAuthResponse(authResult);
  if (authResponse) return authResponse;

  const products = await getMerchProducts();
  return Response.json(products, {
    headers: {
      "Cache-Control": "no-store",
    },
  });
}

export async function POST(request: Request) {
  const authResult = await requireAdmin();
  const authResponse = adminAuthResponse(authResult);
  if (authResponse) return authResponse;

  try {
    const body = (await request.json()) as Partial<{
      name: string;
      category: string;
      price: number;
      stock: number;
      status: MerchProduct["status"];
      imageUrl: string;
    }>;

    const product = await createMerchProduct({
      name: body.name ?? "",
      category: body.category ?? "",
      price: Number(body.price),
      stock: Number(body.stock),
      status: body.status === "active" ? "active" : "draft",
      imageUrl: body.imageUrl ?? "",
    });

    return Response.json(product, { status: 201 });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Could not create merch product.";
    return Response.json({ error: message }, { status: 400 });
  }
}

export async function DELETE(request: Request) {
  const authResult = await requireAdmin();
  const authResponse = adminAuthResponse(authResult);
  if (authResponse) return authResponse;

  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id") ?? "";

  const deleted = await deleteMerchProduct(id);
  if (!deleted) {
    return Response.json({ error: "Product not found." }, { status: 404 });
  }

  return Response.json({ ok: true });
}

export function PUT() {
  return adminMethodNotAllowed(["GET", "POST", "DELETE"]);
}

export function PATCH() {
  return adminMethodNotAllowed(["GET", "POST", "DELETE"]);
}
