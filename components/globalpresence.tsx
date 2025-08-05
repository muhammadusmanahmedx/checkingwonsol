"use client";
import GlobeDemo from "@/components/globe";

export default function GlobalPresenceSection() {
  return (
    <section className="w-full min-h-screen bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, #4F46E5 2px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        {/* Header Section */}
       <div className="text-center">
  <div className="inline-flex items-center px-4 py-2 bg-indigo-100 rounded-full mb-6">
    <div className="w-2 h-2 bg-indigo-500 rounded-full mr-2 animate-pulse"></div>
    <span className="text-indigo-700 text-sm font-semibold uppercase tracking-wide">
      Global Operations
    </span>
  </div>

  <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
    Expanding Our 
    <span className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
      {" "}Global Footprint
    </span>
  </h2>

  <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
    From our established operations in Pakistan to strategic expansions across the Middle East and Europe, 
    we're building a network of excellence that spans continents.
  </p>
</div>


        {/* Main Globe Section */}
        <div className="relative mb-8">
          <GlobeDemo />
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-8 mb-20">
          <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-gray-200">
            <div className="text-3xl font-bold text-indigo-600 mb-2">8+</div>
            <div className="text-gray-600 font-medium">Target Markets</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-gray-200">
            <div className="text-3xl font-bold text-indigo-600 mb-2">3</div>
            <div className="text-gray-600 font-medium">Continents</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-gray-200">
            <div className="text-3xl font-bold text-indigo-600 mb-2">24/7</div>
            <div className="text-gray-600 font-medium">Global Support</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-gray-200">
            <div className="text-3xl font-bold text-indigo-600 mb-2">2025</div>
            <div className="text-gray-600 font-medium">Next Expansion</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-indigo-600 to-blue-600 rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Go Global?</h3>
            <p className="text-xl mb-8 opacity-90">
              Partner with us as we expand our reach across continents, bringing world-class solutions to new markets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-50 transition-all duration-300 hover:scale-105">
                Explore Partnership Opportunities
              </button>
              <button className="border-2 border-white/30 text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-all duration-300">
                View Our Global Strategy
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}