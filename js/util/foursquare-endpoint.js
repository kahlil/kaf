export const foursquareEndpoint = (lat, lng) =>
  `https://api.foursquare.com/v2/venues/explore?v=20131016&ll=${lat},${
    lng
  }&section=coffee&novelty=new&client_id=TQ00OORMFQF5LTW4DVXYW2XGMKWOYTHZEQNM4JLOQMJ35WVB&client_secret=IT33HI0JBAYWADFWIVKGU4XF5EBEP54G2AUMZOKBOI52II1G`;
