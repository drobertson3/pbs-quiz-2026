// ====================================================================
// Preliminary Business Studies — Section I multiple-choice questions
// Screen-clipped from real NSW Independent Trial HSC-style Preliminary
// exams (2014, 2017, 2018, 2020, 2024). Each question is an image —
// options are part of the scanned image, not retyped.
//
//   id    unique question id
//   year  exam year
//   n     question number in that year's paper
//   topic top-level syllabus topic
//   subs  syllabus sub-topic(s) this question draws on
//   img   filename in this folder
//   w,h   image pixel dimensions (for layout)
//   ans   correct option letter(s), e.g. ["B"]
//   expl  short explanation shown after answering
// ====================================================================
const QUESTIONS = [
  {
    "id": "2014-Q1",
    "year": 2014,
    "n": 1,
    "topic": "Nature of Business",
    "subs": [
      "Influences in the business environment"
    ],
    "img": "2014_q01.png",
    "w": 1001,
    "h": 247,
    "ans": [
      "B"
    ],
    "expl": "Technology originates outside the business (external), whereas management, staff skills and business culture are internal factors the business controls itself."
  },
  {
    "id": "2014-Q2",
    "year": 2014,
    "n": 2,
    "topic": "Nature of Business",
    "subs": [
      "Influences in the business environment"
    ],
    "img": "2014_q02.png",
    "w": 942,
    "h": 246,
    "ans": [
      "C"
    ],
    "expl": "Local councils administer zoning laws that control how land in their area can be used, as part of the legal/government influences on a business."
  },
  {
    "id": "2014-Q3",
    "year": 2014,
    "n": 3,
    "topic": "Business Management",
    "subs": [
      "The management process"
    ],
    "img": "2014_q03.png",
    "w": 1131,
    "h": 276,
    "ans": [
      "A"
    ],
    "expl": "On-costs are the additional employment expenses (e.g. superannuation, sick leave, workers' compensation) a business pays on top of wages when staffing."
  },
  {
    "id": "2014-Q4",
    "year": 2014,
    "n": 4,
    "topic": "Nature of Business",
    "subs": [
      "Role of business"
    ],
    "img": "2014_q04.png",
    "w": 1019,
    "h": 337,
    "ans": [
      "B"
    ],
    "expl": "Free samples are a short-term incentive to boost sales, which is the definition of a sales promotion rather than advertising or personal selling."
  },
  {
    "id": "2014-Q5",
    "year": 2014,
    "n": 5,
    "topic": "Nature of Business",
    "subs": [
      "Role of business"
    ],
    "img": "2014_q05.png",
    "w": 971,
    "h": 307,
    "ans": [
      "D"
    ],
    "expl": "Telecommunication is an information-based service, which is classified within the quaternary sector of industry."
  },
  {
    "id": "2014-Q6",
    "year": 2014,
    "n": 6,
    "topic": "Nature of Business",
    "subs": [
      "Types of businesses"
    ],
    "img": "2014_q06.png",
    "w": 1029,
    "h": 252,
    "ans": [
      "A"
    ],
    "expl": "Companies can raise capital by issuing shares and are generally seen as more stable, making it easier to attract finance than a sole trader or partnership."
  },
  {
    "id": "2014-Q7",
    "year": 2014,
    "n": 7,
    "topic": "Business Planning",
    "subs": [
      "The business planning process"
    ],
    "img": "2014_q07.png",
    "w": 971,
    "h": 313,
    "ans": [
      "C"
    ],
    "expl": "A long-term, broad goal set many years in advance, such as a market share target for 2025, is a strategic plan."
  },
  {
    "id": "2014-Q8",
    "year": 2014,
    "n": 8,
    "topic": "Nature of Business",
    "subs": [
      "Influences in the business environment"
    ],
    "img": "2014_q08.png",
    "w": 966,
    "h": 283,
    "ans": [
      "D"
    ],
    "expl": "Pay-as-you-go (PAYG) withholding tax is collected by the Federal government (the ATO) based on the wages paid to employees, unlike payroll tax which is a state tax."
  },
  {
    "id": "2014-Q9",
    "year": 2014,
    "n": 9,
    "topic": "Nature of Business",
    "subs": [
      "Influences in the business environment"
    ],
    "img": "2014_q09.png",
    "w": 1002,
    "h": 277,
    "ans": [
      "C"
    ],
    "expl": "Owners want to maximise profit while customers want lower prices, so using profits to reduce prices directly eases this conflict between owners and customers."
  },
  {
    "id": "2014-Q10",
    "year": 2014,
    "n": 10,
    "topic": "Nature of Business",
    "subs": [
      "Influences in the business environment"
    ],
    "img": "2014_q10.png",
    "w": 1164,
    "h": 336,
    "ans": [
      "A"
    ],
    "expl": "Family-friendly, flexible work arrangements respond to changing social attitudes and expectations about work-life balance, making this a social influence."
  },
  {
    "id": "2014-Q11",
    "year": 2014,
    "n": 11,
    "topic": "Nature of Business",
    "subs": [
      "Influences in the business environment"
    ],
    "img": "2014_q11.png",
    "w": 846,
    "h": 247,
    "ans": [
      "B"
    ],
    "expl": "Employee productivity is a factor within the business itself (internal), so dismissing unproductive staff is a response to an internal influence, unlike the other options which are responses to external forces."
  },
  {
    "id": "2014-Q12",
    "year": 2014,
    "n": 12,
    "topic": "Business Planning",
    "subs": [
      "The business planning process"
    ],
    "img": "2014_q12.png",
    "w": 1002,
    "h": 289,
    "ans": [
      "D"
    ],
    "expl": "Break-even analysis calculates the exact sales volume needed for total revenue to equal total costs, showing what is required before a profit is made."
  },
  {
    "id": "2014-Q13",
    "year": 2014,
    "n": 13,
    "topic": "Nature of Business",
    "subs": [
      "Business growth and decline"
    ],
    "img": "2014_q13.png",
    "w": 642,
    "h": 313,
    "ans": [
      "A"
    ],
    "expl": "A merger combines two businesses to quickly increase size, market share and resources, which is a strategy aimed at maximising growth."
  },
  {
    "id": "2014-Q14",
    "year": 2014,
    "n": 14,
    "topic": "Nature of Business",
    "subs": [
      "Business growth and decline"
    ],
    "img": "2014_q14.png",
    "w": 936,
    "h": 280,
    "ans": [
      "B"
    ],
    "expl": "In the maturity stage, sales reach their highest point as the market becomes saturated, before levelling off or declining afterwards."
  },
  {
    "id": "2014-Q15",
    "year": 2014,
    "n": 15,
    "topic": "Business Management",
    "subs": [
      "Nature of management"
    ],
    "img": "2014_q15.png",
    "w": 1021,
    "h": 252,
    "ans": [
      "C"
    ],
    "expl": "Mintzberg's interpersonal management role involves direct interaction with people, such as speaking to staff, whereas the other options are informational or decisional actions."
  },
  {
    "id": "2014-Q16",
    "year": 2014,
    "n": 16,
    "topic": "Business Management",
    "subs": [
      "Management approaches"
    ],
    "img": "2014_q16.png",
    "w": 1120,
    "h": 277,
    "ans": [
      "D"
    ],
    "expl": "The behavioural approach to management focuses on employee involvement and empowerment, favouring flat structures and democratic leadership over the rigid hierarchy of classical-scientific management."
  },
  {
    "id": "2014-Q17",
    "year": 2014,
    "n": 17,
    "topic": "Business Planning",
    "subs": [
      "The business planning process"
    ],
    "img": "2014_q17.png",
    "w": 1019,
    "h": 607,
    "ans": [
      "A"
    ],
    "expl": "Owner's equity = total assets (Cash $25 000 + Inventory $60 000 + Accounts receivable $35 000 + Furniture $100 000 = $220 000) minus total liabilities (Bank loan $40 000 + Overdraft $15 000 + Accounts payable $5 000 + Mortgage $100 000 = $160 000), giving $60 000."
  },
  {
    "id": "2014-Q18",
    "year": 2014,
    "n": 18,
    "topic": "Business Planning",
    "subs": [
      "The business planning process"
    ],
    "img": "2014_q18.png",
    "w": 964,
    "h": 253,
    "ans": [
      "C"
    ],
    "expl": "A SWOT analysis and market analysis are tools used to assess a business's current internal and external position, which is the situational analysis stage of planning."
  },
  {
    "id": "2014-Q19",
    "year": 2014,
    "n": 19,
    "topic": "Nature of Business",
    "subs": [
      "Business growth and decline"
    ],
    "img": "2014_q19.png",
    "w": 1040,
    "h": 257,
    "ans": [
      "B"
    ],
    "expl": "A strategic alliance allows businesses to share resources and combine efforts, which typically reduces expenses and delivers cost savings for a growing business."
  },
  {
    "id": "2014-Q20",
    "year": 2014,
    "n": 20,
    "topic": "Business Planning",
    "subs": [
      "The business planning process"
    ],
    "img": "2014_q20.png",
    "w": 905,
    "h": 252,
    "ans": [
      "D"
    ],
    "expl": "An efficient warehousing system moves and dispatches stock quickly, so a short lead time is the true indicator of efficiency rather than warehouse size, location or excess stock."
  },
  {
    "id": "2017-Q1",
    "year": 2017,
    "n": 1,
    "topic": "Nature of Business",
    "subs": [
      "Types of businesses"
    ],
    "img": "2017_q01.png",
    "w": 947,
    "h": 255,
    "ans": [
      "D"
    ],
    "expl": "Childcare and house cleaning are domestic/caring services classified as quinary industry, distinct from primary (extraction), secondary (manufacturing) and quaternary (information) industries."
  },
  {
    "id": "2017-Q2",
    "year": 2017,
    "n": 2,
    "topic": "Business Management",
    "subs": [
      "The management process"
    ],
    "img": "2017_q02.png",
    "w": 753,
    "h": 250,
    "ans": [
      "D"
    ],
    "expl": "Casual employees do not receive paid leave entitlements or guaranteed regular hours, but like all employees they are entitled to fair pay (including casual loading) and safe working conditions under workplace law."
  },
  {
    "id": "2017-Q3",
    "year": 2017,
    "n": 3,
    "topic": "Business Planning",
    "subs": [
      "Influences in establishing an SME"
    ],
    "img": "2017_q03.png",
    "w": 965,
    "h": 253,
    "ans": [
      "C"
    ],
    "expl": "Sale of an asset generates funds from within the business itself, whereas overdrafts, mortgages and leasing are all external sources of finance borrowed from outside lenders."
  },
  {
    "id": "2017-Q4",
    "year": 2017,
    "n": 4,
    "topic": "Business Planning",
    "subs": [
      "Influences in establishing an SME"
    ],
    "img": "2017_q04.png",
    "w": 1018,
    "h": 254,
    "ans": [
      "A"
    ],
    "expl": "Local government (councils) is responsible for local planning matters such as building regulations, trading hours and land zoning within their municipal area."
  },
  {
    "id": "2017-Q5",
    "year": 2017,
    "n": 5,
    "topic": "Nature of Business",
    "subs": [
      "Role of business"
    ],
    "img": "2017_q05.png",
    "w": 762,
    "h": 259,
    "ans": [
      "A"
    ],
    "expl": "Dividends are the portion of company profits distributed to shareholders as a return on their investment."
  },
  {
    "id": "2017-Q6",
    "year": 2017,
    "n": 6,
    "topic": "Nature of Business",
    "subs": [
      "Types of businesses"
    ],
    "img": "2017_q06.png",
    "w": 891,
    "h": 242,
    "ans": [
      "B"
    ],
    "expl": "Only public companies can issue shares to the general public and have those shares listed and traded on the Australian Securities Exchange (ASX)."
  },
  {
    "id": "2017-Q7",
    "year": 2017,
    "n": 7,
    "topic": "Business Planning",
    "subs": [
      "Influences in establishing an SME"
    ],
    "img": "2017_q07.png",
    "w": 1035,
    "h": 328,
    "ans": [
      "B"
    ],
    "expl": "Publicity is free, unpaid media coverage of a business, unlike advertising or sales promotion which the business pays for directly."
  },
  {
    "id": "2017-Q8",
    "year": 2017,
    "n": 8,
    "topic": "Nature of Business",
    "subs": [
      "Influences in the business environment"
    ],
    "img": "2017_q08.png",
    "w": 878,
    "h": 298,
    "ans": [
      "D"
    ],
    "expl": "A sole trader is a one-person business structure with no separate legal identity, meaning the owner has unlimited personal liability for all business debts."
  },
  {
    "id": "2017-Q9",
    "year": 2017,
    "n": 9,
    "topic": "Business Planning",
    "subs": [
      "Influences in establishing an SME"
    ],
    "img": "2017_q09.png",
    "w": 637,
    "h": 243,
    "ans": [
      "A"
    ],
    "expl": "Payroll tax is a state-based tax charged to employers whose total wages exceed a threshold, while company tax, PAYG and fringe benefits tax are all levied by the federal government."
  },
  {
    "id": "2017-Q10",
    "year": 2017,
    "n": 10,
    "topic": "Business Management",
    "subs": [
      "Management approaches"
    ],
    "img": "2017_q10.png",
    "w": 948,
    "h": 282,
    "ans": [
      "B"
    ],
    "expl": "The classical management approach is based on formal hierarchies, clear chains of command and autocratic, top-down decision making."
  },
  {
    "id": "2017-Q11",
    "year": 2017,
    "n": 11,
    "topic": "Business Management",
    "subs": [
      "The management process"
    ],
    "img": "2017_q11.png",
    "w": 967,
    "h": 281,
    "ans": [
      "A"
    ],
    "expl": "Goodwill is an intangible asset representing the value of a business's reputation, brand recognition and customer relationships, unlike physical assets such as inventory."
  },
  {
    "id": "2017-Q12",
    "year": 2017,
    "n": 12,
    "topic": "Nature of Business",
    "subs": [
      "Business growth and decline"
    ],
    "img": "2017_q12.png",
    "w": 1029,
    "h": 340,
    "ans": [
      "C"
    ],
    "expl": "Receivership involves an independent receiver being appointed to manage a struggling company's finances and attempt to recover debts, without necessarily selling off (liquidating) its assets."
  },
  {
    "id": "2017-Q13",
    "year": 2017,
    "n": 13,
    "topic": "Business Management",
    "subs": [
      "The management process"
    ],
    "img": "2017_q13.png",
    "w": 1000,
    "h": 312,
    "ans": [
      "B"
    ],
    "expl": "Age and gender are demographic variables, so targeting a market by these characteristics is demographic segmentation."
  },
  {
    "id": "2017-Q14",
    "year": 2017,
    "n": 14,
    "topic": "Business Management",
    "subs": [
      "The management process"
    ],
    "img": "2017_q14.png",
    "w": 786,
    "h": 243,
    "ans": [
      "C"
    ],
    "expl": "Market price (market-based pricing) is set by the interaction of supply and demand in the marketplace, rather than by costs, competitors' prices, or a skimming strategy."
  },
  {
    "id": "2017-Q15",
    "year": 2017,
    "n": 15,
    "topic": "Business Planning",
    "subs": [
      "The business planning process"
    ],
    "img": "2017_q15.png",
    "w": 823,
    "h": 244,
    "ans": [
      "A"
    ],
    "expl": "The break-even point is defined as the point where total revenue exactly equals total costs, so the business makes neither a profit nor a loss."
  },
  {
    "id": "2017-Q16",
    "year": 2017,
    "n": 16,
    "topic": "Business Management",
    "subs": [
      "The management process"
    ],
    "img": "2017_q16.png",
    "w": 1016,
    "h": 330,
    "ans": [
      "B"
    ],
    "expl": "Critical path analysis sequences interdependent project tasks to identify the shortest possible time in which a project can be completed, unlike a Gantt chart which simply displays a timeline visually."
  },
  {
    "id": "2017-Q17",
    "year": 2017,
    "n": 17,
    "topic": "Business Management",
    "subs": [
      "The management process"
    ],
    "img": "2017_q17.png",
    "w": 800,
    "h": 632,
    "ans": [
      "B"
    ],
    "expl": "Cost of goods sold = Opening stock + Purchases − Closing stock = $30 000 + $5 000 − $15 000 = $20 000."
  },
  {
    "id": "2017-Q18",
    "year": 2017,
    "n": 18,
    "topic": "Business Management",
    "subs": [
      "The management process"
    ],
    "img": "2017_q18.png",
    "w": 800,
    "h": 596,
    "ans": [
      "C"
    ],
    "expl": "Gross profit = Sales − Cost of goods sold = $100 000 − $20 000 = $80 000."
  },
  {
    "id": "2017-Q19",
    "year": 2017,
    "n": 19,
    "topic": "Nature of Business",
    "subs": [
      "Influences in the business environment"
    ],
    "img": "2017_q19.png",
    "w": 1005,
    "h": 367,
    "ans": [
      "D"
    ],
    "expl": "Increased competition typically forces businesses to lower prices and offer a greater variety of products to attract and retain customers."
  },
  {
    "id": "2017-Q20",
    "year": 2017,
    "n": 20,
    "topic": "Nature of Business",
    "subs": [
      "Influences in the business environment"
    ],
    "img": "2017_q20.png",
    "w": 821,
    "h": 300,
    "ans": [
      "D"
    ],
    "expl": "The ACCC enforces the Australian Consumer Law, including consumer guarantee and warranty rights, and can assist consumers to obtain refunds for faulty products."
  },
  {
    "id": "2018-Q1",
    "year": 2018,
    "n": 1,
    "topic": "Nature of Business",
    "subs": [
      "Types of businesses"
    ],
    "img": "2018_q01.png",
    "w": 810,
    "h": 270,
    "ans": [
      "A"
    ],
    "expl": "Floating a company means listing it on the stock exchange (an initial public offering) so it can raise equity capital by selling shares to the public."
  },
  {
    "id": "2018-Q2",
    "year": 2018,
    "n": 2,
    "topic": "Business Management",
    "subs": [
      "Nature of management"
    ],
    "img": "2018_q02.png",
    "w": 1077,
    "h": 357,
    "ans": [
      "C"
    ],
    "expl": "Interpersonal skills refer to the ability to communicate and work effectively with other people, matching the supervisor role's requirement for strong communication and teamwork."
  },
  {
    "id": "2018-Q3",
    "year": 2018,
    "n": 3,
    "topic": "Business Planning",
    "subs": [
      "The business planning process"
    ],
    "img": "2018_q03.png",
    "w": 822,
    "h": 239,
    "ans": [
      "B"
    ],
    "expl": "E-marketing specifically refers to using online/internet channels to promote and advertise products, which is distinct from e-commerce (buying and selling online)."
  },
  {
    "id": "2018-Q4",
    "year": 2018,
    "n": 4,
    "topic": "Business Planning",
    "subs": [
      "Critical issues in business success and failure"
    ],
    "img": "2018_q04.png",
    "w": 810,
    "h": 341,
    "ans": [
      "B"
    ],
    "expl": "A business plan sets out a business's goals and strategies, helping owners and managers stay focused on achieving their objectives; it is not a legal requirement and does not guarantee success."
  },
  {
    "id": "2018-Q5",
    "year": 2018,
    "n": 5,
    "topic": "Nature of Business",
    "subs": [
      "Types of businesses"
    ],
    "img": "2018_q05.png",
    "w": 750,
    "h": 242,
    "ans": [
      "A"
    ],
    "expl": "A sole trader is not a separate legal entity from its owner, so the owner is personally responsible for all business debts, meaning unlimited liability."
  },
  {
    "id": "2018-Q6",
    "year": 2018,
    "n": 6,
    "topic": "Nature of Business",
    "subs": [
      "Types of businesses"
    ],
    "img": "2018_q06.png",
    "w": 962,
    "h": 356,
    "ans": [
      "D"
    ],
    "expl": "Catering is a personal/domestic service industry, which under the five-sector model of industry classification is categorised as quinary, covering services provided directly to individuals and households."
  },
  {
    "id": "2018-Q7",
    "year": 2018,
    "n": 7,
    "topic": "Business Management",
    "subs": [
      "Achieving business goals"
    ],
    "img": "2018_q07.png",
    "w": 774,
    "h": 264,
    "ans": [
      "D"
    ],
    "expl": "Being seen by the community as environmentally friendly reflects a business's social responsibility to the wider community, making it a social goal, unlike market share or shareholder returns which are growth/financial goals."
  },
  {
    "id": "2018-Q8",
    "year": 2018,
    "n": 8,
    "topic": "Business Planning",
    "subs": [
      "Influences in establishing an SME"
    ],
    "img": "2018_q08.png",
    "w": 839,
    "h": 340,
    "ans": [
      "A"
    ],
    "expl": "Starting a business from scratch means there is no established reputation or customer base to pay for, so the entrepreneur avoids paying for goodwill, unlike buying an existing business."
  },
  {
    "id": "2018-Q9",
    "year": 2018,
    "n": 9,
    "topic": "Business Management",
    "subs": [
      "Management and change"
    ],
    "img": "2018_q09.png",
    "w": 979,
    "h": 270,
    "ans": [
      "C"
    ],
    "expl": "Modern Australian businesses have increasingly moved toward flatter organisational structures with wider spans of control, and outsource non-core functions to remain flexible and cost-effective."
  },
  {
    "id": "2018-Q10",
    "year": 2018,
    "n": 10,
    "topic": "Nature of Business",
    "subs": [
      "Influences in the business environment"
    ],
    "img": "2018_q10.png",
    "w": 1039,
    "h": 355,
    "ans": [
      "D"
    ],
    "expl": "Family friendly policies respond to changing community attitudes and expectations about work-life balance, which is a social influence on business."
  },
  {
    "id": "2018-Q11",
    "year": 2018,
    "n": 11,
    "topic": "Nature of Business",
    "subs": [
      "Influences in the business environment"
    ],
    "img": "2018_q11.png",
    "w": 1025,
    "h": 268,
    "ans": [
      "D"
    ],
    "expl": "Monopolistic competition is characterised by many buyers and sellers offering differentiated products, with firms competing on branding, packaging and advertising rather than price alone."
  },
  {
    "id": "2018-Q12",
    "year": 2018,
    "n": 12,
    "topic": "Business Management",
    "subs": [
      "The management process"
    ],
    "img": "2018_q12.png",
    "w": 965,
    "h": 328,
    "ans": [
      "B"
    ],
    "expl": "Personally inspecting products at various points to check they meet standards before sale is quality control, which focuses on detecting and removing faulty output, whereas quality assurance manages the whole process to prevent defects."
  },
  {
    "id": "2018-Q13",
    "year": 2018,
    "n": 13,
    "topic": "Business Management",
    "subs": [
      "The management process"
    ],
    "img": "2018_q13.png",
    "w": 739,
    "h": 300,
    "ans": [
      "D"
    ],
    "expl": "Productivity is measured by how much output an employee generates within a given period of time, which is what this option describes."
  },
  {
    "id": "2018-Q14",
    "year": 2018,
    "n": 14,
    "topic": "Business Management",
    "subs": [
      "The management process"
    ],
    "img": "2018_q14.png",
    "w": 1033,
    "h": 356,
    "ans": [
      "D"
    ],
    "expl": "These minimum leave entitlements are guaranteed to all Australian employees under the National Employment Standards set out in the Fair Work Act 2009."
  },
  {
    "id": "2018-Q15",
    "year": 2018,
    "n": 15,
    "topic": "Business Planning",
    "subs": [
      "Influences in establishing an SME"
    ],
    "img": "2018_q15.png",
    "w": 931,
    "h": 240,
    "ans": [
      "D"
    ],
    "expl": "A key advantage of franchising is that the franchisor provides training, systems and ongoing support, meaning the franchisee does not need prior business experience to operate successfully."
  },
  {
    "id": "2018-Q16",
    "year": 2018,
    "n": 16,
    "topic": "Business Planning",
    "subs": [
      "Influences in establishing an SME"
    ],
    "img": "2018_q16.png",
    "w": 890,
    "h": 243,
    "ans": [
      "A"
    ],
    "expl": "Company tax is levied by the Federal government on business profits, whereas land tax, payroll tax and stamp duty are state government taxes."
  },
  {
    "id": "2018-Q17",
    "year": 2018,
    "n": 17,
    "topic": "Business Management",
    "subs": [
      "The management process"
    ],
    "img": "2018_q17.png",
    "w": 939,
    "h": 328,
    "ans": [
      "C"
    ],
    "expl": "Organising involves arranging tasks, allocating resources and delegating responsibilities to employees so that planned activities can be carried out."
  },
  {
    "id": "2018-Q18",
    "year": 2018,
    "n": 18,
    "topic": "Business Management",
    "subs": [
      "The management process"
    ],
    "img": "2018_q18.png",
    "w": 966,
    "h": 239,
    "ans": [
      "A"
    ],
    "expl": "The product element of the marketing mix covers decisions about the quality, features, packaging and design of the good or service offered."
  },
  {
    "id": "2018-Q19",
    "year": 2018,
    "n": 19,
    "topic": "Business Management",
    "subs": [
      "Achieving business goals"
    ],
    "img": "2018_q19.png",
    "w": 1030,
    "h": 276,
    "ans": [
      "C"
    ],
    "expl": "Strategic goals are the broad, long-term goals set by senior management that guide the direction of the entire organisation, unlike tactical and operational objectives which are shorter-term and department-level."
  },
  {
    "id": "2018-Q20",
    "year": 2018,
    "n": 20,
    "topic": "Nature of Business",
    "subs": [
      "Business growth and decline"
    ],
    "img": "2018_q20.png",
    "w": 993,
    "h": 331,
    "ans": [
      "B"
    ],
    "expl": "When a court orders a company to be wound up and a liquidator is appointed to take control and sell its assets, this is involuntary (compulsory) liquidation, since it is initiated by an external party such as a creditor rather than the company itself."
  },
  {
    "id": "2020-Q1",
    "year": 2020,
    "n": 1,
    "topic": "Nature of Business",
    "subs": [
      "Role of business"
    ],
    "img": "2020_q01.png",
    "w": 1077,
    "h": 240,
    "ans": [
      "C"
    ],
    "expl": "Health is a service, so it belongs to the tertiary (service-providing) sector of industry."
  },
  {
    "id": "2020-Q2",
    "year": 2020,
    "n": 2,
    "topic": "Nature of Business",
    "subs": [
      "Influences in the business environment"
    ],
    "img": "2020_q02.png",
    "w": 1077,
    "h": 240,
    "ans": [
      "D"
    ],
    "expl": "Trade unions exist to represent employees and negotiate for better working conditions and pay rates."
  },
  {
    "id": "2020-Q3",
    "year": 2020,
    "n": 3,
    "topic": "Business Management",
    "subs": [
      "The management process"
    ],
    "img": "2020_q03.png",
    "w": 1077,
    "h": 300,
    "ans": [
      "B"
    ],
    "expl": "Paying an external business to perform a function such as making packaging is the definition of outsourcing."
  },
  {
    "id": "2020-Q4",
    "year": 2020,
    "n": 4,
    "topic": "Nature of Business",
    "subs": [
      "Types of businesses"
    ],
    "img": "2020_q04.png",
    "w": 1077,
    "h": 240,
    "ans": [
      "D"
    ],
    "expl": "The \"Pty Ltd\" designation identifies Futon Furniture as a private company, whereas Afterpay Ltd is a public company listed on the ASX and Service NSW is a government agency."
  },
  {
    "id": "2020-Q5",
    "year": 2020,
    "n": 5,
    "topic": "Nature of Business",
    "subs": [
      "Influences in the business environment"
    ],
    "img": "2020_q05.png",
    "w": 1083,
    "h": 303,
    "ans": [
      "C"
    ],
    "expl": "Local councils control land-use zoning decisions within their council areas."
  },
  {
    "id": "2020-Q6",
    "year": 2020,
    "n": 6,
    "topic": "Nature of Business",
    "subs": [
      "Influences in the business environment"
    ],
    "img": "2020_q06.png",
    "w": 1089,
    "h": 291,
    "ans": [
      "D"
    ],
    "expl": "Higher prices benefit owners' profit but disadvantage customers who must pay more, creating conflict between these two stakeholder groups."
  },
  {
    "id": "2020-Q7",
    "year": 2020,
    "n": 7,
    "topic": "Business Management",
    "subs": [
      "The management process"
    ],
    "img": "2020_q07.png",
    "w": 1083,
    "h": 310,
    "ans": [
      "A"
    ],
    "expl": "Dividends are the portion of company profit distributed directly to shareholders."
  },
  {
    "id": "2020-Q8",
    "year": 2020,
    "n": 8,
    "topic": "Business Planning",
    "subs": [
      "Influences in establishing an SME"
    ],
    "img": "2020_q08.png",
    "w": 1089,
    "h": 380,
    "ans": [
      "A"
    ],
    "expl": "Short-term debt should be matched to short-term, quickly turned-over assets such as stock, following the matching principle of finance."
  },
  {
    "id": "2020-Q9",
    "year": 2020,
    "n": 9,
    "topic": "Business Management",
    "subs": [
      "The management process"
    ],
    "img": "2020_q09.png",
    "w": 1071,
    "h": 309,
    "ans": [
      "B"
    ],
    "expl": "Publicity is unpaid media coverage such as a free news story, unlike advertising which is paid for."
  },
  {
    "id": "2020-Q10",
    "year": 2020,
    "n": 10,
    "topic": "Business Management",
    "subs": [
      "Achieving business goals"
    ],
    "img": "2020_q10.png",
    "w": 1065,
    "h": 360,
    "ans": [
      "A"
    ],
    "expl": "Increasing the business's proportion of total industry sales is the definition of increasing market share."
  },
  {
    "id": "2020-Q11",
    "year": 2020,
    "n": 11,
    "topic": "Business Management",
    "subs": [
      "The management process"
    ],
    "img": "2020_q11.png",
    "w": 1065,
    "h": 320,
    "ans": [
      "A"
    ],
    "expl": "Promoting an existing employee into the role is a form of internal recruitment, which is part of the Acquisition stage of the human resources process (attracting and selecting staff for a position) — not Development, which refers to training and skill-building after someone is already in a role."
  },
  {
    "id": "2020-Q12",
    "year": 2020,
    "n": 12,
    "topic": "Business Planning",
    "subs": [
      "The business planning process"
    ],
    "img": "2020_q12.png",
    "w": 1065,
    "h": 320,
    "ans": [
      "A"
    ],
    "expl": "Operational objectives are short-term, day-to-day targets set and carried out by frontline and supervisory management."
  },
  {
    "id": "2020-Q13",
    "year": 2020,
    "n": 13,
    "topic": "Business Management",
    "subs": [
      "The management process"
    ],
    "img": "2020_q13.png",
    "w": 1089,
    "h": 590,
    "ans": [
      "B"
    ],
    "expl": "Cost of goods sold = Opening stock + Purchases − Closing stock = $14 000 + $13 000 − $9 000 = $18 000."
  },
  {
    "id": "2020-Q14",
    "year": 2020,
    "n": 14,
    "topic": "Business Planning",
    "subs": [
      "Influences in establishing an SME"
    ],
    "img": "2020_q14.png",
    "w": 1089,
    "h": 564,
    "ans": [
      "B"
    ],
    "expl": "Total assets ($60 000 current + $45 000 non-current = $105 000) minus total owners' equity ($40 000) equals total liabilities of $65 000."
  },
  {
    "id": "2020-Q15",
    "year": 2020,
    "n": 15,
    "topic": "Business Planning",
    "subs": [
      "Influences in establishing an SME"
    ],
    "img": "2020_q15.png",
    "w": 763,
    "h": 241,
    "ans": [
      "D"
    ],
    "expl": "Superannuation is an additional employment cost (an on-cost) paid by the employer on top of wages, unlike commission, overtime or salaries which are direct wage payments."
  },
  {
    "id": "2020-Q16",
    "year": 2020,
    "n": 16,
    "topic": "Business Planning",
    "subs": [
      "Influences in establishing an SME"
    ],
    "img": "2020_q16.png",
    "w": 781,
    "h": 240,
    "ans": [
      "A"
    ],
    "expl": "Fringe benefits tax is a Commonwealth (federal) tax, while land tax, payroll tax and stamp duty are all state taxes."
  },
  {
    "id": "2020-Q17",
    "year": 2020,
    "n": 17,
    "topic": "Nature of Business",
    "subs": [
      "Business growth and decline"
    ],
    "img": "2020_q17.png",
    "w": 1071,
    "h": 290,
    "ans": [
      "C"
    ],
    "expl": "Merging with a competitor that produces and sells similar products is horizontal integration."
  },
  {
    "id": "2020-Q18",
    "year": 2020,
    "n": 18,
    "topic": "Business Planning",
    "subs": [
      "The business planning process"
    ],
    "img": "2020_q18.png",
    "w": 1071,
    "h": 478,
    "ans": [
      "D"
    ],
    "expl": "Break-even units = Fixed costs ÷ (Selling price − Variable cost per unit) = $200 000 ÷ ($60 − $20) = 5 000 units."
  },
  {
    "id": "2020-Q19",
    "year": 2020,
    "n": 19,
    "topic": "Business Planning",
    "subs": [
      "Critical issues in business success and failure"
    ],
    "img": "2020_q19.png",
    "w": 1065,
    "h": 297,
    "ans": [
      "D"
    ],
    "expl": "Leasing equipment avoids taking on long-term borrowing to purchase it outright, thereby limiting long-term debt."
  },
  {
    "id": "2020-Q20",
    "year": 2020,
    "n": 20,
    "topic": "Nature of Business",
    "subs": [
      "Influences in the business environment"
    ],
    "img": "2020_q20.png",
    "w": 1065,
    "h": 307,
    "ans": [
      "C"
    ],
    "expl": "Both industries are dominated by a small number of large firms, which is the definition of an oligopoly."
  },
  {
    "id": "2024-Q1",
    "year": 2024,
    "n": 1,
    "topic": "Nature of Business",
    "subs": [
      "Role of business"
    ],
    "img": "2024_q01.png",
    "w": 889,
    "h": 234,
    "ans": [
      "C"
    ],
    "expl": "The quaternary sector consists of information- and knowledge-based services such as IT and financial planning."
  },
  {
    "id": "2024-Q2",
    "year": 2024,
    "n": 2,
    "topic": "Business Management",
    "subs": [
      "The management process"
    ],
    "img": "2024_q02.png",
    "w": 1120,
    "h": 323,
    "ans": [
      "C"
    ],
    "expl": "Weekly rostering of staff is a short-term, day-to-day task, which is operational planning."
  },
  {
    "id": "2024-Q3",
    "year": 2024,
    "n": 3,
    "topic": "Business Management",
    "subs": [
      "The management process"
    ],
    "img": "2024_q03.png",
    "w": 898,
    "h": 287,
    "ans": [
      "B"
    ],
    "expl": "Changing the packaging/size of the good is a modification to the product itself, one of the four Ps of marketing."
  },
  {
    "id": "2024-Q4",
    "year": 2024,
    "n": 4,
    "topic": "Nature of Business",
    "subs": [
      "Role of business"
    ],
    "img": "2024_q04.png",
    "w": 1128,
    "h": 315,
    "ans": [
      "C"
    ],
    "expl": "Employees earn wages, shareholders earn dividends, and entrepreneurs earn profit as the return for the risk they take."
  },
  {
    "id": "2024-Q5",
    "year": 2024,
    "n": 5,
    "topic": "Nature of Business",
    "subs": [
      "Types of businesses"
    ],
    "img": "2024_q05.png",
    "w": 805,
    "h": 240,
    "ans": [
      "C"
    ],
    "expl": "Only public companies can issue shares to the public and be listed for trading on the ASX."
  },
  {
    "id": "2024-Q6",
    "year": 2024,
    "n": 6,
    "topic": "Business Management",
    "subs": [
      "Management and change"
    ],
    "img": "2024_q06.png",
    "w": 722,
    "h": 241,
    "ans": [
      "A"
    ],
    "expl": "Inertia (a natural preference for the status quo and comfort with existing routines) is a personal reason employees resist change, whereas the other options are costs borne by the business rather than reasons employees resist."
  },
  {
    "id": "2024-Q7",
    "year": 2024,
    "n": 7,
    "topic": "Business Management",
    "subs": [
      "The management process"
    ],
    "img": "2024_q07.png",
    "w": 924,
    "h": 303,
    "ans": [
      "A"
    ],
    "expl": "Job analysis and recruitment occur in the acquisition stage of the human resource cycle, before staff are hired."
  },
  {
    "id": "2024-Q8",
    "year": 2024,
    "n": 8,
    "topic": "Business Management",
    "subs": [
      "Nature of management"
    ],
    "img": "2024_q08.png",
    "w": 917,
    "h": 274,
    "ans": [
      "A"
    ],
    "expl": "A corporate code of conduct sets out expected ethical standards of behaviour that guide employees' everyday decisions, whereas the other options relate to employment/industrial relations arrangements rather than day-to-day ethics."
  },
  {
    "id": "2024-Q9",
    "year": 2024,
    "n": 9,
    "topic": "Nature of Business",
    "subs": [
      "Influences in the business environment"
    ],
    "img": "2024_q09.png",
    "w": 967,
    "h": 440,
    "ans": [
      "D"
    ],
    "expl": "A monopoly has no competition, an oligopoly is dominated by a small number of large businesses, and monopolistic competition has a large number of buyers and sellers with differentiated products."
  },
  {
    "id": "2024-Q10",
    "year": 2024,
    "n": 10,
    "topic": "Business Planning",
    "subs": [
      "The business planning process"
    ],
    "img": "2024_q10.png",
    "w": 898,
    "h": 324,
    "ans": [
      "D"
    ],
    "expl": "Comparing actual results against planned/budgeted performance is an act of monitoring performance, a key part of the controlling function."
  },
  {
    "id": "2024-Q11",
    "year": 2024,
    "n": 11,
    "topic": "Nature of Business",
    "subs": [
      "Business growth and decline"
    ],
    "img": "2024_q11.png",
    "w": 966,
    "h": 380,
    "ans": [
      "B"
    ],
    "expl": "Voluntary cessation is the owner's own decision to close the business, whereas involuntary cessation is forced on the business by external parties such as creditors or a court."
  },
  {
    "id": "2024-Q12",
    "year": 2024,
    "n": 12,
    "topic": "Nature of Business",
    "subs": [
      "Influences in the business environment"
    ],
    "img": "2024_q12.png",
    "w": 976,
    "h": 239,
    "ans": [
      "C"
    ],
    "expl": "A boom is characterised by strong consumer/business spending and high levels of employment (low unemployment)."
  },
  {
    "id": "2024-Q13",
    "year": 2024,
    "n": 13,
    "topic": "Business Management",
    "subs": [
      "The management process"
    ],
    "img": "2024_q13.png",
    "w": 786,
    "h": 242,
    "ans": [
      "C"
    ],
    "expl": "Superannuation is an additional (on-cost) expense a business must pay on top of an employee's wage or salary."
  },
  {
    "id": "2024-Q14",
    "year": 2024,
    "n": 14,
    "topic": "Business Management",
    "subs": [
      "The management process"
    ],
    "img": "2024_q14.png",
    "w": 905,
    "h": 243,
    "ans": [
      "A"
    ],
    "expl": "Cheaper inputs immediately lower the cost of production and increase profit margins in the short term, while the other options increase costs or only pay off over a longer period."
  },
  {
    "id": "2024-Q15",
    "year": 2024,
    "n": 15,
    "topic": "Business Planning",
    "subs": [
      "Influences in establishing an SME"
    ],
    "img": "2024_q15.png",
    "w": 739,
    "h": 242,
    "ans": [
      "D"
    ],
    "expl": "Payroll tax and stamp duty are both state government taxes, while income tax, company tax and GST are levied at the federal level."
  },
  {
    "id": "2024-Q16",
    "year": 2024,
    "n": 16,
    "topic": "Business Management",
    "subs": [
      "Management approaches"
    ],
    "img": "2024_q16.png",
    "w": 950,
    "h": 331,
    "ans": [
      "D"
    ],
    "expl": "Involving staff in identifying and resolving problems together reflects a democratic (participative) leadership style."
  },
  {
    "id": "2024-Q17",
    "year": 2024,
    "n": 17,
    "topic": "Business Management",
    "subs": [
      "The management process"
    ],
    "img": "2024_q17.png",
    "w": 907,
    "h": 262,
    "ans": [
      "B"
    ],
    "expl": "The Fair Work Commission is the national workplace relations tribunal that must approve enterprise agreements before they take effect."
  },
  {
    "id": "2024-Q18",
    "year": 2024,
    "n": 18,
    "topic": "Business Management",
    "subs": [
      "The management process"
    ],
    "img": "2024_q18.png",
    "w": 803,
    "h": 659,
    "ans": [
      "B"
    ],
    "expl": "COGS = opening stock ($6 700) + purchases ($20 000) − closing stock ($7 800) = $18 900."
  },
  {
    "id": "2024-Q19",
    "year": 2024,
    "n": 19,
    "topic": "Business Management",
    "subs": [
      "The management process"
    ],
    "img": "2024_q19.png",
    "w": 803,
    "h": 630,
    "ans": [
      "D"
    ],
    "expl": "Net profit = gross profit ($31 100) − expenses ($10 000) = $21 100."
  },
  {
    "id": "2024-Q20",
    "year": 2024,
    "n": 20,
    "topic": "Business Planning",
    "subs": [
      "The business planning process"
    ],
    "img": "2024_q20.png",
    "w": 758,
    "h": 639,
    "ans": [
      "A"
    ],
    "expl": "Break-even = fixed cost ($30 000) ÷ (unit price $7 − variable cost per unit $4) = 30 000 ÷ 3 = 10 000 units."
  }
];
