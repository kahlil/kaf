import { ACTIONS } from './actions.js';
import { router } from './router.js';
import { api } from './kaf-api.js';

const { INIT, NAVIGATE } = ACTIONS;

export class SideEffects {
  constructor(app) {
    this.app = app;
  }

  run() {
    this.app.addEventListener(INIT, () => api.getPlaces());
    this.app.addEventListener(NAVIGATE, e => {
      console.log(e.detail.data);
      router.navigate(e.detail.data);
    });
  }
}
