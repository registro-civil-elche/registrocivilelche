import ServicePageTemplate from "@/components/ServicePageTemplate";
import { Flag } from "lucide-react";

const SimplePresuncionNacionalidad = () => {
  return (
    <ServicePageTemplate
      title="Simple Presunción de Nacionalidad Española en Elche"
      metaTitle="Simple Presunción de Nacionalidad Española en Elche | Registro Civil"
      metaDescription="Información sobre la simple presunción de nacionalidad española en el Registro Civil de Elche. Requisitos, supuestos y procedimiento."
      canonicalUrl="https://registrocivilelche.es/simple-presuncion-nacionalidad"
      breadcrumbItems={[
        { name: "Inicio", href: "/" },
        { name: "Simple Presunción de Nacionalidad", href: "/simple-presuncion-nacionalidad" }
      ]}
      description="Guía sobre la acreditación de nacionalidad española mediante simple presunción en el Registro Civil de Elche."
      whatIs="La simple presunción de nacionalidad es un procedimiento para acreditar la nacionalidad española cuando no existe inscripción en el Registro Civil pero se puede presumir la condición de español por nacimiento u otras circunstancias. Se utiliza principalmente para regularizar situaciones de españoles que nunca fueron inscritos."
      requirements={[
        "Solicitud de declaración de nacionalidad por simple presunción",
        "Documentación que acredite el nacimiento en España o de padres españoles",
        "Pruebas de posesión de estado de español",
        "Certificados de los registros consulares (si procede)",
        "Testimonios o declaraciones de testigos",
        "Cualquier documento que avale la nacionalidad española"
      ]}
      process={[
        "Reunir la documentación probatoria disponible",
        "Presentar expediente de declaración de nacionalidad",
        "El Registro Civil instruye el procedimiento",
        "Se practican las diligencias probatorias necesarias",
        "Resolución y, en su caso, inscripción como español de origen"
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
