'use client';

import { useState, useEffect, useCallback, JSX } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import DashboardLayout from '../../components/layout/DashboardLayout';
import Pagination from '../..//dashboard/Pagination';
import { 
  FiHome,
  FiUser,
  FiSettings,
  FiMail,
  FiKey,
  FiBell,
  FiCalendar,
  FiClock,
  FiHeart,
  FiStar,
  FiBookmark,
  FiFlag,
  FiTrash2,
  FiEdit,
  FiCopy,
  FiSave,
  FiUpload,
  FiDownload,
  FiCamera,
  FiVideo,
  FiMusic,
  FiImage,
  FiFile,
  FiFolder,
  FiDatabase,
  FiCloud,
  FiServer,
  FiCpu,
  FiCode,
  FiTerminal,
  FiBox,
  FiGrid,
  FiLayers,
  FiLayout,
  FiMenu,
  FiX,
  FiCheck,
  FiAlertCircle,
  FiAlertTriangle,
  FiInfo,
  FiHelpCircle,
  FiSearch,
  FiZoomIn,
  FiZoomOut,
  FiMaximize,
  FiMinimize,
  FiPlus,
  FiMinus,
  FiArrowUp,
  FiArrowDown,
  FiArrowLeft,
  FiArrowRight,
  FiChevronUp,
  FiChevronDown,
  FiChevronLeft,
  FiChevronRight,
  FiChevronsUp,
  FiChevronsDown,
  FiChevronsLeft,
  FiChevronsRight,
  FiExternalLink,
  FiLink,
  FiPaperclip,
  FiSend,
  FiMessageCircle,
  FiMessageSquare,
  FiPhone,
  FiPhoneCall,
  FiVideoOff,
  FiMic,
  FiMicOff,
  FiVolume2,
  FiVolumeX,
  FiHeadphones,
  FiRadio,
  FiActivity,
  FiBarChart2,
  FiPieChart,
  FiTrendingUp,
  FiTrendingDown,
  FiDollarSign,
  FiCreditCard,
  FiShoppingCart,
  FiGift,
  FiAward,
  FiZap,
  FiWind,
  FiSun,
  FiMoon,
  FiCloudRain,
  FiCloudSnow,
  FiCloudLightning,
  FiDroplet,
  FiThermometer,
  FiCompass,
  FiMap,
  FiMapPin,
  FiNavigation,
  FiAnchor,
  FiFeather,
  FiGlobe,
  FiTool,
  FiScissors,
  FiPenTool,
  FiEye,
  FiEyeOff,
  FiLock,
  FiUnlock,
  FiShield,
  FiShieldOff
} from 'react-icons/fi';

// ICONS DATA
const iconCategories = [
  { id: 'all', name: 'All Icons', color: '#94a3b8' },
  { id: 'ui', name: 'UI & Navigation', color: '#c5e6ff' },
  { id: 'media', name: 'Media & Files', color: '#ffb7c5' },
  { id: 'arrows', name: 'Arrows & Chevrons', color: '#d2b7ff' },
  { id: 'communication', name: 'Communication', color: '#b7ffca' },
  { id: 'weather', name: 'Weather & Nature', color: '#ffb7c5' },
  { id: 'tools', name: 'Tools & Actions', color: '#c5e6ff' }
];

interface IconItem {
  id: string;
  name: string;
  icon: JSX.Element;
  category: string;
  tags: string[];
}

