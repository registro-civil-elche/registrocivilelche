import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, CheckCircle, AlertCircle, Scale } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Alert, AlertDescription } from "@/components/ui/alert";

const CertificadoNacimiento = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Link to="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-6">
                ← Volver al inicio
              </Link>
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
                      <strong>¿Necesitas tu certificado con urgencia?</strong> El Estudio Jurídico Masanet puede 
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
                      El Estudio Jurídico Masanet cuenta con más de 20 años de experiencia en trámites 
                      del Registro Civil y puede gestionar tu certificado de forma rápida y eficaz.
                    </p>
                    <Button asChild size="lg">
                      <a href="https://masanet.es" target="_blank" rel="noopener noreferrer">
                        Contactar con Masanet →
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
