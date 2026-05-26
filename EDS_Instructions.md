# EMERSON DESIGN SYSTEM (EDS) - AI AGENT CONFIGURATION & INSTRUCTIONS
`@context-type`: System Prompt Extension / AI Coding Instructions
`@target-agents`: GitHub Copilot, Cursor (.cursorrules), Claude, ChatGPT, Gemini, Codex
`@strict-enforcement`: Level 10 (Zero deviations permitted)

---

## 1. CORE DIRECTIVES (ZERO TOLERANCE)
* **EDS Components First:** Before generating any UI element, you MUST check the Emerson Design System library. Recreating existing elements (e.g., inputs, buttons, modals, dropdowns) using native HTML primitives (`<button>`, `<select>`) or unstyled custom divs is strictly forbidden.
* **No Raw CSS or Hardcoded Inline Styles:** You must NEVER write hardcoded hex values, RGB values, or pixel dimensions for colors, spacing, radius, or typography. You must exclusively use the approved EDS Design Tokens listed below.
* **Layout Utilities Only:** Do not create ad-hoc layouts using vanilla `div` elements with custom margins or padding. You must build all page structures, sections, and item groups using official EDS Layout primitives (`<Flex>`, `<Grid>`, `<Container>`, `<Box>`).
* **Zero Arbitrary Breakpoints:** Do not invent responsive breakpoints. Use the native, responsive token hooks embedded within EDS components or utility classes.

---

## 2. DESIGN TOKENS & VARIABLE ENFORCEMENT

If you are writing custom styling rules inside an allowed component style block, you must map your properties to the exact CSS variables below:

### 2.1 Color Palette
* **Brand / Primary Core:** `var(--eds-color-brand-primary)`
* **Surfaces & Backgrounds:**
  * Default Page Background: `var(--eds-color-bg-primary)`
  * Secondary Surface/Sidebar: `var(--eds-color-bg-secondary)`
  * Cards / Elevated Containers: `var(--eds-color-bg-surface)`
* **Borders & Dividers:** `var(--eds-color-border-muted)`
* **Text Hierarchy:**
  * High Emphasis / Body Text: `var(--eds-color-text-primary)`
  * Medium Emphasis / Subtext: `var(--eds-color-text-secondary)`
  * Interactive / Anchor Links: `var(--eds-color-text-link)`

### 2.2 Spacing & Layout (4px Base Grid)
All margins, paddings, gaps, and structural offsets must adhere strictly to this scale:
* `var(--eds-space-1)` = 4px  | `var(--eds-space-2)` = 8px  | `var(--eds-space-3)` = 12px[cite: 1]
* `var(--eds-space-4)` = 16px | `var(--eds-space-6)` = 24px | `var(--eds-space-8)` = 32px[cite: 1]

### 2.3 Typography & Hierarchy
* **Font Family:** `var(--eds-font-family-sans)` (Inter/System Sans)[cite: 1]
* **Font Sizes:**
  * Small (Captions/Meta): `var(--eds-text-sm)` (12px)[cite: 1]
  * Base (Default Body): `var(--eds-text-base)` (14px)[cite: 1]
  * Large (Subheadings): `var(--eds-text-lg)` (16px)[cite: 1]
  * Heading 2 (Page Titles): `var(--eds-text-h2)` (24px)[cite: 1]

---

## 3. THIRD-PARTY LIBRARY INTEGRATION

### 3.1 Apache ECharts (Data Visualization)
When generating charts, you must explicitly bind the chart configuration options to the EDS theme context[cite: 1]. Never allow ECharts to fallback to its default color palettes or fonts[cite: 1].

* **Theme Color Order:** `['var(--eds-color-brand-primary)', 'var(--eds-color-data-vis-2)', 'var(--eds-color-data-vis-3)']`
* **Agent Dynamic Evaluation Rule:** Inject standard options structured exactly like this[cite: 1]:
```javascript
// Strict template for EDS chart initialization
const edsChartOptions = {
  color: [
    getComputedStyle(document.documentElement).getPropertyValue('--eds-color-brand-primary'),
    getComputedStyle(document.documentElement).getPropertyValue('--eds-color-data-vis-2')
  ],
  textStyle: {
    fontFamily: getComputedStyle(document.documentElement).getPropertyValue('--eds-font-family-sans'),
    color: getComputedStyle(document.documentElement).getPropertyValue('--eds-color-text-secondary')
  },
  grid: { containLabel: true, top: 16, bottom: 16, left: 12, right: 12 }
};
```