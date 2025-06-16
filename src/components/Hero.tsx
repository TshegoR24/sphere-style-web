
const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-20"></div>
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Premium Hair Bundles
            <span className="text-amber-400 block">Curated with Love</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Discover our handpicked collection of premium hair bundles. Each bundle is carefully selected 
            to bring out your natural beauty with unmatched quality and style.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-amber-500 text-black px-8 py-3 rounded-full hover:bg-amber-400 transition-all duration-300 transform hover:scale-105 font-medium text-lg">
              Shop Hair Bundles
            </button>
            <button className="border-2 border-amber-500 text-amber-400 px-8 py-3 rounded-full hover:bg-amber-500 hover:text-black transition-all duration-300 font-medium text-lg">
              View Collection
            </button>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-amber-500 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-amber-400 rounded-full opacity-10 animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-amber-600 rounded-full opacity-15 animate-pulse delay-500"></div>
    </section>
  );
};

export default Hero;
