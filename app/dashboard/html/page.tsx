'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  FiCopy, FiCheck, FiEye, FiFileText, 
  FiCode, FiInfo, FiGlobe, FiArrowRight, 
  FiArrowLeft, FiList, FiBookmark 
} from 'react-icons/fi';
import DashboardLayout from '../../components/layout/DashboardLayout';
import { htmlLessons, HTMLLesson } from '../../components/data/html';

export default function HTMLCoursePage() {
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

  const htmlSkeleton = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My First Page</title>
</head>
<body>
  <h1>Hello World!</h1>
  <p>This is my first HTML page.</p>
</body>
</html>`;

  // What is HTML in 3 languages
  const htmlDescription = {
    en: {
      title: "🌐 What is HTML?",
      paragraph: "HTML (HyperText Markup Language) is the standard language for creating web pages. It describes the structure of a web page using elements called tags. These tags tell the browser how to display content like headings, paragraphs, links, images, and more. Think of HTML as the skeleton of every website—it gives the page its shape and organization."
    },
    fr: {
      title: "🌐 Qu'est-ce que le HTML ?",
      paragraph: "HTML (HyperText Markup Language) est le langage standard pour créer des pages web. Il décrit la structure d'une page web à l'aide d'éléments appelés balises. Ces balises indiquent au navigateur comment afficher le contenu comme les titres, les paragraphes, les liens, les images, etc. Considérez HTML comme le squelette de chaque site web—il donne à la page sa forme et son organisation."
    },
    ar: {
      title: "🌐 ما هي لغة HTML؟",
      paragraph: "HTML (لغة ترميز النص التشعبي) هي اللغة القياسية لإنشاء صفحات الويب. تصف بنية صفحة الويب باستخدام عناصر تسمى الوسوم. تخبر هذه الوسوم المتصفح بكيفية عرض المحتوى مثل العناوين والفقرات والروابط والصور وغير ذلك. اعتبر HTML بمثابة الهيكل العظمي لكل موقع ويب - فهو يعطي الصفحة شكلها وتنظيمها."
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
    if (nextId <= htmlLessons.length) {
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
    <DashboardLayout pageTitle="HTML Course" showBackButton={true}>
      <div className="flex gap-6">
        
        {/* LEFT CONTENT */}
        <div className="flex-1 space-y-8">
          
          {/* WHAT IS HTML */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            id="html-intro"
            className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl overflow-hidden shadow-xl"
          >
            <div className="flex items-center justify-end gap-2 px-6 pt-4">
              <div className="flex items-center gap-1 bg-white/10 rounded-lg p-1 backdrop-blur">
                <button onClick={() => setActiveLanguage('en')} className={`px-3 py-1.5 rounded-md text-xs font-medium ${activeLanguage === 'en' ? 'bg-white text-slate-900' : 'text-white/70 hover:text-white hover:bg-white/20'}`}>EN</button>
                <button onClick={() => setActiveLanguage('fr')} className={`px-3 py-1.5 rounded-md text-xs font-medium ${activeLanguage === 'fr' ? 'bg-white text-slate-900' : 'text-white/70 hover:text-white hover:bg-white/20'}`}>FR</button>
                <button onClick={() => setActiveLanguage('ar')} className={`px-3 py-1.5 rounded-md text-xs font-medium ${activeLanguage === 'ar' ? 'bg-white text-slate-900' : 'text-white/70 hover:text-white hover:bg-white/20'}`}>AR</button>
              </div>
            </div>

            <div className={`p-6 ${activeLanguage === 'ar' ? 'text-right' : 'text-left'}`} dir={activeLanguage === 'ar' ? 'rtl' : 'ltr'}>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-white/20 rounded-xl"><FiGlobe className="text-white" size={24} /></div>
                <h2 className="text-2xl font-bold text-white">{htmlDescription[activeLanguage].title}</h2>
              </div>
              <p className="text-lg text-white/90 leading-relaxed max-w-4xl">{htmlDescription[activeLanguage].paragraph}</p>
              <div className="mt-6 flex items-center justify-between">
                <span className="px-3 py-1 bg-white/20 rounded-full text-xs text-white/90">📖 Foundation of the web</span>
                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => scrollToSection(1)} className="flex items-center gap-2 px-4 py-2 bg-white text-slate-900 rounded-lg text-sm font-medium shadow-lg">
                  Start Learning <FiArrowRight size={16} />
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* HTML PAGE STRUCTURE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            id="html-structure"
            className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl border border-indigo-100 overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="p-1.5 bg-indigo-100 rounded-lg"><FiFileText className="text-indigo-700" size={20} /></div>
                  <h3 className="text-lg font-bold text-gray-900">📄 HTML Page Structure</h3>
                  <span className="px-2 py-0.5 bg-indigo-200 text-indigo-800 text-xs font-medium rounded-full">skeleton</span>
                </div>
                <div className="font-mono text-sm bg-white/80 backdrop-blur rounded-lg p-4 border border-indigo-200">
                  <div>&lt;!DOCTYPE html&gt;</div>
                  <div className="ml-4 text-indigo-700">&lt;html&gt;</div>
                  <div className="ml-8 text-blue-600">&lt;head&gt;</div>
                  <div className="ml-12 text-gray-600">&lt;meta&gt;</div>
                  <div className="ml-12 text-gray-600">&lt;title&gt;Page Title&lt;/title&gt;</div>
                  <div className="ml-8 text-blue-600">&lt;/head&gt;</div>
                  <div className="ml-8 text-emerald-600">&lt;body&gt;</div>
                  <div className="ml-12 text-gray-900">&lt;h1&gt;Main Heading&lt;/h1&gt;</div>
                  <div className="ml-12 text-gray-900">&lt;p&gt;Paragraph text&lt;/p&gt;</div>
                  <div className="ml-8 text-emerald-600">&lt;/body&gt;</div>
                  <div className="ml-4 text-indigo-700">&lt;/html&gt;</div>
                </div>
              </div>
              <div className="bg-white/80 backdrop-blur rounded-lg p-4">
                <div className="flex items-start justify-between mb-3">
                  <h4 className="text-sm font-semibold text-gray-900">What is this?</h4>
                  <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => copyToClipboard(htmlSkeleton, 999)} className="flex items-center gap-1 px-2.5 py-1.5 bg-white rounded-lg text-xs font-medium shadow-sm border border-gray-200">
                    {copiedId === 999 ? <FiCheck size={12} /> : <FiCopy size={12} />}
                    {copiedId === 999 ? 'Copied!' : 'Copy'}
                  </motion.button>
                </div>
                <div className="space-y-2 text-xs">
                  <p><span className="font-bold text-indigo-700">&lt;!DOCTYPE&gt;</span> — HTML5 document</p>
                  <p><span className="font-bold text-indigo-700">&lt;html&gt;</span> — Root element</p>
                  <p><span className="font-bold text-blue-600">&lt;head&gt;</span> — Metadata</p>
                  <p><span className="font-bold text-emerald-600">&lt;body&gt;</span> — Visible content</p>
                </div>
              </div>
            </div>
            <div className="flex justify-end p-4 bg-white/50 border-t border-indigo-100">
              <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={() => scrollToSection(1)} className="flex items-center gap-1.5 px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium shadow-lg">
                Start Lessons <FiArrowRight size={16} />
              </motion.button>
            </div>
          </motion.div>

          {/* ALL LESSONS - SIMPLE INNERHTML PREVIEW */}
          <div className="space-y-12">
            {htmlLessons.map((lesson: HTMLLesson) => (
              <section
                key={lesson.id}
                id={`lesson-${lesson.id}`}
                ref={(el) => { sectionRefs.current[lesson.id] = el; }}
                className="scroll-mt-24"
              >
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-mono px-2 py-1 rounded-lg" style={{ backgroundColor: `${lesson.color}15`, color: lesson.color }}>Lesson {lesson.id}</span>
                    <span className="text-xs text-slate-400">•</span>
                    <span className="text-xs text-slate-500 capitalize">{lesson.category}</span>
                    <span className="text-[10px] px-2 py-0.5 bg-slate-100 rounded-full text-slate-600">{lesson.level}</span>
                  </div>
                  <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2" style={{ color: lesson.color }}>{lesson.title}</h1>
                  <p className="text-sm md:text-base text-gray-600 max-w-2xl">{lesson.description}</p>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold" style={{ backgroundColor: `${lesson.color}20`, color: lesson.color }}>{lesson.id}</span>
                    <h2 className="text-sm font-semibold text-gray-700">Practice & Examples</h2>
                  </div>
                  <div className="flex items-center gap-1">
                    {lesson.id > 1 && (
                      <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => scrollToSection(lesson.id - 1)} className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700">
                        <FiArrowLeft size={16} />
                      </motion.button>
                    )}
                    {lesson.id < htmlLessons.length && (
                      <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => scrollToSection(lesson.id + 1)} className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700">
                        <FiArrowRight size={16} />
                      </motion.button>
                    )}
                  </div>
                </div>

                {/* SIMPLE LESSON CARD - USING INNERHTML */}
                <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-md">
                  <div className="grid grid-cols-1 lg:grid-cols-1 gap-4 p-5 mx-5">
                    
                    {/* RIGHT: Code + Copy */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-1.5">
                        <div className="p-1 bg-slate-100 rounded-lg"><FiCode className="text-slate-600" size={14} /></div>
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
                          Copy and paste inside &lt;body&gt;
                        </p>
                      </div>

                      <motion.button
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                        className="w-full flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium transition-all"
                        style={{ backgroundColor: lesson.color, color: '#0a0a0a' }}
                      >
                        {copiedId === lesson.id ? <><FiCheck size={14} /> Copied!</> : <><FiCopy size={14} /> Copy Code</>}
                      </motion.button>
                    </div>
                  </div>
                </div>
              </section>
            ))}
          </div>

          <div className="text-center py-8">
            <p className="text-sm text-slate-500">HTML structures content, it doesn't "think".</p>
          </div>
        </div>

        {/* RIGHT SIDEBAR - w-64 */}
        <div className="w-64 hidden lg:block">
          <div className="sticky top-24 space-y-4">
            <div className="bg-white rounded-xl border border-gray-200 p-3">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-medium text-gray-700">Progress</span>
                <span className="text-xs font-semibold text-slate-600">{activeSection}/{htmlLessons.length}</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-1">
                <div className="h-1 rounded-full bg-gradient-to-r from-slate-500 to-slate-600" style={{ width: `${(activeSection / htmlLessons.length) * 100}%` }} />
              </div>
            </div>

            <div className="flex gap-1">
              <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={goToPrevious} disabled={activeSection === 1} className={`flex-1 flex items-center justify-center gap-1 px-2 py-1.5 rounded-lg text-xs font-medium ${activeSection === 1 ? 'bg-slate-50 text-slate-400 cursor-not-allowed' : 'bg-white border border-gray-200 hover:border-gray-300 text-slate-700'}`}>
                <FiArrowLeft size={14} /> Prev
              </motion.button>
              <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={goToNext} disabled={activeSection === htmlLessons.length} className={`flex-1 flex items-center justify-center gap-1 px-2 py-1.5 rounded-lg text-xs font-medium ${activeSection === htmlLessons.length ? 'bg-slate-50 text-slate-400 cursor-not-allowed' : 'bg-white border border-gray-200 hover:border-gray-300 text-slate-700'}`}>
                Next <FiArrowRight size={14} />
              </motion.button>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
              <div className="p-3 border-b border-gray-100 bg-gradient-to-r from-slate-50 to-white">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 bg-slate-100 rounded-lg"><FiList className="text-slate-600" size={16} /></div>
                  <div><h3 className="text-sm font-semibold text-gray-900">Course Outline</h3><p className="text-xs text-slate-500">{htmlLessons.length} lessons</p></div>
                </div>
              </div>
              <div className="p-2">
                <div className="mb-3">
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider px-2 mb-1">Getting Started</div>
                  <div className="space-y-0.5">
                    <button onClick={() => document.getElementById('html-intro')?.scrollIntoView({ behavior: 'smooth' })} className="w-full flex items-center gap-2 px-2 py-1.5 rounded-lg text-xs hover:bg-slate-50">
                      <div className="w-1 h-1 bg-slate-400 rounded-full" />
                      <span className="text-slate-600">What is HTML?</span>
                    </button>
                    <button onClick={() => document.getElementById('html-structure')?.scrollIntoView({ behavior: 'smooth' })} className="w-full flex items-center gap-2 px-2 py-1.5 rounded-lg text-xs hover:bg-slate-50">
                      <div className="w-1 h-1 bg-indigo-400 rounded-full" />
                      <span className="text-slate-600">Page Structure</span>
                    </button>
                  </div>
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider px-2 mb-1">HTML Tags ({htmlLessons.length})</div>
                  <div className="space-y-0.5 max-h-[400px] overflow-y-auto">
                    {htmlLessons.map((lesson) => (
                      <button key={lesson.id} onClick={() => scrollToSection(lesson.id)} className={`w-full flex items-center gap-2 px-2 py-1.5 rounded-lg text-xs ${activeSection === lesson.id ? 'bg-slate-100' : 'hover:bg-slate-50'}`} style={{ borderLeft: activeSection === lesson.id ? `2px solid ${lesson.color}` : '2px solid transparent' }}>
                        <span className="w-4 h-4 rounded flex items-center justify-center text-[10px] font-mono" style={{ backgroundColor: activeSection === lesson.id ? `${lesson.color}20` : '#f1f5f9', color: lesson.color }}>{lesson.id}</span>
                        <div className="flex-1 text-left">
                          <div className={`font-medium truncate ${activeSection === lesson.id ? 'text-gray-900' : 'text-gray-700'}`}>{lesson.title}</div>
                          <div className="text-[10px] text-slate-500 font-mono">{lesson.tag}</div>
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