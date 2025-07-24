import React, { useState, useEffect } from 'react';
import { Heart, MapPin, Ruler, Eye, Star } from 'lucide-react';
import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail, MdOutlineWhatsapp } from "react-icons/md";
import AIPLAutography from "../../assets/images/exploreproperties/aipl-autograph.jpg";
import AriaMall from "../../assets/images/exploreproperties/aria-mall.jpg";
import Omaxstate from "../../assets/images/exploreproperties/omaxstate.webp";
import M3Mantalya from "../../assets/images/exploreproperties/m3m_antalya.avif";
import EmeraldHills from "../../assets/images/exploreproperties/emerald-hills.jpg";
import WorldTrade from "../../assets/images/exploreproperties/worldtrader-center.jpg";
import CentralPark from "../../assets/images/exploreproperties/central-park.jpg";
import M3MMansion from "../../assets/images/exploreproperties/m3m-mansion.jpg";
import Krisumi from "../../assets/images/exploreproperties/krisumi-waterfall.jpg";
import Tulip from "../../assets/images/exploreproperties/tulip-monsella.jpg";
import SmartWorld from "../../assets/images/exploreproperties/smartworld-dxp.jpg";
import AIPLBusinessClub from "../../assets/images/exploreproperties/aipl-business.jpg";
import Cygnett from "../../assets/images/exploreproperties/cygnett-retreat.jpg";
import Sobha from "../../assets/images/exploreproperties/sobha-international.webp";

