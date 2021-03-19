const fetchGithubActivity = (username, day, action) => {
  const url = `https://gh-contrib-api-scraper.herokuapp.com/${username}?format=nested`;
  fetch(url)
    .then(response => response.json())
    .then(data => {
      const ghActivityData =
        data.contributions.contributions[day.getFullYear()][day.getMonth() + 1][day.getDate()];
      const activity = Number.parseInt(ghActivityData.count, 10);
      action(activity);
    });
};

export default fetchGithubActivity;
