import { html } from './util/lit-element.js';

export const CSS = html`
	<style>
		:host {
			color: #a0a0a0;
		}

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
			border: 2px solid;
			border-color: var(--title-color);
			color: var(--title-color);
			letter-spacing: 10px;
			display: inline-block;
			text-transform: uppercase;
		}
	</style>
`;
