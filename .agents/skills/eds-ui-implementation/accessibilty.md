# EDS Accessibility Guidelines

Use these guidelines together with `design.md` whenever you build, review, or restyle UI in this repository.

## Core accessibility rules
- Meet WCAG 2.x Level AA expectations for every UI surface and state.
- Treat accessibility as a default requirement, not an optional pass after implementation.
- Do not rely on color alone to communicate meaning, validation, status, or selection.
- Keep semantic structure intact with correct headings, labels, landmarks, and control roles.

## Token-only accessibility styling
- Use EDS and Shoelace tokens for focus, spacing, typography, contrast, and state styling.
- Do not introduce hardcoded hex, rgb, or arbitrary sizing values for accessibility-related styling.
- Prefer `var(--eds-text-default)`, `var(--eds-text-secondary)`, `var(--eds-text-link)`, `var(--eds-border-default)`, `var(--eds-background-default)`, and `var(--eds-background-weak)`.
- Use spacing and typography tokens such as `var(--sl-spacing-medium)`, `var(--sl-spacing-x-large)`, `var(--sl-font-size-small)`, `var(--sl-font-size-medium)`, `var(--sl-font-size-large)`, and `var(--sl-font-size-2x-large)`.

## Forms
- Use EDS and Shoelace form components first, including `sl-input`, `sl-textarea`, `sl-select`, `sl-option`, `sl-checkbox`, `sl-radio`, `sl-radio-group`, `sl-switch`, and `sl-button`.
- Every control must have a programmatically associated label.
- Required fields must be indicated both visually and semantically.
- Provide help text and validation messaging that explains the issue and how to fix it.
- Validation errors must be visible and announced without depending only on color.
- Keep logical tab order and ensure submit actions are keyboard reachable and clearly named.
- Group related controls with semantic sections and token-based spacing.

## Keyboard and focus behavior
- All interactive controls must be reachable and usable with a keyboard.
- Preserve visible focus indicators for inputs, buttons, links, toggles, dialogs, menus, and grid cells.
- Do not remove focus styles unless they are replaced with token-based visible alternatives.
- Ensure dynamic UI changes, expanded sections, and validation updates remain understandable during keyboard use.

## Responsive accessibility
- UI must remain readable and operable across supported viewport sizes.
- Use EDS layout primitives and tokenized spacing instead of ad-hoc breakpoints.
- Keep controls, labels, and supporting text readable in narrow layouts.
- Preserve touch target spacing and interaction clarity when layouts compress.

## Data visualization and data grids
- Bind ECharts colors and typography to EDS theme tokens.
- Do not allow chart text or series colors to fall back to inaccessible defaults.
- Use AG Grid Community for interactive grid use cases.
- Apply EDS token overrides for grid text, borders, row backgrounds, hover, focus, and selection states.
- Preserve keyboard navigation and visible focus states inside charts and grids where supported.

## Review checklist
- Labels are associated with controls.
- Errors are visible and announced.
- Required fields are visual and semantic.
- Focus remains visible.
- Keyboard navigation works end to end.
- Contrast and text hierarchy follow EDS tokens.
- Responsive layouts remain readable and operable.
