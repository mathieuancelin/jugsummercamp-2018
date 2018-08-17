const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const TVDB = require('./utils/tvdb');

const connected = require('./utils/connected').connected;
let counter = 0;

function searchShows(req, res) {
  counter = counter + 1;
  if (counter % 2 === 0) {
    TVDB.seach(req.query.name).then(series => {
      res.status(200).send(series);
    });
  } else {
    console.log('fail request');
    req.socket.destroy('I/O error !!!'); 
  }
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
  internalApp.use(
    cookieParser(),
    bodyParser.json({ limit: '100mb' }),
    bodyParser.urlencoded({ extended: false }),
    express.static('public')
  );
  route(internalApp, argv);
  internalApp.listen(port, () => {
    console.log(`jugsummercamp-api-tvdb listening on port ${port}!`);
  });
}

exports.route = route;
exports.start = start;
