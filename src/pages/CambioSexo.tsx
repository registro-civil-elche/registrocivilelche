import ServicePageTemplate from "@/components/ServicePageTemplate";
import { UserCog } from "lucide-react";

const CambioSexo = () => {
  return (
    <ServicePageTemplate
      title="Cambio de Sexo Registral en Elche"
      metaTitle="Cambio de Sexo Registral en Elche | Registro Civil"
      metaDescription="Información sobre el procedimiento de cambio de sexo registral en el Registro Civil de Elche. Requisitos, documentación necesaria y pasos a seguir."
      canonicalUrl="https://registrocivilelche.es/cambio-sexo"
      breadcrumbItems={[
        { name: "Inicio", href: "/" },
        { name: "Cambio de Sexo Registral", href: "/cambio-sexo" }
      ]}
      description="Guía sobre el procedimiento para solicitar el cambio de la mención del sexo en el Registro Civil de Elche."
      whatIs="El cambio de sexo registral es el procedimiento mediante el cual una persona puede modificar la mención relativa a su sexo en la inscripción de nacimiento del Registro Civil. Desde la Ley 4/2023, este trámite se puede realizar mediante declaración voluntaria sin necesidad de informes médicos."
      requirements={[
        "Ser mayor de edad (o mayor de 16 con consentimiento)",
        "DNI o NIE del solicitante",
        "Certificado literal de nacimiento",
        "Declaración de voluntad de cambio de sexo",
        "Comparecer personalmente ante el Encargado del Registro Civil",
        "Ratificación de la solicitud en un plazo de 3 meses"
      ]}
      process={[
        "Presentar la declaración de voluntad ante el Registro Civil",
        "Comparecer personalmente ante el Encargado del Registro",
        "Ratificar la solicitud en un plazo mínimo de 3 meses",
        "El Encargado dictará resolución acordando el cambio",
        "Se practica la inscripción marginal correspondiente"
      ]}
      relatedServices={[
        { name: "Cambio de Nombre", href: "/cambio-nombre" },
        { name: "Rectificación de Error", href: "/rectificacion-error" },
        { name: "Certificado de Nacimiento", href: "/certificado-nacimiento" }
      ]}
      icon={UserCog}
    />
  );
};

export default CambioSexo;
