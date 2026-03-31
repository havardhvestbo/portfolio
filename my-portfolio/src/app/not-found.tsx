import Link from "next/link";

export default function NotFound() {
  return (
    <div className="editorial-section">
      <div className="editorial-container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-kicker">404</p>
          <h1 className="mt-6 font-serif text-5xl leading-tight tracking-[-0.02em] text-foreground">
            This page doesn&apos;t exist
          </h1>
          <p className="mt-5 text-[1.0625rem] leading-8 text-copy">
            The route may have moved, or the link may no longer be current.
          </p>
          <Link href="/" className="editorial-button-primary mt-10">
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}
