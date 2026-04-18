"use client";

import { useEffect, useMemo, useState } from "react";
import { initialMerchProducts, type MerchProduct } from "@/content/community";
import type { CommunityInsightsSnapshot } from "@/lib/communityAnalytics";

type BohDashboardClientProps = {
  initialData: CommunityInsightsSnapshot;
};

const refreshIntervalMs = 20000;

type MerchDraft = {
  name: string;
  category: string;
  price: string;
  stock: string;
  status: MerchProduct["status"];
  imageUrl: string;
};

export function BohDashboardClient({ initialData }: BohDashboardClientProps) {
  const [snapshot, setSnapshot] = useState<CommunityInsightsSnapshot>(initialData);
  const [error, setError] = useState<string | null>(null);
  const [merchProducts, setMerchProducts] = useState<MerchProduct[]>(initialMerchProducts);
  const [merchDraft, setMerchDraft] = useState<MerchDraft>({
    name: "",
    category: "",
    price: "",
    stock: "",
    status: "draft",
    imageUrl: "",
  });
  const [merchMessage, setMerchMessage] = useState<string | null>(null);
  const [merchError, setMerchError] = useState<string | null>(null);
  const [merchLoading, setMerchLoading] = useState<boolean>(true);
  const [merchSubmitting, setMerchSubmitting] = useState<boolean>(false);

  useEffect(() => {
    let isMounted = true;

    const loadProducts = async () => {
      try {
        const response = await fetch("/api/boh/merch", {
          method: "GET",
          cache: "no-store",
        });

        if (!response.ok) {
          throw new Error(`Merch request failed with status ${response.status}`);
        }

        const products = (await response.json()) as MerchProduct[];
        if (!isMounted) {
          return;
        }

        setMerchProducts(products);
        setMerchError(null);
      } catch (loadError) {
        if (!isMounted) {
          return;
        }

        setMerchError(
          loadError instanceof Error
            ? loadError.message
            : "Could not load the shared merch catalog.",
        );
      } finally {
        if (isMounted) {
          setMerchLoading(false);
        }
      }
    };

    loadProducts();

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    let isMounted = true;

    const refreshSnapshot = async () => {
      try {
        const response = await fetch("/api/boh/community-insights", {
          method: "GET",
          cache: "no-store",
        });

        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }

        const data = (await response.json()) as CommunityInsightsSnapshot;
        if (isMounted) {
          setSnapshot(data);
          setError(null);
        }
      } catch (refreshError) {
        if (isMounted) {
          setError(
            refreshError instanceof Error
              ? refreshError.message
              : "Could not refresh live analytics.",
          );
        }
      }
    };

    const intervalId = window.setInterval(refreshSnapshot, refreshIntervalMs);

    return () => {
      isMounted = false;
      window.clearInterval(intervalId);
    };
  }, []);

  const generatedAtLabel = useMemo(() => {
    return new Date(snapshot.generatedAt).toLocaleString("en-AU", {
      dateStyle: "medium",
      timeStyle: "short",
    });
  }, [snapshot.generatedAt]);

  const onDraftChange = (field: keyof MerchDraft, value: string) => {
    setMerchDraft((previousDraft) => ({
      ...previousDraft,
      [field]: value,
    }));
  };

  const addProduct = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const name = merchDraft.name.trim();
    const category = merchDraft.category.trim();
    const imageUrl = merchDraft.imageUrl.trim();
    const price = Number(merchDraft.price);
    const stock = Number(merchDraft.stock);

    if (!name || !category) {
      setMerchError("Product name and category are required.");
      setMerchMessage(null);
      return;
    }

    if (!Number.isFinite(price) || price <= 0) {
      setMerchError("Enter a valid price greater than 0.");
      setMerchMessage(null);
      return;
    }

    if (!Number.isInteger(stock) || stock < 0) {
      setMerchError("Stock must be a whole number of 0 or more.");
      setMerchMessage(null);
      return;
    }

    setMerchSubmitting(true);

    try {
      const response = await fetch("/api/boh/merch", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          category,
          price,
          stock,
          status: merchDraft.status,
          imageUrl,
        }),
      });

      if (!response.ok) {
        const payload = (await response.json()) as { error?: string };
        throw new Error(payload.error ?? "Could not add merch product.");
      }

      const createdProduct = (await response.json()) as MerchProduct;
      setMerchProducts((currentProducts) => [createdProduct, ...currentProducts]);
      setMerchDraft({
        name: "",
        category: "",
        price: "",
        stock: "",
        status: "draft",
        imageUrl: "",
      });
      setMerchError(null);
      setMerchMessage(`Added "${createdProduct.name}" to the shared merch catalog.`);
    } catch (createError) {
      setMerchError(
        createError instanceof Error
          ? createError.message
          : "Could not add merch product.",
      );
      setMerchMessage(null);
    } finally {
      setMerchSubmitting(false);
    }
  };

  const removeProduct = async (id: string) => {
    try {
      const response = await fetch(`/api/boh/merch?id=${encodeURIComponent(id)}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        const payload = (await response.json()) as { error?: string };
        throw new Error(payload.error ?? "Could not remove merch product.");
      }

      setMerchProducts((currentProducts) =>
        currentProducts.filter((product) => product.id !== id),
      );
      setMerchMessage("Product removed from the shared merch catalog.");
      setMerchError(null);
    } catch (deleteError) {
      setMerchError(
        deleteError instanceof Error
          ? deleteError.message
          : "Could not remove merch product.",
      );
      setMerchMessage(null);
    }
  };

  return (
    <div className="section-wrap space-y-5 pb-12 sm:space-y-6 sm:pb-16">
      <article className="glass-card rounded-[24px] p-6 sm:p-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="display-title text-2xl text-heading sm:text-3xl">
            Live community intelligence
          </h2>
          <p className="ui-caps text-muted">Last sync: {generatedAtLabel}</p>
        </div>
        <div className="mt-5 grid gap-3 sm:grid-cols-3">
          <div className="rounded-[18px] border border-line bg-bone-white/75 p-4">
            <p className="ui-caps text-muted">Active members now</p>
            <p className="mt-2 text-2xl font-semibold text-heading">
              {snapshot.activeMembersNow}
            </p>
          </div>
          <div className="rounded-[18px] border border-line bg-bone-white/75 p-4">
            <p className="ui-caps text-muted">Weekly posts</p>
            <p className="mt-2 text-2xl font-semibold text-heading">
              {snapshot.weeklyPosts}
            </p>
          </div>
          <div className="rounded-[18px] border border-line bg-bone-white/75 p-4">
            <p className="ui-caps text-muted">Weekly comments</p>
            <p className="mt-2 text-2xl font-semibold text-heading">
              {snapshot.weeklyComments}
            </p>
          </div>
        </div>
        {error ? (
          <p className="mt-4 rounded-[12px] border border-terracotta/40 bg-terracotta/8 px-3 py-2 text-xs text-terracotta">
            Live refresh warning: {error}
          </p>
        ) : null}
      </article>

      <div className="grid gap-4 lg:grid-cols-2">
        <article className="luxury-card rounded-[24px] p-6 sm:p-8">
          <h3 className="display-title text-2xl text-heading">Top discussed themes</h3>
          <ul className="mt-4 space-y-3 text-sm text-muted">
            {snapshot.topThemes.map((theme) => (
              <li
                key={theme.topic}
                className="rounded-[16px] border border-line bg-bone-white/70 p-3"
              >
                <p className="font-semibold text-heading">{theme.topic}</p>
                <p className="mt-1">
                  {theme.mentions} mentions, {theme.demand} demand signals
                </p>
              </li>
            ))}
          </ul>
        </article>

        <article className="glass-card rounded-[24px] p-6 sm:p-8">
          <h3 className="display-title text-2xl text-heading">
            Most requested group outcomes
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-muted">
            {snapshot.mostRequested.map((request) => (
              <li
                key={request.group}
                className="rounded-[16px] border border-line bg-bone-white/70 p-3"
              >
                <p className="font-semibold text-heading">{request.title}</p>
                <p className="mt-1">{request.requests} tracked member requests</p>
              </li>
            ))}
          </ul>
        </article>
      </div>

      <article className="luxury-card rounded-[24px] p-6 sm:p-8">
        <h3 className="display-title text-2xl text-heading">
          AI-scheduled weekly drop queue
        </h3>
        <ul className="mt-4 grid gap-2 text-sm text-muted sm:grid-cols-2 lg:grid-cols-3">
          {snapshot.nextWeeklyDrop.map((topic) => (
            <li
              key={topic}
              className="rounded-full border border-line bg-bone-white/75 px-4 py-2"
            >
              {topic}
            </li>
          ))}
        </ul>
      </article>

      <article className="glass-card rounded-[24px] p-6 sm:p-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h3 className="display-title text-2xl text-heading">BOH merch admin</h3>
          <p className="ui-caps text-muted">{merchProducts.length} products</p>
        </div>
        <p className="mt-2 max-w-3xl text-sm text-muted">
          Add products quickly from BOH and keep this list synced for your whole team.
        </p>

        <form className="mt-5 grid gap-3 sm:grid-cols-2" onSubmit={addProduct}>
          <label className="text-xs text-muted">
            Product name
            <input
              type="text"
              value={merchDraft.name}
              onChange={(event) => onDraftChange("name", event.target.value)}
              className="mt-1 w-full rounded-[12px] border border-line bg-bone-white/80 px-3 py-2 text-sm text-heading outline-none focus:border-sage"
              placeholder="Sila Daily Hydration Mix"
              required
            />
          </label>
          <label className="text-xs text-muted">
            Category
            <input
              type="text"
              value={merchDraft.category}
              onChange={(event) => onDraftChange("category", event.target.value)}
              className="mt-1 w-full rounded-[12px] border border-line bg-bone-white/80 px-3 py-2 text-sm text-heading outline-none focus:border-sage"
              placeholder="Supplements"
              required
            />
          </label>
          <label className="text-xs text-muted">
            Price (AUD)
            <input
              type="number"
              min="0"
              step="0.01"
              value={merchDraft.price}
              onChange={(event) => onDraftChange("price", event.target.value)}
              className="mt-1 w-full rounded-[12px] border border-line bg-bone-white/80 px-3 py-2 text-sm text-heading outline-none focus:border-sage"
              placeholder="49.95"
              required
            />
          </label>
          <label className="text-xs text-muted">
            Stock
            <input
              type="number"
              min="0"
              step="1"
              value={merchDraft.stock}
              onChange={(event) => onDraftChange("stock", event.target.value)}
              className="mt-1 w-full rounded-[12px] border border-line bg-bone-white/80 px-3 py-2 text-sm text-heading outline-none focus:border-sage"
              placeholder="120"
              required
            />
          </label>
          <label className="text-xs text-muted sm:col-span-2">
            Product image URL (optional)
            <input
              type="url"
              value={merchDraft.imageUrl}
              onChange={(event) => onDraftChange("imageUrl", event.target.value)}
              className="mt-1 w-full rounded-[12px] border border-line bg-bone-white/80 px-3 py-2 text-sm text-heading outline-none focus:border-sage"
              placeholder="https://images.example.com/product.jpg"
            />
          </label>
          <label className="text-xs text-muted sm:col-span-2">
            Status
            <select
              value={merchDraft.status}
              onChange={(event) =>
                onDraftChange("status", event.target.value as MerchProduct["status"])
              }
              className="mt-1 w-full rounded-[12px] border border-line bg-bone-white/80 px-3 py-2 text-sm text-heading outline-none focus:border-sage"
            >
              <option value="draft">Draft</option>
              <option value="active">Active</option>
            </select>
          </label>
          <div className="sm:col-span-2">
            <button
              type="submit"
              disabled={merchSubmitting}
              className="inline-flex min-h-11 items-center rounded-full bg-obsidian px-5 text-[11px] font-semibold uppercase tracking-[0.14em] text-bone-white transition duration-300 hover:bg-terracotta"
            >
              {merchSubmitting ? "Saving..." : "Add merch product"}
            </button>
          </div>
        </form>

        {merchError ? (
          <p className="mt-4 rounded-[12px] border border-terracotta/40 bg-terracotta/8 px-3 py-2 text-xs text-terracotta">
            {merchError}
          </p>
        ) : null}
        {merchMessage ? (
          <p className="mt-4 rounded-[12px] border border-sage/40 bg-sage/10 px-3 py-2 text-xs text-sage">
            {merchMessage}
          </p>
        ) : null}

        {merchLoading ? (
          <p className="mt-5 text-sm text-muted">Loading shared merch catalog...</p>
        ) : null}

        <ul className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {merchProducts.map((product) => (
            <li
              key={product.id}
              className="rounded-[18px] border border-line bg-bone-white/75 p-4"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <p className="font-semibold text-heading">{product.name}</p>
                <span className="ui-caps text-muted">{product.status}</span>
              </div>
              <p className="mt-1 text-sm text-muted">{product.category}</p>
              <p className="mt-2 text-sm text-heading">${product.price.toFixed(2)} AUD</p>
              <p className="mt-1 text-xs text-muted">Stock: {product.stock}</p>
              {product.imageUrl ? (
                <p className="mt-2 line-clamp-1 text-xs text-muted">{product.imageUrl}</p>
              ) : null}
              <button
                type="button"
                onClick={() => removeProduct(product.id)}
                className="mt-3 inline-flex min-h-9 items-center rounded-full border border-line px-3 text-[10px] font-semibold uppercase tracking-[0.12em] text-muted transition duration-300 hover:border-terracotta hover:text-terracotta"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </article>
    </div>
  );
}
