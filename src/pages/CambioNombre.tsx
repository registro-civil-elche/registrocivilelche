import ServicePageTemplate from "@/components/ServicePageTemplate";
import { UserCog } from "lucide-react";

const CambioNombre = () => {
  return (
    <ServicePageTemplate
      title="Cambio de Nombre e Inversión de Apellidos en Elche"
      metaTitle="Cambio de Nombre e Inversión de Apellidos en Elche | Registro Civil 2025"
      metaDescription="Guía completa para tramitar el cambio de nombre o inversión del orden de apellidos en el Registro Civil de Elche. Requisitos, documentación, plazos y procedimiento actualizado."
      canonicalUrl="https://registrocivilelche.es/cambio-nombre"
      breadcrumbItems={[
        { name: "Inicio", href: "/" },
        { name: "Cambio de Nombre e Inversión de Apellidos", href: "/cambio-nombre" }
      ]}
      description="Información completa sobre cómo solicitar el cambio de nombre propio o la inversión del orden de los apellidos en el Registro Civil de Elche. Te explicamos todos los pasos necesarios."
      whatIs="El cambio de nombre o la inversión del orden de los apellidos es un procedimiento legal que permite modificar el nombre propio o alterar el orden de los apellidos (poner el materno antes que el paterno) en el Registro Civil. Este trámite requiere autorización del Ministerio de Justicia o resolución judicial. Es un derecho reconocido por la legislación española que permite a los ciudadanos adecuar su identidad registral a sus circunstancias personales."
      additionalInfo="Desde la entrada en vigor de la Ley 20/2011 del Registro Civil y sus posteriores modificaciones, el procedimiento se ha simplificado considerablemente. El cambio de nombre puede solicitarse cuando el nombre actual causa perjuicio o cuando se usa habitualmente un nombre distinto al inscrito. La inversión de apellidos es un derecho que puede ejercerse una vez en la vida sin necesidad de justificación."
      requirements={[
        "DNI o NIE del solicitante en vigor",
        "Certificado literal de nacimiento actualizado (máximo 3 meses de antigüedad)",
        "Justificación del cambio solicitado (uso habitual, perjuicio del nombre actual, etc.)",
        "Formulario de solicitud debidamente cumplimentado",
        "En caso de menores de edad, consentimiento de ambos progenitores o tutores legales",
        "Si el menor tiene más de 12 años, se requiere también su consentimiento",
        "Documentación adicional según el tipo de cambio (certificados, pruebas de uso habitual, etc.)",
        "Tasa administrativa correspondiente"
      ]}
      process={[
        "Obtener el certificado literal de nacimiento actualizado del Registro Civil",
        "Cumplimentar el formulario de solicitud correspondiente disponible en el Registro",
        "Reunir toda la documentación justificativa del cambio",
        "Presentar la documentación completa en el Registro Civil de Elche",
        "El Registro Civil tramita el expediente al Ministerio de Justicia",
        "Esperar la resolución del Ministerio (plazo aproximado de 3 a 6 meses)",
        "Una vez aprobado, se practica la inscripción marginal en el acta de nacimiento",
        "Solicitar nuevo DNI con los datos actualizados"
      ]}
      tips={[
        "Solicita el certificado literal de nacimiento con antelación para que no caduque durante el trámite",
        "Si el cambio es por uso habitual de otro nombre, aporta documentación que lo acredite (certificados escolares, laborales, etc.)",
        "La inversión de apellidos solo puede hacerse una vez en la vida",
        "Si tienes hijos menores, considera que el cambio también les afectará",
        "Un abogado especializado puede agilizar considerablemente el proceso"
      ]}
      faqs={[
        {
          question: "¿Cuánto tiempo tarda el cambio de nombre en Elche?",
          answer: "El plazo medio para la resolución del cambio de nombre es de 3 a 6 meses desde la presentación de la solicitud. Sin embargo, este plazo puede variar según la carga de trabajo del Ministerio de Justicia y la complejidad del caso."
        },
        {
          question: "¿Puedo cambiar mi nombre sin justificación?",
          answer: "Generalmente se requiere justificación para el cambio de nombre (uso habitual, perjuicio, etc.). Sin embargo, la inversión del orden de los apellidos puede hacerse una vez en la vida sin necesidad de justificar el motivo."
        },
        {
          question: "¿Cuánto cuesta cambiar el nombre en el Registro Civil?",
          answer: "El cambio de nombre tiene una tasa administrativa que varía según la comunidad autónoma. Además, hay que añadir el coste del certificado de nacimiento y, posteriormente, la renovación del DNI. Consulte con profesionales para conocer el coste total actualizado."
        },
        {
          question: "¿Puedo añadir un segundo nombre?",
          answer: "Sí, es posible añadir un segundo nombre mediante el procedimiento de cambio de nombre. Se permite tener hasta dos nombres simples o uno compuesto. El procedimiento es el mismo que para el cambio de nombre."
        },
        {
          question: "¿Mis hijos heredarán automáticamente el cambio de apellidos?",
          answer: "Si realiza la inversión de apellidos y tiene hijos menores, estos también verán modificado el orden de sus apellidos. Para hijos mayores de edad, el cambio es voluntario y requieren solicitarlo individualmente."
        }
      ]}
      relatedServices={[
        { name: "Cambio de Sexo", href: "/cambio-sexo" },
        { name: "Rectificación de Error", href: "/rectificacion-error" },
        { name: "Certificado de Nacimiento", href: "/certificado-nacimiento" }
      ]}
      icon={UserCog}
    />
  );
};

export default CambioNombre;
