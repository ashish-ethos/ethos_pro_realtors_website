import React, { useState, useEffect } from 'react';
import { Heart, Phone, Mail, MessageCircle, MapPin, Ruler, Eye, Star } from 'lucide-react';

const ExploreProperties = () => {
  const [activeTab, setActiveTab] = useState('residential');
  const [isLoading, setIsLoading] = useState(true);
  const [favorites, setFavorites] = useState(new Set());
  const [hoveredCard, setHoveredCard] = useState(null);

  const properties = [
    {
      id: '101',
      type: 'Apartment, Residential',
      name: 'M3M Antalya Hills',
      location: 'M3M Antalya Hills, Sector 79, Gurugram, Haryana, India',
      size: '1138 – 1642 Sq Ft',
      price: '₹1.15 Cr – ₹1.62 Cr',
      image: '/assets/img/residential/antalya.png',
      options: ['FOR RENT', 'FOR SALE', 'HOT OFFER'],
      rating: 4.7,
      views: 1200
    },
    {
      id: '102',
      type: 'Apartment, Studio, Residential',
      name: 'Central Park Flower Valley The Room',
      location: 'The Room, Central Park II, Sector 48, Gurugram, Haryana, India',
      size: 'NA',
      price: '₹85 L – ₹1.45 Cr',
      image: '/assets/img/residential/central-park.png',
      options: ['FOR RENT', 'FOR SALE'],
      rating: 4.5,
      views: 970
    },
    {
      id: '103',
      type: 'Apartment, Residential',
      name: 'M3M Mansion Sector 113, Gurgaon',
      location: 'M3M Mansion, Sector 113, Bajghera, Gurugram, Haryana, India',
      size: '1638 – 6695 Sq Ft',
      price: '₹1.8 Cr – ₹8.2 Cr',
      image: '/assets/img/residential/mansion.png',
      options: ['FOR RENT', 'FOR SALE', 'HOT OFFER'],
      rating: 4.9,
      views: 2400
    },
    {
      id: '104',
      type: 'Apartment, Studio, Residential',
      name: 'Krisumi Waterfall Residences',
      location: 'Krisumi Waterfall Residences, Sector 36A, Gurugram, Haryana, India',
      size: '1448 – 6569 Sq Ft',
      price: '₹1.25 Cr – ₹6.5 Cr',
      image: '/assets/img/residential/krisumi.png',
      options: ['FEATURED', 'FOR RENT', 'FOR SALE', 'HOT OFFER'],
      rating: 4.6,
      views: 1870
    },
    {
      id: '105',
      type: 'Apartment, Residential',
      name: 'Tulip Monsella',
      location: 'Tulip Monsella, Sector 53, Gurugram, Haryana, India',
      size: '1368 – 4503 Sq Ft',
      price: '₹3.75 Cr – ₹9 Cr',
      image: '/assets/img/residential/monsella.png',
      options: ['FOR RENT', 'FOR SALE'],
      rating: 4.8,
      views: 1650
    },
    {
      id: '106',
      type: 'Apartment, Residential',
      name: 'Smartworld One DXP',
      location: 'Smartworld ONE DXP, Sector 113, Bajghera, Gurugram, Haryana, India',
      size: '2450 – 3203 Sq Ft',
      price: '₹2.95 Cr – ₹5 Cr',
      image: '/assets/img/residential/smartworld.png',
      options: ['FOR RENT', 'FOR SALE', 'HOT OFFER'],
      rating: 4.6,
      views: 2100
    },
  ];

  const tabs = [
    { key: 'residential', label: 'Residential', count: properties.length }
  ];

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
      case 'FEATURED': return 'bg-gradient-to-r from-green-600 to-green-400 text-white';
      default: return 'bg-gray-200 text-gray-700';
    }
  };

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1500);
  }, []);

  const PropertyCard = ({ property, index }) => {
    const isHovered = hoveredCard === property.id;
    const isFavorite = favorites.has(property.id);

    return (
      <div
        className={`group relative bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-700 ease-in-out hover:scale-105 hover:shadow-2xl ${isHovered ? 'z-10' : ''}`}
        style={{
          animationDelay: `${index * 100}ms`,
          animation: isLoading ? 'none' : 'slideInUp 0.6s ease-out forwards'
        }}
        onMouseEnter={() => setHoveredCard(property.id)}
        onMouseLeave={() => setHoveredCard(null)}
      >
        <div className="relative overflow-hidden h-64">
          <img
            src={property.image}
            alt={property.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <button
            onClick={() => toggleFavorite(property.id)}
            className={`absolute top-4 right-4 p-2 rounded-full backdrop-blur-sm transition-all duration-300 ${isFavorite
              ? 'bg-gradient-to-r from-amber-700 to-amber-500 text-white scale-110'
              : 'bg-white/80 text-gray-600 hover:bg-gradient-to-r hover:from-amber-700 hover:to-amber-500 hover:text-white'
              }`}
          >
            <Heart className={`w-4 h-4 ${isFavorite ? 'fill-current' : ''}`} />
          </button>
          <div className="absolute top-4 left-4 flex flex-wrap gap-2">
            {property.options.map((option, idx) => (
              <span
                key={option}
                className={`px-3 py-1 rounded-full text-xs font-semibold ${getOptionColor(option)} transform transition-all duration-300`}
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                {option}
              </span>
            ))}
          </div>
          <div className="absolute bottom-4 left-4 flex items-center space-x-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex items-center space-x-1 bg-slate-900/50 rounded-full px-2 py-1">
              <Eye className="w-3 h-3" />
              <span className="text-xs">{property.views}</span>
            </div>
            <div className="flex items-center space-x-1 bg-slate-900/50 rounded-full px-2 py-1">
              <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
              <span className="text-xs cursor-pointer">{property.rating}</span>
            </div>
          </div>
        </div>
        <div className="p-6">
          <div className="mb-3">
            <h3 className="text-lg font-bold text-gray-800 mb-1 group-hover:text-amber-700 transition-colors duration-300">
              {property.name}
            </h3>
            <p className="text-sm text-gray-500 uppercase tracking-wide font-medium">
              {property.type}
            </p>
          </div>
          <div className="space-y-2 mb-4">
            <div className="flex items-start space-x-2 text-gray-600">
              <MapPin className="w-4 h-4 mt-0.5 text-amber-700" />
              <p className="text-sm leading-relaxed">{property.location}</p>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <Ruler className="w-4 h-4 text-amber-700" />
              <p className="text-sm">{property.size}</p>
            </div>
          </div>
          <div className="mb-4">
            <p className="text-xl font-bold text-amber-700">{property.price}</p>
          </div>
          <div className="flex space-x-2">
            {[{ icon: Phone, label: 'Call' }, { icon: Mail, label: 'Email' }, { icon: MessageCircle, label: 'WhatsApp' }].map((action, idx) => (
              <button
                key={action.label}
                className="flex-1 flex items-center justify-center space-x-2 py-2 px-3 rounded-lg bg-gray-100 text-gray-700 hover:bg-gradient-to-r hover:from-black hover:via-[#474236] hover:to-[#c99913] hover:text-white transition-all transform hover:scale-105"
                style={{ transitionDelay: `${idx * 50}ms` }}
              >
                <action.icon className="w-4 h-4" />
                <span className="text-sm font-medium">{action.label}</span>
              </button>
            ))}
          </div>
        </div>
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-black via-[#474236] to-[#c99913] blur-xl opacity-20" />
        </div>
      </div>
    );
  };

  const LoadingSkeleton = () => (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden animate-pulse">
      <div className="h-64 bg-gray-300" />
      <div className="p-6 space-y-3">
        <div className="h-4 bg-gray-300 rounded w-2/3" />
        <div className="h-3 bg-gray-300 rounded w-1/2" />
        <div className="h-3 bg-gray-300 rounded w-full" />
        <div className="flex space-x-2">
          <div className="flex-1 h-8 bg-gray-300 rounded" />
          <div className="flex-1 h-8 bg-gray-300 rounded" />
          <div className="flex-1 h-8 bg-gray-300 rounded" />
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-amber-50 to-amber-100 py-12 px-4">
      <div className="max-w-7xl mx-auto mb-12 text-center">
        <h1 className="text-5xl md:text-6xl font-black mb-4 bg-gradient-to-r from-black via-[#474236] to-[#c99913] bg-clip-text text-transparent animate-pulse">
          Explore Premium Properties
        </h1>
        <div className="h-1 bg-gradient-to-r from-transparent via-[#c99913] to-transparent rounded-full animate-pulse"></div>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto mt-2 font-[Inter]">
          Discover a diverse collection of premium properties, from luxurious residences to high-end commercial spaces. 
          Browse through the latest listings, featuring stunning architecture, prime locations, and exceptional investment opportunities.
        </p>
      </div>

      <div className="max-w-7xl mx-auto mb-12">
        <div className="flex flex-wrap justify-center gap-4 p-2 bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all cursor-pointer duration-300 transform hover:scale-105 ${activeTab === tab.key
                ? 'text-white shadow-lg'
                : 'text-gray-600 hover:text-white'
                }`}
              style={{
                background: activeTab === tab.key
                  ? 'linear-gradient(to right, #000000, #474236, #c99913)'
                  : 'transparent',
              }}
              onMouseEnter={e => activeTab !== tab.key && (e.currentTarget.style.background = 'linear-gradient(to right, #000000, #474236, #c99913)')}
              onMouseLeave={e => activeTab !== tab.key && (e.currentTarget.style.background = 'transparent')}
            >
              {tab.label}
              <span className={`ml-2 px-2 py-1 rounded-full text-xs ${activeTab === tab.key
                ? 'bg-white/20 text-white'
                : 'bg-gray-200 text-gray-600'
                }`}>
                {tab.count}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {isLoading
            ? Array.from({ length: 6 }).map((_, index) => (
              <LoadingSkeleton key={index} />
            ))
            : properties.map((property, index) => (
              <PropertyCard key={property.id} property={property} index={index} />
            ))
          }
        </div>
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
      `}</style>
    </div>
  );
};

