
import React, { useState, useEffect, useMemo } from 'react';
import { Heart, MapPin, Ruler, Eye, Star, X, Share2, Printer } from 'lucide-react';
import { FiPhone } from "react-icons/fi";
import { DatePicker, TimePicker } from 'antd';
import { MdOutlineEmail, MdOutlineWhatsapp } from "react-icons/md";
import { useNavigate, useParams } from 'react-router-dom';
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
  EmailShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  WhatsappIcon,
  EmailIcon
} from 'react-share';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import AIPLAutography from "../../assets/images/exploreproperties/aipl-autograph.jpg";
import AriaMall from "../../assets/images/exploreproperties/aria-mall.jpg";
import Omaxstate from "../../assets/images/exploreproperties/omaxstate.webp";
import M3Mantalya from "../../assets/images/exploreproperties/m3m_antalya.avif";
import EmeraldHills from "../../assets/images/exploreproperties/emerald-hills.jpg";
import WorldTrade from "../../assets/images/exploreproperties/worldtrader-center.jpg";
import CentralPark from "../../assets/images/exploreproperties/central-park.jpg";
import M3MMansion from "../../assets/images/exploreproperties/m3m-mansion.jpg";
import Krisumi from "../../assets/images/exploreproperties/krisumi-waterfall.jpg";
import Tulip from "../../assets/images/exploreproperties/tulip-monsella.jpg";
import SmartWorld from "../../assets/images/exploreproperties/smartworld-dxp.jpg";
import AIPLBusinessClub from "../../assets/images/exploreproperties/aipl-business.jpg";
import Cygnett from "../../assets/images/exploreproperties/cygnett-retreat.jpg";
import Sobha from "../../assets/images/exploreproperties/sobha-international.webp";
import Elan from "../../assets/images/exploreproperties/Elan-The-Mark_img.webp";
import ElanThePersidential from "../../assets/images/exploreproperties/Elan-The-Presidential.jpg";
import Trinity from "../../assets/images/exploreproperties/Trinity-Sky-Palazzos.jpg";

import CustomButton from '../ui/Button';
import './ExploreProperties.css';
import CustomInput from '../ui/Input';

