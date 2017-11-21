class TastybeansApi {
  async getPlaces() {
    return fetch('/data.json');
  }
}

export const api = new TastybeansApi();
