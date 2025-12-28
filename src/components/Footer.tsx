import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    if (window.location.pathname !== '/') {
      window.location.href = '/' + sectionId;
    } else {
      const element = document.querySelector(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const serviceCategories = [
    {
      label: "Certificados",
      items: [
        { name: "Certificado de Nacimiento", href: "/certificado-nacimiento" },
        { name: "Certificado de Matrimonio", href: "/certificado-matrimonio" },
        { name: "Certificado de Defunción", href: "/certificado-defuncion" },
      ]
    },
    {
      label: "Nacionalidad",
      items: [
        { name: "Jura de Nacionalidad", href: "/jura-nacionalidad" },
        { name: "Nacionalidad por Opción", href: "/expediente-nacionalidad-opcion" },
        { name: "Jura Nacionalidad Opción", href: "/jura-nacionalidad-opcion" },
        { name: "Conservación Nacionalidad", href: "/conservacion-nacionalidad" },
        { name: "Simple Presunción", href: "/simple-presuncion-nacionalidad" },
      ]
    },
    {
      label: "Inscripciones",
      items: [
        { name: "Inscripción Recién Nacido", href: "/inscripcion-recien-nacido" },
        { name: "Nacimiento Fuera de Plazo", href: "/inscripcion-nacimiento-fuera-plazo" },
        { name: "Reconocimiento de Hijo", href: "/reconocimiento-hijo-no-matrimonial" },
        { name: "Capitulaciones Matrimoniales", href: "/inscripcion-capitulaciones" },
      ]
    },
    {
      label: "Otros Trámites",
      items: [
        { name: "Cambio de Nombre", href: "/cambio-nombre" },
        { name: "Cambio de Sexo", href: "/cambio-sexo" },
        { name: "Expediente Matrimonio", href: "/expediente-matrimonio" },
        { name: "Fe de Vida y Estado", href: "/fe-vida-estado" },
        { name: "Rectificación de Error", href: "/rectificacion-error" },
      ]
    },
  ];

  return (
    <footer className="border-t bg-muted/30 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {serviceCategories.map((category) => (
            <div key={category.label}>
              <h4 className="font-semibold mb-4">{category.label}</h4>
              <ul className="space-y-2 text-sm">
                {category.items.map((item) => (
                  <li key={item.href}>
                    <Link to={item.href} className="text-muted-foreground hover:text-primary">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 pt-8 border-t grid gap-8 md:grid-cols-2">
          <div>
            <h4 className="font-semibold mb-4">Información</h4>
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

          <div>
            <h4 className="font-semibold mb-4">Asesoría Legal Profesional</h4>
            <p className="text-sm text-muted-foreground mb-3">
              ¿Necesitas ayuda con tus trámites del Registro Civil? Más de 20 años de experiencia en nacionalidad, herencias y documentación.
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
