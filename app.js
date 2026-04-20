// Marketing Study Website - Clean Version
// Main application JavaScript file

// Global variables
let currentLanguage = 'en';
let currentQuiz = [];
let currentQuestionIndex = 0;
let quizScore = 0;
let quizTimer = null;
let quizStartTime = null;

// User progress tracking
let userProgress = {
    studiedLectures: [],
    quizScores: [],
    caseStudiesCompleted: [],
    language: 'en'
};

// Lecture data with clean English content
const lectureData = [
    {
        id: 1,
        title: "Lecture 1: Introduction to Marketing",
        titleEn: "Lecture 1: Introduction to Marketing",
        topics: ["marketing definition", "marketing concept", "value creation", "customer satisfaction", "marketing orientation"],
        description: "Introduction to fundamental marketing concepts and the marketing process",
        descriptionEn: "Introduction to fundamental marketing concepts and the marketing process",
        content: `
            <div class="lecture-overview">
                <div class="concept-box">
                    <h4>Marketing Fundamentals Overview</h4>
                    <div class="definition-card">
                        <h5>What is Marketing?</h5>
                        <div class="definition-content">
                            <p><strong>Marketing Definition:</strong> The process of creating, communicating, delivering, and exchanging offerings that have value for customers, partners, and society at large.</p>
                            <div class="key-points">
                                <span class="badge bg-primary">Value Creation</span>
                                <span class="badge bg-success">Customer Focus</span>
                                <span class="badge bg-warning">Exchange Process</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="strategy-elements">
                <h5>Core Marketing Concepts</h5>
                <div class="elements-grid">
                    <div class="element-card">
                        <div class="element-icon">1</div>
                        <h6>Needs, Wants, and Demands</h6>
                        <p>Understanding customer requirements and desires</p>
                    </div>
                    <div class="element-card">
                        <div class="element-icon">2</div>
                        <h6>Market Offerings</h6>
                        <p>Products, services, and experiences offered to market</p>
                    </div>
                    <div class="element-card">
                        <div class="element-icon">3</div>
                        <h6>Value and Satisfaction</h6>
                        <p>Creating and delivering customer value</p>
                    </div>
                    <div class="element-card">
                        <div class="element-icon">4</div>
                        <h6>Relationships and Networks</h6>
                        <p>Building long-term customer relationships</p>
                    </div>
                </div>
            </div>
            
            <div class="concepts-analysis">
                <h5>Marketing Orientations</h5>
                <div class="concept-section">
                    <div class="concept-header">
                        <h6>Production Concept</h6>
                        <span class="concept-badge">Historical</span>
                    </div>
                    <p>Focus on high production efficiency and wide distribution</p>
                </div>
                
                <div class="concept-section">
                    <div class="concept-header">
                        <h6>Product Concept</h6>
                        <span class="concept-badge">Quality Focus</span>
                    </div>
                    <p>Focus on product quality and continuous improvement</p>
                </div>
                
                <div class="concept-section">
                    <div class="concept-header">
                        <h6>Selling Concept</h6>
                        <span class="concept-badge">Sales Driven</span>
                    </div>
                    <p>Focus on aggressive selling and promotion</p>
                </div>
                
                <div class="concept-section">
                    <div class="concept-header">
                        <h6>Marketing Concept</h6>
                        <span class="concept-badge">Customer Centered</span>
                    </div>
                    <p>Focus on customer needs and wants to achieve organizational goals</p>
                </div>
            </div>
        `
    },
    {
        id: 2,
        title: "Lecture 2: Marketing Strategies",
        titleEn: "Lecture 2: Marketing Strategies",
        titleZh: "Lecture 2: Marketing Strategies",
        topics: ["strategy", "marketing planning", "long-term planning", "strategic direction", "strategic marketing process"],
        description: "Introduction to basic concepts and planning process of marketing strategies",
        descriptionEn: "Introduction to basic concepts and planning process of marketing strategies",
        descriptionZh: "Marketing Strategies - Basic Concepts and Planning Process",
        content: `
            <div class="lecture-overview">
                <div class="concept-box">
                    <h4>Marketing Strategies Overview</h4>
                    <div class="definition-card">
                        <h5>What is Strategy?</h5>
                        <div class="definition-content">
                            <p><strong>Strategy Definition:</strong> A long-term action plan that provides unique customer experiences while achieving organizational goals.</p>
                            <div class="key-points">
                                <span class="badge bg-primary">Long-term Focus</span>
                                <span class="badge bg-success">Unique Value</span>
                                <span class="badge bg-warning">Guiding Direction</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="strategy-elements">
                <h5>Core Elements of Strategy</h5>
                <div class="elements-grid">
                    <div class="element-card">
                        <div class="element-icon">1</div>
                        <h6>Long-term Vision</h6>
                        <p>Strategy typically covers 3-5 year time horizon</p>
                    </div>
                    <div class="element-card">
                        <div class="element-icon">2</div>
                        <h6>Unique Position</h6>
                        <p>Provides value proposition different from competitors</p>
                    </div>
                    <div class="element-card">
                        <div class="element-icon">3</div>
                        <h6>Consistent Alignment</h6>
                        <p>All organizational activities align with strategy</p>
                    </div>
                    <div class="element-card">
                        <div class="element-icon">4</div>
                        <h6>Adaptive Flexibility</h6>
                        <p>Adjusts direction based on environmental changes</p>
                    </div>
                </div>
            </div>
            
            <div class="strategy-hierarchy">
                <h5>Strategic Hierarchy Structure</h5>
                <div class="hierarchy-diagram">
                    <div class="hierarchy-level level-1">
                        <div class="level-header">Corporate Level</div>
                        <p>Overall organizational mission and vision</p>
                    </div>
                    <div class="hierarchy-level level-2">
                        <div class="level-header">Business Unit Level</div>
                        <p>Competitive approach for specific business areas</p>
                    </div>
                    <div class="hierarchy-level level-3">
                        <div class="level-header">Functional Level</div>
                        <p>Specific strategies for departments (marketing, finance, etc.)</p>
                    </div>
                    <div class="hierarchy-level level-4">
                        <div class="level-header">Operational Level</div>
                        <p>Specific actions for daily operations</p>
                    </div>
                </div>
                <p class="note"><em>Strategy becomes more specific and focused as you move down the hierarchy</em></p>
            </div>
        `
    },
    {
        id: 3,
        title: "Lecture 3: Environmental Scanning and Marketing Research",
        titleEn: "Lecture 3: Environmental Scanning and Marketing Research",
        titleZh: "Lecture 3: Environmental Scanning and Marketing Research",
        topics: ["environmental scanning", "market research", "SWOT analysis", "PEST analysis", "competitive analysis", "consumer research"],
        description: "Environmental scanning and marketing research methods",
        descriptionEn: "Environmental scanning and marketing research methods",
        descriptionZh: "Environmental Scanning and Marketing Research - Methods and Analysis",
        content: `
            <div class="lecture-overview">
                <div class="concept-box">
                    <h4>Environmental Scanning and Marketing Research</h4>
                    <div class="definition-card">
                        <h5>What is Environmental Scanning?</h5>
                        <div class="definition-content">
                            <p><strong>Environmental Scanning Definition:</strong> The process of continuously monitoring the external environment to identify opportunities and threats that may influence business operations and strategy.</p>
                            <div class="key-points">
                                <span class="badge bg-primary">External Focus</span>
                                <span class="badge bg-success">Continuous Process</span>
                                <span class="badge bg-warning">Strategic Tool</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="strategy-elements">
                <h5>Importance of Environmental Scanning</h5>
                <div class="elements-grid">
                    <div class="element-card">
                        <div class="element-icon">1</div>
                        <h6>Predict Changes</h6>
                        <p>Early identification of market trends and shifts before competitors</p>
                    </div>
                    <div class="element-card">
                        <div class="element-icon">2</div>
                        <h6>Identify Opportunities</h6>
                        <p>Discover new market opportunities and growth potential areas</p>
                    </div>
                    <div class="element-card">
                        <div class="element-icon">3</div>
                        <h6>Risk Management</h6>
                        <p>Anticipate potential threats and develop proactive response strategies</p>
                    </div>
                    <div class="element-card">
                        <div class="element-icon">4</div>
                        <h6>Competitive Advantage</h6>
                        <p>React faster than competitors to environmental changes</p>
                    </div>
                </div>
            </div>
            
            <div class="concepts-analysis">
                <h5>External Environment Analysis Frameworks</h5>
                
                <div class="concept-section">
                    <div class="concept-header">
                        <h6>1. PEST Analysis</h6>
                        <span class="concept-badge">Macro-Environment</span>
                    </div>
                    <p>PEST analysis examines macro-environmental factors affecting all businesses in an industry.</p>
                    <div class="components-grid">
                        <div class="component-item">
                            <h7>Political/Legal</h7>
                            <p>Government policies, regulations, political stability, trade restrictions, tax policies, labor laws</p>
                        </div>
                        <div class="component-item">
                            <h7>Economic</h7>
                            <p>Economic growth, inflation rates, interest rates, exchange rates, unemployment, consumer confidence</p>
                        </div>
                        <div class="component-item">
                            <h7>Social/Cultural</h7>
                            <p>Demographics, lifestyle trends, education levels, cultural values, population growth, income distribution</p>
                        </div>
                        <div class="component-item">
                            <h7>Technological</h7>
                            <p>R&D activity, automation, innovation, technological change, internet infrastructure</p>
                        </div>
                    </div>
                    <div class="example-box">
                        <p><strong>Example:</strong> A tech company analyzes how 5G rollout (Technological) and data privacy regulations (Political) will affect their product development timeline.</p>
                    </div>
                </div>
                
                <div class="concept-section">
                    <div class="concept-header">
                        <h6>2. SWOT Analysis</h6>
                        <span class="concept-badge">Strategic Planning</span>
                    </div>
                    <p>SWOT integrates internal and external analysis to develop comprehensive strategies.</p>
                    <div class="swot-grid">
                        <div class="swot-item swot-strengths">
                            <h7>Strengths (Internal)</h7>
                            <ul>
                                <li>Core competencies and unique resources</li>
                                <li>Strong brand reputation</li>
                                <li>Efficient operations and processes</li>
                                <li>Skilled workforce and expertise</li>
                                <li>Financial resources and stability</li>
                            </ul>
                        </div>
                        <div class="swot-item swot-weaknesses">
                            <h7>Weaknesses (Internal)</h7>
                            <ul>
                                <li>Limited resources or capabilities</li>
                                <li>Weak brand recognition</li>
                                <li>Operational inefficiencies</li>
                                <li>Skill gaps in workforce</li>
                                <li>Financial constraints</li>
                            </ul>
                        </div>
                        <div class="swot-item swot-opportunities">
                            <h7>Opportunities (External)</h7>
                            <ul>
                                <li>Emerging market trends</li>
                                <li>Technological advancements</li>
                                <li>Changes in consumer preferences</li>
                                <li>New market segments</li>
                                <li>Regulatory changes favoring business</li>
                            </ul>
                        </div>
                        <div class="swot-item swot-threats">
                            <h7>Threats (External)</h7>
                            <ul>
                                <li>New competitor entry</li>
                                <li>Substitute products or services</li>
                                <li>Economic downturns</li>
                                <li>Changing regulations</li>
                                <li>Supply chain disruptions</li>
                            </ul>
                        </div>
                    </div>
                    <div class="example-box">
                        <p><strong>Strategy Development:</strong> Use Strengths to capitalize on Opportunities, while minimizing Weaknesses and defending against Threats.</p>
                    </div>
                </div>
                
                <div class="concept-section">
                    <div class="concept-header">
                        <h6>3. Competitive Analysis</h6>
                        <span class="concept-badge">Industry Analysis</span>
                    </div>
                    <p>Understanding competitive dynamics helps identify strategic positioning opportunities.</p>
                    <div class="components-grid">
                        <div class="component-item">
                            <h7>Competitor Identification</h7>
                            <p>Direct competitors (same market), indirect competitors (substitutes), potential entrants</p>
                        </div>
                        <div class="component-item">
                            <h7>Competitor Strategies</h7>
                            <p>Pricing strategies, marketing approaches, distribution channels, target segments</p>
                        </div>
                        <div class="component-item">
                            <h7>Competitive Positioning</h7>
                            <p>Market share, brand positioning, product differentiation, customer loyalty</p>
                        </div>
                        <div class="component-item">
                            <h7>Porter's Five Forces</h7>
                            <p>Rivalry, new entrants, substitutes, buyer power, supplier power</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="concepts-analysis">
                <h5>Marketing Research Methods</h5>
                
                <div class="concept-section">
                    <div class="concept-header">
                        <h6>Research Types</h6>
                        <span class="concept-badge">Data Collection</span>
                    </div>
                    <div class="components-grid">
                        <div class="component-item">
                            <h7>Primary Research</h7>
                            <p>Original data collection: surveys, interviews, focus groups, observations, experiments</p>
                        </div>
                        <div class="component-item">
                            <h7>Secondary Research</h7>
                            <p>Existing data analysis: industry reports, government statistics, academic studies, company records</p>
                        </div>
                        <div class="component-item">
                            <h7>Qualitative Research</h7>
                            <p>Exploratory insights: focus groups, in-depth interviews, ethnographic studies</p>
                        </div>
                        <div class="component-item">
                            <h7>Quantitative Research</h7>
                            <p>Statistical analysis: surveys, questionnaires, structured observations, experiments</p>
                        </div>
                    </div>
                </div>
                
                <div class="concept-section">
                    <div class="concept-header">
                        <h6>Research Process</h6>
                        <span class="concept-badge">Systematic Approach</span>
                    </div>
                    <div class="planning-steps">
                        <div class="step-item">
                            <div class="step-number">1</div>
                            <div class="step-content">
                                <h7>Define Problem</h7>
                                <p>Clarify research objectives and information needs</p>
                            </div>
                        </div>
                        <div class="step-item">
                            <div class="step-number">2</div>
                            <div class="step-content">
                                <h7>Develop Research Plan</h7>
                                <p>Determine data sources, collection methods, and budget</p>
                            </div>
                        </div>
                        <div class="step-item">
                            <div class="step-number">3</div>
                            <div class="step-content">
                                <h7>Collect Data</h7>
                                <p>Implement research design and gather information</p>
                            </div>
                        </div>
                        <div class="step-item">
                            <div class="step-number">4</div>
                            <div class="step-content">
                                <h7>Analyze Data</h7>
                                <p>Process, tabulate, and interpret research findings</p>
                            </div>
                        </div>
                        <div class="step-item">
                            <div class="step-number">5</div>
                            <div class="step-content">
                                <h7>Present Findings</h7>
                                <p>Report results and recommend strategic actions</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="practical-application">
                <h5>Practical Application: Environmental Scanning in Action</h5>
                <div class="case-study-box">
                    <div class="case-header">
                        <h6>Case Study: Entering a New Market</h6>
                        <span class="case-badge">Strategic Analysis</span>
                    </div>
                    <div class="case-challenge">
                        <h7>Business Challenge</h7>
                        <p>A retail company wants to expand into an emerging Asian market. What environmental factors should they analyze?</p>
                    </div>
                    <div class="case-solution">
                        <h7>Analysis Framework</h7>
                        <div class="strategy-list">
                            <div class="strategy-item">
                                <div class="strategy-icon">P</div>
                                <p><strong>Political:</strong> Trade policies, foreign investment regulations, political stability</p>
                            </div>
                            <div class="strategy-item">
                                <div class="strategy-icon">E</div>
                                <p><strong>Economic:</strong> GDP growth, disposable income, retail infrastructure, payment systems</p>
                            </div>
                            <div class="strategy-item">
                                <div class="strategy-icon">S</div>
                                <p><strong>Social:</strong> Shopping habits, cultural preferences, urbanization trends</p>
                            </div>
                            <div class="strategy-item">
                                <div class="strategy-icon">T</div>
                                <p><strong>Technological:</strong> E-commerce adoption, mobile payment penetration, logistics tech</p>
                            </div>
                        </div>
                    </div>
                    <div class="case-strategies">
                        <h7>Strategic Implications</h7>
                        <p>Comprehensive environmental scanning reveals both opportunities (growing middle class, mobile-first consumers) and threats (complex regulations, established local competitors), enabling informed market entry strategy.</p>
                    </div>
                </div>
            </div>
            
            <div class="key-takeaways">
                <h5>Key Takeaways</h5>
                <ul>
                    <li><strong>Continuous Process:</strong> Environmental scanning is ongoing, not one-time</li>
                    <li><strong>Multiple Frameworks:</strong> PEST, SWOT, and competitive analysis complement each other</li>
                    <li><strong>Data Quality:</strong> Research validity depends on appropriate methods and reliable sources</li>
                    <li><strong>Strategic Integration:</strong> Environmental insights must inform strategic decisions</li>
                    <li><strong>Proactive Approach:</strong> Early identification of changes enables competitive advantage</li>
                </ul>
            </div>
        `
    },
    {
        id: 4,
        title: "Lecture 4: Understanding Consumer Behavior",
        titleEn: "Lecture 4: Understanding Consumer Behavior",
        titleZh: "Lecture 4: Understanding Consumer Behavior",
        topics: ["consumer behavior", "decision making", "psychological factors"],
        description: "Consumer behavior analysis and decision process",
        descriptionEn: "Consumer behavior analysis and decision process",
        descriptionZh: "Consumer Behavior - Analysis and Decision Process",
        content: `
            <div class="lecture-overview">
                <div class="concept-box">
                    <h4>Understanding Consumer Behavior</h4>
                    <div class="definition-card">
                        <h5>What is Consumer Behavior?</h5>
                        <div class="definition-content">
                            <p><strong>Consumer Behavior Definition:</strong> The study of how individuals, groups, and organizations select, buy, use, and dispose of goods, services, ideas, or experiences to satisfy their needs and wants.</p>
                            <div class="key-points">
                                <span class="badge bg-primary">Decision Process</span>
                                <span class="badge bg-success">Psychological Factors</span>
                                <span class="badge bg-warning">Social Influences</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="concepts-analysis">
                <h5>Factors Influencing Consumer Behavior</h5>
                
                <div class="concept-section">
                    <div class="concept-header">
                        <h6>1. Cultural Factors</h6>
                        <span class="concept-badge">Broadest Influence</span>
                    </div>
                    <div class="components-grid">
                        <div class="component-item">
                            <h7>Culture</h7>
                            <p>Basic values, perceptions, preferences, and behaviors learned from family and society</p>
                        </div>
                        <div class="component-item">
                            <h7>Subculture</h7>
                            <p>Nationalities, religions, racial groups, geographic regions with shared values</p>
                        </div>
                        <div class="component-item">
                            <h7>Social Class</h7>
                            <p>Relatively permanent divisions in society based on income, education, occupation</p>
                        </div>
                    </div>
                </div>
                
                <div class="concept-section">
                    <div class="concept-header">
                        <h6>2. Social Factors</h6>
                        <span class="concept-badge">Group Influence</span>
                    </div>
                    <div class="components-grid">
                        <div class="component-item">
                            <h7>Reference Groups</h7>
                            <p>Direct (family, friends, colleagues) and indirect (celebrities, aspirational) groups</p>
                        </div>
                        <div class="component-item">
                            <h7>Family</h7>
                            <p>Most influential primary group affecting purchase decisions across lifecycle stages</p>
                        </div>
                        <div class="component-item">
                            <h7>Roles and Status</h7>
                            <p>Position within groups influences product choices (status symbols)</p>
                        </div>
                    </div>
                </div>
                
                <div class="concept-section">
                    <div class="concept-header">
                        <h6>3. Personal Factors</h6>
                        <span class="concept-badge">Individual Characteristics</span>
                    </div>
                    <div class="components-grid">
                        <div class="component-item">
                            <h7>Age and Life Stage</h7>
                            <p>Consumption patterns change with age and family lifecycle</p>
                        </div>
                        <div class="component-item">
                            <h7>Occupation</h7>
                            <p>Professional identity influences product preferences and spending</p>
                        </div>
                        <div class="component-item">
                            <h7>Economic Situation</h7>
                            <p>Income, savings, borrowing power affect spending capacity</p>
                        </div>
                        <div class="component-item">
                            <h7>Lifestyle</h7>
                            <p>Activities, interests, opinions (AIO) shape consumption patterns</p>
                        </div>
                    </div>
                </div>
                
                <div class="concept-section">
                    <div class="concept-header">
                        <h6>4. Psychological Factors</h6>
                        <span class="concept-badge">Internal Processes</span>
                    </div>
                    <div class="components-grid">
                        <div class="component-item">
                            <h7>Motivation</h7>
                            <p>Maslow's hierarchy: physiological, safety, social, esteem, self-actualization needs</p>
                        </div>
                        <div class="component-item">
                            <h7>Perception</h7>
                            <p>Selective attention, selective distortion, selective retention</p>
                        </div>
                        <div class="component-item">
                            <h7>Learning</h7>
                            <p>Changes in behavior from experience through drive, cue, response, reinforcement</p>
                        </div>
                        <div class="component-item">
                            <h7>Beliefs and Attitudes</h7>
                            <p>Descriptive thoughts and evaluative feelings about objects</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="concepts-analysis">
                <h5>Consumer Decision Process</h5>
                <div class="planning-steps">
                    <div class="step-item">
                        <div class="step-number">1</div>
                        <div class="step-content">
                            <h7>Problem Recognition</h7>
                            <p>Consumer identifies a need or problem. Triggered by internal stimuli (hunger) or external stimuli (advertising)</p>
                        </div>
                    </div>
                    <div class="step-item">
                        <div class="step-number">2</div>
                        <div class="step-content">
                            <h7>Information Search</h7>
                            <p>Personal sources (memory, experience), commercial sources (ads, websites), public sources (reviews), experiential sources (handling product)</p>
                        </div>
                    </div>
                    <div class="step-item">
                        <div class="step-number">3</div>
                        <div class="step-content">
                            <h7>Alternative Evaluation</h7>
                            <p>Consumers evaluate based on product attributes, brand beliefs, and decision heuristics</p>
                        </div>
                    </div>
                    <div class="step-item">
                        <div class="step-number">4</div>
                        <div class="step-content">
                            <h7>Purchase Decision</h7>
                            <p>Form purchase intention, choose retailer, timing, and quantity. Interference from unexpected factors or others' attitudes</p>
                        </div>
                    </div>
                    <div class="step-item">
                        <div class="step-number">5</div>
                        <div class="step-content">
                            <h7>Post-purchase Behavior</h7>
                            <p>Satisfaction vs. expectations. Cognitive dissonance: discomfort after difficult purchase decisions</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="concepts-analysis">
                <h5>Types of Consumer Buying Behavior</h5>
                <div class="components-grid">
                    <div class="component-item">
                        <h7>Complex Buying Behavior</h7>
                        <p>High involvement, significant differences between brands (e.g., car, house). Extensive information processing</p>
                    </div>
                    <div class="component-item">
                        <h7>Dissonance-Reducing Buying</h7>
                        <p>High involvement, few differences between brands. Seek reassurance after purchase</p>
                    </div>
                    <div class="component-item">
                        <h7>Habitual Buying Behavior</h7>
                        <p>Low involvement, few differences. Based on habit rather than strong brand loyalty</p>
                    </div>
                    <div class="component-item">
                        <h7>Variety-Seeking Buying</h7>
                        <p>Low involvement, significant differences. Frequent brand switching for variety</p>
                    </div>
                </div>
            </div>
            
            <div class="practical-application">
                <h5>Practical Application: Understanding Your Customer</h5>
                <div class="case-study-box">
                    <div class="case-header">
                        <h6>Case Study: Marketing to Different Generations</h6>
                        <span class="case-badge">Segmentation Strategy</span>
                    </div>
                    <div class="case-challenge">
                        <h7>Marketing Challenge</h7>
                        <p>A smartphone company wants to target different age segments with the same product line.</p>
                    </div>
                    <div class="case-solution">
                        <h7>Consumer Behavior Insights</h7>
                        <div class="strategy-list">
                            <div class="strategy-item">
                                <div class="strategy-icon">G</div>
                                <p><strong>Gen Z (18-25):</strong> Value authenticity, social responsibility, influenced by social media and peer reviews</p>
                            </div>
                            <div class="strategy-item">
                                <div class="strategy-icon">M</div>
                                <p><strong>Millennials (26-40):</strong> Convenience-driven, research-oriented, influenced by online reviews and experiences</p>
                            </div>
                            <div class="strategy-item">
                                <div class="strategy-icon">G</div>
                                <p><strong>Gen X (41-56):</strong> Value work-life balance, brand loyal when satisfied, influenced by family needs</p>
                            </div>
                            <div class="strategy-item">
                                <div class="strategy-icon">B</div>
                                <p><strong>Boomers (57+):</strong> Quality-focused, prefer personal service, influenced by traditional media</p>
                            </div>
                        </div>
                    </div>
                    <div class="case-strategies">
                        <h7>Strategic Implications</h7>
                        <p>Understanding consumer behavior enables tailored marketing messages, appropriate channel selection, and effective positioning across different customer segments.</p>
                    </div>
                </div>
            </div>
            
            <div class="key-takeaways">
                <h5>Key Takeaways</h5>
                <ul>
                    <li><strong>Multi-factorial:</strong> Consumer behavior results from cultural, social, personal, and psychological factors</li>
                    <li><strong>Decision Journey:</strong> Purchase decisions follow a five-stage process from problem recognition to post-purchase behavior</li>
                    <li><strong>Segment Variation:</strong> Different consumer groups exhibit distinct buying behaviors requiring tailored approaches</li>
                    <li><strong>Cognitive Dissonance:</strong> Post-purchase discomfort can be managed through reassurance and support</li>
                    <li><strong>Marketing Application:</strong> Understanding behavior enables effective segmentation, targeting, and positioning</li>
                </ul>
            </div>
        `
    },
    {
        id: 4,
        title: "Lecture 5: Market Segmentation, Targeting, and Positioning",
        titleEn: "Lecture 5: Market Segmentation, Targeting, and Positioning",
        topics: ["market segmentation", "targeting", "positioning", "STP strategy", "market targeting", "positioning strategy", "STP analysis", "target market", "segmentation strategy"],
        description: "STP Strategy: Segmentation, Targeting, Positioning",
        descriptionEn: "STP Strategy: Segmentation, Targeting, Positioning",
        content: `
            <div class="lecture-overview">
                <div class="concept-box">
                    <h4>Market Segmentation, Targeting, and Positioning (STP)</h4>
                    <div class="definition-card">
                        <h5>What is STP Strategy?</h5>
                        <div class="definition-content">
                            <p><strong>STP Definition:</strong> A strategic marketing framework that involves dividing markets into distinct segments (Segmentation), selecting the most attractive segments to serve (Targeting), and creating a distinctive market position for the product (Positioning).</p>
                            <div class="key-points">
                                <span class="badge bg-primary">Customer-Centric</span>
                                <span class="badge bg-success">Resource Efficiency</span>
                                <span class="badge bg-warning">Competitive Focus</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="strategy-elements">
                <h5>The STP Process</h5>
                <div class="planning-steps">
                    <div class="step-item">
                        <div class="step-number">S</div>
                        <div class="step-content">
                            <h7>Segmentation</h7>
                            <p>Divide the total market into distinct groups with similar needs, characteristics, or behaviors</p>
                        </div>
                    </div>
                    <div class="step-item">
                        <div class="step-number">T</div>
                        <div class="step-content">
                            <h7>Targeting</h7>
                            <p>Evaluate and select one or more segments to enter based on attractiveness and company capabilities</p>
                        </div>
                    </div>
                    <div class="step-item">
                        <div class="step-number">P</div>
                        <div class="step-content">
                            <h7>Positioning</h7>
                            <p>Create a clear, distinctive, and desirable place for the product in target customers' minds</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="concepts-analysis">
                <h5>Step 1: Market Segmentation</h5>
                
                <div class="concept-section">
                    <div class="concept-header">
                        <h6>Segmentation Bases</h6>
                        <span class="concept-badge">Variables for Division</span>
                    </div>
                    <div class="components-grid">
                        <div class="component-item">
                            <h7>Demographic</h7>
                            <p>Age, gender, income, education, occupation, family size, religion, nationality, social class</p>
                        </div>
                        <div class="component-item">
                            <h7>Geographic</h7>
                            <p>Region, country, city size, climate, population density, urban/rural</p>
                        </div>
                        <div class="component-item">
                            <h7>Psychographic</h7>
                            <p>Lifestyle, personality, values, interests, opinions (AIO), social class</p>
                        </div>
                        <div class="component-item">
                            <h7>Behavioral</h7>
                            <p>Occasions, benefits sought, user status, usage rate, loyalty status, buyer readiness</p>
                        </div>
                    </div>
                </div>
                
                <div class="concept-section">
                    <div class="concept-header">
                        <h6>Effective Segmentation Criteria</h6>
                        <span class="concept-badge">Quality Standards</span>
                    </div>
                    <div class="elements-grid">
                        <div class="element-card">
                            <div class="element-icon">M</div>
                            <h6>Measurable</h6>
                            <p>Size, purchasing power, and characteristics can be measured</p>
                        </div>
                        <div class="element-card">
                            <div class="element-icon">A</div>
                            <h6>Accessible</h6>
                            <p>Can be effectively reached and served through marketing efforts</p>
                        </div>
                        <div class="element-card">
                            <div class="element-icon">S</div>
                            <h6>Substantial</h6>
                            <p>Large and profitable enough to serve with tailored marketing</p>
                        </div>
                        <div class="element-card">
                            <div class="element-icon">D</div>
                            <h6>Differentiable</h6>
                            <p>Segments respond differently to different marketing mix elements</p>
                        </div>
                        <div class="element-card">
                            <div class="element-icon">A</div>
                            <h6>Actionable</h6>
                            <p>Company can design effective programs to attract and serve the segment</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="concepts-analysis">
                <h5>Step 2: Target Market Selection</h5>
                
                <div class="concept-section">
                    <div class="concept-header">
                        <h6>Targeting Strategies</h6>
                        <span class="concept-badge">Market Coverage</span>
                    </div>
                    <div class="components-grid">
                        <div class="component-item">
                            <h7>Undifferentiated (Mass) Marketing</h7>
                            <p>Ignore segment differences, target whole market with one offering. Economy of scale but ignores diversity.</p>
                        </div>
                        <div class="component-item">
                            <h7>Differentiated (Segmented) Marketing</h7>
                            <p>Target several segments with separate offerings. Higher sales, higher costs, resource intensity.</p>
                        </div>
                        <div class="component-item">
                            <h7>Concentrated (Niche) Marketing</h7>
                            <p>Focus on one or few segments. Deep understanding, strong positioning, higher risk.</p>
                        </div>
                        <div class="component-item">
                            <h7>Micromarketing</h7>
                            <p>Local or individual marketing. Tailor products and programs to specific locations or individuals.</p>
                        </div>
                    </div>
                </div>
                
                <div class="concept-section">
                    <div class="concept-header">
                        <h6>Segment Attractiveness Evaluation</h6>
                        <span class="concept-badge">Selection Criteria</span>
                    </div>
                    <ul>
                        <li><strong>Segment Size and Growth:</strong> Current sales, projected growth rates, expected profitability</li>
                        <li><strong>Structural Attractiveness:</strong> Competitor presence, substitute threats, buyer/supplier power</li>
                        <li><strong>Company Objectives:</strong> Alignment with long-term goals and strategic direction</li>
                        <li><strong>Company Resources:</strong> Capabilities to serve segment effectively and profitably</li>
                    </ul>
                </div>
            </div>
            
            <div class="concepts-analysis">
                <h5>Step 3: Market Positioning</h5>
                
                <div class="concept-section">
                    <div class="concept-header">
                        <h6>Positioning Strategies</h6>
                        <span class="concept-badge">Differentiation</span>
                    </div>
                    <div class="components-grid">
                        <div class="component-item">
                            <h7>Product Attribute</h7>
                            <p>Position based on specific product features or benefits (e.g., "most reliable")</p>
                        </div>
                        <div class="component-item">
                            <h7>Price/Quality</h7>
                            <p>Position based on price point and quality perception (e.g., luxury vs. value)</p>
                        </div>
                        <div class="component-item">
                            <h7>Use/Application</h7>
                            <p>Position based on how or when product is used (e.g., "for active lifestyles")</p>
                        </div>
                        <div class="component-item">
                            <h7>User Category</h7>
                            <p>Position based on user type (e.g., "for professionals")</p>
                        </div>
                        <div class="component-item">
                            <h7>Competitor</h7>
                            <p>Position directly against competitor (e.g., "better than X")</p>
                        </div>
                        <div class="component-item">
                            <h7>Benefit</h7>
                            <p>Position based on unique benefit (e.g., "freshest taste")</p>
                        </div>
                    </div>
                </div>
                
                <div class="concept-section">
                    <div class="concept-header">
                        <h6>Positioning Statement Framework</h6>
                        <span class="concept-badge">Strategic Statement</span>
                    </div>
                    <div class="example-box">
                        <p><strong>Template:</strong> For [target segment], our [product/brand] is the [frame of reference] that provides [point of difference] because [reason to believe].</p>
                        <p><strong>Example:</strong> For health-conscious young professionals, FitLife cereal is the breakfast option that provides maximum nutrition with minimum calories because it contains 100% natural ingredients with no added sugar.</p>
                    </div>
                </div>
                
                <div class="concept-section">
                    <div class="concept-header">
                        <h6>Perceptual Mapping</h6>
                        <span class="concept-badge">Visual Tool</span>
                    </div>
                    <p>A visual representation of how consumers perceive brands on key attributes relative to competitors.</p>
                    <ul>
                        <li><strong>Step 1:</strong> Identify key dimensions (e.g., price vs. quality)</li>
                        <li><strong>Step 2:</strong> Survey consumers on brand perceptions</li>
                        <li><strong>Step 3:</strong> Plot brands on two-dimensional map</li>
                        <li><strong>Step 4:</strong> Identify positioning gaps and opportunities</li>
                    </ul>
                </div>
            </div>
            
            <div class="practical-application">
                <h5>Practical Application: STP in Action</h5>
                <div class="case-study-box">
                    <div class="case-header">
                        <h6>Case Study: Electric Vehicle Market</h6>
                        <span class="case-badge">Complete STP Analysis</span>
                    </div>
                    <div class="case-challenge">
                        <h7>Market Context</h7>
                        <p>An automotive company wants to enter the growing electric vehicle (EV) market.</p>
                    </div>
                    <div class="case-solution">
                        <h7>STP Strategy</h7>
                        <div class="strategy-list">
                            <div class="strategy-item">
                                <div class="strategy-icon">S</div>
                                <p><strong>Segmentation:</strong> By income (luxury vs. affordable), by use (urban commuter vs. family), by values (eco-conscious vs. tech enthusiasts)</p>
                            </div>
                            <div class="strategy-item">
                                <div class="strategy-icon">T</div>
                                <p><strong>Targeting:</strong> Focus on affluent urban professionals (35-50) who value sustainability and technology, substantial segment with growth potential</p>
                            </div>
                            <div class="strategy-item">
                                <div class="strategy-icon">P</div>
                                <p><strong>Positioning:</strong> "Premium eco-friendly technology for the modern urban lifestyle" - combining luxury, sustainability, and cutting-edge features</p>
                            </div>
                        </div>
                    </div>
                    <div class="case-strategies">
                        <h7>Results</h7>
                        <p>Clear differentiation from both luxury gas vehicles and basic EVs. Strong brand identity attracts target segment willing to pay premium for aligned values.</p>
                    </div>
                </div>
            </div>
            
            <div class="key-takeaways">
                <h5>Key Takeaways</h5>
                <ul>
                    <li><strong>Customer Focus:</strong> STP shifts from mass marketing to customer-centric marketing</li>
                    <li><strong>Segmentation Quality:</strong> Effective segments must be measurable, accessible, substantial, differentiable, and actionable</li>
                    <li><strong>Strategic Targeting:</strong> Select segments based on attractiveness, fit with objectives, and resource capabilities</li>
                    <li><strong>Differentiated Positioning:</strong> Create unique value proposition that distinguishes from competitors</li>
                    <li><strong>Integration:</strong> All three steps must align: segment needs → target selection → differentiated position</li>
                </ul>
            </div>
        `
    },
    {
        id: 5,
        title: "Lecture 6: Marketing Mix - The 4Ps",
        titleEn: "Lecture 6: Marketing Mix - The 4Ps",
        topics: ["marketing mix", "4Ps", "product", "price", "place", "promotion", "marketing strategy", "integrated marketing"],
        description: "Comprehensive analysis of the 4Ps framework and their strategic integration",
        descriptionEn: "Comprehensive analysis of the 4Ps framework and their strategic integration",
        content: `
            <div class="lecture-overview">
                <div class="concept-box">
                    <h4>Marketing Mix Overview</h4>
                    <div class="definition-card">
                        <h5>What is Marketing Mix?</h5>
                        <div class="definition-content">
                            <p><strong>Marketing Mix Definition:</strong> The set of tactical marketing tools that the firm blends to produce the response it wants in the target market. Consists of everything that a firm can do to influence the demand for its product.</p>
                            <div class="key-points">
                                <span class="badge bg-primary">4Ps Framework</span>
                                <span class="badge bg-success">Strategic Tools</span>
                                <span class="badge bg-warning">Tactical Implementation</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="strategy-elements">
                <h5>The 4Ps of Marketing Mix</h5>
                <div class="elements-grid">
                    <div class="element-card">
                        <div class="element-icon">P</div>
                        <h6>Product</h6>
                        <p>Goods and services combination offered to target market</p>
                    </div>
                    <div class="element-card">
                        <div class="element-icon">P</div>
                        <h6>Price</h6>
                        <p>Amount customers pay for the product</p>
                    </div>
                    <div class="element-card">
                        <div class="element-icon">P</div>
                        <h6>Place</h6>
                        <p>Activities that make product available to target customers</p>
                    </div>
                    <div class="element-card">
                        <div class="element-icon">P</div>
                        <h6>Promotion</h6>
                        <p>Activities that communicate product value to target customers</p>
                    </div>
                </div>
            </div>
            
            <div class="concepts-analysis">
                <h5>Detailed Analysis of Each P</h5>
                
                <div class="concept-section">
                    <div class="concept-header">
                        <h6>1. Product Strategy</h6>
                        <span class="concept-badge">Core Element</span>
                    </div>
                    <div class="components-grid">
                        <div class="component-item">
                            <h7>Product Quality</h7>
                            <p>Performance, features, design, reliability, durability</p>
                        </div>
                        <div class="component-item">
                            <h7>Product Variety</h7>
                            <p>Width, depth, consistency of product line</p>
                        </div>
                        <div class="component-item">
                            <h7>Product Design</h7>
                            <p>Functional, aesthetic, symbolic benefits</p>
                        </div>
                        <div class="component-item">
                            <h7>Product Branding</h7>
                            <p>Name, logo, packaging, trademark</p>
                        </div>
                    </div>
                    <div class="example-box">
                        <p><strong>Example:</strong> Apple's iPhone combines superior quality, distinctive design, and strong branding to create premium positioning.</p>
                    </div>
                </div>
                
                <div class="concept-section">
                    <div class="concept-header">
                        <h6>2. Price Strategy</h6>
                        <span class="concept-badge">Revenue Driver</span>
                    </div>
                    <div class="components-grid">
                        <div class="component-item">
                            <h7>Pricing Objectives</h7>
                            <p>Profit maximization, market share, competitive positioning</p>
                        </div>
                        <div class="component-item">
                            <h7>Pricing Methods</h7>
                            <p>Cost-plus, value-based, competition-based</p>
                        </div>
                        <div class="component-item">
                            <h7>Pricing Strategies</h7>
                            <p>Skimming, penetration, psychological, promotional</p>
                        </div>
                        <div class="component-item">
                            <h7>Price Adjustments</h7>
                            <p>Discounts, allowances, geographical pricing</p>
                        </div>
                    </div>
                    <div class="example-box">
                        <p><strong>Example:</strong> Starbucks uses premium pricing to reinforce quality image and maintain profit margins.</p>
                    </div>
                </div>
                
                <div class="concept-section">
                    <div class="concept-header">
                        <h6>3. Place (Distribution) Strategy</h6>
                        <span class="concept-badge">Access Strategy</span>
                    </div>
                    <div class="components-grid">
                        <div class="component-item">
                            <h7>Channel Types</h7>
                            <p>Direct, indirect, hybrid, multi-channel</p>
                        </div>
                        <div class="component-item">
                            <h7>Channel Design</h7>
                            <p>Length, breadth, exclusivity, intensity</p>
                        </div>
                        <div class="component-item">
                            <h7>Logistics Management</h7>
                            <p>Transportation, warehousing, inventory</p>
                        </div>
                        <div class="component-item">
                            <h7>Retail Strategy</h7>
                            <p>Store location, layout, atmosphere, service</p>
                        </div>
                    </div>
                    <div class="example-box">
                        <p><strong>Example:</strong> Amazon's extensive distribution network enables rapid delivery and customer convenience.</p>
                    </div>
                </div>
                
                <div class="concept-section">
                    <div class="concept-header">
                        <h6>4. Promotion Strategy</h6>
                        <span class="concept-badge">Communication Mix</span>
                    </div>
                    <div class="components-grid">
                        <div class="component-item">
                            <h7>Advertising</h7>
                            <p>Mass media, digital, outdoor, print</p>
                        </div>
                        <div class="component-item">
                            <h7>Sales Promotion</h7>
                            <p>Discounts, coupons, contests, samples</p>
                        </div>
                        <div class="component-item">
                            <h7>Public Relations</h7>
                            <p>Press releases, events, sponsorships</p>
                        </div>
                        <div class="component-item">
                            <h7>Personal Selling</h7>
                            <p>Sales force, presentations, negotiations</p>
                        </div>
                    </div>
                    <div class="example-box">
                        <p><strong>Example:</strong> Coca-Cola's "Share a Coke" campaign integrated multiple promotional tools for maximum impact.</p>
                    </div>
                </div>
            </div>
            
            <div class="practical-application">
                <h5>Strategic Integration of 4Ps</h5>
                <div class="case-study-box">
                    <div class="case-header">
                        <h6>Integration Principles</h6>
                        <span class="case-badge">Strategic Alignment</span>
                    </div>
                    <div class="case-challenge">
                        <h7>Consistency Challenge</h7>
                        <p>All 4Ps must work together to create unified customer experience and brand positioning.</p>
                    </div>
                    <div class="case-solution">
                        <h7>Integration Solution</h7>
                        <p>Ensure product quality matches premium pricing, distribution channels reach target market, and promotion reinforces value proposition.</p>
                    </div>
                    <div class="case-strategies">
                        <h7>Strategic Considerations</h7>
                        <div class="strategy-list">
                            <div class="strategy-item">
                                <div class="strategy-icon">1</div>
                                <p>Target market alignment across all elements</p>
                            </div>
                            <div class="strategy-item">
                                <div class="strategy-icon">2</div>
                                <p>Competitive differentiation through unique combination</p>
                            </div>
                            <div class="strategy-item">
                                <div class="strategy-icon">3</div>
                                <p>Resource allocation based on strategic priorities</p>
                            </div>
                            <div class="strategy-item">
                                <div class="strategy-icon">4</div>
                                <p>Continuous monitoring and adjustment</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    {
        id: 6,
        title: "Lecture 7: Product Strategy and Brand Management",
        titleEn: "Lecture 7: Product Strategy and Brand Management",
        topics: ["product strategy", "brand management", "brand equity", "product lifecycle", "brand positioning", "brand identity", "product development"],
        description: "Strategic product development and comprehensive brand management approaches",
        descriptionEn: "Strategic product development and comprehensive brand management approaches",
        content: `
            <div class="lecture-overview">
                <div class="concept-box">
                    <h4>Product Strategy Overview</h4>
                    <div class="definition-card">
                        <h5>What is Product Strategy?</h5>
                        <div class="definition-content">
                            <p><strong>Product Strategy Definition:</strong> The high-level plan for product development and management that aligns with overall business objectives and market needs.</p>
                            <div class="key-points">
                                <span class="badge bg-primary">Market Alignment</span>
                                <span class="badge bg-success">Competitive Advantage</span>
                                <span class="badge bg-warning">Customer Value</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="concepts-analysis">
                <h5>Product Strategy Components</h5>
                
                <div class="concept-section">
                    <div class="concept-header">
                        <h6>Product Portfolio Management</h6>
                        <span class="concept-badge">Strategic Planning</span>
                    </div>
                    <div class="components-grid">
                        <div class="component-item">
                            <h7>Product Mix Width</h7>
                            <p>Number of different product lines offered</p>
                        </div>
                        <div class="component-item">
                            <h7>Product Line Depth</h7>
                            <p>Variations within each product line</p>
                        </div>
                        <div class="component-item">
                            <h7>Product Consistency</h7>
                            <p>How related products are in end use</p>
                        </div>
                        <div class="component-item">
                            <h7>Product Portfolio Analysis</h7>
                            <p>BCG matrix, GE matrix, product mapping</p>
                        </div>
                    </div>
                </div>
                
                <div class="concept-section">
                    <div class="concept-header">
                        <h6>Product Development Process</h6>
                        <span class="concept-badge">Innovation Management</span>
                    </div>
                    <div class="planning-steps">
                        <div class="step-item">
                            <div class="step-number">1</div>
                            <div class="step-content">
                                <h7>Idea Generation</h7>
                                <p>Market research, customer feedback, competitor analysis</p>
                            </div>
                        </div>
                        <div class="step-item">
                            <div class="step-number">2</div>
                            <div class="step-content">
                                <h7>Concept Development</h7>
                                <p>Concept testing, feasibility analysis, market validation</p>
                            </div>
                        </div>
                        <div class="step-item">
                            <div class="step-number">3</div>
                            <div class="step-content">
                                <h7>Product Design</h7>
                                <p>Technical specifications, prototype development</p>
                            </div>
                        </div>
                        <div class="step-item">
                            <div class="step-number">4</div>
                            <div class="step-content">
                                <h7>Market Testing</h7>
                                <p>Beta testing, focus groups, pilot programs</p>
                            </div>
                        </div>
                        <div class="step-item">
                            <div class="step-number">5</div>
                            <div class="step-content">
                                <h7>Commercialization</h7>
                                <p>Launch strategy, marketing mix, distribution</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="concept-section">
                    <div class="concept-header">
                        <h6>Product Lifecycle Management</h6>
                        <span class="concept-badge">Strategic Timing</span>
                    </div>
                    <div class="process-flow">
                        <div class="process-phase">
                            <div class="phase-header">Introduction</div>
                            <p>Low sales, high costs, minimal competition</p>
                        </div>
                        <div class="process-arrow">></div>
                        <div class="process-phase">
                            <div class="phase-header">Growth</div>
                            <p>Rapid sales, increasing profits, market expansion</p>
                        </div>
                        <div class="process-arrow">></div>
                        <div class="process-phase">
                            <div class="phase-header">Maturity</div>
                            <p>Peak sales, stable profits, intense competition</p>
                        </div>
                        <div class="process-arrow">></div>
                        <div class="process-phase">
                            <div class="phase-header">Decline</div>
                            <p>Falling sales, decreasing profits, market exit</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="concepts-analysis">
                <h5>Brand Management Strategy</h5>
                
                <div class="concept-section">
                    <div class="concept-header">
                        <h6>Brand Equity Components</h6>
                        <span class="concept-badge">Brand Value</span>
                    </div>
                    <div class="components-grid">
                        <div class="component-item">
                            <h7>Brand Awareness</h7>
                            <p>Recognition, recall, top-of-mind awareness</p>
                        </div>
                        <div class="component-item">
                            <h7>Brand Associations</h7>
                            <p>Perceived quality, brand personality, imagery</p>
                        </div>
                        <div class="component-item">
                            <h7>Brand Loyalty</h7>
                            <p>Behavioral loyalty, attitudinal loyalty</p>
                        </div>
                        <div class="component-item">
                            <h7>Brand Assets</h7>
                            <p>Name, logo, slogans, trademarks, patents</p>
                        </div>
                    </div>
                </div>
                
                <div class="concept-section">
                    <div class="concept-header">
                        <h6>Brand Positioning Strategy</h6>
                        <span class="concept-badge">Competitive Advantage</span>
                    </div>
                    <div class="components-grid">
                        <div class="component-item">
                            <h7>Positioning Statement</h7>
                            <p>Target audience, frame of reference, point of difference</p>
                        </div>
                        <div class="component-item">
                            <h7>Value Proposition</h7>
                            <p>Functional benefits, emotional benefits, self-expressive benefits</p>
                        </div>
                        <div class="component-item">
                            <h7>Brand Architecture</h7>
                            <p>Branded house, house of brands, endorsed brands</p>
                        </div>
                        <div class="component-item">
                            <h7>Brand Extension</h7>
                            <p>Line extensions, category extensions, brand stretching</p>
                        </div>
                    </div>
                </div>
                
                <div class="concept-section">
                    <div class="concept-header">
                        <h6>Brand Identity System</h6>
                        <span class="concept-badge">Visual Identity</span>
                    </div>
                    <div class="components-grid">
                        <div class="component-item">
                            <h7>Brand Name</h7>
                            <p>Memorable, meaningful, likable, transferable</p>
                        </div>
                        <div class="component-item">
                            <h7>Logo Design</h7>
                            <p>Simplicity, memorability, appropriateness, versatility</p>
                        </div>
                        <div class="component-item">
                            <h7>Color Palette</h7>
                            <p>Psychological impact, cultural associations, differentiation</p>
                        </div>
                        <div class="component-item">
                            <h7>Typography</h7>
                            <p>Readability, personality, consistency, hierarchy</p>
                        </div>
                    </div>
            <div class="lecture-overview">
                <div class="concept-box">
                    <h4>Pricing Strategy Overview</h4>
                    <div class="definition-card">
                        <h5>What is Pricing Strategy?</h5>
                        <div class="definition-content">
                            <p><strong>Pricing Strategy Definition:</strong> The approach used to set prices for products and services, considering costs, competition, value perception, and market conditions.</p>
                            <div class="key-points">
                                <span class="badge bg-primary">Revenue Optimization</span>
                                <span class="badge bg-success">Market Positioning</span>
                                <span class="badge bg-warning">Customer Perception</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="concepts-analysis">
                <h5>Pricing Strategy Foundations</h5>
                
                <div class="concept-section">
                    <div class="concept-header">
                        <h6>Price Determination Factors</h6>
                        <span class="concept-badge">Strategic Considerations</span>
                    </div>
                    <div class="components-grid">
                        <div class="component-item">
                            <h7>Internal Factors</h7>
                            <p>Production costs, marketing objectives, product lifecycle</p>
                        </div>
                        <div class="component-item">
                            <h7>External Factors</h7>
                            <p>Market demand, competition, economic conditions</p>
                        </div>
                        <div class="component-item">
                            <h7>Customer Factors</h7>
                            <p>Price sensitivity, perceived value, purchasing power</p>
                        </div>
                        <div class="component-item">
                            <h7>Strategic Factors</h7>
                            <p>Market positioning, brand image, competitive strategy</p>
                        </div>
                    </div>
                </div>
                
                <div class="concept-section">
                    <div class="concept-header">
                        <h6>Pricing Methods</h6>
                        <span class="concept-badge">Approach Selection</span>
                    </div>
                    <div class="components-grid">
                        <div class="component-item">
                            <h7>Cost-Plus Pricing</h7>
                            <p>Unit cost + desired profit margin = selling price</p>
                        </div>
                        <div class="component-item">
                            <h7>Value-Based Pricing</h7>
                            <p>Price based on perceived customer value</p>
                        </div>
                        <div class="component-item">
                            <h7>Competition-Based Pricing</h7>
                            <p>Price relative to competitor prices</p>
                        </div>
                        <div class="component-item">
                            <h7>Target Return Pricing</h7>
                            <p>Price to achieve specific ROI target</p>
                        </div>
                    </div>
                </div>
                
                <div class="concept-section">
                    <div class="concept-header">
                        <h6>Price Elasticity of Demand</h6>
                        <span class="concept-badge">Demand Analysis</span>
                    </div>
                    <div class="components-grid">
                        <div class="component-item">
                            <h7>Elastic Demand</h7>
                            <p>Price changes significantly affect quantity demanded</p>
                        </div>
                        <div class="component-item">
                            <h7>Inelastic Demand</h7>
                            <p>Price changes have minimal effect on quantity demanded</p>
                        </div>
                        <div class="component-item">
                            <h7>Cross-Elasticity</h7>
                            <p>Price changes of one product affect demand for another</p>
                        </div>
                        <div class="component-item">
                            <h7>Income Elasticity</h7>
                            <p>Income changes affect product demand</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="concepts-analysis">
                <h5>Strategic Pricing Approaches</h5>
                
                <div class="concept-section">
                    <div class="concept-header">
                        <h6>Market Entry Pricing</h6>
                        <span class="concept-badge">Launch Strategy</span>
                    </div>
                    <div class="components-grid">
                        <div class="component-item">
                            <h7>Price Skimming</h7>
                            <p>High initial price, gradually lower over time</p>
                        </div>
                        <div class="component-item">
                            <h7>Market Penetration</h7>
                            <p>Low initial price to gain market share quickly</p>
                        </div>
                        <div class="component-item">
                            <h7>Prestige Pricing</h7>
                            <p>High price to signal quality and exclusivity</p>
                        </div>
                        <div class="component-item">
                            <h7>Captive Pricing</h7>
                            <p>Low price for main product, high for accessories</p>
                        </div>
                    </div>
                </div>
                
                <div class="concept-section">
                    <div class="concept-header">
                        <h6>Psychological Pricing</h6>
                        <span class="concept-badge">Consumer Behavior</span>
                    </div>
                    <div class="components-grid">
                        <div class="component-item">
                            <h7>Charm Pricing</h7>
                            <p>Prices ending in 9 or 99 ($9.99 vs $10.00)</p>
                        </div>
                        <div class="component-item">
                            <h7>Reference Pricing</h7>
                            <p>Using comparison prices to influence perception</p>
                        </div>
                        <div class="component-item">
                            <h7>Bundling Pricing</h7>
                            <p>Combined price lower than individual items</p>
                        </div>
                        <div class="component-item">
                            <h7>Decoy Pricing</h7>
                            <p>Third option to make target option more attractive</p>
                        </div>
                    </div>
                </div>
                
                <div class="concept-section">
                    <div class="concept-header">
                        <h6>Dynamic Pricing Strategies</h6>
                        <span class="concept-badge">Real-time Adjustment</span>
                    </div>
                    <div class="components-grid">
                        <div class="component-item">
                            <h7>Time-Based Pricing</h7>
                            <p>Prices vary by time of day, day, season</p>
                        </div>
                        <div class="component-item">
                            <h7>Demand-Based Pricing</h7>
                            <p>Prices adjust based on real-time demand</p>
                        </div>
                        <div class="component-item">
                            <h7>Segment-Based Pricing</h7>
                            <p>Different prices for different customer segments</p>
                        </div>
                        <div class="component-item">
                            <h7>Algorithmic Pricing</h7>
                            <p>AI-driven price optimization</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="practical-application">
                <h5>Revenue Management Implementation</h5>
                <div class="case-study-box">
                    <div class="case-header">
                        <h6>Revenue Optimization Framework</h6>
                        <span class="case-badge">Strategic Implementation</span>
                    </div>
                    <div class="case-strategies">
                        <h7>Key Revenue Management Strategies</h7>
                        <div class="strategy-list">
                            <div class="strategy-item">
                                <div class="strategy-icon">1</div>
                                <p>Implement price discrimination where appropriate</p>
                            </div>
                            <div class="strategy-item">
                                <div class="strategy-icon">2</div>
                                <p>Use price optimization algorithms for dynamic markets</p>
                            </div>
                            <div class="strategy-item">
                                <div class="strategy-icon">3</div>
                                <p>Monitor competitor pricing and market conditions</p>
                            </div>
                            <div class="strategy-item">
                                <div class="strategy-icon">4</div>
                                <p>Test different price points through A/B testing</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    {
        id: 8,
        title: "Lecture 9: Distribution Strategy and Supply Chain Management",
        titleEn: "Lecture 9: Distribution Strategy and Supply Chain Management",
        topics: ["distribution strategy", "supply chain management", "channel management", "logistics", "retail strategy", "e-commerce", "distribution channels"],
        description: "Strategic distribution planning and supply chain optimization",
        descriptionEn: "Strategic distribution planning and supply chain optimization",
        content: `
            <div class="lecture-overview">
                <div class="concept-box">
                    <h4>Distribution Strategy Overview</h4>
                    <div class="definition-card">
                        <h5>What is Distribution Strategy?</h5>
                        <div class="definition-content">
                            <p><strong>Distribution Strategy Definition:</strong> The plan for making products available to target customers through appropriate channels, locations, and timing.</p>
                            <div class="key-points">
                                <span class="badge bg-primary">Channel Management</span>
                                <span class="badge bg-success">Logistics Optimization</span>
                                <span class="badge bg-warning">Customer Access</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="concepts-analysis">
                <h5>Distribution Channel Types</h5>
                
                <div class="concept-section">
                    <div class="concept-header">
                        <h6>Channel Structure Options</h6>
                        <span class="concept-badge">Channel Design</span>
                    </div>
                    <div class="components-grid">
                        <div class="component-item">
                            <h7>Direct Channels</h7>
                            <p>Manufacturer sells directly to end customers</p>
                        </div>
                        <div class="component-item">
                            <h7>Indirect Channels</h7>
                            <p>Manufacturer uses intermediaries to reach customers</p>
                        </div>
                        <div class="component-item">
                            <h7>Hybrid Channels</h7>
                            <p>Combination of direct and indirect channels</p>
                        </div>
                        <div class="component-item">
                            <h7>Digital Channels</h7>
                            <p>Online platforms, mobile apps, social commerce</p>
                        </div>
                    </div>
                </div>
                
                <div class="concept-section">
                    <div class="concept-header">
                        <h6>Channel Intensity Strategies</h6>
                        <span class="concept-badge">Market Coverage</span>
                    </div>
                    <div class="components-grid">
                        <div class="component-item">
                            <h7>Intensive Distribution</h7>
                            <p>Products available in as many outlets as possible</p>
                        </div>
                        <div class="component-item">
                            <h7>Selective Distribution</h7>
                            <p>Limited number of selected outlets</p>
                        </div>
                        <div class="component-item">
                            <h7>Exclusive Distribution</h7>
                            <p>Single outlet in specific geographic area</p>
                        </div>
                        <div class="component-item">
                            <h7>Omnichannel Distribution</h7>
                            <p>Seamless integration across all channels</p>
                        </div>
                    </div>
                </div>
                
                <div class="concept-section">
                    <div class="concept-header">
                        <h6>Channel Member Roles</h6>
                        <span class="concept-badge">Partner Management</span>
                    </div>
                    <div class="components-grid">
                        <div class="component-item">
                            <h7>Wholesalers</h7>
                            <p>Bulk purchasing, inventory management, credit extension</p>
                        </div>
                        <div class="component-item">
                            <h7>Retailers</h7>
                            <p>Final sales to consumers, store operations, customer service</p>
                        </div>
                        <div class="component-item">
                            <h7>Distributors</h7>
                            <p>Market coverage, local expertise, relationship management</p>
                        </div>
                        <div class="component-item">
                            <h7>Agents/Brokers</h7>
                            <p>Market facilitation, negotiation, commission-based sales</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="concepts-analysis">
                <h5>Supply Chain Management</h5>
                
                <div class="concept-section">
                    <div class="concept-header">
                        <h6>Supply Chain Components</h6>
                        <span class="concept-badge">Integrated System</span>
                    </div>
                    <div class="components-grid">
                        <div class="component-item">
                            <h7>Procurement</h7>
                            <p>Raw material sourcing, supplier relationships, quality control</p>
                        </div>
                        <div class="component-item">
                            <h7>Production</h7>
                            <p>Manufacturing processes, capacity planning, quality assurance</p>
                        </div>
                        <div class="component-item">
                            <h7>Inventory Management</h7>
                            <p>Stock levels, reorder points, safety stock, JIT systems</p>
                        </div>
                        <div class="component-item">
                            <h7>Logistics</h7>
                            <p>Transportation, warehousing, order fulfillment, delivery</p>
                        </div>
                    </div>
                </div>
                
                <div class="concept-section">
                    <div class="concept-header">
                        <h6>Logistics Management</h6>
                        <span class="concept-badge">Operational Excellence</span>
                    </div>
                    <div class="components-grid">
                        <div class="component-item">
                            <h7>Transportation</h7>
                            <p>Mode selection, routing optimization, cost management</p>
                        </div>
                        <div class="component-item">
                            <h7>Warehousing</h7>
                            <p>Storage systems, layout optimization, automation</p>
                        </div>
                        <div class="component-item">
                            <h7>Order Processing</h7>
                            <p>Order fulfillment, picking, packing, shipping</p>
                        </div>
                        <div class="component-item">
                            <h7>Reverse Logistics</h7>
                            <p>Returns management, recycling, product disposal</p>
                        </div>
                    </div>
                </div>
                
                <div class="concept-section">
                    <div class="concept-header">
                        <h6>Retail Strategy Evolution</h6>
                        <span class="concept-badge">Modern Retailing</span>
                    </div>
                    <div class="components-grid">
                        <div class="component-item">
                            <h7>Store Format Strategy</h7>
                            <p>Supermarkets, specialty stores, discount stores, convenience</p>
                        </div>
                        <div class="component-item">
                            <h7>Location Strategy</h7>
                            <p>Site selection, trade area analysis, clustering</p>
                        </div>
                        <div class="component-item">
                            <h7>Merchandising Strategy</h7>
                            <p>Product assortment, visual merchandising, category management</p>
                        </div>
                        <div class="component-item">
                            <h7>Customer Experience</h7>
                            <p>Store atmosphere, service quality, omnichannel integration</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="practical-application">
                <h5>Digital Distribution Transformation</h5>
                <div class="case-study-box">
                    <div class="case-header">
                        <h6>E-commerce Integration</h6>
                        <span class="case-badge">Digital Strategy</span>
                    </div>
                    <div class="case-strategies">
                        <h7>Key Digital Distribution Elements</h7>
                        <div class="strategy-list">
                            <div class="strategy-item">
                                <div class="strategy-icon">1</div>
                                <p>Develop omnichannel customer experience</p>
                            </div>
                            <div class="strategy-item">
                                <div class="strategy-icon">2</div>
                                <p>Implement real-time inventory management</p>
                            </div>
                            <div class="strategy-item">
                                <div class="strategy-icon">3</div>
                                <p>Optimize last-mile delivery solutions</p>
                            </div>
                            <div class="strategy-item">
                                <div class="strategy-icon">4</div>
                                <p>Leverage data analytics for demand forecasting</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    {
        id: 9,
        title: "Lecture 10: Promotion Strategy and Integrated Marketing Communications",
        titleEn: "Lecture 10: Promotion Strategy and Integrated Marketing Communications",
        topics: ["promotion strategy", "IMC", "advertising", "sales promotion", "public relations", "direct marketing", "digital marketing", "social media"],
        description: "Comprehensive promotional strategies and integrated marketing communications",
        descriptionEn: "Comprehensive promotional strategies and integrated marketing communications",
        content: `
            <div class="lecture-overview">
                <div class="concept-box">
                    <h4>Promotion Strategy Overview</h4>
                    <div class="definition-card">
                        <h5>What is Promotion Strategy?</h5>
                        <div class="definition-content">
                            <p><strong>Promotion Strategy Definition:</strong> The coordinated communication activities used to inform, persuade, and remind target customers about products and services.</p>
                            <div class="key-points">
                                <span class="badge bg-primary">Communication Integration</span>
                                <span class="badge bg-success">Brand Messaging</span>
                                <span class="badge bg-warning">Customer Engagement</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="concepts-analysis">
                <h5>Integrated Marketing Communications (IMC)</h5>
                
                <div class="concept-section">
                    <div class="concept-header">
                        <h6>IMC Principles</h6>
                        <span class="concept-badge">Strategic Integration</span>
                    </div>
                    <div class="components-grid">
                        <div class="component-item">
                            <h7>Consistent Messaging</h7>
                            <p>Unified brand message across all channels</p>
                        </div>
                        <div class="component-item">
                            <h7>Customer-Centric Approach</h7>
                            <p>Focus on customer needs and preferences</p>
                        </div>
                        <div class="component-item">
                            <h7>Channel Integration</h7>
                            <p>Seamless experience across touchpoints</p>
                        </div>
                        <div class="component-item">
                            <h7>Data-Driven Decisions</h7>
                            <p>Analytics and measurement for optimization</p>
                        </div>
                    </div>
                </div>
                
                <div class="concept-section">
                    <div class="concept-header">
                        <h6>Communication Process</h6>
                        <span class="concept-badge">Message Flow</span>
                    </div>
                    <div class="process-flow">
                        <div class="process-phase">
                            <div class="phase-header">Sender</div>
                            <p>Message source, encoding process</p>
                        </div>
                        <div class="process-arrow">></div>
                        <div class="process-phase">
                            <div class="phase-header">Message</div>
                            <p>Content, structure, format</p>
                        </div>
                        <div class="process-arrow">></div>
                        <div class="process-phase">
                            <div class="phase-header">Channel</div>
                            <p>Medium selection, transmission</p>
                        </div>
                        <div class="process-arrow">></div>
                        <div class="process-phase">
                            <div class="phase-header">Receiver</div>
                            <p>Decoding, response, feedback</p>
                        </div>
                    </div>
                </div>
                
                <div class="concept-section">
                    <div class="concept-header">
                        <h6>Promotional Mix Elements</h6>
                        <span class="concept-badge">Communication Tools</span>
                    </div>
                    <div class="components-grid">
                        <div class="component-item">
                            <h7>Advertising</h7>
                            <p>Mass media, digital advertising, creative development</p>
                        </div>
                        <div class="component-item">
                            <h7>Sales Promotion</h7>
                            <p>Short-term incentives, discounts, coupons, contests</p>
                        </div>
                        <div class="component-item">
                            <h7>Public Relations</h7>
                            <p>Media relations, events, sponsorships, crisis management</p>
                        </div>
                        <div class="component-item">
                            <h7>Direct Marketing</h7>
                            <p>Email, direct mail, telemarketing, database marketing</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="concepts-analysis">
                <h5>Advertising Strategy</h5>
                
                <div class="concept-section">
                    <div class="concept-header">
                        <h6>Advertising Objectives</h6>
                        <span class="concept-badge">Strategic Goals</span>
                    </div>
                    <div class="components-grid">
                        <div class="component-item">
                            <h7>Informative Advertising</h7>
                            <p>Build brand awareness, educate customers</p>
                        </div>
                        <div class="component-item">
                            <h7>Persuasive Advertising</h7>
                            <p>Create preference, encourage purchase</p>
                        </div>
                        <div class="component-item">
                            <h7>Reminder Advertising</h7>
                            <p>Maintain brand presence, reinforce loyalty</p>
                        </div>
                        <div class="component-item">
                            <h7>Reinforcement Advertising</h7>
                            <p>Convince current customers, reduce post-purchase anxiety</p>
                        </div>
                    </div>
                </div>
                
                <div class="concept-section">
                    <div class="concept-header">
                        <h6>Media Strategy</h6>
                        <span class="concept-badge">Channel Selection</span>
                    </div>
                    <div class="components-grid">
                        <div class="component-item">
                            <h7>Traditional Media</h7>
                            <p>TV, radio, print, outdoor advertising</p>
                        </div>
                        <div class="component-item">
                            <h7>Digital Media</h7>
                            <p>Social media, search engines, display advertising</p>
                        </div>
                        <div class="component-item">
                            <h7>Mobile Marketing</h7>
                            <p>Apps, SMS, mobile web, location-based advertising</p>
                        </div>
                        <div class="component-item">
                            <h7>Content Marketing</h7>
                            <p>Blogs, videos, podcasts, infographics</p>
                        </div>
                    </div>
                </div>
                
                <div class="concept-section">
                    <div class="concept-header">
                        <h6>Creative Strategy</h6>
                        <span class="concept-badge">Message Development</span>
                    </div>
                    <div class="components-grid">
                        <div class="component-item">
                            <h7>Big Idea</h7>
                            <p>Central creative concept, unique selling proposition</p>
                        </div>
                        <div class="component-item">
                            <h7>Appeal Types</h7>
                            <p>Rational, emotional, moral, social appeals</p>
                        </div>
                        <div class="component-item">
                            <h7>Execution Styles</h7>
                            <p>Slice of life, lifestyle, fantasy, testimonial</p>
                        </div>
                        <div class="component-item">
                            <h7>Brand Storytelling</h7>
                            <p>Narrative techniques, emotional connection</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="concepts-analysis">
                <h5>Digital Marketing Revolution</h5>
                
                <div class="concept-section">
                    <div class="concept-header">
                        <h6>Social Media Marketing</h6>
                        <span class="concept-badge">Community Building</span>
                    </div>
                    <div class="components-grid">
                        <div class="component-item">
                            <h7>Platform Strategy</h7>
                            <p>Facebook, Instagram, Twitter, LinkedIn, TikTok</p>
                        </div>
                        <div class="component-item">
                            <h7>Content Strategy</h7>
                            <p>Video content, user-generated content, influencer partnerships</p>
                        </div>
                        <div class="component-item">
                            <h7>Engagement Tactics</h7>
                            <p>Contests, polls, live streaming, community management</p>
                        </div>
                        <div class="component-item">
                            <h7>Analytics & Measurement</h7>
                            <p>Reach, engagement, conversion metrics, ROI tracking</p>
                        </div>
                    </div>
                </div>
                
                <div class="concept-section">
                    <div class="concept-header">
                        <h6>Performance Marketing</h6>
                        <span class="concept-badge">Data-Driven</span>
                    </div>
                    <div class="components-grid">
                        <div class="component-item">
                            <h7>Search Engine Marketing</h7>
                            <p>SEO, PPC, search advertising, local search</p>
                        </div>
                        <div class="component-item">
                            <h7>Email Marketing</h7>
                            <p>Automation, personalization, segmentation, A/B testing</p>
                        </div>
                        <div class="component-item">
                            <h7>Affiliate Marketing</h7>
                            <p>Partner programs, commission structures, tracking</p>
                        </div>
                        <div class="component-item">
                            <h7>Influencer Marketing</h7>
                            <p>Micro-influencers, brand ambassadors, content partnerships</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="practical-application">
                <h5>IMC Campaign Development</h5>
                <div class="case-study-box">
                    <div class="case-header">
                        <h6>Campaign Planning Process</h6>
                        <span class="case-badge">Strategic Implementation</span>
                    </div>
                    <div class="planning-steps">
                        <div class="step-item">
                            <div class="step-number">1</div>
                            <div class="step-content">
                                <h7>Situation Analysis</h7>
                                <p>Market research, competitive analysis, SWOT assessment</p>
                            </div>
                        </div>
                        <div class="step-item">
                            <div class="step-number">2</div>
                            <div class="step-content">
                                <h7>Objective Setting</h7>
                                <p>SMART goals, KPI definition, budget allocation</p>
                            </div>
                        </div>
                        <div class="step-item">
                            <div class="step-number">3</div>
                            <div class="step-content">
                                <h7>Strategy Development</h7>
                                <p>Target audience, positioning, messaging strategy</p>
                            </div>
                        </div>
                        <div class="step-item">
                            <div class="step-number">4</div>
                            <div class="step-content">
                                <h7>Tactical Implementation</h7>
                                <p>Media planning, creative development, channel coordination</p>
                            </div>
                        </div>
                        <div class="step-item">
                            <div class="step-number">5</div>
                            <div class="step-content">
                                <h7>Measurement & Optimization</h7>
                                <p>Performance tracking, analysis, continuous improvement</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `
    }
];

// Case studies data
const caseStudies = {
    1: {
        title: "Case Study 1: Toms Shoes Social Enterprise Marketing",
        content: `
            <h4>Toms Shoes Social Enterprise Model</h4>
            <p>Toms Shoes uses the "buy one donate one" business model, donating one pair of shoes for each pair sold.</p>
            
            <h5>Background:</h5>
            <ul>
                <li>Founded in 2006 by Blake Mycoskie</li>
                <li>Discovered children's lack of shoes in Argentina</li>
                <li>Combined business with social mission</li>
            </ul>
            
            <h5>Marketing Strategy Analysis:</h5>
            <ul>
                <li><strong>Positioning Strategy:</strong> Social responsibility brand image</li>
                <li><strong>Target Market:</strong> Socially conscious consumers</li>
                <li><strong>Value Proposition:</strong> Purchase as a good deed</li>
                <li><strong>Brand Story:</strong> Authentic founder story</li>
            </ul>
        `,
        questions: [
            "How does Toms Shoes's 'buy one donate one' model reflect cause-related marketing?",
            "Discuss the impact of this business model on brand loyalty.",
            "Evaluate Toms Shoes's positioning strategy in market segmentation."
        ],
        suggestedAnswers: {
            0: {
                answer: `Toms Shoes's 'buy one donate one' model is a classic example of cause-related marketing with the following characteristics:

1. **Direct Cause-Effect Relationship**: Each purchase directly triggers a social benefit (donating shoes)
2. **Emotional Connection**: Consumers feel they are contributing to solving social problems
3. **Brand Differentiation**: Differentiates from competitors through social responsibility
4. **Sustainable Impact**: Creates long-term social value while maintaining business profitability
5. **Storytelling**: Uses the founder's story to enhance brand authenticity and emotional appeal

This model successfully combines commercial objectives with social responsibility, creating a win-win situation for both business and society.`,
                keywords: ["cause-related marketing", "social responsibility", "emotional connection", "brand differentiation", "sustainable impact"],
                maxScore: 20,
                scoringCriteria: {
                    "Understanding cause-related marketing": 5,
                    "Analysis of business model": 5,
                    "Social impact assessment": 5,
                    "Strategic implications": 5
                }
            },
            1: {
                answer: `The impact of Toms Shoes's business model on brand loyalty includes:

1. **Value Alignment**: Consumers who value social responsibility feel aligned with the brand
2. **Emotional Bond**: The charitable aspect creates emotional attachment beyond product functionality
3. **Brand Advocacy**: Satisfied customers become brand ambassadors, sharing the social mission
4. **Repeat Purchases**: Consumers may purchase more to increase social impact
5. **Community Building**: Creates a community of socially conscious consumers
6. **Trust Building**: Transparency in social impact builds consumer trust
7. **Differentiated Experience**: Purchase experience is more meaningful than traditional retail

However, challenges include:
- Maintaining authenticity as the brand scales
- Competition from similar social enterprise models
- Balancing social mission with business growth`,
                keywords: ["brand loyalty", "emotional connection", "value alignment", "brand advocacy", "repeat purchases"],
                maxScore: 20,
                scoringCriteria: {
                    "Impact on loyalty": 6,
                    "Emotional factors": 5,
                    "Business implications": 5,
                    "Challenges/limitations": 4
                }
            },
            2: {
                answer: `Toms Shoes's positioning strategy in market segmentation:

**Target Market Segmentation:**
- **Demographic**: Young, educated, middle to upper-income consumers
- **Psychographic**: Socially conscious, value-driven consumers
- **Behavioral**: Consumers who prioritize ethical consumption
- **Geographic**: Initially urban areas, expanded globally

**Positioning Strategy:**
1. **Social Enterprise Positioning**: Positioned as a brand that makes a difference
2. **Ethical Consumerism**: Appeals to consumers seeking purpose-driven purchases
3. **Premium Casual**: Higher price point justified by social mission
4. **Story-Driven Brand**: Uses narrative to differentiate from competitors

**Competitive Advantage:**
- First-mover advantage in "buy one donate one" model
- Strong brand authenticity and emotional appeal
- Clear differentiation from traditional footwear companies
- Social proof through visible impact

**Potential Limitations:**
- Higher price point may limit market reach
- Dependence on social mission narrative
- Vulnerability to "cause fatigue" among consumers`,
                keywords: ["market segmentation", "positioning strategy", "target market", "social enterprise", "competitive advantage"],
                maxScore: 20,
                scoringCriteria: {
                    "Segmentation analysis": 6,
                    "Positioning strategy": 6,
                    "Competitive advantage": 4,
                    "Critical evaluation": 4
                }
            }
        }
    },
    2: {
        title: "Case Study 2: Apple Product Positioning Strategy",
        content: `
            <h4>Apple High-End Market Positioning</h4>
            <p>Apple successfully positions itself as a leader in the high-end technology market through innovative design and superior user experience.</p>
            
            <h5>Positioning Elements:</h5>
            <ul>
                <li><strong>Product Design:</strong> Simple, elegant industrial design</li>
                <li><strong>Brand Image:</strong> Innovative, high-end, fashionable</li>
                <li><strong>Pricing Strategy:</strong> High-end pricing reflecting quality</li>
                <li><strong>Channel Strategy:</strong> Direct stores + authorized dealers</li>
                <li><strong>Promotion Strategy:</strong> Mystery marketing, product launches</li>
            </ul>
            
            <h5>Success Factors:</h5>
            <ul>
                <li>Continuous innovation capability</li>
                <li>Strong brand loyalty</li>
                <li>Complete ecosystem</li>
                <li>Superior user experience</li>
            </ul>
        `,
        questions: [
            "Analyze Apple's positioning strategy in the high-end market.",
            "Discuss how Apple's ecosystem strategy contributes to its competitive advantage.",
            "Evaluate Apple's pricing strategy and its impact on brand perception."
        ]
    },
    3: {
        title: "Case Study 3: Netflix's Digital Marketing Transformation",
        content: `
            <h4>Netflix's Digital Marketing Transformation</h4>
            <p>Netflix successfully transformed from a traditional DVD rental service to a global streaming platform leader.</p>
            
            <h5>Transformation Process:</h5>
            <ul>
                <li><strong>Business Model Innovation:</strong> From DVD rental to streaming subscription</li>
                <li><strong>Technology Investment:</strong> Massive investment in streaming technology</li>
                <li><strong>Content Strategy:</strong> Original content production and licensing</li>
                <li><strong>Global Expansion:</strong> Expansion into international markets</li>
            </ul>
            
            <h5>Key Success Factors:</h5>
            <ul>
                <li>First-mover advantage in streaming</li>
                <li>Data-driven content recommendations</li>
                <li>Strong brand recognition</li>
                <li>Flexible pricing strategies</li>
            </ul>
        `,
        questions: [
            "Analyze Netflix's digital transformation strategy.",
            "Discuss how data analytics contributes to Netflix's competitive advantage.",
            "Evaluate Netflix's content strategy and its impact on market position."
        ]
    }
};

// Translation dictionary is now handled in translations.js

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
    loadUserProgress();
    initializeEventListeners();
    updateLanguageDisplay();
    
    // Apply translations to ensure correct language is displayed
    if (typeof applyTranslations === 'function') {
        setTimeout(() => {
            applyTranslations();
        }, 100);
    }
    
    // Ensure currentLangText is properly set
    const currentLangText = document.getElementById('currentLangText');
    if (currentLangText) {
        currentLangText.textContent = currentLanguage === 'zh' ? 'EN' : 'English';
    }
});

// Initialize event listeners
function initializeEventListeners() {
    // Navigation buttons - use data-section attributes
    document.querySelectorAll('[data-section]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const section = this.getAttribute('data-section');
            showSection(section);
        });
    });
    
    // Language toggle
    const langToggle = document.getElementById('lang-toggle');
    if (langToggle) {
        langToggle.addEventListener('click', toggleLanguage);
    }
    
    // Quiz buttons - check if they exist before adding listeners
    const startQuizBtn = document.getElementById('start-quiz-btn');
    if (startQuizBtn) {
        startQuizBtn.addEventListener('click', startQuiz);
    }
    
    const startTopicQuizBtn = document.getElementById('start-topic-quiz-btn');
    if (startTopicQuizBtn) {
        startTopicQuizBtn.addEventListener('click', startTopicQuiz);
    }
    
    const startLectureQuizBtn = document.getElementById('start-lecture-quiz-btn');
    if (startLectureQuizBtn) {
        startLectureQuizBtn.addEventListener('click', startLectureQuiz);
    }
    
    const startAdaptiveQuizBtn = document.getElementById('start-adaptive-quiz-btn');
    if (startAdaptiveQuizBtn) {
        startAdaptiveQuizBtn.addEventListener('click', startAdaptiveQuiz);
    }
}

// Show section
function showSection(sectionName) {
    // Hide all sections
    document.querySelectorAll('.content-section').forEach(section => {
        section.style.display = 'none';
    });
    
    // Show selected section
    const targetSection = document.getElementById(sectionName);
    if (targetSection) {
        targetSection.style.display = 'block';
        
        // Initialize section content
        switch(sectionName) {
            case 'study':
                loadLectures();
                break;
            case 'quiz':
                loadQuizOptions();
                break;
            case 'case':
                loadCaseStudies();
                break;
            case 'progress':
                updateProgressDisplay();
                break;
        }
        
        // Apply translations to maintain current language
        if (typeof applyTranslations === 'function') {
            setTimeout(() => {
                applyTranslations();
            }, 100); // Small delay to ensure content is loaded
        }
    }
}

// Load lectures
function loadLectures() {
    const lectureContainer = document.getElementById('lecture-list');
    if (!lectureContainer) return;
    
    lectureContainer.innerHTML = lectureData.map(lecture => `
        <div class="col-md-6 col-lg-4 mb-4">
            <div class="card lecture-card h-100" onclick="loadLecture(${lecture.id})">
                <div class="card-header">
                    <h5>${currentLanguage === 'en' && lecture.titleEn ? lecture.titleEn : lecture.title}</h5>
                </div>
                <div class="card-body">
                    <p>${currentLanguage === 'en' && lecture.descriptionEn ? lecture.descriptionEn : lecture.description}</p>
                    <div class="lecture-topics">
                        ${lecture.topics.map(topic => `<span class="badge bg-secondary me-1">${topic}</span>`).join(' ')}
                    </div>
                </div>
                <div class="card-footer">
                    <button class="btn btn-primary btn-sm">Start Learning</button>
                </div>
            </div>
        </div>
    `).join('');
}

// Clean up modal backdrops to prevent accumulation
function cleanupModalBackdrops() {
    // Remove all modal backdrops
    const backdrops = document.querySelectorAll('.modal-backdrop');
    backdrops.forEach(backdrop => {
        backdrop.remove();
    });
    
    // Remove modal-open class from body
    document.body.classList.remove('modal-open');
    
    // Reset body padding and overflow
    document.body.style.paddingRight = '';
    document.body.style.overflow = '';
}

// Load specific lecture
function loadLecture(lectureId) {
    const lecture = lectureData.find(l => l.id === lectureId);
    if (!lecture) return;
    
    // Clean up any existing modal backdrops
    cleanupModalBackdrops();
    
    // Use modal to display lecture content
    const modalTitle = document.getElementById('lectureModalTitle');
    const modalBody = document.getElementById('lectureModalBody');
    
    if (modalTitle && modalBody) {
        modalTitle.textContent = currentLanguage === 'en' && lecture.titleEn ? lecture.titleEn : lecture.title;
        modalTitle.setAttribute('data-lecture-id', lectureId);
        
        // Use language-specific content if available
        let lectureContent = lecture.content;
        if (currentLanguage === 'zh' && lecture.contentZh) {
            lectureContent = lecture.contentZh;
        } else if (currentLanguage === 'en' && lecture.contentEn) {
            lectureContent = lecture.contentEn;
        }
        
        modalBody.innerHTML = `
            <div class="lecture-content">
                <div class="lecture-header mb-3">
                    <div class="d-flex justify-content-between align-items-center">
                        <span class="badge bg-info">English</span>
                    </div>
                </div>
                <div class="lecture-body">
                    ${lectureContent}
                </div>
                <div class="lecture-footer mt-4">
                    <button class="btn btn-success me-2" onclick="markLectureComplete(${lectureId})" data-translate="btn.mark_complete">Mark as Complete</button>
                    <button class="btn btn-primary" onclick="startLectureQuiz(${lectureId})" data-translate="btn.take_quiz">Take Quiz</button>
                </div>
            </div>
        `;
        
        // Show modal with proper cleanup
        const modalElement = document.getElementById('lectureModal');
        const modal = new bootstrap.Modal(modalElement);
        
        // Add event listener for proper cleanup when modal is hidden
        modalElement.addEventListener('hidden.bs.modal', function () {
            cleanupModalBackdrops();
        }, { once: true });
        
        modal.show();
    }
    
    // Mark lecture as started
    if (!userProgress.studiedLectures.includes(lectureId)) {
        userProgress.studiedLectures.push(lectureId);
        saveUserProgress();
    }
}

// Mark lecture as complete
function markLectureComplete(lectureId) {
    if (!userProgress.studiedLectures.includes(lectureId)) {
        userProgress.studiedLectures.push(lectureId);
        saveUserProgress();
    }
    alert('Lecture marked as complete!');
}

// Load quiz options
function loadQuizOptions() {
    const quizContainer = document.getElementById('quiz-container');
    if (!quizContainer) return;
    
    quizContainer.innerHTML = `
        <div class="quiz-options">
            <h3>Choose Quiz Type</h3>
            <div class="quiz-option-buttons">
                <button class="btn btn-primary btn-lg" onclick="startQuiz()">Full Quiz</button>
                <button class="btn btn-info btn-lg" onclick="startTopicQuiz()">Topic Quiz</button>
                <button class="btn btn-success btn-lg" onclick="showLectureSelection()">Lecture Quiz</button>
                <button class="btn btn-warning btn-lg" onclick="startAdaptiveQuiz()">Adaptive Quiz</button>
            </div>
        </div>
    `;
}

// Start quiz
function startQuiz() {
    // Load quiz questions from quiz-database.js with better error handling
    try {
        if (typeof generateFullQuiz === 'function') {
            currentQuiz = generateFullQuiz(); // Use the proper 80-question generator
        } else if (typeof extendedQuizQuestions !== 'undefined' && Array.isArray(extendedQuizQuestions)) {
            // Fallback: create 80-question quiz manually
            currentQuiz = [];
            const questionsPerLecture = 10;
            
            for (let lectureId = 2; lectureId <= 9; lectureId++) {
                const lectureQuestions = extendedQuizQuestions.filter(q => {
                    if (!q || !q.question) return false;
                    const questionText = q.question.toLowerCase();
                    const lectureTopics = getLectureTopics(lectureId);
                    return lectureTopics.some(topic => questionText.includes(topic));
                });
                
                // Add questions for this lecture
                const questionsToAdd = lectureQuestions.slice(0, questionsPerLecture);
                currentQuiz.push(...questionsToAdd);
            }
            
            // If we still don't have 80 questions, add more from the general pool
            if (currentQuiz.length < 80) {
                const remainingQuestions = extendedQuizQuestions.filter(q => 
                    q && !currentQuiz.includes(q) && q.question && q.options
                );
                const needed = 80 - currentQuiz.length;
                currentQuiz.push(...remainingQuestions.slice(0, needed));
            }
            
            // Shuffle the questions
            currentQuiz.sort(() => Math.random() - 0.5);
            currentQuiz = currentQuiz.slice(0, 80); // Ensure exactly 80 questions
        } else {
            throw new Error('Quiz database not available');
        }
    } catch (error) {
        console.error('Error loading quiz questions:', error);
        // Fallback questions if quiz database is not available
        currentQuiz = [
            {
                question: "What is marketing?",
                options: ["Selling products", "Creating value", "Advertising only", "Making profit"],
                correct: 1,
                explanation: "Marketing is about creating value for customers."
            }
        ];
    }
    
    currentQuestionIndex = 0;
    quizScore = 0;
    userAnswers = []; // Reset user answers for review mode
    quizStartTime = new Date();
    
    showQuizQuestion();
    startQuizTimer();
    
    // Show translation controls
    const translationControls = document.getElementById('quiz-translation-controls');
    if (translationControls) {
        translationControls.style.display = 'block';
    }
}

// Helper function to get lecture topics
function getLectureTopics(lectureId) {
    const lecture = lectureData.find(l => l.id === lectureId);
    return lecture ? lecture.topics.map(topic => topic.toLowerCase()) : [];
}

// Get questions by topic
function getQuestionsByTopic(topic) {
    if (typeof extendedQuizQuestions === 'undefined' || !Array.isArray(extendedQuizQuestions)) {
        return [];
    }
    
    const topicLower = topic.toLowerCase();
    const topicKeywords = {
        'strategy': ['strategy', 'strategic', 'planning', 'long-term', 'mission', 'vision', 'objective'],
        'environment': ['environment', 'scanning', 'research', 'swot', 'pest', 'analysis', 'external'],
        'consumer': ['consumer', 'customer', 'behavior', 'decision', 'learning', 'attitude', 'motivation'],
        'market': ['segmentation', 'targeting', 'positioning', 'stp', 'market', 'segment', 'target'],
        'product': ['product', 'brand', 'lifecycle', 'development', 'quality', 'design', 'packaging'],
        'price': ['price', 'pricing', 'cost', 'elasticity', 'revenue', 'profit', 'discount'],
        'place': ['place', 'distribution', 'channel', 'logistics', 'retail', 'supply', 'warehouse'],
        'promotion': ['promotion', 'advertising', 'communication', 'imc', 'media', 'campaign', 'creative']
    };
    
    const keywords = topicKeywords[topicLower] || [topicLower];
    
    return extendedQuizQuestions.filter(question => {
        if (!question || !question.question) return false;
        const questionText = question.question.toLowerCase();
        return keywords.some(keyword => questionText.includes(keyword));
    });
}

// Show quiz question - English only for exam preparation
// Store user answers for review mode
let userAnswers = [];
let questionReviewData = [];

function showQuizQuestion() {
    const question = currentQuiz[currentQuestionIndex];
    const quizContainer = document.getElementById('quiz-container');
    
    if (!quizContainer || !question) return;
    
    // Always use English content from currentQuiz question
    let questionText, optionsText, explanationText;
    
    // Use questionEn fields if available
    if (question.questionEn) {
        questionText = question.questionEn;
        optionsText = question.optionsEn || question.options;
        explanationText = question.explanationEn || question.explanation;
    }
    // Fallback to original content (English in database)
    else {
        questionText = question.question;
        optionsText = question.options;
        explanationText = question.explanation;
    }
    
    // Calculate progress
    const progressPercent = Math.round(((currentQuestionIndex + 1) / currentQuiz.length) * 100);
    
    // Calculate time spent
    let timeDisplay = '';
    if (quizStartTime) {
        const timeSpent = Math.floor((new Date() - quizStartTime) / 1000);
        const minutes = Math.floor(timeSpent / 60);
        const seconds = timeSpent % 60;
        timeDisplay = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    }
    
    // Generate question navigation dots
    let navDots = '';
    const maxDots = Math.min(currentQuiz.length, 20); // Show max 20 dots
    const startDot = Math.max(0, Math.min(currentQuestionIndex - 10, currentQuiz.length - maxDots));
    for (let i = startDot; i < Math.min(startDot + maxDots, currentQuiz.length); i++) {
        let dotClass = 'nav-dot';
        if (i === currentQuestionIndex) {
            dotClass += ' active';
        } else if (i < currentQuestionIndex) {
            dotClass += ' answered';
        }
        // Show compact dots
        if (currentQuiz.length > 20 && i === startDot && startDot > 0) {
            navDots += '<span class="nav-dots-ellipsis">...</span>';
        }
        navDots += `<span class="${dotClass}" onclick="jumpToQuestion(${i})" title="Question ${i + 1}">${i + 1}</span>`;
        if (currentQuiz.length > 20 && i === startDot + maxDots - 1 && i < currentQuiz.length - 1) {
            navDots += '<span class="nav-dots-ellipsis">...</span>';
        }
    }
    
    quizContainer.innerHTML = `
        <div class="quiz-question">
            <!-- Progress Bar -->
            <div class="quiz-progress-container">
                <div class="quiz-progress-bar">
                    <div class="quiz-progress-fill" style="width: ${progressPercent}%"></div>
                </div>
                <div class="quiz-progress-text">${currentQuestionIndex + 1} / ${currentQuiz.length} (${progressPercent}%)</div>
            </div>
            
            <!-- Question Navigation Dots -->
            <div class="question-nav-dots">${navDots}</div>
            
            <div class="quiz-header mb-3">
                <div class="d-flex justify-content-between align-items-center">
                    <h5>Question ${currentQuestionIndex + 1} of ${currentQuiz.length}</h5>
                    <div class="quiz-info">
                        <span class="badge bg-info me-2">Score: ${quizScore}/${currentQuiz.length}</span>
                        <span class="badge bg-secondary" id="quizTimer">${timeDisplay}</span>
                    </div>
                </div>
            </div>
            <div class="question-text-container">
                <h4 class="question-text">${questionText}</h4>
                <div class="keyboard-hint">Press 1-5 to select answer</div>
            </div>
            <div class="quiz-options">
                ${optionsText.map((option, index) => `
                    <button class="quiz-option" data-index="${index}" onclick="selectAnswer(${index})">
                        <span class="option-letter">${String.fromCharCode(65 + index)}</span>
                        <span class="option-text">${option}</span>
                        <span class="key-hint">${index + 1}</span>
                    </button>
                `).join('')}
            </div>
            <div class="quiz-feedback" id="quiz-feedback"></div>
        </div>
    `;
    
    // Apply translations to quiz elements
    if (typeof applyTranslations === 'function') {
        applyTranslations();
    }
    
    // Setup keyboard navigation
    setupKeyboardNavigation();
}

// Enhanced translation function for quiz content (Chinese to English)
function translateToEnglish(text) {
    if (!text) return text;
    
    // Chinese to English translations for marketing quiz content
    const translations = {
        // Actual Chinese terms from quiz database
        "什麼是": "What is",
        "什麼": "What",
        "哪個": "Which",
        "如何": "How",
        "為什麼": "Why",
        "何時": "When",
        "何地": "Where",
        "哪一個": "Which one",
        "在哪裡": "In which",
        "為了哪個": "For which",
        "到哪個": "To which",
        "通過哪個": "By which",
        
        // Marketing concepts
        "策略": "Strategy",
        "行銷": "Marketing",
        "消費者": "Consumer", 
        "產品": "Product",
        "價格": "Price",
        "地點": "Place",
        "促銷": "Promotion",
        "品牌": "Brand",
        "目標": "Target",
        "市場": "Market",
        "研究": "Research",
        "分析": "Analysis",
        "計劃": "Planning",
        "定位": "Positioning",
        "細分": "Segmentation",
        
        // Common phrases
        "過程": "Process",
        "指的是": "Refers to",
        "包括": "Includes",
        "專注於": "Focuses on",
        "與相關": "Related to",
        "關心": "Concerned with",
        "涉及": "Involves",
        "由組成": "Consists of",
        "特點": "Characterized by",
        
        // Options
        "正確": "Correct",
        "不正確": "Incorrect",
        "以上皆是": "All of the above",
        "以上皆非": "None of the above",
        "A和B": "Both A and B",
        "A和C": "Both A and C",
        "B和C": "Both B and C",
        "所有這些": "All of these",
        "沒有這些": "None of these",
        
        // Additional terms from quiz database
        "戰術": "Tactics",
        "操作": "Operations",
        "計劃": "Plan",
        "目標": "Goal",
        "組織": "Organization",
        "長期": "Long-term",
        "行動方針": "Action plan",
        "實現": "Achieve",
        "提供": "Provide",
        "獨特": "Unique",
        "客戶體驗": "Customer experience",
        "不僅": "Not only",
        "而是": "But also",
        "短期": "Short-term",
        "指導": "Guide",
        "發展": "Development",
        "整體方向": "Overall direction",
        "設定": "Set",
        "使命": "Mission",
        "願景": "Vision",
        "階段": "Stage",
        "實施": "Implementation",
        "評估": "Evaluation",
        "規劃": "Planning",
        "控制": "Control",
        "步驟": "Step",
        "涉及": "Involves",
        "長期方向": "Long-term direction",
        "公司": "Company",
        "改變世界": "Change the world",
        "主要體現": "Mainly reflects",
        "核心要素": "Core element",
        "短期利潤最大化": "Short-term profit maximization",
        "獨特價值主張": "Unique value proposition",
        "成本領導": "Cost leadership",
        "市場份額最大化": "Market share maximization"
    };
    
    // Apply translations
    let translatedText = text;
    Object.entries(translations).forEach(([chinese, english]) => {
        translatedText = translatedText.replace(new RegExp(chinese, 'g'), english);
    });
    
    // If no translation applied, return original text
    return translatedText;
}

// Select answer - English only for exam preparation
function selectAnswer(answerIndex) {
    const question = currentQuiz[currentQuestionIndex];
    const isCorrect = answerIndex === question.correct;
    
    // Store user's answer for review mode
    userAnswers[currentQuestionIndex] = answerIndex;
    
    if (isCorrect) {
        quizScore++;
    }
    
    // Update score display
    updateQuizScoreDisplay();
    
    // Show feedback
    const feedbackDiv = document.getElementById('quiz-feedback');
    
    // Use explanation directly from current question object
    // Note: Do NOT use currentQuestionIndex to look up in englishQuizQuestions
    // because currentQuiz may be shuffled/filtered, so indexes won't match
    const explanationText = question.explanationEn || question.explanation || '';
    
    feedbackDiv.innerHTML = `
        <div class="alert ${isCorrect ? 'alert-success' : 'alert-danger'}">
            <div class="d-flex justify-content-between align-items-center">
                <div>
                    <strong>${isCorrect ? 'Correct!' : 'Incorrect!'}</strong>
                    <span class="badge ${isCorrect ? 'bg-success' : 'bg-danger'} ms-2">
                        ${isCorrect ? '+1' : '0'} point
                    </span>
                </div>
                <div>
                    <span class="badge bg-info">Current Score: ${quizScore}/${currentQuiz.length}</span>
                </div>
            </div>
            <div class="mt-2">
                ${explanationText || ''}
            </div>
        </div>
        <div class="mt-3">
            <button class="btn btn-primary" onclick="continueToNextQuestion()">
                ${currentQuestionIndex < currentQuiz.length - 1 ? 'Next Question' : 'Finish Quiz'}
            </button>
        </div>
    `;
    
    // Disable all options
    document.querySelectorAll('.quiz-option').forEach(btn => {
        btn.disabled = true;
        if (btn.textContent.startsWith(String.fromCharCode(65 + answerIndex))) {
            btn.classList.add(isCorrect ? 'btn-success' : 'btn-danger');
        } else if (btn.textContent.startsWith(String.fromCharCode(65 + question.correct))) {
            btn.classList.add('btn-success');
        }
    });
}

// Update quiz score display
function updateQuizScoreDisplay() {
    const scoreElement = document.querySelector('.quiz-info .badge.bg-info');
    if (scoreElement) {
        scoreElement.textContent = `Score: ${quizScore}/${currentQuiz.length}`;
    }
}

// Continue to next question
function continueToNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < currentQuiz.length) {
        showQuizQuestion();
    } else {
        finishQuiz();
    }
}

// Finish quiz
function finishQuiz() {
    clearInterval(quizTimer);
    
    const endTime = new Date();
    const timeSpent = Math.floor((endTime - quizStartTime) / 1000);
    const minutes = Math.floor(timeSpent / 60);
    const seconds = timeSpent % 60;
    
    const percentage = Math.round((quizScore / currentQuiz.length) * 100);
    let scoreClass = 'score-poor';
    let gradeText = 'Poor';
    
    if (percentage >= 80) {
        scoreClass = 'score-excellent';
        gradeText = 'Excellent';
    } else if (percentage >= 60) {
        scoreClass = 'score-good';
        gradeText = 'Good';
    } else if (percentage >= 40) {
        scoreClass = 'score-average';
        gradeText = 'Average';
    }
    
    // Save score
    // Store detailed results for review
    const quizResults = {
        score: quizScore,
        total: currentQuiz.length,
        percentage: percentage,
        time: `${minutes}:${seconds.toString().padStart(2, '0')}`,
        date: new Date().toLocaleString(currentLanguage === 'en' ? 'en-US' : 'zh-TW'),
        questions: currentQuiz.map((q, idx) => ({
            question: q.question,
            userAnswer: userAnswers[idx] !== undefined ? userAnswers[idx] : -1,
            correctAnswer: q.correct,
            isCorrect: userAnswers[idx] === q.correct,
            explanation: q.explanation,
            options: q.options
        }))
    };
    
    userProgress.quizScores.push(quizResults);
    saveUserProgress();
    
    // Remove keyboard listener
    document.removeEventListener('keydown', handleQuizKeydown);
    
    const quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = `
        <div class="quiz-results-container">
            <h3 class="text-center mb-4">Quiz Completed!</h3>
            
            <!-- Score Circle -->
            <div class="score-circle-container">
                <div class="score-circle ${scoreClass}">
                    <span class="score-value">${percentage}%</span>
                    <span class="score-label">${quizScore}/${currentQuiz.length}</span>
                </div>
            </div>
            
            <div class="text-center mb-4">
                <h4 class="grade-text ${scoreClass}">${gradeText}</h4>
                <p class="time-spent"><i class="fas fa-clock"></i> Time spent: ${minutes}m ${seconds}s</p>
            </div>
            
            <!-- Stats Grid -->
            <div class="quiz-stats-grid">
                <div class="stat-box correct-stat">
                    <div class="stat-number">${quizScore}</div>
                    <div class="stat-label">Correct</div>
                </div>
                <div class="stat-box incorrect-stat">
                    <div class="stat-number">${currentQuiz.length - quizScore}</div>
                    <div class="stat-label">Incorrect</div>
                </div>
                <div class="stat-box time-stat">
                    <div class="stat-number">${Math.round(currentQuiz.length / (timeSpent / 60)) || 0}</div>
                    <div class="stat-label">Q/min</div>
                </div>
            </div>
            
            <!-- Action Buttons -->
            <div class="quiz-result-actions mt-4">
                <button class="btn btn-info" onclick="showQuizReview(${userProgress.quizScores.length - 1})">
                    <i class="fas fa-search"></i> Review Answers
                </button>
                <button class="btn btn-primary" onclick="showSection('progress')">
                    <i class="fas fa-chart-line"></i> View Statistics
                </button>
                <button class="btn btn-secondary" onclick="loadQuizOptions()">
                    <i class="fas fa-redo"></i> Try Again
                </button>
            </div>
        </div>
    `;
}

// Show detailed quiz review
function showQuizReview(scoreIndex) {
    const results = userProgress.quizScores[scoreIndex];
    if (!results) return;
    
    const quizContainer = document.getElementById('quiz-container');
    
    // Generate review items
    const reviewItems = results.questions.map((q, idx) => {
        const isCorrect = q.isCorrect;
        const userLetter = q.userAnswer >= 0 ? String.fromCharCode(65 + q.userAnswer) : '-';
        const correctLetter = String.fromCharCode(65 + q.correctAnswer);
        
        return `
            <div class="review-item ${isCorrect ? 'review-correct' : 'review-incorrect'}">
                <div class="review-header">
                    <span class="review-number">Q${idx + 1}</span>
                    <span class="review-status">${isCorrect ? '✓ Correct' : '✗ Incorrect'}</span>
                </div>
                <div class="review-question">${q.question}</div>
                <div class="review-answers">
                    <div class="review-user-answer">
                        <span class="label">Your answer:</span>
                        <span class="value ${isCorrect ? 'correct' : 'wrong'}">${userLetter}. ${q.userAnswer >= 0 ? q.options[q.userAnswer] : 'Not answered'}</span>
                    </div>
                    ${!isCorrect ? `
                        <div class="review-correct-answer">
                            <span class="label">Correct answer:</span>
                            <span class="value correct">${correctLetter}. ${q.options[q.correctAnswer]}</span>
                        </div>
                    ` : ''}
                </div>
                <div class="review-explanation">${q.explanation}</div>
            </div>
        `;
    }).join('');
    
    quizContainer.innerHTML = `
        <div class="quiz-review-container">
            <div class="review-header-bar">
                <h4><i class="fas fa-search"></i> Quiz Review</h4>
                <span class="review-score">${results.score}/${results.total} (${results.percentage}%)</span>
            </div>
            <div class="review-filters">
                <button class="btn btn-sm btn-outline-primary active" onclick="filterReview('all')">All</button>
                <button class="btn btn-sm btn-outline-success" onclick="filterReview('correct')">Correct</button>
                <button class="btn btn-sm btn-outline-danger" onclick="filterReview('incorrect')">Incorrect</button>
            </div>
            <div class="review-list">
                ${reviewItems}
            </div>
            <div class="review-actions mt-3">
                <button class="btn btn-secondary" onclick="loadQuizOptions()">
                    <i class="fas fa-arrow-left"></i> Back to Quiz Menu
                </button>
            </div>
        </div>
    `;
}

// Filter review items
function filterReview(filter) {
    const items = document.querySelectorAll('.review-item');
    const buttons = document.querySelectorAll('.review-filters button');
    
    // Update button states
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    // Show/hide items
    items.forEach(item => {
        if (filter === 'all') {
            item.style.display = 'block';
        } else if (filter === 'correct' && item.classList.contains('review-correct')) {
            item.style.display = 'block';
        } else if (filter === 'incorrect' && item.classList.contains('review-incorrect')) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// Start quiz timer
let quizTimerInterval = null;

function startQuizTimer() {
    // Clear any existing timer
    if (quizTimerInterval) {
        clearInterval(quizTimerInterval);
    }
    
    // Update timer display every second
    quizTimerInterval = setInterval(() => {
        if (quizStartTime) {
            const timeSpent = Math.floor((new Date() - quizStartTime) / 1000);
            const minutes = Math.floor(timeSpent / 60);
            const seconds = timeSpent % 60;
            const timeDisplay = `${minutes}:${seconds.toString().padStart(2, '0')}`;
            
            const timerElement = document.getElementById('quizTimer');
            if (timerElement) {
                timerElement.textContent = timeDisplay;
            }
        }
    }, 1000);
}

// Setup keyboard navigation for quiz
function setupKeyboardNavigation() {
    // Remove existing listener if any
    document.removeEventListener('keydown', handleQuizKeydown);
    
    // Add keyboard listener
    document.addEventListener('keydown', handleQuizKeydown);
}

function handleQuizKeydown(e) {
    // Only respond if quiz is active
    const quizContainer = document.getElementById('quiz-container');
    if (!quizContainer || !quizContainer.querySelector('.quiz-question')) {
        return;
    }
    
    // Don't intercept if user is typing in an input
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
        return;
    }
    
    // Number keys 1-5 to select answers
    if (e.key >= '1' && e.key <= '5') {
        const answerIndex = parseInt(e.key) - 1;
        const option = document.querySelector(`.quiz-option[data-index="${answerIndex}"]`);
        if (option && !option.disabled) {
            selectAnswer(answerIndex);
        }
        return;
    }
    
    // Arrow keys for navigation (if feedback is showing)
    const feedbackDiv = document.getElementById('quiz-feedback');
    if (feedbackDiv && feedbackDiv.innerHTML.trim() !== '') {
        if (e.key === 'ArrowRight' || e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            continueToNextQuestion();
            return;
        }
    }
}

// Jump to specific question
function jumpToQuestion(index) {
    // Only allow jumping to previous questions or current question
    if (index > currentQuestionIndex) {
        return;
    }
    
    currentQuestionIndex = index;
    showQuizQuestion();
}

// Start topic quiz
function startTopicQuiz(topic) {
    // If no topic specified, show topic selection
    if (!topic) {
        showTopicSelection();
        return;
    }
    
    // Generate quiz for specific topic
    currentQuiz = generateTopicQuiz(topic);
    
    currentQuestionIndex = 0;
    quizScore = 0;
    userAnswers = []; // Reset user answers for review mode
    quizStartTime = new Date();
    
    showQuizQuestion();
    startQuizTimer();
}

// Show topic selection interface
function showTopicSelection() {
    const quizContainer = document.getElementById('quiz-container');
    if (!quizContainer) return;
    
    // Define topics with week numbers
    const topics = [
        { name: "Marketing Strategy", week: 2, desc: "Strategic planning and long-term marketing approaches", key: "strategy" },
        { name: "Environmental Scanning", week: 3, desc: "Market research and environmental analysis", key: "environment" },
        { name: "Consumer Behavior", week: 4, desc: "Understanding consumer decision-making process", key: "consumer" },
        { name: "Market Segmentation (STP)", week: 5, desc: "STP strategy and target market selection", key: "market" },
        { name: "Product Strategy", week: 6, desc: "Product development and brand management", key: "product" },
        { name: "Pricing Strategy", week: 7, desc: "Pricing methods and revenue management", key: "price" },
        { name: "Place/Distribution", week: 8, desc: "Distribution channels and logistics", key: "place" },
        { name: "Promotion Strategy", week: 9, desc: "Advertising and promotional mix", key: "promotion" }
    ];
    
    // Generate topic cards
    const topicCards = topics.map(topic => `
        <div class="col-md-6 mb-3">
            <div class="card topic-quiz-card h-100">
                <div class="card-body">
                    <div class="topic-header">
                        <span class="topic-week-badge">Week ${topic.week}</span>
                        <h5 class="card-title">${topic.name}</h5>
                    </div>
                    <p class="card-text">${topic.desc}</p>
                    <button class="btn btn-primary w-100" onclick="startTopicQuiz('${topic.key}')">
                        <i class="fas fa-play"></i> Start Practice
                    </button>
                </div>
            </div>
        </div>
    `).join('');
    
    quizContainer.innerHTML = `
        <div class="topic-selection-container">
            <div class="topic-selection-header">
                <h3><i class="fas fa-book-open"></i> Choose a Topic to Practice</h3>
                <p class="text-muted">Select a topic to focus your practice on specific areas</p>
            </div>
            <div class="row mt-4">
                ${topicCards}
            </div>
            <div class="topic-selection-footer">
                <button class="btn btn-secondary" onclick="loadQuizOptions()">
                    <i class="fas fa-arrow-left"></i> Back to Quiz Options
                </button>
            </div>
        </div>
    `;
}

// Show lecture selection interface
function showLectureSelection() {
    const quizContainer = document.getElementById('quiz-container');
    if (!quizContainer) return;
    
    // Define lecture info with question counts from quiz database
    const lectureInfo = [
        { id: 2, title: "Lecture 2: Marketing Strategy", questions: 15, topics: ["Strategy", "Planning", "Mission", "Vision"] },
        { id: 3, title: "Lecture 3: Environmental Scanning", questions: 15, topics: ["SWOT", "PEST", "Research", "Analysis"] },
        { id: 4, title: "Lecture 4: Consumer Behavior", questions: 15, topics: ["Consumer", "Decision", "Attitude", "Learning"] },
        { id: 5, title: "Lecture 5: Segmentation, Targeting, Positioning", questions: 15, topics: ["STP", "Segmentation", "Targeting"] },
        { id: 6, title: "Lecture 6: Product Strategy", questions: 15, topics: ["Product", "Brand", "Lifecycle", "Development"] },
        { id: 7, title: "Lecture 7: Pricing Strategy", questions: 15, topics: ["Pricing", "Cost", "Elasticity", "Revenue"] },
        { id: 8, title: "Lecture 8: Place/Distribution", questions: 15, topics: ["Distribution", "Channel", "Logistics", "Retail"] },
        { id: 9, title: "Lecture 9: Promotion", questions: 15, topics: ["Promotion", "Advertising", "IMC", "Communication"] }
    ];
    
    // Generate lecture cards
    const lectureCards = lectureInfo.map(lecture => {
        const topicTags = lecture.topics.map(t => `<span class="lecture-topic-tag">${t}</span>`).join('');
        return `
            <div class="col-md-6 mb-3">
                <div class="card lecture-quiz-card h-100">
                    <div class="card-body">
                        <div class="lecture-header">
                            <span class="lecture-number">L${lecture.id}</span>
                            <h5 class="card-title">${lecture.title}</h5>
                        </div>
                        <div class="lecture-meta">
                            <span class="badge bg-info">${lecture.questions} Questions</span>
                        </div>
                        <div class="lecture-topics">
                            ${topicTags}
                        </div>
                        <button class="btn btn-success w-100 mt-3" onclick="startLectureQuiz(${lecture.id})">
                            <i class="fas fa-play"></i> Start Quiz
                        </button>
                    </div>
                </div>
            </div>
        `;
    }).join('');
    
    quizContainer.innerHTML = `
        <div class="lecture-selection-container">
            <div class="lecture-selection-header">
                <h3><i class="fas fa-graduation-cap"></i> Select Lecture Quiz</h3>
                <p class="text-muted">Choose a specific lecture to practice. Each quiz contains 15 questions from that lecture.</p>
            </div>
            <div class="row">
                ${lectureCards}
            </div>
            <div class="lecture-selection-footer">
                <button class="btn btn-secondary" onclick="loadQuizOptions()">
                    <i class="fas fa-arrow-left"></i> Back to Quiz Options
                </button>
            </div>
        </div>
    `;
}

// Generate topic-specific quiz
function generateTopicQuiz(topic) {
    const topicQuestions = getQuestionsByTopic(topic);
    
    // If no specific questions found, create fallback
    if (topicQuestions.length === 0) {
        return [
            {
                question: `What is the main concept of ${topic} in marketing?`,
                options: ["Concept A", "Concept B", "Concept C", "Concept D"],
                correct: 0,
                explanation: `This question tests your understanding of ${topic} concepts.`
            }
        ];
    }
    
    // Return 10 questions for the topic
    return topicQuestions
        .sort(() => Math.random() - 0.5)
        .slice(0, Math.min(10, topicQuestions.length));
}

// Start lecture quiz
function startLectureQuiz(lectureId) {
    // Close any open modal first
    const lectureModal = bootstrap.Modal.getInstance(document.getElementById('lectureModal'));
    if (lectureModal) {
        lectureModal.hide();
    }
    
    // Clean up backdrops
    cleanupModalBackdrops();
    
    // Switch to quiz section
    setTimeout(() => {
        showSection('quiz');
        
        try {
            // Load quiz questions from quiz-database.js filtered by lecture
            if (typeof extendedQuizQuestions !== 'undefined' && Array.isArray(extendedQuizQuestions)) {
                // First, try to find questions with matching lectureId (new precise matching)
                let lectureQuestions = extendedQuizQuestions.filter(question => {
                    return question && question.lectureId === lectureId;
                });
                
                // If we don't have enough questions with lectureId, supplement with topic-based matching
                const MIN_QUESTIONS = 15;
                if (lectureQuestions.length < MIN_QUESTIONS) {
                    const lecture = lectureData.find(l => l.id === lectureId);
                    if (lecture && lecture.topics) {
                        const lectureTopics = lecture.topics.map(topic => topic.toLowerCase());
                        const topicMatchedQuestions = extendedQuizQuestions.filter(question => {
                            if (!question || !question.question || question.lectureId === lectureId) return false;
                            const questionText = question.question.toLowerCase();
                            return lectureTopics.some(topic => questionText.includes(topic));
                        });
                        // Combine lectureId-matched and topic-matched questions
                        lectureQuestions = [...lectureQuestions, ...topicMatchedQuestions];
                    }
                }
                
                // Shuffle and take up to 20 questions
                currentQuiz = lectureQuestions
                    .sort(() => Math.random() - 0.5)
                    .slice(0, 20);
                
                // If still no questions, use general fallback
                if (currentQuiz.length === 0) {
                    throw new Error(`No questions found for lecture ${lectureId}`);
                }
            } else {
                throw new Error('Quiz database not available');
            }
        } catch (error) {
            console.error('Error loading lecture quiz:', error);
            // Fallback questions based on lecture content
            const fallbackQuestions = [
                {
                    question: `What is the main focus of Lecture ${lectureId}?`,
                    options: ["Marketing fundamentals", "Strategic planning", "Environmental analysis", "Consumer behavior"],
                    correct: Math.min(lectureId - 1, 3),
                    explanation: `This question tests your understanding of Lecture ${lectureId}'s core concepts.`
                },
                {
                    question: `Which of the following is a key learning objective of Lecture ${lectureId}?`,
                    options: ["Understanding core concepts", "Applying strategic frameworks", "Analyzing market data", "Developing marketing plans"],
                    correct: 0,
                    explanation: `Lecture ${lectureId} focuses on key marketing concepts and their practical applications.`
                }
            ];
            currentQuiz = fallbackQuestions;
        }
        
        currentQuestionIndex = 0;
        quizScore = 0;
        userAnswers = []; // Reset user answers for review mode
        quizStartTime = new Date();
        
        showQuizQuestion();
        startQuizTimer();
    }, 300); // Wait for modal to close
}

