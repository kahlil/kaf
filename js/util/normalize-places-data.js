export function normalizePlacesData(placesData) {
  if (!placesData) {
    return;
  }
  return placesData.filter(place => place.venue.rating >= 7.0).map(place => ({
    name: place.venue.name,
    rating: place.venue.rating,
    url: place.venue.url,
    venueId: place.venue.id,
    latitude: place.venue.location.lat,
    longitude: place.venue.location.lng,
    distance: place.venue.location.distance,
    tip: place.tips ? place.tips[0].text : undefined,
  }));
}
