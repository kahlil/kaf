import { kebabCase } from './kebab-case.js';
import { render } from '../../node_modules/lit-html/lib/lit-extended.js';
import { dispatch } from './dispatch.js';
export { html } from '../../node_modules/lit-html/lib/lit-extended.js';
export { until } from '../../node_modules/lit-html/lib/until.js';

// A super chill custom element subclass with
// some nifty default behavior.
export class LitElement extends HTMLElement {
  constructor() {
    super();
    this.state = {};
    this.attachShadow({ mode: 'open' });
  }

  get state() {
    return this._state;
  }

  set state(s) {
    this._state = s;
    this.invalidate();
  }

  // Batch render calls.
  invalidate() {
    if (!this.needsRender) {
      this.needsRender = true;
      Promise.resolve().then(() => {
        this.needsRender = false;
        render(this.render(this.state), this.shadowRoot);
      });
    }
  }

  dispatch(action, detail) {
    dispatch(action, detail);
  }
}
