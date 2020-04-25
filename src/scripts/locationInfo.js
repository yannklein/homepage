const amKey = 'PcVG2igYBtUqDCemPKAq9fgUR8ixhT';
// https://www.amdoren.com/api/timezone.php?api_key=IBZzdLmM2yCYaXjgTZ6x&loc=New+York

const getLocation = (username, callback) => {
  fetch(`https://api.github.com/users/${username}`)
    .then(r => r.json())
    .then(d => callback(d.location));
};

const getCountry = (username, callback) => {
  getLocation(username, location => {
    callback(location.split(', ')[1].toLowerCase());
  });
};

const getUTCOffset = (username, callback) => {
  getLocation(username, location => {
    // callback(location);
    fetch(`https://www.amdoren.com/api/timezone.php?api_key=${amKey}&loc=${location.split(', ')[0].toLowerCase()}`)
      .then(r => r.json())
      .then(d => callback(d.offset / 60));
  });
};

export { getCountry, getUTCOffset };
