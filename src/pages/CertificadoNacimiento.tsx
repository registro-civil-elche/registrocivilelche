import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, CheckCircle, AlertCircle, Scale } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { Alert, AlertDescription } from "@/components/ui/alert";

const CertificadoNacimiento = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "¿Cuánto tarda el certificado de nacimiento en Elche?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "El tiempo de entrega del certificado de nacimiento depende del método: presencialmente entre 24-48 horas hábiles en el Registro Civil de Elche, por correo postal hasta 15 días hábiles, y online (Sede Electrónica) entre 5-10 días hábiles."
        }
      },
      {
        "@type": "Question",
        "name": "¿Qué es el certificado literal de nacimiento?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "El certificado literal de nacimiento incluye todos los datos completos de la inscripción de nacimiento, mientras que el extracto es una versión resumida con los datos más relevantes."
        }
      },
      {
        "@type": "Question",
        "name": "¿Dónde solicitar certificado de nacimiento en Elche?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Puedes solicitarlo presencialmente en el Registro Civil de Elche (Calle Eucalipto 21), por correo postal, o a través de la Sede Electrónica del Ministerio de Justicia con certificado digital."
        }
      }
    ]
  };

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Certificado de Nacimiento en Elche - Cómo Solicitarlo, Plazos y Requisitos 2025</title>
        <meta name="description" content="Guía completa para solicitar certificado literal o extracto de nacimiento en el Registro Civil de Elche. Documentación necesaria, plazos de entrega 24-48h, y dónde tramitarlo. Asesoramiento profesional disponible." />
        <link rel="canonical" href="https://registrocivilelche.es/certificado-nacimiento" />
        <meta property="og:title" content="Certificado de Nacimiento en Elche - Guía Completa 2025" />
        <meta property="og:description" content="Información actualizada sobre cómo solicitar certificado de nacimiento literal o extracto en el Registro Civil de Elche. Plazos y documentación." />
        <meta property="og:url" content="https://registrocivilelche.es/certificado-nacimiento" />
        <meta property="og:type" content="article" />
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>
      
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded"
      >
        Saltar al contenido principal
      </a>
      
      <Navbar />
      
      <main id="main-content">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Breadcrumb items={[
                { name: "Inicio", href: "/" },
                { name: "Certificado de Nacimiento", href: "/certificado-nacimiento" }
              ]} />
              <div className="text-center">
                <div className="inline-flex items-center justify-center p-4 bg-primary/10 rounded-full mb-6">
                  <FileText className="h-12 w-12 text-primary" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Certificado de Nacimiento en Elche
                </h1>
                <p className="text-xl text-muted-foreground">
                  Información completa sobre cómo solicitar tu certificado de nacimiento literal o extracto
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-8">
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">¿Qué es el Certificado de Nacimiento?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    El certificado de nacimiento es un documento oficial expedido por el Registro Civil que acredita 
                    el nacimiento de una persona y contiene datos fundamentales como nombre completo, fecha y lugar de nacimiento, 
                    y filiación.
                  </p>
                  <div className="space-y-3">
                    <h3 className="font-semibold text-lg">Tipos de certificado disponibles:</h3>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <div>
                          <strong>Certificado literal:</strong> Incluye todos los datos de la inscripción de nacimiento
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <div>
                          <strong>Extracto:</strong> Versión resumida con los datos más relevantes
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Documentación Necesaria</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>DNI, NIE o pasaporte en vigor del solicitante</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Datos de la persona inscrita (nombre completo, fecha de nacimiento)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>En caso de solicitarlo para otra persona, autorización o acreditación del vínculo</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">¿Cómo Solicitar el Certificado?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-3">Opciones de solicitud:</h3>
                    <div className="space-y-3">
                      <div className="p-4 bg-muted/50 rounded-lg">
                        <strong className="text-primary">Presencial:</strong>
                        <p className="text-sm mt-1">En el Registro Civil de Elche (Calle Eucalipto, 21)</p>
                      </div>
                      <div className="p-4 bg-muted/50 rounded-lg">
                        <strong className="text-primary">Por correo:</strong>
                        <p className="text-sm mt-1">Enviando solicitud por correo postal con documentación requerida</p>
                      </div>
                      <div className="p-4 bg-muted/50 rounded-lg">
                        <strong className="text-primary">Online:</strong>
                        <p className="text-sm mt-1">A través de la Sede Electrónica del Ministerio de Justicia (requiere certificado digital)</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary/50">
                <CardHeader>
                  <CardTitle className="text-2xl">¿Cuánto tarda el certificado de nacimiento?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    El <strong>tiempo de entrega del certificado de nacimiento</strong> depende del método de solicitud:
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <strong>Presencialmente:</strong> Entre 24-48 horas hábiles si se solicita directamente en el Registro Civil de Elche
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <strong>Por correo postal:</strong> Hasta 15 días hábiles dependiendo del servicio de correos
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <strong>Online (Sede Electrónica):</strong> Entre 5-10 días hábiles
                      </div>
                    </div>
                  </div>
                  <Alert className="border-primary/30 bg-primary/5 mt-4">
                    <AlertCircle className="h-4 w-4 text-primary" />
                    <AlertDescription>
                      <strong>¿Necesitas tu certificado con urgencia?</strong> El <a href="https://masanet.es" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">Estudio Jurídico Masanet</a> puede 
                      agilizar la gestión de tu certificado de nacimiento de forma profesional y eficaz.
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>

              <Alert className="border-primary/50 bg-primary/5">
                <AlertCircle className="h-4 w-4 text-primary" />
                <AlertDescription>
                  <strong>Importante:</strong> Los certificados de nacimiento tienen una validez de 3 meses 
                  desde su expedición para trámites oficiales.
                </AlertDescription>
              </Alert>

              {/* Cross-linking to other certificates */}
              <Card className="bg-muted/30">
                <CardHeader>
                  <CardTitle className="text-xl">Otros certificados que pueden interesarte</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    <Link to="/certificado-matrimonio" className="p-4 bg-background rounded-lg border hover:border-primary/50 transition-colors group">
                      <div className="flex items-start gap-3">
                        <FileText className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <h3 className="font-semibold group-hover:text-primary transition-colors">Certificado de Matrimonio</h3>
                          <p className="text-sm text-muted-foreground mt-1">Cómo solicitar tu partida de matrimonio en Elche</p>
                        </div>
                      </div>
                    </Link>
                    <Link to="/certificado-defuncion" className="p-4 bg-background rounded-lg border hover:border-primary/50 transition-colors group">
                      <div className="flex items-start gap-3">
                        <FileText className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <h3 className="font-semibold group-hover:text-primary transition-colors">Certificado de Defunción</h3>
                          <p className="text-sm text-muted-foreground mt-1">Información sobre certificados de defunción</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              {/* Professional Help CTA */}
              <Card className="border-2 border-primary/20 shadow-lg">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center p-4 bg-primary/10 rounded-full mb-4">
                      <Scale className="h-10 w-10 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold mb-3">
                      ¿Necesitas ayuda profesional?
                    </h2>
                    <p className="text-muted-foreground mb-6">
                      El <a href="https://masanet.es" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">Estudio Jurídico Masanet</a> cuenta con más de 20 años de experiencia en trámites 
                      del Registro Civil y puede gestionar tu certificado de forma rápida y eficaz.
                    </p>
                    <Button asChild size="lg">
                      <a href="https://masanet.es" target="_blank" rel="noopener noreferrer">
                        Contactar con Estudio Jurídico Masanet →
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CertificadoNacimiento;
