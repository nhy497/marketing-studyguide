// ============================================
// PRACTICE QUESTION BANK - INSPIRED BY PROFESSOR'S STYLE
// ============================================
// 來源：參考教授題庫風格與概念創作的練習題目 (30題)
// 說明：這些題目由我創作，參考了教授題目的風格、難度和概念範圍
//       用於額外練習和概念鞏固，但不屬於教授正式題庫
// 創建日期：2026-04-22
// ============================================

const practiceQuizQuestions = [
    {
        id: 1,
        question: "In the consumer decision-making process, which stage immediately follows 'Information Search' when a buyer evaluates different brands based on specific attributes?",
        options: ["Problem Recognition according to marketing theory", "Purchase Decision as defined by experts", "Post-purchase Evaluation (such as in marketing)", "Alternative Evaluation as defined by experts", "Need Confirmation in the current market"],
        correct: 3,
        explanation: "Correct answer: D. Alternative Evaluation. After gathering information, consumers evaluate alternative brands against their criteria before making a purchase decision."
    },
    {
        id: 2,
        question: "A company that focuses exclusively on efficient production and distribution while assuming customers will favor products that are widely available and affordable is following which marketing concept?",
        options: ["Product Concept in business practice", "Selling Concept within the industry context", "Production Concept as defined by experts", "Marketing Concept within the industry context", "Societal Marketing Concept within the industry context"],
        correct: 2,
        explanation: "Correct answer: C. Production Concept. This concept assumes consumers will favor products that are widely available and affordable (low cost)."
    },
    {
        id: 3,
        question: "When Apple launches a new iPhone model and existing iPhone customers upgrade to the new version, potentially reducing sales of older iPhone models, this phenomenon is best described as:",
        options: ["Brand Loyalty within the industry context", "Market Segmentation according to marketing theory", "Product Cannibalization in the current market", "Planned Obsolescence in the current market", "Customer Retention as defined by experts"],
        correct: 2,
        explanation: "Correct answer: C. Product Cannibalization. This occurs when a company's new product takes sales away from its existing products."
    },
    {
        id: 4,
        question: "In the Boston Consulting Group (BCG) matrix, products with low market share in high-growth markets are classified as:",
        options: ["Stars according to marketing theory", "Cash Cows according to marketing theory", "Question Marks in the current market", "Dogs within the industry context", "Leaders in the current market"],
        correct: 2,
        explanation: "Correct answer: C. Question Marks (or Problem Children). These products require significant investment to increase market share."
    },
    {
        id: 5,
        question: "Which type of market segmentation divides consumers based on lifestyle, personality traits, values, and social class?",
        options: ["Demographic Segmentation according to marketing theory", "Geographic Segmentation within the industry context", "Psychographic Segmentation as defined by experts", "Behavioral Segmentation within the industry context", "Occasion Segmentation for strategic purposes"],
        correct: 2,
        explanation: "Correct answer: C. Psychographic Segmentation. This approach segments based on lifestyle, personality, and social characteristics."
    },
    {
        id: 6,
        question: "A retailer sells a designer handbag for $999 instead of $1,000 to make customers perceive it as significantly more affordable. This pricing strategy is known as:",
        options: ["Prestige Pricing according to marketing theory", "Penetration Pricing in the current market", "Odd-Even Pricing based on research", "Price Skimming in the current market", "Psychological Pricing as defined by experts"],
        correct: 2,
        explanation: "Correct answer: C. Odd-Even Pricing. Setting prices just below round numbers ($9.99 vs $10) exploits psychological price perception."
    },
    {
        id: 7,
        question: "When a consumer interprets marketing messages in a way that supports their existing beliefs about a brand while ignoring contradictory information, this is called:",
        options: ["Selective Exposure for various strategic and operational reasons in modern business environments", "Selective Attention according to marketing theory", "Selective Comprehension according to marketing theory", "Selective Retention according to marketing theory", "Cognitive Dissonance for strategic purposes"],
        correct: 2,
        explanation: "Correct answer: C. Selective Comprehension. Consumers interpret information to make it consistent with their existing attitudes and beliefs."
    },
    {
        id: 8,
        question: "The complete set of all product lines and individual items offered by a company is known as its:",
        options: ["Product Line within the industry context", "Product Mix within the industry context", "Product Portfolio for strategic purposes", "Product Category (such as in marketing)", "Product Assortment in the current market"],
        correct: 1,
        explanation: "Correct answer: B. Product Mix (or Product Assortment). This includes all product lines and items a company offers."
    },
    {
        id: 9,
        question: "In the hierarchy of effects model, creating initial awareness about a product or brand is which stage?",
        options: ["Knowledge as defined by experts", "Awareness in the current market", "Interest in the current market", "Desire within the industry context", "Action within the industry context"],
        correct: 1,
        explanation: "Correct answer: B. Awareness. The hierarchy of effects begins with creating awareness, followed by interest, desire, and action."
    },
    {
        id: 10,
        question: "A marketing strategy where a company offers several products in the same category at different price points to appeal to various customer segments is called:",
        options: ["Product Bundling within the industry context", "Price Lining (such as in marketing)", "Versioning according to marketing theory", "Multi-branding as defined by experts", "Line Extension in business practice"],
        correct: 1,
        explanation: "Correct answer: B. Price Lining. This involves offering products at specific price points (economy, standard, premium) to target different segments."
    },
    {
        id: 11,
        question: "When Coca-Cola offers different sizes of the same product (12oz can, 20oz bottle, 2-liter) to meet different consumption occasions, this is an example of:",
        options: ["Product Line Depth according to marketing theory", "Product Mix Width for various strategic and operational reasons in modern business environments", "Brand Extension according to marketing theory", "Product Modification as defined by experts", "Form Segmentation (such as in marketing)"],
        correct: 0,
        explanation: "Correct answer: A. Product Line Depth. This refers to the number of variants (sizes, flavors) within a single product line."
    },
    {
        id: 12,
        question: "A company's promise to deliver specific benefits and experiences consistently to buyers is the definition of:",
        options: ["Brand Equity according to marketing theory", "Brand Identity according to marketing theory", "Brand Value according to marketing theory", "Brand Promise within the industry context", "Brand Positioning according to marketing theory"],
        correct: 3,
        explanation: "Correct answer: D. Brand Promise. This is the marketer's assurance that the product will deliver the claimed benefits and experiences."
    },
    {
        id: 13,
        question: "Which promotional tool involves non-personal communication through paid media to inform, persuade, or remind target audiences about products or services?",
        options: ["Public Relations within the industry context", "Personal Selling according to marketing theory", "Advertising for strategic purposes", "Sales Promotion within the industry context", "Direct Marketing in business practice"],
        correct: 2,
        explanation: "Correct answer: C. Advertising. Advertising is paid, non-personal communication through various media channels."
    },
    {
        id: 14,
        question: "When a company collects data that has already been gathered for other purposes, such as government statistics or industry reports, this is called:",
        options: ["Primary Data for strategic purposes", "Secondary Data (such as in marketing)", "Qualitative Data according to marketing theory", "Experimental Data for strategic purposes", "Syndicated Data for strategic purposes"],
        correct: 1,
        explanation: "Correct answer: B. Secondary Data. This is existing data collected for other purposes that can be used for marketing research."
    },
    {
        id: 15,
        question: "In the extended problem-solving decision process, consumers typically engage in which of the following behaviors?",
        options: ["Minimal information search and quick decision making for various strategic and operational reasons in modern business environments", "Extensive information search and evaluation of many alternatives in the current market", "Automatic purchase based on habit", "Impulse buying without comparison as defined by experts in business practice", "Decision based solely on price (such as in marketing) according to marketing theory"],
        correct: 1,
        explanation: "Correct answer: B. Extensive information search and evaluation. Extended problem solving involves high involvement and thorough evaluation."
    },
    {
        id: 16,
        question: "The practice of tailoring products and marketing programs to suit the tastes of specific individuals and locations is called:",
        options: ["Mass Marketing based on research", "Segmented Marketing within the industry context", "Niche Marketing within the industry context", "Local Marketing (such as in marketing)", "Micromarketing for strategic purposes"],
        correct: 4,
        explanation: "Correct answer: E. Micromarketing (or Local/Individual Marketing). This involves tailoring to specific locations, stores, or individuals."
    },
    {
        id: 17,
        question: "A pricing strategy where a company sets a low initial price to quickly penetrate a market and gain market share is called:",
        options: ["Price Skimming according to marketing theory", "Penetration Pricing in business practice", "Economy Pricing for strategic purposes", "Premium Pricing within the industry context", "Psychological Pricing in the current market"],
        correct: 1,
        explanation: "Correct answer: B. Penetration Pricing. This low-price strategy aims to attract a large number of buyers quickly and gain market share."
    },
    {
        id: 18,
        question: "In the AIDA model of consumer response to marketing communications, what does the 'D' stand for?",
        options: ["Decision within the industry context", "Differentiation (such as in marketing)", "Desire according to marketing theory", "Demand according to marketing theory", "Development according to marketing theory"],
        correct: 2,
        explanation: "Correct answer: C. Desire. AIDA stands for Attention, Interest, Desire, and Action."
    },
    {
        id: 19,
        question: "When a company uses the same marketing mix (product, price, place, promotion) for all consumers in a market, it is practicing:",
        options: ["Differentiated Marketing for various strategic and operational reasons in modern business environments", "Concentrated Marketing according to marketing theory", "Undifferentiated (Mass) Marketing within the industry context", "Niche Marketing for strategic purposes", "Micro-marketing according to marketing theory"],
        correct: 2,
        explanation: "Correct answer: C. Undifferentiated (Mass) Marketing. This strategy targets the entire market with one standardized offering."
    },
    {
        id: 20,
        question: "The process of dividing a market into distinct groups of buyers with different needs, characteristics, or behaviors is called:",
        options: ["Target Marketing for various strategic and operational reasons in modern business environments", "Market Segmentation according to marketing theory", "Positioning within the industry context", "Differentiation within the industry context", "Market Research for strategic purposes"],
        correct: 1,
        explanation: "Correct answer: B. Market Segmentation. This involves dividing markets into distinct groups that might require separate products or marketing mixes."
    },
    {
        id: 21,
        question: "A company's total marketing communications mix—also called its promotion mix—consists of the specific blend of:",
        options: ["Product, Price, Place, and Promotion", "Advertising, Sales Promotion, Personal Selling, Public Relations, and Direct Marketing", "Segmentation, Targeting, Positioning, and Differentiation", "Brand, Price, Packaging, and Distribution", "Awareness, Interest, Desire, and Action"],
        correct: 1,
        explanation: "Correct answer: B. The promotion mix includes advertising, sales promotion, personal selling, public relations, and direct/digital marketing."
    },
    {
        id: 22,
        question: "When a brand name is used for a new product in a different category, such as Honda applying its name to both cars and lawnmowers, this is called:",
        options: ["Line Extension in business practice", "Brand Extension (such as in marketing)", "Multibranding within the industry context", "New Branding (such as in marketing)", "Co-branding in business practice"],
        correct: 1,
        explanation: "Correct answer: B. Brand Extension. This involves using an existing brand name for a new product in a different category."
    },
    {
        id: 23,
        question: "The set of marketing tools a firm uses to implement its marketing strategy is called the:",
        options: ["Marketing Mix as defined by experts", "Marketing Strategy according to marketing theory", "Marketing Plan in the current market", "Marketing Program in business practice", "Marketing System within the industry context"],
        correct: 0,
        explanation: "Correct answer: A. Marketing Mix. This refers to the set of tactical marketing tools (4Ps) that the firm blends to produce the response it wants."
    },
    {
        id: 24,
        question: "In perceptual mapping, the distance between two brands on the map represents:",
        options: ["The actual distance between stores in business practice within the industry context", "The price difference between brands within the industry context in business practice", "The perceived similarity or difference between brands (such as in marketing)", "The market share difference according to marketing theory (such as in marketing)", "The age difference of target customers in business practice according to marketing theory"],
        correct: 2,
        explanation: "Correct answer: C. The perceived similarity or difference between brands. Closer brands are perceived as more similar."
    },
    {
        id: 25,
        question: "A marketing intermediary that sells to final consumers is classified as a:",
        options: ["Wholesaler according to marketing theory", "Retailer for strategic purposes", "Distributor within the industry context", "Agent according to marketing theory", "Broker in the current market"],
        correct: 1,
        explanation: "Correct answer: B. Retailer. Retailers are channel members that sell products directly to final consumers for personal use."
    },
    {
        id: 26,
        question: "The value of customer relationships that a company creates through brand awareness, brand loyalty, and perceived quality is called:",
        options: ["Brand Asset within the industry context", "Brand Equity for strategic purposes", "Brand Value in the current market", "Brand Capital as defined by experts", "Brand Premium within the industry context"],
        correct: 1,
        explanation: "Correct answer: B. Brand Equity. This is the differential effect that knowing the brand name has on customer response to the product."
    },
    {
        id: 27,
        question: "When a company surveys a small group of customers to understand their opinions before launching a new product, this is an example of collecting:",
        options: ["Primary Data according to marketing theory", "Secondary Data for various strategic and operational reasons in modern business environments", "Tertiary Data for strategic purposes", "Syndicated Data (such as in marketing)", "Census Data according to marketing theory"],
        correct: 0,
        explanation: "Correct answer: A. Primary Data. This is original data collected specifically for the current research purpose through surveys, focus groups, etc."
    },
    {
        id: 28,
        question: "In the product life cycle, during which stage do sales peak and begin to decline due to market saturation and new competition?",
        options: ["Introduction within the industry context", "Growth in business practice", "Maturity within the industry context", "Decline in the current market", "Saturation for strategic purposes"],
        correct: 2,
        explanation: "Correct answer: C. Maturity. During maturity, sales peak and then gradually decline as the market becomes saturated."
    },
    {
        id: 29,
        question: "A strategy of designing and producing products that can be easily modified to meet the needs of individual customers is called:",
        options: ["Standardization within the industry context", "Mass Customization based on research", "Differentiation (such as in marketing)", "Segmentation according to marketing theory", "Personalization in the current market"],
        correct: 1,
        explanation: "Correct answer: B. Mass Customization. This combines the efficiency of mass production with the ability to customize products for individual customers."
    },
    {
        id: 30,
        question: "The promotional strategy designed to create brand awareness and inform potential customers about new products is primarily used in which stage of the product life cycle?",
        options: ["Introduction (such as in marketing)", "Growth in business practice", "Maturity within the industry context", "Decline as defined by experts", "All stages equally (such as in marketing)"],
        correct: 0,
        explanation: "Correct answer: A. Introduction. Informative advertising is crucial when introducing new products to build awareness and educate consumers."
    },

    // ==================== LECTURE 2: MARKETING STRATEGIES (Q31-35) ====================
    {
        id: 31,
        question: "In a visionary organization, the hierarchy of strategic directions flows from the organizational vision down to:",
        options: ["Tactical plans only", "Mission, then business unit objectives, and finally marketing objectives", "Financial budgets exclusively", "Operational procedures", "HR policies"],
        correct: 1,
        explanation: "Correct answer: B. The strategic direction becomes more specific as it flows down: Vision → Mission → Business Unit Objectives → Marketing Objectives."
    },
    {
        id: 32,
        question: "The planning phase of the strategic marketing process consists of which three steps?",
        options: ["Implementation, evaluation, and control", "Situation analysis, market-product focus, and marketing program", "Research, development, and testing", "Segmentation, targeting, and positioning only", "Budgeting, scheduling, and executing"],
        correct: 1,
        explanation: "Correct answer: B. The three steps are: (1) Situation Analysis, (2) Market-Product Focus and Goal Setting, and (3) Marketing Program Development."
    },
    {
        id: 33,
        question: "A marketing objective should ideally be which of the following?",
        options: ["Vague and flexible for strategic purposes within the industry context", "Quantified and measurable with specific targets according to marketing theory", "Focused solely on production capacity according to marketing theory as defined by experts", "Determined by competitors' actions according to marketing theory", "Based only on financial constraints in business practice"],
        correct: 1,
        explanation: "Correct answer: B. Marketing objectives should be quantified and measurable, such as 'increase market share by 5% within 12 months.'"
    },
    {
        id: 34,
        question: "Portfolio analysis tools like the BCG matrix and GE-McKinsey matrix help organizations to:",
        options: ["Hire employees", "Analyze and allocate resources among strategic business units (such as in marketing)", "Design product packaging", "Determine advertising budgets only according to marketing theory as defined by experts", "Set employee salaries"],
        correct: 1,
        explanation: "Correct answer: B. Portfolio analysis helps organizations analyze their SBUs and allocate resources appropriately based on market attractiveness and competitive position."
    },
    {
        id: 35,
        question: "Which of the following represents a comprehensive marketing program element?",
        options: ["Price only", "Product, price, place, and promotion decisions", "Advertising exclusively", "Distribution channels alone", "Target market selection only"],
        correct: 1,
        explanation: "Correct answer: B. A marketing program encompasses all 4Ps: Product, Price, Place (distribution), and Promotion strategies and tactics."
    },

    // ==================== LECTURE 3: ENVIRONMENTAL SCANNING (Q36-40) ====================
    {
        id: 36,
        question: "Environmental scanning involves continually acquiring information on events occurring outside the organization to:",
        options: ["Monitor employee performance for various strategic and operational reasons in modern business environments", "Identify and interpret potential trends affecting the business according to marketing theory", "Track internal production efficiency in business practice according to marketing theory", "Evaluate management decisions only in business practice according to marketing theory", "Measure advertising effectiveness as defined by experts according to marketing theory"],
        correct: 1,
        explanation: "Correct answer: B. Environmental scanning monitors external forces (social, economic, technological, competitive, regulatory) to identify trends and opportunities."
    },
    {
        id: 37,
        question: "The five major environmental forces that affect marketing include all EXCEPT:",
        options: ["Social forces (such as in marketing) in the current market", "Economic forces within the industry context", "Internal management forces according to marketing theory", "Technological forces according to marketing theory", "Regulatory forces according to marketing theory"],
        correct: 2,
        explanation: "Correct answer: C. The five environmental forces are: Social, Economic, Technological, Competitive, and Regulatory—not internal management."
    },
    {
        id: 38,
        question: "In a SWOT analysis, the 'O' stands for Opportunities, which are typically:",
        options: ["Internal weaknesses of the organization for various strategic and operational reasons in modern business environments", "External favorable factors in the environment according to marketing theory", "Internal strengths of the firm (such as in marketing)", "External threats to the business within the industry context", "Financial obligations based on research within the industry context"],
        correct: 1,
        explanation: "Correct answer: B. Opportunities are external factors in the environment that favorably impact a firm (external and positive)."
    },
    {
        id: 39,
        question: "When marketers collect and analyze data about consumers' demographics, preferences, and purchase behaviors to develop marketing actions, this is part of:",
        options: ["Financial accounting as defined by experts in the current market", "Marketing research and consumer data analysis in the current market", "Human resource management as defined by experts (such as in marketing)", "Production planning in business practice according to marketing theory", "Supply chain logistics in business practice based on research"],
        correct: 1,
        explanation: "Correct answer: B. Marketing research involves gathering and analyzing consumer data to inform marketing decisions and actions."
    },
    {
        id: 40,
        question: "Which technological trend has most significantly changed how marketers collect consumer data and target audiences?",
        options: ["Steam power for various strategic and operational reasons in modern business environments", "Digital technology and big data analytics within the industry context", "Manual typewriters as defined by experts (such as in marketing)", "Paper-based surveys exclusively as defined by experts", "Telegraph systems in the current market within the industry context"],
        correct: 1,
        explanation: "Correct answer: B. Digital technology, internet, mobile devices, and big data analytics have revolutionized data collection and targeted marketing."
    },

    // ==================== LECTURE 4: CONSUMER BEHAVIOR (Q41-45) ====================
    {
        id: 41,
        question: "The consumer purchase decision process begins with which stage?",
        options: ["Information search in business practice", "Problem recognition in the current market", "Alternative evaluation in business practice", "Purchase decision within the industry context", "Post-purchase behavior as defined by experts"],
        correct: 1,
        explanation: "Correct answer: B. Problem recognition is the first stage, where consumers recognize a difference between their current state and desired state."
    },
    {
        id: 42,
        question: "During which stage of the consumer purchase decision process do consumers use past experience and external information to evaluate alternatives?",
        options: ["Problem recognition in business practice", "Information search for strategic purposes", "Alternative evaluation (such as in marketing)", "Purchase decision according to marketing theory", "Post-purchase behavior according to marketing theory"],
        correct: 2,
        explanation: "Correct answer: C. In alternative evaluation, consumers evaluate different brands/products based on attributes that are important to them."
    },
    {
        id: 43,
        question: "Routine problem solving typically occurs when consumers purchase:",
        options: ["Expensive luxury cars", "Low-involvement, frequently purchased items like toothpaste", "First homes", "Complex insurance policies", "High-end electronics"],
        correct: 1,
        explanation: "Correct answer: B. Routine problem solving applies to low-involvement, habitual purchases requiring minimal thought and information search."
    },
    {
        id: 44,
        question: "Psychological influences on consumer behavior include all of the following EXCEPT:",
        options: ["Motivation and personality (such as in marketing)", "Perception and learning within the industry context", "Attitudes and lifestyle in business practice", "Family and social class based on research", "Beliefs and values within the industry context as defined by experts"],
        correct: 3,
        explanation: "Correct answer: D. Family and social class are sociocultural influences, not psychological influences. Psychological factors include motivation, perception, learning, beliefs, attitudes, and lifestyle."
    },
    {
        id: 45,
        question: "The phenomenon where consumers seek information that supports their existing beliefs while avoiding contradictory information is called:",
        options: ["Selective exposure for strategic purposes", "Selective attention as defined by experts", "Selective retention as defined by experts", "Cognitive dissonance as defined by experts", "Selective perception within the industry context"],
        correct: 0,
        explanation: "Correct answer: A. Selective exposure is the tendency to seek information consistent with one's attitudes and avoid contradictory information."
    },

    // ==================== LECTURE 5: STP (Q46-50) ====================
    {
        id: 46,
        question: "Market segmentation is the process of:",
        options: ["Setting prices for products for various strategic and operational reasons in modern business environments", "Dividing a market into distinct groups with similar needs/characteristics as defined by experts", "Designing advertising campaigns", "Selecting distribution channels", "Determining production quantities for strategic purposes according to marketing theory"],
        correct: 1,
        explanation: "Correct answer: B. Market segmentation divides a market into distinct groups of buyers with different needs, characteristics, or behaviors."
    },
    {
        id: 47,
        question: "Which of the following is NOT one of the common bases for segmenting consumer markets?",
        options: ["Geographic segmentation according to marketing theory", "Demographic segmentation according to marketing theory", "Psychographic segmentation within the industry context", "Behavioral segmentation for strategic purposes", "Financial segmentation within the industry context"],
        correct: 4,
        explanation: "Correct answer: E. The four main segmentation bases are: Geographic, Demographic, Psychographic, and Behavioral—not 'Financial segmentation.'"
    },
    {
        id: 48,
        question: "Targeting strategies include all of the following EXCEPT:",
        options: ["Undifferentiated (mass) marketing for various strategic and operational reasons in modern business environments", "Differentiated marketing according to marketing theory", "Concentrated (niche) marketing according to marketing theory", "Micromarketing for strategic purposes as defined by experts", "Product standardization based on research in the current market"],
        correct: 4,
        explanation: "Correct answer: E. Product standardization is not a targeting strategy. Targeting strategies include: undifferentiated, differentiated, concentrated, and micromarketing."
    },
    {
        id: 49,
        question: "Product positioning refers to:",
        options: ["The physical placement of products on shelves in business practice within the industry context", "How target consumers perceive a product relative to competing products in the current market", "The geographic distribution of products within the industry context for strategic purposes", "The production location of goods according to marketing theory within the industry context", "Packaging design only"],
        correct: 1,
        explanation: "Correct answer: B. Positioning is the place a product occupies in consumers' minds relative to competing products—the mental perception."
    },
    {
        id: 50,
        question: "A positioning map (perceptual map) is used to visualize:",
        options: ["Production facility locations for various strategic and operational reasons in modern business environments", "How consumers perceive brands on key attributes relative to competitors in business practice", "Distribution channel routes", "Employee organization structure", "Financial performance trends for strategic purposes according to marketing theory"],
        correct: 1,
        explanation: "Correct answer: B. Perceptual maps show how consumers perceive competing brands on important attributes, helping identify positioning opportunities."
    },

    // ==================== LECTURE 6: PRODUCT STRATEGY (Q51-55) ====================
    {
        id: 51,
        question: "A product is defined as:",
        options: ["Only physical goods", "A good, service, or idea consisting of tangible and intangible attributes that satisfy needs", "Just packaging and labeling", "Only services offered by companies", "Raw materials exclusively"],
        correct: 1,
        explanation: "Correct answer: B. A product is a good, service, or idea consisting of a bundle of tangible and intangible attributes that satisfies consumers' needs."
    },
    {
        id: 52,
        question: "During which stage of the product life cycle does competition typically intensify and sales growth slow down?",
        options: ["Introduction for various strategic and operational reasons in modern business environments", "Growth according to marketing theory", "Maturity according to marketing theory", "Decline in business practice", "Development as defined by experts"],
        correct: 2,
        explanation: "Correct answer: C. The maturity stage is characterized by slowing sales growth, intense competition, and market saturation."
    },
    {
        id: 53,
        question: "The strategic decision to use the same brand name for new products in different categories is called:",
        options: ["Line extension according to marketing theory", "Brand extension as defined by experts", "Co-branding as defined by experts", "Mixed branding as defined by experts", "Private labeling as defined by experts"],
        correct: 1,
        explanation: "Correct answer: B. Brand extension uses an existing brand name for a new product in a different category (e.g., Honda cars → Honda lawnmowers)."
    },
    {
        id: 54,
        question: "Which branding strategy involves creating new brand names for new products within the same company?",
        options: ["Line extension in business practice", "Multibranding for strategic purposes", "Brand extension according to marketing theory", "Co-branding within the industry context", "Brand licensing in the current market"],
        correct: 1,
        explanation: "Correct answer: B. Multibranding (or new branding) involves creating new brand names for new products, allowing the company to target different segments."
    },
    {
        id: 55,
        question: "The stage of the product life cycle characterized by high promotional spending to create awareness and low profits due to R&D and launch costs is:",
        options: ["Introduction for strategic purposes", "Growth according to marketing theory", "Maturity for strategic purposes", "Decline as defined by experts", "Saturation (such as in marketing)"],
        correct: 0,
        explanation: "Correct answer: A. The introduction stage involves heavy promotion for awareness and typically results in losses due to high development and launch costs."
    },

    // ==================== LECTURE 7: PRICING (Q56-60) ====================
    {
        id: 56,
        question: "Price is best defined as:",
        options: ["The cost of production plus profit margin for various strategic and operational reasons in modern business environments", "The money or other considerations exchanged for the ownership or use of a product or service (such as in marketing)", "The competitor's price minus discount", "The maximum consumers are willing to pay", "The retailer's cost"],
        correct: 1,
        explanation: "Correct answer: B. Price is the money or other considerations (including other products/services) exchanged for the ownership or use of a product or service."
    },
    {
        id: 57,
        question: "A demand curve typically slopes downward from left to right, indicating that:",
        options: ["As price increases, quantity demanded decreases", "As price increases, quantity demanded increases", "Price has no effect on demand", "Demand is always constant", "Higher prices create higher demand"],
        correct: 0,
        explanation: "Correct answer: A. The law of demand states that as price increases, quantity demanded typically decreases (inverse relationship)."
    },
    {
        id: 58,
        question: "Which pricing strategy involves setting a low initial price to attract a large number of buyers quickly and gain market share?",
        options: ["Price skimming (such as in marketing)", "Penetration pricing (such as in marketing)", "Prestige pricing for strategic purposes", "Odd-even pricing as defined by experts", "Cost-plus pricing according to marketing theory"],
        correct: 1,
        explanation: "Correct answer: B. Penetration pricing sets a low initial price to penetrate the market quickly and attract price-sensitive customers."
    },
    {
        id: 59,
        question: "Standard markup pricing is an example of which pricing approach?",
        options: ["Demand-oriented pricing according to marketing theory", "Cost-oriented pricing based on research", "Competition-oriented pricing in the current market", "Value-based pricing within the industry context according to marketing theory", "Dynamic pricing within the industry context as defined by experts"],
        correct: 1,
        explanation: "Correct answer: B. Standard markup pricing adds a fixed percentage to the cost, making it a cost-oriented pricing approach."
    },
    {
        id: 60,
        question: "In the price equation, the final price equals:",
        options: ["List price plus incentives for various strategic and operational reasons in modern business environments", "List price minus incentives and allowances plus extra fees as defined by experts", "Cost plus fixed markup as defined by experts according to marketing theory", "Competitor's price minus discount based on research as defined by experts", "Production cost only according to marketing theory for strategic purposes"],
        correct: 1,
        explanation: "Correct answer: B. Final Price = List Price - Incentives and Allowances + Extra Fees. This accounts for discounts, allowances, and additional charges."
    },

    // ==================== LECTURE 8: PLACE STRATEGY (Q61-65) ====================
    {
        id: 61,
        question: "A marketing channel of distribution consists of:",
        options: ["Only the manufacturer for various strategic and operational reasons in modern business environments and beyond", "Intermediaries who facilitate the movement of products from producer to consumer as defined by experts", "Only retailers in the current market according to marketing theory for various reasons", "Only wholesalers within the industry context as defined by experts in business practice", "Production facilities only based on research and analysis in modern business environments"],
        correct: 1,
        explanation: "Correct answer: B. A marketing channel consists of individuals and firms involved in the flow of products from producer to final consumer, including intermediaries."
    },
    {
        id: 62,
        question: "Intermediaries are needed in distribution channels primarily because they:",
        options: ["Increase production costs for various strategic and operational reasons in modern business environments and industry standards", "Provide efficiency by performing specialized functions like assorting and transporting for strategic purposes", "Make products more expensive unnecessarily within the industry context for various reasons", "Replace the need for manufacturers according to marketing theory in current market situations", "Eliminate consumer choice based on research in business practice for strategic reasons"],
        correct: 1,
        explanation: "Correct answer: B. Intermediaries provide efficiency by specializing in functions like assorting, storing, sorting, and transporting products."
    },
    {
        id: 63,
        question: "A vertical marketing system (VMS) where one channel member owns all others is called:",
        options: ["Contractual VMS according to marketing theory as defined by experts", "Administered VMS within the industry context", "Corporate VMS in the current market in business practice", "Horizontal marketing system in business practice", "Indirect channel for strategic purposes"],
        correct: 2,
        explanation: "Correct answer: C. Corporate VMS combines successive stages of production and distribution under single ownership."
    },
    {
        id: 64,
        question: "Electronic marketing channels that use the internet to make products available to consumers are also known as:",
        options: ["Traditional channels as defined by experts", "Direct marketing channels (such as in marketing)", "Brick-and-mortar only within the industry context", "Wholesale channels for strategic purposes (such as in marketing)", "Physical distribution in the current market"],
        correct: 1,
        explanation: "Correct answer: B. Electronic/direct marketing channels use the internet to sell directly to consumers without intermediaries."
    },
    {
        id: 65,
        question: "Logistics activities in a marketing channel include:",
        options: ["Only advertising", "Assorting, storing, sorting, and transporting products", "Only pricing decisions", "Only product design", "Only market research"],
        correct: 1,
        explanation: "Correct answer: B. Logistics involves the physical movement and handling of goods, including assorting, storing, sorting, and transporting."
    },

    // ==================== LECTURE 9-10: PROMOTION (Q66-70) ====================
    {
        id: 66,
        question: "Integrated Marketing Communications (IMC) refers to:",
        options: ["Using only one promotional tool within the industry context as defined by experts for strategic purposes", "Coordinating and integrating all promotional tools to deliver a clear, consistent message", "Focusing exclusively on advertising according to marketing theory in modern business environments", "Ignoring public relations based on research and analysis in current market situations", "Separating promotional activities for various reasons within the industry practice"],
        correct: 1,
        explanation: "Correct answer: B. IMC coordinates advertising, personal selling, sales promotion, and public relations to deliver a unified, consistent message."
    },
    {
        id: 67,
        question: "Which promotional tool involves paid, non-personal communication through various media about an organization or product?",
        options: ["Public relations according to marketing theory", "Personal selling based on research", "Advertising based on research", "Sales promotion as defined by experts", "Direct marketing (such as in marketing)"],
        correct: 2,
        explanation: "Correct answer: C. Advertising is paid, non-personal communication through various media to inform, persuade, or remind audiences."
    },
    {
        id: 68,
        question: "The promotional mix component that involves two-way communication between a salesperson and a potential buyer is:",
        options: ["Advertising for strategic purposes", "Sales promotion in business practice", "Public relations within the industry context", "Personal selling as defined by experts", "Direct marketing in the current market"],
        correct: 3,
        explanation: "Correct answer: D. Personal selling involves face-to-face, two-way communication between a salesperson and a prospective customer."
    },
    {
        id: 69,
        question: "Sales promotion activities designed to encourage the trial or purchase of a product include:",
        options: ["Only television commercials", "Coupons, samples, contests, and sweepstakes", "Only press releases", "Only trade shows", "Only product packaging"],
        correct: 1,
        explanation: "Correct answer: B. Sales promotion includes short-term incentives like coupons, samples, contests, and sweepstakes to stimulate immediate sales."
    },
    {
        id: 70,
        question: "Public relations activities such as news releases and press conferences are designed to:",
        options: ["Sell products directly for various strategic and operational reasons in modern business environments", "Build good relations with various publics and generate favorable publicity in the current market", "Replace advertising entirely (such as in marketing) within the industry context", "Only entertain customers", "Only handle complaints"],
        correct: 1,
        explanation: "Correct answer: B. Public relations builds good relations with the company's various publics and generates favorable publicity, not direct selling."
    }
];

// Make it available globally
if (typeof window !== 'undefined') {
    window.practiceQuizQuestions = practiceQuizQuestions;
}
