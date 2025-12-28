import ServicePageTemplate from "@/components/ServicePageTemplate";
import { Baby } from "lucide-react";

const InscripcionRecienNacido = () => {
  return (
    <ServicePageTemplate
      title="Inscripción de Recién Nacido en Elche"
      metaTitle="Inscripción de Recién Nacido en Elche | Registro Civil"
      metaDescription="Guía completa para inscribir a un recién nacido en el Registro Civil de Elche. Plazos, documentación necesaria y procedimiento paso a paso."
      canonicalUrl="https://registrocivilelche.es/inscripcion-recien-nacido"
      breadcrumbItems={[
        { name: "Inicio", href: "/" },
        { name: "Inscripción de Recién Nacido", href: "/inscripcion-recien-nacido" }
      ]}
      description="Todo lo que necesitas saber para inscribir a tu bebé en el Registro Civil de Elche."
      whatIs="La inscripción de nacimiento es el trámite obligatorio mediante el cual se registra oficialmente el nacimiento de una persona. Debe realizarse dentro de los 30 días siguientes al parto (ampliable si hay causa justificada). Puede hacerse desde el hospital o directamente en el Registro Civil."
      requirements={[
        "Cuestionario para la declaración de nacimiento del hospital",
        "Parte médico de nacimiento",
        "DNI o NIE de los padres",
        "Libro de familia (si ya existe)",
        "Certificado de matrimonio o de pareja de hecho (si procede)",
        "En caso de padres no casados: declaración de filiación"
      ]}
      process={[
        "Obtener el cuestionario y parte médico en el hospital",
        "Acudir al Registro Civil dentro de los 30 días siguientes al nacimiento",
        "Presentar la documentación requerida",
        "Declarar el nombre elegido para el bebé",
        "Recibir el certificado de nacimiento y el libro de familia actualizado"
      ]}
      relatedServices={[
        { name: "Certificado de Nacimiento", href: "/certificado-nacimiento" },
        { name: "Inscripción Fuera de Plazo", href: "/inscripcion-nacimiento-fuera-plazo" },
        { name: "Reconocimiento Hijo No Matrimonial", href: "/reconocimiento-hijo-no-matrimonial" }
      ]}
      icon={Baby}
    />
  );
};

export default InscripcionRecienNacido;
