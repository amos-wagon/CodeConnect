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
* **Honor Request Scope:** When the user asks for a narrow additive UI change (for example, "add two inputs and a submit button"), implement only the requested controls and the minimal structure needed for accessibility and layout. Do not add extra cards, page headers, section titles, helper copy, or decorative framing unless the request explicitly asks for them or an existing surrounding pattern requires them.

## Layouts

### Application Layout
* Use `eds-application-layout` for screens that need a main area with optional left and right panels.
* Choose this when the page needs resizable side workspaces; choose `eds-shell-template` for global app chrome only.
* Put main content in the default slot, and side content in `left-panel` and `right-panel`.
* Control visibility with `open-left`/`openLeft` and `open-right`/`openRight`.
* Control width with `left-size`, `right-size`, `left-max-width`, and `right-max-width`.
* Disable resizing with `disable-left-resize` and `disable-right-resize` when required.
* Defaults: `open-left` false, `open-right` false, `left-size` 240, `right-size` 300, `left-max-width` none, `right-max-width` none, `disable-left-resize` false, `disable-right-resize` false.

### Panel Layout
* Use `eds-panel-layout` for panel-style containers with optional header and footer.
* Choose this for internal panel content regions, not for top-level app page framing.
* Use `heading` and `subheading` for panel titles.
* Use `closable` to show a close button, and set `close-label` for accessible close text.
* Use slots: default for body content, `header-actions` for right-side header controls, and `footer` for footer actions/content.
* Handle `eds-close` when the user selects the close button.
* Defaults: `heading` empty, `subheading` empty, `closable` false, `close-label` Close.

### Shell Template
* Use `eds-shell-template` for top-level app chrome.
* Use this for persistent navigation and app-level bars, not for per-page split-panel work areas.
* Use the `sidenav` slot for navigation and the `appbar` slot for top actions/context.
* Place page content in the default slot.
* Keep landmark structure clear: navigation in sidenav, banner actions in appbar, and main content in the default content area.

### Page
* Use `eds-page-header` at the top of page content to provide page context and navigation cues.
* Set the page title with the `heading` property.
* Use `icon` for a left-side page icon, `breadcrumb` for hierarchy/navigation, and `badge` for status.
* Use the `controls` slot for right-aligned page actions (for example, buttons or menus).
* Keep page-header content concise and place only page-level actions in `controls`.
* Do not build bespoke page title bars with manual `h1` + badge + action button layouts unless an explicit product requirement states page-header cannot be used.
* Confirm the page uses `eds-page-header` and that breadcrumb, badge/status, and primary page actions are in page-header slots, not custom layout wrappers.

### Card Layouts
* Use approved EDS card components (sl-card, eds-selectable-card, eds-catalog-card) for card-based feature grids.
* **Uniform Height Required:** Cards in the same layout group must use a uniform height to keep rows visually aligned, by stretching 100% to grid row height.
* **Width Constraints Required:** Card layouts must define both minimum and maximum width behavior for card items, with the effective width constraint enforced by the layout/grid track definition.
* **Track-Level Width Enforcement:** Apply card width constraints at the grid column/track level (for example, `grid-template-columns: repeat(auto-fit, minmax(minWidth, maxWidth))`) instead of relying only on child card `max-width`.
* **Tokenized Sizing Only:** Height, min-width, max-width, internal spacing, and typography must use EDS/Shoelace tokens (for example `var(--sl-spacing-*)`, `var(--sl-font-size-*)`) and not hardcoded px values.
* **Responsive Grid Rule:** Use tokenized grid gaps so cards reflow predictably across viewport sizes.

---

## 2. DESIGN TOKENS & VARIABLE ENFORCEMENT

If you are writing custom styling rules inside an allowed component style block, you must map your properties to the exact CSS variables below:

### 2.1 Color Palette
* **Brand / Primary Core:** `var(--eds-interactive-default)`
* **Brand Ramp (when shade selection is needed):** `var(--eds-color-brand-50)` ... `var(--eds-color-brand-950)`
* **Surfaces & Backgrounds:**
  * Default Page Background: `var(--eds-background-default)`
  * Secondary Surface/Sidebar: `var(--eds-background-weak)`
  * Cards / Elevated Containers: `var(--eds-background-card)`
* **Borders & Dividers:** `var(--eds-border-default)`
* **Text Hierarchy:**
  * High Emphasis / Body Text: `var(--eds-text-default)`
  * Medium Emphasis / Subtext: `var(--eds-text-secondary)`
  * Interactive / Anchor Links: `var(--eds-text-link)`

