
import React from 'react';
import { Instagram, Mail, MapPin, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {/* Brand */}
          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-xl sm:text-2xl font-playfair tracking-wide">
              BundledBy<span className="font-medium">Sphere</span>
            </h3>
            <p className="text-gray-400 leading-relaxed font-light text-sm sm:text-base">
              Curated hair collections for the modern woman. Discover pieces that enhance your natural beauty and elevate your style.
            </p>
            <div className="flex space-x-4 sm:space-x-6">
              <a 
                href="https://www.instagram.com/bundledbysphere?igsh=aWZ3cHdzeDY4Zzhv" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram size={16} className="sm:w-[18px] sm:h-[18px]" />
              </a>
              <a 
                href="https://facebook.com/bundledbysphere"
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook size={16} className="sm:w-[18px] sm:h-[18px]" />
              </a>
              <a 
                href="https://twitter.com/bundledbysphere"
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter size={16} className="sm:w-[18px] sm:h-[18px]" />
              </a>
              <a 
                href="mailto:hello@bundledbysphere.com"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Mail size={16} className="sm:w-[18px] sm:h-[18px]" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 sm:space-y-6">
            <h4 className="text-xs sm:text-sm font-light tracking-wide uppercase text-white/90">Quick Links</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors font-light text-xs sm:text-sm">Home</a></li>
              <li><a href="#collections" className="text-gray-400 hover:text-white transition-colors font-light text-xs sm:text-sm">Collections</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors font-light text-xs sm:text-sm">About</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors font-light text-xs sm:text-sm">Contact</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-4 sm:space-y-6">
            <h4 className="text-xs sm:text-sm font-light tracking-wide uppercase text-white/90">Collections</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors font-light text-xs sm:text-sm">Classic Collection</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors font-light text-xs sm:text-sm">Luxe Collection</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors font-light text-xs sm:text-sm">Signature Collection</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors font-light text-xs sm:text-sm">Limited Edition</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4 sm:space-y-6">
            <h4 className="text-xs sm:text-sm font-light tracking-wide uppercase text-white/90">Get in Touch</h4>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center space-x-3">
                <Mail size={14} className="text-gray-400 sm:w-4 sm:h-4" />
                <span className="text-gray-400 font-light text-xs sm:text-sm">hello@bundledbysphere.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={14} className="text-gray-400 sm:w-4 sm:h-4" />
                <span className="text-gray-400 font-light text-xs sm:text-sm">Curated with precision, worldwide</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 sm:mt-16 pt-6 sm:pt-8 text-center">
          <p className="text-gray-500 font-light text-xs sm:text-sm">
            © 2024 BundledBySphere. All rights reserved. | Crafting beauty with precision.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
