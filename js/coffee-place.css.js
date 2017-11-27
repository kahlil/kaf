import { html } from './util/lit-element.js';

export const CSS = html`
	<style>
		:host {
			margin: 2rem;
			padding: 0;
			background-color: #efefef;
			width: 250px;
		}

		h2 {
			text-transform: uppercase;
			letter-spacing: 2px;
			border: 2px solid #333;
			background-color: white;
			padding: 5px;
			margin-top: 0;
			font-size: 1.2rem;
		}

		h3 {
			margin: 1rem;
		}

		p {
			margin: 1rem;
		}
	</style>
`;
