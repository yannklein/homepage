const getLocation = (username: string, callback: (arg0: string) => void) => {
  fetch(`https://api.github.com/users/${username}`)
    .then(r => r.json())
    .then(d => callback(d.location))
    .catch(error => {
      console.log(error);
      callback('Tokyo, JP');
    });
};

const getCountry = (username: string, callback: (arg0: string) => void) => {
  getLocation(username, (location: string) => {
    callback(location.split(', ')[1].toLowerCase());
  });
};

export { getCountry };
