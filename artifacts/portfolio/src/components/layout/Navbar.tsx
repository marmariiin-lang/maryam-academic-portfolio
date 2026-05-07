import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { href: "/", label: "Home", sectionId: "home-hero" },
  { href: "/research", label: "Research", sectionId: "section-research" },
  { href: "/projects", label: "Projects", sectionId: "section-projects" },
  { href: "/teaching", label: "Teaching & Design", sectionId: "section-teaching" },
  { href: "/notes", label: "Notes", sectionId: null },
  { href: "/cv", label: "CV", sectionId: null },
  { href: "/contact", label: "Contact", sectionId: null },
];

const sectionToHref: Record<string, string> = {
  "home-hero": "/",
  "section-research": "/research",
  "section-projects": "/projects",
  "section-teaching": "/teaching",
};

export function Navbar() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home-hero");

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  useEffect(() => {
    if (location !== "/") {
      setActiveSection("");
      return;
    }

    const sectionIds = ["home-hero", "section-research", "section-projects", "section-teaching"];

    const handleScroll = () => {
      const scrollY = window.scrollY + 100;
      let current = sectionIds[0];
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollY) {
          current = id;
        }
      }
      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location]);

  const isActive = (link: (typeof links)[0]) => {
    if (location === "/") {
      const mappedHref = sectionToHref[activeSection] ?? "/";
      return mappedHref === link.href;
    }
    return location === link.href;
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md border-b border-border/50" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="font-serif text-xl font-medium tracking-tight text-foreground hover:text-primary transition-colors" data-testid="link-logo">
          Maryam Babaee
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium px-3 py-1.5 rounded-full transition-all duration-200 ${
                isActive(link)
                  ? "bg-muted text-foreground font-semibold"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              }`}
              data-testid={`nav-link-${link.label.toLowerCase()}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          data-testid="button-mobile-menu"
        >
          {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border/50 shadow-lg py-4 px-6 flex flex-col gap-2 animate-in slide-in-from-top-2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-base font-medium px-3 py-2 rounded-xl transition-colors ${
                isActive(link)
                  ? "bg-muted text-foreground font-semibold"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
