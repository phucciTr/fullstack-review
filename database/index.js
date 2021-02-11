const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher', () => {
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
});

let Repo = mongoose.model('Repo', repoSchema);


// TO DROP A COLLECTION from A MODEL
// Repo.remove({}, () => console.log('data removed'));


// TODO: Your code here
// This function should save a repo or repos to
// the MongoDB
let save = (repos) => {
  Repo.insertMany(filterRepos(repos))
    .then(() => console.log('data inserted'))
    .catch((err) => console.log('err = ', err));
};


var filterRepos = (repos) => {
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

module.exports.save = save;