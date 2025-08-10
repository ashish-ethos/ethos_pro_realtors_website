import React, { useState, useMemo } from 'react';
import { Input, Select, Button } from 'antd';
import { FilterOutlined, DownOutlined, SearchOutlined as SearchIcon } from '@ant-design/icons';
import { Grid, List, MapPin, Bed, Bath, Square, Heart, Share, Eye, Star } from 'lucide-react';
import ViewDetailsDrawer from './ViewDetailsDrawer';
import DLFCamellias from "../../assets/images/premiumproperties/dlfthecamilias.jpg";
import ElanTheEmperor from "../../assets/images/premiumproperties/Elan-The-Emperor.jpg";
import KrisumiWaterfall from "../../assets/images/premiumproperties/krisumiwaterfall.jpg";
import TrinitySkyPlazao from "../../assets/images/premiumproperties/skyplazzo.jpg";
import M3Mmansion from "../../assets/images/premiumproperties/m3mmansion.jpg";
import AIPLAutograph from "../../assets/images/exploreproperties/aipl-autograph.jpg";
import CentralPark from "../../assets/images/exploreproperties/central-park.jpg";
import AIPLBusiness from "../../assets/images/exploreproperties/aipl-bussiness.jpg";
import ReachAriaMall from "../../assets/images/exploreproperties/aria-mall.jpg";
import TrumpTower from "../../assets/images/exploreproperties/trump-tower.jpg";
import PioneerUrban from "../../assets/images/exploreproperties/pioneer-urban.jpg";
import PioneerAraya from "../../assets/images/exploreproperties/pioner-araya.jpg";

const { Search } = Input;
const { Option } = Select;

