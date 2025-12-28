import ServicePageTemplate from "@/components/ServicePageTemplate";
import { Flag } from "lucide-react";

const JuraNacionalidad = () => {
  return (
    <ServicePageTemplate
      title="Jura de Nacionalidad Española en Elche"
      metaTitle="Jura de Nacionalidad Española en Elche | Registro Civil"
      metaDescription="Información sobre la jura o promesa de nacionalidad española en el Registro Civil de Elche. Requisitos, cita previa y procedimiento."
      canonicalUrl="https://registrocivilelche.es/jura-nacionalidad"
      breadcrumbItems={[
        { name: "Inicio", href: "/" },
        { name: "Jura de Nacionalidad", href: "/jura-nacionalidad" }
      ]}
      description="Guía para realizar la jura o promesa de fidelidad al Rey y obediencia a la Constitución en el Registro Civil de Elche."
      whatIs="La jura o promesa de nacionalidad es el acto final del proceso de adquisición de la nacionalidad española por residencia. Consiste en comparecer ante el Encargado del Registro Civil para jurar o prometer fidelidad al Rey y obediencia a la Constitución y las leyes españolas."
      requirements={[
        "Resolución favorable de concesión de nacionalidad por residencia",
        "DNI o pasaporte vigente",
        "Notificación de la cita para la jura",
        "Comparecer personalmente (no cabe representación)",
        "Acreditar residencia legal en España",
        "Tasa correspondiente (si procede)"
      ]}
      process={[
        "Recibir la resolución favorable de nacionalidad",
        "Solicitar cita para la jura en el Registro Civil",
        "Acudir personalmente el día de la cita",
        "Realizar la jura o promesa ante el Encargado",
        "Recibir el certificado de nacionalidad e iniciar trámite del DNI"
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
