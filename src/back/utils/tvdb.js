const fetch = require('node-fetch');
const _ = require('lodash');

const tvdbUrl = 'https://api.thetvdb.com';
const tvdbApiKey = '92466265017F27E4';
const tvdbBanner = 'https://www.thetvdb.com/banners/';


exports.seach = function seach(serie) {
  return searchBetaSerie(serie).then(shows => {
    return shows.map(s => toShowResume(s));
  }).catch(e => {
    return [];
  });
}

exports.get = function get(id) {
  return getSerie(id).then(serie => {
    return serieEpisodes(serie.id).then(episodes => [serie, episodes]);
  }).then(arr => {
    const [serie, episodes] = arr;
    const betterEpisodes = toEpisodes(episodes);
    const groups = _.groupBy(betterEpisodes, e => e.season);
    const show = {
      seasons: Object.keys(groups).map(k => {
        const season = k
        const seasonEpisodes = groups[k];
        return {
          number: season,
          episodes: seasonEpisodes,
          allWatched: false,
        }
      }),
      id: id,
      image: serie.banner ? tvdbBanner + serie.banner : null,
      title: serie.seriesName,
      description: serie.overview
    };
    return show;
  }).catch(e => console.log(e));
}

function toShowResume(show) {
  // console.log('show', show);
  return {
    id: show.id,
    image: show.banner ? tvdbBanner + show.banner : null,
    title: show.seriesName,
    description: show.overview,
    source: "tvdb",
  }
}

function toEpisodes(episodes) {
  return episodes.map(e => {
    //console.log('episode', e)
    return {
      id: String(e.id),
      episode: e.airedEpisodeNumber,
      season: e.airedSeason,
      title: e.episodeName,
      description: e.overview,
      watched: false,
    };
  });
}

let bearer = null;

function getBearer() {
  if (bearer === null) {
    fetch(`${tvdbUrl}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        apiKey: tvdbApiKey
      })
    }).then(r => r.json()).then(r => {
      console.log(r);
      if (!bearer) {
        bearer = r.token;
      }
    });
    throw Error('no token');
  } else {
    return bearer;
  }
}

function searchBetaSerie(text) {
  return fetch(`${tvdbUrl}/search/series?name=${text}`, {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + getBearer(),
      Accept: 'application/json'
    }
  }).then(r => r.json()).then(r => {
    return r.data
  }).catch(e => {
    console.log(e);
    return []
  });
}

function getSerie(id) {
  return fetch(`${tvdbUrl}/series/${id}`, {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + getBearer(),
      Accept: 'application/json'
    }
  }).then(r => r.json()).then(r => r.data).catch(e => { error: e });
}

function serieEpisodes(id) {
  return fetch(`${tvdbUrl}/series/${id}/episodes`, {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + getBearer(),
      Accept: 'application/json'
    }
  }).then(r => r.json()).then(r => r.data).catch(e => []);
}
