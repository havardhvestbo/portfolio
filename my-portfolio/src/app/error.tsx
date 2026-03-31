"use client";

function isPortfolioApiError(error: Error) {
  return /Portfolio API|PORTFOLIO_API_BASE_URL|api\/portfolio/i.test(error.message);
}

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  const title = isPortfolioApiError(error) ? "Portfolio data is unavailable" : "Something went wrong";
  const description = isPortfolioApiError(error)
    ? "The frontend could not load data from the ASP.NET portfolio API. Check that the backend is running and that PORTFOLIO_API_BASE_URL points to it."
    : "An unexpected error interrupted the page. You can retry the request and continue.";

  return (
    <div className="editorial-section">
      <div className="editorial-container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-kicker">{isPortfolioApiError(error) ? "Backend Unavailable" : "Unexpected State"}</p>
          <h1 className="mt-6 font-serif text-5xl leading-tight tracking-[-0.02em] text-foreground">
            {title}
          </h1>
          <p className="mt-5 text-[1.0625rem] leading-8 text-copy">
            {description}
          </p>
          <button onClick={reset} className="editorial-button-primary mt-10">
            Try again
          </button>
        </div>
      </div>
    </div>
  );
}
