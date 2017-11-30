import { html } from './util/lit-element.js';

export const CSS = html`
  <style>
    coffee-place {
      margin: 2rem;
      padding: 0;
      background-color: #efefef;
      width: 250px;
      flex-basis: 250px;
      flex-grow: 1;
      border: 1px solid;
      border-color: var(--title-color);
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
