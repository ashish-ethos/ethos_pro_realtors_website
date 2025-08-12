import React from "react";
import {
  Button,
  Input,
  Row,
  Col,
  Card,
  Select,
} from "antd";
import { FiMapPin } from "react-icons/fi";
import { MdOutlineHomeWork } from "react-icons/md";
import { DownOutlined } from "@ant-design/icons";
import BackgroundImage from "../../assets/images/home/main_background.jpg";
import "./Hero.css";

const { Option, OptGroup } = Select;

const Hero = ({ onSearchChange }) => {

   const handleSearch = (value) => {
    onSearchChange({ search: value }); // Update search text
  };

  const handleTypeSelect = (value) => {
    onSearchChange({ type: value }); // Update property type
  };

  const handleCitySelect = (value) => {
    onSearchChange({ city: value }); // Update city
  };

  return (
    <section
      className="relative w-full h-[60vh] overflow-hidden parallax"
      id="home"
    >
      {/* Background */}
      <div className="absolute inset-0 h-full mt-20">
        <img
          src={BackgroundImage}
          alt="Real Estate Background"
          className="w-full h-full object-cover brightness-85"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 text-white text-center hero-content">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight text-gradient animate-fade-in-slide-up">
          Ethos Pro Realtors
        </h1>
        <p className="text-base sm:text-lg lg:text-xl mb-10 max-w-3xl text-white/90 leading-relaxed animate-fade-in-delayed">
          Discover luxury properties for sale and rent with advanced search
          options.
        </p>

        {/* Advanced Search Card */}
        <Card
          className="w-full max-w-6xl mx-auto bg-white/95 shadow-2xl backdrop-blur-lg rounded-2xl p-4 sm:p-6 custom-border animate-scale-in"
          bodyStyle={{ padding: 0 }}
        >
          <Row gutter={[12, 12]} align="middle" justify="center" wrap>
            {/* Location */}
            <Col xs={24} sm={12} md={6}>
              <Input
                size="large"
                placeholder="Search"
         
                style={{ height: 48 }}
                className="rounded-lg border-gray-200 hover:border-blue-400 transition-colors"
              />
            </Col>

            {/* Property Type */}
            <Col xs={24} sm={12} md={6}>
              <Select
                size="large"
                style={{
                  width: "100%",
                  height: 48,
                }}
                placeholder={
                  <span style={{ display: "flex", alignItems: "center" }}>
                    <MdOutlineHomeWork className="text-gray-400 mr-2" />
                    Property Type
                  </span>
                }
                suffixIcon={<DownOutlined />}
                onChange={handleTypeSelect}
                dropdownStyle={{ minWidth: 200 }}
              >
                <OptGroup label="Commercial">
                  <Option value="food-court">Food Court</Option>
                  <Option value="office">Office</Option>
                  <Option value="plot-commercial">Plot</Option>
                  <Option value="shop">Shop</Option>
                  <Option value="villa-commercial">Villa</Option>
                </OptGroup>
                <OptGroup label="Residential">
                  <Option value="apartment">Apartment</Option>
                  <Option value="penthouse">Penthouse</Option>
                  <Option value="plot-residential">Plot</Option>
                  <Option value="studio">Studio</Option>
                  <Option value="villa-residential">Villa</Option>
                </OptGroup>
              </Select>
            </Col>

            {/* City */}
            <Col xs={24} sm={12} md={6}>
              <Select
                size="large"
                style={{
                  width: "100%",
                  height: 48,
                }}
                placeholder="Select City"
              >
                <Option value="gurgaon">Gurgaon</Option>
                <Option value="delhi">Delhi</Option>
                <Option value="noida">Noida</Option>
                <Option value="mumbai">Mumbai</Option>
                <Option value="bangalore">Bangalore</Option>
                <Option value="chennai">Chennai</Option>
                <Option value="pune">Pune</Option>
              </Select>
            </Col>

            {/* Search Button */}
            <Col xs={24} sm={12} md={6}>
              <Button
                type="primary"
                size="large"
                className="w-full rounded-lg custom-button"
                style={{ height: 48 }}
              >
                Search
              </Button>
            </Col>
          </Row>
        </Card>
      </div>
    </section>
  );
};

export default Hero;
