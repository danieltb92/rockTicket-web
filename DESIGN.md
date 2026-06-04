---
version: alpha
name: "RockTicket App"
description: "High-performance rock concert ticketing application landing page."

colors:
  # Semantic Roles
  primary: "#141454"
  secondary: "#007E7C"
  accent: "#00CDC8"
  surface: "#000000"
  neutral: "#999999"
  white: "#FFFFFF"
  
  # Primary Scale
  primary-900: "#141454"
  primary-700: "#292952"
  primary-500: "#57578A"
  primary-300: "#9494BC"
  primary-100: "#C7C7DF"
  
  # Secondary Scale
  secondary-900: "#007E7C"
  secondary-600: "#4FAAA8"
  secondary-300: "#93C9C7"
  secondary-100: "#D1E3E3"
  secondary-3: "#001D1D"
  secondary-2: "#013333"
  secondary-1: "#00504E"
  
  # Teal Scale (Global)
  teal-700: "#007E7C"
  teal-600: "#009E9B"
  teal-500: "#00CDC8"
  teal-400: "#00DCD7"
  teal-300: "#00EEE9"
  teal-200: "#41FFFB"
  teal-100: "#B6FFFC"
  teal-50: "#E1FFFD"
  teal-1: "#F0FFFE"
  
  # Neutrals
  neutral-900: "#000000"
  neutral-800: "#333333"
  neutral-700: "#666666"
  neutral-500: "#999999"
  neutral-300: "#CCCCCC"
  neutral-200: "#E5E5E5"

typography:
  # Headings (Squada One)
  h1:
    fontFamily: "Squada One"
    fontSize: "40px"
    lineHeight: 1.25
    letterSpacing: "0.05em"
  h2:
    fontFamily: "Squada One"
    fontSize: "32px"
    lineHeight: 1.25
    letterSpacing: "0.05em"
  h3:
    fontFamily: "Squada One"
    fontSize: "24px"
    lineHeight: 1.25
    letterSpacing: "0.03em"
  h4:
    fontFamily: "Squada One"
    fontSize: "18px"
    lineHeight: 1.25
    letterSpacing: "0.05em"
  h5:
    fontFamily: "Squada One"
    fontSize: "14px"
    lineHeight: 1.25
    letterSpacing: "0.10em"
    
  # Titles (Source Sans Pro Bold)
  title-h1:
    fontFamily: "Source Sans Pro"
    fontWeight: 700
    fontSize: "60px"
    lineHeight: "30px"
    letterSpacing: "0.03em"
  title-h2:
    fontFamily: "Source Sans Pro"
    fontWeight: 700
    fontSize: "40px"
    lineHeight: "30px"
    letterSpacing: "0.03em"
    
  # Body (Source Sans Pro)
  body-16:
    fontFamily: "Source Sans Pro"
    fontSize: "16px"
    lineHeight: "20px"
  body-14:
    fontFamily: "Source Sans Pro"
    fontSize: "14px"
    lineHeight: "20px"
  body-12:
    fontFamily: "Source Sans Pro"
    fontSize: "12px"
    lineHeight: "20px"

spacing:
  "0": "0px"
  "1": "4px"
  "2": "8px"
  "3": "12px"
  "4": "16px"
  "5": "20px"
  "6": "24px"
  "8": "32px"
  "10": "40px"
  "12": "48px"
  "16": "64px"
  padding-desktop: "32px"
  padding-mobile: "16px"

rounded:
  none: "0px"
  xs: "4px"
  sm: "6px"
  md: "8px"
  lg: "12px"
  xl: "16px"
  full: "999px"

components:
  button-large:
    font: "{typography.body-16}"
    fontWeight: 700
    fontSize: "18px"
    lineHeight: "24px"
    borderRadius: "{rounded.md}"
  button-medium:
    font: "{typography.body-16}"
    fontWeight: 700
    fontSize: "16px"
    lineHeight: "14px"
  button-small:
    font: "{typography.body-14}"
    fontWeight: 700
    fontSize: "14px"
    lineHeight: "20px"
---

# Overview
RockTicket is a high-performance landing page designed to promote a rock concert ticketing application. Built with **Astro 4.x**, it leverages the **Islands Architecture** to deliver a fast, SEO-friendly experience with selective interactivity provided by **React** and **Framer Motion**.

# Colors
The color palette is centered around deep blues (`primary`) and vibrant teal accents (`secondary`/`accent`). 
- **Primary**: Used for core branding and deep background elements.
- **Secondary/Accent**: Used for CTAs, highlights, and interactive elements to provide high contrast against dark backgrounds.
- **Neutrals**: A grayscale range for text, borders, and secondary surfaces.

# Typography
We use **Squada One** for headings to give a bold, industrial, and "rock" feel. **Source Sans Pro** is used for body text and UI elements to ensure high legibility and a modern look.
- **Headings**: All caps or bold weights preferred.
- **Body**: Clean sans-serif with generous line height.

# Spacing & Grid
The layout follows a **4px base unit**. Most spacing values are multiples of 8px to ensure visual rhythm.
- **Grid**: 4-column layout on mobile, expanding to 12-column on desktop with a 16px gutter.
- **Container**: Max width of 1280px with 32px horizontal padding.

# Shapes & Depth
Corners are generally rounded (`rounded.md` or `rounded.lg`) to balance the sharp typography with a modern app feel.
- **Buttons**: Use `rounded.md` (8px).
- **Cards**: Use `rounded.lg` (12px).
- **Interactive Elements**: Subtle hover states and motion-driven depth instead of heavy box shadows.

# Components
- **Buttons**: High contrast, bold text, defined padding.
- **Feature Cards**: Transparent backgrounds with borders or subtle fills, clear icon placement.
- **Hero Video**: Full-bleed background with centered typography.

# Do's and Don'ts
- **Do**: Use high-contrast teal for primary CTAs.
- **Do**: Maintain generous whitespace around headings.
- **Don't**: Use light backgrounds for main sections; the app follows a "Dark Mode" aesthetic.
- **Don't**: Overuse animations; keep motion meaningful and tied to user interactions.

# Responsive Behavior
- **Mobile First**: All sections are designed for single-column mobile view first.
- **Breakpoints**: 
  - `sm`: 640px
  - `md`: 768px (Standard Tablet)
  - `lg`: 1024px (Laptop)
  - `xl`: 1280px (Desktop)

# Agent Prompt Guide
- When generating new components, always use the `Squada One` font for titles.
- Prioritize accessibility by ensuring teal accents on dark backgrounds maintain at least a 4.5:1 contrast ratio.
- Use Tailwind utility classes that correspond to the tokens defined in the frontmatter.
