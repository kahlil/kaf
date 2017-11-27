import { kebabCase } from './kebab-case.js';
import { render } from '../../node_modules/lit-html/lib/lit-extended.js';
export { html } from '../../node_modules/lit-html/lib/lit-extended.js';

// A super chill custom element subclass with
// some nifty default behavior.
export class LitElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  get state() {
    return this._state;
  }

  set state(s) {
    this._state = s;
    this.invalidate();
  }

  dispatch(action, detail) {
    // prettier-ignore
    this.dispatchEvent(
      new CustomEvent(
        action,
        {
          bubbles: true,
          composed: true,
          detail,
        },
      )
    );
  }

  // Batch render calls.
  invalidate() {
    if (!this.needsRender) {
      this.needsRender = true;
      Promise.resolve().then(() => {
        this.needsRender = false;
        render(this.render(), this.shadowRoot);
      });
    }
  }
}
