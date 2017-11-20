import { kebabCase } from './kebab-case.js';

export function defineCustomElement(component) {
  customElements.define(kebabCase(component.name), component);
}
