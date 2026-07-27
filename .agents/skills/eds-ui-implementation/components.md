# Components

## Buttons

- Use `sl-button` for button actions unless an explicit requirement states otherwise.
- Default button size is `medium`.
- Keep button width content-based by default; do not stretch to full width unless explicitly required.
- Keep labels concise and action-oriented.

## Cards

- Use `eds-selectable-card` when the card itself represents a selectable option or toggleable state.
- Set `heading` for the card title and use `control="checkbox"` or `control="switch"` based on the interaction pattern.
- Do not compose a selectable tile manually from `sl-card` plus a separate checkbox or switch unless a documented component limitation requires it.
- Use generic `sl-card` only for non-selectable, presentational containers.

## Page headers

- Use `eds-page-header` for page-level headings and top-level page actions.
- Do not build a custom page header from ad-hoc containers, headings, badges, and buttons when `eds-page-header` is available.
- Use the component slots correctly:
	- `breadcrumb` for hierarchy/navigation context.
	- `badge` for status.
	- `controls` for page-level actions.
- Set the page title with the `heading` property.
- Keep header actions concise and use content-width buttons unless an explicit requirement calls for another pattern.

## Expand and collapse

- Use `sl-details` for expandable and collapsible content sections.
- Do not build custom disclosure controls from standalone icons or buttons when the behavior is expand/collapse.
- Use the `summary` slot to render the section header content. Don't add custom headings.
- In the `content` slot, use `gap: var(--sl-spacing-medium);` for spacing between child elements.

