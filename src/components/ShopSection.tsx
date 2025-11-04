import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Sparkles } from "lucide-react";

const features = [
  "Accès illimité aux chaînes",
  "Qualité HD et 4K disponible",
  "Support multi-appareils",
  "Mise à jour automatique des liens",
  "Guide EPG intégré",
  "Support technique 24/7",
];

const ShopSection = () => {
  return (
    <section id="shop" className="py-20 sm:py-24 lg:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6 animate-glow">
            <Sparkles className="w-4 h-4" />
            <span>Offre Premium</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">Abonnement </span>
            <span className="bg-clip-text text-transparent gradient-primary">IPTV</span>
          </h2>
          <p className="text-foreground/60 text-base sm:text-lg">
            Un accès complet à tous les contenus premium pour une année entière.
          </p>
        </div>

        {/* Pricing Card */}
        <div className="max-w-2xl mx-auto">
          <Card className="relative bg-card border-primary/30 overflow-hidden shadow-card">
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
            
            <div className="relative p-8 sm:p-12">
              {/* Price */}
              <div className="text-center mb-8">
                <div className="text-5xl sm:text-6xl md:text-7xl font-bold mb-2">
                  <span className="bg-clip-text text-transparent gradient-primary">45€</span>
                </div>
                <div className="text-foreground/60 text-lg">par an</div>
                <div className="inline-block mt-4 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium">
                  Économisez 40% vs mensuel
                </div>
              </div>

              {/* Features */}
              <div className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-foreground/80">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <Button
                size="lg"
                className="w-full gradient-primary hover:glow-primary transition-smooth font-semibold text-lg py-6 animate-glow"
              >
                Souscrire maintenant
              </Button>

              {/* Trust Badge */}
              <div className="text-center mt-6 text-sm text-foreground/50">
                🔒 Paiement sécurisé • Activation immédiate
              </div>
            </div>
          </Card>

          {/* Disclaimer */}
          <div className="mt-8 p-6 rounded-lg bg-muted/30 border border-border">
            <p className="text-sm text-foreground/60 text-center">
              <strong className="text-foreground">Note importante :</strong> IKZFC Space est une plateforme 
              d'agrégation de liens. Nous ne stockons ni ne diffusons directement de contenu protégé. 
              L'utilisateur est responsable de l'utilisation des liens fournis.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopSection;
