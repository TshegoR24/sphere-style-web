
const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              The Art of Thoughtful Curation
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              At Bundled by Sphere, we believe that the best products aren't just functional—they're transformative. 
              Our team of lifestyle curators handpicks each item to create bundles that tell a story, serve a purpose, 
              and elevate your everyday experiences.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              From morning rituals to workspace essentials, each bundle is carefully crafted to bring harmony, 
              style, and intentionality to different moments in your life. We source from independent makers, 
              sustainable brands, and innovative companies that share our commitment to quality and purpose.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-rose-600 text-white px-6 py-3 rounded-full hover:bg-rose-700 transition-all duration-300 font-medium">
                Our Story
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-full hover:border-rose-600 hover:text-rose-600 transition-all duration-300 font-medium">
                Curation Process
              </button>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Curated lifestyle products"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-rose-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">+500</span>
            </div>
            <div className="absolute -top-6 -left-6 bg-white p-4 rounded-2xl shadow-lg">
              <p className="text-sm font-semibold text-gray-900">Curated Products</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
