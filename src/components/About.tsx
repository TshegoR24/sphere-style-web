import React, { useState } from 'react';
import { Play, Pause, Volume2, VolumeX, Star, Award, Users, Clock } from 'lucide-react';

const About = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isVideoMuted, setIsVideoMuted] = useState(true);

  return (
    <section id="about" className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-light tracking-wide">
              Crafted with
              <span className="block font-medium">Precision</span>
            </h2>
            <p className="text-lg text-white/70 leading-relaxed font-light">
              At Bundled by Sphere, we believe in the art of hair perfection. Our team meticulously sources and curates 
              each hair bundle to ensure you receive only the finest quality that feels natural, looks stunning, 
              and stands the test of time.
            </p>
            <p className="text-lg text-white/70 leading-relaxed font-light">
              From Brazilian waves to Peruvian straight, Malaysian curly to Indian natural textures - 
              each collection tells a story of heritage, quality, and timeless beauty. We work directly with 
              trusted suppliers to bring you authentic, ethically sourced hair that enhances your natural elegance.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 py-6">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Award size={24} className="text-white/60" />
                </div>
                <div className="text-2xl font-medium">100+</div>
                <div className="text-sm text-white/50 font-light">Premium Collections</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users size={24} className="text-white/60" />
                </div>
                <div className="text-2xl font-medium">500+</div>
                <div className="text-sm text-white/50 font-light">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Star size={24} className="text-white/60" />
                </div>
                <div className="text-2xl font-medium">4.9</div>
                <div className="text-sm text-white/50 font-light">Star Rating</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Clock size={24} className="text-white/60" />
                </div>
                <div className="text-2xl font-medium">5+</div>
                <div className="text-sm text-white/50 font-light">Years Experience</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <button className="bg-white text-black px-8 py-4 hover:bg-white/90 transition-all duration-300 font-light text-sm tracking-wide uppercase">
                Our Story
              </button>
              <button className="border border-white text-white px-8 py-4 hover:bg-white hover:text-black transition-all duration-300 font-light text-sm tracking-wide uppercase">
                Quality Promise
              </button>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-[4/5] bg-white overflow-hidden rounded-2xl shadow-2xl">
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
              <div className="absolute inset-0 bg-black/20"></div>
              
              {/* Video Controls */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setIsVideoPlaying(!isVideoPlaying)}
                    className="bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors"
                  >
                    {isVideoPlaying ? <Pause size={16} className="text-black" /> : <Play size={16} className="text-black" />}
                  </button>
                  <button
                    onClick={() => setIsVideoMuted(!isVideoMuted)}
                    className="bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors"
                  >
                    {isVideoMuted ? <VolumeX size={16} className="text-black" /> : <Volume2 size={16} className="text-black" />}
                  </button>
                </div>
              </div>

              {/* Play Button Overlay */}
              {!isVideoPlaying && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    onClick={() => setIsVideoPlaying(true)}
                    className="bg-white/90 backdrop-blur-sm p-4 rounded-full hover:bg-white transition-colors hover:scale-110"
                  >
                    <Play size={24} className="text-black ml-1" />
                  </button>
                </div>
              )}
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-white flex items-center justify-center rounded-full shadow-lg">
              <span className="text-black font-light text-2xl tracking-wide">100+</span>
            </div>
            <div className="absolute -top-8 -left-8 bg-black border border-white/20 p-6 shadow-lg rounded-lg">
              <p className="text-sm font-light text-white/70 tracking-wide uppercase">Premium Collections</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
