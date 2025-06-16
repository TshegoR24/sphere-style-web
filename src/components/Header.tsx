
import { useState } from 'react';
import { Menu, X, ShoppingBag, Instagram } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-gray-900">
              Bundled by <span className="text-rose-600">Sphere</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
              Home
            </a>
            <a href="#bundles" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
              Bundles
            </a>
            <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
              About
            </a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
              Contact
            </a>
          </nav>

          {/* Desktop Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="https://www.instagram.com/bundledbysphere" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-rose-600 transition-colors"
            >
              <Instagram size={20} />
            </a>
            <button className="text-gray-600 hover:text-gray-900 transition-colors">
              <ShoppingBag size={20} />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-3">
              <a href="#home" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
                Home
              </a>
              <a href="#bundles" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
                Bundles
              </a>
              <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
                About
              </a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
                Contact
              </a>
              <div className="flex items-center space-x-4 pt-3">
                <a 
                  href="https://www.instagram.com/bundledbysphere" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-rose-600 transition-colors"
                >
                  <Instagram size={20} />
                </a>
                <button className="text-gray-600 hover:text-gray-900 transition-colors">
                  <ShoppingBag size={20} />
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
