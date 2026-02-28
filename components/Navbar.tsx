import Link from "next/link";
import { Container } from "./Container";

const nav = [
  { href: "/", label: "Accueil" },
  { href: "/projects", label: "Projets" },
  { href: "/gallery", label: "Galerie" },
  { href: "/contact", label: "Contact" }
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/70 backdrop-blur">
      <Container>
        <nav className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="rounded-xl px-2 py-1 text-sm font-semibold tracking-tight text-neutral-900 hover:bg-neutral-100"
            aria-label="Aller à l’accueil"
          >
            HIBA Hedil
          </Link>

          <div className="flex items-center gap-1">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-xl px-3 py-2 text-sm text-neutral-700 transition hover:bg-neutral-100 hover:text-neutral-900"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      </Container>
    </header>
  );
}