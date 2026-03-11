export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <header className="space-y-4">
          <p className="text-sm text-white/70">Product • Web • Automation</p>
          <h1 className="text-4xl font-semibold leading-tight md:text-6xl">
            Pratham Gupta
          </h1>
          <p className="max-w-2xl text-lg text-white/80">
            I build and ship web products end-to-end — from user research to
            measurable outcomes. Currently building 3 web apps + automation/data
            analysis projects.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <a
              className="rounded-full bg-white px-4 py-2 text-sm font-medium text-black"
              href="#projects"
            >
              View Projects
            </a>
            <a
              className="rounded-full border border-white/20 px-4 py-2 text-sm font-medium text-white"
              href="#contact"
            >
              Contact
            </a>
          </div>
        </header>

        <section id="projects" className="mt-16">
          <h2 className="text-xl font-semibold">Projects</h2>
          <p className="mt-2 text-white/70">
            Three web apps + one automation/data analysis pipeline. Real users.
            Real metrics. No “toy” work.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {[
              {
                title: "Web App #1 — (coming)",
                desc: "MVP focused on speed: auth + CRUD + clean UX.",
              },
              {
                title: "Web App #2 — (coming)",
                desc: "AI-powered experience with measurable activation.",
              },
              {
                title: "Web App #3 — (coming)",
                desc: "Multi-user product with permissions + retention focus.",
              },
              {
                title: "Automation + Data Analysis — (coming)",
                desc: "Scheduled pipeline: ingest → analyze → report → notify.",
              },
            ].map((p) => (
              <div
                key={p.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <h3 className="text-lg font-medium">{p.title}</h3>
                <p className="mt-2 text-white/70">{p.desc}</p>
                <div className="mt-4 flex gap-3 text-sm">
                  <span className="rounded-full border border-white/10 px-3 py-1 text-white/70">
                    Case Study
                  </span>
                  <span className="rounded-full border border-white/10 px-3 py-1 text-white/70">
                    Live Demo
                  </span>
                  <span className="rounded-full border border-white/10 px-3 py-1 text-white/70">
                    GitHub
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-xl font-semibold">How I work</h2>
          <ul className="mt-4 space-y-2 text-white/75">
            <li>• Talk to users weekly. Patterns &gt; opinions.</li>
            <li>• Ship MVPs fast, then iterate using metrics.</li>
            <li>• Prioritize with clarity (RICE), not vibes.</li>
            <li>• Automate analysis so decisions are faster.</li>
          </ul>
        </section>

        <footer id="contact" className="mt-20 border-t border-white/10 pt-8">
          <p className="text-white/70">
            Contact:{" "}
            <a className="underline" href="mailto:your-email@example.com">
              your-email@example.com
            </a>{" "}
            •{" "}
            <a className="underline" href="https://github.com/guptapratham1012">
              GitHub
            </a>{" "}
            •{" "}
            <a className="underline" href="#">
              LinkedIn
            </a>
          </p>
        </footer>
      </div>
    </main>
  );
}