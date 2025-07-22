import React from 'react';
import { Button, Drawer, Select, InputNumber, Slider, Pagination } from "antd";
import { RiFilterLine, RiSearchLine, RiCloseLine, RiMapPin2Line, RiBuilding2Line } from "react-icons/ri";
import { CountrySelect, StateSelect, CitySelect } from "react-country-state-city";
import "react-country-state-city/dist/react-country-state-city.css";

const { Option } = Select;

const AdvancedPropertySearch = ({
  open,
  onClose,
  countryId,
  setCountryId,
  stateId,
  setStateId,
  cityId,
  setCityId,
  area,
  setArea,
  status,
  setStatus,
  type,
  setType,
  bedrooms,
  setBedrooms,
  bathrooms,
  setBathrooms,
  minArea,
  setMinArea,
  maxArea,
  setMaxArea,
  label,
  setLabel,
  yearBuilt,
  setYearBuilt,
  priceRange,
  handlePriceChange,
  handleSearch,
  handleClearFilters,
  properties
}) => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const pageSize = 5; // Number of items per page

  // Calculate the properties to display for the current page
  const paginatedProperties = properties.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <Drawer
      title={
        <div className="flex items-center gap-3">
          <RiFilterLine className="text-orange-500" size={24} />
          <span className="text-xl font-semibold text-gray-800">Advanced Property Search</span>
        </div>
      }
      placement="right"
      width="min(95vw, 1200px)"
      onClose={onClose}
      open={open}
      extra={
        <div className="flex gap-2">
          <Button onClick={handleClearFilters} className="text-gray-600">
            Clear Filters
          </Button>
          <Button onClick={onClose} icon={<RiCloseLine size={18} />}>
            Cancel
          </Button>
          <Button
            type="primary"
            onClick={handleSearch}
            className="bg-blue-500 hover:bg-blue-600"
            icon={<RiSearchLine size={18} />}
          >
            Search Properties
          </Button>
        </div>
      }
      className="property-search-drawer"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-4">
        {/* Filters Column */}
        <div className="lg:col-span-2 space-y-6">
          {/* Location Section */}
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <h3 className="text-lg font-medium text-gray-800 mb-4 flex items-center gap-2">
              <RiMapPin2Line size={20} className="text-orange-500" />
              Location
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">Country</label>
                <CountrySelect
                  placeHolder="Select Country"
                  value={countryId}
                  onChange={(value) => {
                    setCountryId(value ? [value.id.toString()] : []);
                    setStateId([]); // Reset state when country changes
                    setCityId([]);  // Reset city when country changes
                    handleSearch(); // Trigger search on change
                  }}
                  showFlag={true}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">State</label>
                <StateSelect
                  countryid={countryId.length ? parseInt(countryId[0]) : undefined}
                  placeHolder="Select State"
                  value={stateId.length ? { id: parseInt(stateId[0]) } : null}
                  onChange={(value) => {
                    setStateId(value ? [value.id.toString()] : []);
                    setCityId([]); // Reset city when state changes
                    handleSearch(); // Trigger search on change
                  }}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">City</label>
                <CitySelect
                  countryid={countryId.length ? parseInt(countryId[0]) : undefined}
                  stateid={stateId.length ? parseInt(stateId[0]) : undefined}
                  placeHolder="Select City"
                  value={cityId.length ? { id: parseInt(cityId[0]) } : null}
                  onChange={(value) => {
                    setCityId(value ? [value.id.toString()] : []);
                    handleSearch(); // Trigger search on change
                  }}
                />
              </div>
            </div>
          </div>

          {/* Property Filters */}
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">Popular Areas</label>
                <Select
                  mode="multiple"
                  className="w-full"
                  placeholder="Select Areas"
                  value={area}
                  onChange={(value) => {
                    setArea(value);
                    handleSearch(); // Trigger search on change
                  }}
                  showSearch
                  allowClear
                >
                  <Option value="All Areas">All Areas</Option>
                  <Option value="Sector 54, Gurgaon">Sector 54, Gurgaon</Option>
                  <Option value="Marine Drive, Mumbai">Marine Drive, Mumbai</Option>
                  <Option value="Bandra Kurla Complex">Bandra Kurla Complex</Option>
                  <Option value="Electronic City, Bangalore">Electronic City, Bangalore</Option>
                  <Option value="Connaught Place">Connaught Place</Option>
                  <Option value="Alipore, Kolkata">Alipore, Kolkata</Option>
                  <Option value="Whitefield, Bangalore">Whitefield, Bangalore</Option>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">Property Status</label>
                <Select
                  mode="multiple"
                  className="w-full"
                  placeholder="Select Status"
                  value={status}
                  onChange={(value) => {
                    setStatus(value);
                    handleSearch(); // Trigger search on change
                  }}
                  allowClear
                >
                  <Option value="For Sale">For Sale</Option>
                  <Option value="For Rent">For Rent</Option>
                  <Option value="Hot Offer">Hot Offer</Option>
                  <Option value="New Launch">New Launch</Option>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">Property Type</label>
                <Select
                  mode="multiple"
                  className="w-full"
                  placeholder="Select Types"
                  value={type}
                  onChange={(value) => {
                    setType(value);
                    handleSearch(); // Trigger search on change
                  }}
                  allowClear
                >
                  <Option value="Apartment">Apartment</Option>
                  <Option value="Villa">Villa</Option>
                  <Option value="Penthouse">Penthouse</Option>
                  <Option value="Residential">Residential</Option>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">Bedrooms</label>
                <Select
                  mode="multiple"
                  className="w-full"
                  placeholder="Select Bedrooms"
                  value={bedrooms}
                  onChange={(value) => {
                    setBedrooms(value);
                    handleSearch(); // Trigger search on change
                  }}
                  allowClear
                >
                  <Option value="Any">Any</Option>
                  <Option value="1">1</Option>
                  <Option value="2">2</Option>
                  <Option value="2-3">2-3</Option>
                  <Option value="3">3</Option>
                  <Option value="3-4">3-4</Option>
                  <Option value="4">4</Option>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">Bathrooms</label>
                <Select
                  mode="multiple"
                  className="w-full"
                  placeholder="Select Bathrooms"
                  value={bathrooms}
                  onChange={(value) => {
                    setBathrooms(value);
                    handleSearch(); // Trigger search on change
                  }}
                  allowClear
                >
                  <Option value="Any">Any</Option>
                  <Option value="1">1</Option>
                  <Option value="2">2</Option>
                  <Option value="2-3">2-3</Option>
                  <Option value="3">3</Option>
                  <Option value="3-4">3-4</Option>
                  <Option value="4">4</Option>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">Label</label>
                <Select
                  mode="multiple"
                  className="w-full"
                  placeholder="Select Label"
                  value={label}
                  onChange={(value) => {
                    setLabel(value);
                    handleSearch(); // Trigger search on change
                  }}
                  allowClear
                >
                  <Option value="Any">Any</Option>
                  <Option value="featured">Featured</Option>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">Year Built</label>
                <Select
                  mode="multiple"
                  className="w-full"
                  placeholder="Select Year Built"
                  value={yearBuilt}
                  onChange={(value) => {
                    setYearBuilt(value);
                    handleSearch(); // Trigger search on change
                  }}
                  allowClear
                >
                  <Option value="2017">2017</Option>
                  <Option value="2018">2018</Option>
                  <Option value="2019">2019</Option>
                  <Option value="2020">2020</Option>
                  <Option value="2021">2021</Option>
                  <Option value="2022">2022</Option>
                </Select>
              </div>
            </div>
          </div>

          {/* Range Filters */}
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">Area Range (Sq Ft)</label>
                <div className="grid grid-cols-2 gap-4">
                  <InputNumber
                    min={0}
                    max={10000}
                    value={minArea}
                    onChange={(value) => {
                      setMinArea(value || 0);
                      handleSearch(); // Trigger search on change
                    }}
                    placeholder="Min Area"
                    className="w-full"
                  />
                  <InputNumber
                    min={0}
                    max={10000}
                    value={maxArea}
                    onChange={(value) => {
                      setMaxArea(value || 10000);
                      handleSearch(); // Trigger search on change
                    }}
                    placeholder="Max Area"
                    className="w-full"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">Price Range (₹)</label>
                <Slider
                  range
                  min={1000000}
                  max={1000000000}
                  step={1000000}
                  value={priceRange}
                  onChange={(value) => {
                    handlePriceChange(value);
                    handleSearch(); // Trigger search on change
                  }}
                  className="mb-4"
                />
                <div className="flex justify-between text-sm text-gray-600">
                  <span>₹{priceRange[0].toLocaleString("en-IN")}</span>
                  <span>₹{priceRange[1].toLocaleString("en-IN")}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Properties Column */}
        <div className="lg:col-span-1">
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <h3 className="text-lg font-medium text-gray-800 mb-4 flex items-center gap-2">
              <RiBuilding2Line size={20} className="text-orange-500" />
              Properties ({properties.length})
            </h3>
            
            <div className="space-y-4 max-h-[calc(100vh-250px)] overflow-y-auto">
              {properties.length > 0 ? (
                paginatedProperties.map((property) => (
                  <div
                    key={property.id}
                    className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg hover:scale-105 transition-all duration-300 transform hover:bg-gray-50"
                  >
                    {/* Property Image */}
                    <div className="relative h-40">
                      <img 
                        src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=300&h=200&fit=crop" // Placeholder image
                        alt={property.name}
                        className="w-full h-full object-cover"
                      />
                      {property.featured && (
                        <div className="absolute top-2 right-2 bg-orange-500 text-white px-2 py-1 rounded text-xs font-medium">
                          Featured
                        </div>
                      )}
                      <div className="absolute top-2 left-2 bg-blue-500 text-white px-2 py-1 rounded text-xs font-medium">
                        {property.status}
                      </div>
                    </div>

                    {/* Property Info */}
                    <div className="p-3">
                      <h4 className="font-semibold text-gray-900 mb-1">{property.name}</h4>
                      <p className="text-sm text-gray-600 mb-2 line-clamp-2">{property.location}</p>
                      <p className="text-lg font-bold text-orange-600 mb-2">{property.price}</p>
                      
                      <div className="text-sm text-gray-600 space-y-1">
                        <div className="flex justify-between">
                          <span>Type:</span>
                          <span className="font-medium">{property.type}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Bedrooms:</span>
                          <span className="font-medium">{property.bedrooms}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Area:</span>
                          <span className="font-medium">{property.area}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-8 text-gray-500">
                  <RiBuilding2Line size={48} className="mx-auto mb-3 text-gray-300" />
                  <p>No properties match your search criteria.</p>
                  <Button 
                    type="link" 
                    onClick={handleClearFilters}
                    className="text-blue-500 p-0 mt-2"
                  >
                    Clear filters to see all properties
                  </Button>
                </div>
              )}
            </div>

            {/* Pagination */}
            {properties.length > pageSize && (
              <div className="mt-4 flex justify-center">
                <Pagination
                  current={currentPage}
                  total={properties.length}
                  pageSize={pageSize}
                  onChange={handlePageChange}
                  showSizeChanger={false}
                  className="text-orange-500"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </Drawer>
  );
};

export default AdvancedPropertySearch;