const iconData: IconItem[] = [
  // UI & Navigation
  { id: '1', name: 'FiHome', icon: <FiHome size={24} />, category: 'ui', tags: ['home', 'house', 'dashboard'] },
  { id: '2', name: 'FiUser', icon: <FiUser size={24} />, category: 'ui', tags: ['user', 'profile', 'avatar'] },
  { id: '3', name: 'FiSettings', icon: <FiSettings size={24} />, category: 'ui', tags: ['settings', 'gear', 'preferences'] },
  { id: '4', name: 'FiMail', icon: <FiMail size={24} />, category: 'communication', tags: ['mail', 'email', 'message'] },
  { id: '5', name: 'FiLock', icon: <FiLock size={24} />, category: 'ui', tags: ['lock', 'security', 'private'] },
  { id: '6', name: 'FiKey', icon: <FiKey size={24} />, category: 'ui', tags: ['key', 'password', 'access'] },
  { id: '7', name: 'FiBell', icon: <FiBell size={24} />, category: 'ui', tags: ['bell', 'notification', 'alert'] },
  { id: '8', name: 'FiCalendar', icon: <FiCalendar size={24} />, category: 'ui', tags: ['calendar', 'date', 'event'] },
  { id: '9', name: 'FiClock', icon: <FiClock size={24} />, category: 'ui', tags: ['clock', 'time', 'schedule'] },
  { id: '10', name: 'FiHeart', icon: <FiHeart size={24} />, category: 'ui', tags: ['heart', 'like', 'favorite'] },
  { id: '11', name: 'FiStar', icon: <FiStar size={24} />, category: 'ui', tags: ['star', 'rating', 'favorite'] },
  { id: '12', name: 'FiBookmark', icon: <FiBookmark size={24} />, category: 'ui', tags: ['bookmark', 'save', 'tag'] },
  { id: '13', name: 'FiFlag', icon: <FiFlag size={24} />, category: 'ui', tags: ['flag', 'report', 'milestone'] },
  { id: '14', name: 'FiTrash2', icon: <FiTrash2 size={24} />, category: 'tools', tags: ['trash', 'delete', 'remove'] },
  { id: '15', name: 'FiEdit', icon: <FiEdit size={24} />, category: 'tools', tags: ['edit', 'pencil', 'write'] },
  { id: '16', name: 'FiCopy', icon: <FiCopy size={24} />, category: 'tools', tags: ['copy', 'duplicate', 'clone'] },
  { id: '17', name: 'FiSave', icon: <FiSave size={24} />, category: 'tools', tags: ['save', 'disk', 'store'] },
  { id: '18', name: 'FiUpload', icon: <FiUpload size={24} />, category: 'media', tags: ['upload', 'export', 'share'] },
  { id: '19', name: 'FiDownload', icon: <FiDownload size={24} />, category: 'media', tags: ['download', 'import', 'save'] },
  { id: '20', name: 'FiCamera', icon: <FiCamera size={24} />, category: 'media', tags: ['camera', 'photo', 'image'] },
  { id: '21', name: 'FiVideo', icon: <FiVideo size={24} />, category: 'media', tags: ['video', 'camera', 'record'] },
  { id: '22', name: 'FiMusic', icon: <FiMusic size={24} />, category: 'media', tags: ['music', 'audio', 'sound'] },
  { id: '23', name: 'FiImage', icon: <FiImage size={24} />, category: 'media', tags: ['image', 'picture', 'photo'] },
  { id: '24', name: 'FiFile', icon: <FiFile size={24} />, category: 'media', tags: ['file', 'document', 'paper'] },
  { id: '25', name: 'FiFolder', icon: <FiFolder size={24} />, category: 'media', tags: ['folder', 'directory', 'storage'] },
  { id: '26', name: 'FiDatabase', icon: <FiDatabase size={24} />, category: 'media', tags: ['database', 'data', 'storage'] },
  { id: '27', name: 'FiCloud', icon: <FiCloud size={24} />, category: 'weather', tags: ['cloud', 'storage', 'online'] },
  { id: '28', name: 'FiServer', icon: <FiServer size={24} />, category: 'media', tags: ['server', 'hosting', 'backend'] },
  { id: '29', name: 'FiCpu', icon: <FiCpu size={24} />, category: 'media', tags: ['cpu', 'processor', 'hardware'] },
  { id: '30', name: 'FiCode', icon: <FiCode size={24} />, category: 'media', tags: ['code', 'developer', 'programming'] },
  { id: '31', name: 'FiTerminal', icon: <FiTerminal size={24} />, category: 'media', tags: ['terminal', 'command', 'cli'] },
  { id: '32', name: 'FiBox', icon: <FiBox size={24} />, category: 'ui', tags: ['box', 'cube', 'package'] },
  { id: '33', name: 'FiGrid', icon: <FiGrid size={24} />, category: 'ui', tags: ['grid', 'layout', 'dashboard'] },
  { id: '34', name: 'FiLayers', icon: <FiLayers size={24} />, category: 'ui', tags: ['layers', 'stack', 'design'] },
  { id: '35', name: 'FiLayout', icon: <FiLayout size={24} />, category: 'ui', tags: ['layout', 'design', 'template'] },
  { id: '36', name: 'FiMenu', icon: <FiMenu size={24} />, category: 'ui', tags: ['menu', 'hamburger', 'navigation'] },
  { id: '37', name: 'FiX', icon: <FiX size={24} />, category: 'ui', tags: ['close', 'x', 'cancel'] },
  { id: '38', name: 'FiCheck', icon: <FiCheck size={24} />, category: 'ui', tags: ['check', 'tick', 'done'] },
  { id: '39', name: 'FiAlertCircle', icon: <FiAlertCircle size={24} />, category: 'ui', tags: ['alert', 'error', 'warning'] },
  { id: '40', name: 'FiAlertTriangle', icon: <FiAlertTriangle size={24} />, category: 'ui', tags: ['warning', 'danger', 'caution'] },
  { id: '41', name: 'FiInfo', icon: <FiInfo size={24} />, category: 'ui', tags: ['info', 'information', 'help'] },
  { id: '42', name: 'FiHelpCircle', icon: <FiHelpCircle size={24} />, category: 'ui', tags: ['help', 'question', 'support'] },
  { id: '43', name: 'FiSearch', icon: <FiSearch size={24} />, category: 'ui', tags: ['search', 'find', 'magnify'] },
  
  // Arrows & Chevrons
  { id: '44', name: 'FiArrowUp', icon: <FiArrowUp size={24} />, category: 'arrows', tags: ['arrow', 'up', 'top'] },
  { id: '45', name: 'FiArrowDown', icon: <FiArrowDown size={24} />, category: 'arrows', tags: ['arrow', 'down', 'bottom'] },
  { id: '46', name: 'FiArrowLeft', icon: <FiArrowLeft size={24} />, category: 'arrows', tags: ['arrow', 'left', 'back'] },
  { id: '47', name: 'FiArrowRight', icon: <FiArrowRight size={24} />, category: 'arrows', tags: ['arrow', 'right', 'next'] },
  { id: '48', name: 'FiChevronUp', icon: <FiChevronUp size={24} />, category: 'arrows', tags: ['chevron', 'up', 'collapse'] },
  { id: '49', name: 'FiChevronDown', icon: <FiChevronDown size={24} />, category: 'arrows', tags: ['chevron', 'down', 'expand'] },
  { id: '50', name: 'FiChevronLeft', icon: <FiChevronLeft size={24} />, category: 'arrows', tags: ['chevron', 'left', 'previous'] },
  { id: '51', name: 'FiChevronRight', icon: <FiChevronRight size={24} />, category: 'arrows', tags: ['chevron', 'right', 'next'] },
  { id: '52', name: 'FiChevronsUp', icon: <FiChevronsUp size={24} />, category: 'arrows', tags: ['chevrons', 'up', 'top'] },
  { id: '53', name: 'FiChevronsDown', icon: <FiChevronsDown size={24} />, category: 'arrows', tags: ['chevrons', 'down', 'bottom'] },
  { id: '54', name: 'FiChevronsLeft', icon: <FiChevronsLeft size={24} />, category: 'arrows', tags: ['chevrons', 'left', 'first'] },
  { id: '55', name: 'FiChevronsRight', icon: <FiChevronsRight size={24} />, category: 'arrows', tags: ['chevrons', 'right', 'last'] },
  { id: '56', name: 'FiExternalLink', icon: <FiExternalLink size={24} />, category: 'arrows', tags: ['external', 'link', 'open'] },
  { id: '57', name: 'FiLink', icon: <FiLink size={24} />, category: 'arrows', tags: ['link', 'chain', 'url'] },
  
  // Communication
  { id: '58', name: 'FiSend', icon: <FiSend size={24} />, category: 'communication', tags: ['send', 'message', 'paper-plane'] },
  { id: '59', name: 'FiMessageCircle', icon: <FiMessageCircle size={24} />, category: 'communication', tags: ['message', 'chat', 'bubble'] },
  { id: '60', name: 'FiMessageSquare', icon: <FiMessageSquare size={24} />, category: 'communication', tags: ['message', 'chat', 'square'] },
  { id: '61', name: 'FiPhone', icon: <FiPhone size={24} />, category: 'communication', tags: ['phone', 'call', 'contact'] },
  { id: '62', name: 'FiPhoneCall', icon: <FiPhoneCall size={24} />, category: 'communication', tags: ['phone', 'call', 'ring'] },
  { id: '63', name: 'FiMic', icon: <FiMic size={24} />, category: 'communication', tags: ['mic', 'microphone', 'voice'] },
  { id: '64', name: 'FiMicOff', icon: <FiMicOff size={24} />, category: 'communication', tags: ['mic', 'mute', 'off'] },
  { id: '65', name: 'FiVideoOff', icon: <FiVideoOff size={24} />, category: 'communication', tags: ['video', 'camera', 'off'] },
  
  // Weather & Nature
  { id: '66', name: 'FiSun', icon: <FiSun size={24} />, category: 'weather', tags: ['sun', 'light', 'day'] },
  { id: '67', name: 'FiMoon', icon: <FiMoon size={24} />, category: 'weather', tags: ['moon', 'night', 'dark'] },
  { id: '68', name: 'FiCloudRain', icon: <FiCloudRain size={24} />, category: 'weather', tags: ['rain', 'cloud', 'weather'] },
  { id: '69', name: 'FiCloudSnow', icon: <FiCloudSnow size={24} />, category: 'weather', tags: ['snow', 'winter', 'cold'] },
  { id: '70', name: 'FiCloudLightning', icon: <FiCloudLightning size={24} />, category: 'weather', tags: ['lightning', 'storm', 'thunder'] },
  { id: '71', name: 'FiDroplet', icon: <FiDroplet size={24} />, category: 'weather', tags: ['droplet', 'water', 'rain'] },
  { id: '72', name: 'FiWind', icon: <FiWind size={24} />, category: 'weather', tags: ['wind', 'air', 'breeze'] },
  { id: '73', name: 'FiCompass', icon: <FiCompass size={24} />, category: 'weather', tags: ['compass', 'direction', 'navigation'] },
  { id: '74', name: 'FiMap', icon: <FiMap size={24} />, category: 'weather', tags: ['map', 'location', 'travel'] },
  { id: '75', name: 'FiMapPin', icon: <FiMapPin size={24} />, category: 'weather', tags: ['pin', 'location', 'marker'] },
  { id: '76', name: 'FiFeather', icon: <FiFeather size={24} />, category: 'weather', tags: ['feather', 'light', 'write'] },
  { id: '77', name: 'FiGlobe', icon: <FiGlobe size={24} />, category: 'weather', tags: ['globe', 'world', 'earth'] },
  
  // Tools & Actions
  { id: '78', name: 'FiTool', icon: <FiTool size={24} />, category: 'tools', tags: ['tool', 'fix', 'repair'] },
  { id: '81', name: 'FiScissors', icon: <FiScissors size={24} />, category: 'tools', tags: ['scissors', 'cut', 'trim'] },
  { id: '82', name: 'FiPenTool', icon: <FiPenTool size={24} />, category: 'tools', tags: ['pen', 'draw', 'design'] },
  { id: '86', name: 'FiEye', icon: <FiEye size={24} />, category: 'tools', tags: ['eye', 'view', 'show'] },
  { id: '87', name: 'FiEyeOff', icon: <FiEyeOff size={24} />, category: 'tools', tags: ['eye', 'hide', 'invisible'] },
  { id: '88', name: 'FiUnlock', icon: <FiUnlock size={24} />, category: 'tools', tags: ['unlock', 'open', 'security'] },
  { id: '89', name: 'FiShield', icon: <FiShield size={24} />, category: 'tools', tags: ['shield', 'security', 'protection'] },
  { id: '90', name: 'FiZap', icon: <FiZap size={24} />, category: 'tools', tags: ['zap', 'lightning', 'energy'] },
  { id: '91', name: 'FiAward', icon: <FiAward size={24} />, category: 'tools', tags: ['award', 'achievement', 'badge'] },
  { id: '92', name: 'FiActivity', icon: <FiActivity size={24} />, category: 'tools', tags: ['activity', 'graph', 'trend'] },
  { id: '93', name: 'FiBarChart2', icon: <FiBarChart2 size={24} />, category: 'tools', tags: ['chart', 'graph', 'stats'] },
  { id: '94', name: 'FiTrendingUp', icon: <FiTrendingUp size={24} />, category: 'tools', tags: ['trend', 'up', 'growth'] },
  { id: '95', name: 'FiDollarSign', icon: <FiDollarSign size={24} />, category: 'tools', tags: ['dollar', 'money', 'payment'] },
  { id: '96', name: 'FiCreditCard', icon: <FiCreditCard size={24} />, category: 'tools', tags: ['credit', 'card', 'payment'] },
  { id: '97', name: 'FiShoppingCart', icon: <FiShoppingCart size={24} />, category: 'tools', tags: ['cart', 'shop', 'store'] },
  { id: '98', name: 'FiGift', icon: <FiGift size={24} />, category: 'tools', tags: ['gift', 'present', 'birthday'] }
];

