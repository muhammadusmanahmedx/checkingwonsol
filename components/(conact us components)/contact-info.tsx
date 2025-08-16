import { Mail, Phone, MapPin, Clock, Users, Award } from "lucide-react"

export function ContactInfo() {
  return (
    <>
      <div className="bg-gradient-to-br from-white to-blue-50/30 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 p-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#2C74BC]/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#2C74BC]/3 rounded-full blur-xl"></div>

        <div className="relative z-10">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-[#2C74BC] to-[#1e5a94] rounded-2xl flex items-center justify-center mr-4 shadow-lg">
              <Phone className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Get in Touch</h2>
              <p className="text-gray-600">We're here to help</p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-start space-x-4 p-4 rounded-2xl hover:bg-white/60 transition-all duration-300 hover:shadow-md group cursor-pointer">
              <div className="flex-shrink-0 mt-1">
                <div className="w-10 h-10 bg-[#2C74BC]/10 rounded-xl flex items-center justify-center group-hover:bg-[#2C74BC] group-hover:scale-110 transition-all duration-300">
                  <Phone className="w-5 h-5 text-[#2C74BC] group-hover:text-white transition-colors" />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2 text-lg">Phone</h3>
                <p className="text-[#2C74BC] font-semibold text-lg">+1 (555) 123-4567</p>
                <p className="text-sm text-gray-500 mt-1">Mon-Fri 9AM-6PM EST</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-4 rounded-2xl hover:bg-white/60 transition-all duration-300 hover:shadow-md group cursor-pointer">
              <div className="flex-shrink-0 mt-1">
                <div className="w-10 h-10 bg-[#2C74BC]/10 rounded-xl flex items-center justify-center group-hover:bg-[#2C74BC] group-hover:scale-110 transition-all duration-300">
                  <Mail className="w-5 h-5 text-[#2C74BC] group-hover:text-white transition-colors" />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2 text-lg">Email</h3>
                <p className="text-[#2C74BC] font-semibold text-lg">contact@techsoft.com</p>
                <p className="text-sm text-gray-500 mt-1">24-hour response time</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-4 rounded-2xl hover:bg-white/60 transition-all duration-300 hover:shadow-md group cursor-pointer">
              <div className="flex-shrink-0 mt-1">
                <div className="w-10 h-10 bg-[#2C74BC]/10 rounded-xl flex items-center justify-center group-hover:bg-[#2C74BC] group-hover:scale-110 transition-all duration-300">
                  <MapPin className="w-5 h-5 text-[#2C74BC] group-hover:text-white transition-colors" />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2 text-lg">Office</h3>
                <p className="text-gray-700 leading-relaxed font-medium">
                  123 Tech Street
                  <br />
                  San Francisco, CA 94105
                  <br />
                  United States
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-4 rounded-2xl hover:bg-white/60 transition-all duration-300 hover:shadow-md group cursor-pointer">
              <div className="flex-shrink-0 mt-1">
                <div className="w-10 h-10 bg-[#2C74BC]/10 rounded-xl flex items-center justify-center group-hover:bg-[#2C74BC] group-hover:scale-110 transition-all duration-300">
                  <Clock className="w-5 h-5 text-[#2C74BC] group-hover:text-white transition-colors" />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2 text-lg">Business Hours</h3>
                <p className="text-gray-700 leading-relaxed font-medium">
                  Monday - Friday: 9:00 AM - 6:00 PM
                  <br />
                  Saturday: 10:00 AM - 4:00 PM
                  <br />
                  Sunday: Closed
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gradient-to-br from-[#2C74BC] to-[#1e5a94] rounded-2xl p-6 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-16 h-16 bg-white/10 rounded-full blur-xl"></div>
          <div className="relative z-10">
            <Users className="w-8 h-8 mb-3 opacity-90" />
            <div className="text-2xl font-bold mb-1">500+</div>
            <div className="text-sm text-blue-100">Happy Clients</div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-16 h-16 bg-[#2C74BC]/5 rounded-full blur-xl"></div>
          <div className="relative z-10">
            <Award className="w-8 h-8 mb-3 text-[#2C74BC]" />
            <div className="text-2xl font-bold text-gray-900 mb-1">5+</div>
            <div className="text-sm text-gray-600">Years Experience</div>
          </div>
        </div>
      </div>
    </>
  )
}
