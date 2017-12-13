import { html } from './lit-element.js';

export const routeComponents = {
  '*': state => html`<coffee-place-list state=${state.coffeePlaceList}></coffee-place-list>`,
  '/about': () => html`<about-page></about-page>`,
}