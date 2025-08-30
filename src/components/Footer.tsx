import { Star, Shield, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-primary to-success rounded-lg flex items-center justify-center">
                  <Star className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-foreground">BetReviews</span>
              </div>
              <p className="text-muted-foreground">
                Your trusted source for unbiased betting app reviews, comparisons, and safety guides. 
                We help you make informed decisions in the world of sports betting.
              </p>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Shield className="w-4 h-4 text-success" />
                <span>Independently verified reviews</span>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li><a href="#apps" className="hover:text-foreground transition-colors">Top Betting Apps</a></li>
                <li><a href="#sports" className="hover:text-foreground transition-colors">Apps by Sport</a></li>
                <li><a href="#safety" className="hover:text-foreground transition-colors">Safety Guide</a></li>
                <li><a href="#guides" className="hover:text-foreground transition-colors">Beginner's Guide</a></li>
                <li><a href="#comparison" className="hover:text-foreground transition-colors">App Comparison</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-4">Sports</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Football Betting</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Basketball Betting</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Tennis Betting</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Soccer Betting</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">All Sports</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-4">Contact</h3>
              <div className="space-y-3 text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">info@betreviews.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">1-800-BET-HELP</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">London, UK</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © 2025 BetReviews. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-foreground transition-colors">Responsible Gambling</a>
            </div>
          </div>

          <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <p className="text-sm text-yellow-800 text-center">
              <strong>Disclaimer:</strong> This site is for informational and educational purposes only. 
              Please gamble responsibly and only bet what you can afford to lose. If you have a gambling problem, 
              seek help from professional organizations.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;