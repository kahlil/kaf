class TastybeansApi {
  async getPlaces() {
    return fetch(
      'https://api.foursquare.com/v2/venues/explore?v=20131016&ll=52.520007%2C13.404954&section=coffee&novelty=new&client_id=TQ00OORMFQF5LTW4DVXYW2XGMKWOYTHZEQNM4JLOQMJ35WVB&client_secret=IT33HI0JBAYWADFWIVKGU4XF5EBEP54G2AUMZOKBOI52II1G',
    );
  }
}

export const api = new TastybeansApi();
