# EDS Design Implementation Rules

Use this file as the implementation contract for UI work in this repository.

## 1) Core directives

- Use EDS and Shoelace components first.
- Do not recreate existing controls with raw HTML when an EDS/Shoelace component exists.
- Use design tokens for color, spacing, typography, and borders.
- Do not hardcode hex, rgb, or pixel values for visual design properties.
- Honor request scope: implement only what was asked unless existing patterns require otherwise.
- Do not add new headers, intro text, or section titles unless explicitly requested or required for accessibility/context.

### Figma and EDS conflicts

- Treat Figma as the source of visual intent for layout, hierarchy, content, and interaction states.
- When Figma conflicts with EDS components, design tokens, accessibility, or responsive requirements, EDS constraints take precedence.
- Preserve the closest possible Figma appearance using the approved EDS component or token rather than recreating a control or hardcoding a visual value.
- Record meaningful visual deviations in the implementation summary when an exact match is not possible.

## 2) Token mapping defaults

Use these as first-choice tokens:

- Primary action color: `var(--eds-interactive-default)`
- Backgrounds: `var(--eds-background-default)`, `var(--eds-background-weak)`, `var(--eds-background-card)`
- Borders: `var(--eds-border-default)`
- Text: `var(--eds-text-default)`, `var(--eds-text-secondary)`, `var(--eds-text-link)`
- Typography: `var(--sl-font-sans)`, `var(--sl-font-size-small)`, `var(--sl-font-size-medium)`, `var(--sl-font-size-large)`, `var(--sl-font-size-2x-large)`
- Spacing scale: `var(--sl-spacing-3x-small)` through `var(--sl-spacing-x-large)`

## 3) Third-party UI libraries

### ECharts

- Bind chart colors and text to EDS tokens.
- Do not use default ECharts palette or typography.
- Start with this order: interactive default, interactive hover, text link.

### AG Grid

- Use AG Grid Community for interactive data grids.
- Use legacy CSS-based theming with tokenized overrides.
- Do not ship default AG Grid visual theme without EDS token mapping.
- Use pagination only when explicitly required.

## 4) Accessibility and responsiveness

- Meet WCAG 2.x AA expectations for keyboard access, visible focus, contrast, and semantics.
- Build responsive layouts with EDS/Shoelace components and tokenized spacing.
- Do not introduce arbitrary visual breakpoints without product need.

## 5) Package expectations

- Required EDS packages: `@aspentech/pf-ui-core`, `@aspentech/pf-ui-compound`.
- Use Shoelace and Material icon assets consistent with current repository setup.
