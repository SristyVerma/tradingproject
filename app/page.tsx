import Link from "next/link";

export default function HomePage() {
  return (
    <main className="container py-12">
      <section className="rounded-2xl border border-border bg-white p-8">
        <p className="text-sm font-semibold uppercase tracking-wide text-primary">TradePilot Academy</p>
        <h1 className="mt-3 text-3xl font-bold text-foreground md:text-4xl">Learn trading with practical, structured lessons.</h1>
        <p className="mt-4 max-w-2xl text-muted">
          This is the Phase 2 homepage skeleton. Next phases will connect real course data, pricing, and student onboarding.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/courses" className="rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-white">
            Browse Courses
          </Link>
          <Link href="/about" className="rounded-md border border-border px-5 py-2.5 text-sm font-semibold text-foreground">
            About Us
          </Link>
        </div>
      </section>
    </main>
  );
}
