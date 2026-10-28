import { ShieldCheck } from "lucide-react";
import { brand } from "../config";

export function TrustBar() {
  return (
    <section aria-label="Aseguradoras aliadas" className="border-y border-line bg-white">
      <div className="container-page flex flex-col items-center gap-5 py-7 sm:flex-row sm:justify-between">
        <div className="flex items-center gap-2.5">
          <ShieldCheck className="h-4 w-4 text-accent-600" aria-hidden="true" />
          <p className="text-[0.68rem] font-bold uppercase tracking-[0.17em] text-muted">
            Portafolio con las aseguradoras líderes del país
          </p>
        </div>
        <ul className="flex flex-wrap items-center justify-center gap-x-7 gap-y-3">
          {brand.insurers.map((insurer) => (
            <li
              key={insurer}
              className="text-sm font-bold tracking-tight text-brand-500 transition-colors hover:text-brand"
            >
              {insurer}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
