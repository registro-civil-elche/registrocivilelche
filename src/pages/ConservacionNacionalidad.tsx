import ServicePageTemplate from "@/components/ServicePageTemplate";
import { Flag } from "lucide-react";

const ConservacionNacionalidad = () => {
  return (
    <ServicePageTemplate
      title="Conservación y Recuperación de Nacionalidad Española en Elche"
      metaTitle="Conservación y Recuperación de Nacionalidad Española en Elche | Registro Civil"
      metaDescription="Información sobre la conservación y recuperación de la nacionalidad española en el Registro Civil de Elche. Requisitos y procedimiento completo."
      canonicalUrl="https://registrocivilelche.es/conservacion-nacionalidad"
      breadcrumbItems={[
        { name: "Inicio", href: "/" },
        { name: "Conservación y Recuperación de Nacionalidad", href: "/conservacion-nacionalidad" }
      ]}
      description="Guía para solicitar la conservación o recuperación de la nacionalidad española en el Registro Civil de Elche."
      whatIs="La conservación de la nacionalidad española permite mantener la ciudadanía española cuando se adquiere otra nacionalidad, cumpliendo ciertos requisitos. La recuperación permite a quienes perdieron la nacionalidad española volver a adquirirla. Ambos trámites se realizan en el Registro Civil."
      requirements={[
        "DNI o pasaporte español (si se conserva)",
        "Certificado literal de nacimiento español",
        "Acreditación de haber poseído la nacionalidad española",
        "Residencia legal en España (en algunos casos)",
        "Declaración de recuperación ante el Encargado del Registro",
        "Certificado de antecedentes penales"
      ]}
      process={[
        "Reunir la documentación acreditativa de nacionalidad española anterior",
        "Presentar la solicitud de conservación o recuperación",
        "Comparecer ante el Encargado del Registro Civil",
        "Realizar la declaración correspondiente",
        "Esperar la inscripción en el Registro Civil"
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

export default ConservacionNacionalidad;
