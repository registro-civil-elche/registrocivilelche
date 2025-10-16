import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, TrendingUp, Target } from "lucide-react";
import { useState } from "react";

const suggestedKeywords = [
  { keyword: "comunidad latina elche", volume: "50-100", difficulty: "Baja", intent: "Informacional", status: "Sin canibalización" },
  { keyword: "vivir en elche siendo latino", volume: "30-70", difficulty: "Baja", intent: "Informacional", status: "Sin canibalización" },
  { keyword: "latinos en elche", volume: "100-200", difficulty: "Media", intent: "Informacional", status: "Sin canibalización" },
  { keyword: "trámites para extranjeros elche", volume: "70-150", difficulty: "Media", intent: "Transaccional", status: "Oportunidad backlink" },
  { keyword: "asociaciones de latinos elche", volume: "20-50", difficulty: "Baja", intent: "Informacional", status: "Sin canibalización" },
  { keyword: "trabajar en elche siendo extranjero", volume: "40-90", difficulty: "Media", intent: "Informacional", status: "Sin canibalización" },
  { keyword: "colegios para niños latinos elche", volume: "30-60", difficulty: "Baja", intent: "Informacional", status: "Sin canibalización" },
  { keyword: "alquilar piso en elche extranjero", volume: "60-120", difficulty: "Media", intent: "Transaccional", status: "Sin canibalización" },
  { keyword: "abogado extranjería elche", volume: "200-500", difficulty: "Alta", intent: "Transaccional", status: "⚠️ Ya posicionada en masanet.es" },
];

const KeywordResearch = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredKeywords = suggestedKeywords.filter(kw => 
    kw.keyword.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Investigación de Keywords</CardTitle>
          <CardDescription>
            Keywords identificadas que NO canibalizan con masanet.es pero atraen leads relacionados
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Buscar keyword..." 
                className="pl-9"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Button>
              <Target className="mr-2 h-4 w-4" />
              Analizar
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-4">
        {filteredKeywords.map((kw, index) => (
          <Card key={index}>
            <CardContent className="pt-6">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-semibold text-lg">{kw.keyword}</h3>
                    {kw.status.includes("⚠️") && (
                      <Badge variant="destructive">Evitar</Badge>
                    )}
                    {kw.status.includes("Oportunidad") && (
                      <Badge variant="default">Backlink</Badge>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <TrendingUp className="h-3 w-3" />
                      Volumen: {kw.volume}/mes
                    </div>
                    <div>
                      Dificultad: <span className={kw.difficulty === "Baja" ? "text-green-600" : kw.difficulty === "Media" ? "text-yellow-600" : "text-red-600"}>{kw.difficulty}</span>
                    </div>
                    <div>
                      Intención: {kw.intent}
                    </div>
                  </div>
                  <p className="text-sm mt-2">
                    <span className="font-medium">Estado:</span> {kw.status}
                  </p>
                </div>
                <Button variant="outline" size="sm">
                  Usar
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default KeywordResearch;
