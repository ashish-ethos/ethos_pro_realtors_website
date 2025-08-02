import React, { useState, useEffect } from "react";
import { Button } from "antd";
import { RiBuilding2Line, RiMapPin2Line, RiLineChartLine, RiArrowRightLine } from "react-icons/ri";
import AdvancedPropertySearch from './AdvancedPropertySearch';
import DLFCamellias from "../../assets/images/premiumproperties/dlfthecamilias.jpg";
import ElanTheEmperor from "../../assets/images/premiumproperties/Elan-The-Emperor.jpg";
import KrisumiWaterfall from "../../assets/images/premiumproperties/krisumiwaterfall.jpg";
import TrinitySkyPlazao from "../../assets/images/premiumproperties/skyplazzo.jpg";
import M3Mmansion from "../../assets/images/premiumproperties/m3mmansion.jpg";
import AIPLAutograph from "../../assets/images/exploreproperties/aipl-autograph.jpg";
import CentralPark from "../../assets/images/exploreproperties/central-park.jpg";
import AIPLBusiness from "../../assets/images/exploreproperties/aipl-bussiness.jpg";
import ReachAriaMall from "../../assets/images/exploreproperties/aria-mall.jpg";
import TrumpTower from "../../assets/images/exploreproperties/trump-tower.jpg";
import PioneerUrban from "../../assets/images/exploreproperties/pioneer-urban.jpg";
import PioneerAraya from "../../assets/images/exploreproperties/pioner-araya.jpg";

