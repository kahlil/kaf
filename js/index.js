import { defineCustomElement } from './util/define-custom-element.js';
import { KafApp } from './kaf-app.js';
import { CoffeePlace } from './coffee-place.js';

window.addEventListener('WebComponentsReady', e => {
  console.log(e);
  [CoffeePlace, KafApp].forEach(defineCustomElement);
});
