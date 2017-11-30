import { LitElement, html, until } from './util/lit-element.js';
import { api } from './util/kaf-api.js';
import { CSS } from './kaff-app.css.js';

export class KafApp extends LitElement {
  async connectedCallback() {
    this.setEventListeners();
    console.time('yeh');
    this.dispatch('INIT');

    // Default state.
    this.state.loading = true;
    this.state.places = [];
    this.state.city = '';

    const placesData = await api.getPlaces();
    this.dispatch('DATA_RECEIVED');
    console.timeEnd('yeh');
    this.state = {
      places: this.normalizePlacesData(placesData),
      city: placesData[0].venue.location.city,
      loading: false,
    };
  }

  setEventListeners() {
    this.addEventListener('INIT', e => console.log('listened to event', e));
    this.addEventListener('NETWORK_ERROR', e => console.log('listened to event', e));
  }

  normalizePlacesData(placesData) {
    return placesData.filter(place => place.venue.rating >= 7.0).map(place => ({
      name: place.venue.name,
      rating: place.venue.rating,
      url: place.venue.url,
      venueId: place.venue.id,
      latitude: place.venue.location.lat,
      longitude: place.venue.location.lng,
      tip: place.tips ? place.tips[0].text : undefined,
    }));
  }

  getLoadingHtml() {
    return html`
      <div class="loading">
        Loading some nice coffee places near you!
      </div>
    `;
  }

  render() {
    return html`
      ${CSS}

      <header>
        <h1>kaf</h1>
      </header>

      ${
        !this.state.loading
          ? html`<div class="near">
            Here are some nice coffee places in <span class="city">${this.state.city}</span> near you:
          </div>`
          : ''
      }
    
      <div class="coffee-places-list">
        ${this.state.loading ? this.getLoadingHtml() : ''}
        ${this.state.places.map(place => {
          return html`
            <coffee-place state=${place}></coffee-place>
          `;
        })}
      </div>
    `;
  }
}
