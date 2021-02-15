const axios = require('axios');
// const config = require('../config.js');

let getReposByUsername = (name, cb) => {
  // TODO - Use the axios module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out,
  // but you'll have to fill in the URL
  let options = {
    url: `https://api.github.com/users/${name}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${process.env.TOKEN}`
    }
  };

  axios(options)
    .then((res) => cb(res.data))
    .catch((err) => console.log('axios = ', err));
};

module.exports.getReposByUsername = getReposByUsername;