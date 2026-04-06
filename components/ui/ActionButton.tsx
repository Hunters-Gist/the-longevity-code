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
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition duration-300 ease-out";
  const styles =
    variant === "primary"
      ? "bg-sage text-obsidian shadow-[0_0_30px_rgba(168,195,160,0.2)] hover:-translate-y-0.5 hover:bg-[#b9d4b1]"
      : "border border-line bg-white/5 text-bone-white hover:-translate-y-0.5 hover:bg-white/10";

  return (
    <a className={`${base} ${styles} ${className ?? ""}`} {...props}>
      {children}
    </a>
  );
}
