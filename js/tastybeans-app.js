import { LitElement, html } from './util/lit-element.js';
import { api } from './util/tastybeans-api.js';

export class TastybeansApp extends LitElement {
  get places() {
    return this._places;
  }

  set places(p) {
    this._places = p;
    this.invalidate();
  }

  async connectedCallback() {
    this.places = await this.getPlaces();
  }

  async getPlaces() {
    const response = await api.getPlaces();
    const data = await response.json();
    return data.response.groups[0].items;
  }

  render() {
    return html`
    	<h1>B L A C K G O L D</h1>
    	<p>YO HELLO</p>
    	${this.places.map(place => {
        const tip = place.tips ? place.tips[0].text : undefined;
        return html`
						<coffee-place
							name=${place.venue.name}
							tip=${tip}
							rating=${place.venue.rating}>
						</coffee-place>
					`;
      })}
    `;
  }
}