### 2.2 Spacing & Layout (4px Base Grid)
All margins, paddings, gaps, and structural offsets must adhere strictly to this scale:
* `var(--sl-spacing-3x-small)` = 4px | `var(--sl-spacing-2x-small)` = 6px | `var(--sl-spacing-x-small)` = 8px
* `var(--sl-spacing-small)` = 12px | `var(--sl-spacing-medium)` = 16px | `var(--sl-spacing-medium-plus)` = 20px
* `var(--sl-spacing-large)` = 24px | `var(--sl-spacing-x-large)` = 32px

### 2.3 Typography & Hierarchy
* **Font Family:** `var(--sl-font-sans)`
* **Paragraph Line Height:** `<p>` elements must use `var(--sl-line-height-dense)`.
* **Font Sizes:**
  * Small (Captions/Meta): `var(--sl-font-size-small)`
  * Base (Default Body): `var(--sl-font-size-medium)`
  * Large (Subheadings): `var(--sl-font-size-large)`
  * Heading 2 (Page Titles): `var(--sl-font-size-2x-large)`

---

## 3. FORMS (UI BUILDING INSTRUCTIONS)

When building any form UI, follow these mandatory implementation rules:

* **Use EDS/Shoelace Form Components Only:** Prefer approved components such as `sl-input`, `sl-textarea`, `sl-select`, `sl-option`, `sl-checkbox`, `sl-radio`, `sl-radio-group`, `sl-switch`, and `sl-button`. Do not recreate form controls with native primitives unless no EDS equivalent exists.
* **Do Not Add Unrequested Form Framing:** If the task is limited to adding fields or actions inside an existing example or screen, do not introduce a new card, header, title, or descriptive block unless it is already part of that surface or is explicitly requested.
* **Label Every Control:** Every form control must have an accessible label via component `label` attributes or explicit `aria-label` when a visible label is intentionally omitted.
* **Use Help Text and Validation Messaging:** Provide contextual guidance with component help text slots/props and clear error text for invalid states. Error messages must describe the issue and correction path.
* **Required and Optional Semantics:** Mark required fields explicitly and keep optional fields clearly indicated.
* **Grouping and Structure:** Group related controls using semantic sections and EDS layout primitives (`Container`, `Grid`, `Flex`, `Box`) rather than ad-hoc wrappers.
* **Token-Only Spacing/Typography:** Form spacing, field grouping gaps, and typography must use approved design tokens only.
* **Action Hierarchy:** Use a clear primary action (`sl-button` primary variant) and secondary/cancel action ordering consistently.
* **Button Width Behavior:** All buttons must use content-width by default (hug label text) and must not stretch to fill container width unless an explicit product requirement calls for full-width actions.
* **State Coverage:** Implement and verify default, focus, hover, disabled, read-only, error, and success states where applicable.
* **Keyboard and Screen Reader Support:** Ensure logical tab order, visible focus indicators, and correct announcements for validation and dynamic form updates.

### 3.1 Form Layout Baseline

Use the following baseline pattern unless product requirements specify otherwise:

* **Single-column default:** Stack fields in one column for narrow containers.
* **Responsive expansion:** Move to 2-column grouping only when container width allows and readability remains strong.
* **Inputs max-width:** The following inputs (input, combobox, dropdown, date, datetime) will have a max-width:30rem.
* **Two-level spacing is mandatory:**
  * Before heading (h1-5) spacing MUST be `var(--sl-spacing-x-large)`.
  * Control-to-control (form elements like: input, combobox, dropdown, date, datetime) spacing MUST be `var(--sl-spacing-medium)`.
* **Do not use a single parent container gap** to control both section spacing and field spacing.
* **Use separate layout containers:**
  * One container for section stacking (`gap: var(--sl-spacing-x-large)`).
  * One container inside each section for field stacking (`gap: var(--sl-spacing-medium)`).
* **Validation gate (required):** If adjacent form sections (for example, "Wind data" and "Seismic data") are not separated by `var(--sl-spacing-x-large)`, the implementation is non-compliant and must be corrected before finalizing.

### 3.2 Form Accessibility Checklist (Required)

Before finalizing any form UI, verify all of the following:

* Labels are programmatically associated with controls.
* Validation errors are announced and visible without relying only on color.
* Required fields are indicated both visually and semantically.
* Submit actions are keyboard reachable and clearly named.
* Form instructions and error summaries are readable by assistive technologies.

## 4. THIRD-PARTY LIBRARY INTEGRATION

### 4.1 Apache ECharts (Data Visualization)
When generating charts, you must explicitly bind the chart configuration options to the EDS theme context[cite: 1]. Never allow ECharts to fallback to its default color palettes or fonts[cite: 1].

