const express = require('express');
const bodyParser = require('body-parser');

function home(req, res) {
  res.status(200).type('html').send(`
<h1>Admin new ;)</h1>  
  `);
}

function route(app, argv) {
  app.get('/admin', home);
}

function start(argv, port = 9091) {
  const internalApp = express();
  internalApp.use(bodyParser.json(), express.static('public'));
  route(internalApp, argv);
  internalApp.listen(port, () => {
    console.log(`jugsummercamp-admin-old listening on port ${port}!`);
  });
}

exports.route = route;
exports.start = start;
