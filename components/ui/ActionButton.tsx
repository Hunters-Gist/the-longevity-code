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
    "ui-caps inline-flex min-h-12 w-full items-center justify-center rounded-full px-5 py-3 text-[10px] transition duration-300 ease-out focus-visible:ring-2 focus-visible:ring-sage focus-visible:ring-offset-2 focus-visible:ring-offset-background min-[430px]:text-[11px] sm:w-auto sm:px-6";
  const styles =
    variant === "primary"
      ? "bg-obsidian text-bone-white shadow-[0_12px_26px_-18px_rgba(10,18,15,0.7)] hover:-translate-y-0.5 hover:bg-terracotta active:translate-y-0"
      : "border border-sage/70 bg-bone-white/75 text-obsidian hover:-translate-y-0.5 hover:border-terracotta hover:text-terracotta active:translate-y-0";

  return (
    <a className={`${base} ${styles} ${className ?? ""}`} {...props}>
      {children}
    </a>
  );
}
