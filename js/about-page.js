import { LitElement, html } from './util/lit-element.js';
import { CSS } from './about-page.css.js';

export class AboutPage extends LitElement {
  render(state) {
    return html`
      ${CSS}

      <div class="about-page">
        <h2>What is K A F?</h2>
        <p> 
          This little web application uses your geolocation in order to find 
          decent coffee places near your current location. 
        </p>
        <p>
          This can be helpful if you are in dire need of some good coffee while travelling for example.
        </p>
        <h3>The Tech</h3>
        <p>
          K A F has been built using Web Components and a small library called <a href="https://github.com/polymerlabs/lit-html">lit-html</a> for updating the DOM. The source of the locations is the Foursquare API.
        </p>
      </div>
    `;
  }
}
