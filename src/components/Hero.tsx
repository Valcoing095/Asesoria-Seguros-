import { motion } from "framer-motion";
import { ArrowRight, Check, Clock, MapPin, ShieldCheck } from "lucide-react";
import { brand, whatsappHref } from "../config";
import { WhatsAppIcon } from "./WhatsAppIcon";

const trust = [
  "Asesoría sin costo",
  "Respuesta en menos de 24 h",
  "Comparativo entre aseguradoras",
];

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-cloud pb-20 pt-28 sm:pt-32 lg:pb-28"
    >
      <div className="hero-grid absolute inset-0" aria-hidden="true" />
      <div
        className="absolute -left-28 top-36 h-72 w-72 rounded-full bg-accent-100/70 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute -right-24 top-24 h-80 w-80 rounded-full bg-brand-100/70 blur-3xl"
        aria-hidden="true"
      />

      <div className="container-page relative grid items-center gap-14 lg:grid-cols-[1.06fr_0.94fr] lg:gap-12">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-500" aria-hidden="true" />
            Asesoría de seguros en el Eje Cafetero
          </span>

          <h1 className="mt-6 text-[2.35rem] font-extrabold leading-[1.05] tracking-[-0.035em] text-brand sm:text-5xl lg:text-[3.65rem]">
            Protejo <span className="highlight text-accent-700">lo que más amas</span> con el
            respaldo de las mejores aseguradoras
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            Asesoría experta, humana y personalizada en seguros de Auto, Salud, Vida y
            Empresariales sin pagar de más.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href="#contacto" className="btn-primary group">
              Solicitar asesoría gratis
              <ArrowRight
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline group"
            >
              <WhatsAppIcon className="h-5 w-5 text-[#25d366]" />
              Escríbeme por WhatsApp
            </a>
          </div>

          <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-2.5">
            {trust.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 text-xs font-semibold text-muted sm:text-sm"
              >
                <span className="grid h-4.5 w-4.5 place-items-center rounded-full bg-accent-100 text-accent-700">
                  <Check className="h-3 w-3" aria-hidden="true" />
                </span>
                {item}
              </li>
            ))}
          </ul>

          <p className="mt-6 flex items-center gap-2 text-xs font-medium text-muted">
            <MapPin className="h-4 w-4 text-brand-400" aria-hidden="true" />
            {brand.coverageLong}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 26, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.75, delay: 0.12, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-[25rem] lg:max-w-none"
        >
          <div
            className="absolute -inset-4 rounded-[2.75rem] bg-gradient-to-br from-accent-200/70 via-white to-brand-100/60 blur-2xl"
            aria-hidden="true"
          />
          <div className="relative rounded-[2.25rem] border border-white bg-white/85 p-2.5 shadow-card backdrop-blur">
            <div className="relative overflow-hidden rounded-[1.8rem] bg-brand-100">
              <img
                src={brand.photo}
                alt={`${brand.name}, ${brand.role} en el Eje Cafetero`}
                className="aspect-[4/5] w-full object-cover object-[center_22%]"
                fetchPriority="high"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-brand/35 via-transparent to-transparent"
                aria-hidden="true"
              />
              <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 text-[0.65rem] font-bold uppercase tracking-wider text-brand shadow-sm backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-500" aria-hidden="true" />
                Asesoría profesional
              </div>
            </div>
          </div>

          <div className="absolute -right-2 top-10 hidden items-center gap-2.5 rounded-2xl border border-line bg-white/95 px-3.5 py-3 shadow-float backdrop-blur sm:flex lg:-right-6">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-accent-50 text-accent-600">
              <ShieldCheck className="h-5 w-5" aria-hidden="true" />
            </span>
            <div>
              <p className="text-xs font-bold text-brand">Respaldo real</p>
              <p className="text-[0.65rem] text-muted">SURA · Allianz · HDI +2</p>
            </div>
          </div>

          <div className="absolute -bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-2.5 rounded-2xl border border-line bg-white/95 px-4 py-3 shadow-float backdrop-blur sm:left-5 sm:translate-x-0">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand text-white">
              <Clock className="h-4.5 w-4.5" aria-hidden="true" />
            </span>
            <div className="pr-1">
              <p className="whitespace-nowrap text-xs font-bold text-brand">
                Cotización en 24 h
              </p>
              <p className="whitespace-nowrap text-[0.65rem] text-muted">
                Personalizada y sin costo
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
