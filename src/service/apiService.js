export const getDataFromApi = (apiURL) => {
  const options = {
    method: "GET",
    headers: {
      /* Hiding api key to .env */
      "X-Api-Key": process.env.REACT_APP_API_KEY
    },
  };
  return fetch(apiURL, options)
    .then((response) => response.json())
    .then((data) => data)
    .catch((err) => console.error(err));
};
