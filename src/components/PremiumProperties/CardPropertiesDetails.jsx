import React from "react";
import { MapPin, Home, Star, Eye, Calendar, ExternalLink } from "lucide-react";

const CardPropertiesDetails = ({ property }) => {
  if (!property) {
    return (
      <div className="flex items-center justify-center p-8 bg-gray-50 rounded-lg">
        <div className="text-center">
          <Home className="mx-auto h-12 w-12 text-gray-400 mb-4" />
          <p className="text-gray-600 text-lg">No property details available.</p>
        </div>
      </div>
    );
  }

  const handleViewMap = () => {
    // Extract the src from the iframe HTML or use a direct Google Maps URL
    const mapUrl = `https://maps.google.com/maps?q=${encodeURIComponent(property.location.full)}&output=embed`;
    window.open(mapUrl, '_blank');
  };

  return (
    <div className="max-w-7xl mx-auto bg-white shadow-sm border border-gray-200 overflow-hidden  scrollbar-thin">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 px-6 py-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">{property.name}</h1>
          {property.featured && (
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
              <Star className="w-4 h-4 mr-1" />
              Featured
            </span>
          )}
        </div>
        <div className="flex items-center mt-2 text-gray-600">
          <MapPin className="w-5 h-5 mr-2 text-red-500" />
          <span className="text-sm">{property.location.full}</span>
        </div>
      </div>

      <div className="p-6">
        {/* Full Width Image */}
        <div className="mb-8">
          <div className="relative">
            <img
              src={property.image}
              alt={property.name}
              className="w-full h-96 object-cover rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            />
            <div className="absolute top-4 left-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-green-100 text-green-800 backdrop-blur-sm">
                {property.type}
              </span>
            </div>
            <div className="absolute top-4 right-4">
              <div className="flex items-center bg-white/90 backdrop-blur-md rounded-full shadow-lg overflow-hidden border border-gray-200">

                {/* Rating */}
                <div className="flex items-center gap-1 px-3 py-1 hover:bg-yellow-50 transition-colors">
                  <Star className="w-4 h-4 text-yellow-500" />
                  <span className="text-sm font-semibold text-gray-900">{property.rating}</span>
                  <span className="text-[11px] text-gray-600">Rating</span>
                </div>

                {/* Divider */}
                <div className="h-6 w-px bg-gray-300"></div>

                {/* Views */}
                <div className="flex items-center gap-1 px-3 py-1 hover:bg-blue-50 transition-colors">
                  <Eye className="w-4 h-4 text-blue-500" />
                  <span className="text-sm font-semibold text-gray-900">{property.views}</span>
                  <span className="text-[11px] text-gray-600">Views</span>
                </div>

              </div>
            </div>



          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Amenities */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Home className="w-5 h-5 mr-2 text-indigo-600" />
                Amenities
              </h4>
              <div className="flex flex-wrap gap-2">
                {(property.amenities || []).map((amenity, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-3 py-2 rounded-lg text-sm font-medium bg-blue-50 text-blue-700 border border-blue-200 hover:bg-blue-100 transition-colors duration-200"
                  >
                    {amenity}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Middle Column: Property Details */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <Home className="w-5 h-5 mr-2 text-indigo-600" />
                Property Details
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-sm font-medium text-gray-600">Price</span>
                  <div className="text-right">
                    <div className="text-lg font-bold text-green-600">{property.price}</div>
                    <div className="text-xs text-gray-500">Base: {property.basePrice}</div>
                  </div>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-sm font-medium text-gray-600">Discount</span>
                  <span className="text-sm font-semibold text-red-600">{property.discount}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-sm font-medium text-gray-600">Area</span>
                  <span className="text-sm text-gray-900">{property.area}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-sm font-medium text-gray-600">Type</span>
                  <span className="text-sm text-gray-900">{property.type}</span>
                </div>
                {property.units && (
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-sm font-medium text-gray-600">Units</span>
                    <span className="text-sm text-gray-900">{property.units}</span>
                  </div>
                )}
                {property.towers && (
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-sm font-medium text-gray-600">Towers</span>
                    <span className="text-sm text-gray-900">{property.towers}</span>
                  </div>
                )}
                {property.openArea && (
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-sm font-medium text-gray-600">Open Area</span>
                    <span className="text-sm text-gray-900">{property.openArea}</span>
                  </div>
                )}
                {property.structure && (
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-sm font-medium text-gray-600">Structure</span>
                    <span className="text-sm text-gray-900">{property.structure}</span>
                  </div>
                )}
                {property.configurations && (
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-sm font-medium text-gray-600">Configurations</span>
                    <span className="text-sm text-gray-900 text-end">{property.configurations}</span>
                  </div>
                )}
                <div className="flex justify-between items-center py-2">
                  <span className="text-sm font-medium text-gray-600 flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    Updated
                  </span>
                  <span className="text-sm text-gray-900">{property.updatedOn}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Location Details */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-red-600" />
                Location Details
              </h3>
              <div className="space-y-3">
                {property.location.address && (
                  <div className="flex justify-between items-start py-2 border-b border-gray-200">
                    <span className="text-sm font-medium text-gray-600">Address</span>
                    <span className="text-sm text-gray-900 text-right max-w-xs">{property.location.address}</span>
                  </div>
                )}
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-sm font-medium text-gray-600">City</span>
                  <span className="text-sm text-gray-900">{property.location.city}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-sm font-medium text-gray-600">State</span>
                  <span className="text-sm text-gray-900">{property.location.state}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-sm font-medium text-gray-600">Area</span>
                  <span className="text-sm text-gray-900">{property.location.area}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-sm font-medium text-gray-600">Country</span>
                  <span className="text-sm text-gray-900">{property.location.country}</span>
                </div>
                {property.location.zip && (
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-sm font-medium text-gray-600">Zip Code</span>
                    <span className="text-sm text-gray-900">{property.location.zip}</span>
                  </div>
                )}

                {/* View Map Button */}
                <div className="pt-4">
                  <button
                    onClick={handleViewMap}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-gray-700 font-medium rounded-full border border-gray-300 shadow-sm hover:shadow-md hover:bg-gray-50 transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <MapPin className="w-5 h-5 text-red-500" />
                    View on Map
                    <ExternalLink className="w-4 h-4 text-gray-400" />
                  </button>

                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Contact Form */}
        <div className="mt-10 bg-gray-50 rounded-lg p-6 border border-gray-200">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Enquiry Form</h3>
          <form className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
              <input
                type="tel"
                placeholder="Your Phone"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Submit */}
            <div className="md:col-span-3 flex justify-end">
              <button
                type="submit"
                className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition"
              >
                Submit
              </button>
            </div>
          </form>
        </div>

      </div>
    </div>
  );
};

export default CardPropertiesDetails;