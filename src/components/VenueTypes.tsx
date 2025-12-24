import { Coffee, UtensilsCrossed, TreePine, Wine, Dumbbell, ShoppingBag } from "lucide-react";

const venues = [
  { icon: Coffee, label: "Coffee", description: "Cozy cafés" },
  { icon: UtensilsCrossed, label: "Restaurants", description: "Dine together" },
  { icon: TreePine, label: "Parks", description: "Outdoor hangouts" },
  { icon: Wine, label: "Bars", description: "Evening drinks" },
  { icon: Dumbbell, label: "Activities", description: "Fun experiences" },
  { icon: ShoppingBag, label: "Shopping", description: "Retail therapy" },
];

const VenueTypes = () => {
  return (
    <section id="venues" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-4">
            Pick your vibe
          </h2>
          <p className="text-muted-foreground text-lg">
            Whatever you're in the mood for, we'll find the perfect spot nearby.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
          {venues.map((venue) => (
            <div
              key={venue.label}
              className="group cursor-pointer"
            >
              <div className="aspect-square rounded-2xl bg-card border border-border p-6 flex flex-col items-center justify-center gap-3 hover:shadow-elevated hover:-translate-y-1 hover:border-primary/30 transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <venue.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-center">
                  <p className="font-semibold text-foreground">{venue.label}</p>
                  <p className="text-xs text-muted-foreground">{venue.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VenueTypes;
