import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, CheckCircle, AlertCircle, Scale } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Alert, AlertDescription } from "@/components/ui/alert";

const CertificadoDefuncion = () => {
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
                  Certificado de Defunción en Elche
                </h1>
                <p className="text-xl text-muted-foreground">
                  Guía completa para tramitar certificados de defunción en el Registro Civil de Elche
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
                  <CardTitle className="text-2xl">¿Qué es el Certificado de Defunción?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    El certificado de defunción es un documento oficial expedido por el Registro Civil que acredita 
                    el fallecimiento de una persona. Es un documento esencial para realizar numerosos trámites 
                    administrativos, legales y de herencia.
                  </p>
                  <div className="space-y-3">
                    <h3 className="font-semibold text-lg">Información que contiene:</h3>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Datos personales del fallecido</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Fecha, hora y lugar del fallecimiento</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Causa de la defunción</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Estado civil del fallecido</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">¿Para qué se necesita?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-3">El certificado de defunción es necesario para:</p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Tramitación de herencias y sucesiones</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Cancelación de servicios y cuentas bancarias</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Solicitud de pensiones de viudedad u orfandad</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Trámites de seguros de vida</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Liquidación de impuestos (sucesiones, plusvalía)</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">¿Quién puede solicitarlo?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p>Están legitimados para solicitar el certificado de defunción:</p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Cónyuge o pareja de hecho</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Descendientes, ascendientes y hermanos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Herederos y personas con interés legítimo</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Representante legal con autorización</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Documentación Requerida</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>DNI, NIE o pasaporte del solicitante</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Datos completos del fallecido (nombre, apellidos, DNI)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Fecha aproximada y lugar del fallecimiento</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Acreditación del vínculo o interés legítimo</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Cómo Solicitar el Certificado</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <strong className="text-primary">Presencialmente:</strong>
                      <p className="text-sm mt-1">En el Registro Civil de Elche (Calle Eucalipto, 21, 03203 Elche, Alicante)</p>
                    </div>
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <strong className="text-primary">Por correo ordinario:</strong>
                      <p className="text-sm mt-1">Remitiendo solicitud escrita con copia del DNI y justificación del interés</p>
                    </div>
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <strong className="text-primary">Vía electrónica:</strong>
                      <p className="text-sm mt-1">A través de la Sede Electrónica del Ministerio de Justicia (certificado digital necesario)</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Alert className="border-primary/50 bg-primary/5">
                <AlertCircle className="h-4 w-4 text-primary" />
                <AlertDescription>
                  <strong>Plazo de validez:</strong> Los certificados de defunción tienen una validez de 3 meses 
                  desde su fecha de expedición para trámites oficiales.
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
                      Asesoramiento legal especializado
                    </h2>
                    <p className="text-muted-foreground mb-6">
                      El Estudio Jurídico Masanet te asiste en todos los trámites relacionados con herencias, 
                      sucesiones y gestión de documentación tras un fallecimiento.
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

export default CertificadoDefuncion;
