import { Navigation, Clock, Car, Footprints, Bike, MapPin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { Session } from "@/pages/Dashboard";
import { useState } from "react";

interface DirectionsPanelProps {
  session: Session | null;
}

type TravelMode = "driving" | "walking" | "cycling";

const travelModes: { id: TravelMode; icon: React.ElementType; label: string; time: string }[] = [
  { id: "driving", icon: Car, label: "Drive", time: "12 min" },
  { id: "walking", icon: Footprints, label: "Walk", time: "28 min" },
  { id: "cycling", icon: Bike, label: "Bike", time: "18 min" },
];

const routeSteps = [
  { instruction: "Head north on Main St", distance: "0.3 mi" },
  { instruction: "Turn right onto Oak Ave", distance: "0.5 mi" },
  { instruction: "Continue straight past the park", distance: "0.8 mi" },
  { instruction: "Destination will be on your left", distance: "" },
];

export const DirectionsPanel = ({ session }: DirectionsPanelProps) => {
  const [selectedMode, setSelectedMode] = useState<TravelMode>("driving");

  if (!session) {
    return (
      <div className="flex h-64 items-center justify-center rounded-xl border border-dashed border-border bg-muted/20">
        <div className="text-center">
          <Navigation className="mx-auto h-8 w-8 text-muted-foreground/50" />
          <p className="mt-2 text-sm text-muted-foreground">Select a session to see directions</p>
        </div>
      </div>
    );
  }

  const currentMode = travelModes.find(m => m.id === selectedMode)!;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="font-display text-lg font-semibold text-foreground">Directions</h2>
        <Button variant="ghost" size="sm" className="gap-1.5 text-xs">
          <ExternalLink className="h-3.5 w-3.5" />
          Open Maps
        </Button>
      </div>

      {/* Destination Card */}
      <div className="rounded-xl border border-border/60 bg-card p-4">
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <MapPin className="h-5 w-5" />
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="font-medium text-foreground">{session.venue}</h3>
            <p className="text-sm text-muted-foreground">{session.name}</p>
            <div className="mt-2 flex items-center gap-2 text-sm">
              <Clock className="h-4 w-4 text-primary" />
              <span className="font-medium text-primary">{session.meetupTime}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Travel Mode Selector */}
      <div className="grid grid-cols-3 gap-2">
        {travelModes.map((mode) => {
          const Icon = mode.icon;
          const isSelected = selectedMode === mode.id;
          return (
            <button
              key={mode.id}
              onClick={() => setSelectedMode(mode.id)}
              className={cn(
                "flex flex-col items-center gap-1 rounded-lg border p-3 transition-all",
                isSelected
                  ? "border-primary bg-primary/5 text-primary"
                  : "border-border/60 bg-card text-muted-foreground hover:border-primary/40"
              )}
            >
              <Icon className="h-5 w-5" />
              <span className="text-xs font-medium">{mode.label}</span>
              <span className={cn("text-xs", isSelected ? "text-primary" : "text-muted-foreground/70")}>
                {mode.time}
              </span>
            </button>
          );
        })}
      </div>

      {/* Route Overview */}
      <div className="rounded-xl border border-border/60 bg-gradient-to-br from-primary/5 to-transparent p-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-2xl font-semibold text-foreground">{currentMode.time}</div>
            <div className="text-sm text-muted-foreground">{session.distance} • {currentMode.label}</div>
          </div>
          <Button className="gap-2">
            <Navigation className="h-4 w-4" />
            Start
          </Button>
        </div>
      </div>

      {/* Route Steps */}
      <div className="space-y-1">
        <h3 className="text-sm font-medium text-muted-foreground">Route</h3>
        <div className="space-y-0">
          {routeSteps.map((step, index) => (
            <div key={index} className="flex gap-3 py-2">
              <div className="flex flex-col items-center">
                <div className={cn(
                  "flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-medium",
                  index === routeSteps.length - 1
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground"
                )}>
                  {index + 1}
                </div>
                {index < routeSteps.length - 1 && (
                  <div className="mt-1 h-full w-px bg-border" />
                )}
              </div>
              <div className="flex-1 pb-2">
                <p className="text-sm text-foreground">{step.instruction}</p>
                {step.distance && (
                  <p className="text-xs text-muted-foreground">{step.distance}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
