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
        <div className="flex items-center gap-2 sm:gap-3">
          <RiFilterLine className="text-orange-500" size={20} sm={24} />
          <span className="text-lg sm:text-xl font-semibold text-gray-800">Advanced Property Search</span>
        </div>
      }
      placement="right"
      width="min(90vw, 1200px)"
      onClose={onClose}
      open={open}
      extra={
        <div className="flex flex-wrap gap-2">
          <Button onClick={handleClearFilters} className="text-gray-600 text-xs sm:text-sm">
            Clear Filters
          </Button>
          <Button onClick={onClose} icon={<RiCloseLine size={16} sm={18} />} className="text-xs sm:text-sm">
            Cancel
          </Button>
          <Button
            type="primary"
            onClick={handleSearch}
            className="bg-blue-500 hover:bg-blue-600 text-xs sm:text-sm"
            icon={<RiSearchLine size={16} sm={18} />}
          >
            Search Properties
          </Button>
        </div>
      }
      className="property-search-drawer"
      style={{ maxHeight: '100vh', overflow: 'auto' }} // Ensure Drawer scrolls if needed
    >
      <style>
        {`
          .property-search-drawer .ant-select-selector,
          .property-search-drawer .ant-input-number {
            height: 36px !important;
            font-size: 12px !important;
          }
          .property-search-drawer .ant-select-selection-item,
          .property-search-drawer .ant-select-selection-placeholder {
            line-height: 34px !important;
            font-size: 12px !important;
          }
          .property-search-drawer .ant-drawer-body {
            padding: 12px !important;
            max-height: calc(100vh - 60px); /* Adjust for title and extra bar */
            overflow-y: auto;
          }
          @media (min-width: 640px) {
            .property-search-drawer .ant-select-selector,
            .property-search-drawer .ant-input-number {
              height: 40px !important;
              font-size: 14px !important;
            }
            .property-search-drawer .ant-select-selection-item,
            .property-search-drawer .ant-select-selection-placeholder {
              line-height: 38px !important;
              font-size: 14px !important;
            }
            .property-search-drawer .ant-drawer-body {
              padding: 16px !important;
              max-height: calc(100vh - 80px); /* Adjust for larger screens */
            }
          }
          .property-search-drawer .ant-pagination-prev,
          .property-search-drawer .ant-pagination-next,
          .property-search-drawer .ant-pagination-item {
            min-width: 28px !important;
            height: 28px !important;
            line-height: 28px !important;
            font-size: 12px !important;
          }
          @media (min-width: 640px) {
            .property-search-drawer .ant-pagination-prev,
            .property-search-drawer .ant-pagination-next,
            .property-search-drawer .ant-pagination-item {
              min-width: 32px !important;
              height: 32px !important;
              line-height: 32px !important;
              font-size: 14px !important;
            }
          }
        `}
      </style>
      <div className="grid grid-cols-1 gap-4 sm:gap-6 p-3 sm:p-4">
        {/* Filters Column */}
        <div className="space-y-4 sm:space-y-6">
          {/* Location Section */}
          <div className="bg-white p-3 sm:p-4 rounded-lg border border-gray-200">
            <h3 className="text-base sm:text-lg font-medium text-gray-800 mb-3 sm:mb-4 flex items-center gap-2">
              <RiMapPin2Line size={18} sm={20} className="text-orange-500" />
              Location
            </h3>
            <div className="grid grid-cols-1 gap-3 sm:gap-4">
              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-600 mb-1 sm:mb-2">Country</label>
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
                <label className="block text-xs sm:text-sm font-medium text-gray-600 mb-1 sm:mb-2">State</label>
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
                <label className="block text-xs sm:text-sm font-medium text-gray-600 mb-1 sm:mb-2">City</label>
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
          <div className="bg-white p-3 sm:p-4 rounded-lg border border-gray-200">
            <div className="grid grid-cols-1 gap-3 sm:gap-4">
              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-600 mb-1 sm:mb-2">Popular Areas</label>
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
                  maxTagCount={2} // Limit visible tags to prevent overflow
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
                <label className="block text-xs sm:text-sm font-medium text-gray-600 mb-1 sm:mb-2">Property Status</label>
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
                  maxTagCount={2} // Limit visible tags
                >
                  <Option value="For Sale">For Sale</Option>
                  <Option value="For Rent">For Rent</Option>
                  <Option value="Hot Offer">Hot Offer</Option>
                  <Option value="New Launch">New Launch</Option>
                </Select>
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-600 mb-1 sm:mb-2">Property Type</label>
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
                  maxTagCount={2} // Limit visible tags
                >
                  <Option value="Apartment">Apartment</Option>
                  <Option value="Villa">Villa</Option>
                  <Option value="Penthouse">Penthouse</Option>
                  <Option value="Residential">Residential</Option>
                </Select>
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-600 mb-1 sm:mb-2">Bedrooms</label>
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
                  maxTagCount={2} // Limit visible tags
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
                <label className="block text-xs sm:text-sm font-medium text-gray-600 mb-1 sm:mb-2">Bathrooms</label>
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
                  maxTagCount={2} // Limit visible tags
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
                <label className="block text-xs sm:text-sm font-medium text-gray-600 mb-1 sm:mb-2">Label</label>
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
                  maxTagCount={2} // Limit visible tags
                >
                  <Option value="Any">Any</Option>
                  <Option value="featured">Featured</Option>
                </Select>
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-600 mb-1 sm:mb-2">Year Built</label>
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
                  maxTagCount={2} // Limit visible tags
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
          <div className="bg-white p-3 sm:p-4 rounded-lg border border-gray-200">
            <div className="grid grid-cols-1 gap-4 sm:gap-6">
              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-600 mb-1 sm:mb-2">Area Range (Sq Ft)</label>
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
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
                <label className="block text-xs sm:text-sm font-medium text-gray-600 mb-1 sm:mb-2">Price Range (₹)</label>
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
                  className="mb-3 sm:mb-4"
                />
                <div className="flex justify-between text-xs sm:text-sm text-gray-600">
                  <span>₹{priceRange[0].toLocaleString("en-IN")}</span>
                  <span>₹{priceRange[1].toLocaleString("en-IN")}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Properties Column */}
        <div>
          <div className="bg-white p-3 sm:p-4 rounded-lg border border-gray-200">
            <h3 className="text-base sm:text-lg font-medium text-gray-800 mb-3 sm:mb-4 flex items-center gap-2">
              <RiBuilding2Line size={18} sm={20} className="text-orange-500" />
              Properties ({properties.length})
            </h3>
            
            <div className="space-y-3 sm:space-y-4 max-h-[calc(100vh - 300px)] sm:max-h-[calc(100vh - 350px)] overflow-y-auto">
              {properties.length > 0 ? (
                paginatedProperties.map((property) => (
                  <div
                    key={property.id}
                    className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg hover:scale-105 transition-all duration-300 transform hover:bg-gray-50"
                  >
                    {/* Property Image */}
                    <div className="relative h-32 sm:h-40">
                      <img 
                        src={property.image}
                        alt={property.name}
                        className="w-full h-full object-cover"
                      />
                      {property.featured && (
                        <div className="absolute top-1 sm:top-2 right-1 sm:right-2 bg-orange-500 text-white px-1.5 sm:px-2 py-0.5 sm:py-1 rounded text-[10px] sm:text-xs font-medium">
                          Featured
                        </div>
                      )}
                      <div className="absolute top-1 sm:top-2 left-1 sm:left-2 bg-blue-500 text-white px-1.5 sm:px-2 py-0.5 sm:py-1 rounded text-[10px] sm:text-xs font-medium">
                        {property.status}
                      </div>
                    </div>

                    {/* Property Info */}
                    <div className="p-2 sm:p-3">
                      <h4 className="font-semibold text-sm sm:text-base text-gray-900 mb-1 line-clamp-1">{property.name}</h4>
                      <p className="text-xs sm:text-sm text-gray-600 mb-1 sm:mb-2 line-clamp-2">{property.location}</p>
                      <p className="text-base sm:text-lg font-bold text-orange-600 mb-1 sm:mb-2">{property.price || 'Price on Request'}</p>
                      
                      <div className="text-xs sm:text-sm text-gray-600 space-y-0.5 sm:space-y-1">
                        <div className="flex justify-between">
                          <span>Type:</span>
                          <span className="font-medium">{property.type}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Bedrooms:</span>
                          <span className="font-medium">{property.bedrooms || 'N/A'}</span>
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
                <div className="text-center py-6 sm:py-8 text-gray-500">
                  <RiBuilding2Line size={40} sm={48} className="mx-auto mb-2 sm:mb-3 text-gray-300" />
                  <p className="text-xs sm:text-sm">No properties match your search criteria.</p>
                  <Button 
                    type="link" 
                    onClick={handleClearFilters}
                    className="text-blue-500 p-0 mt-1 sm:mt-2 text-xs sm:text-sm"
                  >
                    Clear filters to see all properties
                  </Button>
                </div>
              )}
            </div>

            {/* Pagination */}
            {properties.length > pageSize && (
              <div className="mt-3 sm:mt-4 flex justify-center">
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
