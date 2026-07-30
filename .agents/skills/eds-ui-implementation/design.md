# EDS Design Implementation Rules

Use this file as the implementation contract for UI work in this repository.

## 1) Core directives

- Use EDS and Shoelace components first.
- Do not recreate existing controls with raw HTML when an EDS/Shoelace component exists.
- Use design tokens for color, spacing, typography, and borders.
- Do not hardcode hex, rgb, or pixel values for visual design properties.
- Honor request scope: implement only what was asked unless existing patterns require otherwise.
- Do not add new headers, intro text, or section titles unless explicitly requested or required for accessibility/context.

## 2) Layout guidance

- Use `eds-shell-template` for app-level chrome.
- Use `eds-application-layout` for resizable left/right work panels.
- Use `eds-panel-layout` for panel containers with optional header/footer.
- Use `eds-page-header` for page-level context and actions inside content.
- Keep landmark structure clear: nav in sidenav, app actions in appbar, content in main.

## 3) Card layout rules

- Use approved card components (`sl-card`, `eds-selectable-card`, `eds-catalog-card`) based on behavior.
- Use `var(--sl-spacing-large)` for both horizontal and vertical spacing between cards (for example, `column-gap` and `row-gap` in card grids).
- Cards in the same row must render at equal height.
- If the card `base` part is styleable, set `::part(base) { height: 100%; }`.
- If the card is wrapped or its `base` is not directly styleable, use `grid-auto-rows: 1fr` and item wrapper `height: 100%`, then apply `::part(base) { height: 100%; }` inside the component boundary when possible.
- Verify card heights in the browser on at least two rows before finalizing.
- Enforce card width at grid track level (for example with tokenized minmax tracks).
- Keep card sizing and spacing tokenized.

## 4) Form layout baseline

- Prefer single-column form flow; expand to two columns only when space and readability support it.
- Keep form control max width at 30rem for typical input/select controls unless requirement differs.
- Use two spacing levels:
- Section-to-section spacing: `var(--sl-spacing-x-large)`.
- Control-to-control spacing: `var(--sl-spacing-medium)`.
- Use separate wrappers for section spacing vs field spacing.

## 5) Token mapping defaults

Use these as first-choice tokens:

- Primary action color: `var(--eds-interactive-default)`
- Backgrounds: `var(--eds-background-default)`, `var(--eds-background-weak)`, `var(--eds-background-card)`
- Borders: `var(--eds-border-default)`
- Text: `var(--eds-text-default)`, `var(--eds-text-secondary)`, `var(--eds-text-link)`
- Typography: `var(--sl-font-sans)`, `var(--sl-font-size-small)`, `var(--sl-font-size-medium)`, `var(--sl-font-size-large)`, `var(--sl-font-size-2x-large)`
- Spacing scale: `var(--sl-spacing-3x-small)` through `var(--sl-spacing-x-large)`

## 6) Third-party UI libraries

### ECharts

- Bind chart colors and text to EDS tokens.
- Do not use default ECharts palette or typography.
- Start with this order: interactive default, interactive hover, text link.

### AG Grid

- Use AG Grid Community for interactive data grids.
- Use legacy CSS-based theming with tokenized overrides.
- Do not ship default AG Grid visual theme without EDS token mapping.
- Use pagination only when explicitly required.

## 7) Accessibility and responsiveness

- Meet WCAG 2.x AA expectations for keyboard access, visible focus, contrast, and semantics.
- Build responsive layouts with EDS/Shoelace components and tokenized spacing.
- Do not introduce arbitrary visual breakpoints without product need.

## 8) Package expectations

- Required EDS packages: `@aspentech/pf-ui-core`, `@aspentech/pf-ui-compound`.
- Use Shoelace and Material icon assets consistent with current repository setup.
