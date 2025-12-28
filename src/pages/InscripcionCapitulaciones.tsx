import ServicePageTemplate from "@/components/ServicePageTemplate";
import { FileSignature } from "lucide-react";

const InscripcionCapitulaciones = () => {
  return (
    <ServicePageTemplate
      title="Inscripción de Capitulaciones Matrimoniales en Elche"
      metaTitle="Inscripción de Capitulaciones Matrimoniales en Elche | Registro Civil"
      metaDescription="Información sobre la inscripción de capitulaciones matrimoniales en el Registro Civil de Elche. Requisitos, documentación y procedimiento."
      canonicalUrl="https://registrocivilelche.es/inscripcion-capitulaciones"
      breadcrumbItems={[
        { name: "Inicio", href: "/" },
        { name: "Inscripción de Capitulaciones", href: "/inscripcion-capitulaciones" }
      ]}
      description="Guía para inscribir las capitulaciones matrimoniales en el Registro Civil de Elche."
      whatIs="Las capitulaciones matrimoniales son el acuerdo entre cónyuges o futuros cónyuges para regular el régimen económico de su matrimonio. Su inscripción en el Registro Civil es necesaria para que surtan efectos frente a terceros. Pueden otorgarse antes o después del matrimonio."
      requirements={[
        "Escritura pública de capitulaciones matrimoniales otorgada ante notario",
        "DNI o NIE de ambos cónyuges o contrayentes",
        "Certificado de matrimonio (si ya están casados)",
        "Solicitud de inscripción",
        "En caso de modificación, escritura de las anteriores capitulaciones"
      ]}
      process={[
        "Otorgar escritura pública de capitulaciones ante notario",
        "Presentar la escritura en el Registro Civil",
        "El Registro verifica la documentación",
        "Se practica la inscripción marginal en el acta de matrimonio",
        "Desde ese momento las capitulaciones son oponibles a terceros"
      ]}
      relatedServices={[
        { name: "Certificado de Matrimonio", href: "/certificado-matrimonio" },
        { name: "Expediente de Matrimonio", href: "/expediente-matrimonio" },
        { name: "Fe de Vida y Estado", href: "/fe-vida-estado" }
      ]}
      icon={FileSignature}
    />
  );
};

export default InscripcionCapitulaciones;
