import { LitElement, html } from './util/lit-element.js';

export class CoffeePlace extends LitElement {
  connectedCallback() {
    this.invalidate();
  }

  render() {
    const tip = this.getAttribute('tip');
    const tipHtml = tip ? html`<p>${tip}</p>` : null;
    return html`
			<div>
				<h2>${this.getAttribute('name')}</h2>
				<p>${this.getAttribute('rating')}</p>
				<h3>What people are saying:</h3>
				${tipHtml}
			</div>
		`;
  }
}
