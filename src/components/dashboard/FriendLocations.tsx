import { MapPin, Navigation } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Friend } from "@/pages/Dashboard";

interface FriendLocationsProps {
  friends: Friend[];
}

export const FriendLocations = ({ friends }: FriendLocationsProps) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="font-display text-lg font-semibold text-foreground">Friend Locations</h2>
        <span className="rounded-full bg-green-500/10 px-2.5 py-0.5 text-xs font-medium text-green-600">
          {friends.filter(f => f.isOnWay).length} on the way
        </span>
      </div>

      {/* Mini Map Preview */}
      <div className="relative h-32 overflow-hidden rounded-xl bg-muted/50">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M0%200h40v40H0z%22%20fill%3D%22none%22%2F%3E%3Cpath%20d%3D%22M0%2020h40M20%200v40%22%20stroke%3D%22%23e5e5e5%22%20stroke-width%3D%22.5%22%2F%3E%3C%2Fsvg%3E')] opacity-50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative">
            {/* Center point */}
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary shadow-lg">
              <MapPin className="h-4 w-4 text-primary-foreground" />
            </div>
            {/* Friend markers */}
            {friends.slice(0, 4).map((friend, i) => {
              const positions = [
                { top: "-20px", left: "-30px" },
                { top: "-15px", right: "-35px" },
                { bottom: "-18px", left: "-25px" },
                { bottom: "-22px", right: "-28px" },
              ];
              return (
                <div
                  key={friend.id}
                  className={cn(
                    "absolute flex h-6 w-6 items-center justify-center rounded-full text-[10px] font-semibold shadow-md",
                    friend.isOnWay ? "bg-green-500 text-white" : "bg-muted-foreground/20 text-muted-foreground"
                  )}
                  style={positions[i]}
                >
                  {friend.avatar.charAt(0)}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Friends List */}
      <div className="space-y-2">
        {friends.map((friend) => (
          <div
            key={friend.id}
            className="flex items-center gap-3 rounded-lg border border-border/60 bg-card p-3 transition-colors hover:bg-muted/30"
          >
            <div className={cn(
              "flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-semibold",
              friend.isOnWay 
                ? "bg-green-500/10 text-green-600" 
                : "bg-muted text-muted-foreground"
            )}>
              {friend.avatar}
            </div>

            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2">
                <span className="truncate font-medium text-foreground">{friend.name}</span>
                {friend.isOnWay && (
                  <Navigation className="h-3.5 w-3.5 text-green-500" />
                )}
              </div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span>{friend.location}</span>
                <span>•</span>
                <span>{friend.distance}</span>
              </div>
            </div>

            <div className="text-right">
              <div className={cn(
                "text-sm font-semibold",
                friend.isOnWay ? "text-green-600" : "text-muted-foreground"
              )}>
                {friend.eta}
              </div>
              <div className="text-xs text-muted-foreground">ETA</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
