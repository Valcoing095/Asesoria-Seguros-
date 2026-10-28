import {
  Building2,
  Car,
  HeartPulse,
  Home,
  ShieldCheck,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type Service = {
  id: string;
  title: string;
  option: string;
  description: string;
  details: string[];
  icon: LucideIcon;
};

export const services: Service[] = [
  {
    id: "auto",
    title: "Auto y Moto",
    option: "Seguro de Auto y Moto",
    description:
      "Cobertura total ante choques, hurtos y asistencia en carretera 24/7.",
    details: [
      "Responsabilidad civil y daños a terceros",
      "Pérdida total por hurto o accidente",
      "Asistencia en carretera, grúa y conductor elegido",
      "Vehículo de reemplazo opcional",
    ],
    icon: Car,
  },
  {
    id: "salud",
    title: "Salud y Medicina Prepagada",
    option: "Seguro de Salud y Medicina Prepagada",
    description:
      "Acceso inmediato a los mejores especialistas, clínicas y atención médica de calidad.",
    details: [
      "Consultas con especialistas sin filas",
      "Red de clínicas y hospitales en todo el país",
      "Planes de medicina prepagada y complementarios",
      "Cobertura para ti y tu familia",
    ],
    icon: HeartPulse,
  },
  {
    id: "vida",
    title: "Vida y Educativo",
    option: "Seguro de Vida y Educativo",
    description:
      "Garantiza la tranquilidad financiera y el futuro de tus seres queridos ante cualquier imprevisto.",
    details: [
      "Protección económica para tu familia",
      "Fondo educativo para tus hijos",
      "Cobertura por incapacidad o fallecimiento",
      "Ahorro programado opcional",
    ],
    icon: ShieldCheck,
  },
  {
    id: "hogar",
    title: "Hogar, Bici y Mascotas",
    option: "Seguros para el Hogar, Bici y Mascotas",
    description:
      "Protección para tu vivienda frente a emergencias y coberturas especiales para tus compañeros de ruta y peludos.",
    details: [
      "Incendio, robo y daños por agua",
      "Responsabilidad civil del hogar",
      "Protección para bicicletas y accesorios",
      "Cobertura veterinaria y gastos médicos",
    ],
    icon: Home,
  },
  {
    id: "empresarial",
    title: "Empresariales y Pymes",
    option: "Seguros Empresariales y Pymes",
    description:
      "Soluciones integrales para blindar el patrimonio, empleados y la operación de tu negocio.",
    details: [
      "Patrimonio, sedes e inventarios",
      "Responsabilidad civil y accidentes laborales",
      "Cumplimiento, transporte y todo riesgo",
      "Planes a la medida de tu pyme",
    ],
    icon: Building2,
  },
];

export const serviceOptions = [
  ...services.map((service) => service.option),
  "Aún no estoy seguro / otro",
];
