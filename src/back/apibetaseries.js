const express = require('express');
const bodyParser = require('body-parser');
const BetaSeries = require('./utils/betaseries');

const connected = require('./utils/connected').connected;

function searchShows(req, res) {
  console.log('searchShows', req.query.name);
  BetaSeries.seach(req.query.name).then(series => {
    res.status(200).send(series);
  });
}

function getShow(req, res) {
  const id = req.params.id;
  BetaSeries.get(id)
    .then(show => {
      res.status(200).send(show);
    })
    .catch(e => {
      res.status(404).send({ error: 'show not found' });
    });
}

function route(app, argv) {
  app.get('/api/shows/_search', connected, searchShows);
  app.post('/api/shows/_search', connected, searchShows);
  app.get('/api/shows/:id', connected, getShow);
}

function start(argv, port = 9093) {
  const internalApp = express();
  internalApp.use(
    cookieParser(),
    bodyParser.json({ limit: '100mb' }),
    bodyParser.urlencoded({ extended: false }),
    express.static('public')
  );
  route(internalApp, argv);
  internalApp.listen(port, () => {
    console.log(`jugsummercamp-api-beta listening on port ${port}!`);
  });
}

exports.route = route;
exports.start = start;
