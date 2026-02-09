import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Home from "./pages/Home";

// Lazy load all secondary pages to reduce initial bundle size
const CertificadoNacimiento = lazy(() => import("./pages/CertificadoNacimiento"));
const CertificadoMatrimonio = lazy(() => import("./pages/CertificadoMatrimonio"));
const CertificadoDefuncion = lazy(() => import("./pages/CertificadoDefuncion"));
const PreguntasFrecuentes = lazy(() => import("./pages/PreguntasFrecuentes"));
const CambioNombre = lazy(() => import("./pages/CambioNombre"));
const CambioSexo = lazy(() => import("./pages/CambioSexo"));
const ConservacionNacionalidad = lazy(() => import("./pages/ConservacionNacionalidad"));
const ExpedienteMatrimonio = lazy(() => import("./pages/ExpedienteMatrimonio"));
const ExpedienteNacionalidadOpcion = lazy(() => import("./pages/ExpedienteNacionalidadOpcion"));
const FeVidaEstado = lazy(() => import("./pages/FeVidaEstado"));
const InscripcionCapitulaciones = lazy(() => import("./pages/InscripcionCapitulaciones"));
const InscripcionNacimientoFueraPlazo = lazy(() => import("./pages/InscripcionNacimientoFueraPlazo"));
const InscripcionRecienNacido = lazy(() => import("./pages/InscripcionRecienNacido"));
const JuraNacionalidad = lazy(() => import("./pages/JuraNacionalidad"));
const JuraNacionalidadOpcion = lazy(() => import("./pages/JuraNacionalidadOpcion"));
const ReconocimientoHijoNoMatrimonial = lazy(() => import("./pages/ReconocimientoHijoNoMatrimonial"));
const SimplePresuncionNacionalidad = lazy(() => import("./pages/SimplePresuncionNacionalidad"));
const RectificacionError = lazy(() => import("./pages/RectificacionError"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Simple loading fallback
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-pulse text-muted-foreground">Cargando...</div>
  </div>
);

const App = () => (
  <HelmetProvider>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Certificados */}
            <Route path="/certificado-nacimiento" element={<CertificadoNacimiento />} />
            <Route path="/certificado-matrimonio" element={<CertificadoMatrimonio />} />
            <Route path="/certificado-defuncion" element={<CertificadoDefuncion />} />
            {/* Cambios de estado */}
            <Route path="/cambio-nombre" element={<CambioNombre />} />
            <Route path="/cambio-sexo" element={<CambioSexo />} />
            {/* Nacionalidad */}
            <Route path="/conservacion-nacionalidad" element={<ConservacionNacionalidad />} />
            <Route path="/expediente-nacionalidad-opcion" element={<ExpedienteNacionalidadOpcion />} />
            <Route path="/jura-nacionalidad" element={<JuraNacionalidad />} />
            <Route path="/jura-nacionalidad-opcion" element={<JuraNacionalidadOpcion />} />
            <Route path="/simple-presuncion-nacionalidad" element={<SimplePresuncionNacionalidad />} />
            {/* Inscripciones */}
            <Route path="/inscripcion-recien-nacido" element={<InscripcionRecienNacido />} />
            <Route path="/inscripcion-nacimiento-fuera-plazo" element={<InscripcionNacimientoFueraPlazo />} />
            <Route path="/inscripcion-capitulaciones" element={<InscripcionCapitulaciones />} />
            <Route path="/reconocimiento-hijo-no-matrimonial" element={<ReconocimientoHijoNoMatrimonial />} />
            {/* Otros trámites */}
            <Route path="/expediente-matrimonio" element={<ExpedienteMatrimonio />} />
            <Route path="/fe-vida-estado" element={<FeVidaEstado />} />
            <Route path="/rectificacion-error" element={<RectificacionError />} />
            {/* Info */}
            <Route path="/preguntas-frecuentes" element={<PreguntasFrecuentes />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </HelmetProvider>
);

export default App;
