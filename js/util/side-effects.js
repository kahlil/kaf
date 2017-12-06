import { ACTIONS } from './actions.js';
import { api } from './kaf-api.js';

const { INIT } = ACTIONS;

export class SideEffects {
  constructor(app) {
    this.app = app;
  }

  run() {
    this.app.addEventListener(INIT, () => api.getPlaces());
  }
}
