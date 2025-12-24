import { MapPin, Share2, Compass, PartyPopper } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Share2,
    title: "Share your link",
    description: "Create a meetup session and share the invite link with your friends.",
  },
  {
    number: "02",
    icon: MapPin,
    title: "Everyone pins in",
    description: "Each person adds their starting location—home, work, or wherever they are.",
  },
  {
    number: "03",
    icon: Compass,
    title: "Find the sweet spot",
    description: "Connect calculates the optimal midpoint and suggests venues that match your vibe.",
  },
  {
    number: "04",
    icon: PartyPopper,
    title: "Meet up!",
    description: "Pick a spot, get directions, and enjoy time together without the planning hassle.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-4">
            How it works
          </h2>
          <p className="text-muted-foreground text-lg">
            From scattered friends to shared moments in four simple steps.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-border hidden md:block" />

            <div className="space-y-12">
              {steps.map((step, index) => (
                <div
                  key={step.number}
                  className="relative flex items-start gap-6 md:gap-8"
                >
                  {/* Step indicator */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-card border-2 border-border flex items-center justify-center shadow-soft">
                      <step.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-3">
                    <span className="text-sm font-medium text-primary mb-2 block">
                      Step {step.number}
                    </span>
                    <h3 className="font-serif text-2xl font-semibold text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed max-w-md">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