export default ExploreProperties;




 const properties = [
    {
      id: '1',
      type: 'Shop/Commercial',
      name: 'Airia Mall',
      location: 'Airia Mall, Sector 68, Gurgaon, Haryana, India',
      size: '300 - 8000 Sq Ft',
      price: '₹2.5 Cr - ₹8.5 Cr',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop',
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
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop',
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
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop',
      options: ['FOR RENT', 'FOR SALE'],
      rating: 4.5,
      views: 2100
    },
    {
      id: '4',
      type: 'Residential/Plot',
      name: 'DLF Cyber City',
      location: 'DLF Cyber City, Sector 25, Gurgaon, Haryana, India',
      size: '1200 - 3500 Sq Ft',
      price: '₹1.2 Cr - ₹4.5 Cr',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300&fit=crop',
      options: ['FOR SALE', 'PREMIUM'],
      rating: 4.7,
      views: 1800
    },
    {
      id: '5',
      type: 'Villa',
      name: 'Emerald Hills Villa',
      location: 'Emerald Hills, Sector 65, Gurgaon, Haryana, India',
      size: '2500 - 5000 Sq Ft',
      price: '₹3.5 Cr - ₹8 Cr',
      image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=400&h=300&fit=crop',
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
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop',
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
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop',
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
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop',
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
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop',
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
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop',
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
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop',
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
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop',
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
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop',
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
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop',
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
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop',
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
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop',
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
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop',
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
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop',
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
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop',
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
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop',
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
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop',
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
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop',
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
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop',
      options: ['FOR RENT', 'FOR SALE', 'HOT OFFER'],
      rating: 4.8,
      views: 1400
    }



  ];