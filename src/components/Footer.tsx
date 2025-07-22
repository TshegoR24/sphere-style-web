
import React from 'react';
import { Instagram, Mail, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-light tracking-wide">
              Bundled by <span className="font-medium">Sphere</span>
            </h3>
            <p className="text-white/70 leading-relaxed font-light">
              Curated hair collections for the modern woman.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-medium">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-white/70 hover:text-white transition-colors">Home</a></li>
              <li><a href="#collections" className="text-white/70 hover:text-white transition-colors">Collections</a></li>
              <li><a href="#about" className="text-white/70 hover:text-white transition-colors">About</a></li>
              <li><a href="#contact" className="text-white/70 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="text-lg font-medium">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Shipping Info</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Returns</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Size Guide</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-medium">Contact</h4>
            <div className="space-y-2">
              <a href="mailto:hello@bundledbysphere.com" className="text-white/70 hover:text-white transition-colors block">
                hello@bundledbysphere.com
              </a>
              <p className="text-white/70">Mon-Fri: 9AM-6PM EST</p>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4 pt-4">
              <a href="https://www.instagram.com/bundledbysphere?igsh=aWZ3cHdzeDY4Zzhv" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">
                <Instagram size={18} />
              </a>
              <a href="https://facebook.com/bundledbysphere" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">
                <Facebook size={18} />
              </a>
              <a href="https://twitter.com/bundledbysphere" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">
                <Twitter size={18} />
              </a>
              <a href="mailto:hello@bundledbysphere.com" className="text-white/70 hover:text-white transition-colors">
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 font-light text-sm">
              © 2024 Bundled by Sphere. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-white/60 hover:text-white transition-colors text-sm">Privacy Policy</a>
              <a href="#" className="text-white/60 hover:text-white transition-colors text-sm">Terms of Service</a>
              <a href="#" className="text-white/60 hover:text-white transition-colors text-sm">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
