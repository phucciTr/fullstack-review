const express = require('express');
const bodyParser = require('body-parser');

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

  console.log('req.body.data = ', req.body.data);
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
});

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

