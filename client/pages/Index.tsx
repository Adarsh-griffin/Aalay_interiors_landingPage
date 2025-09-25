import Container from "@/components/site/Container";
import { ArrowLeft, ArrowRight, Instagram, MessageCircle } from "lucide-react";

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

export default function Index() {
  return (
    <main id="top">
      {/* Hero */}
      <section className="relative pt-14 md:pt-20" id="about">
        <Container className="grid lg:grid-cols-12 gap-10 items-center">
          {/* Left copy */}
          <div className="lg:col-span-6 relative">
            <h1 className="font-display text-4xl sm:text-6xl md:text-7xl leading-[1.05] tracking-tight text-left">
              Let’s Make
              <br />
              Your <span className="underline underline-offset-4 decoration-2 decoration-primary">Interior</span>
              <br />
              Better.
            </h1>
            <p className="mt-6 max-w-md text-foreground/70">
              Boutique interior design studio creating light-filled, grounded spaces with purpose and quiet luxury.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#portfolio" className="inline-flex items-center rounded-full px-5 py-3 bg-primary text-primary-foreground">
                Our Projects
              </a>
              <a href="#journal" className="inline-flex items-center rounded-full px-5 py-3 border border-foreground/30 hover:border-foreground">
                Stories
              </a>
            </div>

            {/* Decorative figures */}
            <svg className="absolute -left-8 -top-8 size-14 text-foreground/30 animate-[spin_18s_linear_infinite]" viewBox="0 0 100 100" fill="none">
              <circle cx="50" cy="50" r="48" stroke="currentColor" strokeDasharray="3 8" strokeWidth="2" />
            </svg>
            <svg className="absolute -left-10 top-36 w-14 h-6 text-foreground/30 animate-[wiggle_5s_ease-in-out_infinite]" viewBox="0 0 100 20" fill="none">
              <path d="M0 10 C 10 0, 20 20, 30 10 S 50 0, 60 10 80 20, 100 10" stroke="currentColor" strokeWidth="2" />
            </svg>
          </div>

          {/* Right image with arch */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto w-full max-w-md">
              <div className="rounded-t-[140px] overflow-hidden border border-foreground/15 shadow-sm bg-secondary">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F44a562d02e7043d4a3b5ab1be1b88880%2F4a35b0382a2a40dfad791e8d726f76b3?format=webp&width=800"
                  alt="Studio portrait in arch"
                  className="w-full h-[420px] object-cover"
                />
              </div>
              <div className="pointer-events-none absolute inset-0 rounded-t-[140px] border-2 border-foreground/10" />
              <div className="absolute -right-24 top-6 w-24 h-24 rounded-full overflow-hidden shadow-md hidden md:block animate-[float_9s_ease-in-out_infinite]">
                <img
                  src="https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=600&auto=format&fit=crop"
                  alt="Detail"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Image controls */}
              <div className="mt-3 flex items-center justify-center gap-6 text-foreground/60">
                <button aria-label="Previous" className="hover:text-foreground"><ArrowLeft className="size-4" /></button>
                <button aria-label="Next" className="hover:text-foreground"><ArrowRight className="size-4" /></button>
              </div>
            </div>

            {/* Social icons */}
            <div className="mt-6 flex items-center gap-4 justify-center md:justify-start">
              <button onClick={openInstagram} aria-label="Instagram" className="p-2 rounded-full border border-foreground/30 hover:border-foreground">
                <Instagram className="size-4" />
              </button>
              <button onClick={openWhatsApp} aria-label="WhatsApp" className="p-2 rounded-full border border-foreground/30 hover:border-foreground">
                <MessageCircle className="size-4" />
              </button>
            </div>
          </div>
        </Container>
      </section>

      {/* Quick sections overview */}
      <section className="py-12 md:py-16">
        <Container className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <a href="#about" className="group block border border-border rounded-lg p-6 hover:bg-secondary transition">
            <div className="uppercase text-[11px] tracking-[0.2em] text-foreground/60">About</div>
            <div className="mt-2 font-display text-2xl">Design with intention</div>
            <div className="mt-3 text-sm text-foreground/70">Our ethos of warm minimalism and quiet luxury.</div>
            <div className="mt-4 inline-block border-b border-foreground/40 group-hover:border-foreground">Explore →</div>
          </a>
          <a href="#portfolio" className="group block border border-border rounded-lg p-6 hover:bg-secondary transition">
            <div className="uppercase text-[11px] tracking-[0.2em] text-foreground/60">Portfolio</div>
            <div className="mt-2 font-display text-2xl">Selected works</div>
            <div className="mt-3 text-sm text-foreground/70">Curated spaces that balance light and material.</div>
            <div className="mt-4 inline-block border-b border-foreground/40 group-hover:border-foreground">Explore →</div>
          </a>
          <a href="#services" className="group block border border-border rounded-lg p-6 hover:bg-secondary transition">
            <div className="uppercase text-[11px] tracking-[0.2em] text-foreground/60">Services</div>
            <div className="mt-2 font-display text-2xl">From vision to detail</div>
            <div className="mt-3 text-sm text-foreground/70">Full-service interiors, styling and bespoke furniture.</div>
            <div className="mt-4 inline-block border-b border-foreground/40 group-hover:border-foreground">Explore →</div>
          </a>
          <a href="#journal" className="group block border border-border rounded-lg p-6 hover:bg-secondary transition">
            <div className="uppercase text-[11px] tracking-[0.2em] text-foreground/60">Journal</div>
            <div className="mt-2 font-display text-2xl">Notes from the studio</div>
            <div className="mt-3 text-sm text-foreground/70">Behind the scenes, process and inspiration.</div>
            <div className="mt-4 inline-block border-b border-foreground/40 group-hover:border-foreground">Explore →</div>
          </a>
        </Container>
      </section>

      {/* About Us */}
      <section className="py-20 md:py-28" id="about-us">
        <Container className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="uppercase text-xs tracking-[0.2em] text-foreground/60">About us</div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl leading-tight mt-3">
              Timeless by design
            </h2>
          </div>
          <p className="text-foreground/70 leading-relaxed text-base md:text-lg">
            We believe spaces should do more than function — they should resonate. Each project is a quiet dialogue
            between light, material, and form, crafted with clarity and emotional depth. Rooted in warm minimalism and
            quiet luxury, our approach is about creating interiors that feel grounded and luminous.
          </p>
        </Container>
      </section>

      {/* Our Offerings */}
      <section className="py-16 md:py-20 border-y border-border" id="offerings">
        <Container className="text-center">
          <h3 className="font-display text-3xl md:text-5xl">Our Offerings</h3>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 text-left">
            <div className="rounded-lg border border-border p-6 bg-card/50">
              <div className="uppercase text-[11px] tracking-[0.2em] text-foreground/60">Full-service</div>
              <div className="mt-2 font-display text-2xl">Interior Design</div>
              <p className="mt-3 text-sm text-foreground/70">Concept to completion, including layouts, FF&E, and styling.</p>
            </div>
            <div className="rounded-lg border border-border p-6 bg-card/50">
              <div className="uppercase text-[11px] tracking-[0.2em] text-foreground/60">Consulting</div>
              <div className="mt-2 font-display text-2xl">Design Advisory</div>
              <p className="mt-3 text-sm text-foreground/70">Material palettes, finishes, and spatial guidance.</p>
            </div>
            <div className="rounded-lg border border-border p-6 bg-card/50">
              <div className="uppercase text-[11px] tracking-[0.2em] text-foreground/60">Bespoke</div>
              <div className="mt-2 font-display text-2xl">Furniture & Millwork</div>
              <p className="mt-3 text-sm text-foreground/70">Custom pieces tailored to your lifestyle and space.</p>
            </div>
            <div className="rounded-lg border border-border p-6 bg-card/50">
              <div className="uppercase text-[11px] tracking-[0.2em] text-foreground/60">Styling</div>
              <div className="mt-2 font-display text-2xl">Art & Decor Curation</div>
              <p className="mt-3 text-sm text-foreground/70">Finishing layers that bring warmth and personality.</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Proudly Builds */}
      <section className="py-16 md:py-24" id="builds">
        <Container>
          <div className="text-center">
            <h3 className="font-display text-3xl md:text-5xl">Proudly Builds</h3>
            <p className="mt-2 text-foreground/70">Residential, commercial and hospitality spaces.</p>
          </div>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            <img className="w-full h-44 object-cover rounded" alt="Residential" src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1200&auto=format&fit=crop" />
            <img className="w-full h-44 object-cover rounded" alt="Commercial" src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1200&auto=format&fit=crop" />
            <img className="w-full h-44 object-cover rounded hidden md:block" alt="Hospitality" src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1200&auto=format&fit=crop" />
          </div>
        </Container>
      </section>

      {/* Approach banner */}
      <section className="relative isolate overflow-hidden" id="journal">
        <img
          src="https://images.unsplash.com/photo-1598300053658-5befb41a4c6f?q=80&w=1900&auto=format&fit=crop"
          alt="Curved arch interior"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-background/40" />
        <Container className="py-24 md:py-40 text-center">
          <div className="uppercase text-xs tracking-[0.2em] text-foreground/80">Process</div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-foreground drop-shadow">
            Our Approach
          </h2>
          <p className="max-w-2xl mx-auto mt-6 text-foreground/80">
            From vision to detailing, we craft tranquil, enduring spaces through
            research-driven design, material sensitivity, and meticulous
            execution.
          </p>
          <div className="pointer-events-none absolute left-6 top-6 w-24 h-24 rounded-full border border-foreground/20 animate-[spin_30s_linear_infinite] hidden md:block" />
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28" id="contact">
        <Container className="text-center">
          <h3 className="font-display text-3xl sm:text-4xl md:text-5xl">
            BRING INTENTION
            <span className="mx-3">INTO</span>
            YOUR SPACE
          </h3>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={openInstagram}
              className="inline-flex items-center gap-2 uppercase tracking-[0.14em] border-b border-foreground/40 hover:border-foreground"
            >
              Instagram <span aria-hidden>↗</span>
            </button>
            <button
              onClick={openWhatsApp}
              className="inline-flex items-center gap-2 uppercase tracking-[0.14em] border-b border-foreground/40 hover:border-foreground"
            >
              WhatsApp <span aria-hidden>↗</span>
            </button>
          </div>
        </Container>
      </section>
    </main>
  );
}
