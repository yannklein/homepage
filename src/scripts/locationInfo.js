const getLocation = (username, callback) => {
  fetch(`https://api.github.com/users/${username}`)
    .then(r => r.json())
    .then(d => callback(d.location))
    .catch(error => {
      console.log(error);
      callback('Tokyo, JP');
    });
};

const getCountry = (username, callback) => {
  getLocation(username, location => {
    callback(location.split(', ')[1].toLowerCase());
  });
};

export { getCountry };
