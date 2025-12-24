import { Calendar, Users, Navigation } from "lucide-react";
import { cn } from "@/lib/utils";

interface MobileNavProps {
  activeTab: "sessions" | "friends" | "directions";
  onTabChange: (tab: "sessions" | "friends" | "directions") => void;
}

const tabs = [
  { id: "sessions" as const, icon: Calendar, label: "Sessions" },
  { id: "friends" as const, icon: Users, label: "Friends" },
  { id: "directions" as const, icon: Navigation, label: "Directions" },
];

export const MobileNav = ({ activeTab, onTabChange }: MobileNavProps) => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 lg:hidden">
      <div className="flex h-16 items-center justify-around px-4">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={cn(
                "flex flex-1 flex-col items-center gap-1 py-2 transition-colors",
                isActive ? "text-primary" : "text-muted-foreground"
              )}
            >
              <Icon className={cn("h-5 w-5", isActive && "animate-pulse-soft")} />
              <span className="text-xs font-medium">{tab.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