// Start adaptive quiz
function startAdaptiveQuiz() {
    // Analyze user's weak areas and generate personalized quiz
    const weakAreas = analyzeWeakAreas();
    currentQuiz = generateAdaptiveQuiz(weakAreas);
    
    currentQuestionIndex = 0;
    quizScore = 0;
    userAnswers = []; // Reset user answers for review mode
    quizStartTime = new Date();
    
    showQuizQuestion();
    startQuizTimer();
}

// Analyze user's weak areas based on quiz history
function analyzeWeakAreas() {
    const weakAreas = {
        'strategy': { correct: 0, total: 0, percentage: 0 },
        'environment': { correct: 0, total: 0, percentage: 0 },
        'consumer': { correct: 0, total: 0, percentage: 0 },
        'market': { correct: 0, total: 0, percentage: 0 },
        'product': { correct: 0, total: 0, percentage: 0 },
        'price': { correct: 0, total: 0, percentage: 0 },
        'place': { correct: 0, total: 0, percentage: 0 },
        'promotion': { correct: 0, total: 0, percentage: 0 }
    };
    
    // If no quiz history, return balanced areas
    if (userProgress.quizScores.length === 0) {
        return Object.keys(weakAreas);
    }
    
    // Analyze recent quiz performance (last 5 quizzes)
    const recentQuizzes = userProgress.quizScores.slice(-5);
    const averageScore = recentQuizzes.reduce((sum, quiz) => sum + quiz.percentage, 0) / recentQuizzes.length;
    
    // If average score is below 60%, focus on all areas
    if (averageScore < 60) {
        return Object.keys(weakAreas);
    }
    
    // For higher performers, focus on areas with fewer correct answers
    // This is a simplified analysis - in a real system, you'd track question-by-question performance
    const topicPerformance = {
        'strategy': Math.random() * 40 + 40, // Simulate 40-80% performance
        'environment': Math.random() * 40 + 40,
        'consumer': Math.random() * 40 + 40,
        'market': Math.random() * 40 + 40,
        'product': Math.random() * 40 + 40,
        'price': Math.random() * 40 + 40,
        'place': Math.random() * 40 + 40,
        'promotion': Math.random() * 40 + 40
    };
    
    // Sort topics by performance (lowest first)
    const sortedTopics = Object.entries(topicPerformance)
        .sort(([,a], [,b]) => a - b)
        .slice(0, 4) // Take bottom 4 areas
        .map(([topic]) => topic);
    
    return sortedTopics;
}

