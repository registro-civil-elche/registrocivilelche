import ServicePageTemplate from "@/components/ServicePageTemplate";
import { PenLine } from "lucide-react";

const RectificacionError = () => {
  return (
    <ServicePageTemplate
      title="Rectificación de Error Registral en Elche"
      metaTitle="Rectificación de Error Registral en Elche | Registro Civil 2025"
      metaDescription="Información sobre la rectificación de errores en inscripciones del Registro Civil de Elche. Tipos de errores, requisitos, procedimiento y plazos para corregir datos incorrectos."
      canonicalUrl="https://registrocivilelche.es/rectificacion-error"
      breadcrumbItems={[
        { name: "Inicio", href: "/" },
        { name: "Rectificación de Error", href: "/rectificacion-error" }
      ]}
      description="Guía completa para corregir errores en las inscripciones del Registro Civil de Elche. Errores materiales, de concepto y procedimiento de rectificación."
      whatIs="La rectificación de error registral es el procedimiento para corregir los errores que se hayan producido en las inscripciones del Registro Civil. Existen dos tipos: errores materiales (equivocaciones evidentes en datos como fechas, nombres mal escritos, etc.) y errores de concepto (calificación jurídica errónea de los hechos). El procedimiento varía según el tipo de error."
      additionalInfo="Los errores materiales pueden rectificarse mediante expediente ante el propio Registro Civil. Los errores de concepto, al implicar una calificación jurídica, generalmente requieren resolución judicial, salvo que resulten evidentes del propio contexto del documento. Es importante actuar cuanto antes si se detecta un error, ya que puede afectar a la validez de otros documentos."
      requirements={[
        "Solicitud de rectificación indicando claramente el error detectado",
        "DNI o NIE del interesado o solicitante",
        "Certificado de la inscripción que contiene el error",
        "Documentación que acredite cuál es el dato correcto",
        "En errores de concepto graves: puede requerirse resolución judicial",
        "Poder de representación si actúa un tercero en nombre del interesado",
        "Justificación del interés legítimo en la rectificación"
      ]}
      process={[
        "Identificar el error en la inscripción registral (nacimiento, matrimonio, etc.)",
        "Obtener certificado literal de la inscripción errónea",
        "Reunir documentación que pruebe cuál es el dato correcto",
        "Presentar solicitud de rectificación en el Registro Civil de Elche",
        "El Encargado del Registro califica el tipo de error y la solicitud",
        "Para errores materiales: resolución directa por el Encargado",
        "Para errores de concepto: posible remisión a vía judicial",
        "Si procede, se practica la rectificación mediante inscripción marginal"
      ]}
      tips={[
        "Actúe cuanto antes al detectar un error, no lo deje para más adelante",
        "Conserve documentos originales que acrediten el dato correcto",
        "Los errores en el nombre pueden afectar a DNI, pasaporte y otros documentos",
        "Si el error proviene de documentos extranjeros, verifique también el original",
        "Algunos errores pueden rectificarse gratuitamente si son culpa del Registro",
        "Un abogado puede determinar la vía más rápida según el tipo de error"
      ]}
      faqs={[
        {
          question: "¿Qué es un error material en el Registro Civil?",
          answer: "Es una equivocación evidente en los datos (nombre mal escrito, fecha incorrecta, etc.) que resulta clara del propio documento o de documentos complementarios. No implica una calificación jurídica errónea, sino un simple error de transcripción."
        },
        {
          question: "¿Qué es un error de concepto?",
          answer: "Es un error en la calificación jurídica de los hechos, no en los datos en sí. Por ejemplo, inscribir como legítimo a un hijo que era natural, o aplicar incorrectamente la legislación sobre nacionalidad. Generalmente requiere resolución judicial."
        },
        {
          question: "¿Cuánto cuesta rectificar un error en el Registro Civil?",
          answer: "Si el error es imputable al propio Registro Civil, la rectificación es gratuita. Si el error proviene de datos aportados por el interesado, puede haber tasas asociadas al expediente de rectificación."
        },
        {
          question: "¿Cuánto tiempo tarda la rectificación de un error?",
          answer: "Para errores materiales simples, puede resolverse en semanas. Los errores de concepto o casos complejos pueden tardar meses, especialmente si requieren resolución judicial."
        },
        {
          question: "¿Puedo pedir la rectificación de la inscripción de otra persona?",
          answer: "Generalmente solo puede solicitar la rectificación el propio interesado, su representante legal, o quien acredite un interés legítimo directo. Los familiares directos suelen tener legitimación para solicitarla."
        },
        {
          question: "¿La rectificación afecta a los documentos ya expedidos?",
          answer: "La rectificación tiene efectos desde la fecha de la inscripción original, pero los documentos ya expedidos (DNI, certificados) deben actualizarse. Se recomienda solicitar nuevos certificados y actualizar el DNI tras la rectificación."
        }
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
