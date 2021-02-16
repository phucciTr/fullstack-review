const axios = require('axios');

let getReposByUsername = (name, cb) => {

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