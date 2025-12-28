import ServicePageTemplate from "@/components/ServicePageTemplate";
import { Baby } from "lucide-react";

const InscripcionRecienNacido = () => {
  return (
    <ServicePageTemplate
      title="Inscripción de Recién Nacido en Elche"
      metaTitle="Inscripción de Recién Nacido en Elche | Registro Civil 2025"
      metaDescription="Guía completa para inscribir a un recién nacido en el Registro Civil de Elche. Plazos, documentación, nombre del bebé y libro de familia. Todo lo que necesitas saber."
      canonicalUrl="https://registrocivilelche.es/inscripcion-recien-nacido"
      breadcrumbItems={[
        { name: "Inicio", href: "/" },
        { name: "Inscripción de Recién Nacido", href: "/inscripcion-recien-nacido" }
      ]}
      description="Todo lo que necesitas saber para inscribir a tu bebé en el Registro Civil de Elche. Desde el hospital o directamente en el Registro."
      whatIs="La inscripción de nacimiento es el trámite obligatorio mediante el cual se registra oficialmente el nacimiento de una persona, estableciendo su identidad legal, nombre, apellidos y filiación. Debe realizarse dentro de los 30 días siguientes al parto (ampliable 8 días más con causa justificada). Puede iniciarse desde el hospital o realizarse directamente en el Registro Civil."
      additionalInfo="En el Hospital General Universitario de Elche y otros hospitales de la zona, existe un servicio de tramitación de la inscripción de nacimiento que permite iniciar el proceso sin necesidad de desplazarse al Registro Civil. Los padres reciben el cuestionario de nacimiento que deben cumplimentar, y el hospital lo envía telemáticamente al Registro Civil."
      requirements={[
        "Cuestionario para la declaración de nacimiento (proporcionado por el hospital)",
        "Parte médico o certificado de nacimiento del hospital",
        "DNI o NIE de ambos padres en vigor",
        "Libro de familia (si ya existe de un matrimonio o hijo anterior)",
        "Certificado de matrimonio o inscripción de pareja de hecho (si procede)",
        "En caso de padres no casados: declaración de ambos reconociendo la filiación",
        "En caso de madre soltera sin reconocimiento paterno: solo documentación de la madre"
      ]}
      process={[
        "Recibir el cuestionario de nacimiento y parte médico en el hospital",
        "Cumplimentar el cuestionario con los datos del bebé (nombre elegido, etc.)",
        "Opción A: El hospital envía telemáticamente la documentación al Registro Civil",
        "Opción B: Los padres acuden personalmente al Registro Civil con la documentación",
        "Verificación de la documentación por el funcionario del Registro",
        "Declaración del nombre elegido para el bebé",
        "Práctica de la inscripción de nacimiento",
        "Expedición del certificado de nacimiento y actualización del libro de familia"
      ]}
      tips={[
        "Decide el nombre del bebé antes del parto para agilizar el trámite",
        "Se permiten hasta dos nombres simples o uno compuesto",
        "El orden de los apellidos puede elegirse de común acuerdo entre los padres",
        "Si los padres no están casados, ambos deben firmar el reconocimiento de filiación",
        "Solicita varias copias del certificado de nacimiento, las necesitarás para otros trámites",
        "No olvides inscribir al bebé en la Seguridad Social y en el padrón municipal"
      ]}
      faqs={[
        {
          question: "¿Cuánto tiempo tengo para inscribir a mi bebé?",
          answer: "El plazo ordinario es de 30 días desde el nacimiento, ampliable a 8 días más si hay causa justificada. Pasado este plazo, se requiere un expediente especial de inscripción fuera de plazo."
        },
        {
          question: "¿Puedo inscribir a mi hijo desde el hospital?",
          answer: "Sí, la mayoría de hospitales de Elche ofrecen el servicio de tramitación de la inscripción de nacimiento. El hospital envía telemáticamente la documentación al Registro Civil, evitando que los padres tengan que desplazarse."
        },
        {
          question: "¿Qué nombre puedo ponerle a mi bebé?",
          answer: "Puedes elegir hasta dos nombres simples o uno compuesto. No se admiten nombres que perjudiquen objetivamente al inscrito, ni diminutivos o variantes familiares de otros nombres. Tampoco se permite el mismo nombre que un hermano vivo."
        },
        {
          question: "¿Quién decide el orden de los apellidos del bebé?",
          answer: "Los padres deciden de común acuerdo el orden de los apellidos (paterno-materno o materno-paterno). Si no hay acuerdo, decide el Encargado del Registro Civil. El orden elegido para el primer hijo se aplicará a los siguientes."
        },
        {
          question: "¿Qué necesito si no estoy casado/a con el otro progenitor?",
          answer: "Ambos progenitores deben acudir al Registro Civil o firmar el cuestionario del hospital reconociendo la filiación. Si solo la madre quiere inscribir al bebé sin que conste el padre, puede hacerlo pero el niño solo tendrá los apellidos maternos."
        },
        {
          question: "¿Cuánto cuesta inscribir a un recién nacido?",
          answer: "La inscripción de nacimiento en el Registro Civil es totalmente gratuita. No tiene ningún coste para los padres."
        }
      ]}
      relatedServices={[
        { name: "Certificado de Nacimiento", href: "/certificado-nacimiento" },
        { name: "Inscripción Fuera de Plazo", href: "/inscripcion-nacimiento-fuera-plazo" },
        { name: "Reconocimiento Hijo No Matrimonial", href: "/reconocimiento-hijo-no-matrimonial" }
      ]}
      icon={Baby}
    />
  );
};

export default InscripcionRecienNacido;
