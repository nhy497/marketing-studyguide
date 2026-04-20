// English version of marketing quiz questions for exam preparation - 225 Questions Total
// 25 questions per lecture topic (9 lectures: 1-9)
const englishQuizQuestions = [
    // ==================== LECTURE 1: INTRODUCTION TO MARKETING (Questions 1-25) ====================
    {
        lectureId: 1,
        question: "What is the formal definition of marketing?",
        options: ["Selling products to customers", "Creating, communicating, delivering, and exchanging offerings that have value", "Advertising and promotion only", "Making profit through sales", "Producing goods and services"],
        correct: 1,
        explanation: "Correct answer: B. Marketing is the process of creating, communicating, delivering, and exchanging offerings that have value for customers, partners, and society at large."
    },
    {
        lectureId: 1,
        question: "Which of the following is NOT part of the marketing process?",
        options: ["Creating value", "Communicating value", "Delivering value", "Manufacturing only", "Exchanging offerings"],
        correct: 3,
        explanation: "Correct answer: D. Manufacturing only. Marketing involves creating, communicating, delivering, and exchanging value - not just manufacturing."
    },
    {
        lectureId: 1,
        question: "In marketing, what is the difference between needs and wants?",
        options: ["They are the same thing", "Needs are basic human requirements, wants are specific ways to satisfy needs", "Wants are more important than needs", "Needs are only for products, wants are for services", "Wants are created by marketers"],
        correct: 1,
        explanation: "Correct answer: B. Needs are basic human requirements (food, shelter, safety), while wants are specific ways people choose to satisfy those needs (specific brands, styles)."
    },
    {
        lectureId: 1,
        question: "What is a 'market offering' in marketing terms?",
        options: ["Only physical products", "Products, services, information, or experiences offered to a market", "Only services provided by companies", "The price of a product", "Promotional materials only"],
        correct: 1,
        explanation: "Correct answer: B. Market offerings include products, services, information, or experiences that are offered to a market to satisfy consumer needs and wants."
    },
    {
        lectureId: 1,
        question: "Which marketing orientation focuses on achieving organizational goals through customer satisfaction?",
        options: ["Production concept", "Product concept", "Selling concept", "Marketing concept", "Societal marketing concept"],
        correct: 3,
        explanation: "Correct answer: D. The marketing concept holds that achieving organizational goals depends on knowing the needs and wants of target markets and delivering satisfactions better than competitors."
    },
    {
        lectureId: 1,
        question: "The Production Concept assumes that consumers will favor products that are:",
        options: ["Most innovative", "Most available and affordable", "Highest quality", "Most advertised", "Most sustainable"],
        correct: 1,
        explanation: "Correct answer: B. Most available and affordable. The production concept holds that consumers will favor products that are widely available and highly affordable."
    },
    {
        lectureId: 1,
        question: "What is the main drawback of the Product Concept?",
        options: ["It focuses too much on price", "It can lead to 'marketing myopia' - ignoring customer needs", "It emphasizes selling too much", "It ignores product quality", "It focuses only on mass production"],
        correct: 1,
        explanation: "Correct answer: B. Marketing myopia. The product concept can lead to marketing myopia, where companies focus so much on making better products that they lose sight of what customers actually want."
    },
    {
        lectureId: 1,
        question: "The Selling Concept is most appropriate for which type of products?",
        options: ["Products that customers actively seek", "Unsought goods - products consumers don't normally think of buying", "High-end luxury products", "Everyday consumer staples", "Innovative new technology"],
        correct: 1,
        explanation: "Correct answer: B. Unsought goods. The selling concept is typically practiced with unsought goods - those that buyers do not normally think of buying, such as insurance or blood donations."
    },
    {
        lectureId: 1,
        question: "What is 'customer-perceived value'?",
        options: ["The actual cost of producing the product", "The customer's evaluation of the difference between benefits and costs", "The price charged by competitors", "The company's profit margin", "The retail price of the product"],
        correct: 1,
        explanation: "Correct answer: B. Customer-perceived value is the customer's evaluation of the difference between all the benefits and all the costs of a marketing offer relative to those of competing offers."
    },
    {
        lectureId: 1,
        question: "Customer satisfaction is determined by comparing:",
        options: ["Price with quality", "Perceived performance with expectations", "Company promises with competitor offers", "Product features with cost", "Marketing spend with sales revenue"],
        correct: 1,
        explanation: "Correct answer: B. Perceived performance with expectations. Customer satisfaction depends on the product's perceived performance relative to a buyer's expectations."
    },
    {
        lectureId: 1,
        question: "What is customer relationship management (CRM) focused on?",
        options: ["Making single transactions", "Building long-term customer relationships and loyalty", "Reducing product costs", "Increasing advertising spending", "Finding new customers only"],
        correct: 1,
        explanation: "Correct answer: B. Building long-term customer relationships. CRM focuses on building and maintaining profitable customer relationships by delivering superior customer value and satisfaction."
    },
    {
        lectureId: 1,
        question: "Which marketing concept extends the marketing concept by also considering society's well-being?",
        options: ["Production concept", "Product concept", "Selling concept", "Marketing concept", "Societal marketing concept"],
        correct: 4,
        explanation: "Correct answer: E. Societal marketing concept. The societal marketing concept questions whether the pure marketing concept overlooks possible conflicts between consumer short-run wants and long-run consumer welfare and society's interests."
    },
    {
        lectureId: 1,
        question: "What are the three key elements of 'exchange' in marketing?",
        options: ["Product, price, place", "Two or more parties, something of value, communication and delivery", "Advertising, sales, promotion", "Manufacturer, wholesaler, retailer", "Need, want, demand"],
        correct: 1,
        explanation: "Correct answer: B. Exchange requires at least two parties, each with something of value to the other, and the ability to communicate and deliver."
    },
    {
        lectureId: 1,
        question: "Demands in marketing refer to:",
        options: ["Only products customers want", "Human wants backed by buying power", "Needs that must be satisfied", "Products in inventory", "Services provided by companies"],
        correct: 1,
        explanation: "Correct answer: B. Human wants backed by buying power. Demands are wants for specific products backed by an ability to pay."
    },
    {
        lectureId: 1,
        question: "What is the primary goal of the marketing concept?",
        options: ["Maximize short-term profits", "Build profitable customer relationships through satisfaction", "Increase production efficiency", "Beat competitors on price", "Create the best possible product"],
        correct: 1,
        explanation: "Correct answer: B. Build profitable customer relationships. The marketing concept aims to achieve organizational goals by creating, delivering, and communicating superior customer value."
    },
    {
        lectureId: 1,
        question: "Which of the following best describes 'marketing myopia'?",
        options: ["Focusing too much on competitors", "Focusing on products rather than customer needs", "Spending too much on advertising", "Ignoring profitability", "Targeting the wrong market segment"],
        correct: 1,
        explanation: "Correct answer: B. Focusing on products rather than customer needs. Marketing myopia occurs when companies focus on making and selling products rather than understanding and satisfying customer needs."
    },
    {
        lectureId: 1,
        question: "The difference between marketing and selling can best be described as:",
        options: ["They are the same thing", "Selling focuses on seller's needs, marketing on buyer's needs", "Marketing is cheaper than selling", "Selling is more modern than marketing", "Marketing only works for large companies"],
        correct: 1,
        explanation: "Correct answer: B. Selling focuses on seller's needs (converting products to cash), while marketing focuses on buyer's needs (satisfying customer needs through the integrated marketing process)."
    },
    {
        lectureId: 1,
        question: "What is a 'market' in marketing terms?",
        options: ["Only a physical location", "The set of actual and potential buyers of a product or service", "A place for buying raw materials", "Only online platforms", "Only retail stores"],
        correct: 1,
        explanation: "Correct answer: B. The set of actual and potential buyers. A market is the set of all actual and potential buyers of a product or service."
    },
    {
        lectureId: 1,
        question: "Customer lifetime value (CLV) represents:",
        options: ["The price of one purchase", "The total value a customer brings over their entire relationship with the company", "The cost of acquiring a customer", "The profit from the first sale", "The annual spending of a customer"],
        correct: 1,
        explanation: "Correct answer: B. Total value over entire relationship. CLV is the value of the entire stream of purchases that the customer would make over a lifetime of patronage."
    },
    {
        lectureId: 1,
        question: "Which of the following is a characteristic of modern marketing?",
        options: ["Focus on single transactions only", "Two-way communication and engagement", "One-way advertising messages", "Ignoring customer feedback", "Mass production orientation"],
        correct: 1,
        explanation: "Correct answer: B. Two-way communication. Modern marketing involves two-way communication, customer engagement, and building relationships rather than just pushing messages."
    },
    {
        lectureId: 1,
        question: "What does the term 'value proposition' mean?",
        options: ["The price of a product", "The set of benefits or values a company promises to deliver", "The cost of production", "The advertising slogan", "The product packaging"],
        correct: 1,
        explanation: "Correct answer: B. Set of benefits promised to deliver. The value proposition is the set of benefits or values it promises to deliver to consumers to satisfy their needs."
    },
    {
        lectureId: 1,
        question: "Share of customer refers to:",
        options: ["Market share percentage", "The portion of the customer's purchasing that a company gets", "The number of customers served", "The total market size", "Customer satisfaction rating"],
        correct: 1,
        explanation: "Correct answer: B. Portion of customer's purchasing. Share of customer is the portion of the customer's purchasing that a company gets in its product categories."
    },
    {
        lectureId: 1,
        question: "Which marketing management orientation focuses on improving production and distribution efficiency?",
        options: ["Product concept", "Production concept", "Selling concept", "Marketing concept", "Societal marketing concept"],
        correct: 1,
        explanation: "Correct answer: B. Production concept. The production concept holds that consumers will favor products that are available and highly affordable, so management should focus on improving production and distribution efficiency."
    },
    {
        lectureId: 1,
        question: "The marketing mix traditionally consists of which elements?",
        options: ["Product, Price, Place, Promotion (4Ps)", "People, Process, Physical evidence", "Planning, Implementation, Control", "Research, Development, Testing", "Production, Distribution, Sales"],
        correct: 0,
        explanation: "Correct answer: A. Product, Price, Place, Promotion (4Ps). The marketing mix consists of the tactical marketing tools - product, price, place, and promotion - that the firm blends to produce the response it wants in the target market."
    },
    {
        lectureId: 1,
        question: "What is the 'customer journey' in modern marketing?",
        options: ["Only the purchase transaction", "The complete sum of experiences that customers go through when interacting with the company", "The delivery process only", "The manufacturing process", "The sales presentation"],
        correct: 1,
        explanation: "Correct answer: B. Complete sum of experiences. The customer journey encompasses all touchpoints and experiences a customer has with a company, from initial awareness through purchase and post-purchase."
    },

    // ==================== LECTURE 2: MARKETING STRATEGY (Questions 26-50) ====================
    {
        lectureId: 2,
        question: "What is an organization's long-term action plan that achieves goals while providing unique customer experiences?",
        options: ["Tactics", "Strategy", "Operations", "Plan", "Goals"],
        correct: 1,
        explanation: "Correct answer: B. Strategy. Strategy is an organization's long-term action plan, not just short-term tactics, but the overall direction guiding long-term development."
    },
    {
        lectureId: 2,
        question: "In the strategic marketing process, which stage involves setting the organization's mission, vision, and goals?",
        options: ["Implementation stage", "Evaluation stage", "Planning stage", "Control stage", "Monitoring stage"],
        correct: 2,
        explanation: "Correct answer: C. Planning stage. The planning stage is the first step in the strategic marketing process, involving setting the organization's long-term direction and goals."
    },
    {
        lectureId: 2,
        question: "A company states its purpose is 'to create sustainable value for all stakeholders while minimizing environmental impact.' This statement best represents which strategic element?",
        options: ["Marketing mix", "Mission statement", "Product positioning", "Sales forecast", "Budget allocation"],
        correct: 1,
        explanation: "Correct answer: B. Mission statement. A mission statement defines the organization's fundamental purpose and scope of operations, often incorporating values and stakeholder commitments."
    },
    {
        lectureId: 2,
        question: "Which of the following is NOT a characteristic of strategic marketing?",
        options: ["Long-term orientation", "Customer-centric approach", "Focus on price competition only", "Overall coordination", "Value creation focus"],
        correct: 2,
        explanation: "Correct answer: C. Focus on price competition only. Strategic marketing emphasizes long-term orientation, customer-centricity, overall coordination, and value creation. Price competition is just one tactical tool, not the strategic focus."
    },
    {
        lectureId: 2,
        question: "What characteristics should a company's core competitive advantage possess to be strategically valuable?",
        options: ["Easy for competitors to imitate", "Short-term effectiveness", "Sustainable over time", "Low cost only", "High technology focus only"],
        correct: 2,
        explanation: "Correct answer: C. Sustainable over time. Core competitive advantage should be sustainable, able to bring long-term competitive advantages to the company, rather than being easily imitated or only short-term effective."
    },
    {
        lectureId: 2,
        question: "A luxury fashion brand decides to maintain premium pricing despite economic downturns to preserve brand image. This decision reflects which strategic concept?",
        options: ["Cost leadership", "Market penetration", "Strategic consistency", "Price elasticity", "Inventory management"],
        correct: 2,
        explanation: "Correct answer: C. Strategic consistency. Strategic consistency involves maintaining core strategic direction even during challenging conditions, rather than making reactive short-term changes that could damage long-term positioning."
    },
    {
        lectureId: 2,
        question: "Which factor is most critical in the strategy implementation process?",
        options: ["Sufficient funding only", "Employee cooperation alone", "Market response timing", "Advanced technology adoption", "Comprehensive management support"],
        correct: 4,
        explanation: "Correct answer: E. Comprehensive management support. Management support is the most critical factor in strategy implementation, requiring comprehensive top-down support and resource allocation."
    },
    {
        lectureId: 2,
        question: "What principles should companies follow when setting effective marketing objectives?",
        options: ["Vagueness and flexibility", "Specificity and measurability", "Idealism without constraints", "Complexity and detail", "Singularity of focus"],
        correct: 1,
        explanation: "Correct answer: B. Specificity and measurability. Marketing objectives should be specific, measurable, achievable, relevant, and time-bound, following the SMART principle."
    },
    {
        lectureId: 2,
        question: "What is the main difference between strategic marketing and traditional marketing approaches?",
        options: ["Lower prices offered", "Better product quality", "Long-term relationship perspective", "More distribution channels", "Stronger promotional intensity"],
        correct: 2,
        explanation: "Correct answer: C. Long-term relationship perspective. The main difference between strategic marketing and traditional marketing lies in the long-term perspective, focusing on building long-term customer relationships and continuous value creation."
    },
    {
        lectureId: 2,
        question: "When conducting strategic market positioning, what is the most important factor for a company to consider?",
        options: ["Internal cost structure", "Target customer needs and preferences", "Number of existing competitors", "Current technical capabilities", "Employee skill levels"],
        correct: 1,
        explanation: "Correct answer: B. Target customer needs and preferences. In market positioning, target customer needs are the most important consideration. You must deeply understand and meet customers' real needs to create meaningful differentiation."
    },
    {
        lectureId: 2,
        question: "What is typically the final step in the strategic marketing process cycle?",
        options: ["Initial planning", "Strategy implementation", "Control mechanisms", "Performance evaluation", "Immediate adjustment"],
        correct: 3,
        explanation: "Correct answer: D. Performance evaluation. Evaluation is typically the final step in the strategic marketing process, assessing the effectiveness of strategies and providing feedback for continuous improvement."
    },
    {
        lectureId: 2,
        question: "A company analyzes its internal resources and capabilities to identify what it does better than competitors. This analysis focuses on identifying:",
        options: ["Market opportunities", "Competitive threats", "Core competencies", "External partnerships", "Financial liabilities"],
        correct: 2,
        explanation: "Correct answer: C. Core competencies. Core competencies are the unique strengths and resources that give a company a competitive advantage over its rivals."
    },
    {
        lectureId: 2,
        question: "Which strategic approach involves creating value by establishing meaningful differences from competitors that customers perceive as valuable?",
        options: ["Cost minimization", "Differentiation strategy", "Market consolidation", "Vertical integration", "Price matching"],
        correct: 1,
        explanation: "Correct answer: B. Differentiation strategy. Differentiation strategy focuses on creating unique value propositions that distinguish the company from competitors in ways that matter to customers."
    },
    {
        lectureId: 2,
        question: "In strategic planning, what does 'vision' primarily describe?",
        options: ["Detailed quarterly targets", "The desired future state of the organization", "Current market share data", "Employee training schedules", "Product specifications"],
        correct: 1,
        explanation: "Correct answer: B. The desired future state of the organization. A vision statement describes the desired future state of the organization - what it aspires to become or achieve in the long term."
    },
    {
        lectureId: 2,
        question: "A company that aims to become the lowest-cost producer in its industry while maintaining acceptable quality is pursuing which strategy?",
        options: ["Differentiation strategy", "Cost leadership strategy", "Focus strategy", "Diversification strategy", "Retrenchment strategy"],
        correct: 1,
        explanation: "Correct answer: B. Cost leadership strategy. Cost leadership strategy aims to achieve competitive advantage through being the lowest-cost producer in the industry."
    },

    // ==================== LECTURE 3: ENVIRONMENTAL SCANNING (Questions 51-75) ====================
    {
        lectureId: 3,
        question: "When developing marketing strategy, which of the following is NOT an external environmental factor that needs to be analyzed?",
        options: ["Economic environment conditions", "Technological developments", "Employee satisfaction levels", "Political-legal regulations", "Socio-cultural trends"],
        correct: 2,
        explanation: "Correct answer: C. Employee satisfaction levels. Employee satisfaction is an internal environmental factor. External environment analysis mainly focuses on economic, technological, political-legal, and socio-cultural factors."
    },
    {
        lectureId: 3,
        question: "What does the 'S' in SWOT analysis represent?",
        options: ["Strengths", "Weaknesses", "Opportunities", "Threats", "Strategies"],
        correct: 0,
        explanation: "Correct answer: A. Strengths. In SWOT analysis, S represents Strengths, which refer to the internal favorable conditions and capabilities of an organization."
    },
    {
        lectureId: 3,
        question: "In PEST analysis, which factor would include examining inflation rates and unemployment levels?",
        options: ["Political factors", "Economic factors", "Social factors", "Technological factors", "Legal factors"],
        correct: 1,
        explanation: "Correct answer: B. Economic factors. Economic factors in PEST analysis include macroeconomic conditions such as inflation rates, unemployment levels, economic growth, and interest rates."
    },
    {
        lectureId: 3,
        question: "What attitude should companies adopt when facing significant market opportunities?",
        options: ["Conservative waiting approach", "Active seizing and development", "Ignoring until proven", "Passive response only", "Avoidance strategy"],
        correct: 1,
        explanation: "Correct answer: B. Active seizing and development. When facing market opportunities, companies should actively seize them, proactively developing and utilizing opportunities to create value and competitive advantage."
    },
    {
        lectureId: 3,
        question: "Which component of SWOT analysis focuses on external positive conditions in the market environment?",
        options: ["Strengths", "Weaknesses", "Opportunities", "Threats", "Strategies"],
        correct: 2,
        explanation: "Correct answer: C. Opportunities. Opportunities in SWOT analysis represent external factors in the market environment that the company could exploit to its advantage."
    },
    {
        lectureId: 3,
        question: "A new government regulation requires all products in an industry to meet higher safety standards. This represents which type of environmental factor?",
        options: ["Economic opportunity", "Political-legal force", "Social trend", "Technological development", "Competitive rivalry"],
        correct: 1,
        explanation: "Correct answer: B. Political-legal force. Government regulations and legal requirements are political-legal environmental factors that can significantly impact industry operations and marketing strategies."
    },
    {
        lectureId: 3,
        question: "In environmental scanning, what are 'threats' defined as?",
        options: ["Internal organizational weaknesses", "External challenges that could harm the company", "Competitor strengths", "Market opportunities missed", "Employee performance issues"],
        correct: 1,
        explanation: "Correct answer: B. External challenges that could harm the company. Threats in environmental analysis are external factors or challenges in the market environment that could potentially harm the organization's performance or position."
    },
    {
        lectureId: 3,
        question: "Which of the following would be considered a demographic factor in environmental analysis?",
        options: ["GDP growth rate", "Population age distribution", "Internet penetration rate", "Trade policy changes", "Raw material costs"],
        correct: 1,
        explanation: "Correct answer: B. Population age distribution. Demographic factors include population characteristics such as age distribution, gender composition, income levels, education, and geographic distribution."
    },
    {
        lectureId: 3,
        question: "A company monitors social media trends to understand changing consumer preferences. This activity is an example of:",
        options: ["Internal audit", "Environmental scanning", "Financial reporting", "Production planning", "Quality control"],
        correct: 1,
        explanation: "Correct answer: B. Environmental scanning. Environmental scanning involves systematically monitoring and analyzing external environmental factors that could impact the organization, including social trends and consumer preferences."
    },
    {
        lectureId: 3,
        question: "In the PEST framework, which category would include analyzing consumer lifestyle changes and cultural shifts?",
        options: ["Political", "Economic", "Social", "Technological", "Legal"],
        correct: 2,
        explanation: "Correct answer: C. Social. Social factors in PEST analysis include demographic trends, cultural norms, lifestyle changes, education levels, and consumer attitudes and values."
    },
    {
        lectureId: 3,
        question: "What is the primary purpose of conducting competitive analysis in environmental scanning?",
        options: ["To copy competitor strategies", "To understand competitive dynamics and positioning", "To eliminate all competition", "To set prices lower than competitors", "To reduce marketing spending"],
        correct: 1,
        explanation: "Correct answer: B. To understand competitive dynamics and positioning. Competitive analysis helps understand the competitive landscape, identify competitor strengths and weaknesses, and determine appropriate strategic positioning."
    },
    {
        lectureId: 3,
        question: "Which technological trend would most likely create both opportunities and threats for traditional retail businesses?",
        options: ["Advances in manufacturing automation", "Growth of e-commerce and mobile shopping", "Improvements in packaging materials", "Development of shipping logistics", "Standardization of product barcodes"],
        correct: 1,
        explanation: "Correct answer: B. Growth of e-commerce and mobile shopping. E-commerce growth creates opportunities for market expansion but threatens traditional brick-and-mortar retail, requiring businesses to adapt their strategies."
    },
    {
        lectureId: 3,
        question: "An aging population trend in a market represents which type of environmental factor?",
        options: ["Political-legal", "Economic", "Socio-cultural/demographic", "Technological", "Competitive"],
        correct: 2,
        explanation: "Correct answer: C. Socio-cultural/demographic. Population aging is a demographic and socio-cultural factor that affects market demand, consumer needs, and requires companies to adapt their marketing approaches."
    },
    {
        lectureId: 3,
        question: "What is the primary output of a comprehensive environmental scanning process?",
        options: ["Detailed financial statements", "Identification of opportunities and threats", "Employee performance reviews", "Product design specifications", "Production schedules"],
        correct: 1,
        explanation: "Correct answer: B. Identification of opportunities and threats. Environmental scanning primarily identifies external opportunities and threats that help inform strategic decision-making and planning."
    },
    {
        lectureId: 3,
        question: "Which of the following is an internal environmental factor that should be analyzed alongside external factors?",
        options: ["Government regulations", "Interest rate trends", "Organizational culture", "Social media trends", "Competitor pricing"],
        correct: 2,
        explanation: "Correct answer: C. Organizational culture. Organizational culture is an internal factor. Environmental scanning includes both external analysis (PEST) and internal analysis (organizational resources, culture, capabilities)."
    },
    {
        lectureId: 3,
        question: "What is the first step in the marketing research process?",
        options: ["Collect data", "Define the problem and research objectives", "Analyze findings", "Present results", "Develop research plan"],
        correct: 1,
        explanation: "Correct answer: B. Define the problem and research objectives. The first step in marketing research is to clearly define the problem and establish specific research objectives to guide the entire process."
    },
    {
        lectureId: 3,
        question: "Primary research differs from secondary research in that primary research:",
        options: ["Uses existing data sources", "Involves collecting new data for a specific purpose", "Is always less expensive", "Is less reliable than secondary data", "Cannot be customized"],
        correct: 1,
        explanation: "Correct answer: B. Involves collecting new data for a specific purpose. Primary research involves gathering new data specifically for the current research problem, while secondary research uses existing data."
    },
    {
        lectureId: 3,
        question: "Which of the following is an example of qualitative research?",
        options: ["Large-scale surveys", "Focus groups and in-depth interviews", "Statistical analysis", "Structured questionnaires", "Online polls"],
        correct: 1,
        explanation: "Correct answer: B. Focus groups and in-depth interviews. Qualitative research involves exploratory methods like focus groups, interviews, and observations to gain deep insights into consumer attitudes and behaviors."
    },
    {
        lectureId: 3,
        question: "In SWOT analysis, 'Weaknesses' refer to:",
        options: ["External factors that could harm the company", "Internal limitations that may hinder performance", "Competitor disadvantages", "Market threats", "Resource shortages only"],
        correct: 1,
        explanation: "Correct answer: B. Internal limitations that may hinder performance. Weaknesses in SWOT are internal factors that place an organization at a disadvantage relative to competitors."
    },
    {
        lectureId: 3,
        question: "Which of the following best describes the relationship between SWOT analysis and environmental scanning?",
        options: ["They are completely separate processes", "Environmental scanning provides input for SWOT analysis", "SWOT provides input for environmental scanning", "They only focus on internal factors", "They are only used for financial analysis"],
        correct: 1,
        explanation: "Correct answer: B. Environmental scanning provides input for SWOT analysis. Environmental scanning identifies external opportunities and threats, while also considering internal strengths and weaknesses for SWOT analysis."
    },
    {
        lectureId: 3,
        question: "What type of competitive analysis framework examines the intensity of competition, threat of new entrants, bargaining power of buyers and suppliers, and threat of substitutes?",
        options: ["SWOT analysis", "BCG matrix", "Porter's Five Forces", "PEST analysis", "Value chain analysis"],
        correct: 2,
        explanation: "Correct answer: C. Porter's Five Forces. Porter's Five Forces model analyzes competitive intensity by examining five key forces that determine industry profitability and competitive dynamics."
    },
    {
        lectureId: 3,
        question: "Which research method would be most appropriate for understanding why consumers prefer one brand over another?",
        options: ["Sales data analysis", "Focus groups and interviews", "Online click tracking", "Inventory monitoring", "Price comparison studies"],
        correct: 1,
        explanation: "Correct answer: B. Focus groups and interviews. Qualitative methods like focus groups and in-depth interviews are best for understanding the reasons behind consumer preferences and decision-making processes."
    },
    {
        lectureId: 3,
        question: "In PEST analysis, 'Political' factors would include:",
        options: ["Consumer lifestyle trends", "Government policies and regulations", "Interest rates", "Technological innovations", "Population demographics"],
        correct: 1,
        explanation: "Correct answer: B. Government policies and regulations. Political factors include government stability, policies, regulations, tax policies, and trade restrictions that can affect business operations."
    },
    {
        lectureId: 3,
        question: "What is the main advantage of using secondary research over primary research?",
        options: ["It provides more specific insights", "It is typically faster and less expensive", "It is always more accurate", "It allows for better customer engagement", "It provides more current data"],
        correct: 1,
        explanation: "Correct answer: B. It is typically faster and less expensive. Secondary research uses existing data sources, making it more cost-effective and time-efficient than collecting new primary data."
    },
    {
        lectureId: 3,
        question: "Which of the following is a key principle of effective environmental scanning?",
        options: ["Focus only on current competitors", "Monitor continuously rather than one-time", "Only analyze domestic markets", "Ignore technological changes", "Focus solely on economic factors"],
        correct: 1,
        explanation: "Correct answer: B. Monitor continuously rather than one-time. Effective environmental scanning is an ongoing process that continuously monitors changes in the external environment to identify emerging opportunities and threats."
    },

    // ==================== LECTURE 4: CONSUMER BEHAVIOR (Questions 76-100) ====================
    {
        lectureId: 4,
        question: "Which factor influencing consumer behavior includes a person's age, occupation, and economic situation?",
        options: ["Psychological factors", "Personal factors", "Social factors", "Cultural factors", "Situational factors"],
        correct: 1,
        explanation: "Correct answer: B. Personal factors. Personal factors include individual characteristics such as age, life-cycle stage, occupation, economic circumstances, lifestyle, and personality."
    },

    {
        lectureId: 4,
        question: "In the consumer decision-making process, what stage follows 'problem recognition'?",
        options: ["Purchase decision", "Post-purchase behavior", "Information search", "Alternative evaluation", "Need confirmation"],
        correct: 2,
        explanation: "Correct answer: C. Information search. After recognizing a need or problem, consumers typically engage in information search to learn about potential solutions and alternatives."
    },
    {
        lectureId: 4,
        question: "What psychological concept describes the specific combination of knowledge, feelings, and behavioral tendencies toward an object?",
        options: ["Perception", "Attitude", "Motivation", "Learning", "Memory"],
        correct: 1,
        explanation: "Correct answer: B. Attitude. Attitude is a learned predisposition to respond in a consistently favorable or unfavorable way toward a particular object, including cognitive, affective, and behavioral components."
    },
    {
        lectureId: 4,
        question: "A consumer buys a particular brand because their family has always used it. This is an example of which decision-making characteristic?",
        options: ["Extensive problem solving", "Limited problem solving", "Habitual buying behavior", "Variety-seeking behavior", "Complex decision making"],
        correct: 2,
        explanation: "Correct answer: C. Habitual buying behavior. Habitual buying behavior occurs when consumers make low-involvement purchases with little significant brand difference, often driven by familiarity and habit."
    },
    {
        lectureId: 4,
        question: "Which theory suggests that consumers are motivated to purchase products that reflect their actual or desired self-concept?",
        options: ["Maslow's hierarchy", "Self-concept theory", "Cognitive dissonance theory", "Social learning theory", "Operant conditioning"],
        correct: 1,
        explanation: "Correct answer: B. Self-concept theory. Self-concept theory posits that consumers purchase products and brands that match or express their self-image, whether actual or ideal."
    },
    {
        lectureId: 4,
        question: "Reference groups that directly influence consumer behavior include all EXCEPT:",
        options: ["Family members", "Close friends", "Aspirational celebrities", "Work colleagues", "Sports team members"],
        correct: 2,
        explanation: "Correct answer: C. Aspirational celebrities. While aspirational groups may influence desires, indirect reference groups like celebrities don't typically have the same direct influence as membership groups such as family, friends, and colleagues."
    },
    {
        lectureId: 4,
        question: "What is the process by which people select, organize, and interpret information to form a meaningful picture of the world?",
        options: ["Learning", "Perception", "Attitude formation", "Motivation", "Socialization"],
        correct: 1,
        explanation: "Correct answer: B. Perception. Perception is the process by which individuals select, organize, and interpret sensory information to create a meaningful picture of their environment."
    },
    {
        lectureId: 4,
        question: "In Maslow's hierarchy of needs, which level includes the need for status, recognition, and respect from others?",
        options: ["Physiological needs", "Safety needs", "Social needs", "Esteem needs", "Self-actualization needs"],
        correct: 3,
        explanation: "Correct answer: D. Esteem needs. Esteem needs in Maslow's hierarchy include both self-esteem (confidence, achievement) and the desire for recognition and respect from others (status, reputation)."
    },
    {
        lectureId: 4,
        question: "A consumer experiences discomfort after purchasing an expensive product, wondering if they made the right choice. This describes:",
        options: ["Buyer satisfaction", "Cognitive dissonance", "Brand loyalty", "Purchase confirmation", "Decision satisfaction"],
        correct: 1,
        explanation: "Correct answer: B. Cognitive dissonance. Cognitive dissonance is the psychological discomfort or anxiety that occurs after a purchase when consumers question whether they made the right decision."
    },
    {
        lectureId: 4,
        question: "Which cultural factor represents a set of basic values, perceptions, wants, and behaviors learned by a member of society?",
        options: ["Subculture", "Social class", "Culture", "Reference group", "Family tradition"],
        correct: 2,
        explanation: "Correct answer: C. Culture. Culture is the set of basic values, perceptions, wants, and behaviors learned by a member of society from family and other important institutions."
    },
    {
        lectureId: 4,
        question: "The consumer decision-making stage where consumers use information to evaluate alternative brands in the choice set is called:",
        options: ["Need recognition", "Information search", "Alternative evaluation", "Purchase decision", "Post-purchase evaluation"],
        correct: 2,
        explanation: "Correct answer: C. Alternative evaluation. Alternative evaluation is the stage where consumers compare different brands or products based on specific attributes and criteria to determine the best option."
    },
    {
        lectureId: 4,
        question: "A consumer's consistent preference for purchasing environmentally-friendly products regardless of price reflects which concept?",
        options: ["Price sensitivity", "Values-based purchasing", "Impulse buying", "Habitual purchasing", "Brand switching"],
        correct: 1,
        explanation: "Correct answer: B. Values-based purchasing. Values-based purchasing occurs when consumers make decisions based on personal beliefs and values, such as environmental consciousness, rather than just price or convenience."
    },
    {
        lectureId: 4,
        question: "Which psychological factor influences how consumers acquire and modify their knowledge and experience?",
        options: ["Perception", "Learning", "Attitude", "Motivation", "Personality"],
        correct: 1,
        explanation: "Correct answer: B. Learning. Learning involves changes in an individual's behavior arising from experience and plays a crucial role in how consumers acquire knowledge about products and brands."
    },
    {
        lectureId: 4,
        question: "The buying decision process where consumers conduct extensive research and carefully evaluate alternatives before purchasing is called:",
        options: ["Habitual decision making", "Limited decision making", "Extended problem solving", "Routine response behavior", "Impulse purchasing"],
        correct: 2,
        explanation: "Correct answer: C. Extended problem solving. Extended problem solving occurs for high-involvement purchases where consumers invest significant time and effort in information gathering and evaluation."
    },
    {
        lectureId: 4,
        question: "Social class influences consumer behavior primarily through its impact on:",
        options: ["Genetic preferences", "Values, preferences, and buying behaviors", "Physical abilities", "Legal rights", "Geographic location"],
        correct: 1,
        explanation: "Correct answer: B. Values, preferences, and buying behaviors. Social class affects consumer behavior through shared values, attitudes, interests, and buying behaviors that tend to be similar within social classes but differ across them."
    },

    // ==================== LECTURE 5: SEGMENTATION, TARGETING, POSITIONING (Questions 46-60) ====================
    {
        lectureId: 5,
        question: "Which of the following best describes market segmentation?",
        options: ["Targeting all customers equally", "Dividing market into distinct groups with different needs", "Focusing on premium customers only", "Ignoring customer differences", "Random marketing approach"],
        correct: 1,
        explanation: "Correct answer: B. Dividing market into distinct groups with different needs. Market segmentation involves dividing the market into distinct groups of buyers who have different needs, characteristics, or behaviors and might require separate marketing strategies."
    },
    {
        lectureId: 5,
        question: "In the STP process, what does the 'T' stand for?",
        options: ["Testing", "Targeting", "Tracking", "Training", "Transitioning"],
        correct: 1,
        explanation: "Correct answer: B. Targeting. STP stands for Segmentation, Targeting, and Positioning. Targeting involves evaluating and selecting the most attractive market segments to serve."
    },
    {
        lectureId: 5,
        question: "A company decides to focus its marketing efforts on young professionals aged 25-35 with high disposable income. This is an example of:",
        options: ["Mass marketing", "Market targeting", "Product differentiation", "Price skimming", "Market aggregation"],
        correct: 1,
        explanation: "Correct answer: B. Market targeting. Market targeting involves selecting specific segments to serve based on their attractiveness and the company's ability to serve them effectively."
    },
    {
        lectureId: 5,
        question: "Positioning a product as the 'most reliable' in the market is an example of which positioning strategy?",
        options: ["Benefit positioning", "User positioning", "Competitor positioning", "Price positioning", "Quality/price positioning"],
        correct: 0,
        explanation: "Correct answer: A. Benefit positioning. Benefit positioning establishes the product's position based on the specific benefits or attributes it offers, such as reliability, durability, or convenience."
    },
    {
        lectureId: 5,
        question: "Which segmentation variable divides consumers based on lifestyle, personality, and values?",
        options: ["Demographic segmentation", "Geographic segmentation", "Psychographic segmentation", "Behavioral segmentation", "Occasion segmentation"],
        correct: 2,
        explanation: "Correct answer: C. Psychographic segmentation. Psychographic segmentation divides buyers into groups based on social class, lifestyle, or personality characteristics."
    },
    {
        lectureId: 5,
        question: "A positioning statement should include all of the following EXCEPT:",
        options: ["Target segment", "Point of difference", "Frame of reference", "Competitor weaknesses", "Reason to believe"],
        correct: 3,
        explanation: "Correct answer: D. Competitor weaknesses. A positioning statement includes the target segment, frame of reference (category), point of difference, and reason to believe - but does not explicitly mention competitor weaknesses."
    },
    {
        lectureId: 5,
        question: "Which targeting strategy involves going after a large share of one or a few submarkets?",
        options: ["Undifferentiated marketing", "Differentiated marketing", "Concentrated marketing", "Mass customization", "Micro marketing"],
        correct: 2,
        explanation: "Correct answer: C. Concentrated marketing. Concentrated (or niche) marketing involves focusing on one or a few market segments rather than pursuing the whole market."
    },
    {
        lectureId: 5,
        question: "Segmenting markets based on consumer knowledge, attitudes, uses, or responses to a product is called:",
        options: ["Demographic segmentation", "Psychographic segmentation", "Behavioral segmentation", "Geographic segmentation", "Benefit segmentation"],
        correct: 2,
        explanation: "Correct answer: C. Behavioral segmentation. Behavioral segmentation divides buyers into segments based on their knowledge of, attitude toward, use of, or response to a product."
    },
    {
        lectureId: 5,
        question: "A company positions its brand as 'the choice of health-conscious consumers.' This positioning strategy focuses on:",
        options: ["Product attribute", "User type", "Usage occasion", "Competitor", "Product class"],
        correct: 1,
        explanation: "Correct answer: B. User type. User positioning associates the product with a specific type of user or consumer group, in this case health-conscious consumers."
    },
    {
        lectureId: 5,
        question: "Which criterion for effective segmentation requires that segments be large and profitable enough to serve?",
        options: ["Measurable", "Accessible", "Substantial", "Differentiable", "Actionable"],
        correct: 2,
        explanation: "Correct answer: C. Substantial. Substantiality means the segments should be sufficiently large and profitable to justify developing and maintaining a separate marketing mix for each."
    },
    {
        lectureId: 5,
        question: "Differentiated marketing is characterized by:",
        options: ["One offer for entire market", "Multiple offers for different segments", "One offer for niche segment", "Custom offer for each customer", "Random targeting approach"],
        correct: 1,
        explanation: "Correct answer: B. Multiple offers for different segments. Differentiated marketing involves targeting several market segments and designing separate offers for each, aiming to achieve higher sales and stronger position in each segment."
    },
    {
        lectureId: 5,
        question: "Positioning a product against a specific competitor is known as:",
        options: ["Benefit positioning", "User positioning", "Competitor positioning", "Price positioning", "Attribute positioning"],
        correct: 2,
        explanation: "Correct answer: C. Competitor positioning. Competitor positioning involves positioning the product directly against a competitor, either claiming superiority or using the competitor as a reference point."
    },
    {
        lectureId: 5,
        question: "Geographic segmentation divides the market based on:",
        options: ["Consumer lifestyles", "Consumer age groups", "Regional boundaries and locations", "Consumer usage rates", "Consumer brand loyalty"],
        correct: 2,
        explanation: "Correct answer: C. Regional boundaries and locations. Geographic segmentation divides the market into different geographical units such as nations, regions, states, counties, cities, or even neighborhoods."
    },
    {
        lectureId: 5,
        question: "The positioning concept that emphasizes a unique combination of product attributes is called:",
        options: ["Category positioning", "Value positioning", "Multi-attribute positioning", "User positioning", "Usage positioning"],
        correct: 2,
        explanation: "Correct answer: C. Multi-attribute positioning. Multi-attribute positioning establishes the product's position based on a combination of two or more attributes or benefits."
    },
    {
        lectureId: 5,
        question: "Which segmentation approach divides business markets by industry, company size, or location?",
        options: ["Consumer segmentation", "Demographic segmentation", "B2B demographic segmentation", "Psychographic segmentation", "Behavioral segmentation"],
        correct: 2,
        explanation: "Correct answer: C. B2B demographic segmentation. B2B demographic segmentation uses variables such as industry classification, company size (employees or revenue), and geographic location to segment organizational markets."
    },

    // ==================== LECTURE 6: PRODUCT STRATEGY (Questions 61-75) ====================
    {
        lectureId: 6,
        question: "Which product level includes the basic benefit or service that the customer is really buying?",
        options: ["Core benefit", "Actual product", "Augmented product", "Expected product", "Potential product"],
        correct: 0,
        explanation: "Correct answer: A. Core benefit. The core benefit level answers the question: What is the buyer really buying? It represents the fundamental service or benefit the customer seeks."
    },
    {
        lectureId: 6,
        question: "A brand name, product features, and packaging quality belong to which product level?",
        options: ["Core benefit", "Basic product", "Expected product", "Augmented product", "Potential product"],
        correct: 1,
        explanation: "Correct answer: B. Basic product. The actual (basic) product level includes the tangible product features such as quality level, features, design, brand name, and packaging."
    },
    {
        lectureId: 6,
        question: "During which stage of the product life cycle do sales peak and profits begin to decline due to increased competition?",
        options: ["Introduction", "Growth", "Maturity", "Decline", "Development"],
        correct: 2,
        explanation: "Correct answer: C. Maturity. In the maturity stage, sales peak and level off, while profits decline due to intense competition and the need for defensive marketing expenditures."
    },
    {
        lectureId: 6,
        question: "Adding new product lines to an existing product mix is an example of:",
        options: ["Line stretching", "Line filling", "Product mix expansion", "Line modernization", "Line pruning"],
        correct: 2,
        explanation: "Correct answer: C. Product mix expansion. Product mix expansion involves adding new product lines to the company's current product offerings."
    },
    {
        lectureId: 6,
        question: "Which brand strategy involves using different brand names for different product categories?",
        options: ["Individual brand name", "Family brand name", "Co-branding", "Private branding", "Licensed branding"],
        correct: 0,
        explanation: "Correct answer: A. Individual brand name. Individual (or separate) brand names involve using a unique brand name for each product, often used when products vary greatly in quality or type."
    },
    {
        lectureId: 6,
        question: "The stage of new product development where a product concept is tested with target consumers is called:",
        options: ["Idea screening", "Concept testing", "Marketing strategy development", "Business analysis", "Product development"],
        correct: 1,
        explanation: "Correct answer: B. Concept testing. Concept testing involves presenting the product concept to target consumers, symbolically or physically, to gauge their reactions and feedback."
    },
    {
        lectureId: 6,
        question: "A product line consists of:",
        options: ["All products a company makes", "A group of related products", "Only tangible goods", "Only service offerings", "Products from different companies"],
        correct: 1,
        explanation: "Correct answer: B. A group of related products. A product line is a group of products that are closely related because they function in a similar manner, are sold to the same customer groups, or are marketed through the same outlets."
    },
    {
        lectureId: 6,
        question: "Extending a product line upward to add higher-quality, higher-price items is called:",
        options: ["Down-market stretch", "Up-market stretch", "Two-way stretch", "Line filling", "Line modernizing"],
        correct: 1,
        explanation: "Correct answer: B. Up-market stretch. Up-market stretch involves extending the product line upward to add higher-quality, higher-price items to appeal to more upscale markets."
    },
    {
        lectureId: 6,
        question: "In the new product development process, what follows business analysis?",
        options: ["Idea generation", "Concept testing", "Product development", "Test marketing", "Commercialization"],
        correct: 2,
        explanation: "Correct answer: C. Product development. After business analysis reviews the proposal for sales, costs, and profits, the next step is product development where the concept becomes an actual physical product."
    },
    {
        lectureId: 6,
        question: "A product's brand equity refers to:",
        options: ["The manufacturing cost", "The financial value of the brand", "The distribution network", "The production capacity", "The inventory value"],
        correct: 1,
        explanation: "Correct answer: B. The financial value of the brand. Brand equity is the differential effect that knowing the brand name has on customer response to the product and its marketing, representing the brand's financial and strategic value."
    },
    {
        lectureId: 6,
        question: "Which product life cycle stage is characterized by rapid sales growth and increasing profits?",
        options: ["Introduction", "Growth", "Maturity", "Decline", "Development"],
        correct: 1,
        explanation: "Correct answer: B. Growth. The growth stage is marked by rapid market acceptance, increasing sales, growing profits, and the emergence of competitors."
    },
    {
        lectureId: 6,
        question: "Co-branding occurs when:",
        options: ["A company uses multiple brand names", "Two established brand names are used on the same product", "A company licenses its brand to another", "A retailer creates its own brand", "A brand enters a new market"],
        correct: 1,
        explanation: "Correct answer: B. Two established brand names are used on the same product. Co-branding involves the practice of using the established brand names of two different companies on the same product to leverage the strengths of both brands."
    },
    {
        lectureId: 6,
        question: "Line filling involves:",
        options: ["Adding items within the present range of the line", "Stretching the line upward or downward", "Adding new product lines", "Removing unprofitable items", "Modernizing existing items"],
        correct: 0,
        explanation: "Correct answer: A. Adding items within the present range of the line. Line filling involves adding more items within the present range of the product line to reach for extra profits, satisfy dealers, or use excess capacity."
    },
    {
        lectureId: 6,
        question: "The process of managing groups of brands in coordinated ways to maximize their collective performance is called:",
        options: ["Brand equity management", "Brand portfolio management", "Product mix management", "Line management", "Brand hierarchy management"],
        correct: 1,
        explanation: "Correct answer: B. Brand portfolio management. Brand portfolio management involves managing multiple brands together as a portfolio, coordinating their positioning and marketing for optimal collective performance."
    },
    {
        lectureId: 6,
        question: "During the introduction stage of the product life cycle, which pricing strategy is commonly used?",
        options: ["Penetration pricing or skimming pricing", "Value pricing only", "Psychological pricing", "Bundle pricing", "Everyday low pricing"],
        correct: 0,
        explanation: "Correct answer: A. Penetration pricing or skimming pricing. In the introduction stage, companies typically use either penetration pricing (low price to gain market share) or price skimming (high price to maximize profits from innovators)."
    },

    // ==================== LECTURE 7: PRICING STRATEGY (Questions 76-90) ====================
    {
        lectureId: 7,
        question: "Which cost remains constant regardless of production or sales volume?",
        options: ["Variable cost", "Marginal cost", "Fixed cost", "Total cost", "Average cost"],
        correct: 2,
        explanation: "Correct answer: C. Fixed cost. Fixed costs are costs that do not vary with production or sales level, such as rent, salaries, and insurance, within a certain range of output."
    },
    {
        lectureId: 7,
        question: "Setting price based on buyers' perceptions of value rather than the seller's cost is called:",
        options: ["Cost-plus pricing", "Value-based pricing", "Competition-based pricing", "Break-even pricing", "Target return pricing"],
        correct: 1,
        explanation: "Correct answer: B. Value-based pricing. Value-based pricing uses buyers' perceptions of value rather than the seller's cost as the key to pricing, charging what customers are willing to pay."
    },
    {
        lectureId: 7,
        question: "A pricing strategy that charges a high initial price to 'skim' maximum revenue from segments willing to pay is called:",
        options: ["Penetration pricing", "Price skimming", "Psychological pricing", "Promotional pricing", "Dynamic pricing"],
        correct: 1,
        explanation: "Correct answer: B. Price skimming. Price skimming involves setting a high initial price for a new product to maximize revenues from segments willing to pay the high price, then lowering it over time."
    },
    {
        lectureId: 7,
        question: "Which pricing strategy sets a low initial price to penetrate the market quickly and attract a large number of buyers?",
        options: ["Skimming pricing", "Penetration pricing", "Value pricing", "Cost-plus pricing", "Prestige pricing"],
        correct: 1,
        explanation: "Correct answer: B. Penetration pricing. Penetration pricing involves setting a low initial price to penetrate the market quickly, attract large numbers of buyers, and win market share."
    },
    {
        lectureId: 7,
        question: "Charging different prices to different customers for the same product based on individual negotiations is called:",
        options: ["Price discrimination", "Dynamic pricing", "Zone pricing", "FOB pricing", "Uniform delivered pricing"],
        correct: 1,
        explanation: "Correct answer: B. Dynamic pricing. Dynamic pricing involves adjusting prices continually to meet the characteristics and needs of individual customers and situations."
    },
    {
        lectureId: 7,
        question: "The pricing objective focused on maximizing market share is known as:",
        options: ["Profit maximization", "Sales maximization", "Status quo pricing", "Quality leadership", "Survival pricing"],
        correct: 1,
        explanation: "Correct answer: B. Sales maximization. Sales maximization (or market share maximization) focuses on capturing the largest possible market share, sometimes sacrificing short-term profits."
    },
    {
        lectureId: 7,
        question: "Price elasticity of demand measures:",
        options: ["How supply changes with price", "How demand changes with income", "How quantity demanded changes with price", "How price changes with competition", "How cost changes with volume"],
        correct: 2,
        explanation: "Correct answer: C. How quantity demanded changes with price. Price elasticity of demand measures how responsive the quantity demanded is to a change in price - whether demand is elastic (responsive) or inelastic (not responsive)."
    },
    {
        lectureId: 7,
        question: "Adding a standard markup to the cost of the product is called:",
        options: ["Value-based pricing", "Cost-plus pricing", "Break-even pricing", "Target return pricing", "Psychological pricing"],
        correct: 1,
        explanation: "Correct answer: B. Cost-plus pricing. Cost-plus pricing (or markup pricing) involves adding a standard markup to the product's cost without considering demand or competition."
    },
    {
        lectureId: 7,
        question: "Which pricing strategy uses price to signal high quality or luxury status?",
        options: ["Economy pricing", "Penetration pricing", "Prestige pricing", "Promotional pricing", "Seasonal pricing"],
        correct: 2,
        explanation: "Correct answer: C. Prestige pricing. Prestige pricing involves setting a high price to suggest high quality, exclusivity, or luxury status to appeal to status-conscious consumers."
    },
    {
        lectureId: 7,
        question: "A break-even analysis determines the price at which:",
        options: ["Profits are maximized", "Revenue equals total costs", "Market share is highest", "Demand is highest", "Competition is lowest"],
        correct: 1,
        explanation: "Correct answer: B. Revenue equals total costs. Break-even analysis determines the price at which total revenue equals total costs, resulting in zero profit (the break-even point)."
    },
    {
        lectureId: 7,
        question: "When demand is inelastic, a price increase will result in:",
        options: ["Lower total revenue", "Higher total revenue", "Same total revenue", "Zero revenue", "Negative revenue"],
        correct: 1,
        explanation: "Correct answer: B. Higher total revenue. With inelastic demand, the percentage change in quantity demanded is less than the percentage change in price, so a price increase leads to higher total revenue."
    },
    {
        lectureId: 7,
        question: "Captive product pricing involves:",
        options: ["Pricing products to be sold together in a bundle", "Pricing main products low and required supplies high", "Matching competitor prices exactly", "Setting prices based on production capacity", "Pricing based on customer income levels"],
        correct: 1,
        explanation: "Correct answer: B. Pricing main products low and required supplies high. Captive product pricing involves setting a low price for the main product (like a printer) and high prices for required supplies (like ink cartridges)."
    },
    {
        lectureId: 7,
        question: "Price lining is a strategy where:",
        options: ["Prices are set along a production line", "Different versions of a product are priced at different points", "Prices follow a seasonal pattern", "Prices are determined by supply line costs", "Prices are set in a straight line graph"],
        correct: 1,
        explanation: "Correct answer: B. Different versions of a product are priced at different points. Price lining involves offering a product line with several items at specific price points, giving customers options at different quality/price levels."
    },
    {
        lectureId: 7,
        question: "Predatory pricing refers to:",
        options: ["Pricing below cost to drive out competitors", "Pricing based on predator behavior", "Pricing above market rates", "Pricing based on customer predictions", "Pricing for environmental protection"],
        correct: 0,
        explanation: "Correct answer: A. Pricing below cost to drive out competitors. Predatory pricing involves setting prices very low, often below cost, with the intent of driving competitors out of business."
    },
    {
        lectureId: 7,
        question: "Target costing works by:",
        options: ["Starting with the selling price and working backward to achieve target costs", "Adding a fixed markup to production costs", "Setting prices to match competitors", "Pricing based on historical costs", "Using the highest possible cost basis"],
        correct: 0,
        explanation: "Correct answer: A. Starting with the selling price and working backward to achieve target costs. Target costing starts with the price consumers are willing to pay and works backward to determine the maximum allowable cost to achieve desired profit margins."
    },

    // ==================== LECTURE 8: PLACE/DISTRIBUTION (Questions 91-105) ====================
    {
        lectureId: 8,
        question: "Which distribution channel involves no intermediaries between producer and consumer?",
        options: ["Indirect channel", "Direct channel", "Selective distribution", "Intensive distribution", "Exclusive distribution"],
        correct: 1,
        explanation: "Correct answer: B. Direct channel. A direct distribution channel has no intermediary levels - the company sells directly to consumers through its own sales force, website, or stores."
    },
    {
        lectureId: 8,
        question: "Intensive distribution is a strategy where:",
        options: ["Only one retailer carries the product", "The product is stocked in as many outlets as possible", "Selected retailers carry the product", "Products are sold only online", "Products are sold by manufacturer only"],
        correct: 1,
        explanation: "Correct answer: B. The product is stocked in as many outlets as possible. Intensive distribution involves stocking the product in as many outlets as possible, typically used for convenience goods like soft drinks and candy."
    },
    {
        lectureId: 8,
        question: "An intermediary that buys products, takes title to them, and resells to others is called a:",
        options: ["Agent", "Broker", "Merchant", "Distributor", "Retailer"],
        correct: 2,
        explanation: "Correct answer: C. Merchant. A merchant (or merchant wholesaler/retailer) is an intermediary who takes title to goods and resells them, unlike agents or brokers who don't take title."
    },
    {
        lectureId: 8,
        question: "Exclusive distribution is best suited for which type of products?",
        options: ["Convenience goods", "Shopping goods", "Luxury goods and specialty items", "Raw materials", "Commodities"],
        correct: 2,
        explanation: "Correct answer: C. Luxury goods and specialty items. Exclusive distribution severely limits the number of intermediaries, typically used for luxury goods and specialty products where service and image are important."
    },
    {
        lectureId: 8,
        question: "A marketing channel consists of:",
        options: ["Only the manufacturing process", "Interdependent organizations involved in making products available", "Only retail stores", "Only wholesalers", "Only online platforms"],
        correct: 1,
        explanation: "Correct answer: B. Interdependent organizations involved in making products available. A marketing channel is a set of interdependent organizations that help make a product or service available for use or consumption by the consumer or business user."
    },
    {
        lectureId: 8,
        question: "Selective distribution involves:",
        options: ["Selling through all available outlets", "Using only a few selected intermediaries", "Selling directly to consumers only", "Using a single intermediary", "Random outlet selection"],
        correct: 1,
        explanation: "Correct answer: B. Using only a few selected intermediaries. Selective distribution involves using more than one but fewer than all intermediaries who are willing to carry the company's products."
    },
    {
        lectureId: 8,
        question: "Which channel function involves physically moving products from producers to consumers?",
        options: ["Negotiation", "Risk taking", "Physical distribution", "Financing", "Promotion"],
        correct: 2,
        explanation: "Correct answer: C. Physical distribution. Physical distribution involves the activities of transporting and storing goods to make them available to customers at the right time and place."
    },
    {
        lectureId: 8,
        question: "A distribution system in which producers, wholesalers, and retailers act as a unified system is called:",
        options: ["Conventional distribution channel", "Vertical marketing system", "Horizontal marketing system", "Multichannel distribution", "Direct marketing system"],
        correct: 1,
        explanation: "Correct answer: B. Vertical marketing system. A vertical marketing system (VMS) consists of producers, wholesalers, and retailers acting as a unified system, with one channel member owning the others or having contracts/power."
    },
    {
        lectureId: 8,
        question: "Disintermediation refers to:",
        options: ["Adding more intermediaries", "Removing intermediaries from the distribution channel", "Creating new types of intermediaries", "Merging intermediaries together", "Expanding internationally"],
        correct: 1,
        explanation: "Correct answer: B. Removing intermediaries from the distribution channel. Disintermediation involves cutting out intermediaries and selling directly to customers, often enabled by technology and e-commerce."
    },
    {
        lectureId: 8,
        question: "Channel conflict that occurs between different levels of the same channel is called:",
        options: ["Horizontal conflict", "Vertical conflict", "Multichannel conflict", "Intermarket conflict", "Competitive conflict"],
        correct: 1,
        explanation: "Correct answer: B. Vertical conflict. Vertical conflict occurs between different levels of the same channel, such as conflict between manufacturers and retailers or between wholesalers and retailers."
    },
    {
        lectureId: 8,
        question: "Which logistics activity involves deciding where to store inventory and in what quantities?",
        options: ["Transportation", "Warehousing", "Inventory management", "Order processing", "Materials handling"],
        correct: 2,
        explanation: "Correct answer: C. Inventory management. Inventory management involves decisions about how much inventory to hold, where to store it, and when to replenish stock."
    },
    {
        lectureId: 8,
        question: "A horizontal marketing system is formed when:",
        options: ["Different levels of the channel cooperate", "Two or more companies at the same level join together", "A company sells through multiple channels", "A company eliminates all intermediaries", "Retailers form buying cooperatives"],
        correct: 1,
        explanation: "Correct answer: B. Two or more companies at the same level join together. A horizontal marketing system involves two or more companies at one level joining together to follow a new marketing opportunity, such as joint ventures between competitors."
    },
    {
        lectureId: 8,
        question: "The total logistics concept suggests that:",
        options: ["Transportation is the only important activity", "All logistics activities should be integrated and coordinated", "Inventory should be minimized at all costs", "Warehousing is unnecessary", "Suppliers should handle all logistics"],
        correct: 1,
        explanation: "Correct answer: B. All logistics activities should be integrated and coordinated. The total logistics concept emphasizes that all transportation, storage, inventory, and handling activities should be coordinated as an integrated system for efficiency."
    },
    {
        lectureId: 8,
        question: "Which distribution strategy is most appropriate for shopping goods like appliances and clothing?",
        options: ["Intensive distribution", "Exclusive distribution", "Selective distribution", "Direct distribution only", "No distribution"],
        correct: 2,
        explanation: "Correct answer: C. Selective distribution. Selective distribution is most appropriate for shopping goods where consumers compare alternatives and where service and brand image matter."
    },
    {
        lectureId: 8,
        question: "Just-in-time (JIT) inventory systems are designed to:",
        options: ["Maximize inventory levels", "Minimize inventory holding by receiving goods only as needed", "Eliminate suppliers entirely", "Increase warehousing costs", "Slow down production"],
        correct: 1,
        explanation: "Correct answer: B. Minimize inventory holding by receiving goods only as needed. JIT inventory systems minimize inventory carrying costs by receiving goods only when they are needed in the production process or for sale."
    },

    // ==================== LECTURE 9: PROMOTION (Questions 106-120) ====================
    {
        lectureId: 9,
        question: "Which promotional tool involves non-personal presentation and promotion of ideas, goods, or services by an identified sponsor?",
        options: ["Personal selling", "Public relations", "Advertising", "Sales promotion", "Direct marketing"],
        correct: 2,
        explanation: "Correct answer: C. Advertising. Advertising is any paid form of non-personal presentation and promotion of ideas, goods, or services by an identified sponsor."
    },
    {
        lectureId: 9,
        question: "The promotional mix element that involves building good relations with the company's various publics is:",
        options: ["Advertising", "Personal selling", "Sales promotion", "Public relations", "Direct marketing"],
        correct: 3,
        explanation: "Correct answer: D. Public relations. Public relations involves building good relations with the company's various publics by obtaining favorable publicity, building up a good corporate image, and handling unfavorable rumors and events."
    },
    {
        lectureId: 9,
        question: "A push strategy is most appropriate when:",
        options: ["Consumers make the purchase decision", "The product is a low-involvement good", "The product moves through a long channel", "The company targets a mass market", "Advertising is the primary promotional tool"],
        correct: 2,
        explanation: "Correct answer: C. The product moves through a long channel. Push strategy is appropriate when the product moves through a long channel, using promotion to push the product through channels to final consumers."
    },
    {
        lectureId: 9,
        question: "Which promotional strategy directs marketing efforts toward final consumers to induce them to buy?",
        options: ["Push strategy", "Pull strategy", "Combination strategy", "Direct strategy", "Indirect strategy"],
        correct: 1,
        explanation: "Correct answer: B. Pull strategy. Pull strategy directs marketing efforts toward final consumers to induce them to buy the product, creating demand that pulls the product through the channel."
    },
    {
        lectureId: 9,
        question: "Sales promotion includes:",
        options: ["Only advertising activities", "Long-term incentives only", "Short-term incentives to encourage purchase", "Only personal selling activities", "Only public relations activities"],
        correct: 2,
        explanation: "Correct answer: C. Short-term incentives to encourage purchase. Sales promotion consists of short-term incentives to encourage the purchase or sale of a product or service, such as discounts, coupons, and contests."
    },
    {
        lectureId: 9,
        question: "Which promotional mix element allows for immediate feedback and relationship building?",
        options: ["Advertising", "Personal selling", "Sales promotion", "Public relations", "Publicity"],
        correct: 1,
        explanation: "Correct answer: B. Personal selling. Personal selling involves personal presentation by the firm's sales force for the purpose of making sales and building customer relationships, allowing for immediate feedback."
    },
    {
        lectureId: 9,
        question: "The process of blending different promotional tools to create a unified message is called:",
        options: ["Marketing mix", "Product mix", "Integrated marketing communications (IMC)", "Channel mix", "Price mix"],
        correct: 2,
        explanation: "Correct answer: C. Integrated marketing communications (IMC). Integrated Marketing Communications (IMC) involves carefully integrating and coordinating the company's many communications channels to deliver a clear, consistent, and compelling message."
    },
    {
        lectureId: 9,
        question: "Which advertising objective aims to build consumer preference and encourage switching to the brand?",
        options: ["Informative advertising", "Persuasive advertising", "Reminder advertising", "Comparative advertising", "Institutional advertising"],
        correct: 1,
        explanation: "Correct answer: B. Persuasive advertising. Persuasive advertising aims to build selective demand and brand preference, encouraging consumers to switch to or prefer the advertised brand."
    },
    {
        lectureId: 9,
        question: "A company's total marketing communications mix is also called its:",
        options: ["Marketing plan", "Promotional mix", "Product mix", "Distribution mix", "Pricing strategy"],
        correct: 1,
        explanation: "Correct answer: B. Promotional mix. The promotional mix (or marketing communications mix) consists of the specific blend of advertising, sales promotion, public relations, personal selling, and direct marketing tools."
    },
    {
        lectureId: 9,
        question: "Advertising that builds selective demand by communicating the distinctive benefits of a brand is:",
        options: ["Informative advertising", "Persuasive advertising", "Reminder advertising", "Reinforcement advertising", "Advocacy advertising"],
        correct: 1,
        explanation: "Correct answer: B. Persuasive advertising. Persuasive advertising aims to build selective demand by communicating the distinctive benefits and features that differentiate the brand from competitors."
    },
    {
        lectureId: 9,
        question: "Direct marketing is characterized by:",
        options: ["Using only mass media", "Engaging directly with targeted individual consumers", "Focusing only on retailers", "Being only business-to-business", "Not allowing customer response"],
        correct: 1,
        explanation: "Correct answer: B. Engaging directly with targeted individual consumers. Direct marketing involves engaging directly with carefully targeted individual consumers and customer communities to both obtain an immediate response and cultivate lasting customer relationships."
    },
    {
        lectureId: 9,
        question: "In which stage of the product life cycle is reminder advertising most commonly used?",
        options: ["Introduction", "Growth", "Maturity", "Decline", "Development"],
        correct: 2,
        explanation: "Correct answer: C. Maturity. Reminder advertising is important for mature products to maintain customer awareness and keep the brand in consumers' minds."
    },
    {
        lectureId: 9,
        question: "Which promotional tool is most effective for complex products requiring explanation or demonstration?",
        options: ["Print advertising", "Personal selling", "Sales promotion", "Public relations", "Billboard advertising"],
        correct: 1,
        explanation: "Correct answer: B. Personal selling. Personal selling is most effective for complex products as salespeople can explain features, answer questions, and demonstrate the product to potential buyers."
    },
    {
        lectureId: 9,
        question: "The AIDA model in promotional planning stands for:",
        options: ["Awareness, Interest, Desire, Action", "Attention, Information, Decision, Agreement", "Awareness, Intention, Decision, Acceptance", "Attention, Interest, Decision, Action", "Awareness, Information, Desire, Agreement"],
        correct: 0,
        explanation: "Correct answer: A. Awareness, Interest, Desire, Action. The AIDA model outlines the stages in the consumer response to promotion: Attention/Awareness, Interest, Desire, and Action (purchase)."
    },
    {
        lectureId: 9,
        question: "A company that wants to quickly generate trial and attract deal-prone customers should use:",
        options: ["Image advertising", "Sales promotion", "Institutional advertising", "Advocacy advertising", "Reminder advertising"],
        correct: 1,
        explanation: "Correct answer: B. Sales promotion. Sales promotion provides short-term incentives that can quickly stimulate trial purchases and attract price-sensitive or deal-prone customers."
    }
];

// Also export as extendedQuizQuestions for app.js compatibility
const extendedQuizQuestions = englishQuizQuestions;

// Export for use in main application
if (typeof module !== 'undefined' && module.exports) {
    module.exports = englishQuizQuestions;
} else if (typeof window !== 'undefined') {
    window.englishQuizQuestions = englishQuizQuestions;
    window.extendedQuizQuestions = extendedQuizQuestions;
}
