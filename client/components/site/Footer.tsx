import Container from "./Container";

function openInstagram() {
  const handle = document.body.getAttribute("data-ig-handle");
  const url = handle
    ? `https://instagram.com/${handle}`
    : "https://instagram.com";
  window.open(url, "_blank", "noopener,noreferrer");
}

function openWhatsApp() {
  const phone = document.body.getAttribute("data-wa-phone");
  const msg = encodeURIComponent(
    "Hello, I'm interested in your interior design services.",
  );
  const url = phone
    ? `https://wa.me/${phone}?text=${msg}`
    : `https://wa.me/?text=${msg}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

export default function Footer() {
  return (
    <footer className="pt-12">
      <Container className="py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Left: Requested content */}
          <div>
            <h3 className="font-display text-2xl md:text-3xl">Engage with Us in Conversation.</h3>
            <p className="mt-4 text-sm text-foreground/80 max-w-xl">
              In a global world based on communication, a brand must look beyond its borders.
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <span aria-hidden>✉️</span>
                <a href="mailto:studio.aalay28@gmail.com" className="hover:underline">studio.aalay28@gmail.com</a>
              </li>
              <li className="flex items-center gap-3">
                <span aria-hidden>📷</span>
                <button onClick={openInstagram} className="hover:underline">@aalay.interiors</button>
              </li>
              <li className="flex items-center gap-3">
                <span aria-hidden>📞</span>
                <a href="tel:+919579710826" className="hover:underline">+91 9579710826</a>
              </li>
            </ul>
            {/* <p className="mt-6 text-xs text-foreground/60">We respond within 24 hours on business days.</p> */}
          </div>

          {/* Right: Visiting card */}
          <div className="flex md:justify-end">
            <div className="w-full max-w-sm rounded-xl overflow-hidden shadow-2xl border border-border bg-gradient-to-br from-black/80 to-black/60 text-white">
              <div className="p-6">
                <div className="font-display text-xl tracking-wide">Aalay Interiors</div>
                <div className="mt-1 text-[11px] uppercase tracking-[0.2em] text-white/70">Design • Define • Elevate</div>
                <div className="mt-6 text-sm text-white/80">studio.aalay28@gmail.com</div>
                <div className="text-sm text-white/80">@aalay.interiors</div>
                <div className="text-sm text-white/80">+91 9579710826</div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* separator line between footer content and copyright */}
      <div className="border-t border-foreground/30" />

      <div className="border-t border-border text-xs text-foreground/60 py-4">
        <Container className="flex items-center justify-center">
          <div>© 2025 Aalay Interiors. Designed by LeadGate.</div>
        </Container>
      </div>
    </footer>
  );
}
