// English version of marketing quiz questions for exam preparation - 120 Questions Total
// 15 questions per lecture topic (8 lectures)
const englishQuizQuestions = [
    // ==================== LECTURE 2: MARKETING STRATEGY (Questions 1-15) ====================
    {
        question: "What is an organization's long-term action plan that achieves goals while providing unique customer experiences?",
        options: ["Tactics", "Strategy", "Operations", "Plan", "Goals"],
        correct: 1,
        explanation: "Strategy is an organization's long-term action plan, not just short-term tactics, but the overall direction guiding long-term development."
    },
    {
        question: "In the strategic marketing process, which stage involves setting the organization's mission, vision, and goals?",
        options: ["Implementation stage", "Evaluation stage", "Planning stage", "Control stage", "Monitoring stage"],
        correct: 2,
        explanation: "The planning stage is the first step in the strategic marketing process, involving setting the organization's long-term direction and goals."
    },
    {
        question: "A company states its purpose is 'to create sustainable value for all stakeholders while minimizing environmental impact.' This statement best represents which strategic element?",
        options: ["Marketing mix", "Mission statement", "Product positioning", "Sales forecast", "Budget allocation"],
        correct: 1,
        explanation: "A mission statement defines the organization's fundamental purpose and scope of operations, often incorporating values and stakeholder commitments."
    },
    {
        question: "Which of the following is NOT a characteristic of strategic marketing?",
        options: ["Long-term orientation", "Customer-centric approach", "Focus on price competition only", "Overall coordination", "Value creation focus"],
        correct: 2,
        explanation: "Strategic marketing emphasizes long-term orientation, customer-centricity, overall coordination, and value creation. Price competition is just one tactical tool, not the strategic focus."
    },
    {
        question: "What characteristics should a company's core competitive advantage possess to be strategically valuable?",
        options: ["Easy for competitors to imitate", "Short-term effectiveness", "Sustainable over time", "Low cost only", "High technology focus only"],
        correct: 2,
        explanation: "Core competitive advantage should be sustainable, able to bring long-term competitive advantages to the company, rather than being easily imitated or only short-term effective."
    },
    {
        question: "A luxury fashion brand decides to maintain premium pricing despite economic downturns to preserve brand image. This decision reflects which strategic concept?",
        options: ["Cost leadership", "Market penetration", "Strategic consistency", "Price elasticity", "Inventory management"],
        correct: 2,
        explanation: "Strategic consistency involves maintaining core strategic direction even during challenging conditions, rather than making reactive short-term changes that could damage long-term positioning."
    },
    {
        question: "Which factor is most critical in the strategy implementation process?",
        options: ["Sufficient funding only", "Employee cooperation alone", "Market response timing", "Advanced technology adoption", "Comprehensive management support"],
        correct: 4,
        explanation: "Management support is the most critical factor in strategy implementation, requiring comprehensive top-down support and resource allocation."
    },
    {
        question: "What principles should companies follow when setting effective marketing objectives?",
        options: ["Vagueness and flexibility", "Specificity and measurability", "Idealism without constraints", "Complexity and detail", "Singularity of focus"],
        correct: 1,
        explanation: "Marketing objectives should be specific, measurable, achievable, relevant, and time-bound, following the SMART principle."
    },
    {
        question: "What is the main difference between strategic marketing and traditional marketing approaches?",
        options: ["Lower prices offered", "Better product quality", "Long-term relationship perspective", "More distribution channels", "Stronger promotional intensity"],
        correct: 2,
        explanation: "The main difference between strategic marketing and traditional marketing lies in the long-term perspective, focusing on building long-term customer relationships and continuous value creation."
    },
    {
        question: "When conducting strategic market positioning, what is the most important factor for a company to consider?",
        options: ["Internal cost structure", "Target customer needs and preferences", "Number of existing competitors", "Current technical capabilities", "Employee skill levels"],
        correct: 1,
        explanation: "In market positioning, target customer needs are the most important consideration. You must deeply understand and meet customers' real needs to create meaningful differentiation."
    },
    {
        question: "What is typically the final step in the strategic marketing process cycle?",
        options: ["Initial planning", "Strategy implementation", "Control mechanisms", "Performance evaluation", "Immediate adjustment"],
        correct: 3,
        explanation: "Evaluation is typically the final step in the strategic marketing process, assessing the effectiveness of strategies and providing feedback for continuous improvement."
    },
    {
        question: "A company analyzes its internal resources and capabilities to identify what it does better than competitors. This analysis focuses on identifying:",
        options: ["Market opportunities", "Competitive threats", "Core competencies", "External partnerships", "Financial liabilities"],
        correct: 2,
        explanation: "Core competencies are the unique strengths and resources that give a company a competitive advantage over its rivals."
    },
    {
        question: "Which strategic approach involves creating value by establishing meaningful differences from competitors that customers perceive as valuable?",
        options: ["Cost minimization", "Differentiation strategy", "Market consolidation", "Vertical integration", "Price matching"],
        correct: 1,
        explanation: "Differentiation strategy focuses on creating unique value propositions that distinguish the company from competitors in ways that matter to customers."
    },
    {
        question: "In strategic planning, what does 'vision' primarily describe?",
        options: ["Detailed quarterly targets", "The desired future state of the organization", "Current market share data", "Employee training schedules", "Product specifications"],
        correct: 1,
        explanation: "A vision statement describes the desired future state of the organization - what it aspires to become or achieve in the long term."
    },
    {
        question: "A company that aims to become the lowest-cost producer in its industry while maintaining acceptable quality is pursuing which strategy?",
        options: ["Differentiation strategy", "Cost leadership strategy", "Focus strategy", "Diversification strategy", "Retrenchment strategy"],
        correct: 1,
        explanation: "Cost leadership strategy aims to achieve competitive advantage through being the lowest-cost producer in the industry."
    },

    // ==================== LECTURE 3: ENVIRONMENTAL SCANNING (Questions 16-30) ====================
    {
        question: "When developing marketing strategy, which of the following is NOT an external environmental factor that needs to be analyzed?",
        options: ["Economic environment conditions", "Technological developments", "Employee satisfaction levels", "Political-legal regulations", "Socio-cultural trends"],
        correct: 2,
        explanation: "Employee satisfaction is an internal environmental factor. External environment analysis mainly focuses on economic, technological, political-legal, and socio-cultural factors."
    },
    {
        question: "What does the 'S' in SWOT analysis represent?",
        options: ["Strengths", "Weaknesses", "Opportunities", "Threats", "Strategies"],
        correct: 0,
        explanation: "In SWOT analysis, S represents Strengths, which refer to the internal favorable conditions and capabilities of an organization."
    },
    {
        question: "In PEST analysis, which factor would include examining inflation rates and unemployment levels?",
        options: ["Political factors", "Economic factors", "Social factors", "Technological factors", "Legal factors"],
        correct: 1,
        explanation: "Economic factors in PEST analysis include macroeconomic conditions such as inflation rates, unemployment levels, economic growth, and interest rates."
    },
    {
        question: "What attitude should companies adopt when facing significant market opportunities?",
        options: ["Conservative waiting approach", "Active seizing and development", "Ignoring until proven", "Passive response only", "Avoidance strategy"],
        correct: 1,
        explanation: "When facing market opportunities, companies should actively seize them, proactively developing and utilizing opportunities to create value and competitive advantage."
    },
    {
        question: "Which component of SWOT analysis focuses on external positive conditions in the market environment?",
        options: ["Strengths", "Weaknesses", "Opportunities", "Threats", "Strategies"],
        correct: 2,
        explanation: "Opportunities in SWOT analysis represent external factors in the market environment that the company could exploit to its advantage."
    },
    {
        question: "A new government regulation requires all products in an industry to meet higher safety standards. This represents which type of environmental factor?",
        options: ["Economic opportunity", "Political-legal force", "Social trend", "Technological development", "Competitive rivalry"],
        correct: 1,
        explanation: "Government regulations and legal requirements are political-legal environmental factors that can significantly impact industry operations and marketing strategies."
    },
    {
        question: "In environmental scanning, what are 'threats' defined as?",
        options: ["Internal organizational weaknesses", "External challenges that could harm the company", "Competitor strengths", "Market opportunities missed", "Employee performance issues"],
        correct: 1,
        explanation: "Threats in environmental analysis are external factors or challenges in the market environment that could potentially harm the organization's performance or position."
    },
    {
        question: "Which of the following would be considered a demographic factor in environmental analysis?",
        options: ["GDP growth rate", "Population age distribution", "Internet penetration rate", "Trade policy changes", "Raw material costs"],
        correct: 1,
        explanation: "Demographic factors include population characteristics such as age distribution, gender composition, income levels, education, and geographic distribution."
    },
    {
        question: "A company monitors social media trends to understand changing consumer preferences. This activity is an example of:",
        options: ["Internal audit", "Environmental scanning", "Financial reporting", "Production planning", "Quality control"],
        correct: 1,
        explanation: "Environmental scanning involves systematically monitoring and analyzing external environmental factors that could impact the organization, including social trends and consumer preferences."
    },
    {
        question: "In the PEST framework, which category would include analyzing consumer lifestyle changes and cultural shifts?",
        options: ["Political", "Economic", "Social", "Technological", "Legal"],
        correct: 2,
        explanation: "Social factors in PEST analysis include demographic trends, cultural norms, lifestyle changes, education levels, and consumer attitudes and values."
    },
    {
        question: "What is the primary purpose of conducting competitive analysis in environmental scanning?",
        options: ["To copy competitor strategies", "To understand competitive dynamics and positioning", "To eliminate all competition", "To set prices lower than competitors", "To reduce marketing spending"],
        correct: 1,
        explanation: "Competitive analysis helps understand the competitive landscape, identify competitor strengths and weaknesses, and determine appropriate strategic positioning."
    },
    {
        question: "Which technological trend would most likely create both opportunities and threats for traditional retail businesses?",
        options: ["Advances in manufacturing automation", "Growth of e-commerce and mobile shopping", "Improvements in packaging materials", "Development of shipping logistics", "Standardization of product barcodes"],
        correct: 1,
        explanation: "E-commerce growth creates opportunities for market expansion but threatens traditional brick-and-mortar retail, requiring businesses to adapt their strategies."
    },
    {
        question: "An aging population trend in a market represents which type of environmental factor?",
        options: ["Political-legal", "Economic", "Socio-cultural/demographic", "Technological", "Competitive"],
        correct: 2,
        explanation: "Population aging is a demographic and socio-cultural factor that affects market demand, consumer needs, and requires companies to adapt their marketing approaches."
    },
    {
        question: "What is the primary output of a comprehensive environmental scanning process?",
        options: ["Detailed financial statements", "Identification of opportunities and threats", "Employee performance reviews", "Product design specifications", "Production schedules"],
        correct: 1,
        explanation: "Environmental scanning primarily identifies external opportunities and threats that help inform strategic decision-making and planning."
    },
    {
        question: "Which of the following is an internal environmental factor that should be analyzed alongside external factors?",
        options: ["Government regulations", "Interest rate trends", "Organizational culture", "Social media trends", "Competitor pricing"],
        correct: 2,
        explanation: "Organizational culture is an internal factor. Environmental scanning includes both external analysis (PEST) and internal analysis (organizational resources, culture, capabilities)."
    },

    // ==================== LECTURE 4: CONSUMER BEHAVIOR (Questions 31-45) ====================
    {
        question: "Which factor influencing consumer behavior includes a person's age, occupation, and economic situation?",
        options: ["Psychological factors", "Personal factors", "Social factors", "Cultural factors", "Situational factors"],
        correct: 1,
        explanation: "Personal factors include individual characteristics such as age, life-cycle stage, occupation, economic circumstances, lifestyle, and personality."
    },
    {
        question: "In the consumer decision-making process, what stage follows 'problem recognition'?",
        options: ["Purchase decision", "Post-purchase behavior", "Information search", "Alternative evaluation", "Need confirmation"],
        correct: 2,
        explanation: "After recognizing a need or problem, consumers typically engage in information search to learn about potential solutions and alternatives."
    },
    {
        question: "What psychological concept describes the specific combination of knowledge, feelings, and behavioral tendencies toward an object?",
        options: ["Perception", "Attitude", "Motivation", "Learning", "Memory"],
        correct: 1,
        explanation: "Attitude is a learned predisposition to respond in a consistently favorable or unfavorable way toward a particular object, including cognitive, affective, and behavioral components."
    },
    {
        question: "A consumer buys a particular brand because their family has always used it. This is an example of which decision-making characteristic?",
        options: ["Extensive problem solving", "Limited problem solving", "Habitual buying behavior", "Variety-seeking behavior", "Complex decision making"],
        correct: 2,
        explanation: "Habitual buying behavior occurs when consumers make low-involvement purchases with little significant brand difference, often driven by familiarity and habit."
    },
    {
        question: "Which theory suggests that consumers are motivated to purchase products that reflect their actual or desired self-concept?",
        options: ["Maslow's hierarchy", "Self-concept theory", "Cognitive dissonance theory", "Social learning theory", "Operant conditioning"],
        correct: 1,
        explanation: "Self-concept theory posits that consumers purchase products and brands that match or express their self-image, whether actual or ideal."
    },
    {
        question: "Reference groups that directly influence consumer behavior include all EXCEPT:",
        options: ["Family members", "Close friends", "Aspirational celebrities", "Work colleagues", "Sports team members"],
        correct: 2,
        explanation: "While aspirational groups may influence desires, indirect reference groups like celebrities don't typically have the same direct influence as membership groups such as family, friends, and colleagues."
    },
    {
        question: "What is the process by which people select, organize, and interpret information to form a meaningful picture of the world?",
        options: ["Learning", "Perception", "Attitude formation", "Motivation", "Socialization"],
        correct: 1,
        explanation: "Perception is the process by which individuals select, organize, and interpret sensory information to create a meaningful picture of their environment."
    },
    {
        question: "In Maslow's hierarchy of needs, which level includes the need for status, recognition, and respect from others?",
        options: ["Physiological needs", "Safety needs", "Social needs", "Esteem needs", "Self-actualization needs"],
        correct: 3,
        explanation: "Esteem needs in Maslow's hierarchy include both self-esteem (confidence, achievement) and the desire for recognition and respect from others (status, reputation)."
    },
    {
        question: "A consumer experiences discomfort after purchasing an expensive product, wondering if they made the right choice. This describes:",
        options: ["Buyer satisfaction", "Cognitive dissonance", "Brand loyalty", "Purchase confirmation", "Decision satisfaction"],
        correct: 1,
        explanation: "Cognitive dissonance is the psychological discomfort or anxiety that occurs after a purchase when consumers question whether they made the right decision."
    },
    {
        question: "Which cultural factor represents a set of basic values, perceptions, wants, and behaviors learned by a member of society?",
        options: ["Subculture", "Social class", "Culture", "Reference group", "Family tradition"],
        correct: 2,
        explanation: "Culture is the set of basic values, perceptions, wants, and behaviors learned by a member of society from family and other important institutions."
    },
    {
        question: "The consumer decision-making stage where consumers use information to evaluate alternative brands in the choice set is called:",
        options: ["Need recognition", "Information search", "Alternative evaluation", "Purchase decision", "Post-purchase evaluation"],
        correct: 2,
        explanation: "Alternative evaluation is the stage where consumers compare different brands or products based on specific attributes and criteria to determine the best option."
    },
    {
        question: "A consumer's consistent preference for purchasing environmentally-friendly products regardless of price reflects which concept?",
        options: ["Price sensitivity", "Values-based purchasing", "Impulse buying", "Habitual purchasing", "Brand switching"],
        correct: 1,
        explanation: "Values-based purchasing occurs when consumers make decisions based on personal beliefs and values, such as environmental consciousness, rather than just price or convenience."
    },
    {
        question: "Which psychological factor influences how consumers acquire and modify their knowledge and experience?",
        options: ["Perception", "Learning", "Attitude", "Motivation", "Personality"],
        correct: 1,
        explanation: "Learning involves changes in an individual's behavior arising from experience and plays a crucial role in how consumers acquire knowledge about products and brands."
    },
    {
        question: "The buying decision process where consumers conduct extensive research and carefully evaluate alternatives before purchasing is called:",
        options: ["Habitual decision making", "Limited decision making", "Extended problem solving", "Routine response behavior", "Impulse purchasing"],
        correct: 2,
        explanation: "Extended problem solving occurs for high-involvement purchases where consumers invest significant time and effort in information gathering and evaluation."
    },
    {
        question: "Social class influences consumer behavior primarily through its impact on:",
        options: ["Genetic preferences", "Values, preferences, and buying behaviors", "Physical abilities", "Legal rights", "Geographic location"],
        correct: 1,
        explanation: "Social class affects consumer behavior through shared values, attitudes, interests, and buying behaviors that tend to be similar within social classes but differ across them."
    },

    // ==================== LECTURE 5: SEGMENTATION, TARGETING, POSITIONING (Questions 46-60) ====================
    {
        question: "Which of the following best describes market segmentation?",
        options: ["Targeting all customers equally", "Dividing market into distinct groups with different needs", "Focusing on premium customers only", "Ignoring customer differences", "Random marketing approach"],
        correct: 1,
        explanation: "Market segmentation involves dividing the market into distinct groups of buyers who have different needs, characteristics, or behaviors and might require separate marketing strategies."
    },
    {
        question: "In the STP process, what does the 'T' stand for?",
        options: ["Testing", "Targeting", "Tracking", "Training", "Transitioning"],
        correct: 1,
        explanation: "STP stands for Segmentation, Targeting, and Positioning. Targeting involves evaluating and selecting the most attractive market segments to serve."
    },
    {
        question: "A company decides to focus its marketing efforts on young professionals aged 25-35 with high disposable income. This is an example of:",
        options: ["Mass marketing", "Market targeting", "Product differentiation", "Price skimming", "Market aggregation"],
        correct: 1,
        explanation: "Market targeting involves selecting specific segments to serve based on their attractiveness and the company's ability to serve them effectively."
    },
    {
        question: "Positioning a product as the 'most reliable' in the market is an example of which positioning strategy?",
        options: ["Benefit positioning", "User positioning", "Competitor positioning", "Price positioning", "Quality/price positioning"],
        correct: 0,
        explanation: "Benefit positioning establishes the product's position based on the specific benefits or attributes it offers, such as reliability, durability, or convenience."
    },
    {
        question: "Which segmentation variable divides consumers based on lifestyle, personality, and values?",
        options: ["Demographic segmentation", "Geographic segmentation", "Psychographic segmentation", "Behavioral segmentation", "Occasion segmentation"],
        correct: 2,
        explanation: "Psychographic segmentation divides buyers into groups based on social class, lifestyle, or personality characteristics."
    },
    {
        question: "A positioning statement should include all of the following EXCEPT:",
        options: ["Target segment", "Point of difference", "Frame of reference", "Competitor weaknesses", "Reason to believe"],
        correct: 3,
        explanation: "A positioning statement includes the target segment, frame of reference (category), point of difference, and reason to believe - but does not explicitly mention competitor weaknesses."
    },
    {
        question: "Which targeting strategy involves going after a large share of one or a few submarkets?",
        options: ["Undifferentiated marketing", "Differentiated marketing", "Concentrated marketing", "Mass customization", "Micro marketing"],
        correct: 2,
        explanation: "Concentrated (or niche) marketing involves focusing on one or a few market segments rather than pursuing the whole market."
    },
    {
        question: "Segmenting markets based on consumer knowledge, attitudes, uses, or responses to a product is called:",
        options: ["Demographic segmentation", "Psychographic segmentation", "Behavioral segmentation", "Geographic segmentation", "Benefit segmentation"],
        correct: 2,
        explanation: "Behavioral segmentation divides buyers into segments based on their knowledge of, attitude toward, use of, or response to a product."
    },
    {
        question: "A company positions its brand as 'the choice of health-conscious consumers.' This positioning strategy focuses on:",
        options: ["Product attribute", "User type", "Usage occasion", "Competitor", "Product class"],
        correct: 1,
        explanation: "User positioning associates the product with a specific type of user or consumer group, in this case health-conscious consumers."
    },
    {
        question: "Which criterion for effective segmentation requires that segments be large and profitable enough to serve?",
        options: ["Measurable", "Accessible", "Substantial", "Differentiable", "Actionable"],
        correct: 2,
        explanation: "Substantiality means the segments should be sufficiently large and profitable to justify developing and maintaining a separate marketing mix for each."
    },
    {
        question: "Differentiated marketing is characterized by:",
        options: ["One offer for entire market", "Multiple offers for different segments", "One offer for niche segment", "Custom offer for each customer", "Random targeting approach"],
        correct: 1,
        explanation: "Differentiated marketing involves targeting several market segments and designing separate offers for each, aiming to achieve higher sales and stronger position in each segment."
    },
    {
        question: "Positioning a product against a specific competitor is known as:",
        options: ["Benefit positioning", "User positioning", "Competitor positioning", "Price positioning", "Attribute positioning"],
        correct: 2,
        explanation: "Competitor positioning involves positioning the product directly against a competitor, either claiming superiority or using the competitor as a reference point."
    },
    {
        question: "Geographic segmentation divides the market based on:",
        options: ["Consumer lifestyles", "Consumer age groups", "Regional boundaries and locations", "Consumer usage rates", "Consumer brand loyalty"],
        correct: 2,
        explanation: "Geographic segmentation divides the market into different geographical units such as nations, regions, states, counties, cities, or even neighborhoods."
    },
    {
        question: "The positioning concept that emphasizes a unique combination of product attributes is called:",
        options: ["Category positioning", "Value positioning", "Multi-attribute positioning", "User positioning", "Usage positioning"],
        correct: 2,
        explanation: "Multi-attribute positioning establishes the product's position based on a combination of two or more attributes or benefits."
    },
    {
        question: "Which segmentation approach divides business markets by industry, company size, or location?",
        options: ["Consumer segmentation", "Demographic segmentation", "B2B demographic segmentation", "Psychographic segmentation", "Behavioral segmentation"],
        correct: 2,
        explanation: "B2B demographic segmentation uses variables such as industry classification, company size (employees or revenue), and geographic location to segment organizational markets."
    },

    // ==================== LECTURE 6: PRODUCT STRATEGY (Questions 61-75) ====================
    {
        question: "Which product level includes the basic benefit or service that the customer is really buying?",
        options: ["Core benefit", "Actual product", "Augmented product", "Expected product", "Potential product"],
        correct: 0,
        explanation: "The core benefit level answers the question: What is the buyer really buying? It represents the fundamental service or benefit the customer seeks."
    },
    {
        question: "A brand name, product features, and packaging quality belong to which product level?",
        options: ["Core benefit", "Basic product", "Expected product", "Augmented product", "Potential product"],
        correct: 1,
        explanation: "The actual (basic) product level includes the tangible product features such as quality level, features, design, brand name, and packaging."
    },
    {
        question: "During which stage of the product life cycle do sales peak and profits begin to decline due to increased competition?",
        options: ["Introduction", "Growth", "Maturity", "Decline", "Development"],
        correct: 2,
        explanation: "In the maturity stage, sales peak and level off, while profits decline due to intense competition and the need for defensive marketing expenditures."
    },
    {
        question: "Adding new product lines to an existing product mix is an example of:",
        options: ["Line stretching", "Line filling", "Product mix expansion", "Line modernization", "Line pruning"],
        correct: 2,
        explanation: "Product mix expansion involves adding new product lines to the company's current product offerings."
    },
    {
        question: "Which brand strategy involves using different brand names for different product categories?",
        options: ["Individual brand name", "Family brand name", "Co-branding", "Private branding", "Licensed branding"],
        correct: 0,
        explanation: "Individual (or separate) brand names involve using a unique brand name for each product, often used when products vary greatly in quality or type."
    },
    {
        question: "The stage of new product development where a product concept is tested with target consumers is called:",
        options: ["Idea screening", "Concept testing", "Marketing strategy development", "Business analysis", "Product development"],
        correct: 1,
        explanation: "Concept testing involves presenting the product concept to target consumers, symbolically or physically, to gauge their reactions and feedback."
    },
    {
        question: "A product line consists of:",
        options: ["All products a company makes", "A group of related products", "Only tangible goods", "Only service offerings", "Products from different companies"],
        correct: 1,
        explanation: "A product line is a group of products that are closely related because they function in a similar manner, are sold to the same customer groups, or are marketed through the same outlets."
    },
    {
        question: "Extending a product line upward to add higher-quality, higher-price items is called:",
        options: ["Down-market stretch", "Up-market stretch", "Two-way stretch", "Line filling", "Line modernizing"],
        correct: 1,
        explanation: "Up-market stretch involves extending the product line upward to add higher-quality, higher-price items to appeal to more upscale markets."
    },
    {
        question: "In the new product development process, what follows business analysis?",
        options: ["Idea generation", "Concept testing", "Product development", "Test marketing", "Commercialization"],
        correct: 2,
        explanation: "After business analysis reviews the proposal for sales, costs, and profits, the next step is product development where the concept becomes an actual physical product."
    },
    {
        question: "A product's brand equity refers to:",
        options: ["The manufacturing cost", "The financial value of the brand", "The distribution network", "The production capacity", "The inventory value"],
        correct: 1,
        explanation: "Brand equity is the differential effect that knowing the brand name has on customer response to the product and its marketing, representing the brand's financial and strategic value."
    },
    {
        question: "Which product life cycle stage is characterized by rapid sales growth and increasing profits?",
        options: ["Introduction", "Growth", "Maturity", "Decline", "Development"],
        correct: 1,
        explanation: "The growth stage is marked by rapid market acceptance, increasing sales, growing profits, and the emergence of competitors."
    },
    {
        question: "Co-branding occurs when:",
        options: ["A company uses multiple brand names", "Two established brand names are used on the same product", "A company licenses its brand to another", "A retailer creates its own brand", "A brand enters a new market"],
        correct: 1,
        explanation: "Co-branding involves the practice of using the established brand names of two different companies on the same product to leverage the strengths of both brands."
    },
    {
        question: "Line filling involves:",
        options: ["Adding items within the present range of the line", "Stretching the line upward or downward", "Adding new product lines", "Removing unprofitable items", "Modernizing existing items"],
        correct: 0,
        explanation: "Line filling involves adding more items within the present range of the product line to reach for extra profits, satisfy dealers, or use excess capacity."
    },
    {
        question: "The process of managing groups of brands in coordinated ways to maximize their collective performance is called:",
        options: ["Brand equity management", "Brand portfolio management", "Product mix management", "Line management", "Brand hierarchy management"],
        correct: 1,
        explanation: "Brand portfolio management involves managing multiple brands together as a portfolio, coordinating their positioning and marketing for optimal collective performance."
    },
    {
        question: "During the introduction stage of the product life cycle, which pricing strategy is commonly used?",
        options: ["Penetration pricing or skimming pricing", "Value pricing only", "Psychological pricing", "Bundle pricing", "Everyday low pricing"],
        correct: 0,
        explanation: "In the introduction stage, companies typically use either penetration pricing (low price to gain market share) or price skimming (high price to maximize profits from innovators)."
    },

    // ==================== LECTURE 7: PRICING STRATEGY (Questions 76-90) ====================
    {
        question: "Which cost remains constant regardless of production or sales volume?",
        options: ["Variable cost", "Marginal cost", "Fixed cost", "Total cost", "Average cost"],
        correct: 2,
        explanation: "Fixed costs are costs that do not vary with production or sales level, such as rent, salaries, and insurance, within a certain range of output."
    },
    {
        question: "Setting price based on buyers' perceptions of value rather than the seller's cost is called:",
        options: ["Cost-plus pricing", "Value-based pricing", "Competition-based pricing", "Break-even pricing", "Target return pricing"],
        correct: 1,
        explanation: "Value-based pricing uses buyers' perceptions of value rather than the seller's cost as the key to pricing, charging what customers are willing to pay."
    },
    {
        question: "A pricing strategy that charges a high initial price to 'skim' maximum revenue from segments willing to pay is called:",
        options: ["Penetration pricing", "Price skimming", "Psychological pricing", "Promotional pricing", "Dynamic pricing"],
        correct: 1,
        explanation: "Price skimming involves setting a high initial price for a new product to maximize revenues from segments willing to pay the high price, then lowering it over time."
    },
    {
        question: "Which pricing strategy sets a low initial price to penetrate the market quickly and attract a large number of buyers?",
        options: ["Skimming pricing", "Penetration pricing", "Value pricing", "Cost-plus pricing", "Prestige pricing"],
        correct: 1,
        explanation: "Penetration pricing involves setting a low initial price to penetrate the market quickly, attract large numbers of buyers, and win market share."
    },
    {
        question: "Charging different prices to different customers for the same product based on individual negotiations is called:",
        options: ["Price discrimination", "Dynamic pricing", "Zone pricing", "FOB pricing", "Uniform delivered pricing"],
        correct: 1,
        explanation: "Dynamic pricing involves adjusting prices continually to meet the characteristics and needs of individual customers and situations."
    },
    {
        question: "The pricing objective focused on maximizing market share is known as:",
        options: ["Profit maximization", "Sales maximization", "Status quo pricing", "Quality leadership", "Survival pricing"],
        correct: 1,
        explanation: "Sales maximization (or market share maximization) focuses on capturing the largest possible market share, sometimes sacrificing short-term profits."
    },
    {
        question: "Price elasticity of demand measures:",
        options: ["How supply changes with price", "How demand changes with income", "How quantity demanded changes with price", "How price changes with competition", "How cost changes with volume"],
        correct: 2,
        explanation: "Price elasticity of demand measures how responsive the quantity demanded is to a change in price - whether demand is elastic (responsive) or inelastic (not responsive)."
    },
    {
        question: "Adding a standard markup to the cost of the product is called:",
        options: ["Value-based pricing", "Cost-plus pricing", "Break-even pricing", "Target return pricing", "Psychological pricing"],
        correct: 1,
        explanation: "Cost-plus pricing (or markup pricing) involves adding a standard markup to the product's cost without considering demand or competition."
    },
    {
        question: "Which pricing strategy uses price to signal high quality or luxury status?",
        options: ["Economy pricing", "Penetration pricing", "Prestige pricing", "Promotional pricing", "Seasonal pricing"],
        correct: 2,
        explanation: "Prestige pricing involves setting a high price to suggest high quality, exclusivity, or luxury status to appeal to status-conscious consumers."
    },
    {
        question: "A break-even analysis determines the price at which:",
        options: ["Profits are maximized", "Revenue equals total costs", "Market share is highest", "Demand is highest", "Competition is lowest"],
        correct: 1,
        explanation: "Break-even analysis determines the price at which total revenue equals total costs, resulting in zero profit (the break-even point)."
    },
    {
        question: "When demand is inelastic, a price increase will result in:",
        options: ["Lower total revenue", "Higher total revenue", "Same total revenue", "Zero revenue", "Negative revenue"],
        correct: 1,
        explanation: "With inelastic demand, the percentage change in quantity demanded is less than the percentage change in price, so a price increase leads to higher total revenue."
    },
    {
        question: "Captive product pricing involves:",
        options: ["Pricing products to be sold together in a bundle", "Pricing main products low and required supplies high", "Matching competitor prices exactly", "Setting prices based on production capacity", "Pricing based on customer income levels"],
        correct: 1,
        explanation: "Captive product pricing involves setting a low price for the main product (like a printer) and high prices for required supplies (like ink cartridges)."
    },
    {
        question: "Price lining is a strategy where:",
        options: ["Prices are set along a production line", "Different versions of a product are priced at different points", "Prices follow a seasonal pattern", "Prices are determined by supply line costs", "Prices are set in a straight line graph"],
        correct: 1,
        explanation: "Price lining involves offering a product line with several items at specific price points, giving customers options at different quality/price levels."
    },
    {
        question: "Predatory pricing refers to:",
        options: ["Pricing below cost to drive out competitors", "Pricing based on predator behavior", "Pricing above market rates", "Pricing based on customer predictions", "Pricing for environmental protection"],
        correct: 0,
        explanation: "Predatory pricing involves setting prices very low, often below cost, with the intent of driving competitors out of business."
    },
    {
        question: "Target costing works by:",
        options: ["Starting with the selling price and working backward to achieve target costs", "Adding a fixed markup to production costs", "Setting prices to match competitors", "Pricing based on historical costs", "Using the highest possible cost basis"],
        correct: 0,
        explanation: "Target costing starts with the price consumers are willing to pay and works backward to determine the maximum allowable cost to achieve desired profit margins."
    },

    // ==================== LECTURE 8: PLACE/DISTRIBUTION (Questions 91-105) ====================
    {
        question: "Which distribution channel involves no intermediaries between producer and consumer?",
        options: ["Indirect channel", "Direct channel", "Selective distribution", "Intensive distribution", "Exclusive distribution"],
        correct: 1,
        explanation: "A direct distribution channel has no intermediary levels - the company sells directly to consumers through its own sales force, website, or stores."
    },
    {
        question: "Intensive distribution is a strategy where:",
        options: ["Only one retailer carries the product", "The product is stocked in as many outlets as possible", "Selected retailers carry the product", "Products are sold only online", "Products are sold by manufacturer only"],
        correct: 1,
        explanation: "Intensive distribution involves stocking the product in as many outlets as possible, typically used for convenience goods like soft drinks and candy."
    },
    {
        question: "An intermediary that buys products, takes title to them, and resells to others is called a:",
        options: ["Agent", "Broker", "Merchant", "Distributor", "Retailer"],
        correct: 2,
        explanation: "A merchant (or merchant wholesaler/retailer) is an intermediary who takes title to goods and resells them, unlike agents or brokers who don't take title."
    },
    {
        question: "Exclusive distribution is best suited for which type of products?",
        options: ["Convenience goods", "Shopping goods", "Luxury goods and specialty items", "Raw materials", "Commodities"],
        correct: 2,
        explanation: "Exclusive distribution severely limits the number of intermediaries, typically used for luxury goods and specialty products where service and image are important."
    },
    {
        question: "A marketing channel consists of:",
        options: ["Only the manufacturing process", "Interdependent organizations involved in making products available", "Only retail stores", "Only wholesalers", "Only online platforms"],
        correct: 1,
        explanation: "A marketing channel is a set of interdependent organizations that help make a product or service available for use or consumption by the consumer or business user."
    },
    {
        question: "Selective distribution involves:",
        options: ["Selling through all available outlets", "Using only a few selected intermediaries", "Selling directly to consumers only", "Using a single intermediary", "Random outlet selection"],
        correct: 1,
        explanation: "Selective distribution involves using more than one but fewer than all intermediaries who are willing to carry the company's products."
    },
    {
        question: "Which channel function involves physically moving products from producers to consumers?",
        options: ["Negotiation", "Risk taking", "Physical distribution", "Financing", "Promotion"],
        correct: 2,
        explanation: "Physical distribution involves the activities of transporting and storing goods to make them available to customers at the right time and place."
    },
    {
        question: "A distribution system in which producers, wholesalers, and retailers act as a unified system is called:",
        options: ["Conventional distribution channel", "Vertical marketing system", "Horizontal marketing system", "Multichannel distribution", "Direct marketing system"],
        correct: 1,
        explanation: "A vertical marketing system (VMS) consists of producers, wholesalers, and retailers acting as a unified system, with one channel member owning the others or having contracts/power."
    },
    {
        question: "Disintermediation refers to:",
        options: ["Adding more intermediaries", "Removing intermediaries from the distribution channel", "Creating new types of intermediaries", "Merging intermediaries together", "Expanding internationally"],
        correct: 1,
        explanation: "Disintermediation involves cutting out intermediaries and selling directly to customers, often enabled by technology and e-commerce."
    },
    {
        question: "Channel conflict that occurs between different levels of the same channel is called:",
        options: ["Horizontal conflict", "Vertical conflict", "Multichannel conflict", "Intermarket conflict", "Competitive conflict"],
        correct: 1,
        explanation: "Vertical conflict occurs between different levels of the same channel, such as conflict between manufacturers and retailers or between wholesalers and retailers."
    },
    {
        question: "Which logistics activity involves deciding where to store inventory and in what quantities?",
        options: ["Transportation", "Warehousing", "Inventory management", "Order processing", "Materials handling"],
        correct: 2,
        explanation: "Inventory management involves decisions about how much inventory to hold, where to store it, and when to replenish stock."
    },
    {
        question: "A horizontal marketing system is formed when:",
        options: ["Different levels of the channel cooperate", "Two or more companies at the same level join together", "A company sells through multiple channels", "A company eliminates all intermediaries", "Retailers form buying cooperatives"],
        correct: 1,
        explanation: "A horizontal marketing system involves two or more companies at one level joining together to follow a new marketing opportunity, such as joint ventures between competitors."
    },
    {
        question: "The total logistics concept suggests that:",
        options: ["Transportation is the only important activity", "All logistics activities should be integrated and coordinated", "Inventory should be minimized at all costs", "Warehousing is unnecessary", "Suppliers should handle all logistics"],
        correct: 1,
        explanation: "The total logistics concept emphasizes that all transportation, storage, inventory, and handling activities should be coordinated as an integrated system for efficiency."
    },
    {
        question: "Which distribution strategy is most appropriate for shopping goods like appliances and clothing?",
        options: ["Intensive distribution", "Exclusive distribution", "Selective distribution", "Direct distribution only", "No distribution"],
        correct: 2,
        explanation: "Selective distribution is most appropriate for shopping goods where consumers compare alternatives and where service and brand image matter."
    },
    {
        question: "Just-in-time (JIT) inventory systems are designed to:",
        options: ["Maximize inventory levels", "Minimize inventory holding by receiving goods only as needed", "Eliminate suppliers entirely", "Increase warehousing costs", "Slow down production"],
        correct: 1,
        explanation: "JIT inventory systems minimize inventory carrying costs by receiving goods only when they are needed in the production process or for sale."
    },

    // ==================== LECTURE 9: PROMOTION (Questions 106-120) ====================
    {
        question: "Which promotional tool involves non-personal presentation and promotion of ideas, goods, or services by an identified sponsor?",
        options: ["Personal selling", "Public relations", "Advertising", "Sales promotion", "Direct marketing"],
        correct: 2,
        explanation: "Advertising is any paid form of non-personal presentation and promotion of ideas, goods, or services by an identified sponsor."
    },
    {
        question: "The promotional mix element that involves building good relations with the company's various publics is:",
        options: ["Advertising", "Personal selling", "Sales promotion", "Public relations", "Direct marketing"],
        correct: 3,
        explanation: "Public relations involves building good relations with the company's various publics by obtaining favorable publicity, building up a good corporate image, and handling unfavorable rumors and events."
    },
    {
        question: "A push strategy is most appropriate when:",
        options: ["Consumers make the purchase decision", "The product is a low-involvement good", "The product moves through a long channel", "The company targets a mass market", "Advertising is the primary promotional tool"],
        correct: 2,
        explanation: "Push strategy is appropriate when the product moves through a long channel, using promotion to push the product through channels to final consumers."
    },
    {
        question: "Which promotional strategy directs marketing efforts toward final consumers to induce them to buy?",
        options: ["Push strategy", "Pull strategy", "Combination strategy", "Direct strategy", "Indirect strategy"],
        correct: 1,
        explanation: "Pull strategy directs marketing efforts toward final consumers to induce them to buy the product, creating demand that pulls the product through the channel."
    },
    {
        question: "Sales promotion includes:",
        options: ["Only advertising activities", "Long-term incentives only", "Short-term incentives to encourage purchase", "Only personal selling activities", "Only public relations activities"],
        correct: 2,
        explanation: "Sales promotion consists of short-term incentives to encourage the purchase or sale of a product or service, such as discounts, coupons, and contests."
    },
    {
        question: "Which promotional mix element allows for immediate feedback and relationship building?",
        options: ["Advertising", "Personal selling", "Sales promotion", "Public relations", "Publicity"],
        correct: 1,
        explanation: "Personal selling involves personal presentation by the firm's sales force for the purpose of making sales and building customer relationships, allowing for immediate feedback."
    },
    {
        question: "The process of blending different promotional tools to create a unified message is called:",
        options: ["Marketing mix", "Product mix", "Integrated marketing communications (IMC)", "Channel mix", "Price mix"],
        correct: 2,
        explanation: "Integrated Marketing Communications (IMC) involves carefully integrating and coordinating the company's many communications channels to deliver a clear, consistent, and compelling message."
    },
    {
        question: "Which advertising objective aims to build consumer preference and encourage switching to the brand?",
        options: ["Informative advertising", "Persuasive advertising", "Reminder advertising", "Comparative advertising", "Institutional advertising"],
        correct: 1,
        explanation: "Persuasive advertising aims to build selective demand and brand preference, encouraging consumers to switch to or prefer the advertised brand."
    },
    {
        question: "A company's total marketing communications mix is also called its:",
        options: ["Marketing plan", "Promotional mix", "Product mix", "Distribution mix", "Pricing strategy"],
        correct: 1,
        explanation: "The promotional mix (or marketing communications mix) consists of the specific blend of advertising, sales promotion, public relations, personal selling, and direct marketing tools."
    },
    {
        question: "Advertising that builds selective demand by communicating the distinctive benefits of a brand is:",
        options: ["Informative advertising", "Persuasive advertising", "Reminder advertising", "Reinforcement advertising", "Advocacy advertising"],
        correct: 1,
        explanation: "Persuasive advertising aims to build selective demand by communicating the distinctive benefits and features that differentiate the brand from competitors."
    },
    {
        question: "Direct marketing is characterized by:",
        options: ["Using only mass media", "Engaging directly with targeted individual consumers", "Focusing only on retailers", "Being only business-to-business", "Not allowing customer response"],
        correct: 1,
        explanation: "Direct marketing involves engaging directly with carefully targeted individual consumers and customer communities to both obtain an immediate response and cultivate lasting customer relationships."
    },
    {
        question: "In which stage of the product life cycle is reminder advertising most commonly used?",
        options: ["Introduction", "Growth", "Maturity", "Decline", "Development"],
        correct: 2,
        explanation: "Reminder advertising is important for mature products to maintain customer awareness and keep the brand in consumers' minds."
    },
    {
        question: "Which promotional tool is most effective for complex products requiring explanation or demonstration?",
        options: ["Print advertising", "Personal selling", "Sales promotion", "Public relations", "Billboard advertising"],
        correct: 1,
        explanation: "Personal selling is most effective for complex products as salespeople can explain features, answer questions, and demonstrate the product to potential buyers."
    },
    {
        question: "The AIDA model in promotional planning stands for:",
        options: ["Awareness, Interest, Desire, Action", "Attention, Information, Decision, Agreement", "Awareness, Intention, Decision, Acceptance", "Attention, Interest, Decision, Action", "Awareness, Information, Desire, Agreement"],
        correct: 0,
        explanation: "The AIDA model outlines the stages in the consumer response to promotion: Attention/Awareness, Interest, Desire, and Action (purchase)."
    },
    {
        question: "A company that wants to quickly generate trial and attract deal-prone customers should use:",
        options: ["Image advertising", "Sales promotion", "Institutional advertising", "Advocacy advertising", "Reminder advertising"],
        correct: 1,
        explanation: "Sales promotion provides short-term incentives that can quickly stimulate trial purchases and attract price-sensitive or deal-prone customers."
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
