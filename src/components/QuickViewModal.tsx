import React, { useState } from 'react';
import { X, ShoppingBag, Heart, Star, Truck, Clock, Check } from 'lucide-react';

interface QuickViewModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: {
    id: number;
    name: string;
    description: string;
    price: string;
    originalPrice: string;
    image: string;
    rating: number;
    reviews: number;
    inStock: boolean;
    shipping: string;
    delivery: string;
  } | null;
}

const QuickViewModal = ({ isOpen, onClose, product }: QuickViewModalProps) => {
  const [selectedSize, setSelectedSize] = useState('16"');
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);

  if (!isOpen || !product) return null;

  const sizes = ['12"', '14"', '16"', '18"', '20"', '22"', '24"'];

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-light text-black">Quick View</h2>
            <button
              onClick={onClose}
              className="text-black/60 hover:text-black transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Product Image */}
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-96 object-cover rounded-xl"
              />
              <button
                onClick={() => setIsWishlisted(!isWishlisted)}
                className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors"
              >
                <Heart 
                  size={18} 
                  className={`${isWishlisted ? 'text-red-500 fill-current' : 'text-black'}`} 
                />
              </button>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-light text-black mb-2">{product.name}</h3>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} className={i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"} />
                    ))}
                  </div>
                  <span className="text-sm text-black/60">({product.reviews} reviews)</span>
                </div>
                <p className="text-black/60 leading-relaxed">{product.description}</p>
              </div>

              {/* Pricing */}
              <div className="flex items-center space-x-4">
                <span className="text-3xl font-light text-black">{product.price}</span>
                <span className="text-lg text-black/40 line-through">{product.originalPrice}</span>
                <span className="text-sm text-green-600 font-light bg-green-50 px-2 py-1 rounded">Save 21%</span>
              </div>

              {/* Size Selection */}
              <div>
                <h4 className="font-medium text-black mb-3">Select Length</h4>
                <div className="grid grid-cols-4 gap-2">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`py-2 px-3 text-sm font-light rounded-lg border transition-all duration-300 ${
                        selectedSize === size
                          ? 'border-black bg-black text-white'
                          : 'border-gray-200 text-black hover:border-black'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div>
                <h4 className="font-medium text-black mb-3">Quantity</h4>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-8 h-8 border border-gray-200 rounded flex items-center justify-center hover:border-black transition-colors"
                  >
                    -
                  </button>
                  <span className="text-lg font-light text-black min-w-[2rem] text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-8 h-8 border border-gray-200 rounded flex items-center justify-center hover:border-black transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Shipping Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Truck size={16} className="text-green-600" />
                  <span className="text-sm text-green-600 font-light">{product.shipping}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock size={16} className="text-black/40" />
                  <span className="text-sm text-black/40 font-light">{product.delivery}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check size={16} className="text-green-600" />
                  <span className="text-sm text-green-600 font-light">30-day returns</span>
                </div>
              </div>

              {/* Add to Cart */}
              <div className="space-y-3">
                <button 
                  disabled={!product.inStock}
                  className={`w-full py-4 px-6 font-light text-sm tracking-wide uppercase transition-all duration-300 rounded-lg flex items-center justify-center space-x-2 ${
                    product.inStock
                      ? 'bg-black text-white hover:bg-black/90 hover:scale-105'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  <ShoppingBag size={18} />
                  <span>{product.inStock ? 'Add to Cart' : 'Out of Stock'}</span>
                </button>
                
                {product.inStock && (
                  <p className="text-xs text-black/60 text-center">
                    Free shipping on orders over $150
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickViewModal; 