import Container from "@/components/site/Container";

export default function Contact() {
  return (
    <main>
      <section className="py-20 md:py-28">
        <Container className="max-w-3xl">
          <h1 className="font-display text-4xl md:text-6xl">Get in touch</h1>
          <p className="mt-6 text-foreground/70">
            Tell us about your project and we will respond within 24 hours.
          </p>
          <form className="mt-10 grid grid-cols-1 gap-6">
            <input
              className="border-b border-border bg-transparent py-3 outline-none focus:border-foreground"
              placeholder="Your name"
              required
            />
            <input
              type="email"
              className="border-b border-border bg-transparent py-3 outline-none focus:border-foreground"
              placeholder="Email"
              required
            />
            <input
              className="border-b border-border bg-transparent py-3 outline-none focus:border-foreground"
              placeholder="City / Country"
            />
            <textarea
              rows={5}
              className="border-b border-border bg-transparent py-3 outline-none focus:border-foreground"
              placeholder="Tell us about your space"
            />
            <button className="justify-self-start uppercase tracking-[0.14em] border-b border-foreground/40 hover:border-foreground transition">
              Send →
            </button>
          </form>
        </Container>
      </section>
    </main>
  );
}
