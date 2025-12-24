import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center bg-card rounded-3xl border border-border p-12 md:p-16 shadow-soft relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
          
          <div className="relative z-10">
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-4">
              Ready to connect?
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8">
              Stop the endless "where should we meet?" texts. Find your group's perfect spot in seconds.
            </p>
            <Button variant="hero" size="lg">
              Start your first meetup
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
