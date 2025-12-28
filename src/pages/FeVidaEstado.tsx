import ServicePageTemplate from "@/components/ServicePageTemplate";
import { FileCheck } from "lucide-react";

const FeVidaEstado = () => {
  return (
    <ServicePageTemplate
      title="Fe de Vida y Estado en Elche"
      metaTitle="Fe de Vida y Estado en Elche | Registro Civil"
      metaDescription="Información sobre la fe de vida y estado en el Registro Civil de Elche. Qué es, para qué sirve, requisitos y cómo obtenerla."
      canonicalUrl="https://registrocivilelche.es/fe-vida-estado"
      breadcrumbItems={[
        { name: "Inicio", href: "/" },
        { name: "Fe de Vida y Estado", href: "/fe-vida-estado" }
      ]}
      description="Guía completa para obtener la fe de vida y estado en el Registro Civil de Elche."
      whatIs="La fe de vida y estado es un documento oficial expedido por el Registro Civil que acredita que una persona está viva y su estado civil actual (soltero/a, casado/a, viudo/a, divorciado/a). Se utiliza para trámites de pensiones, herencias, procedimientos judiciales y otros fines legales."
      requirements={[
        "DNI o NIE del interesado",
        "Comparecer personalmente ante el Registro Civil",
        "En algunos casos se puede solicitar por representante con poder",
        "Indicar el fin para el que se solicita el documento",
        "Formulario de solicitud (disponible en el Registro)"
      ]}
      process={[
        "Acudir personalmente al Registro Civil de Elche",
        "Presentar el DNI o NIE original",
        "Solicitar la expedición de la fe de vida y estado",
        "El funcionario verifica la identidad y estado civil",
        "Se expide el documento en el momento"
      ]}
      relatedServices={[
        { name: "Certificado de Nacimiento", href: "/certificado-nacimiento" },
        { name: "Certificado de Matrimonio", href: "/certificado-matrimonio" },
        { name: "Expediente de Matrimonio", href: "/expediente-matrimonio" }
      ]}
      icon={FileCheck}
    />
  );
};

export default FeVidaEstado;
