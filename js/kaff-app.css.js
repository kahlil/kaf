import { html } from './util/lit-element.js';

export const CSS = html`
  <style>
    header {
      text-align: center;
    }

    h1 {
      margin-top: 2rem;
      color: var(--title-color);
      letter-spacing: 10px;
      display: inline-block;
      text-transform: uppercase;
      border: 2px solid;
      border-color: var(--title-color);
      padding: 5px 0 5px 10px;
    }

    .city {
      color: var(--highlight-color);
    }

    .loading {
      padding: 1rem;
      text-align: center;
      flex: 1;
    }

    .nav {
      text-align: center;
      padding: 0;
    }

    .nav li {
      list-style-type: none;
      display: inline-block;
      text-align: center;
      cursor: pointer;
    }

    .nav li:first-child {
      padding-right: 1rem;
    }

    .active {
      border-bottom: 1px solid;
    }
  </style>
`;
