import { normalizePlacesData } from './normalize-places-data.js';

export function fetchGeodata(action, state) {
  return {
    ...state,
    locating: true,
    loading: false,
  };
}

export function receiveGeodata(action, state) {
  return {
    ...state,
    locating: false,
  };
}

export function fetchVenues(action, state) {
  return {
    ...state,
    loading: true,
  };
}

export function receiveVenues(action, state) {
  return {
    ...state,
    places: normalizePlacesData(action.data),
    city: action.data[0].venue.location.city,
    loading: false,
  };
}

export function geoLocationFailed(action, state) {
  return {
    ...state,
    geolocationError: true,
  };
}
