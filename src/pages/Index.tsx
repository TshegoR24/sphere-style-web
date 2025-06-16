
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedBundles from "@/components/FeaturedBundles";
import About from "@/components/About";
import InstagramFeed from "@/components/InstagramFeed";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <FeaturedBundles />
      <About />
      <InstagramFeed />
      <Footer />
    </div>
  );
};

export default Index;
