const express = require('express');
const bodyParser = require('body-parser');

function route(app, argv) {}

function start(argv, port = 9092) {
  const internalApp = express();
  internalApp.use(bodyParser.json(), express.static('public'));
  route(internalApp, argv);
  internalApp.listen(port, () => {
    console.log(`jugsummercamp-blog listening on port ${port}!`);
  });
}

exports.route = route;
exports.start = start;
