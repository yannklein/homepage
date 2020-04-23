const fetchGithubActivity = (username, day, action) => {
  let url = '';
  if (window.location.host.match(/.*localhost.*/)) {
    url = './src/scripts/test.json';
  } else {
    url = `https://github-contributions-api.herokuapp.com/${username}/count`;
  }
  fetch(url)
    .then(response => response.json())
    .then(data => {
      const activity = Number.parseInt(data.data[day.getFullYear()][day.getMonth()][day.getDay()], 10);
      action(activity);
    });
};

export default fetchGithubActivity;