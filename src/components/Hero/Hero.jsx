import React, { useState } from "react";
import { Row, Col, Card, Tag } from "antd";
import useBreakpoint from 'antd/es/grid/hooks/useBreakpoint';
import { DownOutlined } from "@ant-design/icons";
import BackgroundImage from "../../assets/images/home/main_background.jpg";
import "./Hero.css";
import AdvancedPropertySearch from "../DifferentCities/AdvancedPropertySearch";
import CustomInput from "../ui/Input";
import CustomSelect from "../ui/Select";
import CustomButton from "../ui/Button";

const Hero = ({ onSearchChange }) => {
  const [searchText, setSearchText] = useState("");
  const [propertyType, setPropertyType] = useState([]);
  const [selectedCity, setSelectedCity] = useState([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const screens = useBreakpoint();

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchText(value);
    onSearchChange({ search: value });
  };

  const handleTypeSelect = (value) => {
    setPropertyType(value);
    onSearchChange({ type: value });
  };

  const handleCitySelect = (value) => {
    setSelectedCity(value);
    setIsDrawerOpen(value.length > 0);
    onSearchChange({ city: value });
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  const cityIdMap = {
    gurgaon: "56798",
    delhi: "110001",
    noida: "201301",
    mumbai: "400001",
    bangalore: "560001",
    chennai: "600001",
    pune: "411001",
  };

  const propertyTypeOptions = [
    { value: "food-court", label: "Food Court", group: "Commercial" },
    { value: "office", label: "Office", group: "Commercial" },
    { value: "plot-commercial", label: "Plot", group: "Commercial" },
    { value: "shop", label: "Shop", group: "Commercial" },
    { value: "villa-commercial", label: "Villa", group: "Commercial" },
    { value: "apartment", label: "Apartment", group: "Residential" },
    { value: "penthouse", label: "Penthouse", group: "Residential" },
    { value: "plot-residential", label: "Plot", group: "Residential" },
    { value: "studio", label: "Studio", group: "Residential" },
    { value: "villa-residential", label: "Villa", group: "Residential" },
  ];

  const cityOptions = [
    "gurgaon",
    "delhi",
    "noida",
    "mumbai",
    "bangalore",
    "chennai",
    "pune",
  ];

  // Custom tag rendering for multiple select
  const tagRender = (props) => {
    const { label, closable, onClose } = props;
    return (
      <Tag
        closable={closable}
        onClose={onClose}
        className="hero-tag"
        
      >
        {label}
      </Tag>
    );
  };

  // Calculate dynamic minWidth for selects
  const propertyMinWidth = propertyType.length > 0 ? Math.min(propertyType.length * 70 + 60, 400) : 150;
  const cityMinWidth = selectedCity.length > 0 ? Math.min(selectedCity.length * 70 + 60, 400) : 150;

  return (
    <section
      className="relative w-full h-[60vh] overflow-hidden parallax hero-section"
      id="home"
    >
      {/* Background */}
      <div className="absolute inset-0 h-full">
        <img
          src={BackgroundImage}
          alt="Real Estate Background"
          className="w-full h-full object-cover brightness-85"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 text-white text-center hero-content">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight text-gradient animate-fade-in-slide-up hero-section-title">
          Ethos Pro Realtors
        </h1>
        <p className="text-base sm:text-lg lg:text-xl mb-10 max-w-3xl text-white/90 leading-relaxed animate-fade-in-delayed">
          Discover luxury properties for sale and rent with advanced search
          options.
        </p>

        {/* Advanced Search Card */}
        <Card
          className="hero-section-card w-full max-w-6xl mx-auto bg-gradient-to-r from-orange-400 to-orange-200 shadow-2xl rounded-2xl p-6 sm:p-8 animate-scale-in"
          
        >
          <Row gutter={[8, 8]} align="middle" justify="center" wrap className="p-4 hero-card-all">
            {/* Location */}
            <Col xs={24} sm={12} md={undefined} style={screens.md ? { flex: '0 0 200px' } : {}}>
              <CustomInput
                size="large"
                placeholder="Search"
                value={searchText}
                onChange={handleSearch}
                
                className="w-full rounded-lg border-gray-200 hover:border-blue-400 transition-colors"
              />
            </Col>

            {/* Property Type */}
            <Col xs={24} sm={12} md={undefined} style={screens.md ? { flex: '0 0 auto' } : {}}>
              <CustomSelect
                size="large"
                className="hero-select"

                style={{
                  width: "auto",
                  height: 40,
                  minWidth: propertyMinWidth,
                  maxWidth: 400,
                  transition: 'min-width 0.3s ease',
                }}
                placeholder="Property Type"
                suffixIcon={<DownOutlined />}
                onChange={handleTypeSelect}
                dropdownStyle={{ minWidth: 200 }}
                optionFilterProp="label"
                showSearch
                mode="multiple"
                value={propertyType}
                tagRender={tagRender}
                allowClear
              >
                <CustomSelect.OptGroup label="Commercial">
                  {propertyTypeOptions
                    .filter((opt) => opt.group === "Commercial")
                    .map((opt) => (
                      <CustomSelect.Option key={opt.value} value={opt.value}>
                        {opt.label}
                      </CustomSelect.Option>
                    ))}
                </CustomSelect.OptGroup>
                <CustomSelect.OptGroup label="Residential">
                  {propertyTypeOptions
                    .filter((opt) => opt.group === "Residential")
                    .map((opt) => (
                      <CustomSelect.Option key={opt.value} value={opt.value}>
                        {opt.label}
                      </CustomSelect.Option>
                    ))}
                </CustomSelect.OptGroup>
              </CustomSelect>
            </Col>

            {/* City */}
            <Col xs={24} sm={12} md={undefined} style={screens.md ? { flex: '0 0 auto' } : {}}>
              <CustomSelect
                size="large"
                className="hero-select"
                style={{
                  width: "auto",
                  height: 40,
                  minWidth: cityMinWidth,
                  maxWidth: 400,
                  transition: 'min-width 0.3s ease',
                }}
                placeholder="Select City"
                onChange={handleCitySelect}
                dropdownStyle={{ minWidth: 200 }}
                options={cityOptions.map((city) => ({
                  value: city,
                  label: city.charAt(0).toUpperCase() + city.slice(1),
                }))}
                mode="multiple"
                value={selectedCity}
                tagRender={tagRender}
                allowClear
              />
            </Col>

            {/* Search Button */}
            <Col xs={24} sm={12} md={undefined} style={screens.md ? { flex: '0 0 150px' } : {}}>
              <CustomButton
                type="primary"
                size="large"
                className="w-full rounded-lg property-card-action-button transition-all duration-300"
                style={{ height: 40 }}
              >
                Search
              </CustomButton>
            </Col>
          </Row>
        </Card>

        {/* Advanced Property Search Drawer */}
        <AdvancedPropertySearch
          open={isDrawerOpen}
          onClose={handleDrawerClose}
          countryId={selectedCity.map((city) => cityIdMap[city] || "")}
          setCountryId={() => {}}
          stateId={[]}
          setStateId={() => {}}
          cityId={selectedCity.map((city) => cityIdMap[city] || "")}
          setCityId={() => {}}
          area={[]}
          setArea={() => {}}
          status={[]}
          setStatus={() => {}}
          type={propertyType}
          setType={() => {}}
          bedrooms={[]}
          setBedrooms={() => {}}
          bathrooms={[]}
          setBathrooms={() => {}}
          minArea={0}
          setMinArea={() => {}}
          maxArea={10000}
          setMaxArea={() => {}}
          label={[]}
          setLabel={() => {}}
          yearBuilt={[]}
          setYearBuilt={() => {}}
          priceRange={[1000000, 1000000000]}
          handlePriceChange={() => {}}
          properties={[]}
        />
      </div>
    </section>
  );
};

export default Hero;