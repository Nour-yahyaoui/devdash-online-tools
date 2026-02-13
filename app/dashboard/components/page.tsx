'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FiCopy, FiCheck, FiEye, FiCode, 
  FiGrid, FiLayout, FiBox, FiSmartphone,
  FiMenu, FiX, FiHeart, FiStar,
  FiArrowRight, FiArrowLeft, FiMail,
  FiLock, FiUser, FiSearch, FiBell,
  FiShoppingCart, FiHome, FiInfo
} from 'react-icons/fi';
import DashboardLayout from '../../components/layout/DashboardLayout';

// ============================================
// COMPONENTS DATA
// ============================================
interface ComponentItem {
  id: number;
  name: string;
  category: 'buttons' | 'cards' | 'forms' | 'navbars' | 'footers' | 'sidebars' | 'headers' | 'modals' | 'alerts' | 'badges';
  description: string;
  code: string;
  preview: string;
  color: string;
}

const components: ComponentItem[] = [
  // ========== BUTTONS ==========
  {
    id: 1,
    name: "Primary Button",
    category: 'buttons',
    description: "Standard primary button for main actions",
    code: `<button class="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors">
  Click me
</button>`,
    preview: `<button class="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors">
  Click me
</button>`,
    color: '#c5e6ff'
  },
  {
    id: 2,
    name: "Outline Button",
    category: 'buttons',
    description: "Elegant outline button for secondary actions",
    code: `<button class="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-medium py-2 px-4 rounded-lg transition-colors">
  Outline Button
</button>`,
    preview: `<button class="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-medium py-2 px-4 rounded-lg transition-colors">
  Outline Button
</button>`,
    color: '#c5e6ff'
  },
  {
    id: 3,
    name: "Gradient Button",
    category: 'buttons',
    description: "Eye-catching gradient button",
    code: `<button class="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium py-2 px-4 rounded-lg transition-all shadow-lg">
  Gradient Button
</button>`,
    preview: `<button class="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium py-2 px-4 rounded-lg transition-all shadow-lg">
  Gradient Button
</button>`,
    color: '#c5e6ff'
  },
  {
    id: 4,
    name: "Icon Button",
    category: 'buttons',
    description: "Button with icon for better UX",
    code: `<button class="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg transition-colors flex items-center gap-2">
  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
  </svg>
  Save Changes
</button>`,
    preview: `<button class="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg transition-colors flex items-center gap-2">
  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
  </svg>
  Save Changes
</button>`,
    color: '#c5e6ff'
  },

  // ========== CARDS ==========
  {
    id: 5,
    name: "Product Card",
    category: 'cards',
    description: "Beautiful product card with image and price",
    code: `<div class="max-w-sm rounded-xl overflow-hidden shadow-lg bg-white">
  <img class="w-full h-48 object-cover" src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop" alt="Product">
  <div class="p-6">
    <h3 class="font-bold text-xl mb-2">Premium Watch</h3>
    <p class="text-gray-700 text-base mb-4">Elegant timepiece with leather strap</p>
    <div class="flex items-center justify-between">
      <span class="text-2xl font-bold text-gray-900">$299</span>
      <button class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm">
        Add to Cart
      </button>
    </div>
  </div>
</div>`,
    preview: `<div class="max-w-sm rounded-xl overflow-hidden shadow-lg bg-white">
  <img class="w-full h-32 object-cover" src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=200&fit=crop" alt="Product">
  <div class="p-4">
    <h3 class="font-bold text-lg mb-1">Premium Watch</h3>
    <p class="text-gray-600 text-sm mb-2">Elegant timepiece</p>
    <div class="flex items-center justify-between">
      <span class="text-xl font-bold">$299</span>
      <button class="bg-blue-600 text-white px-3 py-1 rounded text-xs">Add</button>
    </div>
  </div>
</div>`,
    color: '#d2b7ff'
  },
  {
    id: 6,
    name: "Profile Card",
    category: 'cards',
    description: "User profile card with avatar and stats",
    code: `<div class="max-w-sm rounded-xl overflow-hidden shadow-lg bg-white p-6 text-center">
  <img class="w-24 h-24 rounded-full mx-auto mb-4 object-cover" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop" alt="Profile">
  <h3 class="font-bold text-xl mb-1">John Doe</h3>
  <p class="text-gray-600 mb-4">Product Designer</p>
  <div class="flex justify-center gap-4 mb-4">
    <div>
      <span class="font-bold text-lg">2.5k</span>
      <p class="text-gray-500 text-sm">Followers</p>
    </div>
    <div>
      <span class="font-bold text-lg">345</span>
      <p class="text-gray-500 text-sm">Following</p>
    </div>
  </div>
  <button class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg w-full">
    Follow
  </button>
</div>`,
    preview: `<div class="max-w-sm rounded-xl overflow-hidden shadow-lg bg-white p-4 text-center">
  <img class="w-16 h-16 rounded-full mx-auto mb-2 object-cover" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop" alt="Profile">
  <h3 class="font-bold text-lg">John Doe</h3>
  <p class="text-gray-600 text-sm mb-2">Designer</p>
  <div class="flex justify-center gap-3 mb-3">
    <div><span class="font-bold">2.5k</span><p class="text-xs">Followers</p></div>
    <div><span class="font-bold">345</span><p class="text-xs">Following</p></div>
  </div>
  <button class="bg-blue-600 text-white px-4 py-1 rounded text-sm w-full">Follow</button>
</div>`,
    color: '#d2b7ff'
  },

  // ========== FORMS ==========
  {
    id: 7,
    name: "Login Form",
    category: 'forms',
    description: "Clean login form with email and password",
    code: `<div class="max-w-md mx-auto bg-white p-8 rounded-xl shadow-lg">
  <h2 class="text-2xl font-bold mb-6 text-center">Welcome Back</h2>
  <form>
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2">Email</label>
      <input type="email" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="your@email.com">
    </div>
    <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2">Password</label>
      <input type="password" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="••••••••">
    </div>
    <button class="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors">
      Sign In
    </button>
  </form>
</div>`,
    preview: `<div class="max-w-sm mx-auto bg-white p-4 rounded-xl shadow-lg">
  <h2 class="text-xl font-bold mb-3 text-center">Login</h2>
  <input type="email" placeholder="Email" class="w-full px-3 py-2 border rounded-lg mb-2 text-sm" value="user@test.com">
  <input type="password" placeholder="Password" class="w-full px-3 py-2 border rounded-lg mb-3 text-sm" value="123456">
  <button class="w-full bg-blue-600 text-white py-2 rounded-lg text-sm">Sign In</button>
</div>`,
    color: '#ffb7c5'
  },
  {
    id: 8,
    name: "Signup Form",
    category: 'forms',
    description: "Complete signup form with name, email, password",
    code: `<div class="max-w-md mx-auto bg-white p-8 rounded-xl shadow-lg">
  <h2 class="text-2xl font-bold mb-6 text-center">Create Account</h2>
  <form>
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2">Full Name</label>
      <input type="text" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="John Doe">
    </div>
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2">Email</label>
      <input type="email" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="john@example.com">
    </div>
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2">Password</label>
      <input type="password" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="••••••••">
    </div>
    <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2">Confirm Password</label>
      <input type="password" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="••••••••">
    </div>
    <button class="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg transition-colors">
      Sign Up
    </button>
  </form>
</div>`,
    preview: `<div class="max-w-sm mx-auto bg-white p-4 rounded-xl shadow-lg">
  <h2 class="text-xl font-bold mb-3 text-center">Sign Up</h2>
  <input type="text" placeholder="Name" class="w-full px-3 py-2 border rounded-lg mb-2 text-sm" value="John">
  <input type="email" placeholder="Email" class="w-full px-3 py-2 border rounded-lg mb-2 text-sm" value="john@test.com">
  <input type="password" placeholder="Password" class="w-full px-3 py-2 border rounded-lg mb-3 text-sm" value="123456">
  <button class="w-full bg-green-600 text-white py-2 rounded-lg text-sm">Create</button>
</div>`,
    color: '#ffb7c5'
  },

  // ========== NAVBARS ==========
  {
    id: 9,
    name: "Simple Navbar",
    category: 'navbars',
    description: "Clean navigation bar with links",
    code: `<nav class="bg-white shadow-lg">
  <div class="max-w-6xl mx-auto px-4">
    <div class="flex justify-between items-center h-16">
      <div class="flex items-center gap-8">
        <h1 class="text-xl font-bold text-gray-800">Logo</h1>
        <div class="hidden md:flex gap-6">
          <a href="#" class="text-gray-600 hover:text-gray-900">Home</a>
          <a href="#" class="text-gray-600 hover:text-gray-900">About</a>
          <a href="#" class="text-gray-600 hover:text-gray-900">Services</a>
          <a href="#" class="text-gray-600 hover:text-gray-900">Contact</a>
        </div>
      </div>
      <button class="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700">
        Sign In
      </button>
    </div>
  </div>
</nav>`,
    preview: `<nav class="bg-white shadow-lg rounded-lg">
  <div class="px-3 py-2 flex justify-between items-center">
    <div class="flex items-center gap-4">
      <span class="font-bold">Logo</span>
      <div class="flex gap-3 text-sm">
        <span class="text-gray-600">Home</span>
        <span class="text-gray-600">About</span>
      </div>
    </div>
    <button class="bg-blue-600 text-white px-3 py-1 rounded text-xs">Sign In</button>
  </div>
</nav>`,
    color: '#b7ffca'
  },

  // ========== FOOTERS ==========
  {
    id: 10,
    name: "Simple Footer",
    category: 'footers',
    description: "Clean footer with links and copyright",
    code: `<footer class="bg-gray-900 text-white py-8">
  <div class="max-w-6xl mx-auto px-4">
    <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
      <div>
        <h3 class="font-bold text-lg mb-4">About</h3>
        <p class="text-gray-400 text-sm">Making web development accessible to everyone.</p>
      </div>
      <div>
        <h3 class="font-bold text-lg mb-4">Links</h3>
        <ul class="space-y-2 text-sm text-gray-400">
          <li><a href="#" class="hover:text-white">Home</a></li>
          <li><a href="#" class="hover:text-white">About</a></li>
          <li><a href="#" class="hover:text-white">Contact</a></li>
        </ul>
      </div>
      <div>
        <h3 class="font-bold text-lg mb-4">Resources</h3>
        <ul class="space-y-2 text-sm text-gray-400">
          <li><a href="#" class="hover:text-white">Blog</a></li>
          <li><a href="#" class="hover:text-white">FAQ</a></li>
          <li><a href="#" class="hover:text-white">Support</a></li>
        </ul>
      </div>
      <div>
        <h3 class="font-bold text-lg mb-4">Legal</h3>
        <ul class="space-y-2 text-sm text-gray-400">
          <li><a href="#" class="hover:text-white">Privacy</a></li>
          <li><a href="#" class="hover:text-white">Terms</a></li>
        </ul>
      </div>
    </div>
    <div class="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
      © 2024 Your Company. All rights reserved.
    </div>
  </div>
</footer>`,
    preview: `<footer class="bg-gray-900 text-white p-4 rounded-lg">
  <div class="grid grid-cols-2 gap-4 mb-3">
    <div><h4 class="font-bold text-sm">About</h4><p class="text-xs text-gray-400">Making web dev accessible</p></div>
    <div><h4 class="font-bold text-sm">Links</h4><ul class="text-xs text-gray-400"><li>Home</li><li>About</li></ul></div>
  </div>
  <div class="text-center text-xs text-gray-500 pt-2 border-t border-gray-800">© 2024</div>
</footer>`,
    color: '#b7ffca'
  },

  // ========== ALERTS ==========
  {
    id: 11,
    name: "Success Alert",
    category: 'alerts',
    description: "Success message alert",
    code: `<div class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg relative" role="alert">
  <strong class="font-bold">Success!</strong>
  <span class="block sm:inline"> Your changes have been saved.</span>
</div>`,
    preview: `<div class="bg-green-100 border border-green-400 text-green-700 px-3 py-2 rounded-lg text-sm">
  <strong>Success!</strong> Changes saved.
</div>`,
    color: '#ffb7c5'
  },
  {
    id: 12,
    name: "Error Alert",
    category: 'alerts',
    description: "Error message alert",
    code: `<div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg relative" role="alert">
  <strong class="font-bold">Error!</strong>
  <span class="block sm:inline"> Something went wrong.</span>
</div>`,
    preview: `<div class="bg-red-100 border border-red-400 text-red-700 px-3 py-2 rounded-lg text-sm">
  <strong>Error!</strong> Something went wrong.
</div>`,
    color: '#ffb7c5'
  },

  // ========== BADGES ==========
  {
    id: 13,
    name: "Status Badges",
    category: 'badges',
    description: "Various status badges",
    code: `<div class="flex gap-2">
  <span class="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Active</span>
  <span class="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Inactive</span>
  <span class="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Pending</span>
  <span class="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">New</span>
</div>`,
    preview: `<div class="flex gap-1">
  <span class="bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded-full">Active</span>
  <span class="bg-red-100 text-red-800 text-xs px-2 py-0.5 rounded-full">Inactive</span>
  <span class="bg-blue-100 text-blue-800 text-xs px-2 py-0.5 rounded-full">New</span>
</div>`,
    color: '#475569'
  },

  // ========== SIDEBARS ==========
  {
    id: 14,
    name: "Simple Sidebar",
    category: 'sidebars',
    description: "Basic sidebar navigation",
    code: `<div class="w-64 bg-gray-900 text-white h-screen p-4">
  <h2 class="text-xl font-bold mb-6">Dashboard</h2>
  <nav>
    <ul class="space-y-2">
      <li><a href="#" class="block px-4 py-2 rounded hover:bg-gray-800">Home</a></li>
      <li><a href="#" class="block px-4 py-2 rounded hover:bg-gray-800">Profile</a></li>
      <li><a href="#" class="block px-4 py-2 rounded hover:bg-gray-800">Settings</a></li>
      <li><a href="#" class="block px-4 py-2 rounded hover:bg-gray-800">Messages</a></li>
    </ul>
  </nav>
</div>`,
    preview: `<div class="w-40 bg-gray-900 text-white p-2 rounded-lg">
  <h3 class="font-bold text-sm mb-2">Menu</h3>
  <div class="space-y-1 text-xs">
    <div class="p-1 rounded hover:bg-gray-800">Home</div>
    <div class="p-1 rounded hover:bg-gray-800">Profile</div>
    <div class="p-1 rounded hover:bg-gray-800">Settings</div>
  </div>
</div>`,
    color: '#475569'
  },
];

