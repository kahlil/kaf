import { LitElement, html } from './util/lit-element.js';
import { api } from './util/tastybeans-api.js';

export class TastybeansApp extends LitElement {
  async connectedCallback() {
    const places = await this.getPlaces();
    this.render(this.template(places), this.shadowRoot);
    console.log(places);
  }

  async getPlaces() {
    const response = await api.getPlaces();
    const data = await response.json();
    return data.response.groups[0].items;
  }

  template(places) {
    const placesHtml = () => html`${places.map(place => html`<coffee-place></coffee-place>`)}`;
    return html`
    	<h1>T A S T Y B E A N S</h1>
    	<p>YO HELLO</p>
    	${places.map(place => html`<coffee-place></coffee-place>`)}
    `;

    // const items = [1, 2, 3];
    // return html`${items.map(i => html`<div>item: ${i}</div>`)}`;
  }
}
