import React from 'react';
import { Shield, Truck, Clock, Heart, Award, Users } from 'lucide-react';

const Features = () => {
  const features = [
    {
      id: 1,
      icon: Shield,
      title: "Premium Quality",
      description: "Handpicked hair bundles sourced from the finest suppliers worldwide, ensuring unmatched quality and durability."
    },
    {
      id: 2,
      icon: Truck,
      title: "Fast Shipping",
      description: "Free express shipping on all orders. Your premium hair collection will arrive at your doorstep within 2-3 business days."
    },
    {
      id: 3,
      icon: Clock,
      title: "Long Lasting",
      description: "Our hair bundles are treated with premium care products and can last up to 2 years with proper maintenance."
    },
    {
      id: 4,
      icon: Heart,
      title: "Ethically Sourced",
      description: "We work directly with trusted suppliers who follow ethical practices and ensure fair treatment of all involved."
    },
    {
      id: 5,
      icon: Award,
      title: "Expert Support",
      description: "Our hair experts are available 24/7 to help you choose the perfect collection and provide styling advice."
    },
    {
      id: 6,
      icon: Users,
      title: "Community",
      description: "Join our community of hair enthusiasts and get access to exclusive styling tips and new collection previews."
    }
  ];

  return (
    <section className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-wide">
            Why Choose
            <span className="block font-medium">Bundled by Sphere</span>
          </h2>
          <p className="text-lg text-white/70 max-w-3xl mx-auto font-light leading-relaxed">
            We're committed to providing you with the highest quality hair collections and exceptional service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.id} className="group p-8 border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-lg bg-white/5 backdrop-blur-sm rounded-xl">
              <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-black transition-colors duration-300">
                <feature.icon size={24} />
              </div>
              <h3 className="text-xl font-medium mb-4">{feature.title}</h3>
              <p className="text-white/70 font-light leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
            <h3 className="text-2xl font-medium mb-4">Ready to Transform Your Look?</h3>
            <p className="text-white/70 mb-6 font-light">Join thousands of satisfied customers who trust Bundled by Sphere for their hair needs.</p>
            <button className="bg-white text-black px-8 py-3 hover:bg-white/90 transition-all duration-300 font-light text-sm tracking-wide uppercase">
              Start Shopping
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features; 