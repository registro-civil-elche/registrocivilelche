import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Home, Users, FileText, GraduationCap, Briefcase, Heart, PartyPopper, ChevronRight, Link2 } from "lucide-react";

const contentPillars = [
  {
    icon: Home,
    title: "Vivir en Elche",
    description: "Información práctica sobre vivienda, barrios y coste de vida",
    articles: ["Mejores barrios para vivir en Elche", "Coste de vida para latinos", "Cómo alquilar piso en Elche"],
    priority: "Alta",
    linkOpportunity: false
  },
  {
    icon: Users,
    title: "Comunidad Latina",
    description: "Asociaciones, eventos y grupos de apoyo",
    articles: ["Asociaciones de latinos en Elche", "Eventos culturales latinos", "Grupos de WhatsApp/Facebook"],
    priority: "Alta",
    linkOpportunity: false
  },
  {
    icon: FileText,
    title: "Trámites y Documentación",
    description: "Guía completa de trámites legales y administrativos",
    articles: [
      "Guía completa de trámites para extranjeros en Elche",
      "Cómo obtener el NIE en Elche",
      "Arraigo social: requisitos y proceso",
      "Reagrupación familiar paso a paso"
    ],
    priority: "Crítica",
    linkOpportunity: true,
    linkTarget: "masanet.es"
  },
  {
    icon: GraduationCap,
    title: "Educación",
    description: "Sistema educativo, colegios y homologaciones",
    articles: ["Mejores colegios en Elche", "Homologar títulos en España", "Universidad Miguel Hernández"],
    priority: "Media",
    linkOpportunity: false
  },
  {
    icon: Briefcase,
    title: "Empleo y Emprendimiento",
    description: "Ofertas de trabajo y oportunidades de negocio",
    articles: ["Trabajar en Elche siendo extranjero", "Emprender en España", "Permisos de trabajo"],
    priority: "Alta",
    linkOpportunity: true,
    linkTarget: "masanet.es (permisos de trabajo)"
  },
  {
    icon: Heart,
    title: "Salud",
    description: "Sistema sanitario y recursos médicos",
    articles: ["Cómo acceder al sistema sanitario", "Médicos que hablan español en Elche", "Seguro de salud"],
    priority: "Media",
    linkOpportunity: false
  },
  {
    icon: PartyPopper,
    title: "Cultura y Ocio",
    description: "Actividades, festivales y vida social",
    articles: ["Qué hacer en Elche", "Festivales y eventos", "Restaurantes latinos en Elche"],
    priority: "Baja",
    linkOpportunity: false
  }
];

const ContentStructure = () => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Estructura de Contenido - latinosenelche.es</CardTitle>
          <CardDescription>
            7 pilares de contenido diseñados para captar tráfico top-of-funnel y convertir naturalmente a servicios legales
          </CardDescription>
        </CardHeader>
      </Card>

      <div className="grid gap-4 md:grid-cols-2">
        {contentPillars.map((pillar, index) => {
          const Icon = pillar.icon;
          return (
            <Card key={index} className={pillar.linkOpportunity ? "border-primary" : ""}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="rounded-lg bg-primary/10 p-2">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{pillar.title}</CardTitle>
                      <CardDescription className="mt-1">{pillar.description}</CardDescription>
                    </div>
                  </div>
                  <Badge variant={pillar.priority === "Crítica" ? "default" : pillar.priority === "Alta" ? "secondary" : "outline"}>
                    {pillar.priority}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-muted-foreground">Artículos sugeridos:</h4>
                  <ul className="space-y-1">
                    {pillar.articles.map((article, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <ChevronRight className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>{article}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {pillar.linkOpportunity && (
                  <div className="rounded-lg bg-primary/5 p-3 border border-primary/20">
                    <div className="flex items-center gap-2 text-sm font-medium text-primary mb-1">
                      <Link2 className="h-4 w-4" />
                      Oportunidad de backlink
                    </div>
                    <p className="text-xs text-muted-foreground">
                      → {pillar.linkTarget}
                    </p>
                  </div>
                )}

                <Button variant="outline" size="sm" className="w-full">
                  Generar contenido
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default ContentStructure;
