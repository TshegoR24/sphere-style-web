
const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-rose-50 via-white to-pink-50">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-5"></div>
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Curated Bundles for 
            <span className="text-rose-600 block">Modern Living</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Discover thoughtfully curated product bundles that elevate your lifestyle. 
            Each collection is handpicked to bring harmony, style, and functionality to your everyday moments.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-rose-600 text-white px-8 py-3 rounded-full hover:bg-rose-700 transition-all duration-300 transform hover:scale-105 font-medium text-lg">
              Shop Bundles
            </button>
            <button className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-full hover:border-rose-600 hover:text-rose-600 transition-all duration-300 font-medium text-lg">
              Learn More
            </button>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-rose-200 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-pink-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-rose-300 rounded-full opacity-10 animate-pulse delay-500"></div>
    </section>
  );
};

export default Hero;
