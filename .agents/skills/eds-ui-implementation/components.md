# Components

## React and Angular with web components

- Always confirm the web component host receives a real `class` attribute in rendered DOM.
- React: do not rely on `className` for custom elements when styling hooks are required; verify output on the host element. Use `useRef` to obtain a reference for imperative API calls (for example `ref.current.scrollToBottom()`).
- Angular: use `class` or `[ngClass]` on custom elements so styling hooks bind to the host class list. Use `@ViewChild` for imperative API access.
- If sizing or alignment rules appear ignored, inspect host attributes first (for example `class` vs `classname`) before changing tokenized layout styles.

## Layout guidance

- Use `eds-shell-template` for app-level chrome.
- Use `eds-application-layout` for resizable left/right work panels.
- Use `eds-panel-layout` for panel containers with optional header/footer.
- Use `eds-page-header` for page-level context and actions inside content.
- Keep landmark structure clear: nav in sidenav, app actions in appbar, content in main.

## Buttons

- Use `sl-button` for button actions unless an explicit requirement states otherwise.
- Default button size is `medium`.
- Use `variant="primary"` for the single main call-to-action; use `variant="default"` for secondary actions; use `variant="text"` for low-emphasis or inline actions.
- Keep button width content-based by default; do not stretch to full width unless explicitly required.
- Keep labels concise and action-oriented (see `content.md`).

## Cards

- Use `eds-selectable-card` when the card itself represents a selectable option or toggleable state.
- Set `heading` for the card title and use `control="checkbox"` or `control="switch"` based on the interaction pattern.
- Do not compose a selectable tile manually from `sl-card` plus a separate checkbox or switch unless a documented component limitation requires it.
- Use generic `sl-card` only for non-selectable, presentational containers.
- Use approved card components (`sl-card`, `eds-selectable-card`, `eds-catalog-card`) based on behavior.
- Use `var(--sl-spacing-large)` for both horizontal and vertical spacing between cards (for example, `column-gap` and `row-gap` in card grids).
- Cards in the same row must render at equal height: set `::part(base) { height: 100%; }` if the `base` part is styleable; otherwise use `grid-auto-rows: 1fr` on the grid, `height: 100%` on the item wrapper, and apply `::part(base) { height: 100%; }` inside the component boundary when possible.
- Verify card heights in the browser on at least two rows before finalizing.
- Enforce card width at grid track level (for example with tokenized `minmax` tracks).

## Page headers

- Use `eds-appbar` for the app shell header (breadcrumb, page info, right-side actions); use `eds-page-header` for page-level headings inside content regions.
- Match this slot structure for `eds-appbar`:
	- `breadcrumb` slot: use `sl-breadcrumb`.
	- Add a separator with `<span slot="separator">/</span>`.
	- Use `sl-breadcrumb-item` entries for path segments.
	- `page-info` slot: use `eds-page-info` and set `heading`.
	- `right` slot: place utility actions such as `sl-icon-button` and `sl-avatar`.
- Keep appbar actions concise and content-width.

## Expand and collapse

- Use `sl-details` for expandable and collapsible content sections.
- Do not build custom disclosure controls from standalone icons or buttons when the behavior is expand/collapse.
- Use the `summary` slot to render the section header content. Don't add custom headings.
- In the `content` slot, use `gap: var(--sl-spacing-medium);` for spacing between child elements.

## AVA

- Use `ava-layout` as the primary container for AVA chat-style experiences.
- Use `header-actions` slot for utility actions such as New chat (`sl-icon-button`, optionally wrapped with `sl-tooltip`).
- Use `ava-input` in the `footer` slot for message entry and controls.
- Use `ava-welcome-message` for onboarding content and starter actions.
- For welcome actions, use `eds-button-card` buttons in a token-spaced container and append them in `ava-welcome-message` footer slot.
- Use `ava-user-message` and `ava-response-message` for runtime chat messages.
- Message lifecycle should be imperative: append/remove AVA message elements with DOM APIs rather than static JSX lists.
- On send (`ava-send`), follow this order:
  1. Append the user message element.
  2. Set `ava-layout.waiting = true` and disable `ava-input`.
  3. Append the response element.
  4. Set `ava-layout.waiting = false` and re-enable `ava-input`.
- After message updates, call `ava-layout.scrollToBottom()` in `requestAnimationFrame` to keep the latest message in view.
- Keep AVA copy concise and action-oriented per `content.md`; avoid long, dense response text in starter templates.

## Toasts

- Always use `eds-toast` for toast notifications.
- Keep toast text short, specific, and action-result oriented (see `content.md`).
- Set message content with `text`.
- Use default lifetime (3000 ms) unless there is a clear product requirement to override it.
- Position the toast at bottom center by styling `::part(base)` with bottom offset `var(--sl-spacing-2x-large)`.
- Use a short ease-out entry transition with `transition` + `@starting-style` on `::part(base)`: animate `transform` and `opacity` together while preserving horizontal centering, starting at `translate(-50%, var(--sl-spacing-medium))` and `opacity: 0.5`, then ending at `translate(-50%, 0)` and `opacity: 1`. Note: `@starting-style` requires Chrome 117+, Firefox 129+, Safari 17.5+ — verify browser targets before using.
- Do not use CSS `animation` on `::part(base)` because it can break the built-in fade-out.
- Keep toasts non-blocking (no focus trap and no required interaction).
- Imperative usage is required: create the element on trigger with `document.createElement('eds-toast')` and `appendChild`; never render toast as static markup.