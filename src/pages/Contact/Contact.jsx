import React, { useState } from 'react';
import {
    Phone,
    Mail,
    MapPin,
    Facebook,
    Instagram,
    Linkedin,
    Twitter,
    Youtube,
} from 'lucide-react';
import ContactImg from '../../assets/images/about/4.png';

const Contact = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        mobile: '',
        email: '',
        message: '',
    });

    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
            setSubmitted(true);
            setTimeout(() => setSubmitted(false), 3000);
        }, 1500);
    };

    return (
        <div className="bg-gradient-to-br from-slate-50 to-blue-50">
            {/* Hero Section */}
            <div
                className="relative h-[400px] w-full bg-cover bg-center flex items-center justify-end pr-10"
                style={{ backgroundImage: `url(${ContactImg})` }}
            >
                <div className="absolute inset-0 z-0" />
                {/* <div className="relative z-10 text-right text-white px-4 max-w-xl">
                    <h1 className="text-4xl lg:text-6xl font-bold mb-2">Contact Us</h1>
                    <p className="text-lg lg:text-xl font-medium">
                        We'd love to connect with you — Let's talk!
                    </p>
                </div> */}
            </div>

            {/* Main Section */}
            <div className="container mx-auto px-4 py-10">
                <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
                    {/* Left Column: Form + Map */}
                    <div className="space-y-8">
                        {/* Contact Form */}
                        <div className="bg-white rounded-3xl shadow-2xl p-4 lg:p-6 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-100 to-transparent rounded-full -mr-16 -mt-16"></div>
                            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-indigo-100 to-transparent rounded-full -ml-12 -mb-12"></div>

                            <div className="relative z-10">
                                <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-1">
                                    Get In Touch
                                </h2>

                                {submitted ? (
                                    <div className="text-center py-12">
                                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Thank You!</h3>
                                        <p className="text-gray-600">We'll get back to you soon.</p>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-sm font-semibold text-gray-700 mb-1">
                                                    First Name <span className="text-red-500">*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    name="firstName"
                                                    value={formData.firstName}
                                                    onChange={handleChange}
                                                    placeholder="First Name"
                                                    required
                                                    className="w-full px-4 py-2 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition placeholder-gray-400"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-semibold text-gray-700 mb-1">
                                                    Last Name <span className="text-red-500">*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    name="lastName"
                                                    value={formData.lastName}
                                                    onChange={handleChange}
                                                    placeholder="Last Name"
                                                    required
                                                    className="w-full px-4 py-2 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition placeholder-gray-400"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-1">
                                                Mobile <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="tel"
                                                name="mobile"
                                                value={formData.mobile}
                                                onChange={handleChange}
                                                placeholder="Mobile Number"
                                                required
                                                className="w-full px-4 py-2 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition placeholder-gray-400"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-1">
                                                Email <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder="Email Address"
                                                required
                                                className="w-full px-4 py-2 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition placeholder-gray-400"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-1">Message</label>
                                            <textarea
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                placeholder="Write your message..."
                                                rows={4}
                                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition resize-none placeholder-gray-400"
                                            />
                                        </div>

                                        <div className='flex justify-center'>
                                            <button
                                                type="submit"
                                                disabled={loading}
                                                className="w-auto items-center
                                             text-black font-semibold py-2 cursor-pointer px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed border-2 bg-transparent"
                                                style={{
                                                    borderImage: 'linear-gradient(to right, #000000, #474236, #c99913) 1',
                                                    borderStyle: 'solid',
                                                    background: 'transparent',
                                                }}
                                            >
                                                {loading ? (
                                                    <div className="flex items-center justify-center">
                                                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                                                        Submitting...
                                                    </div>
                                                ) : (
                                                    'Submit'
                                                )}
                                            </button>

                                        </div>
                                    </form>
                                )}
                            </div>
                        </div>

                        {/* Map Card below form */}
                        <div className="bg-white rounded-xl shadow-xl overflow-hidden max-w-4xl mx-auto mt-12">
                            {/* Gradient Header */}
                            <div className="bg-transparent from-black p-2">
                                <h2 className="text-xl font-bold text-black">Our Location</h2>
                            </div>


                            {/* Map Embed */}
                            <div className="h-[400px] w-full">
                                <iframe
                                    title="Ethos Pro Realtors Location"
                                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d28074.83633459234!2d77.07113600000001!3d28.408557!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x68566b8719439e4d%3A0xb5f46970417c7d6d!2sEthos%20Pro%20Realtors!5e0!3m2!1sen!2sus!4v1754567678927!5m2!1sen!2sus"
                                    width="100%"
                                    height="100%"
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="border-0"
                                ></iframe>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Contact Cards, Office, Social */}
                    <div className="space-y-8">
                        {/* Contact Info Cards */}
                        <div className="bg-white rounded-3xl shadow-xl p-8 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-blue-100 to-transparent rounded-full -mr-10 -mt-10"></div>
                            <h2 className="text-2xl font-bold text-gray-800 mb-6">For Inquiries Contact:</h2>
                            <div className="space-y-6">
                                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-2xl border border-blue-100">
                                    <h3 className="font-semibold text-gray-800 text-lg mb-1">Satya Mandal</h3>
                                    <p className="text-blue-600 text-sm mb-4">(Sr. Sales Manager)</p>
                                    <div className="space-y-3">
                                        <div className="flex items-center">
                                            <Phone className="w-4 h-4 text-blue-600 mr-3" />
                                            <span className="text-gray-700">+91 99103 18013</span>
                                        </div>
                                        <div className="flex items-center">
                                            <Mail className="w-4 h-4 text-blue-600 mr-3" />
                                            <span className="text-gray-700">satya@ethosrealtors.com</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-6 rounded-2xl border border-emerald-100">
                                    <h3 className="font-semibold text-gray-800 text-lg mb-1">Avantika</h3>
                                    <p className="text-emerald-600 text-sm mb-4">(Investment Advisor)</p>
                                    <div className="space-y-3">
                                        <div className="flex items-center">
                                            <Phone className="w-4 h-4 text-emerald-600 mr-3" />
                                            <span className="text-gray-700">+91 81300 16627</span>
                                        </div>
                                        <div className="flex items-center">
                                            <Mail className="w-4 h-4 text-emerald-600 mr-3" />
                                            <span className="text-gray-700">avantika@ethosrealtors.com</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Office Location */}
                        <div className="bg-white rounded-3xl shadow-xl p-8">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6">Visit Our Office</h2>
                            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-2xl border border-purple-100">
                                <div className="flex items-start">
                                    <MapPin className="w-5 h-5 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-gray-800 mb-2">Suncity Success Tower</h3>
                                        <p className="text-gray-700 leading-relaxed">
                                            Unit No 507, 5th Floor, Tower-A, Sector 65,<br />
                                            Gurugram, Haryana 122001
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Social Media */}
                        <div className="bg-white rounded-3xl shadow-xl p-8">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6">Follow Us On</h2>
                            <div className="flex space-x-4">
                                <a href="#" className="w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center transition transform hover:scale-110">
                                    <Facebook className="w-5 h-5" />
                                </a>
                                <a href="#" className="w-12 h-12 bg-pink-600 hover:bg-pink-700 text-white rounded-full flex items-center justify-center transition transform hover:scale-110">
                                    <Instagram className="w-5 h-5" />
                                </a>
                                <a href="#" className="w-12 h-12 bg-blue-700 hover:bg-blue-800 text-white rounded-full flex items-center justify-center transition transform hover:scale-110">
                                    <Linkedin className="w-5 h-5" />
                                </a>
                                <a href="#" className="w-12 h-12 bg-gray-800 hover:bg-gray-900 text-white rounded-full flex items-center justify-center transition transform hover:scale-110">
                                    <Twitter className="w-5 h-5" />
                                </a>
                                <a href="#" className="w-12 h-12 bg-red-600 hover:bg-red-700 text-white rounded-full flex items-center justify-center transition transform hover:scale-110">
                                    <Youtube className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
