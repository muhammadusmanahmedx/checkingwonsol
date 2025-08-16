import { MapPin, Navigation, Phone, Clock } from "lucide-react"

export function MapSection() {
  return (
    <div className="w-full bg-gradient-to-b from-white to-gray-50 relative">
      {/* <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#2C74BC]/5 via-transparent to-[#2C74BC]/5"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 py-12">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-3 bg-white rounded-full px-6 py-3 shadow-lg border border-gray-100 mb-6">
              <div className="w-8 h-8 bg-[#2C74BC] rounded-full flex items-center justify-center">
                <MapPin className="w-4 h-4 text-white" />
              </div>
              <span className="font-semibold text-gray-900">Visit Our Office</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Find Us in the Heart of
              <span className="block text-[#2C74BC]">San Francisco</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Located in the vibrant tech district, our office is easily accessible and designed for collaboration.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-[#2C74BC]/10 rounded-xl flex items-center justify-center mb-4">
                <Navigation className="w-6 h-6 text-[#2C74BC]" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2 text-lg">Easy Access</h3>
              <p className="text-gray-600">Just 5 minutes from BART station and major highways</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-[#2C74BC]/10 rounded-xl flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-[#2C74BC]" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2 text-lg">Call Ahead</h3>
              <p className="text-gray-600">Schedule a meeting for personalized consultation</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-[#2C74BC]/10 rounded-xl flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-[#2C74BC]" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2 text-lg">Flexible Hours</h3>
              <p className="text-gray-600">Extended hours available for urgent projects</p>
            </div>
          </div>
        </div>
      </div> */}

      <div className="relative h-96 bg-white shadow-2xl border-t border-gray-200 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center z-10">
          <div className="text-center">
            <div className="w-20 h-20 bg-[#2C74BC]/10 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
              <MapPin className="w-10 h-10 text-[#2C74BC]" />
            </div>
            <p className="text-gray-700 font-semibold text-lg mb-2">Interactive Map Loading...</p>
            <p className="text-gray-500">123 Tech Street, San Francisco, CA 94105</p>
            <div className="mt-4 inline-flex items-center gap-2 bg-[#2C74BC] text-white px-4 py-2 rounded-full text-sm font-medium">
              <Navigation className="w-4 h-4" />
              Get Directions
            </div>
          </div>
        </div>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0197327470443!2d-122.39968368468141!3d37.79413797975647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085807cf8b8b5b5%3A0x8b8b8b8b8b8b8b8b!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1234567890123"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500 z-20"
        />
      </div>
    </div>
  )
}
