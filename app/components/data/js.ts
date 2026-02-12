// app/components/data/javascript-course.ts

/**
 * JavaScript Course Data - Transformed from PDF
 * Follows Devdah Project Patterns
 * Minimal, clear examples ready for innerHTML display
 */

export interface JavaScriptConcept {
  id: number;
  title: string;
  description: string;
  example: string;
  preview: {
    type: "js" | "html" | "mixed";
    content: string[];
    props?: {
      hasOutput?: boolean;
      interactive?: boolean;
    };
  };
  category: "basics" | "dom" | "variables" | "functions" | "arrays" | "dates" | "control";
  level: "beginner" | "intermediate";
  color: string; // From Devdah palette
}

export const javascriptCourseData: JavaScriptConcept[] = [
  // ============ BASICS & INTEGRATION ============
  {
    id: 1,
    title: "Internal JavaScript",
    description: "Write JavaScript directly inside HTML using <script> tags. Best placed before closing </body>.",
    example: '<!DOCTYPE html>\n<html>\n<head>\n  <title>Internal JS</title>\n</head>\n<body>\n  <h1>Hello World!</h1>\n  \n  <script>\n    // Simple alert example\n    alert("Bonjour depuis JavaScript !");\n    \n    // DOM manipulation\n    document.body.style.backgroundColor = "#c5e6ff";\n  </script>\n</body>\n</html>',
    preview: {
      type: "html",
      content: [
        "<script>",
        '  alert("Bonjour !");',
        "  // Changes background blue",
        "  document.body.style.background = '#c5e6ff';",
        "</script>"
      ],
      props: {
        interactive: true
      }
    },
    category: "basics",
    level: "beginner",
    color: "#c5e6ff" // Light Blue - Dashboard
  },
  {
    id: 2,
    title: "External JavaScript",
    description: "Link separate .js files using <script src>. Clean separation of concerns, reusable across pages.",
    example: '<!-- Fichier HTML -->\n<!DOCTYPE html>\n<html>\n<head>\n  <title>External JS</title>\n  <script src="script.js"></script>\n</head>\n<body>\n  <h1>External JavaScript Example</h1>\n</body>\n</html>\n\n// Fichier script.js\nalert("Bonjour depuis un fichier externe !");\nconsole.log("JavaScript chargé avec succès");',
    preview: {
      type: "mixed",
      content: [
        "<!-- HTML -->",
        '<script src="app.js"></script>',
        "",
        "// app.js",
        'console.log("External JS loaded");'
      ]
    },
    category: "basics",
    level: "beginner",
    color: "#c5e6ff"
  },
  {
    id: 3,
    title: "Inline Events",
    description: "JavaScript in HTML attributes like onclick. Quick for demos but mixes concerns - not recommended for production.",
    example: '<!DOCTYPE html>\n<html>\n<body>\n  <h1>Inline Event Example</h1>\n  \n  <!-- Simple inline click handler -->\n  <button onclick="alert(\'Bonjour !\')">\n    Cliquez-moi\n  </button>\n  \n  <!-- Inline with this reference -->\n  <button onclick="this.style.backgroundColor=\'#ffb7c5\'">\n    Change my color\n  </button>\n</body>\n</html>',
    preview: {
      type: "html",
      content: [
        '<button onclick="alert(\'Hello!\')">',
        "  Click Me",
        "</button>",
        "",
        '<button onclick="this.style.color=\'red\'">',
        "  Turn Red",
        "</button>"
      ],
      props: {
        interactive: true
      }
    },
    category: "basics",
    level: "beginner",
    color: "#94a3b8" // Slate 400 - Less recommended
  },

  // ============ OUTPUT METHODS ============
  {
    id: 4,
    title: "alert() - Popup Messages",
    description: "Displays a modal dialog box with a message. Blocks page interaction until OK is clicked. Use sparingly.",
    example: '// Simple welcome message\nalert("Bienvenue sur mon site !");\n\n// Alert with variable\nlet userName = "Marie";\nalert("Bonjour " + userName + " !");\n\n// Alert for validation\nlet age = 17;\nif(age < 18) {\n  alert("Accès réservé aux adultes");\n}',
    preview: {
      type: "js",
      content: [
        '// Welcome popup',
        'alert("Welcome to my site!");',
        '',
        '// Variable in alert',
        'let name = "Alex";',
        'alert("Hello " + name + "!");'
      ],
      props: {
        interactive: true
      }
    },
    category: "basics",
    level: "beginner",
    color: "#64748b" // Slate 500
  },
  {
    id: 5,
    title: "document.write()",
    description: "Writes directly to HTML document. Only use during initial page load - after load, it overwrites everything!",
    example: '// During page load - writes at script position\ndocument.write("<h2>Bonjour, monde !</h2>");\ndocument.write("<p>Ceci est écrit par JavaScript</p>");\n\n// ⚠️ Après chargement - remplace toute la page!\n// setTimeout(() => {\n//   document.write("PAGE REMPLACÉE"); // DANGER!\n// }, 3000);',
    preview: {
      type: "js",
      content: [
        "// Safe: during initial load",
        'document.write("<p>Hello World</p>");',
        "",
        "// ⚠️ After load: overwrites page!",
        "// document.write('REPLACED');"
      ]
    },
    category: "basics",
    level: "beginner",
    color: "#94a3b8" // Slate 400 - Rarely used
  },
  {
    id: 6,
    title: "console.log()",
    description: "Prints to browser console (F12). Perfect for debugging, development, and checking variable values without disrupting UI.",
    example: '// Basic logging\nconsole.log("JavaScript chargé!");\n\n// Log variables\nlet score = 42;\nconsole.log("Score:", score);\n\n// Log objects\nlet user = {name: "Alice", age: 30};\nconsole.log("Utilisateur:", user);\n\n// Group logs\nconsole.group("Détails du panier");\nconsole.log("Articles: 3");\nconsole.log("Total: 45.99€");\nconsole.groupEnd();',
    preview: {
      type: "js",
      content: [
        'console.log("Debug message");',
        "",
        "let count = 5;",
        "console.log('Count:', count);",
        "",
        "// F12 to view console"
      ]
    },
    category: "basics",
    level: "beginner",
    color: "#b7ffca" // Light Green
  },

  // ============ VARIABLES ============
  {
    id: 7,
    title: "let - Mutable Variables",
    description: "Declare block-scoped variables that can be reassigned. Modern replacement for var. Not redeclarable in same block.",
    example: '// Déclaration et affectation\nlet age = 25;\nalert(age); // 25\n\n// Réassignation possible\nage = 30;\nalert(age); // 30\n\n// Block scope\nif (true) {\n  let message = "Dans le bloc";\n  console.log(message); // OK\n}\n// console.log(message); // ERREUR! Hors scope\n\n// undefined - variable non initialisée\nlet city;\nconsole.log(city); // undefined\ncity = "Paris";\nconsole.log(city); // Paris',
    preview: {
      type: "js",
      content: [
        "let age = 25;",
        "age = 30; // ✅ Reassignable",
        "console.log(age); // 30",
        "",
        "let score; // undefined",
        "score = 100; // Now defined"
      ]
    },
    category: "variables",
    level: "beginner",
    color: "#d2b7ff" // Light Purple
  },
  {
    id: 8,
    title: "const - Constants",
    description: "Block-scoped variable that cannot be reassigned. Must be initialized at declaration. Object properties can still be modified!",
    example: '// Déclaration avec initialisation obligatoire\nconst PI = 3.14;\nalert(PI); // 3.14\n\n// ❌ Erreur: Réassignation interdite\n// PI = 3.14159; // TypeError\n\n// ✅ Objets const: propriétés modifiables!\nconst user = {name: "Jean"};\nuser.name = "Pierre"; // OK\nconsole.log(user.name); // "Pierre"\n\n// ❌ Mais pas réassignation de l\'objet\n// user = {name: "Paul"}; // Erreur!\n\n// ✅ Tableaux: modifiables aussi\nconst colors = ["rouge", "bleu"];\ncolors.push("vert"); // OK\nconsole.log(colors); // ["rouge", "bleu", "vert"]',
    preview: {
      type: "js",
      content: [
        "const PI = 3.14;",
        "// PI = 3.15; ❌ Cannot reassign",
        "",
        "const user = {name: 'Alex'};",
        "user.name = 'Sam'; // ✅ Modifies property"
      ]
    },
    category: "variables",
    level: "beginner",
    color: "#d2b7ff"
  },
  {
    id: 9,
    title: "prompt() - User Input",
    description: "Display dialog with text input field. Returns the entered string, or null if cancelled. Perfect for simple user interactions.",
    example: '// Simple prompt\nlet name = prompt("Quel est votre nom?");\nalert("Bonjour " + name + "!");\n\n// Avec valeur par défaut\nlet age = prompt("Quel âge avez-vous?", "18");\nconsole.log("Âge:", age);\n\n// Vérification si annulé\nlet color = prompt("Couleur préférée?");\nif (color !== null) {\n  document.body.style.backgroundColor = color;\n} else {\n  alert("Annulé!");\n}\n\n// Conversion du résultat\nlet quantity = prompt("Quantité:", "1");\nlet total = Number(quantity) * 10;\nconsole.log("Total:", total, "€");',
    preview: {
      type: "js",
      content: [
        'let name = prompt("Your name?", "Guest");',
        'alert("Hello " + name + "!");',
        "",
        "// Returns null if cancelled",
        "if (name !== null) {",
        "  console.log(name);",
        "}"
      ],
      props: {
        interactive: true
      }
    },
    category: "variables",
    level: "beginner",
    color: "#d2b7ff"
  },

  // ============ DATA TYPES ============
  {
    id: 10,
    title: "Number - Integers & Floats",
    description: "JavaScript's number type handles both integers and decimals. Special values: NaN, Infinity. 64-bit floating point format.",
    example: '// Entiers et décimaux\nlet entier = 42;\nlet decimal = 3.14;\nlet negatif = -10;\n\n// Opérations de base\nlet sum = 5 + 3;      // 8\nlet product = 5 * 3;  // 15\nlet division = 15 / 3; // 5\nlet modulo = 5 % 2;   // 1 (reste)\n\n// Incrémentation/décrémentation\nlet x = 5;\nx++; // x = 6\nx--; // x = 5\n\n// NaN (Not a Number)\nlet invalid = "abc" * 2; // NaN\nconsole.log(isNaN(invalid)); // true\n\n// Infinity\nlet huge = 1 / 0; // Infinity',
    preview: {
      type: "js",
      content: [
        "let int = 42;",
        "let float = 3.14;",
        "",
        "5 + 3; // 8",
        "15 / 3; // 5",
        "5 % 2; // 1 (remainder)",
        "",
        "let x = 5;",
        "x++; // 6"
      ]
    },
    category: "basics",
    level: "beginner",
    color: "#ffb7c5" // Pink - Button Gallery
  },
  {
    id: 11,
    title: "Math Object - Utilities",
    description: "Built-in Math object provides mathematical constants and functions. No constructor - use static methods directly.",
    example: '// Constantes\nconsole.log(Math.PI); // 3.141592653589793\n\n// Arrondis\nMath.round(4.6);    // 5\nMath.round(4.4);    // 4\nMath.floor(4.9);    // 4 (arrondi inférieur)\nMath.ceil(4.1);     // 5 (arrondi supérieur)\nMath.trunc(4.9);    // 4 (supprime décimales)\n\n// Puissance et racine\nMath.pow(2, 3);     // 8 (2³)\nMath.sqrt(16);      // 4\nMath.abs(-5);       // 5\n\n// Aléatoire\nMath.random();      // 0.0 à 0.999...\n// Entier entre 1 et 10\nlet dice = Math.floor(Math.random() * 10) + 1;\n\n// Min/Max\nMath.max(10, 5, 20); // 20\nMath.min(10, 5, 20); // 5',
    preview: {
      type: "js",
      content: [
        "Math.PI; // 3.14159...",
        "Math.round(4.6); // 5",
        "Math.floor(4.9); // 4",
        "Math.ceil(4.1); // 5",
        "",
        "Math.random(); // 0.0 to 0.999",
        "Math.max(1, 5, 3); // 5"
      ]
    },
    category: "basics",
    level: "beginner",
    color: "#ffb7c5"
  },
  {
    id: 12,
    title: "Number Conversion",
    description: "Convert strings/values to numbers. Number() for general, parseInt() for integers, parseFloat() for decimals.",
    example: '// Number() - Général\nNumber("42");        // 42\nNumber("42.5");      // 42.5\nNumber("abc");       // NaN\nNumber(true);        // 1\nNumber(false);       // 0\n\n// parseInt() - Entier\nparseInt("42");      // 42\nparseInt("42.9");    // 42 (tronque)\nparseInt("1010", 2); // 10 (binaire)\nparseInt("FF", 16);  // 255 (hex)\n\n// parseFloat() - Décimal\nparseFloat("42.5");  // 42.5\nparseFloat("3.14");  // 3.14\n\n// Unary + operator\nlet num = +"99";      // 99\n\n// toString() - Vers string\nlet n = 255;\nn.toString(16);      // "ff" (hexadécimal)',
    preview: {
      type: "js",
      content: [
        'Number("42"); // 42',
        'Number("42.5"); // 42.5',
        'Number("abc"); // NaN',
        '',
        'parseInt("42.9"); // 42',
        'parseFloat("42.9"); // 42.9'
      ]
    },
    category: "basics",
    level: "beginner",
    color: "#ffb7c5"
  },
  {
    id: 13,
    title: "String - Text Sequences",
    description: "Immutable sequences of characters. Use '', \"\", or `` (template literals). Strings cannot be changed - methods return new strings.",
    example: '// Déclaration\nlet simple = \'Hello\';     // Guillemets simples\nlet double = "World";     // Guillemets doubles\nlet template = `Bonjour`; // Backticks (ES6)\n\n// Concaténation\nlet message = "Hello" + " " + "World"; // "Hello World"\n\n// Template literals (interpolation)\nlet name = "Marie";\nlet greeting = `Bonjour ${name}!`; // "Bonjour Marie!"\n\n// Propriétés et méthodes\n"JavaScript".length;        // 10\n"Hello".indexOf("l");      // 2\n"Hello".lastIndexOf("l");  // 3\n"Hello".charAt(1);        // "e"\n"JS".repeat(3);           // "JSJSJS"\n\n// Immutabilité\nlet str = "Hi";\nstr[0] = "h";            // ❌ Ne change pas!\nconsole.log(str);        // "Hi"',
    preview: {
      type: "js",
      content: [
        'let str = "Hello World";',
        'str.length; // 11',
        '',
        'let name = "Alex";',
        '`Hello ${name}!`; // "Hello Alex!"',
        '',
        '"JS" + " " + "Rocks"; // "JS Rocks"'
      ]
    },
    category: "basics",
    level: "beginner",
    color: "#b7ffca"
  },
  {
    id: 14,
    title: "Boolean - True/False",
    description: "Logical type with only two values: true or false. Result of comparisons, used in conditionals.",
    example: '// Valeurs directes\nlet isActive = true;\nlet isDeleted = false;\n\n// Opérateurs de comparaison\nlet age = 18;\nlet isAdult = age >= 18;    // true\nlet isTeen = age > 12 && age < 20; // true\nlet isChild = age < 13;     // false\n\n// Valeurs "truthy" et "falsy"\nBoolean("hello");   // true\nBoolean("");        // false\nBoolean(42);        // true\nBoolean(0);         // false\nBoolean(null);      // false\nBoolean(undefined); // false\nBoolean(NaN);       // false\n\n// Négation\nlet isLoggedIn = false;\nif (!isLoggedIn) {\n  console.log("Please log in");\n}',
    preview: {
      type: "js",
      content: [
        "let isReady = true;",
        "",
        "5 > 3; // true",
        "5 === '5'; // false",
        "",
        "Boolean(1); // true",
        "Boolean(0); // false",
        'Boolean(""); // false'
      ]
    },
    category: "basics",
    level: "beginner",
    color: "#475569" // Slate 600
  },

  // ============ DATES ============
  {
    id: 15,
    title: "Date Object - Current Date",
    description: "Create date objects. new Date() without arguments = current date/time. Many parsing and formatting methods available.",
    example: '// Date et heure actuelles\nlet now = new Date();\nconsole.log(now); // "Mon Feb 12 2024 14:30:45..."\n\n// Composants individuels\nlet d = new Date();\nd.getDate();      // Jour du mois (1-31)\nd.getMonth();     // Mois (0-11, 0=janvier)\nd.getFullYear();  // Année (4 chiffres)\nd.getDay();       // Jour semaine (0-6, 0=dimanche)\n\n// Heures\nd.getHours();     // Heures (0-23)\nd.getMinutes();   // Minutes (0-59)\nd.getSeconds();   // Secondes (0-59)\n\n// Formatage\nnow.toString();      // "Mon Feb 12 2024 14:30:45..."\nnow.toLocaleDateString(); // "12/02/2024" (local)\nnow.toLocaleTimeString(); // "14:30:45" (local)\n\n// Timestamp (ms depuis 1970)\nnow.getTime();      // 1707754245123',
    preview: {
      type: "js",
      content: [
        "let now = new Date();",
        "now.getDate(); // Day of month",
        "now.getMonth(); // 0-11 (0=Jan)",
        "now.getFullYear(); // 2025",
        "",
        "now.toLocaleDateString(); // Local format"
      ]
    },
    category: "dates",
    level: "intermediate",
    color: "#64748b"
  },
  {
    id: 16,
    title: "Date - Parse String",
    description: "Create Date from string. Accepts ISO format (YYYY-MM-DD) or various string formats. Month indexes are 0-based!",
    example: '// ISO format (recommandé)\nlet d1 = new Date("2025-08-19");\nconsole.log(d1); // "Tue Aug 19 2025 ..."\n\n// Avec heure\nlet d2 = new Date("2025-08-19T10:30:00");\n\n// Format US\nlet d3 = new Date("August 19, 2025");\n\n// ⚠️ Mois: 0 = janvier, 11 = décembre\nlet d4 = new Date(2025, 7, 19); // 7 = août!\nconsole.log(d4.getMonth()); // 7\n\n// Attention: composants vs string!\nnew Date("2025-08-19"); // UTC\nnew Date(2025, 7, 19);  // Heure locale\n\n// Timestamp\nlet d5 = new Date(1707754245123); // ms depuis 1970',
    preview: {
      type: "js",
      content: [
        'let d = new Date("2025-08-19");',
        'd.getFullYear(); // 2025',
        'd.getMonth(); // 7 (August!)',
        'd.getDate(); // 19',
        '',
        '// Month is 0-based!',
        '// 7 = August, not September'
      ]
    },
    category: "dates",
    level: "intermediate",
    color: "#64748b"
  },

  // ============ ARRAYS ============
  {
    id: 17,
    title: "Array - Collections",
    description: "Ordered, indexed collections. Can hold mixed types. Zero-indexed, dynamic length. Many built-in methods for manipulation.",
    example: '// Création\nlet vide = [];\nlet fruits = ["pomme", "banane", "cerise"];\nlet mixte = [42, "texte", true, null, [1,2]];\n\n// Accès par index (0-based)\nfruits[0];      // "pomme"\nfruits[2];      // "cerise"\nfruits[3];      // undefined (hors limites)\n\n// Modification\nfruits[1] = "orange";\nconsole.log(fruits); // ["pomme", "orange", "cerise"]\n\n// Propriété length\nfruits.length;      // 3\n\n// Ajout/retrait\nfruits.push("kiwi");   // Ajoute à la fin\nlet last = fruits.pop(); // Retire le dernier\nfruits.unshift("mangue"); // Ajoute au début\nlet first = fruits.shift(); // Retire le premier\n\n// Parcours\nfor(let fruit of fruits) {\n  console.log(fruit);\n}',
    preview: {
      type: "js",
      content: [
        "let fruits = ['apple', 'banana', 'cherry'];",
        "fruits[0]; // 'apple'",
        "fruits[2] = 'orange';",
        "",
        "fruits.length; // 3",
        "fruits.push('grape'); // Add to end"
      ]
    },
    category: "arrays",
    level: "beginner",
    color: "#b7ffca"
  },

  // ============ CONDITIONALS ============
  {
    id: 18,
    title: "if / else if / else",
    description: "Execute code blocks based on conditions. Conditions are evaluated from top to bottom, first true condition executes.",
    example: 'let note = 75;\n\n// Simple if\nif (note >= 50) {\n  console.log("Réussite!");\n}\n\n// if...else\nif (note >= 50) {\n  console.log("Admis");\n} else {\n  console.log("Échec");\n}\n\n// if...else if...else\nlet score = 85;\n\nif (score >= 90) {\n  console.log("A");\n} else if (score >= 80) {\n  console.log("B"); // ✅ Ce bloc s\'exécute\n} else if (score >= 70) {\n  console.log("C");\n} else {\n  console.log("D");\n}\n\n// Conditions multiples\nlet age = 25;\nlet hasLicense = true;\n\nif (age >= 18 && hasLicense) {\n  console.log("Peut conduire");\n}',
    preview: {
      type: "js",
      content: [
        "let x = 10;",
        "",
        "if (x > 0) {",
        '  console.log("Positive");',
        "} else if (x < 0) {",
        '  console.log("Negative");',
        "} else {",
        '  console.log("Zero");',
        "}"
      ]
    },
    category: "control",
    level: "beginner",
    color: "#c5e6ff"
  },
  {
    id: 19,
    title: "switch Statement",
    description: "Efficient multiple comparisons. Compares one expression against multiple case values. Use break to prevent fall-through.",
    example: 'let day = 3;\nlet dayName;\n\nswitch (day) {\n  case 1:\n    dayName = "Lundi";\n    break;\n  case 2:\n    dayName = "Mardi";\n    break;\n  case 3:\n    dayName = "Mercredi"; // ✅ Ce cas\n    break;\n  case 4:\n    dayName = "Jeudi";\n    break;\n  case 5:\n    dayName = "Vendredi";\n    break;\n  default:\n    dayName = "Week-end";\n}\nconsole.log(dayName); // "Mercredi"\n\n// Fall-through volontaire (grouper cas)\nlet month = 2;\nlet season;\n\nswitch (month) {\n  case 12:\n  case 1:\n  case 2:\n    season = "Hiver"; // ✅ Décembre-Mars\n    break;\n  case 3:\n  case 4:\n  case 5:\n    season = "Printemps";\n    break;\n  // ...\n}',
    preview: {
      type: "js",
      content: [
        "let fruit = 'apple';",
        "",
        "switch(fruit) {",
        "  case 'apple':",
        "    console.log('Apple');",
        "    break;",
        "  case 'banana':",
        "    console.log('Banana');",
        "    break;",
        "  default:",
        "    console.log('Other');",
        "}"
      ]
    },
    category: "control",
    level: "intermediate",
    color: "#c5e6ff"
  },

  // ============ DOM MANIPULATION ============
  {
    id: 20,
    title: "getElementById()",
    description: "Select single element by its id attribute. IDs must be unique. Most efficient selector for unique elements.",
    example: '<!-- HTML -->\n<h1 id="titre">Bienvenue</h1>\n<h1 id="titre2">Contact</h1>\n<p id="paragraphe">Texte original</p>\n\n<script>\n  // Cibler un élément par ID\n  let titre = document.getElementById("titre");\n  \n  // Lire contenu\n  alert(titre.innerHTML); // "Bienvenue"\n  \n  // Modifier contenu\n  titre.innerHTML = "Nouveau titre!";\n  \n  // Modifier style\n  titre.style.color = "#c5e6ff";\n  \n  // Le second h1 n\'est pas affecté\n  let contact = document.getElementById("titre2");\n  contact.style.fontSize = "24px";\n</script>',
    preview: {
      type: "html",
      content: [
        '<h1 id="title">Hello</h1>',
        "",
        "<script>",
        '  let el = document.getElementById("title");',
        '  el.innerHTML = "Changed!";',
        '  el.style.color = "blue";',
        "</script>"
      ],
      props: {
        interactive: true
      }
    },
    category: "dom",
    level: "beginner",
    color: "#ffb7c5"
  },
  {
    id: 21,
    title: "innerHTML - Get/Set Content",
    description: "Property to read or write HTML content inside an element. Can include HTML tags. Be careful with user input (XSS risk).",
    example: '<!-- HTML -->\n<p id="paragraphe">Texte original</p>\n<button onclick="changer()">Changer le texte</button>\n\n<script>\nfunction changer() {\n  // Cibler l\'élément\n  let p = document.getElementById("paragraphe");\n  \n  // Lire contenu (optionnel)\n  console.log("Avant:", p.innerHTML); // "Texte original"\n  \n  // Modifier contenu\n  p.innerHTML = "Texte <strong>modifié</strong> avec JavaScript";\n  \n  // Ajouter HTML\n  p.innerHTML += \' <span style="color:red">Nouveau!</span>\';\n}\n</script>',
    preview: {
      type: "html",
      content: [
        '<p id="demo">Original</p>',
        "",
        "<script>",
        '  document.getElementById("demo").innerHTML =',
        '    "New <em>content</em>!";',
        "</script>"
      ],
      props: {
        interactive: true
      }
    },
    category: "dom",
    level: "beginner",
    color: "#ffb7c5"
  },
  {
    id: 22,
    title: "Modify Attributes",
    description: "Directly access and change HTML element attributes using dot notation. Works for src, href, alt, disabled, etc.",
    example: '<!-- HTML -->\n<img id="photo" src="placeholder.jpg" alt="Image pas encore chargée">\n<button onclick="changerImage()">Changer l\'image</button>\n\n<script>\nfunction changerImage() {\n  let img = document.getElementById("photo");\n  \n  // Modifier attribut src\n  img.src = "https://picsum.photos/200/300";\n  \n  // Modifier attribut alt\n  img.alt = "Image aléatoire depuis Lorem Picsum";\n  \n  // Modifier attribut width/height\n  img.width = 300;\n  img.height = 200;\n  \n  // Autres exemples\n  let link = document.getElementById("myLink");\n  link.href = "https://example.com";\n  link.target = "_blank";\n  \n  let input = document.getElementById("myInput");\n  input.disabled = true;\n  input.placeholder = "Désactivé";\n}\n</script>',
    preview: {
      type: "html",
      content: [
        '<img id="pic" src="old.jpg">',
        '<button onclick="changeSrc()">Change</button>',
        "",
        "<script>",
        "function changeSrc() {",
        '  let img = document.getElementById("pic");',
        '  img.src = "new.jpg";',
        "}",
        "</script>"
      ],
      props: {
        interactive: true
      }
    },
    category: "dom",
    level: "beginner",
    color: "#ffb7c5"
  },
  {
    id: 23,
    title: "Modify CSS Style",
    description: "Change element styles via the style property. CSS properties with hyphens become camelCase in JavaScript.",
    example: '<!-- HTML -->\n<p id="texte">Bonjour tout le monde !</p>\n<button onclick="changerStyle()">Changer style</button>\n\n<script>\nfunction changerStyle() {\n  let p = document.getElementById("texte");\n  \n  // Propriétés CSS individuelles\n  p.style.color = "red";              // couleur du texte\n  p.style.fontSize = "20px";         // taille police\n  p.style.backgroundColor = "yellow"; // fond jaune\n  \n  // CSS avec tirets -> camelCase\n  // background-color -> backgroundColor\n  // font-size -> fontSize\n  // border-radius -> borderRadius\n  \n  // Ajouter plusieurs styles\n  p.style.cssText = "font-weight: bold; padding: 10px; border: 1px solid black;";\n  \n  // Classes CSS\n  // p.classList.add("highlight");\n  // p.classList.remove("old-style");\n}\n</script>',
    preview: {
      type: "html",
      content: [
        '<p id="text">Hello World!</p>',
        '<button onclick="changeColor()">Color</button>',
        "",
        "<script>",
        "function changeColor() {",
        '  let p = document.getElementById("text");',
        '  p.style.color = "blue";',
        '  p.style.fontSize = "24px";',
        "}",
        "</script>"
      ],
      props: {
        interactive: true
      }
    },
    category: "dom",
    level: "beginner",
    color: "#ffb7c5"
  },
  {
    id: 24,
    title: "Video/Audio Control",
    description: "Control media elements programmatically. Use play(), pause(), load() and properties like currentTime, volume, muted.",
    example: '<!-- HTML -->\n<video id="maVideo" width="320" height="240" controls>\n  <source src="exemple.mp4" type="video/mp4">\n  Votre navigateur ne supporte pas la vidéo.\n</video>\n<br>\n<button onclick="lire()">▶️ Lire</button>\n<button onclick="pauseVideo()">⏸️ Pause</button>\n<button onclick="stopVideo()">⏹️ Stop</button>\n\n<script>\nlet video = document.getElementById("maVideo");\n\nfunction lire() {\n  video.play();\n}\n\nfunction pauseVideo() {\n  video.pause();\n}\n\nfunction stopVideo() {\n  video.pause();\n  video.currentTime = 0; // Retour au début\n}\n\n// Propriétés utiles\n// video.volume = 0.5;  // Volume 0-1\n// video.muted = true;   // Muet\n// video.loop = true;    // Boucle\n</script>',
    preview: {
      type: "html",
      content: [
        '<video id="vid" width="200">',
        '  <source src="video.mp4">',
        "</video>",
        '<button onclick="playVideo()">Play</button>',
        "",
        "<script>",
        "function playVideo() {",
        '  document.getElementById("vid").play();',
        "}",
        "</script>"
      ],
      props: {
        interactive: true
      }
    },
    category: "dom",
    level: "intermediate",
    color: "#ffb7c5"
  },

  // ============ FUNCTIONS ============
  {
    id: 25,
    title: "Function Declaration",
    description: "Reusable block of code. Defined with 'function' keyword. Hoisted - can be called before declaration.",
    example: '// Déclaration de fonction\nfunction saluer(nom) {\n  return "Bonjour " + nom + "!";\n}\n\n// Appel\nconsole.log(saluer("Marie")); // "Bonjour Marie!"\n\n// Sans paramètres\nfunction direBonjour() {\n  console.log("Bonjour!");\n}\ndireBonjour(); // "Bonjour!"\n\n// Avec plusieurs paramètres\nfunction addition(a, b) {\n  return a + b;\n}\nlet resultat = addition(5, 3);\nconsole.log(resultat); // 8\n\n// Paramètres par défaut (ES6)\nfunction puissance(base, exposant = 2) {\n  return base ** exposant;\n}\nconsole.log(puissance(4));   // 16 (4²)\nconsole.log(puissance(2, 3)); // 8 (2³)\n\n// Return optionnel\nfunction logger(message) {\n  console.log(message);\n  // return undefined (implicite)\n}',
    preview: {
      type: "js",
      content: [
        "function greet(name) {",
        '  return "Hello " + name + "!";',
        "}",
        '',
        'greet("Alex"); // "Hello Alex!"',
        "",
        "function add(a, b) {",
        "  return a + b;",
        "}",
        "add(5, 3); // 8"
      ]
    },
    category: "functions",
    level: "beginner",
    color: "#d2b7ff"
  }
];

