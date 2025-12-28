import ServicePageTemplate from "@/components/ServicePageTemplate";
import { Flag } from "lucide-react";

const JuraNacionalidadOpcion = () => {
  return (
    <ServicePageTemplate
      title="Jura de Nacionalidad por Opción en Elche"
      metaTitle="Jura de Nacionalidad por Opción en Elche | Registro Civil 2025"
      metaDescription="Información sobre la jura de nacionalidad por derecho de opción en el Registro Civil de Elche. Requisitos para hijos de españoles y procedimiento completo."
      canonicalUrl="https://registrocivilelche.es/jura-nacionalidad-opcion"
      breadcrumbItems={[
        { name: "Inicio", href: "/" },
        { name: "Jura Nacionalidad Opción", href: "/jura-nacionalidad-opcion" }
      ]}
      description="Guía para realizar la jura de nacionalidad cuando se adquiere por derecho de opción en el Registro Civil de Elche. Especialmente relevante para hijos de españoles."
      whatIs="La jura de nacionalidad por opción es el acto solemne mediante el cual las personas que tienen derecho a adquirir la nacionalidad española por opción (hijos de españoles, nacidos en España de padres extranjeros, adoptados, etc.) formalizan su adquisición jurando o prometiendo fidelidad al Rey y obediencia a la Constitución española."
      additionalInfo="A diferencia de la jura por residencia, la jura por opción se realiza como parte del mismo expediente de opción y generalmente en el mismo acto en que se presenta la declaración de opción. No requiere resolución previa del Ministerio de Justicia, sino que es el propio Encargado del Registro Civil quien verifica el derecho y recibe la jura."
      requirements={[
        "Acreditación del derecho de opción (certificados de nacimiento, etc.)",
        "DNI o pasaporte del interesado en vigor",
        "Certificado de nacimiento del progenitor español de origen",
        "Certificado de matrimonio de los padres (si procede para acreditar la filiación)",
        "En caso de menores de 14 años: representación legal de ambos padres o tutores",
        "En caso de mayores de 14 años: asistencia de los representantes legales",
        "Comparecer personalmente ante el Registro Civil"
      ]}
      process={[
        "Verificar que se cumple el derecho de opción a la nacionalidad española",
        "Reunir toda la documentación acreditativa del derecho",
        "Legalizar y apostillar los documentos extranjeros",
        "Solicitar cita en el Registro Civil de Elche",
        "Comparecer ante el Encargado del Registro Civil",
        "Realizar la declaración de opción a la nacionalidad española",
        "Jurar o prometer fidelidad al Rey y obediencia a la Constitución (mayores de 14 años)",
        "El Encargado practica la inscripción de nacimiento como español"
      ]}
      tips={[
        "Para menores de 14 años, la jura no es necesaria (la realizan los representantes legales)",
        "Los mayores de 14 años deben jurar personalmente, asistidos por sus representantes",
        "La opción puede ejercerse en cualquier momento, sin plazo límite en la mayoría de casos",
        "Si reside en el extranjero, puede hacerlo en el Consulado español",
        "Conserve copias de toda la documentación presentada",
        "Un abogado puede agilizar el proceso y evitar errores"
      ]}
      faqs={[
        {
          question: "¿Qué diferencia hay entre jura por opción y jura por residencia?",
          answer: "La jura por opción se realiza como parte del expediente de opción, sin necesidad de resolución previa del Ministerio. La jura por residencia es el acto final tras una resolución favorable de nacionalidad por residencia. La opción es más rápida y no requiere residencia previa en España."
        },
        {
          question: "¿Los menores de edad tienen que jurar?",
          answer: "Los menores de 14 años no realizan la jura personalmente; son sus representantes legales quienes ejercen la opción en su nombre. Los mayores de 14 años deben jurar personalmente, pero asistidos por sus representantes legales."
        },
        {
          question: "¿Puedo hacer la jura de opción desde el extranjero?",
          answer: "Sí, puede realizar la jura de opción ante el Consulado español del país donde resida. El procedimiento es similar al del Registro Civil en España."
        },
        {
          question: "¿Cuánto tiempo tarda el proceso de nacionalidad por opción?",
          answer: "El proceso suele ser más rápido que la nacionalidad por residencia. En el Registro Civil de Elche puede oscilar entre 1 y 6 meses, dependiendo de la complejidad del caso y la documentación. En Consulados los plazos pueden ser mayores."
        },
        {
          question: "¿Tengo plazo para ejercer mi derecho de opción?",
          answer: "En la mayoría de casos no hay plazo límite. Sin embargo, algunos supuestos específicos (como la determinación de filiación después de los 18 años) tienen un plazo de 2 años desde el hecho que genera el derecho."
        },
        {
          question: "¿Qué documentos necesito si mi padre español ha fallecido?",
          answer: "Necesitará el certificado de defunción del padre, certificado de nacimiento del padre (que acredite su nacionalidad española), y cualquier otra documentación que demuestre la filiación y la nacionalidad española del progenitor fallecido."
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

export default JuraNacionalidadOpcion;
