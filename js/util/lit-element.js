import { kebabCase } from './kebab-case.js';
import { render } from '../../node_modules/lit-html/lit-html.js';
export { html } from '../../node_modules/lit-html/lit-html.js';

// A super chill custom element subclass with
// some nifty default behavior.
export class LitElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.render = render;
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
}
