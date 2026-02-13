'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  FiCopy, FiCheck, FiEye, FiFileText, 
  FiCode, FiInfo, FiArrowRight, FiArrowLeft, 
  FiList, FiBookmark, FiDroplet, FiLayers, FiGrid, FiLayout, FiBox, FiWind
} from 'react-icons/fi';
import DashboardLayout from '../../components/layout/DashboardLayout';

// ============================================
// TAILWIND LESSONS DATA
// ============================================
interface TailwindLesson {
  id: number;
  title: string;
  description: string;
  concept: string;
  example: string;
  preview: string;
  category: 'basics' | 'layout' | 'typography' | 'colors' | 'spacing' | 'flexbox' | 'grid' | 'responsive' | 'interactive';
  level: 'beginner' | 'intermediate';
  color: string;
}

const tailwindLessons: TailwindLesson[] = [
  // ========== BASICS ==========
  {
    id: 1,
    title: "What is Tailwind CSS?",
    description: "Tailwind is a utility-first CSS framework. Instead of writing custom CSS, you use pre-built classes directly in your HTML.",
    concept: "Utility-First Fundamentals",
    example: "<!-- Traditional CSS -->\n<div class=\"card\">Hello</div>\n<style>.card { padding: 1rem; background: blue; }</style>\n\n<!-- Tailwind CSS -->\n<div class=\"p-4 bg-blue-500\">Hello</div>",
    preview: "<div class='p-4 bg-blue-500 text-white rounded-lg shadow-md'>Hello from Tailwind!</div>",
    category: 'basics',
    level: 'beginner',
    color: '#c5e6ff'
  },
  {
    id: 2,
    title: "Installation & Setup",
    description: "Add Tailwind to your project via CDN for learning, or install via npm for real projects.",
    concept: "Getting Started",
    example: "<!-- CDN (for learning) -->\n<script src=\"https://cdn.tailwindcss.com\"></script>\n\n<!-- npm (for projects) -->\nnpm install -D tailwindcss\nnpx tailwindcss init",
    preview: "<div class='space-y-2'><div class='bg-gray-800 text-white p-2 rounded text-xs'>npm install tailwindcss</div><div class='bg-green-100 text-green-800 p-2 rounded text-xs'>✓ Tailwind is working!</div></div>",
    category: 'basics',
    level: 'beginner',
    color: '#c5e6ff'
  },

  // ========== SPACING ==========
  {
    id: 3,
    title: "Padding & Margin",
    description: "Control spacing with p-* (padding) and m-* (margin). Numbers represent 0.25rem increments.",
    concept: "Spacing Utilities",
    example: "<!-- Padding: p-4 = 1rem (16px) -->\n<div class=\"p-4 bg-blue-200\">Padding all sides</div>\n<div class=\"pt-4 pr-2 pb-6 pl-8\">Individual sides</div>\n\n<!-- Margin -->\n<div class=\"m-4 bg-green-200\">Margin all sides</div>\n<div class=\"mt-4 mx-auto\">Auto margin for centering</div>",
    preview: "<div class='space-y-4'><div class='p-4 bg-blue-200 rounded'>p-4 (padding: 1rem)</div><div class='m-4 bg-green-200 rounded'>m-4 (margin: 1rem)</div><div class='px-8 py-2 bg-purple-200 rounded'>px-8 py-2</div></div>",
    category: 'spacing',
    level: 'beginner',
    color: '#d2b7ff'
  },
  {
    id: 4,
    title: "Width & Height",
    description: "Set dimensions using w-* and h-* utilities. Use fractions, fixed sizes, or percentages.",
    concept: "Sizing Utilities",
    example: "<!-- Width -->\n<div class=\"w-64 h-32 bg-blue-500\">w-64 (16rem)</div>\n<div class=\"w-1/2 bg-green-500\">w-1/2 (50%)</div>\n<div class=\"w-full bg-red-500\">w-full (100%)</div>\n\n<!-- Height -->\n<div class=\"h-48 bg-purple-500\">h-48</div>\n<div class=\"h-screen bg-yellow-500\">h-screen (full viewport)</div>",
    preview: "<div class='space-y-3'><div class='w-64 h-10 bg-blue-500 text-white text-xs flex items-center px-2 rounded'>w-64</div><div class='w-1/2 h-10 bg-green-500 text-white text-xs flex items-center px-2 rounded'>w-1/2</div><div class='w-full h-10 bg-red-500 text-white text-xs flex items-center px-2 rounded'>w-full</div></div>",
    category: 'spacing',
    level: 'beginner',
    color: '#d2b7ff'
  },

  // ========== COLORS ==========
  {
    id: 5,
    title: "Background Colors",
    description: "Use bg-{color}-{shade} for backgrounds. Shades from 50 (light) to 900 (dark).",
    concept: "Background Utilities",
    example: "<!-- Background colors -->\n<div class=\"bg-blue-500 text-white\">bg-blue-500</div>\n<div class=\"bg-green-200\">bg-green-200</div>\n<div class=\"bg-red-700 text-white\">bg-red-700</div>\n<div class=\"bg-gradient-to-r from-blue-500 to-purple-500\">Gradient</div>",
    preview: "<div class='grid grid-cols-3 gap-2'><div class='bg-blue-500 text-white p-2 rounded text-xs text-center'>500</div><div class='bg-blue-300 p-2 rounded text-xs text-center'>300</div><div class='bg-blue-700 text-white p-2 rounded text-xs text-center'>700</div><div class='bg-green-500 text-white p-2 rounded text-xs text-center'>500</div><div class='bg-green-300 p-2 rounded text-xs text-center'>300</div><div class='bg-green-700 text-white p-2 rounded text-xs text-center'>700</div></div>",
    category: 'colors',
    level: 'beginner',
    color: '#b7ffca'
  },
  {
    id: 6,
    title: "Text Colors",
    description: "Style text with text-{color}-{shade}. Combine with other utilities for full control.",
    concept: "Text Color Utilities",
    example: "<!-- Text colors -->\n<p class=\"text-blue-600\">Blue text</p>\n<p class=\"text-green-600 font-bold\">Green bold text</p>\n<p class=\"text-red-600 underline\">Red underlined</p>\n<p class=\"text-gray-500 italic\">Gray italic</p>",
    preview: "<div class='space-y-2'><div class='text-blue-600 font-bold'>text-blue-600</div><div class='text-green-600'>text-green-600</div><div class='text-red-600 underline'>text-red-600</div><div class='text-purple-600 italic'>text-purple-600</div><div class='text-gray-500'>text-gray-500</div></div>",
    category: 'colors',
    level: 'beginner',
    color: '#b7ffca'
  },

  // ========== TYPOGRAPHY ==========
  {
    id: 7,
    title: "Font Sizes",
    description: "Control text size with text-{size}. From text-xs to text-9xl.",
    concept: "Font Size Utilities",
    example: "<!-- Font sizes -->\n<p class=\"text-xs\">text-xs (0.75rem)</p>\n<p class=\"text-sm\">text-sm (0.875rem)</p>\n<p class=\"text-base\">text-base (1rem)</p>\n<p class=\"text-lg\">text-lg (1.125rem)</p>\n<p class=\"text-xl\">text-xl (1.25rem)</p>\n<p class=\"text-2xl\">text-2xl (1.5rem)</p>",
    preview: "<div class='space-y-1'><div class='text-xs'>text-xs - Tiny text</div><div class='text-sm'>text-sm - Small text</div><div class='text-base'>text-base - Normal text</div><div class='text-lg'>text-lg - Large text</div><div class='text-xl'>text-xl - Larger</div><div class='text-2xl'>text-2xl - Even larger</div></div>",
    category: 'typography',
    level: 'beginner',
    color: '#ffb7c5'
  },
  {
    id: 8,
    title: "Font Weight & Style",
    description: "Control thickness with font-* utilities. From thin to black.",
    concept: "Font Weight Utilities",
    example: "<!-- Font weights -->\n<p class=\"font-thin\">font-thin (100)</p>\n<p class=\"font-light\">font-light (300)</p>\n<p class=\"font-normal\">font-normal (400)</p>\n<p class=\"font-medium\">font-medium (500)</p>\n<p class=\"font-semibold\">font-semibold (600)</p>\n<p class=\"font-bold\">font-bold (700)</p>\n\n<!-- Style -->\n<p class=\"italic\">Italic text</p>\n<p class=\"not-italic\">Not italic</p>",
    preview: "<div class='space-y-1'><div class='font-thin'>font-thin - Thin text</div><div class='font-light'>font-light - Light text</div><div class='font-normal'>font-normal - Normal</div><div class='font-medium'>font-medium - Medium</div><div class='font-semibold'>font-semibold - Semibold</div><div class='font-bold'>font-bold - Bold</div><div class='italic'>italic - Italic style</div></div>",
    category: 'typography',
    level: 'beginner',
    color: '#ffb7c5'
  },
  {
    id: 9,
    title: "Text Alignment & Decoration",
    description: "Control text alignment and decoration with simple utilities.",
    concept: "Text Utilities",
    example: "<!-- Alignment -->\n<p class=\"text-left\">Left aligned text</p>\n<p class=\"text-center\">Center aligned text</p>\n<p class=\"text-right\">Right aligned text</p>\n\n<!-- Decoration -->\n<p class=\"underline\">Underlined text</p>\n<p class=\"line-through\">Strikethrough</p>\n<p class=\"uppercase\">uppercase text</p>\n<p class=\"capitalize\">capitalize text</p>",
    preview: "<div class='space-y-3'><div class='text-left bg-gray-100 p-2 rounded'>text-left</div><div class='text-center bg-gray-100 p-2 rounded'>text-center</div><div class='text-right bg-gray-100 p-2 rounded'>text-right</div><div><span class='underline mr-2'>underline</span><span class='line-through mr-2'>strike</span><span class='uppercase'>uppercase</span></div></div>",
    category: 'typography',
    level: 'beginner',
    color: '#ffb7c5'
  },

  // ========== LAYOUT ==========
  {
    id: 10,
    title: "Display Properties",
    description: "Control how elements display with block, inline-block, flex, grid, and hidden.",
    concept: "Display Utilities",
    example: "<!-- Display utilities -->\n<div class=\"block\">Block element</div>\n<span class=\"inline-block w-32\">Inline-block</span>\n<div class=\"flex\">Flex container</div>\n<div class=\"grid\">Grid container</div>\n<div class=\"hidden\">Hidden element</div>",
    preview: "<div class='space-y-2'><div class='block bg-blue-200 p-2 rounded text-sm'>block - Full width</div><span class='inline-block bg-green-200 p-2 rounded text-sm mr-2'>inline-block</span><span class='inline-block bg-green-200 p-2 rounded text-sm'>inline-block</span><div class='flex gap-2 mt-2'><div class='bg-purple-200 p-2 rounded flex-1 text-xs'>flex item 1</div><div class='bg-purple-200 p-2 rounded flex-1 text-xs'>flex item 2</div></div></div>",
    category: 'layout',
    level: 'beginner',
    color: '#c5e6ff'
  },
  {
    id: 11,
    title: "Positioning",
    description: "Position elements with static, fixed, absolute, relative, and sticky.",
    concept: "Position Utilities",
    example: "<!-- Positioning -->\n<div class=\"relative\">\n  <div class=\"absolute top-0 left-0\">Top left</div>\n</div>\n<div class=\"fixed top-0\">Fixed header</div>\n<div class=\"sticky top-0\">Sticky element</div>",
    preview: "<div class='relative h-24 bg-gray-200 rounded-lg p-2'><div class='absolute top-2 left-2 bg-blue-500 text-white text-xs px-2 py-1 rounded'>absolute top-2 left-2</div><div class='absolute bottom-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded'>bottom-2 right-2</div><span class='text-xs text-gray-500'>relative container</span></div>",
    category: 'layout',
    level: 'intermediate',
    color: '#c5e6ff'
  },

  // ========== FLEXBOX ==========
  {
    id: 12,
    title: "Flexbox Basics",
    description: "Create flexible layouts with flex containers and items.",
    concept: "Flex Container",
    example: "<!-- Flex container -->\n<div class=\"flex gap-4\">\n  <div>Item 1</div>\n  <div>Item 2</div>\n  <div>Item 3</div>\n</div>\n\n<!-- Direction -->\n<div class=\"flex flex-col\">Column</div>\n<div class=\"flex flex-row\">Row</div>",
    preview: "<div class='space-y-3'><div class='flex gap-2'><div class='bg-blue-200 p-2 rounded flex-1 text-center text-xs'>1</div><div class='bg-blue-200 p-2 rounded flex-1 text-center text-xs'>2</div><div class='bg-blue-200 p-2 rounded flex-1 text-center text-xs'>3</div></div><div class='flex flex-col gap-2'><div class='bg-green-200 p-2 rounded text-center text-xs'>flex-col item 1</div><div class='bg-green-200 p-2 rounded text-center text-xs'>flex-col item 2</div></div></div>",
    category: 'flexbox',
    level: 'beginner',
    color: '#d2b7ff'
  },
  {
    id: 13,
    title: "Flex Alignment",
    description: "Align items with justify-* (main axis) and items-* (cross axis).",
    concept: "Flex Alignment",
    example: "<!-- Main axis (justify) -->\n<div class=\"flex justify-start\">Start</div>\n<div class=\"flex justify-center\">Center</div>\n<div class=\"flex justify-end\">End</div>\n<div class=\"flex justify-between\">Space between</div>\n\n<!-- Cross axis (items) -->\n<div class=\"flex items-center h-32\">Center vertically</div>",
    preview: "<div class='space-y-3'><div class='flex justify-start gap-1'><span class='bg-blue-200 p-1 rounded text-xs'>start</span></div><div class='flex justify-center gap-1'><span class='bg-blue-200 p-1 rounded text-xs'>center</span></div><div class='flex justify-end gap-1'><span class='bg-blue-200 p-1 rounded text-xs'>end</span></div><div class='flex justify-between'><span class='bg-green-200 p-1 rounded text-xs'>left</span><span class='bg-green-200 p-1 rounded text-xs'>right</span></div></div>",
    category: 'flexbox',
    level: 'intermediate',
    color: '#d2b7ff'
  },

  // ========== GRID ==========
  {
    id: 14,
    title: "Grid Basics",
    description: "Create complex layouts with CSS Grid using grid-cols-* and gap-*.",
    concept: "Grid Container",
    example: "<!-- Grid container -->\n<div class=\"grid grid-cols-3 gap-4\">\n  <div>1</div>\n  <div>2</div>\n  <div>3</div>\n  <div>4</div>\n  <div>5</div>\n  <div>6</div>\n</div>\n\n<!-- Column spans -->\n<div class=\"grid grid-cols-3 gap-4\">\n  <div class=\"col-span-2\">Span 2 columns</div>\n  <div>Single</div>\n</div>",
    preview: "<div class='space-y-3'><div class='grid grid-cols-3 gap-1'><div class='bg-blue-200 p-2 rounded text-center text-xs'>1</div><div class='bg-blue-200 p-2 rounded text-center text-xs'>2</div><div class='bg-blue-200 p-2 rounded text-center text-xs'>3</div><div class='bg-blue-200 p-2 rounded text-center text-xs'>4</div><div class='bg-blue-200 p-2 rounded text-center text-xs'>5</div><div class='bg-blue-200 p-2 rounded text-center text-xs'>6</div></div><div class='grid grid-cols-3 gap-1'><div class='col-span-2 bg-green-200 p-2 rounded text-center text-xs'>col-span-2</div><div class='bg-green-200 p-2 rounded text-center text-xs'>1 col</div></div></div>",
    category: 'grid',
    level: 'intermediate',
    color: '#b7ffca'
  },

  // ========== RESPONSIVE ==========
  {
    id: 15,
    title: "Responsive Design",
    description: "Make layouts responsive with breakpoint prefixes: sm, md, lg, xl, 2xl.",
    concept: "Responsive Utilities",
    example: "<!-- Responsive classes -->\n<div class=\"text-sm md:text-base lg:text-lg\">\n  Text changes at breakpoints\n</div>\n\n<div class=\"w-full md:w-1/2 lg:w-1/3\">\n  Width changes responsively\n</div>\n\n<!-- Hide/show on different screens -->\n<div class=\"hidden md:block\">\n  Visible only on medium screens and up\n</div>",
    preview: "<div class='space-y-3 p-3 bg-gray-100 rounded-lg'><div class='text-sm md:text-base bg-blue-100 p-2 rounded'>Responsive text (resize browser)</div><div class='grid grid-cols-1 md:grid-cols-2 gap-2'><div class='bg-green-100 p-2 rounded text-center text-xs'>sm: 1 col</div><div class='bg-green-100 p-2 rounded text-center text-xs'>md: 2 cols</div></div><div class='bg-yellow-100 p-2 rounded text-xs'>💡 sm: 640px, md: 768px, lg: 1024px</div></div>",
    category: 'responsive',
    level: 'intermediate',
    color: '#ffb7c5'
  },

  // ========== INTERACTIVE ==========
  {
    id: 16,
    title: "Hover & Focus States",
    description: "Add interactivity with hover:, focus:, active:, and more.",
    concept: "Pseudo-class Variants",
    example: "<!-- Interactive states -->\n<button class=\"bg-blue-500 hover:bg-blue-700 text-white\">\n  Hover me\n</button>\n\n<input class=\"focus:ring-2 focus:ring-blue-500\">\n\n<div class=\"group\">\n  <p>Normal</p>\n  <p class=\"group-hover:font-bold\">Bold on hover</p>\n</div>",
    preview: "<div class='space-y-4'><button class='bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm transition-colors w-full'>Hover me - color changes</button><button class='bg-green-500 hover:bg-green-700 hover:scale-105 text-white px-4 py-2 rounded text-sm transition-all w-full'>Hover - scales up</button><input placeholder='Focus me' class='w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm' /></div>",
    category: 'interactive',
    level: 'intermediate',
    color: '#c5e6ff'
  },
  {
    id: 17,
    title: "Transitions & Transforms",
    description: "Smooth animations with transition and transform utilities.",
    concept: "Animation Utilities",
    example: "<!-- Transitions -->\n<button class=\"transition-all duration-300 hover:scale-110\">\n  Scale on hover\n</button>\n\n<!-- Transforms -->\n<div class=\"rotate-45\">Rotated</div>\n<div class=\"scale-150\">Scaled</div>\n<div class=\"translate-x-4\">Moved right</div>",
    preview: "<div class='grid grid-cols-2 gap-3'><div class='bg-blue-500 text-white p-3 rounded-lg text-center transition-all duration-300 hover:scale-110 cursor-pointer text-xs'>hover:scale-110</div><div class='bg-green-500 text-white p-3 rounded-lg text-center transition-all duration-300 hover:rotate-6 cursor-pointer text-xs'>hover:rotate-6</div><div class='bg-purple-500 text-white p-3 rounded-lg text-center transition-all duration-300 hover:translate-x-2 cursor-pointer text-xs'>hover:translate-x-2</div><div class='bg-pink-500 text-white p-3 rounded-lg text-center transition-all duration-300 hover:-translate-y-2 cursor-pointer text-xs'>hover:-translate-y-2</div></div>",
    category: 'interactive',
    level: 'intermediate',
    color: '#c5e6ff'
  },

  // ========== BORDERS & SHADOWS ==========
  {
    id: 18,
    title: "Borders & Border Radius",
    description: "Add borders with border, border-{color}, and rounded corners.",
    concept: "Border Utilities",
    example: "<!-- Borders -->\n<div class=\"border border-gray-300\">Basic border</div>\n<div class=\"border-2 border-blue-500\">Thicker blue border</div>\n\n<!-- Border radius -->\n<div class=\"rounded\">Rounded corners</div>\n<div class=\"rounded-lg\">Larger radius</div>\n<div class=\"rounded-full\">Pill shape</div>",
    preview: "<div class='grid grid-cols-2 gap-3'><div class='border border-gray-300 p-2 rounded text-xs text-center'>border</div><div class='border-2 border-blue-500 p-2 rounded text-xs text-center'>border-2</div><div class='border border-red-300 rounded-full p-2 text-xs text-center'>rounded-full</div><div class='border border-green-300 rounded-lg p-2 text-xs text-center'>rounded-lg</div><div class='border border-purple-300 rounded-l-full p-2 text-xs text-center'>rounded-l-full</div><div class='border border-yellow-300 rounded-b-2xl p-2 text-xs text-center'>rounded-b-2xl</div></div>",
    category: 'basics',
    level: 'beginner',
    color: '#d2b7ff'
  },
  {
    id: 19,
    title: "Box Shadows",
    description: "Add depth with shadow utilities: sm, md, lg, xl, 2xl, inner.",
    concept: "Shadow Utilities",
    example: "<!-- Shadows -->\n<div class=\"shadow-sm\">Small shadow</div>\n<div class=\"shadow-md\">Medium shadow</div>\n<div class=\"shadow-lg\">Large shadow</div>\n<div class=\"shadow-xl\">Extra large</div>\n<div class=\"shadow-2xl\">2xl shadow</div>\n<div class=\"shadow-inner\">Inner shadow</div>",
    preview: "<div class='grid grid-cols-2 gap-3'><div class='shadow-sm bg-white p-3 rounded text-xs text-center'>shadow-sm</div><div class='shadow-md bg-white p-3 rounded text-xs text-center'>shadow-md</div><div class='shadow-lg bg-white p-3 rounded text-xs text-center'>shadow-lg</div><div class='shadow-xl bg-white p-3 rounded text-xs text-center'>shadow-xl</div><div class='shadow-2xl bg-white p-3 rounded text-xs text-center'>shadow-2xl</div><div class='shadow-inner bg-white p-3 rounded text-xs text-center'>shadow-inner</div></div>",
    category: 'basics',
    level: 'beginner',
    color: '#d2b7ff'
  },

  // ========== PRACTICAL EXAMPLES ==========
  {
    id: 20,
    title: "Card Component",
    description: "Build a beautiful card using multiple Tailwind utilities together.",
    concept: "Real-World Example",
    example: "<div class=\"max-w-sm mx-auto bg-white rounded-xl shadow-lg overflow-hidden\">\n  <div class=\"bg-gradient-to-r from-blue-500 to-purple-600 h-32\"></div>\n  <div class=\"p-6\">\n    <h3 class=\"text-xl font-bold text-gray-900\">Card Title</h3>\n    <p class=\"text-gray-600 mt-2\">This is a card built entirely with Tailwind utilities. No custom CSS needed!</p>\n    <button class=\"mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition\">\n      Learn More\n    </button>\n  </div>\n</div>",
    preview: "<div class='max-w-sm mx-auto bg-white rounded-xl shadow-lg overflow-hidden border'><div class='bg-gradient-to-r from-blue-500 to-purple-600 h-16'></div><div class='p-4'><h3 class='text-lg font-bold text-gray-900'>Card Title</h3><p class='text-gray-600 text-xs mt-1'>Built with Tailwind utilities</p><button class='mt-3 px-3 py-1.5 bg-blue-500 text-white text-xs rounded-lg hover:bg-blue-600 transition'>Learn More</button></div></div>",
    category: 'basics',
    level: 'intermediate',
    color: '#ffb7c5'
  },
  {
    id: 21,
    title: "Navbar Example",
    description: "Create a responsive navigation bar with Tailwind.",
    concept: "Real-World Example",
    example: "<nav class=\"bg-gray-800 text-white p-4\">\n  <div class=\"container mx-auto flex justify-between items-center\">\n    <h1 class=\"text-xl font-bold\">Logo</h1>\n    <ul class=\"flex space-x-6\">\n      <li><a href=\"#\" class=\"hover:text-gray-300\">Home</a></li>\n      <li><a href=\"#\" class=\"hover:text-gray-300\">About</a></li>\n      <li><a href=\"#\" class=\"hover:text-gray-300\">Services</a></li>\n      <li><a href=\"#\" class=\"hover:text-gray-300\">Contact</a></li>\n    </ul>\n    <button class=\"bg-blue-500 px-4 py-2 rounded hover:bg-blue-600\">\n      Sign In\n    </button>\n  </div>\n</nav>",
    preview: "<nav class='bg-gray-800 text-white p-2 rounded-lg'><div class='flex justify-between items-center text-xs'><span class='font-bold'>Logo</span><div class='flex gap-3'><span>Home</span><span>About</span></div><button class='bg-blue-500 px-2 py-1 rounded text-xs'>Sign In</button></div></nav>",
    category: 'layout',
    level: 'intermediate',
    color: '#ffb7c5'
  }
];

