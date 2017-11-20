import { TastybeansApp } from './tastybeans-app.js';
import { defineCustomElement } from './util/define-custom-element.js';

[TastybeansApp].forEach(defineCustomElement);
