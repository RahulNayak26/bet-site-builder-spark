import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Shield, Smartphone, DollarSign } from "lucide-react";

const featuredApps = [
  {
    name: "BetMaster Pro",
    rating: 4.8,
    reviews: 15420,
    bonus: "$1000 Welcome Bonus",
    highlights: ["Live Streaming", "Cash Out", "24/7 Support"],
    safety: "A+",
    minDeposit: "$10",
    featured: true
  },
  {
    name: "SportsPick Elite",
    rating: 4.7,
    reviews: 12890,
    bonus: "$500 + 100 Free Bets",
    highlights: ["Best Odds", "Quick Withdrawals", "Mobile App"],
    safety: "A",
    minDeposit: "$20",
    featured: false
  },
  {
    name: "WinningEdge",
    rating: 4.6,
    reviews: 9876,
    bonus: "$750 First Bet",
    highlights: ["Expert Tips", "Live Chat", "Multi-Sport"],
    safety: "A",
    minDeposit: "$15",
    featured: false
  }
];

const FeaturedApps = () => {
  return (
    <section id="apps" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Top Rated Betting Apps
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our expert team reviews and ranks the best betting apps based on safety, 
            odds, user experience, and customer satisfaction.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {featuredApps.map((app, index) => (
            <Card key={app.name} className={`relative ${app.featured ? 'ring-2 ring-primary shadow-xl' : 'shadow-lg'} hover:shadow-xl transition-all duration-300`}>
              {app.featured && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-primary to-success text-white">
                  #1 RECOMMENDED
                </Badge>
              )}
              
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl">{app.name}</CardTitle>
                <div className="flex items-center justify-center space-x-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-4 h-4 ${i < Math.floor(app.rating) ? 'text-yellow-500 fill-current' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                  <span className="font-semibold">{app.rating}</span>
                  <span className="text-muted-foreground">({app.reviews.toLocaleString()})</span>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-success mb-2">{app.bonus}</div>
                  <Badge variant="outline" className="mb-4">New Customer Offer</Badge>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Shield className="w-4 h-4 text-success" />
                      <span className="text-sm">Safety Rating</span>
                    </div>
                    <Badge variant={app.safety === 'A+' ? 'default' : 'secondary'}>{app.safety}</Badge>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <DollarSign className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm">Min Deposit</span>
                    </div>
                    <span className="font-medium">{app.minDeposit}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold text-sm">Key Features:</h4>
                  <div className="flex flex-wrap gap-2">
                    {app.highlights.map((feature) => (
                      <Badge key={feature} variant="outline" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col space-y-2 pt-4">
                  <Button 
                    variant={app.featured ? "hero" : "default"} 
                    className="w-full"
                  >
                    Get Bonus Now
                  </Button>
                  <Button variant="outline" size="sm" className="w-full">
                    Read Full Review
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All 50+ Apps
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedApps;