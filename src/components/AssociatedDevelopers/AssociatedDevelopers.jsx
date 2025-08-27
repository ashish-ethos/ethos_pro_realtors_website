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
    { id: 1, name: 'M3M', src: M3M, color: 'from-blue-500 to-cyan-400', shadow: 'shadow-blue-200' },
    { id: 2, name: 'Elan', src: Elan, color: 'from-emerald-500 to-teal-400', shadow: 'shadow-emerald-200' },
    { id: 3, name: 'Omaxe', src: Omaxe, color: 'from-orange-500 to-amber-400', shadow: 'shadow-orange-200' },
    { id: 4, name: 'DLF', src: DLF, color: 'from-purple-500 to-violet-400', shadow: 'shadow-purple-200' },
    { id: 5, name: 'Godrej', src: Godrej, color: 'from-green-500 to-emerald-400', shadow: 'shadow-green-200' },
    { id: 6, name: 'Trinity', src: Trinity, color: 'from-red-500 to-pink-400', shadow: 'shadow-red-200' },
    { id: 7, name: 'Signature Global', src: Signature, color: 'from-indigo-500 to-blue-400', shadow: 'shadow-indigo-200' },
    { id: 8, name: 'Max Estates', src: Max, color: 'from-yellow-500 to-orange-400', shadow: 'shadow-yellow-200' },
    { id: 9, name: 'Smartworld', src: Smartworld, color: 'from-pink-500 to-rose-400', shadow: 'shadow-pink-200' },
    { id: 10, name: 'Trump Towers', src: TrumpTower, color: 'from-slate-600 to-gray-500', shadow: 'shadow-slate-200' },
    { id: 11, name: 'Unitech', src: Unitech, color: 'from-red-500 to-pink-400', shadow: 'shadow-red-200' },
    { id: 12, name: 'Adani', src: Adani, color: 'from-indigo-500 to-blue-400', shadow: 'shadow-indigo-200' },
    { id: 13, name: 'Shapoorji', src: Shapoorji, color: 'from-yellow-500 to-orange-400', shadow: 'shadow-yellow-200' },
    { id: 14, name: 'IndiaBull', src: IndiaBull, color: 'from-pink-500 to-rose-400', shadow: 'shadow-pink-200' },
    { id: 15, name: 'Bptp', src: Bptp, color: 'from-slate-600 to-gray-500', shadow: 'shadow-slate-200' },
    { id: 16, name: 'Emaar', src: Emaar, color: 'from-yellow-500 to-orange-400', shadow: 'shadow-yellow-200' },
    { id: 17, name: 'Sobha', src: Sobha, color: 'from-pink-500 to-rose-400', shadow: 'shadow-pink-200' },
    { id: 18, name: 'AtsEstate', src: AtsEstate, color: 'from-slate-600 to-gray-500', shadow: 'shadow-slate-200' },
  ];

  const duplicatedLogos = [...developerLogos, ...developerLogos, ...developerLogos];

  return (
    <div className="relative py-6 sm:py-10 bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-hidden" id='associated-developers'>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-48 sm:w-96 h-48 sm:h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-48 sm:w-96 h-48 sm:h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/4 left-1/2 w-48 sm:w-96 h-48 sm:h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Geometric Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center">
          <div className="inline-block relative mb-4 sm:mb-6">
            <h2 className="text-2xl sm:text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-800 via-slate-600 to-slate-800 tracking-tight">
              Associated Developers
            </h2>
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent rounded-full"></div>
          </div>
          <div className="mt-4 flex justify-center space-x-2">
            <div className="w-2 h-2 rounded-full bg-blue-500 animate-bounce"></div>
            <div className="w-2 h-2 rounded-full bg-purple-500 animate-bounce" style={{animationDelay: '0.1s'}}></div>
            <div className="w-2 h-2 rounded-full bg-pink-500 animate-bounce" style={{animationDelay: '0.2s'}}></div>
          </div>
        </div>

        {/* Floating Logos Container */}
        <div className="relative h-48 sm:h-70 overflow-hidden">
          {/* Main Layer */}
          <div className="absolute inset-0 flex items-center">
            <div className="flex animate-float-right space-x-8 sm:space-x-16 min-w-max">
              {duplicatedLogos.map((logo, index) => (
                <div
                  key={`top-${logo.id}-${index}`}
                  className="flex-shrink-0 group relative"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  {/* Glow Effect */}
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${logo.color} opacity-0 group-hover:opacity-20 blur-2xl transition-all duration-700 scale-150`}></div>
                  
                  {/* Logo Container */}
                  <div className={`relative w-32 sm:w-44 h-20 sm:h-28 bg-white/80 backdrop-blur-sm rounded-3xl border-2 border-gray-200/50 hover:border-white transition-all duration-500 group-hover:scale-110 group-hover:rotate-1 flex items-center justify-center overflow-hidden ${logo.shadow} group-hover:shadow-2xl`}>
                    
                    {/* Animated Gradient Border */}
                    <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${logo.color} opacity-0 group-hover:opacity-10 transition-all duration-500`}></div>
                    
                    {/* Inner Glow */}
                    <div className="absolute inset-1 rounded-3xl bg-gradient-to-br from-white/50 to-gray-50/30 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                    
                    {/* Logo Container */}
                    <div className="relative z-10 p-4 sm:p-6 w-full h-full flex items-center justify-center">
                      <img
                        src={logo.src}
                        alt={logo.name}
                        className="max-w-full max-h-full object-contain transition-all duration-700 group-hover:scale-110 drop-shadow-lg filter contrast-125 group-hover:contrast-100"
                      />
                    </div>
                    
                    {/* Shimmer Effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-1000">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 animate-shimmer"></div>
                    </div>
                  </div>
                  
                  {/* Floating Elements */}
                  <div className={`absolute -top-3 -right-3 w-4 h-4 bg-gradient-to-r ${logo.color} rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-all duration-500`}></div>
                  <div className={`absolute -bottom-3 -left-3 w-3 h-3 bg-gradient-to-r ${logo.color} rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-all duration-500`} style={{animationDelay: '0.5s'}}></div>
                </div>
              ))}
            </div>
          </div>

          {/* Secondary Layer */}
          <div className="absolute inset-0 flex items-center translate-y-12 sm:translate-y-20">
            <div className="flex animate-float-left space-x-10 sm:space-x-20 min-w-max">
              {duplicatedLogos.slice().reverse().map((logo, index) => (
                <div
                  key={`bottom-${logo.id}-${index}`}
                  className="flex-shrink-0 group relative opacity-40 hover:opacity-100 transition-all duration-500"
                  style={{animationDelay: `${index * 0.10}s`}}
                >
                  <div className="w-24 sm:w-36 h-16 sm:h-24 bg-white/60 backdrop-blur-sm rounded-2xl border border-gray-200/40 hover:border-gray-300/60 transition-all duration-500 group-hover:scale-105 group-hover:-rotate-1 flex items-center justify-center shadow-lg hover:shadow-xl">
                    <img
                      src={logo.src}
                      alt={logo.name}
                      className="max-w-full max-h-full object-contain opacity-70 group-hover:opacity-100 transition-all duration-500 filter contrast-110"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Edge Gradients */}
          <div className="absolute left-0 top-0 w-20 sm:w-40 h-full bg-gradient-to-r from-gray-50 via-white/80 to-transparent z-20"></div>
          <div className="absolute right-0 top-0 w-20 sm:w-40 h-full bg-gradient-to-l from-gray-50 via-white/80 to-transparent z-20"></div>
        </div>

        {/* Bottom Stats with Enhanced Styling */}
        <div className="mt-12 sm:mt-20">
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