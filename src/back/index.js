const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const argv = require('minimist')(process.argv.slice(2));
const port = process.env.PORT || 8080;

app.use(bodyParser.json(), express.static('public'));

if (!argv.module) {
  ['admin', 'blog', 'dashboard', 'status', 'web'].map(mod => require(`./${mod}`).route(app, argv));
  app.listen(port, () => {
    console.log(`jugsummercamp-app listening on port ${port}!`);
  });
} else {
  (_.isArray(argv.module) ? argv.module : [argv.module]).map(mod => {
    const port = mod.split(':')[1];
    if (port) {
      require(`./${mod}`).start(argv, port);
    } else {
      require(`./${mod}`).start(argv);
    }
  });
}
