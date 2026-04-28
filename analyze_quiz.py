import re

js_content = open('practice-quiz-database.js', 'r', encoding='utf-8').read()

# Extract all questions
questions = re.findall(r'\{\s*id:\s*\d+,[\s\S]*?\}', js_content)

issues = []
for q in questions:
    # Extract options
    options_match = re.search(r'options:\s*\[([^\]]+)\]', q)
    correct_match = re.search(r'correct:\s*(\d+)', q)
    id_match = re.search(r'id:\s*(\d+)', q)
    
    if options_match and correct_match and id_match:
        options_str = options_match.group(1)
        options = [opt.strip().strip('"') for opt in options_str.split(',')]
        correct_idx = int(correct_match.group(1))
        qid = int(id_match.group(1))
        
        # Calculate lengths
        lengths = [len(opt) for opt in options]
        max_len = max(lengths)
        correct_len = lengths[correct_idx]
        
        # Check if correct is the longest
        if correct_len == max_len and lengths.count(max_len) == 1:
            issues.append(f'Q{qid}: correct answer is longest ({correct_len} chars)')

print(f'Found {len(issues)} questions where correct answer is the longest:')
for issue in issues[:30]:
    print(issue)
