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
        <p className="eyebrow mb-4">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="display-title text-4xl font-semibold text-heading sm:text-5xl lg:text-[3.5rem]">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 max-w-2xl text-[0.98rem] leading-relaxed text-muted sm:text-lg">
          {description}
        </p>
      ) : null}
    </header>
  );
}
