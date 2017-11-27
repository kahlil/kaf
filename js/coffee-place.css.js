import { html } from './util/lit-element.js';

export const CSS = html`
	<style>
		:host {
			margin: 2rem;
			padding: 0;
			background-color: #efefef;
			width: 250px;
			flex-basis: 250px;
			flex-grow: 1;
			border: 1px solid;
			border-color: var(--title-color);
		}

		h2 {
			text-transform: uppercase;
			letter-spacing: 2px;
			border-bottom: 1px solid;
			border-color: var(--title-color);
			background-color: white;
			padding: 5px;
			margin-top: 0;
			font-size: 1.2rem;
			color: var(--title-color);
		}

		h3 {
			margin: 1rem;
		}

		p {
			margin: 1rem;
		}

		.rating {
			font-size: 1.5rem;
		}

		.fs-logo {
			margin-right: 2px;
		}

		.tip, .tip-title {
			font-size: .9rem;
		}

		.tip {
			line-height: 1.3rem;
		}
	</style>
`;
