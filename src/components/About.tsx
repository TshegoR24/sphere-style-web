
const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              The Art of Hair Perfection
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              At Bundled by Sphere, we specialize in premium hair bundles that transform your look. 
              Our team carefully sources and curates each bundle to ensure you receive only the finest 
              quality hair that feels natural, looks stunning, and lasts longer.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              From Brazilian waves to Peruvian straight, Malaysian curly to Indian natural textures - 
              each bundle tells a story of heritage, quality, and beauty. We work directly with trusted 
              suppliers to bring you authentic, ethically sourced hair that enhances your natural elegance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-amber-500 text-black px-6 py-3 rounded-full hover:bg-amber-400 transition-all duration-300 font-medium">
                Our Story
              </button>
              <button className="border-2 border-amber-500 text-amber-400 px-6 py-3 rounded-full hover:bg-amber-500 hover:text-black transition-all duration-300 font-medium">
                Quality Promise
              </button>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Premium hair bundles collection"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-amber-500 rounded-full flex items-center justify-center">
              <span className="text-black font-bold text-lg">100+</span>
            </div>
            <div className="absolute -top-6 -left-6 bg-black border border-amber-500 p-4 rounded-2xl shadow-lg">
              <p className="text-sm font-semibold text-amber-400">Premium Bundles</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
