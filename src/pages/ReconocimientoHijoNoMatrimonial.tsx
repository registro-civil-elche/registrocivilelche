import ServicePageTemplate from "@/components/ServicePageTemplate";
import { Users } from "lucide-react";

const ReconocimientoHijoNoMatrimonial = () => {
  return (
    <ServicePageTemplate
      title="Reconocimiento de Hijo No Matrimonial en Elche"
      metaTitle="Reconocimiento de Hijo No Matrimonial en Elche | Registro Civil 2025"
      metaDescription="Información sobre el reconocimiento de filiación de hijo no matrimonial en el Registro Civil de Elche. Requisitos, formas de reconocimiento y procedimiento completo."
      canonicalUrl="https://registrocivilelche.es/reconocimiento-hijo-no-matrimonial"
      breadcrumbItems={[
        { name: "Inicio", href: "/" },
        { name: "Reconocimiento Hijo No Matrimonial", href: "/reconocimiento-hijo-no-matrimonial" }
      ]}
      description="Guía completa para el reconocimiento de paternidad o maternidad de hijos nacidos fuera del matrimonio en el Registro Civil de Elche."
      whatIs="El reconocimiento de hijo no matrimonial es el acto jurídico voluntario mediante el cual el padre (o madre) reconoce la filiación de un hijo nacido fuera del matrimonio. Este reconocimiento establece legalmente el vínculo de filiación con todos sus efectos (apellidos, derechos hereditarios, obligación de alimentos, etc.). Puede hacerse ante el Encargado del Registro Civil, en testamento, o en documento público notarial."
      additionalInfo="El reconocimiento es irrevocable una vez inscrito en el Registro Civil. Solo puede impugnarse por vicio del consentimiento (error, violencia o intimidación). Es importante distinguir el reconocimiento voluntario de la reclamación judicial de paternidad, que es un proceso contencioso diferente."
      requirements={[
        "DNI o NIE del progenitor que realiza el reconocimiento",
        "Certificado de nacimiento del hijo (si ya está inscrito)",
        "Consentimiento expreso del otro progenitor (si figura en la inscripción)",
        "Si el hijo es mayor de edad: su consentimiento expreso es imprescindible",
        "Si el hijo es menor: consentimiento del representante legal o aprobación judicial",
        "Declaración de reconocimiento de filiación",
        "En reconocimiento prenatal: certificado médico de embarazo"
      ]}
      process={[
        "Comparecer ante el Encargado del Registro Civil de Elche",
        "Manifestar la voluntad inequívoca de reconocer al hijo",
        "Aportar la documentación requerida",
        "Obtener los consentimientos necesarios según el caso",
        "El Encargado califica la legalidad del reconocimiento",
        "Si es conforme a derecho, se practica la inscripción marginal",
        "El hijo adquiere los apellidos correspondientes",
        "Se expide nuevo certificado de nacimiento con la filiación completa"
      ]}
      tips={[
        "El reconocimiento puede hacerse antes del nacimiento (prenatal)",
        "También puede hacerse en testamento o ante Notario",
        "El reconocimiento es irrevocable una vez inscrito",
        "Si hay oposición del otro progenitor, puede requerirse autorización judicial",
        "El hijo mayor de edad debe consentir expresamente el reconocimiento",
        "Un abogado puede asesorarle sobre las implicaciones legales del reconocimiento"
      ]}
      faqs={[
        {
          question: "¿Qué efectos tiene el reconocimiento de un hijo?",
          answer: "El reconocimiento establece la filiación legal con todos sus efectos: el hijo adquiere los apellidos del progenitor reconocedor, derechos hereditarios, derecho a alimentos, y el progenitor adquiere la patria potestad y las obligaciones inherentes a la filiación."
        },
        {
          question: "¿Puedo reconocer a mi hijo antes de que nazca?",
          answer: "Sí, el reconocimiento prenatal es posible. Se puede realizar ante el Encargado del Registro Civil aportando un certificado médico de embarazo. Este reconocimiento quedará pendiente de confirmación tras el nacimiento."
        },
        {
          question: "¿Necesito el consentimiento de la madre para reconocer a mi hijo?",
          answer: "Si la madre ya figura en la inscripción de nacimiento, generalmente se requiere su consentimiento o, en su defecto, aprobación judicial. Si el hijo es mayor de edad, es su consentimiento el que se requiere."
        },
        {
          question: "¿Puede un hijo mayor de edad ser reconocido sin su consentimiento?",
          answer: "No, el reconocimiento de un hijo mayor de edad requiere su consentimiento expreso. Sin este consentimiento, el reconocimiento no produce efectos."
        },
        {
          question: "¿Se puede anular un reconocimiento de paternidad?",
          answer: "El reconocimiento es irrevocable, pero puede impugnarse judicialmente si se demuestra que hubo vicio del consentimiento (error, violencia o intimidación) o si se prueba que el reconocedor no es el padre biológico."
        },
        {
          question: "¿Qué diferencia hay entre reconocimiento y reclamación de paternidad?",
          answer: "El reconocimiento es un acto voluntario del progenitor. La reclamación de paternidad es un proceso judicial que se inicia cuando el presunto padre no quiere reconocer voluntariamente al hijo. En la reclamación puede ordenarse una prueba de ADN."
        }
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
