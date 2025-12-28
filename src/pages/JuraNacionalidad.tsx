import ServicePageTemplate from "@/components/ServicePageTemplate";
import { Flag } from "lucide-react";

const JuraNacionalidad = () => {
  return (
    <ServicePageTemplate
      title="Jura de Nacionalidad Española en Elche"
      metaTitle="Jura de Nacionalidad Española en Elche | Registro Civil 2025"
      metaDescription="Información completa sobre la jura o promesa de nacionalidad española en el Registro Civil de Elche. Requisitos, cita previa, documentación y procedimiento actualizado."
      canonicalUrl="https://registrocivilelche.es/jura-nacionalidad"
      breadcrumbItems={[
        { name: "Inicio", href: "/" },
        { name: "Jura de Nacionalidad", href: "/jura-nacionalidad" }
      ]}
      description="Guía para realizar la jura o promesa de fidelidad al Rey y obediencia a la Constitución para adquirir la nacionalidad española en el Registro Civil de Elche."
      whatIs="La jura o promesa de nacionalidad es el acto solemne y final del proceso de adquisición de la nacionalidad española por residencia. Consiste en comparecer personalmente ante el Encargado del Registro Civil para jurar o prometer fidelidad al Rey y obediencia a la Constitución y las leyes españolas. Este acto es requisito imprescindible para completar la adquisición de la nacionalidad."
      additionalInfo="La jura de nacionalidad debe realizarse en el plazo de 180 días desde la notificación de la resolución favorable de concesión de nacionalidad. Si no se realiza en este plazo, se entiende que el interesado renuncia a la nacionalidad y se archiva el expediente. Es fundamental no dejar pasar este plazo."
      requirements={[
        "Resolución favorable de concesión de nacionalidad española por residencia",
        "DNI, pasaporte o tarjeta de residencia en vigor",
        "Notificación oficial de la cita para la jura (si se ha recibido)",
        "Comparecer personalmente (no cabe representación ni delegación)",
        "Encontrarse legalmente en España en el momento de la jura",
        "Haber abonado la tasa correspondiente (si procede según la resolución)"
      ]}
      process={[
        "Recibir la resolución favorable de concesión de nacionalidad por residencia",
        "Solicitar cita para la jura en el Registro Civil de Elche",
        "Esperar la asignación de fecha (puede haber lista de espera)",
        "Acudir personalmente el día y hora de la cita",
        "Presentar la documentación requerida",
        "Realizar la jura o promesa ante el Encargado del Registro Civil",
        "Firmar el acta de la jura",
        "Recibir el certificado de nacionalidad",
        "Solicitar el DNI español en la Policía Nacional"
      ]}
      tips={[
        "No deje pasar el plazo de 180 días desde la notificación de la resolución",
        "Puede elegir entre 'jurar' o 'prometer', ambas fórmulas son válidas",
        "Si no ha recibido la cita, contacte con el Registro Civil proactivamente",
        "Lleve documentación identificativa aunque no figure en los requisitos",
        "Tras la jura, tiene 1 mes para solicitar el DNI español",
        "Si tiene dudas sobre el procedimiento, consulte con un abogado especializado"
      ]}
      faqs={[
        {
          question: "¿Cuál es el plazo para realizar la jura de nacionalidad?",
          answer: "El plazo es de 180 días (aproximadamente 6 meses) desde la notificación de la resolución favorable. Si no se realiza la jura en este plazo, se considera que renuncia a la nacionalidad y se archiva el expediente."
        },
        {
          question: "¿Qué diferencia hay entre jurar y prometer?",
          answer: "No hay ninguna diferencia legal. Ambas fórmulas tienen exactamente el mismo valor jurídico. El interesado puede elegir libremente entre jurar o prometer fidelidad al Rey y obediencia a la Constitución."
        },
        {
          question: "¿Puedo enviar a otra persona a jurar en mi nombre?",
          answer: "No, la jura de nacionalidad es un acto personalísimo que requiere la comparecencia personal del interesado. No cabe representación, delegación ni realización por videoconferencia."
        },
        {
          question: "¿Cuánto tiempo tardan en darme cita para la jura?",
          answer: "El tiempo de espera varía según el Registro Civil y la demanda. En algunos casos puede ser de semanas, en otros de varios meses. Es recomendable solicitar la cita cuanto antes tras recibir la resolución favorable."
        },
        {
          question: "¿Qué hago si no me llega la cita para la jura?",
          answer: "Si han pasado varias semanas desde la resolución favorable y no ha recibido cita, contacte directamente con el Registro Civil de Elche para verificar el estado de su expediente y solicitar la asignación de cita."
        },
        {
          question: "¿Qué tengo que hacer después de la jura?",
          answer: "Tras la jura, recibirá un certificado literal de nacimiento español. Con este documento, debe solicitar el DNI español en la Policía Nacional en el plazo de 1 mes. También deberá actualizar otros documentos como el permiso de conducir si lo tiene."
        }
      ]}
      relatedServices={[
        { name: "Jura Nacionalidad Opción", href: "/jura-nacionalidad-opcion" },
        { name: "Expediente Nacionalidad por Opción", href: "/expediente-nacionalidad-opcion" },
        { name: "Conservación de Nacionalidad", href: "/conservacion-nacionalidad" }
      ]}
      icon={Flag}
    />
  );
};

export default JuraNacionalidad;
