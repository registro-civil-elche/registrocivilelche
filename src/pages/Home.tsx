import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, MapPin, Clock, Phone, Info, AlertCircle, Building2, CheckCircle, Scale } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Alert, AlertDescription } from "@/components/ui/alert";

const HomePage = () => {
  const certificates = [
    {
      icon: FileText,
      title: "Certificado de Nacimiento",
      description: "Solicita tu certificado de nacimiento literal o extracto",
      href: "#certificados"
    },
    {
      icon: FileText,
      title: "Certificado de Matrimonio",
      description: "Obtén tu certificado de matrimonio actualizado",
      href: "#certificados"
    },
    {
      icon: FileText,
      title: "Certificado de Defunción",
      description: "Tramita certificados de defunción",
      href: "#certificados"
    }
  ];

  const procedures = [
    {
      title: "Certificado de nacimiento en Elche",
      description: "Información sobre cómo solicitar certificados de nacimiento literal o extracto"
    },
    {
      title: "Certificado de matrimonio en Elche",
      description: "Proceso para solicitar certificados de matrimonio actualizado"
    },
    {
      title: "Certificado de defunción en Elche",
      description: "Guía para obtener y tramitar certificados de defunción"
    },
    {
      title: "Consultas sobre matrimonio",
      description: "Asesoramiento y resolución de consultas sobre trámites matrimoniales"
    },
    {
      title: "Inscripción de recién nacido",
      description: "Trámites para inscribir a un recién nacido en el Registro Civil"
    },
    {
      title: "Juramentos y promesas",
      description: "Información sobre juramentos y promesas en el Registro Civil"
    },
    {
      title: "Matrimonio civil",
      description: "Información sobre celebración de matrimonios civiles en Elche"
    },
    {
      title: "Nacionalidades",
      description: "Gestión de expedientes y trámites de nacionalidad española"
    },
    {
      title: "Cambio de nombre y apellidos",
      description: "Procedimiento para modificar y rectificar nombre y apellidos"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
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

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-primary/10 rounded-full">
                <Building2 className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium text-primary">Información y Asesoramiento</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Registro Civil de Elche, Alicante
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Información actualizada sobre trámites, certificados y procedimientos del Registro Civil de Elche
              </p>
            </div>
          </div>
        </section>

        {/* Certificates Section */}
        <section id="certificados" className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Solicitar certificado en el Registro Civil
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Información sobre cómo obtener los certificados más solicitados
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto mb-12">
              {certificates.map((cert, index) => {
                const Icon = cert.icon;
                return (
                  <Card key={index} className="hover:shadow-lg transition-all border-2 hover:border-primary/50 group cursor-pointer">
                    <CardHeader className="text-center">
                      <div className="mb-4 inline-flex p-4 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors mx-auto">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                      <CardTitle className="text-xl mb-2">{cert.title}</CardTitle>
                      <CardDescription className="text-base">
                        {cert.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="text-center">
                      <Button className="w-full" variant="outline">
                        Más información
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Registry Information */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                Registro en Elche
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                {/* Left Column - Info */}
                <div className="space-y-6">
                  <p className="text-lg text-muted-foreground">
                    En la oficina del Registro Civil de Elche se puede solicitar certificaciones de nacimiento, defunción y matrimonio. 
                    Asimismo realizar las tramitaciones de hechos acaecidos con el Registro de la Ciudad.
                  </p>

                  <div className="space-y-4">
                    {procedures.map((proc, index) => (
                      <div key={index} className="flex items-start gap-3 p-4 bg-background rounded-lg border hover:border-primary/50 transition-colors cursor-pointer">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <h3 className="font-semibold text-primary mb-1">{proc.title}</h3>
                          <p className="text-sm text-muted-foreground">{proc.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Column - Contact & Location */}
                <div className="space-y-6">
                  <Card className="border-2">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <MapPin className="h-5 w-5 text-primary" />
                        Ubicación
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <p className="text-sm">
                        El Registro Civil de Elche se encuentra en la <strong>calle Eucalipto 21</strong>, en la Ciudad de la Justicia, 
                        próximo al Hospital General Universitario de Elche e ligeramente más lejos está la comisaría de policía. 
                        Adjunto se encuentra el Juzgado de Instrucción número 1.
                      </p>
                      <div className="pt-2">
                        <p className="font-semibold mb-1">Dirección:</p>
                        <p className="text-sm text-muted-foreground">Calle Eucalipto, 21</p>
                        <p className="text-sm text-muted-foreground">03203 Elche, Alicante</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-2">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Clock className="h-5 w-5 text-primary" />
                        Horario de Atención
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-3">
                        Para información sobre horarios de atención al público, se recomienda contactar directamente con el registro.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-2 bg-primary/5">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Info className="h-5 w-5 text-primary" />
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
                      <Scale className="h-12 w-12 text-primary" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                      ¿Necesitas ayuda profesional con tus trámites?
                    </h2>
                    <p className="text-lg text-muted-foreground mb-2">
                      Los procedimientos del Registro Civil pueden ser complejos y requerir asesoramiento legal especializado.
                    </p>
                  </div>

                  <div className="bg-muted/50 rounded-lg p-6 mb-8">
                    <h3 className="font-bold text-xl mb-4 text-center">Estudio Jurídico Masanet</h3>
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
                        <span>Gestión de certificados y documentación</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Asesoramiento legal personalizado</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Trámites de nacionalidad</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Procedimientos de rectificación</span>
                      </div>
                    </div>
                  </div>

                  <div className="text-center">
                    <Button asChild size="lg" className="text-lg px-8">
                      <a href="https://masanet.es" target="_blank" rel="noopener noreferrer">
                        Contactar con Masanet →
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

        {/* Additional Info */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Información adicional sobre el Registro Civil
              </h2>
              <p className="text-muted-foreground mb-8">
                El Registro Civil es la institución administrativa que tiene por objeto hacer constar oficialmente 
                los hechos relativos al estado civil de las personas. En Elche, este servicio es fundamental para 
                la gestión de documentación personal y legal de todos los ciudadanos.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Certificados</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Expedición de certificados de nacimiento, matrimonio y defunción
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Inscripciones</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Registro de nacimientos, matrimonios y otras circunstancias
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Rectificaciones</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Corrección de errores en inscripciones registrales
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;
