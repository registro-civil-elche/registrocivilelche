import ServicePageTemplate from "@/components/ServicePageTemplate";
import { Flag } from "lucide-react";

const ConservacionNacionalidad = () => {
  return (
    <ServicePageTemplate
      title="Conservación y Recuperación de Nacionalidad Española en Elche"
      metaTitle="Conservación y Recuperación de Nacionalidad Española en Elche | Registro Civil 2025"
      metaDescription="Información completa sobre conservación y recuperación de la nacionalidad española en el Registro Civil de Elche. Requisitos, Ley de Memoria Democrática y procedimiento."
      canonicalUrl="https://registrocivilelche.es/conservacion-nacionalidad"
      breadcrumbItems={[
        { name: "Inicio", href: "/" },
        { name: "Conservación y Recuperación de Nacionalidad", href: "/conservacion-nacionalidad" }
      ]}
      description="Guía completa para solicitar la conservación o recuperación de la nacionalidad española en el Registro Civil de Elche, incluyendo opciones de la Ley de Memoria Democrática."
      whatIs="La conservación de la nacionalidad española permite mantener la ciudadanía española cuando se adquiere otra nacionalidad, cumpliendo ciertos requisitos. La recuperación permite a quienes perdieron la nacionalidad española volver a adquirirla. Ambos trámites se realizan en el Registro Civil. Además, la Ley de Memoria Democrática ha abierto nuevas vías para descendientes de españoles."
      additionalInfo="La Ley 20/2022 de Memoria Democrática ha establecido nuevas posibilidades para adquirir la nacionalidad española de origen para hijos y nietos de españoles que perdieron o tuvieron que renunciar a la nacionalidad por razones del exilio, así como para hijos nacidos en el extranjero de mujeres españolas que perdieron la nacionalidad por matrimonio. El plazo para acogerse a esta ley finaliza el 21 de octubre de 2025."
      requirements={[
        "DNI o pasaporte español (si se conserva)",
        "Certificado literal de nacimiento español o de ascendiente español",
        "Acreditación documental de haber poseído la nacionalidad española",
        "Residencia legal en España (requerida en algunos supuestos de recuperación)",
        "Declaración de recuperación ante el Encargado del Registro Civil",
        "Certificado de antecedentes penales del país de residencia",
        "Para Ley de Memoria Democrática: documentación del ascendiente español",
        "Renuncia a la nacionalidad anterior (según casos y convenios bilaterales)"
      ]}
      process={[
        "Determinar si corresponde conservación, recuperación o adquisición por Memoria Democrática",
        "Reunir la documentación acreditativa de nacionalidad española anterior o del ascendiente",
        "Legalizar y apostillar documentos extranjeros si procede",
        "Presentar la solicitud en el Registro Civil de Elche o Consulado correspondiente",
        "Comparecer ante el Encargado del Registro Civil",
        "Realizar la declaración de conservación o recuperación",
        "Esperar la resolución del expediente",
        "Una vez resuelto favorablemente, se inscribe en el Registro Civil"
      ]}
      tips={[
        "Si tiene ascendientes españoles, investigue si puede acogerse a la Ley de Memoria Democrática",
        "El plazo para la Ley de Memoria Democrática finaliza el 21 de octubre de 2025",
        "Algunos países tienen convenios de doble nacionalidad con España",
        "Conserve copias de todos los documentos presentados",
        "La recuperación puede requerir residencia previa en España según el caso",
        "Un abogado especializado puede identificar la mejor vía para su caso"
      ]}
      faqs={[
        {
          question: "¿Puedo tener doble nacionalidad con España?",
          answer: "España tiene convenios de doble nacionalidad con varios países iberoamericanos (Argentina, Bolivia, Chile, Colombia, Costa Rica, Cuba, Ecuador, Guatemala, Honduras, Nicaragua, Panamá, Paraguay, Perú, República Dominicana y Uruguay), así como con Andorra, Filipinas, Guinea Ecuatorial y Portugal. Con estos países se permite mantener ambas nacionalidades."
        },
        {
          question: "¿Qué es la Ley de Memoria Democrática para nacionalidad?",
          answer: "La Ley 20/2022 de Memoria Democrática permite adquirir la nacionalidad española de origen a descendientes de españoles exiliados, hijos de mujeres españolas que perdieron la nacionalidad por matrimonio, y otros supuestos relacionados con el exilio y la represión franquista. El plazo finaliza el 21 de octubre de 2025."
        },
        {
          question: "¿Cuánto tiempo tengo para acogerme a la Ley de Memoria Democrática?",
          answer: "El plazo para solicitar la nacionalidad por la Ley de Memoria Democrática finaliza el 21 de octubre de 2025. Es importante iniciar el trámite con suficiente antelación para reunir toda la documentación necesaria."
        },
        {
          question: "¿Puedo recuperar la nacionalidad española si la perdí hace muchos años?",
          answer: "Sí, la nacionalidad española se puede recuperar en cualquier momento, sin límite de tiempo desde que se perdió. Los requisitos varían según las circunstancias de la pérdida y la residencia actual del solicitante."
        },
        {
          question: "¿Necesito residir en España para recuperar la nacionalidad?",
          answer: "Depende del supuesto. En algunos casos se requiere residencia legal en España, mientras que en otros (como ciertos supuestos de la Ley de Memoria Democrática) no es necesario. Consulte con un profesional su caso concreto."
        }
      ]}
      relatedServices={[
        { name: "Jura de Nacionalidad", href: "/jura-nacionalidad" },
        { name: "Expediente Nacionalidad por Opción", href: "/expediente-nacionalidad-opcion" },
        { name: "Simple Presunción de Nacionalidad", href: "/simple-presuncion-nacionalidad" }
      ]}
      icon={Flag}
    />
  );
};

export default ConservacionNacionalidad;