const properties = [
  {
    id: 1,
    name: 'Central Park Flower Valley The Room',
    location: 'Central Park II, Sector 48, Gurugram, Haryana, India',
    price: '₹On Request',
    pricePerSqft: '₹On Request',
    sqft: '2280 Sq Ft',
    bedrooms: 3,
    bathrooms: 3,
    type: 'APARTMENT, RESIDENTIAL',
    category: 'LUXURY',
    status: ['FOR SALE', 'HOT OFFER'],
    rating: 4.8,
    image: CentralPark,
    featured: true,
    amenities: ['Pool', 'Gym', 'Garden', 'Security'],
    addressMap: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.863360441167!2d77.03493257549314!3d28.42337957577965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d191ab1c1c09b%3A0xe8981596d5b56301!2sThe%20Room!5e0!3m2!1sen!2sin!4v1754210749929!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',

  },
  {
    id: 2,
    name: 'M3M Antalya Hills',
    location: 'M3M Antalya Hills, Sector 79, Gurgram, Haryana, India',
    price: '₹1.95 crore',
    pricePerSqft: '₹11,200',
    sqft: '1742 Sq Ft',
    bedrooms: 2,
    bathrooms: 2,
    type: 'APARTMENT, RESIDENTIAL',
    category: 'PREMIUM',
    status: ['FOR RENT', 'FOR SALE'],
    rating: 4.6,
    image: M3Mmansion,
    featured: false,
    amenities: ['Garden', 'Parking', 'Security', 'Clubhouse'],
    addressMap:'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3511.0514500484305!2d76.97008157549077!3d28.357294075816153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d3d08fd4687b7%3A0x74bc7b179b80852!2sM3M%20Antalya%20Hills!5e0!3m2!1sen!2sin!4v1754210958417!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'

  },
  {
    id: 3,
    name: 'DLF The Arbour',
    location: 'DLF, Sector 63, Gurgram, Haryana, India',
    price: '₹On Request',
    pricePerSqft: '₹On Request',
    sqft: '3800 - 3956 Sq Ft',
    bedrooms: 4,
    bathrooms: 4,
    type: 'APARTMENT, RESIDENTIAL',
    category: 'ULTRA_LUXURY',
    status: ['FOR SALE', 'NEW LAUNCH', 'FOR RENT'],
    rating: 4.9,
    image: DLFCamellias,
    featured: true,
    amenities: ['Private Pool', 'Garden', 'Gym', 'Security', 'Concierge'],
    addressMap:'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.731731114595!2d77.07934317601016!3d28.39716959472888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d2376bf488c31%3A0xb4a7d53c84ccdc16!2sDLF%20Arbour!5e0!3m2!1sen!2sin!4v1754211014525!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'

  },
  {
    id: 4,
    name: 'Reach Aria Mall',
    location: 'Aria Mall, Sector 68, Gurgram, Haryana, India',
    price: '₹1.35 crore',
    pricePerSqft: '₹9,800',
    sqft: '8000 Sq Ft',
    bedrooms: 2,
    bathrooms: 2,
    type: 'SHOP, COMMERCIAL',
    category: 'AFFORDABLE',
    status: ['FOR SALE'],
    rating: 4.3,
    image: ReachAriaMall,
    featured: false,
    amenities: ['Metro Nearby', 'Parking', 'Security'],
    addressMap:'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3510.1948247691957!2d77.05033447600975!3d28.383182995359352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d22fecb57f373%3A0xcc4398c9599fcdd7!2sAiria%20Mall!5e0!3m2!1sen!2sin!4v1754211512723!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
  },
  {
    id: 5,
    name: 'AIPL Autograph',
    location: 'AIPL Autograph Corporate Office Space, Sector 66, Gurgram, Haryana',
    price: '₹On Request',
    pricePerSqft: '₹On Request',
    sqft: 'On Request Sq Ft',
    bedrooms: 1,
    bathrooms: 1,
    type: 'STUDIO',
    category: 'COMPACT',
    status: ['FOR RENT', 'READY TO MOVE'],
    rating: 4.4,
    image: AIPLAutograph,
    featured: false,
    amenities: ['Gym', 'Security', 'High-speed Internet'],
    addressMap:'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.72070962259!2d77.06025357601011!3d28.397502394713946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d23b8092a653b%3A0x8de37e83207cd640!2sAIPL%20Autograph%20Sec%2066%7C%20Corporate%20office%20Space%20Gurugram%20%7C%20Professional%20Business%20Center%20Gurgaon!5e0!3m2!1sen!2sin!4v1754211120972!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'

  },
  {
    id: 6,
    name: 'AIPL Business Club',
    location: 'AIPL Business Club, Sector 62, Gurgram, Haryana, India',
    price: '₹On Request',
    pricePerSqft: '₹On Request',
    sqft: 'On Request Sq Ft',
    bedrooms: 5,
    bathrooms: 5,
    type: 'OFFICE, COMMERCIAL',
    category: 'ULTRA_LUXURY',
    status: ['FOR SALE', 'EXCLUSIVE'],
    rating: 4.9,
    image: AIPLBusiness,
    featured: true,
    amenities: ['Private Pool', 'Garden', 'Home Theater', 'Wine Cellar', 'Security'],
    addressMap:'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.5792444865574!2d77.08228407601032!3d28.40177369452129!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d223e7bd826cf%3A0xbdbbf829f05e9a5d!2sAipl%20Business%20Club%2C%20Sector%2062%2C%20Gurugram%2C%20Haryana%20122098!5e0!3m2!1sen!2sin!4v1754211562552!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
  },
  {
    id: 7,
    name: 'Elan The Mark',
    location: 'Block R, New Palam Vihar Phase 1, Sector 106, Gurgram',
    price: '₹On Request',
    pricePerSqft: '₹On Request',
    sqft: 'On Request Sq Ft',
    bedrooms: 5,
    bathrooms: 5,
    type: 'SHOP, COMMERCIAL',
    category: 'ULTRA_LUXURY',
    status: ['FOR SALE', 'FOR RENT', 'HOT OFFER'],
    rating: 4.9,
    image: ElanTheEmperor,
    featured: true,
    amenities: ['Private Pool', 'Garden', 'Home Theater', 'Wine Cellar', 'Security'],
    addressMap:'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.289764770307!2d77.00450517601296!3d28.500928490043837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1700b8332841%3A0x1a820bf6925742bd!2sElan%20The%20Mark!5e0!3m2!1sen!2sin!4v1754211657266!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
  },
  {
    id: 8,
    name: 'Pioneer Araya',
    location: 'Pioneer Araya, Tower D, Pioneer, Haryana, India',
    price: '₹On Request',
    pricePerSqft: '₹On Request',
    sqft: 'On Request Sq Ft',
    bedrooms: 5,
    bathrooms: 5,
    type: 'APARTMENT, RESIDENTIAL',
    category: 'ULTRA_LUXURY',
    status: ['READY TO MOVE', 'EXCLUSIVE'],
    rating: 4.9,
    image: PioneerAraya,
    featured: true,
    amenities: ['Private Pool', 'Garden', 'Home Theater', 'Wine Cellar', 'Security'],
    addressMap:'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.213483651477!2d77.0861129760106!3d28.412814494023355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d237a6358d52d%3A0x85137a3710a6197!2sPioneer%20Araya%2C%20Tower%20D!5e0!3m2!1sen!2sin!4v1754211151159!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'

  },
  {
    id: 9,
    name: 'Trump Towers',
    location: 'Trump Tower, Golf Course Extension Road, Sector 65, Gurgram, Haryana',
    price: '₹On Request',
    pricePerSqft: '₹On Request',
    sqft: 'On Request Sq Ft',
    bedrooms: 5,
    bathrooms: 5,
    type: 'APARTMENT, RESIDENTIAL',
    category: 'ULTRA_LUXURY',
    status: ['FOR SALE', 'EXCLUSIVE'],
    rating: 4.9,
    image: TrumpTower,
    featured: true,
    amenities: ['Private Pool', 'Garden', 'Home Theater', 'Wine Cellar', 'Security'],
    addressMap:'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.6347789904416!2d77.06961287601024!3d28.400096994596865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d226f68d5844d%3A0xd0bf0c398f09d05e!2sTrump%20Tower!5e0!3m2!1sen!2sin!4v1754211194888!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'

  },
  {
    id: 10,
    name: 'Pioneer Urban Presidia',
    location: 'Pioneer Presidia, Sector 62, Gurgram, Ghata, Haryana, India',
    price: '₹On Request',
    pricePerSqft: '₹On Request',
    sqft: 'On Request Sq Ft',
    bedrooms: 5,
    bathrooms: 5,
    type: 'APARTMENT, RESIDENTIAL',
    category: 'ULTRA_LUXURY',
    status: ['FOR SALE', 'EXCLUSIVE'],
    rating: 4.9,
    image: PioneerUrban,
    featured: true,
    amenities: ['Private Pool', 'Garden', 'Home Theater', 'Wine Cellar', 'Security'],
    addressMap:'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1754.6121159845757!2d77.08775338883909!3d28.412490103071157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d2210efcc50d7%3A0x711f24390ec4fd5d!2sPioneer%20Presidia%2C%20Sector%2062%2C%20Ghata%2C%20Gurugram%2C%20Haryana%20122098!5e0!3m2!1sen!2sin!4v1754211246279!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'

  },
  {
    id: 11,
    name: 'Elan Epic Mall',
    location: 'Elan Epic Mall, Sector 70, Gurgram, Haryana, India',
    price: '₹On Request',
    pricePerSqft: '₹On Request',
    sqft: 'On Request Sq Ft',
    bedrooms: 5,
    bathrooms: 5,
    type: 'SHOP, COMMERCIAL',
    category: 'ULTRA_LUXURY',
    status: ['FOR SALE', 'EXCLUSIVE'],
    rating: 4.9,
    image: ElanTheEmperor,
    featured: true,
    amenities: ['Private Pool', 'Garden', 'Home Theater', 'Wine Cellar', 'Security'],
    addressMap:'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.8954763998113!2d77.02786267601!3d28.39222479495188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d23007483c609%3A0x4bf398ae7e61c375!2sElan%20Epic!5e0!3m2!1sen!2sin!4v1754211750584!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
  },
  {
    id: 12,
    name: 'Sobha International City',
    location: 'Dwarka Expressway, Sector 109, Gurgram, Haryana, India',
    price: '₹On Request',
    pricePerSqft: '₹On Request',
    sqft: 'On Request Sq Ft',
    bedrooms: 5,
    bathrooms: 5,
    type: 'APARTMENT, RESIDENTIAL',
    category: 'ULTRA_LUXURY',
    status: ['FOR SALE', 'EXCLUSIVE'],
    rating: 4.9,
    image: KrisumiWaterfall,
    featured: true,
    amenities: ['Private Pool', 'Garden', 'Home Theater', 'Wine Cellar', 'Security'],
    addressMap:'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.8648188526845!2d76.99439727601327!3d28.51371458946548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d10ad1732bb97%3A0xb3229fb8929e6a8d!2sSobha%20International%20City!5e0!3m2!1sen!2sin!4v1754211291277!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'

  },
  {
    id: 13,
    name: 'M3M Golf Estate',
    location: 'Golf Course Extension Road, Sector 65, Gurgram, Haryana',
    price: '₹On Request',
    pricePerSqft: '₹On Request',
    sqft: 'On Request Sq Ft',
    bedrooms: 5,
    bathrooms: 5,
    type: 'APARTMENT, RESIDENTIAL',
    category: 'ULTRA_LUXURY',
    status: ['FOR SALE', 'FOR RENT', 'EXCLUSIVE'],
    rating: 4.9,
    image: M3Mmansion,
    featured: true,
    amenities: ['Private Pool', 'Garden', 'Home Theater', 'Wine Cellar', 'Security'],
    addressMap:'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.5916321176837!2d77.0613437260102!3d28.401399694538387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d22613759d2ef%3A0x33c234317fc5ea64!2sM3M%20Golfestate!5e0!3m2!1sen!2sin!4v1754211334893!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'

  },
  {
    id: 14,
    name: 'Cygnett Retreat',
    location: 'Pahadi Kothi, Bagar Road, Pangoot, Uttarakhand, India',
    price: '₹On Request',
    pricePerSqft: '₹On Request',
    sqft: 'On Request Sq Ft',
    bedrooms: 5,
    bathrooms: 5,
    type: 'APARTMENT, RESIDENTIAL',
    category: 'ULTRA_LUXURY',
    status: ['FOR SALE', 'FOR RENT', 'EXCLUSIVE'],
    rating: 4.9,
    image: TrinitySkyPlazao,
    featured: true,
    amenities: ['Private Pool', 'Garden', 'Home Theater', 'Wine Cellar', 'Security'],
    addressMap:'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3475.493112242733!2d79.39137807603782!3d29.414380948146913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a0a1003e30499f%3A0xbb9f40126bddcab0!2sCygnett%20Retreat%20Pangot%20bagar%20road%20smanro%20range%20nanital!5e0!3m2!1sen!2sin!4v1754211389578!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'

  },
];

