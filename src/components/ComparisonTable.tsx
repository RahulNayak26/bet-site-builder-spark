import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, X, Star } from "lucide-react";

const comparisonData = [
  {
    app: "BetMaster Pro",
    rating: 4.8,
    bonus: "$1000",
    minDeposit: "$10",
    liveStreaming: true,
    cashOut: true,
    mobileApp: true,
    support: "24/7",
    withdrawal: "24h",
    licensing: "UK, Malta"
  },
  {
    app: "SportsPick Elite", 
    rating: 4.7,
    bonus: "$500",
    minDeposit: "$20",
    liveStreaming: true,
    cashOut: true,
    mobileApp: true,
    support: "24/7",
    withdrawal: "12h",
    licensing: "Curacao"
  },
  {
    app: "WinningEdge",
    rating: 4.6,
    bonus: "$750",
    minDeposit: "$15",
    liveStreaming: false,
    cashOut: true,
    mobileApp: true,
    support: "16h",
    withdrawal: "48h",
    licensing: "Malta"
  }
];

const ComparisonTable = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Side-by-Side Comparison
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Compare the top betting apps across all important features to make the best choice for your needs.
          </p>
        </div>

        <Card className="overflow-hidden shadow-xl">
          <CardHeader className="bg-gradient-to-r from-primary/5 to-success/5">
            <CardTitle className="text-2xl text-center">Feature Comparison</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted/50">
                  <tr>
                    <th className="text-left p-4 font-semibold">Features</th>
                    {comparisonData.map((app) => (
                      <th key={app.app} className="text-center p-4 min-w-[200px]">
                        <div className="space-y-2">
                          <div className="font-bold text-lg">{app.app}</div>
                          <div className="flex items-center justify-center space-x-1">
                            <Star className="w-4 h-4 text-yellow-500 fill-current" />
                            <span className="font-medium">{app.rating}</span>
                          </div>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-4 font-medium">Welcome Bonus</td>
                    {comparisonData.map((app) => (
                      <td key={`${app.app}-bonus`} className="text-center p-4">
                        <Badge variant="outline" className="font-bold text-success">
                          {app.bonus}
                        </Badge>
                      </td>
                    ))}
                  </tr>
                  <tr className="border-b bg-muted/20">
                    <td className="p-4 font-medium">Min Deposit</td>
                    {comparisonData.map((app) => (
                      <td key={`${app.app}-deposit`} className="text-center p-4 font-medium">
                        {app.minDeposit}
                      </td>
                    ))}
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-medium">Live Streaming</td>
                    {comparisonData.map((app) => (
                      <td key={`${app.app}-streaming`} className="text-center p-4">
                        {app.liveStreaming ? (
                          <Check className="w-5 h-5 text-success mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-destructive mx-auto" />
                        )}
                      </td>
                    ))}
                  </tr>
                  <tr className="border-b bg-muted/20">
                    <td className="p-4 font-medium">Cash Out</td>
                    {comparisonData.map((app) => (
                      <td key={`${app.app}-cashout`} className="text-center p-4">
                        {app.cashOut ? (
                          <Check className="w-5 h-5 text-success mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-destructive mx-auto" />
                        )}
                      </td>
                    ))}
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-medium">Mobile App</td>
                    {comparisonData.map((app) => (
                      <td key={`${app.app}-mobile`} className="text-center p-4">
                        <Check className="w-5 h-5 text-success mx-auto" />
                      </td>
                    ))}
                  </tr>
                  <tr className="border-b bg-muted/20">
                    <td className="p-4 font-medium">Customer Support</td>
                    {comparisonData.map((app) => (
                      <td key={`${app.app}-support`} className="text-center p-4 font-medium">
                        {app.support}
                      </td>
                    ))}
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-medium">Withdrawal Time</td>
                    {comparisonData.map((app) => (
                      <td key={`${app.app}-withdrawal`} className="text-center p-4 font-medium">
                        {app.withdrawal}
                      </td>
                    ))}
                  </tr>
                  <tr className="border-b bg-muted/20">
                    <td className="p-4 font-medium">Licensing</td>
                    {comparisonData.map((app) => (
                      <td key={`${app.app}-licensing`} className="text-center p-4">
                        <Badge variant="outline" className="text-xs">
                          {app.licensing}
                        </Badge>
                      </td>
                    ))}
                  </tr>
                </tbody>
                <tfoot className="bg-gradient-to-r from-primary/5 to-success/5">
                  <tr>
                    <td className="p-4 font-bold">Get Started</td>
                    {comparisonData.map((app) => (
                      <td key={`${app.app}-cta`} className="text-center p-4">
                        <Button 
                          variant={app.app === "BetMaster Pro" ? "hero" : "default"}
                          size="sm"
                          className="w-full"
                        >
                          Visit {app.app}
                        </Button>
                      </td>
                    ))}
                  </tr>
                </tfoot>
              </table>
            </div>
          </CardContent>
        </Card>

        <div className="text-center mt-8">
          <Button variant="outline" size="lg">
            View Detailed Comparison
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;