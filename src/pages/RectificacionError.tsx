import ServicePageTemplate from "@/components/ServicePageTemplate";
import { PenLine } from "lucide-react";

const RectificacionError = () => {
  return (
    <ServicePageTemplate
      title="Rectificación de Error Registral en Elche"
      metaTitle="Rectificación de Error Registral en Elche | Registro Civil"
      metaDescription="Información sobre la rectificación de errores en inscripciones del Registro Civil de Elche. Tipos de errores, requisitos y procedimiento."
      canonicalUrl="https://registrocivilelche.es/rectificacion-error"
      breadcrumbItems={[
        { name: "Inicio", href: "/" },
        { name: "Rectificación de Error", href: "/rectificacion-error" }
      ]}
      description="Guía para corregir errores en las inscripciones del Registro Civil de Elche."
      whatIs="La rectificación de error registral es el procedimiento para corregir los errores materiales o de concepto que se hayan producido en las inscripciones del Registro Civil. Los errores materiales son simples equivocaciones en datos; los de concepto implican una calificación jurídica errónea."
      requirements={[
        "Solicitud de rectificación indicando el error detectado",
        "DNI o NIE del interesado",
        "Certificado de la inscripción que contiene el error",
        "Documentación que acredite el dato correcto",
        "En errores de concepto: puede requerirse resolución judicial",
        "Poder de representación si actúa un tercero"
      ]}
      process={[
        "Identificar el error en la inscripción registral",
        "Reunir documentación que pruebe el dato correcto",
        "Presentar solicitud de rectificación en el Registro Civil",
        "El Encargado del Registro califica la solicitud",
        "Si procede, se practica la rectificación mediante inscripción marginal"
      ]}
      relatedServices={[
        { name: "Cambio de Nombre", href: "/cambio-nombre" },
        { name: "Certificado de Nacimiento", href: "/certificado-nacimiento" },
        { name: "Certificado de Matrimonio", href: "/certificado-matrimonio" }
      ]}
      icon={PenLine}
    />
  );
};

export default RectificacionError;
