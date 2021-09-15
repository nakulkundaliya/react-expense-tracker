export const ApiRequest = async (config) => {
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  };
  const newConfig = {
    headers,
    ...config
  };
  return fetch(config.url, newConfig)
    .then((res) => res.json())
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err;
    });
};
