import Container from "./Container";

const nav = [
  { href: "#about", label: "About Us" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#services", label: "Services" },
  { href: "#journal", label: "Journal" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b border-border">
      <Container className="flex h-16 items-center justify-between">
        <a href="#top" className="font-diastema text-2xl tracking-wide font-bold italic">
          Aalay Interiors
        </a>
        <div></div>
      </Container>
    </header>
  );
}
