// English version of marketing quiz questions for exam preparation
const englishQuizQuestions = [
    // Lecture 2: Marketing Concepts and Strategy
    {
        question: "What is an organization's long-term action plan that achieves goals while providing unique customer experiences?",
        options: ["Tactics", "Strategy", "Operations", "Plan", "Goals"],
        correct: 1,
        explanation: "Strategy is an organization's long-term action plan, not just short-term tactics, but the overall direction guiding long-term development."
    },
    {
        question: "In the strategic marketing process, which stage involves setting the organization's mission, vision, and goals?",
        options: ["Implementation stage", "Evaluation stage", "Planning stage", "Control stage"],
        correct: 2,
        explanation: "The planning stage is the first step in the strategic marketing process, involving setting the organization's long-term direction and goals."
    },
    {
        question: "Apple's mission is 'change the world through innovative products.' Which core element of strategy does this primarily reflect?",
        options: ["Short-term profit maximization", "Unique value proposition", "Cost leadership", "Market share maximization"],
        correct: 1,
        explanation: "Apple's mission reflects providing a unique value proposition, which is one of the core elements of strategy."
    },
    {
        question: "When developing marketing strategy, which of the following is NOT an external environmental factor that needs to be analyzed first?",
        options: ["Economic environment", "Technological environment", "Employee satisfaction", "Political-legal environment", "Socio-cultural environment"],
        correct: 2,
        explanation: "Employee satisfaction is an internal environmental factor. External environment analysis mainly focuses on economic, technological, political-legal, and socio-cultural factors."
    },
    {
        question: "What does the 'S' in SWOT analysis represent?",
        options: ["Strengths", "Weaknesses", "Opportunities", "Threats"],
        correct: 0,
        explanation: "In SWOT analysis, S represents Strengths, which refer to the internal favorable conditions of an organization."
    },
    {
        question: "What attitude should companies adopt when facing market opportunities?",
        options: ["Conservative waiting", "Active seizing", "Ignoring", "Passive response"],
        correct: 1,
        explanation: "When facing market opportunities, companies should actively seize them, proactively developing and utilizing opportunities to create value."
    },
    {
        question: "Which of the following is NOT a characteristic of strategic marketing?",
        options: ["Long-term orientation", "Customer-centric", "Price competition", "Overall coordination", "Value creation"],
        correct: 2,
        explanation: "Strategic marketing emphasizes long-term orientation, customer-centricity, overall coordination, and value creation. Price competition is just one tool."
    },
    {
        question: "What characteristics should a company's core competitive advantage possess?",
        options: ["Easy to imitate", "Short-term effective", "Sustainable", "Low cost", "High technology"],
        correct: 2,
        explanation: "Core competitive advantage should be sustainable, able to bring long-term competitive advantages to the company, rather than being easily imitated or short-term effective."
    },
    {
        question: "Which factor is most critical in the strategy implementation process?",
        options: ["Sufficient funding", "Employee cooperation", "Market response", "Advanced technology", "Management support"],
        correct: 4,
        explanation: "Management support is the most critical factor in strategy implementation, requiring comprehensive top-down support and resource allocation."
    },
    {
        question: "What principles should companies follow when setting marketing objectives?",
        options: ["Vagueness", "Specificity", "Idealism", "Complexity", "Singularity"],
        correct: 1,
        explanation: "Marketing objectives should be specific, measurable, achievable, relevant, and time-bound, as required by the SMART principle."
    },
    {
        question: "What is the main difference between strategic marketing and traditional marketing?",
        options: ["Lower prices", "Better products", "Long-term perspective", "More channels", "Stronger promotion"],
        correct: 2,
        explanation: "The main difference between strategic marketing and traditional marketing lies in the long-term perspective, focusing on building long-term customer relationships and continuous value creation."
    },
    {
        question: "What is the most important factor to consider when companies conduct market positioning?",
        options: ["Cost structure", "Target customer needs", "Number of competitors", "Technical capabilities", "Employee skills"],
        correct: 1,
        explanation: "In market positioning, target customer needs are the most important consideration. You must deeply understand and meet customers' real needs."
    },
    {
        question: "What is typically the final step in the strategic marketing process?",
        options: ["Planning", "Implementation", "Control", "Evaluation", "Adjustment"],
        correct: 3,
        explanation: "Evaluation is typically the final step in the strategic marketing process, assessing the effectiveness of strategies and providing feedback for improvement."
    },
    {
        question: "Which of the following best describes market segmentation?",
        options: ["Targeting all customers", "Dividing market into homogeneous groups", "Focusing on premium customers only", "Ignoring customer differences", "Random marketing approach"],
        correct: 1,
        explanation: "Market segmentation involves dividing the market into distinct groups of buyers with different needs, characteristics, or behaviors."
    },
    {
        question: "What is the primary purpose of conducting a marketing audit?",
        options: ["Increase prices", "Reduce staff", "Evaluate marketing effectiveness", "Create new products", "Improve office decoration"],
        correct: 2,
        explanation: "The primary purpose of a marketing audit is to comprehensively evaluate the effectiveness of marketing activities and identify areas for improvement."
    }
];

// Export for use in main application
if (typeof module !== 'undefined' && module.exports) {
    module.exports = englishQuizQuestions;
} else if (typeof window !== 'undefined') {
    window.englishQuizQuestions = englishQuizQuestions;
}
