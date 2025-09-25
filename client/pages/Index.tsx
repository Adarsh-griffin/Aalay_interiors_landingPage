import Container from "@/components/site/Container";

export default function Index() {
  return (
    <main>
      {/* Hero */}
      <section className="pt-14 md:pt-20">
        <Container className="text-center">
          <h1 className="font-display text-4xl sm:text-5xl md:text-7xl leading-[1.05] tracking-tight">
            BUILDING SPACES,
            <br className="hidden sm:block" />
            SHAPING STORIES
          </h1>
        </Container>

        {/* Gallery Row */}
        <Container className="mt-12 md:mt-16">
          <div className="grid grid-cols-3 gap-4 md:gap-6">
            <img
              src="https://images.unsplash.com/photo-1615529328331-f8917597711f?q=80&w=1400&auto=format&fit=crop"
              alt="Warm wooden seating area"
              className="h-40 sm:h-56 md:h-80 w-full object-cover rounded"
            />
            <img
              src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1600&auto=format&fit=crop"
              alt="Soft lounge with natural light"
              className="h-40 sm:h-56 md:h-80 w-full object-cover rounded"
            />
            <img
              src="https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=1200&auto=format&fit=crop"
              alt="Minimal coffee table with art"
              className="h-40 sm:h-56 md:h-80 w-full object-cover rounded"
            />
          </div>
        </Container>
      </section>

      {/* Vision */}
      <section className="py-20 md:py-28">
        <Container className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="uppercase text-xs tracking-[0.2em] text-foreground/60">Vision</div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl leading-tight mt-3">
              TIMELESS
              <br />
              BY DESIGN
            </h2>
          </div>
          <p className="text-foreground/70 leading-relaxed text-base md:text-lg">
            We believe spaces should do more than function — they should
            resonate. Each project is a quiet dialogue between light, material,
            and form, crafted with clarity and emotional depth. Rooted in warm
            minimalism and quiet luxury, our approach is about creating interiors
            that feel grounded and luminous — spaces that breathe with life, not
            trends.
          </p>
        </Container>
      </section>

      {/* Approach banner */}
      <section className="relative isolate overflow-hidden">
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
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28">
        <Container className="text-center">
          <h3 className="font-display text-3xl sm:text-4xl md:text-5xl">
            BRING INTENTION
            <span className="mx-3">INTO</span>
            YOUR SPACE
          </h3>
          <a
            href="/contact"
            className="inline-flex mt-8 items-center gap-2 uppercase tracking-[0.14em] border-b border-foreground/40 hover:border-foreground"
          >
            Get in touch <span aria-hidden>→</span>
          </a>
        </Container>
      </section>
    </main>
  );
}
