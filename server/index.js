const express = require('express');
const bodyParser = require('body-parser');
const gh = require('./../helpers/github');
const db = require('./../database/index');

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
  // res.sendStatus(201);

  gh.getReposByUsername(name, (userRepos) => {
    db.save((userRepos))
      .then((user) => {
        console.log(`${user} repos saved to db`);
        res.sendStatus(201);
      })
      .catch((err) => {
        console.log('saving repos err = ', err);
        res.sendStatus(201);
      });
  });
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
  db.getTop25()
    .then((repos) => res.status(200).json(repos))
    .catch((err) => res.status(400));
});

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

