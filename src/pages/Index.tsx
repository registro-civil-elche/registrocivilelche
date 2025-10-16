import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ContentStructure from "@/components/ContentStructure";
import KeywordResearch from "@/components/KeywordResearch";
import AnchorTextGenerator from "@/components/AnchorTextGenerator";
import BacklinkTracker from "@/components/BacklinkTracker";
import { FileText, Search, Link2, BarChart3 } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-primary">Masanet Linker Bot</h1>
          <p className="text-muted-foreground mt-2">Herramienta de gestión de backlinking para latinosenelche.es → masanet.es</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8 grid gap-4 md:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Estructura</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">7 Pilares</div>
              <p className="text-xs text-muted-foreground">Contenido planificado</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Keywords</CardTitle>
              <Search className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">0</div>
              <p className="text-xs text-muted-foreground">Palabras clave identificadas</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Anchor Texts</CardTitle>
              <Link2 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">0</div>
              <p className="text-xs text-muted-foreground">Textos de anclaje generados</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Backlinks</CardTitle>
              <BarChart3 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">0</div>
              <p className="text-xs text-muted-foreground">Enlaces activos</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="structure" className="space-y-4">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="structure">Estructura de Contenido</TabsTrigger>
            <TabsTrigger value="keywords">Keywords</TabsTrigger>
            <TabsTrigger value="anchors">Anchor Texts</TabsTrigger>
            <TabsTrigger value="tracker">Tracking</TabsTrigger>
          </TabsList>

          <TabsContent value="structure">
            <ContentStructure />
          </TabsContent>

          <TabsContent value="keywords">
            <KeywordResearch />
          </TabsContent>

          <TabsContent value="anchors">
            <AnchorTextGenerator />
          </TabsContent>

          <TabsContent value="tracker">
            <BacklinkTracker />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Index;
