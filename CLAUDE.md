# CLAUDE.md - Portfolio Website

## Project Overview
A modern, minimal portfolio website built with vanilla HTML, CSS, and JavaScript.

## Current Goals
- [ ] Build responsive navigation
- [ ] Create animated hero section
- [ ] Add projects grid
- [ ] Build contact form
- [ ] Implement dark mode toggle

## Tech Stack
- **HTML5**: Semantic structure
- **CSS3**: Custom properties (variables), Flexbox/Grid, and Dark Mode support
- **JavaScript**: Vanilla JS for interactivity and project filtering

## Development Commands
Since this is a vanilla project, no build tools are currently configured. Use a local development server to view changes.

- **Live Server**: Use VS Code Live Server extension or `python -m http.server 8000`

## Code Style & Conventions
- **HTML**: Standard semantic tags. Use `class` for styling and `id` for JS hooks.
- **CSS**:
  - Use CSS Variables for colors, spacing, and transition timing.
  - Implement dark mode using `@media (prefers-color-scheme: dark)` or a `.dark-theme` class toggle.
  - Minimalist design: ample white space, clean typography (e.g., Inter, System UI).
- **JavaScript**:
  - Use ES6+ syntax (const/let, arrow functions, template literals).
  - Modularize code (even if not using ES modules yet) for clarity.

## Design System

### Color Palette
- **Primary**: Blue (#3b82f6) - Used for primary actions and highlights.
- **Secondary**: Purple (#8b5cf6) - Used for accents and secondary elements.
- **Neutral**:
  - Light mode: White (#ffffff) background, Dark Gray (#1f2937) text.
  - Dark mode: Dark Blue/Gray (#0f172a) background, Light Gray (#f8fafc) text.

### Spacing Scale (8px base)
- `4px` (0.25rem) - nano
- `8px` (0.5rem) - small
- `16px` (1rem) - base/medium
- `24px` (1.5rem) - large
- `32px` (2rem) - x-large

### Typography
- **Font**: Inter, system-ui, sans-serif.
- **Scale**:
  - H1: 2.25rem (36px) / Bold
  - H2: 1.875rem (30px) / Semi-bold
  - H3: 1.5rem (24px) / Semi-bold
  - Body: 1rem (16px) / Regular
  - Small: 0.875rem (14px) / Regular

### Component Patterns
- **Buttons**: Rounded corners (8px), subtle hover transitions.
- **Cards**: Minimal borders or subtle shadows, padding of 24px.
- **Links**: Underlined on hover, blue primary color.

## Project Structure (Target)
- `index.html` - Main entry point
- `assets/`
  - `css/` - Stylesheets
  - `js/` - Logic
  - `images/` - Project screenshots and icons
