import { LitElement, html } from './util/lit-element.js';
import { CSS } from './coffee-place.css.js';

export class CoffeePlace extends LitElement {
  mapsLink(lat, lng) {
    return `http://maps.apple.com?daddr=${lat},${lng}`;
  }

  render(state) {
    const tipHtml = state.tip ? html`<p>${state.tip}</p>` : null;
    const foursquareUrl = `http://foursquare.com/v/${state.venueId}`;
    return html`
      ${CSS}

      <div>
        <h2>
          <a href="${this.state.url || foursquareUrl}">${state.name}</a>
        </h2>
        <p class="rating">
          <img src="/img/f.png" height="20" class="fs-logo"> ${state.rating}
        </p>
        <p>
          <a href="${foursquareUrl}" class="details-link">details</a>
          <a href="${this.mapsLink(state.latitude, state.longitude)}" class="maps-link">directions</a>
        </p>
        <p>
          ${state.distance}m
        </p>
        <div class="tip">
          <h3 class="tip-title">What People Are Saying:</h3>
          ${tipHtml}
        </div>
      </div>
    `;
  }
}
