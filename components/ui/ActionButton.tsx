import type { ComponentPropsWithoutRef } from "react";

type ActionButtonProps = ComponentPropsWithoutRef<"a"> & {
  variant?: "primary" | "secondary";
};

export function ActionButton({
  variant = "primary",
  className,
  children,
  ...props
}: ActionButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-[0.14em] transition duration-300 ease-out";
  const styles =
    variant === "primary"
      ? "bg-obsidian text-bone-white shadow-soft hover:-translate-y-0.5 hover:bg-deep-charcoal"
      : "border border-sage/70 bg-bone-white/75 text-obsidian hover:-translate-y-0.5 hover:border-terracotta hover:text-terracotta";

  return (
    <a className={`${base} ${styles} ${className ?? ""}`} {...props}>
      {children}
    </a>
  );
}
