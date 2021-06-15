const fetchGithubActivity = (username, day, callback) => {
  const url = `https://gh-contrib-api-scraper.herokuapp.com/${username}`;
  fetch(url)
    .then(response => response.json())
    .then(data => {
      callback(parseInt(data.today_contrib, 10));
    });
};

export default fetchGithubActivity;
