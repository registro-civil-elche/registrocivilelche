import ServicePageTemplate from "@/components/ServicePageTemplate";
import { Baby } from "lucide-react";

const InscripcionNacimientoFueraPlazo = () => {
  return (
    <ServicePageTemplate
      title="Inscripción de Nacimiento Fuera de Plazo en Elche"
      metaTitle="Inscripción de Nacimiento Fuera de Plazo en Elche | Registro Civil"
      metaDescription="Información sobre la inscripción de nacimiento fuera de plazo en el Registro Civil de Elche. Requisitos, documentación y procedimiento especial."
      canonicalUrl="https://registrocivilelche.es/inscripcion-nacimiento-fuera-plazo"
      breadcrumbItems={[
        { name: "Inicio", href: "/" },
        { name: "Inscripción de Nacimiento Fuera de Plazo", href: "/inscripcion-nacimiento-fuera-plazo" }
      ]}
      description="Guía para inscribir un nacimiento después de que haya transcurrido el plazo legal en el Registro Civil de Elche."
      whatIs="Cuando ha pasado el plazo legal para inscribir un nacimiento (generalmente 30 días desde el parto), se requiere un procedimiento especial llamado expediente de inscripción fuera de plazo. Este trámite es más complejo y requiere aportar pruebas adicionales del nacimiento."
      requirements={[
        "Solicitud de inscripción fuera de plazo",
        "DNI o NIE de los padres",
        "Certificado médico de nacimiento o prueba del parto",
        "Libro de familia (si existe)",
        "Justificación del retraso en la inscripción",
        "Declaración de dos testigos que conozcan el nacimiento"
      ]}
      process={[
        "Presentar solicitud de expediente de inscripción fuera de plazo",
        "Aportar toda la documentación probatoria del nacimiento",
        "Declaración de testigos ante el Encargado del Registro",
        "El Registro Civil instruye el expediente",
        "Resolución del expediente y práctica de la inscripción"
      ]}
      relatedServices={[
        { name: "Inscripción de Recién Nacido", href: "/inscripcion-recien-nacido" },
        { name: "Certificado de Nacimiento", href: "/certificado-nacimiento" },
        { name: "Reconocimiento Hijo No Matrimonial", href: "/reconocimiento-hijo-no-matrimonial" }
      ]}
      icon={Baby}
    />
  );
};

export default InscripcionNacimientoFueraPlazo;
