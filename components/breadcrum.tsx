import React from 'react';

const AboutUsSection = ({ 
  title = "About Us", 
  backgroundImage = "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  subtitle,
  height = "h-64 md:h-80 lg:h-96"
}) => {
  return (
    <div className={`relative w-full ${height} overflow-hidden bg-white`}>
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={backgroundImage} 
          alt={`${title} Background`} 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Blue Overlay */}
      <div className="absolute inset-0" style={{backgroundColor: '#2C74BC', opacity: 0.8}}></div>
      
      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg md:text-xl text-white opacity-90 mb-4 max-w-2xl">
              {subtitle}
            </p>
          )}
          {/* Optional decorative line */}
          <div className="w-16 h-1 bg-white mx-auto opacity-80"></div>
        </div>
      </div>
      
      {/* Optional decorative element */}
      {/* <div className="absolute top-8 right-8 text-white opacity-30">
        <svg 
          className="w-8 h-8" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M19 9l-7 7-7-7" 
          />
        </svg>
      </div> */}
    </div>
  );
};

export default AboutUsSection;

// Example usage:
{/* <AboutUsSection 
  title="About Us" 
  backgroundImage="/images/team.jpg"
  subtitle="Learn more about our company and mission"
/> */}
//
// <AboutUsSection 
//   title="Our Services" 
//   backgroundImage="/images/services.jpg"
//   subtitle="Discover what we can do for you"
//   height="h-96"
// />
//
// <AboutUsSection 
//   title="Contact" 
//   backgroundImage="/images/office.jpg"
// />