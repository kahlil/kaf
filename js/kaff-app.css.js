import { html } from './util/lit-element.js';

export const CSS = html`
  <style>
    :host {
      color: #a0a0a0;
    }

    .coffee-places-list {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
    }

    header {
      text-align: center;
    }

    h1 {
      color: var(--title-color);
      letter-spacing: 10px;
      display: inline-block;
      text-transform: uppercase;
      border: 2px solid;
      border-color: var(--title-color);
      padding: 5px 0 5px 10px;
    }

    .near {
      padding: 1rem;
      text-align: center;
    }

    .city {
      color: var(--highlight-color);
    }

    .loading {
      padding: 1rem;
      text-align: center;
      flex: 1;
    }
  </style>
`;