const ExploreProperties = ({ filters = {} }) => {
  const [activeTab, setActiveTab] = useState('all');
  const [isLoading, setIsLoading] = useState(true);
  const [favorites, setFavorites] = useState(new Set());
  const [visibleProperties, setVisibleProperties] = useState(6);
  const [showAll, setShowAll] = useState(false);
  const navigate = useNavigate();
  const { propertyName } = useParams();

  const properties = [
    {
      id: '1',
      type: 'Shop/Commercial',
      name: 'Airia Mall',
      location: 'Airia Mall, Sector 68, Gurgaon, Haryana, India',
      size: '300 - 8000 Sq Ft',
      price: '₹2.5 Cr - ₹8.5 Cr',
      image: AriaMall,
      options: ['FOR RENT', 'FOR SALE', 'HOT OFFER'],
      rating: 4.8,
      views: 1200,
      description: 'Airia Mall offers premium commercial spaces in the heart of Gurgaon, ideal for retail and business ventures.'
    },
    {
      id: '2',
      type: 'Office/Commercial',
      name: 'AIPL Business Club',
      location: 'AIPL Business Club, Sector 62, Gurgaon, Haryana, India',
      size: '500 - 5000 Sq Ft',
      price: '₹1.8 Cr - ₹6.2 Cr',
      image: AIPLAutography,
      options: ['FOR RENT', 'FOR SALE'],
      rating: 4.6,
      views: 890,
      description: 'AIPL Business Club provides state-of-the-art office spaces with modern amenities in a prime location.'
    },
    {
      id: '3',
      type: 'Shop/Commercial',
      name: 'The Omaxe State',
      location: 'The Omaxe State, Sector 19B, Dwarka, Delhi, India',
      size: '50 - 10000 Sq Ft',
      price: '₹50 L - ₹12 Cr',
      image: Omaxstate,
      options: ['FOR RENT', 'FOR SALE'],
      rating: 4.5,
      views: 2100,
      description: 'The Omaxe State is a vibrant commercial hub in Dwarka, offering diverse retail and office spaces.'
    },
    {
      id: '4',
      type: 'Residential',
      name: 'M3M Antalya Hills',
      location: 'M3M Antalya Hills, Sector 79, Gurugram, Haryana, India',
      size: '1138 – 1642 Sq Ft',
      price: '₹1.15 Cr – ₹1.62 Cr',
      image: M3Mantalya,
      options: ['FOR RENT', 'FOR SALE', 'HOT OFFER'],
      rating: 4.7,
      views: 1200,
      description: 'M3M Antalya Hills offers luxurious residential living with scenic views and modern amenities.'
    },
    {
      id: '5',
      type: 'Villa',
      name: 'Emerald Hills Villa',
      location: 'Emerald Hills, Sector 65, Gurgaon, Haryana, India',
      size: '2500 - 5000 Sq Ft',
      price: '₹3.5 Cr - ₹8 Cr',
      image: EmeraldHills,
      options: ['FOR SALE', 'LUXURY'],
      rating: 4.9,
      views: 950,
      description: 'Emerald Hills Villas provide exclusive, spacious living with premium facilities in Gurgaon.'
    },
    {
      id: '6',
      type: 'Office/Studio',
      name: 'World Trade Center',
      location: 'WTC, Sector 16, Noida, UP, India',
      size: '800 - 4000 Sq Ft',
      price: '₹80 L - ₹5 Cr',
      image: WorldTrade,
      options: ['FOR RENT', 'FOR SALE'],
      rating: 4.4,
      views: 1350,
      description: 'World Trade Center in Noida offers premium office spaces with global business connectivity.'
    },
    {
      id: '7',
      type: 'Residential',
      name: 'M3M Antalya Hills',
      location: 'M3M Antalya Hills, Sector 79, Gurugram, Haryana, India',
      size: '1138 – 1642 Sq Ft',
      price: '₹1.15 Cr – ₹1.62 Cr',
      image: M3Mantalya,
      options: ['FOR RENT', 'FOR SALE', 'HOT OFFER'],
      rating: 4.7,
      views: 1200,
      description: 'M3M Antalya Hills offers luxurious residential living with scenic views and modern amenities.'
    },
    {
      id: '8',
      type: 'Residential',
      name: 'Central Park Flower Valley The Room',
      location: 'The Room, Central Park II, Sector 48, Gurugram, Haryana, India',
      size: 'NA',
      price: '₹85 L – ₹1.45 Cr',
      image: CentralPark,
      options: ['FOR RENT', 'FOR SALE'],
      rating: 4.5,
      views: 970,
      description: 'Central Park Flower Valley offers elegant residential spaces with lush surroundings.'
    },
    {
      id: '9',
      type: 'Residential',
      name: 'M3M Mansion Sector 113, Gurgaon',
      location: 'M3M Mansion, Sector 113, Bajghera, Gurugram, Haryana, India',
      size: '1638 – 6695 Sq Ft',
      price: '₹1.8 Cr – ₹8.2 Cr',
      image: M3MMansion,
      options: ['FOR RENT', 'FOR SALE', 'HOT OFFER'],
      rating: 4.9,
      views: 2400,
      description: 'M3M Mansion offers ultra-luxury residences with top-tier amenities in Sector 113.'
    },
    {
      id: '10',
      type: 'Residential/Studio/Apartment',
      name: 'Krisumi Waterfall Residences',
      location: 'Krisumi Waterfall Residences, Sector 36A, Gurugram, Haryana, India',
      size: '1448 – 6569 Sq Ft',
      price: '₹1.25 Cr – ₹6.5 Cr',
      image: Krisumi,
      options: ['FEATURED', 'FOR RENT', 'FOR SALE', 'HOT OFFER'],
      rating: 4.6,
      views: 1870,
      description: 'Krisumi Waterfall Residences blend Japanese design with modern luxury in Gurugram.'
    },
    {
      id: '11',
      type: 'Residential/Apartment',
      name: 'Tulip Monsella',
      location: 'Tulip Monsella, Sector 53, Gurugram, Haryana, India',
      size: '1368 – 4503 Sq Ft',
      price: '₹3.75 Cr – ₹9 Cr',
      image: Tulip,
      options: ['FOR RENT', 'FOR SALE'],
      rating: 4.8,
      views: 1650,
      description: 'Tulip Monsella offers premium residences with sophisticated design in Sector 53.'
    },
    {
      id: '12',
      type: 'Residential/Apartment',
      name: 'Smartworld One DXP',
      location: 'Smartworld ONE DXP, Sector 113, Bajghera, Gurugram, Haryana, India',
      size: '2450 – 3203 Sq Ft',
      price: '₹2.95 Cr – ₹5 Cr',
      image: SmartWorld,
      options: ['FOR RENT', 'FOR SALE', 'HOT OFFER'],
      rating: 4.6,
      views: 2100,
      description: 'Smartworld One DXP provides modern residential living with smart home features.'
    },
    {
      id: '13',
      type: 'Commercial',
      name: 'Reach Airia Mall',
      location: 'Airia Mall, Sector 68, Gurugram, Haryana, India',
      size: '300 – 8000 Sq Ft',
      price: '₹ Price on Request',
      image: AriaMall,
      options: ['FOR RENT', 'FOR SALE', 'HOT OFFER'],
      rating: 4.7,
      views: 1700,
      description: 'Reach Airia Mall is a prime commercial destination with versatile retail spaces.'
    },
    {
      id: '14',
      type: 'Commercial',
      name: 'AIPL Business Club',
      location: 'AIPL Business Club, Sector 62, Gurugram, Haryana, India',
      size: '500 – 20000 Sq Ft',
      price: '₹ Price on Request',
      image: AIPLBusinessClub,
      options: ['FOR RENT', 'FOR SALE'],
      rating: 4.6,
      views: 1500,
      description: 'AIPL Business Club offers premium office spaces with cutting-edge facilities.'
    },
    {
      id: '15',
      type: 'Commercial',
      name: 'The Omaxe State',
      location: 'The Omaxe State, Sector 198, Sector 24 Dwarka, Dwarka, Delhi, India',
      size: '50 – 10000 Sq Ft',
      price: '₹30,000+ Sq Ft',
      image: Omaxstate,
      options: ['FOR RENT', 'FOR SALE', 'HOT OFFER'],
      rating: 4.8,
      views: 2100,
      description: 'The Omaxe State is a bustling commercial complex in Dwarka with diverse offerings.'
    },
    {
      id: '16',
      type: 'Commercial',
      name: 'AIPL Joy Street',
      location: 'AIPL Joy Street, Badshahpur, Sector 66, Gurugram, Haryana, India',
      size: '300 – 8000 Sq Ft',
      price: '₹ Price on Request',
      image: AIPLAutography,
      options: ['FOR RENT', 'FOR SALE'],
      rating: 4.5,
      views: 1400,
      description: 'AIPL Joy Street combines retail and leisure in a vibrant commercial setting.'
    },
    {
      id: '17',
      type: 'Commercial/Villa',
      name: 'Cygnett Retreat',
      location: 'Pahadi Kothi, Bagar Road, Pangot, Uttarakhand, India',
      size: '800 Sq Ft',
      price: '₹ Price on Request',
      image: Cygnett,
      options: ['FOR RENT', 'FOR SALE', 'HOT OFFER'],
      rating: 4.9,
      views: 1300,
      description: 'Cygnett Retreat offers unique commercial spaces in the serene hills of Uttarakhand.'
    },
    {
      id: '18',
      type: 'Commercial',
      name: 'M3M IFC',
      location: 'M3M IFC, Golf Course Extension Road, Badshahpur, Sector 66, Gurugram, Haryana, India',
      size: '500 – 18000 Sq Ft',
      price: '₹ Price on Request',
      image: M3MMansion,
      options: ['FOR RENT', 'FOR SALE', 'HOT OFFER'],
      rating: 4.7,
      views: 1900,
      description: 'M3M IFC is a prestigious commercial complex with world-class office spaces.'
    },
    {
      id: '19',
      type: 'Villa',
      name: 'Cygnett Retreat',
      location: 'Pahadi Kothi, Bagar Road, Pangot, Uttarakhand, India',
      size: '800 Sq Ft',
      price: '₹ Price on Request',
      image: Cygnett,
      options: ['FOR RENT', 'FOR SALE', 'HOT OFFER'],
      rating: 4.9,
      views: 1300,
      description: 'Cygnett Retreat villas offer tranquil living in the scenic hills of Uttarakhand.'
    },
    {
      id: '20',
      type: 'Villa',
      name: 'Sobha International City',
      location: 'Sobha International City, Dwarka Expressway, Sector 109, Gurugram, Haryana, India',
      size: '3153 – 7330 Sq Ft',
      price: '₹ Price on Request',
      image: Sobha,
      options: ['FOR RENT', 'FOR SALE', 'HOT OFFER'],
      rating: 4.8,
      views: 1650,
      description: 'Sobha International City offers luxurious villas with global design standards.'
    },
    {
      id: '21',
      type: 'Office',
      name: 'AIPL Business Club',
      location: 'AIPL Business Club, Sector 62, Gurugram, Haryana, India',
      size: 'Size on Request',
      price: '₹ Price on Request',
      image: AIPLBusinessClub,
      options: ['FOR RENT', 'FOR SALE'],
      rating: 4.7,
      views: 980,
      description: 'AIPL Business Club provides flexible office spaces in a prime Gurgaon location.'
    },
    {
      id: '22',
      type: 'Office',
      name: 'M3M IFC',
      location: 'M3M IFC, Golf Course Extension Road, Badshahpur, Sector 66, Gurugram, Haryana, India',
      size: '500 – 18000 Sq Ft',
      price: '₹ Price on Request',
      image: M3MMansion,
      options: ['FOR RENT', 'FOR SALE', 'HOT OFFER'],
      rating: 4.9,
      views: 1200,
      description: 'M3M IFC offers modern office spaces with premium amenities in Gurgaon.'
    },
    {
      id: '23',
      type: 'Office/Food Court/Commercial/Shop',
      name: 'AIPL Autograph',
      location: 'AIPL Autograph Corporate Office Space, Sector 66, Gurugram, Haryana, India',
      size: 'Size on Request',
      price: '₹ Price on Request',
      image: AIPLAutography,
      options: ['FOR RENT', 'FOR SALE', 'HOT OFFER'],
      rating: 4.8,
      views: 1400,
      description: 'AIPL Autograph provides sophisticated corporate office spaces in Sector 66.'
    },
    {
      id: '24',
      type: 'Shop/Commercial',
      name: 'Elan The Mark',
      location: 'Elan The Mark, Block R, New Palam Vihar Phase 1, Sector 106, Gurugram, Pawala Khasrupur, Haryana, India',
      size: 'Size on Request',
      price: '₹ Price on Request',
      image: Elan,
      options: ['FOR RENT', 'FOR SALE', 'HOT OFFER'],
      rating: 4.8,
      views: 1400,
      description: 'AIPL Autograph provides sophisticated corporate office spaces in Sector 66.'
    },
    {
      id: '25',
      type: 'Apartment/Residential',
      name: 'Elan The Presidential',
      location: 'Elan The Presidential, Northern Peripheral Road, Panwala Khusropur, Sector 106, Gurugram, Haryana, India',
      size: 'Size on Request',
      price: '₹ Price on Request',
      image: ElanThePersidential,
      options: ['FOR RENT', 'FOR SALE', 'HOT OFFER'],
      rating: 4.8,
      views: 1400,
      description: 'AIPL Autograph provides sophisticated corporate office spaces in Sector 66.'
    },
    {
      id: '25',
      type: 'Apartment/Residential',
      name: 'Trinity Sky Palazzos',
      location: 'Trinity Sky Palazzos, On, Northern Peripheral Road, Sector 88B, Gurugram, Haryana, India',
      size: 'Size on Request',
      price: '₹ Price on Request',
      image: Trinity,
      options: ['FOR RENT', 'FOR SALE', 'HOT OFFER'],
      rating: 4.8,
      views: 1400,
      description: 'AIPL Autograph provides sophisticated corporate office spaces in Sector 66.'
    }
    
  ];

  const tabs = [
    { key: 'all', label: 'All Properties', count: properties.length },
    { key: 'residential', label: 'Residential', count: properties.filter(p => p.type.toLowerCase().includes('residential')).length },
    { key: 'commercial', label: 'Commercial', count: properties.filter(p => p.type.toLowerCase().includes('commercial')).length },
    { key: 'villa', label: 'Villa', count: properties.filter(p => p.type.toLowerCase().includes('villa')).length },
    { key: 'office', label: 'Office', count: properties.filter(p => p.type.toLowerCase().includes('office')).length },
    { key: 'studio', label: 'Studio', count: properties.filter(p => p.type.toLowerCase().includes('studio')).length },
    { key: 'plot', label: 'Plot', count: properties.filter(p => p.type.toLowerCase().includes('plot')).length },
  ];

  const normalizedFilters = useMemo(() => {
    const f = filters || {};
    return {
      search: f.search ? String(f.search).trim().toLowerCase() : '',
      type: f.type ? String(f.type).trim().toLowerCase() : '',
      city: f.city ? String(f.city).trim().toLowerCase() : '',
    };
  }, [filters]);

  const getCombinedFiltered = () => {
    let list = properties.slice();
    list = list.map(p => ({
      ...p,
      _type: p.type ? String(p.type).trim().toLowerCase() : '',
      _name: p.name ? String(p.name).toLowerCase() : '',
      _location: p.location ? String(p.location).toLowerCase() : '',
      _price: p.price ? String(p.price).toLowerCase() : '',
    }));

    if (activeTab && activeTab !== 'all') {
      const tabKey = activeTab.toLowerCase();
      list = list.filter(p => p._type.includes(tabKey));
    }

    const { search, type, city } = normalizedFilters;
    if (type) {
      const t = type.toLowerCase();
      list = list.filter(p => p._type.includes(t) || p._name.includes(t) || p._location.includes(t));
    }
    if (city) {
      const c = city.toLowerCase();
      list = list.filter(p => p._location.toLowerCase().includes(c));
    }
    if (search) {
      const s = search.toLowerCase();
      list = list.filter(p =>
        p._name.includes(s) ||
        p._location.includes(s) ||
        p._type.includes(s) ||
        p._price.includes(s)
      );
    }
    return list;
  };

  const filteredProperties = useMemo(getCombinedFiltered, [activeTab, filters]);

  const toggleFavorite = (id) => {
    setFavorites(prev => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(id)) {
        newFavorites.delete(id);
      } else {
        newFavorites.add(id);
      }
      return newFavorites;
    });
  };

  const getOptionColor = (option) => {
    switch (option) {
      case 'HOT OFFER': return 'border-gray-600 border-1 from-amber-700 to-amber-500 text-white';
      case 'LUXURY': return 'border-gray-600 border-1 from-amber-600 to-amber-400 text-white';
      case 'PREMIUM': return 'border-gray-600 border-1 from-amber-500 to-yellow-500 text-white';
      case 'FOR SALE': return 'border-gray-600 border-1 from-slate-900 to-amber-700 text-white';
      case 'FOR RENT': return 'border-gray-600 border-1 from-amber-700 to-slate-900 text-white';
      default: return 'border-gray-600 border-1 text-gray-700';
    }
  };

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1500);
    setVisibleProperties(6);
  }, [activeTab]);

  const handleViewMore = () => {
    setVisibleProperties(filteredProperties.length);
    setShowAll(true);
  };

  const handleViewLess = () => {
    setVisibleProperties(6);
    setShowAll(false);
  };

  const PropertyModal = ({ property, onClose }) => {
    const [contactForm, setContactForm] = useState({
      fullName: '',
      phone: '',
      email: '',
      message: '',
    });

    const [tourForm, setTourForm] = useState({
      tourType: '',
      tourDate: null,
      tourTime: null,
      tourName: '',
      tourPhone: '',
      tourEmail: '',
      tourMessage: '',
    });

    const [isShareOpen, setIsShareOpen] = useState(false);
    const [isPrinting, setIsPrinting] = useState(false); // Loading state for PDF generation

    // Handle input changes for contact form
    const handleContactChange = (e) => {
      const { name, value } = e.target;
      setContactForm((prev) => ({ ...prev, [name]: value }));
    };

    // Handle input changes for tour form
    const handleTourChange = (e) => {
      const { name, value } = e.target;
      setTourForm((prev) => ({ ...prev, [name]: value }));
    };

    // Handle TimePicker change
    const handleTimeChange = (time) => {
      setTourForm((prev) => ({ ...prev, tourTime: time }));
    };

    // Handle DatePicker change
    const handleDateChange = (date) => {
      setTourForm((prev) => ({ ...prev, tourDate: date }));
    };

    // Handle contact form submission
    const handleContactSubmit = (e) => {
      e.preventDefault();
      console.log('Contact Form Submitted:', contactForm);
      // Add your submission logic here (e.g., API call)
    };

    // Handle tour form submission
    const handleTourSubmit = (e) => {
      e.preventDefault();
      console.log('Tour Form Submitted:', tourForm);
      // Add your submission logic here (e.g., API call)
    };

    // Toggle share popup
    const toggleSharePopup = () => {
      setIsShareOpen((prev) => !prev);
    };

    // Handle PDF generation and download
    const handlePrint = async () => {
      if (isPrinting) return; // Prevent multiple clicks
      setIsPrinting(true);

      try {
        // Preload image to handle CORS
        const img = new Image();
        img.crossOrigin = 'Anonymous';
        img.src = property.image;
        await new Promise((resolve, reject) => {
          img.onload = resolve;
          img.onerror = () => reject(new Error('Failed to load image'));
        });

        // Create a temporary container for PDF content
        const tempContainer = document.createElement('div');
        tempContainer.style.position = 'absolute';
        tempContainer.style.left = '-9999px';
        tempContainer.style.width = '800px';
        tempContainer.style.padding = '20px';
        tempContainer.style.background = '#fff';
        tempContainer.style.fontFamily = 'Arial, sans-serif';

        tempContainer.innerHTML = `
          <div style="margin-bottom: 20px;">
            <img src="${property.image}" style="width: 100%; height: 300px; object-fit: cover; border-radius: 10px;" />
          </div>
          <h2 style="font-size: 24px; font-weight: bold; color: #1f2937; margin-bottom: 10px;">${property.name}</h2>
          <p style="font-size: 18px; color: #b45309; font-weight: bold; margin-bottom: 10px;">${property.price}</p>
          <p style="font-size: 14px; color: #4b5563; margin-bottom: 10px;">
            <strong>Location:</strong> ${property.location}
          </p>
          <p style="font-size: 14px; color: #4b5563; margin-bottom: 10px;">
            <strong>Size:</strong> ${property.size}
          </p>
          <p style="font-size: 14px; color: #4b5563; margin-bottom: 10px;">
            <strong>Features:</strong> ${property.options.join(', ')}
          </p>
          <p style="font-size: 14px; color: #4b5563;">
            <strong>Description:</strong> ${property.description}
          </p>
        `;

        document.body.appendChild(tempContainer);

        const canvas = await html2canvas(tempContainer, {
          scale: 2,
          useCORS: true,
          logging: false,
          windowWidth: 800,
          windowHeight: tempContainer.scrollHeight,
          scrollX: 0,
          scrollY: 0,
        });

        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4');
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();
        const imgProps = pdf.getImageProperties(imgData);
        const imgHeight = (imgProps.height * pdfWidth) / imgProps.width;

        let position = 0;
        while (position < imgHeight) {
          if (position > 0) pdf.addPage();
          pdf.addImage(imgData, 'PNG', 0, -position, pdfWidth, imgHeight);
          position += pdfHeight;
        }

        pdf.save(`${property.name.replace(/\s+/g, '_')}.pdf`);
        document.body.removeChild(tempContainer); // Clean up
      } catch (error) {
        console.error('Error generating PDF:', error.message);
        alert('Failed to generate PDF. Please ensure images are loaded and try again.');
      } finally {
        setIsPrinting(false);
      }
    };

    const shareUrl = window.location.href;
    const shareTitle = `${property.name} - ${property.type}`;
    const shareText = `${property.description} Check out this property at ${property.location}!`;

    return (
      <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-2 sm:p-4">
        <div
          className="modal-content bg-white rounded-2xl max-w-4xl w-full max-h-[95vh] overflow-y-auto shadow-2xl transform animate-in fade-in zoom-in duration-300 relative"
          style={{
            scrollbarWidth: 'thin',
            scrollbarColor: '#c99913 #f3f4f6'
          }}
        >
          {/* Close Button - Fixed Position */}
          <button
            onClick={onClose}
            className="absolute cursor-pointer top-4 right-4 z-10 bg-white/90 backdrop-blur-sm hover:border-red-500 hover:border-1 text-gray-700 hover:text-red-500 p-2 rounded-full transition-all duration-200 hover:scale-110 shadow-lg"
            style={{ zIndex: 1000 }}
          >
            <X size={24} />
          </button>

          {/* Header with Image */}
          <div className="relative">
            <div className="relative h-48 sm:h-64 md:h-72 overflow-hidden ">
              <img
                src={property.image}
                alt={property.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />

              {/* Property Options Overlay */}
              <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                {property.options.map((option, idx) => (
                  <span
                    key={option + idx}
                    className={`px-3 py-1 rounded-full text-xs font-bold backdrop-blur-md ${getOptionColor(option)} shadow-lg`}
                  >
                    {option}
                  </span>
                ))}
              </div>

              {/* Stats Overlay */}
              <div className="absolute bottom-4 flex items-center w-full justify-between px-4 space-x-3">
                <div className='bottom-left-image-stats flex items-center space-x-3'>
                  <div className="flex items-center space-x-1 bg-white/20 backdrop-blur-md rounded-full px-3 py-1">
                    <Eye className="w-4 h-4 text-white" />
                    <span className="text-sm font-medium text-white">{property.views.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center space-x-1 bg-white/20 backdrop-blur-md rounded-full px-3 py-1">
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    <span className="text-sm font-medium text-white">{property.rating}</span>
                  </div>
                </div>

                <div className="bottom-right-image-stats flex items-center space-x-3">
                  <div onClick={toggleSharePopup} className="cursor-pointer flex items-center space-x-1 bg-white/20 backdrop-blur-md rounded-full px-3 py-1 hover:bg-white/30 transition-all">
                    <Share2 className="text-white w-4 h-4" />
                  </div>
                  <div onClick={handlePrint} className="cursor-pointer flex items-center space-x-1 bg-white/20 backdrop-blur-md rounded-full px-3 py-1 hover:bg-white/30 transition-all">
                    <Printer className={`text-white w-4 h-4 ${isPrinting ? 'animate-pulse' : ''}`} />
                    {isPrinting && <span className="text-xs text-white">Generating...</span>}
                  </div>
                </div>
              </div>

              {/* Share Popup */}
              {isShareOpen && (
                <div className="absolute top-16 right-4 bg-white rounded-lg shadow-xl p-2 z-50 w-34">
                  <button
                    onClick={toggleSharePopup}
                    className="absolute top-2 right-2 text-gray-600 cursor-pointer hover:text-red-500 transition-all"
                  >
                    <X size={16} />
                  </button>
                  <div className="flex flex-col gap-2 mt-4">
                    <FacebookShareButton url={shareUrl} quote={shareText} title={shareTitle}>
                      <div className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 cursor-pointer">
                        <FacebookIcon size={24} round />
                        <span className="text-xs ml-2">Facebook</span>
                      </div>
                    </FacebookShareButton>
                    <TwitterShareButton url={shareUrl} title={shareText}>
                      <div className="flex items-center space-x-1 text-gray-700 hover:text-blue-400 cursor-pointer">
                        <TwitterIcon size={24} round />
                        <span className="text-xs ml-2">X</span>
                      </div>
                    </TwitterShareButton>
                    <LinkedinShareButton url={shareUrl} title={shareTitle} summary={shareText}>
                      <div className="flex items-center space-x-1 text-gray-700 hover:text-blue-700 cursor-pointer">
                        <LinkedinIcon size={24} round />
                        <span className="text-xs ml-2">LinkedIn</span>
                      </div>
                    </LinkedinShareButton>
                    <WhatsappShareButton url={shareUrl} title={shareText}>
                      <div className="flex items-center space-x-1 text-gray-700 hover:text-green-500 cursor-pointer">
                        <WhatsappIcon size={24} round />
                        <span className="text-xs ml-2">WhatsApp</span>
                      </div>
                    </WhatsappShareButton>
                    <EmailShareButton url={shareUrl} subject={shareTitle} body={shareText}>
                      <div className="flex items-center space-x-1 text-gray-700 hover:text-gray-500 cursor-pointer">
                        <EmailIcon size={24} round />
                        <span className="text-xs ml-2">Email</span>
                      </div>
                    </EmailShareButton>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Content Section */}
          <div className="p-4 sm:p-6">
            {/* Header Info */}
            <div className="mb-4">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2 leading-tight">
                    {property.name}
                  </h2>
                  <div className="inline-block">
                    <span className="bg-gradient-to-r from-amber-100 to-amber-50 text-amber-800 px-3 py-1 rounded-full text-sm font-semibold border border-amber-200">
                      {property.type}
                    </span>
                  </div>
                </div>
                <div className="text-right ml-3">
                  <p className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-amber-600 to-amber-700 bg-clip-text text-transparent">
                    {property.price}
                  </p>
                </div>
              </div>
            </div>

            {/* Property Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-4">
                  <h3 className="text-base font-semibold text-gray-900 mb-2 flex items-center">
                    <MapPin className="w-4 h-4 text-amber-600 mr-2" />
                    Location
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">{property.location}</p>
                </div>
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4">
                  <h3 className="text-base font-semibold text-gray-900 mb-2 flex items-center">
                    <Ruler className="w-4 h-4 text-blue-600 mr-2" />
                    Size
                  </h3>
                  <p className="text-gray-700 text-lg font-medium">{property.size}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4">
                  <h3 className="text-base font-semibold text-gray-900 mb-2">Description</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">{property.description}</p>
                </div>
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4">
                  <h3 className="text-base font-semibold text-gray-900 mb-2">Features</h3>
                  <div className="flex flex-wrap gap-2">
                    {property.options.map((option, idx) => (
                      <span
                        key={option + idx}
                        className="px-2 py-1 bg-white rounded-lg text-xs font-medium text-gray-700 shadow-sm border border-gray-200"
                      >
                        {option}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="get-in-touch-section border-[#d3d3d382] border-1 p-2 sm:p-3 rounded-xl shadow-md ">
                <h3 className="text-base font-semibold text-gray-900 mb-3">Get in Touch</h3>
                <div className="flex flex-col sm:flex-row gap-3">
                  <CustomButton
                    onClick={() => window.location.href = 'tel:+918744964496'}
                    className="flex-1 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-200 hover:scale-105 hover:shadow-lg flex items-center justify-center  group"
                  >
                    <FiPhone className="w-4 h-4 group-hover:animate-pulse" />
                    <span>Call Now</span>
                  </CustomButton>
                  <CustomButton
                    onClick={() => window.open('https://wa.me/918744964496', '_blank', 'noopener,noreferrer')}
                    className="flex-1 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-200 hover:scale-105 hover:shadow-lg flex items-center justify-center group"
                  >
                    <MdOutlineWhatsapp className="w-4 h-4 group-hover:animate-pulse" />
                    <span>WhatsApp</span>
                  </CustomButton>
                  <CustomButton
                    onClick={() => window.location.href = 'mailto:info@ethosprorealtors.com'}
                    className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-200 hover:scale-105 hover:shadow-lg flex items-center justify-center group"
                  >
                    <MdOutlineEmail className="w-4 h-4 group-hover:animate-pulse" />
                    <span>Email</span>
                  </CustomButton>
                </div>
              </div>
            </div>

            {/* Action Buttons */}


            <div className="contact-section-property-modal mt-6 flex flex-col sm:flex-row">
              <div className="left-side border-[#d3d3d382] border-1 p-4 sm:p-6 rounded-xl shadow-md mb-6 sm:mr-6 sm:mb-0 sm:w-1/2">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Us</h3>
                <form className="space-y-4" onSubmit={handleContactSubmit}>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="fullName">
                      Full Name
                    </label>
                    <CustomInput
                      type="text"
                      id="fullName"
                      name="fullName"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                      placeholder="Enter your full name"
                      value={contactForm.fullName}
                      onChange={handleContactChange}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="phone">
                      Phone
                    </label>
                    <CustomInput
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                      placeholder="Enter your phone number"
                      value={contactForm.phone}
                      onChange={handleContactChange}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">
                      Email
                    </label>
                    <CustomInput
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                      placeholder="Enter your email address"
                      value={contactForm.email}
                      onChange={handleContactChange}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="message">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-area-contact"
                      placeholder="Type your message"
                      value={contactForm.message}
                      onChange={handleContactChange}
                    />
                  </div>
                  <div className="w-full flex justify-center items-center">
                    <CustomButton
                      type="submit"
                      className="w-auto text-black font-semibold py-3 px-4 rounded-xl property-card-action-button"
                      
                    >
                      Send Message
                    </CustomButton>
                  </div>
                </form>
              </div>
              <div className="right-side border-[#d3d3d382] border-1 p-4 sm:p-6 rounded-xl shadow-md sm:w-1/2">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Schedule a Tour</h3>
                <form className="space-y-4" onSubmit={handleTourSubmit}>
                  <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
                    <div className="w-full sm:w-1/2">
                      <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="tourDate">
                        Date
                      </label>
                      <DatePicker
                        id="tourDate"
                        name="tourDate"
                        className="w-full"
                        style={{
                          padding: '8px',
                          borderRadius: '8px',
                          border: '1px solid #d1d5db',
                        }}
                        placeholder="Select date"
                        value={tourForm.tourDate}
                        onChange={handleDateChange}
                      />
                    </div>
                    <div className="w-full sm:w-1/2">
                      <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="tourTime">
                        Time
                      </label>
                      <TimePicker
                        id="tourTime"
                        name="tourTime"
                        use12Hours
                        format="h:mm:ss A"
                        className="w-full"
                        style={{
                          padding: '8px',
                          borderRadius: '8px',
                          border: '1px solid #d1d5db',
                        }}
                        placeholder="Select time"
                        value={tourForm.tourTime}
                        onChange={handleTimeChange}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="tourName">
                      Name
                    </label>
                    <CustomInput
                      type="text"
                      id="tourName"
                      name="tourName"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                      placeholder="Enter your name"
                      value={tourForm.tourName}
                      onChange={handleTourChange}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="tourPhone">
                      Phone
                    </label>
                    <CustomInput
                      type="tel"
                      id="tourPhone"
                      name="tourPhone"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                      placeholder="Enter your phone number"
                      value={tourForm.tourPhone}
                      onChange={handleTourChange}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="tourEmail">
                      Email
                    </label>
                    <CustomInput
                      type="email"
                      id="tourEmail"
                      name="tourEmail"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                      placeholder="Enter your email address"
                      value={tourForm.tourEmail}
                      onChange={handleTourChange}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="tourMessage">
                      Message
                    </label>
                    <textarea
                      id="tourMessage"
                      name="tourMessage"
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-area-contact"
                      placeholder="Type your message"
                      value={tourForm.tourMessage}
                      onChange={handleTourChange}
                    />
                  </div>
                  <div className="w-full flex justify-center items-center">
                    <CustomButton
                      type="submit"
                      className="w-auto text-black font-semibold py-3 px-4 property-card-action-button rounded-xl"
                      
                    >
                      Schedule Tour
                    </CustomButton>
                  </div>
                </form>
              </div>
            </div>

            {/* Additional Info Footer */}
            <div className="mt-4 pt-3 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-2 sm:space-y-0">
                <div className="flex items-center space-x-4 text-xs text-gray-600">
                  <div className="flex items-center space-x-1">
                    <Eye className="w-3 h-3" />
                    <span>{property.views.toLocaleString()} views</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                    <span>{property.rating} rating</span>
                  </div>
                </div>
                <div className="text-xs text-gray-500">
                  Property ID: #{property.id}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const PropertyCard = ({ property, index }) => {
    const isFavorite = favorites.has(property.id);

    const handleDetailsClick = () => {
      const formattedName = property.name.toLowerCase().replace(/\s+/g, '-');
      navigate(`/property/${formattedName}`, { state: { property } });
    };

    return (
      <div
        className="parent"
        style={{
          animationDelay: `${index * 100}ms`,
          animation: isLoading ? 'none' : 'slideInUp 0.6s ease-out forwards'
        }}
        id="explore-properties"
      >
        <div className="explore-card relative bg-white rounded-2xl shadow-lg overflow-hidden group">
          <div className="relative overflow-hidden h-64 sm:h-56">
            <img
              src={property.image}
              alt={property.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <CustomButton
              onClick={() => toggleFavorite(property.id)}
              className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-sm transition-all duration-300 ${isFavorite
                ? 'bg-gradient-to-r from-amber-700 to-amber-500 text-white scale-110'
                : 'bg-white/80 text-gray-600 hover:bg-gradient-to-r hover:from-amber-700 hover:to-amber-500 hover:text-white'
                }`}
            >
              <Heart className={`w-4 h-4 ${isFavorite ? 'fill-current' : ''}`} />
            </CustomButton>
            <div className="absolute top-3 left-3 flex flex-wrap gap-1 sm:gap-2">
              {property.options.map((option, idx) => (
                <span
                  key={option + idx}
                  className={`px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-[10px] sm:text-xs font-semibold ${getOptionColor(option)} transform transition-all duration-300`}
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  {option}
                </span>
              ))}
            </div>
            <div className="absolute bottom-3 left-3 flex items-center space-x-3 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="flex items-center space-x-1 bg-slate-900/50 rounded-full px-2 py-1">
                <Eye className="w-3 h-3" />
                <span className="text-[10px] sm:text-xs">{property.views}</span>
              </div>
              <div className="flex items-center space-x-1 bg-slate-900/50 rounded-full px-2 py-1">
                <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                <span className="text-[10px] sm:text-xs cursor-pointer">{property.rating}</span>
              </div>
            </div>
          </div>
          <div className="p-4 sm:p-6">
            <div className="mb-2 sm:mb-3">
              <h3 className="text-base sm:text-lg font-[Montserrat] font-bold text-gray-800 mb-1 group-hover:text-amber-700 transition-colors duration-300 line-clamp-1">
                {property.name}
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 uppercase tracking-wide font-medium line-clamp-1">
                {property.type}
              </p>
            </div>
            <div className="space-y-1 sm:space-y-2 mb-3 sm:mb-4">
              <div className="flex items-start space-x-2 text-gray-600">
                <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mt-0.5 text-amber-700" />
                <p className="text-xs sm:text-sm leading-relaxed line-clamp-2 font-[sans-serif]">{property.location}</p>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <Ruler className="w-3 h-3 sm:w-4 sm:h-4 text-amber-700" />
                <p className="text-xs sm:text-sm">{property.size}</p>
              </div>
            </div>
            <div className="mb-3 sm:mb-4">
              <p className="text-base sm:text-xl font-bold text-amber-700 line-clamp-1">{property.price}</p>
            </div>
            <div className="flex space-x-1 sm:space-x-2">
              {[
                {
                  icon: FiPhone,
                  label: 'Call',
                  href: 'tel:+918744964496',
                  target: '_blank',
                },
                {
                  icon: MdOutlineWhatsapp,
                  label: 'WhatsApp',
                  href: 'https://wa.me/+918744964496',
                  target: '_blank',
                },
              ].map((action, idx) => (
                <CustomButton
                  key={action.label + idx}
                  className="property-card-action-button"
                  style={{ transitionDelay: `${idx * 50}ms` }}
                  href={action.href}
                  target={action.target}
                  rel={action.href ? 'noopener noreferrer' : undefined}
                >
                  <action.icon className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="text-[10px] sm:text-sm font-medium">{action.label}</span>
                </CustomButton>
              ))}
              <div>
                <CustomButton
                  className="property-card-action-button"
                  onClick={handleDetailsClick}
                >
                  Details
                </CustomButton>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-black via-[#474236] to-[#c99913] blur-xl opacity-20" />
          </div>
        </div>
      </div>
    );
  };

  const LoadingSkeleton = () => (
    <div className="parent">
      <div className="explore-card bg-white rounded-2xl shadow-lg overflow-hidden animate-pulse">
        <div className="h-64 sm:h-56 bg-gray-300" />
        <div className="p-4 sm:p-6">
          <div className="h-4 bg-gray-300 rounded mb-2" />
          <div className="h-3 bg-gray-300 rounded mb-4 w-3/4" />
          <div className="h-3 bg-gray-300 rounded mb-2" />
          <div className="h-3 bg-gray-300 rounded mb-4 w-1/2" />
          <div className="flex space-x-1 sm:space-x-2">
            <div className="flex-1 h-8 bg-gray-300 rounded" />
            <div className="flex-1 h-8 bg-gray-300 rounded" />
            <div className="flex-1 h-8 bg-gray-300 rounded" />
          </div>
        </div>
      </div>
    </div>
  );

  const NoResults = () => (
    <div className="text-center py-8 sm:py-12 px-4 bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg max-w-full sm:max-w-2xl mx-auto animate-fadeIn">
      <h2 className="text-xl sm:text-3xl font-bold bg-gradient-to-r from-black via-[#474236] to-[#c99913] bg-clip-text text-transparent mb-2 sm:mb-3">
        No Properties Found
      </h2>
      <p className="text-gray-600 text-sm sm:text-lg font-[Inter] max-w-full sm:max-w-md mx-auto">
        There are no properties available for the selected category. Try another category or check back later.
      </p>
      <div className="mt-4 sm:mt-6">
        <CustomButton
          className="px-4 sm:px-6 py-2 sm:py-3 cursor-pointer rounded-xl font-semibold text-white bg-gradient-to-r from-black via-[#474236] to-[#c99913] hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg text-sm sm:text-base"
          onClick={() => setActiveTab('all')}
        >
          View All Properties
        </CustomButton>
      </div>
    </div>
  );

  const selectedProperty = propertyName
    ? properties.find(p => p.name.toLowerCase().replace(/\s+/g, '-') === propertyName)
    : null;

  const handleCloseModal = () => {
    navigate('/explore-properties', { replace: true });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-amber-50 to-amber-100 py-8 sm:py-12 px-4">
      <div className="max-w-full sm:max-w-7xl mx-auto mb-8 sm:mb-12 text-center">
        <h1 className="text-3xl font-[Montserrat] sm:text-5xl md:text-6xl font-black mb-3 sm:mb-4 bg-gradient-to-r from-black via-[#474236] to-[#c99913] bg-clip-text text-transparent animate-pulse">
          Explore Premium Properties
        </h1>
        <div className="h-1 bg-gradient-to-r from-transparent via-[#c99913] to-transparent rounded-full animate-pulse"></div>
        <p className="text-gray-600 text-sm font-[sans-serif] sm:text-lg max-w-full sm:max-w-2xl mx-auto mt-2 font-[Inter]">
          Discover a diverse collection of premium properties, from luxurious residences to high-end commercial spaces.
          Browse through the latest listings, featuring stunning architecture, prime locations,
          and exceptional investment opportunities. Discover the perfect investment or dream residence with ease.
        </p>
      </div>

      <div className="max-w-full sm:max-w-7xl mx-auto mb-8 sm:mb-12">
        <div className="flex bg-white overflow-x-auto sm:flex-wrap justify-start sm:justify-center gap-2 sm:gap-4 p-2 bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg scrollbar-hidden">
          {tabs.map((tab) => (
            <CustomButton
              key={tab.key}
              style={{ backgroundColor: 'transparent', position: 'relative' }}
              onClick={() => setActiveTab(tab.key)}
              className={`px-4 sm:px-6 py-2 sm:py-3  font-semibold transition-all cursor-pointer duration-300 transform hover:scale-105 text-sm sm:text-base whitespace-nowrap border-1 border-transparent ${activeTab === tab.key
                ? 'gradient-border-active text-[#c99913] font-bold bg-[#c99913]/10 shadow-xl scale-105'
                : 'text-gray-600 hover:gradient-border-active hover:text-[#c99913] border-black border-1 non-active-tab'
                }`}
            >
              {tab.label}
              <span
                className={`ml-1 sm:ml-2 px-1 sm:px-2 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs ${activeTab === tab.key
                  ? 'bg-[#c99913]/30 text-[#c99913] font-medium'
                  : 'bg-gray-200 text-gray-600'
                  }`}
              >
                {tab.count}
              </span>
            </CustomButton>
          ))}
        </div>
      </div>

      <div className="max-w-full sm:max-w-7xl mx-auto">
        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
            {Array.from({ length: 6 }).map((_, index) => (
              <LoadingSkeleton key={index} />
            ))}
          </div>
        ) : filteredProperties.length === 0 ? (
          <NoResults />
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
              {filteredProperties.slice(0, visibleProperties).map((property, index) => (
                <PropertyCard key={property.id} property={property} index={index} />
              ))}
            </div>
            {filteredProperties.length > 6 && (
              <div className="text-center flex items-center w-full justify-center mt-8">
                {!showAll ? (
                  <CustomButton
                    className="px-6 py-3 flex items-center rounded-xl w-auto cursor-pointer property-card-action-button"
                    onClick={handleViewMore}
                  >
                    View More
                  </CustomButton>
                ) : (
                  <CustomButton
                    className="px-6 py-3 rounded-xl cursor-pointer border property-card-action-button"
                    onClick={handleViewLess}
                  >
                    View Less
                  </CustomButton>
                )}
              </div>
            )}
          </>
        )}
      </div>

      {selectedProperty && (
        <PropertyModal property={selectedProperty} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default ExploreProperties;
