import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Copy, CheckCircle2, Link2 } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const anchorTextExamples = [
  {
    type: "Branded Natural",
    examples: [
      "Estudio Jurídico Masanet",
      "el despacho Masanet en Elche",
      "abogados Masanet"
    ],
    usage: "40%",
    recommended: true
  },
  {
    type: "Genérico Contextual",
    examples: [
      "este abogado especializado",
      "profesionales con experiencia",
      "expertos en extranjería",
      "aquí puedes consultar",
      "más información sobre trámites"
    ],
    usage: "30%",
    recommended: true
  },
  {
    type: "URL Desnuda",
    examples: [
      "masanet.es",
      "www.masanet.es"
    ],
    usage: "15%",
    recommended: true
  },
  {
    type: "Long-tail Natural",
    examples: [
      "abogado con más de 20 años de experiencia en Elche",
      "despacho especializado en extranjería que recomiendo",
      "profesionales que llevan casos de arraigo"
    ],
    usage: "10%",
    recommended: true
  },
  {
    type: "Exact Match",
    examples: [
      "abogado extranjería elche",
      "abogado nacionalidad española"
    ],
    usage: "5%",
    recommended: false,
    warning: "Usar con precaución - Google penaliza uso excesivo"
  }
];

const contextExamples = [
  {
    context: "Artículo: 'Trámites para extranjeros en Elche'",
    paragraph: "Si necesitas ayuda profesional con tus trámites de extranjería, te recomiendo contactar con {ANCHOR}. Llevan más de 20 años ayudando a la comunidad latina en Elche y tienen un ratio de éxito muy alto.",
    suggestedAnchor: "el Estudio Jurídico Masanet",
    type: "Branded Natural"
  },
  {
    context: "Artículo: 'Cómo obtener el arraigo social'",
    paragraph: "El proceso de arraigo social puede ser complejo. Para asegurarte de que toda tu documentación está en orden, {ANCHOR} puede ser de gran ayuda en tu situación particular.",
    suggestedAnchor: "consultar con profesionales especializados",
    type: "Genérico Contextual"
  },
  {
    context: "Artículo: 'Reagrupación familiar paso a paso'",
    paragraph: "Para más información detallada sobre el proceso de reagrupación familiar y asesoría personalizada, visita {ANCHOR} donde encontrarás toda la información actualizada.",
    suggestedAnchor: "masanet.es",
    type: "URL Desnuda"
  }
];

const AnchorTextGenerator = () => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const { toast } = useToast();

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    toast({
      title: "Copiado",
      description: "Anchor text copiado al portapapeles",
    });
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Generador de Anchor Texts Naturales</CardTitle>
          <CardDescription>
            Textos de anclaje que evitan penalizaciones de Google y mantienen naturalidad contextual
          </CardDescription>
        </CardHeader>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Distribución Recomendada de Anchor Texts</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {anchorTextExamples.map((category, index) => (
            <div key={index} className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <h4 className="font-medium">{category.type}</h4>
                  {category.recommended ? (
                    <Badge variant="default">Recomendado</Badge>
                  ) : (
                    <Badge variant="destructive">Precaución</Badge>
                  )}
                  <Badge variant="outline">{category.usage}</Badge>
                </div>
              </div>
              
              {category.warning && (
                <p className="text-sm text-destructive">⚠️ {category.warning}</p>
              )}
              
              <div className="grid gap-2 md:grid-cols-2">
                {category.examples.map((example, exIndex) => (
                  <div key={exIndex} className="flex items-center justify-between gap-2 rounded-lg border bg-card p-3">
                    <code className="text-sm">{example}</code>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => copyToClipboard(example, index * 100 + exIndex)}
                    >
                      {copiedIndex === index * 100 + exIndex ? (
                        <CheckCircle2 className="h-4 w-4 text-green-600" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Ejemplos en Contexto</CardTitle>
          <CardDescription>
            Cómo integrar naturalmente los anchor texts en artículos
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {contextExamples.map((example, index) => (
            <div key={index} className="rounded-lg border bg-muted/30 p-4 space-y-3">
              <div className="flex items-center gap-2">
                <Link2 className="h-4 w-4 text-primary" />
                <h5 className="font-medium text-sm">{example.context}</h5>
              </div>
              
              <p className="text-sm leading-relaxed">
                {example.paragraph.split("{ANCHOR}").map((part, i) => (
                  <span key={i}>
                    {part}
                    {i < example.paragraph.split("{ANCHOR}").length - 1 && (
                      <span className="font-semibold text-primary bg-primary/10 px-1 rounded">
                        {example.suggestedAnchor}
                      </span>
                    )}
                  </span>
                ))}
              </p>
              
              <div className="flex items-center justify-between pt-2 border-t">
                <Badge variant="outline">{example.type}</Badge>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => copyToClipboard(example.suggestedAnchor, 1000 + index)}
                >
                  {copiedIndex === 1000 + index ? (
                    <>
                      <CheckCircle2 className="mr-2 h-4 w-4 text-green-600" />
                      Copiado
                    </>
                  ) : (
                    <>
                      <Copy className="mr-2 h-4 w-4" />
                      Copiar anchor
                    </>
                  )}
                </Button>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default AnchorTextGenerator;
