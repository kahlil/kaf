import { foursquareEndpoint } from './foursquare-endpoint.js';
import { dispatch } from './dispatch.js';
import { getCurrentLocation } from './get-current-location.js';
import { ACTIONS } from './actions.js';

// prettier-ignore
const { 
  FETCH_GEODATA, 
  RECEIVE_GEODATA, 
  FETCH_VENUES, 
  RECEIVE_VENUES, 
  GEOLOCATION_FAILED 
} = ACTIONS;

class TastybeansApi {
  async getPlaces() {
    let geo;
    try {
      // dispatch(FETCH_GEODATA);
      // geo = await getCurrentLocation({
      //   enableHighAccuracy: true,
      //   timeout: 10000,
      //   maximumAge: 0,
      // });
      // dispatch(RECEIVE_GEODATA);

      // dispatch(FETCH_VENUES);
      // const response = await fetch(foursquareEndpoint(geo.coords.latitude, geo.coords.longitude));
      const response = await fetch('/data.json');
      const data = await response.json();
      dispatch(RECEIVE_VENUES, data.response.groups[0].items);
    } catch (e) {
      console.log('error', e);
      if (e.name == 'PositionError') {
        dispatch(GEOLOCATION_FAILED, e, true);
        console.log(e.message + '. code = ' + e.code);
      }
    }
  }
}

export const api = new TastybeansApi();
