import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, MapPin, Clock, Info, AlertCircle, Building2, CheckCircle, Scale } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Alert, AlertDescription } from "@/components/ui/alert";
import ParallaxSection from "@/components/ParallaxSection";
import juzgadosElche from "@/assets/juzgados-elche-hq.webp";

const HomePage = () => {
  const certificates = [
    {
      icon: FileText,
      title: "Certificado de Nacimiento",
      description: "Solicita tu certificado de nacimiento literal o extracto",
      href: "/certificado-nacimiento"
    },
    {
      icon: FileText,
      title: "Certificado de Matrimonio",
      description: "Obtén tu certificado de matrimonio actualizado",
      href: "/certificado-matrimonio"
    },
    {
      icon: FileText,
      title: "Certificado de Defunción",
      description: "Tramita certificados de defunción",
      href: "/certificado-defuncion"
    }
  ];

  const procedures = [
    {
      title: "Certificado literal de nacimiento en Elche",
      description: "Solicitar certificado de nacimiento literal o extracto en el Registro Civil"
    },
    {
      title: "Partida de matrimonio en Elche",
      description: "Cómo pedir certificado de matrimonio actualizado"
    },
    {
      title: "Certificado de defunción en Elche",
      description: "Guía para obtener y tramitar certificados de defunción"
    },
    {
      title: "Consultas sobre matrimonio civil",
      description: "Asesoramiento sobre matrimonio civil en Elche y trámites matrimoniales"
    },
    {
      title: "Inscripción de recién nacido",
      description: "Trámites para inscribir a un recién nacido en el Registro Civil de Elche"
    },
    {
      title: "Matrimonio civil en Elche",
      description: "Información sobre celebración de matrimonios civiles en el Registro Civil"
    }
  ];

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Registro Civil de Elche - Certificados, Cita Previa y Trámites | Información Actualizada 2025</title>
        <meta name="description" content="Información completa del Registro Civil de Elche: cómo solicitar certificados de nacimiento, matrimonio y defunción, cita previa, ubicación en Calle Eucalipto 21, teléfono y horarios. Asesoramiento profesional disponible." />
        <link rel="canonical" href="https://registrocivilelche.es/" />
        <meta property="og:title" content="Registro Civil de Elche - Certificados y Cita Previa | Información Actualizada" />
        <meta property="og:description" content="Toda la información sobre el Registro Civil de Elche: certificados de nacimiento, matrimonio y defunción, cita previa, ubicación en Calle Eucalipto 21 y contacto." />
        <meta property="og:url" content="https://registrocivilelche.es/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Registro Civil de Elche - Certificados y Cita Previa" />
        <meta name="twitter:description" content="Información completa sobre trámites, certificados y cita previa del Registro Civil de Elche." />
      </Helmet>
      
      {/* Skip to main content for keyboard navigation */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded"
      >
        Saltar al contenido principal
      </a>
      
      <Navbar />
      
      <main id="main-content">
        {/* Disclaimer Banner */}
        <div className="bg-muted/50 border-b">
          <div className="container mx-auto px-4 py-3">
            <Alert className="border-primary/50 bg-primary/5">
              <AlertCircle className="h-4 w-4 text-primary" />
              <AlertDescription className="text-sm">
                <strong>Portal informativo no oficial.</strong> Esta es una web independiente de información sobre el Registro Civil de Elche. 
                Trabajamos con independencia del Ministerio de Justicia y cualquier otra administración pública.
              </AlertDescription>
            </Alert>
          </div>
        </div>

        {/* Parallax Hero - Juzgados de Elche */}
        <ParallaxSection 
          imageSrc={juzgadosElche}
          imageAlt="Edificio de los Juzgados de Elche donde se encuentra el Registro Civil"
          speed={0.5}
        >
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.6)' }}>
              Registro Civil de Elche, Alicante
            </h1>
            <p className="text-xl md:text-2xl mb-4 max-w-3xl mx-auto text-white" style={{ textShadow: '1px 1px 6px rgba(0,0,0,0.8), 0 0 15px rgba(0,0,0,0.6)' }}>
              Ubicado en el edificio de los <strong>Juzgados de Elche</strong>, <strong>Calle Eucalipto 21</strong>
            </p>
            <p className="text-lg text-white" style={{ textShadow: '1px 1px 6px rgba(0,0,0,0.8), 0 0 15px rgba(0,0,0,0.6)' }}>
              Información actualizada sobre cita previa, certificados de nacimiento, matrimonio y defunción
            </p>
          </div>
        </ParallaxSection>

        {/* Certificates Section */}
        <section id="certificados" className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Solicitar certificados en el Registro Civil de Elche
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Cómo pedir certificado literal de nacimiento, partida de matrimonio y defunción en Elche
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto mb-12">
              {certificates.map((cert, index) => {
                const Icon = cert.icon;
                return (
                  <Link key={index} to={cert.href}>
                    <Card className="hover:shadow-lg transition-all border-2 hover:border-primary/50 group cursor-pointer h-full">
                      <CardHeader className="text-center">
                        <div className="mb-4 inline-flex p-4 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors mx-auto">
                          <Icon className="h-8 w-8 text-primary" aria-hidden="true" />
                        </div>
                        <CardTitle className="text-xl mb-2">{cert.title}</CardTitle>
                        <CardDescription className="text-base">
                          {cert.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="text-center">
                        <Button className="w-full" variant="outline" aria-label={`Ver información sobre ${cert.title}`}>
                          Más información
                        </Button>
                      </CardContent>
                    </Card>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Registry Information */}
        <section id="informacion" className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                Información del Registro Civil de Elche
              </h2>
              
              <div className="space-y-8">
                {/* Info Section */}
                <div className="space-y-6">
                  <p className="text-lg text-muted-foreground">
                    En la oficina del <strong>Registro Civil de Elche</strong> se puede solicitar <strong>certificaciones de nacimiento, defunción y matrimonio</strong>. 
                    También se realizan <strong>inscripciones de recién nacidos</strong>, <strong>matrimonios civiles</strong> y <strong>consultas matrimoniales</strong>.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Para <strong>cita previa en el Registro Civil de Elche</strong> o información sobre disponibilidad, 
                    te recomendamos contactar con el <a href="https://masanet.es" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">Estudio Jurídico Masanet</a> que puede gestionar tus trámites de forma profesional.
                  </p>

                    <div className="space-y-4">
                    {procedures.map((proc, index) => (
                      <div key={index} className="flex items-start gap-3 p-4 bg-background rounded-lg border hover:border-primary/50 transition-colors">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">{proc.title}</h3>
                          <p className="text-sm text-muted-foreground">{proc.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Location & Contact Section */}
                <div id="ubicacion" className="space-y-6">
                  <Card className="border-2">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <MapPin className="h-5 w-5 text-primary" aria-hidden="true" />
                        Ubicación
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <p className="text-sm">
                        El <strong>Registro Civil de Elche</strong> se encuentra en la <strong>calle Eucalipto 21, 03203 Elche</strong>, en la Ciudad de la Justicia, 
                        próximo al Hospital General Universitario de Elche y a la comisaría de policía nacional de Elche.
                      </p>
                      <div className="pt-2">
                        <p className="font-semibold mb-1">Dirección completa:</p>
                        <p className="text-sm text-muted-foreground">Calle Eucalipto, 21</p>
                        <p className="text-sm text-muted-foreground">03203 Elche, Alicante</p>
                        <p className="text-sm text-muted-foreground mt-2">
                          <strong>Nota:</strong> Para cita previa en el Registro Civil de Elche o consultar teléfono de contacto, 
                          recomendamos contactar con asesoría legal especializada.
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-2">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Clock className="h-5 w-5 text-primary" aria-hidden="true" />
                        Horario de atención
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Lunes:</span>
                          <span className="font-medium">9:00 - 13:00</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Martes:</span>
                          <span className="font-medium">9:00 - 13:00</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Miércoles:</span>
                          <span className="font-medium">9:00 - 13:00</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Jueves:</span>
                          <span className="font-medium">9:00 - 13:00</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Viernes:</span>
                          <span className="font-medium">9:00 - 13:00</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Sábado:</span>
                          <span className="font-medium">Cerrado</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Domingo:</span>
                          <span className="font-medium">Cerrado</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-2 bg-primary/5">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Info className="h-5 w-5 text-primary" aria-hidden="true" />
                        Documentación
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">
                        <strong>Cosas que debe saber sobre la expedición de documentos:</strong>
                      </p>
                      <ul className="text-sm text-muted-foreground mt-2 space-y-1 list-disc list-inside">
                        <li>Es importante llevar documentación identificativa</li>
                        <li>Algunos trámites pueden requerir cita previa</li>
                        <li>Los certificados pueden solicitarse en persona o por correo</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Professional Legal Help CTA */}
        <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="border-2 border-primary/20 shadow-xl">
                <CardContent className="p-8 md:p-12">
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center p-4 bg-primary/10 rounded-full mb-6">
                      <Scale className="h-12 w-12 text-primary" aria-hidden="true" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                      ¿Necesitas ayuda profesional con tus trámites?
                    </h2>
                    <p className="text-lg text-muted-foreground mb-2">
                      Los procedimientos del Registro Civil pueden ser complejos. Para trámites especializados como nacionalidad, herencias, 
                      o cualquier asesoramiento legal, contacta con profesionales expertos.
                    </p>
                  </div>

                  <div className="bg-muted/50 rounded-lg p-6 mb-8">
                    <h3 className="font-bold text-xl mb-4 text-center">
                      <a href="https://masanet.es" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                        Estudio Jurídico Masanet
                      </a>
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Más de 20 años de experiencia</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Especialistas en Registro Civil</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Gestión de certificados y documentación del Registro Civil</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Asesoramiento legal personalizado</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Trámites de herencias y sucesiones</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Nacionalidad y extranjería</span>
                      </div>
                    </div>
                  </div>

                  <div className="text-center">
                    <Button asChild size="lg" className="w-full sm:w-auto text-base sm:text-lg px-4 sm:px-8">
                      <a href="https://masanet.es" target="_blank" rel="noopener noreferrer">
                        Contactar con Estudio Jurídico Masanet →
                      </a>
                    </Button>
                    <p className="text-sm text-muted-foreground mt-4">
                      Consulta profesional para resolver tus dudas legales
                    </p>
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

export default HomePage;
