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
      ? "bg-gradient-to-r from-sage to-[#a7c8af] text-obsidian shadow-[0_12px_36px_rgba(123,189,193,0.26)] hover:-translate-y-0.5 hover:brightness-105"
      : "border border-line bg-white/5 text-bone-white hover:-translate-y-0.5 hover:border-line-strong hover:bg-white/10";

  return (
    <a className={`${base} ${styles} ${className ?? ""}`} {...props}>
      {children}
    </a>
  );
}
