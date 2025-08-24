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

const BlogExploreArticles = ({ blogPosts, contentMap }) => {
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
      if (line.startsWith("- ")) {
        return (
          <li
            key={index}
            className="ml-6 list-disc text-gray-700 leading-relaxed"
          >
            {line.replace("- ", "")}
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
                  className={`!rounded-lg !h-8 w-8 flex items-center justify-center ${
                    viewMode === "grid" ? "shadow" : ""
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
                  className={`!rounded-lg !h-8 w-8 flex items-center justify-center ${
                    viewMode === "list" ? "shadow" : ""
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

                <div className="space-y-4 px-2 max-h-[calc(100vh-250px)] overflow-y-auto scrollbar-thin scrollbar-thumb-blue-300 scrollbar-track-gray-100 overflow-x-hidden">
                  {(searchTerm.trim() || filterCategory !== "all"
                    ? filteredPosts
                    : blogPosts
                  ).map((post) => (
                    <div
                      key={post.id}
                      className={`group relative p-4 rounded-2xl cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-[1.02] ${
                        selectedPost.id === post.id
                          ? "bg-transparent text-black border-1 shadow-lg"
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
                            className={`font-semibold text-sm leading-tight mb-2 line-clamp-2 ${
                              selectedPost.id === post.id
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
                  className={`group relative p-4 rounded-2xl cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-[1.02] ${
                    hoveredPost === post.id
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
                    className={`font-semibold text-sm leading-tight mb-2 line-clamp 2 ${
                      hoveredPost === post.id ? "text-black" : "text-gray-900"
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