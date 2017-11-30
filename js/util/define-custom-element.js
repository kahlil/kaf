import { kebabCase } from './kebab-case.js';

export function defineCustomElement(component) {
  console.log('component.name!!!', component.name);
  customElements.define(kebabCase(component.name), component);
}
