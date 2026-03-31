"use client";

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center py-32 text-center">
      <h1 className="text-4xl font-extrabold">Something went wrong</h1>
      <p className="mt-4 text-lg text-muted">An unexpected error occurred.</p>
      <button
        onClick={reset}
        className="mt-8 px-6 py-3 rounded-xl bg-primary text-primary-contrast font-semibold hover:opacity-90 transition"
      >
        Try again
      </button>
    </div>
  );
}
