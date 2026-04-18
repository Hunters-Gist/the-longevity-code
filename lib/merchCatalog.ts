import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { randomUUID } from "node:crypto";
import { initialMerchProducts, type MerchProduct } from "@/content/community";

const dataDirectory = path.join(process.cwd(), "data");
const merchCatalogPath = path.join(dataDirectory, "merch-products.json");

type NewMerchProductInput = {
  name: string;
  category: string;
  price: number;
  stock: number;
  status: MerchProduct["status"];
  imageUrl?: string;
};

const ensureCatalogFile = async () => {
  await mkdir(dataDirectory, { recursive: true });

  try {
    await readFile(merchCatalogPath, "utf8");
  } catch {
    await writeFile(merchCatalogPath, JSON.stringify(initialMerchProducts, null, 2), "utf8");
  }
};

const normalizeProduct = (value: unknown): MerchProduct | null => {
  if (!value || typeof value !== "object") {
    return null;
  }

  const candidate = value as Partial<MerchProduct>;

  if (
    typeof candidate.id !== "string" ||
    typeof candidate.name !== "string" ||
    typeof candidate.category !== "string" ||
    typeof candidate.price !== "number" ||
    typeof candidate.stock !== "number" ||
    (candidate.status !== "active" && candidate.status !== "draft") ||
    typeof candidate.imageUrl !== "string"
  ) {
    return null;
  }

  return {
    id: candidate.id,
    name: candidate.name,
    category: candidate.category,
    price: candidate.price,
    stock: candidate.stock,
    status: candidate.status,
    imageUrl: candidate.imageUrl,
  };
};

const readCatalogFromDisk = async (): Promise<MerchProduct[]> => {
  await ensureCatalogFile();
  const rawCatalog = await readFile(merchCatalogPath, "utf8");

  try {
    const parsed = JSON.parse(rawCatalog) as unknown[];
    const normalized = Array.isArray(parsed)
      ? parsed
          .map((product) => normalizeProduct(product))
          .filter((product): product is MerchProduct => product !== null)
      : [];

    return normalized;
  } catch {
    return [...initialMerchProducts];
  }
};

const writeCatalogToDisk = async (products: MerchProduct[]) => {
  await ensureCatalogFile();
  await writeFile(merchCatalogPath, JSON.stringify(products, null, 2), "utf8");
};

export const getMerchProducts = async (): Promise<MerchProduct[]> => {
  return readCatalogFromDisk();
};

export const createMerchProduct = async (
  input: NewMerchProductInput,
): Promise<MerchProduct> => {
  const name = input.name.trim();
  const category = input.category.trim();
  const imageUrl = (input.imageUrl ?? "").trim();

  if (!name || !category) {
    throw new Error("Product name and category are required.");
  }

  if (!Number.isFinite(input.price) || input.price <= 0) {
    throw new Error("Price must be greater than 0.");
  }

  if (!Number.isInteger(input.stock) || input.stock < 0) {
    throw new Error("Stock must be an integer of 0 or more.");
  }

  const nextProduct: MerchProduct = {
    id: `merch-${randomUUID()}`,
    name,
    category,
    price: Number(input.price.toFixed(2)),
    stock: input.stock,
    status: input.status,
    imageUrl,
  };

  const currentProducts = await readCatalogFromDisk();
  const nextProducts = [nextProduct, ...currentProducts];
  await writeCatalogToDisk(nextProducts);
  return nextProduct;
};

export const deleteMerchProduct = async (id: string): Promise<boolean> => {
  const productId = id.trim();
  if (!productId) {
    return false;
  }

  const currentProducts = await readCatalogFromDisk();
  const nextProducts = currentProducts.filter((product) => product.id !== productId);

  if (nextProducts.length === currentProducts.length) {
    return false;
  }

  await writeCatalogToDisk(nextProducts);
  return true;
};
