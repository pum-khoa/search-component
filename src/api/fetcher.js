export const fetcher = (URL, TYPE, BODY = null) => {
  if (TYPE !== 'GET')
    return fetch(URL, {
      method: TYPE,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(BODY),
    })
      .then((response) => response.json())
      .then((data) => data)
      .catch((error) => {
        console.error('Error:', error);
      });
  else {
    return fetch(URL)
      .then((response) => response.json())
      .then((data) => data)
      .catch((error) => {
        console.error('Error:', error);
      });
  }
};
