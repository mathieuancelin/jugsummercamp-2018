const express = require('express');
const bodyParser = require('body-parser');

function head() {
  return `
  <head>
    <title>My TVShows</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="user-scalable=no, width=device-width, initial-scale=1.0, maximum-scale=1.0">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous"></link>
    <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet"></link>
    <link href="https://fonts.googleapis.com/css?family=Raleway:400,500" rel="stylesheet"></link>
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous"></link>
    <link rel="stylesheet" href="/js/bundle/app.css"></link>
  </head>
  `;
}

function route(app, argv) {
  app.get('/', (req, res) => {
    res
      .status(200)
      .type('html')
      .send(`
      <html>
        ${head()}
        <body>
          <div id="app"></div>
          <script src="/js/bundle/app.js"></script>
          <script>JSC.init(document.getElementById("app"))</script>
        </body>
      </html>`);
  });
  app.get('/about', (req, res) => {});
}

function start(argv, port = 9095) {
  const internalApp = express();
  internalApp.use(bodyParser.json(), express.static('public'));
  route(internalApp, argv);
  internalApp.listen(port, () => {
    console.log(`jugsummercamp-web listening on port ${port}!`);
  });
}

exports.route = route;
exports.start = start;
