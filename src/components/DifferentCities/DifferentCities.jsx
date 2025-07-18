import React, { useState, useEffect } from "react";

// Custom SVG Icons
const Building = ({ size = 24, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M9 9h1v1H9V9z" />
        <path d="M14 9h1v1h-1V9z" />
        <path d="M9 14h1v1H9v-1z" />
        <path d="M14 14h1v1h-1v-1z" />
    </svg>
);

const MapPin = ({ size = 20, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
    </svg>
);

const TrendingUp = ({ size = 20, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
    </svg>
);

const ArrowRight = ({ size = 20, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
        <line x1="5" y1="12" x2="19" y2="12" />
        <polyline points="12 5 19 12 12 19" />
    </svg>
);



function DifferentCities() {
    const [isVisible, setIsVisible] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        setIsVisible(true);

        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const featuredCities = [
        { name: "Mumbai", growth: "+18%", icon: "🏙️" },
        { name: "Gurgaon", growth: "+22%", icon: "🏢" },
        { name: "Bangalore", growth: "+15%", icon: "🌆" },
        { name: "Delhi", growth: "+20%", icon: "🏛️" }
    ];

    return (
        <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black">
            {/* Dynamic background elements with brand colors */}
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
                            animationDuration: `${2 + Math.random() * 3}s`
                        }}
                    ></div>
                ))}
            </div>




            {/* Main content container */}
            <div className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto text-center">
                    {/* Decorative top element */}
                    <div className={`inline-flex items-center gap-2 mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                        <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
                        <Building className="text-yellow-400 animate-pulse" size={20} />
                        <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
                    </div>

                    {/* Main heading */}
                    <h1 className={`text-5xl sm:text-6xl lg:text-7xl font-black mb-8 transition-all duration-1200 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        <span className="bg-gradient-to-r from-white via-yellow-200 to-yellow-400 bg-clip-text text-transparent animate-pulse">
                            Popular Places
                        </span>
                        <br />
                        <span className="bg-gradient-to-r from-yellow-400 via-amber-300 to-white bg-clip-text text-transparent">
                            to Invest
                        </span>
                    </h1>

                    {/* Subtitle with enhanced styling */}
                    <div className={`max-w-4xl mx-auto mb-12 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
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
                    <div className={`mb-12 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
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
                                                <TrendingUp size={12} />
                                                {city.growth}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Call-to-action button */}
                    <div className={`transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        <button className="group relative inline-flex items-center gap-4 px-12 py-4 bg-transparent border-2 border-yellow-300 text-gray-300 font-bold text-lg rounded-2xl shadow-2xl overflow-hidden
    transition-all duration-500 hover:scale-105 hover:shadow-[inset_0_0_12px_rgba(255,255,255,0.1),0_0_20px_rgba(234,179,8,0.4)] hover:border-yellow-500">

                            {/* Shine animation (subtle sweep) */}
                            <span className="absolute left-[-75%] top-0 w-[50%] h-full bg-gradient-to-r from-transparent via-white/30 to-transparent rotate-12 
      group-hover:animate-[shine_1.2s_ease-in-out_forwards] pointer-events-none"></span>

                            {/* Button content */}
                            <div className="relative z-10 flex items-center gap-4 text-gray-100 group-hover:text-yellow-100 transition-colors duration-300">
                                <MapPin className="group-hover:scale-125 group-hover:text-yellow-300 transition-transform duration-300" />
                                <span className="tracking-wide group-hover:text-yellow-200 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all duration-300">
                                    Explore Properties by Cities
                                </span>
                                <ArrowRight className="group-hover:translate-x-2 group-hover:rotate-12 text-yellow-300 transition-all duration-300" />
                            </div>

                            {/* Optional ring glow */}
                            <div className="absolute inset-0 rounded-2xl pointer-events-none ring-0 group-hover:ring-2 ring-yellow-400/50 transition duration-500"></div>
                        </button>

                        {/* Secondary CTA */}
                        <div className="mt-6">
                            <button className="text-gray-300 hover:text-yellow-400 font-medium text-sm underline decoration-yellow-400 underline-offset-4 hover:decoration-2 transition-all duration-300 hover:drop-shadow-[0_0_6px_rgba(234,179,8,0.7)]">
                                Download Investment Guide
                            </button>
                        </div>
                    </div>


                    {/* Bottom stats */}
                    <div className={`mt-16 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
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
                    <div className={`mt-12 transition-all duration-1000 delay-1200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
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