import { defineCustomElement } from './util/define-custom-element.js';
import { KafApp } from './kaf-app.js';
import { CoffeePlace } from './coffee-place.js';

[CoffeePlace, KafApp].forEach(defineCustomElement);
