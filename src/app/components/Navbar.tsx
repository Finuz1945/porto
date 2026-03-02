import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/certificates", label: "Certificates" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white shadow-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        {/* Logo / Brand */}
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white font-semibold shadow">FN</div>
          <div>
            <div className="text-sm font-semibold text-dark">Firdaus Nuzula</div>
            <div className="text-xs text-muted">Web Developer</div>
          </div>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-medium text-muted transition hover:text-primary">
              {item.label}
            </Link>
          ))}

          <Link href="/contact" className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white transition hover:bg-accent">
            Hire Me
          </Link>
        </nav>
      </div>
    </header>
  );
}
