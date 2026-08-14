// ====================================================================
// Preliminary Business Studies — Section II short-answer sub-questions, plus
// the Section III extended-response "business report" question from each
// year (a single 20-mark entry per year, since NESA marks it holistically
// rather than per sub-part).
// Screen-clipped from the same trial exams as data.js. Each object is
// ONE sub-part (a), (b), (c)... of a short-answer question, or the whole
// Section III report question for 20-mark entries.
//
//   id       unique id, e.g. "2014-Q21(a)"
//   year,n   exam year and question number
//   part     sub-part letter
//   marks    marks available for this part
//   topic    top-level syllabus topic
//   subs     syllabus sub-topic(s)
//   img      filename in this folder
//   w,h      image pixel dimensions
//   criteria official NESA-style marking guideline text
//   sample   sample/indicative answer (may be blank if not published)
// ====================================================================
const SA_QUESTIONS = [
  {
    "id": "2014-Q21(a)",
    "year": 2014,
    "n": 21,
    "part": "a",
    "marks": 1,
    "topic": "Nature of Business",
    "subs": [
      "Business growth and decline"
    ],
    "img": "2014_q21_a.png",
    "w": 1038,
    "h": 270,
    "criteria": "• Identifies first stage of business life cycle\n1",
    "sample": ""
  },
  {
    "id": "2014-Q21(b)",
    "year": 2014,
    "n": 21,
    "part": "b",
    "marks": 4,
    "topic": "Nature of Business",
    "subs": [
      "Business growth and decline"
    ],
    "img": "2014_q21_b.png",
    "w": 1038,
    "h": 100,
    "criteria": "• Describes ONE characteristic and ONE challenge a business may experience during the growth phase of the cycle\n3-4\n• Outlines ONE characteristic and ONE challenge a business may experience during the growth phase of the cycle OR describes ONE of these\n2\n• Identifies a characteristic OR a challenge a business may experience during the growth phase of the cycle\n1",
    "sample": ""
  },
  {
    "id": "2014-Q21(c)",
    "year": 2014,
    "n": 21,
    "part": "c",
    "marks": 4,
    "topic": "Nature of Business",
    "subs": [
      "Business growth and decline"
    ],
    "img": "2014_q21_c.png",
    "w": 1037,
    "h": 100,
    "criteria": "• Examines TWO strategies a business can adopt as part of the renewal phase in the lifecycle\n3-4\n• Identifies TWO strategies a business can adopt as part of the renewal phase in the lifecycle OR examines ONE\n2\n• Identifies ONE strategy a business can adopt as part of the renewal phase in the lifecycle\n1",
    "sample": ""
  },
  {
    "id": "2014-Q22(a)",
    "year": 2014,
    "n": 22,
    "part": "a",
    "marks": 1,
    "topic": "Business Management",
    "subs": [
      "Management approaches"
    ],
    "img": "2014_q22_a.png",
    "w": 1168,
    "h": 357,
    "criteria": "• Identifies the management leadership style used in the classical-scientific approach\n1",
    "sample": ""
  },
  {
    "id": "2014-Q22(b)",
    "year": 2014,
    "n": 22,
    "part": "b",
    "marks": 4,
    "topic": "Business Management",
    "subs": [
      "Management approaches"
    ],
    "img": "2014_q22_b.png",
    "w": 1038,
    "h": 71,
    "criteria": "• Explains how the behavioural approach can be used to improve the business's performance\n3-4\n• Outlines how the behavioural approach can be used to improve the business's performance\n2\n• Identifies a feature of the behavioural approach that can be used to improve the business's performance\n1",
    "sample": ""
  },
  {
    "id": "2014-Q22(c)",
    "year": 2014,
    "n": 22,
    "part": "c",
    "marks": 4,
    "topic": "Business Management",
    "subs": [
      "Management and change"
    ],
    "img": "2014_q22_c.png",
    "w": 1038,
    "h": 77,
    "criteria": "• Discusses TWO strategies a business can use to manage change effectively\n3-4\n• Outlines ONE strategy a business can use to manage change effectively OR identifies TWO strategies\n2\n• Identifies ONE strategy a business can use to manage change effectively\n1",
    "sample": ""
  },
  {
    "id": "2014-Q23(a)",
    "year": 2014,
    "n": 23,
    "part": "a",
    "marks": 2,
    "topic": "Business Planning",
    "subs": [
      "Critical issues in business success and failure"
    ],
    "img": "2014_q23_a.png",
    "w": 1037,
    "h": 299,
    "criteria": "• Defines the term competitive advantage\n2\n• Identifies a characteristic of competitive advantage\n1",
    "sample": ""
  },
  {
    "id": "2014-Q23(b)",
    "year": 2014,
    "n": 23,
    "part": "b",
    "marks": 4,
    "topic": "Business Planning",
    "subs": [
      "Critical issues in business success and failure"
    ],
    "img": "2014_q23_b.png",
    "w": 1032,
    "h": 70,
    "criteria": "• Describes TWO ways a business can achieve a competitive advantage\n3-4\n• Describes ONE way a business can achieve a competitive advantage OR identifies TWO ways\n2\n• Identifies ONE way a business can achieve a competitive advantage\n1",
    "sample": ""
  },
  {
    "id": "2014-Q23(c)",
    "year": 2014,
    "n": 23,
    "part": "c",
    "marks": 4,
    "topic": "Business Planning",
    "subs": [
      "Critical issues in business success and failure"
    ],
    "img": "2014_q23_c.png",
    "w": 1038,
    "h": 71,
    "criteria": "• Discusses TWO goals a business may aim for in an attempt to achieve long-term growth\n3-4\n• Outlines TWO goals a business may aim for in an attempt to achieve long-term growth OR discusses ONE goal\n2\n• Identifies ONE goal a business may aim for in an attempt to achieve long-term growth\n1",
    "sample": ""
  },
  {
    "id": "2014-Q24(a)",
    "year": 2014,
    "n": 24,
    "part": "a",
    "marks": 2,
    "topic": "Business Planning",
    "subs": [
      "The business planning process"
    ],
    "img": "2014_q24_a.png",
    "w": 1038,
    "h": 250,
    "criteria": "• Students define the term budget\n2\n• Students identify a feature on a budget\n1",
    "sample": ""
  },
  {
    "id": "2014-Q24(b)",
    "year": 2014,
    "n": 24,
    "part": "b",
    "marks": 2,
    "topic": "Business Planning",
    "subs": [
      "The business planning process"
    ],
    "img": "2014_q24_b.png",
    "w": 1038,
    "h": 70,
    "criteria": "• Identifies TWO types of budgets\n2\n• Identifies ONE type of budgets\n1",
    "sample": ""
  },
  {
    "id": "2014-Q24(c)",
    "year": 2014,
    "n": 24,
    "part": "c",
    "marks": 4,
    "topic": "Business Planning",
    "subs": [
      "The business planning process"
    ],
    "img": "2014_q24_c.png",
    "w": 1038,
    "h": 72,
    "criteria": "• Describes how a break-even analysis and decision trees are forecasting tools\n3-4\n• Describes how a break-even analysis OR decision trees are forecasting tools\n2\n• Defines a break-even analysis or decision trees\n1",
    "sample": ""
  },
  {
    "id": "2014-Q24(d)",
    "year": 2014,
    "n": 24,
    "part": "d",
    "marks": 4,
    "topic": "Business Planning",
    "subs": [
      "The business planning process"
    ],
    "img": "2014_q24_d.png",
    "w": 1037,
    "h": 98,
    "criteria": "• Examines how TWO sources of information can be used to monitor business performance\n3-4\n• Examines how ONE source of information can be used to monitor business OR identifies TWO\n2\n• Identifies ONE source of information which be used to monitor business performance\n1",
    "sample": ""
  },
  {
    "id": "2014-Q25(a)",
    "year": 2014,
    "n": 25,
    "part": "a",
    "marks": 20,
    "topic": "Business Planning",
    "subs": [
      "Influences in establishing an SME"
    ],
    "img": "2014_q25_a.png",
    "w": 1080,
    "h": 565,
    "criteria": "• Presents a sustained, logical and well-structured business report that provides a thorough outline of TWO important skills of management; provides a comprehensive discussion on the advantages and disadvantages of TWO establishment options; provides a thorough examination of key legal considerations when establishing a business; extensively uses relevant business terminology and concepts in appropriate forms\n17-20\n• Presents a well-organised and well-structured business report that provides a detailed outline of TWO important skills of management; provides a detailed discussion on the advantages and disadvantages of TWO establishment options; provides an examination of key legal considerations when establishing a business; substantially uses relevant business terminology and concepts in appropriate forms\n13-16\n• Presents a business report that provides some outline of important skills of management; provides a description on the advantages and disadvantages of TWO establishment options; provides some discussion of legal considerations when establishing a business; satisfactorily uses relevant business terminology and concepts in appropriate forms\n9-12\n• Presents a business report that provides a limited outline of TWO important skills of management; outlines an advantage and/or disadvantage of TWO establishment options; may make mention of legal considerations when establishing a business; uses basic business terminology and concepts in appropriate forms\n5-8\n• Identifies an important skill of management; may refer to establishment options or legal considerations; uses basic business terminology; does not write in an appropriate business format\n1-4",
    "sample": ""
  },
  {
    "id": "2017-Q21(a)",
    "year": 2017,
    "n": 21,
    "part": "a",
    "marks": 2,
    "topic": "Nature of Business",
    "subs": [
      "Business growth and decline"
    ],
    "img": "2017_q21_a.png",
    "w": 1100,
    "h": 615,
    "criteria": "• Recognises and names TWO features of the maturity stage of the business life cycle – 2 marks\n• Recognises and names ONE feature of the maturity stage of the business life cycle – 1 mark\n\nAnswers may include: market saturation; rate of growth slows down and eventually flattens out; profits start to level out; cash flow may start to deteriorate; need to improve efficiency to keep costs down; failure rate can be high if the business does not react to plateauing sales; may lose customers.",
    "sample": ""
  },
  {
    "id": "2017-Q21(b)",
    "year": 2017,
    "n": 21,
    "part": "b",
    "marks": 4,
    "topic": "Nature of Business",
    "subs": [
      "Business growth and decline"
    ],
    "img": "2017_q21_b.png",
    "w": 1080,
    "h": 87,
    "criteria": "• Provides characteristics and features of TWO strategies that may be used in the maturity stage in response to challenges – 4 marks\n• Provides characteristics and features of ONE strategy that may be used in the maturity stage in response to challenges and identifies another – 3 marks\n• Provides characteristics and features of ONE strategy that may be used in the maturity stage in response to challenges OR identifies TWO strategies – 2 marks\n• Identifies ONE strategy that may be used in the maturity stage in response to challenges – 1 mark\n\nAnswers may include: maintain customer loyalty through extensive advertising; marketing to attract new customers; change pricing strategy to increase sales; improve quality of products; revise financial management so funds are devoted to advertising and new product development; reduce costs to manage cash flow; redefine the business's objectives and vision; restructure or reorganise the business.",
    "sample": ""
  },
  {
    "id": "2017-Q21(c)",
    "year": 2017,
    "n": 21,
    "part": "c",
    "marks": 4,
    "topic": "Nature of Business",
    "subs": [
      "Business growth and decline"
    ],
    "img": "2017_q21_c.png",
    "w": 1080,
    "h": 62,
    "criteria": "• Inquires into TWO factors that contribute to business decline – 4 marks\n• Inquires into ONE factor that contributes to business decline and identifies another – 3 marks\n• Inquires into ONE factor that contributes to business decline OR identifies TWO – 2 marks\n• Identifies ONE factor that contributes to business decline – 1 mark\n\nAnswers may include: failure to meet customer needs; lack of demand for the product; failure to plan; increased competition; lack of adequate cash flow; poor location; lack of management skills; failure to adapt to changes in the external environment; failure to price correctly; unfavourable economic conditions.",
    "sample": ""
  },
  {
    "id": "2017-Q22(a)",
    "year": 2017,
    "n": 22,
    "part": "a",
    "marks": 2,
    "topic": "Business Management",
    "subs": [
      "The management process"
    ],
    "img": "2017_q22_a.png",
    "w": 1080,
    "h": 230,
    "criteria": "• Recognises and names TWO benefits of staff involvement within a business – 2 marks\n• Recognises and names ONE benefit of staff involvement within a business – 1 mark\n\nAnswers may include: increasing staff morale; higher productivity and efficiency; better ideas; team cohesion; innovation.",
    "sample": ""
  },
  {
    "id": "2017-Q22(b)",
    "year": 2017,
    "n": 22,
    "part": "b",
    "marks": 4,
    "topic": "Business Management",
    "subs": [
      "The management process"
    ],
    "img": "2017_q22_b.png",
    "w": 1080,
    "h": 58,
    "criteria": "• Provides characteristics and features of TWO non-monetary strategies of motivating staff – 4 marks\n• Provides characteristics and features of ONE non-monetary strategy of motivating staff AND identifies another – 3 marks\n• Provides characteristics and features of ONE non-monetary strategy of motivating staff – 2 marks\n• Identifies ONE non-monetary way of motivating and keeping staff – 1 mark\n\nAnswers may include: flexible working arrangements; paid training opportunities and professional development; travel allowances; health insurance; company car; subsidised gym membership; housing; mobile phone.",
    "sample": ""
  },
  {
    "id": "2017-Q22(c)",
    "year": 2017,
    "n": 22,
    "part": "c",
    "marks": 4,
    "topic": "Business Management",
    "subs": [
      "The management process"
    ],
    "img": "2017_q22_c.png",
    "w": 1080,
    "h": 57,
    "criteria": "• Provides points for or against TWO types of involuntary separation that may occur within a business – 4 marks\n• Provides characteristics and features of ONE type of involuntary separation that may occur within a business and identifies another – 3 marks\n• Provides characteristics and features of ONE type of involuntary separation that may occur within a business – 2 marks\n• Identifies ONE type of involuntary separation that may occur within a business – 1 mark\n\nAnswers may include: retrenchment; redundancy; dismissal.",
    "sample": ""
  },
  {
    "id": "2017-Q23(a)",
    "year": 2017,
    "n": 23,
    "part": "a",
    "marks": 2,
    "topic": "Business Planning",
    "subs": [
      "Small to medium enterprises"
    ],
    "img": "2017_q23_a.png",
    "w": 1080,
    "h": 340,
    "criteria": "• Recognises and names TWO economic contributions small to medium enterprises make to the Australian economy – 2 marks\n• Recognises and names ONE economic contribution small to medium enterprises make to the Australian economy – 1 mark\n\nAnswers may include: contribution to GDP; contribution to employment; contribution to the balance of payments; contribution to invention and innovation.",
    "sample": ""
  },
  {
    "id": "2017-Q23(b)",
    "year": 2017,
    "n": 23,
    "part": "b",
    "marks": 4,
    "topic": "Business Planning",
    "subs": [
      "Small to medium enterprises"
    ],
    "img": "2017_q23_b.png",
    "w": 1080,
    "h": 84,
    "criteria": "• Sketches in general terms TWO sources of information an individual can access to gain advice about establishing a small business – 4 marks\n• Sketches in general terms ONE source of information an individual can access to gain advice about establishing a small business AND identifies another – 3 marks\n• Sketches in general terms ONE source of information an individual can access to gain advice about establishing a small business OR identifies TWO – 2 marks\n• Identifies ONE source of information an individual can access to gain advice about establishing a small business – 1 mark\n\nAnswers may include: trade associations; lawyers; chamber of commerce; the Australian Bureau of Statistics (ABS); the Australian Chamber of Commerce and Industry; bank managers; management consultants; government agencies.",
    "sample": ""
  },
  {
    "id": "2017-Q23(c)",
    "year": 2017,
    "n": 23,
    "part": "c",
    "marks": 4,
    "topic": "Business Planning",
    "subs": [
      "Small to medium enterprises"
    ],
    "img": "2017_q23_c.png",
    "w": 1080,
    "h": 54,
    "criteria": "• Relates cause and effect in relation to ONE advantage and ONE disadvantage of buying a franchise – 4 marks\n• Provides characteristics of ONE advantage OR ONE disadvantage of buying a franchise and identifies the other – 3 marks\n• Provides characteristics of ONE advantage OR ONE disadvantage of buying a franchise OR identifies ONE advantage and ONE disadvantage – 2 marks\n• Identifies ONE advantage OR ONE disadvantage of buying a franchise – 1 mark\n\nAnswers may include:\nAdvantages: immediate benefit is derived due to goodwill already established; franchisor often provides training and management backup; a franchisee can succeed despite having little experience; well-planned advertising often exists for the franchise; volume buying is possible and therefore cheaper; a business plan and strategies already exist.\nDisadvantages: franchisor controls the operations; profits must be shared with the franchisor through the payment of ongoing franchise fees; franchisor charges additional fees for advice; franchisee is often required to purchase stock from the franchisor and cannot shop around for cheaper suppliers; franchisee shares the burden of the franchisor's business mistakes.",
    "sample": ""
  },
  {
    "id": "2017-Q24(a)",
    "year": 2017,
    "n": 24,
    "part": "a",
    "marks": 2,
    "topic": "Business Management",
    "subs": [
      "The management process"
    ],
    "img": "2017_q24_a.png",
    "w": 1080,
    "h": 210,
    "criteria": "• Gives a suitable meaning for quality management – 2 marks\n• Identifies a characteristic of quality management – 1 mark\n\nAnswers may include: quality management is the strategy that a business uses to make sure that its products meet customer expectations. This relates to the approaches used to ensure the degree of excellence of goods and services and their fitness for a stated purpose.",
    "sample": ""
  },
  {
    "id": "2017-Q24(b)",
    "year": 2017,
    "n": 24,
    "part": "b",
    "marks": 4,
    "topic": "Business Management",
    "subs": [
      "The management process"
    ],
    "img": "2017_q24_b.png",
    "w": 1080,
    "h": 61,
    "criteria": "• Describes characteristics and features of TWO benefits of quality management practices – 4 marks\n• Describes characteristics and features of ONE benefit of quality management practices and identifies another – 3 marks\n• Sketches in general terms ONE benefit of quality management practices OR identifies TWO – 2 marks\n• Identifies ONE benefit of quality management practices – 1 mark\n\nAnswers may include: reduced waste and defects; reduced variance in the final product; strengthened competitive position; improved reputation and customer satisfaction; reduced costs; increased productivity and profits. Students link these benefits to meeting customer expectations, sustaining market share and enabling continuous improvement in goods and services offered by the business.",
    "sample": ""
  },
  {
    "id": "2017-Q24(c)",
    "year": 2017,
    "n": 24,
    "part": "c",
    "marks": 4,
    "topic": "Business Management",
    "subs": [
      "The management process"
    ],
    "img": "2017_q24_c.png",
    "w": 1080,
    "h": 95,
    "criteria": "• Inquires into TWO quality management approaches that may be used by operations managers – 4 marks\n• Inquires into ONE quality management approach that may be used by operations managers AND identifies another – 3 marks\n• Inquires into ONE quality management approach that may be used by operations managers – 2 marks\n• Identifies ONE quality management approach that may be used by operations managers – 1 mark\n\nAnswers may include: quality control; quality assurance; total quality management (TQM).",
    "sample": ""
  },
  {
    "id": "2017-Q25(Report)",
    "year": 2017,
    "n": 25,
    "part": "Report",
    "marks": 20,
    "topic": "Business Management",
    "subs": [
      "Management and change"
    ],
    "img": "2017_q25_report.png",
    "w": 1080,
    "h": 495,
    "criteria": "• 17–20 marks: Provides how and/or why TWO external factors may impact on Grace Realty; identifies issues and provides points for/against why employees may resist change; provides detailed reasons in favour of strategies used to manage change effectively; makes effective use of the information provided, demonstrating extensive knowledge and understanding relevant to the question; presents a sustained, logical and cohesive business report integrating relevant business terminology and concepts.\n• 13–16 marks: Provides characteristics and features of TWO external influences on Grace Realty; provides points for and against why employees resist change; provides characteristics and features of reasons in favour of strategies used to manage change effectively; makes some use of the information provided, demonstrating some knowledge and understanding relevant to the question; presents a logical and cohesive business report using relevant business terminology and concepts.\n• 9–12 marks: Sketches in general terms TWO external influences on Grace Realty; provides characteristics and features of reasons employees resist change; provides characteristics and features of strategies used to manage change; includes features of a business report and uses some business terminology and concepts.\n• 5–8 marks: Sketches in general terms ONE external influence on Grace Realty; sketches in general terms a reason/reasons why employees resist change; sketches in general terms strategy/strategies to manage change; may include some features of a business report and uses basic business terminology.\n• 1–4 marks: Refers to influence/s and/or resisting change and/or strategies in business life cycle and/or human resource process; uses basic business terminology.\n\nSuggested answers:\nExternal influences: economic influences (sales could be influenced by the economic cycle); financial influences (sources of finance from both domestic and global markets); geographical influences (growth of regional areas, changing age structure of the population); social influences (family-friendly programs, workplace cultural diversity); legal influences (complying with legislative changes); political influences (government policies); institutional influences (government and regulatory bodies); technological influences (adopting the latest technology and training); competitive influences.\nResistance to change: inertia – moving away from their comfort zone into the unknown; fear that staff lack skills or ability to learn the new technology; cultural incompatibility with the other business; fear of loss of job as the two businesses merge.\nStrategies to manage change: create a culture of change; use change agents; implement positive leadership; hire management consultants who are aware of best practice; open communication – provide constant feedback – reduces fear of the unknown; develop team spirit – teams can develop a strong sense of identity and offer a supportive environment; offer support to reduce fear and anxiety; build trust among employees; specify the nature of the change; allow employees to participate in the change process; support change with new learning; implement change models – Lewin's unfreeze/change/refreeze and the force field analysis.",
    "sample": ""
  },
  {
    "id": "2018-Q21(a)",
    "year": 2018,
    "n": 21,
    "part": "a",
    "marks": 2,
    "topic": "Nature of Business",
    "subs": [
      "Influences in the business environment"
    ],
    "img": "2018_q21_a.png",
    "w": 1112,
    "h": 273,
    "criteria": "• 2 marks: Clearly outlines ONE relevant external influence and explains how it may have contributed to the decline in sales (e.g. decline in economic activity, changes to the financial market/reduced funding availability, changing geographic demographics or social tastes and preferences, new legislation/government regulation, technological change, or increased competition/change in markets)\n• 1 mark: Identifies an external influence relevant to the decline in sales",
    "sample": ""
  },
  {
    "id": "2018-Q21(b)",
    "year": 2018,
    "n": 21,
    "part": "b",
    "marks": 4,
    "topic": "Business Management",
    "subs": [
      "Management approaches"
    ],
    "img": "2018_q21_b.png",
    "w": 1028,
    "h": 80,
    "criteria": "• 4 marks: Thoroughly discusses how adopting a behavioural management approach (e.g. linked to a democratic leadership style) can help Lux Furniture reduce staff turnover — makes staff feel part of a team, increases job satisfaction and motivation, improves communication between management and staff, builds trust — leading to more positive employer/employee relations\n• 3 marks: Provides a sound discussion of how a behavioural management approach can help reduce staff turnover\n• 2 marks: Outlines a behavioural management approach with some reference to staff turnover\n• 1 mark: Demonstrates limited understanding of behavioural management",
    "sample": ""
  },
  {
    "id": "2018-Q21(c)",
    "year": 2018,
    "n": 21,
    "part": "c",
    "marks": 4,
    "topic": "Business Management",
    "subs": [
      "The management process"
    ],
    "img": "2018_q21_c.png",
    "w": 1027,
    "h": 52,
    "criteria": "• 4 marks: Recommends TWO marketing strategies (drawn from the 4Ps — Product: quality, design, warranty, labelling, packaging, logo; Price: cost-based, market-based, competition-based; Promotion: personal selling, sales promotion, publicity/PR, advertising; Place: distribution channels and intensity) with well-justified reasons for how each would increase sales for Lux Furniture\n• 3 marks: Recommends TWO marketing strategies with some justification\n• 2 marks: Identifies TWO marketing strategies OR one strategy with justification\n• 1 mark: Identifies a marketing strategy",
    "sample": ""
  },
  {
    "id": "2018-Q22(a)",
    "year": 2018,
    "n": 22,
    "part": "a",
    "marks": 4,
    "topic": "Business Planning",
    "subs": [
      "The business planning process"
    ],
    "img": "2018_q22_a.png",
    "w": 1028,
    "h": 112,
    "criteria": "• 4 marks: Clearly explains how a situational analysis (e.g. a SWOT analysis identifying strengths, weaknesses, opportunities and threats) obtains information about a business's internal and external environment, forms the foundation for the business plan, helps determine the target market, and can be used at all stages of the planning cycle to make informed decisions\n• 3 marks: Provides a sound explanation of situational analysis and its role in planning\n• 2 marks: Outlines the purpose of a situational analysis\n• 1 mark: Demonstrates limited understanding of situational analysis",
    "sample": ""
  },
  {
    "id": "2018-Q22(b)",
    "year": 2018,
    "n": 22,
    "part": "b",
    "marks": 6,
    "topic": "Business Planning",
    "subs": [
      "The business planning process"
    ],
    "img": "2018_q22_b.png",
    "w": 1130,
    "h": 84,
    "criteria": "• 5-6 marks: Thoroughly analyses TWO forecasting techniques (e.g. total revenue and total cost forecasting, break-even analysis, cash flow projections, budgets) explaining how each helps a business plan resources, set realistic targets and achieve its financial objectives\n• 3-4 marks: Provides a sound analysis of TWO forecasting techniques with some links to financial objectives, OR a thorough analysis of ONE technique\n• 2 marks: Outlines ONE or TWO forecasting techniques\n• 1 mark: Names a forecasting technique",
    "sample": ""
  },
  {
    "id": "2018-Q23(a)",
    "year": 2018,
    "n": 23,
    "part": "a",
    "marks": 2,
    "topic": "Nature of Business",
    "subs": [
      "Business growth and decline"
    ],
    "img": "2018_q23_a.png",
    "w": 1029,
    "h": 262,
    "criteria": "• 2 marks: Identifies TWO correct features of the establishment stage (e.g. setting of goals, slow-starting sales, slow-to-begin profits, high start-up costs, sourcing finance, erratic cash flow, very high fixed costs, establishing a customer base, only a few employees, high level of risk)\n• 1 mark: Identifies ONE correct feature",
    "sample": ""
  },
  {
    "id": "2018-Q23(b)",
    "year": 2018,
    "n": 23,
    "part": "b",
    "marks": 4,
    "topic": "Nature of Business",
    "subs": [
      "Business growth and decline"
    ],
    "img": "2018_q23_b.png",
    "w": 1028,
    "h": 53,
    "criteria": "• 4 marks: Thoroughly examines TWO challenges faced in the growth stage (e.g. arising from mergers, acquisitions, takeovers, partnerships, diversification and outsourcing) such as expanding too quickly and losing control, changing staff needs, developing budgets/organising financial resources, managing cash flow and credit policies, increasing management's understanding of the business as it grows\n• 3 marks: Examines ONE challenge thoroughly, or provides a sound examination of TWO challenges\n• 2 marks: Outlines ONE or TWO challenges\n• 1 mark: Identifies a challenge",
    "sample": ""
  },
  {
    "id": "2018-Q23(c)",
    "year": 2018,
    "n": 23,
    "part": "c",
    "marks": 4,
    "topic": "Nature of Business",
    "subs": [
      "Business growth and decline"
    ],
    "img": "2018_q23_c.png",
    "w": 1029,
    "h": 53,
    "criteria": "• 4 marks: Clearly explains TWO factors that contribute to business decline (e.g. lack of management expertise/leadership, lack of innovation, overcapitalisation, lack of business planning, poor cash flow/financial management, poor inventory management, failure to keep up with changing tastes and preferences), showing the cause-and-effect link between each factor and the resulting decline\n• 3 marks: Provides a sound explanation of TWO factors, or a thorough explanation of ONE factor\n• 2 marks: Outlines ONE or TWO factors\n• 1 mark: Identifies a factor",
    "sample": ""
  },
  {
    "id": "2018-Q24(a)",
    "year": 2018,
    "n": 24,
    "part": "a",
    "marks": 2,
    "topic": "Business Management",
    "subs": [
      "The management process"
    ],
    "img": "2018_q24_a.png",
    "w": 1136,
    "h": 877,
    "criteria": "• 2 marks: Clearly differentiates between debt finance (money from external sources such as loans, which must be repaid with interest) and equity finance (money provided by owners/shareholders to establish or expand the business, with no interest to be repaid)\n• 1 mark: Provides some relevant information about debt and/or equity finance",
    "sample": ""
  },
  {
    "id": "2018-Q24(b)",
    "year": 2018,
    "n": 24,
    "part": "b",
    "marks": 2,
    "topic": "Business Management",
    "subs": [
      "The management process"
    ],
    "img": "2018_q24_b.png",
    "w": 1028,
    "h": 60,
    "criteria": "• 2 marks: Correctly calculates net profit in 2018 as $51 000 (using Assets = Liabilities + Owner's Equity) and comments on the decline from 2017 net profit of $73 000\n• 1 mark: Correct calculation with no/limited comment, or a reasonable comment without correct calculation",
    "sample": "Net profit in 2018 = $51 000 (Assets = Liabilities + Owner's Equity), a decline from $73 000 in 2017."
  },
  {
    "id": "2018-Q24(c)",
    "year": 2018,
    "n": 24,
    "part": "c",
    "marks": 2,
    "topic": "Business Management",
    "subs": [
      "The management process"
    ],
    "img": "2018_q24_c.png",
    "w": 1029,
    "h": 52,
    "criteria": "• 2 marks: Correctly calculates gross profit in 2018 as $40 600 (Sales − Cost of Goods Sold = $93 000 − $52 400) and comments on the decline from 2017 gross profit of $51 800\n• 1 mark: Correct calculation with no/limited comment, or a reasonable comment without correct calculation",
    "sample": "Gross profit in 2018 = $40 600 ($93 000 − $52 400), a decline from $51 800 in 2017."
  },
  {
    "id": "2018-Q24(d)",
    "year": 2018,
    "n": 24,
    "part": "d",
    "marks": 4,
    "topic": "Business Management",
    "subs": [
      "The management process"
    ],
    "img": "2018_q24_d.png",
    "w": 1029,
    "h": 140,
    "criteria": "• 4 marks: Recommends TWO relevant strategies (e.g. reduce cost of goods sold to increase gross profit and therefore net profit; reduce expenses — administrative, selling, financial; increase sales, which may require increased marketing spend to grow market share) with justification specific to this business\n• 3 marks: Recommends TWO strategies with limited justification, or ONE strategy with justification\n• 2 marks: Identifies TWO strategies, or one with some justification\n• 1 mark: Identifies a strategy",
    "sample": ""
  },
  {
    "id": "2018-Q25(a)",
    "year": 2018,
    "n": 25,
    "part": "a",
    "marks": 20,
    "topic": "Business Planning",
    "subs": [
      "Influences in establishing an SME",
      "Small to medium enterprises"
    ],
    "img": "2018_q25_a.png",
    "w": 1954,
    "h": 1056,
    "criteria": "• Demonstrates comprehensive knowledge and understanding of SME's with reference to legal requirements and contribution to the Australian economy; inquires into how management of human resources can help the business establish and maintain an efficient and productive workforce; presents a sustained, logical and cohesive response and communicates clearly using relevant business terminology and concepts\n17-20\n• Demonstrates thorough knowledge and understanding of SME's with reference to legal requirements and contribution to the Australian economy; identifies points for how management of human resources can help the business establish and maintain an efficient and productive workforce; presents a logical and cohesive response using relevant business terminology and concepts\n13-16\n• Demonstrates sound knowledge and understanding of SME's with reference to legal requirements and contribution to the Australian economy; provides characteristics and features of management of human resources can help the business establish and maintain an efficient and productive workforce; includes features of a business report and uses some business terminology and concepts\n9-12\n• Demonstrates basic understanding of SME's with reference to legal requirements and contribution to the Australian economy; makes reference to management of human resources can help the business establish and maintain an efficient and productive workforce; communicates using some business terminology and concepts\n5-8\n• Refers to legal requirements/contribution to the economy and/or human resource management; uses basic business terminology\n1-4",
    "sample": "Legal requirements: business name registration; zoning; health regulations; Australian consumer law (fair trade practices, protecting consumers and business from deceptive or misleading practices); use of an ABN; taxation.\nContributions SMEs make to the Australian economy: contribution to GDP; contribution to employment; contribution to balance of payments; contribution to invention and innovation (R&D).\nManagement of human resources: acquisition (hiring new employees; planning, identifying staffing needs, recruiting and selecting appropriate employees); development (improving employees' skills and abilities; induction and training; compiling a skills inventory); maintenance (monetary and non-monetary benefits to motivate employees to remain with the business); separation (voluntary or involuntary — employees leaving the business, which may require new staff to be hired)."
  },
  {
    "id": "2020-Q21(a)",
    "year": 2020,
    "n": 21,
    "part": "a",
    "marks": 2,
    "topic": "Business Planning",
    "subs": [
      "Small to medium enterprises"
    ],
    "img": "2020_q21_a.png",
    "w": 973,
    "h": 300,
    "criteria": "• Recognises and names TWO characteristics of small to medium enterprises (2)\n• Recognises and names ONE characteristic of small to medium enterprises (1)\nAnswers may include: personalised service; local markets; independently operated; independently owned; closely controlled by owner; bulk of capital provided by owner; owner responsible for decision-making; locally based.",
    "sample": ""
  },
  {
    "id": "2020-Q21(b)",
    "year": 2020,
    "n": 21,
    "part": "b",
    "marks": 4,
    "topic": "Business Planning",
    "subs": [
      "Small to medium enterprises"
    ],
    "img": "2020_q21_b.png",
    "w": 973,
    "h": 96,
    "criteria": "• Provides characteristics and features of TWO economic contributions of small to medium business (4)\n• Provides characteristics and features of ONE economic contribution of small to medium business and identifies another contribution (3)\n• Provides characteristics AND features of ONE economic contribution OR identifies TWO contributions (2)\n• Identifies ONE economic contribution of small to medium business (1)\nAnswers may include: contribution to local economies; growth and innovation to the community; economic growth by providing employment opportunities; larger businesses depend on smaller businesses for various functions through outsourcing; contribution to the balance of payments; contribution of taxes to government; smaller businesses can grow into bigger businesses, further adding to economic growth; contribution to Australia's GDP.",
    "sample": ""
  },
  {
    "id": "2020-Q21(c)",
    "year": 2020,
    "n": 21,
    "part": "c",
    "marks": 4,
    "topic": "Business Planning",
    "subs": [
      "Small to medium enterprises"
    ],
    "img": "2020_q21_c.png",
    "w": 973,
    "h": 102,
    "criteria": "• Relates cause and effect; makes the relationships between things evident; provides how TWO factors contribute to the failure of SME's in Australia (4)\n• ...how ONE factor contributes... AND identifies another factor (3)\n• ...how ONE factor contributes... OR identifies TWO factors (2)\n• Identifies ONE factor that contributes to the failure of SME's in Australia (1)\nAnswers may include: failure to plan; lack of information; leadership crisis; inaccurate record keeping; failure to delegate; complacency; incorrect marketing strategy; poor location; lack of financial planning; negative cash flow; new competitors; illness; supplier problems; poor use of external support services; economic downturn; new taxes; change in government policy; insufficient capital; partnership problems; lack of management experience; incorrect pricing policy; failure to seek advice; not enough sales; staff difficulties; being under-insured.",
    "sample": ""
  },
  {
    "id": "2020-Q22(a)",
    "year": 2020,
    "n": 22,
    "part": "a",
    "marks": 2,
    "topic": "Business Planning",
    "subs": [
      "The business planning process"
    ],
    "img": "2020_q22_a.png",
    "w": 969,
    "h": 421,
    "criteria": "• Sketches in general terms the purpose of the business plan (2)\n• Identifies a key characteristic of a business plan (1)\nAnswers may include: to establish business goals; to better understand your competition; to better understand your customers; to determine your financial needs and goals; to reduce risk; to research your market; to position your brand; to document your marketing plan.",
    "sample": ""
  },
  {
    "id": "2020-Q22(b)",
    "year": 2020,
    "n": 22,
    "part": "b",
    "marks": 2,
    "topic": "Business Planning",
    "subs": [
      "The business planning process"
    ],
    "img": "2020_q22_b.png",
    "w": 973,
    "h": 125,
    "criteria": "• Recognises and names ONE opportunity AND ONE threat in the SWOT analysis (2)\n• Recognises and names ONE opportunity OR ONE threat in the SWOT (1)\nAnswers may include: Opportunities - the only business in the local area, potential for online presence, holiday periods increase the population, hotels/homes being built meaning potential customers. Threats - online competitors, environmental factors (bushfires, Covid).",
    "sample": ""
  },
  {
    "id": "2020-Q22(c)",
    "year": 2020,
    "n": 22,
    "part": "c",
    "marks": 2,
    "topic": "Business Planning",
    "subs": [
      "The business planning process"
    ],
    "img": "2020_q22_c.png",
    "w": 973,
    "h": 122,
    "criteria": "• Sketches in general terms how ONE agency can provide assistance to the owners of Living Interiors to become more competitive (2)\n• Recognises and names how ONE agency can provide assistance to the owners of Living Interiors (1)\nAnswers may include: NSW Trade and Investment - SmallBizConnect; Business Enterprise Centres Australia (BECA); Local Government; Chamber of Commerce; Small Business Association of Australia and New Zealand; trade associations.",
    "sample": ""
  },
  {
    "id": "2020-Q22(d)",
    "year": 2020,
    "n": 22,
    "part": "d",
    "marks": 4,
    "topic": "Business Planning",
    "subs": [
      "The business planning process"
    ],
    "img": "2020_q22_d.png",
    "w": 973,
    "h": 127,
    "criteria": "• Provides reasons in favour of TWO marketing strategies that Living Interiors could use to increase market share and improve overall business performance (4)\n• ...ONE marketing strategy... AND identifies another strategy (3)\n• ...ONE marketing strategy... OR identifies TWO marketing strategies (2)\n• Identifies ONE marketing strategy that Living Interiors could use (1)\nAnswers may include: Product - quality, design, warranty/guarantee, labelling, exclusive features, packaging, logo; Price - cost-based, market-based, competition-based; Promotion - personal selling, sales promotion, publicity/PR, advertising; Place - distribution channel choice and intensive, selective or exclusive distribution.",
    "sample": ""
  },
  {
    "id": "2020-Q23(a)",
    "year": 2020,
    "n": 23,
    "part": "a",
    "marks": 4,
    "topic": "Nature of Business",
    "subs": [
      "Business growth and decline"
    ],
    "img": "2020_q23_a.png",
    "w": 973,
    "h": 283,
    "criteria": "• Provides characteristics and features of TWO possible outcomes in the post-maturity stage of the business life cycle (4)\n• ...ONE possible outcome... AND identifies another possible outcome (3)\n• ...ONE possible outcome... OR identifies TWO possible outcomes (2)\n• Identifies ONE possible outcome in the post-maturity stage of the business life cycle (1)\nAnswers may include: renewal; steady state; decline.",
    "sample": ""
  },
  {
    "id": "2020-Q23(b)",
    "year": 2020,
    "n": 23,
    "part": "b",
    "marks": 6,
    "topic": "Nature of Business",
    "subs": [
      "Business growth and decline"
    ],
    "img": "2020_q23_b.png",
    "w": 973,
    "h": 138,
    "criteria": "• Identifies issues and provides points on the differences between voluntary administration and voluntary liquidation for a business facing financial difficulties (5-6)\n• Provides points on the differences between voluntary administration AND voluntary liquidation (4)\n• Sketches in general terms the differences between voluntary administration and voluntary liquidation OR provides points on a business entering into either voluntary administration OR voluntary liquidation (3)\n• Makes general statements about entering into voluntary administration AND/OR voluntary liquidation (2)\n• Identifies a characteristic of voluntary administration OR voluntary liquidation (1)\nAnswers may include: Voluntary administration - an independent administrator is appointed to try to trade the business out of its financial problems by bringing the business and its creditors together and examining the financial affairs of the business; increasingly attractive, especially for small businesses; if successful the business resumes normal trading, if unsuccessful it goes into liquidation. Voluntary liquidation - an appointed liquidator converts the business's assets into cash ('winding up'); an independent, suitably qualified person takes control with the intention of selling all company assets in an orderly and fair way to pay creditors; any surplus cash after creditors are paid is paid to the owners.",
    "sample": ""
  },
  {
    "id": "2020-Q24(a)",
    "year": 2020,
    "n": 24,
    "part": "a",
    "marks": 2,
    "topic": "Business Management",
    "subs": [
      "Management approaches"
    ],
    "img": "2020_q24_a.png",
    "w": 973,
    "h": 283,
    "criteria": "• Identifies two reasonable and logical goals, given the change in management approach and current status of being in decline (2)\n• Identifies one reasonable goal or two goals that are not specific to the company's situation (1)\nAnswers may include: increase staff morale and motivation through participation in decision making; recover productivity through incentives and team building.",
    "sample": ""
  },
  {
    "id": "2020-Q24(b)",
    "year": 2020,
    "n": 24,
    "part": "b",
    "marks": 4,
    "topic": "Business Management",
    "subs": [
      "Management approaches"
    ],
    "img": "2020_q24_b.png",
    "w": 973,
    "h": 129,
    "criteria": "• Identifies issues and provides points on TWO ways management can motivate employees to increase their rate of productivity (4)\n• ...ONE way... AND identifies another way (3)\n• ...ONE way... OR identifies TWO ways (2)\n• Identifies ONE way management can motivate employees to increase their rate of productivity (1)\nAnswers may include: communicate with staff regularly; lead by example; encourage suggestions; implement conflict resolution strategies to support staff; delegate responsibility; take an interest in the development of employees; provide a safe and healthy work environment; establish joint objectives through negotiation; establish clear expectations; reward staff; involve staff in decision-making.",
    "sample": ""
  },
  {
    "id": "2020-Q24(c)",
    "year": 2020,
    "n": 24,
    "part": "c",
    "marks": 4,
    "topic": "Business Management",
    "subs": [
      "Management approaches"
    ],
    "img": "2020_q24_c.png",
    "w": 967,
    "h": 169,
    "criteria": "• Relates cause and effect of how the organisational structure would change when moving from a classical management approach to a behavioural management approach (4)\n• Provides characteristics and features of the changes in the organisational structure when moving from a classical approach to a behavioural approach (3)\n• Sketches in general terms the changes when moving from a classical management approach to a behavioural management approach (2)\n• Makes a general statement about classical OR behavioural management approach (1)\nAnswers may include: Classical approach - autocratic or authoritarian leadership style, hierarchical organisational structure with long chain of command and narrow span of control. Behavioural approach - participative or democratic leadership style, flatter organisational structure with shorter chain of command and wider span of control.",
    "sample": ""
  },
  {
    "id": "2020-Q25(a)",
    "year": 2020,
    "n": 25,
    "part": "a",
    "marks": 20,
    "topic": "Business Management",
    "subs": [
      "Management and change",
      "The management process"
    ],
    "img": "2020_q25_a.png",
    "w": 1860,
    "h": 1260,
    "criteria": "• Demonstrates comprehensive knowledge and understanding of external influences on a business; identifies issues and provides points for how a business can manage change effectively in order to remain competitive; relates cause and effect, makes the relationships between things evident, provides how quality management strategies and training and development of employees can benefit this business; presents a sustained, logical and cohesive business report integrating relevant business terminology and concepts\n17-20\n• Demonstrates thorough knowledge and understanding of external influences on a business; provides points for how a business can manage change effectively in order to remain competitive; provides points for how quality management strategies and training and development of employees can benefit this business; makes some use of the information provided, demonstrating sound knowledge and understanding relevant to the question; presents a logical and cohesive business report using relevant business terminology and concepts\n13-16\n• Demonstrates sound knowledge and understanding of external influences on a business; provides characteristics and features of managing change effectively to remain competitive; provides characteristics and features of quality management strategies and training and development of employees that can benefit this business; may make use of the information provided, demonstrating some knowledge and understanding relevant to the question; includes features of a business report and uses some business terminology and concepts\n9-12\n• Demonstrates basic understanding of external influences on a business; sketches in general terms how the business can manage change effectively; sketches in general terms quality management or training and development; may include some features of a business report and uses basic business terminology\n5-8\n• Refers to external influence(s) and/or managing change and/or quality management or training; uses basic business terminology\n1-4",
    "sample": "External influences: economic; social; legal; markets; financial; competitive situation; political; institutional; geographic.\nManaging change effectively to remain competitive: identifying the need for change; setting achievable goals; using change agents/management consultants; implementing change models that reduce resistance to change (force field analysis; unfreeze/change/refreeze); strategies to reduce resistance to change — build trust, make sure changes are reasonable, specify the nature of the change, allow employee participation, discuss upcoming change, support with new learning, articulate the purpose clearly, follow a sensible time frame, outline positive and negative aspects, ensure two-way communication, provide constant feedback.\nBenefits of quality management: reduces waste and defects; strengthens competitive position; improves reputation and customer satisfaction; reduces costs; increases productivity and profits.\nBenefits of training and development: improved job satisfaction through better job performance; greater ability to adapt to and cope with change; higher productivity through better job performance and more efficient use of human resources; goals and objectives more effectively met; a more capable workforce; staff easily trained in new ways of production; reduces costs due to less labour turnover, errors, accidents, absenteeism."
  },
  {
    "id": "2024-Q21(a)",
    "year": 2024,
    "n": 21,
    "part": "a",
    "marks": 2,
    "topic": "Business Management",
    "subs": [
      "The management process"
    ],
    "img": "2024_q21_a.png",
    "w": 1033,
    "h": 205,
    "criteria": "• Identifies TWO benefits of implementing quality management practices in the operations process (2)\n• Provides some relevant information (1)\n\nAnswers may include:\n• Reduced waste and defects, reduced variance in final output and strengthened competitive position\n• Improved reputation and customer satisfaction\n• Reduced costs\n• Increased productivity and profits",
    "sample": ""
  },
  {
    "id": "2024-Q21(b)",
    "year": 2024,
    "n": 21,
    "part": "b",
    "marks": 4,
    "topic": "Business Management",
    "subs": [
      "The management process"
    ],
    "img": "2024_q21_b.png",
    "w": 1026,
    "h": 85,
    "criteria": "• Explains how TWO quality management strategies could be used by a business to improve the operations process (4)\n• Explains how ONE quality management strategy could be used by a business to improve the operations process and identifies another quality management strategy (3)\n• Explains ONE quality management strategy that could be used by a business to improve the operations process OR identifies TWO quality management strategies (2)\n• Identifies ONE strategy that could be used by a business to improve performance (1)\n\nAnswers may include:\n• Quality control – the use of inspections at various points in the production process to check for problems and defects / feed-in, work in progress or feedback controls\n• Quality assurance – the use of a system so that a business achieves set standards in production\n• Total quality management – an ongoing, business-wide commitment to excellence that is applied to every aspect of the business's operation",
    "sample": ""
  },
  {
    "id": "2024-Q21(c)",
    "year": 2024,
    "n": 21,
    "part": "c",
    "marks": 4,
    "topic": "Business Management",
    "subs": [
      "The management process"
    ],
    "img": "2024_q21_c.png",
    "w": 1028,
    "h": 80,
    "criteria": "• Demonstrates a clear understanding of how the operations management function impact on a business' competitive position (4)\n• Demonstrates some understanding of how the operations management function impact on a business' competitive position (3)\n• Outlines how the operations management function impact on a business' competitive position (2)\n• Provides some relevant information (1)\n\nAnswers may include:\n• Establish the level of quality of the good or service\n• Influence the overall cost of production, given that the operations function is responsible for the largest part of a business's capital and human expenses\n• Determine whether sufficient products are available to satisfy consumer needs/new product development\n• Quality improvement\n• Efficiency and cost reduction",
    "sample": ""
  },
  {
    "id": "2024-Q22(a)",
    "year": 2024,
    "n": 22,
    "part": "a",
    "marks": 2,
    "topic": "Nature of Business",
    "subs": [
      "Business growth and decline"
    ],
    "img": "2024_q22_a.png",
    "w": 1034,
    "h": 264,
    "criteria": "• Identifies TWO characteristics of the growth stage of the business life cycle (2)\n• Provides some relevant information (1)\n\nAnswers may include:\n• Sales increase\n• Positive cash flow\n• Established customer base\n• Demand is increasing\n• Increasing profits\n• Costs should decrease\n• Increased competition\n• Market expansion",
    "sample": ""
  },
  {
    "id": "2024-Q22(b)",
    "year": 2024,
    "n": 22,
    "part": "b",
    "marks": 2,
    "topic": "Nature of Business",
    "subs": [
      "Business growth and decline"
    ],
    "img": "2024_q22_b.png",
    "w": 1015,
    "h": 63,
    "criteria": "• Outlines how the business can differentiate itself from competitors in the industry (2)\n• Provides some relevant information (1)\n\nAnswers may include:\n• Innovative features\n• Customer service\n• Quality improvement\n• Customisation",
    "sample": ""
  },
  {
    "id": "2024-Q22(c)",
    "year": 2024,
    "n": 22,
    "part": "c",
    "marks": 6,
    "topic": "Nature of Business",
    "subs": [
      "Business growth and decline"
    ],
    "img": "2024_q22_c.png",
    "w": 1029,
    "h": 81,
    "criteria": "• Provides a thorough explanation of marketing strategies that can be used in the growth stage of the business life cycle and clearly shows how this can increase market share (6)\n• Provides a sound explanation of marketing strategies that can be used in the growth stage of the business life cycle and links this to increasing market share (5)\n• Sketches in general terms marketing strategies that can be used in the growth stage of the business life cycle (4)\n• Provides some understanding of marketing strategies that can be used by a business (3)\n• Identifies marketing strategies that can be used by a business (2)\n• Provides some relevant information (1)\n\nAnswers may include:\n• Product diversification – expanding product range to increase market share\n• Competitive pricing – adjusting prices to be competitive and attract customers from competitors\n• Penetration pricing\n• Branding\n• Wider distribution channels\n• Marketing campaign to persuade customers to buy more or gain new customers\n• Digital marketing, social media may increase customer base in creating market share and sales\n(Students can talk about any of the 4Ps of marketing)",
    "sample": ""
  },
  {
    "id": "2024-Q23(a)",
    "year": 2024,
    "n": 23,
    "part": "a",
    "marks": 2,
    "topic": "Business Planning",
    "subs": [
      "Critical issues in business success and failure"
    ],
    "img": "2024_q23_a.png",
    "w": 1024,
    "h": 48,
    "criteria": "• Provides the purpose of a business plan (2)\n• Provides some relevant information (1)\n\nAnswers may include:\nThe purpose of a business plan is to set out the desired goals and direction of the business. This is designed to help management stay on track, avoid risks, keep everyone in the business on the same page, plan finances, and compare actual performance vs planned performance.",
    "sample": ""
  },
  {
    "id": "2024-Q23(b)",
    "year": 2024,
    "n": 23,
    "part": "b",
    "marks": 4,
    "topic": "Business Planning",
    "subs": [
      "Critical issues in business success and failure"
    ],
    "img": "2024_q23_b.png",
    "w": 1026,
    "h": 77,
    "criteria": "• Provides reasons in favour of TWO strategies that can be used by a business to reduce its costs and assist it in developing a cost advantage in an industry (4)\n• Provides reasons in favour of ONE strategy that can be used by a business to reduce its costs and assist it in developing a cost advantage in an industry AND identifies another (3)\n• Provides reasons in favour of ONE strategy that can be used by a business to reduce its costs and assist it in developing a cost advantage in an industry OR identifies TWO strategies (2)\n• Provides some relevant information (1)\n\nAnswers may include:\n• Economies of scale\n• Outsourcing\n• Lower labour costs e.g. casualisation, restructuring\n• Use technology\n• Reduce raw material costs e.g. buy inputs in bulk\n• Improve efficiency of operations",
    "sample": ""
  },
  {
    "id": "2024-Q23(c)",
    "year": 2024,
    "n": 23,
    "part": "c",
    "marks": 4,
    "topic": "Business Planning",
    "subs": [
      "Critical issues in business success and failure"
    ],
    "img": "2024_q23_c.png",
    "w": 1030,
    "h": 71,
    "criteria": "• Provides a thorough explanation of how a business can avoid financial problems in order to minimise the risk of failure (4)\n• Provides a sound explanation of how a business can avoid financial problems (3)\n• Provides some understanding of how a business can avoid financial problems (2)\n• Provides some relevant information (1)\n\nAnswers may include:\n• Business planning including the use of SWOT and budgets\n• Avoiding an overdependence on debt financing\n• Use of financial tools e.g. ratio analysis\n• Long-term financial planning",
    "sample": ""
  },
  {
    "id": "2024-Q24(a)",
    "year": 2024,
    "n": 24,
    "part": "a",
    "marks": 2,
    "topic": "Business Planning",
    "subs": [
      "Small to medium enterprises"
    ],
    "img": "2024_q24_a.png",
    "w": 1026,
    "h": 209,
    "criteria": "• Correctly defines the term small to medium enterprise (SME) (2)\n• Identifies a feature of small to medium enterprise (SME) (1)\n\nAnswers may include:\nIn Australia, an SME (Small to Medium Enterprise) is defined based on either the number of employees or annual turnover. Small businesses have 0–19 employees. Medium businesses have between 20–199 employees. SMEs have fewer than 200 employees. Based on annual turnover, an SME has a turnover of less than $250 million.",
    "sample": ""
  },
  {
    "id": "2024-Q24(b)",
    "year": 2024,
    "n": 24,
    "part": "b",
    "marks": 4,
    "topic": "Business Planning",
    "subs": [
      "Small to medium enterprises"
    ],
    "img": "2024_q24_b.png",
    "w": 1028,
    "h": 51,
    "criteria": "• Provides a thorough explanation of the economic contributions of SMEs in Australia (4)\n• Provides a sound explanation of the economic contributions of SMEs in Australia (3)\n• Demonstrates some understanding of the economic contributions of SMEs in Australia (2)\n• Provides some relevant information (1)\n\nAnswers may include:\n• Contribution to employment\n• Contribution to exports – balance of payments\n• Contribution to gross domestic product\n• Contribution to innovation and invention",
    "sample": ""
  },
  {
    "id": "2024-Q24(c)",
    "year": 2024,
    "n": 24,
    "part": "c",
    "marks": 4,
    "topic": "Business Planning",
    "subs": [
      "Small to medium enterprises"
    ],
    "img": "2024_q24_c.png",
    "w": 1031,
    "h": 51,
    "criteria": "• Provides a thorough explanation of the factors that can influence SME owners' chance of business success (4)\n• Provides a sound explanation of the factors that can influence SME owners' chance of business success (3)\n• Demonstrates some understanding of the factors that can influence SME owners' chance of business success (2)\n• Provides some relevant information (1)\n\nAnswers may include:\n• Entrepreneurial abilities, skills and experience\n• Flexibility and adaptability to change\n• Technological adoption\n• Financial management",
    "sample": ""
  },
  {
    "id": "2024-Q25(a)",
    "year": 2024,
    "n": 25,
    "part": "a",
    "marks": 20,
    "topic": "Business Management",
    "subs": [
      "Management approaches"
    ],
    "img": "2024_q25_a.png",
    "w": 988,
    "h": 751,
    "criteria": "• Provides a detailed description of the behavioural approach to management; provides detailed reasons in favour of TWO promotion strategies that can be used by this business to improve business performance; provides a detailed explanation of the human resource strategies the business can implement in recruiting suitable staff and reducing staff turnover; and presents a sustained, logical and cohesive business report integrating relevant business terminology and concepts (17–20)\n• Provides a description of the behavioural approach to management; provides some reasons in favour of TWO promotion strategies; provides an explanation of the human resource strategies the business can implement; and presents a logical and cohesive business report using relevant business terminology and concepts (13–16)\n• Sketches in general terms the behavioural approach to management; provides some reasons in favour of ONE promotion strategy; describes human resource strategies the business can implement in recruiting suitable staff and/or reducing staff turnover; and includes features of a business report and uses some business terminology (9–12)\n• Identifies the feature/s or characteristic/s of the behavioural approach to management and/or describes a promotion strategy/ies and/or outlines some human resource strategies; communicates using some business terminology and concepts (5–8)\n• Provides some general statement about behavioural approach, promotional strategies and/or human resources; uses basic business terminology (1–4)\n\nAnswers could include:\nCharacteristics and features of behavioural management approach: a humanistic approach – the belief that employees are the business's most important resource; the satisfaction of employees' economic and social needs; employee participation in decision-making; a team-based approach; the belief that managers need good interpersonal skills; the emergence of a democratic leadership approach. Main management functions: leading, motivating, communicating, and fostering effective teamwork/group dynamics within flatter organisational structures.\nPromotion strategies may include: advertising (TV, radio, print, online, product placement); sales promotion (discounts/coupons, flash sales, BOGOF, samples/free trials, loyalty programs); public relations (press releases, media/bloggers, sponsorships); direct marketing (email, direct mail, telemarketing, SMS marketing); digital marketing (social media marketing, influencer marketing); personal selling (door-to-door sales and sales reps).\nHuman resource strategies: recruitment and selection strategies to acquire suitable staff and, combined with valuing staff, reduce turnover.",
    "sample": ""
  }
];
