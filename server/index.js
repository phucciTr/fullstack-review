const express = require('express');
const bodyParser = require('body-parser');
const { getReposByUsername } = require('./../helpers/github');
const db = require('./../database/index');

const Promise = require('bluebird');
const saveToDb = Promise.promisify(db.save);

const app = express();
const port = 1128;

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.post('/repos', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  let name = req.body.data;
  res.sendStatus(201);

  getReposByUsername(name, (userRepos) => {
    saveToDb((userRepos))
      .then((user) => console.log(`${user} repos saved to db`))
      .catch((err) => console.log('err = ', err));
  });
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
});

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

