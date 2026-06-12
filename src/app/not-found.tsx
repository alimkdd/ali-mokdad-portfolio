import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid-texture flex min-h-screen flex-col items-center justify-center px-5 text-center">
      <p className="font-mono text-xs tracking-[0.3em] text-accent">ERROR 404 — FAILED REP</p>
      <h1 className="mt-4 font-display text-4xl font-bold sm:text-5xl">
        This page doesn&apos;t exist<span className="text-accent">.</span>
      </h1>
      <p className="mt-4 max-w-md text-muted">
        The bar&apos;s empty here — nothing to lift. Head back to the platform and load up.
      </p>
      <Link
        href="/"
        className="mt-8 rounded bg-accent px-6 py-2.5 font-mono text-sm font-bold text-white transition-colors hover:bg-accent-bright"
      >
        ← Back to the platform
      </Link>
    </main>
  );
}
