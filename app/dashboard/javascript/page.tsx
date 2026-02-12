'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  FiCopy, FiCheck, FiEye, FiFileText, 
  FiCode, FiInfo, FiGlobe, FiArrowRight, 
  FiArrowLeft, FiList, FiBookmark, FiTerminal,
  FiBox, FiCpu, FiDatabase
} from 'react-icons/fi';
import DashboardLayout from '../../components/layout/DashboardLayout';
import { javascriptCourseData, JavaScriptConcept, javascriptCategories, javascriptQuickReference } from '../../components/data/js';

export default function JavaScriptCoursePage() {
  const [copiedId, setCopiedId] = useState<number | null>(null);
  const [activeLanguage, setActiveLanguage] = useState<'en' | 'fr'>('en');
  const [activeSection, setActiveSection] = useState<number>(1);
  const sectionRefs = useRef<{ [key: number]: HTMLElement | null }>({});

  const copyToClipboard = (text: string, id: number) => {
    if (!text) return;
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const jsSkeleton = `// JavaScript Basics
let message = "Hello World!";
console.log(message);

function greet(name) {
  return "Bonjour " + name + "!";
}

alert(greet("Marie"));`;

  // What is JavaScript in 2 languages
  const jsDescription = {
    en: {
      title: "⚡ What is JavaScript?",
      paragraph: "JavaScript is a programming language essential for web development. It adds interactivity to websites—animations, form validation, dynamic updates without reloading. With JavaScript, you can manipulate the DOM to dynamically change content and style, creating interactive web applications. Think of JavaScript as the brain of every website—it gives the page its behavior and intelligence."
    },
    fr: {
      title: "⚡ Qu'est-ce que JavaScript ?",
      paragraph: "JavaScript est un langage de programmation essentiel pour le développement web. Il ajoute de l'interactivité aux sites web—animations, validation de formulaires, mises à jour dynamiques sans rechargement. Avec JavaScript, vous pouvez manipuler le DOM pour modifier dynamiquement le contenu et le style, créant ainsi des applications web interactives. Considérez JavaScript comme le cerveau de chaque site web—il donne à la page son comportement et son intelligence."
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
    if (nextId <= javascriptCourseData.length) {
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

  return (
    <DashboardLayout pageTitle="JavaScript Course" showBackButton={true}>
      <div className="flex gap-6">
        
        {/* LEFT CONTENT */}
        <div className="flex-1 space-y-8">
          
          {/* WHAT IS JAVASCRIPT */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            id="js-intro"
            className="bg-gradient-to-br from-amber-900 to-amber-800 rounded-2xl overflow-hidden shadow-xl"
          >
            <div className="flex items-center justify-end gap-2 px-6 pt-4">
              <div className="flex items-center gap-1 bg-white/10 rounded-lg p-1 backdrop-blur">
                <button 
                  onClick={() => setActiveLanguage('en')} 
                  className={`px-3 py-1.5 rounded-md text-xs font-medium ${
                    activeLanguage === 'en' 
                      ? 'bg-white text-amber-900' 
                      : 'text-white/70 hover:text-white hover:bg-white/20'
                  }`}
                >
                  EN
                </button>
                <button 
                  onClick={() => setActiveLanguage('fr')} 
                  className={`px-3 py-1.5 rounded-md text-xs font-medium ${
                    activeLanguage === 'fr' 
                      ? 'bg-white text-amber-900' 
                      : 'text-white/70 hover:text-white hover:bg-white/20'
                  }`}
                >
                  FR
                </button>
              </div>
            </div>

            <div className="p-6 text-left" dir="ltr">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-white/20 rounded-xl">
                  <FiCpu className="text-white" size={24} />
                </div>
                <h2 className="text-2xl font-bold text-white">{jsDescription[activeLanguage].title}</h2>
              </div>
              <p className="text-lg text-white/90 leading-relaxed max-w-4xl">
                {jsDescription[activeLanguage].paragraph}
              </p>
              <div className="mt-6 flex items-center justify-between">
                <span className="px-3 py-1 bg-white/20 rounded-full text-xs text-white/90">
                  🧠 The brain of the web
                </span>
                <motion.button 
                  whileHover={{ scale: 1.05 }} 
                  whileTap={{ scale: 0.95 }} 
                  onClick={() => scrollToSection(1)} 
                  className="flex items-center gap-2 px-4 py-2 bg-white text-amber-900 rounded-lg text-sm font-medium shadow-lg"
                >
                  Start Learning <FiArrowRight size={16} />
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* JAVASCRIPT BASICS STRUCTURE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            id="js-structure"
            className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-2xl border border-amber-100 overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="p-1.5 bg-amber-100 rounded-lg">
                    <FiTerminal className="text-amber-700" size={20} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">📄 JavaScript Syntax</h3>
                  <span className="px-2 py-0.5 bg-amber-200 text-amber-800 text-xs font-medium rounded-full">
                    basics
                  </span>
                </div>
                <div className="font-mono text-sm bg-white/80 backdrop-blur rounded-lg p-4 border border-amber-200">
                  <div><span className="text-purple-600">// Variables</span></div>
                  <div><span className="text-blue-600">let</span> <span className="text-gray-900">name</span> = <span className="text-green-600">'Marie'</span>;</div>
                  <div><span className="text-blue-600">const</span> <span className="text-gray-900">PI</span> = <span className="text-amber-600">3.14</span>;</div>
                  <div> </div>
                  <div><span className="text-purple-600">// Function</span></div>
                  <div><span className="text-blue-600">function</span> <span className="text-amber-600">greet</span>(<span className="text-gray-900">name</span>) {}</div>
                  <div className="ml-4"><span className="text-blue-600">return</span> <span className="text-green-600">'Hello '</span> + name;</div>
                  <div>{'}'}</div>
                  <div> </div>
                  <div><span className="text-purple-600">// DOM</span></div>
                  <div><span className="text-gray-900">document</span>.<span className="text-amber-600">getElementById</span>(<span className="text-green-600">'title'</span>).<span className="text-gray-900">innerHTML</span> = <span className="text-green-600">'New!'</span>;</div>
                </div>
              </div>
              <div className="bg-white/80 backdrop-blur rounded-lg p-4">
                <div className="flex items-start justify-between mb-3">
                  <h4 className="text-sm font-semibold text-gray-900">Quick Reference</h4>
                  <motion.button 
                    whileHover={{ scale: 1.05 }} 
                    whileTap={{ scale: 0.95 }} 
                    onClick={() => copyToClipboard(jsSkeleton, 999)} 
                    className="flex items-center gap-1 px-2.5 py-1.5 bg-white rounded-lg text-xs font-medium shadow-sm border border-gray-200"
                  >
                    {copiedId === 999 ? <FiCheck size={12} /> : <FiCopy size={12} />}
                    {copiedId === 999 ? 'Copied!' : 'Copy'}
                  </motion.button>
                </div>
                <div className="space-y-2 text-xs">
                  <p><span className="font-bold text-blue-600">let / const</span> — Variables (reassignable / constant)</p>
                  <p><span className="font-bold text-amber-600">function</span> — Reusable code blocks</p>
                  <p><span className="font-bold text-purple-600">console.log()</span> — Debug output</p>
                  <p><span className="font-bold text-emerald-600">alert() / prompt()</span> — User interaction</p>
                  <p><span className="font-bold text-indigo-600">document</span> — DOM manipulation</p>
                </div>
              </div>
            </div>
            <div className="flex justify-end p-4 bg-white/50 border-t border-amber-100">
              <motion.button 
                whileHover={{ scale: 1.02 }} 
                whileTap={{ scale: 0.98 }} 
                onClick={() => scrollToSection(1)} 
                className="flex items-center gap-1.5 px-4 py-2 bg-amber-600 text-white rounded-lg text-sm font-medium shadow-lg"
              >
                Start Lessons <FiArrowRight size={16} />
              </motion.button>
            </div>
          </motion.div>

          {/* QUICK REFERENCE CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {javascriptQuickReference.map((ref, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-xl border border-gray-200 p-4 hover:shadow-md transition-shadow"
                style={{ borderTop: `4px solid ${ref.color}` }}
              >
                <h3 className="text-sm font-bold text-gray-900 mb-3">{ref.title}</h3>
                <ul className="space-y-1.5">
                  {ref.items.map((item, i) => (
                    <li key={i} className="text-xs text-gray-600 flex items-start gap-1.5">
                      <span className="text-gray-400 mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* ALL LESSONS - SIMPLE INNERHTML PREVIEW */}
          <div className="space-y-12 mt-8">
            {javascriptCourseData.map((lesson: JavaScriptConcept) => (
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
                    <span className="text-xs text-slate-500 capitalize">{lesson.category}</span>
                    <span className="text-[10px] px-2 py-0.5 bg-slate-100 rounded-full text-slate-600">
                      {lesson.level}
                    </span>
                  </div>
                  <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2" style={{ color: lesson.color }}>
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
                    <h2 className="text-sm font-semibold text-gray-700">Code Example</h2>
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
                    {lesson.id < javascriptCourseData.length && (
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

                {/* SIMPLE LESSON CARD - USING INNERHTML */}
                <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-md">
                  <div className="grid grid-cols-1 lg:grid-cols-1 gap-4 p-5 mx-5">
                    
                    {/* Code + Copy */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-1.5">
                        <div className="p-1 bg-slate-100 rounded-lg">
                          <FiCode className="text-slate-600" size={14} />
                        </div>
                        <h3 className="text-xs font-semibold text-gray-900 uppercase tracking-wider">
                          {lesson.preview.type === 'html' ? 'HTML + JS' : 'JavaScript'}
                        </h3>
                        {lesson.preview.props?.interactive && (
                          <span className="px-1.5 py-0.5 bg-blue-100 text-blue-700 rounded text-[10px] font-medium">
                            interactive
                          </span>
                        )}
                      </div>
                      
                      <div className="bg-gray-900 rounded-lg p-4 font-mono text-[10px] md:text-xs overflow-x-auto max-h-[250px] overflow-y-auto">
                        <pre className="text-gray-100 whitespace-pre-wrap">
                          <code>{lesson.example}</code>
                        </pre>
                      </div>

                      <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
                        <p className="text-[10px] text-amber-700 flex items-center gap-1.5">
                          <FiInfo size={12} />
                          {lesson.preview.content.map((line, i) => (
                            <span key={i} className="font-mono bg-white/50 px-1.5 py-0.5 rounded">
                              {line}
                            </span>
                          ))}
                        </p>
                      </div>

                      <motion.button
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                        onClick={() => copyToClipboard(lesson.example, lesson.id)}
                        className="w-full flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-lg text-xs font-medium transition-all"
                        style={{ backgroundColor: lesson.color, color: '#0a0a0a' }}
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

          <div className="text-center py-12">
            <p className="text-sm text-slate-500">
              JavaScript brings your web pages to life. It's not just a language—it's the magic behind the web.
            </p>
          </div>
        </div>

        {/* RIGHT SIDEBAR - w-64 */}
        <div className="w-64 hidden lg:block">
          <div className="sticky top-24 space-y-4">
            <div className="bg-white rounded-xl border border-gray-200 p-3">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-medium text-gray-700">Progress</span>
                <span className="text-xs font-semibold text-amber-600">
                  {activeSection}/{javascriptCourseData.length}
                </span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-1">
                <div 
                  className="h-1 rounded-full bg-gradient-to-r from-amber-500 to-amber-600" 
                  style={{ width: `${(activeSection / javascriptCourseData.length) * 100}%` }} 
                />
              </div>
            </div>

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
                disabled={activeSection === javascriptCourseData.length} 
                className={`flex-1 flex items-center justify-center gap-1 px-2 py-1.5 rounded-lg text-xs font-medium ${
                  activeSection === javascriptCourseData.length 
                    ? 'bg-slate-50 text-slate-400 cursor-not-allowed' 
                    : 'bg-white border border-gray-200 hover:border-gray-300 text-slate-700'
                }`}
              >
                Next <FiArrowRight size={14} />
              </motion.button>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
              <div className="p-3 border-b border-gray-100 bg-gradient-to-r from-slate-50 to-white">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 bg-amber-100 rounded-lg">
                    <FiList className="text-amber-700" size={16} />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900">Course Outline</h3>
                    <p className="text-xs text-slate-500">{javascriptCourseData.length} concepts</p>
                  </div>
                </div>
              </div>
              <div className="p-2">
                <div className="mb-3">
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider px-2 mb-1">
                    Getting Started
                  </div>
                  <div className="space-y-0.5">
                    <button 
                      onClick={() => document.getElementById('js-intro')?.scrollIntoView({ behavior: 'smooth' })} 
                      className="w-full flex items-center gap-2 px-2 py-1.5 rounded-lg text-xs hover:bg-slate-50"
                    >
                      <div className="w-1 h-1 bg-amber-400 rounded-full" />
                      <span className="text-slate-600">What is JavaScript?</span>
                    </button>
                    <button 
                      onClick={() => document.getElementById('js-structure')?.scrollIntoView({ behavior: 'smooth' })} 
                      className="w-full flex items-center gap-2 px-2 py-1.5 rounded-lg text-xs hover:bg-slate-50"
                    >
                      <div className="w-1 h-1 bg-amber-500 rounded-full" />
                      <span className="text-slate-600">JS Syntax</span>
                    </button>
                  </div>
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider px-2 mb-1">
                    JavaScript Concepts ({javascriptCourseData.length})
                  </div>
                  <div className="space-y-0.5 max-h-[400px] overflow-y-auto">
                    {javascriptCourseData.map((lesson) => (
                      <button 
                        key={lesson.id} 
                        onClick={() => scrollToSection(lesson.id)} 
                        className={`w-full flex items-center gap-2 px-2 py-1.5 rounded-lg text-xs ${
                          activeSection === lesson.id ? 'bg-slate-100' : 'hover:bg-slate-50'
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
                          <div className="text-[10px] text-slate-500 font-mono">
                            {lesson.category}
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* CATEGORY FILTER QUICK REF */}
            <div className="bg-white rounded-xl border border-gray-200 p-3">
              <h3 className="text-xs font-semibold text-gray-900 mb-2 flex items-center gap-1.5">
                <FiBookmark size={12} />
                Categories
              </h3>
              <div className="flex flex-wrap gap-1">
                {javascriptCategories.slice(0, 5).map((cat) => (
                  <span 
                    key={cat.id}
                    className="px-2 py-1 rounded-full text-[10px] font-medium"
                    style={{ 
                      backgroundColor: `${cat.color}15`, 
                      color: cat.color 
                    }}
                  >
                    {cat.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}