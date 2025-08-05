"use client";
import Globe from "@/components/magicui/globe";

export default function GlobeDemo() {
  return (
    <div className="relative flex size-full items-center justify-center overflow-hidden  min-h-[700px]">
      {/* Title */}
    

      {/* Left Panel - Current Operations */}
      <div className="pointer-events-none absolute left-8 top-1/2 -translate-y-1/2 z-10 max-w-xs">
        <div className="bg-white/90 backdrop-blur-sm border border-gray-200 rounded-xl p-6 shadow-lg">
          <div className="flex items-center mb-4">
            <div className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse"></div>
            <h3 className="text-lg font-bold text-gray-900">Currently Operating</h3>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center">
              <div className="w-8 h-6 bg-green-600 rounded-sm mr-3 flex items-center justify-center">
                <span className="text-white text-xs font-bold">PK</span>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Pakistan</p>
                <p className="text-sm text-gray-600">Headquarters & Main Operations</p>
              </div>
            </div>
          </div>
          
          <div className="mt-4 pt-4 border-t border-gray-200">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Established</span>
              <span className="font-semibold text-gray-900">2020</span>
            </div>
            <div className="flex items-center justify-between text-sm mt-1">
              <span className="text-gray-600">Team Size</span>
              <span className="font-semibold text-gray-900">50+ Experts</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel - Future Expansions */}
      <div className="pointer-events-none absolute right-8 top-1/2 -translate-y-1/2 z-10 max-w-xs">
        <div className="bg-white/90 backdrop-blur-sm border border-gray-200 rounded-xl p-6 shadow-lg">
          <div className="flex items-center mb-4">
            <div className="w-3 h-3 bg-indigo-500 rounded-full mr-3"></div>
            <h3 className="text-lg font-bold text-gray-900">Strategic Expansions</h3>
          </div>
          
          <div className="space-y-4">
            {/* Middle East */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                <span className="w-2 h-2 bg-orange-400 rounded-full mr-2"></span>
                Middle East Hub
              </h4>
              <div className="space-y-1">
                <div className="flex items-center text-sm">
                  <div className="w-6 h-4 bg-red-600 rounded-sm mr-2 flex items-center justify-center">
                    <span className="text-white text-xs font-bold">AE</span>
                  </div>
                  <span className="text-gray-700">United Arab Emirates</span>
                </div>
                <div className="flex items-center text-sm">
                  <div className="w-6 h-4 bg-green-700 rounded-sm mr-2 flex items-center justify-center">
                    <span className="text-white text-xs font-bold">SA</span>
                  </div>
                  <span className="text-gray-700">Saudi Arabia</span>
                </div>
                <div className="flex items-center text-sm">
                  <div className="w-6 h-4 bg-purple-700 rounded-sm mr-2 flex items-center justify-center">
                    <span className="text-white text-xs font-bold">QA</span>
                  </div>
                  <span className="text-gray-700">Qatar</span>
                </div>
              </div>
            </div>

            {/* Europe */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                European Markets
              </h4>
              <div className="space-y-1">
                <div className="flex items-center text-sm">
                  <div className="w-6 h-4 bg-black rounded-sm mr-2 flex items-center justify-center">
                    <span className="text-white text-xs font-bold">DE</span>
                  </div>
                  <span className="text-gray-700">Germany</span>
                </div>
                <div className="flex items-center text-sm">
                  <div className="w-6 h-4 bg-blue-800 rounded-sm mr-2 flex items-center justify-center">
                    <span className="text-white text-xs font-bold">UK</span>
                  </div>
                  <span className="text-gray-700">United Kingdom</span>
                </div>
                <div className="flex items-center text-sm">
                  <div className="w-6 h-4 bg-orange-600 rounded-sm mr-2 flex items-center justify-center">
                    <span className="text-white text-xs font-bold">NL</span>
                  </div>
                  <span className="text-gray-700">Netherlands</span>
                </div>
                <div className="flex items-center text-sm">
                  <div className="w-6 h-4 bg-blue-600 rounded-sm mr-2 flex items-center justify-center">
                    <span className="text-white text-xs font-bold">FR</span>
                  </div>
                  <span className="text-gray-700">France</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-4 pt-4 border-t border-gray-200">
            <div className="text-sm text-gray-600">
              <span className="font-semibold text-indigo-600">2025-2027</span> Timeline
            </div>
          </div>
        </div>
      </div>

      <Globe className="w-full h-full" />
      
      {/* Subtle overlay */}
      <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_50%,rgba(79,70,229,0.05),rgba(255,255,255,0))]" />
    </div>
  );
}