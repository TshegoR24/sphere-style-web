
import React from 'react';
import { Instagram, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <h3 className="text-2xl font-light tracking-wide">
              Bundled by <span className="font-medium">Sphere</span>
            </h3>
            <p className="text-white/70 leading-relaxed font-light">
              Curated hair collections for the modern woman. Discover pieces that enhance your natural beauty and elevate your style.
            </p>
            <div className="flex space-x-6">
              <a 
                href="https://www.instagram.com/bundledbysphere?igsh=aWZ3cHdzeDY4Zzhv" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="mailto:hello@bundledbysphere.com"
                className="text-white/70 hover:text-white transition-colors"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-sm font-light tracking-wide uppercase text-white/90">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-white/70 hover:text-white transition-colors font-light text-sm">Home</a></li>
              <li><a href="#collections" className="text-white/70 hover:text-white transition-colors font-light text-sm">Collections</a></li>
              <li><a href="#about" className="text-white/70 hover:text-white transition-colors font-light text-sm">About</a></li>
              <li><a href="#contact" className="text-white/70 hover:text-white transition-colors font-light text-sm">Contact</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-6">
            <h4 className="text-sm font-light tracking-wide uppercase text-white/90">Collections</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/70 hover:text-white transition-colors font-light text-sm">Classic Collection</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors font-light text-sm">Luxe Collection</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors font-light text-sm">Signature Collection</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors font-light text-sm">Limited Edition</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h4 className="text-sm font-light tracking-wide uppercase text-white/90">Get in Touch</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-white/70" />
                <span className="text-white/70 font-light text-sm">hello@bundledbysphere.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-white/70" />
                <span className="text-white/70 font-light text-sm">Curated with precision, worldwide</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-16 pt-8 text-center">
          <p className="text-white/60 font-light text-sm">
            © 2024 Bundled by Sphere. All rights reserved. | Crafting beauty with precision.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
