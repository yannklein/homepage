const formatEventArray = data => {
  return data.map(event => {
    const remainingDays = Math.round((new Date(event.date) - new Date()) / (1000 * 60 * 60 * 24));
    const eventDetails = event;
    return { remainingDays, eventDetails };
  });
};

const fetchTokyoEvents = callback => {
  const url = 'https://tokyo-events.fly.dev/api';
  fetch(url)
    .then(response => response.json())
    .then(data => {
      callback(formatEventArray(data));
    });
};

export default fetchTokyoEvents;
