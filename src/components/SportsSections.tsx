import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Zap, Dumbbell, Trophy, Target } from "lucide-react";
import sportsImage from "@/assets/sports-icons.jpg";

const sports = [
  {
    name: "Football Betting",
    icon: Zap,
    description: "NFL, College Football, and International leagues",
    topApps: ["BetMaster Pro", "SportsPick Elite", "WinningEdge"],
    specialFeatures: ["Live props", "Player stats", "Expert picks"]
  },
  {
    name: "Basketball Betting", 
    icon: Dumbbell,
    description: "NBA, NCAA, and international basketball",
    topApps: ["SportsPick Elite", "BetMaster Pro", "CourtKings"],
    specialFeatures: ["Live betting", "Quarter props", "Player analysis"]
  },
  {
    name: "Tennis Betting",
    icon: Target,
    description: "ATP, WTA, Grand Slams, and tournaments",
    topApps: ["WinningEdge", "AceBet", "TennisLine"],
    specialFeatures: ["Set betting", "Live odds", "Match insights"]
  },
  {
    name: "Multi-Sport",
    icon: Trophy,
    description: "All major sports and leagues covered",
    topApps: ["BetMaster Pro", "AllSports Pro", "Universal Bet"],
    specialFeatures: ["Cross-sport parlays", "Season futures", "Daily picks"]
  }
];

const SportsSections = () => {
  return (
    <section id="sports" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Best Apps by Sport
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Find specialized betting apps that excel in your favorite sports with the best odds, 
            features, and expert insights.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {sports.map((sport) => {
            const IconComponent = sport.icon;
            return (
              <Card key={sport.name} className="hover:shadow-lg transition-all duration-300 cursor-pointer group">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-r from-primary/10 to-success/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{sport.name}</CardTitle>
                  <p className="text-muted-foreground text-sm">{sport.description}</p>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Top Apps:</h4>
                    <div className="space-y-1">
                      {sport.topApps.map((app, index) => (
                        <div key={app} className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">#{index + 1} {app}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-sm mb-2">Features:</h4>
                    <div className="flex flex-wrap gap-1">
                      {sport.specialFeatures.map((feature) => (
                        <span key={feature} className="text-xs bg-muted px-2 py-1 rounded">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Button variant="outline" size="sm" className="w-full mt-4">
                    View {sport.name} Apps
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-primary/5 to-success/5 rounded-2xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-foreground">
                Not Sure Which Sport to Start With?
              </h3>
              <p className="text-lg text-muted-foreground">
                Our sports betting guide helps beginners understand the basics of each sport, 
                optimal betting strategies, and which apps offer the best experience for newcomers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="default" size="lg">
                  Beginner's Guide
                </Button>
                <Button variant="outline" size="lg">
                  Compare All Sports
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src={sportsImage} 
                alt="Various sports icons for betting apps"
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SportsSections;