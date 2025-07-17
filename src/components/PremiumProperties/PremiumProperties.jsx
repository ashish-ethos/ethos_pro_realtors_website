import React, { useState } from "react";
import DLFCamellias from "../../assets/images/premiumproperties/DLF_Camellias_img-1.jpg";
import ElanTheEmperor from "../../assets/images/premiumproperties/DLF-The-Crest_1.jpg";
import KrisumiWaterfall from "../../assets/images/premiumproperties/Trinity-Sky-Palazzos_1.jpg";
import "./PremiumProperties.css"; // Import the CSS file for styles

function PremiumProperties() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCards = 4; // Number of cards to show at a time
  const properties = [
    {
      id: 1,
      name: "Trinity Sky Palazzo",
      price: "₹5.12 crore",
      basePrice: "₹10.4 crore",
      image: DLFCamellias,
      location: "Sector 88, Gurgaon, Haryana, India",
      area: "3200 - 4400 Sq Ft",
      type: "APARTMENT, RESIDENTIAL",
    },
    {
      id: 2,
      name: "Elan The Emperor",
      price: "₹2.8 crore",
      basePrice: "₹4.8 crore",
      image: ElanTheEmperor,
      location: "Sector 106, Northern Peripheral Road, Gurgaon, Haryana, India",
      area: "3200 - 4304 Sq Ft",
      type: "APARTMENT, RESIDENTIAL",
    },
    {
      id: 3,
      name: "Krisumi Waterfall Residences",
      price: "₹3.98 crore",
      basePrice: "₹7.07 crore",
      image: KrisumiWaterfall,
      location: "Sector 36A, Gurgaon, Haryana, India",
      area: "1648 - 6569 Sq Ft",
      type: "APARTMENT, STUDIO, RESIDENTIAL",
    },
    {
      id: 4,
      name: "Elan The Emperor",
      price: "₹2.8 crore",
      basePrice: "₹4.8 crore",
      image: ElanTheEmperor,
      location: "Sector 106, Northern Peripheral Road, Gurgaon, Haryana, India",
      area: "3200 - 4304 Sq Ft",
      type: "APARTMENT, RESIDENTIAL",
    },
    {
      id: 5,
      name: "Krisumi Waterfall Residences",
      price: "₹3.98 crore",
      basePrice: "₹7.07 crore",
      image: KrisumiWaterfall,
      location: "Sector 36A, Gurgaon, Haryana, India",
      area: "1648 - 6569 Sq Ft",
      type: "APARTMENT, STUDIO, RESIDENTIAL",
    },
  ];

  const nextProperty = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + visibleCards >= properties.length ? 0 : prevIndex + 1
    );
  };

  const prevProperty = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? properties.length - visibleCards : prevIndex - 1
    );
  };

  return (
    <div className="premium-properties container mx-auto py-12 px-4 min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <h2 className="text-gradient text-4xl mb-4 font-extrabold text-center drop-shadow-md tracking-wider leading-snug animate-pulse-slow text-gradient">
        Top Handpicked Deals  
      </h2>
      <p className="text-xl md:text-xl font-extrabold text-center mb-8 text-gray-900 tracking-tight animate-fade-in font-[Inter]">Premium Properties At The Best Prices!</p>
      <div className="relative overflow-hidden">
        <button
          onClick={prevProperty}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-gray-800 to-gray-600 text-white p-3 rounded-full hover:from-gray-700 hover:to-gray-500 transition-all duration-300 z-10 shadow-lg hover:shadow-xl"
        >
          Prev
        </button>
        <div className="flex overflow-x-auto space-x-6 scrollbar-hide pb-4">
          {properties
            .slice(currentIndex, currentIndex + visibleCards)
            .map((property) => (
              <div
                key={property.id}
                className="property-card min-w-[22rem] bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-3xl border border-gray-100"
              >
                <img
                  src={property.image}
                  alt={property.name}
                  className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="bg-emerald-100 text-emerald-800 text-xs px-3 py-1 rounded-full font-semibold uppercase tracking-wide">
                      Featured
                    </span>
                    <div className="flex space-x-2">
                      <span className="text-gray-500 text-xs">Rent</span>
                      <span className="text-gray-500 text-xs">Sale</span>
                      <span className="text-red-500 text-xs font-medium">Hot Offer</span>
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-3">
                    {property.price}
                    <span className="text-lg text-gray-500 line-through ml-2">
                      {property.basePrice}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {property.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-1">{property.location}</p>
                  <p className="text-sm text-gray-600 mb-2">{property.area}</p>
                  <p className="text-sm text-gray-500">{property.type}</p>
                  <button className="mt-4 w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-2 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 font-medium shadow-md hover:shadow-lg">
                    Details
                  </button>
                </div>
              </div>
            ))}
        </div>
        <button
          onClick={nextProperty}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-l from-gray-800 to-gray-600 text-white p-3 rounded-full hover:from-gray-700 hover:to-gray-500 transition-all duration-300 z-10 shadow-lg hover:shadow-xl"
        >
          Next
        </button>
      </div>
      <style>
        {`
          .animate-fade-in {
            animation: fadeIn 1s ease-in-out;
          }
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          .scrollbar-hide {
            -ms-overflow-style: none; /* IE and Edge */
            scrollbar-width: none; /* Firefox */
          }
          @media (max-width: 1024px) {
            .property-card {
              min-w-[18rem];
            }
          }
          @media (max-width: 640px) {
            .property-card {
              min-w-[16rem];
            }
          }
        `}
      </style>
    </div>
  );
}

export default PremiumProperties;