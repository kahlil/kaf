import { LitElement, html } from './util/lit-element.js';
import { api } from './util/kaf-api.js';
import { CSS } from './kaff-app.css.js';

export class KafApp extends LitElement {
  async connectedCallback() {
    const placesData = await this.getPlaces();
    this.state = {
      places: placesData.filter(place => place.venue.rating >= 7.0).map(place => ({
        name: place.venue.name,
        rating: place.venue.rating,
        tip: place.tips ? place.tips[0].text : undefined,
      })),
    };
  }

  async getPlaces() {
    const response = await api.getPlaces();
    const data = await response.json();
    return data.response.groups[0].items;
  }

  render() {
    return html`
			${CSS}

    	<header>
				<h1>kaf</h1>
			</header>

			<div class="coffee-places-list">
				${this.state.places.map(place => {
          return html`
						<coffee-place state=${place}></coffee-place>
					`;
        })}
			</div>
    `;
  }
}