// ============ CATEGORIES FOR FILTERING ============
export const javascriptCategories = [
  { id: "all", name: "All Concepts", color: "#94a3b8" },
  { id: "basics", name: "Basics & Output", color: "#c5e6ff" },
  { id: "variables", name: "Variables & Data", color: "#d2b7ff" },
  { id: "dom", name: "DOM Manipulation", color: "#ffb7c5" },
  { id: "functions", name: "Functions", color: "#d2b7ff" },
  { id: "arrays", name: "Arrays", color: "#b7ffca" },
  { id: "dates", name: "Dates", color: "#64748b" },
  { id: "control", name: "Control Flow", color: "#c5e6ff" }
];

// ============ LEVELS FOR FILTERING ============
export const javascriptLevels = [
  { id: "all", name: "All Levels", color: "#94a3b8" },
  { id: "beginner", name: "Beginner", color: "#b7ffca" },
  { id: "intermediate", name: "Intermediate", color: "#ffb7c5" }
];

// ============ KEY CONCEPTS SUMMARY ============
export const javascriptQuickReference = [
  {
    title: "Output Methods",
    items: [
      'alert("message") - Popup',
      'console.log("debug") - Console',
      'document.write() - Write to page',
      'prompt("Question") - Get input'
    ],
    color: "#c5e6ff"
  },
  {
    title: "Variables",
    items: [
      "let - Reassignable, block scope",
      "const - Cannot reassign, block scope",
      "var - Old, function scope (avoid)"
    ],
    color: "#d2b7ff"
  },
  {
    title: "Data Types",
    items: [
      "Number - 42, 3.14, NaN",
      "String - 'text', `template`",
      "Boolean - true, false",
      "Array - [1, 2, 3]",
      "Object - {key: 'value'}"
    ],
    color: "#ffb7c5"
  },
  {
    title: "DOM Selection",
    items: [
      'getElementById("id") - Single',
      'getElementsByName("name") - Collection',
      'querySelector(".class") - First match',
      'querySelectorAll("div") - All matches'
    ],
    color: "#b7ffca"
  },
  {
    title: "DOM Manipulation",
    items: [
      "element.innerHTML - HTML content",
      "element.textContent - Text only",
      "element.style.property = 'value'",
      "element.src / href / alt - Attributes",
      "element.play() / pause() - Media"
    ],
    color: "#ffb7c5"
  }
];