* **Theme Color Order:** `['var(--eds-interactive-default)', 'var(--eds-interactive-hover)', 'var(--eds-text-link)']`
* **Agent Dynamic Evaluation Rule:** Inject standard options structured exactly like this[cite: 1]:
```javascript
// Strict template for EDS chart initialization
const edsChartOptions = {
  color: [
    getComputedStyle(document.documentElement).getPropertyValue('--eds-interactive-default'),
    getComputedStyle(document.documentElement).getPropertyValue('--eds-interactive-hover'),
    getComputedStyle(document.documentElement).getPropertyValue('--eds-text-link')
  ],
  textStyle: {
    fontFamily: getComputedStyle(document.documentElement).getPropertyValue('--sl-font-sans'),
    color: getComputedStyle(document.documentElement).getPropertyValue('--eds-text-secondary')
  },
  grid: { containLabel: true, top: 16, bottom: 16, left: 12, right: 12 }
};
```

### 4.2 AG Grid Community (Data Grid)
For all data grid implementations, you must use **AG Grid Community** as the default grid library.

* **Library Requirement:** Use `ag-grid-community` and approved framework bindings only. Do not replace with native table implementations for interactive grid use cases.
* **Required Theming Mode (Emerson Standard):** Use AG Grid **legacy CSS-based theming** (theme CSS + tokenized CSS overrides), including on AG Grid v32+.
* **Disallowed Theming Mode:** Do not use AG Grid modern TypeScript-based theme configuration for Emerson product implementations.
* **EDS Styling Requirement:** Grid theming must use EDS design system variables only. Do not hardcode hex, rgb, pixel color values, or non-token typography/spacing values.
* **Tokenized Theme Mapping:** Map all grid visual properties (text, headers, row backgrounds, borders, focus outlines, selection, hover, density spacing) to EDS/Shoelace tokens such as `var(--eds-text-default)`, `var(--eds-text-secondary)`, `var(--eds-background-default)`, `var(--eds-background-weak)`, `var(--eds-border-default)`, and `var(--sl-font-sans)`.
* **Cross-Framework Consistency:** Keep theming in CSS so one theme implementation behaves consistently across React, Angular, Aurelia, and vanilla JS/web components.
* **Upgrade Safety:** Keep visual behavior controlled by the design system CSS layer so AG Grid upgrades remain predictable and regressions are easier to isolate.
* **No Default AG Grid Look:** Do not ship AG Grid with default Alpine/Balham appearance without token overrides aligned to EDS.
* **Pagination Is Optional, Not Default:** Do not recommend or enable pagination unless there is an explicit product requirement for paged datasets.
* **Accessibility and Responsiveness:** Preserve keyboard navigation, focus visibility, and responsive behavior using tokenized values and EDS layout constraints.
* **Enforcement:** For screen implementations (for example, parameter matrices, summary datasets, and operational tables), do not use native `<table>` for production UI. Use AG Grid with EDS tokenized theming unless an explicit requirement documents a non-grid exception.

---

## 5. RESPONSIVE & ACCESSIBILITY ENFORCEMENT

* **Responsive UI Required:** All UI must be responsive across supported viewport sizes and device types. Components and layouts must adapt using EDS layout primitives and tokenized spacing/typography, not ad-hoc CSS.
* **WCAG Level 2 Required:** All generated UI must satisfy WCAG 2.x Level AA accessibility expectations, including keyboard navigation, visible focus states, semantic structure, readable contrast, and accessible names/labels.
* **Token-Only Accessibility Styling:** Accessibility-related styling (focus outlines, contrast adjustments, state colors, spacing for touch targets, typography scaling) must use EDS design tokens and variables. Hardcoded style values remain prohibited.
* **No Exceptions:** Responsiveness and accessibility requirements apply to every UI element, state, and interaction pattern.

---

## 6. REQUIRED EDS PACKAGE STACK

### 5.1 EDS Packages
* `@aspentech/pf-ui-core`
  Tokens and CSS defining the style and color palette of Aspentech's user interface.

* `@aspentech/pf-ui-compound`
  Custom Aspentech components such as AppBar, Navigation Drawer, and page templates.

* `@aspentech/pf-ui-assistance`
  Components providing user assistance (AVA), including chatbot, guided tours, contextual help, and more.

* `@aspentech/pf-ui-host-types`
  Code related to the Aspentech Platform's microfrontend host. This package is essential for proper host integration.

### 5.2 Required External Libraries
* `@material-design-icons/font`
  Google's Material Icons served as font files (used for fallback or basic setups).

* `@material-design-icons/svg`
  SVG version of Google's Material Icons. Ideal for custom icon rendering and integration with libraries like Shoelace.

* `@shoelace-style/shoelace`
  A library of framework-agnostic Web Components that follows modern standards. Used in conjunction with the Aspentech Design System for icons and certain components.