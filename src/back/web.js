const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const jsonwebtoken = require('jsonwebtoken');
const _ = require('lodash');

const BetaSeries = require('./utils/betaseries');
const connected = require('./utils/connected').connected;
const secret = require('./utils/connected').secret;

const users = {};

function head() {
  return `
  <head>
    <title>My TVShows</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="user-scalable=no, width=device-width, initial-scale=1.0, maximum-scale=1.0">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"></link>
    <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet"></link>
    <link href="https://fonts.googleapis.com/css?family=Raleway:400,500" rel="stylesheet"></link>
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"></link>
    <link rel="stylesheet" href="/js/bundle/app.css"></link>
  </head>
  `;
}

function home() {
  return `
  <html>
    ${head()}
    <body>
      <div id="app"></div>
      <script src="/js/bundle/app.js"></script>
      <script>JSC.initDasboard(document.getElementById("app"))</script>
    </body>
  </html>`;
}

function login(req, res) {
  res
    .cookie('user', jsonwebtoken.sign({ email: req.body.email, name: 'John Doe' }, secret), {
      path: '/',
    })
    .status(200)
    .send({ done: true });
}

function getMe(req, res) {
  if (!users[req.jwt.email]) {
    users[req.jwt.email] = {
      userId: req.jwt.email,
      profile: req.jwt,
      shows: [],
    };
  }
  res.status(200).send(users[req.jwt.email]);
}

function addSerie(req, res) {
  const serieId = req.params.serieId;
  const user = users[req.jwt.email];
  const alreadyExists = !!_.find(user.shows, s => s.id === serieId);
  if (!alreadyExists) {
    console.log(req.body);
    if (req.body && req.body.id) {
      users[req.jwt.email].shows.push(req.body);
      res.status(200).send(users[req.jwt.email]);
    } else {
      console.log('Should not pass here !!!');
      BetaSeries.get(serieId)
        .then(serie => {
          users[req.jwt.email].shows.push(serie);
          res.status(200).send(users[req.jwt.email]);
        })
        .catch(e => {
          console.log(e);
          res.status(500).send({ error: e.message });
        });
    }
  } else {
    res.status(200).send(users[req.jwt.email]);
  }
}

function deleteSerie(req, res) {
  const serieId = req.params.serieId;
  users[req.jwt.email].shows = users[req.jwt.email].shows.filter(s => {
    return s.id === serieId;
  });
  res.status(200).send(users[req.jwt.email]);
}

function markEpisode(req, res) {
  const serieId = req.params.serieId;
  const episodeId = req.params.episodeId;
  const watched = req.query.watched === 'true' ? true : false;
  users[req.jwt.email].shows = users[req.jwt.email].shows.map(s => {
    if (s.id === serieId) {
      s.seasons = s.seasons.map(season => {
        season.episodes = season.episodes.map(episode => {
          if (episode.id === episodeId) {
            episode.watched = watched;
          }
          return episode;
        });
        return season;
      });
    }
    return s;
  });
  res.status(200).send(users[req.jwt.email]);
}

function markSeason(req, res) {
  const serieId = req.params.serieId;
  const seasonNumber = req.params.seasonNumber;
  const watched = req.query.watched === 'true' ? true : false;
  users[req.jwt.email].shows = users[req.jwt.email].shows.map(s => {
    if (s.id === serieId) {
      s.seasons = s.seasons.map(season => {
        if (season.number === String(seasonNumber)) {
          season.allWatched = watched;
          season.episodes = season.episodes.map(episode => {
            episode.watched = watched;
            return episode;
          });
        }
        return season;
      });
    }
    return s;
  });
  res.status(200).send(users[req.jwt.email]);
}

function route(app, argv) {
  app.get('/', (req, res) => {
    res
      .status(200)
      .type('html')
      .send(home());
  });
  app.get('/login', (req, res) => {
    res
      .status(200)
      .type('html')
      .send(home());
  });
  app.get('/dashboard', (req, res) => {
    res
      .status(200)
      .type('html')
      .send(home());
  });
  app.get('/dashboard/tvshow/*', (req, res) => {
    res
      .status(200)
      .type('html')
      .send(home());
  });
  app.post('/api/login', login);
  // me api
  app.get('/api/me', connected, getMe);
  app.post('/api/me/:serieId', connected, addSerie);
  app.delete('/api/me/:serieId', connected, deleteSerie);
  app.post('/api/me/:serieId/episodes/:episodeId', connected, markEpisode); // ?watched=true
  app.post('/api/me/:serieId/seasons/:seasonNumber', connected, markSeason); // ?watched=true
}

function start(argv, port = 9095) {
  const internalApp = express();
  internalApp.use(
    cookieParser(),
    bodyParser.json({ limit: '100mb' }),
    bodyParser.urlencoded({ extended: false }),
    express.static('public')
  );
  route(internalApp, argv);
  internalApp.listen(port, () => {
    console.log(`jugsummercamp-web listening on port ${port}!`);
  });
}

exports.route = route;
exports.start = start;
