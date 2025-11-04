import { Card } from "@/components/ui/card";
import { Shield, ExternalLink } from "lucide-react";

const backups = [
  { id: 1, name: "Backup Stream 1", reliability: "99.9%" },
  { id: 2, name: "Backup Stream 2", reliability: "99.5%" },
  { id: 3, name: "Backup Stream 3", reliability: "99.9%" },
  { id: 4, name: "Backup Stream 4", reliability: "98.8%" },
];

const BackupSection = () => {
  return (
    <section id="backup" className="py-20 sm:py-24 lg:py-32 bg-secondary/30 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-6">
            <Shield className="w-4 h-4" />
            <span>Fiabilité Maximale</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">Streams </span>
            <span className="bg-clip-text text-transparent gradient-primary">Backup</span>
          </h2>
          <p className="text-foreground/60 text-base sm:text-lg">
            Des solutions de secours automatiques pour garantir une diffusion sans interruption.
          </p>
        </div>

        {/* Backup Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {backups.map((backup) => (
            <Card
              key={backup.id}
              className="group bg-card border-border hover:border-accent/50 transition-smooth hover-lift cursor-pointer"
            >
              <div className="p-6">
                {/* Icon */}
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:glow-accent transition-smooth">
                  <Shield className="w-6 h-6 text-accent" />
                </div>

                {/* Content */}
                <h3 className="text-base sm:text-lg font-semibold mb-2 text-foreground group-hover:text-accent transition-smooth">
                  {backup.name}
                </h3>

                {/* Reliability */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-accent transition-smooth"
                      style={{ width: backup.reliability }}
                    ></div>
                  </div>
                  <span className="text-xs font-medium text-accent">{backup.reliability}</span>
                </div>

                {/* Link */}
                <div className="flex items-center text-sm text-accent group-hover:text-accent/80 transition-smooth">
                  <span className="font-medium">Activer</span>
                  <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-smooth" />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BackupSection;
