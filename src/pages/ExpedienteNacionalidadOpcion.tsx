import ServicePageTemplate from "@/components/ServicePageTemplate";
import { Flag } from "lucide-react";

const ExpedienteNacionalidadOpcion = () => {
  return (
    <ServicePageTemplate
      title="Expediente de Nacionalidad por Opción en Elche"
      metaTitle="Nacionalidad Española por Opción en Elche | Registro Civil 2025"
      metaDescription="Información sobre la nacionalidad española por opción en el Registro Civil de Elche. Quién puede optar, requisitos para hijos de españoles y procedimiento completo."
      canonicalUrl="https://registrocivilelche.es/expediente-nacionalidad-opcion"
      breadcrumbItems={[
        { name: "Inicio", href: "/" },
        { name: "Expediente Nacionalidad por Opción", href: "/expediente-nacionalidad-opcion" }
      ]}
      description="Guía completa sobre la adquisición de la nacionalidad española por derecho de opción en el Registro Civil de Elche. Ideal para hijos y nietos de españoles."
      whatIs="La nacionalidad española por opción es una vía privilegiada de adquisición de la ciudadanía española para personas que tienen un vínculo especial con España. Pueden optar los hijos de padre o madre español de origen, las personas bajo tutela de ciudadanos españoles, los adoptados por españoles, y quienes hayan estado sujetos a la patria potestad de un español, entre otros supuestos."
      additionalInfo="El derecho de opción es una vía más rápida y sencilla que la nacionalidad por residencia, ya que no requiere un período previo de residencia en España. Es especialmente relevante para los hijos de españoles nacidos en el extranjero, quienes pueden adquirir la nacionalidad española independientemente de donde residan."
      requirements={[
        "Certificado literal de nacimiento del interesado (legalizado y traducido si es extranjero)",
        "Certificado de nacimiento del progenitor español o del español que origina el derecho",
        "DNI o pasaporte español del progenitor español",
        "Certificado de matrimonio de los padres (si procede)",
        "Acreditación documental del vínculo que da derecho a la opción",
        "En caso de menores de 14 años, representación legal de ambos padres o tutores",
        "En caso de mayores de 14 años, asistencia de los representantes legales",
        "Certificado de antecedentes penales (para mayores de edad)"
      ]}
      process={[
        "Verificar que se cumple alguno de los supuestos legales de opción",
        "Reunir toda la documentación acreditativa del derecho",
        "Legalizar y apostillar documentos extranjeros",
        "Presentar el expediente en el Registro Civil de Elche o Consulado",
        "Comparecer ante el Encargado del Registro Civil",
        "Realizar la declaración de opción a la nacionalidad española",
        "Jurar o prometer fidelidad al Rey y obediencia a la Constitución",
        "Se inscribe la nacionalidad española en el Registro Civil"
      ]}
      tips={[
        "Los hijos de español pueden optar en cualquier momento, sin límite de edad",
        "No se requiere residencia en España para ejercer el derecho de opción",
        "Si el padre español falleció, se puede acreditar la nacionalidad con otros documentos",
        "Los nietos de español pueden optar si su padre (el hijo del español) hubiera podido optar",
        "Es la vía más rápida para hijos de españoles nacidos en el extranjero",
        "Un abogado puede ayudarle a identificar la mejor vía para su caso"
      ]}
      faqs={[
        {
          question: "¿Quién tiene derecho a optar por la nacionalidad española?",
          answer: "Pueden optar: los que están o han estado sujetos a patria potestad de español; los adoptados por español; los hijos de padre o madre español de origen; los descendientes de español conforme a la Ley de Memoria Democrática; y otros supuestos específicos del Código Civil."
        },
        {
          question: "¿Hay límite de edad para optar por la nacionalidad española?",
          answer: "Para la mayoría de supuestos no hay límite de edad. Sin embargo, algunos supuestos específicos (como la determinación de filiación después de los 18 años) tienen un plazo de 2 años desde que se produce el hecho que da derecho a optar."
        },
        {
          question: "¿Necesito vivir en España para optar por la nacionalidad?",
          answer: "No, la opción puede ejercerse ante el Registro Civil en España o ante el Consulado español del país de residencia. No se requiere residencia previa en España para ejercer el derecho de opción."
        },
        {
          question: "¿Cuánto tiempo tarda el expediente de nacionalidad por opción?",
          answer: "El plazo varía según el Registro Civil o Consulado, pero generalmente oscila entre 3 meses y 1 año. Los Consulados suelen tener plazos más largos debido a la alta demanda."
        },
        {
          question: "¿Qué diferencia hay entre opción y residencia para la nacionalidad?",
          answer: "La opción es un derecho para quienes tienen un vínculo especial con España (hijos de españoles, etc.) y no requiere residencia previa. La nacionalidad por residencia requiere haber vivido legalmente en España durante un período (generalmente 10 años, reducible en algunos casos)."
        },
        {
          question: "¿Puedo optar por la nacionalidad española si mi abuelo era español?",
          answer: "En general, los nietos de español pueden optar si su padre o madre (el hijo del abuelo español) hubiera podido ejercer el derecho de opción. Además, la Ley de Memoria Democrática ha ampliado las posibilidades para nietos de españoles en casos relacionados con el exilio."
        }
      ]}
      relatedServices={[
        { name: "Jura de Nacionalidad", href: "/jura-nacionalidad" },
        { name: "Jura Nacionalidad Opción", href: "/jura-nacionalidad-opcion" },
        { name: "Conservación de Nacionalidad", href: "/conservacion-nacionalidad" }
      ]}
      icon={Flag}
    />
  );
};

export default ExpedienteNacionalidadOpcion;
