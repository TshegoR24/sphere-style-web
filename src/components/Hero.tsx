import React, { useState } from 'react';
import { ArrowRight, Play, Star, Heart, ShoppingBag, Eye } from 'lucide-react';

const Hero = () => {
  const [activeProduct, setActiveProduct] = useState(0);

  const featuredProducts = [
    {
      id: 1,
      name: "Classic Collection",
      image: "/videos/Screenshot_20250721_193952.jpg",
      price: "$299",
      rating: 4.9
    },
    {
      id: 2,
      name: "Luxe Collection",
      image: "/videos/Screenshot_20250721_194008.jpg",
      price: "$399",
      rating: 4.8
    },
    {
      id: 3,
      name: "Signature Collection",
      image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "$499",
      rating: 5.0
    }
  ];

  return (
    <section id="home" className="relative min-h-screen bg-black overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-20"
          style={{ objectPosition: 'center' }}
        >
          <source src="/videos/VID_20250721_101715_999.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-1 h-1 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-2 h-2 bg-white/5 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-20 w-1 h-1 bg-white/10 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-10 w-1.5 h-1.5 bg-white/5 rounded-full animate-pulse delay-1500"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
          
          {/* Left Side - Content */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Brand Badge */}
            <div className="inline-flex items-center space-x-2 border border-white/20 text-white px-6 py-3 rounded-full">
              <Star size={16} className="text-white fill-current" />
              <span className="text-sm font-light tracking-wide">Premium Hair Collections</span>
            </div>
            
            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-playfair text-white leading-tight tracking-wide">
                BundledBy
                <span className="block font-medium">Sphere</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light max-w-lg mx-auto lg:mx-0">
                Luxury Hair for the Bold and Beautiful.
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="group border border-white text-white px-8 py-4 hover:bg-white hover:text-black transition-all duration-300 font-light text-sm tracking-wide uppercase flex items-center justify-center space-x-2 hover:scale-105">
                <ShoppingBag size={18} />
                <span>Shop Now</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border border-white/30 text-white/80 px-8 py-4 hover:border-white hover:text-white transition-all duration-300 font-light text-sm tracking-wide uppercase flex items-center justify-center space-x-2 hover:scale-105">
                <Play size={18} />
                <span>Watch Video</span>
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-2 sm:space-y-0 sm:space-x-6 pt-4">
              <div className="flex items-center space-x-2">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="text-white fill-current" />
                  ))}
                </div>
                <span className="text-sm text-gray-400 font-light">4.9/5</span>
              </div>
              <div className="hidden sm:block w-px h-4 bg-white/20"></div>
              <span className="text-sm text-gray-400 font-light">Free Shipping</span>
              <div className="hidden sm:block w-px h-4 bg-white/20"></div>
              <span className="text-sm text-gray-400 font-light">30-Day Returns</span>
            </div>
          </div>

          {/* Right Side - Product Showcase */}
          <div className="relative order-first lg:order-last">
            <div className="relative bg-white/95 backdrop-blur-sm rounded-2xl p-6 lg:p-8 shadow-2xl border border-white/20">
              {/* Main Product Image */}
              <div className="relative mb-6">
                <img 
                  src={featuredProducts[activeProduct].image} 
                  alt={featuredProducts[activeProduct].name}
                  className="w-full h-80 object-cover rounded-xl"
                />
                <div className="absolute top-4 right-4">
                  <button className="bg-black/90 backdrop-blur-sm p-2 rounded-full hover:bg-black transition-colors">
                    <Heart size={18} className="text-white" />
                  </button>
                </div>
                <div className="absolute bottom-4 left-4">
                  <div className="bg-black/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-light">
                    {featuredProducts[activeProduct].price}
                  </div>
                </div>
              </div>

              {/* Product Info */}
              <div className="space-y-3">
                <h3 className="text-xl font-medium text-black">{featuredProducts[activeProduct].name}</h3>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} className={i < Math.floor(featuredProducts[activeProduct].rating) ? "text-yellow-400 fill-current" : "text-gray-300"} />
                      ))}
                    </div>
                    <span className="text-sm text-black/60">({featuredProducts[activeProduct].rating})</span>
                  </div>
                  <button className="text-black/60 hover:text-black transition-colors">
                    <Eye size={18} />
                  </button>
                </div>
              </div>

              {/* Product Navigation */}
              <div className="flex justify-center space-x-2 mt-6">
                {featuredProducts.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveProduct(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === activeProduct ? 'bg-black' : 'bg-black/20'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -left-4 bg-white text-black p-3 rounded-full shadow-lg">
              <Star size={16} className="fill-current" />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-black text-white p-3 rounded-full shadow-lg">
              <ShoppingBag size={16} />
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-px h-16 bg-white/30 animate-pulse"></div>
        <div className="text-xs text-white/50 mt-2 font-light tracking-wide">Scroll to explore</div>
      </div>
    </section>
  );
};

export default Hero;
