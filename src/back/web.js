const express = require('express');
const bodyParser = require('body-parser');

function head() {
  return `
  <head>
  <title>JUG SummerCamp</title>
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="user-scalable=no, width=device-width, initial-scale=1.0, maximum-scale=1.0">
  <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" type="text/css">
  <link rel="stylesheet" media="screen" href="http://www.jugsummercamp.org/assets/stylesheets/styles.css">
  <link rel="stylesheet" media="screen" href="http://www.jugsummercamp.org/assets/stylesheets/main.css">
  <link rel="shortcut icon" type="image/png" href="http://www.jugsummercamp.org/assets/icons/logo.png">
  </head>
  `;
}

function route(app, argv) {
  app.get('/', (req, res) => {
    res
      .status(200)
      .type('html')
      .send('<html>' + head() + '<body><div id="app"></div><script src="/js/bundle/app.js"></script><script>JSC.Web.render(document.getElementById("app"))</script></body></html>');
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
