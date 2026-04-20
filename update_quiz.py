import re

# Read the file
with open('quiz-database.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Lecture ID mapping based on section comments
lecture_sections = [
    (r'LECTURE 2', 2),
    (r'LECTURE 3', 3),
    (r'LECTURE 4', 4),
    (r'LECTURE 5', 5),
    (r'LECTURE 6', 6),
    (r'LECTURE 7', 7),
    (r'LECTURE 8', 8),
    (r'LECTURE 9', 9),
]

# Track current lecture and add lectureId to questions
lines = content.split('\n')
result = []
current_lecture = None

for i, line in enumerate(lines):
    # Check for lecture section markers
    for pattern, lecture_id in lecture_sections:
        if pattern in line:
            current_lecture = lecture_id
            break
    
    # Check if this is the start of a question object (has { followed by question:)
    if current_lecture and line.strip() == '{':
        # Look ahead to see if this is a question object
        next_lines = lines[i+1:i+4]
        next_content = '\n'.join(next_lines)
        if 'question:' in next_content and 'lectureId:' not in next_content:
            result.append(line)
            result.append(f'        lectureId: {current_lecture},')
            continue
    
    result.append(line)

# Write back
with open('quiz-database.js', 'w', encoding='utf-8') as f:
    f.write('\n'.join(result))

print('Added lectureId to existing questions')
print(f'Total lines: {len(result)}')
