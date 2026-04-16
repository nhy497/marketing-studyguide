// English-only translation system for Marketing Exam Preparation
const translations = {
    en: {
        // Navigation
        'nav.home': 'Home',
        'nav.lectures': 'Course Content',
        'nav.quiz': 'Mock Quiz',
        'nav.cases': 'Case Studies',
        'nav.progress': 'Learning Progress',
        'nav.language': 'Language',
        
        // Buttons
        'btn.start_quiz': 'Start Quiz',
        'btn.topic_quiz': 'Topic Quiz',
        'btn.lecture_quiz': 'Lecture Quiz',
        'btn.adaptive_quiz': 'Adaptive Quiz',
        'btn.take_quiz': 'Take Quiz',
        'btn.mark_complete': 'Mark as Complete',
        'btn.view_details': 'View Details',
        'btn.submit': 'Submit',
        'btn.next': 'Next',
        'btn.previous': 'Previous',
        'btn.finish': 'Finish',
        'btn.restart': 'Restart',
        
        // Sections
        'section.home': 'Home',
        'section.lectures': 'Course Content',
        'section.quiz': 'Mock Quiz',
        'section.cases': 'Case Studies',
        'section.progress': 'Learning Progress',
        
        // Lecture related
        'lecture.title': 'Lecture',
        'lecture.duration': 'Duration',
        'lecture.topics': 'Topics',
        'lecture.overview': 'Overview',
        'lecture.key_concepts': 'Key Concepts',
        'lecture.case_study': 'Case Study',
        'lecture.practical_application': 'Practical Application',
        'lecture.quiz_questions': 'Quiz Questions',
        
        // Quiz related
        'quiz.question': 'Question',
        'quiz.of': 'of',
        'quiz.score': 'Score',
        'quiz.time': 'Time',
        'quiz.correct': 'Correct',
        'quiz.incorrect': 'Incorrect',
        'quiz.explanation': 'Explanation',
        'quiz.result': 'Quiz Result',
        'quiz.percentage': 'Percentage',
        'quiz.performance': 'Performance',
        'quiz.recommendations': 'Recommendations',
        
        // Case study related
        'case.title': 'Case Study',
        'case.company': 'Company',
        'case.industry': 'Industry',
        'case.challenge': 'Challenge',
        'case.solution': 'Solution',
        'case.results': 'Results',
        'case.key_lessons': 'Key Lessons',
        'case.discussion_questions': 'Discussion Questions',
        'case.your_analysis': 'Your Analysis',
        'case.suggested_answers': 'Suggested Answers',
        
        // Progress related
        'progress.overall': 'Overall Progress',
        'progress.lectures_completed': 'Lectures Completed',
        'progress.quiz_taken': 'Quiz Taken',
        'progress.case_studies': 'Case Studies Completed',
        'progress.average_score': 'Average Score',
        'progress.time_spent': 'Time Spent',
        'progress.achievements': 'Achievements',
        
        // Messages
        'msg.loading': 'Loading...',
        'msg.no_data': 'No data available',
        'msg.quiz_completed': 'Quiz completed!',
        'msg.lecture_completed': 'Lecture marked as complete!',
        'msg.error': 'Error',
        'msg.success': 'Success',
        
        // Form labels
        'form.name': 'Name',
        'form.email': 'Email',
        'form.answer': 'Your Answer',
        'form.feedback': 'Feedback',
        
        // Time
        'time.minutes': 'minutes',
        'time.seconds': 'seconds',
        'time.hour': 'hour',
        'time.hours': 'hours',
        'time.day': 'day',
        'time.days': 'days',
        
        // Common
        'common.welcome': 'Welcome',
        'common.select': 'Select',
        'common.all': 'All',
        'common.none': 'None',
        'common.yes': 'Yes',
        'common.no': 'No',
        'common.cancel': 'Cancel',
        'common.confirm': 'Confirm',
        'common.save': 'Save',
        'common.edit': 'Edit',
        'common.delete': 'Delete',
        'common.search': 'Search',
        'common.filter': 'Filter',
        'common.sort': 'Sort'
    }
};

// Translation function - English only
function translateText(key, language) {
    // Always use English translations
    return translations.en[key] || key;
}

// Apply translations to page elements
function applyTranslations() {
    // Translate elements with data-translate attributes
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (key && translations.en[key]) {
            element.textContent = translations.en[key];
        }
    });
    
    // Translate elements with translation keys
    document.querySelectorAll('[translation-key]').forEach(element => {
        const key = element.getAttribute('translation-key');
        if (key && translations.en[key]) {
            element.textContent = translations.en[key];
        }
    });
    
    // Update placeholders
    document.querySelectorAll('[translation-placeholder]').forEach(element => {
        const key = element.getAttribute('translation-placeholder');
        if (key && translations.en[key]) {
            element.placeholder = translations.en[key];
        }
    });
    
    // Update titles
    document.querySelectorAll('[translation-title]').forEach(element => {
        const key = element.getAttribute('translation-title');
        if (key && translations.en[key]) {
            element.title = translations.en[key];
        }
    });
}

// Export for global access
if (typeof window !== 'undefined') {
    window.translations = translations;
    window.translateText = translateText;
    window.applyTranslations = applyTranslations;
}
