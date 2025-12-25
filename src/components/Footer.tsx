import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    // Si no estamos en la home, primero navegamos allí
    if (window.location.pathname !== '/') {
      window.location.href = '/' + sectionId;
    } else {
      const element = document.querySelector(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <footer className="border-t bg-muted/30 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-semibold mb-4">Registro Civil de Elche</h3>
            <p className="text-sm text-muted-foreground">
              Portal informativo no oficial sobre el Registro Civil de Elche. Información actualizada sobre certificados, trámites y procedimientos.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Certificados</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/certificado-nacimiento" className="text-muted-foreground hover:text-primary">
                  Certificado de Nacimiento
                </Link>
              </li>
              <li>
                <Link to="/certificado-matrimonio" className="text-muted-foreground hover:text-primary">
                  Certificado de Matrimonio
                </Link>
              </li>
              <li>
                <Link to="/certificado-defuncion" className="text-muted-foreground hover:text-primary">
                  Certificado de Defunción
                </Link>
              </li>
            </ul>
            <h4 className="font-semibold mb-4 mt-6">Información</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button 
                  onClick={() => scrollToSection('#informacion')}
                  className="text-muted-foreground hover:text-primary bg-transparent border-0 p-0 cursor-pointer text-left"
                >
                  Información del Registro
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('#ubicacion')}
                  className="text-muted-foreground hover:text-primary bg-transparent border-0 p-0 cursor-pointer text-left"
                >
                  Ubicación y Contacto
                </button>
              </li>
              <li>
                <Link to="/preguntas-frecuentes" className="text-muted-foreground hover:text-primary">
                  Preguntas Frecuentes
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Asesoría Legal Profesional</h4>
            <p className="text-sm text-muted-foreground mb-3">
              ¿Necesitas ayuda con tus trámites del Registro Civil? Más de 20 años de experiencia.
            </p>
            <a
              href="https://masanet.es"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-foreground hover:text-primary hover:underline"
            >
              Estudio Jurídico Masanet →
            </a>
            
            <h4 className="font-semibold mb-4 mt-6">Otros recursos útiles</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://omacelche.es"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary"
                >
                  OMAC Elche
                </a>
              </li>
              <li>
                <a
                  href="https://latinosenelche.es"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary"
                >
                  Latinos en Elche
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t">
          <div className="text-center text-sm text-muted-foreground space-y-2">
            <p className="font-medium">
              Portal privado de información sobre registros civiles. Trabajamos con independencia del Ministerio de Justicia y cualquier otra administración pública.
            </p>
            <p>© {new Date().getFullYear()} registrocivilelche.es - Toda la información es orientativa.</p>
            <p>
              Web diseñada por{" "}
              <a
                href="https://www.linkedin.com/in/backtester/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary hover:underline font-medium"
              >
                Víctor Ramón Pardilla Fernández
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
