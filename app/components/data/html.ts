// 1. EXPORT INTERFACE FIRST
export interface HTMLLesson {
  id: number;
  tag: string;
  title: string;
  description: string;
  example: string;
  preview: {
    type:
      | "headings"
      | "paragraphs"
      | "links"
      | "images"
      | "lists"
      | "generic"
      | "table"
      | "audio"
      | "video"
      | "form"
      | "select"
      | "textarea"
      | "details"
      | "figure"
      | "iframe"
      | "div"
      | "span"
      | "br"
      | "hr";
    content?: string[];
    props?: any;
  };
  category:
    | "basics"
    | "text"
    | "media"
    | "lists"
    | "forms"
    | "semantic"
    | "tables"
    | "interactive"
    | "containers"
    | "metadata";
  level: "beginner" | "intermediate" | "advanced";
  color: string;
}

// 2. EXPORT DATA ARRAY WITH TYPE - PURE HTML, NO CSS!
export const htmlLessons: HTMLLesson[] = [
  // ============================================
  // BASICS & STRUCTURE
  // ============================================
  {
    id: 1,
    tag: "<h1>",
    title: "Headings",
    description:
      "Used for titles and headings. h1 is most important, h6 is least. Creates a clear hierarchy for your content.",
    example:
      "<h1>Welcome to My Website</h1>\n<h2>About Me</h2>\n<h3>My Hobbies</h3>\n<h4>Favorite Books</h4>\n<h5>Daily Routine</h5>\n<h6>Small Notes</h6>",
    preview: {
      type: "headings",
      content: [
        "Welcome to My Website",
        "About Me",
        "My Hobbies",
        "Favorite Books",
        "Daily Routine",
        "Small Notes",
      ],
    },
    category: "basics",
    level: "beginner",
    color: "#c5e6ff",
  },
  {
    id: 2,
    tag: "<p>",
    title: "Paragraphs",
    description:
      "Defines a paragraph of text. Creates blocks of text with automatic spacing above and below.",
    example:
      "<p>HTML is the standard markup language for creating web pages. It describes the structure of a web page using elements like headings, paragraphs, links, and images.</p>\n<p>CSS is used to style HTML elements. It controls colors, fonts, layouts, and responsive design.</p>\n<p>JavaScript makes web pages interactive. It can update content, animate elements, and handle user events.</p>",
    preview: {
      type: "paragraphs",
      content: [
        "HTML is the standard markup language for creating web pages...",
        "CSS is used to style HTML elements...",
        "JavaScript makes web pages interactive...",
      ],
    },
    category: "basics",
    level: "beginner",
    color: "#d2b7ff",
  },
  {
    id: 3,
    tag: "<a>",
    title: "Links",
    description:
      "Creates hyperlinks to other pages, websites, or sections. The href attribute defines the destination URL.",
    example:
      '<a href="https://www.google.com">Search on Google</a>\n<a href="https://github.com" target="_blank">Open GitHub in new tab</a>\n<a href="#contact">Jump to Contact Section</a>\n<a href="document.pdf">Download PDF</a>\n<a href="mailto:hello@example.com">Send Email</a>',
    preview: {
      type: "links",
      content: [
        "Search on Google",
        "Open GitHub in new tab",
        "Jump to Contact Section",
        "Download PDF",
        "Send Email",
      ],
    },
    category: "basics",
    level: "beginner",
    color: "#ffb7c5",
  },
  {
    id: 4,
    tag: "<img>",
    title: "Images",
    description:
      "Embeds an image in the page. The src attribute specifies the image path, alt provides accessibility description.",
    example:
      '<img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&h=200&fit=crop" alt="Person coding on laptop">\n<img src="https://images.unsplash.com/photo-1523800503107-5bc3ba2a6f81?w=300&h=200&fit=crop" alt="HTML code on a computer screen">\n<img src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=300&h=200&fit=crop" alt="Close up of coding syntax">',
    preview: {
      type: "images",
      content: [
        "Person coding on laptop",
        "HTML code on screen",
        "Coding syntax close up",
      ],
      props: {
        alt: "Coding images",
      },
    },
    category: "media",
    level: "beginner",
    color: "#b7ffca",
  },
  {
    id: 5,
    tag: "<ul>",
    title: "Unordered Lists",
    description:
      "ul = unordered list (bullets), li = list item. Perfect for features, ingredients, or any non-sequential items.",
    example:
      "<h3>Shopping List</h3>\n<ul>\n  <li>Milk</li>\n  <li>Eggs</li>\n  <li>Bread</li>\n  <li>Butter</li>\n  <li>Coffee</li>\n</ul>\n\n<h3>Course Topics</h3>\n<ul>\n  <li>HTML5</li>\n  <li>CSS3</li>\n  <li>JavaScript</li>\n  <li>React</li>\n</ul>",
    preview: {
      type: "lists",
      content: [
        "Milk",
        "Eggs",
        "Bread",
        "Butter",
        "Coffee",
        "HTML5",
        "CSS3",
        "JavaScript",
      ],
      props: {
        ordered: false,
      },
    },
    category: "lists",
    level: "beginner",
    color: "#ffb7c5",
  },
  {
    id: 6,
    tag: "<ol>",
    title: "Ordered Lists",
    description:
      "ol = ordered list (numbered), li = list item. Use for step-by-step instructions, rankings, or sequences.",
    example:
      "<h3>How to Make Tea</h3>\n<ol>\n  <li>Boil water</li>\n  <li>Add tea bag to cup</li>\n  <li>Pour hot water</li>\n  <li>Steep for 3 minutes</li>\n  <li>Remove tea bag</li>\n  <li>Add sugar or honey</li>\n</ol>\n\n<h3>Top 3 Programming Languages</h3>\n<ol>\n  <li>JavaScript</li>\n  <li>Python</li>\n  <li>Java</li>\n</ol>",
    preview: {
      type: "lists",
      content: [
        "Boil water",
        "Add tea bag",
        "Pour water",
        "Steep",
        "Remove bag",
        "Add sugar",
      ],
      props: {
        ordered: true,
      },
    },
    category: "lists",
    level: "beginner",
    color: "#ffb7c5",
  },

  // ============================================
  // TEXT FORMATTING
  // ============================================
  {
    id: 7,
    tag: "<strong> & <em>",
    title: "Text Emphasis",
    description:
      "Strong adds importance (usually bold), em adds emphasis (usually italic). Use semantic meaning, not just styling.",
    example:
      "<p><strong>Warning:</strong> This file will be permanently deleted.</p>\n<p>I <em>really</em> need to finish this project by Friday.</p>\n<p>The <strong>most important</strong> rule is to <em>always</em> backup your data.</p>\n<p>HTML stands for <strong>HyperText Markup Language</strong>.</p>",
    preview: {
      type: "generic",
      content: [
        "Warning: This file will be permanently deleted.",
        "I really need to finish this project by Friday.",
      ],
    },
    category: "text",
    level: "beginner",
    color: "#d2b7ff",
  },
  {
    id: 8,
    tag: "<blockquote> & <cite>",
    title: "Quotations & Citations",
    description:
      "Blockquote for longer quotes, cite for referencing creative works like books, movies, or articles.",
    example:
      "<h3>Famous Quote</h3>\n<blockquote>\n  <p>The only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle.</p>\n</blockquote>\n<p>— Steve Jobs, <cite>Stanford Commencement Speech</cite></p>\n\n<h3>Book Reference</h3>\n<p>My favorite novel is <cite>The Great Gatsby</cite> by F. Scott Fitzgerald.</p>",
    preview: {
      type: "generic",
      content: [
        "The only way to do great work is to love what you do...",
        "— Steve Jobs",
        "The Great Gatsby",
      ],
    },
    category: "text",
    level: "beginner",
    color: "#d2b7ff",
  },
  {
    id: 9,
    tag: "<mark>",
    title: "Highlighted Text",
    description:
      "Marks or highlights text to draw attention, like a yellow highlighter. Great for search results.",
    example:
      "<p>Here are your search results for <mark>HTML tutorial</mark>:</p>\n<p>The best <mark>HTML tutorial</mark> for beginners covers tags, attributes, and structure.</p>\n<p>Don't forget to practice! The <mark>HTML tutorial</mark> exercises help reinforce learning.</p>\n<p>Our <mark>HTML tutorial</mark> is completely free and updated for HTML5.</p>",
    preview: {
      type: "generic",
      content: [
        "Here are your search results for HTML tutorial:",
        "The best HTML tutorial for beginners...",
      ],
    },
    category: "text",
    level: "beginner",
    color: "#d2b7ff",
  },
  {
    id: 10,
    tag: "<br> & <hr>",
    title: "Line Breaks & Horizontal Rules",
    description:
      "br = line break (single space), hr = horizontal rule (thematic break). Simple but essential for formatting.",
    example:
      '<h3>Business Hours</h3>\n<p>\n  Monday: 9am - 6pm<br>\n  Tuesday: 9am - 6pm<br>\n  Wednesday: 9am - 6pm<br>\n  Thursday: 9am - 8pm<br>\n  Friday: 9am - 5pm<br>\n  Saturday: 10am - 4pm<br>\n  Sunday: Closed\n</p>\n\n<hr>\n\n<h3>Address</h3>\n<address>\n  123 Main Street<br>\n  New York, NY 10001<br>\n  USA<br>\n  <a href="mailto:info@example.com">info@example.com</a>\n</address>',
    preview: {
      type: "br",
      content: [
        "Monday: 9am-6pm",
        "Tuesday: 9am-6pm",
        "Wednesday: 9am-6pm",
        "Thursday: 9am-8pm",
        "Friday: 9am-5pm",
      ],
    },
    category: "text",
    level: "beginner",
    color: "#d2b7ff",
  },

  // ============================================
  // MEDIA
  // ============================================
  {
    id: 11,
    tag: "<video>",
    title: "Video",
    description:
      "Embeds video content directly in the page. Use controls to show play/pause/volume, and provide fallback text.",
    example:
      '<video controls>\n  <source src="tutorial.mp4" type="video/mp4">\n  <source src="tutorial.webm" type="video/webm">\n  Your browser does not support the video tag. Please <a href="tutorial.mp4">download the video</a>.\n</video>\n\n<h4>Product Demo</h4>\n<video controls>\n  <source src="demo.mp4" type="video/mp4">\n  <track src="subtitles.vtt" kind="subtitles" srclang="en" label="English">\n</video>',
    preview: {
      type: "video",
      content: ["Video player with controls", "Poster image"],
      props: {
        controls: true,
      },
    },
    category: "media",
    level: "intermediate",
    color: "#b7ffca",
  },
  {
    id: 12,
    tag: "<audio>",
    title: "Audio",
    description:
      "Embeds sound content like music, podcasts, or voice recordings. Use controls to show play/pause/volume.",
    example:
      '<h3>Podcast Episode 1: Introduction to HTML</h3>\n<audio controls>\n  <source src="podcast-ep1.mp3" type="audio/mpeg">\n  <source src="podcast-ep1.ogg" type="audio/ogg">\n  Your browser does not support the audio element. <a href="podcast-ep1.mp3">Download podcast</a>\n</audio>\n\n<h3>Background Music</h3>\n<audio controls loop>\n  <source src="ambient-music.mp3" type="audio/mpeg">\n  Ambient music for concentration\n</audio>',
    preview: {
      type: "audio",
      content: ["Audio player with controls", "Podcast: Introduction to HTML"],
      props: {
        controls: true,
      },
    },
    category: "media",
    level: "intermediate",
    color: "#b7ffca",
  },
  {
    id: 13,
    tag: "<figure> & <figcaption>",
    title: "Figures with Captions",
    description:
      "Groups self-contained content like images, illustrations, or code snippets with an associated caption.",
    example:
      '<figure>\n  <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop" alt="Sunset over mountains">\n  <figcaption>Sunset at Mount Rainier National Park, Washington</figcaption>\n</figure>\n\n<figure>\n  <pre>\n    <code>\nfunction hello() {\n  console.log("Hello, World!");\n}\n    </code>\n  </pre>\n  <figcaption>Simple JavaScript function example</figcaption>\n</figure>\n\n<figure>\n  <blockquote>\n    <p>The web is more a social creation than a technical one.</p>\n  </blockquote>\n  <figcaption>— Tim Berners-Lee, inventor of the World Wide Web</figcaption>\n</figure>',
    preview: {
      type: "figure",
      content: [
        "Sunset at Mount Rainier",
        "JavaScript function example",
        "Tim Berners-Lee quote",
      ],
    },
    category: "media",
    level: "intermediate",
    color: "#b7ffca",
  },

  // ============================================
  // TABLES
  // ============================================
  {
    id: 14,
    tag: "<table>",
    title: "Tables",
    description:
      "Displays tabular data in rows and columns. Use thead, tbody, tfoot for semantic structure.",
    example:
      '<table border="1">\n  <caption><strong>Student Grades - Fall 2024</strong></caption>\n  <thead>\n    <tr>\n      <th>Student</th>\n      <th>Math</th>\n      <th>Science</th>\n      <th>English</th>\n      <th>Average</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>Emma Watson</td>\n      <td>95</td>\n      <td>88</td>\n      <td>92</td>\n      <td>91.7</td>\n    </tr>\n    <tr>\n      <td>James Smith</td>\n      <td>82</td>\n      <td>79</td>\n      <td>85</td>\n      <td>82.0</td>\n    </tr>\n    <tr>\n      <td>Maria Garcia</td>\n      <td>98</td>\n      <td>94</td>\n      <td>96</td>\n      <td>96.0</td>\n    </tr>\n  </tbody>\n  <tfoot>\n    <tr>\n      <td><strong>Class Average</strong></td>\n      <td>91.7</td>\n      <td>87.0</td>\n      <td>91.0</td>\n      <td>89.9</td>\n    </tr>\n  </tfoot>\n</table>',
    preview: {
      type: "table",
      content: [
        "Student Grades",
        "Emma Watson: 91.7",
        "James Smith: 82.0",
        "Maria Garcia: 96.0",
      ],
    },
    category: "tables",
    level: "intermediate",
    color: "#9f7aea",
  },
  {
    id: 15,
    tag: "<th> & <td>",
    title: "Table Headers & Data",
    description:
      "th = table header (bold & centered), td = table data (regular cells). Use rowspan/colspan to merge cells.",
    example:
      '<table border="1">\n  <tr>\n    <th colspan="4">Employee Schedule - Week 1</th>\n  </tr>\n  <tr>\n    <th>Employee</th>\n    <th>Monday</th>\n    <th>Tuesday</th>\n    <th>Wednesday</th>\n  </tr>\n  <tr>\n    <th>John</th>\n    <td>9am-5pm</td>\n    <td>9am-5pm</td>\n    <td>Off</td>\n  </tr>\n  <tr>\n    <th>Sarah</th>\n    <td>Off</td>\n    <td>10am-6pm</td>\n    <td>10am-6pm</td>\n  </tr>\n  <tr>\n    <th>Mike</th>\n    <td>1pm-9pm</td>\n    <td>1pm-9pm</td>\n    <td>1pm-9pm</td>\n  </tr>\n</table>\n\n<h4>Product Features</h4>\n<table border="1">\n  <tr>\n    <th rowspan="2">Product</th>\n    <th colspan="2">Specs</th>\n  </tr>\n  <tr>\n    <th>RAM</th>\n    <th>Storage</th>\n  </tr>\n  <tr>\n    <td>Laptop Pro</td>\n    <td>16GB</td>\n    <td>512GB</td>\n  </tr>\n</table>',
    preview: {
      type: "generic",
      content: [
        "Employee Schedule",
        "John: Mon-Tue",
        "Sarah: Tue-Wed",
        "Mike: Mon-Wed",
      ],
    },
    category: "tables",
    level: "intermediate",
    color: "#9f7aea",
  },

  // ============================================
  // FORMS
  // ============================================
  {
    id: 16,
    tag: "<form>",
    title: "Forms",
    description:
      "Creates an interactive form to collect user input. Send data to server with action and method attributes.",
    example:
      '<h3>Create Account</h3>\n<form action="/signup" method="post">\n  <label for="username">Username:</label><br>\n  <input type="text" id="username" name="username" required><br><br>\n  \n  <label for="email">Email:</label><br>\n  <input type="email" id="email" name="email" required><br><br>\n  \n  <label for="password">Password:</label><br>\n  <input type="password" id="password" name="password" minlength="8" required><br><br>\n  \n  <label for="country">Country:</label><br>\n  <select id="country" name="country">\n    <option value="us">United States</option>\n    <option value="ca">Canada</option>\n    <option value="uk">United Kingdom</option>\n    <option value="au">Australia</option>\n  </select><br><br>\n  \n  <input type="checkbox" id="terms" name="terms" required>\n  <label for="terms">I agree to the Terms of Service</label><br><br>\n  \n  <button type="submit">Sign Up</button>\n  <button type="reset">Clear</button>\n</form>',
    preview: {
      type: "form",
      content: ["Username", "Email", "Password", "Country", "Terms of Service"],
      props: {
        action: "/signup",
        method: "post",
      },
    },
    category: "forms",
    level: "intermediate",
    color: "#475569",
  },
  {
    id: 17,
    tag: "<input>",
    title: "Input Types",
    description:
      "The most versatile form element. Different types collect different data: text, email, password, number, date, etc.",
    example:
      '<h3>Personal Information</h3>\n<form>\n  <label>Full name: <input type="text" name="fullname" placeholder="John Doe"></label><br><br>\n  \n  <label>Email: <input type="email" name="email" placeholder="john@example.com"></label><br><br>\n  \n  <label>Password: <input type="password" name="password" placeholder="••••••••"></label><br><br>\n  \n  <label>Age: <input type="number" name="age" min="18" max="120" value="25"></label><br><br>\n  \n  <label>Birth date: <input type="date" name="birthdate"></label><br><br>\n  \n  <label>Phone: <input type="tel" name="phone" placeholder="(123) 456-7890"></label><br><br>\n  \n  <label>Favorite color: <input type="color" name="color" value="#ff5733"></label><br><br>\n  \n  <label>Volume: <input type="range" name="volume" min="0" max="100" value="50"></label><br><br>\n  \n  <label>Resume: <input type="file" name="resume" accept=".pdf,.doc"></label><br><br>\n  \n  <label><input type="checkbox" name="subscribe" checked> Subscribe to newsletter</label><br><br>\n  \n  <label>Gender:</label><br>\n  <label><input type="radio" name="gender" value="male"> Male</label><br>\n  <label><input type="radio" name="gender" value="female"> Female</label><br>\n  <label><input type="radio" name="gender" value="other"> Other</label><br><br>\n  \n  <button type="submit">Submit</button>\n</form>',
    preview: {
      type: "generic",
      content: [
        "text",
        "email",
        "password",
        "number",
        "date",
        "tel",
        "color",
        "range",
        "file",
        "checkbox",
        "radio",
      ],
      props: {
        type: "various",
      },
    },
    category: "forms",
    level: "intermediate",
    color: "#475569",
  },
  {
    id: 18,
    tag: "<select>",
    title: "Dropdown Lists",
    description:
      "Creates a dropdown menu. Use select as container, option for each choice. Group related options with optgroup.",
    example:
      '<h3>Choose Your Plan</h3>\n<form>\n  <label for="plan">Subscription plan:</label>\n  <select id="plan" name="plan">\n    <optgroup label="Personal">\n      <option value="basic">Basic - $9.99/month</option>\n      <option value="pro" selected>Pro - $19.99/month</option>\n      <option value="premium">Premium - $29.99/month</option>\n    </optgroup>\n    <optgroup label="Business">\n      <option value="team">Team - $49.99/month</option>\n      <option value="enterprise">Enterprise - Contact sales</option>\n    </optgroup>\n  </select><br><br>\n  \n  <label for="country">Country:</label>\n  <select id="country" name="country">\n    <option value="">-- Select your country --</option>\n    <option value="us">United States</option>\n    <option value="ca">Canada</option>\n    <option value="mx">Mexico</option>\n    <option value="uk">United Kingdom</option>\n    <option value="fr">France</option>\n    <option value="de">Germany</option>\n    <option value="jp">Japan</option>\n    <option value="au">Australia</option>\n  </select><br><br>\n  \n  <label for="languages">Languages (multiple):</label><br>\n  <select id="languages" name="languages" multiple>\n    <option value="en">English</option>\n    <option value="es">Spanish</option>\n    <option value="fr">French</option>\n    <option value="de">German</option>\n    <option value="zh">Chinese</option>\n    <option value="ja">Japanese</option>\n    <option value="ar">Arabic</option>\n  </select><br>\n  <small>Hold Ctrl/Cmd to select multiple</small><br><br>\n  \n  <button type="submit">Continue</button>\n</form>',
    preview: {
      type: "select",
      content: [
        "Basic - $9.99",
        "Pro - $19.99",
        "Premium - $29.99",
        "Team - $49.99",
        "Enterprise",
      ],
      props: {
        selected: "Pro - $19.99/month",
      },
    },
    category: "forms",
    level: "intermediate",
    color: "#475569",
  },
  {
    id: 19,
    tag: "<textarea>",
    title: "Textarea",
    description:
      "Multi-line text input field. Perfect for comments, messages, bios, or any longer text content.",
    example:
      '<h3>Contact Us</h3>\n<form>\n  <label for="name">Name:</label><br>\n  <input type="text" id="name" name="name"><br><br>\n  \n  <label for="email">Email:</label><br>\n  <input type="email" id="email" name="email"><br><br>\n  \n  <label for="message">Your Message:</label><br>\n  <textarea id="message" name="message" rows="6" cols="50" placeholder="Please write your message here..." maxlength="500"></textarea><br>\n  <small>Maximum 500 characters</small><br><br>\n  \n  <h4>Product Review</h4>\n  <label for="review">Share your experience:</label><br>\n  <textarea id="review" name="review" rows="4" cols="50">I really enjoyed using this product. The quality is excellent and delivery was fast. Would definitely recommend!</textarea><br><br>\n  \n  <h4>Shipping Address</h4>\n  <label for="address">Street Address:</label><br>\n  <textarea id="address" name="address" rows="3" cols="40" placeholder="Street, city, postal code"></textarea><br><br>\n  \n  <button type="submit">Send Message</button>\n</form>',
    preview: {
      type: "textarea",
      content: ["6 rows x 50 columns", "Maximum 500 characters"],
      props: {
        rows: 6,
        cols: 50,
        maxlength: 500,
      },
    },
    category: "forms",
    level: "intermediate",
    color: "#475569",
  },
  {
    id: 20,
    tag: "<button>",
    title: "Buttons",
    description:
      "Clickable buttons that trigger actions. Can contain text, icons, or even HTML elements.",
    example:
      '<h3>Interactive Buttons</h3>\n\n<form action="/search" method="get">\n  <input type="text" name="q" placeholder="Search...">\n  <button type="submit">🔍 Search</button>\n</form>\n\n<form>\n  <input type="text" placeholder="Your name">\n  <button type="reset">🗑️ Clear</button>\n</form>\n\n<button type="button" onclick="alert(\'Download started!\')">\n  ⬇️ Download\n</button>\n\n<button type="button">\n  ❤️ Like\n</button>\n\n<button type="button">\n  📧 Email\n</button>\n\n<button type="button" disabled>\n  ⏳ Processing...\n</button>\n\n<br><br>\n\n<button type="button">\n  <strong>🛒 Add to Cart</strong><br>\n  <small>Free shipping</small>\n</button>',
    preview: {
      type: "generic",
      content: [
        "🔍 Search",
        "🗑️ Clear",
        "⬇️ Download",
        "❤️ Like",
        "📧 Email",
        "🛒 Add to Cart",
      ],
      props: {
        type: "button",
      },
    },
    category: "forms",
    level: "beginner",
    color: "#475569",
  },
  {
    id: 21,
    tag: "<fieldset>",
    title: "Field Groups",
    description:
      "Groups related form fields together with a visual border and caption. Improves form organization and accessibility.",
    example:
      '<form>\n  <fieldset>\n    <legend><strong>👤 Personal Information</strong></legend>\n    \n    <label for="fname">First name:</label><br>\n    <input type="text" id="fname" name="fname"><br><br>\n    \n    <label for="lname">Last name:</label><br>\n    <input type="text" id="lname" name="lname"><br><br>\n    \n    <label for="dob">Date of birth:</label><br>\n    <input type="date" id="dob" name="dob"><br>\n  </fieldset>\n  <br>\n  \n  <fieldset>\n    <legend><strong>📞 Contact Details</strong></legend>\n    \n    <label for="email">Email:</label><br>\n    <input type="email" id="email" name="email"><br><br>\n    \n    <label for="phone">Phone:</label><br>\n    <input type="tel" id="phone" name="phone"><br>\n  </fieldset>\n  <br>\n  \n  <fieldset>\n    <legend><strong>🔐 Account Security</strong></legend>\n    \n    <label for="pwd">Password:</label><br>\n    <input type="password" id="pwd" name="pwd"><br><br>\n    \n    <label for="confirm">Confirm password:</label><br>\n    <input type="password" id="confirm" name="confirm"><br>\n  </fieldset>\n  <br>\n  \n  <fieldset>\n    <legend><strong>📨 Newsletter Preferences</strong></legend>\n    \n    <label>\n      <input type="radio" name="frequency" value="daily">\n      Daily newsletter\n    </label><br>\n    \n    <label>\n      <input type="radio" name="frequency" value="weekly" checked>\n      Weekly digest\n    </label><br>\n    \n    <label>\n      <input type="radio" name="frequency" value="monthly">\n      Monthly updates\n    </label><br>\n  </fieldset>\n  <br>\n  \n  <button type="submit">Create Account</button>\n</form>',
    preview: {
      type: "generic",
      content: [
        "Personal Information",
        "Contact Details",
        "Account Security",
        "Newsletter Preferences",
      ],
      props: {
        legend: true,
      },
    },
    category: "forms",
    level: "intermediate",
    color: "#475569",
  },

  // ============================================
  // INTERACTIVE ELEMENTS
  // ============================================
  {
    id: 22,
    tag: "<details>",
    title: "Collapsible Content",
    description:
      "Creates an interactive widget that the user can open and close. Perfect for FAQs, spoilers, or optional information.",
    example:
      "<h3>Frequently Asked Questions</h3>\n\n<details>\n  <summary>📘 What is HTML and why do I need it?</summary>\n  <p>HTML (HyperText Markup Language) is the standard language for creating web pages. It provides the structure and meaning to content. Without HTML, web pages would just be plain text with no organization, links, images, or multimedia.</p>\n</details>\n\n<details>\n  <summary>💰 How much does this course cost?</summary>\n  <p>The course is completely free! We believe everyone should have access to quality web development education. No credit card required, no hidden fees.</p>\n</details>\n\n<details>\n  <summary>⏱️ How long will it take to complete?</summary>\n  <p>The course is self-paced. Most students complete it in 4-6 weeks studying 5 hours per week. However, you can go faster or slower depending on your schedule.</p>\n</details>\n\n<details>\n  <summary>🔧 What tools do I need?</summary>\n  <ul>\n    <li>A modern web browser (Chrome, Firefox, Safari, Edge)</li>\n    <li>A text editor (VS Code, Sublime Text, or even Notepad)</li>\n    <li>Your curiosity and motivation!</li>\n  </ul>\n</details>\n\n<details open>\n  <summary>🎓 Will I get a certificate?</summary>\n  <p>Yes! After completing all modules and the final project, you'll receive a verified certificate of completion.</p>\n</details>",
    preview: {
      type: "details",
      content: [
        "What is HTML?",
        "How much does this cost?",
        "How long will it take?",
        "What tools do I need?",
        "Will I get a certificate?",
      ],
    },
    category: "interactive",
    level: "intermediate",
    color: "#fcd34d",
  },
  {
    id: 23,
    tag: "<iframe>",
    title: "Inline Frames",
    description:
      "Embeds another HTML page within the current page. Used for maps, videos, ads, or external content.",
    example:
      '<h3>Embedded Google Map</h3>\n<iframe \n  src="https://www.openstreetmap.org/export/embed.html?bbox=2.3470%2C48.8588%2C2.3490%2C48.8608&layer=mapnik"\n  title="Map of Eiffel Tower area">\n  <p>Your browser does not support iframes. <a href="https://www.openstreetmap.org/#map=18/48.85980/2.34800">View map</a></p>\n</iframe>\n\n<h3>YouTube Video</h3>\n<iframe \n  src="https://www.youtube.com/embed/dQw4w9WgXcQ" \n  title="YouTube video player">\n</iframe>',
    preview: {
      type: "iframe",
      content: ["OpenStreetMap - Eiffel Tower", "YouTube video player"],
      props: {},
    },
    category: "containers",
    level: "intermediate",
    color: "#64748b",
  },

  // ============================================
  // CONTAINERS
  // ============================================
  {
    id: 24,
    tag: "<div>",
    title: "Division Container",
    description:
      "A block-level container with no semantic meaning. Used to group elements for styling or layout purposes.",
    example:
      "<div>\n  <h2>Product Card</h2>\n  \n  <div>\n    <div>\n      <h3>Laptop Pro</h3>\n      <p>💻 16GB RAM, 512GB SSD</p>\n      <p>$1,299</p>\n    </div>\n    \n    <div>\n      <h3>Wireless Mouse</h3>\n      <p>🖱️ Bluetooth, rechargeable</p>\n      <p>$49</p>\n    </div>\n    \n    <div>\n      <h3>Mechanical Keyboard</h3>\n      <p>⌨️ RGB backlit, blue switches</p>\n      <p>$129</p>\n    </div>\n  </div>\n  \n  <div>\n    <p>🚚 Free shipping on orders over $100</p>\n  </div>\n</div>",
    preview: {
      type: "div",
      content: [
        "Product Card",
        "Laptop Pro",
        "Wireless Mouse",
        "Mechanical Keyboard",
      ],
    },
    category: "containers",
    level: "beginner",
    color: "#64748b",
  },
  {
    id: 25,
    tag: "<span>",
    title: "Span Container",
    description:
      "An inline container with no semantic meaning. Used to style or target specific parts of text.",
    example:
      "<p>Today's weather: \n  <span>☀️ Sunny</span>, \n  <span>🌡️ 24°C</span>, \n  <span>💧 Humidity 45%</span>\n</p>\n\n<p>Price: \n  <span>$199</span>\n  <span> $149</span>\n  <span>SALE</span>\n</p>\n\n<p>\n  <span>⭐</span>\n  <span>4.8</span>\n  <span>(2,345 reviews)</span>\n</p>\n\n<p>\n  <span>❤️</span>\n  <span>💙</span>\n  <span>💚</span>\n  <span>💛</span>\n  <span>💜</span>\n  <span>Choose your favorite color</span>\n</p>",
    preview: {
      type: "span",
      content: [
        "☀️ Sunny",
        "🌡️ 24°C",
        "💧 Humidity 45%",
        "$149 SALE",
        "⭐ 4.8 (2,345 reviews)",
      ],
    },
    category: "containers",
    level: "beginner",
    color: "#64748b",
  },

  // ============================================
  // SEMANTIC HTML
  // ============================================
  {
    id: 26,
    tag: "<header>",
    title: "Header",
    description:
      "Introductory content or navigation links for a page or section. Often contains logo, title, and main navigation.",
    example:
      '<header>\n  <div>\n    <div>\n      <h1>🏫 Web Academy</h1>\n      <p>Learn to code, build the future</p>\n    </div>\n    \n    <nav>\n      <a href="#">Home</a>\n      <a href="#">Courses</a>\n      <a href="#">Pricing</a>\n      <a href="#">Contact</a>\n    </nav>\n  </div>\n</header>\n\n<article>\n  <header>\n    <h2>How to Learn HTML in 2024</h2>\n    <p>Published on March 15, 2024 • By Sarah Johnson</p>\n  </header>\n  <p>HTML5 has evolved with new semantic elements that make web pages more accessible and SEO-friendly...</p>\n</article>',
    preview: {
      type: "generic",
      content: [
        "Web Academy - Learn to code",
        "Home Courses Pricing Contact",
        "How to Learn HTML in 2024",
      ],
      props: {
        semantic: true,
      },
    },
    category: "semantic",
    level: "intermediate",
    color: "#64748b",
  },
  {
    id: 27,
    tag: "<nav>",
    title: "Navigation",
    description:
      "Defines a set of navigation links. Use for main site navigation, table of contents, or breadcrumbs.",
    example:
      '<nav>\n  <h3>Site Navigation</h3>\n  <ul>\n    <li><a href="#">🏠 Dashboard</a></li>\n    <li><a href="#">📚 My Courses</a></li>\n    <li><a href="#">📊 Progress</a></li>\n    <li><a href="#">⚙️ Settings</a></li>\n  </ul>\n</nav>\n\n<nav>\n  <span>Breadcrumbs: </span>\n  <a href="#">Home</a> / \n  <a href="#">Courses</a> / \n  <a href="#">Web Development</a> / \n  <span>HTML5 Basics</span>\n</nav>\n\n<nav>\n  <h3>Pagination</h3>\n  <div>\n    <a href="#">«</a>\n    <a href="#">1</a>\n    <a href="#">2</a>\n    <a href="#">3</a>\n    <a href="#">4</a>\n    <a href="#">5</a>\n    <a href="#">»</a>\n  </div>\n</nav>',
    preview: {
      type: "generic",
      content: [
        "Dashboard",
        "My Courses",
        "Progress",
        "Settings",
        "Breadcrumbs: Home > Courses > Web Development",
      ],
      props: {
        semantic: true,
      },
    },
    category: "semantic",
    level: "intermediate",
    color: "#64748b",
  },
  {
    id: 28,
    tag: "<main>",
    title: "Main Content",
    description:
      "The dominant content of the <body>. Unique per page, not repeated across pages (unlike headers/footers).",
    example:
      '<div>\n  <header>\n    <h1>My Blog</h1>\n  </header>\n  \n  <nav>\n    <a href="#">Home</a>\n    <a href="#">About</a>\n  </nav>\n  \n  <main>\n    <h2>The Future of Web Development</h2>\n    <p>By Alex Chen • April 1, 2024</p>\n    \n    <article>\n      <p>Web development is evolving faster than ever. With new frameworks, tools, and standards emerging regularly, it\'s an exciting time to be a developer.</p>\n      \n      <h3>Key Trends in 2024</h3>\n      <ul>\n        <li>AI-powered development tools</li>\n        <li>WebAssembly beyond the browser</li>\n        <li>Edge computing and serverless</li>\n        <li>CSS container queries</li>\n      </ul>\n    </article>\n  </main>\n  \n  <footer>\n    <p>&copy; 2024 My Blog. All rights reserved.</p>\n  </footer>\n</div>',
    preview: {
      type: "generic",
      content: [
        "The Future of Web Development",
        "Key Trends in 2024",
        "AI-powered development tools",
        "WebAssembly",
      ],
      props: {
        semantic: true,
      },
    },
    category: "semantic",
    level: "intermediate",
    color: "#64748b",
  },
  {
    id: 29,
    tag: "<section>",
    title: "Section",
    description:
      "A thematic grouping of content, typically with a heading. Use for chapters, tab panels, or topic-specific groups.",
    example:
      "<div>\n  <h1>Complete HTML5 Course</h1>\n  \n  <section>\n    <h2>📘 Section 1: HTML Basics</h2>\n    <p>Learn the fundamental concepts of HTML, including document structure, elements, and attributes.</p>\n    <ul>\n      <li>What is HTML?</li>\n      <li>First HTML page</li>\n      <li>Text formatting</li>\n      <li>Lists and links</li>\n    </ul>\n  </section>\n  \n  <section>\n    <h2>🖼️ Section 2: Media & Forms</h2>\n    <p>Discover how to add images, videos, audio, and create interactive forms.</p>\n    <ul>\n      <li>Images and figures</li>\n      <li>Video and audio</li>\n      <li>Form structure</li>\n      <li>Input types</li>\n    </ul>\n  </section>\n  \n  <section>\n    <h2>📊 Section 3: Tables & Lists</h2>\n    <p>Master tabular data organization and various list formats.</p>\n    <ul>\n      <li>Table structure</li>\n      <li>Spanning rows/columns</li>\n      <li>Ordered/unordered lists</li>\n      <li>Description lists</li>\n    </ul>\n  </section>\n  \n  <section>\n    <h2>🏗️ Section 4: Semantic HTML</h2>\n    <p>Understand modern HTML5 semantic elements for better structure and accessibility.</p>\n    <ul>\n      <li>Header and nav</li>\n      <li>Main and article</li>\n      <li>Section and aside</li>\n      <li>Footer</li>\n    </ul>\n  </section>\n</div>",
    preview: {
      type: "generic",
      content: [
        "Section 1: HTML Basics",
        "Section 2: Media & Forms",
        "Section 3: Tables & Lists",
        "Section 4: Semantic HTML",
      ],
      props: {
        semantic: true,
      },
    },
    category: "semantic",
    level: "intermediate",
    color: "#64748b",
  },
  {
    id: 30,
    tag: "<article>",
    title: "Article",
    description:
      "Self-contained, independent content that could be syndicated or reused. Blog posts, news stories, comments, product cards.",
    example:
      '<div>\n  <article>\n    <h2>Getting Started with Flexbox</h2>\n    <div>\n      <span>📅 March 20, 2024</span>\n      <span>👤 By Emma Wilson</span>\n      <span>📁 CSS</span>\n    </div>\n    <p>Flexbox is a one-dimensional layout method that makes it easy to align items and distribute space...</p>\n    <a href="#">Read More →</a>\n  </article>\n  \n  <article>\n    <div>🎧</div>\n    <h2>Wireless Headphones</h2>\n    <p>Noise-cancelling, 30h battery</p>\n    <p>$199</p>\n    <button>Add to Cart</button>\n  </article>\n  \n  <article>\n    <div>\n      <div>👩‍💻</div>\n      <div>\n        <h3>Maria Rodriguez</h3>\n        <span>2 hours ago</span>\n        <p>This tutorial was incredibly helpful! I finally understand semantic HTML. Thank you for the clear examples.</p>\n        <div>★★★★★</div>\n      </div>\n    </div>\n  </article>\n  \n  <article>\n    <span>BREAKING</span>\n    <h2>HTML6 Draft Announced</h2>\n    <p>The WHATWG has published the first draft of HTML6, focusing on native components and improved accessibility...</p>\n    <span>2 min read</span>\n  </article>\n</div>',
    preview: {
      type: "generic",
      content: [
        "Getting Started with Flexbox",
        "Wireless Headphones $199",
        "User Comment ★★★★★",
        "HTML6 Draft Announced",
      ],
      props: {
        semantic: true,
      },
    },
    category: "semantic",
    level: "intermediate",
    color: "#64748b",
  },
  {
    id: 31,
    tag: "<aside>",
    title: "Aside",
    description:
      "Content indirectly related to the main content. Sidebars, pull quotes, advertising, related links.",
    example:
      '<div>\n  <div>\n    <h2>Complete Guide to Coffee Brewing</h2>\n    <p>There are many ways to brew coffee, from simple pour-over to complex espresso machines. Each method extracts different flavors from the beans...</p>\n  </div>\n  \n  <aside>\n    <h3>☕ Coffee Tips</h3>\n    <ul>\n      <li>Use filtered water</li>\n      <li>Grind beans just before brewing</li>\n      <li>Store beans in airtight container</li>\n      <li>Water temperature: 195-205°F</li>\n    </ul>\n    <p>"The perfect cup starts with quality beans."</p>\n  </aside>\n</div>\n\n<hr>\n\n<div>\n  <article>\n    <h2>10 JavaScript Array Methods You Should Know</h2>\n    <p>Arrays are fundamental in JavaScript. Methods like map(), filter(), reduce() can make your code cleaner and more efficient...</p>\n  </article>\n  \n  <aside>\n    <h3>📚 Related Articles</h3>\n    <ul>\n      <li><a href="#">JavaScript Promises Explained</a></li>\n      <li><a href="#">Understanding async/await</a></li>\n      <li><a href="#">ES6 Features You Need</a></li>\n      <li><a href="#">Functional Programming in JS</a></li>\n    </ul>\n    <p>📧 Subscribe to newsletter</p>\n  </aside>\n</div>\n\n<article>\n  <h2>The Philosophy of Web Design</h2>\n  <p>Good web design is about more than just aesthetics. It\'s about creating an experience that is intuitive, accessible, and enjoyable for all users...</p>\n  \n  <aside>\n    <p>"Design is not just what it looks like and feels like. Design is how it works."</p>\n    <p>— Steve Jobs</p>\n  </aside>\n  \n  <p>This principle applies perfectly to modern web development...</p>\n</article>',
    preview: {
      type: "generic",
      content: [
        "Coffee Tips",
        "Related Articles",
        "JavaScript Promises",
        "Steve Jobs quote",
      ],
      props: {
        semantic: true,
      },
    },
    category: "semantic",
    level: "intermediate",
    color: "#64748b",
  },
  {
    id: 32,
    tag: "<footer>",
    title: "Footer",
    description:
      "Footer for a page or section. Contains copyright, contact info, sitemap, back to top links, or related documents.",
    example:
      '<footer>\n  <div>\n    <div>\n      <h4>About Us</h4>\n      <p>We\'re dedicated to making web development education accessible to everyone, everywhere.</p>\n    </div>\n    \n    <div>\n      <h4>Quick Links</h4>\n      <ul>\n        <li><a href="#">Home</a></li>\n        <li><a href="#">Courses</a></li>\n        <li><a href="#">Blog</a></li>\n        <li><a href="#">Contact</a></li>\n      </ul>\n    </div>\n    \n    <div>\n      <h4>Resources</h4>\n      <ul>\n        <li><a href="#">Documentation</a></li>\n        <li><a href="#">Tutorials</a></li>\n        <li><a href="#">FAQ</a></li>\n        <li><a href="#">Support</a></li>\n      </ul>\n    </div>\n    \n    <div>\n      <h4>Contact</h4>\n      <address>\n        📧 hello@webacademy.com<br>\n        📱 +1 (555) 123-4567<br>\n        🏢 123 Code Street, San Francisco, CA\n      </address>\n    </div>\n  </div>\n  \n  <hr>\n  \n  <div>\n    <p>&copy; 2024 Web Academy. All rights reserved.</p>\n    <div>\n      <a href="#">Privacy Policy</a>\n      <a href="#">Terms of Service</a>\n      <a href="#">Cookie Policy</a>\n    </div>\n  </div>\n</footer>\n\n<article>\n  <h2>Understanding CSS Grid</h2>\n  <p>CSS Grid is a two-dimensional layout system that revolutionizes web design...</p>\n  \n  <footer>\n    <span>👤 Written by John Doe</span><br>\n    <span>📅 Published: March 25, 2024</span><br>\n    <span>🏷️ Tags: <a href="#">CSS</a>, <a href="#">Layout</a>, <a href="#">Responsive</a></span>\n  </footer>\n</article>',
    preview: {
      type: "generic",
      content: [
        "About Us",
        "Quick Links",
        "Resources",
        "Contact",
        "© 2024 Web Academy",
        "Privacy Policy",
      ],
      props: {
        semantic: true,
      },
    },
    category: "semantic",
    level: "intermediate",
    color: "#64748b",
  },
];

// 3. EXPORT CATEGORIES FOR FILTERING
export const htmlCategories = [
  { id: "all", name: "All Tags", color: "#94a3b8" },
  { id: "basics", name: "Basics", color: "#c5e6ff" },
  { id: "text", name: "Text Formatting", color: "#d2b7ff" },
  { id: "media", name: "Media", color: "#b7ffca" },
  { id: "lists", name: "Lists", color: "#ffb7c5" },
  { id: "tables", name: "Tables", color: "#9f7aea" },
  { id: "forms", name: "Forms", color: "#475569" },
  { id: "interactive", name: "Interactive", color: "#fcd34d" },
  { id: "containers", name: "Containers", color: "#64748b" },
  { id: "semantic", name: "Semantic HTML", color: "#64748b" },
];
