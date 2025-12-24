import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Users, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-accent/40 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-6 py-24 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-full mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-secondary-foreground">Find your perfect meeting spot</span>
          </div>

          {/* Headline */}
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-semibold text-foreground mb-6 animate-fade-in-up text-balance leading-tight">
            Meet in the
            <span className="text-primary"> middle</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in-up leading-relaxed" style={{ animationDelay: '0.1s' }}>
            Connect calculates the optimal meetup location for your group. Share your starting points, pick a vibe, and discover the perfect place to gather.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <Button variant="hero">
              Start connecting
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button variant="hero-outline">
              See how it works
            </Button>
          </div>

          {/* Stats or trust indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                <Users className="w-5 h-5 text-primary" />
              </div>
              <div className="text-left">
                <p className="text-2xl font-serif font-semibold text-foreground">10k+</p>
                <p className="text-sm text-muted-foreground">Happy meetups</p>
              </div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-border" />
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div className="text-left">
                <p className="text-2xl font-serif font-semibold text-foreground">500+</p>
                <p className="text-sm text-muted-foreground">Cities covered</p>
              </div>
            </div>
          </div>
        </div>

        {/* Hero visual - Map preview */}
        <div className="mt-16 max-w-5xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <div className="relative rounded-2xl overflow-hidden shadow-elevated bg-card border border-border">
            <div className="aspect-[16/9] bg-muted relative">
              {/* Map placeholder with location pins */}
              <div className="absolute inset-0 bg-gradient-to-br from-secondary to-muted" />
              
              {/* Decorative pins */}
              <div className="absolute top-1/4 left-1/4 animate-pulse-soft">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-primary" />
                </div>
              </div>
              <div className="absolute top-1/3 right-1/3 animate-pulse-soft" style={{ animationDelay: '0.5s' }}>
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-primary" />
                </div>
              </div>
              <div className="absolute bottom-1/3 left-1/2 animate-pulse-soft" style={{ animationDelay: '1s' }}>
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-primary" />
                </div>
              </div>
              
              {/* Center meeting point */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center shadow-elevated animate-float">
                  <MapPin className="w-6 h-6 text-accent-foreground" />
                </div>
              </div>
              
              {/* Connecting lines visual */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
                <line x1="25%" y1="25%" x2="50%" y2="50%" stroke="currentColor" strokeWidth="2" strokeDasharray="8 4" className="text-primary" />
                <line x1="67%" y1="33%" x2="50%" y2="50%" stroke="currentColor" strokeWidth="2" strokeDasharray="8 4" className="text-primary" />
                <line x1="50%" y1="67%" x2="50%" y2="50%" stroke="currentColor" strokeWidth="2" strokeDasharray="8 4" className="text-primary" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
