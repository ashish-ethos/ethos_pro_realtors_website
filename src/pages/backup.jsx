import React, { useState, useEffect } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Calendar,
  User,
  Tag,
  ArrowRight,
  TrendingUp,
  Building,
  Home
} from 'lucide-react';
import BuyProperties from "../../assets/images/premiumproperties/buying-properties.jpg";
import CalculateROI from "../../assets/images/premiumproperties/Calculate-ROI.jpg";
import GoodBadInvest from "../../assets/images/premiumproperties/good-vs-bad-investment.jpg";
import KeyThings from "../../assets/images/premiumproperties/Key-Things.jpg";

const OurBlog = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const visibleCards = 3;

  const blogPosts = [
    {
      id: 1,
      image: BuyProperties,
      date: 'June 17, 2025',
      category: 'Investment',
      tags: ['Investment', 'Real Estate'],
      title: 'How To Calculate ROI On Real Estate Investments - A Complete Guide',
      excerpt: 'Understanding the Return on Investment (ROI) is crucial when it comes to real estate investing decisions...',
      author: 'Ethos Team',
      icon: <TrendingUp className="w-5 h-5" />
    },
    {
      id: 2,
      image: CalculateROI,
      date: 'February 20, 2025',
      category: 'Investment',
      tags: ['Investment', 'Real Estate'],
      title: 'Why Buying Property Through An Authorized Channel Partner Is A Smart Choice?',
      excerpt: 'Buying property is a significant financial decision, and having the right guidance throughout the process...',
      author: 'Ethos Team',
      icon: <Home className="w-5 h-5" />
    },
    {
      id: 3,
      image: GoodBadInvest,
      date: 'March 10, 2025',
      category: 'Investment',
      tags: ['Investment', 'Real Estate'],
      title: 'Good vs. Bad Real Estate Investments: What To Watch Out For',
      excerpt: 'There are clear signs that differentiate a good investment from a poor one in real estate. Learn them here...',
      author: 'Ethos Team',
      icon: <TrendingUp className="w-5 h-5" />
    },
    {
      id: 4,
      image: KeyThings,
      date: 'June 17, 2025',
      category: 'Investment',
      tags: ['Investment', 'Real Estate'],
      title: 'Key Things To Consider Before Buying Commercial Or Residential Property',
      excerpt: 'Investing in real estate—whether commercial or residential—is a major financial commitment that requires...',
      author: 'Ethos Team',
      icon: <Building className="w-5 h-5" />
    }
  ];

  const nextSlide = () => {
    if (currentSlide + visibleCards < blogPosts.length) {
      setCurrentSlide((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide((prev) => prev - 1);
    }
  };

  return (
    <div className="min-h-screen bg-white py-20 px-4 overflow-hidden relative">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-16">
          <div className="text-center md:text-left">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 text-sm font-semibold rounded-full shadow text-white" style={{
                background: 'linear-gradient(to right, #c99913, #474236, #000000)'
              }}>
                Latest Insights
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent leading-tight mb-4" style={{
              backgroundImage: 'linear-gradient(to right, #c99913, #474236, #000000)'
            }}>
              Read From Our Blog
            </h2>
            <p className="text-gray-700 text-lg max-w-xl">
              Stay updated with the latest real estate trends, tips, and insights on our blog!
            </p>
          </div>

          {/* Top Right Explore Button */}
          <div className="mt-6 md:mt-0">
            <button className="group inline-flex items-center gap-2 text-white px-6 py-3 rounded-full font-semibold shadow-lg border"
              style={{
                background: 'linear-gradient(to right, #c99913, #474236, #000000)',
                borderImage: 'linear-gradient(to right, #000000, #474236, #c99913) 1'
              }}>
              <span>Explore Blog</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Blog Cards */}
        <div className="relative">
          <button
            onClick={prevSlide}
            className="absolute -left-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-white border rounded-full shadow hover:bg-yellow-100 transition"
            style={{ borderImage: 'linear-gradient(to right, #000000, #474236, #c99913) 1' }}
          >
            <ChevronLeft className="w-6 h-6 text-yellow-600" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute -right-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-white border rounded-full shadow hover:bg-yellow-100 transition"
            style={{ borderImage: 'linear-gradient(to right, #000000, #474236, #c99913) 1' }}
          >
            <ChevronRight className="w-6 h-6 text-yellow-600" />
          </button>

          <div className="grid md:grid-cols-3 gap-8 px-4">
            {blogPosts.slice(currentSlide, currentSlide + visibleCards).map((post) => (
              <div key={post.id} className="bg-white border rounded-3xl shadow-xl overflow-hidden group transition"
                style={{ borderImage: 'linear-gradient(to right, #000000, #474236, #c99913) 1' }}>
                <div className="relative h-64 overflow-hidden">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 text-xs font-bold text-white rounded-full shadow" style={{
                      background: 'linear-gradient(to right, #c99913, #474236, #000000)'
                    }}>
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4 text-yellow-500" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex gap-2">
                      {post.tags.map((tag, idx) => (
                        <span key={idx} className="flex items-center gap-1">
                          <Tag className="w-3 h-3 text-yellow-500" />
                          <span>{tag}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-yellow-600 transition">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mt-3 mb-5">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <User className="w-4 h-4 text-yellow-500" />
                      <span>by {post.author}</span>
                    </div>
                    <button className="px-4 py-2 text-white text-sm font-semibold rounded-full shadow"
                      style={{
                        background: 'linear-gradient(to right, #c99913, #474236, #000000)'
                      }}>
                      Continue reading
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurBlog;
