import React, { useState } from 'react';
import { Play, Pause, Volume2, VolumeX, Star, Award, Users, Clock } from 'lucide-react';

const About = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isVideoMuted, setIsVideoMuted] = useState(true);

  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6 sm:space-y-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-playfair text-black tracking-wide">
              Our bundles are crafted for
              <span className="block font-medium">confidence, elegance, and expression.</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-light">
              At BundledBySphere, we believe in the art of hair perfection. Our team meticulously sources and curates 
              each hair bundle to ensure you receive only the finest quality that feels natural, looks stunning, 
              and stands the test of time.
            </p>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-light">
              From Brazilian waves to Peruvian straight, Malaysian curly to Indian natural textures - 
              each collection tells a story of heritage, quality, and timeless beauty. We work directly with 
              trusted suppliers to bring you authentic, ethically sourced hair that enhances your natural elegance.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 py-6">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Award size={20} className="text-black/60 sm:w-6 sm:h-6" />
                </div>
                <div className="text-xl sm:text-2xl font-medium text-black">100+</div>
                <div className="text-xs sm:text-sm text-gray-500 font-light">Premium Collections</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users size={20} className="text-black/60 sm:w-6 sm:h-6" />
                </div>
                <div className="text-xl sm:text-2xl font-medium text-black">500+</div>
                <div className="text-xs sm:text-sm text-gray-500 font-light">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Star size={20} className="text-black/60 sm:w-6 sm:h-6" />
                </div>
                <div className="text-xl sm:text-2xl font-medium text-black">4.9</div>
                <div className="text-xs sm:text-sm text-gray-500 font-light">Star Rating</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Clock size={20} className="text-black/60 sm:w-6 sm:h-6" />
                </div>
                <div className="text-xl sm:text-2xl font-medium text-black">5+</div>
                <div className="text-xs sm:text-sm text-gray-500 font-light">Years Experience</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <button className="bg-black text-white px-6 sm:px-8 py-3 sm:py-4 hover:bg-black/90 transition-all duration-300 font-light text-xs sm:text-sm tracking-wide uppercase">
                Our Story
              </button>
              <button className="border border-black text-black px-6 sm:px-8 py-3 sm:py-4 hover:bg-black hover:text-white transition-all duration-300 font-light text-xs sm:text-sm tracking-wide uppercase">
                Quality Promise
              </button>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-[4/5] bg-gray-50 overflow-hidden rounded-xl sm:rounded-2xl shadow-lg">
              <video
                ref={(el) => {
                  if (el) {
                    el.muted = isVideoMuted;
                    if (isVideoPlaying) {
                      el.play();
                    } else {
                      el.pause();
                    }
                  }
                }}
                className="w-full h-full object-cover"
                loop
                playsInline
              >
                <source src="/videos/VID_20250721_101800_646.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              {/* Video Overlay */}
              <div className="absolute inset-0 bg-black/10"></div>
              
              {/* Video Controls */}
              <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setIsVideoPlaying(!isVideoPlaying)}
                    className="bg-white/90 backdrop-blur-sm p-1.5 sm:p-2 rounded-full hover:bg-white transition-colors"
                  >
                    {isVideoPlaying ? <Pause size={14} className="text-black sm:w-4 sm:h-4" /> : <Play size={14} className="text-black sm:w-4 sm:h-4" />}
                  </button>
                  <button
                    onClick={() => setIsVideoMuted(!isVideoMuted)}
                    className="bg-white/90 backdrop-blur-sm p-1.5 sm:p-2 rounded-full hover:bg-white transition-colors"
                  >
                    {isVideoMuted ? <VolumeX size={14} className="text-black sm:w-4 sm:h-4" /> : <Volume2 size={14} className="text-black sm:w-4 sm:h-4" />}
                  </button>
                </div>
              </div>

              {/* Play Button Overlay */}
              {!isVideoPlaying && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    onClick={() => setIsVideoPlaying(true)}
                    className="bg-white/90 backdrop-blur-sm p-3 sm:p-4 rounded-full hover:bg-white transition-colors hover:scale-110"
                  >
                    <Play size={20} className="text-black ml-0.5 sm:ml-1 sm:w-6 sm:h-6" />
                  </button>
                </div>
              )}
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -bottom-4 sm:-bottom-8 -right-4 sm:-right-8 w-20 h-20 sm:w-32 sm:h-32 bg-black flex items-center justify-center rounded-full shadow-lg">
              <span className="text-white font-light text-lg sm:text-2xl tracking-wide">100+</span>
            </div>
            <div className="absolute -top-4 sm:-top-8 -left-4 sm:-left-8 bg-white border border-gray-200 p-3 sm:p-6 shadow-lg rounded-lg">
              <p className="text-xs sm:text-sm font-light text-gray-600 tracking-wide uppercase">Premium Collections</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
