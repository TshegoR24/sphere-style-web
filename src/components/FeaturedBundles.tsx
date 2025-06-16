
const FeaturedBundles = () => {
  const bundles = [
    {
      id: 1,
      name: "Morning Ritual Bundle",
      description: "Start your day with intention. Includes premium coffee, ceramic mug, and mindfulness journal.",
      price: "$89",
      originalPrice: "$120",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      badge: "Best Seller"
    },
    {
      id: 2,
      name: "Workspace Essentials",
      description: "Elevate your productivity with curated desk accessories and organization tools.",
      price: "$145",
      originalPrice: "$180",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      badge: "New"
    },
    {
      id: 3,
      name: "Self-Care Sunday",
      description: "Indulge in luxury with handpicked wellness products for the ultimate relaxation experience.",
      price: "$125",
      originalPrice: "$160",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      badge: "Limited"
    }
  ];

  return (
    <section id="bundles" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Bundles
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our most popular curated collections, each designed to enhance different aspects of your daily life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {bundles.map((bundle) => (
            <div key={bundle.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl bg-gray-100 aspect-square mb-4">
                <img 
                  src={bundle.image} 
                  alt={bundle.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-rose-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {bundle.badge}
                  </span>
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-rose-600 transition-colors">
                  {bundle.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {bundle.description}
                </p>
                <div className="flex items-center space-x-2">
                  <span className="text-2xl font-bold text-rose-600">{bundle.price}</span>
                  <span className="text-lg text-gray-400 line-through">{bundle.originalPrice}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-rose-600 text-white px-8 py-3 rounded-full hover:bg-rose-700 transition-all duration-300 transform hover:scale-105 font-medium">
            View All Bundles
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBundles;