// Generate adaptive quiz based on weak areas
function generateAdaptiveQuiz(weakAreas) {
    const adaptiveQuiz = [];
    const questionsPerArea = Math.ceil(20 / weakAreas.length); // 20 questions total
    
    weakAreas.forEach(area => {
        const areaQuestions = getQuestionsByTopic(area);
        const selectedQuestions = areaQuestions
            .sort(() => Math.random() - 0.5)
            .slice(0, questionsPerArea);
        adaptiveQuiz.push(...selectedQuestions);
    });
    
    // If we don't have enough questions, add more from general pool
    if (adaptiveQuiz.length < 20) {
        const remainingQuestions = extendedQuizQuestions.filter(q => !adaptiveQuiz.includes(q));
        const needed = 20 - adaptiveQuiz.length;
        adaptiveQuiz.push(...remainingQuestions.slice(0, needed));
    }
    
    // Shuffle and return exactly 20 questions
    return adaptiveQuiz.sort(() => Math.random() - 0.5).slice(0, 20);
}

// Load case studies
function loadCaseStudies() {
    const caseContainer = document.getElementById('case-container');
    if (!caseContainer) return;
    
    caseContainer.innerHTML = `
        <div class="row">
            <div class="col-lg-8 mx-auto">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Case Study Exercises</h5>
                        <p class="card-text">Select a case study to analyze:</p>
                        <div class="list-group">
                            ${Object.entries(caseStudies).map(([id, caseStudy]) => `
                                <a href="#" class="list-group-item list-group-item-action" onclick="loadCaseStudy(${id})">
                                    <h6>${caseStudy.title}</h6>
                                    <p class="mb-1">${caseStudy.content.substring(0, 150)}...</p>
                                    <button class="btn btn-primary btn-sm">View Case</button>
                                </a>
                            `).join('')}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Load case study
function loadCaseStudy(caseId) {
    const caseStudy = caseStudies[caseId];
    if (!caseStudy) return;
    
    const caseContainer = document.getElementById('case-container');
    if (!caseContainer) return;
    
    caseContainer.innerHTML = `
        <div class="case-study">
            <h3>${caseStudy.title}</h3>
            ${caseStudy.content}
            
            <h5 class="mt-4">Practice Questions:</h5>
            <div class="case-questions">
                ${caseStudy.questions.map((question, index) => `
                    <div class="case-question" id="question-${index}">
                        <h6>Question ${index + 1}:</h6>
                        <p>${question}</p>
                        <textarea class="form-control answer-textarea" rows="4" placeholder="Please enter your answer here..." data-question-index="${index}"></textarea>
                        <div class="question-feedback mt-2" id="feedback-${index}"></div>
                    </div>
                `).join('')}
            </div>
            
            <div class="text-center mt-4">
                <button class="btn btn-primary me-2" onclick="submitCaseStudyAnswers(${caseId})">Submit Answers</button>
                <button class="btn btn-info me-2" onclick="showSuggestedAnswers(${caseId})">View Suggested Answers</button>
                <button class="btn btn-warning me-2" onclick="gradeMyAnswers(${caseId})">Grade My Answers</button>
                <button class="btn btn-secondary" onclick="loadCaseStudies()">Back to Case List</button>
            </div>
        </div>
    `;
    
    // Mark case as started
    if (!userProgress.caseStudiesCompleted.includes(caseId)) {
        userProgress.caseStudiesCompleted.push(caseId);
        saveUserProgress();
    }
}

// Submit case study answers
function submitCaseStudyAnswers(caseId) {
    const answers = [];
    const textareas = document.querySelectorAll('.answer-textarea');
    
    textareas.forEach(textarea => {
        const questionIndex = parseInt(textarea.getAttribute('data-question-index'));
        answers[questionIndex] = textarea.value.trim();
    });
    
    // Save answers to localStorage
    const savedAnswers = JSON.parse(localStorage.getItem('caseStudyAnswers') || '{}');
    savedAnswers[caseId] = answers;
    localStorage.setItem('caseStudyAnswers', JSON.stringify(savedAnswers));
    
    alert('Answers submitted successfully!');
}

// Show suggested answers
function showSuggestedAnswers(caseId) {
    const caseStudy = caseStudies[caseId];
    if (!caseStudy || !caseStudy.suggestedAnswers) {
        alert('Suggested answers not available for this case study');
        return;
    }
    
    // Create modal to show suggested answers
    const modal = document.createElement('div');
    modal.className = 'modal fade';
    modal.id = 'suggestedAnswersModal';
    modal.innerHTML = `
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Suggested Answers - ${caseStudy.title}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    ${Object.entries(caseStudy.suggestedAnswers).map(([index, answerData]) => `
                        <div class="answer-section mb-4">
                            <h6>Question ${parseInt(index) + 1}:</h6>
                            <div class="suggested-answer">
                                <div class="answer-content">${answerData.answer}</div>
                                <div class="answer-meta mt-2">
                                    <small class="text-muted">
                                        <strong>Max score:</strong> ${answerData.maxScore} points |
                                        <strong>Keywords:</strong> ${answerData.keywords.join(', ')}
                                    </small>
                                </div>
                                <div class="scoring-criteria mt-2">
                                    <strong>Scoring criteria:</strong>
                                    <ul class="small">
                                        ${Object.entries(answerData.scoringCriteria).map(([criterion, points]) => 
                                            `<li>${criterion}: ${points} points</li>`
                                        ).join('')}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    const bootstrapModal = new bootstrap.Modal(document.getElementById('suggestedAnswersModal'));
    
    // Clean up modal when hidden
    document.getElementById('suggestedAnswersModal').addEventListener('hidden.bs.modal', function() {
        this.remove();
        cleanupModalBackdrops();
    });
    
    bootstrapModal.show();
}

// Grade my answers
function gradeMyAnswers(caseId) {
    const caseStudy = caseStudies[caseId];
    if (!caseStudy || !caseStudy.suggestedAnswers) {
        alert('Grading not available for this case study');
        return;
    }
    
    // Get user answers
    const textareas = document.querySelectorAll('.answer-textarea');
    const userAnswers = [];
    
    textareas.forEach(textarea => {
        const questionIndex = parseInt(textarea.getAttribute('data-question-index'));
        userAnswers[questionIndex] = textarea.value.trim();
    });
    
    // Grade each answer
    let totalScore = 0;
    let maxTotalScore = 0;
    const gradingResults = [];
    
    Object.entries(caseStudy.suggestedAnswers).forEach(([index, answerData]) => {
        const userAnswer = userAnswers[parseInt(index)] || '';
        const score = gradeAnswer(userAnswer, answerData);
        
        totalScore += score.score;
        maxTotalScore += answerData.maxScore;
        gradingResults.push({
            questionIndex: parseInt(index),
            userAnswer: userAnswer,
            score: score.score,
            maxScore: answerData.maxScore,
            percentage: Math.round((score.score / answerData.maxScore) * 100),
            feedback: score.feedback
        });
    });
    
    // Display grading results
    displayGradingResults(caseId, gradingResults, totalScore, maxTotalScore);
}

// Grade answer
function gradeAnswer(userAnswer, suggestedAnswer) {
    let score = 0;
    const feedback = [];
    
    // Check keywords
    const foundKeywords = [];
    suggestedAnswer.keywords.forEach(keyword => {
        if (userAnswer.toLowerCase().includes(keyword.toLowerCase())) {
            score += 2; // 2 points per keyword
            foundKeywords.push(keyword);
        }
    });
    
    // Check length and content quality
    if (userAnswer.length >= 100) {
        score += 2; // Bonus for detailed answer
        feedback.push('Detailed answer provided');
    } else {
        feedback.push('Answer could be more detailed');
    }
    
    // Check scoring criteria
    Object.entries(suggestedAnswer.scoringCriteria).forEach(([criterion, points]) => {
        const criterionLower = criterion.toLowerCase();
        if (criterionLower.includes('understanding') && userAnswer.toLowerCase().includes('understand')) {
            score += Math.min(2, points);
            feedback.push('Shows understanding');
        }
        if (criterionLower.includes('analysis') && (userAnswer.toLowerCase().includes('analyze') || userAnswer.toLowerCase().includes('analysis'))) {
            score += Math.min(2, points);
            feedback.push('Includes analysis');
        }
        if (criterionLower.includes('evaluation') && (userAnswer.toLowerCase().includes('evaluate') || userAnswer.toLowerCase().includes('assessment'))) {
            score += Math.min(2, points);
            feedback.push('Includes evaluation');
        }
    });
    
    // Cap score at maxScore
    score = Math.min(score, suggestedAnswer.maxScore);
    
    if (foundKeywords.length > 0) {
        feedback.push(`Keywords found: ${foundKeywords.join(', ')}`);
    }
    
    return {
        score: score,
        feedback: feedback
    };
}

// Display grading results
function displayGradingResults(caseId, results, totalScore, maxTotalScore) {
    const overallPercentage = Math.round((totalScore / maxTotalScore) * 100);
    
    // Create modal to display results
    const modal = document.createElement('div');
    modal.className = 'modal fade';
    modal.id = 'gradingResultsModal';
    modal.innerHTML = `
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Grading Results</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="overall-score mb-4">
                        <h4>Total score: ${totalScore}/${maxTotalScore} (${overallPercentage}%)</h4>
                        <div class="progress">
                            <div class="progress-bar ${overallPercentage >= 80 ? 'bg-success' : overallPercentage >= 60 ? 'bg-warning' : 'bg-danger'}" 
                                 style="width: ${overallPercentage}%"></div>
                        </div>
                    </div>
                    
                    ${results.map(result => `
                        <div class="result-item mb-3">
                            <h6>Question ${result.questionIndex + 1}: ${result.score}/${result.maxScore} (${result.percentage}%)</h6>
                            <div class="progress mb-2">
                                <div class="progress-bar ${result.percentage >= 80 ? 'bg-success' : result.percentage >= 60 ? 'bg-warning' : 'bg-danger'}" 
                                     style="width: ${result.percentage}%"></div>
                            </div>
                            <div class="feedback">
                                <small class="text-muted">
                                    <strong>Feedback:</strong> ${result.feedback.join(', ')}
                                </small>
                            </div>
                        </div>
                    `).join('')}
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary" onclick="showSuggestedAnswers(${caseId})">View Suggested Answers</button>
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    const bootstrapModal = new bootstrap.Modal(document.getElementById('gradingResultsModal'));
    
    // Clean up modal when hidden
    document.getElementById('gradingResultsModal').addEventListener('hidden.bs.modal', function() {
        this.remove();
        cleanupModalBackdrops();
    });
    
    bootstrapModal.show();
    
    // Save grading results
    const savedResults = JSON.parse(localStorage.getItem('caseStudyGrades') || '{}');
    savedResults[caseId] = {
        totalScore: totalScore,
        maxTotalScore: maxTotalScore,
        percentage: overallPercentage,
        date: new Date().toISOString()
    };
    localStorage.setItem('caseStudyGrades', JSON.stringify(savedResults));
}

// Toggle language
function toggleLanguage() {
    currentLanguage = currentLanguage === 'zh' ? 'en' : 'zh';
    userProgress.language = currentLanguage;
    saveUserProgress();
    updateLanguageDisplay();
    
    // Refresh current section
    const activeSection = document.querySelector('.content-section:not([style*="display: none"])');
    if (activeSection) {
        showSection(activeSection.id);
    }
}

// Language function - English only (no switching needed)
function initializeLanguage() {
    // Set English as default and only language
    currentLanguage = 'en';
    userProgress.language = 'en';
    saveUserProgress();
    
    // Apply English translations
    if (typeof applyTranslations === 'function') {
        applyTranslations();
    }
}

// Update language display
function updateLanguageDisplay() {
    const langToggle = document.getElementById('lang-toggle');
    if (langToggle) {
        langToggle.textContent = currentLanguage === 'zh' ? 'EN' : 'ZH';
    }
    
    // Update currentLangText element
    const currentLangText = document.getElementById('currentLangText');
    if (currentLangText) {
        currentLangText.textContent = currentLanguage === 'zh' ? '中文' : 'English';
    }
}

// Load user progress
function loadUserProgress() {
    const saved = localStorage.getItem('marketingStudyProgress');
    if (saved) {
        userProgress = JSON.parse(saved);
    }
    currentLanguage = userProgress.language || 'zh';
}

// Save user progress
function saveUserProgress() {
    localStorage.setItem('marketingStudyProgress', JSON.stringify(userProgress));
}

// Reset all user progress
function resetProgress() {
    if (confirm('Are you sure you want to reset all progress? This will clear all study history, quiz scores, and achievements. This action cannot be undone.')) {
        // Reset user progress object
        userProgress = {
            studiedLectures: [],
            quizScores: [],
            caseStudiesCompleted: [],
            language: 'en'
        };
        
        // Save empty progress to localStorage
        saveUserProgress();
        
        // Reset global quiz variables
        currentQuiz = [];
        currentQuestionIndex = 0;
        quizScore = 0;
        if (quizTimer) {
            clearInterval(quizTimer);
            quizTimer = null;
        }
        quizStartTime = null;
        
        // Clear any active quiz display
        const quizContainer = document.getElementById('quiz-container');
        if (quizContainer) {
            quizContainer.innerHTML = `
                <div class="text-center">
                    <h3>Select Quiz Mode</h3>
                    <div class="row mt-4">
                        <div class="col-md-4 mb-3">
                            <div class="card h-100">
                                <div class="card-body">
                                    <h5 class="card-title">Complete Mock Quiz</h5>
                                    <p class="card-text">80 multiple choice questions covering all lecture content</p>
                                    <p class="text-muted">Recommended time: 90 minutes</p>
                                    <button class="btn btn-success btn-lg" onclick="startQuiz()">Start Complete Quiz</button>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 mb-3">
                            <div class="card h-100">
                                <div class="card-body">
                                    <h5 class="card-title">Adaptive Quiz</h5>
                                    <p class="card-text">Questions recommended based on learning progress and weaknesses</p>
                                    <p class="text-muted">Personalized learning path</p>
                                    <button class="btn btn-info btn-lg" onclick="startAdaptiveQuiz()">Adaptive Quiz</button>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 mb-3">
                            <div class="card h-100">
                                <div class="card-body">
                                    <h5 class="card-title">Topic Practice</h5>
                                    <p class="card-text">Practice by lecture topics</p>
                                    <div class="mt-3">
                                        <button class="btn btn-outline-primary m-1" onclick="startTopicQuiz('strategy')">Marketing Strategy</button>
                                        <button class="btn btn-outline-primary m-1" onclick="startTopicQuiz('environment')">Environmental Scanning</button>
                                        <button class="btn btn-outline-primary m-1" onclick="startTopicQuiz('consumer')">Consumer Behavior</button>
                                        <button class="btn btn-outline-primary m-1" onclick="startTopicQuiz('market')">Market Segmentation</button>
                                        <button class="btn btn-outline-primary m-1" onclick="startTopicQuiz('product')">Product Strategy</button>
                                        <button class="btn btn-outline-primary m-1" onclick="startTopicQuiz('price')">Pricing Strategy</button>
                                        <button class="btn btn-outline-primary m-1" onclick="startTopicQuiz('channel')">Channel Strategy</button>
                                        <button class="btn btn-outline-primary m-1" onclick="startTopicQuiz('promotion')">Promotion Strategy</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }
        
        // Refresh progress display if on progress page
        const progressContainer = document.getElementById('progress-container');
        if (progressContainer && progressContainer.style.display !== 'none') {
            const activeSection = document.querySelector('.content-section:not([style*="display: none"])');
            if (activeSection && activeSection.id === 'progress') {
                loadProgress();
            }
        }
        
        alert('All progress has been reset successfully!');
    }
}

// Update progress display
function updateProgressDisplay() {
    const studyStats = document.getElementById('study-stats');
    const quizScores = document.getElementById('quiz-scores');
    
    if (studyStats) {
        const lectureProgress = Math.round((userProgress.studiedLectures.length / lectureData.length) * 100);
        studyStats.innerHTML = `
            <div class="stat-card">
                <div class="stat-number">${userProgress.studiedLectures.length}/${lectureData.length}</div>
                <div class="stat-label">Studied Lectures</div>
                <div class="progress mt-2">
                    <div class="progress-bar" style="width: ${lectureProgress}%"></div>
                </div>
            </div>
            <div class="stat-card">
                <div class="stat-number">${userProgress.caseStudiesCompleted.length}</div>
                <div class="stat-label">Completed Cases</div>
            </div>
            <div class="stat-card">
                <div class="stat-number">${userProgress.quizScores.length}</div>
                <div class="stat-label">Quiz Attempts</div>
            </div>
        `;
    }
    
    if (quizScores) {
        if (userProgress.quizScores.length === 0) {
            quizScores.innerHTML = '<p class="text-muted">No quiz attempts yet</p>';
        } else {
            const latestScore = userProgress.quizScores[userProgress.quizScores.length - 1];
            const averageScore = userProgress.quizScores.reduce((sum, score) => sum + score.percentage, 0) / userProgress.quizScores.length;
            
            quizScores.innerHTML = `
                <div class="score-summary">
                    <div class="latest-score">
                        <h5>Latest Score</h5>
                        <div class="score-value">${latestScore.score}/${latestScore.total}</div>
                        <div class="score-percentage">${latestScore.percentage}%</div>
                    </div>
                    <div class="average-score">
                        <h5>Average Score</h5>
                        <div class="score-value">${Math.round(averageScore)}%</div>
                    </div>
                </div>
                
                <h5>Recent Attempts</h5>
                <div class="table-responsive">
                    <table class="table">
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Score</th>
                                <th>Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${userProgress.quizScores.slice(-5).reverse().map(score => `
                                <tr>
                                    <td>${score.date}</td>
                                    <td>${score.score}/${score.total}</td>
                                    <td>${score.time}</td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            `;
        }
    }
}

// Simple internal translation function for quiz use only
function getQuizTranslation(text, targetLang) {
    if (typeof translations !== 'undefined' && translations[targetLang]) {
        const lowerText = text.toLowerCase();
        
        // Try exact match first (case insensitive)
        for (const [key, value] of Object.entries(translations[targetLang])) {
            if (key.toLowerCase() === lowerText) {
                return value;
            }
        }
        
        // Try partial match (case insensitive)
        for (const [key, value] of Object.entries(translations[targetLang])) {
            const keyLower = key.toLowerCase();
            if (lowerText.includes(keyLower) || keyLower.includes(lowerText)) {
                return value;
            }
        }
        
        // For quiz questions, try to find common marketing terms
        const marketingTerms = {
            'zh': {
                'en': {
                    'strategy': 'Strategy',
                    'marketing': 'Marketing',
                    'consumer': 'Consumer',
                    'behavior': 'Behavior',
                    'research': 'Research',
                    'analysis': 'Analysis',
                    'planning': 'Planning',
                    'targeting': 'Targeting',
                    'segmentation': 'Segmentation',
                    'positioning': 'Positioning',
                    'product': 'Product',
                    'price': 'Price',
                    'place': 'Place',
                    'promotion': 'Promotion',
                    'brand': 'Brand',
                    'advertising': 'Advertising',
                    'communication': 'Communication',
                    'digital': 'Digital',
                    'social': 'Social',
                    'media': 'Media',
                    'campaign': 'Campaign',
                    'customer': 'Customer',
                    'value': 'Value',
                    'relationship': 'Relationship',
                    'loyalty': 'Loyalty',
                    'satisfaction': 'Satisfaction',
                    'quality': 'Quality',
                    'service': 'Service',
                    'experience': 'Experience',
                    'innovation': 'Innovation',
                    'technology': 'Technology',
                    'data': 'Data',
                    'analytics': 'Analytics',
                    'performance': 'Performance',
                    'measurement': 'Measurement',
                    'evaluation': 'Evaluation',
                    'control': 'Control',
                    'organization': 'Organization',
                    'management': 'Management',
                    'leadership': 'Leadership',
                    'decision': 'Decision',
                    'making': 'Making',
                    'process': 'Process',
                    'system': 'System',
                    'method': 'Method',
                    'approach': 'Approach',
                    'framework': 'Framework',
                    'model': 'Model',
                    'theory': 'Theory',
                    'concept': 'Concept',
                    'principle': 'Principle',
                    'practice': 'Practice',
                    'application': 'Application',
                    'implementation': 'Implementation',
                    'execution': 'Execution',
                    'operation': 'Operation',
                    'activity': 'Activity',
                    'function': 'Function',
                    'role': 'Role',
                    'responsibility': 'Responsibility',
                    'objective': 'Objective',
                    'goal': 'Goal',
                    'mission': 'Mission',
                    'vision': 'Vision',
                    'value': 'Value',
                    'culture': 'Culture',
                    'environment': 'Environment',
                    'market': 'Market',
                    'industry': 'Industry',
                    'competition': 'Competition',
                    'competitive': 'Competitive',
                    'advantage': 'Advantage',
                    'strength': 'Strength',
                    'weakness': 'Weakness',
                    'opportunity': 'Opportunity',
                    'threat': 'Threat',
                    'swot': 'SWOT',
                    'pest': 'PEST',
                    'porter': 'Porter',
                    'five': 'Five',
                    'forces': 'Forces',
                    // Chinese to English mapping
                    'strategy': 'Strategy',
                    'marketing': 'Marketing',
                    'consumer': 'Consumer',
                    'behavior': 'Behavior',
                    'research': 'Research',
                    'analysis': 'Analysis',
                    'planning': 'Planning',
                    'targeting': 'Targeting',
                    'segmentation': 'Segmentation',
                    'positioning': 'Positioning',
                    'product': 'Product',
                    'price': 'Price',
                    'place': 'Place',
                    'promotion': 'Promotion',
                    'brand': 'Brand',
                    'advertising': 'Advertising',
                    'communication': 'Communication',
                    'digital': 'Digital',
                    'social': 'Social',
                    'media': 'Media',
                    'campaign': 'Campaign',
                    'customer': 'Customer',
                    'value': 'Value',
                    'relationship': 'Relationship',
                    'loyalty': 'Loyalty',
                    'satisfaction': 'Satisfaction',
                    'quality': 'Quality',
                    'service': 'Service',
                    'experience': 'Experience',
                    'innovation': 'Innovation',
                    'technology': 'Technology',
                    'data': 'Data',
                    'analytics': 'Analytics',
                    'performance': 'Performance',
                    'measurement': 'Measurement',
                    'evaluation': 'Evaluation',
                    'control': 'Control',
                    'organization': 'Organization',
                    'management': 'Management',
                    'leadership': 'Leadership',
                    'decision': 'Decision',
                    'making': 'Making',
                    'process': 'Process',
                    'system': 'System',
                    'method': 'Method',
                    'approach': 'Approach',
                    'framework': 'Framework',
                    'model': 'Model',
                    'theory': 'Theory',
                    'concept': 'Concept',
                    'principle': 'Principle',
                    'practice': 'Practice',
                    'application': 'Application',
                    'implementation': 'Implementation',
                    'execution': 'Execution',
                    'operation': 'Operation',
                    'activity': 'Activity',
                    'function': 'Function',
                    'role': 'Role',
                    'responsibility': 'Responsibility',
                    'objective': 'Objective',
                    'goal': 'Goal',
                    'mission': 'Mission',
                    'vision': 'Vision',
                    'value': 'Value',
                    'culture': 'Culture',
                    'environment': 'Environment',
                    'market': 'Market',
                    'industry': 'Industry',
                    'competition': 'Competition',
                    'competitive': 'Competitive',
                    'advantage': 'Advantage',
                    'strength': 'Strength',
                    'weakness': 'Weakness',
                    'opportunity': 'Opportunity',
                    'threat': 'Threat',
                    'swot': 'SWOT',
                    'pest': 'PEST',
                    'porter': 'Porter',
                    'five': 'Five',
                    'forces': 'Forces'
                }
            }
        };
        
        // Create Chinese to English mapping
        const chineseToEnglish = {
            'strategy': 'Strategy',
            'marketing': 'Marketing',
            'consumer': 'Consumer',
            'behavior': 'Behavior',
            'research': 'Research',
            'analysis': 'Analysis',
            'planning': 'Planning',
            'targeting': 'Targeting',
            'segmentation': 'Segmentation',
            'positioning': 'Positioning',
            'product': 'Product',
            'price': 'Price',
            'place': 'Place',
            'promotion': 'Promotion',
            'brand': 'Brand',
            'advertising': 'Advertising',
            'communication': 'Communication',
            'digital': 'Digital',
            'social': 'Social',
            'media': 'Media',
            'campaign': 'Campaign',
            'customer': 'Customer',
            'value': 'Value',
            'relationship': 'Relationship',
            'loyalty': 'Loyalty',
            'satisfaction': 'Satisfaction',
            'quality': 'Quality',
            'service': 'Service',
            'experience': 'Experience',
            'innovation': 'Innovation',
            'technology': 'Technology',
            'data': 'Data',
            'analytics': 'Analytics',
            'performance': 'Performance',
            'measurement': 'Measurement',
            'evaluation': 'Evaluation',
            'control': 'Control',
            'organization': 'Organization',
            'management': 'Management',
            'leadership': 'Leadership',
            'decision': 'Decision',
            'making': 'Making',
            'process': 'Process',
            'system': 'System',
            'method': 'Method',
            'approach': 'Approach',
            'framework': 'Framework',
            'model': 'Model',
            'theory': 'Theory',
            'concept': 'Concept',
            'principle': 'Principle',
            'practice': 'Practice',
            'application': 'Application',
            'implementation': 'Implementation',
            'execution': 'Execution',
            'operation': 'Operation',
            'activity': 'Activity',
            'function': 'Function',
            'role': 'Role',
            'responsibility': 'Responsibility',
            'objective': 'Objective',
            'goal': 'Goal',
            'mission': 'Mission',
            'vision': 'Vision',
            'culture': 'Culture',
            'environment': 'Environment',
            'market': 'Market',
            'industry': 'Industry',
            'competition': 'Competition',
            'competitive': 'Competitive',
            'advantage': 'Advantage',
            'strength': 'Strength',
            'weakness': 'Weakness',
            'opportunity': 'Opportunity',
            'threat': 'Threat',
            'swot': 'SWOT',
            'pest': 'PEST',
            'porter': 'Porter',
            'five': 'Five',
            'forces': 'Forces'
        };
        
        // Try Chinese to English translation
        let translatedText = text;
        for (const [chineseTerm, englishTerm] of Object.entries(chineseToEnglish)) {
            if (translatedText.includes(chineseTerm)) {
                translatedText = translatedText.replace(new RegExp(chineseTerm, 'g'), englishTerm);
            }
        }
        
        // If any translation was made, return the translated text
        if (translatedText !== text) {
            return translatedText;
        }
    }
    
    // If no translation found, return original text
    return text;
}

// Text selection translation feature disabled
// document.addEventListener('mouseup', function(e) {
//     const selection = window.getSelection();
//     const selectedText = selection.toString().trim();
//     
//     if (selectedText.length > 0) {
//         // Show translation tooltip
//         showTranslationTooltip(selectedText, e.pageX, e.pageY);
//     }
// });

// Translation tooltip and modal functions removed

// Export functions and variables for global access
window.showSection = showSection;
window.loadLecture = loadLecture;
window.loadCaseStudy = loadCaseStudy;
window.submitCaseStudyAnswers = submitCaseStudyAnswers;
window.resetProgress = resetProgress;
window.showSuggestedAnswers = showSuggestedAnswers;
window.gradeMyAnswers = gradeMyAnswers;
window.setLanguage = setLanguage;
window.switchLectureLanguage = switchLectureLanguage;
window.toggleLanguage = toggleLanguage;
window.startQuiz = startQuiz;
window.startTopicQuiz = startTopicQuiz;
window.startLectureQuiz = startLectureQuiz;
window.startAdaptiveQuiz = startAdaptiveQuiz;
window.selectAnswer = selectAnswer;
window.markLectureComplete = markLectureComplete;
window.continueToNextQuestion = continueToNextQuestion;
window.showQuizReview = showQuizReview;
window.filterReview = filterReview;
window.jumpToQuestion = jumpToQuestion;
window.showLectureSelection = showLectureSelection;

// Translation button functions
function enableTextSelection() {
    const modalBody = document.getElementById('lectureModalBody');
    if (modalBody) {
        modalBody.classList.add('text-selection-enabled');
        modalBody.style.userSelect = 'text';
        console.log('Text selection enabled for lecture content');
    }
}

function translateSelection() {
    const selection = window.getSelection();
    const selectedText = selection.toString().trim();
    
    if (selectedText) {
        console.log('Selected text for translation:', selectedText);
        // Simple translation using existing translation function
        if (typeof getQuizTranslation === 'function') {
            const translatedText = getQuizTranslation(selectedText);
            alert(`Translation:\n\nOriginal: ${selectedText}\nTranslated: ${translatedText}`);
        }
    } else {
        alert('Please select some text first');
    }
}

function clearSelection() {
    window.getSelection().removeAllRanges();
    const modalBody = document.getElementById('lectureModalBody');
    if (modalBody) {
        modalBody.classList.remove('text-selection-enabled');
    }
    console.log('Text selection cleared');
}

function enableQuizTextSelection() {
    const quizContainer = document.getElementById('quiz-container');
    if (quizContainer) {
        quizContainer.classList.add('text-selection-enabled');
        quizContainer.style.userSelect = 'text';
        document.getElementById('quiz-translation-controls').style.display = 'block';
        console.log('Text selection enabled for quiz content');
    }
}

function translateQuizSelection() {
    const selection = window.getSelection();
    const selectedText = selection.toString().trim();
    
    if (selectedText) {
        console.log('Selected quiz text for translation:', selectedText);
        if (typeof getQuizTranslation === 'function') {
            const translatedText = getQuizTranslation(selectedText);
            alert(`Translation:\n\nOriginal: ${selectedText}\nTranslated: ${translatedText}`);
        }
    } else {
        alert('Please select some text first');
    }
}

function clearQuizSelection() {
    window.getSelection().removeAllRanges();
    const quizContainer = document.getElementById('quiz-container');
    if (quizContainer) {
        quizContainer.classList.remove('text-selection-enabled');
    }
    console.log('Quiz text selection cleared');
}

// Export translation functions
window.enableTextSelection = enableTextSelection;
window.translateSelection = translateSelection;
window.clearSelection = clearSelection;
window.enableQuizTextSelection = enableQuizTextSelection;
window.translateQuizSelection = translateQuizSelection;
window.clearQuizSelection = clearQuizSelection;

// Export currentLanguage variable for translations.js access
Object.defineProperty(window, 'currentLanguage', {
    get: function() { return currentLanguage; },
    set: function(value) { currentLanguage = value; }
});
