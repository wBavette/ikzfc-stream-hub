import { Button } from "@/components/ui/button";
import { Play, Zap } from "lucide-react";
import heroSports from "@/assets/hero-sports.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero background image */}
      <div className="absolute inset-0">
        <img 
          src={heroSports} 
          alt="Sports streaming avec stars et logos de chaînes" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/70"></div>
      </div>
      
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 gradient-hero opacity-40"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(14,165,233,0.15),transparent_50%)]"></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium animate-glow">
            <Zap className="w-4 h-4" />
            <span>Plateforme Premium 2025</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            <span className="text-foreground">Streaming & IPTV</span>
            <br />
            <span className="bg-clip-text text-transparent gradient-primary">
              Nouvelle Génération
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl md:text-2xl text-foreground/70 max-w-2xl mx-auto">
            Accédez aux meilleurs flux de streaming sportif en direct. Une expérience fluide, 
            rapide et centralisée pour ne jamais manquer un match.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              size="lg"
              onClick={() => scrollToSection("streams")}
              className="w-full sm:w-auto gradient-primary hover:glow-primary transition-smooth font-semibold text-base sm:text-lg px-8 py-6"
            >
              <Play className="w-5 h-5 mr-2" />
              Voir les Streams
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("shop")}
              className="w-full sm:w-auto border-primary/30 hover:bg-primary/10 hover:border-primary transition-smooth font-semibold text-base sm:text-lg px-8 py-6"
            >
              Abonnement IPTV
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl mx-auto pt-12">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">24/7</div>
              <div className="text-xs sm:text-sm text-foreground/60 mt-1">Disponibilité</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">HD/4K</div>
              <div className="text-xs sm:text-sm text-foreground/60 mt-1">Qualité</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">100+</div>
              <div className="text-xs sm:text-sm text-foreground/60 mt-1">Chaînes</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;
