# Components

## React and Angular with web components

- Always confirm the web component host receives a real `class` attribute in rendered DOM.
- React: do not rely on `className` for custom elements when styling hooks are required; verify output on the host element.
- Angular: use `class` or `[ngClass]` on custom elements so styling hooks bind to the host class list.
- If sizing or alignment rules appear ignored, inspect host attributes first (for example `class` vs `classname`) before changing tokenized layout styles.

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

## AVA

- Use `ava-layout` as the primary container for AVA chat-style experiences.
- Use `header-actions` slot for utility actions such as New chat (`sl-icon-button`, optionally wrapped with `sl-tooltip`).
- Use `ava-input` in the `footer` slot for message entry and controls.
- Use `ava-welcome-message` for onboarding content and starter actions.
- For welcome actions, use `eds-button-card` buttons in a token-spaced container and append them in `ava-welcome-message` footer slot.
- Use `ava-user-message` and `ava-response-message` for runtime chat messages.
- Message lifecycle should be imperative: append/remove AVA message elements with DOM APIs rather than static JSX lists.
- On send (`ava-send`), append user message first, set `ava-layout.waiting=true`, disable `ava-input`, then append response and restore input state.
- After message updates, call `ava-layout.scrollToBottom()` in `requestAnimationFrame` to keep the latest message in view.
- Keep AVA copy concise and action-oriented per `content.md`; avoid long, dense response text in starter templates.

## Toasts

- Always use `eds-toast` for toast notifications.
- Keep toast text short, specific, and action-result oriented (see `content.md`).
- Set message content with `text`.
- Use default lifetime (3000 ms) unless there is a clear product requirement to override it.
- Position the toast at bottom center by styling `::part(base)` with bottom offset `var(--sl-spacing-2x-large)`.
- Use a short ease-out entry transition with `transition` + `@starting-style` on `::part(base)`: animate `transform` and `opacity` together while preserving horizontal centering, starting at `translate(-50%, var(--sl-spacing-medium))` and `opacity: 0.5`, then ending at `translate(-50%, 0)` and `opacity: 1`.
- Do not use CSS `animation` on `::part(base)` because it can break the built-in fade-out.
- Keep toasts non-blocking (no focus trap and no required interaction).
- Imperative usage is required: create the element on trigger with `document.createElement('eds-toast')` and `appendChild`; never render toast as static markup.

