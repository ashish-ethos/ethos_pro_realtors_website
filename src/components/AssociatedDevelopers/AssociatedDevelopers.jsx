import React from 'react';
import M3M from "../../assets/images/premiumproperties/M3M.png";
import Elan from "../../assets/images/premiumproperties/Elan.png";
import DLF from "../../assets/images/premiumproperties/DLF.png";
import Godrej from "../../assets/images/premiumproperties/Godrej.jpg";
import Max from "../../assets/images/premiumproperties/Max-Estates.png";
import Omaxe from "../../assets/images/premiumproperties/Omaxe.png";
import TrumpTower from "../../assets/images/premiumproperties/Trump-Towers.png";
import Trinity from "../../assets/images/premiumproperties/Trinity-Infratech.png";
import Smartworld from "../../assets/images/premiumproperties/Smartworld.png";
import Signature from "../../assets/images/premiumproperties/Signature-Global.png";
import Unitech from "../../assets/images/premiumproperties/unitech.jpeg";
import Adani from "../../assets/images/premiumproperties/adani.png";
import Shapoorji from "../../assets/images/premiumproperties/shapoorji_pallonji.jpeg";
import IndiaBull from "../../assets/images/premiumproperties/indiabull.png";
import Bptp from "../../assets/images/premiumproperties/bptp.jpeg";
import Emaar from "../../assets/images/premiumproperties/emaar.png";
import Sobha from "../../assets/images/premiumproperties/sobha.png";
import AtsEstate from "../../assets/images/premiumproperties/ats_estate.jpeg";
import "../OurTeam/OurTeam.css";

const AssociatedDevelopers = () => {
  const developerLogos = [
    { id: 1, name: 'M3M', src: M3M, shadow: 'shadow-md' },
    { id: 2, name: 'Elan', src: Elan, shadow: 'shadow-md' },
    { id: 3, name: 'Omaxe', src: Omaxe, shadow: 'shadow-md' },
    { id: 4, name: 'DLF', src: DLF, shadow: 'shadow-md' },
    { id: 5, name: 'Godrej', src: Godrej, shadow: 'shadow-md' },
    { id: 6, name: 'Trinity', src: Trinity, shadow: 'shadow-md' },
    { id: 7, name: 'Signature Global', src: Signature, shadow: 'shadow-md' },
    { id: 8, name: 'Max Estates', src: Max, shadow: 'shadow-md' },
    { id: 9, name: 'Smartworld', src: Smartworld, shadow: 'shadow-md' },
    { id: 10, name: 'Trump Towers', src: TrumpTower, shadow: 'shadow-md' },
    { id: 11, name: 'Unitech', src: Unitech, shadow: 'shadow-md' },
    { id: 12, name: 'Adani', src: Adani, shadow: 'shadow-md' },
    { id: 13, name: 'Shapoorji', src: Shapoorji, shadow: 'shadow-md' },
    { id: 14, name: 'IndiaBull', src: IndiaBull, shadow: 'shadow-md' },
    { id: 15, name: 'Bptp', src: Bptp, shadow: 'shadow-md' },
    { id: 16, name: 'Emaar', src: Emaar, shadow: 'shadow-md' },
    { id: 17, name: 'Sobha', src: Sobha, shadow: 'shadow-md' },
    { id: 18, name: 'AtsEstate', src: AtsEstate, shadow: 'shadow-md' },
  ];

  return (
    <div className="relative py-6 sm:py-10 bg-white overflow-hidden" id='associated-developers'>
      {/* Inline marquee animation */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          display: flex;
          width: 200%;
          animation: marquee 30s linear infinite;
        }
      `}</style>

      <div className="relative mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center">
          <div className="inline-block relative mb-4 sm:mb-6">
            <h2 className="text-2xl sm:text-4xl md:text-6xl font-black font-[Montserrat] text-transparent bg-clip-text bg-gradient-to-r from-slate-800 via-slate-600 to-slate-800 tracking-tight">
              Associated Developers
            </h2>
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent rounded-full"></div>
          </div>
          <div className="mt-4 flex justify-center space-x-2">
            <div className="w-2 h-2 rounded-full bg-blue-500 animate-bounce"></div>
            <div className="w-2 h-2 rounded-full bg-purple-500 animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-2 h-2 rounded-full bg-pink-500 animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
        </div>

        {/* Continuous Marquee Logos */}
        <div className="relative h-48 sm:h-64 overflow-hidden">
          <div className="absolute inset-0 flex items-center">
            <div className="marquee-track space-x-8 sm:space-x-12">
              {/* First set */}
              {developerLogos.map((logo) => (
                <div key={`set1-${logo.id}`} className="flex-shrink-0 group relative">
                  <div className={`relative w-32 sm:w-40 h-20 sm:h-24 bg-white rounded-xl border border-gray-200 hover:border-gray-300 transition-all duration-300 group-hover:scale-105 ${logo.shadow} hover:shadow-lg flex items-center justify-center overflow-hidden`}>
                    <img src={logo.src} alt={logo.name} className="max-w-full max-h-full object-contain transition-all duration-300 group-hover:scale-105" />
                  </div>
                </div>
              ))}
              {/* Duplicate set */}
              {developerLogos.map((logo) => (
                <div key={`set2-${logo.id}`} className="flex-shrink-0 group relative">
                  <div className={`relative w-32 sm:w-40 h-20 p-2 sm:h-24 bg-white rounded-xl border border-gray-200 hover:border-gray-300 transition-all duration-300 group-hover:scale-105 ${logo.shadow} hover:shadow-lg flex items-center justify-center overflow-hidden`}>
                    <img src={logo.src} alt={logo.name} className="max-w-full max-h-full object-contain transition-all duration-300 group-hover:scale-105" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Edge Gradients */}
          <div className="absolute left-0 top-0 w-16 sm:w-32 h-full bg-gradient-to-r from-white to-transparent z-20"></div>
          <div className="absolute right-0 top-0 w-16 sm:w-32 h-full bg-gradient-to-l from-white to-transparent z-20"></div>
        </div>

        {/* Bottom Stats */}
        <div className="bottom-stats mt-4">
          <div className="text-center mb-8">
            <div className="inline-flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 bg-white/60 backdrop-blur-sm rounded-lg sm:rounded-full px-6 sm:px-8 py-4 border border-blue-200 shadow-lg">
              <div className="flex flex-col sm:flex-row sm:space-x-8 text-slate-700">
                <div className="text-center group cursor-pointer">
                  <div className="text-lg sm:text-xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors duration-300">15+</div>
                  <div className="text-xs sm:text-sm uppercase tracking-wider font-medium font-[Inter]">Partners</div>
                </div>
                <div className="w-full sm:w-px h-px sm:h-12 bg-gray-300 my-4 sm:my-0"></div>
                <div className="text-center group cursor-pointer">
                  <div className="text-lg sm:text-xl font-bold text-slate-800 group-hover:text-purple-600 transition-colors duration-300">500+</div>
                  <div className="text-xs sm:text-sm uppercase tracking-wider font-medium font-[Inter]">Projects</div>
                </div>
                <div className="w-full sm:w-px h-px sm:h-12 bg-gray-300 my-4 sm:my-0"></div>
                <div className="text-center group cursor-pointer">
                  <div className="text-lg sm:text-xl font-bold text-slate-800 group-hover:text-pink-600 transition-colors duration-300">25+</div>
                  <div className="text-xs sm:text-sm uppercase tracking-wider font-medium font-[Inter]">Years</div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AssociatedDevelopers;


