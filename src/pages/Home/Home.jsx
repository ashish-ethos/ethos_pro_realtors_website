import React from "react";
import HomeBackground from "../../assets/images/home/background.jpg";
import { FiMapPin } from "react-icons/fi";
import { MdOutlineHomeWork } from "react-icons/md";
import "./Home.css"; // Import the CSS file for styles

function Home() {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-gray-100">
      {/* Parallax Background Image */}
      <div className="absolute inset-0">
        <img
          src={HomeBackground}
          alt="Real Estate Background"
          className="w-full h-full object-cover transition-transform duration-1000 ease-out parallax"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-6 lg:px-12 text-gray-800 animate-fade-in-slide-up">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-6 text-center drop-shadow-md tracking-wider leading-snug animate-pulse-slow text-gradient">
          Ethos Pro Realtors
        </h1>

        <p className="text-lg sm:text-xl lg:text-2xl mb-10 text-center opacity-90 max-w-4xl font-medium animate-fade-in-delayed">
          Discover the best properties for sale and rent.
        </p>

        {/* Modern Search Bar */}
        <div className="bg-white rounded-lg shadow-lg p-4 w-full max-w-5xl flex flex-wrap md:flex-nowrap gap-4 items-center transition-all duration-500 animate-slide-in-right hover:shadow-xl custom-text-bg">
          {/* Location */}
          <div className="flex items-center gap-2 text-gray-700 w-full md:w-1/4 animate-scale-in">
            <FiMapPin className="text-xl" />
            <input
              type="text"
              placeholder="Location"
              className="bg-transparent placeholder-gray-400 focus:outline-none w-full text-sm sm:text-lg"
            />
          </div>

          {/* Property Type */}
          <div className="flex items-center gap-2 text-gray-700 w-full md:w-1/4 animate-scale-in-delayed">
            <MdOutlineHomeWork className="text-xl" />
            <select className="bg-transparent w-full text-gray-700 focus:outline-none text-sm sm:text-lg appearance-none cursor-pointer">
              <option>Property Type</option>
              <option>Apartment</option>
              <option>Villa</option>
              <option>Commercial</option>
            </select>
          </div>

          {/* Min Price */}
          <div className="flex items-center gap-2 text-gray-700 w-full md:w-1/4 animate-scale-in-delayed-2">
            <span className="text-xl">$</span>
            <input
              type="number"
              placeholder="Min Price"
              className="bg-transparent placeholder-gray-400 focus:outline-none w-full text-sm sm:text-lg"
            />
          </div>

          {/* Max Price */}
          <div className="flex items-center gap-2 text-gray-700 w-full md:w-1/4 animate-scale-in-delayed-3">
            <span className="text-xl">-</span>
            <input
              type="number"
              placeholder="Max Price"
              className="bg-transparent placeholder-gray-400 focus:outline-none w-full text-sm sm:text-lg"
            />
          </div>

          {/* Search Button */}
          <button className="custom-button">
            Search
          </button>
        </div>
      </div>
    </section>
  );
}

export default Home;