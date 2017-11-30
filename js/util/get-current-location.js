export async function getCurrentLocation(options) {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      resolve,
      ({ code, message }) => reject(Object.assign(new Error(message), { name: 'PositionError', code })),
      options,
    );
  });
}
