type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <header className={`max-w-3xl ${alignment}`}>
      {eyebrow ? (
        <p className="mb-4 text-xs tracking-[0.26em] uppercase text-sage/90">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-display font-semibold leading-tight text-heading sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
          {description}
        </p>
      ) : null}
    </header>
  );
}
