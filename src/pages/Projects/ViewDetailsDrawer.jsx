import React, { useState } from 'react';
import { Drawer, Button, Typography, Tag, InputNumber, Slider, Input, Form, Divider } from 'antd';
import { CloseOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;
const { TextArea } = Input;

const ViewDetailsDrawer = ({ open, onClose, project }) => {
  const isCommercial = project?.type?.toLowerCase().includes('shop') || project?.type?.toLowerCase().includes('office');

  const [loanAmount, setLoanAmount] = useState(1000000);
  const [interestRate, setInterestRate] = useState(8);
  const [tenure, setTenure] = useState(120);
  const [emi, setEmi] = useState(null);
  const [form] = Form.useForm();

  const calculateEMI = () => {
    const p = loanAmount;
    const r = interestRate / 100 / 12;
    const n = tenure;
    const emiValue = p * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1);
    setEmi(emiValue.toFixed(2));
  };

  const handleContactSubmit = (values) => {
    console.log('Contact Form Submitted:', values);
    alert(`Contact request sent for ${project?.name}!`);
    form.resetFields();
  };

  const getMapUrl = () => {
    if (project?.addressMap) {
      const match = project.addressMap.match(/src="([^"]+)"/);
      return match ? match[1] : '#';
    }
    return '#';
  };

  const CardBox = ({ children, className = '' }) => (
    <div className={`bg-white rounded-md shadow-sm p-4 border border-gray-200 ${className}`}>
      {children}
    </div>
  );

  return (
    <Drawer
      title={
        <div className="flex justify-between items-center">
          <Title level={4} className="m-0">{project?.name || 'Project Details'}</Title>
        </div>
      }
      placement="right"
      onClose={onClose}
      open={open}
      width={760}
      bodyStyle={{ padding: '20px', backgroundColor: '#f9fafb' }}
    >
      {project?.image && (
        <CardBox>
          <img src={project.image} alt={project.name} className="w-full h-64 object-cover rounded" />
        </CardBox>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
        <CardBox>
          <div className="mb-2">
            <Text strong>Status:</Text><br />
            {project?.status?.length ? (
              project.status.map((status, idx) => (
                <Tag key={idx} className={`text-xs px-3 py-1 rounded-full font-semibold ${
                  status === 'FOR SALE' ? 'bg-blue-600 text-white' :
                  status === 'FOR RENT' ? 'bg-green-600 text-white' :
                  status === 'HOT OFFER' ? 'bg-red-500 text-white' :
                  'bg-gray-600 text-white'
                }`}>
                  {status}
                </Tag>
              ))
            ) : <Text type="secondary">N/A</Text>}
          </div>
          <div>
            <Text strong>Price:</Text> <Text>{project?.price || 'N/A'}</Text>
            {project?.pricePerSqft && (
              <Text type="secondary"> ({project.pricePerSqft} per sqft)</Text>
            )}
          </div>
        </CardBox>

        <CardBox>
          <Text strong>Location:</Text><br />
          <Text>{project?.location || 'N/A'}</Text>
        </CardBox>

        {project?.addressMap && (
          <CardBox className="col-span-2">
            <Text strong>Map:</Text>
            <a href={getMapUrl()} target="_blank" rel="noopener noreferrer" className="block mt-2">
              <div
                className="w-full h-52 overflow-hidden rounded hover:opacity-90 transition-opacity"
                dangerouslySetInnerHTML={{ __html: project.addressMap }}
              />
            </a>
          </CardBox>
        )}

        <CardBox>
          <div className="grid grid-cols-2 gap-y-2 text-sm">
            <div><Text strong>Size:</Text> {project?.sqft || 'N/A'}</div>
            <div><Text strong>Type:</Text> {project?.type || 'N/A'}</div>
            <div><Text strong>Category:</Text> {project?.category?.replace('_', ' ') || 'N/A'}</div>
            <div><Text strong>Rating:</Text> {project?.rating || 'N/A'}</div>
          </div>
        </CardBox>

        {!isCommercial && (
          <CardBox>
            <div className="grid grid-cols-2 gap-y-2 text-sm">
              <div><Text strong>Bedrooms:</Text> {project?.bedrooms || 'N/A'}</div>
              <div><Text strong>Bathrooms:</Text> {project?.bathrooms || 'N/A'}</div>
            </div>
          </CardBox>
        )}

        {project?.amenities?.length > 0 && (
          <CardBox>
            <Text strong>Amenities:</Text>
            <div className="mt-2 flex flex-wrap gap-2">
              {project.amenities.map((item, i) => (
                <Tag key={i} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">{item}</Tag>
              ))}
            </div>
          </CardBox>
        )}

        {/* EMI Calculator */}
        <CardBox className="col-span-2">
          <Text strong>EMI Calculator</Text>
          <div className="grid sm:grid-cols-3 gap-4 mt-4 text-sm">
            <div>
              <Text>Loan Amount (₹):</Text>
              <InputNumber
                min={100000}
                max={100000000}
                value={loanAmount}
                onChange={setLoanAmount}
                formatter={val => `₹ ${val}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                parser={val => val.replace(/₹\s?|(,*)/g, '')}
                className="w-full"
              />
              <Slider min={100000} max={100000000} step={100000} value={loanAmount} onChange={setLoanAmount} />
            </div>
            <div>
              <Text>Interest Rate (%):</Text>
              <InputNumber
                min={1}
                max={20}
                step={0.1}
                value={interestRate}
                onChange={setInterestRate}
                className="w-full"
              />
              <Slider min={1} max={20} step={0.1} value={interestRate} onChange={setInterestRate} />
            </div>
            <div>
              <Text>Tenure (Months):</Text>
              <InputNumber
                min={12}
                max={360}
                value={tenure}
                onChange={setTenure}
                className="w-full"
              />
              <Slider min={12} max={360} step={12} value={tenure} onChange={setTenure} />
            </div>
          </div>
          <Button type="primary" onClick={calculateEMI} className="w-full mt-3">
            Calculate EMI
          </Button>
          {emi && (
            <div className="mt-4 text-center">
              <Text strong>Monthly EMI:</Text> ₹{emi}
            </div>
          )}
        </CardBox>

        {/* Contact Form */}
        <CardBox className="col-span-2">
          <Text strong>Contact Us</Text>
          <Form form={form} layout="vertical" onFinish={handleContactSubmit} className="mt-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Form.Item
                name="name"
                label="Name"
                rules={[{ required: true, message: 'Please enter your name' }]}
              >
                <Input placeholder="Your Name" />
              </Form.Item>
              <Form.Item
                name="email"
                label="Email"
                rules={[{ required: true, message: 'Please enter your email' }, { type: 'email', message: 'Enter valid email' }]}
              >
                <Input placeholder="Your Email" />
              </Form.Item>
              <Form.Item
                name="phone"
                label="Phone"
                rules={[{ required: true, message: 'Please enter your phone' }]}
              >
                <Input placeholder="Your Phone" />
              </Form.Item>
            </div>
            <Form.Item
              name="message"
              label="Message"
              rules={[{ required: true, message: 'Please enter a message' }]}
            >
              <TextArea rows={3} placeholder="Your Message" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="w-full">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </CardBox>
      </div>
    </Drawer>
  );
};

export default ViewDetailsDrawer;
