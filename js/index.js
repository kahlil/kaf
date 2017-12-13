// import '../node_modules/auth0-js/build/auth0.min.js';
import { KafRouter } from './kaf-router.js';
import { KafApp } from './kaf-app.js';
import { CoffeePlaceList } from './coffee-place-list.js';
import { CoffeePlace } from './coffee-place.js';
import { AboutPage } from './about-page.js';
import { SideEffects } from './util/side-effects.js';
import { setReducers } from './util/set-reducers.js';
import { app } from './util/app-ref.js';

setReducers();
const sideEffects = new SideEffects(app);
sideEffects.run();

customElements.define('about-page', AboutPage);
customElements.define('coffee-place', CoffeePlace);
customElements.define('coffee-place-list', CoffeePlaceList);
customElements.define('kaf-app', KafApp);
customElements.define('kaf-router', KafRouter);
