import { html } from './util/lit-element.js';

export const CSS = html`
  <style>
    h2 {
      text-transform: uppercase;
      letter-spacing: 2px;
      border-bottom: 1px solid;
      border-color: var(--title-color);
      background-color: white;
      padding: 5px;
      margin-top: 0;
      font-size: 1.2rem;
      color: var(--title-color);
    }

    h2 a {
      display: block;
      color: var(--title-color);
      text-decoration: none;
    }

    h3 {
      margin: 1rem;
    }

    p {
      margin: 1rem;
    }

    a {
      color: var(--highlight-color);
      text-decoration: none;
    }

    a:hover {
      text-decoration: underline;
    }

    .rating {
      font-size: 1.5rem;
    }

    .fs-logo {
      margin-right: 2px;
    }

    .tip, .tip-title {
      font-size: 1rem;
    }

    .tip {
      line-height: 1.3rem;
    }

    .details-link,
    .maps-link {
      font-size: 1rem;
    }

    .details-link {
      display: inline-block;
      padding-right: 1rem;
    }
  </style>
`;
