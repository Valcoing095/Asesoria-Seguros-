export const brand = {
  name: "Carolina Arboleda",
  firstName: "Carolina",
  role: "Asesora de Seguros",
  initials: "CA",
  phoneDisplay: "+57 322 671 7084",
  phoneHref: "tel:+573226717084",
  whatsapp: "573226717084",
  email: "carolina.arboleda@sanoysalvo.com.co",
  city: "Pereira, Risaralda",
  coverage: "Pereira, Armenia y Manizales",
  coverageLong: "Pereira, Armenia, Manizales y cobertura nacional",
  agency: "Sano y Salvo Agencia de Seguros (Grupo Caminos)",
  photo: "/asesora.jpg",
  whatsappMessage: "Hola, vi tu página web y quiero agendar una asesoría.",
  insurers: ["SURA", "Allianz", "HDI Seguros", "SBS", "La Equidad"],
} as const;

export const whatsappHref = `https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(
  brand.whatsappMessage,
)}`;
