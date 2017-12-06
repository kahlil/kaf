import { KafApp } from './kaf-app.js';
import { CoffeePlace } from './coffee-place.js';
import { SideEffects } from './util/side-effects.js';
import { app } from './util/app-ref.js';

const sideEffects = new SideEffects(app);
sideEffects.run();

customElements.define('coffee-place', CoffeePlace);
customElements.define('kaf-app', KafApp);
