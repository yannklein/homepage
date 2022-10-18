const fetchGithubActivity = (username, day, callback) => {
  const url = `https://todays-commits.fly.dev/${username}`;
  fetch(url)
    .then(response => response.json())
    .then(data => {
      callback(parseInt(data.commits, 10));
    });
};

export default fetchGithubActivity;
