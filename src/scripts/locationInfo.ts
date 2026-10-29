const getLocation = (username: string, callback: (arg0: string) => void) => {
  fetch(`https://api.github.com/users/${username}`)
    .then(r => r.json())
    .then(d => callback(d.location))
    .catch(error => {
      console.log(error);
      callback('Barcelona, ES');
    });
};

const getCountry = (username: string, callback: (arg0: string) => void) => {
  getLocation(username, (location: string) => {
    const country = location?.split(', ')[1] ?? 'ES';
    callback(country.toLowerCase());
  });
};

export { getCountry };
