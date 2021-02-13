const Promise = require('bluebird');

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/fetcher', () => {
  // mongoose.connection.db.dropDatabase(); // drop schema
});

// TODO: your schema here!
let repoSchema = mongoose.Schema({
  owner: String,
  repoUrl: { type: String, unique: true },
  avatarUrl: String,
  repoDescription: String,
  forksCount: Number,
  starsCount: Number,
  ratingAve: Number
});

let Repo = mongoose.model('Repo', repoSchema);


// TO DROP A COLLECTION from A MODEL
// Repo.remove({}, () => console.log('data removed'));


let getTop25 = (cb) => {
  Repo.find({})
  .sort({ ratingAve: -1 })
  .limit(25)
  .select('-ratingAve')
  .then((repos) => cb(null, repos))
  .catch((err) => cb(err, null));
};

// TODO: Your code here
// This function should save a repo or repos to
// the MongoDB
let save = (repos, cb) => {
  Repo.insertMany(filterRepos(repos))
    .then(() => cb(null, repos[0].owner.login))
    .catch((err) => cb(err, null));
};


var filterRepos = (repos) => {
  return repos.map((repo) => {
    return {
      'owner': repo.full_name,
      'repoUrl': repo.html_url,
      'avatarUrl': repo.owner.avatar_url,
      'repoDescription': repo.description,
      'forksCount': repo.forks_count,
      'starsCount': repo.watchers,
      'ratingAve': (repo.forks_count + repo.watchers) / 2
    };
  });

};

module.exports.save = Promise.promisify(save);
module.exports.getTop25 = Promise.promisify(getTop25);