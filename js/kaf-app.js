import { LitElement, html, until } from './util/lit-element.js';
import { api } from './util/kaf-api.js';
import { CSS } from './kaff-app.css.js';
import { camelCase } from './util/camel-case.js';
import * as reducers from './util/reducers.js';
import { ACTIONS } from './util/actions.js';

const { INIT } = ACTIONS;

export class KafApp extends LitElement {
  async connectedCallback() {
    // Default state.
    this.state = {
      locating: false,
      loading: false,
      places: [],
      city: '',
      geolocationError: false,
    };
    this.setReducers();
    this.dispatch(INIT);
  }

  setReducers() {
    Object.values(ACTIONS).forEach(ACTION => {
      const action = camelCase(ACTION.toLowerCase());
      if (reducers[action]) {
        this.on(ACTION, e => {
          this.state = reducers[action](e.detail, this.state);
        });
      }
    });
  }

  getLocatingHtml() {
    return html`
      <div class="loading">
        Fetching your location...
      </div>
    `;
  }

  getLoadingHtml() {
    return html`
      <div class="loading">
        Loading some nice coffee places near you!
      </div>
    `;
  }

  render(state) {
    return html`
      ${CSS}

      <header>
        <h1>kaf</h1>
      </header>

      ${
        state.places.length > 0
          ? html`<div class="near">
            Here are some nice coffee places in <span class="city">${state.city}</span> near you:
          </div>`
          : ''
      }

      ${
        state.geolocationError
          ? html`<div class="warning"> Unfortunately we can't seem to find your location.</div>`
          : ''
      }
    
      <div class="coffee-places-list">
        ${state.locating ? this.getLocatingHtml() : ''}
        ${state.loading ? this.getLoadingHtml() : ''}
        ${state.places.map(place => {
          return html`
            <coffee-place state=${place}></coffee-place>
          `;
        })}
      </div>
    `;
  }
}
