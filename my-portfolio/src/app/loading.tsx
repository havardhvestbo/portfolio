export default function Loading() {
  return (
    <div className="space-y-8 animate-pulse">
      <div>
        <div className="h-9 w-full max-w-48 rounded-lg bg-overlay-bg" />
        <div className="mt-3 h-5 w-full max-w-80 rounded-lg bg-overlay-bg" />
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="rounded-2xl border border-overlay-border p-6 space-y-3">
            <div className="h-5 w-3/4 rounded bg-overlay-bg" />
            <div className="h-4 w-full rounded bg-overlay-bg" />
            <div className="h-4 w-2/3 rounded bg-overlay-bg" />
          </div>
        ))}
      </div>
    </div>
  );
}
