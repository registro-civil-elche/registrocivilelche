import ServicePageTemplate from "@/components/ServicePageTemplate";
import { Heart } from "lucide-react";

const ExpedienteMatrimonio = () => {
  return (
    <ServicePageTemplate
      title="Expediente de Matrimonio Civil en Elche"
      metaTitle="Expediente de Matrimonio Civil en Elche | Registro Civil 2025"
      metaDescription="Información completa sobre el expediente previo al matrimonio civil en el Registro Civil de Elche. Requisitos, documentación, plazos y celebración de bodas civiles."
      canonicalUrl="https://registrocivilelche.es/expediente-matrimonio"
      breadcrumbItems={[
        { name: "Inicio", href: "/" },
        { name: "Expediente de Matrimonio", href: "/expediente-matrimonio" }
      ]}
      description="Todo lo que necesitas saber para tramitar el expediente previo al matrimonio civil en el Registro Civil de Elche y celebrar tu boda civil."
      whatIs="El expediente de matrimonio es el procedimiento previo obligatorio para contraer matrimonio civil. Se tramita ante el Registro Civil y sirve para verificar que los contrayentes cumplen los requisitos legales para casarse y que no existe ningún impedimento matrimonial. Una vez aprobado, el expediente tiene validez de un año para celebrar el matrimonio."
      additionalInfo="El matrimonio civil en España puede celebrarse ante el Juez encargado del Registro Civil, Alcalde, Concejal delegado, o ante Notario. Tras la aprobación del expediente, los contrayentes pueden elegir la fecha y lugar de celebración dentro del ámbito territorial competente. En Elche, las bodas civiles se celebran habitualmente en el Ayuntamiento o en el propio Registro Civil."
      requirements={[
        "DNI o NIE de ambos contrayentes en vigor",
        "Certificado literal de nacimiento reciente de cada contrayente (máximo 6 meses)",
        "Certificado de empadronamiento de al menos uno de los contrayentes",
        "Declaración jurada de estado civil (soltero, viudo o divorciado)",
        "Fe de vida y estado de ambos contrayentes",
        "En caso de viudos: certificado de defunción del cónyuge anterior",
        "En caso de divorciados: sentencia de divorcio firme",
        "En caso de extranjeros: certificado de capacidad matrimonial o equivalente legalizado",
        "Dos testigos mayores de edad para la celebración"
      ]}
      process={[
        "Solicitar cita previa en el Registro Civil de Elche",
        "Presentar toda la documentación requerida",
        "Cada contrayente será entrevistado por separado por el Juez o Secretario",
        "El Registro Civil instruye el expediente matrimonial",
        "Publicación de edictos (puede dispensarse en algunos casos)",
        "Resolución favorable del expediente",
        "Elección de fecha para la ceremonia (dentro del año de validez)",
        "Celebración del matrimonio ante autoridad competente",
        "Inscripción del matrimonio en el Registro Civil"
      ]}
      tips={[
        "Inicia el expediente con al menos 2-3 meses de antelación a la fecha deseada",
        "Si uno de los contrayentes es extranjero, los plazos pueden ser mayores",
        "El expediente tiene validez de un año desde su aprobación",
        "Puedes elegir celebrar la boda en el Ayuntamiento, Registro Civil o ante Notario",
        "Los certificados de nacimiento deben ser literales, no extractos",
        "Si tienes prisa, un abogado puede agilizar la tramitación"
      ]}
      faqs={[
        {
          question: "¿Cuánto tiempo tarda el expediente de matrimonio en Elche?",
          answer: "El plazo medio para la tramitación del expediente de matrimonio es de 1 a 2 meses, aunque puede variar según la carga de trabajo del Registro Civil y la complejidad del caso (especialmente si hay contrayentes extranjeros)."
        },
        {
          question: "¿Cuánto cuesta casarse por lo civil en Elche?",
          answer: "El expediente matrimonial en el Registro Civil es gratuito. Sin embargo, si se celebra en el Ayuntamiento puede haber una tasa municipal. Si se opta por Notario, hay que abonar los honorarios notariales correspondientes."
        },
        {
          question: "¿Dónde se puede celebrar el matrimonio civil en Elche?",
          answer: "El matrimonio civil puede celebrarse en el Registro Civil de Elche, en el Ayuntamiento de Elche (Salón de Plenos u otros espacios habilitados), ante Notario, o en otros lugares autorizados por la autoridad competente."
        },
        {
          question: "¿Qué documentos necesita un extranjero para casarse en España?",
          answer: "Los extranjeros necesitan: pasaporte válido, certificado de nacimiento legalizado y traducido, certificado de capacidad matrimonial o soltería de su país (apostillado/legalizado), certificado de empadronamiento, y en algunos casos NIE. Los requisitos varían según el país de origen."
        },
        {
          question: "¿Se pueden dispensar los edictos matrimoniales?",
          answer: "Sí, en determinadas circunstancias el Juez puede dispensar la publicación de edictos. Esto puede solicitarse por razones de urgencia o cuando los contrayentes acrediten suficientemente su estado civil por otros medios."
        },
        {
          question: "¿Cuántos testigos se necesitan para la boda civil?",
          answer: "Se necesitan dos testigos mayores de edad que presencien la ceremonia. Pueden ser familiares o amigos, y deben presentar su DNI o NIE el día de la celebración."
        }
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
