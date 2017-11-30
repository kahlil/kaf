const app = document.querySelector('kaf-app');
export const dispatch = (action, detail) => {
  app.dispatchEvent(
    new CustomEvent(action, {
      bubbles: true,
      composed: true,
      detail,
    }),
  );
};
