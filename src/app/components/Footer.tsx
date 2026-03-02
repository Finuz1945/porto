import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-soft border-t">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="text-lg font-semibold text-dark">Firdaus Nuzula</div>
            <p className="mt-3 text-sm text-muted leading-relaxed">Web Developer specializing in modern web applications, performance optimization, and scalable backend systems.</p>
          </div>

          {/* Quick Links */}
          <div>
            <div className="text-sm font-semibold text-dark">Quick Links</div>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              <li>
                <Link href="/projects" className="hover:text-primary">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/certificates" className="hover:text-primary">
                  Certificates
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="text-sm font-semibold text-dark">Connect</div>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              <li>
                <a href="https://www.linkedin.com/in/firdaus-nuzula-nur-rosyid-228114166/" className="hover:text-primary">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://github.com/Finuz1945" className="hover:text-primary">
                  GitHub
                </a>
              </li>
              <li>
                <a href="mailto:firdausnuzula95@gmail.com" className="hover:text-primary">
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t pt-6 text-xs text-muted flex flex-col md:flex-row justify-between gap-3">
          <div>© {year} Firdaus Nuzula. All rights reserved.</div>
          <div>Built with Next.js & Tailwind CSS</div>
        </div>
      </div>
    </footer>
  );
}
