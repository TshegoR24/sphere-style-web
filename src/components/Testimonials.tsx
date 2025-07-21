import React, { useState } from 'react';
import { Star, Quote, Play, Pause, Volume2, VolumeX } from 'lucide-react';

const Testimonials = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState<boolean[]>(new Array(2).fill(false));
  const [isVideoMuted, setIsVideoMuted] = useState<boolean[]>(new Array(2).fill(true));

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Hair Stylist",
      content: "The quality of Bundled by Sphere's hair collections is unmatched. My clients always ask where I get my hair from.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      video: null
    },
    {
      id: 2,
      name: "Maria Rodriguez",
      role: "Fashion Blogger",
      content: "I've tried many hair brands, but Bundled by Sphere consistently delivers the best quality and most natural look.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      video: "/videos/VID_20250721_104619_479.mp4"
    },
    {
      id: 3,
      name: "Jennifer Lee",
      role: "Makeup Artist",
      content: "The Brazilian hair bundle I got from them lasted over a year with proper care. Absolutely worth the investment.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      video: "/videos/VID_20250721_104128_314.mp4"
    }
  ];

  const handlePlayPause = (index: number) => {
    const newPlaying = [...isVideoPlaying];
    newPlaying[index] = !newPlaying[index];
    setIsVideoPlaying(newPlaying);
  };

  const handleMuteToggle = (index: number) => {
    const newMuted = [...isVideoMuted];
    newMuted[index] = !newMuted[index];
    setIsVideoMuted(newMuted);
  };

  return (
    <section className="py-24 bg-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full mb-6 shadow-sm">
            <Quote size={16} className="text-black" />
            <span className="text-sm font-light text-black">Client Testimonials</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-black mb-6 tracking-wide">
            What Our Clients
            <span className="block font-medium">Say</span>
          </h2>
          <p className="text-lg text-black/60 max-w-3xl mx-auto font-light leading-relaxed">
            Don't just take our word for it. Here's what our satisfied clients have to say about their experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={testimonial.id} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              {/* Video Testimonial */}
              {testimonial.video && (
                <div className="relative aspect-video bg-black rounded-lg overflow-hidden mb-6">
                  <video
                    ref={(el) => {
                      if (el) {
                        el.muted = isVideoMuted[index];
                        if (isVideoPlaying[index]) {
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
                    <source src={testimonial.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  
                  {/* Video Overlay */}
                  <div className="absolute inset-0 bg-black/20"></div>
                  
                  {/* Video Controls */}
                  <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => handlePlayPause(index)}
                        className="bg-white/90 backdrop-blur-sm p-1.5 rounded-full hover:bg-white transition-colors"
                      >
                        {isVideoPlaying[index] ? <Pause size={12} className="text-black" /> : <Play size={12} className="text-black" />}
                      </button>
                      <button
                        onClick={() => handleMuteToggle(index)}
                        className="bg-white/90 backdrop-blur-sm p-1.5 rounded-full hover:bg-white transition-colors"
                      >
                        {isVideoMuted[index] ? <VolumeX size={12} className="text-black" /> : <Volume2 size={12} className="text-black" />}
                      </button>
                    </div>
                  </div>

                  {/* Play Button Overlay */}
                  {!isVideoPlaying[index] && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <button
                        onClick={() => handlePlayPause(index)}
                        className="bg-white/90 backdrop-blur-sm p-3 rounded-full hover:bg-white transition-colors hover:scale-110"
                      >
                        <Play size={20} className="text-black ml-0.5" />
                      </button>
                    </div>
                  )}
                </div>
              )}

              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="text-black fill-current" />
                ))}
              </div>
              <p className="text-black/60 mb-6 font-light leading-relaxed">
                "{testimonial.content}"
              </p>
              <div className="flex items-center space-x-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-medium text-black">{testimonial.name}</div>
                  <div className="text-sm text-black/50 font-light">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="border border-black text-black px-8 py-3 hover:bg-black hover:text-white transition-all duration-300 font-light text-sm tracking-wide uppercase">
            Read More Reviews
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 