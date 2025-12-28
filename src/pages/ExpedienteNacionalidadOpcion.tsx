import ServicePageTemplate from "@/components/ServicePageTemplate";
import { Flag } from "lucide-react";

const ExpedienteNacionalidadOpcion = () => {
  return (
    <ServicePageTemplate
      title="Expediente de Nacionalidad por Opción en Elche"
      metaTitle="Expediente de Nacionalidad por Opción en Elche | Registro Civil"
      metaDescription="Información sobre la nacionalidad española por opción en el Registro Civil de Elche. Quién puede optar, requisitos y procedimiento."
      canonicalUrl="https://registrocivilelche.es/expediente-nacionalidad-opcion"
      breadcrumbItems={[
        { name: "Inicio", href: "/" },
        { name: "Expediente Nacionalidad por Opción", href: "/expediente-nacionalidad-opcion" }
      ]}
      description="Guía sobre la adquisición de la nacionalidad española por derecho de opción en el Registro Civil de Elche."
      whatIs="La nacionalidad española por opción es una vía de adquisición de la ciudadanía española para personas que tienen un vínculo especial con España, como hijos o nietos de españoles, personas bajo tutela de ciudadanos españoles, o quienes hayan estado sujetos a la patria potestad de un español."
      requirements={[
        "Certificado literal de nacimiento del interesado",
        "Certificado de nacimiento del progenitor español",
        "DNI o pasaporte español del progenitor",
        "Certificado de matrimonio de los padres (si procede)",
        "Acreditación del vínculo que da derecho a la opción",
        "En caso de menores, representación legal"
      ]}
      process={[
        "Verificar que se cumple alguno de los supuestos de opción",
        "Reunir la documentación acreditativa",
        "Presentar el expediente en el Registro Civil",
        "Comparecer ante el Encargado del Registro",
        "Realizar la declaración de opción y jurar o prometer fidelidad al Rey"
      ]}
      relatedServices={[
        { name: "Jura de Nacionalidad", href: "/jura-nacionalidad" },
        { name: "Jura Nacionalidad Opción", href: "/jura-nacionalidad-opcion" },
        { name: "Conservación de Nacionalidad", href: "/conservacion-nacionalidad" }
      ]}
      icon={Flag}
    />
  );
};

export default ExpedienteNacionalidadOpcion;
