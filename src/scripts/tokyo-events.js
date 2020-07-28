const spheresConfig = [
  {
    distCenter: 0.51,
    sphereSize: 0.02,
    initOffset: 1
  },
  {
    distCenter: 0.49,
    sphereSize: 0.01,
    initOffset: 0.00
  }
];

const formatEventArray = data => {
  return data.map(event => {
    const remainingDays = Math.round((new Date(event.date) - new Date()) / (1000*60*60*24))
    return { remainingDays };
  });
};

const fetchTokyoEvents = callback => {
  const url = 'https://tokyo-events.herokuapp.com/api';
  fetch(url)
    .then(response => response.json())
    .then(data => {
      callback(formatEventArray(data));
    });
};

export { fetchTokyoEvents };
