import { MapPin, Users, Coffee, Navigation, Clock, Heart } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Group coordination",
    description: "Invite friends to share their starting locations. Everyone joins in seconds with a simple link.",
  },
  {
    icon: Navigation,
    title: "Smart midpoint",
    description: "Our algorithm calculates the fairest meeting point, minimizing total travel time for everyone.",
  },
  {
    icon: Coffee,
    title: "Venue discovery",
    description: "Choose your vibe—coffee, dinner, or outdoors—and get curated venue recommendations.",
  },
  {
    icon: Clock,
    title: "Real-time updates",
    description: "See live updates as friends join. Know who's on their way and track estimated arrivals.",
  },
  {
    icon: MapPin,
    title: "Flexible locations",
    description: "Enter addresses, drop pins, or share live location. We handle all the coordinate magic.",
  },
  {
    icon: Heart,
    title: "Save favorites",
    description: "Build a collection of your group's favorite spots for quick future meetups.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-4">
            Everything you need to connect
          </h2>
          <p className="text-muted-foreground text-lg">
            Simple tools that make meeting up effortless, fair, and fun.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-6 bg-card rounded-xl border border-border hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
