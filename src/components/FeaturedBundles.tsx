import React, { useState } from 'react';
import { ArrowRight, Star, ShoppingBag, Heart, Eye, Clock, Truck } from 'lucide-react';

const FeaturedBundles = () => {
  const [wishlist, setWishlist] = useState<number[]>([]);

  const collections = [
    {
      id: 1,
      name: "Classic Collection",
      description: "Timeless hair bundles in natural shades. Perfect for everyday elegance and professional styling.",
      price: "$189",
      originalPrice: "$240",
      image: "/videos/Screenshot_20250721_193952.jpg",
      badge: "Best Seller",
      rating: 4.9,
      reviews: 127,
      inStock: true,
      shipping: "Free Shipping",
      delivery: "2-3 days"
    },
    {
      id: 2,
      name: "Luxe Collection",
      description: "Premium hair bundles in rich, vibrant colors. Designed for those who seek bold, statement-making styles.",
      price: "$245",
      originalPrice: "$320",
      image: "/videos/Screenshot_20250721_194008.jpg",
      badge: "New",
      rating: 4.8,
      reviews: 89,
      inStock: true,
      shipping: "Free Shipping",
      delivery: "2-3 days"
    },
    {
      id: 3,
      name: "Signature Collection",
      description: "Handpicked hair bundles with exceptional quality. Each piece is carefully selected for texture and durability.",
      price: "$225",
      originalPrice: "$280",
      image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      badge: "Limited",
      rating: 4.9,
      reviews: 156,
      inStock: false,
      shipping: "Free Shipping",
      delivery: "2-3 days"
    }
  ];

  const toggleWishlist = (id: number) => {
    setWishlist(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <section id="collections" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center space-x-2 bg-black text-white px-3 sm:px-4 py-2 rounded-full mb-4 sm:mb-6">
            <ShoppingBag size={14} className="sm:w-4 sm:h-4" />
            <span className="text-xs sm:text-sm font-light">Featured Collections</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-playfair text-black mb-4 sm:mb-6 tracking-wide">
            Featured Collections
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto font-light leading-relaxed px-4">
            Discover our most sought-after hair collections, each crafted with precision and designed to enhance your natural beauty.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {collections.map((collection) => (
            <div key={collection.id} className="group bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              {/* Product Image */}
              <div className="relative overflow-hidden bg-gray-50 aspect-[3/4]">
                <img 
                  src={collection.image} 
                  alt={collection.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Badge */}
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                  <span className="bg-black text-white px-2 sm:px-3 py-1 text-xs font-light tracking-wide uppercase rounded-full">
                    {collection.badge}
                  </span>
                </div>

                {/* Wishlist Button */}
                <button
                  onClick={() => toggleWishlist(collection.id)}
                  className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-white/90 backdrop-blur-sm p-1.5 sm:p-2 rounded-full hover:bg-white transition-colors"
                >
                  <Heart 
                    size={16} 
                    className={`${wishlist.includes(collection.id) ? 'text-red-500 fill-current' : 'text-black'} sm:w-[18px] sm:h-[18px]`} 
                  />
                </button>

                {/* Stock Status */}
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4">
                  <div className={`px-2 sm:px-3 py-1 rounded-full text-xs font-light ${
                    collection.inStock 
                      ? 'bg-black text-white' 
                      : 'bg-gray-500 text-white'
                  }`}>
                    {collection.inStock ? 'In Stock' : 'Out of Stock'}
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                    <button className="bg-white text-black py-2 px-3 sm:px-4 font-light text-xs sm:text-sm tracking-wide uppercase hover:bg-black/5 transition-colors duration-300 rounded-lg flex items-center justify-center space-x-2">
                      <Eye size={12} className="sm:w-[14px] sm:h-[14px]" />
                      <span>Quick View</span>
                    </button>
                    <button className="bg-black text-white py-2 px-3 sm:px-4 font-light text-xs sm:text-sm tracking-wide uppercase hover:bg-black/90 transition-colors duration-300 rounded-lg flex items-center justify-center space-x-2">
                      <ShoppingBag size={12} className="sm:w-[14px] sm:h-[14px]" />
                      <span>Add to Cart</span>
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Product Info */}
              <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-lg sm:text-xl font-light text-black group-hover:text-black/70 transition-colors tracking-wide">
                    {collection.name}
                  </h3>
                  <div className="flex items-center space-x-1">
                    <Star size={12} className="text-yellow-400 fill-current sm:w-[14px] sm:h-[14px]" />
                    <span className="text-xs sm:text-sm font-medium text-black">{collection.rating}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed font-light">
                  {collection.description}
                </p>

                {/* Pricing */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <span className="text-xl sm:text-2xl font-light text-black">{collection.price}</span>
                    <span className="text-xs sm:text-sm text-gray-400 line-through">{collection.originalPrice}</span>
                    <span className="text-xs text-green-600 font-light">Save 21%</span>
                  </div>
                  <span className="text-xs text-gray-500 font-light">{collection.reviews} reviews</span>
                </div>

                {/* Shipping Info */}
                <div className="flex items-center justify-between pt-2 sm:pt-3 border-t border-gray-100">
                  <div className="flex items-center space-x-2">
                    <Truck size={12} className="text-green-600 sm:w-[14px] sm:h-[14px]" />
                    <span className="text-xs text-green-600 font-light">{collection.shipping}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock size={12} className="text-gray-400 sm:w-[14px] sm:h-[14px]" />
                    <span className="text-xs text-gray-400 font-light">{collection.delivery}</span>
                  </div>
                </div>

                {/* Add to Cart Button */}
                <button 
                  disabled={!collection.inStock}
                  className={`w-full py-2.5 sm:py-3 px-4 sm:px-4 font-light text-xs sm:text-sm tracking-wide uppercase transition-all duration-300 rounded-lg flex items-center justify-center space-x-2 ${
                    collection.inStock
                      ? 'bg-black text-white hover:bg-black/90 hover:scale-105'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  <ShoppingBag size={14} className="sm:w-4 sm:h-4" />
                  <span>{collection.inStock ? 'Add to Cart' : 'Out of Stock'}</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Store Features */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mt-12 sm:mt-16 pt-8 sm:pt-12 border-t border-gray-100">
          <div className="text-center">
            <div className="bg-black/5 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <Truck size={20} className="text-black sm:w-6 sm:h-6" />
            </div>
            <h4 className="font-medium text-black mb-1 sm:mb-2 text-sm sm:text-base">Free Shipping</h4>
            <p className="text-xs sm:text-sm text-gray-600 font-light">On orders over $150</p>
          </div>
          <div className="text-center">
            <div className="bg-black/5 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <Clock size={20} className="text-black sm:w-6 sm:h-6" />
            </div>
            <h4 className="font-medium text-black mb-1 sm:mb-2 text-sm sm:text-base">Fast Delivery</h4>
            <p className="text-xs sm:text-sm text-gray-600 font-light">2-3 business days</p>
          </div>
          <div className="text-center">
            <div className="bg-black/5 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <Star size={20} className="text-black sm:w-6 sm:h-6" />
            </div>
            <h4 className="font-medium text-black mb-1 sm:mb-2 text-sm sm:text-base">Quality Guarantee</h4>
            <p className="text-xs sm:text-sm text-gray-600 font-light">30-day returns</p>
          </div>
          <div className="text-center">
            <div className="bg-black/5 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <Heart size={20} className="text-black sm:w-6 sm:h-6" />
            </div>
            <h4 className="font-medium text-black mb-1 sm:mb-2 text-sm sm:text-base">Customer Support</h4>
            <p className="text-xs sm:text-sm text-gray-600 font-light">24/7 assistance</p>
          </div>
        </div>

        <div className="text-center mt-8 sm:mt-12">
          <button className="group border border-black text-black px-8 sm:px-12 py-3 sm:py-4 hover:bg-black hover:text-white transition-all duration-300 font-light text-xs sm:text-sm tracking-wide uppercase flex items-center space-x-2 mx-auto">
            <span>View All Collections</span>
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform sm:w-4 sm:h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBundles;
