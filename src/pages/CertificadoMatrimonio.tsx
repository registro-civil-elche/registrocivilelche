import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, CheckCircle, AlertCircle, Scale } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { Alert, AlertDescription } from "@/components/ui/alert";

const CertificadoMatrimonio = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "¿Cuánto tarda el certificado de matrimonio en Elche?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "El tiempo de expedición del certificado de matrimonio varía según el método: presencialmente entre 24-48 horas hábiles en el Registro Civil de Elche, por correo postal hasta 15 días hábiles, y vía telemática entre 5-10 días hábiles."
        }
      },
      {
        "@type": "Question",
        "name": "¿Quién puede solicitar un certificado de matrimonio?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Pueden solicitarlo cualquiera de los cónyuges, descendientes, ascendientes o herederos, y representante legal debidamente autorizado."
        }
      },
      {
        "@type": "Question",
        "name": "¿Dónde pedir certificado de matrimonio en Elche?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Puedes solicitarlo en persona en el Registro Civil de Elche (Calle Eucalipto 21), por correo postal, o telemáticamente a través de la Sede Electrónica con certificado digital."
        }
      }
    ]
  };

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Certificado de Matrimonio en Elche - Solicitud, Documentación y Plazos 2025</title>
        <meta name="description" content="Cómo solicitar certificado de matrimonio actualizado en el Registro Civil de Elche. Guía completa con requisitos, documentación necesaria, plazos de 24-48h y formas de tramitación. Asesoría legal especializada." />
        <link rel="canonical" href="https://registrocivilelche.es/certificado-matrimonio" />
        <meta property="og:title" content="Certificado de Matrimonio en Elche - Guía Completa 2025" />
        <meta property="og:description" content="Información detallada sobre cómo obtener tu certificado de matrimonio actualizado en el Registro Civil de Elche. Requisitos y plazos." />
        <meta property="og:url" content="https://registrocivilelche.es/certificado-matrimonio" />
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
                { name: "Certificado de Matrimonio", href: "/certificado-matrimonio" }
              ]} />
              <div className="text-center">
                <div className="inline-flex items-center justify-center p-4 bg-primary/10 rounded-full mb-6">
                  <FileText className="h-12 w-12 text-primary" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Certificado de Matrimonio en Elche
                </h1>
                <p className="text-xl text-muted-foreground">
                  Obtén tu certificado de matrimonio actualizado del Registro Civil de Elche
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
                  <CardTitle className="text-2xl">¿Qué es el Certificado de Matrimonio?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    El certificado de matrimonio es un documento oficial que acredita la celebración del matrimonio 
                    civil y contiene datos esenciales sobre los cónyuges y las circunstancias de la unión matrimonial.
                  </p>
                  <div className="space-y-3">
                    <h3 className="font-semibold text-lg">El certificado incluye:</h3>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Datos personales de ambos cónyuges</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Fecha y lugar de celebración del matrimonio</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Régimen económico matrimonial</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Anotaciones marginales (separación, divorcio, etc.)</span>
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
                      <span>DNI, NIE o pasaporte vigente del solicitante</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Datos completos de ambos cónyuges</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Fecha aproximada y lugar de celebración del matrimonio</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">¿Quién puede solicitar el certificado?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p>Pueden solicitar el certificado de matrimonio:</p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Cualquiera de los cónyuges</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Descendientes, ascendientes o herederos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Representante legal debidamente autorizado</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Formas de Solicitud</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <strong className="text-primary">En persona:</strong>
                      <p className="text-sm mt-1">Acude al Registro Civil de Elche (Calle Eucalipto, 21, 03203 Elche)</p>
                    </div>
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <strong className="text-primary">Por correo postal:</strong>
                      <p className="text-sm mt-1">Envía solicitud con fotocopia del DNI y documentación requerida</p>
                    </div>
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <strong className="text-primary">Telemáticamente:</strong>
                      <p className="text-sm mt-1">A través de la Sede Electrónica con certificado digital o Cl@ve</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary/50">
                <CardHeader>
                  <CardTitle className="text-2xl">¿Cuánto tarda el certificado de matrimonio?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    El <strong>tiempo de expedición del certificado de matrimonio</strong> varía según el método utilizado:
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <strong>Presencialmente:</strong> Entre 24-48 horas hábiles si acudes directamente al Registro Civil de Elche
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <strong>Por correo postal:</strong> Hasta 15 días hábiles desde la recepción de la solicitud
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <strong>Vía telemática:</strong> Entre 5-10 días hábiles
                      </div>
                    </div>
                  </div>
                  <Alert className="border-primary/30 bg-primary/5 mt-4">
                    <AlertCircle className="h-4 w-4 text-primary" />
                    <AlertDescription>
                      <strong>¿Necesitas tu certificado urgentemente?</strong> <a href="https://masanet.es" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">Masanet Estudio Jurídico</a> puede 
                      gestionar la obtención rápida de tu certificado de matrimonio con garantías.
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>

              <Alert className="border-primary/50 bg-primary/5">
                <AlertCircle className="h-4 w-4 text-primary" />
                <AlertDescription>
                  <strong>Nota:</strong> El certificado de matrimonio debe estar actualizado (menos de 3 meses) 
                  para la mayoría de trámites administrativos.
                </AlertDescription>
              </Alert>

              {/* Cross-linking to other certificates */}
              <Card className="bg-muted/30">
                <CardHeader>
                  <CardTitle className="text-xl">Otros certificados que pueden interesarte</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    <Link to="/certificado-nacimiento" className="p-4 bg-background rounded-lg border hover:border-primary/50 transition-colors group">
                      <div className="flex items-start gap-3">
                        <FileText className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <h3 className="font-semibold group-hover:text-primary transition-colors">Certificado de Nacimiento</h3>
                          <p className="text-sm text-muted-foreground mt-1">Solicita tu certificado literal de nacimiento</p>
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
                      ¿Necesitas asesoramiento legal?
                    </h2>
                    <p className="text-muted-foreground mb-6">
                      <a href="https://masanet.es" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">Masanet Estudio Jurídico</a> te ayuda con todos los trámites relacionados con el matrimonio, 
                      separación, divorcio y modificación de régimen económico.
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

export default CertificadoMatrimonio;
