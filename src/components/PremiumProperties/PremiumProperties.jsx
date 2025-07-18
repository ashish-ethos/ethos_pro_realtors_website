import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, MapPin, Home, Eye, Heart, Star } from "lucide-react";
import DLFCamellias from "../../assets/images/premiumproperties/dlfthecamilias.jpg";
import ElanTheEmperor from "../../assets/images/premiumproperties/Elan-The-Emperor.jpg";
import KrisumiWaterfall from "../../assets/images/premiumproperties/krisumiwaterfall.jpg";
import TrinitySkyPlazao from "../../assets/images/premiumproperties/skyplazzo.jpg";
import M3Mmansion from "../../assets/images/premiumproperties/m3mmansion.jpg";
import DLFTheCrest from "../../assets/images/premiumproperties/dlfthecrest.jpg";

function PremiumProperties() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [hoveredCard, setHoveredCard] = useState(null);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const visibleCards = 3;

    const properties = [
        {
            id: 1,
            name: "Trinity Sky Palazzo",
            price: "₹5.12 crore",
            basePrice: "₹10.4 crore",
            image: TrinitySkyPlazao,
            location: "Sector 88, Gurgaon, Haryana, India",
            area: "3200 - 4400 Sq Ft",
            type: "APARTMENT, RESIDENTIAL",
            rating: 4.8,
            views: 1245,
            discount: "50% OFF",
            featured: true,
            amenities: ["Swimming Pool", "Gym", "Garden", "Security"]
        },
        {
            id: 2,
            name: "Elan The Emperor",
            price: "₹10 crore",
            basePrice: "₹24.8 crore",
            image: ElanTheEmperor,
            location: "Sector 106, Gurgaon, Haryana, India",
            area: "3200 - 4304 Sq Ft",
            type: "APARTMENT, RESIDENTIAL",
            rating: 4.9,
            views: 2156,
            discount: "60% OFF",
            featured: true,
            amenities: ["Rooftop Pool", "Spa", "Concierge", "Parking"]
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
            rating: 4.7,
            views: 892,
            discount: "44% OFF",
            featured: false,
            amenities: ["Waterfall View", "Balcony", "Garden", "Clubhouse"]
        },
        {
            id: 4,
            name: "DLF The Camellias",
            price: "₹65.55 crore",
            basePrice: "₹150.29 crore",
            image: DLFCamellias,
            location: "DLF The Camellias, Sector 42, Gurugram, Haryana, India",
            area: "7196 - 16000 Sq Ft",
            type: "APARTMENT, RESIDENTIAL",
            rating: 5.0,
            views: 3421,
            discount: "56% OFF",
            featured: true,
            amenities: ["Private Elevator", "Terrace", "Butler Service", "Wine Cellar"]
        },
        {
            id: 5,
            name: "M3M Mansion Sector 113",
            price: "₹3.59 crore",
            basePrice: "₹14.66 crore",
            image: M3Mmansion,
            location: "M3M Mansion, Sector 113, Gururgam, Haryana, India",
            area: "1638 - 6695 Sq Ft",
            type: "APARTMENT, RESIDENTIAL",
            rating: 4.6,
            views: 1687,
            discount: "75% OFF",
            featured: false,
            amenities: ["City View", "Fitness Center", "Playground", "Shopping"]
        },
        {
            id: 6,
            name: "DLF The Crest",
            price: "₹10.33 crore",
            basePrice: "₹28.62 crore",
            image: DLFTheCrest,
            location: "DLF Phase 5, Sector 54, Gurgram, Haryana, India",
            area: "2246 - 6221 Sq Ft",
            type: "APARTMENT, RESIDENTIAL",
            rating: 4.8,
            views: 2934,
            discount: "64% OFF",
            featured: true,
            amenities: ["Park View", "Yoga Studio", "Library", "Cafe"]
        }
    ];

    // Auto-play functionality
    useEffect(() => {
        if (isAutoPlaying) {
            const interval = setInterval(() => {
                setCurrentIndex((prev) =>
                    prev + visibleCards >= properties.length ? 0 : prev + 1
                );
            }, 4000);
            return () => clearInterval(interval);
        }
    }, [isAutoPlaying, visibleCards, properties.length]);

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
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50 py-16 px-4 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-amber-400/10 to-orange-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-emerald-400/5 to-teal-400/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
            </div>

            <div className="container mx-auto relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-block">
                        <h1 className="text-5xl md:text-6xl font-black mb-4 bg-gradient-to-r from-slate-900 via-amber-700 to-amber-500 bg-clip-text text-transparent animate-pulse">
                            Top Handpicked Deals
                        </h1>
                        <div className="h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent rounded-full animate-pulse"></div>
                    </div>
                    <p className="text-xl text-gray-600 mt-6 font-light max-w-2xl mx-auto">
                        Premium Properties at the Best Prices!
                    </p>
                </div>

                {/* Auto-play controls */}
                <div className="flex justify-center items-center gap-4 mb-8">
                    <button
                        onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${isAutoPlaying
                                ? 'bg-amber-500 text-white shadow-lg'
                                : 'bg-white text-gray-600 border border-gray-300'
                            }`}
                    >
                        {isAutoPlaying ? 'Pause Auto-play' : 'Resume Auto-play'}
                    </button>
                    <div className="flex gap-2">
                        {Array.from({ length: Math.ceil(properties.length / visibleCards) }, (_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrentIndex(i * visibleCards)}
                                className={`w-3 h-3 rounded-full transition-all ${Math.floor(currentIndex / visibleCards) === i
                                        ? 'bg-amber-500 scale-125'
                                        : 'bg-gray-300 hover:bg-gray-400'
                                    }`}
                            />
                        ))}
                    </div>
                </div>

                {/* Navigation Buttons */}
                <button
                    onClick={prevProperty}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 p-4 rounded-full bg-white/90 backdrop-blur-sm text-gray-800 shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300 border border-gray-200"
                >
                    <ChevronLeft size={24} />
                </button>

                <button
                    onClick={nextProperty}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 p-4 rounded-full bg-white/90 backdrop-blur-sm text-gray-800 shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300 border border-gray-200"
                >
                    <ChevronRight size={24} />
                </button>

                {/* Carousel */}
                <div className="overflow-hidden">
                    <div
                        className="flex transition-transform duration-1000 ease-out gap-8"
                        style={{
                            transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
                            width: `${(properties.length / visibleCards) * 100}%`,
                        }}
                    >
                        {properties.map((property, index) => (
                            <div
                                key={property.id}
                                className={`relative flex-shrink-0 w-[calc(100%/${visibleCards}-2rem)] transition-all duration-700 ${hoveredCard === property.id ? 'scale-105 z-20' : 'scale-100'
                                    }`}
                                onMouseEnter={() => setHoveredCard(property.id)}
                                onMouseLeave={() => setHoveredCard(null)}
                            >
                                <div className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl overflow-hidden border border-gray-100 transform transition-all duration-700 hover:-translate-y-4">
                                    {/* Image Container */}
                                    <div className="relative overflow-hidden">
                                        <img
                                            src={property.image}
                                            alt={property.name}
                                            className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                                        />

                                        {/* Overlay gradient */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                        {/* Top badges */}
                                        <div className="absolute top-4 left-4 flex flex-col gap-2">
                                            {property.featured && (
                                                <span className="px-3 py-1 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold rounded-full shadow-lg animate-pulse">
                                                    FEATURED
                                                </span>
                                            )}
                                            <span className="px-3 py-1 bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-xs font-bold rounded-full shadow-lg">
                                                {property.discount}
                                            </span>
                                        </div>

                                        {/* Top right actions */}
                                        <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                            <button className="p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:scale-110 transition-transform">
                                                <Heart size={16} className="text-gray-600 hover:text-red-500" />
                                            </button>
                                            <button className="p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:scale-110 transition-transform">
                                                <Eye size={16} className="text-gray-600" />
                                            </button>
                                        </div>

                                        {/* Bottom overlay info */}
                                        <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                            <div className="flex items-center gap-2 text-white text-sm">
                                                <Star size={16} className="text-yellow-400 fill-current" />
                                                <span className="font-semibold">{property.rating}</span>
                                                <span>•</span>
                                                <Eye size={16} />
                                                <span>{property.views} views</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6">
                                        {/* Price */}
                                        <div className="flex items-center gap-3 mb-4">
                                            <span className="text-2xl font-bold text-gray-900">{property.price}</span>
                                            <span className="text-sm text-gray-500  bg-gray-100 px-2 py-1 rounded">
                                                {property.basePrice}
                                            </span>
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors">
                                            {property.name}
                                        </h3>

                                        {/* Location */}
                                        <div className="flex items-start gap-2 mb-3">
                                            <MapPin size={16} className="text-gray-400 mt-1 flex-shrink-0" />
                                            <p className="text-sm text-gray-600 line-clamp-2">{property.location}</p>
                                        </div>

                                        {/* Area and Type */}
                                        <div className="flex items-center gap-2 mb-4">
                                            <Home size={16} className="text-gray-400" />
                                            <span className="text-sm text-gray-600">{property.area}</span>
                                            <span className="text-gray-400">•</span>
                                            <span className="text-sm text-gray-600">{property.type.split(',')[0]}</span>
                                        </div>

                                        {/* Amenities */}
                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {property.amenities.slice(0, 3).map((amenity, i) => (
                                                <span key={i} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                                                    {amenity}
                                                </span>
                                            ))}
                                            {property.amenities.length > 3 && (
                                                <span className="px-2 py-1 bg-amber-100 text-amber-700 text-xs rounded-full font-semibold">
                                                    +{property.amenities.length - 3} more
                                                </span>
                                            )}
                                        </div>

                                        {/* Action Buttons */}
                                        <div className="flex gap-3 justify-end">
                                            
                                            <button className="px-4 py-1  border-2 border-amber-500 text-amber-600 font-semibold rounded-xl hover:bg-amber-50 transition-all duration-300">
                                                Details
                                            </button>
                                        </div>
                                    </div>

                                    {/* Hover glow effect */}
                                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-amber-500/20 to-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PremiumProperties;