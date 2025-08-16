import React, { useState, useEffect, useRef } from "react";
import { MapPin, Phone, Mail, ArrowRight, Facebook, Instagram, MessageCircle, Linkedin, Youtube, Send, Sparkles, Building, Users, Award, TrendingUp, ChevronUp } from "lucide-react";
import { BsWhatsapp } from "react-icons/bs";
import { Link } from "react-router-dom";
import logotab from "../../assets/images/logo/logotab.png";

function Footer() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef(null);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [activeSection, setActiveSection] = useState(0);

  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Real-time clock
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Auto-cycling sections
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSection((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleNewsletterSubmit = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setEmail("");
      // Trigger success animation
    }, 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const stats = [
    { icon: Building, value: "500+", label: "Properties Sold", color: "from-blue-400 to-cyan-400" },
    { icon: Users, value: "1000+", label: "Happy Clients", color: "from-emerald-400 to-teal-400" },
    { icon: Award, value: "15+", label: "Awards Won", color: "from-purple-400 to-pink-400" },
    { icon: TrendingUp, value: "98%", label: "Success Rate", color: "from-orange-400 to-red-400" }
  ];

  return (
    <footer
      ref={footerRef}
      className="relative bg-black text-white overflow-hidden"
      style={{
        background: `
          radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(16, 185, 129, 0.1) 0%, transparent 50%),
          linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 50%, #0a0a0a 100%)
        `
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-emerald-400 rounded-full opacity-30 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}

        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(rgba(16, 185, 129, 0.3) 1px, transparent 1px),
                linear-gradient(90deg, rgba(16, 185, 129, 0.3) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px',
              transform: `translate(${scrollY * 0.1}px, ${scrollY * 0.05}px)`
            }}
          />
        </div>

        {/* Geometric Shapes */}
        <div className="absolute top-20 right-20 w-32 h-32 border border-emerald-500/20 rotate-45 animate-spin" style={{ animationDuration: '20s' }} />
        <div className="absolute bottom-40 left-10 w-24 h-24 border border-blue-500/20 rounded-full animate-pulse" />
      </div>

      {/* Hero Newsletter Section */}
      <div className="relative border-b border-gray-800/50">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 via-blue-600/20 to-purple-600/20 animate-gradient-x" />

        <div className="relative container mx-auto px-6 py-20">
          <div className="max-w-5xl mx-auto text-center">
            {/* Live Clock */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              <span className="text-sm font-mono">
                {currentTime.toLocaleTimeString()} • Gurugram, India
              </span>
            </div>

            <h2 className="text-5xl md:text-7xl font-black mb-6 relative">
              <span className="bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient-x">
                Ethos Pro Realtors
              </span>
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 rounded-lg blur opacity-20 animate-pulse" />
            </h2>

            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
              Get exclusive property deals, market insights, and investment opportunities delivered to your inbox
            </p>

            {/* Advanced Newsletter Form */}
            <div className="max-w-2xl mx-auto relative">
              <div className="flex gap-4 p-2 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 shadow-2xl">
                <div className="flex-1 relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email for exclusive deals..."
                    className="w-full px-6 py-2 bg-transparent text-white placeholder-gray-400 focus:outline-none text-lg"
                  />
                  <div className="absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r from-emerald-400 to-blue-400 transform scale-x-0 transition-transform duration-300 focus-within:scale-x-100" />
                </div>
                <button
                  onClick={handleNewsletterSubmit}
                  disabled={isSubmitting}
                  className="px-6 py-2 bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-400 hover:to-blue-400 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/25 disabled:opacity-70 flex items-center gap-3 relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  {isSubmitting ? (
                    <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send
                    </>
                  )}
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center justify-center gap-8 mt-8 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full" />
                  <span>Spam-free guaranteed</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-400 rounded-full" />
                  <span>Unsubscribe anytime</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-purple-400 rounded-full" />
                  <span>5K+ subscribers</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="relative py-16 border-b border-gray-800/50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              const isActive = activeSection === index;
              return (
                <div
                  key={index}
                  className={`text-center transform transition-all duration-500 ${isActive ? 'scale-110' : 'scale-100'
                    } ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${stat.color} mb-4 transform transition-all duration-300 hover:scale-110 hover:rotate-12`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className={`text-4xl font-black mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                    {stat.value}
                  </div>
                  <div className="text-gray-400 font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative container mx-auto px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* Company Section - Enhanced */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="flex items-center gap-3 mb-6 group">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-emerald-400 to-blue-400 flex items-center justify-center transition-transform group-hover:scale-105">
                  <img src={logotab} alt="Logo" className="w-11 h-11  rounded-xl" />
                </div>
                <h3 className="text-3xl font-black bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent transition-all duration-300 group-hover:brightness-110">
                  Ethos Pro Realtors
                </h3>
              </div>


              <p className="text-gray-300 leading-relaxed text-lg mb-6">
                Your property, Our Priority. As trusted channel partners with top builders, we're dedicated to connecting you with the finest properties that meet your goals.
              </p>

              {/* Achievement Badges */}
              <div className="flex flex-wrap gap-3 mb-8">
                {["Top Rated", "Verified", "Trusted Partner", "Award Winner"].map((badge, index) => (
                  <span
                    key={badge}
                    className="px-3 py-1 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 border border-emerald-500/30 rounded-full text-sm font-medium text-emerald-300 animate-pulse"
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            {/* Social Media Icons */}
            <div>
              <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-emerald-400" />
                Follow Us
              </h4>
              <div className="flex flex-wrap gap-4">
                {[
                  {
                    icon: Facebook,
                    baseColor: "from-blue-500/20 to-blue-600/20",
                    hoverColor: "hover:from-blue-500 hover:to-blue-600",
                    shadowColor: "hover:shadow-blue-500/50",
                    label: "Facebook",
                    link: "https://www.facebook.com/ethosprorealtors/"
                  },
                  {
                    icon: Instagram,
                    baseColor: "from-pink-500/20 to-purple-600/20",
                    hoverColor: "hover:from-pink-500 hover:to-purple-600",
                    shadowColor: "hover:shadow-pink-500/50",
                    label: "Instagram",
                    link: "https://www.instagram.com/ethosprorealtors/"
                  },
                  {
                    icon: BsWhatsapp,
                    baseColor: "from-green-500/20 to-emerald-600/20",
                    hoverColor: "hover:from-green-500 hover:to-emerald-600",
                    shadowColor: "hover:shadow-green-500/50",
                    label: "WhatsApp",
                    link: "https://api.whatsapp.com/send/?phone=918744964496&text=Hi%2C+I+want+more+details+regarding+this+project.&type=phone_number&app_absent=0"
                  },
                  {
                    icon: Linkedin,
                    baseColor: "from-blue-600/20 to-blue-800/20",
                    hoverColor: "hover:from-blue-600 hover:to-blue-800",
                    shadowColor: "hover:shadow-blue-600/50",
                    label: "LinkedIn",
                    link: "https://in.linkedin.com/company/ethos-pro-realtors"
                  },
                  {
                    icon: Youtube,
                    baseColor: "from-red-500/20 to-red-700/20",
                    hoverColor: "hover:from-red-500 hover:to-red-700",
                    shadowColor: "hover:shadow-red-500/50",
                    label: "YouTube",
                    link: "https://www.youtube.com/@ethosprorealtors"
                  }
                ].map(({ icon: Icon, baseColor, hoverColor, shadowColor, label, link }) => (
                  <a
                    key={label}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`relative w-14 h-14 bg-gradient-to-r ${baseColor} ${hoverColor} backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/20 hover:border-white/40 transition-all duration-500 transform hover:scale-125 hover:-translate-y-2 ${shadowColor} hover:shadow-xl group overflow-hidden`}
                    aria-label={label}
                  >
                    {/* Rotating ring effect */}
                    <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-white/20 via-transparent to-white/20 opacity-0 group-hover:opacity-100 group-hover:animate-spin transition-opacity duration-300" style={{ animationDuration: '3s' }} />

                    {/* Pulsing background */}
                    <div className="absolute inset-0 rounded-2xl bg-white/10 opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-300" />

                    {/* Shimmer effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700 rounded-2xl" />

                    <Icon className="w-6 h-6 text-white relative z-10 group-hover:scale-110 transition-transform duration-300" />

                    {/* Floating particles on hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {[...Array(4)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute w-1 h-1 bg-white rounded-full animate-ping"
                          style={{
                            top: `${25 + Math.random() * 50}%`,
                            left: `${25 + Math.random() * 50}%`,
                            animationDelay: `${i * 200}ms`,
                            animationDuration: '1s'
                          }}
                        />
                      ))}
                    </div>
                  </a>
                ))}
              </div>

            </div>
          </div>

          {/* Navigation Sections */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-bold mb-6 relative">
                Quick Links
                <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-emerald-500 to-blue-500" />
              </h4>
              <ul className="space-y-4">
                {[
                  { to: "/", label: "Home" },
                  { to: "/projects", label: "Projects" },
                  { to: "/projects/residential", label: "Residential" },
                  { to: "/projects/commercial", label: "Commercial" },
                  { to: "/about", label: "About" },
                  { to: "/blog", label: "Blog" },
                  { to: "/contact", label: "Contact" },
                  
                ].map((item, idx) => (
                  <li key={idx}>
                    <Link
                      to={item.to}
                      className="group flex items-center text-gray-400 hover:text-emerald-400 transition-all duration-300"
                    >
                      {/* Arrow */}
                      <ArrowRight className="w-4 h-4 mr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-emerald-400" />

                      {/* Label + underline wrapper */}
                      <span className="relative inline-block">
                        {item.label}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-blue-400 group-hover:w-full transition-all duration-300"></span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            
          </div>

          {/* Contact Section - Ultra Enhanced */}
          <div className="lg:col-span-3">
            <h4 className="text-xl font-bold mb-6 relative">
              Get In Touch
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-emerald-500 to-blue-500" />
            </h4>

            <div className="space-y-6">
              {[
                {
                  icon: MapPin,
                  title: "Visit Our Office",
                  content: "Suncity Success Tower, Unit No 507, 5th Floor, Tower-A, Sector 65, Gurugram, Haryana 122001",
                  action: "Get Directions",
                  color: "from-blue-500 to-purple-500"
                },
                {
                  icon: Phone,
                  title: "Call Us Now",
                  content: "+91 8744964496",
                  action: "Call Now",
                  color: "from-emerald-500 to-teal-500"
                },
                {
                  icon: Mail,
                  title: "Email Us",
                  content: "info@ethosrealtors.com",
                  action: "Send Email",
                  color: "from-orange-500 to-red-500"
                }
              ].map(({ icon: Icon, title, content, action, color }) => (
                <div key={title} className="group relative">
                  <div className="p-4 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-emerald-500/50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl">
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${color} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <h5 className="font-semibold text-white mb-1">{title}</h5>
                        <p className="text-gray-400 text-sm mb-2">{content}</p>
                        <button className="text-emerald-400 text-sm font-medium hover:text-emerald-300 transition-colors">
                          {action} →
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Office Hours */}
            {/* <div className="mt-8 p-4 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 rounded-2xl border border-emerald-500/30">
              <h5 className="font-semibold text-emerald-400 mb-2">Office Hours</h5>
              <div className="text-sm text-gray-300 space-y-1">
                <div className="flex justify-between">
                  <span>Mon - Fri:</span>
                  <span>9:00 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span>10:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span>11:00 AM - 5:00 PM</span>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      {/* Bottom Bar - Enhanced */}
      <div className="relative border-t border-gray-800/50 bg-black/80 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-gray-400">
              <p>© {new Date().getFullYear()} Ethos Pro Realtors. All Rights Reserved.</p>
              <div className="flex items-center gap-4">
                <Link to="/privacy-policy" className="hover:text-emerald-400 transition-colors">Privacy Policy</Link>
                <span>•</span>
                <Link to="/terms" className="hover:text-emerald-400 transition-colors">Terms</Link>
                <span>•</span>
                <Link to="/sitemap" className="hover:text-emerald-400 transition-colors">Sitemap</Link>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-400">Made with ❤️ in India</span>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span>All systems operational</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
        {/* Scroll to Top */}
        <button
          onClick={scrollToTop}
          className="w-12 h-12 bg-gradient-to-r cursor-pointer from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 rounded-full shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 opacity-80 hover:opacity-100"
        >
          <ChevronUp className="w-5 h-5 text-white" />
        </button>

        {/* Chat Button */}
        <button className="relative w-14 h-14 bg-gradient-to-r cursor-pointer from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 rounded-full shadow-xl hover:shadow-2xl hover:shadow-emerald-500/25 flex items-center justify-center transition-all duration-300 transform hover:scale-110 group overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform rotate-45 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          <BsWhatsapp className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300 relative z-10" />
          <div className="absolute top-2 right-3 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
            <span className="text-xs text-white font-bold">3</span>
          </div>
          <div className="absolute top-2 right-3 w-4 h-4 bg-red-500 rounded-full animate-ping" />
        </button>
      </div>
    </footer>
  );
}

export default Footer;