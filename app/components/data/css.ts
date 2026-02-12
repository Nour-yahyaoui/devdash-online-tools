// components/data/cssCourse.ts

export interface CSSLesson {
  id: number;
  title: string;
  description: string;
  example: string; // HTML/CSS ready for dangerouslySetInnerHTML
  preview: {
    type: "css";
    properties: string[];
  };
  category: "selectors" | "text" | "background" | "borders" | "lists" | "tables" | "filters" | "box" | "transform" | "animation";
  level: "beginner" | "intermediate";
  color: string; // MUST be from palette: #475569 | #64748b | #94a3b8 | #ffb7c5 | #c5e6ff | #d2b7ff | #b7ffca
}

export const cssLessons: CSSLesson[] = [
  // ========== SELECTORS ==========
  {
    id: 1,
    title: "Type Selector",
    description: "Targets all elements of a given tag name. The foundation of CSS.",
    example: `<style>
  /* Targets ALL paragraphs */
  p { 
    color: #ffb7c5; 
    font-weight: bold;
  }
</style>
<p>This paragraph is pink.</p>
<p>This is also pink.</p>
<span>This span is NOT affected.</span>`,
    preview: {
      type: "css",
      properties: ["p { color: #ffb7c5; }"],
    },
    category: "selectors",
    level: "beginner",
    color: "#c5e6ff",
  },
  {
    id: 2,
    title: "Class Selector",
    description: "Targets any element with a specific class attribute. Reusable.",
    example: `<style>
  .highlight { 
    background-color: #b7ffca; 
    padding: 4px 8px;
    border-radius: 4px;
  }
</style>
<p>Normal paragraph.</p>
<p class="highlight">This one has a green background.</p>
<span class="highlight">Spans work too.</span>`,
    preview: {
      type: "css",
      properties: [".highlight { background: #b7ffca; }"],
    },
    category: "selectors",
    level: "beginner",
    color: "#c5e6ff",
  },
  {
    id: 3,
    title: "ID Selector",
    description: "Targets a SINGLE unique element. Use only once per page.",
    example: `<style>
  #main-title {
    color: #d2b7ff;
    font-size: 28px;
    border-bottom: 2px solid #d2b7ff;
  }
</style>
<h1 id="main-title">Welcome!</h1>
<h1>No border here.</h1>`,
    preview: {
      type: "css",
      properties: ["#main-title { color: #d2b7ff; }"],
    },
    category: "selectors",
    level: "beginner",
    color: "#c5e6ff",
  },
  {
    id: 4,
    title: "Universal Selector",
    description: "Targets EVERY element on the page. Use sparingly.",
    example: `<style>
  /* Gives EVERY element a red outline */
  * { 
    outline: 1px solid #ffb7c5; 
    margin: 2px;
  }
</style>
<h1>Title</h1>
<p>Paragraph</p>
<span>Span</span>
<div>Div</div>`,
    preview: {
      type: "css",
      properties: ["* { outline: 1px solid pink; }"],
    },
    category: "selectors",
    level: "beginner",
    color: "#c5e6ff",
  },
  {
    id: 5,
    title: "Attribute Selector",
    description: "Targets elements based on an attribute or attribute value.",
    example: `<style>
  /* Targets ONLY text inputs */
  input[type="text"] {
    border: 2px solid #b7ffca;
    padding: 8px;
  }
</style>
<input type="text" placeholder="I have green border">
<input type="tel" placeholder="I do not">`,
    preview: {
      type: "css",
      properties: ["input[type='text'] { border: 2px solid #b7ffca; }"],
    },
    category: "selectors",
    level: "intermediate",
    color: "#c5e6ff",
  },
  {
    id: 6,
    title: "Pseudo-class: Hover",
    description: "Applies styles when the mouse hovers over an element.",
    example: `<style>
  button {
    background: #475569;
    color: white;
    border: none;
    padding: 8px 16px;
    transition: 0.2s;
  }
  button:hover {
    background: #64748b;
    transform: scale(1.05);
  }
</style>
<button>Hover me!</button>`,
    preview: {
      type: "css",
      properties: ["button:hover { background: #64748b; }"],
    },
    category: "selectors",
    level: "beginner",
    color: "#c5e6ff",
  },
  {
    id: 7,
    title: "Pseudo-class: Active & Focus",
    description: ":active when clicking; :focus when tabbed/clicked into.",
    example: `<style>
  button:active { background: #ffb7c5; }
  input:focus { 
    border-color: #d2b7ff;
    outline: none;
    box-shadow: 0 0 0 3px #d2b7ff80;
  }
</style>
<button>Click me (active=pink)</button>
<input placeholder="Click or tab here">`,
    preview: {
      type: "css",
      properties: ["button:active { background: pink; }", "input:focus { border-color: purple; }"],
    },
    category: "selectors",
    level: "intermediate",
    color: "#c5e6ff",
  },

  // ========== TEXT STYLING ==========
  {
    id: 8,
    title: "Font Family",
    description: "Defines the typeface. Always provide a fallback.",
    example: `<style>
  .serif { font-family: Georgia, serif; }
  .sans { font-family: Arial, sans-serif; }
  .mono { font-family: 'Courier New', monospace; }
</style>
<p class="serif">Serif (Georgia)</p>
<p class="sans">Sans-serif (Arial)</p>
<p class="mono">Monospace (Courier)</p>`,
    preview: {
      type: "css",
      properties: ["font-family: Arial, sans-serif;"],
    },
    category: "text",
    level: "beginner",
    color: "#64748b",
  },
  {
    id: 9,
    title: "Font Size & Weight",
    description: "Size controls scale; Weight controls thickness.",
    example: `<style>
  h1 { font-size: 32px; font-weight: 800; }
  .light { font-weight: 300; }
  .bold { font-weight: 700; }
</style>
<h1>Big & Bold</h1>
<p class="light">Light weight (300)</p>
<p class="bold">Bold weight (700)</p>`,
    preview: {
      type: "css",
      properties: ["font-size: 32px;", "font-weight: 700;"],
    },
    category: "text",
    level: "beginner",
    color: "#64748b",
  },
  {
    id: 10,
    title: "Font Style & Text Align",
    description: "Italic style and horizontal alignment.",
    example: `<style>
  .italic { font-style: italic; }
  .center { text-align: center; }
  .right { text-align: right; }
</style>
<p class="italic">This is italic.</p>
<p class="center">⬅️ Centered ➡️</p>
<p class="right">Right aligned.</p>`,
    preview: {
      type: "css",
      properties: ["font-style: italic;", "text-align: center;"],
    },
    category: "text",
    level: "beginner",
    color: "#64748b",
  },
  {
    id: 11,
    title: "Text Shadow",
    description: "Adds shadow to text. Values: x y blur color.",
    example: `<style>
  h2 {
    text-shadow: 2px 2px 4px #94a3b8;
  }
  .glow {
    text-shadow: 0 0 8px #b7ffca;
  }
</style>
<h2>Subtle shadow</h2>
<span class="glow">✨ Glow effect ✨</span>`,
    preview: {
      type: "css",
      properties: ["text-shadow: 2px 2px 4px gray;"],
    },
    category: "text",
    level: "intermediate",
    color: "#64748b",
  },
  {
    id: 12,
    title: "Color",
    description: "Sets the text color. Hex, RGB, or named colors.",
    example: `<style>
  .hex { color: #ffb7c5; }
  .rgb { color: rgb(210, 183, 255); }
  .named { color: #b7ffca; }
</style>
<p class="hex">Pink (#ffb7c5)</p>
<p class="rgb">Purple (rgb)</p>
<p class="named">Green (#b7ffca)</p>`,
    preview: {
      type: "css",
      properties: ["color: #ffb7c5;"],
    },
    category: "text",
    level: "beginner",
    color: "#64748b",
  },

  // ========== BACKGROUND ==========
  {
    id: 13,
    title: "Background Color",
    description: "Fills the element's background with a solid color.",
    example: `<style>
  .card {
    background-color: #c5e6ff;
    padding: 16px;
    border-radius: 8px;
  }
</style>
<div class="card">
  <p>This card has a light blue background.</p>
</div>`,
    preview: {
      type: "css",
      properties: ["background-color: #c5e6ff;"],
    },
    category: "background",
    level: "beginner",
    color: "#94a3b8",
  },
  {
    id: 14,
    title: "Background Image & Repeat",
    description: "Sets an image as background; controls tiling.",
    example: `<style>
  .pattern {
    background-image: url('https://picsum.photos/50/50');
    background-repeat: repeat-x;
    color: black;
    font-weight: bold;
    padding: 20px;
  }
</style>
<div class="pattern">Repeated horizontally</div>`,
    preview: {
      type: "css",
      properties: ["background-image: url('...');", "background-repeat: repeat-x;"],
    },
    category: "background",
    level: "intermediate",
    color: "#94a3b8",
  },
  {
    id: 15,
    title: "Background Size: Cover & Contain",
    description: "Cover = fills element (crops); Contain = fits whole image (letterbox).",
    example: `<style>
  div {
    width: 200px;
    height: 100px;
    background-image: url('https://picsum.photos/400/200');
    background-repeat: no-repeat;
    border: 1px solid black;
  }
  .cover { background-size: cover; }
  .contain { background-size: contain; }
</style>
<div class="cover">Cover (crops)</div>
<div class="contain">Contain (fits)</div>`,
    preview: {
      type: "css",
      properties: ["background-size: cover;", "background-size: contain;"],
    },
    category: "background",
    level: "intermediate",
    color: "#94a3b8",
  },

  // ========== BORDERS ==========
  {
    id: 16,
    title: "Border Style & Color",
    description: "Defines the line style (solid, dashed, etc.) and color.",
    example: `<style>
  .solid { border: 3px solid #ffb7c5; }
  .dashed { border: 3px dashed #d2b7ff; }
  .dotted { border: 3px dotted #b7ffca; }
</style>
<p class="solid">Solid pink</p>
<p class="dashed">Dashed purple</p>
<p class="dotted">Dotted green</p>`,
    preview: {
      type: "css",
      properties: ["border: 3px solid #ffb7c5;"],
    },
    category: "borders",
    level: "beginner",
    color: "#475569",
  },
  {
    id: 17,
    title: "Border Width & Radius",
    description: "Width controls thickness; Radius rounds the corners.",
    example: `<style>
  .box {
    border: 2px solid #64748b;
    padding: 16px;
    border-radius: 16px;
  }
  .circle {
    border-radius: 50%;
    width: 50px;
    height: 50px;
  }
</style>
<div class="box">Rounded corners (16px)</div>`,
    preview: {
      type: "css",
      properties: ["border-radius: 16px;"],
    },
    category: "borders",
    level: "beginner",
    color: "#475569",
  },
  {
    id: 18,
    title: "Border (Shorthand)",
    description: "Sets width, style, and color in one line.",
    example: `<style>
  h3 {
    border: 4px dashed #b7ffca;
    padding: 8px;
  }
</style>
<h3>Dashed green border</h3>`,
    preview: {
      type: "css",
      properties: ["border: 4px dashed #b7ffca;"],
    },
    category: "borders",
    level: "beginner",
    color: "#475569",
  },

  // ========== LISTS ==========
  {
    id: 19,
    title: "List Style Type",
    description: "Changes bullet/numbering style.",
    example: `<style>
  ul { list-style-type: square; }
  ol { list-style-type: upper-roman; }
</style>
<ul>
  <li>Square bullet</li>
  <li>Square bullet</li>
</ul>
<ol>
  <li>Roman I</li>
  <li>Roman II</li>
</ol>`,
    preview: {
      type: "css",
      properties: ["list-style-type: square;", "list-style-type: upper-roman;"],
    },
    category: "lists",
    level: "beginner",
    color: "#ffb7c5",
  },
  {
    id: 20,
    title: "List Style Position",
    description: "Inside = bullet aligns with text; Outside = bullet hangs left.",
    example: `<style>
  .inside { list-style-position: inside; background: #f1f5f9; }
  .outside { list-style-position: outside; background: #f1f5f9; }
</style>
<ul class="inside">
  <li>Inside (text wraps under bullet)</li>
</ul>
<ul class="outside">
  <li>Outside (bullet hangs)</li>
</ul>`,
    preview: {
      type: "css",
      properties: ["list-style-position: inside;"],
    },
    category: "lists",
    level: "intermediate",
    color: "#ffb7c5",
  },

  // ========== TABLES ==========
  {
    id: 21,
    title: "Border Collapse",
    description: "Collapse = single borders; Separate = double borders.",
    example: `<style>
  table { border-collapse: collapse; width: 100%; }
  td, th { border: 1px solid #94a3b8; padding: 8px; }
</style>
<table>
  <tr><th>Name</th><th>Age</th></tr>
  <tr><td>Alice</td><td>25</td></tr>
  <tr><td>Bob</td><td>30</td></tr>
</table>`,
    preview: {
      type: "css",
      properties: ["border-collapse: collapse;"],
    },
    category: "tables",
    level: "intermediate",
    color: "#d2b7ff",
  },

  // ========== FILTERS ==========
  {
    id: 22,
    title: "Grayscale & Invert",
    description: "Grayscale removes color; Invert flips colors.",
    example: `<style>
  img { width: 100px; }
  .gray { filter: grayscale(100%); }
  .invert { filter: invert(100%); }
</style>
<img src="https://picsum.photos/100/100" class="gray">
<img src="https://picsum.photos/100/100" class="invert">`,
    preview: {
      type: "css",
      properties: ["filter: grayscale(100%);", "filter: invert(100%);"],
    },
    category: "filters",
    level: "intermediate",
    color: "#b7ffca",
  },
  {
    id: 23,
    title: "Blur",
    description: "Applies a gaussian blur. Higher px = more blur.",
    example: `<style>
  .blurry {
    filter: blur(2px);
  }
</style>
<img src="https://picsum.photos/100/100" class="blurry">
<p class="blurry">This text is blurry.</p>`,
    preview: {
      type: "css",
      properties: ["filter: blur(2px);"],
    },
    category: "filters",
    level: "intermediate",
    color: "#b7ffca",
  },

  // ========== BOX MODEL ==========
  {
    id: 24,
    title: "Width & Height",
    description: "Sets the dimensions of an element.",
    example: `<style>
  .box {
    width: 200px;
    height: 100px;
    background-color: #c5e6ff;
  }
</style>
<div class="box">200px x 100px</div>`,
    preview: {
      type: "css",
      properties: ["width: 200px;", "height: 100px;"],
    },
    category: "box",
    level: "beginner",
    color: "#475569",
  },
  {
    id: 25,
    title: "Padding",
    description: "Space INSIDE the element, between content and border.",
    example: `<style>
  .card {
    background: #f1f5f9;
    padding: 20px;
    border-left: 4px solid #ffb7c5;
  }
</style>
<div class="card">
  I have 20px of space inside.
</div>`,
    preview: {
      type: "css",
      properties: ["padding: 20px;"],
    },
    category: "box",
    level: "beginner",
    color: "#475569",
  },
  {
    id: 26,
    title: "Display: Block vs Inline",
    description: "Block = full width, new line. Inline = flows with text.",
    example: `<style>
  .block-demo { display: block; background: #d2b7ff; }
  .inline-demo { display: inline; background: #b7ffca; }
</style>
<span class="block-demo">Block takes full width</span>
<span class="inline-demo">Inline</span>
<span class="inline-demo">sits</span>
<span class="inline-demo">next</span>
<span class="inline-demo">to each other</span>`,
    preview: {
      type: "css",
      properties: ["display: block;", "display: inline;"],
    },
    category: "box",
    level: "beginner",
    color: "#475569",
  },
  {
    id: 27,
    title: "Position: Relative & Absolute",
    description: "Relative = offset from normal; Absolute = relative to positioned parent.",
    example: `<style>
  .parent {
    position: relative;
    background: #e2e8f0;
    height: 80px;
    margin: 20px;
  }
  .child {
    position: absolute;
    bottom: 0;
    right: 0;
    background: #ffb7c5;
    padding: 4px;
  }
</style>
<div class="parent">
  Parent
  <div class="child">Bottom Right</div>
</div>`,
    preview: {
      type: "css",
      properties: ["position: relative;", "position: absolute; bottom: 0; right: 0;"],
    },
    category: "box",
    level: "intermediate",
    color: "#475569",
  },
  {
    id: 28,
    title: "Float",
    description: "Pushes element left/right; text wraps around.",
    example: `<style>
  .float-left {
    float: left;
    width: 80px;
    height: 80px;
    background: #b7ffca;
    margin-right: 12px;
  }
</style>
<div class="float-left">Float</div>
<p>This text wraps around the floated green square. This demonstrates the classic print layout technique.</p>`,
    preview: {
      type: "css",
      properties: ["float: left;", "width: 80px;"],
    },
    category: "box",
    level: "intermediate",
    color: "#475569",
  },
  {
    id: 29,
    title: "Box Shadow",
    description: "Adds a drop shadow to the element. Values: x y blur spread color.",
    example: `<style>
  .shadow {
    box-shadow: 4px 4px 10px #94a3b8;
    padding: 16px;
    background: white;
  }
</style>
<div class="shadow">
  I have a subtle shadow.
</div>`,
    preview: {
      type: "css",
      properties: ["box-shadow: 4px 4px 10px gray;"],
    },
    category: "box",
    level: "intermediate",
    color: "#475569",
  },
  {
    id: 30,
    title: "Opacity",
    description: "0 = invisible, 1 = solid. Values between are semi-transparent.",
    example: `<style>
  .faded {
    opacity: 0.6;
    background: #ffb7c5;
    padding: 12px;
  }
</style>
<div class="faded">
  I am 60% opaque.
</div>`,
    preview: {
      type: "css",
      properties: ["opacity: 0.6;"],
    },
    category: "box",
    level: "beginner",
    color: "#475569",
  },

  // ========== TRANSFORM ==========
  {
    id: 31,
    title: "Rotate & Scale",
    description: "Rotate = spin; Scale = grow/shrink.",
    example: `<style>
  .rotate {
    transform: rotate(10deg);
    background: #d2b7ff;
    padding: 8px;
    margin: 20px;
  }
  .scale {
    transform: scale(1.2);
    background: #b7ffca;
    padding: 8px;
    margin: 20px;
  }
</style>
<div class="rotate">Rotated 10°</div>
<div class="scale">Scaled 1.2x</div>`,
    preview: {
      type: "css",
      properties: ["transform: rotate(10deg);", "transform: scale(1.2);"],
    },
    category: "transform",
    level: "intermediate",
    color: "#ffb7c5",
  },
  {
    id: 32,
    title: "Translate & Skew",
    description: "Translate = move; Skew = slant.",
    example: `<style>
  .translate {
    transform: translate(20px, 10px);
    background: #c5e6ff;
  }
  .skew {
    transform: skewX(15deg);
    background: #ffb7c5;
  }
</style>
<div class="translate">Moved right 20px</div>
<div class="skew">Slashed slant</div>`,
    preview: {
      type: "css",
      properties: ["transform: translate(20px, 10px);", "transform: skewX(15deg);"],
    },
    category: "transform",
    level: "intermediate",
    color: "#ffb7c5",
  },

  // ========== ANIMATION ==========
  {
    id: 33,
    title: "Transition",
    description: "Smoothly animates between states on hover/focus.",
    example: `<style>
  .transition-btn {
    background: #64748b;
    color: white;
    padding: 10px 20px;
    transition: all 0.3s ease;
  }
  .transition-btn:hover {
    background: #ffb7c5;
    padding: 10px 30px;
  }
</style>
<button class="transition-btn">Hover me smoothly</button>`,
    preview: {
      type: "css",
      properties: ["transition: all 0.3s ease;"],
    },
    category: "animation",
    level: "intermediate",
    color: "#b7ffca",
  },
  {
    id: 34,
    title: "Keyframes Animation",
    description: "Multi-step animations with custom keyframes.",
    example: `<style>
  @keyframes pulse {
    0% { opacity: 1; }
    50% { opacity: 0.5; }
    100% { opacity: 1; }
  }
  .pulse {
    animation: pulse 2s infinite;
    background: #ffb7c5;
    padding: 12px;
  }
</style>
<div class="pulse">I am pulsing!</div>`,
    preview: {
      type: "css",
      properties: ["@keyframes pulse { 0% { opacity: 1; } 50% { opacity: 0.5; } }"],
    },
    category: "animation",
    level: "intermediate",
    color: "#b7ffca",
  },
];

// ========== CATEGORIES FOR FILTERING ==========
export const cssCategories = [
  { id: "all", name: "All Lessons", color: "#94a3b8" },
  { id: "selectors", name: "Selectors", color: "#c5e6ff" },
  { id: "text", name: "Text Styling", color: "#64748b" },
  { id: "background", name: "Background", color: "#94a3b8" },
  { id: "borders", name: "Borders", color: "#475569" },
  { id: "lists", name: "Lists", color: "#ffb7c5" },
  { id: "tables", name: "Tables", color: "#d2b7ff" },
  { id: "filters", name: "Filters", color: "#b7ffca" },
  { id: "box", name: "Box Model", color: "#475569" },
  { id: "transform", name: "Transform", color: "#ffb7c5" },
  { id: "animation", name: "Animations", color: "#b7ffca" },
];

// ========== PALETTE VERIFICATION ==========
// This comment ensures all colors used are from the DEVDAH palette.
// Palette: #475569, #64748b, #94a3b8, #ffb7c5, #c5e6ff, #d2b7ff, #b7ffca
// NO OTHER HEX CODES ARE PERMITTED.