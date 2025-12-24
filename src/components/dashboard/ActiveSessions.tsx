import { Coffee, MapPin, UtensilsCrossed, Trees, Wine, Users, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Session } from "@/pages/Dashboard";

const venueIcons = {
  coffee: Coffee,
  restaurant: UtensilsCrossed,
  park: Trees,
  bar: Wine,
};

const statusColors = {
  active: "bg-green-500",
  pending: "bg-amber-500",
  completed: "bg-muted",
};

interface ActiveSessionsProps {
  sessions: Session[];
  selectedSession: Session | null;
  onSelectSession: (session: Session) => void;
}

export const ActiveSessions = ({ sessions, selectedSession, onSelectSession }: ActiveSessionsProps) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="font-display text-lg font-semibold text-foreground">Active Sessions</h2>
        <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
          {sessions.filter(s => s.status === "active").length} active
        </span>
      </div>

      <div className="space-y-3">
        {sessions.map((session) => {
          const VenueIcon = venueIcons[session.venueType];
          const isSelected = selectedSession?.id === session.id;

          return (
            <button
              key={session.id}
              onClick={() => onSelectSession(session)}
              className={cn(
                "w-full rounded-xl border p-4 text-left transition-all duration-200",
                isSelected
                  ? "border-primary bg-primary/5 shadow-sm"
                  : "border-border/60 bg-card hover:border-primary/40 hover:shadow-sm"
              )}
            >
              <div className="flex items-start gap-3">
                <div className={cn(
                  "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg",
                  isSelected ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                )}>
                  <VenueIcon className="h-5 w-5" />
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="truncate font-medium text-foreground">{session.name}</h3>
                    <span className={cn("h-2 w-2 shrink-0 rounded-full", statusColors[session.status])} />
                  </div>

                  <div className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
                    <MapPin className="h-3.5 w-3.5" />
                    <span className="truncate">{session.venue}</span>
                  </div>

                  <div className="mt-2 flex items-center gap-4 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Users className="h-3.5 w-3.5" />
                      <span>{session.participants} people</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      <span>{session.meetupTime}</span>
                    </div>
                    <span className="ml-auto font-medium text-primary">{session.distance}</span>
                  </div>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
