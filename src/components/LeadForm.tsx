import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import type { FormEvent } from "react";
import {
  CheckCircle2,
  ChevronDown,
  Loader2,
  Lock,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { brand } from "../config";
import { serviceOptions } from "../data/services";
import type { LegalDoc } from "../types";
import { Reveal } from "./Reveal";
import { WhatsAppIcon } from "./WhatsAppIcon";

type LeadFormProps = {
  selectedService: string;
  quoteNonce: number;
  onOpenLegal: (doc: LegalDoc) => void;
};

type FormValues = {
  name: string;
  phone: string;
  email: string;
  interest: string;
  message: string;
  consent: boolean;
};

type FieldName = "name" | "phone" | "email" | "interest" | "consent";
type FormErrors = Partial<Record<FieldName, string>>;

const emptyValues: FormValues = {
  name: "",
  phone: "",
  email: "",
  interest: "",
  message: "",
  consent: false,
};

const fieldIds: Record<FieldName, string> = {
  name: "lead-nombre",
  phone: "lead-celular",
  email: "lead-correo",
  interest: "lead-interes",
  consent: "lead-consent",
};

const benefits = [
  "Comparativo entre SURA, Allianz, HDI, SBS y La Equidad",
  "Asesoría personalizada, sin costo y sin compromiso",
  "Te contacto por WhatsApp o correo en menos de 24 horas",
];

export function LeadForm({ selectedService, quoteNonce, onOpenLegal }: LeadFormProps) {
  const [values, setValues] = useState<FormValues>(emptyValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [submitted, setSubmitted] = useState<{ name: string; interest: string } | null>(
    null,
  );
  const timer = useRef<number | null>(null);

  useEffect(() => {
    if (!selectedService) return;
    setValues((prev) => ({ ...prev, interest: selectedService }));
    clearError("interest");
    setStatus((current) => (current === "success" ? "idle" : current));
    setSubmitted(null);
  }, [selectedService, quoteNonce]);

  useEffect(() => {
    return () => {
      if (timer.current) window.clearTimeout(timer.current);
    };
  }, []);

  function clearError(field: FieldName) {
    setErrors((prev) => {
      if (!prev[field]) return prev;
      const next = { ...prev };
      delete next[field];
      return next;
    });
  }

  function validate() {
    const next: FormErrors = {};
    const digits = values.phone.replace(/\D/g, "");
    const isLocalMobile = digits.length === 10 && digits.startsWith("3");
    const isInternational = digits.length === 12 && digits.startsWith("573");

    if (values.name.trim().length < 3) {
      next.name = "Escribe tu nombre completo.";
    }
    if (!isLocalMobile && !isInternational) {
      next.phone = "Ingresa un celular válido de 10 dígitos (ej. 322 671 7084).";
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim())) {
      next.email = "Ingresa un correo electrónico válido.";
    }
    if (!values.interest) {
      next.interest = "Selecciona el seguro de tu interés.";
    }
    if (!values.consent) {
      next.consent = "Debes autorizar el tratamiento de tus datos.";
    }
    return next;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);

    const firstError = (Object.keys(nextErrors) as FieldName[])[0];
    if (firstError) {
      document.getElementById(fieldIds[firstError])?.focus();
      return;
    }

    setStatus("submitting");
    timer.current = window.setTimeout(() => {
      setSubmitted({
        name: values.name.trim().split(/\s+/)[0],
        interest: values.interest,
      });
      setStatus("success");
    }, 900);
  }

  function resetForm() {
    setValues(emptyValues);
    setErrors({});
    setSubmitted(null);
    setStatus("idle");
  }

  const successWhatsapp = `https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(
    `Hola ${brand.firstName}, acabo de enviar mi solicitud para ${
      submitted?.interest ?? "un seguro"
    }. Quiero agendar mi asesoría.`,
  )}`;

  return (
    <section id="contacto" className="relative overflow-hidden bg-brand py-20 sm:py-24">
      <div className="dark-grid absolute inset-0" aria-hidden="true" />
      <div
        className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-accent-500/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-brand-400/20 blur-3xl"
        aria-hidden="true"
      />

      <div className="container-page relative grid items-start gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
        <Reveal>
          <span className="eyebrow-dark">Cotización gratis</span>
          <h2 className="mt-5 text-3xl font-bold leading-[1.14] tracking-tight text-white sm:text-4xl">
            ¿Quieres mejorar el precio de tu póliza actual o necesitas una cotización
            desde cero?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/70 sm:text-lg">
            Déjame tus datos y te enviaré un comparativo personalizado en menos de 24
            horas.
          </p>

          <ul className="mt-8 space-y-3.5">
            {benefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-3 text-sm text-white/80">
                <CheckCircle2
                  className="mt-0.5 h-5 w-5 shrink-0 text-accent-300"
                  aria-hidden="true"
                />
                <span className="leading-relaxed">{benefit}</span>
              </li>
            ))}
          </ul>

          <div className="mt-9 space-y-3 border-t border-white/10 pt-7">
            <a
              href={brand.phoneHref}
              className="flex items-center gap-3 text-sm font-medium text-white/80 transition-colors hover:text-white"
            >
              <Phone className="h-4 w-4 text-accent-300" aria-hidden="true" />
              {brand.phoneDisplay}
            </a>
            <a
              href={`mailto:${brand.email}`}
              className="flex items-center gap-3 text-sm font-medium text-white/80 transition-colors hover:text-white"
            >
              <Mail className="h-4 w-4 text-accent-300" aria-hidden="true" />
              {brand.email}
            </a>
            <p className="flex items-center gap-3 text-sm font-medium text-white/80">
              <MapPin className="h-4 w-4 shrink-0 text-accent-300" aria-hidden="true" />
              {brand.coverageLong}
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="rounded-[2rem] bg-white p-5 shadow-card sm:p-8">
            {status === "success" ? (
              <motion.div
                role="status"
                aria-live="polite"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="flex min-h-[32rem] flex-col items-center justify-center text-center"
              >
                <span className="grid h-16 w-16 place-items-center rounded-full bg-accent-100 text-accent-700">
                  <CheckCircle2 className="h-8 w-8" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-2xl font-bold leading-snug text-brand">
                  ¡Gracias! Me comunicaré contigo a la brevedad
                </h3>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
                  {submitted?.name ? `${submitted.name}, recibí tu solicitud` : "Recibí tu solicitud"}{" "}
                  para <strong className="font-semibold text-brand">{submitted?.interest}</strong>.
                  Te escribiré en menos de 24 horas para coordinar tu asesoría.
                </p>
                <a
                  href={successWhatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-accent mt-7"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                  Adelantar por WhatsApp
                </a>
                <button
                  type="button"
                  onClick={resetForm}
                  className="mt-4 text-sm font-semibold text-muted underline decoration-line underline-offset-4 transition-colors hover:text-brand"
                >
                  Enviar otra solicitud
                </button>
              </motion.div>
            ) : (
              <>
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-brand">Cuéntame qué necesitas</h3>
                  <p className="mt-1 text-sm text-muted">
                    Respondo personalmente en menos de 24 horas.
                  </p>
                </div>

                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  <div>
                    <label htmlFor={fieldIds.name} className="field-label">
                      Nombre completo
                    </label>
                    <input
                      id={fieldIds.name}
                      name="name"
                      type="text"
                      autoComplete="name"
                      placeholder="Ej. Ana María López"
                      value={values.name}
                      onChange={(event) => {
                        setValues((prev) => ({ ...prev, name: event.target.value }));
                        clearError("name");
                      }}
                      className={`field ${errors.name ? "field-invalid" : ""}`}
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={errors.name ? "error-nombre" : undefined}
                    />
                    {errors.name && (
                      <p id="error-nombre" className="mt-1.5 text-xs font-medium text-red-600">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor={fieldIds.phone} className="field-label">
                        Celular / WhatsApp
                      </label>
                      <input
                        id={fieldIds.phone}
                        name="phone"
                        type="tel"
                        inputMode="tel"
                        autoComplete="tel"
                        placeholder="322 671 7084"
                        value={values.phone}
                        onChange={(event) => {
                          setValues((prev) => ({ ...prev, phone: event.target.value }));
                          clearError("phone");
                        }}
                        className={`field ${errors.phone ? "field-invalid" : ""}`}
                        aria-invalid={Boolean(errors.phone)}
                        aria-describedby={errors.phone ? "error-celular" : undefined}
                      />
                      {errors.phone && (
                        <p
                          id="error-celular"
                          className="mt-1.5 text-xs font-medium text-red-600"
                        >
                          {errors.phone}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor={fieldIds.email} className="field-label">
                        Correo electrónico
                      </label>
                      <input
                        id={fieldIds.email}
                        name="email"
                        type="email"
                        autoComplete="email"
                        placeholder="tu@correo.com"
                        value={values.email}
                        onChange={(event) => {
                          setValues((prev) => ({ ...prev, email: event.target.value }));
                          clearError("email");
                        }}
                        className={`field ${errors.email ? "field-invalid" : ""}`}
                        aria-invalid={Boolean(errors.email)}
                        aria-describedby={errors.email ? "error-correo" : undefined}
                      />
                      {errors.email && (
                        <p
                          id="error-correo"
                          className="mt-1.5 text-xs font-medium text-red-600"
                        >
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor={fieldIds.interest} className="field-label">
                      Seguro de interés
                    </label>
                    <div className="relative">
                      <select
                        id={fieldIds.interest}
                        name="interest"
                        value={values.interest}
                        onChange={(event) => {
                          setValues((prev) => ({
                            ...prev,
                            interest: event.target.value,
                          }));
                          clearError("interest");
                        }}
                        className={`field appearance-none pr-10 ${
                          errors.interest ? "field-invalid" : ""
                        }`}
                        aria-invalid={Boolean(errors.interest)}
                        aria-describedby={errors.interest ? "error-interes" : undefined}
                      >
                        <option value="">Selecciona una opción</option>
                        {serviceOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                      <ChevronDown
                        className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted"
                        aria-hidden="true"
                      />
                    </div>
                    {errors.interest && (
                      <p
                        id="error-interes"
                        className="mt-1.5 text-xs font-medium text-red-600"
                      >
                        {errors.interest}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="lead-mensaje" className="field-label">
                      Mensaje / Comentarios{" "}
                      <span className="font-normal text-muted">(opcional)</span>
                    </label>
                    <textarea
                      id="lead-mensaje"
                      name="message"
                      rows={4}
                      maxLength={500}
                      placeholder="Cuéntame brevemente qué necesitas o si tienes una póliza actual."
                      value={values.message}
                      onChange={(event) =>
                        setValues((prev) => ({ ...prev, message: event.target.value }))
                      }
                      className="field min-h-[6.5rem] resize-y"
                    />
                  </div>

                  <div>
                    <div className="flex items-start gap-3">
                      <input
                        id={fieldIds.consent}
                        name="consent"
                        type="checkbox"
                        checked={values.consent}
                        onChange={(event) => {
                          setValues((prev) => ({
                            ...prev,
                            consent: event.target.checked,
                          }));
                          clearError("consent");
                        }}
                        className="mt-0.5 h-4 w-4 shrink-0 rounded border-line accent-accent-500"
                        aria-invalid={Boolean(errors.consent)}
                        aria-describedby={errors.consent ? "error-consent" : undefined}
                      />
                      <div className="text-xs leading-relaxed text-muted">
                        <label htmlFor={fieldIds.consent} className="cursor-pointer">
                          Autorizo el tratamiento de mis datos personales conforme a la
                        </label>{" "}
                        <button
                          type="button"
                          onClick={() => onOpenLegal("privacy")}
                          className="font-semibold text-brand underline decoration-accent-300 underline-offset-2 hover:text-accent-700"
                        >
                          política de privacidad
                        </button>{" "}
                        y los{" "}
                        <button
                          type="button"
                          onClick={() => onOpenLegal("terms")}
                          className="font-semibold text-brand underline decoration-accent-300 underline-offset-2 hover:text-accent-700"
                        >
                          términos y condiciones
                        </button>
                        .
                      </div>
                    </div>
                    {errors.consent && (
                      <p
                        id="error-consent"
                        className="mt-1.5 text-xs font-medium text-red-600"
                      >
                        {errors.consent}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="btn-accent w-full"
                  >
                    {status === "submitting" ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                        Enviando solicitud...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" aria-hidden="true" />
                        Enviar solicitud
                      </>
                    )}
                  </button>

                  <p className="flex items-center justify-center gap-1.5 text-center text-[0.68rem] text-muted">
                    <Lock className="h-3 w-3" aria-hidden="true" />
                    Tus datos se usan solo para gestionar tu asesoría.
                  </p>
                </form>
              </>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
