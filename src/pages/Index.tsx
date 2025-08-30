import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedApps from "@/components/FeaturedApps";
import SportsSections from "@/components/SportsSections";
import ComparisonTable from "@/components/ComparisonTable";
import SafetyGuide from "@/components/SafetyGuide";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <FeaturedApps />
      <SportsSections />
      <ComparisonTable />
      <SafetyGuide />
      <Footer />
    </div>
  );
};

export default Index;
