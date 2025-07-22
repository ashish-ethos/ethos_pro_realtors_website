import React, { useState, useEffect } from "react";
import { Button } from "antd";
import { RiBuilding2Line, RiMapPin2Line, RiLineChartLine, RiArrowRightLine } from "react-icons/ri";
import AdvancedPropertySearch from './AdvancedPropertySearch';

function DifferentCities() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [open, setOpen] = useState(false);
  const [size, setSize] = useState("large");

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
  const [priceRange, setPriceRange] = useState([3000000, 600000000]);

  // Property data (updated with image content)
  const [properties, setProperties] = useState([
    {
      id: 1,
      name: "AIPL Autograph",
      location: "AIPL Autograph Corporate Office Space, Sector 66, Gurgram, Haryana, India",
      area: "Food Court, Office, Shop, Commercial",
      type: "Office, Commercial",
      price: "",
      status: "For Rent, For Sale",
      featured: true,
      countryId: 101,
      stateId: 4030,
      cityId: 57510,
    },
    {
      id: 2,
      name: "Central Park Flower Valley The Room",
      location: "The Room, Central Park II, Sector 48, Gurgram, Haryana, India",
      area: "Apartment, Studio, Residential",
      type: "Apartment, Residential",
      price: "",
      status: "For Rent, For Sale",
      featured: false,
      countryId: 101,
      stateId: 4030,
      cityId: 57510,
    },
    {
      id: 3,
      name: "AIPL Business Club",
      location: "AIPL Business Club, Sector 62, Gurgram, Haryana, India",
      area: "Office, Commercial",
      type: "Office, Commercial",
      price: "",
      status: "For Rent, For Sale",
      featured: true,
      countryId: 101,
      stateId: 4030,
      cityId: 57510,
    },
    {
      id: 4,
      name: "M3M Antalya Hills",
      location: "M3M Antalya Hills, Sector 79, Gurgram, Haryana, India",
      area: "1138 - 1642 Sq Ft",
      type: "Apartment, Residential",
      price: "",
      status: "For Rent, For Sale, Hot Offer",
      featured: true,
      countryId: 101,
      stateId: 4030,
      cityId: 57510,
    },
    {
      id: 5,
      name: "DLF The Arbour",
      location: "DLF, Sector 63, Gurgram, Haryana, India",
      area: "3800 - 3956 Sq Ft",
      type: "Apartment, Residential",
      price: "",
      status: "For Rent, For Sale, Hot Offer",
      featured: false,
      countryId: 101,
      stateId: 4030,
      cityId: 57510,
    },
    {
      id: 6,
      name: "Reach Aria Mall",
      location: "Aria Mall, Sector 68, Gurgram, Haryana, India",
      area: "300 - 8000 Sq Ft",
      type: "Shop, Commercial",
      price: "",
      status: "For Rent, For Sale, Hot Offer",
      featured: true,
      countryId: 101,
      stateId: 4030,
      cityId: 57510,
    },
    {
      id: 7,
      name: "Elan The Mark",
      location: "Elan The Mark, Block R, New Palam Vihar Phase 1, Sector 106, Gurgram, Pawala Khusrupur, Haryana, India",
      area: "500 - 2200 Sq Ft",
      type: "Shop, Commercial",
      price: "",
      status: "For Rent, For Sale, Hot Offer",
      featured: false,
      countryId: 101,
      stateId: 4030,
      cityId: 57510,
    },
    {
      id: 8,
      name: "Elan Epic Mall",
      location: "Elan Epic Mall, Sector 70, Gurgram, Haryana, India",
      area: "250 - 1609 Sq Ft",
      type: "Shop, Commercial",
      price: "",
      status: "For Rent, For Sale, Hot Offer",
      featured: true,
      countryId: 101,
      stateId: 4030,
      cityId: 57510,
    },
    {
      id: 9,
      name: "Trump Towers",
      location: "Trump Tower, Golf Course Extension Road, Sector 65, Gurgram, Haryana, India",
      area: "3525 - 6050 Sq Ft",
      type: "Apartment, Residential",
      price: "",
      status: "For Rent, For Sale, Hot Offer",
      featured: false,
      countryId: 101,
      stateId: 4030,
      cityId: 57510,
    },
    {
      id: 10,
      name: "Pioneer Urban Presidia",
      location: "Pioneer Presidia, Sector 62, Gurgram, Ghata, Haryana",
      area: "2279 - 6159 Sq Ft",
      type: "Apartment, Residential",
      price: "",
      status: "For Rent, For Sale",
      featured: true,
      countryId: 101,
      stateId: 4030,
      cityId: 57510,
    },
    {
      id: 11,
      name: "Pioneer Araya",
      location: "Pioneer Araya, Tower D, Pioneer, Haryana, India",
      area: "3498 - 10019 Sq Ft",
      type: "Apartment, Residential",
      price: "",
      status: "Ready to Move",
      featured: false,
      countryId: 101,
      stateId: 4030,
      cityId: 57510,
    },
    {
      id: 12,
      name: "Sobha International City",
      location: "Sobha International City, Dwarka Expressway, Sector 109, Gurgram, Haryana, India",
      area: "3155 - 7330 Sq Ft",
      type: "Villa, Residential",
      price: "",
      status: "For Rent, For Sale, Hot Offer",
      featured: true,
      countryId: 101,
      stateId: 4030,
      cityId: 57510,
    },
    {
      id: 13,
      name: "M3M Golf Estate",
      location: "M3M Golfestate, Golf Course Extension Road, Sector 65, Gurgram, Haryana, India",
      area: "2124 - 13343 Sq Ft",
      type: "Apartment, Residential",
      price: "",
      status: "For Rent, For Sale, Hot Offer",
      featured: false,
      countryId: 101,
      stateId: 4030,
      cityId: 57510,
    },
    {
      id: 14,
      name: "Cygnett Retreat",
      location: "Pahadi Kothi, Bagar Road, Pangoot, Uttarakhand, India",
      area: "800 Sq Ft",
      type: "Villa, Commercial",
      price: "",
      status: "For Rent, For Sale, Hot Offer",
      featured: true,
      countryId: 101,
      stateId: 4047,
      cityId: 57650,
    },
    {
      id: 15,
      name: "Elan The Presidential",
      location: "Elan The Presidential, Northern Peripheral Road, Panwala Khusropur, Sector 106, Gurgram, Haryana, India",
      area: "1347 - 4100 Sq Ft",
      type: "Apartment, Residential",
      price: "",
      status: "For Rent, For Sale, Hot Offer",
      featured: false,
      countryId: 101,
      stateId: 4030,
      cityId: 57510,
    },
  ]);

  // Store original properties for reset
  const [originalProperties] = useState([...properties]);

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
    setSize("large");
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const handleSearch = () => {
    const filteredProperties = originalProperties.filter((prop) => {
      const matchesCountry = !countryId.length || countryId.includes(prop.countryId.toString());
      const matchesState = !stateId.length || stateId.includes(prop.stateId.toString());
      const matchesCity = !cityId.length || cityId.includes(prop.cityId.toString());
      const matchesArea = !area.length || area.some((a) => prop.location.toLowerCase().includes(a.toLowerCase()));
      const matchesStatus = !status.length || status.includes(prop.status);
      const matchesType = !type.length || type.some((t) => prop.type.toLowerCase().includes(t.toLowerCase()));
      const matchesBedrooms = !bedrooms.length || bedrooms.some((b) => prop.bedrooms.includes(b));
      const matchesBathrooms = !bathrooms.length || bathrooms.some((b) => prop.bathrooms.includes(b));
      
      // Parse area range for filtering
      const areaNumbers = prop.area.match(/\d+/g);
      const propMinArea = areaNumbers ? parseInt(areaNumbers[0]) : 0;
      const propMaxArea = areaNumbers ? parseInt(areaNumbers[1] || areaNumbers[0]) : 10000;

      const matchesMinArea = !minArea || propMinArea >= minArea;
      const matchesMaxArea = !maxArea || propMaxArea <= maxArea;
      const matchesLabel = !label.length || (label.includes("featured") && prop.featured);
      const matchesYear = !yearBuilt.length || yearBuilt.includes(prop.yearBuilt.toString());

      // Parse price for filtering
      const propPrice = parseInt(prop.price.replace(/[^0-9]/g, ""));
      const matchesPrice = propPrice >= priceRange[0] && propPrice <= priceRange[1];

      return (
        matchesCountry &&
        matchesState &&
        matchesCity &&
        matchesArea &&
        matchesStatus &&
        matchesType &&
        matchesBedrooms &&
        matchesBathrooms &&
        matchesMinArea &&
        matchesMaxArea &&
        matchesLabel &&
        matchesYear &&
        matchesPrice
      );
    });
    setProperties(filteredProperties);
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
    setPriceRange([3000000, 600000000]);
    setProperties(originalProperties);
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <style>
        {`
          .custom-select .ant-select-selector {
            background-color: #e5e7eb !important;
            border-color: #d1d5db !important;
            color: #374151 !important;
            height: 44px !important;
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
          className="absolute w-96 h-96 bg-gradient-to-r from-yellow-500/10 to-amber-500/10 rounded-full blur-3xl transition-all duration-1000"
          style={{
            left: `${mousePosition.x / 10}px`,
            top: `${mousePosition.y / 10}px`,
          }}
        ></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-l from-amber-500/10 to-yellow-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Cityscape silhouette */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/30 to-transparent">
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-r from-transparent via-yellow-400/5 to-transparent"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-yellow-400/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Main content container */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          {/* Decorative top element */}
          <div className={`inline-flex items-center gap-2 mb-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
            <RiBuilding2Line className="text-yellow-400 animate-pulse" size={20} />
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
          </div>

          {/* Main heading */}
          <h1 className={`text-5xl sm:text-6xl lg:text-7xl font-black mb-8 transition-all duration-1200 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <span className="bg-gradient-to-r from-white via-yellow-200 to-yellow-400 bg-clip-text text-transparent animate-pulse">
              Popular Places
            </span>
            <br />
            <span className="bg-gradient-to-r from-yellow-400 via-amber-300 to-white bg-clip-text text-transparent">
              to Invest
            </span>
          </h1>

          {/* Subtitle */}
          <div className={`max-w-4xl mx-auto mb-12 transition-all duration-1000 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            <div className="bg-black/20 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-yellow-400/20">
              <p className="text-lg sm:text-xl text-gray-200 leading-relaxed font-light">
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
          <div className={`mb-12 transition-all duration-1000 delay-600 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {featuredCities.map((city, index) => (
                <div
                  key={city.name}
                  className="group bg-black/20 backdrop-blur-sm rounded-xl p-4 border border-yellow-400/20 hover:bg-black/30 hover:border-yellow-400/40 transition-all duration-300 hover:scale-105 hover:shadow-xl"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{city.icon}</span>
                    <div>
                      <div className="text-white font-semibold text-sm">{city.name}</div>
                      <div className="flex items-center gap-1 text-yellow-400 text-xs">
                        <RiLineChartLine size={12} />
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
              className="group relative inline-flex items-center gap-4 px-12 py-4 bg-transparent border-2 border-yellow-300 text-gray-300 font-bold text-lg rounded-2xl shadow-2xl overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-[inset_0_0_12px_rgba(255,255,255,0.1),0_0_20px_rgba(234,179,8,0.4)] hover:border-yellow-400"
            >
              <span className="absolute left-[-75%] top-0 w-[50%] h-full bg-gradient-to-r from-transparent via-white/30 to-transparent rotate-12 group-hover:animate-[shine_1.2s_ease-in-out_forwards] pointer-events-none"></span>
              <div className="relative z-10 flex items-center gap-4 text-gray-100 group-hover:text-yellow-100 transition-colors duration-300">
                <RiMapPin2Line className="group-hover:scale-125 group-hover:text-yellow-300 transition-transform duration-300" size={20} />
                <span className="tracking-wide group-hover:text-yellow-200 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all duration-300">
                  Explore Properties by Cities
                </span>
                <RiArrowRightLine className="group-hover:translate-x-2 group-hover:rotate-12 text-yellow-300 transition-all duration-300" size={20} />
              </div>
              <div className="absolute inset-0 rounded-2xl pointer-events-none ring-0 group-hover:ring-2 ring-yellow-400/50 transition duration-500"></div>
            </button>

            {/* Secondary CTA */}
            <div className="mt-6">
              <button className="text-gray-300 hover:text-yellow-400 font-medium text-sm underline decoration-yellow-400 underline-offset-4 hover:decoration-2 transition-all duration-300 hover:drop-shadow-[0_0_6px_rgba(234,179,8,0.7)]">
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
        handleSearch={handleSearch}
        handleClearFilters={handleClearFilters}
        properties={properties}
      />
    </div>
  );
}

export default DifferentCities;