import { MotionConfig } from "framer-motion";
import { useCallback, useState } from "react";
import { About } from "./components/About";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { LeadForm } from "./components/LeadForm";
import { LegalModal } from "./components/LegalModal";
import { Navbar } from "./components/Navbar";
import { Services } from "./components/Services";
import { TrustBar } from "./components/TrustBar";
import { WhatsAppButton } from "./components/WhatsAppButton";
import type { LegalDoc } from "./types";

export default function App() {
  const [legalDoc, setLegalDoc] = useState<LegalDoc | null>(null);
  const [quote, setQuote] = useState({ service: "", nonce: 0 });

  const requestQuote = useCallback((service: string) => {
    setQuote((previous) => ({ service, nonce: previous.nonce + 1 }));
    window.setTimeout(() => {
      document.getElementById("contacto")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 60);
  }, []);

  const closeLegal = useCallback(() => setLegalDoc(null), []);

  return (
    <MotionConfig reducedMotion="user">
      <a
        href="#contenido"
        className="sr-only z-[70] rounded-full bg-brand px-4 py-2 text-sm font-semibold text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Saltar al contenido
      </a>

      <Navbar />
      <main id="contenido">
        <Hero />
        <TrustBar />
        <Services onQuote={requestQuote} />
        <About />
        <LeadForm
          selectedService={quote.service}
          quoteNonce={quote.nonce}
          onOpenLegal={setLegalDoc}
        />
      </main>
      <Footer onOpenLegal={setLegalDoc} />
      <WhatsAppButton />
      <LegalModal doc={legalDoc} onClose={closeLegal} />
    </MotionConfig>
  );
}
