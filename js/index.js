import { defineCustomElement } from './util/define-custom-element.js';
import { TastybeansApp } from './tastybeans-app.js';
import { CoffeePlace } from './coffee-place.js';

[CoffeePlace, TastybeansApp].forEach(defineCustomElement);
