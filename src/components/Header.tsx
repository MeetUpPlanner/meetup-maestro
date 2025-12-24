import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center transition-transform group-hover:scale-105">
            <MapPin className="w-4 h-4 text-primary-foreground" />
          </div>
          <span className="font-serif text-xl font-semibold text-foreground">Connect</span>
        </a>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Features
          </a>
          <a href="#how-it-works" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            How it works
          </a>
          <a href="#venues" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Venues
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" className="hidden sm:inline-flex">
            Sign in
          </Button>
          <Button size="sm">
            Get started
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
