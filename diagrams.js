// Preliminary Business Studies diagram labelling
// Each diagram is an SVG drawn on a 640x400 canvas with the labels stripped out.
// `zones` are the empty boxes a student drops labels into (viewBox coordinates).
// px/py, where present, is the point on the artwork the label refers to — the game
// draws a leader line from the box to that point, so boxes can sit in clear margins.
// Artwork uses CSS variables so it themes with the rest of the app.
const DIAGRAMS = [

{id:"dg-business-life-cycle", title:"The business life cycle",
 topic:"Nature of Business", sub:"Business growth and decline",
 note:"As a business moves through establishment, growth, maturity and post-maturity, sales growth slows, and management must then choose a strategy for renewal or accept eventual decline.",
 art:`
  <line x1="70" y1="330" x2="610" y2="330" stroke="var(--line)" stroke-width="2"/>
  <line x1="70" y1="330" x2="70" y2="40" stroke="var(--line)" stroke-width="2"/>
  <path d="M90 315 C 120 300, 150 296, 170 285 C 210 262, 250 175, 290 135 C 330 112, 380 102, 430 100" fill="none" stroke="var(--accent2)" stroke-width="3"/>
  <path d="M430 100 C 480 92, 550 70, 605 50" fill="none" stroke="var(--good)" stroke-width="3"/>
  <path d="M430 100 C 470 125, 540 190, 605 255" fill="none" stroke="var(--bad)" stroke-width="3" stroke-dasharray="7 5"/>
  <circle cx="170" cy="285" r="5" fill="var(--gold)"/>
  <circle cx="290" cy="135" r="5" fill="var(--gold)"/>
  <circle cx="430" cy="100" r="5" fill="var(--gold)"/>`,
 zones:[
   {label:"Sales / growth",  x:6,   y:150, w:118, h:32, px:70,  py:170},
   {label:"Time",            x:520, y:344, w:90,  h:32, px:590, py:330},
   {label:"Establishment",   x:30,  y:346, w:160, h:32, px:115, py:300},
   {label:"Growth",          x:150, y:40,  w:110, h:32, px:230, py:200},
   {label:"Maturity",        x:320, y:40,  w:110, h:32, px:360, py:108},
   {label:"Post-maturity",   x:230, y:346, w:170, h:32, px:430, py:100},
   {label:"Renewal",         x:470, y:70,  w:150, h:32, px:550, py:60},
   {label:"Decline",         x:470, y:280, w:150, h:32, px:560, py:225}
 ]},

{id:"dg-swot", title:"SWOT analysis matrix",
 topic:"Business Planning", sub:"The business planning process",
 note:"Strengths and weaknesses come from inside the business and can be controlled, while opportunities and threats arise in the external environment and must be responded to.",
 art:`
  <line x1="140" y1="60"  x2="560" y2="60"  stroke="var(--line)" stroke-width="2.5"/>
  <line x1="560" y1="60"  x2="560" y2="340" stroke="var(--line)" stroke-width="2.5"/>
  <line x1="560" y1="340" x2="140" y2="340" stroke="var(--line)" stroke-width="2.5"/>
  <line x1="140" y1="340" x2="140" y2="60"  stroke="var(--line)" stroke-width="2.5"/>
  <line x1="350" y1="60"  x2="350" y2="340" stroke="var(--line)" stroke-width="2"/>
  <line x1="140" y1="200" x2="560" y2="200" stroke="var(--line)" stroke-width="2"/>`,
 zones:[
   {label:"Strengths",                       x:155, y:110, w:170, h:40},
   {label:"Weaknesses",                      x:365, y:110, w:170, h:40},
   {label:"Opportunities",                   x:155, y:250, w:170, h:40},
   {label:"Threats",                         x:365, y:250, w:170, h:40},
   {label:"Internal factors",                x:8,   y:112, w:118, h:36, px:140, py:130},
   {label:"External factors",                x:8,   y:252, w:118, h:36, px:140, py:270},
   {label:"Helpful to achieving objectives", x:175, y:14,  w:140, h:32, px:245, py:60},
   {label:"Harmful to achieving objectives", x:390, y:14,  w:140, h:32, px:455, py:60}
 ]},

{id:"dg-break-even", title:"Break-even chart",
 topic:"Business Planning", sub:"The business planning process",
 note:"Break-even occurs where total revenue equals total costs; selling fewer units than this results in a loss, while selling more generates a profit.",
 art:`
  <line x1="100" y1="340" x2="600" y2="340" stroke="var(--line)" stroke-width="2"/>
  <line x1="100" y1="340" x2="100" y2="40"  stroke="var(--line)" stroke-width="2"/>
  <path d="M100 340 L433 153 L100 280 Z" fill="rgba(239,83,80,.15)"/>
  <path d="M433 153 L600 60 L600 90 Z" fill="rgba(102,187,106,.15)"/>
  <line x1="100" y1="280" x2="600" y2="280" stroke="var(--ink2)" stroke-width="2" stroke-dasharray="6 4"/>
  <line x1="100" y1="280" x2="600" y2="90"  stroke="var(--bad)" stroke-width="3"/>
  <line x1="100" y1="340" x2="600" y2="60"  stroke="var(--good)" stroke-width="3"/>
  <circle cx="433" cy="153" r="6" fill="var(--gold)"/>
  <line x1="433" y1="153" x2="433" y2="340" stroke="var(--ink2)" stroke-width="1.2" stroke-dasharray="4 3"/>
  <line x1="100" y1="153" x2="433" y2="153" stroke="var(--ink2)" stroke-width="1.2" stroke-dasharray="4 3"/>
  <text x="606" y="64"  class="dgnote">TR</text>
  <text x="606" y="94"  class="dgnote">TC</text>
  <text x="606" y="284" class="dgnote">FC</text>`,
 zones:[
   {label:"$ (costs / revenue)", x:6,   y:150, w:90,  h:32, px:100, py:150},
   {label:"Units sold",          x:520, y:344, w:100, h:32, px:560, py:330},
   {label:"Fixed costs",         x:470, y:250, w:130, h:32, px:600, py:280},
   {label:"Total cost",          x:430, y:110, w:140, h:32, px:480, py:136},
   {label:"Total revenue",       x:140, y:210, w:150, h:32, px:250, py:256},
   {label:"Break-even point",    x:440, y:170, w:150, h:32, px:433, py:153},
   {label:"Loss",                x:140, y:100, w:90,  h:32, px:220, py:250},
   {label:"Profit",              x:480, y:290, w:100, h:32, px:550, py:100}
 ]},

{id:"dg-org-structure", title:"Organisational structures: hierarchical vs flat",
 topic:"Business Management", sub:"Management approaches",
 note:"Classical (hierarchical) structures have many management layers and narrow spans of control, while behavioural (flat) structures have fewer layers, wider spans of control and greater teamwork.",
 art:`
  <line x1="180" y1="61" x2="100" y2="110" stroke="var(--line)" stroke-width="1.5"/>
  <line x1="180" y1="61" x2="260" y2="110" stroke="var(--line)" stroke-width="1.5"/>
  <line x1="100" y1="110" x2="60" y2="159" stroke="var(--line)" stroke-width="1.5"/>
  <line x1="100" y1="110" x2="130" y2="159" stroke="var(--line)" stroke-width="1.5"/>
  <line x1="260" y1="110" x2="210" y2="159" stroke="var(--line)" stroke-width="1.5"/>
  <line x1="260" y1="110" x2="280" y2="159" stroke="var(--line)" stroke-width="1.5"/>
  <line x1="60"  y1="159" x2="41"  y2="205" stroke="var(--line)" stroke-width="1.5"/>
  <line x1="60"  y1="159" x2="91"  y2="205" stroke="var(--line)" stroke-width="1.5"/>
  <line x1="130" y1="159" x2="141" y2="205" stroke="var(--line)" stroke-width="1.5"/>
  <line x1="210" y1="159" x2="191" y2="205" stroke="var(--line)" stroke-width="1.5"/>
  <line x1="210" y1="159" x2="241" y2="205" stroke="var(--line)" stroke-width="1.5"/>
  <line x1="280" y1="159" x2="291" y2="205" stroke="var(--line)" stroke-width="1.5"/>
  <circle cx="180" cy="61"  r="6" fill="var(--accent2)"/>
  <circle cx="100" cy="110" r="5" fill="var(--accent2)"/>
  <circle cx="260" cy="110" r="5" fill="var(--accent2)"/>
  <circle cx="60"  cy="159" r="4" fill="var(--ink2)"/>
  <circle cx="130" cy="159" r="4" fill="var(--ink2)"/>
  <circle cx="210" cy="159" r="4" fill="var(--ink2)"/>
  <circle cx="280" cy="159" r="4" fill="var(--ink2)"/>
  <circle cx="41"  cy="205" r="3.5" fill="var(--ink2)"/>
  <circle cx="91"  cy="205" r="3.5" fill="var(--ink2)"/>
  <circle cx="141" cy="205" r="3.5" fill="var(--ink2)"/>
  <circle cx="191" cy="205" r="3.5" fill="var(--ink2)"/>
  <circle cx="241" cy="205" r="3.5" fill="var(--ink2)"/>
  <circle cx="291" cy="205" r="3.5" fill="var(--ink2)"/>
  <line x1="500" y1="75" x2="430" y2="180" stroke="var(--line)" stroke-width="1.5"/>
  <line x1="500" y1="75" x2="500" y2="160" stroke="var(--line)" stroke-width="1.5"/>
  <line x1="500" y1="75" x2="570" y2="180" stroke="var(--line)" stroke-width="1.5"/>
  <line x1="500" y1="75" x2="430" y2="250" stroke="var(--line)" stroke-width="1.5"/>
  <line x1="500" y1="75" x2="500" y2="270" stroke="var(--line)" stroke-width="1.5"/>
  <line x1="500" y1="75" x2="570" y2="250" stroke="var(--line)" stroke-width="1.5"/>
  <path d="M430 180 L500 160 L570 180 L570 250 L500 270 L430 250 Z" fill="none" stroke="var(--ink2)" stroke-width="1.2" stroke-dasharray="4 3"/>
  <circle cx="500" cy="75"  r="7" fill="var(--accent2)"/>
  <circle cx="430" cy="180" r="6" fill="var(--good)"/>
  <circle cx="500" cy="160" r="6" fill="var(--good)"/>
  <circle cx="570" cy="180" r="6" fill="var(--good)"/>
  <circle cx="430" cy="250" r="6" fill="var(--good)"/>
  <circle cx="500" cy="270" r="6" fill="var(--good)"/>
  <circle cx="570" cy="250" r="6" fill="var(--good)"/>`,
 zones:[
   {label:"Hierarchical (classical) structure",   x:20,  y:6,   w:250, h:28, px:170, py:150},
   {label:"Flat (behavioural) structure",         x:380, y:6,   w:250, h:28, px:500, py:200},
   {label:"Chief executive / owner",              x:195, y:45,  w:150, h:30, px:180, py:61},
   {label:"Many layers of management",            x:4,   y:225, w:170, h:32, px:105, py:159},
   {label:"Narrow span of control",                x:4,   y:90,  w:170, h:32, px:100, py:110},
   {label:"Wide span of control",                  x:460, y:340, w:170, h:32, px:500, py:75},
   {label:"Team members collaborate directly",     x:380, y:290, w:220, h:30, px:500, py:250}
 ]},

{id:"dg-marketing-mix", title:"The marketing mix (4 Ps)",
 topic:"Business Management", sub:"The management process",
 note:"Businesses combine decisions about product, price, place and promotion to satisfy the needs of their target market.",
 art:`
  <circle cx="320" cy="200" r="150" fill="none" stroke="var(--line)" stroke-width="2"/>
  <circle cx="320" cy="200" r="55"  fill="rgba(120,170,255,.15)" stroke="var(--accent2)" stroke-width="2.5"/>
  <line x1="320" y1="50"  x2="320" y2="350" stroke="var(--line)" stroke-width="1.5"/>
  <line x1="170" y1="200" x2="470" y2="200" stroke="var(--line)" stroke-width="1.5"/>`,
 zones:[
   {label:"Target market", x:270, y:185, w:100, h:30},
   {label:"Product",       x:270, y:60,  w:100, h:32, px:320, py:125},
   {label:"Price",         x:430, y:185, w:100, h:32, px:395, py:200},
   {label:"Place",         x:270, y:310, w:100, h:32, px:320, py:275},
   {label:"Promotion",     x:110, y:185, w:100, h:32, px:245, py:200}
 ]},

{id:"dg-product-life-cycle", title:"The product life cycle",
 topic:"Business Management", sub:"The management process",
 note:"Sales typically rise through introduction and growth, level off at maturity, then fall in decline as a product is replaced by newer alternatives.",
 art:`
  <line x1="70" y1="330" x2="610" y2="330" stroke="var(--line)" stroke-width="2"/>
  <line x1="70" y1="330" x2="70" y2="40"  stroke="var(--line)" stroke-width="2"/>
  <path d="M85 322 C 120 318, 150 300, 180 260 C 230 190, 280 120, 340 100 C 400 90, 440 95, 480 115 C 540 150, 580 220, 605 300" fill="none" stroke="var(--accent2)" stroke-width="3"/>
  <circle cx="180" cy="260" r="5" fill="var(--gold)"/>
  <circle cx="340" cy="100" r="5" fill="var(--gold)"/>
  <circle cx="480" cy="115" r="5" fill="var(--gold)"/>`,
 zones:[
   {label:"Sales",        x:6,   y:150, w:90,  h:32, px:70,  py:170},
   {label:"Time",         x:520, y:344, w:90,  h:32, px:580, py:330},
   {label:"Introduction", x:40,  y:344, w:140, h:32, px:110, py:318},
   {label:"Growth",       x:150, y:40,  w:110, h:32, px:230, py:190},
   {label:"Maturity",     x:340, y:40,  w:110, h:32, px:400, py:95},
   {label:"Decline",      x:470, y:280, w:140, h:32, px:560, py:250}
 ]},

{id:"dg-planning-cycle", title:"The business planning process",
 topic:"Business Planning", sub:"The business planning process",
 note:"Planning is an ongoing cycle: businesses analyse their situation, set goals, organise resources, forecast outcomes, monitor performance and take corrective action before reviewing the situation again.",
 art:`
  <path d="M320 60  A140 140 0 0 1 441 130" fill="none" stroke="var(--ink2)" stroke-width="2" marker-end="url(#dgArrow)"/>
  <path d="M441 130 A140 140 0 0 1 441 270" fill="none" stroke="var(--ink2)" stroke-width="2" marker-end="url(#dgArrow)"/>
  <path d="M441 270 A140 140 0 0 1 320 340" fill="none" stroke="var(--ink2)" stroke-width="2" marker-end="url(#dgArrow)"/>
  <path d="M320 340 A140 140 0 0 1 199 270" fill="none" stroke="var(--ink2)" stroke-width="2" marker-end="url(#dgArrow)"/>
  <path d="M199 270 A140 140 0 0 1 199 130" fill="none" stroke="var(--ink2)" stroke-width="2" marker-end="url(#dgArrow)"/>
  <path d="M199 130 A140 140 0 0 1 320 60"  fill="none" stroke="var(--ink2)" stroke-width="2" marker-end="url(#dgArrow)"/>
  <circle cx="320" cy="60"  r="7" fill="var(--accent2)"/>
  <circle cx="441" cy="130" r="7" fill="var(--accent2)"/>
  <circle cx="441" cy="270" r="7" fill="var(--accent2)"/>
  <circle cx="320" cy="340" r="7" fill="var(--accent2)"/>
  <circle cx="199" cy="270" r="7" fill="var(--accent2)"/>
  <circle cx="199" cy="130" r="7" fill="var(--accent2)"/>`,
 zones:[
   {label:"Situational analysis",     x:245, y:4,   w:170, h:30, px:320, py:60},
   {label:"Vision / goals",           x:480, y:70,  w:150, h:30, px:441, py:130},
   {label:"Organising resources",     x:480, y:290, w:150, h:30, px:441, py:270},
   {label:"Forecasting",              x:245, y:356, w:150, h:30, px:320, py:340},
   {label:"Monitoring & evaluation",  x:10,  y:290, w:170, h:30, px:199, py:270},
   {label:"Corrective action",        x:10,  y:70,  w:170, h:30, px:199, py:130}
 ]},

{id:"dg-balance-sheet", title:"A basic balance sheet structure",
 topic:"Business Management", sub:"The management process",
 note:"The balance sheet shows the accounting equation Assets = Liabilities + Owner's Equity at a point in time, with current items expected to convert to cash or fall due within twelve months.",
 art:`
  <line x1="60"  y1="60"  x2="310" y2="60"  stroke="var(--line)" stroke-width="2.5"/>
  <line x1="310" y1="60"  x2="310" y2="340" stroke="var(--line)" stroke-width="2.5"/>
  <line x1="310" y1="340" x2="60"  y2="340" stroke="var(--line)" stroke-width="2.5"/>
  <line x1="60"  y1="340" x2="60"  y2="60"  stroke="var(--line)" stroke-width="2.5"/>
  <line x1="60"  y1="200" x2="310" y2="200" stroke="var(--line)" stroke-width="2"/>
  <line x1="380" y1="60"  x2="600" y2="60"  stroke="var(--line)" stroke-width="2.5"/>
  <line x1="600" y1="60"  x2="600" y2="200" stroke="var(--line)" stroke-width="2.5"/>
  <line x1="600" y1="200" x2="380" y2="200" stroke="var(--line)" stroke-width="2.5"/>
  <line x1="380" y1="200" x2="380" y2="60"  stroke="var(--line)" stroke-width="2.5"/>
  <line x1="380" y1="130" x2="600" y2="130" stroke="var(--line)" stroke-width="2"/>
  <line x1="380" y1="220" x2="600" y2="220" stroke="var(--line)" stroke-width="2.5"/>
  <line x1="600" y1="220" x2="600" y2="340" stroke="var(--line)" stroke-width="2.5"/>
  <line x1="600" y1="340" x2="380" y2="340" stroke="var(--line)" stroke-width="2.5"/>
  <line x1="380" y1="340" x2="380" y2="220" stroke="var(--line)" stroke-width="2.5"/>
  <text x="335" y="208" class="dgbig" text-anchor="middle">=</text>
  <text x="490" y="215" class="dgbig" text-anchor="middle">+</text>`,
 zones:[
   {label:"Assets",                  x:100, y:25,  w:170, h:28, px:185, py:60},
   {label:"Current assets",          x:90,  y:115, w:190, h:32},
   {label:"Non-current assets",      x:80,  y:255, w:210, h:32},
   {label:"Liabilities",             x:400, y:25,  w:180, h:28, px:490, py:60},
   {label:"Current liabilities",     x:400, y:80,  w:180, h:32},
   {label:"Non-current liabilities", x:395, y:150, w:190, h:32},
   {label:"Owner's equity",          x:410, y:270, w:170, h:32}
 ]},

{id:"dg-business-structures", title:"Types of business structure",
 topic:"Nature of Business", sub:"Types of businesses",
 note:"Sole traders and partners have unlimited liability for business debts, while a company is a separate legal entity whose shareholders enjoy limited liability.",
 art:`
  <line x1="220" y1="60" x2="220" y2="340" stroke="var(--line)" stroke-width="1.5" stroke-dasharray="4 3"/>
  <line x1="400" y1="60" x2="400" y2="340" stroke="var(--line)" stroke-width="1.5" stroke-dasharray="4 3"/>
  <circle cx="140" cy="120" r="10" fill="var(--accent2)"/>
  <line x1="140" y1="130" x2="140" y2="246" stroke="var(--bad)" stroke-width="2.5"/>
  <circle cx="140" cy="260" r="14" fill="none" stroke="var(--line)" stroke-width="2"/>
  <circle cx="280" cy="110" r="9" fill="var(--accent2)"/>
  <circle cx="340" cy="110" r="9" fill="var(--accent2)"/>
  <line x1="280" y1="110" x2="340" y2="110" stroke="var(--ink2)" stroke-width="1.5" stroke-dasharray="3 3"/>
  <line x1="280" y1="119" x2="310" y2="246" stroke="var(--bad)" stroke-width="2.5"/>
  <line x1="340" y1="119" x2="310" y2="246" stroke="var(--bad)" stroke-width="2.5"/>
  <circle cx="310" cy="260" r="14" fill="none" stroke="var(--line)" stroke-width="2"/>
  <circle cx="440" cy="105" r="8" fill="var(--accent2)"/>
  <circle cx="480" cy="95"  r="8" fill="var(--accent2)"/>
  <circle cx="520" cy="105" r="8" fill="var(--accent2)"/>
  <line x1="440" y1="113" x2="440" y2="170" stroke="var(--ink2)" stroke-width="2"/>
  <line x1="480" y1="103" x2="480" y2="170" stroke="var(--ink2)" stroke-width="2"/>
  <line x1="520" y1="113" x2="520" y2="170" stroke="var(--ink2)" stroke-width="2"/>
  <line x1="410" y1="170" x2="570" y2="170" stroke="var(--gold)" stroke-width="2.5" stroke-dasharray="6 4"/>
  <line x1="480" y1="170" x2="480" y2="246" stroke="var(--ink2)" stroke-width="2" stroke-dasharray="4 3"/>
  <circle cx="480" cy="260" r="16" fill="none" stroke="var(--line)" stroke-width="2"/>`,
 zones:[
   {label:"Sole trader",                       x:70,  y:15,  w:140, h:28, px:140, py:95},
   {label:"Partnership",                       x:245, y:15,  w:140, h:28, px:310, py:95},
   {label:"Company",                           x:415, y:15,  w:140, h:28, px:480, py:90},
   {label:"Unlimited liability",               x:20,  y:270, w:170, h:30, px:140, py:190},
   {label:"Liability shared between partners", x:210, y:270, w:190, h:30, px:310, py:190},
   {label:"Limited liability",                 x:410, y:270, w:170, h:30, px:480, py:210},
   {label:"Separate legal entity",             x:410, y:180, w:170, h:28, px:480, py:170}
 ]},

{id:"dg-sme-establishment", title:"Establishment options for an SME",
 topic:"Business Planning", sub:"Influences in establishing an SME",
 note:"An entrepreneur can start an SME from scratch, buy an existing business, or purchase a franchise — each option offers a different balance of risk, control and support.",
 art:`
  <circle cx="320" cy="80" r="10" fill="var(--accent2)"/>
  <line x1="320" y1="90" x2="150" y2="230" stroke="var(--line)" stroke-width="2"/>
  <line x1="320" y1="90" x2="320" y2="230" stroke="var(--line)" stroke-width="2"/>
  <line x1="320" y1="90" x2="490" y2="230" stroke="var(--line)" stroke-width="2"/>
  <circle cx="150" cy="240" r="9" fill="var(--good)"/>
  <circle cx="320" cy="240" r="9" fill="var(--gold)"/>
  <circle cx="490" cy="240" r="9" fill="var(--accent2)"/>`,
 zones:[
   {label:"Starting an SME",                 x:220, y:10,  w:200, h:30, px:320, py:80},
   {label:"New business",                    x:40,  y:290, w:170, h:32, px:150, py:240},
   {label:"Existing business",               x:235, y:290, w:170, h:32, px:320, py:240},
   {label:"Franchise",                       x:420, y:290, w:170, h:32, px:490, py:240},
   {label:"Higher control, higher risk",     x:10,  y:340, w:200, h:32, px:150, py:249},
   {label:"Established brand & support",     x:420, y:340, w:200, h:32, px:490, py:249}
 ]},

{id:"dg-quality-spectrum", title:"The quality management spectrum",
 topic:"Business Management", sub:"The management process",
 note:"Quality control inspects finished output, quality assurance builds prevention into the production process, and total quality management embeds a whole-of-business culture of continuous improvement.",
 art:`
  <circle cx="320" cy="200" r="160" fill="none" stroke="var(--good)"   stroke-width="2.5"/>
  <circle cx="320" cy="200" r="105" fill="none" stroke="var(--accent2)" stroke-width="2.5"/>
  <circle cx="320" cy="200" r="55"  fill="none" stroke="var(--gold)"   stroke-width="2.5"/>`,
 zones:[
   {label:"Quality control",                              x:270, y:185, w:100, h:30},
   {label:"Quality assurance",                             x:270, y:105, w:100, h:28},
   {label:"Total quality management",                      x:250, y:48,  w:140, h:28},
   {label:"Inspects finished products only",                x:10,  y:190, w:200, h:30, px:300, py:200},
   {label:"Prevents defects before they occur",             x:10,  y:320, w:230, h:30, px:250, py:255},
   {label:"Whole-organisation continuous improvement culture", x:420, y:340, w:210, h:30, px:430, py:310}
 ]},

{id:"dg-change-management", title:"Stages of managing change",
 topic:"Business Management", sub:"Management and change",
 note:"Managing change effectively involves identifying the need for change, setting realistic goals, addressing resistance, implementing the change — often using business information systems or consultants — and reviewing the outcome.",
 art:`
  <line x1="30"  y1="60"  x2="190" y2="60"  stroke="var(--line)" stroke-width="2"/>
  <line x1="190" y1="60"  x2="190" y2="110" stroke="var(--line)" stroke-width="2"/>
  <line x1="190" y1="110" x2="30"  y2="110" stroke="var(--line)" stroke-width="2"/>
  <line x1="30"  y1="110" x2="30"  y2="60"  stroke="var(--line)" stroke-width="2"/>
  <line x1="240" y1="60"  x2="400" y2="60"  stroke="var(--line)" stroke-width="2"/>
  <line x1="400" y1="60"  x2="400" y2="110" stroke="var(--line)" stroke-width="2"/>
  <line x1="400" y1="110" x2="240" y2="110" stroke="var(--line)" stroke-width="2"/>
  <line x1="240" y1="110" x2="240" y2="60"  stroke="var(--line)" stroke-width="2"/>
  <line x1="450" y1="60"  x2="610" y2="60"  stroke="var(--line)" stroke-width="2"/>
  <line x1="610" y1="60"  x2="610" y2="110" stroke="var(--line)" stroke-width="2"/>
  <line x1="610" y1="110" x2="450" y2="110" stroke="var(--line)" stroke-width="2"/>
  <line x1="450" y1="110" x2="450" y2="60"  stroke="var(--line)" stroke-width="2"/>
  <line x1="450" y1="260" x2="610" y2="260" stroke="var(--line)" stroke-width="2"/>
  <line x1="610" y1="260" x2="610" y2="310" stroke="var(--line)" stroke-width="2"/>
  <line x1="610" y1="310" x2="450" y2="310" stroke="var(--line)" stroke-width="2"/>
  <line x1="450" y1="310" x2="450" y2="260" stroke="var(--line)" stroke-width="2"/>
  <line x1="240" y1="260" x2="400" y2="260" stroke="var(--line)" stroke-width="2"/>
  <line x1="400" y1="260" x2="400" y2="310" stroke="var(--line)" stroke-width="2"/>
  <line x1="400" y1="310" x2="240" y2="310" stroke="var(--line)" stroke-width="2"/>
  <line x1="240" y1="310" x2="240" y2="260" stroke="var(--line)" stroke-width="2"/>
  <line x1="190" y1="85" x2="240" y2="85" stroke="var(--ink2)" stroke-width="2" marker-end="url(#dgArrow)"/>
  <line x1="400" y1="85" x2="450" y2="85" stroke="var(--ink2)" stroke-width="2" marker-end="url(#dgArrow)"/>
  <line x1="530" y1="110" x2="530" y2="260" stroke="var(--ink2)" stroke-width="2" marker-end="url(#dgArrow)"/>
  <line x1="450" y1="285" x2="400" y2="285" stroke="var(--ink2)" stroke-width="2" marker-end="url(#dgArrow)"/>
  <path d="M320 310 C 300 385, 60 385, 60 115" fill="none" stroke="var(--ink2)" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#dgArrow)"/>`,
 zones:[
   {label:"Identify need for change",                     x:30,  y:60,  w:160, h:50},
   {label:"Set achievable goals",                          x:240, y:60,  w:160, h:50},
   {label:"Address resistance to change",                  x:450, y:60,  w:160, h:50},
   {label:"Implement the change",                          x:450, y:260, w:160, h:50},
   {label:"Review",                                        x:240, y:260, w:160, h:50},
   {label:"Business information systems & consultants",    x:460, y:340, w:160, h:30, px:530, py:285},
   {label:"Monitoring & feedback",                         x:150, y:340, w:200, h:30, px:180, py:372}
 ]},

];