function DifferentCities() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [open, setOpen] = useState(false);
  const [size] = useState("large");

  // Dynamic location state
  const [countryId, setCountryId] = useState([]);
  const [stateId, setStateId] = useState([]);
  const [cityId, setCityId] = useState([]);

  // Filter state
  const [area, setArea] = useState([]);
  const [status, setStatus] = useState([]);
  const [type, setType] = useState([]);
  const [bedrooms, setBedrooms] = useState([]);
  const [bathrooms, setBathrooms] = useState([]);
  const [minArea, setMinArea] = useState(0);
  const [maxArea, setMaxArea] = useState(10000);
  const [label, setLabel] = useState([]);
  const [yearBuilt, setYearBuilt] = useState([]);
  const [priceRange, setPriceRange] = useState([1000000, 1000000000]);

  // Property data with images and complete fields
  const [properties] = useState([
    {
      id: 1,
      name: "AIPL Autograph",
      location: "AIPL Autograph Corporate Office Space, Sector 66, Gurgram, Haryana, India",
      area: "Sector 66, Gurgaon",
      areaValue: 5000,
      type: "Commercial",
      price: "₹5,00,00,000",
      priceValue: 500000000,
      status: "For Sale",
      featured: true,
      label: "featured",
      bedrooms: null,
      bathrooms: null,
      yearBuilt: 2021,
      image: AIPLAutograph,
      countryId: 101,
      stateId: 4030,
      cityId: 57510,
    },
    {
      id: 2,
      name: "Central Park Flower Valley The Room",
      location: "The Room, Central Park II, Sector 48, Gurgram, Haryana, India",
      area: "Sector 48, Gurgaon",
      areaValue: 1500,
      type: "Apartment",
      price: "₹1,50,00,000",
      priceValue: 150000000,
      status: "For Rent",
      featured: false,
      label: null,
      bedrooms: 2,
      bathrooms: 2,
      yearBuilt: 2020,
      image: CentralPark,
      countryId: 101,
      stateId: 4030,
      cityId: 57510,
    },
    {
      id: 3,
      name: "AIPL Business Club",
      location: "AIPL Business Club, Sector 62, Gurgram, Haryana, India",
      area: "Sector 62, Gurgaon",
      areaValue: 4000,
      type: "Commercial",
      price: "₹4,00,00,000",
      priceValue: 400000000,
      status: "For Sale",
      featured: true,
      label: "featured",
      bedrooms: null,
      bathrooms: null,
      yearBuilt: 2022,
      image: AIPLBusiness,
      countryId: 101,
      stateId: 4030,
      cityId: 57510,
    },
    {
      id: 4,
      name: "M3M Antalya Hills",
      location: "M3M Antalya Hills, Sector 79, Gurgram, Haryana, India",
      area: "Sector 79, Gurgaon",
      areaValue: 1642,
      type: "Apartment",
      price: "₹1,80,00,000",
      priceValue: 180000000,
      status: "Hot Offer",
      featured: true,
      label: "featured",
      bedrooms: 3,
      bathrooms: 3,
      yearBuilt: 2021,
      image: M3Mmansion,
      countryId: 101,
      stateId: 4030,
      cityId: 57510,
    },
    {
      id: 5,
      name: "DLF The Arbour",
      location: "DLF, Sector 63, Gurgram, Haryana, India",
      area: "Sector 63, Gurgaon",
      areaValue: 3956,
      type: "Apartment",
      price: "₹3,50,00,000",
      priceValue: 350000000,
      status: "For Sale",
      featured: false,
      label: null,
      bedrooms: 4,
      bathrooms: 4,
      yearBuilt: 2022,
      image: DLFCamellias,
      countryId: 101,
      stateId: 4030,
      cityId: 57510,
    },
    {
      id: 6,
      name: "Reach Aria Mall",
      location: "Aria Mall, Sector 68, Gurgram, Haryana, India",
      area: "Sector 68, Gurgaon",
      areaValue: 8000,
      type: "Commercial",
      price: "₹6,00,00,000",
      priceValue: 600000000,
      status: "Hot Offer",
      featured: true,
      label: "featured",
      bedrooms: null,
      bathrooms: null,
      yearBuilt: 2020,
      image: ReachAriaMall,
      countryId: 101,
      stateId: 4030,
      cityId: 57510,
    },
    {
      id: 7,
      name: "Elan The Mark",
      location: "Elan The Mark, Block R, New Palam Vihar Phase 1, Sector 106, Gurgram, Pawala Khusrupur, Haryana, India",
      area: "Sector 106, Gurgaon",
      areaValue: 2200,
      type: "Commercial",
      price: "₹2,50,00,000",
      priceValue: 250000000,
      status: "For Sale",
      featured: false,
      label: null,
      bedrooms: null,
      bathrooms: null,
      yearBuilt: 2021,
      image: ElanTheEmperor,
      countryId: 101,
      stateId: 4030,
      cityId: 57510,
    },
    {
      id: 8,
      name: "Elan Epic Mall",
      location: "Elan Epic Mall, Sector 70, Gurgram, Haryana, India",
      area: "Sector 70, Gurgaon",
      areaValue: 1609,
      type: "Commercial",
      price: "₹2,00,00,000",
      priceValue: 200000000,
      status: "Hot Offer",
      featured: true,
      label: "featured",
      bedrooms: null,
      bathrooms: null,
      yearBuilt: 2022,
      image: ElanTheEmperor,
      countryId: 101,
      stateId: 4030,
      cityId: 57510,
    },
    {
      id: 9,
      name: "Trump Towers",
      location: "Trump Tower, Golf Course Extension Road, Sector 65, Gurgram, Haryana, India",
      area: "Sector 65, Gurgaon",
      areaValue: 6050,
      type: "Apartment",
      price: "₹5,50,00,000",
      priceValue: 550000000,
      status: "For Sale",
      featured: false,
      label: null,
      bedrooms: 4,
      bathrooms: 4,
      yearBuilt: 2021,
      image: TrumpTower,
      countryId: 101,
      stateId: 4030,
      cityId: 57510,
    },
    {
      id: 10,
      name: "Pioneer Urban Presidia",
      location: "Pioneer Presidia, Sector 62, Gurgram, Ghata, Haryana",
      area: "Sector 62, Gurgaon",
      areaValue: 6159,
      type: "Apartment",
      price: "₹4,50,00,000",
      priceValue: 450000000,
      status: "For Sale",
      featured: true,
      label: "featured",
      bedrooms: 4,
      bathrooms: 4,
      yearBuilt: 2020,
      image: PioneerUrban,
      countryId: 101,
      stateId: 4030,
      cityId: 57510,
    },
    {
      id: 11,
      name: "Pioneer Araya",
      location: "Pioneer Araya, Tower D, Pioneer, Haryana, India",
      area: "Sector 62, Gurgaon",
      areaValue: 10019,
      type: "Apartment",
      price: "₹7,00,00,000",
      priceValue: 700000000,
      status: "Ready to Move",
      featured: false,
      label: null,
      bedrooms: 5,
      bathrooms: 5,
      yearBuilt: 2019,
      image: PioneerAraya,
      countryId: 101,
      stateId: 4030,
      cityId: 57510,
    },
    {
      id: 12,
      name: "Sobha International City",
      location: "Sobha International City, Dwarka Expressway, Sector 109, Gurgram, Haryana, India",
      area: "Sector 109, Gurgaon",
      areaValue: 7330,
      type: "Villa",
      price: "₹6,50,00,000",
      priceValue: 650000000,
      status: "Hot Offer",
      featured: true,
      label: "featured",
      bedrooms: 5,
      bathrooms: 5,
      yearBuilt: 2021,
      image: KrisumiWaterfall,
      countryId: 101,
      stateId: 4030,
      cityId: 57510,
    },
    {
      id: 13,
      name: "M3M Golf Estate",
      location: "M3M Golfestate, Golf Course Extension Road, Sector 65, Gurgram, Haryana, India",
      area: "Sector 65, Gurgaon",
      areaValue: 13343,
      type: "Apartment",
      price: "₹8,00,00,000",
      priceValue: 800000000,
      status: "Hot Offer",
      featured: false,
      label: null,
      bedrooms: 5,
      bathrooms: 5,
      yearBuilt: 2022,
      image: M3Mmansion,
      countryId: 101,
      stateId: 4030,
      cityId: 57510,
    },
    {
      id: 14,
      name: "Cygnett Retreat",
      location: "Pahadi Kothi, Bagar Road, Pangoot, Uttarakhand, India",
      area: "Pangoot, Uttarakhand",
      areaValue: 800,
      type: "Villa",
      price: "₹1,20,00,000",
      priceValue: 120000000,
      status: "Hot Offer",
      featured: true,
      label: "featured",
      bedrooms: 3,
      bathrooms: 2,
      yearBuilt: 2020,
      image: TrinitySkyPlazao,
      countryId: 101,
      stateId: 4047,
      cityId: 57650,
    },
    {
      id: 15,
      name: "Elan The Presidential",
      location: "Elan The Presidential, Northern Peripheral Road, Panwala Khusropur, Sector 106, Gurgram, Haryana, India",
      area: "Sector 106, Gurgaon",
      areaValue: 4100,
      type: "Apartment",
      price: "₹3,80,00,000",
      priceValue: 380000000,
      status: "Hot Offer",
      featured: false,
      label: null,
      bedrooms: 4,
      bathrooms: 4,
      yearBuilt: 2022,
      image: ElanTheEmperor,
      countryId: 101,
      stateId: 4030,
      cityId: 57510,
    },
  ]);

  // Featured cities data
  const featuredCities = [
    { name: "Mumbai", growth: "+18%", icon: "🏙️" },
    { name: "Gurgaon", growth: "+22%", icon: "🏢" },
    { name: "Bangalore", growth: "+15%", icon: "🌆" },
    { name: "Delhi", growth: "+20%", icon: "🏛️" },
  ];

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const handlePriceChange = (value) => {
    setPriceRange(value);
  };

  const handleClearFilters = () => {
    setCountryId([]);
    setStateId([]);
    setCityId([]);
    setArea([]);
    setStatus([]);
    setType([]);
    setBedrooms([]);
    setBathrooms([]);
    setMinArea(0);
    setMaxArea(10000);
    setLabel([]);
    setYearBuilt([]);
    setPriceRange([1000000, 1000000000]);
  };

  return (
    <div className="relative h-auto overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black py-4 sm:py-8" id="different-cities">
      <style>
        {`
          .custom-select .ant-select-selector {
            background-color: #e5e7eb !important;
            border-color: #d1d5db !important;
            color: #374151 !important;
            height: 40px !important;
            display: flex;
            align-items: center;
          }
          .custom-select .ant-select-selection-placeholder {
            color: #9ca3af !important;
          }
          .custom-select .ant-select-arrow {
            color: #374151 !important;
          }
          .light-drawer .ant-drawer-content {
            background-color: #ffffff !important;
          }
          .light-drawer .ant-drawer-header {
            background-color: #f9fafb !important;
            border-bottom: 1px solid #e5e7eb !important;
          }
          .ant-slider-track {
            background-color: #eab308 !important;
          }
          .ant-slider-handle {
            border-color: #eab308 !important;
          }
          @keyframes shine {
            0% { left: -75%; }
            100% { left: 150%; }
          }
        `}
      </style>

      {/* Dynamic background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-yellow-600/10 to-amber-600/10 animate-pulse"></div>
        <div
          className="absolute w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-r from-yellow-500/10 to-amber-500/10 rounded-full blur-3xl transition-all duration-1000"
          style={{
            left: `${mousePosition.x / 10}px`,
            top: `${mousePosition.y / 10}px`,
          }}
        ></div>
        <div className="absolute bottom-0 right-0 w-80 sm:w-[600px] h-80 sm:h-[600px] bg-gradient-to-l from-amber-500/10 to-yellow-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Cityscape silhouette */}
      <div className="absolute bottom-0 left-0 w-full h-24 sm:h-32 bg-gradient-to-t from-black/30 to-transparent">
        <div className="absolute bottom-0 left-0 w-full h-16 sm:h-20 bg-gradient-to-r from-transparent via-yellow-400/5 to-transparent"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 sm:w-2 h-1 sm:h-2 bg-yellow-400/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Main content container */}
      <div className="relative z-10 h-auto py-4 sm:py-8 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-full sm:max-w-5xl mx-auto text-center">
          {/* Decorative top element */}
          <div className={`inline-flex items-center gap-2 mb-6 sm:mb-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <div className="w-8 sm:w-12 h-0.5 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
            <RiBuilding2Line className="text-yellow-400 animate-pulse" size={16} sm={20} />
            <div className="w-8 sm:w-12 h-0.5 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
          </div>

          {/* Main heading */}
          <h1 className={`text-3xl sm:text-5xl lg:text-7xl font-black mb-6 sm:mb-8 transition-all duration-1200 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <span className="bg-gradient-to-r from-white via-yellow-200 to-yellow-400 bg-clip-text text-transparent animate-pulse">
              Popular Places
            </span>
            <br />
            <span className="bg-gradient-to-r from-yellow-400 via-amber-300 to-white bg-clip-text text-transparent">
              to Invest
            </span>
          </h1>

          {/* Subtitle */}
          <div className={`max-w-full sm:max-w-4xl mx-auto mb-8 sm:mb-12 transition-all duration-1000 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            <div className="bg-black/20 backdrop-blur-md rounded-2xl p-4 sm:p-8 shadow-2xl border border-yellow-400/20">
              <p className="text-sm sm:text-lg text-gray-200 leading-relaxed font-light">
                Discover premium real estate opportunities with
                <span className="text-yellow-400 font-medium"> Ethos Pro Realtors</span>.
                Whether you're seeking a
                <span className="text-yellow-400 font-medium"> luxury residence </span>
                or a
                <span className="text-yellow-400 font-medium"> prime commercial investment</span>,
                our expertise guides you to the most sought-after locations in India's top cities.
              </p>
            </div>
          </div>

          {/* Featured cities carousel */}
          <div className={`mb-8 sm:mb-12 transition-all duration-1000 delay-600 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-6 sm:mb-8">
              {featuredCities.map((city, index) => (
                <div
                  key={city.name}
                  className="group bg-black/20 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-yellow-400/20 hover:bg-black/30 hover:border-yellow-400/40 transition-all duration-300 hover:scale-105 hover:shadow-xl w-full sm:w-auto"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="flex items-center gap-2 sm:gap-3">
                    <span className="text-xl sm:text-2xl">{city.icon}</span>
                    <div>
                      <div className="text-white font-semibold text-xs sm:text-sm">{city.name}</div>
                      <div className="flex items-center gap-1 text-yellow-400 text-[10px] sm:text-xs">
                        <RiLineChartLine size={10} sm={12} />
                        {city.growth}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Call-to-action button with Drawer trigger */}
          <div className={`transition-all duration-1000 delay-800 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <button
              onClick={showDrawer}
              className="group relative inline-flex items-center gap-3 sm:gap-4 px-8 sm:px-12 py-3 sm:py-4 bg-transparent border-2 border-yellow-300 text-gray-300 font-bold text-sm sm:text-lg rounded-2xl shadow-2xl overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-[inset_0_0_12px_rgba(255,255,255,0.1),0_0_20px_rgba(234,179,8,0.4)] hover:border-yellow-400"
            >
              <span className="absolute left-[-75%] top-0 w-[50%] h-full bg-gradient-to-r from-transparent via-white/30 to-transparent rotate-12 group-hover:animate-[shine_1.2s_ease-in-out_forwards] pointer-events-none"></span>
              <div className="relative z-10 flex items-center gap-3 sm:gap-4 text-gray-100 group-hover:text-yellow-100 transition-colors duration-300">
                <RiMapPin2Line className="group-hover:scale-125 group-hover:text-yellow-300 transition-transform duration-300" size={16} sm={20} />
                <span className="tracking-wide cursor-pointer group-hover:text-yellow-200 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all duration-300">
                  Explore Properties by Cities
                </span>
                <RiArrowRightLine className="group-hover:translate-x-2 group-hover:rotate-12 text-yellow-300 transition-all duration-300" size={16} sm={20} />
              </div>
              <div className="absolute inset-0 rounded-2xl pointer-events-none ring-0 group-hover:ring-2 ring-yellow-400/50 transition duration-500"></div>
            </button>

            {/* Secondary CTA */}
            <div className="mt-4 sm:mt-6">
              <button className="text-gray-300 hover:text-yellow-400 font-medium text-xs sm:text-sm underline decoration-yellow-400 underline-offset-4 hover:decoration-2 transition-all duration-300 hover:drop-shadow-[0_0_6px_rgba(234,179,8,0.7)]">
                Download Investment Guide
              </button>
            </div>
          </div>
        </div>
      </div>

      <AdvancedPropertySearch
        open={open}
        onClose={onClose}
        countryId={countryId}
        setCountryId={setCountryId}
        stateId={stateId}
        setStateId={setStateId}
        cityId={cityId}
        setCityId={setCityId}
        area={area}
        setArea={setArea}
        status={status}
        setStatus={setStatus}
        type={type}
        setType={setType}
        bedrooms={bedrooms}
        setBedrooms={setBedrooms}
        bathrooms={bathrooms}
        setBathrooms={setBathrooms}
        minArea={minArea}
        setMinArea={setMinArea}
        maxArea={maxArea}
        setMaxArea={setMaxArea}
        label={label}
        setLabel={setLabel}
        yearBuilt={yearBuilt}
        setYearBuilt={setYearBuilt}
        priceRange={priceRange}
        handlePriceChange={handlePriceChange}
        handleClearFilters={handleClearFilters}
        properties={properties}
      />
    </div>
  );
}

export default DifferentCities;