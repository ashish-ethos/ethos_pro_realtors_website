import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaBars, FaTimes, FaCaretDown } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { Dropdown, Space } from "antd"; // Import Ant Design components
import "./Header.css";
import CompanyHeaderLogo from "../../assets/images/logo/ethos_pro_realtors_logo.jpg";
import MobileHeaderLogo from "../../assets/images/logo/EPR_logo.png";

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

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
        { name: "Residential", path: "/projects/residential", key: "1" },
        { name: "Commercial", path: "/projects/commercial", key: "2" },
      ],
    },
    { name: "About", path: "/about" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  // Handle dropdown item click
  const onClick = ({ key }) => {
    // Optionally handle clicks (e.g., show a message or navigate)
    // Since we're using NavLink for navigation, this can be empty or customized
  };

  // Map dropdown items for Ant Design
  const getDropdownItems = (dropdown) =>
    dropdown.map((sub) => ({
      label: (
        <NavLink
          to={sub.path}
          className={({ isActive }) =>
            `block px-4 py-1 text-sm hover:bg-yellow-50 ${
              isActive ? "text-yellow-600 font-semibold" : "text-gray-800"
            }`
          }
        >
          {sub.name}
        </NavLink>
      ),
      key: sub.key,
    }));

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center header-mobile">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3">
          {/* Desktop Logo */}
          <img
            src={CompanyHeaderLogo}
            alt="Logo"
            className="h-14 w-auto cursor-pointer hidden md:block"
          />
          {/* Mobile Logo */}
          <img
            src={MobileHeaderLogo}
            alt="Mobile Logo"
            className="h-12 p-1 w-auto cursor-pointer block md:hidden"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) =>
            item.dropdown ? (
              <div
                className="relative"
                key={item.name}
                onMouseEnter={() => setHoveredItem(item.name)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <Dropdown
                  menu={{ items: getDropdownItems(item.dropdown), onClick }}
                  trigger={["hover"]}
                  open={item.name === hoveredItem}
                  overlayClassName="custom-dropdown" // Custom class for styling
                >
                  <span className="flex items-center font-medium cursor-pointer">
                    {item.name} <IoIosArrowDown className="ml-1 mt-1" />
                  </span>
                </Dropdown>
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
        <div className="hidden lg:flex items-center space-x-4 header-started">
          <a className="fancy" href="#">
            <span className="top-key"></span>
            <span className="text">+91 8744964496</span>
            <span className="bottom-key-1"></span>
            <span className="bottom-key-2"></span>
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <FaTimes /> : <FaBars className="w-6 h-6" />}
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
              +91 8744964496
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;