
import React from 'react';
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedBundles from "@/components/FeaturedBundles";
import Features from "@/components/Features";
import VideoSection from "@/components/VideoSection";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import InstagramFeed from "@/components/InstagramFeed";
import EmailSignup from "@/components/EmailSignup";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <FeaturedBundles />
      <Features />
      <VideoSection />
      <About />
      <Testimonials />
      <InstagramFeed />
      <EmailSignup />
      <Footer />
    </div>
  );
};

export default Index;
