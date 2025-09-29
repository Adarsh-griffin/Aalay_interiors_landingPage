import { Phone, MessageCircle } from "lucide-react";

function openWhatsAppConsultation() {
  const formUrl = "https://forms.gle/RmgeotMc7uJKrffX9";
  window.open(formUrl, "_blank", "noopener,noreferrer");
}

export default function FloatingContactButtons() {
  return (
    <div className="fixed top-6 right-6 z-50">
      {/* Desktop: Side by side */}
      <div className="hidden md:flex items-center gap-3">
        <button
          onClick={openWhatsAppConsultation}
          className="inline-flex items-center rounded-full bg-foreground text-white px-4 py-2 text-sm font-medium shadow-lg hover:opacity-90 transition-opacity"
        >
          {/* <MessageCircle className="h-4 w-4 mr-2" /> */}
          Get a Free Quote
        </button>
        {/*
        <a
          href="tel:+919579710826"
          className="inline-flex items-center gap-2 rounded-full bg-foreground text-white px-4 py-2 text-sm font-medium shadow-lg hover:opacity-90 transition-opacity"
        >
          <Phone className="h-4 w-4" />
          <span>+91 9579710826</span>
        </a>
        */}
      </div>

      {/* Mobile: Stacked vertically with full text */}
      <div className="md:hidden flex flex-col gap-2">
        <button
          onClick={openWhatsAppConsultation}
          className="inline-flex items-center rounded-full bg-foreground text-white px-3 py-2 text-xs font-medium shadow-lg hover:opacity-90 transition-opacity"
        >
          {/* <MessageCircle className="h-4 w-4 mr-2" /> */}
          Get a Free Quote
        </button>
        {/*
        <a
          href="tel:+919579710826"
          className="inline-flex items-center justify-center rounded-full bg-foreground text-white p-2 shadow-lg hover:opacity-90 transition-opacity"
          title="Call +91 9579710826"
        >
          <Phone className="h-4 w-4 mr-2" />
          <span>+91 9579710826</span>

        </a>
        */}
      </div>
    </div>
  );
}
