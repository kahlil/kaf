import { LitElement, html } from './util/lit-element.js';
import { CSS } from './coffee-place.css.js';

export class CoffeePlace extends LitElement {
  render() {
    const tipHtml = this.state.tip ? html`<p>${this.state.tip}</p>` : null;
    return html`
      ${CSS}

      <div>
        <h2>
          <a href="${this.state.url}">${this.state.name}</a>
        </h2>
        <p class="rating">
          <img src="/img/f.png" height="20" class="fs-logo"> ${this.state.rating}
        </p>
        <div class="tip">
          <h3 class="tip-title">What People Are Saying:</h3>
          ${tipHtml}
        </div>
      </div>
    `;
  }
}
