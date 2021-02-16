const Promise = require('bluebird');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/fetcher', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
  console.log('mongoose is connected');
});

// mongoose.connect('mongodb://localhost/fetcher', () => mongoose.connection.db.dropDatabase()); // Drop schema


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


// Repo.remove({}, () => console.log('data removed')); // TO DROP A COLLECTION from A MODEL


let getTop25 = (cb) => {
  Repo.find({})
  .sort({ ratingAve: -1 })
  .limit(25)
  .select('-ratingAve')
  .then((repos) => cb(null, repos))
  .catch((err) => cb(err, null));
};

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