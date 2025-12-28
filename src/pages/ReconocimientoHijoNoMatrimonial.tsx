import ServicePageTemplate from "@/components/ServicePageTemplate";
import { Users } from "lucide-react";

const ReconocimientoHijoNoMatrimonial = () => {
  return (
    <ServicePageTemplate
      title="Reconocimiento de Hijo No Matrimonial en Elche"
      metaTitle="Reconocimiento de Hijo No Matrimonial en Elche | Registro Civil"
      metaDescription="Información sobre el reconocimiento de filiación de hijo no matrimonial en el Registro Civil de Elche. Requisitos, formas y procedimiento."
      canonicalUrl="https://registrocivilelche.es/reconocimiento-hijo-no-matrimonial"
      breadcrumbItems={[
        { name: "Inicio", href: "/" },
        { name: "Reconocimiento Hijo No Matrimonial", href: "/reconocimiento-hijo-no-matrimonial" }
      ]}
      description="Guía para el reconocimiento de paternidad o maternidad de hijos nacidos fuera del matrimonio en el Registro Civil de Elche."
      whatIs="El reconocimiento de hijo no matrimonial es el acto jurídico mediante el cual el padre (o madre) reconoce voluntariamente la filiación de un hijo nacido fuera del matrimonio. Este reconocimiento puede hacerse ante el Encargado del Registro Civil, en testamento o en documento público."
      requirements={[
        "DNI o NIE del progenitor que reconoce",
        "Certificado de nacimiento del hijo",
        "Consentimiento del otro progenitor (si figura en la inscripción)",
        "Si el hijo es mayor de edad: su consentimiento expreso",
        "Si el hijo es menor: consentimiento de su representante legal",
        "Declaración de reconocimiento de filiación"
      ]}
      process={[
        "Comparecer ante el Encargado del Registro Civil",
        "Manifestar la voluntad de reconocer al hijo",
        "Obtener los consentimientos necesarios",
        "El Encargado califica la legalidad del reconocimiento",
        "Se practica la inscripción marginal correspondiente"
      ]}
      relatedServices={[
        { name: "Inscripción de Recién Nacido", href: "/inscripcion-recien-nacido" },
        { name: "Certificado de Nacimiento", href: "/certificado-nacimiento" },
        { name: "Inscripción Fuera de Plazo", href: "/inscripcion-nacimiento-fuera-plazo" }
      ]}
      icon={Users}
    />
  );
};

export default ReconocimientoHijoNoMatrimonial;
