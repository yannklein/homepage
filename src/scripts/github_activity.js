const fetchGithubActivity = (username, day, action) => {
  // const url = `https://github-contributions-api.herokuapp.com/${username}/count`;
  const url = './src/scripts/test.json';
  fetch(url)
    .then(response => response.json())
    .then(data => {
      const activity = Number.parseInt(data.data[day.getFullYear()][day.getMonth()][day.getDay()], 10);
      action(activity);
    });
};

export default fetchGithubActivity;
