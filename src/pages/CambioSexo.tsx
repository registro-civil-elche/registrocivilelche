import ServicePageTemplate from "@/components/ServicePageTemplate";
import { UserCog } from "lucide-react";

const CambioSexo = () => {
  return (
    <ServicePageTemplate
      title="Cambio de Sexo Registral en Elche"
      metaTitle="Cambio de Sexo Registral en Elche | Registro Civil 2025"
      metaDescription="Información actualizada sobre el procedimiento de cambio de sexo registral en el Registro Civil de Elche. Ley Trans 2023, requisitos y pasos a seguir."
      canonicalUrl="https://registrocivilelche.es/cambio-sexo"
      breadcrumbItems={[
        { name: "Inicio", href: "/" },
        { name: "Cambio de Sexo Registral", href: "/cambio-sexo" }
      ]}
      description="Guía actualizada sobre el procedimiento para solicitar el cambio de la mención del sexo en el Registro Civil de Elche conforme a la Ley Trans."
      whatIs="El cambio de sexo registral es el procedimiento mediante el cual una persona puede modificar la mención relativa a su sexo en la inscripción de nacimiento del Registro Civil. Desde la entrada en vigor de la Ley 4/2023 (Ley Trans), este trámite se puede realizar mediante declaración voluntaria sin necesidad de informes médicos ni diagnósticos de disforia de género, garantizando así el derecho a la autodeterminación de género."
      additionalInfo="La Ley 4/2023, de 28 de febrero, para la igualdad real y efectiva de las personas trans y para la garantía de los derechos de las personas LGTBI, ha supuesto un cambio fundamental en este procedimiento. Ya no se requiere informe médico, tratamiento hormonal ni ningún otro requisito sanitario. El proceso se basa únicamente en la libre autodeterminación de la persona."
      requirements={[
        "Ser mayor de edad (mayores de 16 años pueden hacerlo con consentimiento)",
        "Personas de 14 a 16 años requieren autorización judicial",
        "Personas de 12 a 14 años solo con autorización judicial en casos específicos",
        "DNI o NIE del solicitante en vigor",
        "Certificado literal de nacimiento actualizado",
        "Declaración expresa de voluntad de cambio de sexo registral",
        "Comparecer personalmente ante el Encargado del Registro Civil",
        "Ratificación de la solicitud en un plazo mínimo de 3 meses (máximo 6 meses)"
      ]}
      process={[
        "Presentar la declaración de voluntad de cambio de sexo ante el Registro Civil de Elche",
        "Comparecer personalmente ante el Encargado del Registro Civil",
        "El Encargado informa sobre las consecuencias jurídicas del cambio",
        "Esperar un plazo mínimo de 3 meses desde la primera comparecencia",
        "Ratificar la solicitud mediante segunda comparecencia personal",
        "El Encargado dicta resolución acordando el cambio de sexo",
        "Se practica la inscripción marginal correspondiente en el acta de nacimiento",
        "Solicitar nuevo DNI con los datos actualizados"
      ]}
      tips={[
        "El plazo de espera de 3 meses es obligatorio y no puede reducirse",
        "Puedes cambiar también el nombre propio en el mismo procedimiento",
        "La ratificación debe hacerse antes de 6 meses desde la primera comparecencia",
        "No se requiere ningún tipo de informe médico o psicológico",
        "El cambio es reversible siguiendo el mismo procedimiento",
        "Considera asesorarte legalmente para conocer todas las implicaciones jurídicas"
      ]}
      faqs={[
        {
          question: "¿Necesito informes médicos para el cambio de sexo registral?",
          answer: "No. Desde la Ley 4/2023, no se requiere ningún informe médico, diagnóstico de disforia de género, ni tratamiento hormonal. El cambio se basa únicamente en la libre autodeterminación de la persona."
        },
        {
          question: "¿Cuánto tiempo tarda el cambio de sexo en el Registro Civil?",
          answer: "El procedimiento requiere un plazo mínimo obligatorio de 3 meses entre la primera comparecencia y la ratificación. Una vez ratificado, la resolución se dicta en un plazo breve, generalmente de días a pocas semanas."
        },
        {
          question: "¿Pueden los menores de edad cambiar el sexo registral?",
          answer: "Sí, pero con diferentes requisitos según la edad: mayores de 16 años pueden hacerlo directamente; de 14 a 16 años requieren autorización judicial; de 12 a 14 años solo mediante autorización judicial en casos específicos."
        },
        {
          question: "¿Puedo cambiar mi nombre al mismo tiempo que el sexo registral?",
          answer: "Sí, es muy común solicitar el cambio de nombre propio junto con el cambio de sexo registral. Ambos trámites pueden realizarse conjuntamente en el mismo procedimiento."
        },
        {
          question: "¿El cambio de sexo registral es reversible?",
          answer: "Sí, el cambio es reversible. Sin embargo, solo puede realizarse una vez salvo autorización judicial. Para revertirlo, se debe seguir el mismo procedimiento de cambio."
        },
        {
          question: "¿Qué documentos debo actualizar después del cambio?",
          answer: "Tras el cambio de sexo registral, deberá actualizar el DNI, pasaporte, tarjeta sanitaria, títulos académicos, y otros documentos oficiales. El Registro Civil expedirá un nuevo certificado de nacimiento con los datos actualizados."
        }
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
