import Link from "next/link";

export const dynamic = "force-static";

export default function Home() {
  return (
    <main className="min-h-screen text-white">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <header className="space-y-4">
          <p className="text-sm text-white/70">Product • Web • Automation</p>
          <h1 className="text-4xl font-semibold leading-tight md:text-6xl">
            Pratham Gupta
          </h1>
          <p className="max-w-2xl text-lg text-white/80">
            I build and ship web products end-to-end — from user research to
            measurable outcomes.
          </p>
        </header>

        <section id="projects" className="mt-16">
          <h2 className="text-xl font-semibold">Projects</h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <ProjectCard
              title="Web App #1"
              description="MVP focused on auth + CRUD + clean UX."
              link="/projects/webapp-1"
            />
            <ProjectCard
              title="Web App #2"
              description="AI-powered product with measurable activation."
              link="/projects/webapp-2"
            />
            <ProjectCard
              title="Web App #3"
              description="Multi-user product with retention focus."
              link="/projects/webapp-3"
            />
            <ProjectCard
              title="Automation + Data Analysis"
              description="Pipeline: ingest → analyze → report → notify."
              link="/projects/automation"
            />
          </div>
        </section>
      </div>
    </main>
  );
}

function ProjectCard({
  title,
  description,
  link,
}: {
  title: string;
  description: string;
  link: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <h3 className="text-lg font-medium">{title}</h3>
      <p className="mt-2 text-white/70">{description}</p>

      <div className="mt-4">
        <Link
          href={link}
          className="rounded-full border border-white/10 px-4 py-2 text-sm text-white/80"
        >
          View Case Study
        </Link>
      </div>
    </div>
  );
}
