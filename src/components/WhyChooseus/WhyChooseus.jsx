import React, { useState } from 'react';
import { BarChart3, Users, GitBranch, Clock, Calculator, FileText } from 'lucide-react';
import "./WhyChooseus.css";
const WhyChooseUs = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const features = [
    {
      id: 1,
      icon: BarChart3,
      title: "Trusted Channel Partner of Leading Builders",
      description: "We partner with top developers, giving you exclusive access to premier properties, competitive prices, and unique investment opportunities. Trust our expertise for secure, high-quality real estate solutions.",
      color: "from-blue-400 to-blue-600",
      bgColor: "bg-blue-100",
      delay: "0ms"
    },
    {
      id: 2,
      icon: Users,
      title: "Transparent & Personalized Service",
      description: "Our commitment to transparency ensures honest guidance tailored to your needs. We take a personalized approach to every client, providing clear information and customized property options to match your goals.",
      color: "from-orange-400 to-orange-600",
      bgColor: "bg-orange-100",
      delay: "100ms"
    },
    {
      id: 3,
      icon: GitBranch,
      title: "Dedicated Support Team For You After Sale's",
      description: "Our support doesn't end at the transaction. Count on us for reliable after-sales service, from property management advice to assistance with documentation, ensuring a seamless ownership experience for you.",
      color: "from-pink-400 to-pink-600",
      bgColor: "bg-pink-100",
      delay: "200ms"
    },
    {
      id: 4,
      icon: Clock,
      title: "Exclusive Deals & Offers With Early Access",
      description: "As partners with top developers, we offer early access to new projects and exclusive offers. Benefit from priority bookings and insider information, giving you a competitive edge in the real estate market.",
      color: "from-green-400 to-green-600",
      bgColor: "bg-green-100",
      delay: "300ms"
    },
    {
      id: 5,
      icon: Calculator,
      title: "Expert Market Analysis & Investment Guidance",
      description: "Our experienced analysts provide comprehensive market research and investment insights. We analyze trends, property values, and future growth potential to help you make informed decisions and maximize your returns.",
      color: "from-purple-400 to-purple-600",
      bgColor: "bg-purple-100",
      delay: "400ms"
    },
    {
      id: 6,
      icon: FileText,
      title: "Complete Legal & Documentation Support",
      description: "Navigate complex property laws with confidence. Our legal experts handle documentation, registration processes, and compliance requirements, ensuring your transactions are legally sound and hassle-free from start to finish.",
      color: "from-yellow-400 to-yellow-600",
      bgColor: "bg-yellow-100",
      delay: "500ms"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 py-20 px-4" id="why-choose-us">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-xl md:text-5xl font-black mb-3 sm:mb-4 bg-gradient-to-r from-black via-[#474236] to-[#c99913] bg-clip-text text-transparent animate-pulse">
            Why Choose Us?
          </h2>
          <div className="h-1 bg-gradient-to-r from-transparent via-[#c99913] to-transparent rounded-full animate-pulse"></div>
          <p className="text-xl md:text-2xl text-gray-600 font-light max-w-4xl mx-auto leading-relaxed">
            "Your Pathway To Premium Properties And Investments"
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={feature.id}
                className={`group relative overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-700 ease-out transform hover:-translate-y-2 cursor-pointer animate-slide-up`}
                style={{ animationDelay: feature.delay }}
                onMouseEnter={() => setHoveredCard(feature.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Animated Gradient Border */}
                <div className="absolute inset-0 rounded-3xl p-[2px] bg-gradient-to-r from-transparent via-gray-200 to-transparent group-hover:from-blue-400 group-hover:via-purple-500 group-hover:to-pink-400 transition-all duration-500">
                  <div className="h-full w-full rounded-3xl bg-white"></div>
                </div>

                {/* Glowing Border Effect */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-20 blur-sm group-hover:animate-pulse transition-all duration-500`}></div>

                {/* Moving Border Animation */}
                <div className="absolute inset-0 rounded-3xl">
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-0 group-hover:opacity-30 transform rotate-0 group-hover:rotate-180 transition-all duration-2000 ease-linear"></div>
                </div>

                {/* Background Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}></div>

                {/* Animated Border Sweep */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                {/* Corner Glow Effects */}
                <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-transparent rounded-tl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-purple-400/20 to-transparent rounded-br-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative p-8 h-full flex flex-col z-10">
                  {/* Icon Container */}
                  <div className={`w-20 h-20 ${feature.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 relative overflow-hidden border-2 border-transparent group-hover:border-gradient-to-r group-hover:from-blue-300 group-hover:to-purple-300`}>
                    {/* Icon Background Glow */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl`}></div>

                    {/* Icon Border Shine */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-40 transform -translate-x-full group-hover:translate-x-full transition-transform duration-800"></div>

                    <IconComponent
                      className={`w-10 h-10 text-gray-700 group-hover:text-white transition-colors duration-500 relative z-10 ${hoveredCard === feature.id ? 'animate-bounce' : ''} drop-shadow-lg`}
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-gray-900 transition-colors duration-300 leading-tight">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300 leading-relaxed text-md font-[Calibri]">
                      {feature.description}
                    </p>
                  </div>

                  {/* Enhanced Hover Effects */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>

                  {/* Animated Corner Decorations */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-gray-200 rounded-full group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-500 transition-all duration-500 group-hover:scale-150 group-hover:animate-ping"></div>

                  {/* Side Accent Lines */}
                  <div className="absolute left-0 top-1/2 w-1 h-0 bg-gradient-to-b from-blue-400 to-purple-500 group-hover:h-16 transition-all duration-500 transform -translate-y-1/2 rounded-r-full"></div>
                  <div className="absolute right-0 top-1/2 w-1 h-0 bg-gradient-to-b from-purple-400 to-pink-500 group-hover:h-16 transition-all duration-700 transform -translate-y-1/2 rounded-l-full"></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center mt-20 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
          <div className="inline-flex items-center space-x-4 bg-white  px-8 py-3 shadow-lg hover:shadow-xl transition-shadow duration-300 border-2 gradient-border">
            <div className="w-3 h-3 bg-green-500  animate-pulse"></div>
            <span className="font-medium text-black font-[Calibri]">
              Ready to get started? Let's make it happen.
            </span>
          </div>
        </div>

        
      </div>

      
    </div>
  );
};

export default WhyChooseUs;