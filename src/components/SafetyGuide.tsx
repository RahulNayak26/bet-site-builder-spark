import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Lock, FileText, Users, AlertTriangle, CheckCircle } from "lucide-react";

const safetyFeatures = [
  {
    icon: Shield,
    title: "Licensing & Regulation",
    description: "Look for apps licensed by reputable authorities like UK Gambling Commission, Malta Gaming Authority, or Curacao eGaming.",
    importance: "Critical"
  },
  {
    icon: Lock,
    title: "Data Security",
    description: "Ensure the app uses SSL encryption, secure payment methods, and has a clear privacy policy.",
    importance: "High"
  },
  {
    icon: FileText,
    title: "Terms & Conditions",
    description: "Read the fine print on bonuses, withdrawals, and account restrictions before signing up.",
    importance: "High"
  },
  {
    icon: Users,
    title: "Customer Reviews",
    description: "Check independent review sites and user feedback to gauge real user experiences.",
    importance: "Medium"
  }
];

const redFlags = [
  "No clear licensing information",
  "Unrealistic bonus offers",
  "Poor customer support response",
  "Complex withdrawal requirements",
  "No responsible gambling tools"
];

const greenFlags = [
  "Clear licensing from reputable authorities",
  "Transparent terms and conditions", 
  "Quick customer support response",
  "Easy withdrawal process",
  "Responsible gambling features"
];

const SafetyGuide = () => {
  return (
    <section id="safety" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Safety & Security Guide
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Learn how to identify trustworthy betting apps and protect yourself from scams with our comprehensive safety guide.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-xl">
                <Shield className="w-6 h-6 text-primary" />
                <span>Key Safety Features</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {safetyFeatures.map((feature) => {
                const IconComponent = feature.icon;
                return (
                  <div key={feature.title} className="flex space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <h3 className="font-semibold">{feature.title}</h3>
                        <span className={`text-xs px-2 py-1 rounded ${
                          feature.importance === 'Critical' ? 'bg-destructive/10 text-destructive' :
                          feature.importance === 'High' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-muted text-muted-foreground'
                        }`}>
                          {feature.importance}
                        </span>
                      </div>
                      <p className="text-muted-foreground text-sm">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </CardContent>
          </Card>

          <div className="space-y-8">
            <Card className="shadow-lg border-destructive/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-xl text-destructive">
                  <AlertTriangle className="w-6 h-6" />
                  <span>Red Flags to Avoid</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {redFlags.map((flag) => (
                    <li key={flag} className="flex items-start space-x-3">
                      <AlertTriangle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{flag}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-success/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-xl text-success">
                  <CheckCircle className="w-6 h-6" />
                  <span>Green Flags to Look For</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {greenFlags.map((flag) => (
                    <li key={flag} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{flag}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="bg-gradient-to-r from-primary/5 to-success/5 rounded-2xl p-8 lg:p-12 text-center">
          <h3 className="text-3xl font-bold text-foreground mb-6">
            Need Help Choosing a Safe Betting App?
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our experts have thoroughly vetted each app in our database for safety, security, and reliability. 
            Get personalized recommendations based on your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg">
              Get Expert Recommendation
            </Button>
            <Button variant="outline" size="lg">
              Download Safety Checklist
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SafetyGuide;