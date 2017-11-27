import { html } from './util/lit-element.js';

export const CSS = html`
	<style>
		.coffee-places-list {
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;
		}

		header {
			text-align: center;
		}

		h1 {
			padding: 5px 5px 5px 15px;
			border: 3px solid #333;
			letter-spacing: 10px;
			display: inline-block;
			text-transform: uppercase;
		}
	</style>
`;
