import React, { useEffect, useState } from "react";
import "./Header.css";
import CompanyHeaderLogo from "../../assets/images/logo/ethos_pro_realtors_logo.jpg";
import { FaBars, FaTimes, FaCaretDown } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { Dropdown } from "antd";

function Header() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProjectsDropdownOpen, setIsProjectsDropdownOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleProjectsDropdown = (e) => {
    e.preventDefault();
    if (window.innerWidth < 768) {
      setIsProjectsDropdownOpen(!isProjectsDropdownOpen);
    }
  };

  const handleMouseEnter = () => {
    if (window.innerWidth >= 768) {
      setIsProjectsDropdownOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth >= 768) {
      setIsProjectsDropdownOpen(false);
    }
  };

  const navItems = ["Home", "Projects", "About", "Blog", "Contact"];

  return (
    <header
      className={`fixed w-full top-0 z-50 bg-gradient-to-r from-gray-50 via-white to-gray-100 text-gray-900 shadow-md transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"
        }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-3 transform transition-all duration-500 hover:scale-105 animate-pulse-slow">
          <img
            src={CompanyHeaderLogo}
            alt="Ethos Pro Realtors Logo"
            className="h-14 w-auto object-contain"
          />
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden text-3xl focus:outline-none focus:ring-4 focus:ring-yellow-400 rounded-full p-2 transition-transform hover:rotate-90"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-10">
          {navItems.map((item, index) => (
            <div
              key={item}
              className="relative group"
              onMouseEnter={item === "Projects" ? handleMouseEnter : undefined}
              onMouseLeave={item === "Projects" ? handleMouseLeave : undefined}
            >
              {item === "Projects" ? (
                <Dropdown
                  overlay={
                    <div className="bg-white rounded-md shadow-md overflow-hidden py-2">
                      <a
                        href="#residential"
                        className="block px-4 py-2 text-gray-800 hover:bg-yellow-50 hover:text-yellow-600 transition-colors duration-200"
                      >
                        Residential
                      </a>
                      <a
                        href="#commercial"
                        className="block px-4 py-2 text-gray-800 hover:bg-yellow-50 hover:text-yellow-600 transition-colors duration-200"
                      >
                        Commercial
                      </a>
                    </div>
                  }
                  trigger={["hover"]}
                  placement="bottomLeft"
                >
                  <a
                    href="#projects"
                    className="relative text-xl font-semibold transition-all duration-300 hover:text-yellow-500 flex items-center nav-link"
                    style={{ animationDelay: `${index * 0.2}s` }}
                    onClick={(e) => e.preventDefault()}
                  >
                    {item}
                    <IoIosArrowDown className="ml-1 mt-1" />
                    <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-yellow-500 group-hover:w-8 transition-all duration-300 glow rounded-full"></span>
                  </a>
                </Dropdown>
              ) : (
                <a
                  href={`#${item.toLowerCase()}`}
                  className="relative text-xl font-semibold transition-all duration-300 hover:text-yellow-500 nav-link"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {item}
                  <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-yellow-500 group-hover:w-8 transition-all duration-300 glow rounded-full"></span>
                </a>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <a class="fancy" href="#">
            <span class="top-key"></span>
            <span class="text">Get Started</span>
            <span class="bottom-key-1"></span>
            <span class="bottom-key-2"></span>
          </a>
        </div>
      </div>

      {/* Mobile Nav */}
      <nav
        className={`md:hidden fixed top-16 right-0 w-64 bg-white shadow-xl transform transition-all duration-700 ease-in-out ${isMobileMenuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
          }`}
      >
        <ul className="flex flex-col items-center py-6 space-y-6">
          {navItems.map((item, index) => (
            <li
              key={item}
              className="nav-item-mobile"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {item === "Projects" ? (
                <div className="relative w-full" onClick={toggleProjectsDropdown}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-lg font-medium transition-colors duration-300 hover:text-yellow-500 flex items-center w-full"
                  >
                    {item} <FaCaretDown className="ml-1" />
                  </a>
                  {isProjectsDropdownOpen && (
                    <div className="mt-2 w-full bg-white shadow-md rounded-md">
                      <a
                        href="#residential"
                        className="block px-4 py-2 text-gray-800 hover:bg-yellow-50 hover:text-yellow-600 transition-colors duration-200"
                      >
                        Residential
                      </a>
                      <a
                        href="#commercial"
                        className="block px-4 py-2 text-gray-800 hover:bg-yellow-50 hover:text-yellow-600 transition-colors duration-200"
                      >
                        Commercial
                      </a>
                    </div>
                  )}
                </div>
              ) : (
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-lg font-medium transition-colors duration-300 hover:text-yellow-500"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </a>
              )}
            </li>
          ))}
          <li>
            <button className="bg-yellow-500 text-gray-900 font-bold py-2 px-6 rounded-full hover:bg-yellow-400 transition-all duration-300 mt-4 ripple">
              Get Started
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
