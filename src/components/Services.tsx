import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight, Check, ChevronDown, HelpCircle } from "lucide-react";
import { services } from "../data/services";
import { Reveal } from "./Reveal";

type ServicesProps = {
  onQuote: (service: string) => void;
};

export function Services({ onQuote }: ServicesProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section id="servicios" className="bg-cloud py-20 sm:py-24">
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Servicios</span>
          <h2 className="section-title mt-4">Protección para cada etapa de tu vida</h2>
          <p className="section-copy">
            No vendo pólizas por vender. Analizo tu caso, comparo opciones reales y te
            acompaño para que elijas la cobertura que de verdad necesitas.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isOpen = openId === service.id;

            return (
              <Reveal
                key={service.id}
                delay={(index % 3) * 0.06}
                className="h-full"
              >
                <article className="group flex h-full flex-col rounded-3xl border border-line bg-white p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-card">
                  <div className="flex items-start justify-between gap-4">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-50 text-brand transition-colors duration-300 group-hover:bg-brand group-hover:text-white">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <span className="text-xs font-bold tracking-wider text-muted/45">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="mt-5 text-lg font-bold leading-snug text-brand">
                    {service.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                    {service.description}
                  </p>

                  <button
                    type="button"
                    onClick={() => setOpenId(isOpen ? null : service.id)}
                    aria-expanded={isOpen}
                    aria-controls={`detalle-${service.id}`}
                    className="mt-5 flex items-center justify-between border-t border-line pt-4 text-sm font-semibold text-brand transition-colors hover:text-accent-700"
                  >
                    {isOpen ? "Ocultar coberturas" : "Ver coberturas"}
                    <ChevronDown
                      className={`h-4 w-4 text-muted transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      aria-hidden="true"
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`detalle-${service.id}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <ul className="mt-4 space-y-2.5">
                          {service.details.map((detail) => (
                            <li
                              key={detail}
                              className="flex items-start gap-2.5 text-sm leading-snug text-muted"
                            >
                              <span className="mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full bg-accent-100 text-accent-700">
                                <Check className="h-2.5 w-2.5" aria-hidden="true" />
                              </span>
                              {detail}
                            </li>
                          ))}
                        </ul>
                        <button
                          type="button"
                          onClick={() => onQuote(service.option)}
                          className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-50 px-4 py-2.5 text-sm font-semibold text-brand transition-colors hover:bg-brand hover:text-white"
                        >
                          Cotizar {service.title}
                          <ArrowRight className="h-4 w-4" aria-hidden="true" />
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </article>
              </Reveal>
            );
          })}

          <Reveal delay={0.12} className="h-full">
            <article className="relative flex h-full flex-col overflow-hidden rounded-3xl bg-brand p-6 text-white shadow-card">
              <div
                className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-accent-400/20 blur-2xl"
                aria-hidden="true"
              />
              <div
                className="absolute -bottom-12 -left-8 h-32 w-32 rounded-full bg-brand-400/30 blur-2xl"
                aria-hidden="true"
              />
              <span className="relative grid h-12 w-12 place-items-center rounded-2xl bg-white/10 text-accent-300">
                <HelpCircle className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="relative mt-5 text-lg font-bold leading-snug">
                ¿No sabes qué seguro necesitas?
              </h3>
              <p className="relative mt-2 flex-1 text-sm leading-relaxed text-white/70">
                Cuéntame tu caso y te ayudo a identificar la protección que mejor se
                ajusta a tu vida y a tu presupuesto.
              </p>
              <button
                type="button"
                onClick={() => onQuote("Aún no estoy seguro / otro")}
                className="relative mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-accent-500 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-600"
              >
                Recibir asesoría
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
