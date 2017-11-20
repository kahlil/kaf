import { LitElement, html } from './util/lit-element.js';

export class TastybeansApp extends LitElement {
  connectedCallback() {
    console.log('html', html, 'render', this.render);
    this.render(html`<p>YO ${this.getAttribute('bla')}HELLO</p>`, this.shadowRoot);
  }
}
