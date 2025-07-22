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
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          data-aos="fade-up"
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-playfair text-black mb-4 sm:mb-6 tracking-wide">
            Why Choose
            <span className="block font-medium">BundledBySphere</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
            We're committed to providing you with the highest quality hair collections and exceptional service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.id} 
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="group p-6 sm:p-8 border border-gray-200 hover:border-black transition-all duration-300 hover:shadow-lg bg-white rounded-xl"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black/5 rounded-lg flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-black group-hover:text-white transition-colors duration-300">
                <feature.icon size={20} className="sm:w-6 sm:h-6" />
              </div>
              <h3 className="text-lg sm:text-xl font-medium mb-3 sm:mb-4 text-black">{feature.title}</h3>
              <p className="text-gray-600 font-light leading-relaxed text-sm sm:text-base">{feature.description}</p>
            </div>
          ))}
        </div>

        <div 
          data-aos="fade-up"
          data-aos-delay="600"
          className="mt-12 sm:mt-16 text-center"
        >
          <div className="bg-black text-white p-6 sm:p-8 rounded-xl border border-black">
            <h3 className="text-xl sm:text-2xl font-medium mb-3 sm:mb-4">Ready to Transform Your Look?</h3>
            <p className="text-gray-300 mb-4 sm:mb-6 font-light text-sm sm:text-base">Join thousands of satisfied customers who trust BundledBySphere for their hair needs.</p>
            <button className="bg-white text-black px-6 sm:px-8 py-3 hover:bg-white/90 transition-all duration-300 font-light text-xs sm:text-sm tracking-wide uppercase">
              Start Shopping
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features; 