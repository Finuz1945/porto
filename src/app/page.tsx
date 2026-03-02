// import Image from "next/image";

export default function Home() {
  return (
    <div className="relative overflow-hidden bg-soft">
      <div className="pointer-events-none absolute -top-24 -right-30 h-105 w-105 rounded-full bg-accent/20 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.35] bg-[linear-gradient(to_right,rgba(30,58,138,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(30,58,138,0.08)_1px,transparent_1px)] bg-size-[64px_64px]" />
      <div className="relative p-8 md:p-12">
        <div className="relative grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-medium text-primary">Web Developer • Portfolio</p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-dark md:text-5xl">Build fast, clean, and scalable websites.</h1>
            <p className="mt-4 text-base text-muted md:text-lg">I craft modern web experiences with strong performance, SEO friendly structure, and maintainable code from landing pages to web apps.</p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a href="/projects" className="rounded-lg bg-primary px-5 py-3 text-sm font-medium text-white hover:bg-accent">
                View Projects
              </a>
              <a href="/contact" className="rounded-lg border px-5 py-3 text-sm font-medium text-dark hover:bg-white">
                Contact Me
              </a>
            </div>
          </div>

          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <div className="text-sm font-semibold text-dark">Quick Profile</div>
            <div className="mt-3 space-y-2 text-sm text-muted">
              <div>
                <span className="font-medium text-dark">Focus:</span> Next.js • WordPress • Performance
              </div>
              <div>
                <span className="font-medium text-dark">Strength:</span> Clean UI + SEO + Deployment
              </div>
              <div>
                <span className="font-medium text-dark">Open for:</span> Freelance / Full-time
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {["Next.js", "React", "Tailwind", "WordPress", "Docker"].map((t) => (
                <span key={t} className="rounded-full bg-soft px-3 py-1 text-xs font-medium text-primary">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
