import { Instagram, MessageCircle } from "lucide-react";

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

export default function FloatingSocials() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <button
        onClick={openInstagram}
        aria-label="Instagram"
        className="size-12 rounded-full bg-background/80 backdrop-blur border border-foreground/20 shadow hover:border-foreground/50 flex items-center justify-center"
      >
        <Instagram className="size-5" />
      </button>
      <button
        onClick={openWhatsApp}
        aria-label="WhatsApp"
        className="size-12 rounded-full bg-background/80 backdrop-blur border border-foreground/20 shadow hover:border-foreground/50 flex items-center justify-center"
      >
        <MessageCircle className="size-5" />
      </button>
    </div>
  );
}
