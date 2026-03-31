"use client";

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <div className="editorial-section">
      <div className="editorial-container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-kicker">Unexpected State</p>
          <h1 className="mt-6 font-serif text-5xl leading-tight tracking-[-0.02em] text-foreground">
            Something went wrong
          </h1>
          <p className="mt-5 text-[1.0625rem] leading-8 text-copy">
            An unexpected error interrupted the page. You can retry the request and continue.
          </p>
          <button onClick={reset} className="editorial-button-primary mt-10">
            Try again
          </button>
        </div>
      </div>
    </div>
  );
}
