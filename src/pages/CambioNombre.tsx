import ServicePageTemplate from "@/components/ServicePageTemplate";
import { UserCog } from "lucide-react";

const CambioNombre = () => {
  return (
    <ServicePageTemplate
      title="Cambio de Nombre e Inversión de Apellidos en Elche"
      metaTitle="Cambio de Nombre e Inversión de Apellidos en Elche | Registro Civil"
      metaDescription="Guía completa para tramitar el cambio de nombre o inversión del orden de apellidos en el Registro Civil de Elche. Requisitos, documentación y procedimiento."
      canonicalUrl="https://registrocivilelche.es/cambio-nombre"
      breadcrumbItems={[
        { name: "Inicio", href: "/" },
        { name: "Cambio de Nombre e Inversión de Apellidos", href: "/cambio-nombre" }
      ]}
      description="Información sobre cómo solicitar el cambio de nombre o la inversión del orden de los apellidos en el Registro Civil de Elche."
      whatIs="El cambio de nombre o la inversión del orden de los apellidos es un procedimiento legal que permite modificar el nombre propio o alterar el orden de los apellidos (poner el materno antes que el paterno) en el Registro Civil. Este trámite requiere autorización del Ministerio de Justicia o resolución judicial."
      requirements={[
        "DNI o NIE del solicitante",
        "Certificado literal de nacimiento actualizado",
        "Justificación del cambio solicitado",
        "Formulario de solicitud cumplimentado",
        "En caso de menores, consentimiento de ambos progenitores",
        "Documentación adicional según el tipo de cambio"
      ]}
      process={[
        "Obtener el certificado literal de nacimiento actualizado",
        "Cumplimentar el formulario de solicitud correspondiente",
        "Presentar la documentación en el Registro Civil",
        "Esperar la resolución del Ministerio de Justicia",
        "Una vez aprobado, se inscribe la modificación en el Registro"
      ]}
      relatedServices={[
        { name: "Cambio de Sexo", href: "/cambio-sexo" },
        { name: "Rectificación de Error", href: "/rectificacion-error" },
        { name: "Certificado de Nacimiento", href: "/certificado-nacimiento" }
      ]}
      icon={UserCog}
    />
  );
};

export default CambioNombre;
