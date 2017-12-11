import { LitElement, html, until } from './util/lit-element.js';
import { router } from './util/router.js';
import { api } from './util/kaf-api.js';
import { CSS } from './kaff-app.css.js';
import { camelCase } from './util/camel-case.js';
import * as reducers from './util/reducers.js';
import { ACTIONS } from './util/actions.js';

const { INIT, NAVIGATE } = ACTIONS;

export class KafApp extends LitElement {
  constructor() {
    super();

    // Default state.
    this.state = {
      coffeePlaceList: {
        locating: false,
        loading: false,
        places: [],
        city: '',
        geolocationError: false,
      },
    };

    this.setReducers();
  }

  get route() {
    return this._route;
  }

  set route(r) {
    this._route = r;
    this.invalidate();
  }

  connectedCallback() {
    this.dispatch(INIT);

    router
      .on('/about', () => (this.route = state => html`<div>About Page</div>`))
      .on('*', () => {
        this.route = state => html`
          <coffee-place-list state=${state.coffeePlaceList}></coffee-place-list>
        `;
      })
      .resolve();
  }

  setReducers() {
    Object.values(ACTIONS).forEach(ACTION => {
      const action = camelCase(ACTION.toLowerCase());
      if (reducers[action]) {
        this.on(ACTION, e => {
          this.state = Object.assign({}, this.state, {
            coffeePlaceList: reducers[action](e.detail, this.state.coffeePlaceList),
          });
        });
      }
    });
  }

  render(state) {
    return html`
       ${CSS}

      <header>
        <h1>kaf</h1>
      </header>

      <ul class="nav">
        <li>
          <a 
            class$="${router.lastRouteResolved().url === '' ? 'active' : ''}"
            onclick="${() => this.dispatch('NAVIGATE', '/')}">
            coffee places
          </a>
        </li>
        <li>
          <a
            class$="${router.lastRouteResolved().url === '/about' ? 'active' : ''}" 
            onclick="${() => this.dispatch('NAVIGATE', '/about')}">
            about
          </a>
        </li>
      </ul>

      ${this.route(state)}
    `;
  }
}
