import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { HelpCircle, FileText, Clock, MapPin, Phone, Euro } from "lucide-react";

const PreguntasFrecuentes = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "¿Dónde está ubicado el Registro Civil de Elche?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "El Registro Civil de Elche está ubicado en la Calle Abogados de Atocha, 21, 03203 Elche (Alicante). Se encuentra en el edificio de los Juzgados de Elche."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cuál es el horario del Registro Civil de Elche?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "El horario de atención al público es de lunes a viernes de 9:00 a 14:00 horas. Se recomienda acudir con cita previa para evitar esperas."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cuánto cuesta un certificado del Registro Civil?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Los certificados del Registro Civil son gratuitos cuando se solicitan presencialmente o por correo. Si se tramitan online a través de algunos servicios, pueden tener tasas administrativas."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cuánto tarda en llegar un certificado de nacimiento?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Presencialmente se obtiene en el momento. Por correo postal tarda entre 10-15 días laborables. Online a través del Ministerio de Justicia, entre 3-5 días laborables."
        }
      },
      {
        "@type": "Question",
        "name": "¿Quién puede solicitar un certificado de nacimiento?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Puede solicitar un certificado de nacimiento cualquier persona mayor de edad, ya que los datos del Registro Civil son públicos. No es necesario demostrar parentesco."
        }
      },
      {
        "@type": "Question",
        "name": "¿Necesito cita previa para ir al Registro Civil de Elche?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No es obligatorio, pero se recomienda solicitar cita previa para evitar esperas. La cita se puede pedir a través del teléfono 966 91 70 96 o presencialmente."
        }
      },
      {
        "@type": "Question",
        "name": "¿Qué documentos necesito para solicitar un certificado?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Para solicitar un certificado necesitas tu DNI o NIE en vigor. También debes conocer los datos de la persona (nombre completo, fecha y lugar del evento a certificar)."
        }
      },
      {
        "@type": "Question",
        "name": "¿Puedo solicitar certificados de familiares fallecidos?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí, cualquier persona puede solicitar certificados de defunción, nacimiento o matrimonio de personas fallecidas, ya que son documentos públicos."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cómo puedo obtener un certificado literal de nacimiento?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "El certificado literal se solicita igual que el extracto, pero especificando que deseas la versión literal. Contiene toda la información del acta incluyendo notas marginales."
        }
      },
      {
        "@type": "Question",
        "name": "¿Sirven los certificados del Registro Civil para trámites en el extranjero?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí, pero generalmente necesitan apostilla de La Haya o legalización según el país de destino. También puede requerirse traducción jurada."
        }
      }
    ]
  };

  const faqCategories = [
    {
      title: "Ubicación y Horarios",
      icon: MapPin,
      questions: [
        {
          question: "¿Dónde está ubicado el Registro Civil de Elche?",
          answer: "El Registro Civil de Elche está ubicado en la Calle Abogados de Atocha, 21, 03203 Elche (Alicante). Se encuentra en el edificio de los Juzgados de Elche, con fácil acceso en transporte público y parking cercano."
        },
        {
          question: "¿Cuál es el horario del Registro Civil de Elche?",
          answer: "El horario de atención al público es de lunes a viernes de 9:00 a 14:00 horas. Se recomienda acudir con cita previa para evitar esperas, especialmente en períodos de alta demanda."
        },
        {
          question: "¿Cuál es el teléfono del Registro Civil de Elche?",
          answer: "El teléfono de contacto del Registro Civil de Elche es 966 91 70 96. Puedes llamar para solicitar información o cita previa en horario de atención al público."
        },
        {
          question: "¿Necesito cita previa para ir al Registro Civil de Elche?",
          answer: "No es obligatorio, pero se recomienda solicitar cita previa para evitar esperas. La cita se puede pedir a través del teléfono 966 91 70 96 o presencialmente en el propio Registro."
        }
      ]
    },
    {
      title: "Certificados",
      icon: FileText,
      questions: [
        {
          question: "¿Cuánto cuesta un certificado del Registro Civil?",
          answer: "Los certificados del Registro Civil son gratuitos cuando se solicitan presencialmente o por correo postal. Algunos servicios online de terceros pueden cobrar tasas por gestión."
        },
        {
          question: "¿Quién puede solicitar un certificado de nacimiento?",
          answer: "Puede solicitar un certificado de nacimiento cualquier persona mayor de edad, ya que los datos del Registro Civil son públicos. No es necesario demostrar parentesco ni interés legítimo."
        },
        {
          question: "¿Qué diferencia hay entre certificado literal y en extracto?",
          answer: "El certificado en extracto contiene los datos esenciales del acta. El certificado literal incluye toda la información del acta original, incluyendo notas marginales con modificaciones posteriores como cambios de nombre o rectificaciones."
        },
        {
          question: "¿Puedo solicitar certificados de familiares fallecidos?",
          answer: "Sí, cualquier persona puede solicitar certificados de defunción, nacimiento o matrimonio de personas fallecidas. Los datos del Registro Civil tienen carácter público."
        },
        {
          question: "¿Sirven los certificados para trámites en el extranjero?",
          answer: "Sí, pero generalmente necesitan apostilla de La Haya (para países firmantes del Convenio) o legalización diplomática (para otros países). También puede requerirse traducción jurada al idioma del país de destino."
        }
      ]
    },
    {
      title: "Plazos y Tiempos",
      icon: Clock,
      questions: [
        {
          question: "¿Cuánto tarda en llegar un certificado de nacimiento?",
          answer: "Presencialmente se obtiene en el momento si los datos están en el sistema. Por correo postal tarda entre 10-15 días laborables. Online a través del Ministerio de Justicia, entre 3-5 días laborables."
        },
        {
          question: "¿Cuánto tiempo son válidos los certificados?",
          answer: "Los certificados del Registro Civil no tienen fecha de caducidad legal. Sin embargo, algunas administraciones o entidades pueden requerir certificados emitidos en los últimos 3 o 6 meses."
        },
        {
          question: "¿Puedo obtener un certificado urgente?",
          answer: "La forma más rápida es acudir presencialmente con cita previa, donde se obtiene en el momento. También se puede contratar un gestor o asesor legal para tramitaciones urgentes."
        }
      ]
    },
    {
      title: "Documentación",
      icon: HelpCircle,
      questions: [
        {
          question: "¿Qué documentos necesito para solicitar un certificado?",
          answer: "Para solicitar un certificado necesitas tu DNI o NIE en vigor. También debes conocer los datos de la persona: nombre completo, fecha aproximada y lugar del evento a certificar (nacimiento, matrimonio o defunción)."
        },
        {
          question: "¿Puedo solicitar certificados sin conocer todos los datos?",
          answer: "Es recomendable aportar la mayor información posible. Si no conoces la fecha exacta, puedes indicar un rango de años. El personal del Registro puede ayudar a localizar el acta con los datos disponibles."
        },
        {
          question: "¿Qué hago si no encuentran mi inscripción?",
          answer: "Si no localizan tu inscripción, puede que esté en otro Registro (del lugar donde ocurrió el evento). También puede requerirse una inscripción fuera de plazo si nunca se realizó. Consulta con un asesor legal para estos casos."
        }
      ]
    }
  ];

  const breadcrumbItems = [
    { name: "Inicio", href: "/" },
    { name: "Preguntas Frecuentes", href: "/preguntas-frecuentes" },
  ];

  return (
    <>
      <Helmet>
        <title>Preguntas Frecuentes - Registro Civil de Elche | FAQ</title>
        <meta
          name="description"
          content="Resolvemos tus dudas sobre el Registro Civil de Elche: horarios, ubicación, cómo solicitar certificados, plazos de entrega, documentación necesaria y más."
        />
        <link rel="canonical" href="https://registrocivilelche.es/preguntas-frecuentes" />
        <meta property="og:title" content="Preguntas Frecuentes - Registro Civil de Elche" />
        <meta property="og:description" content="Resolvemos tus dudas sobre el Registro Civil de Elche: horarios, ubicación, cómo solicitar certificados, plazos de entrega y documentación necesaria." />
        <meta property="og:url" content="https://registrocivilelche.es/preguntas-frecuentes" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Navbar />
        
        <main className="flex-1">
          <div className="container mx-auto px-4 py-8">
            <Breadcrumb items={breadcrumbItems} />

            {/* Hero Section */}
            <section className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Preguntas Frecuentes
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Encuentra respuestas a las dudas más comunes sobre el Registro Civil de Elche, 
                trámites de certificados, horarios y documentación necesaria.
              </p>
            </section>

            {/* FAQ Categories */}
            <div className="space-y-8 max-w-4xl mx-auto">
              {faqCategories.map((category, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <category.icon className="h-6 w-6 text-primary" />
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="single" collapsible className="w-full">
                      {category.questions.map((faq, faqIndex) => (
                        <AccordionItem key={faqIndex} value={`${index}-${faqIndex}`}>
                          <AccordionTrigger className="text-left">
                            {faq.question}
                          </AccordionTrigger>
                          <AccordionContent className="text-muted-foreground">
                            {faq.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Quick Links */}
            <section className="mt-12 max-w-4xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle>¿Necesitas un certificado?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Consulta nuestras guías detalladas para cada tipo de certificado:
                  </p>
                  <div className="grid gap-3 sm:grid-cols-3">
                    <Button variant="outline" asChild className="justify-start">
                      <Link to="/certificado-nacimiento">
                        <FileText className="mr-2 h-4 w-4" />
                        Certificado de Nacimiento
                      </Link>
                    </Button>
                    <Button variant="outline" asChild className="justify-start">
                      <Link to="/certificado-matrimonio">
                        <FileText className="mr-2 h-4 w-4" />
                        Certificado de Matrimonio
                      </Link>
                    </Button>
                    <Button variant="outline" asChild className="justify-start">
                      <Link to="/certificado-defuncion">
                        <FileText className="mr-2 h-4 w-4" />
                        Certificado de Defunción
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* CTA Section */}
            <section className="mt-12 max-w-4xl mx-auto">
              <Card className="bg-primary text-primary-foreground">
                <CardContent className="p-8 text-center">
                  <h2 className="text-2xl font-bold mb-4">
                    ¿No encuentras respuesta a tu pregunta?
                  </h2>
                  <p className="mb-6 opacity-90">
                    Nuestro equipo de asesores legales puede ayudarte con cualquier trámite 
                    relacionado con el Registro Civil de Elche.
                  </p>
                  <Button variant="secondary" size="lg" asChild>
                    <a
                      href="https://masanet.es"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Contactar con Estudio Jurídico Masanet
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </section>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default PreguntasFrecuentes;
