import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StreamsSection from "@/components/StreamsSection";
import BackupSection from "@/components/BackupSection";
import ShopSection from "@/components/ShopSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <StreamsSection />
        <BackupSection />
        <ShopSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
