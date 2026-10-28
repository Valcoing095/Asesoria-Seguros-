import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import { brand } from "../config";
import type { LegalDoc } from "../types";

type LegalModalProps = {
  doc: LegalDoc | null;
  onClose: () => void;
};

function TermsContent() {
  return (
    <div className="legal-prose">
      <h4>1. Información del sitio</h4>
      <p>
        Este sitio web tiene carácter informativo y presenta los servicios de asesoría
        en seguros de {brand.name}, {brand.role.toLowerCase()} en el Eje Cafetero
        colombiano.
      </p>

      <h4>2. Cotizaciones y solicitudes</h4>
      <p>
        Las solicitudes enviadas a través del formulario no constituyen una aceptación
        del riesgo ni una póliza. Toda cotización está sujeta al estudio de la
        aseguradora, a la declaración de asegurabilidad y a las condiciones generales
        del producto.
      </p>

      <h4>3. Alianza comercial</h4>
      <p>
        La asesoría se presta en alianza con {brand.agency}. La emisión de las pólizas y
        la asunción de los riesgos corresponde a las compañías aseguradoras del
        portafolio.
      </p>

      <h4>4. Propiedad intelectual</h4>
      <p>
        Los contenidos, textos, marcas y elementos gráficos de este sitio son de uso
        informativo y no pueden ser reproducidos sin autorización previa.
      </p>

      <h4>5. Modificaciones</h4>
      <p>
        Estos términos pueden actualizarse para reflejar cambios normativos o
        comerciales. La versión vigente será la publicada en este sitio.
      </p>

      <h4>6. Contacto</h4>
      <p>
        Para cualquier inquietud escriba a {brand.email} o comuníquese al{" "}
        {brand.phoneDisplay}.
      </p>
    </div>
  );
}

function PrivacyContent() {
  return (
    <div className="legal-prose">
      <h4>1. Responsable del tratamiento</h4>
      <p>
        {brand.name}, {brand.role.toLowerCase()}, con correo electrónico{" "}
        {brand.email} y teléfono {brand.phoneDisplay}.
      </p>

      <h4>2. Datos que recolectamos</h4>
      <p>
        A través del formulario de contacto podemos recolectar tu nombre completo,
        número de celular, correo electrónico, seguro de interés y los comentarios que
        decidas compartir.
      </p>

      <h4>3. Finalidad del tratamiento</h4>
      <ul>
        <li>Atender tu solicitud de asesoría o cotización.</li>
        <li>Elaborar comparativos y propuestas personalizadas.</li>
        <li>Contactarte por WhatsApp, correo electrónico o llamada telefónica.</li>
        <li>Realizar seguimiento a la solicitud y a la relación comercial.</li>
      </ul>

      <h4>4. Autorización</h4>
      <p>
        Al marcar la casilla de autorización, otorgas tu consentimiento previo, expreso e
        informado para el tratamiento de tus datos personales conforme a esta política.
      </p>

      <h4>5. Tus derechos</h4>
      <p>
        Puedes conocer, actualizar, rectificar, suprimir tus datos, revocar la
        autorización o solicitar prueba de la misma escribiendo a {brand.email}. Estos
        derechos se ejercen conforme a la Ley 1581 de 2012 y al Decreto 1377 de 2013 de
        la República de Colombia.
      </p>

      <h4>6. Seguridad y conservación</h4>
      <p>
        Adoptamos medidas razonables para proteger la información y no compartimos tus
        datos con terceros ajenos a la gestión de tu solicitud. La información se
        conservará mientras exista una relación comercial o hasta que solicites su
        supresión.
      </p>

      <h4>7. Vigencia</h4>
      <p>
        Esta política rige desde su publicación y podrá actualizarse cuando cambien las
        condiciones del tratamiento o la normativa aplicable.
      </p>
    </div>
  );
}

export function LegalModal({ doc, onClose }: LegalModalProps) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!doc) return;
    const previousOverflow = document.body.style.overflow;
    const previousFocus =
      document.activeElement instanceof HTMLElement ? document.activeElement : null;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    const focusTimer = window.setTimeout(() => closeRef.current?.focus(), 50);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
      window.clearTimeout(focusTimer);
      previousFocus?.focus();
    };
  }, [doc, onClose]);

  if (!doc) return null;

  const title =
    doc === "privacy"
      ? "Política de Protección de Datos Personales (Habeas Data)"
      : "Términos y Condiciones";

  return (
    <div
      className="fixed inset-0 z-[60] flex items-end justify-center bg-brand-900/65 backdrop-blur-sm sm:items-center sm:p-6"
      role="presentation"
      onClick={onClose}
    >
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby="legal-title"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.28, ease: "easeOut" }}
        onClick={(event) => event.stopPropagation()}
        className="relative flex max-h-[92vh] w-full max-w-2xl flex-col overflow-hidden rounded-t-3xl bg-white shadow-card sm:rounded-3xl"
      >
        <div className="flex items-start justify-between gap-4 border-b border-line px-6 py-5">
          <div>
            <span className="eyebrow">Información legal</span>
            <h2 id="legal-title" className="mt-2 text-xl font-bold text-brand">
              {title}
            </h2>
            <p className="mt-1 text-xs text-muted">Última actualización: octubre de 2026</p>
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Cerrar"
            className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-line text-muted transition hover:bg-cloud hover:text-brand"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>

        <div className="overflow-y-auto px-6 py-5">
          {doc === "privacy" ? <PrivacyContent /> : <TermsContent />}
        </div>

        <div className="flex justify-end border-t border-line px-6 py-4">
          <button
            type="button"
            onClick={onClose}
            className="btn-primary px-5 py-2.5 text-sm"
          >
            Entendido
          </button>
        </div>
      </motion.div>
    </div>
  );
}
