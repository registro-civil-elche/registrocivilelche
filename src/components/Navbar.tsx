import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
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
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const certificateLinks = [
    { name: "Nacimiento", href: "/certificado-nacimiento" },
    { name: "Matrimonio", href: "/certificado-matrimonio" },
    { name: "Defunción", href: "/certificado-defuncion" },
  ];

  const navLinks = [
    { name: "Información", href: "#informacion" },
    { name: "Ubicación", href: "#ubicacion" },
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
            >
              Inicio
            </button>
            
            <DropdownMenu>
              <DropdownMenuTrigger className="inline-flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary focus:outline-none">
                Certificados
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-background border shadow-md z-50">
                {certificateLinks.map((cert) => (
                  <DropdownMenuItem key={cert.href} asChild>
                    <Link 
                      to={cert.href}
                      className="cursor-pointer"
                    >
                      {cert.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-sm font-medium transition-colors hover:text-primary cursor-pointer bg-transparent border-0 p-0"
              >
                {link.name}
              </button>
            ))}
            <Button asChild size="sm">
              <a 
                href="https://masanet.es" 
                target="_blank" 
                rel="noopener noreferrer"
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
          <div className="md:hidden pb-4">
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
              
              <div className="space-y-2">
                <p className="text-sm font-medium text-muted-foreground px-2">Certificados</p>
                {certificateLinks.map((cert) => (
                  <Link
                    key={cert.href}
                    to={cert.href}
                    className="text-sm pl-4 block transition-colors hover:text-primary"
                    onClick={() => setIsOpen(false)}
                  >
                    {cert.name}
                  </Link>
                ))}
              </div>

              {navLinks.map((link) => (
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
