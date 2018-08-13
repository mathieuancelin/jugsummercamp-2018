const express = require('express');
const bodyParser = require('body-parser');

function route(app, argv) {
  app.get('/', (req, res) => {
    res.status(200).type('html').send('<h1>Hello</h1>');
  });
  app.get('/about', (req, res) => {

  });
}

function start(argv, port = 9095) {
  const internalApp = express();
  internalApp.use(bodyParser.json(), express.static('public'));
  route(internalApp, argv);
  internalApp.listen(port, () => {
    console.log(`jugsummercamp-web listening on port ${port}!`)
  });
}

exports.route = route;
exports.start = start;