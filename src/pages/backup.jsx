import React, { useState, useEffect } from 'react';
import { Drawer, Avatar, Tag, Divider, Progress } from 'antd';
import { UserOutlined, PhoneOutlined, MailOutlined, StarFilled } from '@ant-design/icons';
import MohitSharma from "../../assets/images/home/Mohit-Sharma.png";
import ArunGodara from "../../assets/images/home/Arun-Godara.png";
import Satya from "../../assets/images/home/Satya.jpg";
import Chiranjeev from "../../assets/images/home/Chiranjeev.jpg";
import DeepakBhati from "../../assets/images/home/Deepak-Bhati-150x150.png";
import Prerna from "../../assets/images/home/Prerna-150x150.jpg";
import Avantika from "../../assets/images/home/Avantika-150x150.jpg";

const teamMembers = [
    {
        id: 1,
        name: "Mohit Sharma",
        position: "Managing Director",
        image: MohitSharma,
        bio: "Visionary leader with 15+ years in real estate industry, driving innovation and growth. Leading the company towards new heights with strategic vision and exceptional leadership skills.",
        skills: ["Leadership", "Strategic Planning", "Business Development", "Team Management", "Market Expansion"],
        experience: "15+ Years",
        projects: "500+ Properties",
        phone: "+91 98765 43213",
        email: "mohit.sharma@company.com",
        rating: 5.0,
        achievements: ["Industry Leader 2023", "Visionary Award", "Growth Champion", "Leadership Excellence"],
        specializations: ["Strategic Planning", "Business Development", "Team Leadership"]
    },
    {
        id: 2,
        name: "Arun Godara",
        position: "Director",
        image: ArunGodara,
        bio: "Visionary leader with 15+ years in real estate industry, driving innovation and growth. Leading the company towards new heights with strategic vision and exceptional leadership skills.",
        skills: ["Leadership", "Strategic Planning", "Business Development", "Team Management", "Market Expansion"],
        experience: "15+ Years",
        projects: "500+ Properties",
        phone: "+91 98765 43213",
        email: "mohit.sharma@company.com",
        rating: 5.0,
        achievements: ["Industry Leader 2023", "Visionary Award", "Growth Champion", "Leadership Excellence"],
        specializations: ["Strategic Planning", "Business Development", "Team Leadership"]
    },
    {
        id: 3,
        name: "Satya Mandal",
        position: "Sr. Sales Manager",
        image: Satya,
        bio: "Visionary leader with 15+ years in real estate industry, driving innovation and growth. Leading the company towards new heights with strategic vision and exceptional leadership skills.",
        skills: ["Leadership", "Strategic Planning", "Business Development", "Team Management", "Market Expansion"],
        experience: "15+ Years",
        projects: "500+ Properties",
        phone: "+91 98765 43213",
        email: "mohit.sharma@company.com",
        rating: 5.0,
        achievements: ["Industry Leader 2023", "Visionary Award", "Growth Champion", "Leadership Excellence"],
        specializations: ["Strategic Planning", "Business Development", "Team Leadership"]
    },
    {
        id: 4,
        name: "Chiranjeev Nanda",
        position: "Sr. Sales Expert",
        image: Chiranjeev,
        bio: "Expert in luxury property sales with 8+ years of experience in premium real estate markets. Specializes in high-end residential and commercial properties with a focus on client satisfaction and long-term relationships.",
        skills: ["Luxury Sales", "Client Relations", "Market Analysis", "Property Valuation", "Negotiation"],
        experience: "8+ Years",
        projects: "250+ Properties",
        phone: "+91 98765 43210",
        email: "deepak.bhati@company.com",
        rating: 4.9,
        achievements: ["Top Performer 2023", "Client Choice Award", "Luxury Sales Expert"],
        specializations: ["Residential", "Commercial", "Luxury Properties"]
    },
    {
        id: 4,
        name: "Deepak Bhati",
        position: "Sr. Sales Expert",
        image: DeepakBhati,
        bio: "Expert in luxury property sales with 8+ years of experience in premium real estate markets. Specializes in high-end residential and commercial properties with a focus on client satisfaction and long-term relationships.",
        skills: ["Luxury Sales", "Client Relations", "Market Analysis", "Property Valuation", "Negotiation"],
        experience: "8+ Years",
        projects: "250+ Properties",
        phone: "+91 98765 43210",
        email: "deepak.bhati@company.com",
        rating: 4.9,
        achievements: ["Top Performer 2023", "Client Choice Award", "Luxury Sales Expert"],
        specializations: ["Residential", "Commercial", "Luxury Properties"]
    },
    {
        id: 2,
        name: "Prerna Kapuria",
        position: "Sr. Sales Expert",
        image: Prerna,
        bio: "Specialized in residential properties and investment consulting with exceptional client satisfaction. Known for her analytical approach and ability to match clients with their perfect properties.",
        skills: ["Residential Sales", "Investment Advice", "Negotiation", "Market Research", "Client Management"],
        experience: "6+ Years",
        projects: "180+ Properties",
        phone: "+91 98765 43211",
        email: "prerna.kapuria@company.com",
        rating: 4.8,
        achievements: ["Rising Star 2023", "Customer Satisfaction Award", "Investment Specialist"],
        specializations: ["Residential", "Investment Properties", "First-time Buyers"]
    },
    {
        id: 3,
        name: "Avantika Kapuria",
        position: "Sr. Sales Expert",
        image: Avantika,
        bio: "Commercial real estate specialist with proven track record in corporate deals. Expert in analyzing market trends and providing strategic advice for commercial investments.",
        skills: ["Commercial Sales", "Property Valuation", "Market Research", "Corporate Deals", "Strategic Planning"],
        experience: "7+ Years",
        projects: "120+ Properties",
        phone: "+91 98765 43212",
        email: "avantika.kapuria@company.com",
        rating: 4.9,
        achievements: ["Commercial Expert 2023", "Deal Maker Award", "Market Analyst"],
        specializations: ["Commercial", "Office Spaces", "Retail Properties"]
    },

];

