
import React from 'react';
import { Instagram, Heart, MessageCircle } from 'lucide-react';

const InstagramFeed = () => {
  const posts = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      likes: 342,
      comments: 28,
      caption: "Premium Brazilian hair bundle ✨"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      likes: 289,
      comments: 19,
      caption: "Peruvian straight hair collection 💫"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      likes: 456,
      comments: 34,
      caption: "Malaysian curly hair bundle 🔥"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      likes: 198,
      comments: 15,
      caption: "Indian natural hair collection 🌟"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      likes: 523,
      comments: 42,
      caption: "Premium hair bundle unboxing 📦"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      likes: 312,
      comments: 26,
      caption: "Hair styling transformation ✨"
    }
  ];

  return (
    <section className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-white/10 backdrop-blur-sm p-3 rounded-full mr-4">
              <Instagram className="text-white" size={28} />
            </div>
            <h2 className="text-3xl md:text-4xl font-light tracking-wide">
              @bundledbysphere
            </h2>
          </div>
          <p className="text-lg text-white/70 max-w-3xl mx-auto font-light leading-relaxed">
            Follow our journey and get inspired by our community's hair transformations and styling moments.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {posts.map((post) => (
            <div key={post.id} className="group cursor-pointer">
              <div className="relative aspect-square overflow-hidden bg-white/5 rounded-xl border border-white/10">
                <img 
                  src={post.image} 
                  alt={`Instagram post ${post.id}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-colors duration-500 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-white text-center">
                    <div className="flex items-center justify-center space-x-4 mb-3">
                      <div className="flex items-center space-x-1">
                        <Heart size={16} className="fill-current" />
                        <span className="text-xs font-light">{post.likes}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MessageCircle size={16} />
                        <span className="text-xs font-light">{post.comments}</span>
                      </div>
                    </div>
                    <p className="text-xs font-light tracking-wide px-2">{post.caption}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a 
            href="https://www.instagram.com/bundledbysphere?igsh=aWZ3cHdzeDY4Zzhv" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center border border-white text-white px-12 py-4 hover:bg-white hover:text-black transition-all duration-300 font-light text-sm tracking-wide uppercase"
          >
            <Instagram className="mr-3" size={16} />
            Follow Our Journey
          </a>
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
