import Navigo from '../node_modules/navigo/src/index.js';
import { LitElement, html, until } from './util/lit-element.js';

export class KafRouter extends LitElement {
  connectedCallback() {
    this.state = {
      outlet: html`<kaf-app></kaf-app>`,
    };
  }

  render(state) {
    return html`${state.outlet}`;
  }
}
