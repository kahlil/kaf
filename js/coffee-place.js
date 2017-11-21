import { LitElement, html } from './util/lit-element.js';

export class CoffeePlace extends LitElement {
  connectedCallback() {
    this.render(this.template(), this.shadowRoot);
  }

  template() {
    return html`<div>a place</div>`;
  }
}
