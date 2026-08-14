// Preliminary Business Studies cause-and-effect chains
// Each chain is an ordered causal sequence a student must rebuild. Steps are
// stored in the CORRECT order and shuffled at run time.
// Fields: id, title, topic, sub, steps[] (ordered), why (one-line explanation)
const CHAINS = [

// ============ NATURE OF BUSINESS · Role of business ============
{id:"nb-profit-reinvest", title:"Profit reinvestment and wealth creation", topic:"Nature of Business", sub:"Role of business",
 steps:["A business earns a profit after satisfying customer needs","The owner reinvests part of that profit in the business","New equipment or premises are purchased","Productive capacity expands","The business creates more jobs and income","Wealth is generated for the wider community"],
 why:"Reinvested profit is how business activity generates broader wealth and living standards, not just a reward for risk."},

{id:"nb-entrepreneur-risk", title:"Entrepreneurship and risk-reward", topic:"Nature of Business", sub:"Role of business",
 steps:["An entrepreneur identifies an unmet need in the market","They organise the resources needed to exploit the opportunity","Capital, labour and time are committed to the new venture","The venture faces the risk of failure","If the business succeeds, the entrepreneur is rewarded with profit","Successful risk-taking encourages further innovation in the economy"],
 why:"Profit is the reward that compensates entrepreneurs for accepting the risk inherent in starting a business."},

{id:"nb-innovation-quality-of-life", title:"Innovation and quality of life", topic:"Nature of Business", sub:"Role of business",
 steps:["A business invests in research and develops an innovative product","The product solves a problem more effectively than existing options","Consumers adopt the new product","Demand for the business's output grows","The business expands and employs more staff","Incomes rise and community quality of life improves"],
 why:"Innovation links a business's own growth to broader improvements in living standards, a key role of business in society."},

// ============ NATURE OF BUSINESS · Types of businesses ============
{id:"nb-liability-risk", title:"Choosing a company structure to limit risk", topic:"Nature of Business", sub:"Types of businesses",
 steps:["A sole trader plans to expand into a riskier new market","Unlimited liability would expose personal assets to business debts","The owner registers the business as a private company","Shareholders now have limited liability","Personal assets are protected if the business fails","The owner is more willing to take on the expansion risk"],
 why:"The choice of legal structure directly affects how much personal risk an owner is willing to accept."},

{id:"nb-public-listing", title:"From private company to public listing", topic:"Nature of Business", sub:"Types of businesses",
 steps:["A private company wants to fund a major expansion","Its existing shareholders cannot provide enough capital","The company converts to a public company","Shares are offered for sale to the general public on the stock exchange","A much larger pool of capital becomes available","The business can fund large-scale growth"],
 why:"Listing on the stock exchange gives a company access to capital that private ownership cannot supply."},

{id:"nb-sector-shift", title:"Growth of the tertiary sector", topic:"Nature of Business", sub:"Types of businesses",
 steps:["Rising incomes let households spend more on services rather than goods","Demand for retail, health, education and finance services grows","Businesses in the tertiary industry expand to meet this demand","Employment shifts from primary and secondary industries towards services","The tertiary sector becomes the largest source of jobs","The structure of the economy changes as it develops"],
 why:"As economies develop, consumer spending and employment shift from producing goods towards providing services."},

// ============ NATURE OF BUSINESS · Influences in the business environment ============
{id:"nb-zoning-relocate", title:"Zoning restricts a business's options", topic:"Nature of Business", sub:"Influences in the business environment",
 steps:["A home-based business grows and needs larger premises","Local council zoning laws restrict industrial use of nearby residential land","The business cannot expand at its current site","It must search for premises in a zoned commercial or industrial area","Relocation costs and lead time are added to the expansion","The business's growth plans are delayed"],
 why:"Zoning is an external, legal influence that constrains where and how a business can operate."},

{id:"nb-interest-rate-external", title:"Rising interest rates as an external influence", topic:"Nature of Business", sub:"Influences in the business environment",
 steps:["The Reserve Bank raises interest rates","The cost of servicing business loans increases","The business's cash flow available for other spending falls","Consumers also face higher mortgage repayments","Consumer spending on discretionary goods falls","The business's sales revenue declines"],
 why:"Economic influences outside a business's control, such as interest rates, affect both its costs and its customers' spending."},

{id:"nb-new-competitor", title:"A new competitor enters the market", topic:"Nature of Business", sub:"Influences in the business environment",
 steps:["A new competitor enters a business's local market","The competitive situation the business faces intensifies","Some customers switch to the new competitor","The business's market share falls","Management reviews pricing and service to respond","The business differentiates itself to retain customers"],
 why:"Changes in the competitive situation are an external influence that forces a business to actively respond or lose market share."},

{id:"nb-technology-influence", title:"Technological change reshapes a business's operations", topic:"Nature of Business", sub:"Influences in the business environment",
 steps:["A new technology becomes available in a business's industry","Competitors begin adopting it to cut costs","The business risks falling behind if it does not adapt","It invests in the new technology and retrains staff","Production processes become faster and cheaper","The business remains competitive in its market"],
 why:"Technological influence is an external factor that businesses must respond to internally or risk losing competitiveness."},

// ============ NATURE OF BUSINESS · Business growth and decline ============
{id:"nb-growth-cashflow", title:"Growth stage cash-flow pressure", topic:"Nature of Business", sub:"Business growth and decline",
 steps:["A business enters the growth stage of its life cycle","Sales increase rapidly","More stock and staff must be paid for before customers pay their accounts","Cash outflows increase faster than cash inflows","The business experiences a cash-flow shortage","Additional finance is needed to sustain the growth"],
 why:"Rapid sales growth is a classic trigger for cash-flow problems because expenses are often paid before revenue is collected."},

{id:"nb-maturity-renewal", title:"Renewal at post-maturity", topic:"Nature of Business", sub:"Business growth and decline",
 steps:["A business reaches the maturity stage and sales growth slows","Competitors catch up and the market becomes saturated","The business reaches post-maturity with falling profit growth","Management decides to pursue a renewal strategy","New products are launched or the business merges with another firm","The business cycle begins again with a new period of growth"],
 why:"Post-maturity forces a choice between renewal, which restarts the life cycle, and decline towards closure."},

{id:"nb-liquidation", title:"From financial distress to liquidation", topic:"Nature of Business", sub:"Business growth and decline",
 steps:["A business persistently fails to generate enough revenue to cover its costs","Debts to suppliers and lenders accumulate","Creditors demand repayment the business cannot make","The business is unable to meet its financial obligations","Creditors move to have the business wound up","Its assets are sold in liquidation to repay what is owed"],
 why:"Liquidation is the involuntary end point of a business life cycle when accumulated debt cannot be repaid."},

// ============ BUSINESS MANAGEMENT · Nature of management ============
{id:"bm-strategic-thinking-chain", title:"Strategic thinking anticipates change", topic:"Business Management", sub:"Nature of management",
 steps:["A manager monitors trends in the external environment","They anticipate a shift in consumer preferences before it fully emerges","Strategic thinking allows the business to plan a response early","Resources are redirected towards the emerging opportunity","The business adapts ahead of its competitors","It gains a competitive advantage from acting first"],
 why:"Strategic thinking is valuable because it lets a manager act on change before it forces a reactive, costly response."},

{id:"bm-poor-interpersonal", title:"Weak interpersonal skills undermine a manager", topic:"Business Management", sub:"Nature of management",
 steps:["A manager lacks strong interpersonal skills","Communication with staff becomes unclear and infrequent","Employees feel uninformed and undervalued","Trust between staff and management breaks down","Cooperation and morale decline","Business performance suffers"],
 why:"Interpersonal skills are a core management skill because most management is carried out through other people."},

{id:"bm-vision-alignment", title:"A clear vision aligns staff effort", topic:"Business Management", sub:"Nature of management",
 steps:["A manager articulates a clear long-term vision for the business","The vision is communicated to all employees","Staff understand how their role contributes to that vision","Individual effort becomes aligned with business priorities","Coordination across departments improves","The business moves consistently towards its long-term direction"],
 why:"A shared vision gives employees a common reference point, reducing wasted or conflicting effort."},

{id:"bm-poor-decision", title:"Poor decision-making under pressure", topic:"Business Management", sub:"Nature of management",
 steps:["A manager faces a decision with incomplete information and a tight deadline","They fail to properly weigh the available alternatives","A decision is made without adequate analysis","The chosen course of action does not suit the situation","The business suffers wasted resources or lost sales","Management credibility with stakeholders is damaged"],
 why:"Decision-making is a core management skill, and rushed or poorly informed decisions carry direct costs for the business."},

// ============ BUSINESS MANAGEMENT · Achieving business goals ============
{id:"bm-market-share-goal", title:"Pursuing market share as a goal", topic:"Business Management", sub:"Achieving business goals",
 steps:["A business sets increased market share as a primary goal","It lowers prices and increases advertising to attract customers","Sales volume grows faster than the overall market","The business's percentage of total market sales rises","Short-run profit margins are sacrificed for volume","The business gains a stronger long-term competitive position"],
 why:"Market share and short-run profit can be competing goals, requiring a trade-off in strategy."},

{id:"bm-social-objectives", title:"Pursuing social objectives", topic:"Business Management", sub:"Achieving business goals",
 steps:["A business commits to a social objective such as supporting the local community","It sponsors local programs and sources from local suppliers","The community and customers view the business more favourably","Brand reputation and customer loyalty improve","Sales and long-term profitability are supported","Meeting a social goal ends up reinforcing the business's financial goals"],
 why:"Pursuing social objectives can be complementary to profit rather than purely a cost, by building reputation and loyalty."},

{id:"bm-motivation-training", title:"Training lifts staff motivation and goal achievement", topic:"Business Management", sub:"Achieving business goals",
 steps:["A business identifies a skills gap among its staff","It invests in a structured training program","Employees develop new skills and greater confidence","Staff feel more capable and valued by the business","Motivation and job satisfaction increase","Productivity rises and business goals are achieved faster"],
 why:"Training connects staff development directly to motivation, and motivation to the achievement of business goals."},

{id:"bm-mentoring-succession", title:"Mentoring builds future management capacity", topic:"Business Management", sub:"Achieving business goals",
 steps:["A business pairs junior employees with experienced mentors","Mentees gain practical knowledge and confidence over time","They develop skills the business will need in future leaders","A pipeline of capable internal candidates for management roles is built","The business can promote from within when senior roles become vacant","Continuity of management and achievement of long-term goals is supported"],
 why:"Mentoring is a staff development strategy that builds the leadership capacity a business needs to keep achieving its goals."},

{id:"bm-environmental-goal-cost", title:"Environmental objectives raise short-term costs", topic:"Business Management", sub:"Achieving business goals",
 steps:["A business sets a goal of reducing its environmental impact","It switches to more expensive sustainable materials and processes","Production costs rise in the short term","The business markets its environmental commitment to customers","Environmentally conscious consumers are attracted to the brand","Long-term sales growth offsets the higher short-term costs"],
 why:"Environmental objectives often raise costs initially but can be balanced against long-term gains in demand and reputation."},

// ============ BUSINESS MANAGEMENT · Management approaches ============
{id:"bm-behavioural-turnover", title:"A behavioural approach lowers staff turnover", topic:"Business Management", sub:"Management approaches",
 steps:["A business adopts a behavioural approach to management","Employees are consulted and involved in decisions that affect their work","Staff feel more valued and engaged in their roles","Job satisfaction rises","Staff turnover falls","Productivity improves as experienced employees remain with the business"],
 why:"The behavioural approach's focus on involvement and communication is what drives the fall in turnover and rise in productivity."},

{id:"bm-classical-rigid", title:"A classical approach struggles with rapid change", topic:"Business Management", sub:"Management approaches",
 steps:["A business relies on a classical, hierarchical approach to management","Decisions must pass through several layers of authority","Instructions and approvals take longer to move through the business","The business is slow to respond when market conditions change quickly","Competitors using flatter structures react faster","The business loses ground to more agile rivals"],
 why:"The classical approach's rigid hierarchy is well suited to stable conditions but a poor fit for rapidly changing markets."},

{id:"bm-autocratic-resentment", title:"Autocratic leadership breeds resentment", topic:"Business Management", sub:"Management approaches",
 steps:["A manager adopts an autocratic leadership style","Decisions are made without consulting employees","Staff feel their knowledge and opinions are ignored","Resentment and disengagement grow among employees","Absenteeism and staff turnover increase","The business bears the cost of constantly recruiting and retraining staff"],
 why:"An autocratic style can be efficient for quick decisions but risks alienating staff over time."},

{id:"bm-contingency-adaptation", title:"A contingency approach adapts to the situation", topic:"Business Management", sub:"Management approaches",
 steps:["A business faces a sudden crisis requiring fast, decisive action","Management temporarily adopts a more autocratic style to respond quickly","Once the crisis passes, staff input again becomes valuable for ongoing decisions","Management shifts back towards a more participative style","The approach used matches the demands of each situation","The business handles both crises and normal operations effectively"],
 why:"The contingency approach recognises that no single management style suits every situation a business faces."},

{id:"bm-teams-collaboration", title:"Teams improve problem-solving", topic:"Business Management", sub:"Management approaches",
 steps:["A business restructures staff into small project teams","Employees from different skill areas work together on shared tasks","Diverse perspectives are brought to bear on problems","Communication and idea-sharing between staff increase","Solutions are developed more quickly and creatively","Business performance on complex projects improves"],
 why:"Teams are a feature of the behavioural approach because pooling diverse skills improves problem-solving over rigid individual roles."},

// ============ BUSINESS MANAGEMENT · The management process ============
{id:"bm-quality-control-vs-tqm", title:"Moving from quality control to TQM", topic:"Business Management", sub:"The management process",
 steps:["A business relies only on inspecting finished products for defects","Faulty items are still being discovered after they are produced","Wasted materials and rework raise costs","The business adopts total quality management across all its processes","Every employee takes responsibility for quality at each stage","Defect rates fall and production costs are reduced"],
 why:"TQM prevents defects throughout the process, rather than only catching them after production like quality control alone."},

{id:"bm-marketing-mix-price-cut", title:"Cutting price within the marketing mix", topic:"Business Management", sub:"The management process",
 steps:["A business identifies its target market is highly price-sensitive","It lowers the price element of its marketing mix","The product becomes more affordable relative to competitors","Quantity demanded by the target market increases","Sales volume rises","Total revenue increases despite the lower price per unit"],
 why:"A pricing decision in the marketing mix directly changes quantity demanded, and revenue depends on how the two combine."},

{id:"bm-sales-promotion-shortterm", title:"A sales promotion lifts short-term sales", topic:"Business Management", sub:"The management process",
 steps:["A business runs a limited-time sales promotion offering a discount","Customers are attracted by the short-term price incentive","Sales volume increases sharply during the promotion period","Some of this demand is brought forward from future purchases","The promotion ends and sales settle back towards normal levels","The business must plan future promotions to sustain interest"],
 why:"Sales promotions are effective at generating a short-term spike in sales but do not by themselves build lasting demand."},

{id:"bm-cashflow-monitoring", title:"Monitoring the cash flow statement", topic:"Business Management", sub:"The management process",
 steps:["A business prepares a cash flow statement each month","It notices cash outflows are consistently exceeding cash inflows","Management identifies the business is heading towards a liquidity shortfall","Corrective action is taken, such as chasing overdue customer payments","Cash inflows improve relative to outflows","The business avoids being unable to pay its short-term bills"],
 why:"The cash flow statement lets a business detect a liquidity problem early enough to correct it before it becomes a crisis."},

{id:"bm-recruitment-oncosts", title:"Recruitment decisions and on-costs", topic:"Business Management", sub:"The management process",
 steps:["A growing business decides to hire additional staff","The human resources function recruits and selects new employees","Wages must be paid alongside on-costs such as superannuation and workers' compensation","Total labour costs rise by more than the advertised wage alone","The business budgets for these additional on-costs in its finance function","Overall operating costs increase as the workforce grows"],
 why:"On-costs mean the true cost of employing staff is higher than the wage rate alone, which HR and finance must plan for together."},

{id:"bm-separation-morale", title:"Redundancies and staff morale", topic:"Business Management", sub:"The management process",
 steps:["A business experiences falling demand for its product","Management decides on involuntary separations through redundancy","Remaining staff witness colleagues losing their jobs","Job security concerns spread among the remaining workforce","Morale and motivation among remaining staff decline","Productivity falls just as the business needs it to recover"],
 why:"Involuntary separation affects not just those who leave but the morale and productivity of the staff who remain."},

{id:"bm-publicity-crisis", title:"Negative publicity damages reputation", topic:"Business Management", sub:"The management process",
 steps:["A business is involved in a product safety incident","Media coverage of the incident spreads without the business's control","Negative publicity reaches a wide audience quickly","Customers lose confidence in the brand","Sales fall as customers switch to competitors","The business must invest heavily in marketing to rebuild its reputation"],
 why:"Unlike advertising, publicity is not controlled by the business and can damage reputation just as quickly as it can help it."},

// ============ BUSINESS MANAGEMENT · Management and change ============
{id:"bm-need-for-change-tech", title:"Identifying the need for change", topic:"Business Management", sub:"Management and change",
 steps:["A business notices its sales are falling relative to competitors","Management investigates the cause of the decline","It recognises its production technology has become outdated","The need for change is formally identified","A plan to introduce new equipment is developed","The business begins implementing change to restore its competitiveness"],
 why:"Effective change management starts with correctly identifying that current practices are no longer suited to circumstances."},

{id:"bm-resistance-to-change", title:"Resistance slows the change process", topic:"Business Management", sub:"Management and change",
 steps:["Management announces a major restructuring of work processes","Employees fear the change will threaten their job security","Staff resist the new processes and continue old habits","Implementation of the change is delayed","Management increases communication and consultation with staff","Resistance eases and the change is gradually adopted"],
 why:"Resistance to change is a predictable human response that managers must address through communication, not just direction."},

{id:"bm-consultants-change", title:"Management consultants guide a change program", topic:"Business Management", sub:"Management and change",
 steps:["A business identifies a need for change beyond its internal expertise","It engages external management consultants","The consultants analyse the business and recommend a change strategy","Achievable goals and a timeline are set for the change","Staff are guided through implementation with expert support","The change is more likely to be successfully embedded"],
 why:"Consultants bring specialist knowledge and an outside perspective that can improve the odds of a change program succeeding."},

{id:"bm-info-systems-change", title:"Information systems support change", topic:"Business Management", sub:"Management and change",
 steps:["A business plans to change how it processes customer orders","It first upgrades its business information systems to support the new process","Staff are trained to use the new systems","Data on orders becomes more accurate and immediate","Management can monitor the change as it is implemented","Problems are identified and corrected quickly during the rollout"],
 why:"Business information systems give management the data needed to plan, implement and monitor a change effectively."},

{id:"bm-unrealistic-goals-change", title:"Unrealistic goals undermine a change program", topic:"Business Management", sub:"Management and change",
 steps:["Management sets an overly ambitious deadline for implementing change","Staff are unable to meet the milestones set for them","Repeated failure to hit targets discourages employees","Confidence in the change program declines","Staff disengage from the change process","The change program stalls before it is completed"],
 why:"Setting achievable goals is essential in change management because unrealistic targets undermine staff motivation and momentum."},

// ============ BUSINESS PLANNING · Small to medium enterprises ============
{id:"bp-sme-personal-service", title:"Personal service as an SME advantage", topic:"Business Planning", sub:"Small to medium enterprises",
 steps:["An SME owner works closely with customers on a daily basis","They get to know individual customer needs and preferences","The business tailors its service to those individual customers","Customers value the personalised experience over a large chain","Customer loyalty to the SME increases","Repeat business helps the SME compete against larger rivals"],
 why:"Personalised service is a structural advantage SMEs hold over large businesses because of their close owner-customer relationship."},

{id:"bp-sme-employment-role", title:"SMEs and local employment", topic:"Business Planning", sub:"Small to medium enterprises",
 steps:["An SME opens in a regional town","It hires staff from the local community","Household incomes in the town rise","Local spending at other businesses increases","Demand for goods and services in the town grows","The SME's economic contribution supports the wider local economy"],
 why:"SMEs are a significant source of local employment, which is part of their broader economic contribution."},

{id:"bp-sme-poor-recordkeeping", title:"Poor record-keeping contributes to SME failure", topic:"Business Planning", sub:"Small to medium enterprises",
 steps:["An SME owner does not keep accurate financial records","They lose track of which customers still owe money","Cash owed to the business is not collected on time","The business experiences a cash-flow shortfall","Bills to suppliers and staff cannot be paid on time","The business risks failure due to poor financial management"],
 why:"Inadequate record-keeping is repeatedly identified as a common, avoidable cause of small business failure."},

{id:"bp-sme-market-research", title:"Market research supports SME success", topic:"Business Planning", sub:"Small to medium enterprises",
 steps:["A prospective SME owner conducts market research before opening","They identify genuine unmet demand in the local area","The business idea is tailored to match what customers actually want","The business attracts customers from its first weeks of trading","Revenue meets expectations set out in the business plan","The SME establishes a viable, ongoing customer base"],
 why:"Market research is one of the key factors contributing to SME success because it grounds the business idea in real demand."},

{id:"bp-sme-insufficient-capital", title:"Insufficient start-up capital threatens an SME", topic:"Business Planning", sub:"Small to medium enterprises",
 steps:["An entrepreneur underestimates the capital needed to establish their SME","The business opens with only enough funds to cover initial set-up costs","Unexpected early expenses arise before the business is generating steady revenue","The business cannot cover these costs from its cash reserves","It is forced to seek expensive short-term finance or delay payments","The SME's viability is threatened in its first year of trading"],
 why:"Underestimating start-up capital is a classic planning failure that leaves an SME exposed to any early setback."},

// ============ BUSINESS PLANNING · Influences in establishing an SME ============
{id:"bp-franchise-reduced-risk", title:"Franchising reduces establishment risk", topic:"Business Planning", sub:"Influences in establishing an SME",
 steps:["An entrepreneur wants to start a business but has little industry experience","They choose to buy a franchise rather than start an independent business","The franchisor provides a proven business model, branding and training","The new business benefits from an already-tested system","The likelihood of early failure is reduced compared to a completely new venture","The franchisee accepts less independence in exchange for this lower risk"],
 why:"Franchising trades some independence for a proven system, which is why it typically carries lower establishment risk than starting from scratch."},

{id:"bp-existing-business-goodwill", title:"Buying an existing business for its goodwill", topic:"Business Planning", sub:"Influences in establishing an SME",
 steps:["An entrepreneur decides to buy an existing, profitable business rather than start a new one","The business already has an established customer base and supplier relationships","Trading and cash flow can begin immediately upon purchase","The entrepreneur avoids the slow build-up period of a new business","The price paid includes a premium for this existing goodwill","The higher purchase cost is offset by lower establishment risk"],
 why:"Buying an existing business exchanges a higher up-front cost for the lower risk of an already-proven customer base."},

{id:"bp-new-business-control", title:"Starting a new business trades control for risk", topic:"Business Planning", sub:"Influences in establishing an SME",
 steps:["An entrepreneur chooses to establish a completely new business","They have full control over its location, branding and processes","No existing systems or reputation can be relied upon","The business must build its customer base from nothing","Start-up costs and risk of early failure are higher than other establishment options","In return, the owner keeps complete independence over how the business is run"],
 why:"Establishing a new business maximises owner control but removes the risk-reducing advantages that buying or franchising offer."},

{id:"bp-market-competition-idea", title:"Assessing competition when forming the business idea", topic:"Business Planning", sub:"Influences in establishing an SME",
 steps:["An entrepreneur develops an idea for a new business","They research the level of existing competition in that market","They discover the market is already saturated with similar businesses","The original business idea is judged too risky to proceed with unchanged","The entrepreneur modifies the idea to target an underserved niche","The revised business idea has a stronger chance of establishing a customer base"],
 why:"Assessing the competitive situation is a critical part of evaluating a business idea before committing resources to it."},

{id:"bp-finance-source-interest", title:"The cost of the finance source chosen", topic:"Business Planning", sub:"Influences in establishing an SME",
 steps:["A new business needs funds to purchase equipment and stock","The owner borrows from a bank rather than using personal savings","The loan carries an ongoing interest cost","Interest payments add to the business's fixed costs each month","Higher fixed costs raise the break-even point the business must reach","The business needs greater sales volume to become profitable"],
 why:"The source of finance chosen affects not just how much capital is available but the ongoing cost the business must cover."},

{id:"bp-oncosts-establishment", title:"Wage and non-wage costs when hiring at start-up", topic:"Business Planning", sub:"Influences in establishing an SME",
 steps:["A new business plans to hire staff as part of its establishment","It budgets for wages based on the award rate for each role","On-costs such as superannuation and workers' compensation are added","Total staffing costs are higher than the wage figures alone suggest","The business's start-up budget must be revised upward","Available start-up capital is stretched further than first planned"],
 why:"Non-wage on-costs are frequently underestimated when a new business budgets for its first employees."},

// ============ BUSINESS PLANNING · The business planning process ============
{id:"bp-swot-blindspot", title:"Failing to conduct a SWOT analysis", topic:"Business Planning", sub:"The business planning process",
 steps:["A business skips a formal SWOT analysis before entering a new market","It fails to identify a significant external threat in that market","The business plan does not account for the threat","The threat materialises once the business begins trading","The business is caught unprepared and loses sales","Management must scramble to respond without a plan in place"],
 why:"SWOT analysis is meant to surface exactly this kind of threat before it can damage a business that has already committed resources."},

{id:"bp-situational-to-goals", title:"Situational analysis shapes business goals", topic:"Business Planning", sub:"The business planning process",
 steps:["A business conducts a situational analysis of its current position","It identifies a clear strength it is not yet fully using","This strength is matched against an emerging opportunity in the market","Management sets a specific goal to exploit that opportunity","Objectives are defined to guide progress towards the goal","The business plan is built around goals grounded in its real position"],
 why:"Situational analysis is the evidence base that turns a business's actual strengths and opportunities into realistic goals."},

{id:"bp-goals-to-resources", title:"From goals to organising resources", topic:"Business Planning", sub:"The business planning process",
 steps:["A business sets a goal of increasing production capacity","Management works out what resources are needed to achieve it","Finance is arranged to fund new equipment","Operations schedules the installation and staff are trained","Human resources recruits additional production staff","The business's functions are coordinated to implement the goal"],
 why:"A goal only becomes achievable once the business's functional areas are organised and coordinated to deliver it."},

{id:"bp-forecast-breakeven", title:"Forecasting the break-even point", topic:"Business Planning", sub:"The business planning process",
 steps:["A business forecasts its total revenue and total costs at different sales levels","It calculates the break-even point where these two are equal","The forecast shows the business needs a higher sales volume than first expected to break even","Management realises the original pricing or cost assumptions were too optimistic","The business plan is revised with a more achievable sales target","The business enters the market with a more realistic financial forecast"],
 why:"Break-even analysis during forecasting can reveal that a plan's original assumptions are unrealistic before money is committed."},

{id:"bp-monitoring-corrective", title:"Monitoring reveals the need for corrective action", topic:"Business Planning", sub:"The business planning process",
 steps:["A business compares its actual sales against the figures set out in its budget","Actual sales are found to be well below budget","Management investigates the cause of the shortfall","A change in customer preferences is identified as the reason","Corrective action is taken, adjusting the product range to match demand","Future performance moves back towards the levels set in the plan"],
 why:"Monitoring and evaluation only add value if variances lead to corrective action that brings performance back on track."},

{id:"bp-budget-cashflow-forecast", title:"A budget informs the cash flow forecast", topic:"Business Planning", sub:"The business planning process",
 steps:["A business prepares a budget estimating income and expenses for the coming year","The timing of expected cash receipts and payments is mapped across the year","A cash flow forecast is built from this budget","The forecast reveals a period where outflows will exceed inflows","The business arranges short-term finance in advance for that period","The business avoids being caught short of cash when the shortfall occurs"],
 why:"Turning a budget into a cash flow forecast lets a business plan ahead for temporary shortfalls rather than reacting to them."},

{id:"bp-planning-process-cycle", title:"The business planning process as an ongoing cycle", topic:"Business Planning", sub:"The business planning process",
 steps:["A business completes a situational analysis of its current position","It sets vision, goals and objectives based on that analysis","Resources across operations, marketing, finance and HR are organised to pursue them","Forecasts of revenue, costs and cash flow guide implementation","Actual performance is monitored and evaluated against the plan","Corrective action feeds back into a revised situational analysis for the next cycle"],
 why:"The business planning process is not a one-off document but a continuous cycle that starts again once performance is evaluated."},

// ============ BUSINESS PLANNING · Critical issues in business success and failure ============
{id:"bp-competitive-advantage-quality", title:"Superior quality builds competitive advantage", topic:"Business Planning", sub:"Critical issues in business success and failure",
 steps:["A business commits to a total quality management approach","Defect rates fall and customer satisfaction rises","The business earns a reputation for reliable quality","Customers choose it over competitors offering similar prices","The business gains a lasting competitive advantage","Market share grows as a result"],
 why:"Competitive advantage often comes from operational strengths, such as quality, that competitors find hard to replicate quickly."},

{id:"bp-over-extension-finance", title:"Over-extension of finance leads to failure", topic:"Business Planning", sub:"Critical issues in business success and failure",
 steps:["A business takes on a large loan to fund rapid expansion","Repayments are set based on optimistic sales forecasts","Actual sales growth falls short of those forecasts","Cash generated is insufficient to cover loan repayments","The business becomes over-extended and unable to meet its financial obligations","The business is forced into financial distress or closure"],
 why:"Over-extension of finance is a critical, well-documented cause of business failure when growth funded by debt does not materialise as planned."},

{id:"bp-technology-cost-savings", title:"Using technology to sustain success", topic:"Business Planning", sub:"Critical issues in business success and failure",
 steps:["A mature business introduces automated technology into its operations","Manual, repetitive tasks are completed faster and with fewer errors","Labour costs per unit of output fall","The business can lower prices or invest the savings elsewhere","Its cost competitiveness against rivals improves","The business sustains its market position for longer"],
 why:"Effective use of technology is identified as a critical factor in sustaining business success over the long term."},

{id:"bp-economic-conditions-success", title:"Economic conditions affect business success", topic:"Business Planning", sub:"Critical issues in business success and failure",
 steps:["The broader economy moves into an upswing","Consumer confidence and spending increase","Demand for the business's products rises","Revenue and profit grow without any change in the business's own strategy","Management may credit its own decisions for the improved results","A future downturn in economic conditions can just as easily reverse this success"],
 why:"Economic conditions are an external factor that can drive business performance independently of, and sometimes despite, management decisions."},

{id:"bp-strategic-alliance-benefit", title:"A strategic alliance shares resources for mutual benefit", topic:"Business Planning", sub:"Critical issues in business success and failure",
 steps:["Two SMEs identify a shared opportunity neither can pursue alone","They form a strategic alliance while remaining independent businesses","Resources such as distribution networks or expertise are shared between them","Costs that would otherwise be duplicated are avoided","Each business gains access to capabilities it did not have alone","Both businesses improve their chances of success in the new venture"],
 why:"A strategic alliance lets smaller businesses achieve outcomes, such as cost savings and market access, that neither could reach independently."},

{id:"bp-staffing-teams-success", title:"Effective staffing and teams underpin business success", topic:"Business Planning", sub:"Critical issues in business success and failure",
 steps:["A business plan calls for a new product line to be launched","Management recruits staff with the specific skills the launch requires","Staff are organised into a dedicated team responsible for the launch","Clear roles reduce duplication and confusion during implementation","The product launch is executed smoothly and on schedule","The business achieves the sales result set out in its plan"],
 why:"Having the right staff organised effectively into teams is repeatedly identified as a critical issue in whether a business plan succeeds."},

{id:"bp-trend-analysis-decision", title:"Trend analysis informs a business decision", topic:"Business Planning", sub:"Critical issues in business success and failure",
 steps:["A business reviews its sales data over the past three years","It identifies a consistent seasonal pattern in customer demand","Trend analysis reveals demand always peaks in a particular quarter","Management adjusts stock and staffing levels ahead of that period","The business is better prepared to meet peak demand","Lost sales from being under-stocked are avoided"],
 why:"Trend analysis turns historical data into a forward-looking decision that improves the business's readiness."},

{id:"bp-business-plan-finance", title:"A written business plan helps secure finance", topic:"Business Planning", sub:"Critical issues in business success and failure",
 steps:["An entrepreneur prepares a detailed written business plan","The plan sets out the business idea, market research and financial forecasts","A bank uses the plan to assess the risk of lending to the business","The clear forecasts give the lender confidence in the venture's viability","The business is approved for the finance it needs to establish","Without the plan, the loan application would likely have been declined"],
 why:"A written business plan is important not only for internal direction but because it is often the basis lenders use to assess risk."},

];
