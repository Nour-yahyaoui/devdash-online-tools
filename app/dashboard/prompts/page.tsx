"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DashboardLayout from "../../components/layout/DashboardLayout";
import {
  FiArrowRight,
  FiCheck,
  FiCopy,
  FiCode,
  FiFileText,
  FiBox, // Replaces FiCube
  FiAlertCircle, // Replaces FiBug
  FiZap, // Replaces FiLightbulb
  FiTwitter,
  FiGithub,
  FiLinkedin,
  FiArrowDown,
  FiInfo,
  FiCheckCircle,
  FiXCircle,
  FiFile,
  FiDownload,
  FiEye,
} from "react-icons/fi";

export default function PromptEngineeringPage() {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [activeTab, setActiveTab] = useState("formula");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  // Copy to clipboard function
  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };
 useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveTab(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: '-80px 0px -80px 0px' }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  // Scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: "smooth",
      });
      setActiveTab(sectionId);
    }
  };

  // Intersection Observer for active tab
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveTab(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: "-80px 0px -80px 0px" },
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const copyButtonVariants = {
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
  };

  return (
    <DashboardLayout>
      <div className="min-h-screen bg-white">
        {/* Custom Styles */}
        <style jsx>{`
          @keyframes typing {
            from {
              width: 0;
            }
            to {
              width: 100%;
            }
          }
          @keyframes blink-caret {
            from,
            to {
              border-color: transparent;
            }
            50% {
              border-color: black;
            }
          }
          .typewriter {
            overflow: hidden;
            border-right: 0.15em solid black;
            white-space: nowrap;
            animation:
              typing 3.5s steps(40, end),
              blink-caret 0.75s step-end infinite;
          }
          .border-animate {
            position: relative;
            overflow: hidden;
          }
          .border-animate::after {
            content: "";
            position: absolute;
            bottom: 0;
            left: -100%;
            width: 100%;
            height: 2px;
            background: black;
            transition: left 0.3s ease;
          }
          .border-animate:hover::after {
            left: 0;
          }
          .tab-active {
            border-bottom: 2px solid black;
            font-weight: 600;
            color: black;
          }
          .highlight {
            position: relative;
            display: inline-block;
          }
          .highlight::after {
            content: "";
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 30%;
            background-color: rgba(0, 0, 0, 0.08);
            z-index: -1;
          }
        `}</style>

        {/* Hero Section */}
        <section
          id="hero"
          className="py-20 px-4 border-b border-gray-200 bg-white"
        >
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <motion.div
                className="lg:w-1/2"
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
              >
                <div className="mb-6">
                  <span className="text-xs font-semibold tracking-wider uppercase px-3 py-1 bg-gray-100 rounded-full text-gray-700">
                    Master the Art of
                  </span>
                  <h1 className="text-5xl md:text-6xl font-black mt-6 mb-6 leading-tight">
                    AI Prompt
                    <br />
                    <span className="typewriter inline-block min-w-[280px]">
                      Engineering
                    </span>
                  </h1>
                </div>
                <p className="text-xl text-gray-600 mb-10 max-w-xl">
                  Learn the exact formulas to get perfect results from AI
                  assistants.
                  <span className="font-semibold text-black">
                    {" "}
                    Black and white methodology
                  </span>{" "}
                  for colorful results.
                </p>
                <div className="flex flex-wrap gap-4">
                  <motion.button
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => scrollToSection("formula")}
                    className="bg-black text-white font-semibold py-4 px-8 rounded-lg hover:bg-gray-800 border border-black shadow-md flex items-center gap-3"
                  >
                    <span>Start Learning</span>
                    <FiArrowRight />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => scrollToSection("templates")}
                    className="bg-white text-black font-semibold py-4 px-8 rounded-lg border-2 border-black hover:bg-gray-50 flex items-center gap-3"
                  >
                    <span>View Templates</span>
                    <FiFileText />
                  </motion.button>
                </div>
              </motion.div>

              <motion.div
                className="lg:w-1/2 flex justify-center"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <div className="relative">
                  <div className="absolute -top-4 -left-4 w-32 h-32 border border-gray-300 rounded-lg -z-10"></div>
                  <div className="absolute -bottom-4 -right-4 w-32 h-32 border border-gray-300 rounded-lg -z-10"></div>
                  <div className="relative bg-white p-10 rounded-xl border-2 border-gray-200 shadow-xl max-w-md">
                    <div className="text-center mb-8">
                      <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                        <FiCode className="text-white text-3xl" />
                      </div>
                      <h3 className="text-2xl font-bold mb-4">
                        Before & After
                      </h3>
                    </div>
                    <div className="space-y-6">
                      <div>
                        <div className="flex items-center mb-2">
                          <div className="w-3 h-3 bg-gray-400 rounded-full mr-3"></div>
                          <p className="text-sm font-medium text-gray-500">
                            Weak Prompt
                          </p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                          <p className="text-gray-700 font-mono text-sm">
                            "Write some code"
                          </p>
                        </div>
                      </div>
                      <div className="relative">
                        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-300 -z-10"></div>
                        <div className="text-center my-4">
                          <div className="inline-flex items-center justify-center w-8 h-8 bg-black text-white rounded-full shadow-md">
                            <FiArrowDown />
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center mb-2">
                          <div className="w-3 h-3 bg-black rounded-full mr-3"></div>
                          <p className="text-sm font-medium text-gray-900">
                            Strong Prompt
                          </p>
                        </div>
                        <div
                          className="text-white p-4 rounded-lg"
                          style={{ backgroundColor: "#475569" }}
                        >
                          <p className="font-medium text-sm">
                            "Create a React component with TypeScript, Tailwind,
                            accessibility, error handling, proper prop types,
                            and comprehensive documentation..."
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Sticky Navigation */}
        <nav className="sticky top-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="flex overflow-x-auto py-4 gap-2 hide-scrollbar">
              {[
                { id: "formula", label: "The Formula" },
                { id: "context", label: "Context" },
                { id: "specificity", label: "Specificity" },
                { id: "constraints", label: "Constraints" },
                { id: "templates", label: "Templates" },
                { id: "practice", label: "Practice" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => scrollToSection(tab.id)}
                  className={`tab-item py-2 px-6 font-medium whitespace-nowrap border-animate transition-colors ${
                    activeTab === tab.id
                      ? "tab-active text-black"
                      : "text-gray-600 hover:text-black"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="container mx-auto max-w-6xl py-16 px-4 space-y-32">
          {/* The Formula Section */}
          <section
            id="formula"
          >
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="space-y-16"
            >
              <div className="text-center max-w-3xl mx-auto">
                <motion.span
                  variants={fadeInUp}
                  className="text-xs font-semibold tracking-wider uppercase px-3 py-1 bg-gray-100 rounded-full text-gray-700"
                >
                  The Core Principle
                </motion.span>
                <motion.h2
                  variants={fadeInUp}
                  className="text-4xl md:text-5xl font-black mt-6 mb-6"
                >
                  The Ultimate
                  <br />
                  <span className="bg-gradient-to-r from-black to-gray-600 bg-clip-text text-transparent">
                    Prompt Formula
                  </span>
                </motion.h2>
                <motion.p variants={fadeInUp} className="text-xl text-gray-600">
                  A systematic approach that works for ChatGPT, Claude, Gemini,
                  and all major AI models.
                </motion.p>
              </div>

              <motion.div
                variants={staggerContainer}
                className="grid md:grid-cols-4 gap-6"
              >
                {[
                  {
                    number: "1",
                    title: "CONTEXT",
                    desc: "Set the stage. Define the environment, tools, and goals.",
                    detail: "Project type, audience, tech stack",
                  },
                  {
                    number: "2",
                    title: "SPECIFICITY",
                    desc: "Be surgical. Detailed requirements prevent vague outputs.",
                    detail: "Exact features, components, behavior",
                  },
                  {
                    number: "3",
                    title: "CONSTRAINTS",
                    desc: "Define limits. Tell the AI what NOT to do.",
                    detail: "Avoid patterns, restrictions, boundaries",
                  },
                  {
                    number: "4",
                    title: "FORMAT",
                    desc: "Structure output. Define how the response should be organized.",
                    detail: "Code style, file structure, documentation",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    variants={fadeInUp}
                    whileHover={{
                      y: -4,
                      boxShadow: "0 20px 25px -5px rgba(0,0,0,0.05)",
                    }}
                    className="bg-white p-8 rounded-xl border border-gray-200 hover:border-gray-300 transition-all"
                  >
                    <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center mb-6">
                      <span className="text-2xl font-black">{item.number}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                    <p className="text-gray-600 mb-4 text-sm">{item.desc}</p>
                    <div className="text-xs text-gray-500 flex items-start gap-2">
                      <FiCheckCircle
                        className="mt-0.5 flex-shrink-0"
                        size={12}
                      />
                      <span>{item.detail}</span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="bg-gray-50 p-10 rounded-2xl border border-gray-200"
              >
                <div className="flex flex-col md:flex-row items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-white text-xl font-bold">=</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-4">
                      The Complete Equation
                    </h3>
                    <div className="bg-white p-6 rounded-xl mb-4 border border-gray-200 shadow-sm">
                      <code className="text-2xl md:text-3xl font-black font-mono tracking-tight block mb-4">
                        CONTEXT + SPECIFICITY + CONSTRAINTS + FORMAT
                      </code>
                      <div className="pt-4 border-t border-gray-200">
                        <code className="text-3xl md:text-4xl font-black font-mono bg-gradient-to-r from-black to-gray-600 bg-clip-text text-transparent">
                          = PERFECT RESULT
                        </code>
                      </div>
                    </div>
                    <p className="text-gray-700 text-lg">
                      This formula transforms ambiguous requests into precise,
                      actionable instructions that AI can execute perfectly.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </section>

          {/* Context Layer Section */}
          <section
            id="context"
          >
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="flex flex-col lg:flex-row gap-12 items-start"
            >
              <div className="lg:w-2/5">
                <motion.span
                  variants={fadeInUp}
                  className="text-xs font-semibold tracking-wider uppercase px-3 py-1 bg-gray-100 rounded-full text-gray-700"
                >
                  Step 01
                </motion.span>
                <motion.h2
                  variants={fadeInUp}
                  className="text-4xl font-black mt-6 mb-6"
                >
                  Context
                  <br />
                  <span className="highlight">Layer</span>
                </motion.h2>
                <motion.p
                  variants={fadeInUp}
                  className="text-xl text-gray-600 mb-8"
                >
                  AI operates in a vacuum unless you provide the environment.
                  Good context turns generic responses into tailored solutions.
                </motion.p>

                <motion.div
                  variants={fadeInUp}
                  className="bg-white p-6 rounded-xl border-l-4 border-black shadow-md mb-6"
                >
                  <h4 className="font-bold text-lg mb-3 flex items-center gap-3">
                    Key Insight
                  </h4>
                  <p className="text-gray-700">
                    Context is the foundation. Without it, AI makes assumptions
                    that rarely match your actual needs.
                  </p>
                </motion.div>
              </div>

              <div className="lg:w-3/5">
                <motion.div
                  variants={fadeInUp}
                  className="bg-white rounded-2xl border-2 border-gray-200 overflow-hidden shadow-xl"
                >
                  <div className="border-b border-gray-200 p-6 bg-gray-50">
                    <h3 className="text-2xl font-bold">Context Comparison</h3>
                    <p className="text-gray-600">
                      See the dramatic difference proper context makes
                    </p>
                  </div>

                  <div className="p-8">
                    <div className="mb-10">
                      <div className="flex items-center mb-4">
                        <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center mr-4">
                          <FiXCircle className="text-gray-600" />
                        </div>
                        <div>
                          <h4 className="font-bold text-lg">Weak Context</h4>
                          <p className="text-sm text-gray-500">
                            Vague, assumption-prone
                          </p>
                        </div>
                      </div>
                      <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                        <div className="font-mono text-gray-700">
                          <span className="text-gray-400">
                            // What you might type
                          </span>
                          <br />
                          "Write a login form"
                        </div>
                      </div>
                    </div>

                    <div className="relative my-8">
                      <div className="absolute left-0 right-0 top-1/2 border-t border-gray-300"></div>
                      <div className="relative flex justify-center">
                        <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center shadow-lg">
                          <FiArrowDown className="text-white" />
                        </div>
                      </div>
                    </div>

                    <div className="mt-8">
                      <div className="flex items-center mb-4">
                        <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center mr-4">
                          <FiCheck className="text-white" />
                        </div>
                        <div>
                          <h4 className="font-bold text-lg">Strong Context</h4>
                          <p className="text-sm text-gray-500">
                            Specific, environment-aware
                          </p>
                        </div>
                      </div>
                      <div
                        className="text-white p-6 rounded-lg"
                        style={{ backgroundColor: "#475569" }}
                      >
                        <div className="font-mono text-sm">
                          <span className="text-gray-300">
                            // Context sets the environment
                          </span>
                          <br />
                          <br />
                          <span className="text-gray-200">
                            "I'm building a
                          </span>{" "}
                          <span className="font-bold">Next.js 14 SaaS app</span>{" "}
                          <span className="text-gray-200">with</span>{" "}
                          <span className="font-bold">TypeScript</span>{" "}
                          <span className="text-gray-200">and</span>{" "}
                          <span className="font-bold">Tailwind</span>.<br />
                          <br />
                          <span className="text-gray-200">Users are</span>{" "}
                          <span className="font-bold">enterprise clients</span>{" "}
                          <span className="text-gray-200">who need</span>{" "}
                          <span className="font-bold">
                            multi-factor authentication
                          </span>
                          .<br />
                          <br />
                          <span className="text-gray-200">
                            We're using
                          </span>{" "}
                          <span className="font-bold">
                            Prisma with PostgreSQL
                          </span>{" "}
                          <span className="text-gray-200">
                            for the database."
                          </span>
                        </div>
                        <div className="mt-6 pt-6 border-t border-gray-600">
                          <motion.button
                            variants={copyButtonVariants}
                            whileHover="hover"
                            whileTap="tap"
                            onClick={() =>
                              copyToClipboard(
                                "I'm building a Next.js 14 SaaS app with TypeScript and Tailwind. Users are enterprise clients who need multi-factor authentication. We're using Prisma with PostgreSQL for the database.",
                                "context-copy",
                              )
                            }
                            className="text-sm bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-lg flex items-center gap-2"
                          >
                            {copiedId === "context-copy" ? (
                              <>
                                <FiCheck /> Copied!
                              </>
                            ) : (
                              <>
                                <FiCopy /> Copy Template
                              </>
                            )}
                          </motion.button>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </section>

          {/* Specificity Matrix Section */}
          <section
            id="specificity"          >
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="space-y-16"
            >
              <div className="text-center max-w-3xl mx-auto">
                <motion.span
                  variants={fadeInUp}
                  className="text-xs font-semibold tracking-wider uppercase px-3 py-1 bg-gray-100 rounded-full text-gray-700"
                >
                  Step 02
                </motion.span>
                <motion.h2
                  variants={fadeInUp}
                  className="text-4xl md:text-5xl font-black mt-6 mb-6"
                >
                  Specificity
                  <br />
                  <span className="bg-gradient-to-r from-black to-gray-600 bg-clip-text text-transparent">
                    Matrix
                  </span>
                </motion.h2>
                <motion.p variants={fadeInUp} className="text-xl text-gray-600">
                  Vague requests get vague results. Precision in requirements
                  yields precision in outputs.
                </motion.p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                {/* Component Level */}
                <motion.div
                  variants={fadeInUp}
                  whileHover={{ y: -4 }}
                  className="bg-white p-8 rounded-2xl border-2 border-gray-200 shadow-lg hover:border-gray-300 transition-all"
                >
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mr-4">
                      <FiBox className="text-xl" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">Component-Level</h3>
                      <p className="text-gray-600">Building UI elements</p>
                    </div>
                  </div>

                  <div className="mb-8">
                    <div className="flex items-center mb-4">
                      <div className="w-6 h-6 rounded-full bg-gray-300 mr-3"></div>
                      <h4 className="font-bold">Vague Request</h4>
                    </div>
                    <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 mb-6">
                      <p className="text-gray-700 font-mono">"Make a button"</p>
                    </div>

                    <div className="flex items-center mb-4">
                      <div className="w-6 h-6 rounded-full bg-black mr-3"></div>
                      <h4 className="font-bold">Specific Request</h4>
                    </div>
                    <div
                      className="text-white p-6 rounded-lg"
                      style={{ backgroundColor: "#475569" }}
                    >
                      <code className="font-mono text-sm block leading-relaxed">
                        "Create a React button component with:
                        <br />
                        • Primary/secondary/ghost variants
                        <br />
                        • Small/medium/large sizes
                        <br />
                        • Loading state with spinner
                        <br />
                        • Disabled state with opacity
                        <br />
                        • Icon support (left/right/both)
                        <br />
                        • Full TypeScript interface
                        <br />
                        • Tailwind classes for dark mode
                        <br />
                        • Accessibility attributes
                        <br />
                        • Storybook stories
                        <br />• Unit tests with Jest"
                      </code>
                      <motion.button
                        variants={copyButtonVariants}
                        whileHover="hover"
                        whileTap="tap"
                        onClick={() =>
                          copyToClipboard(
                            `Create a React button component with:
- Primary/secondary/ghost variants
- Small/medium/large sizes
- Loading state with spinner
- Disabled state with opacity
- Icon support (left/right/both)
- Full TypeScript interface
- Tailwind classes for dark mode
- Accessibility attributes
- Storybook stories
- Unit tests with Jest`,
                            "component-copy",
                          )
                        }
                        className="mt-6 text-sm bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-lg flex items-center gap-2"
                      >
                        {copiedId === "component-copy" ? (
                          <>
                            <FiCheck /> Copied!
                          </>
                        ) : (
                          <>
                            <FiCopy /> Copy
                          </>
                        )}
                      </motion.button>
                    </div>
                  </div>
                </motion.div>

                {/* Function Level */}
                <motion.div
                  variants={fadeInUp}
                  whileHover={{ y: -4 }}
                  className="bg-white p-8 rounded-2xl border-2 border-gray-200 shadow-lg hover:border-gray-300 transition-all"
                >
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mr-4">
                      <FiCode className="text-xl" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">Function-Level</h3>
                      <p className="text-gray-600">Implementing features</p>
                    </div>
                  </div>

                  <div className="mb-8">
                    <div className="flex items-center mb-4">
                      <div className="w-6 h-6 rounded-full bg-gray-300 mr-3"></div>
                      <h4 className="font-bold">Vague Request</h4>
                    </div>
                    <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 mb-6">
                      <p className="text-gray-700 font-mono">
                        "Write authentication"
                      </p>
                    </div>

                    <div className="flex items-center mb-4">
                      <div className="w-6 h-6 rounded-full bg-black mr-3"></div>
                      <h4 className="font-bold">Specific Request</h4>
                    </div>
                    <div
                      className="text-white p-6 rounded-lg"
                      style={{ backgroundColor: "#475569" }}
                    >
                      <code className="font-mono text-sm block leading-relaxed">
                        "Implement a NextAuth.js configuration with:
                        <br />
                        • Email/password login
                        <br />
                        • Google OAuth provider
                        <br />
                        • JWT session strategy
                        <br />
                        • Database adapter for Prisma
                        <br />
                        • Role-based access control
                        <br />
                        • Session callback to add user role
                        <br />
                        • Middleware for route protection
                        <br />• Error handling for each provider"
                      </code>
                      <motion.button
                        variants={copyButtonVariants}
                        whileHover="hover"
                        whileTap="tap"
                        onClick={() =>
                          copyToClipboard(
                            `Implement a NextAuth.js configuration with:
- Email/password login
- Google OAuth provider
- JWT session strategy
- Database adapter for Prisma
- Role-based access control
- Session callback to add user role
- Middleware for route protection
- Error handling for each provider`,
                            "function-copy",
                          )
                        }
                        className="mt-6 text-sm bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-lg flex items-center gap-2"
                      >
                        {copiedId === "function-copy" ? (
                          <>
                            <FiCheck /> Copied!
                          </>
                        ) : (
                          <>
                            <FiCopy /> Copy
                          </>
                        )}
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </section>

          {/* Constraints Section */}
          <section
            id="constraints"          >
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="flex flex-col lg:flex-row gap-12"
            >
              <div className="lg:w-2/5">
                <motion.span
                  variants={fadeInUp}
                  className="text-xs font-semibold tracking-wider uppercase px-3 py-1 bg-gray-100 rounded-full text-gray-700"
                >
                  Step 03
                </motion.span>
                <motion.h2
                  variants={fadeInUp}
                  className="text-4xl font-black mt-6 mb-6"
                >
                  Constraints
                  <br />
                  <span className="highlight">Definition</span>
                </motion.h2>
                <motion.p
                  variants={fadeInUp}
                  className="text-xl text-gray-600 mb-8"
                >
                  The most overlooked yet critical component. Constraints tell
                  the AI what <span className="font-bold">NOT</span> to do,
                  preventing unwanted patterns and assumptions.
                </motion.p>

                <motion.div variants={fadeInUp} className="space-y-4">
                  {[
                    "Prevents AI from making incorrect assumptions",
                    "Ensures compliance with your tech standards",
                    "Eliminates unwanted features or approaches",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-black flex items-center justify-center mt-0.5 flex-shrink-0">
                        <FiCheck className="text-white text-xs" />
                      </div>
                      <p className="text-gray-700">{item}</p>
                    </div>
                  ))}
                </motion.div>
              </div>

              <div className="lg:w-3/5">
                <motion.div
                  variants={fadeInUp}
                  className="text-white p-8 rounded-2xl shadow-xl"
                  style={{ backgroundColor: "#475569" }}
                >
                  <h3 className="text-2xl font-bold mb-6">
                    Constraints Example
                  </h3>
                  <div className="bg-gray-800/50 p-6 rounded-lg font-mono text-sm overflow-x-auto mb-6 border border-gray-600">
                    <span className="text-gray-300 font-bold">
                      CONSTRAINTS:
                    </span>
                    <br />
                    <br />
                    <span className="text-gray-300">
                      - DO NOT use any external UI libraries (build from
                      scratch)
                    </span>
                    <br />
                    <span className="text-gray-300">
                      - DO NOT use useState for form handling (use
                      react-hook-form)
                    </span>
                    <br />
                    <span className="text-gray-300">
                      - DO NOT add any console.log statements in production code
                    </span>
                    <br />
                    <span className="text-gray-300">
                      - DO NOT hardcode API URLs (use environment variables)
                    </span>
                    <br />
                    <span className="text-gray-300">
                      - DO NOT use any deprecated Next.js 13 patterns
                    </span>
                    <br />
                    <br />
                    <span className="text-gray-300">
                      - MUST be TypeScript strict mode compliant
                    </span>
                    <br />
                    <span className="text-gray-300">
                      - MUST follow ESLint rules (no-explicit-any, etc.)
                    </span>
                    <br />
                    <span className="text-gray-300">
                      - MUST be mobile-responsive first
                    </span>
                    <br />
                    <span className="text-gray-300">
                      - MUST include unit tests for core functionality
                    </span>
                  </div>
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <p className="text-gray-200">
                      Copy this constraints template for your projects
                    </p>
                    <motion.button
                      variants={copyButtonVariants}
                      whileHover="hover"
                      whileTap="tap"
                      onClick={() =>
                        copyToClipboard(
                          `CONSTRAINTS:
- DO NOT use any external UI libraries (build from scratch)
- DO NOT use useState for form handling (use react-hook-form)
- DO NOT add any console.log statements in production code
- DO NOT hardcode API URLs (use environment variables)
- DO NOT use any deprecated Next.js 13 patterns
- MUST be TypeScript strict mode compliant
- MUST follow ESLint rules (no-explicit-any, etc.)
- MUST be mobile-responsive first
- MUST include unit tests for core functionality`,
                          "constraints-copy",
                        )
                      }
                      className="bg-white text-black hover:bg-gray-100 font-medium py-3 px-6 rounded-lg flex items-center gap-2 shadow-md"
                    >
                      {copiedId === "constraints-copy" ? (
                        <>
                          <FiCheck /> Copied!
                        </>
                      ) : (
                        <>
                          <FiCopy /> Copy Constraints
                        </>
                      )}
                    </motion.button>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </section>

          {/* Templates Section */}
          <section
            id="templates"
          >
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="space-y-16"
            >
              <div className="text-center max-w-3xl mx-auto">
                <motion.span
                  variants={fadeInUp}
                  className="text-xs font-semibold tracking-wider uppercase px-3 py-1 bg-gray-100 rounded-full text-gray-700"
                >
                  Ready to Use
                </motion.span>
                <motion.h2
                  variants={fadeInUp}
                  className="text-4xl md:text-5xl font-black mt-6 mb-6"
                >
                  Prompt
                  <br />
                  <span className="bg-gradient-to-r from-black to-gray-600 bg-clip-text text-transparent">
                    Templates
                  </span>
                </motion.h2>
                <motion.p variants={fadeInUp} className="text-xl text-gray-600">
                  Copy-paste these templates and customize for your specific
                  needs.
                </motion.p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    icon: <FiFileText className="text-2xl" />,
                    title: "Full Feature Request",
                    desc: "Complete template for requesting complex features or entire applications.",
                    id: "template-full",
                    content: `I'm building [PROJECT TYPE] for [TARGET AUDIENCE].

TECH STACK:
- Frontend: [Framework + version]
- Styling: [CSS framework]
- Backend: [API/Server solution]
- Database: [Database + ORM]
- Authentication: [Auth solution]

REQUIREMENTS:
1. [Feature 1 with acceptance criteria]
2. [Feature 2 with acceptance criteria]
3. [Feature 3 with acceptance criteria]

CONSTRAINTS:
- [What to avoid]
- [Performance requirements]
- [Security requirements]

DELIVERABLES:
- [File 1.tsx]
- [File 2.ts]
- [File 3.test.ts]
- [README.md with setup instructions]

PREFERRED PATTERNS:
- [Specific architectural pattern]
- [Folder structure]
- [Naming conventions]`,
                  },
                  {
                    icon: <FiBox className="text-2xl" />,
                    title: "Component Generation",
                    desc: "Template for creating specific UI components with all requirements.",
                    id: "template-component",
                    content: `COMPONENT: [Component Name]
PURPOSE: [What it does in the app hierarchy]

PROPS INTERFACE:
{
  variant: 'primary' | 'secondary' | 'danger'
  size: 'sm' | 'md' | 'lg'
  isLoading?: boolean
  onClick: () => void
  children: React.ReactNode
}

FEATURES NEEDED:
- [ ] Accessibility compliant
- [ ] Dark mode support
- [ ] RTL language support
- [ ] Unit tests
- [ ] Storybook documentation

STYLING REQUIREMENTS:
- Use Tailwind with @apply directives
- Hover/focus states
- Transition animations
- Responsive breakpoints

EXAMPLE USAGE:
<Button variant="primary" size="lg" onClick={handleClick}>
  Submit Form
</Button>`,
                  },
                  {
                    icon: <FiAlertCircle className="text-2xl" />,
                    title: "Bug Fix / Refactor",
                    desc: "Template for fixing issues or refactoring existing code.",
                    id: "template-bugfix",
                    content: `FILE: /components/UserProfile.tsx
PROBLEM: Component re-renders 5x on every keystroke

CURRENT ISSUES:
1. useEffect dependency array causing infinite loops
2. Props drilling causing unnecessary re-renders
3. No React.memo or useMemo optimization

REQUIREMENTS:
- Reduce re-renders to only when user data changes
- Implement proper memoization
- Split into smaller components
- Add performance monitoring comments

DO NOT:
- Change the API interface
- Remove any existing features
- Break TypeScript types`,
                  },
                ].map((template, index) => (
                  <motion.div
                    key={template.title}
                    variants={fadeInUp}
                    whileHover={{ y: -4 }}
                    className="bg-white rounded-xl border-2 border-gray-200 overflow-hidden shadow-lg hover:border-gray-300 transition-all"
                  >
                    <div className="p-8">
                      <div className="w-14 h-14 rounded-lg bg-gray-100 flex items-center justify-center mb-6">
                        {template.icon}
                      </div>
                      <h3 className="text-xl font-bold mb-3">
                        {template.title}
                      </h3>
                      <p className="text-gray-600 mb-6 text-sm">
                        {template.desc}
                      </p>
                      <motion.button
                        variants={copyButtonVariants}
                        whileHover="hover"
                        whileTap="tap"
                        onClick={() =>
                          copyToClipboard(template.content, template.id)
                        }
                        className="w-full bg-black text-white hover:bg-gray-800 font-medium py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-colors"
                      >
                        {copiedId === template.id ? (
                          <>
                            <FiCheck /> Copied!
                          </>
                        ) : (
                          <>
                            <FiCopy /> Copy Template
                          </>
                        )}
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </section>

          {/* Practice Section */}
          <section
            id="practice"
          >
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="rounded-3xl overflow-hidden shadow-2xl"
              style={{ backgroundColor: "#475569" }}
            >
              <div className="p-10 md:p-16 text-white">
                <div className="text-center mb-12">
                  <span className="text-sm font-semibold tracking-wider uppercase px-3 py-1 bg-white/10 rounded-full text-gray-200">
                    Apply Your Knowledge
                  </span>
                  <h2 className="text-4xl md:text-5xl font-black mt-6 mb-6">
                    Practice
                    <br />
                    <span className="text-gray-300">Exercise</span>
                  </h2>
                  <p className="text-xl text-gray-200 max-w-2xl mx-auto">
                    Rewrite this vague prompt using everything you've learned.
                  </p>
                </div>

                <div className="max-w-3xl mx-auto">
                  <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl mb-8 border border-white/20">
                    <div className="flex items-center mb-6">
                      <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-4">
                        <span className="text-2xl font-black">?</span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">Your Challenge</h3>
                        <p className="text-gray-200">
                          Rewrite this vague prompt into a specific, actionable
                          one
                        </p>
                      </div>
                    </div>

                    <div className="bg-white/10 p-8 rounded-lg mb-8 border border-white/20">
                      <p className="text-3xl md:text-4xl font-medium text-center">
                        "Build a blog"
                      </p>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setShowAnswer(!showAnswer)}
                      className="w-full bg-white text-black hover:bg-gray-100 font-bold py-5 px-6 rounded-xl text-lg flex items-center justify-center gap-3 transition-all shadow-xl"
                    >
                      <FiEye size={20} />
                      {showAnswer
                        ? "Hide Optimized Version"
                        : "Reveal Optimized Version"}
                    </motion.button>
                  </div>

                  <AnimatePresence>
                    {showAnswer && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="bg-white text-black p-8 rounded-xl shadow-2xl"
                      >
                        <div className="flex items-center mb-6">
                          <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center mr-4">
                            <FiCheck className="text-white" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold">
                              Optimized Prompt
                            </h3>
                            <p className="text-gray-600">
                              See how specificity transforms the request
                            </p>
                          </div>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-lg border-2 border-gray-200 font-mono text-sm mb-6">
                          "Create a Next.js 14 blog with:
                          <br />
                          - App Router structure
                          <br />
                          - MDX for blog posts with code syntax highlighting
                          <br />
                          - Dark/light mode toggle
                          <br />
                          - SEO-optimized meta tags
                          <br />
                          - Prisma with SQLite for comments
                          <br />
                          - Vercel deployment config
                          <br />
                          - TypeScript interfaces for all data
                          <br />
                          <br />
                          Folder structure:
                          <br />
                          /app/(blog)/[slug]/page.tsx
                          <br />
                          /components/BlogCard.tsx
                          <br />
                          /lib/mdx.ts
                          <br />
                          /prisma/schema.prisma
                          <br />
                          <br />
                          Constraints:
                          <br />
                          - No external CMS, filesystem-based
                          <br />
                          - Use server components where possible
                          <br />- Implement OG image generation"
                        </div>

                        <div className="pt-6 border-t border-gray-200">
                          <div className="flex items-start gap-3">
                            <FiInfo className="text-gray-500 mt-1 flex-shrink-0" />
                            <p className="text-gray-700">
                              The optimized version provides clear direction,
                              specific requirements, and constraints that guide
                              the AI to produce exactly what you need.
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          </section>
        </main>

        {/* Footer */}
        <footer className="bg-black text-white py-16 mt-32 border-t border-gray-900">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="flex flex-col lg:flex-row justify-between items-start mb-12">
              <div className="mb-10 lg:mb-0">
                <h3 className="text-3xl font-black mb-6">
                  AI Prompt Engineering
                </h3>
                <p className="text-gray-400 max-w-md text-lg">
                  Master the art of communicating with AI. <br />
                  <span className="text-white font-medium">
                    Black and white methodology for perfect results.
                  </span>
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                <div>
                  <h4 className="font-bold mb-4 text-white">Learn</h4>
                  <ul className="space-y-2 text-gray-400">
                    <li>
                      <button
                        onClick={() => scrollToSection("formula")}
                        className="hover:text-white border-animate transition-colors"
                      >
                        The Formula
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => scrollToSection("context")}
                        className="hover:text-white border-animate transition-colors"
                      >
                        Context Layer
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => scrollToSection("specificity")}
                        className="hover:text-white border-animate transition-colors"
                      >
                        Specificity Matrix
                      </button>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-4 text-white">Resources</h4>
                  <ul className="space-y-2 text-gray-400">
                    <li>
                      <button
                        onClick={() => scrollToSection("templates")}
                        className="hover:text-white border-animate transition-colors"
                      >
                        Templates
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => scrollToSection("practice")}
                        className="hover:text-white border-animate transition-colors"
                      >
                        Practice
                      </button>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="hover:text-white border-animate transition-colors"
                      >
                        Examples
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-4 text-white">Connect</h4>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="w-10 h-10 border border-gray-700 rounded-full flex items-center justify-center hover:border-white hover:bg-white hover:text-black transition-all"
                    >
                      <FiTwitter />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 border border-gray-700 rounded-full flex items-center justify-center hover:border-white hover:bg-white hover:text-black transition-all"
                    >
                      <FiGithub />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 border border-gray-700 rounded-full flex items-center justify-center hover:border-white hover:bg-white hover:text-black transition-all"
                    >
                      <FiLinkedin />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-gray-900 text-center text-gray-500">
              <p>
                © 2024 AI Prompt Engineering Guide. All techniques tested with
                ChatGPT, Claude, Gemini, and DeepSeek.
              </p>
              <p className="mt-2 text-sm">
                Master the art of communication with artificial intelligence.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </DashboardLayout>
  );
}
