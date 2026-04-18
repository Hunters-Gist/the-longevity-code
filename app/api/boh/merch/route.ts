import type { MerchProduct } from "@/content/community";
import {
  createMerchProduct,
  deleteMerchProduct,
  getMerchProducts,
} from "@/lib/merchCatalog";

export const dynamic = "force-dynamic";

export async function GET() {
  const products = await getMerchProducts();
  return Response.json(products, {
    headers: {
      "Cache-Control": "no-store",
    },
  });
}

export async function POST(request: Request) {
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
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id") ?? "";

  const deleted = await deleteMerchProduct(id);
  if (!deleted) {
    return Response.json({ error: "Product not found." }, { status: 404 });
  }

  return Response.json({ ok: true });
}
