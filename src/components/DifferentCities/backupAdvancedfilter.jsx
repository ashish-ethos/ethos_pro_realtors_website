import React, { useState, useEffect, useMemo } from "react";
import {
  Drawer,
  Typography,
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
import { IndianRupee } from "lucide-react";
import CustomInput from "../ui/Input";
import CustomSelect from "../ui/Select";
import CustomButton from "../ui/Button";
import "./AdvancedPropertySearch.css";

const { Title, Text } = Typography;
const { Panel } = Collapse;

// Custom options for CustomSelect
const areaOptions = [
  { value: "All Areas", label: "All Areas" },
  { value: "Sector 54, Gurgaon", label: "Sector 54, Gurgaon" },
  { value: "Marine Drive, Mumbai", label: "Marine Drive, Mumbai" },
  { value: "Electronic City, Bangalore", label: "Electronic City, Bangalore" },
];

const typeOptions = [
  { value: "Apartment", label: "Apartment" },
  { value: "Villa", label: "Villa" },
  { value: "Penthouse", label: "Penthouse" },
  { value: "Residential", label: "Residential" },
  { value: "Commercial", label: "Commercial" },
];

const statusOptions = [
  { value: "For Sale", label: "For Sale" },
  { value: "For Rent", label: "For Rent" },
  { value: "Hot Offer", label: "Hot Offer" },
  { value: "New Launch", label: "New Launch" },
  { value: "Ready to Move", label: "Ready to Move" },
];

const bedroomOptions = [
  { value: "Any", label: "Any" },
  { value: "1", label: "1 Bedroom" },
  { value: "2", label: "2 Bedrooms" },
  { value: "3", label: "3 Bedrooms" },
  { value: "4+", label: "4+ Bedrooms" },
];

const bathroomOptions = [
  { value: "Any", label: "Any" },
  { value: "1", label: "1 Bathroom" },
  { value: "2", label: "2 Bathrooms" },
  { value: "3", label: "3 Bathrooms" },
  { value: "4+", label: "4+ Bathrooms" },
];

const labelOptions = [
  { value: "Any", label: "Any" },
  { value: "featured", label: "Featured" },
  { value: "hot", label: "Hot" },
  { value: "new", label: "New" },
];

const countryOptions = [{ value: "101", label: "India" }];

const stateOptions = [{ value: "4030", label: "Haryana" }];

const cityOptions = [
  { value: "56798", label: "Gurgaon" },
  { value: "110001", label: "Delhi" },
  { value: "201301", label: "Noida" },
  { value: "400001", label: "Mumbai" },
  { value: "560001", label: "Bangalore" },
  { value: "600001", label: "Chennai" },
  { value: "411001", label: "Pune" },
];

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

    if (typeof rawPrice === "string") {
      rawPrice = rawPrice.replace(/[^0-9.]/g, "");
    }

    const numPrice = parseFloat(rawPrice);

    if (!numPrice || isNaN(numPrice)) {
      return "N/A";
    }

    let crores = numPrice / 10000000;

    if (Number.isInteger(crores)) {
      return `${crores} Cr`;
    }

    return `${crores.toFixed(1)} Cr`;
  };

  // Filtering + sorting (preserved logic)
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

  // Helpers to remove specific filter items
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

  // Year options for CustomSelect
  const yearOptions = Array.from({ length: 126 }, (_, i) => currentYear - i).map((year) => ({
    value: year.toString(),
    label: year.toString(),
  }));

  return (
    <Drawer
      title={
        <div className="advanced-title" >
          <Space>
            <Title level={4} className="m-0">
              Advanced Property Search
            </Title>
            <Text type="secondary">{filteredProperties.length} properties found</Text>
          </Space>
          <Space>
            <CustomButton className="property-card-action-button"
              icon={<FaFilter />}
              onClick={() => setShowFilters(!showFilters)}
              
            >
              {showFilters ? "Hide Filters" : "Show Filters"}
            </CustomButton>
            <CustomButton className="cancelButton" type="danger" onClick={handleClearFilters} >
              Clear All
            </CustomButton>
          </Space>
        </div>
      }
      placement="right"
      onClose={onClose}
      open={open}
      width="95%"
      className="advanced-property-drawer"
      
    >
      <div className="noactive-main" >
        {showFilters && (
          <div className="filters-panel"
            
          >
            <div className="filters-panel-contain" >
              <Space direction="vertical" size="small" style={{ width: "100%" }}>
                <CustomInput
                  prefix={<FaSearch />}
                  placeholder="Search by name or location..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  style={{ borderRadius: 8, height: 40, alignItems: "center" }}
                />

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
                    <CustomSelect
                      mode="multiple"
                      placeholder="Select Areas"
                      value={area}
                      onChange={setArea}
                      style={{ width: "100%", marginTop: 8 }}
                      allowClear
                      showSearch
                      options={areaOptions}
                    />
                  </div>

                  <div>
                    <span strong className="flex items-center">
                      <FaHome style={{ marginRight: 8 }} />
                      Property Type
                    </span>
                    <CustomSelect
                      mode="multiple"
                      placeholder="Select Types"
                      value={type}
                      onChange={setType}
                      style={{ width: "100%", marginTop: 8 }}
                      allowClear
                      showSearch
                      options={typeOptions}
                    />
                  </div>

                  <div>
                    <span strong className="flex items-center">
                      <FaStar style={{ marginRight: 8 }} />
                      Status
                    </span>
                    <CustomSelect
                      mode="multiple"
                      placeholder="Select Status"
                      value={status}
                      onChange={setStatus}
                      style={{ width: "100%", marginTop: 8 }}
                      allowClear
                      showSearch
                      options={statusOptions}
                    />
                  </div>

                  <div>
                    <span strong className="flex items-center">
                      <FaBed style={{ marginRight: 8 }} />
                      Bedrooms
                    </span>
                    <CustomSelect
                      mode="multiple"
                      placeholder="Select Bedrooms"
                      value={bedrooms}
                      onChange={setBedrooms}
                      style={{ width: "100%", marginTop: 8 }}
                      allowClear
                      showSearch
                      options={bedroomOptions}
                    />
                  </div>

                  <div>
                    <span strong className="flex items-center">
                      <FaBath style={{ marginRight: 8 }} />
                      Bathrooms
                    </span>
                    <CustomSelect
                      mode="multiple"
                      placeholder="Select Bathrooms"
                      value={bathrooms}
                      onChange={setBathrooms}
                      style={{ width: "100%", marginTop: 8 }}
                      allowClear
                      showSearch
                      options={bathroomOptions}
                    />
                  </div>
                </Space>
              </Panel>

              <Panel header={<b>Advanced Filters</b>} key="advanced">
                <Space direction="vertical" size="middle" style={{ width: "100%" }}>
                  <div>
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
                        formatter: (value) => {
                          const crores = value / 10000000;
                          return Number.isInteger(crores)
                            ? `₹${crores} Cr`
                            : `₹${crores.toFixed(1)} Cr`;
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
                    <CustomSelect
                      mode="multiple"
                      placeholder="Select Years"
                      value={yearBuilt}
                      onChange={setYearBuilt}
                      style={{ width: "100%", marginTop: 8 }}
                      allowClear
                      showSearch
                      options={yearOptions}
                    />
                  </div>

                  <div>
                    <span strong className="flex items-center">
                      <FaStar style={{ marginRight: 8 }} />
                      Labels
                    </span>
                    <CustomSelect
                      mode="multiple"
                      placeholder="Select Labels"
                      value={label}
                      onChange={setLabel}
                      style={{ width: "100%", marginTop: 8 }}
                      allowClear
                      showSearch
                      options={labelOptions}
                    />
                  </div>

                  <div>
                    <span strong className="flex items-center">
                      <FaMapMarkerAlt style={{ marginRight: 8 }} />
                      Country
                    </span>
                    <CustomSelect
                      mode="multiple"
                      placeholder="Select Countries"
                      value={countryId}
                      onChange={setCountryId}
                      style={{ width: "100%", marginTop: 8 }}
                      allowClear
                      showSearch
                      options={countryOptions}
                    />
                  </div>

                  <div>
                    <span strong className="flex items-center">
                      <FaMapMarkerAlt style={{ marginRight: 8 }} />
                      State
                    </span>
                    <CustomSelect
                      mode="multiple"
                      placeholder="Select States"
                      value={stateId}
                      onChange={setStateId}
                      style={{ width: "100%", marginTop: 8 }}
                      allowClear
                      showSearch
                      options={stateOptions}
                    />
                  </div>

                  <div>
                    <span strong className="flex items-center">
                      <FaMapMarkerAlt style={{ marginRight: 8 }} />
                      City
                    </span>
                    <CustomSelect
                      mode="multiple"
                      placeholder="Select Cities"
                      value={cityId}
                      onChange={setCityId}
                      style={{ width: "100%", marginTop: 8 }}
                      allowClear
                      showSearch
                      options={cityOptions}
                    />
                  </div>
                </Space>
              </Panel>
            </Collapse>

            <div style={{ position: "sticky", bottom: 0, background: "#fafafa", paddingTop: 12 }}>
              <Space style={{ width: "100%", justifyContent: "space-between" }} className="bg-white">
                <CustomButton onClick={handleClearFilters} className="property-card-action-button">Reset</CustomButton>
                <CustomButton type="primary" onClick={() => setShowFilters(false)} className="property-card-action-button">
                  Apply
                </CustomButton>
              </Space>
            </div>
          </div>
        )}

        <div style={{ flex: 1, padding: 24, overflowY: "auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Radio.Group
                  value={viewMode}
                  onChange={(e) => setViewMode(e.target.value)}
                  buttonStyle="solid"
                  style={{
                    display: "inline-flex",
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

              <div className="sort-select-wrapper" >
                <Text type="secondary">Sort</Text>
                <CustomSelect
                  value={sortBy}
                  onChange={setSortBy}
                  className="sort-select"
                  style={{ width: 150 }}
                  placeholder="Sort by"
                  options={[
                    { value: "price-low", label: "Price: Low to High" },
                    { value: "price-high", label: "Price: High to Low" },
                    { value: "area-large", label: "Area: Large to Small" },
                    { value: "area-small", label: "Area: Small to Large" },
                    { value: "newest", label: "Newest First" },
                  ]}
                />
              </div>

            </div>

            <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap", justifyContent: "flex-end" }} className="search-and-filters">
              <CustomInput
                prefix={<FaSearch style={{ fontSize: 16, color: "#888" }} />}
                placeholder="Search properties..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: 320,
                  borderRadius: 8,
                  height: 40,
                  lineHeight: "40px",
                  display: "flex",
                  alignItems: "center",
                }}
              />

              <CustomButton className="property-card-action-button" onClick={() => setShowFilters(!showFilters)} icon={<FaFilter />}>
                {showFilters ? "Hide Filters" : "Show Filters"}
              </CustomButton>

              <CustomButton type="danger" onClick={handleClearFilters} className="cancelButton ">
                Clear
              </CustomButton>
            </div>
          </div>

          {activeChips.length > 0 && (
            <div style={{ marginBottom: 16, display: "flex", gap: 8, flexWrap: "wrap" }}>
              {activeChips.map((chip) => (
                <Tag key={chip.key} closable onClose={() => removeFilterValue(chip.filterKey, chip.label)}>
                  {chip.label}
                </Tag>
              ))}
            </div>
          )}

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

                            <div style={{ position: "absolute", left: 12, top: 12, display: "flex", gap: 8 }}>
                              {property.featured && (
                                <Tag
                                  style={{
                                    background: "linear-gradient(45deg, #ff9800, #ff5722)",
                                    color: "#fff",
                                    borderRadius: 6,
                                    padding: "4px 8px",
                                  }}

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
                                <CustomButton
                                  type="primary"
                                  className="property-card-action-button"
                                >
                                  View Details
                                </CustomButton>
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
                        <CustomButton type="primary" key="view" className="property-card-action-button">
                          View Details
                        </CustomButton>,
                      ]}
                      extra={<img width={340} alt={property.name} src={property.image} style={{ borderRadius: 8 }} className="cehcek" />}
                    >
                      <List.Item.Meta
                        title={<div style={{ fontWeight: 700 }}>{property.name}</div>}
                        description={
                          <div className="checked">
                            <Text><FaMapMarkerAlt /> {property.location}</Text>
                            <div style={{ marginTop: 8, display: "flex", gap: 12, }}>
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
                <CustomButton type="primary" onClick={handleClearFilters} className="cancelButton">Clear All Filters</CustomButton>
              </div>
            </div>
          )}
        </div>
      </div>
    </Drawer>
  );
};

export default AdvancedPropertySearch;