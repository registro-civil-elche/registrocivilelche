import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { FileText, CheckCircle, AlertCircle, Scale, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { LucideIcon } from "lucide-react";

interface ServicePageProps {
  title: string;
  metaTitle: string;
  metaDescription: string;
  canonicalUrl: string;
  breadcrumbItems: { name: string; href: string }[];
  description: string;
  whatIs: string;
  requirements: string[];
  process: string[];
  relatedServices: { name: string; href: string }[];
  faqSchema?: object;
  icon?: LucideIcon;
}

const ServicePageTemplate = ({
  title,
  metaTitle,
  metaDescription,
  canonicalUrl,
  breadcrumbItems,
  description,
  whatIs,
  requirements,
  process,
  relatedServices,
  faqSchema,
  icon: Icon = FileText,
}: ServicePageProps) => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={metaTitle} />
        <meta name="twitter:description" content={metaDescription} />
        {faqSchema && (
          <script type="application/ld+json">
            {JSON.stringify(faqSchema)}
          </script>
        )}
      </Helmet>

      <Navbar />

      <main className="container mx-auto px-4 py-8">
        <Breadcrumb items={breadcrumbItems} />

        {/* Hero Section */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center p-4 bg-primary/10 rounded-full mb-6">
              <Icon className="h-12 w-12 text-primary" aria-hidden="true" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{title}</h1>
            <p className="text-lg text-muted-foreground">{description}</p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* What is it */}
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" />
                ¿Qué es?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{whatIs}</p>
            </CardContent>
          </Card>

          {/* Requirements */}
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                Requisitos
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {requirements.map((req, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">{req}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Process */}
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ArrowRight className="h-5 w-5 text-primary" />
                Procedimiento
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="space-y-3">
                {process.map((step, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">
                      {index + 1}
                    </span>
                    <span className="text-muted-foreground">{step}</span>
                  </li>
                ))}
              </ol>
            </CardContent>
          </Card>

          {/* Professional Help Alert */}
          <Alert className="border-primary/50 bg-primary/5">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>
              <strong>¿Necesitas ayuda profesional?</strong> Este trámite puede ser complejo.{" "}
              <a
                href="https://masanet.es"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-semibold hover:underline"
              >
                Estudio Jurídico Masanet
              </a>{" "}
              puede gestionar todo el proceso por ti.
            </AlertDescription>
          </Alert>

          {/* Related Services */}
          <Card className="border-2 bg-muted/30">
            <CardHeader>
              <CardTitle>Servicios relacionados</CardTitle>
              <CardDescription>
                Otros trámites que podrían interesarte
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {relatedServices.map((service, index) => (
                  <Link key={index} to={service.href}>
                    <Button variant="outline" size="sm">
                      {service.name}
                    </Button>
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* CTA */}
          <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-background">
            <CardContent className="p-8 text-center">
              <Scale className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-2">
                Gestiona tu trámite con profesionales
              </h2>
              <p className="text-muted-foreground mb-6">
                El Estudio Jurídico Masanet cuenta con más de 20 años de experiencia en trámites del Registro Civil.
              </p>
              <Button asChild size="lg">
                <a
                  href="https://masanet.es"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contactar con Estudio Jurídico Masanet
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ServicePageTemplate;
