import Container from "@/components/site/Container";

export default function Placeholder({ title }: { title: string }) {
  return (
    <main>
      <section className="py-20 md:py-28">
        <Container>
          <h1 className="font-display text-4xl md:text-6xl">{title}</h1>
          <p className="mt-6 max-w-2xl text-foreground/70">
            This page is ready to be filled with your content. Tell us what you
            want here and we will craft a pixel-perfect section matching the
            brand style.
          </p>
        </Container>
      </section>
    </main>
  );
}
