import ServicePageTemplate from "@/components/ServicePageTemplate";
import { Baby } from "lucide-react";

const InscripcionNacimientoFueraPlazo = () => {
  return (
    <ServicePageTemplate
      title="Inscripción de Nacimiento Fuera de Plazo en Elche"
      metaTitle="Inscripción de Nacimiento Fuera de Plazo en Elche | Registro Civil 2025"
      metaDescription="Información sobre la inscripción de nacimiento fuera de plazo en el Registro Civil de Elche. Expediente especial, requisitos y procedimiento para inscripciones tardías."
      canonicalUrl="https://registrocivilelche.es/inscripcion-nacimiento-fuera-plazo"
      breadcrumbItems={[
        { name: "Inicio", href: "/" },
        { name: "Inscripción de Nacimiento Fuera de Plazo", href: "/inscripcion-nacimiento-fuera-plazo" }
      ]}
      description="Guía para inscribir un nacimiento después de que haya transcurrido el plazo legal en el Registro Civil de Elche. Procedimiento especial para adultos no inscritos."
      whatIs="Cuando ha pasado el plazo legal para inscribir un nacimiento (generalmente 30 días desde el parto, ampliable a 8 días más si hay causa justificada), se requiere un procedimiento especial llamado expediente de inscripción fuera de plazo. Este trámite es más complejo que la inscripción ordinaria y requiere aportar pruebas adicionales que acrediten el nacimiento."
      additionalInfo="Este procedimiento es especialmente relevante para personas que por diversas circunstancias nunca fueron inscritas en el Registro Civil (partos domiciliarios antiguos, circunstancias familiares especiales, etc.). También se aplica cuando personas nacidas en el extranjero necesitan inscribir su nacimiento en España y ha transcurrido el plazo ordinario."
      requirements={[
        "Solicitud de expediente de inscripción de nacimiento fuera de plazo",
        "DNI o NIE de los padres (o del propio interesado si es mayor de edad)",
        "Certificado médico de nacimiento o cualquier prueba documental del parto",
        "Libro de familia (si existe)",
        "Justificación del retraso en la inscripción",
        "Declaración de dos testigos mayores de edad que conozcan el nacimiento",
        "Documentación que acredite la identidad del nacido (partida de bautismo, certificados escolares, etc.)",
        "En nacimientos en el extranjero: certificado de nacimiento extranjero legalizado"
      ]}
      process={[
        "Presentar solicitud de expediente de inscripción fuera de plazo",
        "Aportar toda la documentación probatoria del nacimiento disponible",
        "Declaración de los padres sobre las circunstancias del nacimiento",
        "Declaración de testigos ante el Encargado del Registro Civil",
        "El Registro Civil instruye el expediente e investiga los hechos",
        "Posible requerimiento de documentación adicional",
        "Resolución del expediente por el Encargado del Registro",
        "Si es favorable, se practica la inscripción de nacimiento"
      ]}
      tips={[
        "Reúna toda la documentación posible que pruebe el nacimiento",
        "Las partidas de bautismo son muy útiles como prueba documental",
        "Los certificados escolares antiguos también pueden servir de prueba",
        "Si la madre aún vive, su declaración es especialmente relevante",
        "Un abogado puede facilitar considerablemente este procedimiento complejo",
        "No renuncie a inscribirse aunque hayan pasado muchos años"
      ]}
      faqs={[
        {
          question: "¿Cuánto tiempo tengo para inscribir un nacimiento?",
          answer: "El plazo ordinario es de 30 días desde el nacimiento, ampliable a 8 días más si hay causa justificada. Pasado este plazo, se requiere el expediente de inscripción fuera de plazo."
        },
        {
          question: "¿Puedo inscribirme siendo adulto si nunca fui registrado?",
          answer: "Sí, absolutamente. No hay límite de tiempo para inscribir un nacimiento. Aunque hayan pasado décadas, se puede incoar el expediente de inscripción fuera de plazo en cualquier momento."
        },
        {
          question: "¿Qué pasa si no tengo el certificado médico de nacimiento?",
          answer: "No es imprescindible. Se pueden aportar otras pruebas como partida de bautismo, declaraciones de testigos, certificados escolares, fotografías antiguas, o cualquier documento que acredite el nacimiento y las circunstancias."
        },
        {
          question: "¿Cuánto tarda el expediente de inscripción fuera de plazo?",
          answer: "El plazo es variable y depende de la complejidad del caso y la documentación disponible. Puede oscilar entre 2 y 6 meses. Los casos más complejos pueden tardar más."
        },
        {
          question: "¿Puedo obtener DNI sin estar inscrito en el Registro Civil?",
          answer: "No, la inscripción en el Registro Civil es requisito previo para obtener el DNI. Por eso es fundamental regularizar la situación mediante el expediente de inscripción fuera de plazo."
        },
        {
          question: "¿Cómo inscribo un nacimiento en el extranjero fuera de plazo?",
          answer: "Para nacimientos en el extranjero de españoles, el procedimiento se realiza en el Consulado español del país de nacimiento o en el Registro Civil Central de Madrid. Se requiere el certificado de nacimiento extranjero debidamente legalizado."
        }
      ]}
      relatedServices={[
        { name: "Inscripción de Recién Nacido", href: "/inscripcion-recien-nacido" },
        { name: "Certificado de Nacimiento", href: "/certificado-nacimiento" },
        { name: "Reconocimiento Hijo No Matrimonial", href: "/reconocimiento-hijo-no-matrimonial" }
      ]}
      icon={Baby}
    />
  );
};

export default InscripcionNacimientoFueraPlazo;
