import { LitElement, html } from './util/lit-element.js';
import { CSS } from './coffee-place.css.js';

export class CoffeePlace extends LitElement {
  get state() {
    return this._state;
  }

  set state(s) {
    this._state = s;
    this.invalidate();
  }

  render() {
    const tipHtml = this.state.tip ? html`<p>${this.state.tip}</p>` : null;
    return html`
			${CSS}

			<div>
				<h2>${this.state.name}</h2>
				<p>${this.state.rating}</p>
				<h3>What people are saying:</h3>
				${tipHtml}
			</div>
		`;
  }
}
