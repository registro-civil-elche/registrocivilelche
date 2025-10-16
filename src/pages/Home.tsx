import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, FileText, Briefcase, Users, GraduationCap, Heart, PartyPopper } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const HomePage = () => {
  const features = [
    {
      icon: Home,
      title: "Vivir en Elche",
      description: "Encuentra tu hogar perfecto y conoce los mejores barrios de la ciudad.",
      href: "/vivir-elche"
    },
    {
      icon: FileText,
      title: "Trámites y Documentación",
      description: "Guías paso a paso para NIE, arraigo social, reagrupación familiar y más.",
      href: "/tramites"
    },
    {
      icon: Briefcase,
      title: "Empleo",
      description: "Oportunidades laborales y consejos para trabajar en España.",
      href: "/empleo"
    },
    {
      icon: Users,
      title: "Comunidad Latina",
      description: "Conecta con otros latinos, asociaciones y eventos culturales.",
      href: "/comunidad"
    },
    {
      icon: GraduationCap,
      title: "Educación",
      description: "Colegios, universidad y homologación de títulos.",
      href: "/educacion"
    },
    {
      icon: Heart,
      title: "Salud",
      description: "Accede al sistema sanitario español y encuentra médicos.",
      href: "/salud"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Bienvenido a tu nueva vida en Elche
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                La guía completa para latinos que quieren vivir, trabajar y prosperar en Elche, España
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="text-lg">
                  <Link to="/tramites">Comenzar con trámites</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-lg">
                  <Link to="/comunidad">Unirte a la comunidad</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Todo lo que necesitas saber
              </h2>
              <p className="text-lg text-muted-foreground">
                Información práctica y actualizada para facilitar tu adaptación
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Link key={index} to={feature.href}>
                    <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer group">
                      <CardHeader>
                        <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <CardTitle className="text-xl">{feature.title}</CardTitle>
                        <CardDescription className="text-base">
                          {feature.description}
                        </CardDescription>
                      </CardHeader>
                    </Card>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-muted/50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">
                ¿Necesitas asesoría legal profesional?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Si necesitas ayuda con tus trámites de extranjería, te recomendamos contactar con el{" "}
                <strong>Estudio Jurídico Masanet</strong>. Con más de 20 años de experiencia ayudando a la 
                comunidad latina en Elche, son expertos en NIE, arraigo social, reagrupación familiar y nacionalidad española.
              </p>
              <Button asChild size="lg" variant="default">
                <a href="https://masanet.es" target="_blank" rel="noopener noreferrer">
                  Contactar con Masanet →
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 md:grid-cols-3">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">232,000</div>
                <div className="text-muted-foreground">Habitantes en Elche</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-secondary mb-2">15%</div>
                <div className="text-muted-foreground">Población extranjera</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">300+</div>
                <div className="text-muted-foreground">Días de sol al año</div>
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
