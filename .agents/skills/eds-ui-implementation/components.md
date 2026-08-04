# Components

## React and Angular with web components

- Always confirm the web component host receives a real `class` attribute in rendered DOM.
- React: do not rely on `className` for custom elements when styling hooks are required; verify output on the host element.
- Angular: use `class` or `[ngClass]` on custom elements so styling hooks bind to the host class list.
- If sizing or alignment rules appear ignored, inspect host attributes first (for example `class` vs `classname`) before changing tokenized layout styles.

## Layout

### Core layout guidance

- Use `eds-shell-template` for app-level chrome.
- Use `eds-application-layout` for resizable left/right work panels.
- Use `eds-panel-layout` for panel containers with optional header/footer.
- Use `eds-page-header` for page-level context and actions inside content.
- Keep landmark structure clear: nav in sidenav, app actions in appbar, content in main.

### Portal layout

### Application layout

- For application layout opened from app navigation, use `eds-shell-template` and omit the `sidenav` slot.
- Implement `eds-appbar` in the `appbar` slot with `show-menu-button` and `is-application`.
- In the `icon` slot, use `sl-icon` with the Material icon set for the application glyph.
- In the `breadcrumb` slot, use `sl-breadcrumb` with a separator (`<span slot="separator">/</span>`) and `sl-breadcrumb-item` entries.
- In the `page-info` slot, use `eds-page-info` with `heading` set to the application page heading.
- In `eds-page-info`, place optional menu options in `heading-menu-items` using `sl-menu-item`.
- In `eds-page-info`, place optional state badges in the `badge` slot using `sl-badge`.
- In the `center` slot, use `sl-tab-group` for application-level tabs. Keep tab labels concise and noun-based.
- In the `right` slot, use concise utility actions such as `sl-button` and `sl-icon-button`.
- In the default content area (`main`), implement `eds-application-layout` as the primary layout container.
- For application pages, remove content-area padding and width constraints so the layout is full-bleed.
- Render `eds-application-layout` as a direct child of the application content area (avoid extra wrapper containers that can constrain sizing).
- Ensure `eds-application-layout` takes all available horizontal and vertical space (`inline-size: 100%`, `block-size: 100%`).
- Ensure slotted side panels also stretch vertically (`[slot='left-panel']` and `[slot='right-panel']` with `block-size: 100%`).
- For all application pages, implement a modal `eds-sidenav` (use `mode="modal"`) and keep it hidden by default.
- Trigger the modal sidenav from the appbar menu button: provide a slotted menu button in `eds-appbar` (`slot="menu-button"`) and open the sidenav only on user click using `sidenav.show()`.
- Use the same navigation structure in the modal sidenav as the primary app sidenav (nodes, divider, section headings, and app items) to keep behavior consistent.
- On modal sidenav item click, navigate to the target route and then close the modal with `sidenav.hide()`.
- Support default modal dismissal behaviors (Esc key and outside click) and keep the sidenav focus-managed after opening.
- Prevent default-on-load visibility for modal sidenav (no automatic open during initialization; enforce hidden state before first user interaction).

### Page layout

- A page layout should include two clear regions: `page-header` and `page-content`.
- Use `eds-page-header` as the `page-header` region.
- Place all primary page body elements (cards, tables, forms, lists, charts) inside the `page-content` container.
- Do not place page body content directly beside the header without a `page-content` wrapper.
- Apply horizontal padding to `page-content` using `padding-inline: var(--sl-spacing-x-large)`.
- Keep page-content spacing tokenized and scoped to the page container to avoid global side effects.
- When using `eds-application-layout` with a left side panel (`slot='left-panel'`), include a view-sidebar icon button in the page header: `<sl-icon-button slot="icon" library="material" name="view_sidebar" label="View sidebar"></sl-icon-button>`.
- The page-header view-sidebar icon button should toggle the left side panel visibility.
- Implement toggle behavior by checking whether `eds-application-layout` has the `open-left` attribute.
- Toggle `open-left`: remove it when present to collapse the left side panel, and add it when absent to show the left side panel.

### Card layout rules

- Use approved card components (`sl-card`, `eds-selectable-card`, `eds-catalog-card`) based on behavior.
- Use `var(--sl-spacing-large)` for both horizontal and vertical spacing between cards (for example, `column-gap` and `row-gap` in card grids).
- Cards in the same row must render at equal height.
- If the card `base` part is styleable, set `::part(base) { height: 100%; }`.
- If the card is wrapped or its `base` is not directly styleable, use `grid-auto-rows: 1fr` and item wrapper `height: 100%`, then apply `::part(base) { height: 100%; }` inside the component boundary when possible.
- Verify card heights in the browser on at least two rows before finalizing.
- Enforce card width at grid track level (for example with tokenized minmax tracks).
- Keep card sizing and spacing tokenized.

### Form layout baseline

- Prefer single-column form flow; expand to two columns only when space and readability support it.
- Keep form control max width at 30rem for typical input/select controls unless requirement differs.
- Use two spacing levels:
- Section-to-section spacing: `var(--sl-spacing-x-large)`.
- Control-to-control spacing: `var(--sl-spacing-medium)`.
- Use separate wrappers for section spacing vs field spacing.

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

## Tabs

- Use `sl-tab-group` with `sl-tab` and `sl-tab-panel` for tabbed navigation and grouped content.
- Every tab must map to a panel: set `panel` on each `sl-tab` and a matching `name` on each `sl-tab-panel`.
- Keep tab labels short, scannable, and sentence case.
- For horizontal tabs, use default placement unless a requirement specifies otherwise.
- For vertical tabs, set `placement="start"` or `placement="end"` explicitly.
- Vertical tabs should always fill the container width.
- If tab navigation is used only as a section picker (no body content), hide or collapse panel content intentionally rather than omitting panel elements.
- Keep active-tab styling token-based; avoid hard-coded colors when EDS tokens exist.

## Sidenav

- Use `eds-sidenav` for app-level navigation inside `eds-shell-template` via `slot="sidenav"`.
- Do not add custom sidebar styling by default (no inline style/class hooks or sidenav-specific CSS overrides) unless a clear requirement exists.
- Set `header-text` and `logo` when app branding/context is required.
- Build navigation entries with `eds-sidenav-item` and use sentence case labels.
- Use `type="node"` for standard sidebar navigation items.
- To add a new sidebar section, place `<sl-divider></sl-divider>` after the previous group, then add `<eds-sidenav-item type="heading" label="Section name"></eds-sidenav-item>` before that section's items.
- Keep a single source of truth for nav items (for example, an array of `{ page, label, icon }`) and render items from it.
- For hash or client-side routing, keep the active item state synchronized with the current route.

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

