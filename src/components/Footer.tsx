import { ArrowUpRight, Mail, MapPin, Phone, ShieldCheck } from "lucide-react";
import { brand, whatsappHref } from "../config";
import type { LegalDoc } from "../types";
import { WhatsAppIcon } from "./WhatsAppIcon";

type FooterProps = {
  onOpenLegal: (doc: LegalDoc) => void;
};

export function Footer({ onOpenLegal }: FooterProps) {
  return (
    <footer className="bg-brand-900 text-white">
      <div className="container-page py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_0.9fr_0.9fr]">
          <div className="md:col-span-2 lg:col-span-1">
            <a href="#inicio" className="flex items-center gap-2.5" aria-label={`${brand.name}, ir al inicio`}>
              <span className="relative grid h-10 w-10 place-items-center rounded-xl bg-white/10 text-accent-300">
                <ShieldCheck className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="leading-tight">
                <span className="block text-base font-bold tracking-tight">{brand.name}</span>
                <span className="block text-[0.6rem] font-bold uppercase tracking-[0.18em] text-white/50">
                  {brand.role}
                </span>
              </span>
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60">
              Asesoría de seguros humana, cercana y personalizada para proteger a tu
              familia, tu patrimonio y tu negocio en el Eje Cafetero y toda Colombia.
            </p>
            <p className="mt-5 max-w-sm text-xs leading-relaxed text-white/40">
              En alianza con {brand.agency}. La emisión de pólizas se realiza a través de
              la agencia aliada.
            </p>
          </div>

          <div>
            <h3 className="text-[0.68rem] font-bold uppercase tracking-[0.16em] text-white/45">
              Contacto
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={brand.phoneHref}
                  className="flex items-center gap-2.5 text-white/70 transition-colors hover:text-white"
                >
                  <Phone className="h-4 w-4 text-accent-300" aria-hidden="true" />
                  {brand.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${brand.email}`}
                  className="flex items-center gap-2.5 text-white/70 transition-colors hover:text-white"
                >
                  <Mail className="h-4 w-4 text-accent-300" aria-hidden="true" />
                  {brand.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-white/70">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent-300" aria-hidden="true" />
                <span>{brand.coverageLong}</span>
              </li>
            </ul>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2.5 text-xs font-semibold text-white transition hover:border-white/30 hover:bg-white/10"
            >
              <WhatsAppIcon className="h-4 w-4 text-[#25d366]" />
              Escríbeme por WhatsApp
            </a>
          </div>

          <div>
            <h3 className="text-[0.68rem] font-bold uppercase tracking-[0.16em] text-white/45">
              Información legal
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <button
                  type="button"
                  onClick={() => onOpenLegal("privacy")}
                  className="text-left text-white/70 transition-colors hover:text-white"
                >
                  Política de Protección de Datos Personales (Habeas Data)
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenLegal("terms")}
                  className="text-left text-white/70 transition-colors hover:text-white"
                >
                  Términos y Condiciones
                </button>
              </li>
              <li>
                <a
                  href="#servicios"
                  className="inline-flex items-center gap-1 text-white/70 transition-colors hover:text-white"
                >
                  Servicios
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a
                  href="#sobre-mi"
                  className="inline-flex items-center gap-1 text-white/70 transition-colors hover:text-white"
                >
                  Sobre mí
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col gap-2 py-5 text-center text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p>
            © {new Date().getFullYear()} {brand.name}. Todos los derechos reservados.
          </p>
          <p>Asesoría de seguros · Eje Cafetero, Colombia</p>
        </div>
      </div>
    </footer>
  );
}
