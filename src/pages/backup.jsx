import React, { useEffect, useState } from "react";
import "./Header.css";
import CompanyHeaderLogo from "../../assets/images/logo/ethos_pro_realtors_logo.jpg";

function Header() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navItems = ["Home", "Services", "About",  "Contact"];

  return (
    <header
      className={`fixed w-full top-0 z-50 bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white shadow-2xl transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-3 transform transition-all duration-500 hover:scale-105 animate-pulse-slow">
          <img
            src={CompanyHeaderLogo}
            alt="Ethos Pro Realtors Logo"
            className="h-14 w-auto object-contain rounded-full shadow-lg"
          />
          
        </div>

        {/* Hamburger Menu Button (Mobile) */}
        <button
          className="md:hidden text-3xl focus:outline-none focus:ring-4 focus:ring-yellow-400 rounded-full p-2 transition-transform hover:rotate-90"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? "✕" : "☰"}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10">
          {navItems.map((item, index) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative text-xl font-semibold transition-all duration-300 hover:text-yellow-300 group nav-link"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {item}
              <span className="absolute left-0 bottom-0 w-0 h-1 bg-yellow-300 transition-all duration-300 group-hover:w-full group-hover:bg-yellow-400 glow"></span>
            </a>
          ))}
        </nav>
        <div className="hidden md:flex items-center space-x-4">
          <button className="bg-yellow-500 text-black font-bold py-2 px-6 rounded-full hover:bg-yellow-400 transition-all duration-300 ripple">
            Get Started
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <nav
        className={`md:hidden fixed top-16 right-0 w-64 bg-gray-900 shadow-xl transform transition-all duration-700 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center py-6 space-y-6">
          {navItems.map((item, index) => (
            <li
              key={item}
              className="nav-item-mobile"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <a
                href={`#${item.toLowerCase()}`}
                className="text-lg font-medium transition-colors duration-300 hover:text-yellow-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </a>
            </li>
          ))}
          <li>
            <button className="bg-yellow-500 text-black font-bold py-2 px-6 rounded-full hover:bg-yellow-400 transition-all duration-300 mt-4 ripple">
              Get Started
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;