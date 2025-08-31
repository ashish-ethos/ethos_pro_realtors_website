import React, { useState, useMemo } from 'react';
import { Input, Typography } from 'antd';
import { FilterOutlined, DownOutlined, SearchOutlined as SearchIcon } from '@ant-design/icons';
import { Grid, List, MapPinHouse, Bed, Bath, LandPlot , Heart, Share, Eye, Star } from 'lucide-react';
import ViewDetailsDrawer from './ViewDetailsDrawer';
import { allProjectPropertyDetails } from '../../data/propertyDetailsData';
import './Project.css';
import CustomButton from '../../components/ui/Button';
import CustomSelect from '../../components/ui/Select';
import { useNavigate, useLocation } from 'react-router-dom';

const { Search } = Input;
const { Option } = CustomSelect;
const { Text } = Typography;

const Residentials = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('featured');
  const [filters, setFilters] = useState({
    priceRange: '',
    propertyType: '',
    bedrooms: '',
    category: '',
  });
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const filteredProperties = useMemo(() => {
    let filtered = allProjectPropertyDetails.filter((property) => {
      const isResidential =
        (property.type.toLowerCase().includes('apartment') ||
         property.type.toLowerCase().includes('villa') ||
         property.type.toLowerCase().includes('studio')) &&
        !property.type.toLowerCase().includes('shop') &&
        !property.type.toLowerCase().includes('office') &&
        !property.type.toLowerCase().includes('commercial');
      const matchesSearch =
        property.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        property.location.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesType = !filters.propertyType ||
        property.type.split(', ').some(type => type.trim() === filters.propertyType);
      const matchesBedrooms = !filters.bedrooms || property.bedrooms.toString() === filters.bedrooms;
      const matchesCategory = !filters.category || property.category === filters.category;
      return isResidential && matchesSearch && matchesType && matchesBedrooms && matchesCategory;
    });

    switch (sortBy) {
      case 'price_low':
        return filtered.sort((a, b) => {
          const priceA = a.price.includes('On Request')
            ? Infinity
            : parseFloat(a.price.replace(/[₹,crore lakh]/g, '')) || Infinity;
          const priceB = b.price.includes('On Request')
            ? Infinity
            : parseFloat(b.price.replace(/[₹,crore lakh]/g, '')) || Infinity;
          return priceA - priceB;
        });
      case 'price_high':
        return filtered.sort((a, b) => {
          const priceA = a.price.includes('On Request')
            ? -Infinity
            : parseFloat(a.price.replace(/[₹,crore lakh]/g, '')) || -Infinity;
          const priceB = b.price.includes('On Request')
            ? -Infinity
            : parseFloat(b.price.replace(/[₹,crore lakh]/g, '')) || -Infinity;
          return priceB - priceA;
        });
      case 'rating':
        return filtered.sort((a, b) => b.rating - a.rating);
      case 'sqft':
        return filtered.sort((a, b) => {
          const sqftA = a.sqft.includes('On Request')
            ? -Infinity
            : parseInt(a.sqft.split('-')[0]) || parseInt(a.sqft) || -Infinity;
          const sqftB = b.sqft.includes('On Request')
            ? -Infinity
            : parseInt(b.sqft.split('-')[0]) || parseInt(b.sqft) || -Infinity;
          return sqftB - sqftA;
        });
      default:
        return filtered.sort((a, b) => b.featured - a.featured);
    }
  }, [searchTerm, filters, sortBy]);

  const displayedProperties = showAll ? filteredProperties : filteredProperties.slice(0, 6);

  const handleViewDetails = (property) => {
    setSelectedProperty(property);
    setDrawerOpen(true);
    // Navigate to /projects/residential/:propertyName, replacing spaces with hyphens for URL safety
    const propertyName = property.name.toLowerCase().replace(/\s+/g, '-');
    navigate(`/projects/residential/${propertyName}`, { state: { from: location.pathname } });
  };

  const handleCloseDrawer = () => {
    setDrawerOpen(false);
    setSelectedProperty(null);
    // Navigate back to /projects/residential
    navigate('/projects/residential');
  };

  const PropertyCard = ({ property }) => {
    return (
      <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 group">
        <div className="relative overflow-hidden">
          {property.image ? (
            <img
              src={property.image}
              alt={property.name}
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300 rounded-t-xl"
            />
          ) : (
            <div className="w-full h-64 bg-gray-200 flex items-center justify-center rounded-t-xl">
              <Text type="secondary">No Image Available</Text>
            </div>
          )}
          <div className="project-status-mobile absolute top-4 left-4 flex flex-wrap gap-2">
            {property.status.map((status) => (
              <span
                key={status}
                className={`px-3 py-1 text-xs font-semibold rounded-full ${
                  status === 'FOR SALE'
                    ? 'border-1 border-blue-600 text-white'
                    : status === 'FOR RENT'
                    ? 'border-1 border-green-600 text-white'
                    : status === 'HOT OFFER'
                    ? 'border-1 border-red-500 text-white'
                    : status === 'NEW LAUNCH'
                    ? 'border-purple-600 text-white border-1'
                    : status === 'EXCLUSIVE'
                    ? 'border-yellow-500 text-white border-1'
                    : 'border-1 border-gray-600 text-white'
                }`}
              >
                {status}
              </span>
            ))}
          </div>
          <div className="absolute top-4 right-4 flex gap-2">
            <button className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors">
              <Heart size={16} className="text-gray-600 hover:text-red-500" />
            </button>
            <button className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors">
              <Share size={16} className="text-gray-600" />
            </button>
          </div>
          {property.featured && (
            <div className="absolute bottom-4 left-4">
              <span className="bg-gradient-to-r from-amber-400 to-amber-600 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                <Star size={12} fill="currentColor" />
                Featured
              </span>
            </div>
          )}
        </div>

        <div className="p-6">
          <div className="flex items-start justify-between mb-3">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">{property.name}</h3>
              <p className="text-gray-600 flex items-center gap-1">
                <MapPinHouse className='text-gray-500' />
                {property.location}
              </p>
            </div>
            <div className="flex items-center gap-1">
              <Star size={14} className="text-amber-400 fill-current" />
              <span className="text-sm font-semibold text-gray-700">{property.rating}</span>
            </div>
          </div>

          <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
            <span className="flex items-center gap-1">
              <Bed className='text-gray-500' />
              {property.bedrooms} Bed
            </span>
            <span className="flex items-center gap-1">
              <Bath className='text-gray-500'/>
              {property.bathrooms} Baths
            </span>
            <span className="flex items-center gap-1">
              <LandPlot className='text-gray-500'  />
              {property.sqft}
            </span>
          </div>

          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="text-2xl font-bold text-gray-900">{property.price}</div>
              <div className="text-sm text-gray-500">{property.pricePerSqft}/sq ft</div>
            </div>
            <span
              className={`px-3 py-1 rounded-full text-xs font-semibold ${
                property.category === 'ULTRA_LUXURY'
                  ? 'bg-purple-100 text-purple-800'
                  : property.category === 'LUXURY'
                  ? 'bg-blue-100 text-blue-800'
                  : property.category === 'PREMIUM'
                  ? 'bg-green-100 text-green-800'
                  : property.category === 'COMPACT'
                  ? 'bg-orange-100 text-orange-800'
                  : 'bg-gray-100 text-gray-800'
              }`}
            >
              {property.category.replace('_', ' ')}
            </span>
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            {property.amenities.slice(0, 3).map((amenity) => (
              <span key={amenity} className="px-2 py-1 bg-gray-100 text-gray-700 rounded-lg text-xs">
                {amenity}
              </span>
            ))}
            {property.amenities.length > 3 && (
              <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-lg text-xs">
                +{property.amenities.length - 3} more
              </span>
            )}
          </div>

          <div className="flex gap-3">
            <div
              className="inline-block rounded-[12px] p-[2px]"
              style={{
                background: 'linear-gradient(to right, #c99913, #474236, #000000)',
              }}
            >
              <button
                onClick={() => handleViewDetails(property)}
                className="bg-white text-black px-5 cursor-pointer py-2 rounded-[10px] font-semibold flex items-center justify-center gap-2 hover:shadow-md transition-all duration-200"
              >
                <Eye size={18} />
                View Details
              </button>
            </div>
            <a href="tel:8744964496">
              <button className="px-4 py-2 cursor-pointer border-2 border-[#1677ff87] text-black rounded-xl font-semibold hover:bg-blue-50 transition-colors">
                Contact
              </button>
            </a>
          </div>
        </div>
      </div>
    );
  };

  const filterSort = (optionA, optionB) => {
    const labelA = optionA?.label?.toLowerCase() || '';
    const labelB = optionB?.label?.toLowerCase() || '';
    return labelA.localeCompare(labelB);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-t border-gray-200 top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Residential Properties</h1>
              <p className="text-gray-600 mt-1">{filteredProperties.length} properties available</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex bg-gray-100 rounded-xl p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-colors ${viewMode === 'grid' ? 'bg-white shadow-sm' : 'hover:bg-gray-200'}`}
                >
                  <Grid size={20} />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-colors ${viewMode === 'list' ? 'bg-white shadow-sm' : 'hover:bg-gray-200'}`}
                >
                  <List size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* Search and Filters */}
          <div className="flex flex-col lg:flex-row gap-4">
            <Search
              placeholder="Search by property name or location..."
              enterButton="Search"
              size="large"
              onSearch={(value) => setSearchTerm(value)}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{  overflow: 'hidden' }}
            />
            <div className="flex gap-3">
              <CustomButton
                onClick={() => setShowFilters(!showFilters)}
                size="large"
                
              >
                <FilterOutlined />
                Filters
                <DownOutlined
                  style={{
                    marginLeft: '8px',
                    transition: 'transform 0.3s',
                    transform: showFilters ? 'rotate(180deg)' : 'rotate(0deg)',
                  }}
                />
              </CustomButton>
              <CustomSelect
                value={sortBy}
                onChange={(value) => setSortBy(value)}
                size="large"
                style={{width:150}}
              >
                <Option value="featured">Featured First</Option>
                <Option value="price_low">Price: Low to High</Option>
                <Option value="price_high">Price: High to Low</Option>
                <Option value="rating">Highest Rated</Option>
                <Option value="sqft">Largest First</Option>
              </CustomSelect>
            </div>
          </div>

          {/* Filter Panel */}
          {showFilters && (
            <div className="mt-4 p-6 bg-gray-50 rounded-xl">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                <CustomSelect
                  showSearch
                  value={filters.propertyType}
                  onChange={(value) => setFilters({ ...filters, propertyType: value })}
                  placeholder="All Property Types"
                  optionFilterProp="label"
                  filterSort={filterSort}
                  size="large"
                  options={[
                    { value: '', label: 'All Property Types' },
                    { value: 'APARTMENT', label: 'Apartment' },
                    { value: 'VILLA', label: 'Villa' },
                    { value: 'STUDIO', label: 'Studio' },
                  ]}
                />
                <CustomSelect
                  showSearch
                  value={filters.bedrooms}
                  onChange={(value) => setFilters({ ...filters, bedrooms: value })}
                  placeholder="Any Bedrooms"
                  optionFilterProp="label"
                  filterSort={filterSort}
                  size="large"
                  options={[
                    { value: '', label: 'Any Bedrooms' },
                    { value: '1', label: '1 Bedroom' },
                    { value: '2', label: '2 Bedrooms' },
                    { value: '3', label: '3 Bedrooms' },
                    { value: '4', label: '4 Bedrooms' },
                    { value: '5', label: '5+ Bedrooms' },
                  ]}
                />
                <CustomSelect
                  showSearch
                  value={filters.category}
                  onChange={(value) => setFilters({ ...filters, category: value })}
                  placeholder="All Categories"
                  optionFilterProp="label"
                  filterSort={filterSort}
                  size="large"
                  style={{ borderRadius: '12px' }}
                  options={[
                    { value: '', label: 'All Categories' },
                    { value: 'COMPACT', label: 'Compact' },
                    { value: 'PREMIUM', label: 'Premium' },
                    { value: 'LUXURY', label: 'Luxury' },
                    { value: 'ULTRA_LUXURY', label: 'Ultra Luxury' },
                  ]}
                />
                <CustomButton
                  onClick={() => setFilters({ priceRange: '', propertyType: '', bedrooms: '', category: '' })}
                  size="large"
                  type="primary"
                 className="max-w-[200px]"
                >
                  Clear Filters
                </CustomButton>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Properties Grid */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {filteredProperties.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-gray-400 mb-4">
              <SearchIcon size={64} className="mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No properties found</h3>
            <p className="text-gray-500">Try adjusting your search criteria or filters</p>
          </div>
        ) : (
          <>
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900">All Residential Properties</h2>
            </div>
            <div
              className={`grid gap-8 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}
            >
              {displayedProperties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
            {filteredProperties.length > 6 && (
              <div className="mt-8 flex justify-center gap-4">
                {!showAll && (
                  <CustomButton
                    type="primary"
                    size="large"
                    onClick={() => setShowAll(true)}
                    
                  >
                    View More
                  </CustomButton>
                )}
                {showAll && (
                  <CustomButton
                    type="default"
                    size="large"
                    onClick={() => setShowAll(false)}
                    style={{
                      borderRadius: '12px',
                      minWidth: '120px',
                    }}
                  >
                    View Less
                  </CustomButton>
                )}
              </div>
            )}
          </>
        )}
      </div>

      {/* View Details Drawer */}
      <ViewDetailsDrawer
        open={drawerOpen}
        onClose={handleCloseDrawer}
        project={selectedProperty}
      />
    </div>
  );
};

export default Residentials;