import { kebabCase } from './kebab-case.js';

// A super chill custom element subclass with
// some nifty default behavior.
export class SuperChill extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}
  setHtml() {
    const tagName = kebabCase(this.constructor.name);
    const templates = document.querySelector('#templates');
    const template = templates.import.querySelector(`#${tagName}-template`);
    const instance = template.content.cloneNode(true);
    this.shadowRoot.appendChild(instance);
  }

  dispatch(action, detail) {
    // prettier-ignore
    this.dispatchEvent(
      new CustomEvent(
        action,
        {
          bubbles: true,
          composed: true,
          detail,
        },
      )
    );
  }
}
