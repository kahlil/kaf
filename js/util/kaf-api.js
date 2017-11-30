import { foursquareEndpoint } from './foursquare-endpoint.js';
import { dispatch } from './dispatch.js';
import { getCurrentLocation } from './get-current-location.js';

class TastybeansApi {
  async getPlaces() {
    let geo;
    try {
      geo = await getCurrentLocation({
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
      });

      const response = await fetch(foursquareEndpoint(geo.coords.latitude, geo.coords.longitude));
      // const response = await fetch('/data.json');
      const data = await response.json();
      return data.response.groups[0].items;
    } catch (e) {
      if (e.name == 'PositionError') {
        console.log(e.message + '. code = ' + e.code);
      }
    }
  }
}

export const api = new TastybeansApi();
