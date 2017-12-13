import { ACTIONS } from './actions.js';
import { camelCase } from './camel-case.js';
import { app } from './app-ref.js';
import * as reducers from './reducers.js';

export function setReducers() {
  Object.values(ACTIONS).forEach(ACTION => {
    const action = camelCase(ACTION.toLowerCase());
    if (reducers[action]) {
      app.addEventListener(ACTION, e => {
        app.state = Object.assign({}, app.state, {
          coffeePlaceList: reducers[action](e.detail, app.state.coffeePlaceList),
        });
      });
    }
  });
}