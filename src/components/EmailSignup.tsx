import React, { useState } from 'react';
import { Mail, ArrowRight } from 'lucide-react';

const EmailSignup = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail('');
      // Here you would typically send the email to your backend
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Icon */}
          <div className="flex justify-center">
            <div className="bg-white/10 w-20 h-20 rounded-full flex items-center justify-center">
              <Mail size={32} className="text-white" />
            </div>
          </div>

          {/* Heading */}
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-playfair text-white tracking-wide">
              Stay Bundled with Us
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed font-light max-w-2xl mx-auto">
              Be the first to know about new collections, exclusive offers, and styling tips.
              Join our community of hair enthusiasts.
            </p>
          </div>

          {/* Email Form */}
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 bg-white/10 border border-white/20 text-white placeholder-gray-400 rounded-lg focus:outline-none focus:border-white focus:bg-white/20 transition-all duration-300 font-light"
                required
              />
              <button
                type="submit"
                className="group bg-white text-black px-8 py-4 hover:bg-white/90 transition-all duration-300 font-light text-sm tracking-wide uppercase flex items-center justify-center space-x-2 hover:scale-105 rounded-lg"
              >
                <span>Subscribe</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </form>

          {/* Success Message */}
          {isSubmitted && (
            <div className="animate-fade-in">
              <p className="text-green-400 font-light text-sm">
                Thank you! You've been successfully subscribed to our newsletter.
              </p>
            </div>
          )}

          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 pt-6">
            <span className="text-sm text-gray-400 font-light">No spam, ever</span>
            <div className="hidden sm:block w-px h-4 bg-white/20"></div>
            <span className="text-sm text-gray-400 font-light">Unsubscribe anytime</span>
            <div className="hidden sm:block w-px h-4 bg-white/20"></div>
            <span className="text-sm text-gray-400 font-light">Privacy protected</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmailSignup; 