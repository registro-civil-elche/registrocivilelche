import ServicePageTemplate from "@/components/ServicePageTemplate";
import { Heart } from "lucide-react";

const ExpedienteMatrimonio = () => {
  return (
    <ServicePageTemplate
      title="Expediente de Matrimonio Civil en Elche"
      metaTitle="Expediente de Matrimonio Civil en Elche | Registro Civil"
      metaDescription="Información completa sobre el expediente previo al matrimonio civil en el Registro Civil de Elche. Requisitos, documentación y plazos."
      canonicalUrl="https://registrocivilelche.es/expediente-matrimonio"
      breadcrumbItems={[
        { name: "Inicio", href: "/" },
        { name: "Expediente de Matrimonio", href: "/expediente-matrimonio" }
      ]}
      description="Todo lo que necesitas saber para tramitar el expediente previo al matrimonio civil en el Registro Civil de Elche."
      whatIs="El expediente de matrimonio es el procedimiento previo obligatorio para contraer matrimonio civil. Se tramita ante el Registro Civil y sirve para verificar que los contrayentes cumplen los requisitos legales para casarse y que no existe ningún impedimento. Una vez aprobado, tiene validez de un año."
      requirements={[
        "DNI o NIE de ambos contrayentes",
        "Certificado literal de nacimiento reciente de cada contrayente",
        "Certificado de empadronamiento",
        "Declaración jurada de estado civil",
        "Fe de vida y estado (si procede)",
        "En caso de extranjeros: certificado de capacidad matrimonial o equivalente"
      ]}
      process={[
        "Solicitar cita previa en el Registro Civil",
        "Presentar la documentación requerida",
        "Entrevista individual con cada contrayente",
        "El Registro Civil instruye el expediente",
        "Resolución del expediente y fijación de fecha para la ceremonia"
      ]}
      relatedServices={[
        { name: "Certificado de Matrimonio", href: "/certificado-matrimonio" },
        { name: "Inscripción de Capitulaciones", href: "/inscripcion-capitulaciones" },
        { name: "Fe de Vida y Estado", href: "/fe-vida-estado" }
      ]}
      icon={Heart}
    />
  );
};

export default ExpedienteMatrimonio;
