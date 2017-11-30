import { foursquareEndpoint } from './foursquare-endpoint.js';
import { dispatch } from './dispatch.js';
import { getCurrentLocation } from './get-current-location.js';

class TastybeansApi {
  async getPlaces() {
    let geo;
    // try {
    //   geo = await getCurrentLocation({
    //     enableHighAccuracy: true,
    //     timeout: 5000,
    //     maximumAge: 0,
    //   });

    //   const response = await fetch(foursquareEndpoint(geo.coords.latitude, geo.coords.longitude));
    //   const data = await response.json();
    //   return data.response.groups[0].items;
    // } catch (e) {
    //   if (e.name == 'PositionError') {
    //     console.log(e.message + '. code = ' + e.code);
    //   }
    // }

    try {
      const response = await fetch('/data.json').then(function(response) {
        if (response.ok) {
          return response;
        }
        dispatch('NETWORK_ERROR', `Network response not OK, status: ${response.status}`);
        throw new Error(`Network response not OK, status: ${response.status}`);
      });
      const data = await response.json();
      return data.response.groups[0].items;
    } catch (e) {
      console.log('api error', e);
      dispatch('NETWORK_ERROR', e);
      return Promise.reject(e);
    }
  }
}

export const api = new TastybeansApi();
