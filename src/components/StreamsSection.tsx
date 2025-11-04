import { Card } from "@/components/ui/card";
import { ExternalLink, Tv2 } from "lucide-react";
import streamFootball from "@/assets/stream-football.jpg";
import streamBasketball from "@/assets/stream-basketball.jpg";
import streamTennis from "@/assets/stream-tennis.jpg";

const streams = [
  { id: 1, name: "Stream Principal 1", type: "HD", status: "live", image: streamFootball },
  { id: 2, name: "Stream Principal 2", type: "4K", status: "live", image: streamBasketball },
  { id: 3, name: "Stream Principal 3", type: "HD", status: "live", image: streamTennis },
  { id: 4, name: "Stream Principal 4", type: "HD", status: "standby", image: streamFootball },
  { id: 5, name: "Stream Principal 5", type: "4K", status: "live", image: streamBasketball },
  { id: 6, name: "Stream Principal 6", type: "HD", status: "live", image: streamTennis },
];

const StreamsSection = () => {
  return (
    <section id="streams" className="py-20 sm:py-24 lg:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">Streams </span>
            <span className="bg-clip-text text-transparent gradient-primary">Principaux</span>
          </h2>
          <p className="text-foreground/60 text-base sm:text-lg">
            Accédez instantanément aux flux de diffusion en direct. Qualité optimale garantie.
          </p>
        </div>

        {/* Streams Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {streams.map((stream) => (
            <Card
              key={stream.id}
              className="group relative bg-card border-border hover:border-primary/50 transition-smooth hover-lift cursor-pointer overflow-hidden"
            >
              {/* Background image */}
              <div className="absolute inset-0">
                <img 
                  src={stream.image} 
                  alt={stream.name}
                  className="w-full h-full object-cover opacity-30 group-hover:opacity-40 transition-smooth"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40"></div>
              </div>

              <div className="relative p-6 sm:p-8">
                {/* Icon */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:glow-primary transition-smooth">
                  <Tv2 className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-smooth">
                  {stream.name}
                </h3>

                {/* Meta Info */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-2 py-1 rounded text-xs font-medium bg-primary/20 text-primary">
                    {stream.type}
                  </span>
                  <span
                    className={`flex items-center gap-1 text-xs font-medium ${
                      stream.status === "live" ? "text-green-400" : "text-yellow-400"
                    }`}
                  >
                    <span className="w-2 h-2 rounded-full bg-current animate-pulse"></span>
                    {stream.status === "live" ? "En Direct" : "En Attente"}
                  </span>
                </div>

                {/* Link */}
                <div className="flex items-center text-sm text-primary group-hover:text-accent transition-smooth">
                  <span className="font-medium">Accéder au stream</span>
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

export default StreamsSection;
