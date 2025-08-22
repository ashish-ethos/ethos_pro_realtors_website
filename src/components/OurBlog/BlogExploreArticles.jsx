import React, { useState } from "react";
import {
  Search,
  Calendar,
  Clock,
  Eye,
  User,
  Tag,
  ChevronRight,
  Filter,
  Grid,
  List,
  ArrowLeft,
} from "lucide-react";
import { Input, Select, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";

import BuyProperties from "../../assets/images/premiumproperties/buying-properties.jpg";
import CalculateROI from "../../assets/images/premiumproperties/Calculate-ROI.jpg";
import GoodBadInvest from "../../assets/images/premiumproperties/good-vs-bad-investment.jpg";
import KeyThings from "../../assets/images/premiumproperties/Key-Things.jpg";

// Content for all posts
const roiContent = `
**Introduction 💹**
Understanding the **Return on Investment (ROI)** is crucial when it comes to real estate investing. Whether you're buying a rental property, a commercial space, or a residential apartment for appreciation, knowing how to calculate ROI can help you evaluate the profitability of your investment. This guide will break down the concept of ROI, its formulas, and practical examples so you can make informed real estate decisions.

**What is ROI in Real Estate? 📊**
ROI (Return on Investment) measures the **profitability of a property investment**. It's the percentage return you earn on the money invested in a property, factoring in income and costs. A higher ROI indicates a better investment.

**Basic ROI Formula 🧮**
**ROI = (Net Profit / Total Investment) x 100**

Where:

* **Net Profit** = Total Income – Total Expenses
* **Total Investment** = Purchase Price + Renovation + Other Costs

Example:

* Total rental income per year = ₹6,00,000
* Total expenses = ₹1,50,000
* Total investment = ₹40,00,000
* **Net Profit** = ₹6,00,000 – ₹1,50,000 = ₹4,50,000
* **ROI** = (₹4,50,000 / ₹40,00,000) x 100 = 11.25%

**Key Components That Affect ROI ⚙️**
* **Rental Income** – Monthly or yearly earnings from tenants
* **Property Price** – Initial cost of buying the asset
* **Maintenance & Taxes** – Ongoing costs like society fees, repairs, property tax
* **Loan EMI & Interest** – If financed, consider EMI and interest paid
* **Vacancy Periods** – Times when the property remains unoccupied

**Types of ROI Calculations 📐**
**1. Cash-on-Cash Return**
Useful for investors using financing (loans): **CoC ROI = (Annual Cash Flow / Cash Invested) x 100**

**2. Cap Rate (Capitalization Rate)**
Ideal for evaluating rental properties: **Cap Rate = (Net Operating Income / Property Value) x 100**

**3. Total ROI (Including Appreciation)**
**Total ROI = ((Rental Income + Property Appreciation – Expenses) / Total Investment) x 100**

**Tips to Improve ROI on Property Investments 🚀**
* Choose high-demand locations with rental yield potential
* Negotiate better purchase prices
* Renovate smartly to boost rent/resale value
* Reduce vacancy periods with effective marketing
* Use tax benefits & deductions to lower costs

**Tools & Resources 🛠️**
* Online ROI calculators
* Rental yield estimators
* Real estate investment software
* Consultation with authorized channel partners

**Conclusion ✅**
Calculating ROI is essential to assess the success of any real estate investment. Whether you're buying for rental income, appreciation, or a mix of both, having clarity on your expected returns helps reduce risk and optimize profit. Consult with a trusted **authorized channel partner** like **Ethos Pro Realtors** to guide you through high-ROI opportunities across Delhi NCR.

Start smart, invest smarter! 📈🏠
`;

const channelPartnerContent = `
**Introduction 🏡**
Buying property is a significant financial decision, and having the right guidance can make all the difference. While many buyers directly approach developers or real estate agents, an increasingly popular and reliable option is purchasing property through an authorized channel partner. But what exactly does this mean, and why is it beneficial? In this blog, we will explore the role of an authorized channel partner and why choosing one can lead to a smarter, safer, and more rewarding real estate investment.

**What is an Authorized Channel Partner? 🤝**
An authorized channel partner is a certified and trusted intermediary between real estate developers and buyers. These professionals work directly with developers to market and sell properties, ensuring a transparent and efficient process for buyers. Unlike traditional brokers, they have official authorization and exclusive deals, making them a valuable resource for property seekers.

**The Role of a Channel Partner in Real Estate 🏗️**
* **Bridging the Gap** – Channel partners act as a link between developers and buyers, ensuring smooth transactions and clear communication.
* **Providing Verified Information** – They offer accurate and up-to-date details about projects, including pricing, amenities, and legal clearances.
* **Guiding Buyers** – From property selection to documentation, channel partners assist buyers at every step.
* **Offering Exclusive Deals** – Since they work closely with developers, they often provide special discounts, payment plans, and incentives unavailable elsewhere.

**Key Benefits of Buying Through an Authorized Channel Partner ✅**
1. **Access to Exclusive Offers 🎯**
Moreover, authorized channel partners often have access to pre-launch offers, discounts, and special payment plans that are not available to the general public. This means you can secure a better deal than if you approached the developer directly.

2. **Transparency and Trust 🔍**
In addition, since channel partners are officially recognized by developers, they adhere to ethical business practices, ensuring a fair and transparent transaction process. This minimizes the risk of fraud and hidden costs.

3. **Expert Guidance and Market Knowledge 📊**
A good channel partner provides in-depth market insights, helping buyers choose the right property based on their budget, preferences, and investment goals. Their expertise can help you make an informed decision.

4. **End-to-End Assistance 📝**
Furthermore, from site visits and price negotiations to documentation and loan assistance, authorized channel partners provide comprehensive support throughout the buying process, making it seamless and hassle-free.

5. **No Additional Cost for Buyers 💰**
Contrary to popular belief, buyers do not have to pay extra fees when purchasing through a channel partner. Their commission is generally paid by the developer, making it a win-win for buyers seeking expert guidance at no additional cost.

**Conclusion 🎉**
To sum it up, buying property through an authorized channel partner is a smart, safe, and strategic choice for homebuyers and investors alike. With access to exclusive deals, expert guidance, and a transparent buying process, you can make a confident real estate investment.

Looking for your dream home or perfect investment opportunity? Contact Ethos Pro Realtors today and let our experts guide you! 📞🏡
`;

const goodBadInvestmentContent = `
**Introduction 💼**
In the world of real estate, not all investments are created equal. While some properties generate long-term wealth and stable rental income, others can lead to legal troubles, financial losses, or stagnant growth. Knowing the difference between a good and bad property investment is critical for both first-time buyers and seasoned investors.

This guide will help you evaluate the key factors that separate profitable investments from risky ones, so you can make confident, informed decisions.

**Location: The Game-Changer 📍**
**Good Investment:**
* Well-connected to roads, metro, and public transport
* Near business hubs, schools, hospitals, and retail centers
* Future-ready with infrastructure plans (expressways, SEZs, etc.)

**Bad Investment:**
* Remote or underdeveloped areas with poor connectivity
* Low demand and high vacancy rates
* Unclear zoning or land use plans

**Developer Reputation & Project Credentials 🏗️**
**Good Investment:**
* Trusted, RERA-registered developers
* Timely project delivery record
* Transparent pricing, legal clearances, and customer service

**Bad Investment:**
* Unknown or blacklisted builders
* Frequent delays and construction issues
* Hidden charges, unclear documentation

**Rental & Resale Potential 🔁**
**Good Investment:**
* High rental demand in the area
* Steady appreciation over 5–10 years
* Tenant-friendly amenities and layouts

**Bad Investment:**
* Low occupancy or oversupply
* No market appreciation
* Outdated layouts or poor amenities

**Legal Clearances & Title Verification 📜**
**Good Investment:**
* Clear land title, RERA compliance
* Verified approvals from authorities
* No encumbrances or litigation

**Bad Investment:**
* Disputed ownership or unverified sellers
* Missing or forged documents
* No occupancy or completion certificate

**Conclusion ✅**
Distinguishing between a good and bad property investment boils down to research, timing, and choosing the right partners. Look for growth potential, legal safety, financial viability, and builder trustworthiness. Working with an authorized channel partner like Ethos Pro Realtors ensures that your investment is secure, rewarding, and future-ready.

Make your next property move a smart one—because in real estate, informed choices pay the best returns. 🏡
`;

const keyThingsContent = `
**Introduction 🏢**
Investing in real estate—whether commercial or residential—is a major financial decision that requires careful thought and strategic planning. With property prices constantly evolving and regulatory norms frequently changing, making the right choice can be daunting. This blog outlines the key factors to consider before buying a commercial or residential property, helping you make a smart, secure, and profitable investment.

**Define Your Purpose & Investment Goals 🎯**
Start by identifying your objective:

* Are you buying for personal use, rental income, or long-term appreciation?
* Is your focus on a stable income stream (commercial) or future resale value (residential)?
* Clarifying your goal will help determine the right property type and location.

**Choose the Right Location 📍**
Location plays a pivotal role in property valuation and rental potential. Evaluate:

* Proximity to business hubs, schools, transport, and healthcare
* Future infrastructure developments (metro, highways, SEZs)
* Neighborhood safety and livability for residential; footfall and connectivity for commercial

**Check Legal Clearances & Documentation 📜**
Ensure the property has:

* Title deed and ownership documents
* RERA registration
* Land use and zoning approvals
* No legal disputes or encumbrances
* Engage a real estate lawyer or an authorized channel partner to verify legal documentation.

**Understand Market Trends & Price Appreciation 📈**
Study current market trends:

* Is the location appreciating?
* Are rental yields favorable?
* What are the ongoing and future developments nearby?
* Use property portals and consult local experts to assess ROI.

**Conclusion ✅**
Whether you're investing in a commercial property for rental returns or a residential home for your family, careful research and expert guidance are essential. Consider partnering with an authorized channel partner to simplify the process, verify documentation, and get access to exclusive deals.

A wise property decision today can build long-term wealth tomorrow. 🏠💼
`;

// Content map for all posts
const contentMap = {
  1: { content: roiContent, image: CalculateROI },
  2: { content: channelPartnerContent, image: BuyProperties },
  3: { content: goodBadInvestmentContent, image: GoodBadInvest },
  4: { content: keyThingsContent, image: KeyThings },
  5: {
    content:
      "Explore the latest market trends and expert predictions that will shape the real estate landscape in 2025...",
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&h=400&fit=crop",
  },
};

const blogPosts = [
  {
    id: 1,
    image: CalculateROI,
    date: "July 2, 2025",
    category: "Investment",
    tags: ["Investment", "Real Estate"],
    title: "How To Calculate ROI On Real Estate Investments - A Complete Guide",
    excerpt:
      "Understanding the Return on Investment (ROI) is crucial when it comes to real estate investing decisions. Learn the complete methodology...",
    author: "Ethos Team",
    readTime: "8 min read",
    views: "2.4k",
  },
  {
    id: 2,
    image: BuyProperties,
    date: "February 28, 2025",
    category: "Investment",
    tags: ["Investment", "Real Estate"],
    title:
      "Why Buying Property Through An Authorized Channel Partner Is A Smart Choice?",
    excerpt:
      "Buying property is a significant financial decision, and having the right guidance throughout the process can make all the difference...",
    author: "Ethos Team",
    readTime: "6 min read",
    views: "1.8k",
  },
  {
    id: 3,
    image: GoodBadInvest,
    date: "July 2, 2025",
    category: "Investment",
    tags: ["Investment", "Real Estate"],
    title: "Good vs. Bad Real Estate Investments: What To Watch Out For",
    excerpt:
      "There are clear signs that differentiate a good investment from a poor one in real estate. Learn the key indicators and red flags...",
    author: "Ethos Team",
    readTime: "10 min read",
    views: "3.2k",
  },
  {
    id: 4,
    image: KeyThings,
    date: "July 2, 2025",
    category: "Investment",
    tags: ["Investment", "Real Estate"],
    title:
      "Key Things To Consider Before Buying Commercial Or Residential Property",
    excerpt:
      "Investing in real estate—whether commercial or residential—is a major financial commitment that requires careful consideration...",
    author: "Ethos Team",
    readTime: "12 min read",
    views: "2.9k",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&h=400&fit=crop",
    date: "May 15, 2025",
    category: "Market Trends",
    tags: ["Market", "Analysis"],
    title:
      "Real Estate Market Predictions for 2025: What Investors Should Know",
    excerpt:
      "Explore the latest market trends and expert predictions that will shape the real estate landscape in 2025...",
    author: "Market Analyst",
    readTime: "7 min read",
    views: "4.1k",
  },
];

const BlogExploreArticles = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPost, setSelectedPost] = useState(blogPosts[0]);
  const [hoveredPost, setHoveredPost] = useState(null);
  const [viewMode, setViewMode] = useState("list");
  const [filterCategory, setFilterCategory] = useState("all");
  const { Search } = Input;
  const { Option } = Select;


  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchTerm.trim()) {
      setSelectedPost(blogPosts[0]);
    }
  };

  // Filter posts based on search term and category
  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      );

    const matchesCategory =
      filterCategory === "all" ||
      post.category.toLowerCase() === filterCategory;

    return matchesSearch && matchesCategory;
  });

  // Convert markdown-like content to JSX
  const renderContent = (content) => {
    const lines = content.split("\n");
    return lines.map((line, index) => {
      if (line.startsWith("**") && line.endsWith("**")) {
        const text = line.replace(/\*\*/g, "");
        if (text.startsWith("Introduction") || text.startsWith("Conclusion")) {
          return (
            <h2
              key={index}
              className="text-2xl font-bold mt-8 mb-4 text-gray-900"
            >
              {text}
            </h2>
          );
        } else if (text.includes(":")) {
          return (
            <h3
              key={index}
              className="text-xl font-semibold mt-6 mb-3 text-gray-800"
            >
              {text}
            </h3>
          );
        } else {
          return (
            <h3
              key={index}
              className="text-xl font-semibold mt-6 mb-3 text-gray-800"
            >
              {text}
            </h3>
          );
        }
      }
      if (line.startsWith("* ")) {
        return (
          <li
            key={index}
            className="ml-6 list-disc text-gray-700 leading-relaxed"
          >
            {line.replace("* ", "")}
          </li>
        );
      }
      if (line.match(/^\d+\.\s/)) {
        return (
          <li
            key={index}
            className="ml-6 list-decimal text-gray-700 leading-relaxed"
          >
            {line.replace(/^\d+\.\s/, "")}
          </li>
        );
      }
      if (line.trim() === "") {
        return null;
      }
      return (
        <p key={index} className="mb-4 text-gray-700 leading-relaxed">
          {line}
        </p>
      );
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-md border-b border-gray-200/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="flex-1 max-w-2xl">
              <Input
                placeholder="Search articles, topics, or categories..."
                value={searchTerm}
                onChange={handleInputChange}
                allowClear
                prefix={<SearchOutlined className="text-gray-400" />}
                size="middle"
                className="!rounded-xl h-[40px] items-center shadow-sm"

              />
            </div>

            {/* Controls */}
            <div className="flex items-center gap-3">
              {/* Category Select */}
              <Select
                value={filterCategory}
                onChange={(value) => setFilterCategory(value)}
                size="middle"
                style={{ width: 200 }}
                className="!rounded-xl !h-10 shadow-sm"
                dropdownStyle={{ borderRadius: "10px" }}
              >
                <Option value="all">All Categories</Option>
                <Option value="investment">Investment</Option>
                <Option value="market trends">Market Trends</Option>
              </Select>

              {/* View Toggle */}
              <div className="flex bg-white border border-gray-300 rounded-xl shadow-sm p-1">
                <Button
                  type={viewMode === "grid" ? "primary" : "text"}
                  icon={<Grid className="w-4 h-4" />}
                  onClick={() => {
                    setViewMode("grid");
                    setSelectedPost(null);
                  }}
                  size="middle"
                  className={`!rounded-lg !h-8 w-8 flex items-center justify-center ${viewMode === "grid" ? "shadow" : ""
                    }`}
                />
                <Button
                  type={viewMode === "list" ? "primary" : "text"}
                  icon={<List className="w-4 h-4" />}
                  onClick={() => {
                    setViewMode("list");
                    setSelectedPost(blogPosts[0]);
                  }}
                  size="middle"
                  className={`!rounded-lg !h-8 w-8 flex items-center justify-center ${viewMode === "list" ? "shadow" : ""
                    }`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex gap-8">
          {/* Article List */}
          {viewMode === "list" && (
            <div className="w-1/3">
              <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-xl border border-white/50 p-6 sticky top-24">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                    <Filter className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Featured Articles
                  </h3>
                </div>

                <div className="space-y-4 max-h-[calc(100vh-250px)] overflow-y-auto scrollbar-thin scrollbar-thumb-blue-300 scrollbar-track-gray-100 overflow-x-hidden">
                  {(searchTerm.trim() || filterCategory !== "all"
                    ? filteredPosts
                    : blogPosts
                  ).map((post) => (
                    <div
                      key={post.id}
                      className={`group relative p-4 rounded-2xl cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-[1.02] ${selectedPost.id === post.id
                        ? "bg-transparent text-black border-1  shadow-lg"
                        : "bg-white/80 hover:bg-white text-gray-900 border border-gray-200/50"
                        }`}
                      onClick={() => setSelectedPost(post)}
                    >
                      <div className="flex gap-3">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-16 h-16 object-cover rounded-xl flex-shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <h4
                            className={`font-semibold text-sm leading-tight mb-2 line-clamp-2 ${selectedPost.id === post.id
                              ? "text-gray-600"
                              : "text-gray-900"
                              }`}
                          >
                            {post.title}
                          </h4>
                          <div className="flex items-center gap-2 text-xs">
                            <Calendar className="w-3 h-3" />
                            <span>{post.date}</span>
                            <Clock className="w-3 h-3 ml-1" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                      </div>

                      {selectedPost.id === post.id && (
                        <ChevronRight className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
          {viewMode === "grid" && !selectedPost && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
              {(searchTerm.trim() || filterCategory !== "all"
                ? filteredPosts
                : blogPosts
              ).map((post) => (
                <div
                  key={post.id}
                  className={`group relative p-4 rounded-2xl cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-[1.02]  ${hoveredPost === post.id
                    ? "bg-transparent text-black shadow-lg"
                    : "bg-white/80 hover:bg-white text-gray-900 border border-gray-200/50"
                    }`}
                  onClick={() => setSelectedPost(post)}
                  onMouseEnter={() => setHoveredPost(post.id)}
                  onMouseLeave={() => setHoveredPost(null)}
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-40 object-cover rounded-xl mb-4"
                  />
                  <h4
                    className={`font-semibold text-sm leading-tight mb-2 line-clamp 2 ${hoveredPost === post.id ? "text-black" : "text-gray-900"
                      }`}
                  >
                    {post.title}
                  </h4>
                  <div className="flex items-center gap-2 text-xs mb-2">
                    <Calendar className="w-3 h-3" />
                    <span>{post.date}</span>
                    <Clock className="w-3 h-3 ml-1" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Selected Article Content */}
          {selectedPost && (
            <div className={`${viewMode === "list" ? "w-2/3" : "w-full"}`}>
              {viewMode === "grid" && (
                <button
                  className="left-4 absolute left-4 z-20 p-2 bg-white rounded-full shadow-lg"
                  onClick={() => setSelectedPost(null)}
                >
                  <ArrowLeft size={24} />
                </button>
              )}
              <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-xl border border-white/50 overflow-hidden">
                {/* Article Header */}
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={contentMap[selectedPost.id].image}
                    alt={selectedPost.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {selectedPost.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-medium rounded-full border border-white/30"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h1 className="text-3xl font-bold text-white leading-tight mb-4">
                      {selectedPost.title}
                    </h1>
                    <div className="flex items-center gap-6 text-white/90 text-sm">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        <span>{selectedPost.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{selectedPost.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{selectedPost.readTime}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Eye className="w-4 h-4" />
                        <span>{selectedPost.views}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Article Content */}
                <div className="p-8">
                  <div className="prose prose-lg max-w-none">
                    {renderContent(contentMap[selectedPost.id].content)}
                  </div>

                  {/* Article Footer */}
                  <div className="mt-12 pt-8 border-t border-gray-200">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Tag className="w-5 h-5 text-gray-500" />
                        <div className="flex gap-2">
                          {selectedPost.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1 bg-blue-50 text-blue-600 text-sm font-medium rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="text-sm text-gray-500">
                        Published by {selectedPost.author}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogExploreArticles;
