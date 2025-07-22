
import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag, Instagram, Search, Heart, User } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount] = useState(3); // Mock cart count
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black text-white border-b border-white/10' 
        : 'bg-transparent text-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-playfair tracking-wide">
              BundledBy<span className="font-medium">Sphere</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-12">
            <a href="#home" className="text-white/80 hover:text-white transition-colors font-light text-sm tracking-wide uppercase">
              Home
            </a>
            <a href="#collections" className="text-white/80 hover:text-white transition-colors font-light text-sm tracking-wide uppercase">
              Shop
            </a>
            <a href="#about" className="text-white/80 hover:text-white transition-colors font-light text-sm tracking-wide uppercase">
              About
            </a>
            <a href="#contact" className="text-white/80 hover:text-white transition-colors font-light text-sm tracking-wide uppercase">
              Contact
            </a>
          </nav>

          {/* Desktop Icons */}
          <div className="hidden md:flex items-center space-x-6">
            <button className="text-white/80 hover:text-white transition-colors relative">
              <Search size={18} />
            </button>
            <a 
              href="https://www.instagram.com/bundledbysphere?igsh=aWZ3cHdzeDY4Zzhv" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white transition-colors"
            >
              <Instagram size={18} />
            </a>
            <button className="text-white/80 hover:text-white transition-colors">
              <Heart size={18} />
            </button>
            <button className="text-white/80 hover:text-white transition-colors">
              <User size={18} />
            </button>
            <button className="text-white/80 hover:text-white transition-colors relative">
              <ShoppingBag size={18} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-white text-black text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
                  {cartCount}
                </span>
              )}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white/80 hover:text-white transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-6 border-t border-white/10 bg-black">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-white/80 hover:text-white transition-colors font-light text-sm tracking-wide uppercase">
                Home
              </a>
              <a href="#collections" className="text-white/80 hover:text-white transition-colors font-light text-sm tracking-wide uppercase">
                Shop
              </a>
              <a href="#about" className="text-white/80 hover:text-white transition-colors font-light text-sm tracking-wide uppercase">
                About
              </a>
              <a href="#contact" className="text-white/80 hover:text-white transition-colors font-light text-sm tracking-wide uppercase">
                Contact
              </a>
              <div className="flex items-center space-x-6 pt-4">
                <button className="text-white/80 hover:text-white transition-colors">
                  <Search size={18} />
                </button>
                <a 
                  href="https://www.instagram.com/bundledbysphere?igsh=aWZ3cHdzeDY4Zzhv" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  <Instagram size={18} />
                </a>
                <button className="text-white/80 hover:text-white transition-colors">
                  <Heart size={18} />
                </button>
                <button className="text-white/80 hover:text-white transition-colors">
                  <User size={18} />
                </button>
                <button className="text-white/80 hover:text-white transition-colors relative">
                  <ShoppingBag size={18} />
                  {cartCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-white text-black text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
                      {cartCount}
                    </span>
                  )}
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
