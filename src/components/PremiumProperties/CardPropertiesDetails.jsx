import React from "react";
import {
  MapPin,
  Home,
  Star,
  Eye,
  Calendar,
  ExternalLink,
  MapPinned,
  CheckCircle,
  Dumbbell,
  Car,
  Trees,
  Wifi,
  ShieldCheck,
} from "lucide-react";
import ContactForm from "../../pages/Contact/ContactForm";

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
    const mapUrl = `https://maps.google.com/maps?q=${encodeURIComponent(
      property.location.full
    )}&output=embed`;
    window.open(mapUrl, "_blank");
  };

  const getAmenityIcon = (amenity) => {
    const key = amenity.toLowerCase();
    if (key.includes("gym") || key.includes("fitness")) return <Dumbbell className="w-4 h-4" />;
    if (key.includes("parking")) return <Car className="w-4 h-4" />;
    if (key.includes("garden") || key.includes("park")) return <Trees className="w-4 h-4" />;
    if (key.includes("wifi") || key.includes("internet")) return <Wifi className="w-4 h-4" />;
    if (key.includes("security")) return <ShieldCheck className="w-4 h-4" />;
    return <CheckCircle className="w-4 h-4" />;
  };

  return (
    <div className="max-w-7xl mx-auto bg-white shadow-sm border border-gray-200 overflow-y-auto custom-scrollbar scrollbar-thin rounded-xl">
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

      {/* Main Content */}
      <div className="p-6">
        {/* Property Image */}
        <div className="mb-8 relative">
          <img
            src={property.image}
            alt={property.name}
            className="w-full h-96 object-cover rounded-xl shadow-lg"
          />
          <div className="absolute top-4 left-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-green-100 text-green-800 backdrop-blur-sm">
              {property.type}
            </span>
          </div>
          <div className="absolute top-4 right-4">
            <div className="flex items-center bg-white/90 backdrop-blur-md rounded-full shadow-lg overflow-hidden border border-gray-200">
              <div className="flex items-center gap-1 px-3 py-1 hover:bg-yellow-50">
                <Star className="w-4 h-4 text-yellow-500" />
                <span className="text-sm font-semibold text-gray-900">{property.rating}</span>
                <span className="text-[11px] text-gray-600">Rating</span>
              </div>
              <div className="h-6 w-px bg-gray-300"></div>
              <div className="flex items-center gap-1 px-3 py-1 hover:bg-blue-50">
                <Eye className="w-4 h-4 text-blue-500" />
                <span className="text-sm font-semibold text-gray-900">{property.views}</span>
                <span className="text-[11px] text-gray-600">Views</span>
              </div>
            </div>
          </div>
        </div>

        {/* Row 1: Property Details + Location Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {/* Property Details */}
          <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
            <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center border-b border-gray-300 pb-2">
              <Home className="w-5 h-5 mr-2 text-indigo-600" />
              Property Details
            </h4>
            <div className="space-y-3">
              <div className="flex justify-between py-2 border-b border-gray-200">
                <span className="text-sm font-medium text-gray-600">Price</span>
                <span className="text-lg font-bold text-green-600">{property.price}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-200">
                <span className="text-sm font-medium text-gray-600">Discount</span>
                <span className="text-sm font-semibold text-red-600">{property.discount}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-200">
                <span className="text-sm font-medium text-gray-600">Area</span>
                <span className="text-sm text-gray-900">{property.area}</span>
              </div>
              {property.configurations && (
                <div className="flex justify-between py-2 border-b border-gray-200">
                  <span className="text-sm font-medium text-gray-600">Configurations</span>
                  <span className="text-sm text-gray-900">{property.configurations}</span>
                </div>
              )}
              <div className="flex justify-between py-2">
                <span className="text-sm font-medium text-gray-600 flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  Updated
                </span>
                <span className="text-sm text-gray-900">{property.updatedOn}</span>
              </div>
            </div>
          </div>

          {/* Location Details */}
          <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
            <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center border-b border-gray-300 pb-2">
              <MapPin className="w-5 h-5 mr-2 text-red-600" />
              Location Details
            </h4>
            <div className="space-y-3">
              <p className="text-sm text-gray-700">{property.location.address}</p>
              <div className="grid grid-cols-2 gap-2 text-sm text-gray-700">
                <span className="text-sm fontFamily-bebas text-center shadow-sm p-2 bg-white rounded-md border border-gray-200 hover:shadow-md hover:bg-gray-50 transition-all">City : {property.location.city}</span>
                <span className="text-sm fontFamily-bebas text-center shadow-sm p-2 bg-white rounded-md border border-gray-200 hover:shadow-md hover:bg-gray-50 transition-all">State : {property.location.state}</span>
                <span className="text-sm fontFamily-bebas text-center shadow-sm p-2 bg-white rounded-md border border-gray-200 hover:shadow-md hover:bg-gray-50 transition-all">Area : {property.location.area}</span>
                <span className="text-sm fontFamily-bebas text-center shadow-sm p-2 bg-white rounded-md border border-gray-200 hover:shadow-md hover:bg-gray-50 transition-all">Country : {property.location.country}</span>
              </div>
              <button
                onClick={handleViewMap}
                className="inline-flex items-center gap-2 px-4 py-2 mt-3 bg-white text-gray-700 font-medium rounded-full border border-gray-300 shadow-sm hover:shadow-md hover:bg-gray-50 transition-all"
              >
                <MapPinned className="w-5 h-5 text-red-500" />
                View on Map
                <ExternalLink className="w-4 h-4 text-gray-400" />
              </button>
            </div>
          </div>

          {/* Amenities */}
          <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
            <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center border-b border-gray-300 pb-2">
              <Home className="w-5 h-5 mr-2 text-indigo-600  " />
              Amenities
            </h4>
            <div className="grid grid-cols-2 gap-3">
              {property.amenities?.map((amenity, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm text-gray-700 shadow-sm p-2 bg-white rounded-md border border-gray-200 hover:shadow-md hover:bg-gray-50 transition-all ">
                  {getAmenityIcon(amenity)}
                  {amenity}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Row 2: Amenities + Contact Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">


          {/* Contact Form */}
          <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">

            <ContactForm propertyId={property.id} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPropertiesDetails;