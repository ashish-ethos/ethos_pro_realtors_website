// Header.jsx
import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaBars, FaTimes, FaCaretDown } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import "./Header.css";
import CompanyHeaderLogo from "../../assets/images/logo/ethos_pro_realtors_logo.jpg";

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    {
      name: "Projects",
      dropdown: [
        { name: "Residential", path: "/projects/residential" },
        { name: "Commercial", path: "/projects/commercial" },
      ],
    },
    { name: "About", path: "/about" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3">
          <img src={CompanyHeaderLogo} alt="Logo" className="h-14 w-auto" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) =>
            item.dropdown ? (
              <div className="relative group" key={item.name}>
                <span className="flex items-center font-medium cursor-pointer">
                  {item.name} <IoIosArrowDown className="ml-1 mt-1" />
                </span>
                <div className="absolute left-0 mt-2 hidden group-hover:block bg-white shadow-md rounded-md">
                  {item.dropdown.map((sub) => (
                    <NavLink
                      key={sub.name}
                      to={sub.path}
                      className={({ isActive }) =>
                        `block px-4 py-2 text-sm hover:bg-yellow-50 ${
                          isActive ? "text-yellow-600 font-semibold" : "text-gray-800"
                        }`
                      }
                    >
                      {sub.name}
                    </NavLink>
                  ))}
                </div>
              </div>
            ) : (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `relative font-medium hover:text-yellow-600 transition ${
                    isActive ? "text-yellow-600" : "text-gray-800"
                  }`
                }
              >
                {item.name}
              </NavLink>
            )
          )}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center space-x-4">
          <a className="fancy" href="#">
            <span className="top-key"></span>
            <span className="text">Get Started</span>
            <span className="bottom-key-1"></span>
            <span className="bottom-key-2"></span>
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div
        className={`md:hidden bg-white shadow-lg fixed top-16 right-0 w-64 h-screen transition-transform duration-500 ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col p-6 space-y-4">
          {navItems.map((item) =>
            item.dropdown ? (
              <li key={item.name}>
                <button
                  className="flex items-center justify-between w-full text-left font-medium"
                  onClick={() => setProjectsOpen(!projectsOpen)}
                >
                  {item.name} <FaCaretDown />
                </button>
                {projectsOpen && (
                  <ul className="mt-2 ml-4 space-y-2">
                    {item.dropdown.map((sub) => (
                      <NavLink
                        key={sub.name}
                        to={sub.path}
                        onClick={() => setMobileOpen(false)}
                        className="block text-gray-700 hover:text-yellow-600"
                      >
                        {sub.name}
                      </NavLink>
                    ))}
                  </ul>
                )}
              </li>
            ) : (
              <li key={item.name}>
                <NavLink
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                  className="block font-medium text-gray-800 hover:text-yellow-600"
                >
                  {item.name}
                </NavLink>
              </li>
            )
          )}
          <li>
            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="block text-center bg-yellow-500 text-gray-900 font-semibold py-2 px-6 rounded-full hover:bg-yellow-400"
            >
              Get Started
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
