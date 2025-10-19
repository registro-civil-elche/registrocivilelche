import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, CheckCircle, AlertCircle, Scale } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Alert, AlertDescription } from "@/components/ui/alert";

const CertificadoMatrimonio = () => {
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
                      <strong>¿Necesitas tu certificado urgentemente?</strong> Masanet Estudio Jurídico puede 
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
                      Masanet Estudio Jurídico te ayuda con todos los trámites relacionados con el matrimonio, 
                      separación, divorcio y modificación de régimen económico.
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

export default CertificadoMatrimonio;
