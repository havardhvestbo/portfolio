export default function Loading() {
  return (
    <div className="editorial-section">
      <div className="editorial-container space-y-10 animate-pulse">
        <div>
          <div className="h-4 w-28 rounded-full bg-surface-soft" />
          <div className="mt-5 h-14 w-full max-w-md rounded-xl bg-surface-soft" />
          <div className="mt-4 h-6 w-full max-w-2xl rounded-xl bg-surface-soft" />
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="editorial-card p-6 space-y-4">
              <div className="h-4 w-24 rounded-full bg-surface-soft" />
              <div className="h-7 w-3/4 rounded bg-surface-soft" />
              <div className="h-4 w-full rounded bg-surface-soft" />
              <div className="h-4 w-2/3 rounded bg-surface-soft" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
