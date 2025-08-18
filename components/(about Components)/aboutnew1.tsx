import React from "react";

const WonsolAboutHero = ({
  companyImage = "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80",
  achievements = [
    { title: "Founded", value: "2024" },
    { title: "Active Projects", value: "15+" },
    { title: "Growing Team", value: "10+" },
  ],
}) => {
  return (
    <section className="pt-8 mb-12">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid max-w-md grid-cols-1 mx-auto lg:grid-cols-12 gap-x-8 gap-y-6 lg:max-w-none">
          <div className="self-center lg:col-span-4">
            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl xl:text-4xl leading-tight">
              Welcome to
              <span className="text-blue-600"> Wonsol</span> Building Tomorrow's
              Solutions
            </h1>
            <p className="mt-3 text-sm font-normal leading-6 text-gray-500 sm:text-base sm:leading-7">
              We're a passionate startup dedicated to creating innovative
              software solutions that help businesses grow and thrive in the
              digital age. Fresh ideas, cutting-edge technology, and
              personalized service drive everything we do.
            </p>
            <div className="relative inline-flex mt-6 group">
              <div className="absolute transitiona-all duration-1000 opacity-70 inset-0 bg-gradient-to-r from-[#2C74BC] via-[#44BCFF] to-[#2C74BC] rounded-xl blur-lg filter group-hover:opacity-100 group-hover:duration-200"></div>

              <a
                href="#services"
                title=""
                className="relative inline-flex items-center justify-center px-6 py-2.5 sm:px-8 sm:py-3 text-sm font-semibold text-white transition-all duration-200 rounded-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2"
                style={{ backgroundColor: "#2C74BC" }}
                role="button"
              >
                Start Your Journey With Us
              </a>
            </div>
          </div>

          <div className="self-end lg:order-last lg:pb-16 lg:col-span-3">
            <p className="text-xs font-bold tracking-widest text-gray-500 uppercase">
              🚀 Our Journey
            </p>

            <div className="mt-4 space-y-4 lg:space-y-5">
              {achievements.map((achievement, index) => (
                <div key={index} className="relative overflow-hidden">
                  <div className="flex items-start lg:items-center">
                    <div
                      className="flex items-center justify-center w-10 h-10 rounded-lg shrink-0"
                      style={{ backgroundColor: "#2C74BC" }}
                    >
                      <span className="text-white font-bold text-sm">
                        {achievement.value}
                      </span>
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-bold leading-5 text-gray-900">
                        {achievement.title}
                      </p>
                      <p className="text-xs text-gray-500">
                        {achievement.title === "Founded"
                          ? "fresh & ambitious"
                          : "and growing..."}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="self-end lg:col-span-5">
            <div className="relative max-w-xs mx-auto lg:max-w-sm">
              {/* Decorative background elements */}
              <div
                className="absolute -top-4 -right-4 w-20 h-20 rounded-full opacity-20"
                style={{ backgroundColor: "#2C74BC" }}
              ></div>
              <div
                className="absolute -bottom-6 -left-6 w-16 h-16 rounded-full opacity-10"
                style={{ backgroundColor: "#2C74BC" }}
              ></div>

              {/* Main image container with border */}
              <div className="relative bg-white rounded-2xl p-2 shadow-lg">
                <div
                  className="rounded-xl overflow-hidden border-2"
                  style={{ borderColor: "#2C74BC" }}
                >
                  <img
                    className="w-full h-64 sm:h-72 md:h-80 object-cover"
                    src={companyImage}
                    alt="Wonsol Software Startup"
                  />
                </div>

                {/* Floating badge */}
                <div
                  className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded-full text-white text-sm font-semibold shadow-lg"
                  style={{ backgroundColor: "#2C74BC" }}
                >
                  Est. 2024
                </div>
              </div>

              {/* Side accent elements */}
              <div
                className="absolute top-1/2 -left-2 w-1 h-16 rounded-full opacity-60"
                style={{ backgroundColor: "#2C74BC" }}
              ></div>
              <div
                className="absolute top-1/3 -right-2 w-1 h-12 rounded-full opacity-40"
                style={{ backgroundColor: "#2C74BC" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WonsolAboutHero;
