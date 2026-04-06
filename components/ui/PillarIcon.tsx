type PillarIconProps = {
  icon: "pulse" | "shield" | "spark" | "mind";
};

export function PillarIcon({ icon }: PillarIconProps) {
  const common = "h-5 w-5 text-sage";

  if (icon === "pulse") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden="true">
        <path
          d="M3 12h4l2-4 4 8 2-4h6"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (icon === "shield") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden="true">
        <path
          d="M12 3 5 6v6c0 4.2 2.8 7.6 7 9 4.2-1.4 7-4.8 7-9V6l-7-3Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (icon === "spark") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden="true">
        <path
          d="m12 2 1.7 4.3L18 8l-4.3 1.7L12 14l-1.7-4.3L6 8l4.3-1.7L12 2Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden="true">
      <path
        d="M12 4a8 8 0 0 0-8 8c0 4.4 3.6 8 8 8s8-3.6 8-8a8 8 0 0 0-8-8Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M9.5 11.5c.7-1.4 1.7-2.1 2.9-2.1 1.5 0 2.6 1 3.1 3"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}
