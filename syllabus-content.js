// ====================================================================
// Preliminary Business Studies — syllabus "students learn about" content
// Dot points from the NESA Business Studies Stage 6 Syllabus (2010).
// Used by the Syllabus Drills.
//
//   t = the dot point, as close to NESA wording as readability allows
//   k = key terms inside t that can be blanked out for the cloze game
//       (each MUST appear verbatim, same case, inside t)
//   x = true  -> never used as a "guess the sub-area" prompt or as a
//                decoy, because the wording is generic or duplicated
//                across sub-areas
// ====================================================================
"use strict";

const SYL_CONTENT = {
  "Nature of Business": {
    "Role of business": [
      {t:"The nature of a business — organising resources to produce goods and services", k:["produce goods and services"]},
      {t:"Business as a means of generating profit for its owners", k:["generating profit"]},
      {t:"Business as a major source of employment in the economy", k:["source of employment"]},
      {t:"The role of business in generating income for individuals and the community", k:["generating income"]},
      {t:"Business and the provision of choice for consumers", k:["provision of choice"]},
      {t:"Business as a driver of innovation in the economy", k:["driver of innovation"]},
      {t:"Entrepreneurship and the willingness to take risks in establishing a business", k:["Entrepreneurship"]},
      {t:"Risk-taking as a feature of business activity", k:["Risk-taking"]},
      {t:"The role of business in the creation of wealth", k:["creation of wealth"]},
      {t:"The contribution of business activity to quality of life", k:["quality of life"], x:true}
    ],
    "Types of businesses": [
      {t:"Classification of businesses by size — small to medium enterprises and large businesses", k:["small to medium enterprises and large businesses"]},
      {t:"Classification of businesses by scope of operations — local, national and global", k:["local, national and global"]},
      {t:"Classification of businesses by industry — primary, secondary, tertiary, quaternary and quinary", k:["primary, secondary, tertiary, quaternary and quinary"]},
      {t:"Primary industry businesses and the extraction of raw materials", k:["Primary industry"]},
      {t:"Secondary industry businesses and the processing of raw materials into finished goods", k:["Secondary industry"]},
      {t:"Tertiary industry businesses and the provision of services", k:["Tertiary industry"]},
      {t:"Classification of businesses by legal structure — sole trader, partnership, private company, public company and government enterprise", k:["sole trader, partnership, private company, public company and government enterprise"]},
      {t:"The sole trader as a legal structure for business", k:["sole trader"]},
      {t:"The partnership as a legal structure for business", k:["partnership"]},
      {t:"Private and public companies as legal structures for business", k:["Private and public companies"]},
      {t:"Government enterprises as a legal structure for business", k:["Government enterprises"]},
      {t:"Factors influencing the choice of legal structure — size, ownership and finance", k:["size, ownership and finance"]}
    ],
    "Influences in the business environment": [
      {t:"External influences on a business — economic and financial factors", k:["economic and financial factors"]},
      {t:"External influences on a business — geographic and social factors", k:["geographic and social factors"]},
      {t:"External influences on a business — legal and political factors", k:["legal and political factors"]},
      {t:"External influences on a business — institutional and technological factors", k:["institutional and technological factors"]},
      {t:"External influences on a business — the competitive situation and markets", k:["competitive situation and markets"]},
      {t:"Internal influences on a business — the products or services offered", k:["products or services offered"]},
      {t:"Internal influences on a business — location", k:["location"], x:true},
      {t:"Internal influences on a business — the resources available to it", k:["resources available"]},
      {t:"Internal influences on a business — management and business culture", k:["management and business culture"]},
      {t:"Stakeholders and their influence on business decision-making", k:["Stakeholders"]},
      {t:"The interests of different stakeholders in a business", k:["different stakeholders"], x:true}
    ],
    "Business growth and decline": [
      {t:"The stages of the business life cycle — establishment, growth, maturity and post-maturity", k:["establishment, growth, maturity and post-maturity"]},
      {t:"The establishment stage of the business life cycle", k:["establishment stage"]},
      {t:"The growth stage of the business life cycle", k:["growth stage"]},
      {t:"The maturity stage of the business life cycle", k:["maturity stage"]},
      {t:"The post-maturity stage of the business life cycle", k:["post-maturity stage"]},
      {t:"Responding to the challenges faced by a business at each stage of the business life cycle", k:["challenges faced"]},
      {t:"Factors contributing to business decline", k:["business decline"]},
      {t:"Voluntary cessation of a business", k:["Voluntary cessation"]},
      {t:"Involuntary cessation of a business through liquidation", k:["liquidation"]},
      {t:"The difference between voluntary and involuntary cessation of a business", k:["voluntary and involuntary cessation"], x:true}
    ]
  },

  "Business Management": {
    "Nature of management": [
      {t:"The features of effective management", k:["effective management"]},
      {t:"Interpersonal skills as a feature of effective management", k:["Interpersonal skills"]},
      {t:"Communication skills as a feature of effective management", k:["Communication skills"]},
      {t:"Strategic thinking as a management skill", k:["Strategic thinking"]},
      {t:"Vision as a management skill", k:["Vision"]},
      {t:"Problem-solving as a management skill", k:["Problem-solving"]},
      {t:"Decision-making as a management skill", k:["Decision-making"]},
      {t:"Flexibility and adaptability as management skills", k:["Flexibility and adaptability"]},
      {t:"Reconciling conflicting stakeholder interests as a management skill", k:["conflicting stakeholder interests"]},
      {t:"The range of skills required for effective management", k:["range of skills"], x:true}
    ],
    "Achieving business goals": [
      {t:"Profit as a goal of business", k:["Profit as a goal"]},
      {t:"Market share as a goal of business", k:["Market share"]},
      {t:"Growth as a goal of business", k:["Growth as a goal"]},
      {t:"Share price as a goal of business", k:["Share price"]},
      {t:"Social and environmental objectives as goals of business", k:["Social and environmental objectives"]},
      {t:"Achieving a mix of business goals", k:["mix of business goals"]},
      {t:"Staff involvement in achieving business goals through innovation", k:["innovation"]},
      {t:"Staff involvement in achieving business goals through motivation", k:["motivation"]},
      {t:"Staff involvement in achieving business goals through mentoring", k:["mentoring"]},
      {t:"Staff involvement in achieving business goals through training", k:["training"]}
    ],
    "Management approaches": [
      {t:"The classical approach to management — planning, organising and controlling", k:["planning, organising and controlling"]},
      {t:"The classical approach to management and hierarchical organisational structures", k:["hierarchical organisational structures"]},
      {t:"Autocratic leadership as a feature of the classical approach to management", k:["Autocratic leadership"]},
      {t:"The behavioural approach to management — leading, motivating and communicating", k:["leading, motivating and communicating"]},
      {t:"The behavioural approach to management and the use of teams", k:["use of teams"]},
      {t:"Participative and democratic leadership as a feature of the behavioural approach to management", k:["Participative and democratic leadership"]},
      {t:"The contingency approach to management — adapting to changing circumstances", k:["adapting to changing circumstances"]},
      {t:"Comparing the classical, behavioural and contingency approaches to management", k:["classical, behavioural and contingency approaches"], x:true},
      {t:"The role of hierarchical structure in the classical approach to management", k:["hierarchical structure"], x:true},
      {t:"The influence of leadership style on different management approaches", k:["leadership style"], x:true}
    ],
    "The management process": [
      {t:"The management process — coordinating the key business functions and resources", k:["coordinating the key business functions"]},
      {t:"Operations — producing goods and services through the production process", k:["production process"]},
      {t:"Operations — quality management", k:["quality management"]},
      {t:"Marketing — identifying the target market", k:["target market"]},
      {t:"Marketing — the elements of the marketing mix", k:["marketing mix"]},
      {t:"Finance — the cash flow statement", k:["cash flow statement"]},
      {t:"Finance — the income statement", k:["income statement"]},
      {t:"Finance — the balance sheet", k:["balance sheet"]},
      {t:"Human resources — recruitment of staff", k:["recruitment"]},
      {t:"Human resources — training of staff", k:["training of staff"]},
      {t:"Human resources — employment contracts and separation from a business", k:["employment contracts and separation"]},
      {t:"Ethical business behaviour in the management process", k:["Ethical business behaviour"]}
    ],
    "Management and change": [
      {t:"Management responding to internal influences requiring change", k:["internal influences"], x:true},
      {t:"Management responding to external influences requiring change", k:["external influences"], x:true},
      {t:"Identifying the need for change within a business", k:["Identifying the need for change"]},
      {t:"The use of business information systems in managing change", k:["business information systems"]},
      {t:"Setting achievable goals when managing change", k:["achievable goals"]},
      {t:"Resistance to change within a business", k:["Resistance to change"]},
      {t:"The role of management consultants in managing change", k:["management consultants"]},
      {t:"Overcoming resistance to change in a business", k:["Overcoming resistance to change"]},
      {t:"The changing nature of the external environment and its impact on business", k:["changing nature of the external environment"], x:true},
      {t:"Strategies for managing change effectively", k:["managing change effectively"], x:true}
    ]
  },

  "Business Planning": {
    "Small to medium enterprises": [
      {t:"The definition of a small to medium enterprise (SME)", k:["small to medium enterprise (SME)"]},
      {t:"The role of SMEs in the economy", k:["role of SMEs"]},
      {t:"The economic contribution of SMEs", k:["economic contribution"]},
      {t:"Factors contributing to the success of SMEs", k:["success of SMEs"]},
      {t:"Factors contributing to the failure of SMEs", k:["failure of SMEs"]},
      {t:"The significance of SMEs to employment", k:["significance of SMEs"], x:true},
      {t:"The diversity of SMEs across industries", k:["diversity of SMEs"]},
      {t:"The contribution of SMEs to innovation", k:["contribution of SMEs to innovation"]},
      {t:"The relative importance of SMEs compared with large businesses", k:["relative importance"], x:true},
      {t:"Challenges faced by SMEs in a competitive market", k:["Challenges faced by SMEs"]}
    ],
    "Influences in establishing an SME": [
      {t:"Personal qualities required to establish an SME — qualifications, skills and motivation", k:["qualifications, skills and motivation"]},
      {t:"Personal qualities required to establish an SME — entrepreneurship, cultural background and gender", k:["entrepreneurship, cultural background and gender"]},
      {t:"Sources of information used when establishing an SME", k:["Sources of information"]},
      {t:"Developing the business idea and assessing competition", k:["business idea and assessing competition"]},
      {t:"Establishment options — starting a new business", k:["starting a new business"]},
      {t:"Establishment options — buying an existing business", k:["buying an existing business"]},
      {t:"Establishment options — purchasing a franchise", k:["purchasing a franchise"]},
      {t:"Market considerations — the goods or services to be offered and their price", k:["goods or services to be offered and their price"]},
      {t:"Market considerations — location", k:["location"], x:true},
      {t:"Finance — the source and cost of finance for an SME", k:["source and cost of finance"]},
      {t:"Legal aspects — registering a business name and complying with zoning and other regulations", k:["registering a business name and complying with zoning and other regulations"]},
      {t:"Human resources — the skills and costs of staff, including wage and non-wage costs", k:["wage and non-wage costs"]},
      {t:"Taxation obligations at the federal, state and local levels", k:["federal, state and local levels"]}
    ],
    "The business planning process": [
      {t:"Sources of ideas for business planning, including situational analysis", k:["situational analysis"]},
      {t:"Developing a vision for the business", k:["Developing a vision"]},
      {t:"Setting goals and objectives in the business plan", k:["goals and objectives"]},
      {t:"Organising resources in the business plan — operations and marketing", k:["operations and marketing"]},
      {t:"Organising resources in the business plan — finance and human resources", k:["finance and human resources"]},
      {t:"Forecasting total revenue in the business plan", k:["total revenue"]},
      {t:"Forecasting total cost in the business plan", k:["total cost"]},
      {t:"Break-even analysis in business planning", k:["Break-even analysis"]},
      {t:"Cash flow projections in business planning", k:["Cash flow projections"]},
      {t:"Monitoring and evaluation of sales against the business plan", k:["Monitoring and evaluation of sales"]},
      {t:"Monitoring and evaluation of budgets and profit against the business plan", k:["budgets and profit"]},
      {t:"Taking corrective action based on monitoring and evaluation", k:["Taking corrective action"]}
    ],
    "Critical issues in business success and failure": [
      {t:"The importance of a business plan to business success", k:["importance of a business plan"]},
      {t:"Staffing and the use of teams as a factor in business success", k:["Staffing and the use of teams"]},
      {t:"Trend analysis as a factor in business success", k:["Trend analysis"]},
      {t:"Identifying a competitive advantage", k:["Identifying a competitive advantage"]},
      {t:"Sustaining a competitive advantage", k:["Sustaining a competitive advantage"]},
      {t:"Avoiding over-extension of finance and other resources", k:["over-extension of finance and other resources"]},
      {t:"Using technology as a factor in business success", k:["Using technology"]},
      {t:"Economic conditions as a factor in business success and failure", k:["Economic conditions"]},
      {t:"The consequences of poor planning for business failure", k:["poor planning"], x:true},
      {t:"Common causes of business failure", k:["Common causes of business failure"], x:true}
    ]
  }
};

// ---- flattened views used by the drills ----
const SYL_ITEMS = (() => {
  const out = [];
  for (const [topic, subs] of Object.entries(SYL_CONTENT)) {
    for (const [sub, items] of Object.entries(subs)) {
      items.forEach((it, i) => {
        out.push({ id: topic + '|' + sub + '|' + i, topic, sub, t: it.t,
                   k: it.k || [], x: !!it.x, subKey: topic + '|' + sub });
      });
    }
  }
  return out;
})();

const SYL_SUBS = (() => {
  const out = [];
  for (const [topic, subs] of Object.entries(SYL_CONTENT))
    for (const sub of Object.keys(subs)) out.push({ topic, sub, key: topic + '|' + sub });
  return out;
})();
