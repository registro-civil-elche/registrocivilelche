import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Home from "./pages/Home";
import CertificadoNacimiento from "./pages/CertificadoNacimiento";
import CertificadoMatrimonio from "./pages/CertificadoMatrimonio";
import CertificadoDefuncion from "./pages/CertificadoDefuncion";
import NotFound from "./pages/NotFound";

const App = () => (
  <HelmetProvider>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/certificado-nacimiento" element={<CertificadoNacimiento />} />
          <Route path="/certificado-matrimonio" element={<CertificadoMatrimonio />} />
          <Route path="/certificado-defuncion" element={<CertificadoDefuncion />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </HelmetProvider>
);

export default App;
