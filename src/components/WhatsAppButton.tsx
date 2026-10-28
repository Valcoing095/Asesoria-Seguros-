import { whatsappHref } from "../config";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function WhatsAppButton() {
  return (
    <a
      href={whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribir por WhatsApp y agendar una asesoría"
      className="group fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-whatsapp text-white shadow-[0_18px_38px_-12px_rgba(37,211,102,0.75)] transition-transform duration-200 hover:scale-105 sm:bottom-6 sm:right-6"
    >
      <span
        className="absolute inset-0 animate-pulse-ring rounded-full bg-whatsapp"
        aria-hidden="true"
      />
      <WhatsAppIcon className="relative h-7 w-7" />
      <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-lg bg-brand px-3 py-1.5 text-xs font-semibold text-white opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100 lg:block">
        ¿Hablamos?
      </span>
    </a>
  );
}
