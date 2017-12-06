import { app } from './app-ref.js';

export const dispatch = (action, detail, error = false) => {
  app.dispatchEvent(
    new CustomEvent(action, {
      bubbles: true,
      composed: true,
      detail: { type: action, data: detail, error },
    }),
  );
};
