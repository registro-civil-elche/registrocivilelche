import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileText, Clock, AlertCircle, CheckCircle2, ExternalLink } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Tramites = () => {
  const procedures = [
    {
      title: "Obtener el NIE",
      difficulty: "Media",
      time: "2-4 semanas",
      priority: "Alta",
      description: "Número de Identificación de Extranjero - imprescindible para trabajar y vivir en España",
      steps: [
        "Solicitar cita previa en la Comisaría de Policía",
        "Rellenar el formulario EX-15",
        "Reunir documentación (pasaporte, justificación, pago tasa)",
        "Acudir a la cita con todos los documentos",
        "Recoger el NIE (mismo día o posterior)"
      ],
      documents: ["Pasaporte vigente", "Formulario EX-15", "Justificación (contrato, matrícula, etc.)", "Tasa 012 (aprox. 10€)"]
    },
    {
      title: "Arraigo Social",
      difficulty: "Alta",
      time: "6-12 meses",
      priority: "Crítica",
      description: "Permiso de residencia para extranjeros que llevan 3 años en España sin papeles",
      steps: [
        "Demostrar permanencia en España de 3 años (empadronamiento)",
        "Conseguir contrato de trabajo de al menos 1 año",
        "Obtener informe de integración social",
        "Preparar documentación completa",
        "Presentar solicitud en Extranjería",
        "Esperar resolución (3-6 meses)"
      ],
      documents: [
        "Certificados de empadronamiento históricos",
        "Contrato de trabajo firmado",
        "Informe de integración social",
        "Antecedentes penales",
        "Certificado médico"
      ],
      needsLawyer: true
    },
    {
      title: "Reagrupación Familiar",
      difficulty: "Alta",
      time: "6-9 meses",
      priority: "Alta",
      description: "Traer a tu familia (cónyuge, hijos, padres) a vivir contigo en España",
      steps: [
        "Verificar requisitos (tener residencia legal de 1 año)",
        "Demostrar medios económicos suficientes",
        "Solicitar autorización de residencia para familiar",
        "El familiar solicita visado en país de origen",
        "Entrada en España y obtención de TIE"
      ],
      documents: [
        "Tu NIE y residencia en vigor",
        "Nóminas o declaración de la renta",
        "Vivienda adecuada (contrato + certificado)",
        "Documentos del familiar (partidas, certificados)",
        "Seguro médico"
      ],
      needsLawyer: true
    },
    {
      title: "Nacionalidad Española",
      difficulty: "Media",
      time: "1-2 años",
      priority: "Media",
      description: "Obtener la ciudadanía española tras 10 años de residencia legal (2 años para latinoamericanos)",
      steps: [
        "Acreditar residencia legal continuada",
        "Pasar examen DELE A2 y CCSE",
        "Reunir documentación requerida",
        "Solicitar certificados de antecedentes",
        "Presentar solicitud en Registro Civil",
        "Esperar resolución (12-24 meses)"
      ],
      documents: [
        "Certificado de nacimiento",
        "Certificados de antecedentes penales",
        "Certificado de empadronamiento",
        "DELE A2 y CCSE aprobados",
        "Certificado de residencia"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Guía de Trámites para Extranjeros en Elche
            </h1>
            <p className="text-xl text-muted-foreground">
              Todo lo que necesitas saber para regularizar tu situación en España de forma legal y segura
            </p>
          </div>

          {/* Advertencia importante */}
          <Card className="mb-8 border-accent">
            <CardHeader>
              <div className="flex items-start gap-3">
                <AlertCircle className="h-6 w-6 text-accent mt-1" />
                <div>
                  <CardTitle className="text-accent">Información importante</CardTitle>
                  <CardDescription className="mt-2">
                    Esta guía es orientativa. Los trámites de extranjería son complejos y las leyes cambian. 
                    Para asegurar el éxito de tu solicitud, te recomendamos consultar con un{" "}
                    <a 
                      href="https://masanet.es" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary font-semibold hover:underline"
                    >
                      abogado especializado en extranjería
                    </a>
                    {" "}como el Estudio Jurídico Masanet, con más de 20 años de experiencia en Elche.
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
          </Card>

          {/* Trámites principales */}
          <div className="space-y-6">
            {procedures.map((procedure, index) => (
              <Card key={index} className={procedure.needsLawyer ? "border-primary" : ""}>
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-2xl mb-2 flex items-center gap-2">
                        <FileText className="h-6 w-6 text-primary" />
                        {procedure.title}
                      </CardTitle>
                      <CardDescription className="text-base">{procedure.description}</CardDescription>
                    </div>
                    <Badge variant={procedure.priority === "Crítica" ? "default" : "secondary"}>
                      {procedure.priority}
                    </Badge>
                  </div>
                  
                  <div className="flex flex-wrap gap-3 mt-4">
                    <div className="flex items-center gap-1 text-sm">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span>{procedure.time}</span>
                    </div>
                    <Badge variant="outline">Dificultad: {procedure.difficulty}</Badge>
                    {procedure.needsLawyer && (
                      <Badge variant="destructive" className="gap-1">
                        <AlertCircle className="h-3 w-3" />
                        Recomendado abogado
                      </Badge>
                    )}
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      Pasos a seguir:
                    </h4>
                    <ol className="space-y-2">
                      {procedure.steps.map((step, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                            <CheckCircle2 className="h-3 w-3 text-primary" />
                          </div>
                          <span className="text-sm text-muted-foreground">{i + 1}. {step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Documentos necesarios:</h4>
                    <ul className="grid md:grid-cols-2 gap-2">
                      {procedure.documents.map((doc, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <div className="rounded-sm bg-muted p-1 mt-0.5">
                            <div className="h-1.5 w-1.5 rounded-full bg-foreground"></div>
                          </div>
                          <span className="text-muted-foreground">{doc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {procedure.needsLawyer && (
                    <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
                      <p className="text-sm mb-3">
                        Este trámite es complejo y tiene alta tasa de denegación si no se presenta correctamente. 
                        Un error puede significar perder meses o años.
                      </p>
                      <Button asChild size="sm">
                        <a href="https://masanet.es" target="_blank" rel="noopener noreferrer">
                          Consultar con expertos
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Oficinas útiles */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Oficinas y contactos útiles en Elche</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold">Comisaría de Policía Nacional (NIE)</h4>
                <p className="text-sm text-muted-foreground">Av. de la Libertad, s/n - Elche</p>
                <p className="text-sm text-muted-foreground">Cita previa: www.citapreviadnie.es</p>
              </div>
              
              <div>
                <h4 className="font-semibold">Oficina de Extranjería</h4>
                <p className="text-sm text-muted-foreground">C/ Curtidores, 1 - Alicante</p>
                <p className="text-sm text-muted-foreground">Tel: 965 93 17 00</p>
              </div>

              <div>
                <h4 className="font-semibold">Ayuntamiento de Elche (Empadronamiento)</h4>
                <p className="text-sm text-muted-foreground">Plaza del Ayuntamiento, 1</p>
                <p className="text-sm text-muted-foreground">Cita previa: sede.elche.es</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Tramites;
