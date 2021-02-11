const axios = require('axios');
const config = require('../config.js');

let getReposByUsername = (name, cb) => {
  // TODO - Use the axios module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out,
  // but you'll have to fill in the URL
  let options = {
    url: `https://api.github.com/users/${name}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };

  // axios(options).then((res) => cb(res.data))
  //   .catch((err) => console.log('err = ', err));

    axios(options)
      .then((res) => {

        // // let filteredData = filterData(res.data);
        // // console.log('filteredData = ', filteredData);

        // cb(res.data);
        cb(filterData(res.data));
      })
      .catch((err) => console.log('err = ', err));

}

var filterData = (repos) => {
  return repos.map((repo) => {
    return {
      'owner': repo.full_name,
      'repoUrl': repo.html_url,
      'avatarUrl': repo.owner.avatar_url,
      'repoDescription': repo.description,
      'forksCount': repo.forks_count,
      'starsCount': repo.watchers
    };
  });

};

module.exports.getReposByUsername = getReposByUsername;