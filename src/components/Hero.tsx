import { Button } from "@/components/ui/button";
import { Star, Shield, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-betting-apps.jpg";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary/5 via-background to-success/5 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Find the Best
                <span className="block bg-gradient-to-r from-primary to-success bg-clip-text text-transparent">
                  Betting Apps
                </span>
                of 2025
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Comprehensive reviews, safety ratings, and expert comparisons to help you choose 
                the most trusted and profitable betting platforms.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="text-lg px-8 py-6">
                Compare Top Apps
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                Safety Guide
              </Button>
            </div>

            <div className="flex items-center space-x-8 pt-4">
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-success" />
                <span className="text-sm text-muted-foreground">Licensed & Regulated</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-5 h-5 text-yellow-500" />
                <span className="text-sm text-muted-foreground">Expert Reviews</span>
              </div>
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-5 h-5 text-success" />
                <span className="text-sm text-muted-foreground">Updated Daily</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={heroImage} 
                alt="Professional betting apps comparison interface"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-r from-primary to-success rounded-full opacity-20 blur-2xl"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-r from-success to-primary rounded-full opacity-20 blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;