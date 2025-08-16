import React from 'react';
import { Users, Award, Building2 } from 'lucide-react';

export default function TestimonialFactBar() {
  return (
    <div className="relative bg-white e px-8 py-6 overflow-hidden">
      {/* Wavy Background */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 1200 400" preserveAspectRatio="none">
          <path
            d="M0,100 C300,200 600,0 900,150 C1050,225 1150,75 1200,125 L1200,400 L0,400 Z"
            fill="#2C74BC"
          />
          <path
            d="M0,200 C250,300 550,100 850,250 C1000,325 1100,175 1200,225 L1200,400 L0,400 Z"
            fill="#2C74BC"
            fillOpacity="0.4"
          />
          <path
            d="M0,300 C200,350 500,250 800,320 C950,365 1050,295 1200,335 L1200,400 L0,400 Z"
            fill="#2C74BC"
            fillOpacity="0.3"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Facts Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-sm mb-3" style={{backgroundColor: '#2C74BC'}}>
              <Users className="h-5 w-5 text-white" />
            </div>
            <div className="text-2xl font-semibold mb-1" style={{color: '#2C74BC'}}>10M+</div>
            <div className="text-sm font-medium text-gray-600 uppercase tracking-wide">Trusted Customers</div>
          </div>
                  
          <div className="text-center " style={{borderColor: '#2C74BC'}}>
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-sm mb-3" style={{backgroundColor: '#2C74BC'}}>
              <Award className="h-5 w-5 text-white" />
            </div>
            <div className="text-2xl font-semibold mb-1" style={{color: '#2C74BC'}}>2024</div>
            <div className="text-sm font-medium text-gray-600 uppercase tracking-wide">Innovation Award</div>
          </div>
                  
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-sm mb-3" style={{backgroundColor: '#2C74BC'}}>
              <Building2 className="h-5 w-5 text-white" />
            </div>
            <div className="text-2xl font-semibold mb-1" style={{color: '#2C74BC'}}>200+</div>
            <div className="text-sm font-medium text-gray-600 uppercase tracking-wide">Enterprise Partners</div>
          </div>
        </div>
              
        {/* CEO Message */}
        {/* <div className="pt-6" style={{borderTop: `1px solid #2C74BC`}}>
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0">
                <img
                   src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face"
                   alt="CEO Portrait"
                   className="w-20 h-20 rounded-full object-cover border-2"
                  style={{borderColor: '#2C74BC'}}
                />
              </div>
              <div className="flex-1">
                <div className="mb-4">
                  <h3 className="text-lg font-semibold mb-1" style={{color: '#2C74BC'}}>Message from Our CEO</h3>
                  <p className="text-gray-800 leading-relaxed">
                    "Our commitment to excellence drives everything we do. With over a decade of experience serving millions of customers worldwide, we continue to innovate and deliver solutions that transform businesses and exceed expectations."
                  </p>
                </div>
                <div className="text-sm text-gray-600">
                  <div className="font-semibold" style={{color: '#2C74BC'}}>Michael Chen</div>
                  <div>Chief Executive Officer & Founder</div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}