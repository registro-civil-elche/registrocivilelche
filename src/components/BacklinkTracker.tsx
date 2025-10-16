import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ExternalLink, TrendingUp, Calendar, Target } from "lucide-react";

const metrics = {
  totalBacklinks: 0,
  activeBacklinks: 0,
  pendingArticles: 7,
  estimatedTraffic: 0,
  avgDomainAuthority: 0
};

const milestones = [
  { phase: "Fase 1: Setup", progress: 0, status: "En progreso", tasks: ["Estructura de contenido definida", "Keywords investigadas", "Anchor texts preparados"] },
  { phase: "Fase 2: Contenido", progress: 0, status: "Pendiente", tasks: ["3 artículos publicados", "Primeros backlinks implementados", "SEO on-page optimizado"] },
  { phase: "Fase 3: Tracking", progress: 0, status: "Pendiente", tasks: ["Google Analytics configurado", "Search Console conectado", "Primeras métricas recopiladas"] },
];

const upcomingArticles = [
  { title: "Guía completa de trámites para extranjeros en Elche", pilar: "Trámites", backlinkOpportunity: true, priority: "Alta" },
  { title: "Comunidad latina en Elche: asociaciones y grupos", pilar: "Comunidad", backlinkOpportunity: false, priority: "Alta" },
  { title: "Cómo obtener el NIE en Elche paso a paso", pilar: "Trámites", backlinkOpportunity: true, priority: "Crítica" },
  { title: "Mejores barrios para vivir en Elche", pilar: "Vivir", backlinkOpportunity: false, priority: "Media" },
];

const BacklinkTracker = () => {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Backlinks Activos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metrics.activeBacklinks}</div>
            <p className="text-xs text-muted-foreground">de {metrics.totalBacklinks} planificados</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Artículos Pendientes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metrics.pendingArticles}</div>
            <p className="text-xs text-muted-foreground">listos para publicar</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Tráfico Estimado</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metrics.estimatedTraffic}</div>
            <p className="text-xs text-muted-foreground">visitas/mes proyectadas</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">DA Promedio</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metrics.avgDomainAuthority || "N/A"}</div>
            <p className="text-xs text-muted-foreground">domain authority</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Roadmap de Implementación</CardTitle>
          <CardDescription>
            Plan de 3 meses para latinosenelche.es
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {milestones.map((milestone, index) => (
            <div key={index} className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="font-medium">{milestone.phase}</h4>
                    <p className="text-xs text-muted-foreground">
                      {milestone.status === "En progreso" && <Badge variant="default">En progreso</Badge>}
                      {milestone.status === "Pendiente" && <Badge variant="outline">Pendiente</Badge>}
                    </p>
                  </div>
                </div>
                <span className="text-sm font-medium">{milestone.progress}%</span>
              </div>
              <Progress value={milestone.progress} className="h-2" />
              <ul className="ml-11 space-y-1">
                {milestone.tasks.map((task, taskIndex) => (
                  <li key={taskIndex} className="text-sm text-muted-foreground flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-muted-foreground/40" />
                    {task}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Próximos Artículos a Publicar</CardTitle>
          <CardDescription>
            Pipeline de contenido con oportunidades de backlink
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {upcomingArticles.map((article, index) => (
              <div key={index} className="flex items-start justify-between gap-4 rounded-lg border p-4">
                <div className="flex-1 space-y-1">
                  <div className="flex items-center gap-2">
                    <h4 className="font-medium">{article.title}</h4>
                    {article.backlinkOpportunity && (
                      <Badge variant="default">Backlink</Badge>
                    )}
                  </div>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span>Pilar: {article.pilar}</span>
                    <span>•</span>
                    <span className={
                      article.priority === "Crítica" ? "text-red-600 font-medium" :
                      article.priority === "Alta" ? "text-orange-600 font-medium" :
                      "text-yellow-600"
                    }>
                      {article.priority} prioridad
                    </span>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Crear
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Métricas de Impacto en masanet.es</CardTitle>
          <CardDescription>
            Tracking del efecto de los backlinks en el sitio objetivo
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-lg border-2 border-dashed p-8 text-center">
            <Target className="mx-auto h-12 w-12 text-muted-foreground/50 mb-4" />
            <h3 className="font-medium mb-2">Métricas disponibles después del primer backlink</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Conecta Google Analytics y Search Console para ver el impacto en tiempo real
            </p>
            <Button variant="outline">
              Configurar tracking
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BacklinkTracker;
