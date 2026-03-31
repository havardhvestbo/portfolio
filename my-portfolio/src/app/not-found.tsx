import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center py-32 text-center">
      <h1 className="text-6xl font-extrabold text-primary">404</h1>
      <p className="mt-4 text-xl text-muted">This page doesn&apos;t exist.</p>
      <Link
        href="/"
        className="mt-8 px-6 py-3 rounded-xl bg-primary text-primary-contrast font-semibold hover:opacity-90 transition"
      >
        Go home
      </Link>
    </div>
  );
}
