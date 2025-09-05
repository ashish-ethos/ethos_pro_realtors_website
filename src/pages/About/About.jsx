import React, { useState, useEffect } from 'react';
import { ChevronDown, Award, Users, TrendingUp, MapPin, Phone, Mail, Star, ArrowRight, Home, FileText, DollarSign } from 'lucide-react';
import { IoDocumentAttachOutline } from "react-icons/io5";
import { BiSupport } from "react-icons/bi";
import { TbHomeBitcoin } from "react-icons/tb";
import OurTeam from '../../components/OurTeam/OurTeam';
import AboutImg from '../../assets/images/about/about_image.jpg';
import backgroundImg from '../../assets/images/about/about_background.png';
import SetsApart from '../../components/SetsApart/SetsApart';
import Testimonial from '../../components/Testimonials/Testimonials';
import OurBlog from '../../components/OurBlog/OurBlog';

const About = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [activeSection, setActiveSection] = useState(0);

    useEffect(() => {
        setIsVisible(true);
        const interval = setInterval(() => {
            setActiveSection(prev => (prev + 1) % 3);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    const stats = [
        { number: "500+", label: "Properties Sold", icon: Award },
        { number: "1000+", label: "Happy Clients", icon: Users },
        { number: "15+", label: "Years Experience", icon: TrendingUp },
        { number: "50+", label: "Locations Served", icon: MapPin }
    ];

    const values = [
        {
            title: "Expert Guidance",
            description: "Our team of seasoned professionals provides personalized advice, helping you navigate the real estate market with ease. We offer in-depth market research, area development forecasts, and pricing trends to empower you with the knowledge needed to make confident investments.",
            icon: Users
        },
        {
            title: "Property Portfolio",
            description: "Discover diverse residential, commercial, and lucrative investment opportunities tailored to your unique needs and budget. Enjoy exclusive early access to prime pre-launch projects, priority bookings, and exclusive special offers, securing properties at the best prices.",
            icon: Home
        },
        {
            title: "Transaction Support",
            description: "Enjoy a seamless real estate journey with our end-to-end assistance. From property visits and negotiations to legal paperwork and final registrations, we handle it all. We ensure that all legal formalities and property registrations are accurate, transparent, and completed on time.",
            icon: IoDocumentAttachOutline
        },
        {
            title: "Financial Assistance",
            description: "Buying a property often involves financial complexities, but we’re here to simplify the process. We assist with home loan approvals, EMI options, and financing plans, making it easier for you to secure your dream property.",
            icon: DollarSign
        },
        {
            title: "Priority Allotment",
            description: "Gain a competitive edge in securing your desired property with our priority allotment service. Get early access to high-demand projects, ensuring you don’t miss out on preferred options, and secure the best properties at the best prices.",
            icon: TbHomeBitcoin
        },
        {
            title: "Post-Sale Support",
            description: "Our commitment continues beyond the purchase. We provide ongoing support with project updates, possession timelines, and address any queries, all at no extra cost to you, as developers compensate us for our premium services.",
            icon: BiSupport
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br  from-slate-50 via-blue-50 to-indigo-100">
            {/* Hero Section */}
            <div className="relative w-full overflow-hidden">
                {/* Full-width Background Image Section */}
                <div
                    className="w-full h-[500px] border-2 border-red bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${backgroundImg})` }}
                ></div>

                {/* Centered Chevron Icon */}
                <div className="flex justify-center -mt-4">
                    <ChevronDown className="w-8 h-8 text-white animate-bounce" />
                </div>
            </div>

            {/* Stats Section */}
            <div className="py-10 bg-white/50 backdrop-blur-sm">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div key={index} className={`text-center group transform transition-all duration-700 delay-${index * 100} ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                                <div
                                    className="w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
                                    style={{
                                        borderRadius: '24px',
                                        borderWidth: '3px',
                                        borderStyle: 'solid',
                                        borderImage: 'linear-gradient(45deg, #c99913, #474236, #000000) 1',
                                        backgroundColor: 'transparent',
                                    }}
                                >
                                    <stat.icon className="w-8 h-8 text-black" />
                                </div>
                                <div className="text-4xl font-bold bg-gradient-to-r from-slate-700 to-slate-900 bg-clip-text text-transparent mb-2">
                                    {stat.number}
                                </div>
                                <div className="text-slate-600 font-medium">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="pt-10">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
                        <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
                            <p className="text-md font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-4 tracking-wider uppercase">
                                Our Story
                            </p>
                            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-6 mr-1 leading-tight">
                                Building Dreams
                                <span className="bg-gradient-to-r ml-2 from-blue-400 to-purple-400 bg-clip-text text-transparent">
                                    Creating Futures
                                </span>
                            </h3>
                            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                                Welcome to Ethos Pro Realtors, your trusted partner in real estate. As a leading channel partner with top developers,
                                we specialize in connecting clients with exceptional properties that suit their lifestyle and investment goals. With a deep understanding of the real estate market,
                                we pride ourselves on offering personalized guidance, transparent processes, and unparalleled service.
                                Whether you’re looking for a dream home, a lucrative investment, or commercial spaces, our expert team is here to make your journey seamless and rewarding.
                            </p>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                At Ethos Pro Realtors, we believe in building lasting relationships founded on trust, integrity, and client satisfaction.
                                Explore with us and discover opportunities that bring your vision to life.
                            </p>
                        </div>

                        <div className={`transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
                            <div className="relative">
                                <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-md p-1">
                                    <img
                                        src={AboutImg}
                                        alt="Modern home interior"
                                        className="w-full h-96 object-cover rounded-2xl"
                                    />
                                </div>
                                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-2xl">
                                    <div className="flex items-center gap-2 mb-2">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                        ))}
                                    </div>
                                    <div className="text-sm text-slate-600 font-[Inter]">4.9/5 Client Satisfaction</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Mission & Vision */}
                    <div className="grid lg:grid-cols-2 gap-12 mb-20">
                        <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-300">
                            <div
                                className="w-12 h-12 flex items-center justify-center rounded-xl"
                                style={{
                                    border: "3px solid transparent",
                                    background:
                                        "linear-gradient(white, white) padding-box, linear-gradient(to bottom right, #3b82f6, #9333ea) border-box",
                                }}
                            >
                                <Award className="w-6 h-6 text-black" />
                            </div>



                            <h3 className="text-3xl font-bold text-slate-900 mb-4">Our Mission</h3>
                            <p className="text-slate-600 leading-relaxed">
                                At Ethos Pro Realtors, our mission is to empower clients with exceptional real estate solutions. We strive to connect people with properties that fulfill their dreams,
                                deliver value, and enhance their lifestyles.
                                Through trust, professionalism, and personalized service, we aim to simplify the property-buying journey and make it a rewarding experience for every client.
                            </p>
                        </div>

                        <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-300">
                            <div
                                className="w-12 h-12 flex items-center justify-center rounded-xl"
                                style={{
                                    border: "3px solid transparent",
                                    background: "linear-gradient(white, white) padding-box, linear-gradient(to bottom right, #a855f7, #ec4899) border-box",
                                }}
                            >
                                <TrendingUp className="w-6 h-6 text-black" />
                            </div>


                            <h3 className="text-3xl font-bold text-slate-900 mb-4">Our Vision</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Our vision is to be a trusted leader in the real estate industry, setting new standards for excellence.
                                We aspire to create lasting relationships, drive innovation, and deliver unparalleled value by transforming how people experience real estate.
                                We see a future where every property decision leads to success and satisfaction.
                            </p>
                        </div>
                    </div>

                    {/* Values Section */}
                    <div className="mb-20">
                        <div className="text-center mb-12">
                            <div className="flex items-center justify-center gap-3 mb-4">
                                <span className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-700 tracking-wider uppercase">
                                    Buy
                                </span>
                                <span className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-500 via-gray-700 to-gray-900 tracking-wider uppercase">
                                    Rent
                                </span>
                                <span className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-black via-gray-800 to-gray-600 tracking-wider uppercase">
                                    Sell
                                </span>
                            </div>
                            <h3 className="text-4xl md:text-5xl font-bold text-slate-900">We help people Buy, Rent and Sell properties</h3>
                            <p className="text-slate-600 p-4 text-xl font-[Inter]">Home buying can be a stressful process, but we take the guess work out of finding a real estate agent. We’ll help you find the perfect match to purchase your ideal home.</p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {values.map((value, index) => (
                                <div
                                    key={index}
                                    className={`bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${activeSection === index ? 'ring-2 ring-blue-500/50 scale-105' : ''}`}
                                >
                                    <div className="bg-gradient-to-br from-blue-500 to-purple-600 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                                        <value.icon className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-4">{value.title}</h3>
                                    <p className="text-slate-600 leading-relaxed">{value.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
                <SetsApart className="w-full mb-4" />
                {/* Team Section */}
                <OurTeam />
                <Testimonial />
                <OurBlog />
            </div>
        </div>
    );
};

export default About;




// <button
//                                 className="px-6 py-3 rounded-2xl font-semibold text-black flex items-center gap-2 hover:shadow-xl hover:scale-105 transition-all duration-300"
//                                 style={{
//                                     border: '3px solid transparent',
//                                     borderRadius: '1rem',
//                                     background:
//                                         'linear-gradient(white, white) padding-box, linear-gradient(to right, #3b82f6, #8b5cf6) border-box',
//                                     backgroundClip: 'padding-box, border-box',
//                                 }}
//                             >
//                                 Learn More <ArrowRight className="w-5 h-5" />
//                             </button>