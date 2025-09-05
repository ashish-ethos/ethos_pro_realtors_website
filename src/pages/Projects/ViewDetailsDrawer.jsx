
import React, { useState, useEffect } from 'react';
import { Drawer, Button, Typography, Tag, InputNumber, Input, Form, Tabs, Card, Space, Avatar, Progress } from 'antd';
import {
  CloseOutlined,
  EnvironmentOutlined,
  HomeOutlined,
  CarOutlined,
  WifiOutlined,
  SecurityScanOutlined,
  ThunderboltOutlined,
  CalculatorOutlined,
  PhoneOutlined,
  MailOutlined,
  UserOutlined,
  AreaChartOutlined,
  StarOutlined,
  BankOutlined
} from '@ant-design/icons';
import CustomButton from '../../components/ui/Button';
import CustomInput from '../../components/ui/Input';
import { Facebook, Instagram, Linkedin, Twitter, X, Share2, Heart } from 'lucide-react';
import { BsWhatsapp } from "react-icons/bs";

const { Title, Text } = Typography;
const { TextArea } = Input;

const ViewDetailsDrawer = ({ open, onClose, project, isLiked = false, onToggleLike }) => {
  const isCommercial = project?.type?.toLowerCase().includes('shop') || project?.type?.toLowerCase().includes('office');

  const [loanAmount, setLoanAmount] = useState(1000000);
  const [interestRate, setInterestRate] = useState(8);
  const [tenure, setTenure] = useState(120);
  const [emi, setEmi] = useState(null);
  const [totalAmount, setTotalAmount] = useState(null);
  const [totalInterest, setTotalInterest] = useState(null);
  const [form] = Form.useForm();
  const [activeTab, setActiveTab] = useState('overview');
  const [isSharePopupOpen, setIsSharePopupOpen] = useState(false);

  // Debug props
  useEffect(() => {
    console.log('ViewDetailsDrawer props:', { open, project, isLiked, onToggleLike });
  }, [open, project, isLiked, onToggleLike]);

  const shareUrl = project ? encodeURIComponent(window.location.origin + `/projects/${isCommercial ? 'commercial' : 'residential'}/${project.name?.toLowerCase().replace(/\s+/g, '-')}`) : '';
  const shareTitle = project ? encodeURIComponent(project.name || 'Property') : 'Property';

  const socialMediaLinks = [
    {
      name: 'Facebook',
      icon: Facebook,
      color: 'text-[#1877F2]',
      url: `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}&display=popup&ref=plugin&src=share_button`,
    },
    {
      name: 'Instagram',
      icon: Instagram,
      color: 'text-[#E4405F]',
      url: `https://www.instagram.com/ethosprorealtors/`,
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      color: 'text-[#0A66C2]',
      url: `https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}&title=${shareTitle}&source=Ethos%20Pro%20Realtors`,
    },
    {
      name: 'X',
      icon: Twitter,
      color: 'text-[#000000]',
      url: `https://x.com/intent/post?url=${shareUrl}&text=${shareTitle}&via=ethosprorealtor`,
    },
    {
      name: 'WhatsApp',
      icon: BsWhatsapp,
      color: 'text-[#25D366]',
      url: `https://api.whatsapp.com/send?phone=918744964496&text=${shareTitle}%20${shareUrl}`,
    },
  ];

  const calculateEMI = () => {
    const p = loanAmount;
    const r = interestRate / 100 / 12;
    const n = tenure;

    if (r === 0) {
      const emiValue = p / n;
      setEmi(emiValue.toFixed(2));
      setTotalAmount(p.toFixed(2));
      setTotalInterest(0);
    } else {
      const emiValue = p * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1);
      const total = emiValue * n;
      const interest = total - p;

      setEmi(emiValue.toFixed(2));
      setTotalAmount(total.toFixed(2));
      setTotalInterest(interest.toFixed(2));
    }
  };

  useEffect(() => {
    calculateEMI();
  }, [loanAmount, interestRate, tenure]);

  const handleEMISubmit = () => {
    calculateEMI();
  };

  const handleContactSubmit = (values) => {
    console.log('Contact Form Submitted:', values);
    alert(`Contact request sent for ${project?.name || 'property'}!`);
    form.resetFields();
  };

  const getMapUrl = () => {
    if (project?.addressMap) {
      const match = project.addressMap.match(/src="([^"]+)"/);
      return match ? match[1] : '#';
    }
    return '#';
  };

  const formatPrice = (price) => {
    if (!price) return 'N/A';
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  const getAmenityIcon = (amenity) => {
    const icons = {
      'parking': <CarOutlined />,
      'wifi': <WifiOutlined />,
      'pool': <CarOutlined />,
      'security': <SecurityScanOutlined />,
      'gym': <ThunderboltOutlined />,
      'default': <HomeOutlined />
    };

    const key = Object.keys(icons).find(k => amenity.toLowerCase().includes(k));
    return icons[key] || icons.default;
  };

  const PremiumCard = ({ children, className = '', gradient = false, hover = true }) => (
    <div className={`
      ${gradient
        ? 'bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-100'
        : 'bg-white border border-gray-200'
      } 
      rounded-2xl shadow-lg 
      ${hover ? 'hover:shadow-xl hover:scale-[1.02] transition-all duration-300' : ''} 
      p-4 ${className}
    `}>
      {children}
    </div>
  );

  const StatCard = ({ icon, label, value, color = 'blue' }) => (
    <div className="text-center p-2">
      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-${color}-100 text-${color}-600 mb-1`}>
        {icon}
      </div>
      <div className="text-xs text-gray-500 mb-1">{label}</div>
      <div className="text-md font-bold text-gray-900">{value}</div>
    </div>
  );

  const overviewContent = (
    <div className="space-y-6">
      {/* Hero Section */}
      <PremiumCard gradient={true}>
        <div className="flex justify-between items-start mb-4">
          <div>
            <Title level={3} className="m-0 text-gray-800 fontFamily-bebas">{project?.name || 'Property'}</Title>
            <div className="flex items-center mt-2 text-gray-600 fontFamily-bebas">
              <EnvironmentOutlined className="mr-2" />
              <Text>{project?.location || 'N/A'}</Text>
            </div>
          </div>
          <div className="flex gap-2">
            <button
              className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                if (project?.id && onToggleLike) {
                  console.log('Toggling like for property:', project.id, 'Current isLiked:', isLiked);
                  onToggleLike(project.id);
                } else {
                  console.error('Cannot toggle like: project.id or onToggleLike is missing');
                }
              }}
              disabled={!project?.id || !onToggleLike}
            >
              <Heart
                size={16}
                className={isLiked ? 'text-red-500 fill-red-500' : 'text-gray-600 hover:text-red-500'}
              />
            </button>
            <div className="relative">
              <button
                onClick={() => setIsSharePopupOpen(!isSharePopupOpen)}
                className="p-2 cursor-pointer bg-white/90 rounded-full hover:bg-white transition-colors"
              >
                <Share2 size={16} className="text-gray-600" />
              </button>
              {isSharePopupOpen && (
                <div className="absolute top-12 right-0 bg-white rounded-lg shadow-xl w-40 z-50">
                  <div className="flex justify-between items-center px-2 py-1">
                    <h4 className="text-xs font-semibold text-gray-800">Share Property</h4>
                    <button
                      onClick={() => setIsSharePopupOpen(false)}
                      className="p-1 hover:bg-gray-100 rounded-full"
                    >
                      <X size={16} className="text-gray-600" />
                    </button>
                  </div>
                  <div className="flex flex-col mb-1 gap-1">
                    {socialMediaLinks.map((platform) => (
                      <button
                        key={platform.name}
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(platform.url, '_blank', 'noopener,noreferrer');
                          setIsSharePopupOpen(false);
                        }}
                        className="flex items-center gap-2 p-1 px-2 hover:bg-gray-100 rounded-lg transition-colors"
                      >
                        <platform.icon size={16} className={platform.color} />
                        <span className="text-xs text-gray-700 font-[Inter] ml-1">{platform.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {project?.status?.map((status, idx) => (
            <Tag key={idx} className={`
              px-4 py-2 rounded-full fontFamily-content font-semibold text-white border-0 ${status === 'FOR SALE' ? 'bg-gradient-to-r from-blue-500 to-blue-600' :
                status === 'FOR RENT' ? 'bg-gradient-to-r from-green-500 to-green-600' :
                  status === 'HOT OFFER' ? 'bg-gradient-to-r from-red-500 to-red-600 animate-pulse' :
                    'bg-gradient-to-r from-gray-500 to-gray-600'
              }
            `}>
              {status}
            </Tag>
          ))}
        </div>

        <div className="flex items-baseline gap-2">
          <Title level={4} className="m-0 text-gray-900">{formatPrice(project?.price)}</Title>
          {project?.pricePerSqft && (
            <Text className="text-gray-500 text-lg">{project.pricePerSqft}/sqft</Text>
          )}
        </div>
      </PremiumCard>

      {/* Key Statistics */}
      <PremiumCard>
        <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-gray-100">
          <StatCard
            icon={<AreaChartOutlined />}
            label="Area"
            value={project?.sqft || 'N/A'}
            color="blue"
            className="text-sm font-medium font-[Inter] text-gray-800"
          />
          <StatCard
            icon={<HomeOutlined />}
            label="Type"
            value={project?.type || 'N/A'}
            color="green"
            className="font-medium text-gray-800 font-[Inter]"
          />
          {!isCommercial && (
            <>
              <StatCard
                icon={<UserOutlined />}
                label="Bedrooms"
                value={project?.bedrooms || 'N/A'}
                color="purple"
              />
              <StatCard
                icon={<ThunderboltOutlined />}
                label="Bathrooms"
                value={project?.bathrooms || 'N/A'}
                color="orange"
              />
            </>
          )}
          {isCommercial && (
            <>
              <StatCard
                icon={<BankOutlined />}
                label="Category"
                value={project?.category?.replace('_', ' ') || 'N/A'}
                color="purple"
              />
              <StatCard
                icon={<StarOutlined />}
                label="Rating"
                value={project?.rating || 'N/A'}
                color="orange"
              />
            </>
          )}
        </div>
      </PremiumCard>

      {/* Property Image */}
      {project?.image && (
        <PremiumCard className="p-0 overflow-hidden">
          <div className="relative">
            <img
              src={project.image}
              alt={project.name || 'Property'}
              className="w-full h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
        </PremiumCard>
      )}

      {/* Amenities */}
      {project?.amenities?.length > 0 && (
        <PremiumCard>
          <Title level={4} className="mb-4 flex fontFamily-bebas items-center">
            <ThunderboltOutlined className="mr-2 text-blue-600" />
            Amenities & Features
          </Title>
          <div className="grid grid-cols-2 mt-1 sm:grid-cols-3 gap-4">
            {project.amenities.map((amenity, i) => (
              <div key={i} className="flex items-center p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                <div className="mr-3 text-blue-600">
                  {getAmenityIcon(amenity)}
                </div>
                <Text className="font-medium">{amenity}</Text>
              </div>
            ))}
          </div>
        </PremiumCard>
      )}

      {/* Map */}
      {project?.addressMap && (
        <PremiumCard>
          <Title level={4} className="mb-4 flex fontFamily-bebas items-center">
            <EnvironmentOutlined className="mr-2 text-green-600" />
            Location
          </Title>
          <a href={getMapUrl()} target="_blank" rel="noopener noreferrer">
            <div
              className="w-full h-64 mt-1 rounded-xl overflow-hidden hover:opacity-90 transition-opacity shadow-inner"
              dangerouslySetInnerHTML={{ __html: project.addressMap }}
            />
          </a>
        </PremiumCard>
      )}
    </div>
  );

  const calculatorContent = (
    <div className="space-y-6">
      <PremiumCard gradient={true}>
        <Title level={4} className="mb-6 flex items-center text-gray-800">
          <CalculatorOutlined className="mr-3 text-blue-600" />
          EMI Calculator
        </Title>

        <Form form={form} layout="vertical" onFinish={handleEMISubmit} className="space-y-4">
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="space-y-4">
              <Form.Item
                name="loanAmount"
                label={<Text strong>Loan Amount</Text>}
                initialValue={loanAmount}
                rules={[{ required: true, message: 'Please enter loan amount' }]}
              >
                <InputNumber
                  min={100000}
                  max={100000000}
                  value={loanAmount}
                  onChange={setLoanAmount}
                  formatter={val => `₹ ${val}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  parser={val => val.replace(/₹\s?|(,*)/g, '')}
                  className="w-full"
                  size="large"
                />
              </Form.Item>
            </div>

            <div className="space-y-4">
              <Form.Item
                name="interestRate"
                label={<Text strong>Interest Rate (%)</Text>}
                initialValue={interestRate}
                rules={[{ required: true, message: 'Please enter interest rate' }]}
              >
                <InputNumber
                  min={1}
                  max={20}
                  step={0.1}
                  value={interestRate}
                  onChange={setInterestRate}
                  className="w-full"
                  size="large"
                />
              </Form.Item>
            </div>

            <div className="space-y-4">
              <Form.Item
                name="tenure"
                label={<Text strong>Tenure (Months)</Text>}
                initialValue={tenure}
                rules={[{ required: true, message: 'Please enter tenure' }]}
              >
                <InputNumber
                  min={12}
                  max={360}
                  value={tenure}
                  onChange={setTenure}
                  className="w-full"
                  size="large"
                />
              </Form.Item>
            </div>
          </div>

          <Form.Item>
            <div className='w-full flex justify-center'>
              <CustomButton
                type="primary"
                htmlType="submit"
                size="large"
                className="h-12 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 border-0 font-semibold shadow-lg hover:shadow-xl"
              >
                Calculate EMI
              </CustomButton>
            </div>
          </Form.Item>
        </Form>
      </PremiumCard>

      {emi && (
        <PremiumCard>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl">
              <div className="text-xl font-bold text-blue-600 mb-2">₹{formatPrice(emi)}</div>
              <div className="text-blue-800 font-medium">Monthly EMI</div>
            </div>

            <div className="text-center p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl">
              <div className="text-xl font-bold text-green-600 mb-2">₹{formatPrice(totalAmount)}</div>
              <div className="text-green-800 font-medium">Total Amount</div>
            </div>

            <div className="text-center p-4 bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl">
              <div className="text-xl font-bold text-orange-600 mb-2">₹{formatPrice(totalInterest)}</div>
              <div className="text-orange-800 font-medium">Total Interest</div>
            </div>
          </div>

          <div className="mt-6">
            <div className="flex justify-between items-center mb-3">
              <Text strong>Principal vs Interest</Text>
              <Text className="text-gray-500">
                {((loanAmount / totalAmount) * 100).toFixed(1)}% Principal
              </Text>
            </div>
            <Progress
              percent={(loanAmount / totalAmount) * 100}
              strokeColor="#3b82f6"
              trailColor="#fbbf24"
              className="mb-2"
            />
            <div className="flex justify-between text-sm text-gray-600">
              <span>Principal: ₹{formatPrice(loanAmount)}</span>
              <span>Interest: ₹{formatPrice(totalInterest)}</span>
            </div>
          </div>
        </PremiumCard>
      )}
    </div>
  );

  const contactContent = (
    <PremiumCard>
      <Title level={4} className="mb-6 flex items-center">
        <PhoneOutlined className="mr-3 text-green-600" />
        Get In Touch
      </Title>

      <Form form={form} layout="vertical" onFinish={handleContactSubmit} className="space-y-4 mt-2">
        <div className="grid grid-cols-1 mt-2 sm:grid-cols-2 gap-4">
          <Form.Item
            name="name"
            label={<Text strong>Full Name</Text>}
            rules={[{ required: true, message: 'Please enter your name' }]}
          >
            <CustomInput
              placeholder="Enter your full name"
              size="large"
              prefix={<UserOutlined className="text-gray-400 mr-1" />}
              className="rounded-xl"
            />
          </Form.Item>

          <Form.Item
            name="phone"
            label={<Text strong>Phone Number</Text>}
            rules={[{ required: true, message: 'Please enter your phone' }]}
          >
            <CustomInput
              placeholder="Enter your phone number"
              size="large"
              prefix={<PhoneOutlined className="text-gray-400 mr-1" />}
              className="rounded-xl"
            />
          </Form.Item>
        </div>

        <Form.Item
          name="email"
          label={<Text strong>Email Address</Text>}
          rules={[
            { required: true, message: 'Please enter your email' },
            { type: 'email', message: 'Enter valid email' }
          ]}
        >
          <CustomInput
            placeholder="Enter your email address"
            size="large"
            prefix={<MailOutlined className="text-gray-400 mr-1" />}
            className="rounded-xl"
          />
        </Form.Item>

        <Form.Item
          name="message"
          label={<Text strong>Message</Text>}
          rules={[{ required: true, message: 'Please enter a message' }]}
        >
          <TextArea
            rows={4}
            placeholder="Tell us about your requirements or ask any questions..."
            className="rounded-xl"
          />
        </Form.Item>

        <Form.Item>
          <div className='w-full flex justify-center'>
            <CustomButton
              type="primary"
              htmlType="submit"
              size="large"
              className="w-auto h-12 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 border-0 font-semibold shadow-lg hover:shadow-xl"
            >
              Send Message
            </CustomButton>
          </div>
        </Form.Item>
      </Form>
    </PremiumCard>
  );

  const tabItems = [
    {
      key: 'overview',
      label: (
        <span className="flex items-center">
          <HomeOutlined className="mr-2" />
          Overview
        </span>
      ),
      children: <div className="pb-6">{overviewContent}</div>,
    },
    {
      key: 'calculator',
      label: (
        <span className="flex items-center">
          <CalculatorOutlined className="mr-2" />
          EMI Calculator
        </span>
      ),
      children: <div className="pb-6">{calculatorContent}</div>,
    },
    {
      key: 'contact',
      label: (
        <span className="flex items-center">
          <PhoneOutlined className="mr-2" />
          Contact
        </span>
      ),
      children: <div className="pb-6">{contactContent}</div>,
    },
  ];

  return (
    <Drawer
      title={null}
      placement="right"
      onClose={onClose}
      open={open}
      width={800}
      styles={{
        body: { padding: 0 },
        header: { display: 'none' }
      }}
      className="advanced-drawer"
    >
      <div className="h-full bg-gradient-to-br from-gray-50 to-gray-100">
        {/* Custom Header */}
        <div className="bg-white border-b border-gray-200 p-2 sticky top-0 z-10 shadow-sm">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-1 mr-3">
              <Avatar size={40} className="bg-blue-600">
                {project?.name?.charAt(0) || 'P'}
              </Avatar>
              <div className='px-2'>
                <p className="m-0 p-0 text-lg font-medium fontFamily-bebas">{project?.name || 'Property Details'}</p>
                <Text className="text-gray-500 m-0 p-0 fontFamily-bebas">Premium Listing</Text>
              </div>
            </div>
            <Button
              type="text"
              shape="circle"
              icon={<CloseOutlined />}
              onClick={onClose}
              className="hover:bg-gray-100"
              size="large"
            />
          </div>
        </div>

        {/* Tabs Navigation */}
        <div className="px-6 pt-4">
          <Tabs
            activeKey={activeTab}
            onChange={setActiveTab}
            items={tabItems}
            className="advanced-tabs"
            size="large"
          />
        </div>
      </div>
    </Drawer>
  );
};

export default ViewDetailsDrawer;
