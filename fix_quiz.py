import re

with open('quiz-database.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Lecture mapping based on section comments
lecture_patterns = [
    (r'LECTURE 1', 1),
    (r'LECTURE 2', 2),
    (r'LECTURE 3', 3),
    (r'LECTURE 4', 4),
    (r'LECTURE 5', 5),
    (r'LECTURE 6', 6),
    (r'LECTURE 7', 7),
    (r'LECTURE 8', 8),
    (r'LECTURE 9', 9),
]

lines = content.split('\n')
result = []
current_lecture = None
skip_until_next_lecture = False

for i, line in enumerate(lines):
    # Check for lecture section markers
    for pattern, lecture_id in lecture_patterns:
        if pattern in line and '===' in line:
            current_lecture = lecture_id
            result.append(line)
            break
    else:
        # Not a lecture marker line
        # Check if this is a question start without lectureId
        if current_lecture and line.strip() == '{':
            # Look ahead to check if this question already has lectureId
            ahead = '\n'.join(lines[i:min(i+5, len(lines))])
            if 'lectureId:' not in ahead:
                # Add lectureId
                result.append(line)
                result.append(f'        lectureId: {current_lecture},')
                continue
        result.append(line)

with open('quiz-database.js', 'w', encoding='utf-8') as f:
    f.write('\n'.join(result))

print('Fixed all lectureIds')
