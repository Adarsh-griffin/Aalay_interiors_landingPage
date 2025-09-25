import Container from "./Container";
import { Link, NavLink } from "react-router-dom";

const nav = [
  { to: "/about", label: "About Us" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/services", label: "Services" },
  { to: "/journal", label: "Journal" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b border-border">
      <Container className="flex h-16 items-center justify-between">
        <Link to="/" className="font-display text-xl tracking-wide">
          Sol Haus Studio
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          {nav.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              className={({ isActive }) =>
                `uppercase tracking-[0.14em] ${isActive ? "text-primary" : "text-foreground/80 hover:text-foreground"}`
              }
            >
              {n.label}
            </NavLink>
          ))}
        </nav>

        <Link
          to="/contact"
          className="hidden sm:inline-flex items-center gap-2 uppercase tracking-[0.14em] border-b border-foreground/30 hover:border-foreground transition-colors"
        >
          Contact
          <span aria-hidden>→</span>
        </Link>
      </Container>
    </header>
  );
}
