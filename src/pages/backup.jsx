import React from 'react';
import { Drawer, Button, Typography, Tag } from 'antd';
import { CloseOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

const ViewDetailsDrawer = ({ open, onClose, project }) => {
  const isCommercial = project?.type?.toLowerCase().includes('shop') || project?.type?.toLowerCase().includes('office');

  return (
    <Drawer
      title={
        <Title 
          level={4} 
          className="m-0 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 font-black text-2xl tracking-wide"
        >
          {project?.name || 'Project Details'}
        </Title>
      }
      placement="right"
      onClose={onClose}
      open={open}
      width={680} // Increased from 420 to 680
      closable={false}
      className="ultra-advanced-light-drawer"
      extra={
        <Button
          type="text"
          icon={<CloseOutlined className="text-gray-600" />}
          onClick={onClose}
          className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 backdrop-blur-xl border border-blue-200/50 hover:border-red-300 hover:bg-gradient-to-br hover:from-red-50 hover:to-pink-50 hover:scale-110 hover:rotate-180 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-red-200/50 flex items-center justify-center group"
          aria-label="close"
        />
      }
    >
      <div className="space-y-8 p-8 relative min-h-full">
        {/* Floating Light Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-blue-200/40 rounded-full animate-ping"></div>
          <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-purple-200/50 rounded-full animate-pulse"></div>
          <div className="absolute top-1/2 left-1/3 w-2.5 h-2.5 bg-pink-200/30 rounded-full animate-bounce"></div>
          <div className="absolute top-1/6 right-1/3 w-2 h-2 bg-emerald-200/40 rounded-full animate-ping delay-1000"></div>
          <div className="absolute bottom-1/4 left-1/5 w-3 h-3 bg-amber-200/30 rounded-full animate-pulse delay-500"></div>
        </div>
        
        {/* Property Image */}
        {project?.image && (
          <div className="relative group cursor-pointer">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            <div className="relative w-full h-72 overflow-hidden rounded-3xl bg-gradient-to-br from-blue-50/80 to-purple-50/80 backdrop-blur-sm border border-blue-200/30 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100/20 via-purple-100/20 to-pink-100/20 z-10 group-hover:opacity-30 transition-all duration-700"></div>
              <img
                src={project.image}
                alt={project.name || 'Property'}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent"></div>
            </div>
          </div>
        )}

        {/* Top Row - Status and Price */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Status Section */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-300 to-purple-300 rounded-3xl blur opacity-15 group-hover:opacity-30 transition duration-500"></div>
            <div className="relative bg-gradient-to-br from-white/90 to-blue-50/70 backdrop-blur-2xl border border-blue-200/50 rounded-3xl p-6 hover:border-blue-300/70 hover:shadow-2xl hover:shadow-blue-200/20 transition-all duration-500 h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse shadow-lg"></div>
                <Text className="text-gray-800 font-black text-sm tracking-wider uppercase">Status</Text>
              </div>
              <div className="flex flex-wrap gap-3">
                {project?.status?.length > 0 ? (
                  project.status.map((status) => (
                    <div key={status} className="relative group/tag">
                      <div className={`absolute -inset-0.5 rounded-full blur opacity-40 ${
                        status === 'FOR SALE' ? 'bg-blue-300' :
                        status === 'FOR RENT' ? 'bg-emerald-300' :
                        status === 'HOT OFFER' ? 'bg-red-300' :
                        status === 'NEW LAUNCH' ? 'bg-purple-300' :
                        status === 'EXCLUSIVE' ? 'bg-amber-300' : 'bg-gray-300'
                      }`}></div>
                      <Tag className={`relative px-6 py-3 rounded-full text-sm font-bold border-0 backdrop-blur-sm hover:scale-110 transition-all duration-300 shadow-lg ${
                        status === 'FOR SALE' ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-blue-200' :
                        status === 'FOR RENT' ? 'bg-gradient-to-r from-emerald-500 to-emerald-600 text-white shadow-emerald-200' :
                        status === 'HOT OFFER' ? 'bg-gradient-to-r from-red-500 to-red-600 text-white shadow-red-200' :
                        status === 'NEW LAUNCH' ? 'bg-gradient-to-r from-purple-500 to-purple-600 text-white shadow-purple-200' :
                        status === 'EXCLUSIVE' ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-amber-200' : 'bg-gradient-to-r from-gray-500 to-gray-600 text-white shadow-gray-200'
                      }`}>
                        {status}
                      </Tag>
                    </div>
                  ))
                ) : (
                  <Text className="text-gray-400 text-lg">N/A</Text>
                )}
              </div>
            </div>
          </div>

          {/* Price Section */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-300 to-pink-300 rounded-3xl blur opacity-15 group-hover:opacity-30 transition duration-500"></div>
            <div className="relative bg-gradient-to-br from-white/90 to-purple-50/70 backdrop-blur-2xl border border-purple-200/50 rounded-3xl p-6 hover:border-purple-300/70 hover:shadow-2xl hover:shadow-purple-200/20 transition-all duration-500 h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse shadow-lg"></div>
                <Text className="text-gray-800 font-black text-sm tracking-wider uppercase">Price</Text>
              </div>
              <p className="text-gray-900 font-black text-4xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                {project?.price || 'N/A'}
              </p>
              {project?.pricePerSqft && (
                <p className="text-gray-600 text-base font-semibold">{project.pricePerSqft} per sqft</p>
              )}
            </div>
          </div>
        </div>

        {/* Location - Full Width */}
        <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-300 to-blue-300 rounded-3xl blur opacity-15 group-hover:opacity-30 transition duration-500"></div>
          <div className="relative bg-gradient-to-br from-white/90 to-pink-50/70 backdrop-blur-2xl border border-pink-200/50 rounded-3xl p-6 hover:border-pink-300/70 hover:shadow-2xl hover:shadow-pink-200/20 transition-all duration-500">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-3 h-3 bg-gradient-to-r from-pink-400 to-blue-400 rounded-full animate-pulse shadow-lg"></div>
              <Text className="text-gray-800 font-black text-sm tracking-wider uppercase">Location</Text>
            </div>
            <p className="text-gray-700 font-semibold text-lg">{project?.location || 'N/A'}</p>
          </div>
        </div>

        {/* Property Details Grid - Better spacing for wider layout */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Size */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-br from-blue-300/60 to-purple-300/60 rounded-3xl blur opacity-20 group-hover:opacity-35 transition duration-500"></div>
            <div className="relative bg-gradient-to-br from-white/90 to-blue-50/70 backdrop-blur-2xl border border-blue-200/50 rounded-3xl p-5 hover:border-blue-300/70 hover:shadow-xl hover:shadow-blue-200/20 transition-all duration-500">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2.5 h-2.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse shadow-md"></div>
                <Text className="text-gray-800 font-bold text-xs tracking-wider uppercase">Size</Text>
              </div>
              <p className="text-gray-700 font-bold text-sm">{project?.sqft || 'N/A'}</p>
            </div>
          </div>

          {/* Type */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-br from-purple-300/60 to-pink-300/60 rounded-3xl blur opacity-20 group-hover:opacity-35 transition duration-500"></div>
            <div className="relative bg-gradient-to-br from-white/90 to-purple-50/70 backdrop-blur-2xl border border-purple-200/50 rounded-3xl p-5 hover:border-purple-300/70 hover:shadow-xl hover:shadow-purple-200/20 transition-all duration-500">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2.5 h-2.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse shadow-md"></div>
                <Text className="text-gray-800 font-bold text-xs tracking-wider uppercase">Type</Text>
              </div>
              <p className="text-gray-700 font-bold text-xs">{project?.type || 'N/A'}</p>
            </div>
          </div>

          {/* Category */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-br from-amber-300/60 to-orange-300/60 rounded-3xl blur opacity-20 group-hover:opacity-35 transition duration-500"></div>
            <div className="relative bg-gradient-to-br from-white/90 to-amber-50/70 backdrop-blur-2xl border border-amber-200/50 rounded-3xl p-5 hover:border-amber-300/70 hover:shadow-xl hover:shadow-amber-200/20 transition-all duration-500">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2.5 h-2.5 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full animate-pulse shadow-md"></div>
                <Text className="text-gray-800 font-bold text-xs tracking-wider uppercase">Category</Text>
              </div>
              <p className="text-gray-700 font-bold text-sm capitalize">{project?.category?.replace('_', ' ') || 'N/A'}</p>
            </div>
          </div>

          {/* Rating */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-br from-yellow-300/60 to-amber-300/60 rounded-3xl blur opacity-20 group-hover:opacity-35 transition duration-500"></div>
            <div className="relative bg-gradient-to-br from-white/90 to-yellow-50/70 backdrop-blur-2xl border border-yellow-200/50 rounded-3xl p-5 hover:border-yellow-300/70 hover:shadow-xl hover:shadow-yellow-200/20 transition-all duration-500">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2.5 h-2.5 bg-gradient-to-r from-yellow-400 to-amber-400 rounded-full animate-pulse shadow-md"></div>
                <Text className="text-gray-800 font-bold text-xs tracking-wider uppercase">Rating</Text>
              </div>
              <p className="text-gray-700 font-bold text-lg">{project?.rating || 'N/A'}</p>
            </div>
          </div>
        </div>

        {/* Bedrooms & Bathrooms for Residential - Separate row */}
        {!isCommercial && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-br from-emerald-300/60 to-blue-300/60 rounded-3xl blur opacity-20 group-hover:opacity-35 transition duration-500"></div>
              <div className="relative bg-gradient-to-br from-white/90 to-emerald-50/70 backdrop-blur-2xl border border-emerald-200/50 rounded-3xl p-6 hover:border-emerald-300/70 hover:shadow-xl hover:shadow-emerald-200/20 transition-all duration-500">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-gradient-to-r from-emerald-400 to-blue-400 rounded-full animate-pulse shadow-lg"></div>
                  <Text className="text-gray-800 font-bold text-sm tracking-wider uppercase">Bedrooms</Text>
                </div>
                <p className="text-gray-700 font-bold text-2xl">{project?.bedrooms || 'N/A'}</p>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-br from-cyan-300/60 to-emerald-300/60 rounded-3xl blur opacity-20 group-hover:opacity-35 transition duration-500"></div>
              <div className="relative bg-gradient-to-br from-white/90 to-cyan-50/70 backdrop-blur-2xl border border-cyan-200/50 rounded-3xl p-6 hover:border-cyan-300/70 hover:shadow-xl hover:shadow-cyan-200/20 transition-all duration-500">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full animate-pulse shadow-lg"></div>
                  <Text className="text-gray-800 font-bold text-sm tracking-wider uppercase">Bathrooms</Text>
                </div>
                <p className="text-gray-700 font-bold text-2xl">{project?.bathrooms || 'N/A'}</p>
              </div>
            </div>
          </div>
        )}

        {/* Amenities */}
        {project?.amenities?.length > 0 && (
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-rose-300 via-purple-300 to-blue-300 rounded-3xl blur opacity-15 group-hover:opacity-30 transition duration-500"></div>
            <div className="relative bg-gradient-to-br from-white/90 to-rose-50/70 backdrop-blur-2xl border border-rose-200/50 rounded-3xl p-6 hover:border-rose-300/70 hover:shadow-2xl hover:shadow-rose-200/20 transition-all duration-500">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 bg-gradient-to-r from-rose-400 to-purple-400 rounded-full animate-pulse shadow-lg"></div>
                <Text className="text-gray-800 font-black text-sm tracking-wider uppercase">Amenities</Text>
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                {project.amenities.map((amenity, index) => (
                  <div key={index} className="relative group/amenity">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-rose-300/50 to-purple-300/50 rounded-2xl blur opacity-30 group-hover/amenity:opacity-50 transition duration-300"></div>
                    <Tag className="relative bg-gradient-to-br from-white/80 to-rose-50/60 backdrop-blur-sm text-gray-800 px-5 py-3 rounded-2xl text-sm font-bold border border-rose-200/60 hover:border-rose-300/80 hover:scale-105 hover:shadow-lg hover:shadow-rose-200/30 transition-all duration-300 w-full text-center">
                      {amenity}
                    </Tag>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

      </div>

      <style jsx>{`
        .ultra-advanced-light-drawer .ant-drawer-header {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(248, 250, 252, 0.8) 100%);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(59, 130, 246, 0.1);
          box-shadow: 0 8px 32px rgba(59, 130, 246, 0.1);
          padding: 24px 32px;
        }
        
        .ultra-advanced-light-drawer .ant-drawer-body {
          background: linear-gradient(135deg, #f8fafc 0%, #e0e7ff 25%, #fdf2f8 50%, #ecfdf5 75%, #f8fafc 100%);
          background-size: 400% 400%;
          animation: lightGradientShift 25s ease infinite;
          position: relative;
          padding: 0;
        }
        
        .ultra-advanced-light-drawer .ant-drawer-body::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 20% 50%, rgba(99, 102, 241, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(236, 72, 153, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, rgba(34, 197, 94, 0.05) 0%, transparent 50%);
          pointer-events: none;
        }
        
        @keyframes lightGradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes tilt {
          0%, 50%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(0.5deg); }
          75% { transform: rotate(-0.5deg); }
        }
        
        .animate-tilt {
          animation: tilt 15s infinite linear;
        }
        
        @media (max-width: 768px) {
          .ultra-advanced-light-drawer {
            width: 100% !important;
          }
        }
      `}</style>
    </Drawer>
  );
};

export default ViewDetailsDrawer;