// ============================================
// CATEGORIES
// ============================================
const categories = [
  { id: 'all', name: 'All Components', color: '#94a3b8' },
  { id: 'buttons', name: 'Buttons', color: '#c5e6ff' },
  { id: 'cards', name: 'Cards', color: '#d2b7ff' },
  { id: 'forms', name: 'Forms', color: '#ffb7c5' },
  { id: 'navbars', name: 'Navbars', color: '#b7ffca' },
  { id: 'footers', name: 'Footers', color: '#b7ffca' },
  { id: 'sidebars', name: 'Sidebars', color: '#475569' },
  { id: 'alerts', name: 'Alerts', color: '#ffb7c5' },
  { id: 'badges', name: 'Badges', color: '#475569' },
];

// ============================================
// MAIN PAGE
// ============================================
export default function ComponentsPage() {
  const [copiedId, setCopiedId] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const copyToClipboard = (text: string, id: number) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const filteredComponents = components.filter(comp => {
    const matchesCategory = selectedCategory === 'all' || comp.category === selectedCategory;
    const matchesSearch = comp.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         comp.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <DashboardLayout pageTitle="UI Components Library" showBackButton={true}>
      <div className="space-y-6">
        
        {/* HEADER */}
        <div className="bg-gradient-to-br from-purple-900 to-indigo-900 rounded-2xl p-6 text-white">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 bg-white/20 rounded-xl">
              <FiBox size={28} />
            </div>
            <h1 className="text-3xl font-bold">UI Components Library</h1>
          </div>
          <p className="text-white/80 max-w-2xl mb-4">
            Ready-to-use components. Click copy and paste directly into your project!
          </p>
          
          {/* Search */}
          <input
            type="text"
            placeholder="🔍 Search components..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full max-w-md px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
          />
        </div>

        {/* CATEGORY FILTER */}
        <div className="flex flex-wrap gap-2">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all`}
              style={{
                backgroundColor: selectedCategory === cat.id ? cat.color : '#f1f5f9',
                color: selectedCategory === cat.id ? '#0a0a0a' : '#475569'
              }}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* COMPONENTS GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredComponents.map((component) => (
            <motion.div
              key={component.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-lg transition-all"
            >
              {/* Header */}
              <div 
                className="px-4 py-3 border-b"
                style={{ backgroundColor: `${component.color}15` }}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-900">{component.name}</h3>
                    <p className="text-xs text-gray-500 mt-0.5">{component.description}</p>
                  </div>
                  <span 
                    className="text-xs px-2 py-1 rounded-full"
                    style={{ backgroundColor: component.color, color: '#0a0a0a' }}
                  >
                    {component.category}
                  </span>
                </div>
              </div>

              {/* Preview */}
              <div className="p-4 bg-gray-50 border-b">
                <div className="flex items-center gap-2 mb-2">
                  <FiEye className="text-slate-500" size={14} />
                  <span className="text-xs font-medium text-slate-600">PREVIEW</span>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-200 flex items-center justify-center min-h-[120px]">
                  <div dangerouslySetInnerHTML={{ __html: component.preview }} />
                </div>
              </div>

              {/* Code */}
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <FiCode className="text-slate-500" size={14} />
                    <span className="text-xs font-medium text-slate-600">CODE</span>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => copyToClipboard(component.code, component.id)}
                    className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium transition-all"
                    style={{
                      backgroundColor: copiedId === component.id ? component.color : '#f1f5f9',
                      color: copiedId === component.id ? '#0a0a0a' : '#475569'
                    }}
                  >
                    {copiedId === component.id ? (
                      <><FiCheck size={14} /> Copied!</>
                    ) : (
                      <><FiCopy size={14} /> Copy</>
                    )}
                  </motion.button>
                </div>
                <div className="bg-gray-900 rounded-lg p-3 font-mono text-xs overflow-x-auto">
                  <pre className="text-gray-100 whitespace-pre-wrap">
                    <code>{component.code}</code>
                  </pre>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* EMPTY STATE */}
        {filteredComponents.length === 0 && (
          <div className="text-center py-12 bg-gray-50 rounded-xl">
            <FiBox className="mx-auto text-gray-400 mb-3" size={48} />
            <h3 className="text-lg font-medium text-gray-900">No components found</h3>
            <p className="text-sm text-gray-500">Try a different category or search term</p>
          </div>
        )}

        {/* FOOTER NOTE */}
        <div className="text-center py-6 text-sm text-slate-500 border-t">
          <p>✨ {filteredComponents.length} components ready to copy • Built with Tailwind CSS</p>
        </div>
      </div>
    </DashboardLayout>
  );
}