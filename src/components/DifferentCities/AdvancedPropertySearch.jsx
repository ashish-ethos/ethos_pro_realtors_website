import React, { useState, useEffect, useMemo } from "react";
import {
  Drawer,
  Typography,
  Button,
  Input,
  Select,
  Slider,
  InputNumber,
  Pagination,
  Card,
  Row,
  Col,
  Space,
  Tag,
  Radio,
  Tooltip,
  Checkbox,
  Divider,
  Collapse,
  List,
} from "antd";
import {
  FaSearch,
  FaFilter,
  FaTimes,
  FaMapMarkerAlt,
  FaHome,
  FaBath,
  FaBed,
  FaCalendarAlt,
  FaDollarSign,
  FaStar,
  FaEye,
  FaHeart,
  FaTh,
  FaList as FaListIcon,
} from "react-icons/fa";
import { FaList } from "react-icons/fa";

const { Title, Text } = Typography;
const { Option } = Select;
const { Panel } = Collapse;

// NOTE: This component is a UI-upgrade of your original AdvancedPropertySearch.
// All props, filtering logic and handlers are preserved. Styling, layout and
// small UX improvements (filter chips, sticky sidebar, card overlays, hover
// animations) are added without removing existing behavior.

const AdvancedPropertySearch = ({
  open,
  onClose,
  countryId = [],
  setCountryId,
  stateId = [],
  setStateId,
  cityId = [],
  setCityId,
  area = [],
  setArea,
  status = [],
  setStatus,
  type = [],
  setType,
  bedrooms = [],
  setBedrooms,
  bathrooms = [],
  setBathrooms,
  minArea = 0,
  setMinArea,
  maxArea = 10000,
  setMaxArea,
  label = [],
  setLabel,
  yearBuilt = [],
  setYearBuilt,
  priceRange = [1000000, 1000000000],
  handlePriceChange,
  properties = [],
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [viewMode, setViewMode] = useState("grid");
  const [sortBy, setSortBy] = useState("price-low");
  const [showFilters, setShowFilters] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [favoriteProperties, setFavoriteProperties] = useState(new Set());
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const pageSize = 9;

  const currentYear = new Date().getFullYear();

  // Mock properties (preserved)
  const mockProperties = [
    {
      id: 1,
      name: "Luxury Penthouse with City View",
      location: "Sector 54, Gurgaon",
      area: "Sector 54, Gurgaon",
      price: 85000000,
      priceValue: 85000000,
      image:
        "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=500&fit=crop",
      type: "Penthouse",
      status: "For Sale",
      bedrooms: 4,
      bathrooms: 3,
      areaValue: 2500,
      yearBuilt: 2022,
      label: "featured",
      featured: true,
      countryId: 101,
      stateId: 4030,
      cityId: "56798",
    },
    {
      id: 2,
      name: "Modern Villa with Garden",
      location: "Sector 66, Gurgaon",
      area: "Sector 66, Gurgaon",
      price: 65000000,
      priceValue: 65000000,
      image:
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=500&fit=crop",
      type: "Villa",
      status: "For Rent",
      bedrooms: 3,
      bathrooms: 2,
      areaValue: 2000,
      yearBuilt: 2021,
      featured: false,
      countryId: 101,
      stateId: 4030,
      cityId: "56798",
    },
    {
      id: 3,
      name: "Cozy Apartment Downtown",
      location: "Sector 48, Gurgaon",
      area: "Sector 48, Gurgaon",
      price: 35000000,
      priceValue: 35000000,
      image:
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=500&fit=crop",
      type: "Apartment",
      status: "Hot Offer",
      bedrooms: 2,
      bathrooms: 2,
      areaValue: 1200,
      yearBuilt: 2020,
      featured: true,
      countryId: 101,
      stateId: 4030,
      cityId: "56798",
    },
  ];

  const displayProperties = properties.length > 0 ? properties : mockProperties;

  // Gurgaon sectors (preserved)
  const gurgaonSectors = [
    "Sector 54, Gurgaon",
    "Sector 66, Gurgaon",
    "Sector 48, Gurgaon",
    "Sector 62, Gurgaon",
    "Sector 79, Gurgaon",
    "Sector 63, Gurgaon",
    "Sector 68, Gurgaon",
    "Sector 106, Gurgaon",
    "Sector 70, Gurgaon",
    "Sector 65, Gurgaon",
    "Sector 109, Gurgaon",
  ];

  // Debounce search query for better UX
  useEffect(() => {
    const t = setTimeout(() => setDebouncedQuery(searchQuery), 250);
    return () => clearTimeout(t);
  }, [searchQuery]);

  const formatPrice = (price, priceValue) => {
    const rawPrice = price ?? priceValue;
    if (!rawPrice || isNaN(Number(rawPrice))) return "N/A";
    return `₹${(Number(rawPrice) / 10000000).toFixed(1)} Cr`;
  };

  const getFormattedPrice = (property) => {
    let rawPrice = property.price ?? property.priceValue ?? 0;

    // Convert to number safely
    if (typeof rawPrice === "string") {
      rawPrice = rawPrice.replace(/[^0-9.]/g, ""); // remove ₹, commas, text
    }

    const numPrice = parseFloat(rawPrice);

    if (!numPrice || isNaN(numPrice)) {
      return "N/A";
    }

    // Convert to Crores
    let crores = numPrice / 10000000;

    // If integer, no decimal
    if (Number.isInteger(crores)) {
      return `${crores} Cr`;
    }

    return `${crores.toFixed(1)} Cr`;
  };

  // Filtering + sorting (preserved logic) but uses debouncedQuery
  const filteredProperties = useMemo(() => {
    return displayProperties
      .filter((property) => {
        const matchesSearch =
          !debouncedQuery ||
          property.name?.toLowerCase().includes(debouncedQuery.toLowerCase()) ||
          property.location?.toLowerCase().includes(debouncedQuery.toLowerCase());

        const matchesCountry = countryId.length === 0 || countryId.includes(property.countryId?.toString());
        const matchesState = stateId.length === 0 || stateId.includes(property.stateId?.toString());
        const matchesCity = cityId.length === 0 || cityId.includes(property.cityId?.toString());
        const matchesArea =
          area.length === 0 ||
          area.includes("All Areas") ||
          (area.includes("Gurgaon") && gurgaonSectors.includes(property.area)) ||
          area.includes(property.area);
        const matchesStatus = status.length === 0 || status.includes(property.status);
        const matchesType = type.length === 0 || type.includes(property.type);
        const matchesBedrooms =
          bedrooms.length === 0 ||
          bedrooms.includes("Any") ||
          bedrooms.some((bed) => {
            if (!property.bedrooms) return false;
            if (bed.includes("+")) {
              const min = Number(bed.replace("+", ""));
              return property.bedrooms >= min;
            }
            if (bed.includes("-")) {
              const [min, max] = bed.split("-").map(Number);
              return property.bedrooms >= min && property.bedrooms <= max;
            }
            return property.bedrooms.toString() === bed;
          });
        const matchesBathrooms =
          bathrooms.length === 0 ||
          bathrooms.includes("Any") ||
          bathrooms.some((bath) => {
            if (!property.bathrooms) return false;
            if (bath.includes("+")) {
              const min = Number(bath.replace("+", ""));
              return property.bathrooms >= min;
            }
            if (bath.includes("-")) {
              const [min, max] = bath.split("-").map(Number);
              return property.bathrooms >= min && property.bathrooms <= max;
            }
            return property.bathrooms.toString() === bath;
          });
        const matchesLabel = label.length === 0 || label.includes("Any") || label.includes(property.label);
        const matchesYearBuilt = yearBuilt.length === 0 || yearBuilt.includes(property.yearBuilt?.toString());
        const effectiveMinArea = minArea <= maxArea ? minArea : maxArea;
        const effectiveMaxArea = minArea <= maxArea ? maxArea : minArea;
        const matchesAreaRange = property.areaValue >= effectiveMinArea && property.areaValue <= effectiveMaxArea;
        const matchesPriceRange = property.priceValue >= priceRange[0] && property.priceValue <= priceRange[1];

        return (
          matchesSearch &&
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
      })
      .sort((a, b) => {
        switch (sortBy) {
          case "price-low":
            return a.priceValue - b.priceValue;
          case "price-high":
            return b.priceValue - a.priceValue;
          case "area-large":
            return b.areaValue - a.areaValue;
          case "area-small":
            return a.areaValue - b.areaValue;
          case "newest":
            return b.yearBuilt - a.yearBuilt;
          default:
            return 0;
        }
      });
  }, [
    displayProperties,
    debouncedQuery,
    countryId,
    stateId,
    cityId,
    area,
    status,
    type,
    bedrooms,
    bathrooms,
    label,
    yearBuilt,
    minArea,
    maxArea,
    priceRange,
    sortBy,
  ]);

  const paginatedProperties = filteredProperties.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const toggleFavorite = (propertyId) => {
    const newFavorites = new Set(favoriteProperties);
    if (newFavorites.has(propertyId)) {
      newFavorites.delete(propertyId);
    } else {
      newFavorites.add(propertyId);
    }
    setFavoriteProperties(newFavorites);
  };

  // Clear all filters (preserved)
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
    setSearchQuery("");
  };

  const handlePriceChangeWrapper = (value) => {
    let [min, max] = value;
    if (min > max) {
      [min, max] = [max, min];
    }
    handlePriceChange([min, max]);
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [
    countryId,
    stateId,
    cityId,
    area,
    status,
    type,
    bedrooms,
    bathrooms,
    label,
    yearBuilt,
    minArea,
    maxArea,
    priceRange,
    debouncedQuery,
  ]);

  const getStatusColor = (status) => {
    switch (status) {
      case "For Sale":
        return "green";
      case "For Rent":
        return "blue";
      case "Hot Offer":
        return "red";
      default:
        return "purple";
    }
  };

  // Helpers to remove specific filter items when clicking filter chips
  const removeFilterValue = (filterKey, value) => {
    switch (filterKey) {
      case "area":
        setArea(area.filter((a) => a !== value));
        break;
      case "type":
        setType(type.filter((t) => t !== value));
        break;
      case "status":
        setStatus(status.filter((s) => s !== value));
        break;
      case "bedrooms":
        setBedrooms(bedrooms.filter((b) => b !== value));
        break;
      case "bathrooms":
        setBathrooms(bathrooms.filter((b) => b !== value));
        break;
      case "label":
        setLabel(label.filter((l) => l !== value));
        break;
      case "yearBuilt":
        setYearBuilt(yearBuilt.filter((y) => y !== value));
        break;
      case "countryId":
        setCountryId(countryId.filter((c) => c !== value));
        break;
      case "stateId":
        setStateId(stateId.filter((s) => s !== value));
        break;
      case "cityId":
        setCityId(cityId.filter((c) => c !== value));
        break;
      default:
        break;
    }
  };

  // Build list of active filter chips to display
  const activeChips = [];
  area.forEach((a) => a && activeChips.push({ key: `area:${a}`, label: a, filterKey: "area" }));
  type.forEach((t) => t && activeChips.push({ key: `type:${t}`, label: t, filterKey: "type" }));
  status.forEach((s) => s && activeChips.push({ key: `status:${s}`, label: s, filterKey: "status" }));
  bedrooms.forEach((b) => b && activeChips.push({ key: `bed:${b}`, label: b, filterKey: "bedrooms" }));
  bathrooms.forEach((b) => b && activeChips.push({ key: `bath:${b}`, label: b, filterKey: "bathrooms" }));
  label.forEach((l) => l && activeChips.push({ key: `label:${l}`, label: l, filterKey: "label" }));
  yearBuilt.forEach((y) => y && activeChips.push({ key: `year:${y}`, label: y, filterKey: "yearBuilt" }));
  countryId.forEach((c) => c && activeChips.push({ key: `country:${c}`, label: `Country:${c}`, filterKey: "countryId" }));
  stateId.forEach((s) => s && activeChips.push({ key: `state:${s}`, label: `State:${s}`, filterKey: "stateId" }));
  cityId.forEach((c) => c && activeChips.push({ key: `city:${c}`, label: `City:${c}`, filterKey: "cityId" }));

  return (
    <Drawer
      title={
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Space>
            <Title level={4} style={{ margin: 0 }}>
              Advanced Property Search
            </Title>
            <Text type="secondary">{filteredProperties.length} properties found</Text>
          </Space>
          <Space>
            <Button
              icon={<FaFilter />}
              onClick={() => setShowFilters(!showFilters)}
              style={{ borderRadius: 6 }}
            >
              {showFilters ? "Hide Filters" : "Show Filters"}
            </Button>
            <Button type="primary" danger onClick={handleClearFilters} style={{ borderRadius: 6 }}>
              Clear All
            </Button>
            <Button icon={<FaTimes />} onClick={onClose} style={{ borderRadius: 6 }} />
          </Space>
        </div>
      }
      placement="right"
      onClose={onClose}
      open={open}
      width="95%"
      bodyStyle={{ padding: 0, display: "flex", minHeight: "70vh" }}
    >
      <div style={{ display: "flex", height: "100%", width: "100%" }}>
        {showFilters && (
          <div
            style={{
              width: 340,
              padding: "10px 20px",
              borderRight: "1px solid #f0f0f0",
              overflowY: "auto",
              backgroundColor: "#fafafa",
              // make sidebar feel "sticky" inside the drawer
              position: "relative",
            }}
          >
            <div style={{ position: "sticky", top: 0, background: "#fafafa", paddingBottom: 12, zIndex: 2 }}>
              <Space direction="vertical" size="small" style={{ width: "100%" }}>
                <Input
                  prefix={<FaSearch />}
                  placeholder="Search by name or location..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  style={{ borderRadius: 8, height: 40, alignItems: "center" }}
                />

                {/* Active filter chips */}
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  {activeChips.length === 0 ? (
                    <Text type="secondary">No active filters</Text>
                  ) : (
                    activeChips.slice(0, 6).map((chip) => (
                      <Tag
                        key={chip.key}
                        closable
                        onClose={() => removeFilterValue(chip.filterKey, chip.label)}
                        style={{ cursor: "pointer" }}
                      >
                        {chip.label}
                      </Tag>
                    ))
                  )}
                </div>

                <Divider style={{ margin: "0" }} />
              </Space>
            </div>

            <Collapse defaultActiveKey={["basic", "advanced"]} ghost>
              <Panel header={<b>Basic Filters</b>} key="basic">
                <Space direction="vertical" size="middle" style={{ width: "100%", margin: "0px 0" }}>
                  <div>
                    <span strong className="flex items-center">
                      <FaMapMarkerAlt style={{ marginRight: 8 }} />
                      Location
                    </span>
                    <Select
                      mode="multiple"
                      placeholder="Select Areas"
                      value={area}
                      onChange={setArea}
                      style={{ width: "100%", marginTop: 8 }}
                      allowClear
                      showSearch
                    >
                      <Option value="All Areas">All Areas</Option>
                      <Option value="Sector 54, Gurgaon">Sector 54, Gurgaon</Option>
                      <Option value="Marine Drive, Mumbai">Marine Drive, Mumbai</Option>
                      <Option value="Electronic City, Bangalore">Electronic City, Bangalore</Option>
                    </Select>
                  </div>

                  <div>
                    <span strong className="flex items-center">
                      <FaHome style={{ marginRight: 8 }} />
                      Property Type
                    </span>
                    <Select
                      mode="multiple"
                      placeholder="Select Types"
                      value={type}
                      onChange={setType}
                      style={{ width: "100%", marginTop: 8 }}
                      allowClear
                      showSearch
                    >
                      <Option value="Apartment">Apartment</Option>
                      <Option value="Villa">Villa</Option>
                      <Option value="Penthouse">Penthouse</Option>
                      <Option value="Residential">Residential</Option>
                      <Option value="Commercial">Commercial</Option>
                    </Select>
                  </div>

                  <div>
                    <span strong className="flex items-center">
                      <FaStar style={{ marginRight: 8 }} />
                      Status
                    </span>
                    <Select
                      mode="multiple"
                      placeholder="Select Status"
                      value={status}
                      onChange={setStatus}
                      style={{ width: "100%", marginTop: 8 }}
                      allowClear
                      showSearch
                    >
                      <Option value="For Sale">For Sale</Option>
                      <Option value="For Rent">For Rent</Option>
                      <Option value="Hot Offer">Hot Offer</Option>
                      <Option value="New Launch">New Launch</Option>
                      <Option value="Ready to Move">Ready to Move</Option>
                    </Select>
                  </div>

                  <div>
                    <span strong className="flex items-center">
                      <FaBed style={{ marginRight: 8 }} />
                      Bedrooms
                    </span>
                    <Select
                      mode="multiple"
                      placeholder="Select Bedrooms"
                      value={bedrooms}
                      onChange={setBedrooms}
                      style={{ width: "100%", marginTop: 8 }}
                      allowClear
                      showSearch
                    >
                      <Option value="Any">Any</Option>
                      <Option value="1">1 Bedroom</Option>
                      <Option value="2">2 Bedrooms</Option>
                      <Option value="3">3 Bedrooms</Option>
                      <Option value="4+">4+ Bedrooms</Option>
                    </Select>
                  </div>

                  <div>
                    <span strong className="flex items-center">
                      <FaBath style={{ marginRight: 8 }} />
                      Bathrooms
                    </span>
                    <Select
                      mode="multiple"
                      placeholder="Select Bathrooms"
                      value={bathrooms}
                      onChange={setBathrooms}
                      style={{ width: "100%", marginTop: 8 }}
                      allowClear
                      showSearch
                    >
                      <Option value="Any">Any</Option>
                      <Option value="1">1 Bathroom</Option>
                      <Option value="2">2 Bathrooms</Option>
                      <Option value="3">3 Bathrooms</Option>
                      <Option value="4+">4+ Bathrooms</Option>
                    </Select>
                  </div>
                </Space>
              </Panel>

              <Panel header={<b>Advanced Filters</b>} key="advanced">
                <Space direction="vertical" size="middle" style={{ width: "100%" }}>
                  <div>
                    <span className="flex items-center font-semibold">
                      <FaDollarSign style={{ marginRight: 8 }} />
                      Price Range
                    </span>
                    <Slider
                      range
                      min={1000000}
                      max={1000000000}
                      step={1000000}
                      value={priceRange}
                      onChange={(value) => {
                        const [min, max] = value;
                        handlePriceChange([Math.min(min, max), Math.max(min, max)]);
                      }}
                      onAfterChange={(value) => {
                        const [min, max] = value;
                        handlePriceChange([Math.min(min, max), Math.max(min, max)]);
                      }}
                      tooltip={{
                        open: true,
                        formatter: (value) => {
                          const crores = value / 10000000;
                          return Number.isInteger(crores) ? `₹${crores} Cr` : `₹${crores.toFixed(1)} Cr`;
                        },
                      }}
                      style={{ margin: "16px 0" }}
                    />
                    <Space style={{ width: "100%", justifyContent: "space-between" }}>
                      <InputNumber
                        value={priceRange[0]}
                        onChange={(value) => handlePriceChange([value || 1000000, priceRange[1]])}
                        formatter={(value) => {
                          const crores = value / 10000000;
                          return Number.isInteger(crores) ? `₹${crores} Cr` : `₹${crores.toFixed(1)} Cr`;
                        }}
                        parser={(value) => parseFloat(value.replace(/[^0-9.]/g, "")) * 10000000}
                        style={{ width: "48%", borderRadius: 6 }}
                      />
                      <InputNumber
                        value={priceRange[1]}
                        onChange={(value) => handlePriceChange([priceRange[0], value || 1000000000])}
                        formatter={(value) => {
                          const crores = value / 10000000;
                          return Number.isInteger(crores) ? `₹${crores} Cr` : `₹${crores.toFixed(1)} Cr`;
                        }}
                        parser={(value) => parseFloat(value.replace(/[^0-9.]/g, "")) * 10000000}
                        style={{ width: "48%", borderRadius: 6 }}
                      />
                    </Space>
                  </div>

                  <div>
                    <span strong className="flex items-center">
                      <FaHome style={{ marginRight: 8 }} />
                      Area Range (Sq Ft)
                    </span>
                    <Space style={{ width: "100%", marginTop: 8 }}>
                      <InputNumber
                        placeholder="Min"
                        value={minArea}
                        onChange={(value) => setMinArea(value || 0)}
                        style={{ flex: 1, borderRadius: 6 }}
                      />
                      <InputNumber
                        placeholder="Max"
                        value={maxArea}
                        onChange={(value) => setMaxArea(value || 10000)}
                        style={{ flex: 1, borderRadius: 6 }}
                      />
                    </Space>
                  </div>

                  <div>
                    <span strong className="flex items-center">
                      <FaCalendarAlt style={{ marginRight: 8 }} />
                      Year Built
                    </span>
                    <Select
                      mode="multiple"
                      placeholder="Select Years"
                      value={yearBuilt}
                      onChange={setYearBuilt}
                      style={{ width: "100%", marginTop: 8 }}
                      allowClear
                      showSearch
                    >
                      {Array.from({ length: 126 }, (_, i) => currentYear - i).map((year) => (
                        <Option key={year} value={year.toString()}>
                          {year}
                        </Option>
                      ))}
                    </Select>
                  </div>

                  <div>
                    <span strong className="flex items-center">
                      <FaStar style={{ marginRight: 8 }} />
                      Labels
                    </span>
                    <Select
                      mode="multiple"
                      placeholder="Select Labels"
                      value={label}
                      onChange={setLabel}
                      style={{ width: "100%", marginTop: 8 }}
                      allowClear
                      showSearch
                    >
                      <Option value="Any">Any</Option>
                      <Option value="featured">Featured</Option>
                      <Option value="hot">Hot</Option>
                      <Option value="new">New</Option>
                    </Select>
                  </div>

                  <div>
                    <span strong className="flex items-center">
                      <FaMapMarkerAlt style={{ marginRight: 8 }} />
                      Country
                    </span>
                    <Select
                      mode="multiple"
                      placeholder="Select Countries"
                      value={countryId}
                      onChange={setCountryId}
                      style={{ width: "100%", marginTop: 8 }}
                      allowClear
                      showSearch
                    >
                      <Option value="101">India</Option>
                    </Select>
                  </div>

                  <div>
                    <span strong className="flex items-center">
                      <FaMapMarkerAlt style={{ marginRight: 8 }} />
                      State
                    </span>
                    <Select
                      mode="multiple"
                      placeholder="Select States"
                      value={stateId}
                      onChange={setStateId}
                      style={{ width: "100%", marginTop: 8 }}
                      allowClear
                      showSearch
                    >
                      <Option value="4030">Haryana</Option>
                    </Select>
                  </div>

                  <div>
                    <span strong className="flex items-center">
                      <FaMapMarkerAlt style={{ marginRight: 8 }} />
                      City
                    </span>
                    <Select
                      mode="multiple"
                      placeholder="Select Cities"
                      value={cityId}
                      onChange={setCityId}
                      style={{ width: "100%", marginTop: 8 }}
                      allowClear
                      showSearch
                    >
                      <Option value="56798">Gurgaon</Option>
                      <Option value="110001">Delhi</Option>
                      <Option value="201301">Noida</Option>
                      <Option value="400001">Mumbai</Option>
                      <Option value="560001">Bangalore</Option>
                      <Option value="600001">Chennai</Option>
                      <Option value="411001">Pune</Option>
                    </Select>
                  </div>
                </Space>
              </Panel>
            </Collapse>

            <div style={{ position: "sticky", bottom: 0, background: "#fafafa", paddingTop: 12 }}>
              <Space style={{ width: "100%", justifyContent: "space-between" }}>
                <Button onClick={handleClearFilters}>Reset</Button>
                <Button type="primary" onClick={() => setShowFilters(false)}>
                  Apply
                </Button>
              </Space>
            </div>
          </div>
        )}

        <div style={{ flex: 1, padding: 24, overflowY: "auto" }}>
          {/* Header: view toggles, sort, and active filters summary */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Radio.Group
                  value={viewMode}
                  onChange={(e) => setViewMode(e.target.value)}
                  buttonStyle="solid"
                  style={{
                    display: "inline-flex", // ensures horizontal layout
                    flexDirection: "row",
                    borderRadius: 8,
                    overflow: "hidden",
                  }}
                >
                  <Radio.Button
                    value="grid"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "6px 12px",
                    }}
                  >
                    <FaTh />
                  </Radio.Button>
                  <Radio.Button
                    value="list"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "6px 12px",
                    }}
                  >
                    <FaList />
                  </Radio.Button>
                </Radio.Group>
              </div>

              <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                <Text type="secondary">Sort</Text>
                <Select value={sortBy} onChange={setSortBy} style={{ width: 220 }} placeholder="Sort by">
                  <Option value="price-low">Price: Low to High</Option>
                  <Option value="price-high">Price: High to Low</Option>
                  <Option value="area-large">Area: Large to Small</Option>
                  <Option value="area-small">Area: Small to Large</Option>
                  <Option value="newest">Newest First</Option>
                </Select>
              </div>
            </div>

            <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap", justifyContent: "flex-end" }}>
              {/* Search (keeps original search input but placed here for quick access) */}
              <Input
                prefix={<FaSearch style={{ fontSize: 16, color: "#888" }} />}
                placeholder="Search properties..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: 320,
                  borderRadius: 8,
                  height: 40,
                  lineHeight: "40px", // ensures vertical alignment
                  display: "flex",
                  alignItems: "center",
                }}
              />

              <Button onClick={() => setShowFilters(!showFilters)} icon={<FaFilter />}>
                {showFilters ? "Hide Filters" : "Show Filters"}
              </Button>

              <Button type="primary" danger onClick={handleClearFilters}>
                Clear
              </Button>
            </div>
          </div>

          {/* Active filters full list */}
          {activeChips.length > 0 && (
            <div style={{ marginBottom: 16, display: "flex", gap: 8, flexWrap: "wrap" }}>
              {activeChips.map((chip) => (
                <Tag key={chip.key} closable onClose={() => removeFilterValue(chip.filterKey, chip.label)}>
                  {chip.label}
                </Tag>
              ))}
            </div>
          )}

          {/* Results */}
          {filteredProperties.length > 0 ? (
            <>
              {viewMode === "grid" ? (
                <Row gutter={[20, 20]}>
                  {paginatedProperties.map((property) => (
                    <Col xs={24} sm={12} lg={8} key={property.id}>
                      <Card
                        hoverable
                        bodyStyle={{ padding: 18 }}
                        style={{
                          borderRadius: 16,
                          overflow: "hidden",
                          position: "relative",
                          transition: "transform 0.25s ease, box-shadow 0.25s ease",
                          boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-8px)")}
                        onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
                        cover={
                          <div style={{ position: "relative", height: 220, overflow: "hidden" }}>
                            <img
                              alt={property.name}
                              src={property.image}
                              style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                display: "block",
                                transition: "transform 0.4s ease",
                              }}
                              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.08)")}
                              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                            />

                            {/* Badges */}
                            <div style={{ position: "absolute", left: 12, top: 12, display: "flex", gap: 8 }}>
                              {property.featured && (
                                <Tag
                                  style={{
                                    background: "linear-gradient(45deg, #ff9800, #ff5722)",
                                    color: "#fff",
                                    borderRadius: 6,
                                    padding: "4px 8px",
                                  }}
                                  icon={<FaStar />}
                                >
                                  Featured
                                </Tag>
                              )}
                              <Tag
                                style={{
                                  background: getStatusColor(property.status),
                                  color: "#fff",
                                  borderRadius: 6,
                                  padding: "4px 8px",
                                }}
                              >
                                {property.status}
                              </Tag>
                            </div>

                            {/* Actions */}
                            <div style={{ position: "absolute", right: 12, top: 12, display: "flex", flexDirection: "column", gap: 8 }}>
                              <Tooltip title="Favorite">
                                <div
                                  onClick={() => toggleFavorite(property.id)}
                                  style={{
                                    cursor: "pointer",
                                    backdropFilter: "blur(6px)",
                                    background: "rgba(255,255,255,0.6)",
                                    padding: 8,
                                    borderRadius: 8,
                                  }}
                                >
                                  <FaHeart style={{ color: favoriteProperties.has(property.id) ? "#ff4d4f" : "#333" }} />
                                </div>
                              </Tooltip>
                              <Tooltip title="View">
                                <div
                                  style={{
                                    cursor: "pointer",
                                    backdropFilter: "blur(6px)",
                                    background: "rgba(255,255,255,0.6)",
                                    padding: 8,
                                    borderRadius: 8,
                                  }}
                                >
                                  <FaEye />
                                </div>
                              </Tooltip>
                            </div>

                            {/* Price Overlay */}
                            <div
                              style={{
                                position: "absolute",
                                left: 0,
                                right: 0,
                                bottom: 0,
                                padding: 14,
                                background: "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.6) 100%)",
                                color: "#fff",
                              }}
                            >
                              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                <div style={{ fontWeight: 800, fontSize: 18 }}>
                                  <span>{getFormattedPrice(property)}</span>
                                </div>
                                <div style={{ fontSize: 13, opacity: 0.9 }}>{property.areaValue} sq ft</div>
                              </div>
                            </div>
                          </div>
                        }
                      >
                        <Card.Meta
                          title={<div style={{ fontWeight: 700, fontSize: 16, marginBottom: 6 }}>{property.name}</div>}
                          description={
                            <div>
                              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10, color: "#555" }}>
                                <FaMapMarkerAlt style={{ color: "#c99913" }} /> {property.location}
                              </div>
                              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                                  <Text style={{ display: "flex", alignItems: "center", gap: 6 }}>
                                    <FaBed /> {property.bedrooms} Beds
                                  </Text>
                                  <Text style={{ display: "flex", alignItems: "center", gap: 6 }}>
                                    <FaBath /> {property.bathrooms} Baths
                                  </Text>
                                  <Tag color="default">{property.type}</Tag>
                                </div>
                                <Button
                                  type="primary"
                                  style={{
                                    background: "white",
                                    color: "#474236",
                                    borderWidth: "2px",
                                    borderStyle: "solid",
                                    borderImage: "linear-gradient(to right, #c99913, #474236) 1",
                                    borderRadius: 6,
                                  }}
                                >
                                  View Details
                                </Button>
                              </div>
                            </div>
                          }
                        />
                      </Card>
                    </Col>
                  ))}
                </Row>
              ) : (
                <List
                  itemLayout="vertical"
                  dataSource={paginatedProperties}
                  renderItem={(property) => (
                    <List.Item
                      actions={[
                        <Button type="primary" key="view">
                          View Details
                        </Button>,
                      ]}
                      extra={<img width={340} alt={property.name} src={property.image} style={{ borderRadius: 8 }} />}
                    >
                      <List.Item.Meta
                        title={<div style={{ fontWeight: 700 }}>{property.name}</div>}
                        description={
                          <div>
                            <Text><FaMapMarkerAlt /> {property.location}</Text>
                            <div style={{ marginTop: 8, display: "flex", gap: 12 }}>
                              <Text><FaBed /> {property.bedrooms} Beds</Text>
                              <Text><FaBath /> {property.bathrooms} Baths</Text>
                              <Text><FaHome /> {property.areaValue} sq ft</Text>
                              <Text><FaCalendarAlt /> {property.yearBuilt}</Text>
                            </div>
                            <div style={{ marginTop: 8 }}>
                              <Tag color="gray">{property.type}</Tag>
                              <Tag color={getStatusColor(property.status)}>{property.status}</Tag>
                            </div>
                          </div>
                        }
                      />
                    </List.Item>
                  )}
                />
              )}

              <div style={{ marginTop: 22, display: "flex", justifyContent: "center" }}>
                <Pagination current={currentPage} total={filteredProperties.length} pageSize={pageSize} onChange={handlePageChange} />
              </div>
            </>
          ) : (
            <div style={{ textAlign: "center", marginTop: 100 }}>
              <FaHome style={{ fontSize: 64, color: "#d9d9d9" }} />
              <Title level={3}>No Properties Found</Title>
              <Text>We couldn't find any properties matching your search criteria. Try adjusting your filters or search terms.</Text>
              <div style={{ marginTop: 16 }}>
                <Button type="primary" onClick={handleClearFilters}>Clear All Filters</Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </Drawer>
  );
};

export default AdvancedPropertySearch;