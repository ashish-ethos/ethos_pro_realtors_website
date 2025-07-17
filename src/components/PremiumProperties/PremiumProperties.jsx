import React, { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import DLFCamellias from "../../assets/images/premiumproperties/DLF_Camellias_img-1.jpg";
import ElanTheEmperor from "../../assets/images/premiumproperties/DLF-The-Crest_1.jpg";
import KrisumiWaterfall from "../../assets/images/premiumproperties/Trinity-Sky-Palazzos_1.jpg";

function PremiumProperties() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const visibleCards = 4;

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
            location: "Sector 106, Gurgaon",
            area: "3200 - 4304 Sq Ft",
            type: "APARTMENT, RESIDENTIAL",
        },
        {
            id: 5,
            name: "Krisumi Waterfall Residences",
            price: "₹3.98 crore",
            basePrice: "₹7.07 crore",
            image: KrisumiWaterfall,
            location: "Sector 36A, Gurgaon",
            area: "1648 - 6569 Sq Ft",
            type: "APARTMENT, STUDIO, RESIDENTIAL",
        },
        {
            id: 6,
            name: "Krisumi Waterfall Residences",
            price: "₹3.98 crore",
            basePrice: "₹7.07 crore",
            image: KrisumiWaterfall,
            location: "Sector 36A, Gurgaon",
            area: "1648 - 6569 Sq Ft",
            type: "APARTMENT, STUDIO, RESIDENTIAL",
        },
    ];

    const nextProperty = () => {
        setCurrentIndex((prev) =>
            prev + visibleCards >= properties.length ? 0 : prev + 1
        );
    };

    const prevProperty = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? properties.length - visibleCards : prev - 1
        );
    };

    return (
        <div className="premium-properties container mx-auto py-12 px-4 min-h-screen relative bg-gradient-to-br from-gray-50 to-white">
            <h2 className="text-4xl mb-4 font-extrabold text-center tracking-wide leading-snug animate-pulse-slow text-gradient">
                Top Handpicked Deals
            </h2>
            <p className="text-xl font-bold text-center mb-8 text-gray-800 tracking-tight font-[Inter]">
                Premium Properties At The Best Prices!
            </p>

            {/* Left Arrow Button */}
            <button
                onClick={prevProperty}
                className="absolute left-[-2rem] top-1/2 transform -translate-y-1/2 z-30 p-3 rounded-full bg-white text-black shadow-lg hover:scale-110 transition-transform duration-300"
                style={{
                    border: "3px solid transparent",
                    borderImage: "linear-gradient(to right, #D4A017, #FFD700) 1",
                }}
            >
                <FiChevronLeft size={28} />
            </button>

            {/* Right Arrow Button */}
            <button
                onClick={nextProperty}
                className="absolute right-[-2rem] top-1/2 transform -translate-y-1/2 z-30 p-3 rounded-full bg-white text-black shadow-lg hover:scale-110 transition-transform duration-300"
                style={{
                    border: "3px solid transparent",
                    borderImage: "linear-gradient(to right, #D4A017, #FFD700) 1",
                }}
            >
                <FiChevronRight size={28} />
            </button>

            {/* Carousel Wrapper */}
            <div className="overflow-hidden mt-8">
                <div
                    className="flex transition-transform duration-700 ease-in-out gap-6"
                    style={{
                        transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
                        width: `${(properties.length / visibleCards) * 100}%`,
                    }}
                >
                    {properties.map((property) => (
                        <div
                            key={property.id}
                            className="property-card w-[22rem] bg-white/90 backdrop-blur-md rounded-2xl shadow-lg p-4 flex-shrink-0 transition-all hover:-translate-y-2 hover:shadow-xl border border-gray-100"
                        >
                            <img
                                src={property.image}
                                alt={property.name}
                                className="w-full h-56 object-cover rounded-xl mb-4"
                            />
                            <div>
                                <span className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full font-semibold uppercase">
                                    Featured
                                </span>
                                <div className="text-xl font-bold text-gray-900 mt-2">
                                    {property.price}
                                    <span className="text-sm text-gray-500 line-through ml-2">
                                        {property.basePrice}
                                    </span>
                                </div>
                                <h3 className="text-lg font-semibold mt-2">{property.name}</h3>
                                <p className="text-sm text-gray-600">{property.location}</p>
                                <p className="text-sm text-gray-600">{property.area}</p>
                                <p className="text-sm text-gray-500 mb-4">{property.type}</p>

                                {/* Details Button */}
                                <button
                                    className="w-full py-2 rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-300 bg-white text-black"
                                    style={{
                                        border: "2px solid transparent",
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.borderImage =
                                            "linear-gradient(to right, #D4A017, #FFD700) 1";
                                        e.currentTarget.style.border = "2px solid";
                                        e.currentTarget.style.transform = "translateY(-2px)";
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.border = "2px solid transparent";
                                        e.currentTarget.style.borderImage = "none";
                                        e.currentTarget.style.transform = "translateY(0)";
                                    }}
                                >
                                    Details
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default PremiumProperties;
