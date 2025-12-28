import ServicePageTemplate from "@/components/ServicePageTemplate";
import { Flag } from "lucide-react";

const SimplePresuncionNacionalidad = () => {
  return (
    <ServicePageTemplate
      title="Simple Presunción de Nacionalidad Española en Elche"
      metaTitle="Simple Presunción de Nacionalidad Española en Elche | Registro Civil 2025"
      metaDescription="Información sobre la simple presunción de nacionalidad española en el Registro Civil de Elche. Cómo acreditar la nacionalidad española sin inscripción previa."
      canonicalUrl="https://registrocivilelche.es/simple-presuncion-nacionalidad"
      breadcrumbItems={[
        { name: "Inicio", href: "/" },
        { name: "Simple Presunción de Nacionalidad", href: "/simple-presuncion-nacionalidad" }
      ]}
      description="Guía sobre la acreditación de nacionalidad española mediante simple presunción en el Registro Civil de Elche para españoles no inscritos."
      whatIs="La simple presunción de nacionalidad es un procedimiento para acreditar la nacionalidad española cuando no existe inscripción en el Registro Civil español pero se puede presumir la condición de español por nacimiento u otras circunstancias. Se utiliza principalmente para regularizar situaciones de españoles que nunca fueron inscritos, descendientes de españoles, o personas que han sido tratadas como españoles durante años."
      additionalInfo="Este procedimiento se basa en el artículo 96.2 de la Ley del Registro Civil, que permite inscribir como español a quien acredite la posesión y utilización continuada de la nacionalidad española. Es especialmente útil para personas cuyos ascendientes perdieron documentación durante conflictos, emigración u otras circunstancias históricas."
      requirements={[
        "Solicitud de declaración de nacionalidad española por simple presunción",
        "Documentación que acredite el nacimiento en España o de padres españoles",
        "Pruebas de posesión de estado de español (uso de DNI, voto, etc.)",
        "Certificados de los registros consulares (si existen inscripciones en consulados)",
        "Testimonios escritos o declaraciones de testigos",
        "Partidas de bautismo u otros documentos históricos",
        "Cualquier documento que avale la nacionalidad española (certificados, censos, etc.)",
        "DNI o pasaporte español caducado (si se tuvo)"
      ]}
      process={[
        "Reunir toda la documentación probatoria disponible",
        "Preparar un expediente completo con las pruebas de nacionalidad",
        "Presentar la solicitud de declaración de nacionalidad en el Registro Civil",
        "Aportar declaraciones de testigos que conozcan la situación",
        "El Registro Civil instruye el procedimiento e investiga",
        "Posible requerimiento de documentación adicional",
        "El Encargado dicta resolución sobre la nacionalidad",
        "Si es favorable, se practica la inscripción como español de origen"
      ]}
      tips={[
        "Recopile todos los documentos históricos que pueda encontrar",
        "Los archivos parroquiales pueden contener información valiosa",
        "Los censos electorales antiguos son prueba muy relevante",
        "Las declaraciones de familiares mayores pueden ser útiles",
        "Un DNI o pasaporte caducado es una prueba muy sólida",
        "Un abogado especializado puede ser decisivo en casos complejos"
      ]}
      faqs={[
        {
          question: "¿Qué es la posesión de estado de español?",
          answer: "Es la situación de quien ha sido tratado como español, tanto por las autoridades como por la sociedad, durante un período prolongado. Se acredita con documentos como DNI, pasaporte, censos electorales, certificados de empadronamiento como español, etc."
        },
        {
          question: "¿Puedo acreditar mi nacionalidad si nunca tuve DNI español?",
          answer: "Sí, aunque es más difícil. Deberá aportar otras pruebas como certificados de nacimiento de ascendientes españoles, partidas de bautismo, documentación de emigración, o cualquier prueba que demuestre el vínculo con España."
        },
        {
          question: "¿Cuánto tiempo tarda el expediente de simple presunción?",
          answer: "El plazo es variable y depende de la complejidad del caso y las pruebas disponibles. Puede oscilar entre 6 meses y 2 años en los casos más complejos."
        },
        {
          question: "¿Qué diferencia hay entre simple presunción y nacionalidad por opción?",
          answer: "La simple presunción sirve para inscribir a quien YA ES español pero no está registrado. La opción es para ADQUIRIR la nacionalidad cuando se tiene derecho a ello (hijos de español, etc.). Son procedimientos diferentes con finalidades distintas."
        },
        {
          question: "¿Necesito abogado para este procedimiento?",
          answer: "No es obligatorio, pero es muy recomendable. Los expedientes de simple presunción son complejos y requieren una estrategia probatoria adecuada. Un abogado especializado aumenta significativamente las posibilidades de éxito."
        },
        {
          question: "¿Qué ocurre si mi expediente es denegado?",
          answer: "Si el Encargado del Registro Civil deniega la inscripción, puede interponerse recurso ante la Dirección General de Seguridad Jurídica y Fe Pública (antigua DGRN). También puede explorarse la vía judicial."
        }
      ]}
      relatedServices={[
        { name: "Conservación de Nacionalidad", href: "/conservacion-nacionalidad" },
        { name: "Jura de Nacionalidad", href: "/jura-nacionalidad" },
        { name: "Expediente Nacionalidad por Opción", href: "/expediente-nacionalidad-opcion" }
      ]}
      icon={Flag}
    />
  );
};

export default SimplePresuncionNacionalidad;
