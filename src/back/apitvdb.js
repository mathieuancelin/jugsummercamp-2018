const express = require('express');
const bodyParser = require('body-parser');
const TVDB = require('./utils/tvdb');

const connected = require('./utils/connected').connected;

function searchShows(req, res) {
  TVDB.seach(req.query.name).then(series => {
    res.status(200).send(series);
  });
}

function getShow(req, res) {
  const id = req.params.id;
  TVDB.get(id)
    .then(show => {
      res.status(200).send(show);
    })
    .catch(e => {
      res.status(404).send({ error: 'show not found' });
    });
}

function route(app, argv) {
  app.get('/api/shows/_search', connected, searchShows);
  app.get('/api/shows/:id', connected, getShow);
}

function start(argv, port = 9094) {
  const internalApp = express();
  internalApp.use(bodyParser.json(), express.static('public'));
  route(internalApp, argv);
  internalApp.listen(port, () => {
    console.log(`jugsummercamp-api-tvdb listening on port ${port}!`);
  });
}

exports.route = route;
exports.start = start;
