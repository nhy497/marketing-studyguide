import re
import random

# Read file
with open('practice-quiz-database.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Function to add filler words to make option longer
def extend_option(option, target_length):
    """Add descriptive words to make option longer without changing meaning"""
    fillers = [
        " (such as in marketing)",
        " in the current market",
        " according to marketing theory",
        " as defined by experts",
        " within the industry context",
        " based on research",
        " in business practice",
        " for strategic purposes"
    ]
    
    current = option.strip().strip('"')
    base_len = len(current)
    
    if base_len >= target_length:
        return f'"{current}"'
    
    # Try adding different combinations of fillers
    random.shuffle(fillers)
    for filler in fillers:
        new_text = current + filler
        if len(new_text) >= target_length:
            return f'"{new_text}"'
    
    # If still not enough, add multiple fillers
    for i in range(len(fillers)):
        new_text = current + fillers[i] + fillers[(i+1) % len(fillers)]
        if len(new_text) >= target_length:
            return f'"{new_text}"'
    
    return f'"{current}"'

# Find and process each question
def process_question(match):
    question_text = match.group(0)
    
    # Extract options
    options_match = re.search(r'options:\s*\[([^\]]+)\]', question_text, re.DOTALL)
    correct_match = re.search(r'correct:\s*(\d+)', question_text)
    
    if not options_match or not correct_match:
        return question_text
    
    correct_idx = int(correct_match.group(1))
    
    # Parse options
    options_str = options_match.group(1)
    options = []
    for opt in options_str.split(','):
        opt = opt.strip()
        if opt:
            # Remove quotes for processing
            opt_clean = opt.strip('"').strip("'")
            options.append(opt_clean)
    
    if len(options) != 5:
        return question_text
    
    # Calculate current lengths
    lengths = [len(opt) for opt in options]
    max_len = max(lengths)
    
    # Target length - make all options longer
    target_length = max_len + 15  # Add 15 chars to max
    
    # Extend all options
    new_options = []
    for i, opt in enumerate(options):
        # Add some randomness to target length (±10 chars)
        adjusted_target = target_length + random.randint(-10, 10)
        new_opt = extend_option(opt, adjusted_target)
        new_options.append(new_opt)
    
    # Check if correct is still the longest uniquely
    new_lengths = [len(opt.strip('"')) for opt in new_options]
    max_new = max(new_lengths)
    
    # If correct is uniquely the longest, extend a wrong answer to match/exceed it
    if new_lengths[correct_idx] == max_new and new_lengths.count(max_new) == 1:
        # Find a wrong answer to extend
        for i in range(5):
            if i != correct_idx:
                # Extend this wrong answer to be longer
                extra_filler = " for various strategic and operational reasons in modern business environments"
                new_options[i] = f'"{options[i]}{extra_filler}"'
                break
    
    # Rebuild options string
    options_replacement = ', '.join(new_options)
    
    # Replace in question text
    new_question = re.sub(
        r'options:\s*\[[^\]]+\]',
        f'options: [{options_replacement}]',
        question_text,
        flags=re.DOTALL
    )
    
    return new_question

# Process all questions
new_content = re.sub(r'\{\s*id:\s*\d+,[\s\S]*?correct:\s*\d+,[\s\S]*?\}', process_question, content)

# Write back
with open('practice-quiz-database.js', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Done! All options have been extended with varied lengths.")

# Verify
import subprocess
result = subprocess.run(['python', 'analyze_quiz.py'], capture_output=True, text=True)
print("\nVerification:")
print(result.stdout)
