class TastybeansApi {
  async getCurrentLocation(options) {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        resolve,
        ({ code, message }) => reject(Object.assign(new Error(message), { name: 'PositionError', code })),
        options,
      );
    });
  }

  async getPlaces() {
    let geo;
    try {
      geo = await this.getCurrentLocation({
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
      });

      return fetch(
        `https://api.foursquare.com/v2/venues/explore?v=20131016&ll=${geo.coords.latitude}%2C${
          geo.coords.longitude
        }&section=coffee&novelty=new&client_id=TQ00OORMFQF5LTW4DVXYW2XGMKWOYTHZEQNM4JLOQMJ35WVB&client_secret=IT33HI0JBAYWADFWIVKGU4XF5EBEP54G2AUMZOKBOI52II1G`,
        // '/data.json',
      );
    } catch (e) {
      if (e.name == 'PositionError') {
        console.log(e.message + '. code = ' + e.code);
      }
    }

    // return fetch('/data.json');
  }
}

export const api = new TastybeansApi();
