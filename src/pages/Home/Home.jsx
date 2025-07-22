import React from "react";
import {
  Dropdown,
  Button,
  Space,
  Input,
  Menu,
  InputNumber,
  Row,
  Col,
  Card,
} from "antd";
import { DownOutlined } from "@ant-design/icons";
import { FiMapPin } from "react-icons/fi";
import { MdOutlineHomeWork } from "react-icons/md";
import BackgroundImage from "../../assets/images/home/background.jpg";
import "./Home.css";

const propertyTypeMenu = (
  <Menu
    items={[
      { label: "Apartment", key: "1" },
      { label: "Villa", key: "2" },
      { label: "Commercial", key: "3" },
    ]}
  />
);

const Home = () => {
  const onPriceChange = (value) => {
    console.log("Price changed:", value);
  };

  return (
    <section className="relative w-full h-screen overflow-hidden parallax">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={BackgroundImage}
          alt="Real Estate Background"
          className="w-full h-full object-cover brightness-75"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-6 lg:px-8 text-white text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight text-gradient animate-fade-in-slide-up">
          Ethos Pro Realtors
        </h1>
        <p className="text-base sm:text-lg lg:text-xl mb-10 max-w-3xl text-white/90 leading-relaxed animate-fade-in-delayed">
          Discover luxury properties for sale and rent with advanced search options.
        </p>

        {/* Advanced Search Card */}
        <Card
          className="w-full max-w-5xl mx-auto bg-white/95 shadow-2xl backdrop-blur-lg rounded-2xl p-4 sm:p-6 custom-border animate-scale-in"
          bodyStyle={{ padding: 0 }}
        >
          <Row
            align="middle"
            justify="center"
            wrap={false}
            style={{ gap: "15px", flexWrap: "wrap" }}
          >
            {/* Location */}
            <Col flex="1 1 200px">
              <Input
                size="large"
                placeholder="Enter Location"
                prefix={<FiMapPin className="text-gray-400" />}
                style={{ height: "40px", lineHeight: "48px", paddingTop: "0", paddingBottom: "0" }}
                className="rounded-lg border-gray-200 hover:border-blue-400 transition-colors animate-scale-in-delayed"
              />

            </Col>

            {/* Property Type */}
            <Col flex="1 1 160px">
              <Dropdown overlay={propertyTypeMenu} trigger={["click"]}>
                <Button
                  size="large"
                  style={{ height: "40px" }}
                  className="w-full text-left rounded-lg border border-gray-200 hover:border-blue-400 transition-colors animate-scale-in-delayed-2"
                  icon={<MdOutlineHomeWork className="text-gray-400 mr-2" />}
                >
                  <Space>
                    Property Type
                    <DownOutlined />
                  </Space>
                </Button>
              </Dropdown>
            </Col>

            {/* Min Price */}
            <Col flex="1 1 100px">
              <InputNumber
                size="large"
                min={0}
                placeholder="$"
                style={{ height: "40px", width: "100%" }}
                className="rounded-lg border-gray-200 hover:border-blue-400 transition-colors animate-scale-in-delayed-3"
                formatter={(value) =>
                  `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                }
                parser={(value) => value?.replace(/\$\s?|(,*)/g, "")}
                onChange={onPriceChange}
              />
            </Col>

            {/* Max Price */}
            <Col flex="1 1 100px">
              <InputNumber
                size="large"
                min={0}
                placeholder="$"
                style={{ height: "40px", width: "100%" }}
                className="rounded-lg border-gray-200 hover:border-blue-400 transition-colors animate-scale-in-delayed-3"
                formatter={(value) =>
                  `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                }
                parser={(value) => value?.replace(/\$\s?|(,*)/g, "")}
                onChange={onPriceChange}
              />
            </Col>

            {/* Search Button */}
            <Col flex="1 1 100px">
              <Button
                type="primary"
                size="large"
                style={{ height: "40px" }}
                className="w-full rounded-lg custom-button animate-pulse-button"
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

export default Home;
