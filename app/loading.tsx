export default function Loading() {
  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="Loading"
      className="flex min-h-[50vh] items-center justify-center py-16"
    >
      <div className="flex items-center gap-3 text-muted">
        <span
          aria-hidden="true"
          className="h-2 w-2 animate-pulse rounded-full bg-sage"
        />
        <span
          aria-hidden="true"
          className="h-2 w-2 animate-pulse rounded-full bg-sage [animation-delay:0.12s]"
        />
        <span
          aria-hidden="true"
          className="h-2 w-2 animate-pulse rounded-full bg-sage [animation-delay:0.24s]"
        />
        <span className="ui-caps ml-3 text-muted/80">Loading</span>
      </div>
    </div>
  );
}
