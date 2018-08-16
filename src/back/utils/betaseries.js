const fetch = require('node-fetch');
const _ = require('lodash');

const betaUrl = 'https://api.betaseries.com';
const betaApiKey = 'a8dd8ebe25e9';

exports.seach = function seach(serie) {
  return searchBetaSerie(serie)
    .then(shows => {
      return Promise.all(shows.map(s => getBetaSerie(s.id)));
    })
    .then(shows => {
      return shows.map(s => toShowResume(s));
    })
    .catch(e => {
      return [];
    });
};

exports.get = function get(id) {
  return getBetaSerie(id)
    .then(betaSerie => {
      return betaSerieEpisodes(betaSerie.id).then(episodes => [betaSerie, episodes]);
    })
    .then(arr => {
      const [betaSerie, episodes] = arr;
      const betterEpisodes = toEpisodes(episodes);
      const groups = _.groupBy(betterEpisodes, e => e.season);
      // console.log(betaSerie)
      return {
        seasons: Object.keys(groups).map(k => {
          const season = k;
          const seasonEpisodes = groups[k];
          return {
            number: season,
            episodes: seasonEpisodes,
            allWatched: false,
          };
        }),
        id: id,
        image: betaSerie.images ? betaSerie.images.banner : null,
        title: betaSerie.title,
        description: betaSerie.description,
      };
    });
};

function toShowResume(show) {
  // console.log('show', show);
  return {
    id: show.id,
    image: show.images ? show.images.banner : null,
    title: show.title,
    description: show.description,
    source: 'betaserie',
  };
}

function toEpisodes(episodes) {
  return episodes.map(e => {
    // console.log('episode', e)
    return {
      id: String(e.id),
      episode: e.episode,
      season: e.season,
      title: e.title,
      description: e.description,
      watched: false,
    };
  });
}

function searchBetaSerie(text) {
  return fetch(`${betaUrl}/search/all?query=${text}&key=${betaApiKey}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  })
    .then(r => r.json())
    .then(r => {
      return r.shows;
    })
    .catch(e => {
      console.log(e);
      return [];
    });
}

function getBetaSerie(id) {
  return fetch(`${betaUrl}/shows/display?id=${id}&key=${betaApiKey}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  })
    .then(r => r.json())
    .then(r => r.show)
    .catch(e => {
      error: e;
    });
}

function betaSerieEpisodes(id) {
  return fetch(`${betaUrl}/shows/episodes?id=${id}&key=${betaApiKey}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  })
    .then(r => r.json())
    .then(r => r.episodes)
    .catch(e => []);
}
