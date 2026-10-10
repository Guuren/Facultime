# Facultime - Academic Consultation Portal

A component-driven accessible web application built with **React 19** and **React-Bootstrap** designed to streamline student-faculty academic consultations with full adherence to WAI-ARIA standards.

---

## 🚀 Components Built

1. **Navigation Menu (`NavigationMenu.jsx`)**
   - Utilizes semantic HTML5 `<nav>` elements and list structures (`<ul>`, `<li>`).
   - Implements `aria-current="page"` to clearly indicate active navigation items for screen readers.

2. **Input Form (`InputForm.jsx`)**
   - Features explicitly bound `<label htmlFor>` tags linked directly to form control IDs to eliminate screen-reader ambiguity.
   - Includes required field indicators, live feedback alert regions (`aria-live="polite"`), and clear validation attributes (`aria-required="true"`).

3. **Accessible Button (`AccessibleButton.jsx`)**
   - Reusable action button styled for maximum contrast.
   - Designed with custom high-visibility `:focus-visible` outline rings to support seamless keyboard-only navigation.

---

## 🛠️ Accessibility Issues Fixed

During development and auditing with **Lighthouse** and **Axe**, the following accessibility and contrast issues were successfully resolved:

1. **Color Contrast Thresholds (WCAG 2 AA/AAA Compliance)**
   - *Issue:* Default Bootstrap muted text (`text-muted`), secondary grays, and light input borders (`#dee2e6`) failed minimum foreground-to-background contrast requirements.
   - *Fix:* Replaced low-contrast grays with pure black text (`#000000`), applied solid high-contrast dark borders (`2px solid #212529`), and explicitly styled input placeholders to meet or exceed strict 4.5:1 text and 3:1 UI component contrast thresholds.

2. **Heading Hierarchy & Sequential Order**
   - *Issue:* Lighthouse flagged heading elements out of sequential descending order when card titles skipped heading levels (jumping from `<h1>` to `<h4>`).
   - *Fix:* Refactored all major section titles and card headers to strictly follow a descending order from `<h1>` down to semantic `<h2>` elements.

3. **Form Control Associations**
   - *Issue:* Screen readers require explicit association between label elements and form inputs.
   - *Fix:* Configured explicit `controlId` props in React-Bootstrap form groups, ensuring every input has an accessible name.

4. **Keyboard Focus Indicators**
   - *Issue:* Default browser focus rings can be faint or difficult to track for users navigating via keyboard.
   - *Fix:* Added custom `:focus-visible` CSS outlines with high-contrast accent borders for clear keyboard focus management.

---

## 📊 Audit & Test Results

### Google Lighthouse Accessibility Audit
- **Score:** 100 / 100
<img width="767" height="514" alt="image" src="https://github.com/user-attachments/assets/8e3160c8-48e1-4332-b9ee-7de169d73414" />



### Axe / WAVE DevTools Audit
- **Violations Found:** 0
<img width="1201" height="728" alt="image" src="https://github.com/user-attachments/assets/0a330228-0cf5-4bef-bf34-36354c7425bd" />


---

## 📦 Getting Started & Running Locally

1. Clone the repository:
   ```bash
   git clone <your-repository-url>
   cd facultime
