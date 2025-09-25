import Container from "./Container";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="pt-24">
      <div className="overflow-hidden border-y border-border bg-secondary">
        <div className="whitespace-nowrap will-change-transform animate-[marquee_25s_linear_infinite] text-4xl md:text-6xl font-display py-6 text-foreground/70">
          <span className="mx-6">Get in touch</span>
          <span className="mx-6">•</span>
          <span className="mx-6">Get in touch</span>
          <span className="mx-6">•</span>
          <span className="mx-6">Get in touch</span>
          <span className="mx-6">•</span>
          <span className="mx-6">Get in touch</span>
          <span className="mx-6">•</span>
          <span className="mx-6">Get in touch</span>
          <span className="mx-6">•</span>
        </div>
      </div>

      <Container className="grid grid-cols-1 md:grid-cols-4 gap-12 py-16">
        <div>
          <div className="font-display text-2xl">Sol Haus Studio</div>
          <p className="mt-4 text-sm text-foreground/70">
            Interiors with quiet luxury and timeless intention.
          </p>
        </div>

        <div>
          <div className="uppercase text-xs tracking-[0.2em] text-foreground/60">Menu</div>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link className="hover:underline" to="/about">About Us</Link></li>
            <li><Link className="hover:underline" to="/portfolio">Portfolio</Link></li>
            <li><Link className="hover:underline" to="/services">Services</Link></li>
            <li><Link className="hover:underline" to="/journal">Journal</Link></li>
          </ul>
        </div>

        <div>
          <div className="uppercase text-xs tracking-[0.2em] text-foreground/60">Follow us</div>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a className="hover:underline" href="#" aria-label="Instagram">Instagram</a></li>
            <li><a className="hover:underline" href="#" aria-label="Pinterest">Pinterest</a></li>
            <li><a className="hover:underline" href="#" aria-label="Behance">Behance</a></li>
            <li><a className="hover:underline" href="#" aria-label="LinkedIn">LinkedIn</a></li>
          </ul>
        </div>

        <div>
          <div className="uppercase text-xs tracking-[0.2em] text-foreground/60">Contact</div>
          <ul className="mt-4 space-y-2 text-sm">
            <li>hello@solhaus.studio</li>
            <li>+91 992 346 6795</li>
            <li>Pune, India</li>
          </ul>
          <Link
            to="/contact"
            className="inline-flex mt-6 items-center gap-2 border-b border-foreground/30 hover:border-foreground uppercase tracking-[0.14em]"
          >
            Get in touch <span aria-hidden>→</span>
          </Link>
        </div>
      </Container>

      <div className="border-t border-border text-xs text-foreground/60 py-6">
        <Container className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>© {new Date().getFullYear()} Sol Haus Studio</div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:underline">Privacy policy</a>
            <a href="#" className="hover:underline">Terms of service</a>
            <a href="#" className="hover:underline">Cookie policy</a>
          </div>
        </Container>
      </div>
    </footer>
  );
}

/* Keyframes for marquee */
// Using CSS-in-Tailwind layer in global.css, but safely add here as component styles are compiled with Vite */
