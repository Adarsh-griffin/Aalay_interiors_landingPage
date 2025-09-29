import Container from "@/components/site/Container";
import FloatingContactButtons from "@/components/site/FloatingContactButtons";
import { ArrowLeft, ArrowRight, Instagram, Phone } from "lucide-react";
import { motion } from "framer-motion";

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

export default function Index() {
  return (
    <main id="top">
      <FloatingContactButtons />
      {/* Hero */}
      <section className="relative pt-14 md:pt-20 min-h-screen flex items-center" id="about">
        <Container className="grid lg:grid-cols-12 gap-16 items-center">
          {/* Left copy */}
          <motion.div 
            className="lg:col-span-6 relative"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1 
              className="font-diastema text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight text-left text-foreground font-bold italic"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              Where Every <br></br>Home
              <br></br>
               Finds Its
              <br />
              <motion.span 
                className="bg-gradient-to-r from-logo-purple via-rich-purple to-lavender bg-clip-text text-transparent font-bold"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
              >
                Soul . 
              </motion.span>
              <br />
            </motion.h1>
            <motion.p 
              className="mt-8 max-w-lg text-lg text-foreground font-medium leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            >
              Interiors that feel personal, timeless, and alive. Inspired by the essence of ‘Aalay’  a sacred abode, our work blends creativity, comfort, and culture to shape homes that truly belong to you.
            </motion.p>
            <motion.div 
              className="mt-8 flex flex-wrap items-center gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            >
              <motion.a
                href="#portfolio"
                className="inline-flex items-center rounded-full px-8 py-4 bg-gradient-to-r from-logo-purple to-rich-purple text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                View Our Work
              </motion.a>
              <motion.a
                href="#journal"
                className="inline-flex items-center rounded-full px-8 py-4 border-2 border-lavender text-logo-purple hover:bg-lavender hover:text-white font-medium transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                Design Process
              </motion.a>
            </motion.div>

            {/* Decorative micro-animations removed */}
          </motion.div>

           {/* Floating Banner Display */}
           <motion.div 
             className="lg:col-span-6 relative flex items-center justify-center"
             initial={{ opacity: 0, x: 50 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
           >
             <div className="relative mx-auto w-full max-w-lg">
               {/* Wall mounting effect with shadow */}
               <motion.div 
                 className="relative"
                 initial={{ opacity: 0, y: 20, rotateX: 15 }}
                 animate={{ opacity: 1, y: 0, rotateX: 0 }}
                 transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                 style={{
                   transformStyle: "preserve-3d",
                   perspective: "1000px"
                 }}
               >
                 {/* Banner container with floating effect */}
                 <motion.div 
                   className="relative"
                   animate={{ 
                     y: [0, -12, 0],
                     rotateX: [0, 3, 0],
                     rotateY: [0, 2, 0],
                     rotateZ: [-1, 1, -1]
                   }}
                   transition={{ 
                     duration: 8,
                     repeat: Infinity,
                     ease: "easeInOut",
                     times: [0, 0.5, 1]
                   }}
                   whileHover={{ 
                     scale: 1.03, 
                     rotateX: -8,
                     rotateY: 4,
                     rotateZ: 2,
                     y: -16
                   }}
                   style={{
                     transformStyle: "preserve-3d",
                     transformOrigin: "top center"
                   }}
                 >
                   {/* Scroll Alay Logo - Full Image Display */}
                   <motion.img
                     src="/scroll aalay logo.png"
                     alt="Alay Interiors Scroll Logo"
                     className="w-full h-auto object-contain"
                     initial={{ opacity: 0, scale: 0.8 }}
                     animate={{ 
                       opacity: 1, 
                       scale: 1,
                       rotateZ: [-0.5, 0.5, -0.5]
                     }}
                     transition={{ 
                       opacity: { duration: 0.8, delay: 0.6, ease: "easeOut" },
                       scale: { duration: 0.8, delay: 0.6, ease: "easeOut" },
                       rotateZ: { 
                         duration: 12, 
                         repeat: Infinity, 
                         ease: "easeInOut",
                         delay: 1
                       }
                     }}
                     whileHover={{ 
                       scale: 1.08,
                       rotateZ: 1
                     }}
                     onError={(e) => {
                       e.currentTarget.src = "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=800&auto=format&fit=crop";
                     }}
                   />

               </motion.div>
               </motion.div>

               {/* Brand tagline below logo */}
               <motion.div 
                 className="mt-6 text-center"
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.6, delay: 1.6, ease: "easeOut" }}
               >
                 <motion.h3 
                  className="text-2xl font-diastema text-logo-purple mb-2 italic"
                   initial={{ opacity: 0, y: 10 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ duration: 0.6, delay: 1.8, ease: "easeOut" }}
                 >
                  Aalay Interiors
                 </motion.h3>
                 <motion.p 
                   className="text-rich-purple/80 font-medium"
                   initial={{ opacity: 0, y: 10 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ duration: 0.6, delay: 2.0, ease: "easeOut" }}
                 >
                   The Eternal Thread of Design <br></br>
                    Design | Decor | Renovation
                 </motion.p>
               </motion.div>

            {/* Social icons */}
               <motion.div 
                 className="mt-6 flex items-center gap-4 justify-center"
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.6, delay: 2.2, ease: "easeOut" }}
               >
                 <motion.button
                onClick={openInstagram}
                aria-label="Instagram"
                   className="p-3 rounded-full border-2 border-logo-purple/30 hover:border-logo-purple bg-lavender/10 hover:bg-logo-purple/10"
                   whileHover={{ scale: 1.1, y: -2 }}
                   whileTap={{ scale: 0.9 }}
                   transition={{ type: "spring", stiffness: 400, damping: 17 }}
                 >
                   <Instagram className="size-5 text-logo-purple" />
                 </motion.button>
                <motion.a
                  href="tel:+919579710826"
                  aria-label="Call"
                  className="p-3 rounded-full border-2 border-rich-purple/30 hover:border-rich-purple bg-lavender/10 hover:bg-rich-purple/10"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Phone className="size-5 text-rich-purple" />
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Our Offerings - moved below hero */}
      <motion.section 
        className="py-16 md:py-20 border-y border-border" 
        id="offerings"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <Container className="text-center">
          <motion.h3 
            className="font-diastema text-3xl md:text-5xl italic"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Our Offerings
          </motion.h3>
          <motion.div 
            className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 text-left"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="rounded-lg border border-border p-6 bg-card/50"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="uppercase text-[11px] tracking-[0.2em] text-foreground/60">
                Full-service
              </div>
              <div className="mt-2 font-diastema text-2xl italic">Interior Design</div>
              <p className="mt-3 text-sm text-foreground/70">
                Concept to completion, including layouts, FF&E, and styling.
              </p>
            </motion.div>
            <motion.div 
              className="rounded-lg border border-border p-6 bg-card/50"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="uppercase text-[11px] tracking-[0.2em] text-foreground/60">
                Consulting
              </div>
              <div className="mt-2 font-diastema text-2xl italic">Design Advisory</div>
              <p className="mt-3 text-sm text-foreground/70">
                Material palettes, finishes, and spatial guidance.
              </p>
            </motion.div>
            <motion.div 
              className="rounded-lg border border-border p-6 bg-card/50"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="uppercase text-[11px] tracking-[0.2em] text-foreground/60">
                Bespoke
              </div>
              <div className="mt-2 font-diastema text-2xl italic">
                Furniture & Millwork
              </div>
              <p className="mt-3 text-sm text-foreground/70">
                Custom pieces tailored to your lifestyle and space.
              </p>
            </motion.div>
            <motion.div 
              className="rounded-lg border border-border p-6 bg-card/50"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="uppercase text-[11px] tracking-[0.2em] text-foreground/60">
                Styling
              </div>
              <div className="mt-2 font-diastema text-2xl italic">
                Art & Decor Curation
              </div>
              <p className="mt-3 text-sm text-foreground/70">
                Finishing layers that bring warmth and personality.
              </p>
            </motion.div>
          </motion.div>
        </Container>
      </motion.section>

      {/* Quick sections overview (temporarily disabled)
      <motion.section 
        className="py-12 md:py-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <Container className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <motion.a
            href="#about"
            className="group block border border-border rounded-lg p-6 hover:bg-secondary transition"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            viewport={{ once: true }}
            whileHover={{ y: -5, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="uppercase text-[11px] tracking-[0.2em] text-foreground/60">
              About
            </div>
            <div className="mt-2 font-display text-2xl">
              Design with intention
            </div>
            <div className="mt-3 text-sm text-foreground/70">
              Our ethos of warm minimalism and quiet luxury.
            </div>
            <motion.div 
              className="mt-4 inline-block border-b border-foreground/40 group-hover:border-foreground"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              Explore →
            </motion.div>
          </motion.a>
          <motion.a
            href="#portfolio"
            className="group block border border-border rounded-lg p-6 hover:bg-secondary transition"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            whileHover={{ y: -5, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="uppercase text-[11px] tracking-[0.2em] text-foreground/60">
              Portfolio
            </div>
            <div className="mt-2 font-display text-2xl">Selected works</div>
            <div className="mt-3 text-sm text-foreground/70">
              Curated spaces that balance light and material.
            </div>
            <motion.div 
              className="mt-4 inline-block border-b border-foreground/40 group-hover:border-foreground"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              Explore →
            </motion.div>
          </motion.a>
          <motion.a
            href="#services"
            className="group block border border-border rounded-lg p-6 hover:bg-secondary transition"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
            whileHover={{ y: -5, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="uppercase text-[11px] tracking-[0.2em] text-foreground/60">
              Services
            </div>
            <div className="mt-2 font-display text-2xl">
              From vision to detail
            </div>
            <div className="mt-3 text-sm text-foreground/70">
              Full-service interiors, styling and bespoke furniture.
            </div>
            <motion.div 
              className="mt-4 inline-block border-b border-foreground/40 group-hover:border-foreground"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              Explore →
            </motion.div>
          </motion.a>
          <motion.a
            href="#journal"
            className="group block border border-border rounded-lg p-6 hover:bg-secondary transition"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
            whileHover={{ y: -5, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="uppercase text-[11px] tracking-[0.2em] text-foreground/60">
              Journal
            </div>
            <div className="mt-2 font-display text-2xl">
              Notes from the studio
            </div>
            <div className="mt-3 text-sm text-foreground/70">
              Behind the scenes, process and inspiration.
            </div>
            <motion.div 
              className="mt-4 inline-block border-b border-foreground/40 group-hover:border-foreground"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              Explore →
            </motion.div>
          </motion.a>
        </Container>
      </motion.section>
      */}

      {/* About Us */}
      <motion.section 
        className="py-20 md:py-28 relative overflow-hidden" 
        id="about-us"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Background decorative elements */}
        <motion.div 
          className="absolute top-20 right-10 w-32 h-32 border border-foreground/10 rounded-full"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.0, delay: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
          
        />
        <motion.div 
          className="absolute bottom-20 left-10 w-24 h-24 border border-foreground/5 rounded-full"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.0, delay: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          
        />
        
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            {/* Section Header */}
            <motion.div 
              className="uppercase text-xs tracking-[0.2em] text-foreground/60 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              About us
            </motion.div>
            
            <motion.h2 
              className="font-diastema text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-tight mb-8 font-bold italic"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              Meet the
              <br />
              <span className="bg-gradient-to-r from-logo-purple via-rich-purple to-lavender bg-clip-text text-transparent">Vision Behind Aalay</span>
            </motion.h2>

            {/* <motion.p 
              className="text-foreground/80 leading-relaxed text-xl mb-20 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              We believe every space tells a story. Our designs blend timeless elegance with modern functionality, creating interiors that inspire and transform the way you live.
            </motion.p> */}

            {/* Designer Profile */}
            <motion.div 
              className="relative max-w-md mx-auto"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              {/* Designer Image with Artistic Frame */}
              <motion.div 
                className="relative"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Decorative frame elements - Alay Logo Inspired */}
                <motion.div 
                  className="absolute -top-4 -left-4 w-10 h-10 border-l-4 border-t-4 border-logo-purple"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
                  viewport={{ once: true }}
                />
                <motion.div 
                  className="absolute -top-4 -right-4 w-10 h-10 border-r-4 border-t-4 border-rich-purple"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.9, ease: "easeOut" }}
                  viewport={{ once: true }}
                />
                <motion.div 
                  className="absolute -bottom-4 -left-4 w-10 h-10 border-l-4 border-b-4 border-lavender"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1.0, ease: "easeOut" }}
                  viewport={{ once: true }}
                />
                <motion.div 
                  className="absolute -bottom-4 -right-4 w-10 h-10 border-r-4 border-b-4 border-logo-accent"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1.1, ease: "easeOut" }}
                  viewport={{ once: true }}
                />

                {/* Main designer image */}
                <motion.div 
                  className="relative overflow-hidden rounded-lg shadow-2xl"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                   <motion.img
                     src="/founder profile image.jpg"
                     alt="Aalay Interiors Founder"
                     className="w-full h-96 object-cover"
                     whileHover={{ scale: 1.05 }}
                     transition={{ duration: 0.6, ease: "easeOut" }}
                     onError={(e) => {
                       e.currentTarget.src = "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=500&auto=format&fit=crop";
                     }}
                   />
                  
                  {/* Overlay gradient */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1.2, ease: "easeOut" }}
                    viewport={{ once: true }}
                  />
                </motion.div>

                {/* Decorative micro-animations removed */}
              </motion.div>

              {/* Designer Info */}
              <motion.div 
                className="mt-8 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.5, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <motion.h3 
                  className="font-diastema text-2xl md:text-3xl mb-2 italic"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.6, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  ID Kirti Rao

                </motion.h3>
                
                <motion.p 
                  className="text-foreground/70 mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.7, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  Founder and CEO

                </motion.p>

                {/* Quote */}
                <motion.blockquote 
                  className="relative max-w-lg mx-auto"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.8, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  <motion.div 
                    className="text-8xl text-logo-purple/30 absolute -top-6 -left-4"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 1.9, ease: "easeOut" }}
                    viewport={{ once: true }}
                  >
                    "
                  </motion.div>
                  
                  <p className="text-xl italic text-foreground/90 leading-relaxed relative z-10 font-medium">
                  "An interior designer with a keen eye for detail, turning homes into warm, welcoming spaces. Bold yet effortless, I blend aesthetics with comfort to make every interior stylish, inviting, and truly yours."
                  </p>
                  
                  <motion.div 
                    className="text-8xl text-rich-purple/30 absolute -bottom-10 -right-4"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 2.0, ease: "easeOut" }}
                    viewport={{ once: true }}
                  >
                    "
                  </motion.div>
                </motion.blockquote>
              </motion.div>
            </motion.div>
          </div>
        </Container>
      </motion.section>


       {/* Portfolio Gallery */}
       <motion.section 
         className="py-16 md:py-24" 
         id="portfolio"
         initial={{ opacity: 0 }}
         whileInView={{ opacity: 1 }}
         transition={{ duration: 0.8, ease: "easeOut" }}
         viewport={{ once: true, margin: "-100px" }}
       >
        <Container>
           <motion.div 
             className="text-center"
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
             viewport={{ once: true }}
           >
            <h3 className="font-diastema text-3xl md:text-5xl italic">
               Our Portfolio
            </h3>
            <p className="mt-2 text-foreground/70">
              Residential, commercial and hospitality spaces.
            </p>
           </motion.div>
           <motion.div 
             className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
             initial={{ opacity: 0, y: 50 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
             viewport={{ once: true }}
           >
             <motion.div
               className="group relative overflow-hidden rounded-lg"
               initial={{ opacity: 0, scale: 0.8 }}
               whileInView={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
               viewport={{ once: true }}
               whileHover={{ scale: 1.02 }}
             >
               <motion.img
                 className="w-full h-64 object-cover"
                 alt="Modern Living Room Design"
                 src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1200&auto=format&fit=crop"
                 whileHover={{ scale: 1.05 }}
                 onError={(e) => {
                   e.currentTarget.src = "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1200&auto=format&fit=crop";
                 }}
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
               <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/40 backdrop-blur-sm">
                 <span className="text-white font-diastema text-2xl sm:text-3xl font-bold uppercase tracking-wide">Coming soon</span>
               </div>
               <div className="absolute bottom-4 left-4 text-white z-20">
                 <h4 className="font-diastema text-lg italic">Modern Living</h4>
                 <p className="text-sm">Residential Design</p>
          </div>
             </motion.div>

             <motion.div
               className="group relative overflow-hidden rounded-lg"
               initial={{ opacity: 0, scale: 0.8 }}
               whileInView={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
               viewport={{ once: true }}
               whileHover={{ scale: 1.02 }}
             >
               <motion.img
                 className="w-full h-64 object-cover"
                 alt="Luxury Bedroom Design"
                 src="https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=1200&auto=format&fit=crop"
                 whileHover={{ scale: 1.05 }}
                 onError={(e) => {
                   e.currentTarget.src = "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1200&auto=format&fit=crop";
                 }}
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
               <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/40 backdrop-blur-sm">
                 <span className="text-white font-diastema text-2xl sm:text-3xl font-bold uppercase tracking-wide">Coming soon</span>
               </div>
               <div className="absolute bottom-4 left-4 text-white z-20">
                 <h4 className="font-diastema text-lg italic">Luxury Suite</h4>
                 <p className="text-sm">Hospitality Design</p>
               </div>
             </motion.div>

             <motion.div
               className="group relative overflow-hidden rounded-lg"
               initial={{ opacity: 0, scale: 0.8 }}
               whileInView={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
               viewport={{ once: true }}
               whileHover={{ scale: 1.02 }}
             >
               <motion.img
                 className="w-full h-64 object-cover"
                 alt="Contemporary Office Space"
                 src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1200&auto=format&fit=crop"
                 whileHover={{ scale: 1.05 }}
                 onError={(e) => {
                   e.currentTarget.src = "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1200&auto=format&fit=crop";
                 }}
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
               <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/40 backdrop-blur-sm">
                 <span className="text-white font-diastema text-2xl sm:text-3xl font-bold uppercase tracking-wide">Coming soon</span>
               </div>
               <div className="absolute bottom-4 left-4 text-white z-20">
                 <h4 className="font-diastema text-lg italic">Office Space</h4>
                 <p className="text-sm">Commercial Design</p>
          </div>
             </motion.div>
           </motion.div>
        </Container>
       </motion.section>

      {/* Approach banner */}
      <motion.section 
        className="relative isolate overflow-hidden" 
        id="journal"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
      >
         <motion.img
          src="https://images.unsplash.com/photo-1617104424032-b9bd6972d0e4?q=80&w=1092&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
           alt="Light Interior Design Background"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
           initial={{ scale: 1.1 }}
           whileInView={{ scale: 1 }}
           transition={{ duration: 1.2, ease: "easeOut" }}
           viewport={{ once: true }}
           onError={(e) => {
             e.currentTarget.src = "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1900&auto=format&fit=crop";
           }}
        />
        <div className="absolute inset-0 -z-10 bg-background/20" />
        <Container className="py-16 md:py-20">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="uppercase text-sm tracking-[0.4em] text-grey mb-3 font-medium">
            Process
          </div>
            <h2 className="font-diastema text-4xl sm:text-5xl md:text-6xl text-white md:text-black drop-shadow italic mb-4 font-bold">
            Our Approach
          </h2>
            <p className="max-w-xl  mx-auto text-white font-medium text-lg">
              From consultation to completion, we transform your vision into reality.
            </p>
          </motion.div>

          {/* Design Process Steps */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1: Analysis */}
            <motion.div 
              className="text-center bg-black/30 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-logo-purple/30 flex items-center justify-center">
                <span className="text-xl font-extrabold text-white">01</span>
              </div>
              <h3 className="font-diastema text-4xl text-white mb-2 italic font-semibold">Analysis</h3>
              <p className="text-white text-lg font-medium leading-relaxed">
                We analyze your space and understand your lifestyle and preferences.
              </p>
            </motion.div>

            {/* Step 2: Design */}
            <motion.div 
              className="text-center bg-black/30 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-rich-purple/30 flex items-center justify-center">
                <span className="text-xl font-extrabold text-white">02</span>
              </div>
              <h3 className="font-diastema text-4xl text-white mb-2 italic font-semibold">Design</h3>
              <p className="text-white text-lg font-medium leading-relaxed">
                We create detailed plans and 3D visualizations for your space.
              </p>
            </motion.div>

            {/* Step 3: Collaborate */}
            <motion.div 
              className="text-center bg-black/30 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-lavender/30 flex items-center justify-center">
                <span className="text-xl font-extrabold text-white">03</span>
              </div>
              <h3 className="font-diastema text-4xl text-white mb-2 italic font-semibold">Collaborate</h3>
              <p className="text-white text-lg font-medium leading-relaxed">
                We present designs and refine concepts based on your feedback.
              </p>
            </motion.div>

            {/* Step 4: Implement */}
            <motion.div 
              className="text-center bg-black/30 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-warm-gold/30 flex items-center justify-center">
                <span className="text-xl font-extrabold text-white">04</span>
              </div>
              <h3 className="font-diastema text-4xl text-white mb-2 italic font-semibold">Implement</h3>
              <p className="text-white text-lg font-medium leading-relaxed">
                Our craftsmen bring the design to life with quality materials.
              </p>
            </motion.div>
          </div>
        </Container>
      </motion.section>

    </main>
  );
}
