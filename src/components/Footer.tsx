import { Tv } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                <Tv className="w-6 h-6 text-primary" />
              </div>
              <span className="text-xl font-bold bg-clip-text text-transparent gradient-primary">
                IKZFC Space
              </span>
            </div>
            <p className="text-foreground/60 text-sm">
              Plateforme de streaming et IPTV nouvelle génération. 
              Accès premium aux meilleurs flux en direct.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Navigation</h3>
            <ul className="space-y-2 text-sm text-foreground/60">
              <li>
                <a href="#streams" className="hover:text-primary transition-smooth">
                  Streams Principaux
                </a>
              </li>
              <li>
                <a href="#backup" className="hover:text-primary transition-smooth">
                  Streams Backup
                </a>
              </li>
              <li>
                <a href="#shop" className="hover:text-primary transition-smooth">
                  Abonnement IPTV
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Informations légales</h3>
            <ul className="space-y-2 text-sm text-foreground/60">
              <li>
                <a href="#" className="hover:text-primary transition-smooth">
                  Mentions Légales
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-smooth">
                  Conditions d'utilisation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-smooth">
                  Politique de confidentialité
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-smooth">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-foreground/50 text-center sm:text-left">
              © 2025 IKZFC Space. Tous droits réservés.
            </p>
            <p className="text-xs text-foreground/40 text-center sm:text-right max-w-md">
              Plateforme d'agrégation de liens. Nous ne stockons ni ne diffusons de contenu protégé.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
