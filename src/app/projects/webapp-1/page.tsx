import Link from "next/link";
export const dynamic = "force-static";
export default function WebApp1() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-3xl px-6 py-16 space-y-8">
        <Link className="text-white/70 underline" href="/">
        ← Back
        </Link>

        <header className="space-y-3">
          <h1 className="text-4xl font-semibold">Web App #1</h1>
          <p className="text-white/75">
            MVP built for speed: clear problem, simple UX, measurable outcomes.
          </p>
        </header>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold">Problem</h2>
          <p className="text-white/75">
            (Write 2–3 lines: who, what pain, why now.)
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold">Users</h2>
          <p className="text-white/75">
            (Who did you interview? How many? Key insight.)
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold">Solution</h2>
          <p className="text-white/75">
            (What you built. MVP scope. What you intentionally didn’t build.)
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold">Metrics</h2>
          <ul className="text-white/75 space-y-1">
            <li>• Activation: __%</li>
            <li>• Week 1 retention: __%</li>
            <li>• Time-to-value: __</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold">Tech</h2>
          <p className="text-white/75">Next.js • Supabase • Vercel • PostHog</p>
        </section>

        <section className="flex gap-3 pt-2">
          <a className="rounded-full bg-white px-4 py-2 text-sm font-medium text-black" href="#">
            Live Demo
          </a>
          <a className="rounded-full border border-white/20 px-4 py-2 text-sm font-medium" href="#">
            GitHub
          </a>
        </section>
      </div>
    </main>
  );
}