import { Link } from "react-router-dom";

const Footer = () => {
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
            <h4 className="font-semibold mb-4">Información</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#certificados" className="text-muted-foreground hover:text-primary">
                  Certificados
                </a>
              </li>
              <li>
                <a href="#informacion" className="text-muted-foreground hover:text-primary">
                  Información del Registro
                </a>
              </li>
              <li>
                <a href="#ubicacion" className="text-muted-foreground hover:text-primary">
                  Ubicación y Contacto
                </a>
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
          </div>
        </div>

        <div className="mt-8 pt-8 border-t">
          <div className="text-center text-sm text-muted-foreground space-y-2">
            <p className="font-medium">
              Portal privado de información sobre registros civiles. Trabajamos con independencia del Ministerio de Justicia y otra administración pública.
            </p>
            <p>© {new Date().getFullYear()} RegistroCivilElche.es - Toda la información es orientativa.</p>
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
