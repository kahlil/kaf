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

    .coffee-place-list {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
    }

    .near {
      padding: 1rem;
      text-align: center;
    }
  </style>
`;
