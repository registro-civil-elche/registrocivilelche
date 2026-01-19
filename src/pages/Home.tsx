import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, MapPin, Clock, Info, CheckCircle, Scale, Flag, Baby, Heart, UserCog, PenLine, FileCheck } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ParallaxSection from "@/components/ParallaxSection";
import juzgadosElche from "@/assets/juzgados-elche-optimized.webp";
import { useEffect } from "react";

const HomePage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const sectionId = location.state.scrollTo;
      setTimeout(() => {
        const element = document.querySelector(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
      window.history.replaceState({}, document.title);
    }
  }, [location.state]);

  const serviceCategories = [
    {
      title: "Certificados",
      icon: FileText,
      services: [
        { name: "Certificado de Nacimiento", href: "/certificado-nacimiento", description: "Solicita tu certificado literal o extracto" },
        { name: "Certificado de Matrimonio", href: "/certificado-matrimonio", description: "Obtén tu partida de matrimonio actualizada" },
        { name: "Certificado de Defunción", href: "/certificado-defuncion", description: "Tramita certificados de defunción" },
      ]
    },
    {
      title: "Nacionalidad",
      icon: Flag,
      services: [
        { name: "Jura de Nacionalidad", href: "/jura-nacionalidad", description: "Jura o promesa para adquirir nacionalidad" },
        { name: "Nacionalidad por Opción", href: "/expediente-nacionalidad-opcion", description: "Para hijos y nietos de españoles" },
        { name: "Jura Nacionalidad Opción", href: "/jura-nacionalidad-opcion", description: "Jura cuando se adquiere por opción" },
        { name: "Conservación Nacionalidad", href: "/conservacion-nacionalidad", description: "Mantener o recuperar nacionalidad" },
        { name: "Simple Presunción", href: "/simple-presuncion-nacionalidad", description: "Acreditar nacionalidad española" },
      ]
    },
    {
      title: "Inscripciones",
      icon: Baby,
      services: [
        { name: "Inscripción Recién Nacido", href: "/inscripcion-recien-nacido", description: "Registrar el nacimiento de tu bebé" },
        { name: "Nacimiento Fuera de Plazo", href: "/inscripcion-nacimiento-fuera-plazo", description: "Inscripción después del plazo legal" },
        { name: "Reconocimiento de Hijo", href: "/reconocimiento-hijo-no-matrimonial", description: "Filiación de hijo no matrimonial" },
        { name: "Capitulaciones Matrimoniales", href: "/inscripcion-capitulaciones", description: "Inscribir régimen económico" },
      ]
    },
    {
      title: "Otros Trámites",
      icon: UserCog,
      services: [
        { name: "Cambio de Nombre", href: "/cambio-nombre", description: "Modificar nombre o apellidos" },
        { name: "Cambio de Sexo", href: "/cambio-sexo", description: "Cambio de sexo registral" },
        { name: "Expediente Matrimonio", href: "/expediente-matrimonio", description: "Trámite previo al matrimonio civil" },
        { name: "Fe de Vida y Estado", href: "/fe-vida-estado", description: "Acreditar que estás vivo y estado civil" },
        { name: "Rectificación de Error", href: "/rectificacion-error", description: "Corregir errores en inscripciones" },
      ]
    },
  ];

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Registro Civil de Elche - Certificados, Nacionalidad y Trámites | Información 2025</title>
        <meta name="description" content="Información completa del Registro Civil de Elche: certificados, nacionalidad, inscripciones, cambio de nombre, matrimonio civil. Ubicación en Calle Abogados de Atocha 21, horarios y cita previa." />
        <link rel="canonical" href="https://registrocivilelche.es/" />
        <meta property="og:title" content="Registro Civil de Elche - Todos los Trámites y Servicios" />
        <meta property="og:description" content="Guía completa del Registro Civil de Elche: certificados, nacionalidad, inscripciones, cambios de estado civil y más. Asesoramiento profesional disponible." />
        <meta property="og:url" content="https://registrocivilelche.es/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Registro Civil de Elche - Certificados y Trámites" />
        <meta name="twitter:description" content="Información completa sobre trámites, certificados y servicios del Registro Civil de Elche." />
      </Helmet>
      
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded"
      >
        Saltar al contenido principal
      </a>
      
      <Navbar />
      
      <main id="main-content">
        <div className="bg-muted/30 border-b py-1.5">
          <div className="container mx-auto px-4">
            <p className="text-xs text-muted-foreground text-center">
              Portal informativo no oficial
            </p>
          </div>
        </div>

        <ParallaxSection 
          imageSrc={juzgadosElche}
          imageAlt="Edificio de los Juzgados de Elche donde se encuentra el Registro Civil"
          speed={0.5}
        >
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.6)' }}>
              Registro Civil de Elche
            </h1>
            <p className="text-lg text-white" style={{ textShadow: '1px 1px 6px rgba(0,0,0,0.8), 0 0 15px rgba(0,0,0,0.6)' }}>
              C/ Abogados de Atocha - 21, Elche (Alicante)
            </p>
            <p className="text-lg text-white" style={{ textShadow: '1px 1px 6px rgba(0,0,0,0.8), 0 0 15px rgba(0,0,0,0.6)' }}>
              Certificados, nacionalidad, inscripciones y todos los trámites del registro
            </p>
          </div>
        </ParallaxSection>

        {/* All Services Section */}
        <section id="servicios" className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Todos los servicios del Registro Civil de Elche
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Información completa sobre certificados, nacionalidad, inscripciones y otros trámites
              </p>
            </div>

            <div className="space-y-12 max-w-6xl mx-auto">
              {serviceCategories.map((category) => {
                const CategoryIcon = category.icon;
                return (
                  <div key={category.title}>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <CategoryIcon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold">{category.title}</h3>
                    </div>
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                      {category.services.map((service) => (
                        <Link key={service.href} to={service.href}>
                          <Card className="hover:shadow-lg transition-all border hover:border-primary/50 cursor-pointer h-full">
                            <CardHeader className="pb-2">
                              <CardTitle className="text-lg">{service.name}</CardTitle>
                            </CardHeader>
                            <CardContent>
                              <p className="text-sm text-muted-foreground">{service.description}</p>
                            </CardContent>
                          </Card>
                        </Link>
                      ))}
                    </div>
                  </div>
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
                <div className="space-y-6">
                  <p className="text-lg text-muted-foreground">
                    En la oficina del <strong>Registro Civil de Elche</strong> se pueden realizar múltiples trámites: <strong>certificaciones de nacimiento, defunción y matrimonio</strong>, 
                    <strong>inscripciones de recién nacidos</strong>, <strong>expedientes de nacionalidad</strong>, <strong>juras de nacionalidad</strong>, 
                    <strong>cambios de nombre y sexo</strong>, <strong>matrimonios civiles</strong> y mucho más.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Para <strong>cita previa en el Registro Civil de Elche</strong> o gestión profesional de tus trámites, 
                    contacta con el <a href="https://masanet.es" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">Estudio Jurídico Masanet</a>.
                  </p>
                </div>

                <div id="ubicacion" className="grid gap-6 md:grid-cols-2">
                  <Card className="border-2">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <MapPin className="h-5 w-5 text-primary" aria-hidden="true" />
                        Ubicación
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <p className="text-sm">
                        El <strong>Registro Civil de Elche</strong> se encuentra en la <strong>calle Abogados de Atocha 21, 03203 Elche</strong>, en la Ciudad de la Justicia.
                      </p>
                      <div className="pt-2">
                        <p className="font-semibold mb-1">Dirección completa:</p>
                        <p className="text-sm text-muted-foreground">Calle Abogados de Atocha, 21</p>
                        <p className="text-sm text-muted-foreground">03203 Elche, Alicante</p>
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
                          <span className="text-muted-foreground">Lunes a Viernes:</span>
                          <span className="font-medium">9:00 - 13:00</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Sábado y Domingo:</span>
                          <span className="font-medium">Cerrado</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Google Maps Embed */}
                <Card className="border-2">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-primary" aria-hidden="true" />
                      Cómo llegar al Registro Civil de Elche
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="aspect-video w-full rounded-lg overflow-hidden">
                      <iframe
                        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=Oficina+Registro+Civil,Elche,Spain&zoom=17"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Ubicación de la Oficina del Registro Civil de Elche en Google Maps"
                      />
                    </div>
                    <p className="text-sm text-muted-foreground mt-3">
                      El Registro Civil se encuentra en la Ciudad de la Justicia de Elche, con fácil acceso en transporte público y parking cercano.
                    </p>
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
                    <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                      <li>Es importante llevar documentación identificativa (DNI/NIE)</li>
                      <li>Algunos trámites requieren cita previa</li>
                      <li>Los certificados pueden solicitarse en persona, por correo o telemáticamente</li>
                    </ul>
                  </CardContent>
                </Card>
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
                      Nacionalidad, herencias, certificados o cualquier trámite del Registro Civil. Déjalo en manos de expertos.
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
                        <span>Trámites de nacionalidad y extranjería</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Herencias y sucesiones</span>
                      </div>
                    </div>
                  </div>

                  <div className="text-center">
                    <Button asChild size="lg" className="px-8 h-auto py-3 whitespace-normal">
                      <a
                        href="https://masanet.es"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="block">Contactar con</span>
                        <span className="block">Estudio Jurídico Masanet</span>
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

export default HomePage;
