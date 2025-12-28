import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleHomeClick = () => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: sectionId } });
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

  const navLinks = [
    { name: "Información", href: "#informacion" },
    { name: "Ubicación", href: "#ubicacion" },
    { name: "FAQ", href: "/preguntas-frecuentes", isLink: true },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-xl md:text-2xl font-bold text-primary">Registro Civil de Elche</span>
          </Link>

          <div className="hidden md:flex md:items-center md:space-x-6">
            <button
              onClick={handleHomeClick}
              className="text-sm font-medium transition-colors hover:text-primary cursor-pointer bg-transparent border-0 p-0"
              aria-label="Ir a inicio"
            >
              Inicio
            </button>
            
            <DropdownMenu>
              <DropdownMenuTrigger className="inline-flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary focus:outline-none">
                Servicios
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-background border shadow-md z-50 w-64 max-h-[70vh] overflow-y-auto">
                {serviceCategories.map((category, catIndex) => (
                  <div key={category.label}>
                    {catIndex > 0 && <DropdownMenuSeparator />}
                    <DropdownMenuLabel className="text-xs text-muted-foreground">{category.label}</DropdownMenuLabel>
                    {category.items.map((item) => (
                      <DropdownMenuItem key={item.href} asChild>
                        <Link to={item.href} className="cursor-pointer">
                          {item.name}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </div>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {navLinks.map((link) => (
              link.isLink ? (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-sm font-medium transition-colors hover:text-primary"
                >
                  {link.name}
                </Link>
              ) : (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="text-sm font-medium transition-colors hover:text-primary cursor-pointer bg-transparent border-0 p-0"
                  aria-label={`Ir a sección ${link.name}`}
                >
                  {link.name}
                </button>
              )
            ))}
            <Button asChild size="sm">
              <a 
                href="https://masanet.es" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Contactar con asesoría legal Estudio Jurídico Masanet"
              >
                Asesoría Legal
              </a>
            </Button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 max-h-[80vh] overflow-y-auto">
            <div className="flex flex-col space-y-3">
              <button
                onClick={() => {
                  handleHomeClick();
                  setIsOpen(false);
                }}
                className="text-sm font-medium transition-colors hover:text-primary cursor-pointer bg-transparent border-0 p-0 text-left"
              >
                Inicio
              </button>
              
              {serviceCategories.map((category) => (
                <div key={category.label} className="space-y-2">
                  <p className="text-sm font-medium text-muted-foreground">{category.label}</p>
                  {category.items.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      className="text-sm pl-4 block transition-colors hover:text-primary"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              ))}

              {navLinks.map((link) => (
                link.isLink ? (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="text-sm font-medium transition-colors hover:text-primary"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                ) : (
                  <button
                    key={link.href}
                    onClick={() => {
                      scrollToSection(link.href);
                      setIsOpen(false);
                    }}
                    className="text-sm font-medium transition-colors hover:text-primary cursor-pointer bg-transparent border-0 p-0 text-left"
                  >
                    {link.name}
                  </button>
                )
              ))}
              <Button asChild size="sm" className="w-full">
                <a 
                  href="https://masanet.es" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                >
                  Asesoría Legal
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
