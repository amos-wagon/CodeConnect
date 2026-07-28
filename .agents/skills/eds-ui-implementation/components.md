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

- Use `eds-appbar` for application header composition when breadcrumb + page info + right-side actions are needed.
- Match this slot structure:
	- `breadcrumb` slot: use `sl-breadcrumb`.
	- Add a separator with `<span slot="separator">/</span>`.
	- Use `sl-breadcrumb-item` entries for path segments.
	- `page-info` slot: use `eds-page-info` and set `heading`.
	- `right` slot: place utility actions such as `sl-icon-button` and `sl-avatar`.
- Keep appbar actions concise and content-width.
- For page-level headings inside content regions (not the app shell/appbar), use `eds-page-header`.

## Expand and collapse

- Use `sl-details` for expandable and collapsible content sections.
- Do not build custom disclosure controls from standalone icons or buttons when the behavior is expand/collapse.
- Use the `summary` slot to render the section header content. Don't add custom headings.
- In the `content` slot, use `gap: var(--sl-spacing-medium);` for spacing between child elements.

