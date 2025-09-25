import Container from "./Container";

function openInstagram() {
  const handle = document.body.getAttribute("data-ig-handle");
  const url = handle ? `https://instagram.com/${handle}` : "https://instagram.com";
  window.open(url, "_blank", "noopener,noreferrer");
}

function openWhatsApp() {
  const phone = document.body.getAttribute("data-wa-phone");
  const msg = encodeURIComponent("Hello, I'm interested in your interior design services.");
  const url = phone ? `https://wa.me/${phone}?text=${msg}` : `https://wa.me/?text=${msg}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

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
            <li><a className="hover:underline" href="#about-us">About Us</a></li>
            <li><a className="hover:underline" href="#offerings">Our Offerings</a></li>
            <li><a className="hover:underline" href="#builds">Proudly Builds</a></li>
            <li><a className="hover:underline" href="#contact">Contact</a></li>
          </ul>
        </div>

        <div>
          <div className="uppercase text-xs tracking-[0.2em] text-foreground/60">Follow us</div>
          <ul className="mt-4 space-y-2 text-sm">
            <li><button onClick={openInstagram} className="hover:underline">Instagram</button></li>
            <li><button onClick={openWhatsApp} className="hover:underline">WhatsApp</button></li>
          </ul>
        </div>

        <div>
          <div className="uppercase text-xs tracking-[0.2em] text-foreground/60">Contact</div>
          <ul className="mt-4 space-y-2 text-sm">
            <li>hello@solhaus.studio</li>
            <li>+91 992 346 6795</li>
            <li>Pune, India</li>
          </ul>
          <a
            href="#contact"
            className="inline-flex mt-6 items-center gap-2 border-b border-foreground/30 hover:border-foreground uppercase tracking-[0.14em]"
          >
            Get in touch <span aria-hidden>→</span>
          </a>
        </div>
      </Container>

      <div className="border-t border-border text-xs text-foreground/60 py-6">
        <Container className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>© {new Date().getFullYear()} Sol Haus Studio</div>
          <div className="flex items-center gap-4">
            <span>Privacy policy</span>
            <span>Terms of service</span>
            <span>Cookie policy</span>
          </div>
        </Container>
      </div>
    </footer>
  );
}
