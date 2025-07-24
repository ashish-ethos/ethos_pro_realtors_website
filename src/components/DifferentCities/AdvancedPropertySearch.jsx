import React, { useState, useEffect } from "react";
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
  properties
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 6;

  // Define Gurgaon-related areas
  const gurgaonSectors = [
    "Sector 54, Gurgaon", "Sector 66, Gurgaon", "Sector 48, Gurgaon",
    "Sector 62, Gurgaon", "Sector 79, Gurgaon", "Sector 63, Gurgaon",
    "Sector 68, Gurgaon", "Sector 106, Gurgaon", "Sector 70, Gurgaon",
    "Sector 65, Gurgaon", "Sector 109, Gurgaon"
  ];

  // Filter properties based on all search criteria with city-specific logic
  const filteredProperties = properties.filter((property) => {
    const matchesCountry = countryId.length === 0 || countryId.includes(property.countryId?.toString());
    const matchesState = stateId.length === 0 || stateId.includes(property.stateId?.toString());
    const matchesCity = cityId.length === 0 || cityId.includes(property.cityId?.toString());
    const selectedCity = cityId.length > 0 ? properties.find(p => p.cityId?.toString() === cityId[0])?.city : null;
    const matchesArea = area.length === 0 || area.includes("All Areas") ||
      (area.includes("Gurgaon") && gurgaonSectors.includes(property.area)) ||
      area.includes(property.area);
    const matchesStatus = status.length === 0 || status.includes(property.status);
    const matchesType = type.length === 0 || type.includes(property.type);
    const matchesBedrooms = bedrooms.length === 0 || bedrooms.includes("Any") ||
      bedrooms.some((bed) => {
        if (bed.includes("-")) {
          const [min, max] = bed.split("-").map(Number);
          return property.bedrooms >= min && property.bedrooms <= max;
        }
        return property.bedrooms && property.bedrooms.toString() === bed;
      });
    const matchesBathrooms = bathrooms.length === 0 || bathrooms.includes("Any") ||
      bathrooms.some((bath) => {
        if (bath.includes("-")) {
          const [min, max] = bath.split("-").map(Number);
          return property.bathrooms >= min && property.bathrooms <= max;
        }
        return property.bathrooms && property.bathrooms.toString() === bath;
      });
    const matchesLabel = label.length === 0 || label.includes("Any") || label.includes(property.label);
    const matchesYearBuilt = yearBuilt.length === 0 || yearBuilt.includes(property.yearBuilt?.toString());
    const matchesAreaRange = property.areaValue >= minArea && property.areaValue <= maxArea;
    const matchesPriceRange = property.priceValue >= priceRange[0] && property.priceValue <= priceRange[1];

    return (
      matchesCountry &&
      matchesState &&
      matchesCity &&
      matchesArea &&
      matchesStatus &&
      matchesType &&
      matchesBedrooms &&
      matchesBathrooms &&
      matchesLabel &&
      matchesYearBuilt &&
      matchesAreaRange &&
      matchesPriceRange
    );
  });

  // Paginate filtered properties
  const paginatedProperties = filteredProperties.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Clear all filters
  const handleClearFilters = () => {
    setCountryId([]);
    setStateId([]);
    setCityId([]);
    setArea([]);
    setStatus([]);
    setType([]);
    setBedrooms([]);
    setBathrooms([]);
    setLabel([]);
    setYearBuilt([]);
    setMinArea(0);
    setMaxArea(10000);
    handlePriceChange([1000000, 1000000000]);
    setCurrentPage(1);
  };

  // Reset page to 1 when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [countryId, stateId, cityId, area, status, type, bedrooms, bathrooms, label, yearBuilt, minArea, maxArea, priceRange]);

  return (
    <div >
      {/* Drawer for Advanced Search */}
      <Drawer
        title={
          <div className="flex items-center gap-2">
            <RiFilterLine className="text-orange-500" size={20} />
            <span className="text-lg font-semibold text-gray-800">Advanced Property Search</span>
          </div>
        }
        placement="right"
        width="min(90vw, 1280px)"
        onClose={onClose}
        open={open}
        extra={
          <div className="flex flex-wrap gap-2">
            <Button onClick={handleClearFilters} className="text-gray-600 text-xs">
              Clear Filters
            </Button>
            <Button onClick={onClose} icon={<RiCloseLine size={16} />} className="text-xs">
              Cancel
            </Button>
          </div>
        }
        className="property-search-drawer light-drawer"
      >
        <div className="flex flex-col lg:flex-row gap-4 p-4">
          {/* Filters Section */}
          <div className="w-full lg:w-1/3 space-y-4">
            {/* Location Filters */}
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-base font-medium text-gray-800 mb-3 flex items-center gap-2">
                <RiMapPin2Line size={18} className="text-orange-500" />
                Location
              </h3>
              <div className="space-y-3">
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">Country</label>
                  <CountrySelect
                    placeHolder="Select Country"
                    value={countryId.length ? { id: parseInt(countryId[0]) } : null}
                    onChange={(value) => {
                      setCountryId(value ? [value.id.toString()] : []);
                      setStateId([]);
                      setCityId([]);
                    }}
                    showFlag={true}
                    className="custom-select"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">State</label>
                  <StateSelect
                    countryid={countryId.length ? parseInt(countryId[0]) : undefined}
                    placeHolder="Select State"
                    value={stateId.length ? { id: parseInt(stateId[0]) } : null}
                    onChange={(value) => {
                      setStateId(value ? [value.id.toString()] : []);
                      setCityId([]);
                    }}
                    className="custom-select"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">City</label>
                  <CitySelect
                    countryid={countryId.length ? parseInt(countryId[0]) : undefined}
                    stateid={stateId.length ? parseInt(stateId[0]) : undefined}
                    placeHolder="Select City"
                    value={cityId.length ? { id: parseInt(cityId[0]) } : null}
                    onChange={(value) => {
                      setCityId(value ? [value.id.toString()] : []);
                    }}
                    className="custom-select"
                  />
                </div>
              </div>
            </div>

            {/* Property Filters */}
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-base font-medium text-gray-800 mb-3 flex items-center gap-2">
                <RiBuilding2Line size={18} className="text-orange-500" />
                Property Filters
              </h3>
              <div className="space-y-3">
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">Popular Areas</label>
                  <Select
                    mode="multiple"
                    className="w-full custom-select"
                    placeholder="Select Areas"
                    value={area}
                    onChange={setArea}
                    showSearch
                    allowClear
                    maxTagCount={2}
                  >
                    <Option value="All Areas">All Areas</Option>
                    <Option value="Sector 54, Gurgaon">Sector 54, Gurgaon</Option>
                    <Option value="Marine Drive, Mumbai">Marine Drive, Mumbai</Option>
                    <Option value="Bandra Kurla Complex">Bandra Kurla Complex</Option>
                    <Option value="Electronic City, Bangalore">Electronic City, Bangalore</Option>
                    <Option value="Connaught Place">Connaught Place</Option>
                    <Option value="Alipore, Kolkata">Alipore, Kolkata</Option>
                    <Option value="Whitefield, Bangalore">Whitefield, Bangalore</Option>
                    <Option value="Sector 66, Gurgaon">Sector 66, Gurgaon</Option>
                    <Option value="Sector 48, Gurgaon">Sector 48, Gurgaon</Option>
                    <Option value="Sector 62, Gurgaon">Sector 62, Gurgaon</Option>
                    <Option value="Sector 79, Gurgaon">Sector 79, Gurgaon</Option>
                    <Option value="Sector 63, Gurgaon">Sector 63, Gurgaon</Option>
                    <Option value="Sector 68, Gurgaon">Sector 68, Gurgaon</Option>
                    <Option value="Sector 106, Gurgaon">Sector 106, Gurgaon</Option>
                    <Option value="Sector 70, Gurgaon">Sector 70, Gurgaon</Option>
                    <Option value="Sector 65, Gurgaon">Sector 65, Gurgaon</Option>
                    <Option value="Sector 109, Gurgaon">Sector 109, Gurgaon</Option>
                    <Option value="Pangoot, Uttarakhand">Pangoot, Uttarakhand</Option>
                  </Select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">Property Status</label>
                  <Select
                    mode="multiple"
                    className="w-full custom-select"
                    placeholder="Select Status"
                    value={status}
                    onChange={setStatus}
                    allowClear
                    maxTagCount={2}
                  >
                    <Option value="For Sale">For Sale</Option>
                    <Option value="For Rent">For Rent</Option>
                    <Option value="Hot Offer">Hot Offer</Option>
                    <Option value="New Launch">New Launch</Option>
                    <Option value="Ready to Move">Ready to Move</Option>
                  </Select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">Property Type</label>
                  <Select
                    mode="multiple"
                    className="w-full custom-select"
                    placeholder="Select Types"
                    value={type}
                    onChange={setType}
                    allowClear
                    maxTagCount={2}
                  >
                    <Option value="Apartment">Apartment</Option>
                    <Option value="Villa">Villa</Option>
                    <Option value="Penthouse">Penthouse</Option>
                    <Option value="Residential">Residential</Option>
                    <Option value="Commercial">Commercial</Option>
                  </Select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">Bedrooms</label>
                  <Select
                    mode="multiple"
                    className="w-full custom-select"
                    placeholder="Select Bedrooms"
                    value={bedrooms}
                    onChange={setBedrooms}
                    allowClear
                    maxTagCount={2}
                  >
                    <Option value="Any">Any</Option>
                    <Option value="1">1</Option>
                    <Option value="2">2</Option>
                    <Option value="2-3">2-3</Option>
                    <Option value="3">3</Option>
                    <Option value="3-4">3-4</Option>
                    <Option value="4">4</Option>
                    <Option value="5">5</Option>
                  </Select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">Bathrooms</label>
                  <Select
                    mode="multiple"
                    className="w-full custom-select"
                    placeholder="Select Bathrooms"
                    value={bathrooms}
                    onChange={setBathrooms}
                    allowClear
                    maxTagCount={2}
                  >
                    <Option value="Any">Any</Option>
                    <Option value="1">1</Option>
                    <Option value="2">2</Option>
                    <Option value="2-3">2-3</Option>
                    <Option value="3">3</Option>
                    <Option value="3-4">3-4</Option>
                    <Option value="4">4</Option>
                    <Option value="5">5</Option>
                  </Select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">Label</label>
                  <Select
                    mode="multiple"
                    className="w-full custom-select"
                    placeholder="Select Label"
                    value={label}
                    onChange={setLabel}
                    allowClear
                    maxTagCount={2}
                  >
                    <Option value="Any">Any</Option>
                    <Option value="featured">Featured</Option>
                  </Select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">Year Built</label>
                  <Select
                    mode="multiple"
                    className="w-full custom-select"
                    placeholder="Select Year Built"
                    value={yearBuilt}
                    onChange={setYearBuilt}
                    allowClear
                    maxTagCount={2}
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
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-base font-medium text-gray-800 mb-3">Range Filters</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">Area Range (Sq Ft)</label>
                  <div className="flex gap-3">
                    <InputNumber
                      min={0}
                      max={10000}
                      value={minArea}
                      onChange={(value) => setMinArea(value || 0)}
                      placeholder="Min Area"
                      className="w-full custom-select"
                    />
                    <InputNumber
                      min={0}
                      max={10000}
                      value={maxArea}
                      onChange={(value) => setMaxArea(value || 10000)}
                      placeholder="Max Area"
                      className="w-full custom-select"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">Price Range (₹)</label>
                  <Slider
                    range
                    min={1000000}
                    max={1000000000}
                    step={1000000}
                    value={priceRange}
                    onChange={handlePriceChange}
                  />
                  <div className="flex justify-between text-xs text-gray-600">
                    <span>₹{priceRange[0].toLocaleString("en-IN")}</span>
                    <span>₹{priceRange[1].toLocaleString("en-IN")}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Properties Section */}
          <div className="w-full lg:w-2/3">
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-base font-medium text-gray-800 mb-3 flex items-center gap-2">
                <RiBuilding2Line size={18} className="text-orange-500" />
                Properties ({filteredProperties.length})
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-h-[calc(100vh-200px)] overflow-y-auto">
                {filteredProperties.length > 0 ? (
                  paginatedProperties.map((property) => (
                    <div
                      key={property.id}
                      className="border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-white"
                    >
                      <div className="relative h-48">
                        <img
                          src={property.image}
                          alt={property.name}
                          className="w-full h-full object-cover"
                        />
                        {property.featured && (
                          <span className="absolute top-2 right-2 bg-orange-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                            Featured
                          </span>
                        )}
                        <span className="absolute top-2 left-2 bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                          {property.status}
                        </span>
                      </div>
                      <div className="p-3">
                        <h4 className="text-sm font-semibold text-gray-900 mb-1 line-clamp-1">{property.name}</h4>
                        <p className="text-xs text-gray-600 mb-2 line-clamp-2">{property.location}</p>
                        <p className="text-lg font-bold text-orange-600 mb-2">{property.price?.toLocaleString("en-IN") || 'Price on Request'}</p>
                        <div className="text-xs text-gray-600 space-y-1">
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
                            <span className="font-medium">{property.areaValue} sq ft</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Year Built:</span>
                            <span className="font-medium">{property.yearBuilt || 'N/A'}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="col-span-full text-center py-8 text-gray-500">
                    <RiBuilding2Line size={40} className="mx-auto mb-3 text-gray-300" />
                    <p className="text-sm">No properties match your search criteria.</p>
                    <Button
                      type="link"
                      onClick={handleClearFilters}
                      className="text-blue-500 p-0 mt-2 text-sm"
                    >
                      Clear filters to see all properties
                    </Button>
                  </div>
                )}
              </div>
              {filteredProperties.length > pageSize && (
                <div className="mt-4 flex justify-center">
                  <Pagination
                    current={currentPage}
                    total={filteredProperties.length}
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


    </div>
  );
};

export default AdvancedPropertySearch;