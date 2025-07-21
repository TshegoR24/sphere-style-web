import React, { useState } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize2, Star } from 'lucide-react';

const VideoSection = () => {
  const [activeVideo, setActiveVideo] = useState(0);
  const [isPlaying, setIsPlaying] = useState<boolean[]>(new Array(7).fill(false));
  const [isMuted, setIsMuted] = useState<boolean[]>(new Array(7).fill(true));

  const videos = [
    {
      id: 1,
      title: "Collection Showcase",
      description: "Explore our premium hair collections in stunning detail",
      src: "/videos/VID_20250721_101746_838.mp4",
      thumbnail: "/videos/Screenshot_20250721_193952.jpg"
    },
    {
      id: 2,
      title: "Lifestyle & Beauty",
      description: "See our products in real-life styling sessions",
      src: "/videos/VID_20250721_101830_222.mp4",
      thumbnail: "/videos/Screenshot_20250721_194008.jpg"
    },
    {
      id: 3,
      title: "Behind the Scenes",
      description: "Discover the craftsmanship behind our collections",
      src: "/videos/VID_20250721_101800_646.mp4",
      thumbnail: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      title: "Customer Stories",
      description: "Real transformations from our satisfied customers",
      src: "/videos/VID_20250721_101913_835.mp4",
      thumbnail: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 5,
      title: "Premium Styling",
      description: "Advanced styling techniques with our premium collections",
      src: "/videos/VID_20250721_104033_699.mp4",
      thumbnail: "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 6,
      title: "Client Testimonial",
      description: "Hear from our satisfied customers about their experience",
      src: "/videos/VID_20250721_104619_479.mp4",
      thumbnail: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 7,
      title: "Transformation Story",
      description: "Watch amazing before and after transformations",
      src: "/videos/VID_20250721_104128_314.mp4",
      thumbnail: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const handlePlayPause = (index: number) => {
    const newPlaying = [...isPlaying];
    newPlaying[index] = !newPlaying[index];
    setIsPlaying(newPlaying);
  };

  const handleMuteToggle = (index: number) => {
    const newMuted = [...isMuted];
    newMuted[index] = !newMuted[index];
    setIsMuted(newMuted);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-black text-white px-4 py-2 rounded-full mb-6">
            <Star size={16} className="text-white fill-current" />
            <span className="text-sm font-light">Video Gallery</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-black mb-6 leading-tight tracking-wide">
            Discover Our
            <span className="block font-medium">Collections</span>
          </h2>
          <p className="text-lg text-black/60 max-w-3xl mx-auto leading-relaxed font-light">
            Experience our premium hair collections through stunning video showcases. 
            Each video tells a story of beauty, quality, and transformation.
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {videos.map((video, index) => (
            <div key={video.id} className="group relative bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
              {/* Video Container */}
              <div className="relative aspect-video bg-black">
                <video
                  ref={(el) => {
                    if (el) {
                      el.muted = isMuted[index];
                      if (isPlaying[index]) {
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
                  <source src={video.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                
                {/* Video Overlay */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                
                {/* Video Controls */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => handlePlayPause(index)}
                      className="bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors"
                    >
                      {isPlaying[index] ? <Pause size={16} className="text-black" /> : <Play size={16} className="text-black" />}
                    </button>
                    <button
                      onClick={() => handleMuteToggle(index)}
                      className="bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors"
                    >
                      {isMuted[index] ? <VolumeX size={16} className="text-black" /> : <Volume2 size={16} className="text-black" />}
                    </button>
                  </div>
                  <button className="bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors">
                    <Maximize2 size={16} className="text-black" />
                  </button>
                </div>

                {/* Play Button Overlay */}
                {!isPlaying[index] && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button
                      onClick={() => handlePlayPause(index)}
                      className="bg-white/90 backdrop-blur-sm p-4 rounded-full hover:bg-white transition-colors group-hover:scale-110"
                    >
                      <Play size={24} className="text-black ml-1" />
                    </button>
                  </div>
                )}
              </div>

              {/* Video Info */}
              <div className="p-6">
                <h3 className="text-xl font-medium text-black mb-2">{video.title}</h3>
                <p className="text-black/60 font-light leading-relaxed">{video.description}</p>
                
                {/* Video Stats */}
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Star size={14} className="text-yellow-400 fill-current" />
                      <span className="text-sm text-black/60 font-light">4.9</span>
                    </div>
                    <span className="text-sm text-black/40 font-light">•</span>
                    <span className="text-sm text-black/60 font-light">HD Quality</span>
                  </div>
                  <span className="text-sm text-black/40 font-light">2-3 min</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-black/60 font-light mb-6">
            Ready to experience the difference?
          </p>
          <button className="bg-black text-white px-8 py-4 hover:bg-black/90 transition-all duration-300 font-light text-sm tracking-wide uppercase flex items-center space-x-2 mx-auto">
            <span>View All Collections</span>
            <Play size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default VideoSection; 