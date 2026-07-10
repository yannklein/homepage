export const fetchGithubActivity = (username: string, callback: (number: number) => void): void => {
  const url = `https://todays-commits.yannklein.dev/${username}`;
  fetch(url)
    .then(response => response.json())
    .then(data => {
      callback(parseInt(data.commits, 10));
    });
};

