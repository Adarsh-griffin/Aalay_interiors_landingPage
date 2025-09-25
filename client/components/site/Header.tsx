import Container from "./Container";

const nav = [
  { href: "#about", label: "About Us" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#services", label: "Services" },
  { href: "#journal", label: "Journal" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b border-border">
      <Container className="flex h-16 items-center justify-between">
        <a href="#top" className="font-display text-xl tracking-wide">
          Sol Haus Studio
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="uppercase tracking-[0.14em] text-foreground/80 hover:text-foreground"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden sm:inline-flex items-center gap-2 uppercase tracking-[0.14em] border-b border-foreground/30 hover:border-foreground transition-colors"
        >
          Contact
          <span aria-hidden>→</span>
        </a>
      </Container>
    </header>
  );
}
