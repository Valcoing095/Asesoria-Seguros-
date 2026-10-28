import { BadgeCheck, HeartHandshake, Handshake, Quote, Scale, ShieldCheck } from "lucide-react";
import { brand } from "../config";
import { Reveal } from "./Reveal";

const pillars = [
  {
    icon: HeartHandshake,
    title: "Te escucho primero",
    description:
      "Entiendo tus necesidades reales antes de recomendarte cualquier cobertura.",
  },
  {
    icon: Scale,
    title: "Comparo por ti",
    description:
      "Reviso varias aseguradoras para encontrar la mejor relación precio-cobertura.",
  },
  {
    icon: ShieldCheck,
    title: "Te acompaño siempre",
    description:
      "Estoy contigo en la cotización, la emisión y cuando necesitas usar tu seguro.",
  },
];

export function About() {
  return (
    <section id="sobre-mi" className="relative overflow-hidden bg-white py-20 sm:py-24">
      <div
        className="absolute -right-24 top-10 h-72 w-72 rounded-full bg-accent-50 blur-3xl"
        aria-hidden="true"
      />
      <div className="container-page relative grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16">
        <Reveal>
          <span className="eyebrow">Sobre mí</span>
          <h2 className="section-title mt-4">
            Hola, soy {brand.firstName}, tu consultora aliada en seguros
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
            Mi enfoque no es venderte una póliza, sino entender tus necesidades reales y
            acompañarte en cada momento. Creo en una asesoría cercana, transparente y sin
            letra menuda.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            Trabajo en alianza con <strong className="font-semibold text-brand">{brand.agency}</strong>,
            lo que me permite poner a tu disposición el respaldo y portafolio de las
            compañías líderes del país como SURA, Allianz, HDI, SBS y La Equidad,
            garantizándote la mejor opción al precio justo.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div key={pillar.title} className="rounded-2xl border border-line bg-cloud p-4">
                  <span className="grid h-9 w-9 place-items-center rounded-xl bg-white text-accent-600 shadow-sm">
                    <Icon className="h-4.5 w-4.5" aria-hidden="true" />
                  </span>
                  <p className="mt-3 text-sm font-bold text-brand">{pillar.title}</p>
                  <p className="mt-1 text-xs leading-relaxed text-muted">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </Reveal>

        <Reveal delay={0.1} className="relative">
          <div className="relative overflow-hidden rounded-[2rem] bg-brand p-7 text-white shadow-card sm:p-9">
            <div
              className="absolute -right-16 -top-16 h-48 w-48 rounded-full border border-white/10"
              aria-hidden="true"
            />
            <div
              className="absolute -right-8 -top-8 h-32 w-32 rounded-full border border-white/10"
              aria-hidden="true"
            />
            <div
              className="absolute -bottom-20 -left-16 h-48 w-48 rounded-full bg-accent-400/15 blur-2xl"
              aria-hidden="true"
            />

            <Quote className="relative h-8 w-8 text-accent-300/80" aria-hidden="true" />
            <blockquote className="relative mt-4 text-xl font-semibold leading-relaxed sm:text-2xl">
              “Mi trabajo no termina cuando firmas la póliza: empieza ahí. Estoy para
              acompañarte cuando de verdad me necesitas.”
            </blockquote>

            <div className="relative mt-7 flex items-center gap-3">
              <img
                src={brand.photo}
                alt=""
                className="h-12 w-12 rounded-full object-cover object-[center_22%] ring-2 ring-white/20"
              />
              <div>
                <p className="text-sm font-bold">{brand.name}</p>
                <p className="text-xs text-white/60">
                  {brand.role} · {brand.city}
                </p>
              </div>
              <BadgeCheck className="ml-auto h-5 w-5 text-accent-300" aria-hidden="true" />
            </div>
          </div>

          <div className="relative mt-4 rounded-3xl border border-line bg-white p-6 shadow-soft">
            <div className="flex items-start gap-3">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-accent-50 text-accent-600">
                <Handshake className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <p className="text-[0.62rem] font-bold uppercase tracking-[0.16em] text-muted">
                  En alianza con
                </p>
                <p className="mt-1 text-sm font-bold text-brand">
                  Sano y Salvo Agencia de Seguros
                </p>
                <p className="text-xs text-muted">Grupo Caminos</p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Una alianza que me da acceso al portafolio de las compañías líderes para
              comparar coberturas, precios y beneficios pensando siempre en ti.
            </p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {brand.insurers.map((insurer) => (
                <span
                  key={insurer}
                  className="rounded-full border border-line bg-cloud px-2.5 py-1 text-[0.65rem] font-semibold text-brand-500"
                >
                  {insurer}
                </span>
              ))}
            </div>
          </div>

        </Reveal>
      </div>
    </section>
  );
}