const ExploreProperties = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [isLoading, setIsLoading] = useState(true);
  const [favorites, setFavorites] = useState(new Set());
  const [hoveredCard, setHoveredCard] = useState(null);
  const [visibleProperties, setVisibleProperties] = useState(6);

  const properties = [
    {
      id: '1',
      type: 'Shop/Commercial',
      name: 'Airia Mall',
      location: 'Airia Mall, Sector 68, Gurgaon, Haryana, India',
      size: '300 - 8000 Sq Ft',
      price: '₹2.5 Cr - ₹8.5 Cr',
      image: AriaMall,
      options: ['FOR RENT', 'FOR SALE', 'HOT OFFER'],
      rating: 4.8,
      views: 1200
    },
    {
      id: '2',
      type: 'Office/Commercial',
      name: 'AIPL Business Club',
      location: 'AIPL Business Club, Sector 62, Gurgaon, Haryana, India',
      size: '500 - 5000 Sq Ft',
      price: '₹1.8 Cr - ₹6.2 Cr',
      image: AIPLAutography,
      options: ['FOR RENT', 'FOR SALE'],
      rating: 4.6,
      views: 890
    },
    {
      id: '3',
      type: 'Shop/Commercial',
      name: 'The Omaxe State',
      location: 'The Omaxe State, Sector 19B, Dwarka, Delhi, India',
      size: '50 - 10000 Sq Ft',
      price: '₹50 L - ₹12 Cr',
      image: Omaxstate,
      options: ['FOR RENT', 'FOR SALE'],
      rating: 4.5,
      views: 2100
    },
    {
      id: '4',
      type: 'Residential',
      name: 'M3M Antalya Hills',
      location: 'M3M Antalya Hills, Sector 79, Gurugram, Haryana, India',
      size: '1138 – 1642 Sq Ft',
      price: '₹1.15 Cr – ₹1.62 Cr',
      image: M3Mantalya,
      options: ['FOR RENT', 'FOR SALE', 'HOT OFFER'],
      rating: 4.7,
      views: 1200
    },
    {
      id: '5',
      type: 'Villa',
      name: 'Emerald Hills Villa',
      location: 'Emerald Hills, Sector 65, Gurgaon, Haryana, India',
      size: '2500 - 5000 Sq Ft',
      price: '₹3.5 Cr - ₹8 Cr',
      image: EmeraldHills,
      options: ['FOR SALE', 'LUXURY'],
      rating: 4.9,
      views: 950
    },
    {
      id: '6',
      type: 'Office/Studio',
      name: 'World Trade Center',
      location: 'WTC, Sector 16, Noida, UP, India',
      size: '800 - 4000 Sq Ft',
      price: '₹80 L - ₹5 Cr',
      image: WorldTrade,
      options: ['FOR RENT', 'FOR SALE'],
      rating: 4.4,
      views: 1350
    },
    {
      id: '7',
      type: 'Residential',
      name: 'M3M Antalya Hills',
      location: 'M3M Antalya Hills, Sector 79, Gurugram, Haryana, India',
      size: '1138 – 1642 Sq Ft',
      price: '₹1.15 Cr – ₹1.62 Cr',
      image: M3Mantalya,
      options: ['FOR RENT', 'FOR SALE', 'HOT OFFER'],
      rating: 4.7,
      views: 1200
    },
    {
      id: '8',
      type: ' Residential',
      name: 'Central Park Flower Valley The Room',
      location: 'The Room, Central Park II, Sector 48, Gurugram, Haryana, India',
      size: 'NA',
      price: '₹85 L – ₹1.45 Cr',
      image: CentralPark,
      options: ['FOR RENT', 'FOR SALE'],
      rating: 4.5,
      views: 970
    },
    {
      id: '9',
      type: ' Residential',
      name: 'M3M Mansion Sector 113, Gurgaon',
      location: 'M3M Mansion, Sector 113, Bajghera, Gurugram, Haryana, India',
      size: '1638 – 6695 Sq Ft',
      price: '₹1.8 Cr – ₹8.2 Cr',
      image: M3MMansion,
      options: ['FOR RENT', 'FOR SALE', 'HOT OFFER'],
      rating: 4.9,
      views: 2400
    },
    {
      id: '10',
      type: ' Residential',
      name: 'Krisumi Waterfall Residences',
      location: 'Krisumi Waterfall Residences, Sector 36A, Gurugram, Haryana, India',
      size: '1448 – 6569 Sq Ft',
      price: '₹1.25 Cr – ₹6.5 Cr',
      image: Krisumi,
      options: ['FEATURED', 'FOR RENT', 'FOR SALE', 'HOT OFFER'],
      rating: 4.6,
      views: 1870
    },
    {
      id: '11',
      type: 'Residential',
      name: 'Tulip Monsella',
      location: 'Tulip Monsella, Sector 53, Gurugram, Haryana, India',
      size: '1368 – 4503 Sq Ft',
      price: '₹3.75 Cr – ₹9 Cr',
      image: Tulip,
      options: ['FOR RENT', 'FOR SALE'],
      rating: 4.8,
      views: 1650
    },
    {
      id: '12',
      type: ' Residential',
      name: 'Smartworld One DXP',
      location: 'Smartworld ONE DXP, Sector 113, Bajghera, Gurugram, Haryana, India',
      size: '2450 – 3203 Sq Ft',
      price: '₹2.95 Cr – ₹5 Cr',
      image: SmartWorld,
      options: ['FOR RENT', 'FOR SALE', 'HOT OFFER'],
      rating: 4.6,
      views: 2100
    },
    {
      id: '13',
      type: ' Commercial',
      name: 'Reach Airia Mall',
      location: 'Airia Mall, Sector 68, Gurugram, Haryana, India',
      size: '300 – 8000 Sq Ft',
      price: 'Price on Request',
      image: AriaMall,
      options: ['FOR RENT', 'FOR SALE', 'HOT OFFER'],
      rating: 4.7,
      views: 1700
    },
    {
      id: '14',
      type: ' Commercial',
      name: 'AIPL Business Club',
      location: 'AIPL Business Club, Sector 62, Gurugram, Haryana, India',
      size: '500 – 20000 Sq Ft',
      price: 'Price on Request',
      image: AIPLBusinessClub,
      options: ['FOR RENT', 'FOR SALE'],
      rating: 4.6,
      views: 1500
    },
    {
      id: '15',
      type: 'Commercial',
      name: 'The Omaxe State',
      location: 'The Omaxe State, Sector 198, Sector 24 Dwarka, Dwarka, Delhi, India',
      size: '50 – 10000 Sq Ft',
      price: '₹30,000+ Sq Ft',
      image: Omaxstate,
      options: ['FOR RENT', 'FOR SALE', 'HOT OFFER'],
      rating: 4.8,
      views: 2100
    },
    {
      id: '16',
      type: 'Commercial',
      name: 'AIPL Joy Street',
      location: 'AIPL Joy Street, Badshahpur, Sector 66, Gurugram, Haryana, India',
      size: '300 – 8000 Sq Ft',
      price: 'Price on Request',
      image: AIPLAutography,
      options: ['FOR RENT', 'FOR SALE'],
      rating: 4.5,
      views: 1400
    },
    {
      id: '17',
      type: 'Commercial',
      name: 'Cygnett Retreat',
      location: 'Pahadi Kothi, Bagar Road, Pangot, Uttarakhand, India',
      size: '800 Sq Ft',
      price: 'Price on Request',
      image: Cygnett,
      options: ['FOR RENT', 'FOR SALE', 'HOT OFFER'],
      rating: 4.9,
      views: 1300
    },
    {
      id: '18',
      type: ' Commercial',
      name: 'M3M IFC',
      location: 'M3M IFC, Golf Course Extension Road, Badshahpur, Sector 66, Gurugram, Haryana, India',
      size: '500 – 18000 Sq Ft',
      price: 'Price on Request',
      image: M3MMansion,
      options: ['FOR RENT', 'FOR SALE', 'HOT OFFER'],
      rating: 4.7,
      views: 1900
    },
    {
      id: '19',
      type: 'Villa',
      name: 'Cygnett Retreat',
      location: 'Pahadi Kothi, Bagar Road, Pangot, Uttarakhand, India',
      size: '800 Sq Ft',
      price: 'Price on Request',
      image: Cygnett,
      options: ['FOR RENT', 'FOR SALE', 'HOT OFFER'],
      rating: 4.9,
      views: 1300
    },
    {
      id: '20',
      type: 'Villa',
      name: 'Sobha International City',
      location: 'Sobha International City, Dwarka Expressway, Sector 109, Gurugram, Haryana, India',
      size: '3153 – 7330 Sq Ft',
      price: 'Price on Request',
      image: Sobha,
      options: ['FOR RENT', 'FOR SALE', 'HOT OFFER'],
      rating: 4.8,
      views: 1650
    },
    {
      id: '21',
      type: 'Office',
      name: 'AIPL Business Club',
      location: 'AIPL Business Club, Sector 62, Gurugram, Haryana, India',
      size: 'Size on Request',
      price: 'Price on Request',
      image: AIPLBusinessClub,
      options: ['FOR RENT', 'FOR SALE'],
      rating: 4.7,
      views: 980
    },
    {
      id: '22',
      type: 'Office',
      name: 'M3M IFC',
      location: 'M3M IFC, Golf Course Extension Road, Badshahpur, Sector 66, Gurugram, Haryana, India',
      size: '500 – 18000 Sq Ft',
      price: 'Price on Request',
      image: M3MMansion,
      options: ['FOR RENT', 'FOR SALE', 'HOT OFFER'],
      rating: 4.9,
      views: 1200
    },
    {
      id: '23',
      type: ' Office',
      name: 'AIPL Autograph',
      location: 'AIPL Autograph Corporate Office Space, Sector 66, Gurugram, Haryana, India',
      size: 'Size on Request',
      price: 'Price on Request',
      image: AIPLAutography,
      options: ['FOR RENT', 'FOR SALE', 'HOT OFFER'],
      rating: 4.8,
      views: 1400
    }
  ];

  const tabs = [
    { key: 'all', label: 'All Properties', count: properties.length },
    { key: 'residential', label: 'Residential', count: properties.filter(p => p.type.toLowerCase().includes('residential')).length },
    { key: 'commercial', label: 'Commercial', count: properties.filter(p => p.type.toLowerCase().includes('commercial')).length },
    { key: 'villa', label: 'Villa', count: properties.filter(p => p.type.toLowerCase().includes('villa')).length },
    { key: 'office', label: 'Office', count: properties.filter(p => p.type.toLowerCase().includes('office')).length },
    { key: 'studio', label: 'Studio', count: properties.filter(p => p.type.toLowerCase().includes('studio')).length },
    { key: 'plot', label: 'Plot', count: properties.filter(p => p.type.toLowerCase().includes('plot')).length },
  ];

  const getFilteredProperties = () => {
    if (activeTab === 'all') return properties;
    return properties.filter(p => p.type.toLowerCase().includes(activeTab));
  };

  const toggleFavorite = (id) => {
    setFavorites(prev => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(id)) {
        newFavorites.delete(id);
      } else {
        newFavorites.add(id);
      }
      return newFavorites;
    });
  };

  const getOptionColor = (option) => {
    switch (option) {
      case 'HOT OFFER': return 'bg-gradient-to-r from-amber-700 to-amber-500 text-white';
      case 'LUXURY': return 'bg-gradient-to-r from-amber-600 to-amber-400 text-white';
      case 'PREMIUM': return 'bg-gradient-to-r from-amber-500 to-yellow-500 text-white';
      case 'FOR SALE': return 'bg-gradient-to-r from-slate-900 to-amber-700 text-white';
      case 'FOR RENT': return 'bg-gradient-to-r from-amber-700 to-slate-900 text-white';
      default: return 'bg-gray-200 text-gray-700';
    }
  };

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1500);
    setVisibleProperties(6); // Reset visible properties when tab changes
  }, [activeTab]);

  const handleViewMore = () => {
    setVisibleProperties(getFilteredProperties().length); // Show all properties
  };

  const PropertyCard = ({ property, index }) => {
    const isHovered = hoveredCard === property.id;
    const isFavorite = favorites.has(property.id);

    return (
      <div
        className="parent"
        style={{
          animationDelay: `${index * 100}ms`,
          animation: isLoading ? 'none' : 'slideInUp 0.6s ease-out forwards'
        }}
        onMouseEnter={() => setHoveredCard(property.id)}
        onMouseLeave={() => setHoveredCard(null)}
      >
        <div className={`card relative bg-white rounded-2xl shadow-lg overflow-hidden ${isHovered ? 'z-10' : ''}`}>
          <div className="relative overflow-hidden h-64 sm:h-56">
            <img
              src={property.image}
              alt={property.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <button
              onClick={() => toggleFavorite(property.id)}
              className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-sm transition-all duration-300 ${isFavorite
                ? 'bg-gradient-to-r from-amber-700 to-amber-500 text-white scale-110'
                : 'bg-white/80 text-gray-600 hover:bg-gradient-to-r hover:from-amber-700 hover:to-amber-500 hover:text-white'
                }`}
            >
              <Heart className={`w-4 h-4 ${isFavorite ? 'fill-current' : ''}`} />
            </button>
            <div className="absolute top-3 left-3 flex flex-wrap gap-1 sm:gap-2">
              {property.options.map((option, idx) => (
                <span
                  key={option}
                  className={`px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-[10px] sm:text-xs font-semibold ${getOptionColor(option)} transform transition-all duration-300`}
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  {option}
                </span>
              ))}
            </div>
            <div className="absolute bottom-3 left-3 flex items-center space-x-3 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="flex items-center space-x-1 bg-slate-900/50 rounded-full px-2 py-1">
                <Eye className="w-3 h-3" />
                <span className="text-[10px] sm:text-xs">{property.views}</span>
              </div>
              <div className="flex items-center space-x-1 bg-slate-900/50 rounded-full px-2 py-1">
                <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                <span className="text-[10px] sm:text-xs cursor-pointer">{property.rating}</span>
              </div>
            </div>
          </div>
          <div className="p-4 sm:p-6">
            <div className="mb-2 sm:mb-3">
              <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-1 group-hover:text-amber-700 transition-colors duration-300 line-clamp-1">
                {property.name}
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 uppercase tracking-wide font-medium line-clamp-1">
                {property.type}
              </p>
            </div>
            <div className="space-y-1 sm:space-y-2 mb-3 sm:mb-4">
              <div className="flex items-start space-x-2 text-gray-600">
                <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mt-0.5 text-amber-700" />
                <p className="text-xs sm:text-sm leading-relaxed line-clamp-2">{property.location}</p>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <Ruler className="w-3 h-3 sm:w-4 sm:h-4 text-amber-700" />
                <p className="text-xs sm:text-sm">{property.size}</p>
              </div>
            </div>
            <div className="mb-3 sm:mb-4">
              <p className="text-base sm:text-xl font-bold text-amber-700 line-clamp-1">{property.price}</p>
            </div>
            <div className="flex space-x-1 sm:space-x-2">
              {[
                { icon: FiPhone, label: 'Call', color: 'hover:bg-gradient-to-r hover:from-black hover:via-[#474236] hover:to-[#c99913] hover:text-white cursor-pointer' },
                { icon: MdOutlineEmail, label: 'Email', color: 'hover:bg-gradient-to-r hover:from-black hover:via-[#474236] hover:to-[#c99913] hover:text-white cursor-pointer' },
                { icon: MdOutlineWhatsapp, label: 'WhatsApp', color: 'hover:bg-gradient-to-r hover:from-black hover:via-[#474236] hover:to-[#c99913] hover:text-white cursor-pointer' }
              ].map((action, idx) => (
                <button
                  key={action.label}
                  className={`flex-1 flex items-center justify-center space-x-1 sm:space-x-2 py-2 px-2 sm:px-3 rounded-lg bg-gray-100 text-gray-700 transition-all duration-300 transform hover:scale-105 ${action.color}`}
                  style={{ transitionDelay: `${idx * 50}ms` }}
                >
                  <action.icon className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="text-[10px] sm:text-sm font-medium">{action.label}</span>
                </button>
              ))}
            </div>
          </div>
          <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-black via-[#474236] to-[#c99913] blur-xl opacity-20" />
          </div>
        </div>
      </div>
    );
  };

  const LoadingSkeleton = () => (
    <div className="parent">
      <div className="card bg-white rounded-2xl shadow-lg overflow-hidden animate-pulse">
        <div className="h-64 sm:h-56 bg-gray-300" />
        <div className="p-4 sm:p-6">
          <div className="h-4 bg-gray-300 rounded mb-2" />
          <div className="h-3 bg-gray-300 rounded mb-4 w-3/4" />
          <div className="h-3 bg-gray-300 rounded mb-2" />
          <div className="h-3 bg-gray-300 rounded mb-4 w-1/2" />
          <div className="flex space-x-1 sm:space-x-2">
            <div className="flex-1 h-8 bg-gray-300 rounded" />
            <div className="flex-1 h-8 bg-gray-300 rounded" />
            <div className="flex-1 h-8 bg-gray-300 rounded" />
          </div>
        </div>
      </div>
    </div>
  );

  const NoResults = () => (
    <div className="text-center py-8 sm:py-12 px-4 bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg max-w-full sm:max-w-2xl mx-auto animate-fadeIn">
      <h2 className="text-xl sm:text-3xl font-bold bg-gradient-to-r from-black via-[#474236] to-[#c99913] bg-clip-text text-transparent mb-2 sm:mb-3">
        No Properties Found
      </h2>
      <p className="text-gray-600 text-sm sm:text-lg font-[Inter] max-w-full sm:max-w-md mx-auto">
        There are no properties available for the selected category. Try another category or check back later.
      </p>
      <div className="mt-4 sm:mt-6">
        <button
          className="px-4 sm:px-6 py-2 sm:py-3 cursor-pointer rounded-xl font-semibold text-white bg-gradient-to-r from-black via-[#474236] to-[#c99913] hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg text-sm sm:text-base"
          onClick={() => setActiveTab('all')}
        >
          View All Properties
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-amber-50 to-amber-100 py-8 sm:py-12 px-4">
      <div className="max-w-full sm:max-w-7xl mx-auto mb-8 sm:mb-12 text-center">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black mb-3 sm:mb-4 bg-gradient-to-r from-black via-[#474236] to-[#c99913] bg-clip-text text-transparent animate-pulse">
          Explore Premium Properties
        </h1>
        <div className="h-1 bg-gradient-to-r from-transparent via-[#c99913] to-transparent rounded-full animate-pulse"></div>
        <p className="text-gray-600 text-sm sm:text-lg max-w-full sm:max-w-2xl mx-auto mt-2 font-[Inter]">
          Discover a diverse collection of premium properties, from luxurious residences to high-end commercial spaces.
          Browse through the latest listings, featuring stunning architecture, prime locations,
          and exceptional investment opportunities. Discover the perfect investment or dream residence with ease.
        </p>
      </div>
      <div className="max-w-full sm:max-w-7xl mx-auto mb-8 sm:mb-12">
        <div className="flex overflow-x-auto sm:flex-wrap justify-start sm:justify-center gap-2 sm:gap-4 p-2 bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg scrollbar-hidden">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-semibold transition-all cursor-pointer duration-300 transform hover:scale-105 text-sm sm:text-base whitespace-nowrap ${activeTab === tab.key
                ? 'text-white shadow-lg'
                : 'text-gray-600 hover:text-white'
                }`}
              style={{
                background: activeTab === tab.key ? 'linear-gradient(to right, #000000, #474236, #c99913)' : 'transparent',
                transition: 'background 0.4s ease-in-out, transform 0.4s ease-in-out, box-shadow 0.4s ease-in-out',
              }}
              onMouseEnter={e => activeTab !== tab.key && (e.currentTarget.style.background = 'linear-gradient(to right, #000000, #474236, #c99913)')}
              onMouseLeave={e => activeTab !== tab.key && (e.currentTarget.style.background = 'transparent')}
            >
              {tab.label}
              <span className={`ml-1 sm:ml-2 px-1 sm:px-2 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs ${activeTab === tab.key
                ? 'bg-white/20 text-white'
                : 'bg-gray-200 text-gray-600'
                }`}>
                {tab.count}
              </span>
            </button>
          ))}
        </div>
      </div>
      <div className="max-w-full sm:max-w-7xl mx-auto">
        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
            {Array.from({ length: 6 }).map((_, index) => (
              <LoadingSkeleton key={index} />
            ))}
          </div>
        ) : getFilteredProperties().length === 0 ? (
          <NoResults />
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
              {getFilteredProperties().slice(0, visibleProperties).map((property, index) => (
                <PropertyCard key={property.id} property={property} index={index} />
              ))}
            </div>
            {visibleProperties < getFilteredProperties().length && (
              <div className="text-center mt-8">
                <button
                  className="px-6 py-3 rounded-xl font-semibold cursor-pointer text-white bg-gradient-to-r from-black via-[#474236] to-[#c99913] hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg text-base"
                  onClick={handleViewMore}
                >
                  View More
                </button>
              </div>
            )}
          </>
        )}
      </div>
      <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .scrollbar-hidden {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
        .scrollbar-hidden::-webkit-scrollbar {
          display: none; /* Chrome, Safari, Opera */
        }
        .parent {
          perspective: 1200px;
        }
        .card {
          transition: all 0.6s ease-in-out;
          transform-style: preserve-3d;
          box-shadow:
            rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
            rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
        }
        .parent:hover .card {
          transform: rotate3d(1, -1, 0, 25deg);
          box-shadow:
            rgba(30, 30, 60, 0.3) 30px 50px 25px -40px,
            rgba(30, 30, 60, 0.15) 0px 25px 30px 0px;
        }
      `}</style>
    </div>
  );
};

export default ExploreProperties;
