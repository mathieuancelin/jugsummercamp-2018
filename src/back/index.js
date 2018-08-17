const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const app = express();

const argv = require('minimist')(process.argv.slice(2));
const port = process.env.PORT || 9000;

app.use(
  cookieParser(),
  bodyParser.json({ limit: '100mb' }),
  bodyParser.urlencoded({ extended: false }),
  express.static('public')
);

if (!argv.module) {
  ['admin', 'apibetaseries', 'web'].map(mod => require(`./${mod}`).route(app, argv));
  app.listen(port, () => {
    console.log(`jugsummercamp-app listening on port ${port}!`);
  });
} else {
  (_.isArray(argv.module) ? argv.module : [argv.module]).map(mod => {
    const port = mod.split(':')[1];
    if (port) {
      require(`./${mod.split(':')[0]}`).start(argv, port);
    } else {
      require(`./${mod}`).start(argv);
    }
  });
}
