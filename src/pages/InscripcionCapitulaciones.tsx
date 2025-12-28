import ServicePageTemplate from "@/components/ServicePageTemplate";
import { FileSignature } from "lucide-react";

const InscripcionCapitulaciones = () => {
  return (
    <ServicePageTemplate
      title="Inscripción de Capitulaciones Matrimoniales en Elche"
      metaTitle="Inscripción de Capitulaciones Matrimoniales en Elche | Registro Civil 2025"
      metaDescription="Información sobre la inscripción de capitulaciones matrimoniales en el Registro Civil de Elche. Régimen económico del matrimonio, requisitos y procedimiento."
      canonicalUrl="https://registrocivilelche.es/inscripcion-capitulaciones"
      breadcrumbItems={[
        { name: "Inicio", href: "/" },
        { name: "Inscripción de Capitulaciones", href: "/inscripcion-capitulaciones" }
      ]}
      description="Guía para inscribir las capitulaciones matrimoniales en el Registro Civil de Elche y establecer el régimen económico de tu matrimonio."
      whatIs="Las capitulaciones matrimoniales son el acuerdo entre cónyuges o futuros cónyuges para regular el régimen económico de su matrimonio, es decir, cómo se gestionarán los bienes durante el matrimonio y cómo se repartirán en caso de disolución. Su inscripción en el Registro Civil es necesaria para que surtan efectos frente a terceros (bancos, acreedores, etc.)."
      additionalInfo="En la Comunidad Valenciana, el régimen económico matrimonial supletorio (cuando no hay capitulaciones) es el de separación de bienes. Mediante capitulaciones, los cónyuges pueden optar por otros regímenes como gananciales o participación. Las capitulaciones pueden otorgarse antes del matrimonio o modificarse durante el mismo."
      requirements={[
        "Escritura pública de capitulaciones matrimoniales otorgada ante Notario",
        "DNI o NIE de ambos cónyuges o futuros contrayentes",
        "Certificado de matrimonio (si ya están casados)",
        "Solicitud de inscripción de capitulaciones",
        "En caso de modificación de capitulaciones anteriores, escritura de las anteriores",
        "Copia autorizada de la escritura para el Registro Civil"
      ]}
      process={[
        "Acudir a un Notario para otorgar la escritura pública de capitulaciones",
        "El Notario asesora sobre los distintos regímenes económicos posibles",
        "Firmar la escritura ante Notario",
        "Solicitar copia autorizada de la escritura para el Registro Civil",
        "Presentar la escritura en el Registro Civil de Elche",
        "El Registro verifica la documentación y realiza la inscripción",
        "Se practica la inscripción marginal en el acta de matrimonio"
      ]}
      tips={[
        "Las capitulaciones pueden otorgarse antes o después del matrimonio",
        "En la Comunidad Valenciana el régimen supletorio es separación de bienes",
        "Consulte con un abogado las implicaciones fiscales de cada régimen",
        "La inscripción es esencial para que las capitulaciones afecten a terceros",
        "Si tiene inmuebles, las capitulaciones también deben inscribirse en el Registro de la Propiedad"
      ]}
      faqs={[
        {
          question: "¿Qué son las capitulaciones matrimoniales?",
          answer: "Son un contrato entre cónyuges o futuros cónyuges que regula el régimen económico del matrimonio. Permiten elegir cómo se gestionarán los bienes (gananciales, separación de bienes, participación) y establecer otras condiciones patrimoniales."
        },
        {
          question: "¿Cuánto cuestan las capitulaciones matrimoniales?",
          answer: "El coste incluye los honorarios del Notario (variable según la complejidad y el patrimonio) y, si hay inmuebles, los gastos de inscripción en el Registro de la Propiedad. La inscripción en el Registro Civil es gratuita."
        },
        {
          question: "¿Es obligatorio hacer capitulaciones matrimoniales?",
          answer: "No, no son obligatorias. Si no se otorgan capitulaciones, se aplica el régimen económico supletorio de la comunidad autónoma donde se fije la residencia. En la Comunidad Valenciana es el de separación de bienes."
        },
        {
          question: "¿Se pueden modificar las capitulaciones después de casados?",
          answer: "Sí, las capitulaciones pueden modificarse en cualquier momento durante el matrimonio mediante nueva escritura pública ante Notario. La modificación también debe inscribirse en el Registro Civil para ser oponible a terceros."
        },
        {
          question: "¿Para qué sirve inscribir las capitulaciones en el Registro Civil?",
          answer: "La inscripción hace que las capitulaciones sean oponibles frente a terceros (bancos, acreedores, etc.). Sin la inscripción, el régimen económico pactado solo tiene efectos entre los cónyuges, no frente a terceros."
        },
        {
          question: "¿Cuál es el mejor régimen económico matrimonial?",
          answer: "No hay un régimen 'mejor' universal; depende de las circunstancias de cada pareja (profesiones, patrimonio previo, expectativas, etc.). Es recomendable consultar con un abogado o notario para elegir el más adecuado a su situación."
        }
      ]}
      relatedServices={[
        { name: "Certificado de Matrimonio", href: "/certificado-matrimonio" },
        { name: "Expediente de Matrimonio", href: "/expediente-matrimonio" },
        { name: "Fe de Vida y Estado", href: "/fe-vida-estado" }
      ]}
      icon={FileSignature}
    />
  );
};

export default InscripcionCapitulaciones;
