# Facultime - Academic Consultation Portal

Component-driven accessible web application built with **React 19** and **React-Bootstrap**.

## Components Built
1. **Navigation Menu (`NavigationMenu.jsx`)**: Uses semantic `<nav>`, list items, and `aria-current="page"` for active indicators.
2. **Input Form (`InputForm.jsx`)**: Implements strict `<label htmlFor>` bindings, explicit aria requirements, and dynamic alert regions.
3. **Accessible Button (`AccessibleButton.jsx`)**: Features high-contrast styling and custom high-visibility `:focus-visible` outlines for keyboard users.

## Accessibility Fixes & Optimizations
- Bound all form controls explicitly to form labels to resolve screen reader ambiguity.
- Ensured WCAG AA compliant text color contrasts against background elements.
- Implemented keyboard accessibility traps and clear visual focus indicators.

## Audit Screenshots
*(Insert your Lighthouse 100% score and Axe zero-violations screenshots here)*