const ITEMS_PER_PAGE = 12;

// Helper function for category colors
const getCategoryColor = (category: string) => {
  switch(category) {
    case 'ui': return '#c5e6ff';
    case 'media': return '#ffb7c5';
    case 'arrows': return '#d2b7ff';
    case 'communication': return '#b7ffca';
    case 'weather': return '#ffb7c5';
    case 'tools': return '#c5e6ff';
    default: return '#94a3b8';
  }
};

export default function IconsGalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [copiedName, setCopiedName] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);

  useEffect(() => {
    scrollToTop();
  }, [scrollToTop]);

  // Filter icons based on category and search
  const filteredIcons = iconData.filter(icon => {
    const matchesCategory = selectedCategory === 'all' || icon.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      icon.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      icon.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  // Pagination logic
  const totalItems = filteredIcons.length;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const displayedIcons = filteredIcons.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setCurrentPage(1);
    scrollToTop();
  };

  const handlePageChange = async (page: number) => {
    setIsLoading(true);
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    });
    setCurrentPage(page);
    await new Promise(resolve => setTimeout(resolve, 400));
    setIsLoading(false);
  };

  const copyToClipboard = (text: string, name: string) => {
    navigator.clipboard.writeText(text);
    setCopiedName(name);
    setTimeout(() => setCopiedName(null), 2000);
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  // Skeleton Component
  const IconCardSkeleton = () => (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden p-6">
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="w-16 h-16 bg-gray-200 rounded-xl animate-pulse" />
        <div className="w-32 h-5 bg-gray-200 rounded animate-pulse" />
        <div className="w-24 h-8 bg-gray-200 rounded-lg animate-pulse" />
      </div>
    </div>
  );

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-4"
        >
          <div className="flex items-center gap-3">
            <div 
              className="w-12 h-12 rounded-xl flex items-center justify-center"
              style={{ backgroundColor: '#d2b7ff' }}
            >
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">React Icons Gallery</h1>
              <p className="text-gray-600">Feather Icons - Complete collection with names and live previews</p>
            </div>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-gray-900">{iconData.length}</span>
              <span className="text-gray-600">Total Icons</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-gray-900">{iconCategories.length - 1}</span>
              <span className="text-gray-600">Categories</span>
            </div>
          </div>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="relative"
        >
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <FiSearch className="text-gray-400" size={20} />
          </div>
          <input
            type="text"
            placeholder="Search icons by name or tag (e.g., home, user, arrow)..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCurrentPage(1);
            }}
            className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-black focus:ring-0 transition-colors outline-none"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600"
            >
              <FiX size={20} />
            </button>
          )}
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3">
          {iconCategories.map((category, index) => {
            const isSelected = selectedCategory === category.id;
            return (
              <motion.button
                key={category.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => handleCategoryChange(category.id)}
                className="relative px-4 py-2 rounded-lg text-sm font-medium transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                style={{
                  backgroundColor: isSelected ? category.color : 'transparent',
                  color: isSelected ? '#000' : '#64748b',
                  border: isSelected ? 'none' : '1px solid #e2e8f0'
                }}
                whileHover={!isSelected ? { scale: 1.05, backgroundColor: '#f8fafc' } : {}}
                whileTap={{ scale: 0.95 }}
              >
                {category.name}
                {isSelected && (
                  <motion.div
                    layoutId="activeIconCategory"
                    className="absolute inset-0 rounded-lg"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </motion.button>
            );
          })}
        </div>

        {/* Results count */}
        <div className="flex justify-between items-center">
          <p className="text-sm text-gray-600">
            Showing <span className="font-semibold text-gray-900">{displayedIcons.length}</span> of{' '}
            <span className="font-semibold text-gray-900">{filteredIcons.length}</span> icons
          </p>
          <p className="text-sm text-gray-600">
            Page {currentPage} of {totalPages || 1}
          </p>
        </div>

        {/* Icons Grid */}
        <AnimatePresence mode="wait">
          {isLoading ? (
            <motion.div
              key="skeleton"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
            >
              {Array.from({ length: ITEMS_PER_PAGE }).map((_, index) => (
                <IconCardSkeleton key={index} />
              ))}
            </motion.div>
          ) : (
            <motion.div
              key={selectedCategory + currentPage + searchQuery}
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, y: 20 }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
            >
              {displayedIcons.map((icon, index) => (
                <motion.div
                  key={icon.id}
                  variants={fadeInUp}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="bg-black rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all p-6 group"
                >
                  <div className="flex flex-col items-center text-center space-y-4">
                    {/* Icon Preview */}
                    <div 
                      className="w-16 h-16 rounded-xl flex items-center justify-center transition-all group-hover:scale-110"
                      style={{ 
                        backgroundColor: `${getCategoryColor(icon.category)}20`,
                        color: getCategoryColor(icon.category)
                      }}
                    >
                      {icon.icon}
                    </div>
                    
                    {/* Icon Name */}
                    <div className="space-y-1">
                      <h3 className="font-mono text-sm font-medium text-white break-all">
                        {icon.name}
                      </h3>
                      <span 
                        className="inline-block px-2 py-0.5 rounded-full text-xs"
                        style={{ 
                          backgroundColor: `${getCategoryColor(icon.category)}20`,
                          color: getCategoryColor(icon.category)
                        }}
                      >
                        {icon.category}
                      </span>
                    </div>
                    
                    {/* Copy Button */}
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => copyToClipboard(icon.name, icon.id)}
                      className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-xs font-medium transition-all"
                      style={{ 
                        backgroundColor: copiedName === icon.id ? '#0eda44' : '#131414',
                        color: copiedName === icon.id ? '#000' : '#ccc9c9'
                      }}
                    >
                      {copiedName === icon.id ? (
                        <>
                          <FiCheck size={14} />
                          <span>Copied!</span>
                        </>
                      ) : (
                        <>
                          <FiCopy size={14} />
                          <span>Copy name</span>
                        </>
                      )}
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Empty State */}
        {!isLoading && displayedIcons.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div 
              className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6"
              style={{ backgroundColor: '#ffb7c520' }}
            >
              <FiAlertCircle className="w-10 h-10" style={{ color: '#ffb7c5' }} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No icons found</h3>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">
              {searchQuery 
                ? `No icons match "${searchQuery}". Try a different search term or category.`
                : 'No icons available in this category.'}
            </p>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
              >
                Clear Search
              </button>
            )}
          </motion.div>
        )}

        {/* Pagination */}
        {!isLoading && totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
            isLoading={isLoading}
          />
        )}
      </div>
    </DashboardLayout>
  );
}