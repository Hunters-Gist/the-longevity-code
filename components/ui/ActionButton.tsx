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
    "inline-flex min-h-12 w-full items-center justify-center rounded-full px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.14em] transition duration-300 ease-out sm:w-auto sm:px-6 sm:text-sm";
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
