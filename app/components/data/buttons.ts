export interface ButtonData {
  id: number;
  title: string;
  html: string;
  css: string;
  tailwind: string;
  category?: 'basic' | 'gradient' | 'glass' | '3d' | 'animated';
}
export const buttonData = [
  {
    id: 1,
    title: "Neon Button",
    html: `<button class="neon-button">Click Me</button>`,
    css: `.neon-button {
      background: transparent;
      color: #00d9ff;
      border: 2px solid #00d9ff;
      padding: 12px 24px;
      font-size: 16px;
      cursor: pointer;
      border-radius: 4px;
      transition: all 0.3s ease;
      box-shadow: 0 0 10px #00d9ff;
    }
    .neon-button:hover {
      background: #00d9ff;
      color: #111;
      box-shadow: 0 0 20px #00d9ff;
    }`,
    tailwind: `px-6 py-3 bg-transparent text-[#00d9ff] border-2 border-[#00d9ff] 
               rounded-md shadow-[0_0_10px_#00d9ff] transition-all hover:bg-[#00d9ff] 
               hover:text-gray-900 hover:shadow-[0_0_20px_#00d9ff]`,
  },
  {
    id: 2,
    title: "Gradient Button",
    html: `<button class="gradient-button">Get Started</button>`,
    css: `.gradient-button {
      background: linear-gradient(to right, #8b5cf6, #ec4899);
      color: white;
      padding: 12px 24px;
      border: none;
      border-radius: 8px;
      font-weight: 500;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
      transition: all 0.3s ease;
    }
    .gradient-button:hover {
      background: linear-gradient(to right, #7c3aed, #db2777);
      transform: translateY(-2px);
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    }`,
    tailwind: `px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white 
               font-medium rounded-lg shadow-md hover:from-purple-600 hover:to-pink-600 
               hover:shadow-lg hover:-translate-y-1 transition-all duration-300`,
  },
  {
    id: 3,
    title: "Glass Button",
    html: `<button class="glass-button">Glass Effect</button>`,
    css: `.glass-button {
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      color: white;
      padding: 12px 24px;
      border: 1px solid rgba(255, 255, 255, 0.2);
      border-radius: 8px;
      font-weight: 500;
      transition: all 0.3s ease;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
    .glass-button:hover {
      background: rgba(255, 255, 255, 0.2);
      border-color: rgba(255, 255, 255, 0.3);
      transform: translateY(-2px);
    }`,
    tailwind: `px-6 py-3 bg-white/10 backdrop-blur-md text-white font-medium rounded-lg 
               border border-white/20 shadow-md hover:bg-white/20 hover:border-white/30 
               hover:-translate-y-1 transition-all duration-300`,
  },
  {
    id: 4,
    title: "3D Button",
    html: `<button class="button-3d">Press Me</button>`,
    css: `.button-3d {
      background: #4f46e5;
      color: white;
      padding: 12px 24px;
      border: none;
      border-radius: 8px;
      font-weight: 600;
      box-shadow: 0 4px 0 #4338ca, 0 5px 10px rgba(0, 0, 0, 0.2);
      transition: all 0.1s ease;
    }
    .button-3d:active {
      transform: translateY(4px);
      box-shadow: 0 1px 0 #4338ca, 0 2px 5px rgba(0, 0, 0, 0.2);
    }`,
    tailwind: `px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg 
               shadow-[0_4px_0_#4338ca,0_5px_10px_rgba(0,0,0,0.2)] active:translate-y-1 
               active:shadow-[0_1px_0_#4338ca,0_2px_5px_rgba(0,0,0,0.2)] transition-all`,
  },
  {
    id: 5,
    title: "Border Animation",
    html: `<button class="border-animation-button">Hover Me</button>`,
    css: `.border-animation-button {
      background: transparent;
      color: #f43f5e;
      padding: 12px 24px;
      border: 2px solid transparent;
      position: relative;
      font-weight: 600;
      overflow: hidden;
      transition: color 0.3s ease;
    }
    .border-animation-button::before, 
    .border-animation-button::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      border: 2px solid #f43f5e;
      top: 0;
      left: 0;
      transition: all 0.3s ease;
    }
    .border-animation-button::before {
      border-width: 2px 0 2px 0;
      transform: scaleX(0);
    }
    .border-animation-button::after {
      border-width: 0 2px 0 2px;
      transform: scaleY(0);
    }
    .border-animation-button:hover::before, 
    .border-animation-button:hover::after {
      transform: scale(1);
    }
    .border-animation-button:hover {
      color: #f43f5e;
    }`,
    tailwind: `px-6 py-3 bg-transparent text-rose-500 font-semibold relative 
               overflow-hidden before:content-[''] before:absolute before:w-full before:h-full 
               before:border-t-2 before:border-b-2 before:border-rose-500 before:top-0 before:left-0 
               before:scale-x-0 before:transition-all after:content-[''] after:absolute after:w-full 
               after:h-full after:border-l-2 after:border-r-2 after:border-rose-500 after:top-0 
               after:left-0 after:scale-y-0 after:transition-all hover:before:scale-x-100 
               hover:after:scale-y-100 transition-colors`,
  },
  {
    id: 6,
    title: "Pulse Button",
    html: `<button class="pulse-button">Pulse Effect</button>`,
    css: `.pulse-button {
      background: #10b981;
      color: white;
      padding: 12px 24px;
      border: none;
      border-radius: 8px;
      font-weight: 600;
      position: relative;
      overflow: hidden;
      transition: all 0.3s ease;
    }
    .pulse-button:hover {
      animation: pulse 1.5s infinite;
    }
    @keyframes pulse {
      0% {
        box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7);
      }
      70% {
        box-shadow: 0 0 0 10px rgba(16, 185, 129, 0);
      }
      100% {
        box-shadow: 0 0 0 0 rgba(16, 185, 129, 0);
      }
    }`,
    tailwind: `px-6 py-3 bg-emerald-500 text-white font-semibold rounded-lg 
               hover:animate-[pulse_1.5s_infinite]`,
  },
  {
    id: 7,
    title: "Retro Button",
    html: `<button class="retro-button">Retro Style</button>`,
    css: `.retro-button {
      background: #f59e0b;
      color: #1e293b;
      padding: 12px 24px;
      border: none;
      border-bottom: 4px solid #d97706;
      font-weight: bold;
      font-family: 'Courier New', monospace;
      letter-spacing: 1px;
      text-transform: uppercase;
      transition: all 0.2s ease;
    }
    .retro-button:hover {
      background: #d97706;
      border-bottom: 2px solid #b45309;
      transform: translateY(2px);
    }`,
    tailwind: `px-6 py-3 bg-amber-500 text-slate-800 font-bold font-mono tracking-wider 
               uppercase border-b-4 border-amber-600 hover:bg-amber-600 hover:border-b-2 
               hover:border-amber-700 hover:translate-y-0.5 transition-all`,
  },
  {
    id: 8,
    title: "Skeuomorphic Button",
    html: `<button class="skeuomorphic-button">Click</button>`,
    css: `.skeuomorphic-button {
      background: linear-gradient(to bottom, #f5f5f5, #e5e5e5);
      color: #333;
      padding: 12px 24px;
      border: 1px solid #ccc;
      border-radius: 6px;
      font-weight: 600;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 
                  inset 0 1px 0 rgba(255, 255, 255, 0.8);
      text-shadow: 0 1px 0 rgba(255, 255, 255, 0.8);
      transition: all 0.2s ease;
    }
    .skeuomorphic-button:hover {
      background: linear-gradient(to bottom, #e5e5e5, #d5d5d5);
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 
                 inset 0 1px 0 rgba(255, 255, 255, 0.6);
    }
    .skeuomorphic-button:active {
      box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1), 
                  inset 0 1px 0 rgba(255, 255, 255, 0.4);
      transform: translateY(1px);
    }`,
    tailwind: `px-6 py-3 bg-gradient-to-b from-gray-100 to-gray-200 text-gray-800 
               font-semibold rounded-md border border-gray-300 shadow-sm shadow-gray-300/50 
               [text-shadow:0_1px_0_rgba(255,255,255,0.8)] hover:from-gray-200 hover:to-gray-300 
               active:shadow-inner active:translate-y-0.5 transition-all`,
  },
  {
    id: 9,
    title: "Floating Button",
    html: `<button class="floating-button">Float</button>`,
    css: `.floating-button {
      background: #3b82f6;
      color: white;
      padding: 12px 24px;
      border: none;
      border-radius: 50px;
      font-weight: 600;
      box-shadow: 0 4px 15px rgba(59, 130, 246, 0.4);
      transition: all 0.3s ease;
    }
    .floating-button:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 25px rgba(59, 130, 246, 0.5);
    }`,
    tailwind: `px-6 py-3 bg-blue-500 text-white font-semibold rounded-full 
               shadow-lg shadow-blue-500/40 hover:-translate-y-1 hover:shadow-xl 
               hover:shadow-blue-500/50 transition-all`,
  },
  {
    id: 10,
    title: "Underline Animation",
    html: `<button class="underline-animation-button">Hover Me</button>`,
    css: `.underline-animation-button {
      background: transparent;
      color: #8b5cf6;
      padding: 12px 24px;
      border: none;
      font-weight: 600;
      position: relative;
    }
    .underline-animation-button::after {
      content: '';
      position: absolute;
      width: 0;
      height: 2px;
      bottom: 8px;
      left: 50%;
      background: #8b5cf6;
      transition: all 0.3s ease;
    }
    .underline-animation-button:hover::after {
      width: 80%;
      left: 10%;
    }`,
    tailwind: `px-6 py-3 bg-transparent text-purple-500 font-semibold relative 
               after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-purple-500 
               after:bottom-2 after:left-1/2 after:transition-all hover:after:w-4/5 hover:after:left-[10%]`,
  },
  {
    id: 11,
    title: "Glow Button",
    html: `<button class="glow-button">Glow Effect</button>`,
    css: `.glow-button {
      background: #111;
      color: #fff;
      padding: 12px 24px;
      border: none;
      border-radius: 8px;
      font-weight: 600;
      position: relative;
      z-index: 1;
      overflow: hidden;
    }
    .glow-button::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000);
      background-size: 400%;
      z-index: -1;
      opacity: 0;
      transition: 0.5s;
      border-radius: 8px;
      filter: blur(5px);
    }
    .glow-button:hover::before {
      opacity: 1;
      animation: animate 20s linear infinite;
    }
    @keyframes animate {
      0% { background-position: 0 0; }
      50% { background-position: 400% 0; }
      100% { background-position: 0 0; }
    }`,
    tailwind: `px-6 py-3 bg-gray-900 text-white font-semibold rounded-lg relative 
               overflow-hidden before:content-[''] before:absolute before:inset-0 
               before:bg-[linear-gradient(45deg,#ff0000,#ff7300,#fffb00,#48ff00,#00ffd5,#002bff,#7a00ff,#ff00c8,#ff0000)] 
               before:bg-[length:400%] before:opacity-0 before:transition-opacity before:duration-500 
               before:rounded-lg before:blur-[5px] hover:before:opacity-100 hover:before:animate-[animate_20s_linear_infinite]`,
  },
  {
    id: 12,
    title: "Metallic Button",
    html: `<button class="metallic-button">Shine</button>`,
    css: `.metallic-button {
      background: linear-gradient(to bottom, #e0e0e0, #c0c0c0);
      color: #333;
      padding: 12px 24px;
      border: 1px solid #999;
      border-radius: 8px;
      font-weight: 600;
      text-shadow: 0 1px 1px rgba(255, 255, 255, 0.8);
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.5), 
                  0 2px 3px rgba(0, 0, 0, 0.2);
      position: relative;
      overflow: hidden;
    }
    .metallic-button::after {
      content: '';
      position: absolute;
      top: -50%;
      left: -60%;
      width: 50%;
      height: 200%;
      background: rgba(255, 255, 255, 0.2);
      transform: rotate(30deg);
      transition: all 0.3s;
    }
    .metallic-button:hover::after {
      left: 110%;
    }`,
    tailwind: `px-6 py-3 bg-gradient-to-b from-gray-200 to-gray-300 text-gray-800 
               font-semibold rounded-lg border border-gray-400 [text-shadow:0_1px_1px_rgba(255,255,255,0.8)] 
               shadow-[inset_0_1px_0_rgba(255,255,255,0.5),0_2px_3px_rgba(0,0,0,0.2)] relative 
               overflow-hidden after:content-[''] after:absolute after:-top-1/2 after:-left-3/5 
               after:w-1/2 after:h-[200%] after:bg-white/20 after:rotate-30 after:transition-all 
               hover:after:left-[110%]`,
  },
  {
    id: 13,
    title: "Ripple Button",
    html: `<button class="ripple-button">Click Me</button>`,
    css: `.ripple-button {
      background: #6366f1;
      color: white;
      padding: 12px 24px;
      border: none;
      border-radius: 8px;
      font-weight: 600;
      position: relative;
      overflow: hidden;
      transition: background 0.4s;
    }
    .ripple-button:hover {
      background: #4f46e5;
    }
    .ripple-button span {
      position: absolute;
      background: rgba(255, 255, 255, 0.4);
      transform: translate(-50%, -50%);
      pointer-events: none;
      border-radius: 50%;
      animation: ripple 1s linear infinite;
    }
    @keyframes ripple {
      0% {
        width: 0;
        height: 0;
        opacity: 0.5;
      }
      100% {
        width: 500px;
        height: 500px;
        opacity: 0;
      }
    }`,
    tailwind: `px-6 py-3 bg-indigo-500 text-white font-semibold rounded-lg relative 
               overflow-hidden hover:bg-indigo-600 transition-colors duration-400`,
  },
  {
    id: 14,
    title: "Cyberpunk Button",
    html: `<button class="cyberpunk-button">CYBERPUNK</button>`,
    css: `.cyberpunk-button {
      background: black;
      color: #00ff9d;
      padding: 12px 24px;
      border: 2px solid #00ff9d;
      font-family: 'Courier New', monospace;
      font-weight: bold;
      letter-spacing: 2px;
      text-transform: uppercase;
      position: relative;
      box-shadow: 0 0 10px #00ff9d;
      transition: all 0.3s ease;
    }
    .cyberpunk-button::before {
      content: '';
      position: absolute;
      top: -5px;
      left: -5px;
      right: -5px;
      bottom: -5px;
      border: 2px solid #ff00ea;
      z-index: -1;
      transition: all 0.3s ease;
    }
    .cyberpunk-button:hover {
      box-shadow: 0 0 20px #00ff9d, 0 0 20px #ff00ea;
    }
    .cyberpunk-button:hover::before {
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }`,
    tailwind: `px-6 py-3 bg-black text-[#00ff9d] font-mono font-bold tracking-widest 
               uppercase border-2 border-[#00ff9d] shadow-[0_0_10px_#00ff9d] relative 
               before:content-[''] before:absolute before:-inset-1 before:border-2 
               before:border-[#ff00ea] before:z-[-1] before:transition-all hover:shadow-[0_0_20px_#00ff9d,0_0_20px_#ff00ea] 
               hover:before:inset-0 transition-all`,
  },
  {
    id: 15,
    title: "Split Hover Button",
    html: `<button class="split-hover-button">Hover Effect</button>`,
    css: `.split-hover-button {
      background: transparent;
      color: #3b82f6;
      padding: 12px 24px;
      border: 2px solid #3b82f6;
      font-weight: 600;
      position: relative;
      overflow: hidden;
      transition: all 0.3s ease;
    }
    .split-hover-button::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 50%;
      height: 100%;
      background: #3b82f6;
      transform: translateX(-100%);
      transition: all 0.3s ease;
      z-index: -1;
    }
    .split-hover-button::after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      width: 50%;
      height: 100%;
      background: #3b82f6;
      transform: translateX(100%);
      transition: all 0.3s ease;
      z-index: -1;
    }
    .split-hover-button:hover {
      color: white;
    }
    .split-hover-button:hover::before {
      transform: translateX(0);
    }
    .split-hover-button:hover::after {
      transform: translateX(0);
    }`,
    tailwind: `px-6 py-3 bg-transparent text-blue-500 font-semibold border-2 border-blue-500 
               relative overflow-hidden before:content-[''] before:absolute before:top-0 before:left-0 
               before:w-1/2 before:h-full before:bg-blue-500 before:-translate-x-full before:transition-all 
               before:z-[-1] after:content-[''] after:absolute after:top-0 after:right-0 after:w-1/2 
               after:h-full after:bg-blue-500 after:translate-x-full after:transition-all after:z-[-1] 
               hover:text-white hover:before:translate-x-0 hover:after:translate-x-0 transition-colors`,
  },
  {
    id: 16,
    title: "Bubble Button",
    html: `<button class="bubble-button">Bubble Effect</button>`,
    css: `.bubble-button {
      background: #ec4899;
      color: white;
      padding: 12px 24px;
      border: none;
      border-radius: 50px;
      font-weight: 600;
      position: relative;
      overflow: hidden;
      transition: all 0.3s ease;
    }
    .bubble-button::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 50%;
      transform: scale(0);
      transition: all 0.5s ease;
      pointer-events: none;
    }
    .bubble-button:hover::before {
      transform: scale(2);
      opacity: 0;
    }`,
    tailwind: `px-6 py-3 bg-pink-500 text-white font-semibold rounded-full relative 
               overflow-hidden before:content-[''] before:absolute before:inset-0 before:bg-white/10 
               before:rounded-full before:scale-0 before:transition-all before:duration-500 hover:before:scale-200 
               hover:before:opacity-0`,
  },
  {
    id: 17,
    title: "Animated Gradient Border",
    html: `<button class="gradient-border-button">Border Effect</button>`,
    css: `.gradient-border-button {
      background: white;
      color: #333;
      padding: 12px 24px;
      border: none;
      border-radius: 8px;
      font-weight: 600;
      position: relative;
      z-index: 1;
    }
    .gradient-border-button::before {
      content: '';
      position: absolute;
      top: -2px;
      left: -2px;
      right: -2px;
      bottom: -2px;
      background: linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000);
      background-size: 400%;
      z-index: -1;
      border-radius: 10px;
      animation: animate-border 20s linear infinite;
      opacity: 0;
      transition: opacity 0.3s ease;
    }
    .gradient-border-button:hover::before {
      opacity: 1;
    }
    @keyframes animate-border {
      0% { background-position: 0 0; }
      50% { background-position: 400% 0; }
      100% { background-position: 0 0; }
    }`,
    tailwind: `px-6 py-3 bg-white text-gray-800 font-semibold rounded-lg relative z-[1] 
               before:content-[''] before:absolute before:-inset-0.5 before:bg-[linear-gradient(45deg,#ff0000,#ff7300,#fffb00,#48ff00,#00ffd5,#002bff,#7a00ff,#ff00c8,#ff0000)] 
               before:bg-[length:400%] before:rounded-xl before:animate-[animate-border_20s_linear_infinite] 
               before:opacity-0 before:transition-opacity before:z-[-1] hover:before:opacity-100`,
  },
  {
    id: 18,
    title: "Text Fill Effect",
    html: `<button class="text-fill-button">Hover Me</button>`,
    css: `.text-fill-button {
      background: transparent;
      color: #333;
      padding: 12px 24px;
      border: 2px solid #333;
      font-weight: 600;
      position: relative;
      overflow: hidden;
      transition: color 0.3s ease;
    }
    .text-fill-button::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: #333;
      z-index: -1;
      transform: translateY(100%);
      transition: transform 0.3s ease;
    }
    .text-fill-button:hover {
      color: white;
    }
    .text-fill-button:hover::before {
      transform: translateY(0);
    }`,
    tailwind: `px-6 py-3 bg-transparent text-gray-800 font-semibold border-2 border-gray-800 
               relative overflow-hidden before:content-[''] before:absolute before:inset-0 before:bg-gray-800 
               before:translate-y-full before:transition-transform before:z-[-1] hover:text-white hover:before:translate-y-0 
               transition-colors`,
  },
  {
    id: 19,
    title: "Neumorphic Button",
    html: `<button class="neumorphic-button">Neumorphism</button>`,
    css: `.neumorphic-button {
      background: #e0e5ec;
      color: #6d7587;
      padding: 12px 24px;
      border: none;
      border-radius: 8px;
      font-weight: 600;
      box-shadow: 8px 8px 16px #b8b9be, 
                 -8px -8px 16px #ffffff;
      transition: all 0.2s ease;
    }
    .neumorphic-button:hover {
      box-shadow: inset 4px 4px 8px #b8b9be, 
                 inset -4px -4px 8px #ffffff;
    }
    .neumorphic-button:active {
      box-shadow: inset 6px 6px 12px #b8b9be, 
                 inset -6px -6px 12px #ffffff;
    }`,
    tailwind: `px-6 py-3 bg-[#e0e5ec] text-[#6d7587] font-semibold rounded-lg 
               shadow-[8px_8px_16px_#b8b9be,-8px_-8px_16px_#ffffff] hover:shadow-[inset_4px_4px_8px_#b8b9be,inset_-4px_-4px_8px_#ffffff] 
               active:shadow-[inset_6px_6px_12px_#b8b9be,inset_-6px_-6px_12px_#ffffff] transition-all`,
  },
  {
    id: 20,
    title: "Magnetic Button",
    html: `<button class="magnetic-button">Magnetic Effect</button>`,
    css: `.magnetic-button {
      background: #3b82f6;
      color: white;
      padding: 12px 24px;
      border: none;
      border-radius: 8px;
      font-weight: 600;
      transition: transform 0.2s ease;
      will-change: transform;
    }
    .magnetic-button:hover {
      transform: scale(0.95);
    }`,
    tailwind: `px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg 
               hover:scale-95 transition-transform will-change-transform`,
  },
  {
    id: 21,
    title: "Shadow Grow Button",
    html: `<button class="shadow-grow-button">Grow Shadow</button>`,
    css: `.shadow-grow-button {
      background: #4f46e5;
      color: white;
      padding: 12px 24px;
      border: none;
      border-radius: 8px;
      font-weight: 600;
      box-shadow: 0 4px 6px rgba(79, 70, 229, 0.3);
      transition: all 0.3s ease;
    }
    .shadow-grow-button:hover {
      box-shadow: 0 10px 25px rgba(79, 70, 229, 0.5);
    }`,
    tailwind: `px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg 
               shadow-md shadow-indigo-500/30 hover:shadow-lg hover:shadow-indigo-500/50 
               transition-all`,
  },
  {
    id: 22,
    title: "Double Border Button",
    html: `<button class="double-border-button">Double Border</button>`,
    css: `.double-border-button {
      background: transparent;
      color: #10b981;
      padding: 12px 24px;
      border: 2px solid #10b981;
      position: relative;
      font-weight: 600;
      transition: all 0.3s ease;
    }
    .double-border-button::before {
      content: '';
      position: absolute;
      top: -6px;
      left: -6px;
      right: -6px;
      bottom: -6px;
      border: 2px solid #10b981;
      opacity: 0;
      transition: all 0.3s ease;
    }
    .double-border-button:hover::before {
      top: -2px;
      left: -2px;
      right: -2px;
      bottom: -2px;
      opacity: 1;
    }`,
    tailwind: `px-6 py-3 bg-transparent text-emerald-500 font-semibold border-2 
               border-emerald-500 relative before:content-[''] before:absolute before:-inset-1 
               before:border-2 before:border-emerald-500 before:opacity-0 before:transition-all 
               hover:before:inset-0 hover:before:opacity-100 transition-colors`,
  },
  {
    id: 23,
    title: "Flip Button",
    html: `<button class="flip-button">
      <span class="flip-button-front">Front</span>
      <span class="flip-button-back">Back</span>
    </button>`,
    css: `.flip-button {
      background: transparent;
      perspective: 1000px;
      width: 120px;
      height: 44px;
      position: relative;
    }
    .flip-button-front, .flip-button-back {
      position: absolute;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      backface-visibility: hidden;
      transition: transform 0.6s;
      border-radius: 4px;
      font-weight: 600;
    }
    .flip-button-front {
      background: #3b82f6;
      color: white;
      transform: rotateX(0deg);
    }
    .flip-button-back {
      background: #ef4444;
      color: white;
      transform: rotateX(180deg);
    }
    .flip-button:hover .flip-button-front {
      transform: rotateX(180deg);
    }
    .flip-button:hover .flip-button-back {
      transform: rotateX(0deg);
    }`,
    tailwind: `w-30 h-11 bg-transparent [perspective:1000px] relative 
               [&>span]:absolute [&>span]:w-full [&>span]:h-full [&>span]:flex 
               [&>span]:items-center [&>span]:justify-center [&>span]:[backface-visibility:hidden] 
               [&>span]:transition-transform [&>span]:duration-600 [&>span]:rounded 
               [&>span]:font-semibold [&_span:first-child]:bg-blue-500 [&_span:first-child]:text-white 
               [&_span:first-child]:[transform:rotateX(0)] [&_span:last-child]:bg-red-500 
               [&_span:last-child]:text-white [&_span:last-child]:[transform:rotateX(180deg)] 
               hover:[&_span:first-child]:[transform:rotateX(180deg)] hover:[&_span:last-child]:[transform:rotateX(0)]`,
  },
  {
    id: 24,
    title: "Jelly Button",
    html: `<button class="jelly-button">Jelly Effect</button>`,
    css: `.jelly-button {
      background: #ec4899;
      color: white;
      padding: 12px 24px;
      border: none;
      border-radius: 8px;
      font-weight: 600;
      transition: transform 0.2s;
    }
    .jelly-button:hover {
      animation: jelly 0.5s;
    }
    @keyframes jelly {
      0%, 100% { transform: scale(1, 1); }
      25% { transform: scale(0.9, 1.1); }
      50% { transform: scale(1.1, 0.9); }
      75% { transform: scale(0.95, 1.05); }
    }`,
    tailwind: `px-6 py-3 bg-pink-500 text-white font-semibold rounded-lg 
               hover:animate-[jelly_0.5s]`,
  },
  {
    id: 25,
    title: "Diagonal Swipe Button",
    html: `<button class="diagonal-swipe-button">Swipe Effect</button>`,
    css: `.diagonal-swipe-button {
      background: transparent;
      color: #f97316;
      padding: 12px 24px;
      border: 2px solid #f97316;
      font-weight: 600;
      position: relative;
      overflow: hidden;
      z-index: 1;
    }
    .diagonal-swipe-button::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: #f97316;
      z-index: -1;
      transform: translate(-100%, -100%) rotate(45deg);
      transition: transform 0.3s ease;
    }
    .diagonal-swipe-button:hover {
      color: white;
    }
    .diagonal-swipe-button:hover::before {
      transform: translate(0, 0) rotate(0);
    }`,
    tailwind: `px-6 py-3 bg-transparent text-orange-500 font-semibold border-2 
               border-orange-500 relative overflow-hidden before:content-[''] before:absolute 
               before:inset-0 before:bg-orange-500 before:-translate-x-full before:-translate-y-full 
               before:rotate-45 before:transition-transform before:z-[-1] hover:text-white 
               hover:before:translate-x-0 hover:before:translate-y-0 hover:before:rotate-0`,
  },
  {
    id: 26,
    title: "Shine Button",
    html: `<button class="shine-button">Shine Effect</button>`,
    css: `.shine-button {
      background: #10b981;
      color: white;
      padding: 12px 24px;
      border: none;
      border-radius: 8px;
      font-weight: 600;
      position: relative;
      overflow: hidden;
    }
    .shine-button::after {
      content: '';
      position: absolute;
      top: -50%;
      left: -60%;
      width: 20%;
      height: 200%;
      background: rgba(255, 255, 255, 0.3);
      transform: rotate(30deg);
    }
    .shine-button:hover::after {
      left: 120%;
      transition: all 0.6s ease;
    }`,
    tailwind: `px-6 py-3 bg-emerald-500 text-white font-semibold rounded-lg relative 
               overflow-hidden after:content-[''] after:absolute after:-top-1/2 after:-left-3/5 
               after:w-1/5 after:h-[200%] after:bg-white/30 after:rotate-30 hover:after:left-[120%] 
               hover:after:transition-all hover:after:duration-600`,
  },
  {
    id: 27,
    title: "Dotted Border Button",
    html: `<button class="dotted-border-button">Dotted Border</button>`,
    css: `.dotted-border-button {
      background: transparent;
      color: #8b5cf6;
      padding: 12px 24px;
      border: 2px dashed #8b5cf6;
      font-weight: 600;
      border-radius: 8px;
      transition: all 0.3s ease;
    }
    .dotted-border-button:hover {
      background: rgba(139, 92, 246, 0.1);
      border-style: solid;
    }`,
    tailwind: `px-6 py-3 bg-transparent text-purple-500 font-semibold border-2 
               border-dashed border-purple-500 rounded-lg hover:bg-purple-500/10 
               hover:border-solid transition-all`,
  },
  {
    id: 28,
    title: "Squish Button",
    html: `<button class="squish-button">Squish Me</button>`,
    css: `.squish-button {
      background: #3b82f6;
      color: white;
      padding: 12px 24px;
      border: none;
      border-radius: 8px;
      font-weight: 600;
      transition: all 0.2s ease;
    }
    .squish-button:active {
      transform: scale(0.95, 1.05);
    }`,
    tailwind: `px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg 
               active:scale-x-95 active:scale-y-105 transition-transform`,
  },
  {
    id: 29,
    title: "Glitch Button",
    html: `<button class="glitch-button">Glitch Effect</button>`,
    css: `.glitch-button {
      background: #111;
      color: white;
      padding: 12px 24px;
      border: none;
      font-weight: 600;
      position: relative;
    }
    .glitch-button::before, .glitch-button::after {
      content: 'Glitch Effect';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      padding: 12px 24px;
      background: #111;
    }
    .glitch-button::before {
      color: #0ff;
      z-index: -1;
      animation: glitch-effect 3s infinite;
    }
    .glitch-button::after {
      color: #f0f;
      z-index: -2;
      animation: glitch-effect 2s infinite reverse;
    }
    @keyframes glitch-effect {
      0% { transform: translate(0); }
      20% { transform: translate(-3px, 3px); }
      40% { transform: translate(-3px, -3px); }
      60% { transform: translate(3px, 3px); }
      80% { transform: translate(3px, -3px); }
      100% { transform: translate(0); }
    }`,
    tailwind: `px-6 py-3 bg-gray-900 text-white font-semibold relative 
               before:content-['Glitch_Effect'] before:absolute before:inset-0 before:px-6 
               before:py-3 before:bg-gray-900 before:text-cyan-300 before:z-[-1] 
               before:animate-[glitch-effect_3s_infinite] after:content-['Glitch_Effect'] 
               after:absolute after:inset-0 after:px-6 after:py-3 after:bg-gray-900 
               after:text-fuchsia-300 after:z-[-2] after:animate-[glitch-effect_2s_infinite_reverse]`,
  },
  {
    id: 30,
    title: "Particle Button",
    html: `<button class="particle-button">Particles</button>`,
    css: `.particle-button {
      background: #6366f1;
      color: white;
      padding: 12px 24px;
      border: none;
      border-radius: 8px;
      font-weight: 600;
      position: relative;
      overflow: hidden;
    }
    .particle-button:hover::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 4px;
      height: 4px;
      background: rgba(255, 255, 255, 0.5);
      border-radius: 50%;
      animation: particle-animation 1s ease-out infinite;
    }
    @keyframes particle-animation {
      0% {
        transform: translate(0, 0);
        opacity: 1;
      }
      100% {
        transform: translate(var(--random-x), var(--random-y));
        opacity: 0;
      }
    }`,
    tailwind: `px-6 py-3 bg-indigo-500 text-white font-semibold rounded-lg relative 
               overflow-hidden hover:before:content-[''] hover:before:absolute hover:before:top-1/2 
               hover:before:left-1/2 hover:before:w-1 hover:before:h-1 hover:before:bg-white/50 
               hover:before:rounded-full hover:before:animate-[particle-animation_1s_ease-out_infinite]`,
  },
  {
    id: 31,
    title: "Slice Button",
    html: `<button class="slice-button">Slice Effect</button>`,
    css: `.slice-button {
      background: transparent;
      color: #333;
      padding: 12px 24px;
      border: none;
      font-weight: 600;
      position: relative;
    }
    .slice-button::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: #f59e0b;
      z-index: -1;
      transform: scaleX(0);
      transform-origin: left;
      transition: transform 0.3s ease;
    }
    .slice-button:hover {
      color: white;
    }
    .slice-button:hover::before {
      transform: scaleX(1);
    }`,
    tailwind: `px-6 py-3 bg-transparent text-gray-800 font-semibold relative 
               before:content-[''] before:absolute before:inset-0 before:bg-amber-500 
               before:z-[-1] before:scale-x-0 before:origin-left before:transition-transform 
               hover:text-white hover:before:scale-x-100`,
  },
  {
    id: 32,
    title: "Circular Swipe Button",
    html: `<button class="circular-swipe-button">Circular Swipe</button>`,
    css: `.circular-swipe-button {
      background: transparent;
      color: #ef4444;
      padding: 12px 24px;
      border: 2px solid #ef4444;
      font-weight: 600;
      border-radius: 50px;
      position: relative;
      overflow: hidden;
      z-index: 1;
    }
    .circular-swipe-button::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 0;
      height: 0;
      background: #ef4444;
      border-radius: 50%;
      transform: translate(-50%, -50%);
      transition: width 0.3s ease, height 0.3s ease;
      z-index: -1;
    }
    .circular-swipe-button:hover {
      color: white;
    }
    .circular-swipe-button:hover::before {
      width: 200%;
      height: 200%;
    }`,
    tailwind: `px-6 py-3 bg-transparent text-red-500 font-semibold border-2 border-red-500 
               rounded-full relative overflow-hidden before:content-[''] before:absolute 
               before:top-1/2 before:left-1/2 before:w-0 before:h-0 before:bg-red-500 
               before:rounded-full before:-translate-x-1/2 before:-translate-y-1/2 
               before:transition-all before:z-[-1] hover:text-white hover:before:w-[200%] 
               hover:before:h-[200%]`,
  },
  {
    id: 33,
    title: "Layered Shadow Button",
    html: `<button class="layered-shadow-button">Layered Shadow</button>`,
    css: `.layered-shadow-button {
      background: #8b5cf6;
      color: white;
      padding: 12px 24px;
      border: none;
      border-radius: 8px;
      font-weight: 600;
      box-shadow: 0 4px 0 #6d28d9, 
                  0 8px 0 #5b21b6, 
                  0 12px 0 #4c1d95;
      transition: all 0.1s ease;
    }
    .layered-shadow-button:active {
      transform: translateY(12px);
      box-shadow: 0 0 0 #6d28d9, 
                  0 0 0 #5b21b6, 
                  0 0 0 #4c1d95;
    }`,
    tailwind: `px-6 py-3 bg-purple-500 text-white font-semibold rounded-lg 
               shadow-[0_4px_0_#6d28d9,0_8px_0_#5b21b6,0_12px_0_#4c1d95] 
               active:translate-y-3 active:shadow-none transition-all`,
  },
  {
    id: 34,
    title: "RGB Split Button",
    html: `<button class="rgb-split-button">RGB Split</button>`,
    css: `.rgb-split-button {
      background: black;
      color: white;
      padding: 12px 24px;
      border: none;
      font-weight: 600;
      position: relative;
      overflow: hidden;
    }
    .rgb-split-button::before {
      content: 'RGB Split';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      padding: 12px 24px;
      color: red;
      clip-path: polygon(0 0, 100% 0, 100% 50%, 0 50%);
      transition: all 0.3s ease;
    }
    .rgb-split-button::after {
      content: 'RGB Split';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      padding: 12px 24px;
      color: blue;
      clip-path: polygon(0 50%, 100% 50%, 100% 100%, 0 100%);
      transition: all 0.3s ease;
    }
    .rgb-split-button:hover::before {
      transform: translate(5px, -5px);
    }
    .rgb-split-button:hover::after {
      transform: translate(-5px, 5px);
    }`,
    tailwind: `px-6 py-3 bg-black text-white font-semibold relative overflow-hidden 
               before:content-['RGB_Split'] before:absolute before:inset-0 before:px-6 before:py-3 
               before:text-red-500 before:[clip-path:polygon(0_0,100%_0,100%_50%,0_50%)] before:transition-all 
               after:content-['RGB_Split'] after:absolute after:inset-0 after:px-6 after:py-3 
               after:text-blue-500 after:[clip-path:polygon(0_50%,100%_50%,100%_100%,0_100%)] after:transition-all 
               hover:before:translate-x-1 hover:before:-translate-y-1 hover:after:-translate-x-1 hover:after:translate-y-1`,
  },
  {
    id: 35,
    title: "Bounce Button",
    html: `<button class="bounce-button">Bounce Me</button>`,
    css: `.bounce-button {
      background: #10b981;
      color: white;
      padding: 12px 24px;
      border: none;
      border-radius: 8px;
      font-weight: 600;
      transition: transform 0.3s ease;
    }
    .bounce-button:hover {
      animation: bounce 0.5s;
    }
    @keyframes bounce {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-10px); }
    }`,
    tailwind: `px-6 py-3 bg-emerald-500 text-white font-semibold rounded-lg 
               hover:animate-[bounce_0.5s]`,
  },
  {
    id: 36,
    title: "Skew Button",
    html: `<button class="skew-button">Skew Effect</button>`,
    css: `.skew-button {
      background: #3b82f6;
      color: white;
      padding: 12px 24px;
      border: none;
      font-weight: 600;
      transition: all 0.3s ease;
    }
    .skew-button:hover {
      transform: skewX(-15deg);
    }`,
    tailwind: `px-6 py-3 bg-blue-500 text-white font-semibold hover:-skew-x-15 transition-transform`,
  },
  {
    id: 37,
    title: "Depth Button",
    html: `<button class="depth-button">Depth Effect</button>`,
    css: `.depth-button {
      background: #4f46e5;
      color: white;
      padding: 12px 24px;
      border: none;
      border-radius: 8px;
      font-weight: 600;
      box-shadow: 0 5px 0 #4338ca,
                  0 10px 15px rgba(0, 0, 0, 0.1);
      transition: all 0.1s ease;
    }
    .depth-button:active {
      transform: translateY(5px);
      box-shadow: 0 2px 0 #4338ca,
                  0 5px 10px rgba(0, 0, 0, 0.1);
    }`,
    tailwind: `px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg 
               shadow-[0_5px_0_#4338ca,0_10px_15px_rgba(0,0,0,0.1)] 
               active:translate-y-1 active:shadow-[0_2px_0_#4338ca,0_5px_10px_rgba(0,0,0,0.1)] 
               transition-all`,
  },
  {
    id: 38,
    title: "Rotate Button",
    html: `<button class="rotate-button">Rotate</button>`,
    css: `.rotate-button {
      background: #ec4899;
      color: white;
      padding: 12px 24px;
      border: none;
      border-radius: 8px;
      font-weight: 600;
      transition: all 0.3s ease;
    }
    .rotate-button:hover {
      transform: rotate(10deg);
    }`,
    tailwind: `px-6 py-3 bg-pink-500 text-white font-semibold rounded-lg 
               hover:rotate-12 transition-transform`,
  },
  {
    id: 39,
    title: "Wobble Button",
    html: `<button class="wobble-button">Wobble</button>`,
    css: `.wobble-button {
      background: #f59e0b;
      color: white;
      padding: 12px 24px;
      border: none;
      border-radius: 8px;
      font-weight: 600;
      transition: all 0.3s ease;
    }
    .wobble-button:hover {
      animation: wobble 0.5s;
    }
    @keyframes wobble {
      0%, 100% { transform: rotate(0deg); }
      25% { transform: rotate(5deg); }
      50% { transform: rotate(-5deg); }
      75% { transform: rotate(2deg); }
    }`,
    tailwind: `px-6 py-3 bg-amber-500 text-white font-semibold rounded-lg 
               hover:animate-[wobble_0.5s]`,
  },
  {
    id: 40,
    title: "Inset Button",
    html: `<button class="inset-button">Inset Effect</button>`,
    css: `.inset-button {
      background: #e5e7eb;
      color: #4b5563;
      padding: 12px 24px;
      border: none;
      border-radius: 8px;
      font-weight: 600;
      box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
      transition: all 0.3s ease;
    }
    .inset-button:hover {
      box-shadow: inset 0 4px 8px rgba(0, 0, 0, 0.1);
    }`,
    tailwind: `px-6 py-3 bg-gray-200 text-gray-700 font-semibold rounded-lg 
               shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)] hover:shadow-[inset_0_4px_8px_rgba(0,0,0,0.1)] 
               transition-all`,
  },

  {
    id: 41,
    title: "Holographic Button",
    html: `<button class="holographic-button">Holographic</button>`,
    css: `.holographic-button {
      background: linear-gradient(45deg, #ff00cc, #3333ff, #00ccff, #00ff99);
      background-size: 300% 300%;
      color: white;
      padding: 12px 24px;
      border: none;
      border-radius: 8px;
      font-weight: 600;
      animation: holographic 6s ease infinite;
      text-shadow: 0 1px 2px rgba(0,0,0,0.3);
    }
    @keyframes holographic {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }`,
    tailwind: `px-6 py-3 bg-gradient-to-r from-pink-500 via-blue-500 to-teal-400 
               text-white font-semibold rounded-lg animate-[holographic_6s_ease_infinite] 
               [text-shadow:0_1px_2px_rgba(0,0,0,0.3)] bg-[length:300%_300%]`
  },
  {
    id: 42,
    title: "Liquid Fill Button",
    html: `<button class="liquid-button"><span>Liquid Fill</span></button>`,
    css: `.liquid-button {
      background: transparent;
      color: #3b82f6;
      padding: 12px 24px;
      border: 2px solid #3b82f6;
      font-weight: 600;
      position: relative;
      overflow: hidden;
      z-index: 1;
    }
    .liquid-button::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 0;
      background: #3b82f6;
      transition: height 0.4s ease;
      z-index: -1;
    }
    .liquid-button:hover {
      color: white;
    }
    .liquid-button:hover::before {
      height: 100%;
    }`,
    tailwind: `px-6 py-3 bg-transparent text-blue-500 font-semibold border-2 border-blue-500 
               relative overflow-hidden before:content-[''] before:absolute before:inset-0 
               before:w-full before:h-0 before:bg-blue-500 before:transition-all before:duration-400 
               before:z-[-1] hover:text-white hover:before:h-full`
  },
  {
    id: 43,
    title: "ASCII Art Button",
    html: `<button class="ascii-button">(⌐■_■)</button>`,
    css: `.ascii-button {
      background: #111;
      color: #00ff00;
      padding: 12px 24px;
      border: 1px solid #00ff00;
      font-family: monospace;
      font-size: 18px;
      letter-spacing: 2px;
      transition: all 0.3s ease;
    }
    .ascii-button:hover {
      box-shadow: 0 0 10px #00ff00;
      text-shadow: 0 0 5px #00ff00;
    }`,
    tailwind: `px-6 py-3 bg-gray-900 text-green-400 font-mono text-lg tracking-wider 
               border border-green-400 hover:shadow-[0_0_10px_#00ff00] hover:[text-shadow:0_0_5px_#00ff00] 
               transition-all`
  },
  {
    id: 44,
    title: "Tilt Hover Button",
    html: `<button class="tilt-button">Tilt Me</button>`,
    css: `.tilt-button {
      background: #f43f5e;
      color: white;
      padding: 12px 24px;
      border: none;
      border-radius: 8px;
      font-weight: 600;
      transform-style: preserve-3d;
      transition: transform 0.3s ease;
    }
    .tilt-button:hover {
      transform: rotateX(15deg) rotateY(15deg);
    }`,
    tailwind: `px-6 py-3 bg-rose-500 text-white font-semibold rounded-lg 
               hover:rotate-x-15 hover:rotate-y-15 transition-transform [transform-style:preserve-3d]`
  },
  {
    id: 45,
    title: "Pixel Art Button",
    html: `<button class="pixel-button">8-Bit Style</button>`,
    css: `.pixel-button {
      background: #ff5e5b;
      color: white;
      padding: 12px 24px;
      border: none;
      font-family: 'Press Start 2P', cursive;
      font-size: 14px;
      box-shadow: 4px 4px 0 #d83a3a;
      transition: all 0.1s ease;
    }
    .pixel-button:active {
      transform: translate(4px, 4px);
      box-shadow: none;
    }`,
    tailwind: `px-6 py-3 bg-[#ff5e5b] text-white font-press-start text-sm 
               shadow-[4px_4px_0_#d83a3a] active:translate-x-1 active:translate-y-1 
               active:shadow-none transition-all`
  },
  {
    id: 46,
    title: "Neon Sign Button",
    html: `<button class="neon-sign-button">OPEN</button>`,
    css: `.neon-sign-button {
      background: #1a1a2e;
      color: #ff2a6d;
      padding: 12px 24px;
      border: 3px solid #ff2a6d;
      font-family: 'Rajdhani', sans-serif;
      font-weight: 700;
      font-size: 18px;
      letter-spacing: 4px;
      text-shadow: 0 0 5px #ff2a6d;
      box-shadow: 0 0 10px #ff2a6d, inset 0 0 10px #ff2a6d;
      transition: all 0.3s ease;
    }
    .neon-sign-button:hover {
      color: #05d9e8;
      border-color: #05d9e8;
      text-shadow: 0 0 5px #05d9e8;
      box-shadow: 0 0 20px #05d9e8, inset 0 0 10px #05d9e8;
    }`,
    tailwind: `px-6 py-3 bg-[#1a1a2e] text-[#ff2a6d] font-rajdhani font-bold text-lg 
               tracking-widest border-3 border-[#ff2a6d] [text-shadow:0_0_5px_#ff2a6d] 
               shadow-[0_0_10px_#ff2a6d,inset_0_0_10px_#ff2a6d] hover:text-[#05d9e8] 
               hover:border-[#05d9e8] hover:[text-shadow:0_0_5px_#05d9e8] 
               hover:shadow-[0_0_20px_#05d9e8,inset_0_0_10px_#05d9e8] transition-all`
  },
  {
    id: 47,
    title: "Morphing Button",
    html: `<button class="morph-button">Morph</button>`,
    css: `.morph-button {
      background: #8b5cf6;
      color: white;
      padding: 12px 24px;
      border: none;
      border-radius: 50px;
      font-weight: 600;
      transition: all 0.5s ease;
    }
    .morph-button:hover {
      border-radius: 8px;
      transform: scale(1.1);
    }`,
    tailwind: `px-6 py-3 bg-purple-500 text-white font-semibold rounded-full 
               hover:rounded-lg hover:scale-110 transition-all duration-500`
  },
  {
    id: 48,
    title: "Cyber Button",
    html: `<button class="cyber-button">>_ CYBER</button>`,
    css: `.cyber-button {
      background: #0f0f0f;
      color: #00ff9d;
      padding: 12px 24px;
      border: 1px solid #00ff9d;
      font-family: 'Courier New', monospace;
      font-weight: bold;
      letter-spacing: 2px;
      position: relative;
      overflow: hidden;
    }
    .cyber-button::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(0, 255, 157, 0.2), transparent);
      transition: 0.5s;
    }
    .cyber-button:hover::before {
      left: 100%;
    }`,
    tailwind: `px-6 py-3 bg-[#0f0f0f] text-[#00ff9d] font-mono font-bold tracking-widest 
               border border-[#00ff9d] relative overflow-hidden before:content-[''] 
               before:absolute before:top-0 before:-left-full before:w-full before:h-full 
               before:bg-gradient-to-r before:from-transparent before:via-[rgba(0,255,157,0.2)] 
               before:to-transparent before:transition-all before:duration-500 hover:before:left-full`
  },
  {
    id: 49,
    title: "Smoke Effect Button",
    html: `<button class="smoke-button">Hover for Smoke</button>`,
    css: `.smoke-button {
      background: #111;
      color: white;
      padding: 12px 24px;
      border: none;
      border-radius: 8px;
      font-weight: 600;
      position: relative;
      overflow: hidden;
    }
    .smoke-button::before {
      content: '';
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      bottom: -10px;
      width: 30px;
      height: 30px;
      background: white;
      border-radius: 50%;
      opacity: 0;
      filter: blur(30px);
      transition: all 0.5s;
    }
    .smoke-button:hover::before {
      bottom: 50px;
      opacity: 0.5;
      width: 80px;
    }`,
    tailwind: `px-6 py-3 bg-gray-900 text-white font-semibold rounded-lg relative 
               overflow-hidden before:content-[''] before:absolute before:left-1/2 
               before:-translate-x-1/2 before:-bottom-2.5 before:w-8 before:h-8 
               before:bg-white before:rounded-full before:opacity-0 before:[filter:blur(30px)] 
               before:transition-all before:duration-500 hover:before:bottom-12 hover:before:opacity-50 
               hover:before:w-20`
  },
  {
    id: 50,
    title: "Binary Code Button",
    html: `<button class="binary-button">01001000 01101001</button>`,
    css: `.binary-button {
      background: black;
      color: lime;
      padding: 12px 24px;
      border: 1px solid lime;
      font-family: monospace;
      font-size: 14px;
      letter-spacing: 3px;
      position: relative;
      overflow: hidden;
    }
    .binary-button::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(0, 255, 0, 0.1), transparent);
      transform: translateX(-100%);
      transition: 0.5s;
    }
    .binary-button:hover::before {
      transform: translateX(100%);
    }`,
    tailwind: `px-6 py-3 bg-black text-lime-400 font-mono text-sm tracking-wider 
               border border-lime-400 relative overflow-hidden before:content-[''] 
               before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent 
               before:via-[rgba(0,255,0,0.1)] before:to-transparent before:-translate-x-full 
               before:transition-transform before:duration-500 hover:before:translate-x-full`
  },
  {
    id: 51,
    title: "Water Ripple Button",
    html: `<button class="water-button">Click Me</button>`,
    css: `.water-button {
      background: #3b82f6;
      color: white;
      padding: 12px 24px;
      border: none;
      border-radius: 8px;
      font-weight: 600;
      position: relative;
      overflow: hidden;
    }
    .water-button:after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 5px;
      height: 5px;
      background: rgba(255, 255, 255, 0.5);
      opacity: 0;
      border-radius: 100%;
      transform: scale(1, 1) translate(-50%);
      transform-origin: 50% 50%;
    }
    .water-button:focus:after {
      animation: ripple 1s ease-out;
    }
    @keyframes ripple {
      0% {
        transform: scale(0, 0);
        opacity: 0.5;
      }
      100% {
        transform: scale(20, 20);
        opacity: 0;
      }
    }`,
    tailwind: `px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg relative 
               overflow-hidden after:content-[''] after:absolute after:top-1/2 after:left-1/2 
               after:w-1 after:h-1 after:bg-white/50 after:opacity-0 after:rounded-full 
               after:scale-100 after:translate-x-[-50%] after:[transform-origin:50%_50%] 
               focus:after:animate-[ripple_1s_ease-out]`
  },
  {
    id: 52,
    title: "Matrix Rain Button",
    html: `<button class="matrix-button">MATRIX</button>`,
    css: `.matrix-button {
      background: black;
      color: #00ff41;
      padding: 12px 24px;
      border: 1px solid #00ff41;
      font-family: monospace;
      font-weight: bold;
      letter-spacing: 2px;
      position: relative;
      overflow: hidden;
    }
    .matrix-button::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(transparent 70%, rgba(0, 255, 65, 0.1));
      opacity: 0;
      transition: 0.5s;
    }
    .matrix-button:hover::before {
      opacity: 1;
    }`,
    tailwind: `px-6 py-3 bg-black text-[#00ff41] font-mono font-bold tracking-widest 
               border border-[#00ff41] relative overflow-hidden before:content-[''] 
               before:absolute before:inset-0 before:bg-gradient-to-b before:from-transparent 
               before:to-[rgba(0,255,65,0.1)] before:opacity-0 before:transition-opacity 
               before:duration-500 hover:before:opacity-100`
  },
  {
    id: 53,
    title: "Glitch Text Button",
    html: `<button class="glitch-text-button">GLITCH</button>`,
    css: `.glitch-text-button {
      background: black;
      color: white;
      padding: 12px 24px;
      border: none;
      font-weight: bold;
      position: relative;
    }
    .glitch-text-button::before, .glitch-text-button::after {
      content: 'GLITCH';
      position: absolute;
      top: 12px;
      left: 24px;
      color: white;
      background: black;
    }
    .glitch-text-button::before {
      clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%);
      transform: translate(-3px, -3px);
      color: #0ff;
    }
    .glitch-text-button::after {
      clip-path: polygon(0 60%, 100% 60%, 100% 100%, 0 100%);
      transform: translate(3px, 3px);
      color: #f0f;
    }
    .glitch-text-button:hover::before {
      animation: glitch-before 0.3s infinite;
    }
    .glitch-text-button:hover::after {
      animation: glitch-after 0.3s infinite;
    }
    @keyframes glitch-before {
      0% { transform: translate(0); }
      25% { transform: translate(-3px, 3px); }
      50% { transform: translate(-3px, -3px); }
      75% { transform: translate(3px, 3px); }
      100% { transform: translate(3px, -3px); }
    }
    @keyframes glitch-after {
      0% { transform: translate(0); }
      25% { transform: translate(3px, -3px); }
      50% { transform: translate(-3px, 3px); }
      75% { transform: translate(3px, 3px); }
      100% { transform: translate(-3px, -3px); }
    }`,
    tailwind: `px-6 py-3 bg-black text-white font-bold relative 
               before:content-['GLITCH'] before:absolute before:top-3 before:left-6 
               before:text-white before:bg-black before:[clip-path:polygon(0_0,100%_0,100%_45%,0_45%)] 
               before:-translate-x-1 before:-translate-y-1 before:text-cyan-300 
               after:content-['GLITCH'] after:absolute after:top-3 after:left-6 after:text-white 
               after:bg-black after:[clip-path:polygon(0_60%,100%_60%,100%_100%,0_100%)] 
               after:translate-x-1 after:translate-y-1 after:text-fuchsia-300 
               hover:before:animate-[glitch-before_0.3s_infinite] hover:after:animate-[glitch-after_0.3s_infinite]`
  },
  {
    id: 54,
    title: "Neon Flicker Button",
    html: `<button class="neon-flicker-button">FLICKER</button>`,
    css: `.neon-flicker-button {
      background: #1a1a2e;
      color: #ff2a6d;
      padding: 12px 24px;
      border: 3px solid #ff2a6d;
      font-family: 'Rajdhani', sans-serif;
      font-weight: 700;
      font-size: 18px;
      letter-spacing: 4px;
      text-shadow: 0 0 5px #ff2a6d;
      box-shadow: 0 0 10px #ff2a6d, inset 0 0 10px #ff2a6d;
      animation: flicker 3s infinite alternate;
    }
    @keyframes flicker {
      0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% {
        box-shadow: 0 0 10px #ff2a6d, inset 0 0 10px #ff2a6d;
      }
      20%, 24%, 55% {
        box-shadow: none;
      }
    }`,
    tailwind: `px-6 py-3 bg-[#1a1a2e] text-[#ff2a6d] font-rajdhani font-bold text-lg 
               tracking-widest border-3 border-[#ff2a6d] [text-shadow:0_0_5px_#ff2a6d] 
               shadow-[0_0_10px_#ff2a6d,inset_0_0_10px_#ff2a6d] animate-[flicker_3s_infinite_alternate]`
  },
  {
    id: 55,
    title: "Cyber Terminal Button",
    html: `<button class="cyber-terminal-button">>_ RUN COMMAND</button>`,
    css: `.cyber-terminal-button {
      background: rgba(0, 0, 0, 0.8);
      color: #00ff9d;
      padding: 12px 24px;
      border: 1px solid #00ff9d;
      font-family: 'Courier New', monospace;
      font-weight: bold;
      letter-spacing: 1px;
      position: relative;
      overflow: hidden;
    }
    .cyber-terminal-button::after {
      content: '_';
      position: absolute;
      right: 10px;
      animation: blink 1s infinite;
    }
    @keyframes blink {
      0%, 100% { opacity: 1; }
      50% { opacity: 0; }
    }`,
    tailwind: `px-6 py-3 bg-black/80 text-[#00ff9d] font-mono font-bold tracking-wider 
               border border-[#00ff9d] relative overflow-hidden after:content-['_'] 
               after:absolute after:right-2.5 after:animate-[blink_1s_infinite]`
  },
  {
    id: 56,
    title: "Hologram Button",
    html: `<button class="hologram-button">Hologram</button>`,
    css: `.hologram-button {
      background: transparent;
      color: #0ff;
      padding: 12px 24px;
      border: 1px solid #0ff;
      font-weight: 600;
      position: relative;
      text-shadow: 0 0 5px #0ff;
      box-shadow: 0 0 10px #0ff;
      transition: all 0.3s ease;
    }
    .hologram-button:hover {
      background: rgba(0, 255, 255, 0.1);
      box-shadow: 0 0 20px #0ff, 0 0 30px #0ff;
    }`,
    tailwind: `px-6 py-3 bg-transparent text-cyan-300 font-semibold border border-cyan-300 
               [text-shadow:0_0_5px_#0ff] shadow-[0_0_10px_#0ff] hover:bg-[rgba(0,255,255,0.1)] 
               hover:shadow-[0_0_20px_#0ff,0_0_30px_#0ff] transition-all`
  },
  {
    id: 57,
    title: "Scan Line Button",
    html: `<button class="scanline-button">SCANLINE</button>`,
    css: `.scanline-button {
      background: rgba(0, 0, 0, 0.8);
      color: lime;
      padding: 12px 24px;
      border: 1px solid lime;
      font-family: monospace;
      font-weight: bold;
      position: relative;
      overflow: hidden;
    }
    .scanline-button::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 2px;
      background: lime;
      animation: scan 2s linear infinite;
    }
    @keyframes scan {
      0% { top: -2px; }
      100% { top: 100%; }
    }`,
    tailwind: `px-6 py-3 bg-black/80 text-lime-400 font-mono font-bold relative 
               overflow-hidden border border-lime-400 before:content-[''] before:absolute 
               before:top-0 before:left-0 before:w-full before:h-0.5 before:bg-lime-400 
               before:animate-[scan_2s_linear_infinite]`
  },
  {
    id: 58,
    title: "Retro TV Button",
    html: `<button class="retro-tv-button">ON AIR</button>`,
    css: `.retro-tv-button {
      background: linear-gradient(145deg, #ff0000, #cc0000);
      color: white;
      padding: 12px 24px;
      border: none;
      border-radius: 0;
      font-family: 'Arial Black', sans-serif;
      font-weight: bold;
      text-transform: uppercase;
      letter-spacing: 2px;
      box-shadow: 0 0 10px rgba(255, 0, 0, 0.5);
      position: relative;
      overflow: hidden;
    }
    .retro-tv-button::before {
      content: '';
      position: absolute;
      top: -10px;
      left: -10px;
      right: -10px;
      bottom: -10px;
      background: linear-gradient(45deg, #ff0000, #ffff00, #00ff00, #00ffff, #0000ff, #ff00ff, #ff0000);
      background-size: 400%;
      opacity: 0;
      z-index: -1;
      filter: blur(5px);
      transition: 0.5s;
    }
    .retro-tv-button:hover::before {
      opacity: 1;
      animation: animate 20s linear infinite;
    }
    @keyframes animate {
      0% { background-position: 0 0; }
      50% { background-position: 400% 0; }
      100% { background-position: 0 0; }
    }`,
    tailwind: `px-6 py-3 bg-gradient-to-br from-red-600 to-red-700 text-white font-black 
               uppercase tracking-widest shadow-[0_0_10px_rgba(255,0,0,0.5)] relative 
               overflow-hidden before:content-[''] before:absolute before:-inset-2.5 
               before:bg-[linear-gradient(45deg,#ff0000,#ffff00,#00ff00,#00ffff,#0000ff,#ff00ff,#ff0000)] 
               before:bg-[length:400%] before:opacity-0 before:z-[-1] before:[filter:blur(5px)] 
               before:transition-opacity before:duration-500 hover:before:opacity-100 
               hover:before:animate-[animate_20s_linear_infinite]`
  },
  {
    id: 59,
    title: "Neon Tube Button",
    html: `<button class="neon-tube-button">NEON TUBE</button>`,
    css: `.neon-tube-button {
      background: transparent;
      color: #ff2a6d;
      padding: 12px 24px;
      border: none;
      font-family: 'Rajdhani', sans-serif;
      font-weight: 700;
      font-size: 18px;
      letter-spacing: 4px;
      text-shadow: 0 0 5px #ff2a6d;
      position: relative;
    }
    .neon-tube-button::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: 2px solid #ff2a6d;
      border-radius: 5px;
      box-shadow: 0 0 10px #ff2a6d, inset 0 0 10px #ff2a6d;
      animation: neon-flicker 2s infinite alternate;
    }
    @keyframes neon-flicker {
      0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% {
        opacity: 1;
      }
      20%, 24%, 55% {
        opacity: 0.5;
      }
    }`,
    tailwind: `px-6 py-3 bg-transparent text-[#ff2a6d] font-rajdhani font-bold text-lg 
               tracking-widest [text-shadow:0_0_5px_#ff2a6d] relative before:content-[''] 
               before:absolute before:inset-0 before:border-2 before:border-[#ff2a6d] 
               before:rounded before:shadow-[0_0_10px_#ff2a6d,inset_0_0_10px_#ff2a6d] 
               before:animate-[neon-flicker_2s_infinite_alternate]`
  },
  {
    id: 60,
    title: "Glowing Orb Button",
    html: `<button class="orb-button">GLOWING ORB</button>`,
    css: `.orb-button {
      background: radial-gradient(circle at center, #00ff9d, transparent 70%);
      color: white;
      padding: 12px 24px;
      border: none;
      border-radius: 50px;
      font-weight: 600;
      text-shadow: 0 0 5px rgba(0, 255, 157, 0.5);
      box-shadow: 0 0 20px #00ff9d;
      transition: all 0.3s ease;
    }
    .orb-button:hover {
      box-shadow: 0 0 40px #00ff9d;
      transform: scale(1.05);
    }`,
    tailwind: `px-6 py-3 bg-[radial-gradient(circle_at_center,#00ff9d,transparent_70%)] 
               text-white font-semibold rounded-full [text-shadow:0_0_5px_rgba(0,255,157,0.5)] 
               shadow-[0_0_20px_#00ff9d] hover:shadow-[0_0_40px_#00ff9d] hover:scale-105 transition-all`
  }
];