const TeamCard = ({ member, index, isVisible, onViewProfile }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div
            className={`group relative w-full h-[420px] perspective-1000 transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                }`}
            style={{ transitionDelay: `${index * 200}ms` }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div
                className={`relative w-full h-full transform-style-preserve-3d transition-transform duration-700 ${isFlipped ? 'rotate-y-180' : ''
                    }`}
            >
                {/* FRONT SIDE */}
                <div className="absolute inset-0 w-full h-full backface-hidden">
                    <div className="relative w-full h-full bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 transition-all duration-500">
                        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-black via-[#474236] to-[#c99913]"></div>
                        <div className="relative h-56 overflow-hidden">
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                            <div className="absolute inset-0 bg-gradient-to-br from-[#474236]/10 to-[#c99913]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className={`absolute top-4 right-4 space-y-2 transform transition-all duration-500 ${isHovered ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
                                }`}>
                                <div className="bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-[#474236] shadow-lg">
                                    {member.experience}
                                </div>
                                <div className="bg-gradient-to-r from-[#c99913] to-[#474236] text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                                    {member.projects}
                                </div>
                            </div>
                            <button
                                onClick={() => setIsFlipped(!isFlipped)}
                                className={`absolute bottom-4 right-4 w-10 h-10 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg transform transition-all duration-500 hover:scale-110 hover:bg-[#c99913] hover:text-white ${isHovered ? 'scale-100 rotate-0' : 'scale-0 rotate-180'
                                    }`}
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m0-4l-4-4" />
                                </svg>
                            </button>
                        </div>
                        <div className="p-6 space-y-4">
                            <div className="text-center space-y-2">
                                <h3 className="text-xl font-black bg-gradient-to-r from-black via-[#474236] to-[#c99913] bg-clip-text text-transparent">
                                    {member.name}
                                </h3>
                                <p className="text-[#474236] font-bold text-sm uppercase tracking-wider">
                                    {member.position}
                                </p>
                            </div>
                            <button
                                onClick={() => onViewProfile(member)}
                                className="w-full py-3.5 gradient-border font-bold rounded-xl"
                            >
                                <span className="flex items-center justify-center gap-2 text-sm">
                                    <UserOutlined />
                                    View Full Profile
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* BACK SIDE */}
                <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
                    <div className="w-full h-full bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl shadow-xl border border-gray-200 flex flex-col">
                        {/* Scrollable content */}
                        <div className="flex-1 overflow-y-auto p-4">
                            <h3 className="text-lg font-black mb-1 bg-gradient-to-r from-black via-[#474236] to-[#c99913] bg-clip-text text-transparent">
                                {member.name}
                            </h3>
                            <p className="text-[#474236] font-semibold text-sm mb-2">
                                {member.position}
                            </p>
                            <p className="text-gray-700 text-sm leading-relaxed mb-4">
                                {member.bio}
                            </p>

                            <h4 className="text-[#474236] font-bold text-sm uppercase tracking-wide mb-2">Expertise</h4>
                            <div className="flex flex-wrap gap-2">
                                {member.skills.slice(0, 3).map((skill, skillIndex) => (
                                    <span
                                        key={skillIndex}
                                        className="px-3 py-1 bg-gradient-to-r from-[#c99913]/20 to-[#474236]/20 border border-[#c99913]/30 text-[#474236] text-xs rounded-full font-medium"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Fixed Bottom Button */}
                        <div className="p-4">
                            <button
                                onClick={() => setIsFlipped(false)}
                                className="w-full py-3 gradient-border font-bold rounded-xl"
                            >
                                <span className="flex items-center justify-center gap-2">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                    </svg>
                                    Back to Profile
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


const ProfileDrawer = ({ member, visible, onClose }) => {
    if (!member) return null;

    return (
        <Drawer
            title={null}
            placement="right"
            onClose={onClose}
            open={visible}
            width={450}
            styles={{
                body: { padding: 0 },
                header: { display: 'none' }
            }}
        >
            <div className="h-full bg-gradient-to-br from-white to-gray-50">
                <div className="relative h-48 overflow-hidden">
                    <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
                    <div className="absolute inset-0 flex items-end p-6">
                        <div className="text-white">
                            <h2 className="text-2xl font-black mb-1">{member.name}</h2>
                            <p className="text-[#c99913] font-semibold">{member.position}</p>
                        </div>
                    </div>
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 w-8 h-8 bg-gray/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div className="p-6 space-y-6">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <div className="flex items-center gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <StarFilled
                                        key={i}
                                        className={`text-sm ${i < Math.floor(member.rating) ? 'text-[#c99913]' : 'text-gray-300'}`}
                                    />
                                ))}
                            </div>
                            <span className="text-sm font-semibold text-gray-600">{member.rating}</span>
                        </div>
                        <div className="text-right">
                            <div className="text-lg font-bold text-[#474236]">{member.projects}</div>
                            <div className="text-xs text-gray-500">Projects Completed</div>
                        </div>
                    </div>
                    <div className="space-y-3">
                        <h3 className="font-bold text-[#474236] uppercase tracking-wide text-sm">Contact Information</h3>
                        <div className="space-y-2">
                            <div className="flex items-center gap-3 text-gray-600">
                                <PhoneOutlined className="text-[#c99913]" />
                                <span className="text-sm">{member.phone}</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-600">
                                <MailOutlined className="text-[#c99913]" />
                                <span className="text-sm">{member.email}</span>
                            </div>
                        </div>
                    </div>
                    <Divider />
                    <div className="space-y-3">
                        <h3 className="font-bold text-[#474236] uppercase tracking-wide text-sm">About</h3>
                        <p className="text-gray-700 leading-relaxed text-sm break-words">
                            {member.bio}
                        </p>
                    </div>
                    <Divider />
                    <div className="space-y-3">
                        <h3 className="font-bold text-[#474236] uppercase tracking-wide text-sm">Skills & Expertise</h3>
                        <div className="flex flex-wrap gap-2">
                            {member.skills.map((skill, index) => (
                                <Tag
                                    key={index}
                                    color="gold"
                                    className="border-[#c99913] text-[#474236] font-medium"
                                >
                                    {skill}
                                </Tag>
                            ))}
                        </div>
                    </div>
                    <Divider />
                    <div className="space-y-3">
                        <h3 className="font-bold text-[#474236] uppercase tracking-wide text-sm">Achievements</h3>
                        <div className="space-y-2">
                            {member.achievements.map((achievement, index) => (
                                <div key={index} className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-[#c99913] rounded-full"></div>
                                    <span className="text-sm text-gray-700">{achievement}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <Divider />
                    <div className="space-y-3">
                        <h3 className="font-bold text-[#474236] uppercase tracking-wide text-sm">Specializations</h3>
                        <div className="grid grid-cols-1 gap-2">
                            {member.specializations.map((spec, index) => (
                                <div key={index} className="bg-gradient-to-r from-[#c99913]/10 to-[#474236]/10 p-3 rounded-lg border border-[#c99913]/20">
                                    <span className="text-sm font-medium text-[#474236]">{spec}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <button className="w-full py-3 gradient-border font-bold rounded-xl">
                        <span className="flex items-center justify-center gap-2">
                            <PhoneOutlined />
                            Contact {member.name.split(' ')[0]}
                        </span>
                    </button>
                </div>
            </div>
        </Drawer>
    );
};

const OurTeam = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [selectedMember, setSelectedMember] = useState(null);
    const [drawerVisible, setDrawerVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 100);
        return () => clearTimeout(timer);
    }, []);

    const handleViewProfile = (member) => {
        setSelectedMember(member);
        setDrawerVisible(true);
    };

    const handleCloseDrawer = () => {
        setDrawerVisible(false);
        setTimeout(() => setSelectedMember(null), 300);
    };

    return (
        <div className="min-h-screen main-bg py-16 px-4 relative overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                        }`}>
                        <h3 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-black via-[#474236] to-[#c99913] bg-clip-text text-transparent animate-pulse">
                            Meet Our Team
                        </h3>
                        <div className="w-32 h-1 bg-gradient-to-r from-black via-[#474236] to-[#c99913] mx-auto mb-4 rounded-full"></div>
                        <p className="text-lg text-gray-600 max-w-xl mx-auto leading-relaxed font-medium">
                            "Your Real Estate Experts, Ready to Serve"
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {teamMembers.map((member, index) => (
                        <TeamCard
                            key={member.id}
                            member={member}
                            index={index}
                            isVisible={isVisible}
                            onViewProfile={handleViewProfile}
                        />
                    ))}
                </div>
                <div className={`flex justify-center gap-4 transform transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}>
                    <button className="px-8 py-3 gradient-border font-bold rounded-xl">
                        <span className="flex items-center gap-2">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                            Prev
                        </span>
                    </button>
                    <button className="px-8 py-3 gradient-border font-bold rounded-xl">
                        <span className="flex items-center gap-2">
                            Next
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </span>
                    </button>
                </div>
            </div>
            <ProfileDrawer
                member={selectedMember}
                visible={drawerVisible}
                onClose={handleCloseDrawer}
            />
            <style jsx>{`
        .gradient-border {
          border: 2px solid transparent;
          border-image: linear-gradient(to right, #000000, #474236, #c99913) 1;
          background: transparent;
          position: relative;
          overflow: hidden;
        }
        .gradient-border::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 10px;
          padding: 2px;
          background: linear-gradient(to right, #c99913, #474236, #000000);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0;
        }
        .gradient-border:hover::before {
          opacity: 0; /* Disable hover effect */
        }
        .gradient-border:hover {
          transform: none; /* Remove scale transform */
          box-shadow: none; /* Remove shadow */
        }
        .gradient-border span {
          position: relative;
          z-index: 1;
          color: #474236;
        }
        .gradient-border:hover span {
          color: #474236; /* Remove color change on hover */
        }
        .main-bg {
          background: linear-gradient(135deg, #f5f7fa 0%, #e4e7eb 100%);
          position: relative;
          overflow: hidden;
        }
        .main-bg::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800"><defs><filter id="noise"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/><feColorMatrix type="saturate" values="0"/></filter></defs><rect width="800" height="800" filter="url(#noise)" opacity="0.05"/></svg>') repeat;
          opacity: 0.1;
          animation: subtleMove 20s infinite linear;
        }
        .main-bg::after {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle at center, rgba(201, 153, 19, 0.1) 0%, transparent 70%);
          animation: rotateGradient 30s infinite linear;
        }
        @keyframes subtleMove {
          0% { transform: translate(0, 0); }
          50% { transform: translate(20px, 20px); }
          100% { transform: translate(0, 0); }
        }
        @keyframes rotateGradient {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
        </div>
    );
};

export default OurTeam;