import ServicePageTemplate from "@/components/ServicePageTemplate";
import { Flag } from "lucide-react";

const JuraNacionalidadOpcion = () => {
  return (
    <ServicePageTemplate
      title="Jura de Nacionalidad por Opción en Elche"
      metaTitle="Jura de Nacionalidad por Opción en Elche | Registro Civil"
      metaDescription="Información sobre la jura de nacionalidad por derecho de opción en el Registro Civil de Elche. Requisitos y procedimiento para hijos de españoles."
      canonicalUrl="https://registrocivilelche.es/jura-nacionalidad-opcion"
      breadcrumbItems={[
        { name: "Inicio", href: "/" },
        { name: "Jura Nacionalidad Opción", href: "/jura-nacionalidad-opcion" }
      ]}
      description="Guía para realizar la jura de nacionalidad cuando se adquiere por derecho de opción en el Registro Civil de Elche."
      whatIs="La jura de nacionalidad por opción es el acto mediante el cual las personas que tienen derecho a adquirir la nacionalidad española por opción (hijos de españoles, nacidos en España de padres extranjeros, etc.) formalizan su adquisición jurando o prometiendo fidelidad al Rey y obediencia a la Constitución."
      requirements={[
        "Acreditación del derecho de opción (certificados de nacimiento)",
        "DNI o pasaporte del interesado",
        "Certificado de nacimiento del progenitor español",
        "Libro de familia del progenitor español",
        "En caso de menores: representación legal de ambos padres",
        "Comparecer personalmente ante el Registro Civil"
      ]}
      process={[
        "Verificar que se cumple el derecho de opción",
        "Reunir la documentación acreditativa",
        "Solicitar cita en el Registro Civil",
        "Comparecer y realizar la declaración de opción",
        "Jurar o prometer fidelidad al Rey y obediencia a la Constitución"
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
