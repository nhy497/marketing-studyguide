# Marketing Study Website

A comprehensive marketing study website with interactive learning features including lectures, quizzes, and case studies.

## Features

- **Interactive Lectures**: Structured marketing content with visual elements
- **Quiz System**: Multiple quiz types (Full, Topic, Lecture, Adaptive)
- **Case Studies**: Practical case studies with suggested answers and grading
- **Progress Tracking**: Monitor learning progress and quiz scores
- **Bilingual Support**: English/Chinese language switching
- **Translation Tool**: Text selection and translation functionality
- **Responsive Design**: Works on all devices

## Deployment to GitHub Pages

### Method 1: Using GitHub Pages Directly

1. Push this repository to GitHub
2. Go to repository settings
3. Scroll down to "GitHub Pages" section
4. Select "Deploy from a branch"
5. Choose "main" branch and "/ (root)" folder
6. Click "Save"

### Method 2: Using GitHub Actions

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v2
    
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      if: github.ref == 'refs/heads/main'
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./
```

### Important Notes

- The `.nojekyll` file is included to bypass Jekyll processing
- All JavaScript files use UTF-8 encoding
- The website is fully client-side and requires no server
- All assets are self-contained in this repository

## File Structure

```
marketing_study_website/
|-- index.html          # Main HTML file
|-- app.js              # Main JavaScript application
|-- styles.css          # CSS styles
|-- quiz-database.js    # Quiz questions database
|-- translations.js     # Translation data
|-- .nojekyll          # GitHub Pages bypass file
|-- README.md           # This file
```

## Usage

1. Open `index.html` in a web browser
2. Navigate through different sections:
   - **Study**: Browse lectures and learning materials
   - **Quiz**: Take various types of quizzes
   - **Case**: Analyze case studies and submit answers
   - **Progress**: View learning statistics

## Technical Details

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Framework**: Bootstrap 5 for UI components
- **Storage**: LocalStorage for progress tracking
- **Compatibility**: Modern browsers only
- **Encoding**: UTF-8

## License

This project is for educational purposes only.
