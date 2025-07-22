import React, { useState, useEffect } from "react";
import { Button, Drawer, Space, Slider, Select, InputNumber } from "antd";
import { RiBuilding2Line, RiMapPin2Line, RiLineChartLine, RiArrowRightLine } from "react-icons/ri";
import {
  CountrySelect,
  StateSelect,
  CitySelect,
} from "react-country-state-city";
import "react-country-state-city/dist/react-country-state-city.css";

const { Option } = Select;

function DifferentCities() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [open, setOpen] = useState(false);
  const [size, setSize] = useState("large");

  // Dynamic location state
  const [countryId, setCountryId] = useState(0);
  const [stateId, setStateId] = useState(0);
  const [cityId, setCityId] = useState(0);

  // Filter state
  const [area, setArea] = useState("");
  const [status, setStatus] = useState("");
  const [type, setType] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [bathrooms, setBathrooms] = useState("");
  const [minArea, setMinArea] = useState(0);
  const [maxArea, setMaxArea] = useState(10000);
  const [label, setLabel] = useState("");
  const [yearBuilt, setYearBuilt] = useState("");
  const [priceRange, setPriceRange] = useState([3000000, 600000000]);

  // Property data (sample)
  const [properties, setProperties] = useState([
    {
      id: 1,
      name: "DLF The Crest",
      location: "Park Drive, DLF Phase 5, Sector 54, Gurgaon, Haryana, India",
      area: "2246 - 6221 Sq Ft",
      type: "Apartment, Residential",
      price: "₹50,000,000",
      status: "For Sale",
      featured: true,
      countryId: 101,
      stateId: 4030,
      cityId: 57510,
    },
    {
      id: 2,
      name: "Mumbai Towers",
      location: "Marine Drive, Mumbai, Maharashtra, India",
      area: "1800 - 4000 Sq Ft",
      type: "Apartment, Residential",
      price: "₹40,000,000",
      status: "For Rent",
      featured: false,
      countryId: 101,
      stateId: 4008,
      cityId: 57049,
    },
  ]);

  // Store original properties for reset
  const [originalProperties] = useState([
    {
      id: 1,
      name: "DLF The Crest",
      location: "Park Drive, DLF Phase 5, Sector 54, Gurgaon, Haryana, India",
      area: "2246 - 6221 Sq Ft",
      type: "Apartment, Residential",
      price: "₹50,000,000",
      status: "For Sale",
      featured: true,
      countryId: 101,
      stateId: 4030,
      cityId: 57510,
    },
    {
      id: 2,
      name: "Mumbai Towers",
      location: "Marine Drive, Mumbai, Maharashtra, India",
      area: "1800 - 4000 Sq Ft",
      type: "Apartment, Residential",
      price: "₹40,000,000",
      status: "For Rent",
      featured: false,
      countryId: 101,
      stateId: 4008,
      cityId: 57049,
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
    setSize("large");
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const handleSearch = () => {
    const filteredProperties = originalProperties.filter((prop) => {
      const matchesCountry = !countryId || prop.countryId === countryId;
      const matchesState = !stateId || prop.stateId === stateId;
      const matchesCity = !cityId || prop.cityId === cityId;
      const matchesArea = !area || prop.location.toLowerCase().includes(area.toLowerCase());
      const matchesStatus = !status || prop.status === status;
      const matchesType = !type || prop.type.toLowerCase().includes(type.toLowerCase());
      const matchesBedrooms = !bedrooms || true; // Add bedroom logic based on your data
      const matchesBathrooms = !bathrooms || true; // Add bathroom logic based on your data
      
      // Parse area range for filtering
      const areaNumbers = prop.area.match(/\d+/g);
      const propMinArea = areaNumbers ? parseInt(areaNumbers[0]) : 0;
      const propMaxArea = areaNumbers ? parseInt(areaNumbers[1] || areaNumbers[0]) : 10000;
      
      const matchesMinArea = !minArea || propMinArea >= minArea;
      const matchesMaxArea = !maxArea || propMaxArea <= maxArea;
      const matchesLabel = !label || (label === "featured" && prop.featured);
      const matchesYear = !yearBuilt || true; // Add year logic based on your data
      
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
    setCountryId(0);
    setStateId(0);
    setCityId(0);
    setArea("");
    setStatus("");
    setType("");
    setBedrooms("");
    setBathrooms("");
    setMinArea(0);
    setMaxArea(10000);
    setLabel("");
    setYearBuilt("");
    setPriceRange([3000000, 600000000]);
    setProperties(originalProperties);
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black">
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
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
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
              className="group relative inline-flex items-center gap-4 px-12 py-4 bg-transparent border-2 border-yellow-300 text-gray-300 font-bold text-lg rounded-2xl shadow-2xl overflow-hidden
                transition-all duration-500 hover:scale-105 hover:shadow-[inset_0_0_12px_rgba(255,255,255,0.1),0_0_20px_rgba(234,179,8,0.4)] hover:border-yellow-500"
            >
              <span className="absolute left-[-75%] top-0 w-[50%] h-full bg-gradient-to-r from-transparent via-white/30 to-transparent rotate-12 
                group-hover:animate-[shine_1.2s_ease-in-out_forwards] pointer-events-none"></span>
              <div className="relative z-10 flex items-center gap-4 text-gray-100 group-hover:text-yellow-100 transition-colors duration-300">
                <RiMapPin2Line className="group-hover:scale-125 group-hover:text-yellow-300 transition-transform duration-300" size={20} />
                <span className="tracking-wide group-hover:text-yellow-200  group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all duration-300">
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

          {/* Drawer with dynamic location selectors */}
          <Drawer
            title="Explore Properties"
            placement="right"
            width={600}
            onClose={onClose}
            open={open}
            extra={
              <Space>
                <Button onClick={onClose}>Cancel</Button>
                <Button type="primary" onClick={handleSearch} className="bg-green-600">
                  Search
                </Button>
              </Space>
            }
            className="bg-gray-900 text-gray-700"
          >
            <div className="p-4">
              {/* Dynamic Location Filters */}
              <div className="grid grid-cols-1 gap-4 mb-6">
                {/* Country Selector */}
                <div className="country-select-container">
                  <label className="block text-sm font-medium text-gray-200 mb-2">Select Country</label>
                  <CountrySelect
                    onChange={(e) => {
                      setCountryId(e.id);
                      setStateId(0);
                      setCityId(0);
                    }}
                    placeHolder="Select Country"
                    inputClassName="w-full p-2 border border-gray-300 rounded-md bg-white text-black focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                    containerClassName="w-full"
                  />
                </div>

                {/* State Selector */}
                <div className="state-select-container">
                  <label className="block text-sm font-medium text-gray-200 mb-2">Select State</label>
                  <StateSelect
                    countryid={countryId}
                    onChange={(e) => {
                      setStateId(e.id);
                      setCityId(0);
                    }}
                    placeHolder="Select State"
                    inputClassName="w-full p-2 border border-gray-300 rounded-md bg-white text-black focus:ring-2 focus:ring-yellow-400 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
                    containerClassName="w-full"
                  />
                </div>

                {/* City Selector */}
                <div className="city-select-container">
                  <label className="block text-sm font-medium text-gray-200 mb-2">Select City</label>
                  <CitySelect
                    countryid={countryId}
                    stateid={stateId}
                    onChange={(e) => {
                      setCityId(e.id);
                    }}
                    placeHolder="Select City"
                    inputClassName="w-full p-2 border border-gray-300 rounded-md bg-white text-black focus:ring-2 focus:ring-yellow-400 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
                    containerClassName="w-full"
                  />
                </div>
              </div>

              {/* Other Filters */}
              <div className="grid grid-cols-2 gap-4 mb-6 text-gray-700">
                <Select
                  style={{ width: "100%" }}
                  placeholder="Select Area"
                  value={area || undefined}
                  onChange={(value) => setArea(value || "")}
                  allowClear
                >
                  <Option value="">All Areas</Option>
                  <Option value="sector54">Sector 54</Option>
                  <Option value="marinedrive">Marine Drive</Option>
                  <Option value="bkc">Bandra Kurla Complex</Option>
                  <Option value="cybercity">Cyber City</Option>
                </Select>

                <Select
                  style={{ width: "100%" }}
                  placeholder="Select Status"
                  value={status || undefined}
                  onChange={(value) => setStatus(value || "")}
                  allowClear
                >
                  <Option value="">All Status</Option>
                  <Option value="For Sale">For Sale</Option>
                  <Option value="For Rent">For Rent</Option>
                  <Option value="Hot Offer">Hot Offer</Option>
                </Select>

                <Select
                  style={{ width: "100%" }}
                  placeholder="Select Type"
                  value={type || undefined}
                  onChange={(value) => setType(value || "")}
                  allowClear
                >
                  <Option value="">All Types</Option>
                  <Option value="apartment">Apartment</Option>
                  <Option value="residential">Residential</Option>
                  <Option value="villa">Villa</Option>
                  <Option value="penthouse">Penthouse</Option>
                </Select>

                <Select
                  style={{ width: "100%" }}
                  placeholder="Select Bedrooms"
                  value={bedrooms || undefined}
                  onChange={(value) => setBedrooms(value || "")}
                  allowClear
                >
                  <Option value="">Any</Option>
                  <Option value="1">1 BHK</Option>
                  <Option value="2">2 BHK</Option>
                  <Option value="3">3 BHK</Option>
                  <Option value="4">4+ BHK</Option>
                </Select>

                <Select
                  style={{ width: "100%" }}
                  placeholder="Select Bathrooms"
                  value={bathrooms || undefined}
                  onChange={(value) => setBathrooms(value || "")}
                  allowClear
                >
                  <Option value="">Any</Option>
                  <Option value="1">1</Option>
                  <Option value="2">2</Option>
                  <Option value="3">3</Option>
                  <Option value="4">4+</Option>
                </Select>

                <InputNumber
                  placeholder="Min. Area (Sq Ft)"
                  style={{ width: "100%" }}
                  min={0}
                  value={minArea}
                  onChange={(value) => setMinArea(value || 0)}
                />

                <InputNumber
                  placeholder="Max. Area (Sq Ft)"
                  style={{ width: "100%" }}
                  min={0}
                  value={maxArea}
                  onChange={(value) => setMaxArea(value || 10000)}
                />

                <Select
                  style={{ width: "100%" }}
                  placeholder="Select Label"
                  value={label || undefined}
                  onChange={(value) => setLabel(value || "")}
                  allowClear
                >
                  <Option value="">Any</Option>
                  <Option value="featured">Featured</Option>
                  <Option value="premium">Premium</Option>
                  <Option value="luxury">Luxury</Option>
                </Select>

                <InputNumber
                  placeholder="Year Built"
                  style={{ width: "100%" }}
                  min={1900}
                  max={2025}
                  value={yearBuilt}
                  onChange={(value) => setYearBuilt(value)}
                />
              </div>

              {/* Price Range Slider */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-200 mb-2">
                  Price Range: ₹{(priceRange[0] / 100000).toFixed(1)}L - ₹{(priceRange[1] / 10000000).toFixed(1)}Cr
                </label>
                <Slider
                  range
                  min={1000000}
                  max={1000000000}
                  step={1000000}
                  value={priceRange}
                  onChange={handlePriceChange}
                  tipFormatter={(value) => `₹${(value / 10000000).toFixed(1)}Cr`}
                />
              </div>

              {/* Search and Clear Buttons */}
              <div className="flex justify-between mb-6">
                <Button type="primary" onClick={handleSearch} className="bg-green-600 hover:bg-green-700">
                  🔍 Search Properties
                </Button>
                <Button onClick={handleClearFilters} className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black">
                  🗑️ Clear All Filters
                </Button>
              </div>

              {/* Results */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <p className="text-gray-200 font-medium">{properties.length} Properties Found</p>
                  <div className="text-xs text-gray-400">
                    {countryId ? `Country ID: ${countryId}` : ''}
                    {stateId ? ` | State ID: ${stateId}` : ''}
                    {cityId ? ` | City ID: ${cityId}` : ''}
                  </div>
                </div>
                {properties.length === 0 ? (
                  <div className="text-center py-8 text-gray-400">
                    <div className="text-4xl mb-2">🏠</div>
                    <p>No properties found matching your criteria</p>
                    <p className="text-sm">Try adjusting your filters</p>
                  </div>
                ) : (
                  properties.map((prop) => (
                    <div key={prop.id} className="bg-gray-800 p-4 rounded-lg mb-4 border border-yellow-400/20 hover:border-yellow-400/40 transition-all duration-300">
                      <div className="flex flex-wrap gap-2 mb-2">
                        <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                          {prop.status}
                        </span>
                        {prop.featured && (
                          <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full animate-pulse">
                            ⭐ Featured
                          </span>
                        )}
                      </div>
                      <div className="flex flex-col sm:flex-row gap-4">
                        <div className="w-full sm:w-1/3 bg-gray-700 rounded-lg">
                          <div className="w-full h-32 bg-gradient-to-br from-gray-600 to-gray-700 rounded-lg flex items-center justify-center">
                            <span className="text-gray-400 text-sm">🏢 Property Image</span>
                          </div>
                        </div>
                        <div className="w-full sm:w-2/3">
                          <h3 className="text-lg text-yellow-400 font-semibold mb-2">{prop.name}</h3>
                          <p className="text-gray-300 text-sm mb-1 flex items-center gap-2">
                            <RiMapPin2Line className="text-yellow-400" size={14} />
                            {prop.location}
                          </p>
                          <p className="text-gray-300 text-sm mb-1">📐 Area: {prop.area}</p>
                          <p className="text-gray-300 text-sm mb-2">🏠 Type: {prop.type}</p>
                          <div className="flex items-center justify-between">
                            <p className="text-yellow-400 font-bold text-lg">{prop.price}</p>
                            <div className="flex items-center gap-2">
                              <span className="text-gray-400 text-xs bg-gray-700 px-2 py-1 rounded">
                                Ethos Team
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </Drawer>

          {/* Bottom stats */}
          <div className={`mt-16 transition-all duration-1000 delay-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">50+</div>
                <div className="text-sm text-gray-300">Prime Locations</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">₹5K+</div>
                <div className="text-sm text-gray-300">Crore Invested</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">95%</div>
                <div className="text-sm text-gray-300">Client Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Brand tagline */}
          <div className={`mt-12 transition-all duration-1000 delay-1200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <p className="text-yellow-400/80 font-medium text-sm tracking-widest">
              EXCELLENCE IN REAL ESTATE
            </p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-yellow-400/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-yellow-400/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}

export default DifferentCities;