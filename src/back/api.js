const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
const _ = require('lodash');

function getData() {
  return fetch('http://www.jugsummercamp.org/api/edition/9').then(r => r.json()).then(r => {
    // console.log(JSON.stringify(r, null, 2))
    return r;
  });
}

function getSpeaker(req, res) {
  const id = req.params.id;
  getData().then(data => {
    const speaker = _.findLast(_.uniqBy(_.flatMap(data.presentations, pres => {
      return pres.speakers;
    }), a => a.id), a => String(a.id) === id);
    if (speaker) {
      res.status(200).send(speaker);
    } else {
      res.status(404).send({ error: 'speaker not found' });
    }
  });
}

function getAllSpeakers(req, res) {
  getData().then(data => {
    const speakers = _.uniqBy(_.flatMap(data.presentations, pres => {
      return pres.speakers;
    }), a => a.id);
    res.status(200).send(speakers);
  });
}

function getAllTalks(req, res) {
  getData().then(data => {
    const room = req.query.room;
    const talks = data.presentations.map(p => {
      p.speakers = p.speakers.map(s => s.id); 
      return p;
    }).filter(p => {
      if (room) {
        return p.place === room;
      } else {
        return true;
      }
    });
    res.status(200).send(talks);
  });
}

function getTalk(req, res) {
  getData().then(data => {
    const talk = _.findLast(data.presentations, a => String(a.id) === id);
    if (talk) {
      res.status(200).send(talk);
    } else {
      res.status(404).send({ error: 'talk not found' });
    }
  });
}

function route(app, argv) {
  app.get('/api/speakers/:id', getSpeaker);
  app.get('/api/speakers', getAllSpeakers);
  app.get('/api/talks/:id', getTalk);
  app.get('/api/talks', getAllTalks);
  app.get('/api/places');
}

function start(argv, port = 9091) {
  const internalApp = express();
  internalApp.use(bodyParser.json(), express.static('public'));
  route(internalApp, argv);
  internalApp.listen(port, () => {
    console.log(`jugsummercamp-admin listening on port ${port}!`);
  });
}

exports.route = route;
exports.start = start;
