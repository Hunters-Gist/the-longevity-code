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
  const alignment = align === "center" ? "mx-auto text-center" : "text-left";
  const descriptionAlignment = align === "center" ? "mx-auto" : "md:max-w-[52ch]";

  return (
    <header className={`max-w-4xl ${alignment}`}>
      {eyebrow ? (
        <p className="eyebrow mb-3 sm:mb-4">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="display-title max-w-[15ch] text-[1.74rem] font-semibold leading-[1.08] text-heading min-[430px]:text-[1.92rem] sm:max-w-none sm:text-[2.34rem] md:text-[2.72rem] lg:text-[3.1rem] xl:text-[3.45rem]">
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-4 max-w-[40ch] text-[0.98rem] leading-relaxed text-muted sm:mt-5 sm:max-w-2xl sm:text-[1.02rem] md:text-[1.08rem] ${descriptionAlignment}`}
        >
          {description}
        </p>
      ) : null}
    </header>
  );
}