// ============================================
// MAIN PAGE COMPONENT
// ============================================
export default function TailwindCoursePage() {
  const [copiedId, setCopiedId] = useState<number | null>(null);
  const [activeSection, setActiveSection] = useState<number>(1);
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const sectionRefs = useRef<{ [key: number]: HTMLElement | null }>({});

  const copyToClipboard = (text: string, id: number) => {
    if (!text) return;
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const filteredLessons = filterCategory === 'all' 
    ? tailwindLessons 
    : tailwindLessons.filter(l => l.category === filterCategory);

  const scrollToSection = (id: number) => {
    setActiveSection(id);
    sectionRefs.current[id]?.scrollIntoView({ 
      behavior: 'smooth', 
      block: 'start' 
    });
  };

  const goToNext = () => {
    const currentIndex = filteredLessons.findIndex(l => l.id === activeSection);
    if (currentIndex < filteredLessons.length - 1) {
      scrollToSection(filteredLessons[currentIndex + 1].id);
    }
  };

  const goToPrevious = () => {
    const currentIndex = filteredLessons.findIndex(l => l.id === activeSection);
    if (currentIndex > 0) {
      scrollToSection(filteredLessons[currentIndex - 1].id);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = Number(entry.target.id.replace('lesson-', ''));
            setActiveSection(id);
          }
        });
      },
      { threshold: 0.3 }
    );

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [filteredLessons]);

  const categories = [
    { id: 'all', name: 'All Lessons', color: '#94a3b8' },
    { id: 'basics', name: 'Basics', color: '#c5e6ff' },
    { id: 'spacing', name: 'Spacing', color: '#d2b7ff' },
    { id: 'colors', name: 'Colors', color: '#b7ffca' },
    { id: 'typography', name: 'Typography', color: '#ffb7c5' },
    { id: 'layout', name: 'Layout', color: '#c5e6ff' },
    { id: 'flexbox', name: 'Flexbox', color: '#d2b7ff' },
    { id: 'grid', name: 'Grid', color: '#b7ffca' },
    { id: 'responsive', name: 'Responsive', color: '#ffb7c5' },
    { id: 'interactive', name: 'Interactive', color: '#c5e6ff' },
  ];

  return (
    <DashboardLayout pageTitle="Tailwind CSS Course" showBackButton={true}>
      <div className="flex gap-6">
        
        {/* LEFT CONTENT */}
        <div className="flex-1 space-y-8">
          
          {/* HEADER */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl overflow-hidden shadow-xl p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-white/20 rounded-xl">
                <FiWind className="text-white" size={28} />
              </div>
              <h1 className="text-3xl font-bold text-white">Tailwind CSS Course</h1>
            </div>
            <p className="text-lg text-white/90 leading-relaxed max-w-3xl mb-4">
              Master Tailwind CSS - the utility-first framework. Learn by doing with live examples.
              No custom CSS, just classes!
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">🎨 21 lessons</span>
              <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">⚡ Beginner friendly</span>
              <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">📱 Responsive</span>
            </div>
          </motion.div>

          {/* CATEGORY FILTER */}
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setFilterCategory(cat.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all`}
                style={{
                  backgroundColor: filterCategory === cat.id ? cat.color : '#f1f5f9',
                  color: filterCategory === cat.id ? '#0a0a0a' : '#475569'
                }}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* LESSONS */}
          <div className="space-y-12">
            {filteredLessons.map((lesson) => (
              <section
                key={lesson.id}
                id={`lesson-${lesson.id}`}
                ref={(el) => { sectionRefs.current[lesson.id] = el; }}
                className="scroll-mt-24"
              >
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span 
                      className="text-xs font-mono px-2 py-1 rounded-lg"
                      style={{ backgroundColor: `${lesson.color}15`, color: lesson.color }}
                    >
                      Lesson {lesson.id}
                    </span>
                    <span className="text-xs text-slate-400">•</span>
                    <span className="text-xs text-slate-500 capitalize">{lesson.category}</span>
                    <span className="text-[10px] px-2 py-0.5 bg-slate-100 rounded-full text-slate-600">
                      {lesson.level}
                    </span>
                  </div>
                  
                  <h1 
                    className="text-3xl md:text-4xl font-bold tracking-tight mb-2"
                    style={{ color: lesson.color }}
                  >
                    {lesson.title}
                  </h1>
                  
                  <p className="text-sm md:text-base text-gray-600 max-w-2xl mb-2">
                    {lesson.description}
                  </p>

                  <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-2 inline-block">
                    <span className="text-xs font-mono text-indigo-700">
                      {lesson.concept}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span 
                      className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold"
                      style={{ backgroundColor: `${lesson.color}20`, color: lesson.color }}
                    >
                      {lesson.id}
                    </span>
                    <h2 className="text-sm font-semibold text-gray-700">Try it yourself:</h2>
                  </div>
                  
                  <div className="flex items-center gap-1">
                    {filteredLessons.findIndex(l => l.id === activeSection) > 0 && (
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={goToPrevious}
                        className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700"
                      >
                        <FiArrowLeft size={16} />
                      </motion.button>
                    )}
                    {filteredLessons.findIndex(l => l.id === activeSection) < filteredLessons.length - 1 && (
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={goToNext}
                        className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700"
                      >
                        <FiArrowRight size={16} />
                      </motion.button>
                    )}
                  </div>
                </div>

                {/* LESSON CARD */}
                <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-md">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-5">
                    
                    {/* LEFT: Live Preview */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-1.5">
                        <div className="p-1 bg-slate-100 rounded-lg">
                          <FiEye className="text-slate-600" size={14} />
                        </div>
                        <h3 className="text-xs font-semibold text-gray-900 uppercase tracking-wider">Live Preview</h3>
                      </div>
                      
                      <div className="bg-white rounded-lg p-6 border border-gray-200 min-h-[180px] flex items-center justify-center shadow-inner">
                        <div dangerouslySetInnerHTML={{ __html: lesson.preview }} />
                      </div>
                    </div>

                    {/* RIGHT: Code + Copy */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-1.5">
                        <div className="p-1 bg-slate-100 rounded-lg">
                          <FiCode className="text-slate-600" size={14} />
                        </div>
                        <h3 className="text-xs font-semibold text-gray-900 uppercase tracking-wider">Code Example</h3>
                      </div>
                      
                      <div className="bg-gray-900 rounded-lg p-3 font-mono text-[10px] md:text-xs overflow-x-auto max-h-[200px] overflow-y-auto">
                        <pre className="text-gray-100 whitespace-pre-wrap">
                          <code>{lesson.example}</code>
                        </pre>
                      </div>

                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-2">
                        <p className="text-[10px] text-blue-700 flex items-center gap-1">
                          <FiInfo size={12} />
                          These classes work instantly - no CSS files needed!
                        </p>
                      </div>

                      <motion.button
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                        onClick={() => copyToClipboard(lesson.example, lesson.id)}
                        className="w-full flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium transition-all"
                        style={{
                          backgroundColor: lesson.color,
                          color: '#0a0a0a'
                        }}
                      >
                        {copiedId === lesson.id ? (
                          <><FiCheck size={14} /> Copied!</>
                        ) : (
                          <><FiCopy size={14} /> Copy Code</>
                        )}
                      </motion.button>
                    </div>
                  </div>
                </div>
              </section>
            ))}
          </div>

          {/* FOOTER */}
          <div className="text-center py-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl">
            <p className="text-sm text-slate-600">
              🎉 You've completed {filteredLessons.length} Tailwind CSS lessons! <br />
              <span className="text-xs text-slate-500">Remember: Tailwind is just utility classes - no magic, just convenience.</span>
            </p>
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="w-64 hidden lg:block">
          <div className="sticky top-24 space-y-4">
            
            <div className="bg-white rounded-xl border border-gray-200 p-3">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-medium text-gray-700">Progress</span>
                <span className="text-xs font-semibold text-slate-600">
                  {filteredLessons.findIndex(l => l.id === activeSection) + 1}/{filteredLessons.length}
                </span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-1">
                <div 
                  className="h-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                  style={{ width: `${((filteredLessons.findIndex(l => l.id === activeSection) + 1) / filteredLessons.length) * 100}%` }}
                />
              </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
              <div className="p-3 border-b border-gray-100 bg-gradient-to-r from-slate-50 to-white">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 bg-slate-100 rounded-lg">
                    <FiList className="text-slate-600" size={16} />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900">Course Outline</h3>
                    <p className="text-xs text-slate-500">{filteredLessons.length} lessons</p>
                  </div>
                </div>
              </div>
              
              <div className="p-2 max-h-[500px] overflow-y-auto">
                {filteredLessons.map((lesson) => (
                  <button
                    key={lesson.id}
                    onClick={() => scrollToSection(lesson.id)}
                    className={`w-full flex items-center gap-2 px-2 py-2 rounded-lg text-xs transition-all mb-0.5 ${
                      activeSection === lesson.id ? 'bg-slate-100' : 'hover:bg-slate-50'
                    }`}
                    style={{
                      borderLeft: activeSection === lesson.id ? `2px solid ${lesson.color}` : '2px solid transparent'
                    }}
                  >
                    <span 
                      className="w-5 h-5 rounded flex items-center justify-center text-[10px] font-mono"
                      style={{ 
                        backgroundColor: activeSection === lesson.id ? `${lesson.color}20` : '#f1f5f9',
                        color: lesson.color
                      }}
                    >
                      {lesson.id}
                    </span>
                    <div className="flex-1 text-left">
                      <div className={`font-medium truncate ${
                        activeSection === lesson.id ? 'text-gray-900' : 'text-gray-700'
                      }`}>
                        {lesson.title}
                      </div>
                      <div className="text-[10px] text-slate-500">
                        {lesson.concept}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* CHEAT SHEET */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl border border-blue-200 p-3">
              <h4 className="text-xs font-bold text-gray-900 mb-2">⚡ Quick Reference</h4>
              <div className="space-y-1 text-[10px]">
                <div><span className="font-mono bg-white px-1 py-0.5 rounded">p-4</span> = padding: 1rem</div>
                <div><span className="font-mono bg-white px-1 py-0.5 rounded">m-2</span> = margin: 0.5rem</div>
                <div><span className="font-mono bg-white px-1 py-0.5 rounded">flex</span> = display: flex</div>
                <div><span className="font-mono bg-white px-1 py-0.5 rounded">grid-cols-3</span> = 3 columns</div>
                <div><span className="font-mono bg-white px-1 py-0.5 rounded">text-lg</span> = 1.125rem</div>
                <div><span className="font-mono bg-white px-1 py-0.5 rounded">hover:</span> = on hover</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}