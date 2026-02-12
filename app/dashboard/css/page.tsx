// app/dashboard/css-course/page.tsx
'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  FiCopy, FiCheck, FiEye, FiFileText, 
  FiCode, FiInfo, FiGlobe, FiArrowRight, 
  FiArrowLeft, FiList, FiBookmark, FiDroplet,
  FiLayout, FiBox, FiType, FiImage, FiSquare,
  FiCrop, FiRotateCcw, FiActivity
} from 'react-icons/fi';
import DashboardLayout from '../../components/layout/DashboardLayout';
import { cssLessons, CSSLesson, cssCategories } from '../../components/data/css';

export default function CSSCoursePage() {
  const [copiedId, setCopiedId] = useState<number | null>(null);
  const [activeLanguage, setActiveLanguage] = useState<'en' | 'fr' | 'ar'>('en');
  const [activeSection, setActiveSection] = useState<number>(1);
  const sectionRefs = useRef<{ [key: number]: HTMLElement | null }>({});

  const copyToClipboard = (text: string, id: number) => {
    if (!text) return;
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const cssSkeleton = `/* CSS RULE STRUCTURE */
selector {
  property: value;
  property: value;
}

/* EXAMPLE */
p {
  color: #ffb7c5;
  font-size: 16px;
  margin-bottom: 12px;
}`;

  // What is CSS in 3 languages
  const cssDescription = {
    en: {
      title: "🎨 What is CSS?",
      paragraph: "CSS (Cascading Style Sheets) is the language that styles the web. It controls the visual presentation—colors, fonts, spacing, layout, and animations. If HTML is the skeleton of a website, CSS is the skin and clothes. It separates content from design, making websites beautiful, responsive, and maintainable."
    },
    fr: {
      title: "🎨 Qu'est-ce que le CSS ?",
      paragraph: "CSS (Cascading Style Sheets) est le langage qui habille le web. Il contrôle la présentation visuelle—couleurs, polices, espacements, disposition et animations. Si HTML est le squelette d'un site web, CSS est la peau et les vêtements. Il sépare le contenu du design, rendant les sites beaux, responsifs et faciles à maintenir."
    },
    ar: {
      title: "🎨 ما هي CSS؟",
      paragraph: "CSS (صفحات الأنماط المتتالية) هي اللغة التي تصمم الويب. تتحكم في المظهر البصري - الألوان والخطوط والمسافات والتخطيط والرسوم المتحركة. إذا كان HTML هو الهيكل العظمي للموقع، فإن CSS هي الجلد والملابس. تفصل المحتوى عن التصميم، مما يجعل المواقع جميلة ومتجاوبة وسهلة الصيانة."
    }
  };

  const scrollToSection = (id: number) => {
    setActiveSection(id);
    sectionRefs.current[id]?.scrollIntoView({ 
      behavior: 'smooth', 
      block: 'start' 
    });
  };

  const goToNext = () => {
    const nextId = activeSection + 1;
    if (nextId <= cssLessons.length) {
      scrollToSection(nextId);
    }
  };

  const goToPrevious = () => {
    const prevId = activeSection - 1;
    if (prevId >= 1) {
      scrollToSection(prevId);
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
  }, []);

  // Helper to get icon based on category
  const getCategoryIcon = (category: string) => {
    switch(category) {
      case 'selectors': return <FiCode size={16} />;
      case 'text': return <FiType size={16} />;
      case 'background': return <FiImage size={16} />;
      case 'borders': return <FiSquare size={16} />;
      case 'lists': return <FiList size={16} />;
      case 'tables': return <FiLayout size={16} />;
      case 'filters': return <FiCrop size={16} />;
      case 'box': return <FiBox size={16} />;
      case 'transform': return <FiRotateCcw size={16} />;
      case 'animation': return <FiActivity size={16} />;
      default: return <FiDroplet size={16} />;
    }
  };

  return (
    <DashboardLayout pageTitle="CSS Course" showBackButton={true}>
      <div className="flex gap-6">
        
        {/* LEFT CONTENT */}
        <div className="flex-1 space-y-8">
          
          {/* WHAT IS CSS */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            id="css-intro"
            className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl overflow-hidden shadow-xl"
          >
            <div className="flex items-center justify-end gap-2 px-6 pt-4">
              <div className="flex items-center gap-1 bg-white/10 rounded-lg p-1 backdrop-blur">
                <button 
                  onClick={() => setActiveLanguage('en')} 
                  className={`px-3 py-1.5 rounded-md text-xs font-medium transition ${
                    activeLanguage === 'en' 
                      ? 'bg-white text-slate-900' 
                      : 'text-white/70 hover:text-white hover:bg-white/20'
                  }`}
                >
                  EN
                </button>
                <button 
                  onClick={() => setActiveLanguage('fr')} 
                  className={`px-3 py-1.5 rounded-md text-xs font-medium transition ${
                    activeLanguage === 'fr' 
                      ? 'bg-white text-slate-900' 
                      : 'text-white/70 hover:text-white hover:bg-white/20'
                  }`}
                >
                  FR
                </button>
                <button 
                  onClick={() => setActiveLanguage('ar')} 
                  className={`px-3 py-1.5 rounded-md text-xs font-medium transition ${
                    activeLanguage === 'ar' 
                      ? 'bg-white text-slate-900' 
                      : 'text-white/70 hover:text-white hover:bg-white/20'
                  }`}
                >
                  AR
                </button>
              </div>
            </div>

            <div 
              className={`p-6 ${activeLanguage === 'ar' ? 'text-right' : 'text-left'}`} 
              dir={activeLanguage === 'ar' ? 'rtl' : 'ltr'}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-white/20 rounded-xl">
                  <FiDroplet className="text-white" size={24} />
                </div>
                <h2 className="text-2xl font-bold text-white">
                  {cssDescription[activeLanguage].title}
                </h2>
              </div>
              <p className="text-lg text-white/90 leading-relaxed max-w-4xl">
                {cssDescription[activeLanguage].paragraph}
              </p>
              <div className="mt-6 flex items-center justify-between">
                <span className="px-3 py-1 bg-white/20 rounded-full text-xs text-white/90">
                  🎨 Makes the web beautiful
                </span>
                <motion.button 
                  whileHover={{ scale: 1.05 }} 
                  whileTap={{ scale: 0.95 }} 
                  onClick={() => scrollToSection(1)} 
                  className="flex items-center gap-2 px-4 py-2 bg-white text-slate-900 rounded-lg text-sm font-medium shadow-lg"
                >
                  Start Styling <FiArrowRight size={16} />
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* CSS RULE STRUCTURE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            id="css-structure"
            className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl border border-pink-100 overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="p-1.5 bg-pink-100 rounded-lg">
                    <FiFileText className="text-pink-700" size={20} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">📐 CSS Rule Anatomy</h3>
                  <span className="px-2 py-0.5 bg-pink-200 text-pink-800 text-xs font-medium rounded-full">
                    selector + declaration
                  </span>
                </div>
                <div className="font-mono text-sm bg-white/80 backdrop-blur rounded-lg p-4 border border-pink-200">
                  <div><span className="text-indigo-600 font-bold">p</span> {'{'}</div>
                  <div className="ml-4 text-emerald-600">color<span className="text-gray-600">: </span>#ffb7c5<span className="text-gray-600">;</span></div>
                  <div className="ml-4 text-emerald-600">font-size<span className="text-gray-600">: </span>16px<span className="text-gray-600">;</span></div>
                  <div className="ml-4 text-emerald-600">margin-bottom<span className="text-gray-600">: </span>12px<span className="text-gray-600">;</span></div>
                  <div className="text-indigo-600">{'}'}</div>
                </div>
              </div>
              <div className="bg-white/80 backdrop-blur rounded-lg p-4">
                <div className="flex items-start justify-between mb-3">
                  <h4 className="text-sm font-semibold text-gray-900">Parts of a Rule</h4>
                  <motion.button 
                    whileHover={{ scale: 1.05 }} 
                    whileTap={{ scale: 0.95 }} 
                    onClick={() => copyToClipboard(cssSkeleton, 999)} 
                    className="flex items-center gap-1 px-2.5 py-1.5 bg-white rounded-lg text-xs font-medium shadow-sm border border-gray-200"
                  >
                    {copiedId === 999 ? <FiCheck size={12} /> : <FiCopy size={12} />}
                    {copiedId === 999 ? 'Copied!' : 'Copy'}
                  </motion.button>
                </div>
                <div className="space-y-2 text-xs">
                  <p><span className="font-bold text-indigo-600">Selector</span> — Targets HTML element(s)</p>
                  <p><span className="font-bold text-emerald-600">Property</span> — What to style (color, margin...)</p>
                  <p><span className="font-bold text-amber-600">Value</span> — How to style it (#ffb7c5, 16px...)</p>
                  <p><span className="font-bold text-gray-600">Declaration</span> — property: value; pair</p>
                  <p><span className="font-bold text-pink-600">Rule</span> — selector + { '{ }' } with declarations</p>
                </div>
              </div>
            </div>
            <div className="flex justify-end p-4 bg-white/50 border-t border-pink-100">
              <motion.button 
                whileHover={{ scale: 1.02 }} 
                whileTap={{ scale: 0.98 }} 
                onClick={() => scrollToSection(1)} 
                className="flex items-center gap-1.5 px-4 py-2 bg-pink-600 text-white rounded-lg text-sm font-medium shadow-lg"
              >
                Start Lessons <FiArrowRight size={16} />
              </motion.button>
            </div>
          </motion.div>

          {/* ALL LESSONS - CODE ONLY, NO RENDERING */}
          <div className="space-y-16">
            {cssLessons.map((lesson: CSSLesson) => (
              <section
                key={lesson.id}
                id={`lesson-${lesson.id}`}
                ref={(el) => { sectionRefs.current[lesson.id] = el; }}
                className="scroll-mt-24"
              >
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span 
                      className="text-xs font-mono px-2 py-1 rounded-lg" 
                      style={{ backgroundColor: `${lesson.color}15`, color: lesson.color }}
                    >
                      Lesson {lesson.id}
                    </span>
                    <span className="text-xs text-slate-400">•</span>
                    <span className="text-xs text-slate-500 capitalize flex items-center gap-1">
                      {getCategoryIcon(lesson.category)}
                      {lesson.category}
                    </span>
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
                  <p className="text-sm md:text-base text-gray-600 max-w-2xl">
                    {lesson.description}
                  </p>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span 
                      className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold"
                      style={{ backgroundColor: `${lesson.color}20`, color: lesson.color }}
                    >
                      {lesson.id}
                    </span>
                    <h2 className="text-sm font-semibold text-gray-700">
                      CSS Code Example
                    </h2>
                  </div>
                  <div className="flex items-center gap-1">
                    {lesson.id > 1 && (
                      <motion.button 
                        whileHover={{ scale: 1.1 }} 
                        whileTap={{ scale: 0.9 }} 
                        onClick={() => scrollToSection(lesson.id - 1)} 
                        className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700"
                      >
                        <FiArrowLeft size={16} />
                      </motion.button>
                    )}
                    {lesson.id < cssLessons.length && (
                      <motion.button 
                        whileHover={{ scale: 1.1 }} 
                        whileTap={{ scale: 0.9 }} 
                        onClick={() => scrollToSection(lesson.id + 1)} 
                        className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700"
                      >
                        <FiArrowRight size={16} />
                      </motion.button>
                    )}
                  </div>
                </div>

                {/* LESSON CARD - CODE ONLY, NO DANGEROUSLYSETINNERHTML */}
                <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-md">
                  <div className="p-5">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-1.5">
                        <div className="p-1 bg-slate-100 rounded-lg">
                          <FiCode className="text-slate-600" size={14} />
                        </div>
                        <h3 className="text-xs font-semibold text-gray-900 uppercase tracking-wider">
                          CSS Code
                        </h3>
                      </div>
                      <span className="text-[10px] px-2 py-0.5 bg-slate-100 rounded-full font-mono">
                        {lesson.category}
                      </span>
                    </div>
                    
                    <div className="bg-gray-900 rounded-lg p-4 font-mono text-xs md:text-sm overflow-x-auto max-h-[300px] overflow-y-auto">
                      <pre className="text-gray-100 whitespace-pre-wrap">
                        <code>{lesson.example}</code>
                      </pre>
                    </div>

                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex flex-wrap gap-1 items-center">
                        <span className="text-[10px] font-mono text-slate-500">Properties:</span>
                        {lesson.preview.properties.map((prop, idx) => (
                          <span 
                            key={idx} 
                            className="text-[10px] px-2 py-0.5 bg-white border border-gray-300 rounded-full text-gray-700 font-mono"
                          >
                            {prop}
                          </span>
                        ))}
                      </div>

                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => copyToClipboard(lesson.example, lesson.id)}
                        className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-medium transition-all"
                        style={{ backgroundColor: lesson.color, color: '#0a0a0a' }}
                      >
                        {copiedId === lesson.id ? (
                          <><FiCheck size={14} /> Copied!</>
                        ) : (
                          <><FiCopy size={14} /> Copy CSS</>
                        )}
                      </motion.button>
                    </div>
                  </div>
                </div>
              </section>
            ))}
          </div>

          <div className="text-center py-8 border-t border-gray-200">
            <p className="text-sm text-slate-500 italic">
              "CSS is the paint, the polish, and the magic that turns structure into art."
            </p>
          </div>
        </div>

        {/* RIGHT SIDEBAR - w-64 */}
        <div className="w-64 hidden lg:block">
          <div className="sticky top-24 space-y-4">
            {/* Progress */}
            <div className="bg-white rounded-xl border border-gray-200 p-3">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-medium text-gray-700">Progress</span>
                <span className="text-xs font-semibold text-slate-600">
                  {activeSection}/{cssLessons.length}
                </span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-1">
                <div 
                  className="h-1 rounded-full bg-gradient-to-r from-slate-500 to-slate-600" 
                  style={{ width: `${(activeSection / cssLessons.length) * 100}%` }} 
                />
              </div>
            </div>

            {/* Prev/Next */}
            <div className="flex gap-1">
              <motion.button 
                whileHover={{ scale: 1.02 }} 
                whileTap={{ scale: 0.98 }} 
                onClick={goToPrevious} 
                disabled={activeSection === 1} 
                className={`flex-1 flex items-center justify-center gap-1 px-2 py-1.5 rounded-lg text-xs font-medium ${
                  activeSection === 1 
                    ? 'bg-slate-50 text-slate-400 cursor-not-allowed' 
                    : 'bg-white border border-gray-200 hover:border-gray-300 text-slate-700'
                }`}
              >
                <FiArrowLeft size={14} /> Prev
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.02 }} 
                whileTap={{ scale: 0.98 }} 
                onClick={goToNext} 
                disabled={activeSection === cssLessons.length} 
                className={`flex-1 flex items-center justify-center gap-1 px-2 py-1.5 rounded-lg text-xs font-medium ${
                  activeSection === cssLessons.length 
                    ? 'bg-slate-50 text-slate-400 cursor-not-allowed' 
                    : 'bg-white border border-gray-200 hover:border-gray-300 text-slate-700'
                }`}
              >
                Next <FiArrowRight size={14} />
              </motion.button>
            </div>

            {/* Course Outline */}
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
              <div className="p-3 border-b border-gray-100 bg-gradient-to-r from-slate-50 to-white">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 bg-slate-100 rounded-lg">
                    <FiList className="text-slate-600" size={16} />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900">CSS Course</h3>
                    <p className="text-xs text-slate-500">{cssLessons.length} lessons</p>
                  </div>
                </div>
              </div>
              
              <div className="p-2">
                {/* Getting Started */}
                <div className="mb-3">
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider px-2 mb-1">
                    Getting Started
                  </div>
                  <div className="space-y-0.5">
                    <button 
                      onClick={() => document.getElementById('css-intro')?.scrollIntoView({ behavior: 'smooth' })} 
                      className="w-full flex items-center gap-2 px-2 py-1.5 rounded-lg text-xs hover:bg-slate-50"
                    >
                      <div className="w-1 h-1 bg-slate-400 rounded-full" />
                      <span className="text-slate-600">What is CSS?</span>
                    </button>
                    <button 
                      onClick={() => document.getElementById('css-structure')?.scrollIntoView({ behavior: 'smooth' })} 
                      className="w-full flex items-center gap-2 px-2 py-1.5 rounded-lg text-xs hover:bg-slate-50"
                    >
                      <div className="w-1 h-1 bg-pink-400 rounded-full" />
                      <span className="text-slate-600">CSS Rule Structure</span>
                    </button>
                  </div>
                </div>

                {/* Lessons List */}
                <div>
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider px-2 mb-1">
                    All Lessons ({cssLessons.length})
                  </div>
                  <div className="space-y-0.5 max-h-[400px] overflow-y-auto pr-1">
                    {cssLessons.map((lesson) => (
                      <button 
                        key={lesson.id} 
                        onClick={() => scrollToSection(lesson.id)} 
                        className={`w-full flex items-center gap-2 px-2 py-1.5 rounded-lg text-xs transition ${
                          activeSection === lesson.id 
                            ? 'bg-slate-100' 
                            : 'hover:bg-slate-50'
                        }`}
                        style={{ 
                          borderLeft: activeSection === lesson.id 
                            ? `2px solid ${lesson.color}` 
                            : '2px solid transparent' 
                        }}
                      >
                        <span 
                          className="w-4 h-4 rounded flex items-center justify-center text-[10px] font-mono"
                          style={{ 
                            backgroundColor: activeSection === lesson.id 
                              ? `${lesson.color}20` 
                              : '#f1f5f9', 
                            color: lesson.color 
                          }}
                        >
                          {lesson.id}
                        </span>
                        <div className="flex-1 text-left">
                          <div className={`font-medium truncate ${
                            activeSection === lesson.id 
                              ? 'text-gray-900' 
                              : 'text-gray-700'
                          }`}>
                            {lesson.title}
                          </div>
                          <div className="text-[10px] text-slate-500 font-mono truncate">
                            {lesson.preview.properties[0] || 'property: value;'}
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}