import { Button } from "@/components/ui/button";
import { Star, Shield, TrendingUp } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-primary to-success rounded-lg flex items-center justify-center">
                <Star className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-foreground">BetReviews</span>
            </div>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#apps" className="text-muted-foreground hover:text-foreground transition-colors">
              Top Apps
            </a>
            <a href="#sports" className="text-muted-foreground hover:text-foreground transition-colors">
              By Sport
            </a>
            <a href="#safety" className="text-muted-foreground hover:text-foreground transition-colors">
              Safety Guide
            </a>
            <a href="#guides" className="text-muted-foreground hover:text-foreground transition-colors">
              Guides
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              Sign In
            </Button>
            <Button variant="default" size="sm">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;