const Commercial = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('featured');
  const [filters, setFilters] = useState({
    priceRange: '',
    propertyType: '',
    bedrooms: '',
    category: '',
  });
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState(null);

  const filteredProperties = useMemo(() => {
    let filtered = properties.filter((property) => {
      const isCommercial = property.type.toLowerCase().includes('shop') || property.type.toLowerCase().includes('office');
      const matchesSearch =
        property.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        property.location.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesType = !filters.propertyType || 
        property.type.split(',').map(t => t.trim()).includes(filters.propertyType);
      const matchesBedrooms = !filters.bedrooms || 
        (!isCommercial && property.bedrooms.toString() === filters.bedrooms);
      const matchesCategory = !filters.category || property.category === filters.category;
      return isCommercial && matchesSearch && matchesType && matchesBedrooms && matchesCategory;
    });

    switch (sortBy) {
      case 'price_low':
        return filtered.sort((a, b) => {
          const priceA = a.price.includes('On Request')
            ? Infinity
            : parseFloat(a.price.replace(/[₹,crore lakh]/g, ''));
          const priceB = b.price.includes('On Request')
            ? Infinity
            : parseFloat(b.price.replace(/[₹,crore lakh]/g, ''));
          return priceA - priceB;
        });
      case 'price_high':
        return filtered.sort((a, b) => {
          const priceA = a.price.includes('On Request')
            ? -Infinity
            : parseFloat(a.price.replace(/[₹,crore lakh]/g, ''));
          const priceB = b.price.includes('On Request')
            ? -Infinity
            : parseFloat(b.price.replace(/[₹,crore lakh]/g, ''));
          return priceB - priceA;
        });
      case 'rating':
        return filtered.sort((a, b) => b.rating - a.rating);
      case 'sqft':
        return filtered.sort((a, b) => {
          const sqftA = a.sqft.includes('On Request')
            ? -Infinity
            : parseInt(a.sqft.split('-')[0]) || parseInt(a.sqft);
          const sqftB = b.sqft.includes('On Request')
            ? -Infinity
            : parseInt(b.sqft.split('-')[0]) || parseInt(b.sqft);
          return sqftB - sqftA;
        });
      default:
        return filtered.sort((a, b) => b.featured - a.featured);
    }
  }, [searchTerm, filters, sortBy]);

  const displayedProperties = showAll ? filteredProperties : filteredProperties.slice(0, 6);

  const handleViewDetails = (property) => {
    setSelectedProperty(property);
    setDrawerOpen(true);
  };

  const handleCloseDrawer = () => {
    setDrawerOpen(false);
    setSelectedProperty(null);
  };

  const PropertyCard = ({ property }) => (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 group">
      <div className="relative overflow-hidden">
        <img
          src={property.image}
          alt={property.name}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          {property.status.map((status) => (
            <span
              key={status}
              className={`px-3 py-1 text-xs font-semibold rounded-full ${
                status === 'FOR SALE'
                  ? 'bg-blue-600 text-white'
                  : status === 'FOR RENT'
                  ? 'bg-green-600 text-white'
                  : status === 'HOT OFFER'
                  ? 'bg-red-500 text-white'
                  : status === 'NEW LAUNCH'
                  ? 'bg-purple-600 text-white'
                  : status === 'EXCLUSIVE'
                  ? 'bg-yellow-500 text-white border-1 border-white'
                  : 'bg-gray-600 text-white'
              }`}
            >
              {status}
            </span>
          ))}
        </div>
        <div className="absolute top-4 right-4 flex gap-2">
          <button className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors">
            <Heart size={16} className="text-gray-600 hover:text-red-500" />
          </button>
          <button className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors">
            <Share size={16} className="text-gray-600" />
          </button>
        </div>
        {property.featured && (
          <div className="absolute bottom-4 left-4">
            <span className="bg-gradient-to-r from-amber-400 to-amber-600 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
              <Star size={12} fill="currentColor" />
              Featured
            </span>
          </div>
        )}
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-1">{property.name}</h3>
            <p className="text-gray-600 flex items-center gap-1">
              <MapPin size={14} />
              {property.location}
            </p>
          </div>
          <div className="flex items-center gap-1">
            <Star size={14} className="text-amber-400 fill-current" />
            <span className="text-sm font-semibold text-gray-700">{property.rating}</span>
          </div>
        </div>

        <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
          <span className="flex items-center gap-1">
            <Bed size={14} />
            {property.bedrooms} Bed
          </span>
          <span className="flex items-center gap-1">
            <Bath size={14} />
            {property.bathrooms} Bath
          </span>
          <span className="flex items-center gap-1">
            <Square size={14} />
            {property.sqft}
          </span>
        </div>

        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="text-2xl font-bold text-gray-900">{property.price}</div>
            <div className="text-sm text-gray-500">{property.pricePerSqft}/sq ft</div>
          </div>
          <span
            className={`px-3 py-1 rounded-full text-xs font-semibold ${
              property.category === 'ULTRA_LUXURY'
                ? 'bg-purple-100 text-purple-800'
                : property.category === 'LUXURY'
                ? 'bg-blue-100 text-blue-800'
                : property.category === 'PREMIUM'
                ? 'bg-green-100 text-green-800'
                : property.category === 'COMPACT'
                ? 'bg-orange-100 text-orange-800'
                : 'bg-gray-100 text-gray-800'
            }`}
          >
            {property.category.replace('_', ' ')}
          </span>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {property.amenities.slice(0, 3).map((amenity) => (
            <span key={amenity} className="px-2 py-1 bg-gray-100 text-gray-700 rounded-lg text-xs">
              {amenity}
            </span>
          ))}
          {property.amenities.length > 3 && (
            <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-lg text-xs">
              +{property.amenities.length - 3} more
            </span>
          )}
        </div>

        <div className="flex gap-3">
          <div
            className="inline-block rounded-[12px] p-[2px]"
            style={{
              background: 'linear-gradient(to right, #c99913, #474236, #000000)',
            }}
          >
            <button
              onClick={() => handleViewDetails(property)}
              className="bg-white text-black px-5 py-2 rounded-[10px] cursor-pointer font-semibold flex items-center justify-center gap-2 hover:shadow-md transition-all duration-200"
              style={{ minWidth: '140px' }}
            >
              <Eye size={18} />
              View Details
            </button>
          </div>
          <button className="px-4 py-2 border-2 border-blue-600 text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-colors">
            Contact
          </button>
        </div>
      </div>
    </div>
  );

  const filterSort = (optionA, optionB) => {
    const labelA = optionA?.label?.toLowerCase() || '';
    const labelB = optionB?.label?.toLowerCase() || '';
    return labelA.localeCompare(labelB);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200  top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Commercial Properties</h1>
              <p className="text-gray-600 mt-1">{filteredProperties.length} properties available</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex bg-gray-100 rounded-xl p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === 'grid' ? 'bg-white shadow-sm' : 'hover:bg-gray-200'
                  }`}
                >
                  <Grid size={20} />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === 'list' ? 'bg-white shadow-sm' : 'hover:bg-gray-200'
                  }`}
                >
                  <List size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* Search and Filters */}
          <div className="flex flex-col lg:flex-row gap-4">
            <Search
              placeholder="Search by property name or location..."
              enterButton="Search"
              size="large"
              onSearch={(value) => setSearchTerm(value)}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ borderRadius: '12px', overflow: 'hidden' }}
            />
            <div className="flex gap-3">
              <Button
                onClick={() => setShowFilters(!showFilters)}
                size="large"
                style={{
                  borderRadius: '12px',
                  padding: '0 20px',
                  display: 'flex',
                  alignItems: 'center',
                }}
        >
                <FilterOutlined />
                Filters
                <DownOutlined
                  style={{
                    marginLeft: '8px',
                    transition: 'transform 0.3s',
                    transform: showFilters ? 'rotate(180deg)' : 'rotate(0deg)',
                  }}
                />
              </Button>
              <Select
                value={sortBy}
                onChange={(value) => setSortBy(value)}
                size="large"
                style={{ width: 220, borderRadius: '12px' }}
              >
                <Option value="featured">Featured First</Option>
                <Option value="price_low">Price: Low to High</Option>
                <Option value="price_high">Price: High to Low</Option>
                <Option value="rating">Highest Rated</Option>
                <Option value="sqft">Largest First</Option>
              </Select>
            </div>
          </div>

          {/* Filter Panel */}
          {showFilters && (
            <div className="mt-4 p-6 bg-gray-50 rounded-xl">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <Select
                  showSearch
                  value={filters.propertyType}
                  onChange={(value) => setFilters({ ...filters, propertyType: value })}
                  placeholder="All Property Types"
                  optionFilterProp="label"
                  filterSort={filterSort}
                  size="large"
                  style={{ borderRadius: '12px' }}
                  options={[
                    { value: '', label: 'All Property Types' },
                    { value: 'SHOP', label: 'Shop' },
                    { value: 'OFFICE', label: 'Office' },
                  ]}
                />
                <Select
                  showSearch
                  value={filters.bedrooms}
                  onChange={(value) => setFilters({ ...filters, bedrooms: value })}
                  placeholder="Any Bedrooms"
                  optionFilterProp="label"
                  filterSort={filterSort}
                  size="large"
                  style={{ borderRadius: '12px' }}
                  options={[
                    { value: '', label: 'Any Bedrooms' },
                    { value: '1', label: '1 Bedroom' },
                    { value: '2', label: '2 Bedrooms' },
                    { value: '3', label: '3 Bedrooms' },
                    { value: '4', label: '4 Bedrooms' },
                    { value: '5', label: '5+ Bedrooms' },
                  ]}
                />
                <Select
                  showSearch
                  value={filters.category}
                  onChange={(value) => setFilters({ ...filters, category: value })}
                  placeholder="All Categories"
                  optionFilterProp="label"
                  filterSort={filterSort}
                  size="large"
                  style={{ borderRadius: '12px' }}
                  options={[
                    { value: '', label: 'All Categories' },
                    { value: 'AFFORDABLE', label: 'Affordable' },
                    { value: 'COMPACT', label: 'Compact' },
                    { value: 'PREMIUM', label: 'Premium' },
                    { value: 'LUXURY', label: 'Luxury' },
                    { value: 'ULTRA_LUXURY', label: 'Ultra Luxury' },
                  ]}
                />
                <Button
                  onClick={() => setFilters({ priceRange: '', propertyType: '', bedrooms: '', category: '' })}
                  size="large"
                  type="primary"
                  style={{
                    borderRadius: '12px',
                    background: '#2563eb',
                    borderColor: '#2563eb',
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Properties Grid */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {filteredProperties.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-gray-400 mb-4">
              <SearchIcon size={64} className="mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No properties found</h3>
            <p className="text-gray-500">Try adjusting your search criteria or filters</p>
          </div>
        ) : (
          <>
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900">All Commercial Properties</h2>
            </div>
            <div
              className={`grid gap-8 ${
                viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'
              }`}
            >
              {displayedProperties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
            {filteredProperties.length > 6 && (
              <div className="mt-8 flex justify-center gap-4">
                {!showAll && (
                  <Button
                    type="primary"
                    size="large"
                    onClick={() => setShowAll(true)}
                    style={{
                      borderRadius: '12px',
                      background: '#2563eb',
                      borderColor: '#2563eb',
                      minWidth: '120px',
                    }}
                  >
                    View More
                  </Button>
                )}
                {showAll && (
                  <Button
                    type="default"
                    size="large"
                    onClick={() => setShowAll(false)}
                    style={{
                      borderRadius: '12px',
                      minWidth: '120px',
                    }}
                  >
                    View Less
                  </Button>
                )}
              </div>
            )}
          </>
        )}
      </div>

      {/* View Details Drawer */}
      <ViewDetailsDrawer
        open={drawerOpen}
        onClose={handleCloseDrawer}
        project={selectedProperty}
      />
    </div>
  );
};

export default Commercial;