
import { Instagram, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">
              Bundled by <span className="text-rose-400">Sphere</span>
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Thoughtfully curated bundles for modern living. Discover products that elevate your everyday moments.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/bundledbysphere" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-rose-400 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="mailto:hello@bundledbysphere.com"
                className="text-gray-400 hover:text-rose-400 transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#bundles" className="text-gray-400 hover:text-white transition-colors">Bundles</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Categories</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Morning Rituals</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Workspace</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Self-Care</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Home Essentials</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Get in Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-rose-400" />
                <span className="text-gray-400">hello@bundledbysphere.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-rose-400" />
                <span className="text-gray-400">Curated with love, worldwide</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Bundled by Sphere. All rights reserved. | Curating moments that matter.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
