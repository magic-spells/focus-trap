# Focus Trap Web Component

A lightweight, customizable Web Component that traps keyboard focus within a container. Perfect for modals, dialogs, and any UI that requires constrained keyboard navigation.

## Features

- No dependencies
- Lightweight (~2KB minified)
- Follows accessibility best practices
- Works with native keyboard navigation
- Handles Escape key to exit trap
- Uses aria attributes for accessibility

## Installation

```bash
npm install @magic-spells/focus-trap
```

```javascript
// Add to your JavaScript file
import '@magic-spells/focus-trap';
```

Or include directly in your HTML:

```html
<script src="https://unpkg.com/@magic-spells/focus-trap"></script>
```

## Usage

```html
<button aria-controls="modal" aria-expanded="false">
  Open Modal
</button>

<div id="modal" aria-hidden="true">
  <focus-trap>
    <h2>Modal Content</h2>
    <input type="text" placeholder="Focusable input" />
    <button>Focusable button</button>
  </focus-trap>
</div>
```

The focus trap will:

- Automatically trap focus within the container
- Cycle through focusable elements using Tab/Shift+Tab

## Keyboard Navigation

- `Tab`: Move focus to the next focusable element
- `Shift + Tab`: Move focus to the previous focusable element
- `Escape`: Exit the focus trap

## Browser Support

Works in all modern browsers that support Web Components.

## License

MIT
