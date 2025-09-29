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
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      <button
        onClick={openInstagram}
        aria-label="Instagram"
        className="size-14 rounded-full shadow-xl flex items-center justify-center"
        style={{
          background:
            "linear-gradient(45deg, #f58529, #feda77, #dd2a7b, #8134af, #515bd4)",
        }}
      >
        <Instagram className="size-6 text-white" />
      </button>
      <button
        onClick={openWhatsApp}
        aria-label="WhatsApp"
        className="size-14 rounded-full shadow-xl flex items-center justify-center"
        style={{ background: "#25D366" }}
      >
        <MessageCircle className="size-6 text-white" />
      </button>
    </div>
  );
}
