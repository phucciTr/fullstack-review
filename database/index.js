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
  repos.forEach((repo) => {
    new Repo(repo).save()
      .then((result) => console.log(`${result._doc.owner} saved to db`))
      .catch((err) => console.log('err = ', err));
  });
};


module.exports.save = save;