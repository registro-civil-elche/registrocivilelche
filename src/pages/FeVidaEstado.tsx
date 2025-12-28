import ServicePageTemplate from "@/components/ServicePageTemplate";
import { FileCheck } from "lucide-react";

const FeVidaEstado = () => {
  return (
    <ServicePageTemplate
      title="Fe de Vida y Estado en Elche"
      metaTitle="Fe de Vida y Estado en Elche | Registro Civil 2025"
      metaDescription="Información sobre la fe de vida y estado en el Registro Civil de Elche. Qué es, para qué sirve, cómo obtenerla, requisitos y validez del documento."
      canonicalUrl="https://registrocivilelche.es/fe-vida-estado"
      breadcrumbItems={[
        { name: "Inicio", href: "/" },
        { name: "Fe de Vida y Estado", href: "/fe-vida-estado" }
      ]}
      description="Guía completa para obtener la fe de vida y estado en el Registro Civil de Elche. Documento esencial para pensiones, herencias y trámites legales."
      whatIs="La fe de vida y estado es un documento oficial expedido por el Registro Civil que acredita dos cosas: que una persona está viva en el momento de su expedición, y cuál es su estado civil actual (soltero/a, casado/a, viudo/a, divorciado/a). Es un documento frecuentemente requerido para trámites de pensiones, herencias, procedimientos judiciales, trámites bancarios y otros fines legales."
      additionalInfo="Este documento tiene una validez limitada, generalmente de 3 a 6 meses dependiendo de la institución que lo requiera, ya que certifica una situación en un momento concreto. Es importante verificar con la entidad solicitante cuál es el plazo de validez que aceptan antes de obtener el documento."
      requirements={[
        "DNI o NIE del interesado en vigor",
        "Comparecer personalmente ante el Registro Civil (es el requisito principal)",
        "En casos excepcionales, se puede solicitar por representante con poder notarial especial",
        "Indicar el fin para el que se solicita el documento",
        "Formulario de solicitud (disponible en el propio Registro Civil)"
      ]}
      process={[
        "Acudir personalmente al Registro Civil de Elche en horario de atención",
        "Presentar el DNI o NIE original al funcionario",
        "Indicar para qué fin se necesita la fe de vida y estado",
        "El funcionario verifica la identidad del solicitante y consulta su estado civil",
        "Se expide el documento en el momento (servicio inmediato)",
        "Recoger el documento firmado y sellado"
      ]}
      tips={[
        "El documento se expide en el acto, no requiere cita previa ni esperas",
        "Verifique con la entidad solicitante qué plazo de validez aceptan",
        "Si no puede acudir personalmente, consulte si pueden aceptar una fe de vida notarial",
        "Para pensiones del extranjero, puede requerirse legalización o apostilla",
        "Algunas entidades bancarias también pueden expedir certificados de vida"
      ]}
      faqs={[
        {
          question: "¿Cuánto cuesta la fe de vida y estado?",
          answer: "La expedición de la fe de vida y estado en el Registro Civil es gratuita. No tiene tasa ni coste alguno para el ciudadano."
        },
        {
          question: "¿Cuánto tiempo tarda en expedirse?",
          answer: "La fe de vida y estado se expide en el momento, es un trámite inmediato. Solo necesita acudir al Registro Civil con su DNI y en unos minutos tendrá el documento."
        },
        {
          question: "¿Cuánto tiempo es válida la fe de vida y estado?",
          answer: "La validez depende de la entidad que la solicita, pero generalmente oscila entre 3 y 6 meses. Consulte con la institución que requiere el documento para confirmar el plazo exacto."
        },
        {
          question: "¿Puede otra persona recoger mi fe de vida?",
          answer: "No, la fe de vida requiere la comparecencia personal del interesado precisamente porque su función es acreditar que la persona está viva. Solo en casos muy excepcionales y con poder notarial especial se permite la representación."
        },
        {
          question: "¿Para qué trámites se necesita la fe de vida y estado?",
          answer: "Se requiere habitualmente para: cobro de pensiones (especialmente del extranjero), herencias y sucesiones, expedientes de matrimonio, trámites bancarios con cuentas de fallecidos, procedimientos judiciales, y otros trámites administrativos que requieran acreditar que la persona está viva."
        },
        {
          question: "¿Necesito cita previa para la fe de vida?",
          answer: "No, la fe de vida y estado no requiere cita previa. Puede acudir directamente al Registro Civil de Elche en horario de atención al público (lunes a viernes de 9:00 a 13:00)."
        }
      ]}
      relatedServices={[
        { name: "Certificado de Nacimiento", href: "/certificado-nacimiento" },
        { name: "Certificado de Matrimonio", href: "/certificado-matrimonio" },
        { name: "Expediente de Matrimonio", href: "/expediente-matrimonio" }
      ]}
      icon={FileCheck}
    />
  );
};

export default FeVidaEstado;
