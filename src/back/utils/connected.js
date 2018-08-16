const jsonwebtoken = require('jsonwebtoken');
const _ = require('lodash');

const secret = 'secret';

exports.secret = secret;

exports.connected = function connected(req, res, next) {
  const cookies = req.cookies;
  const user = cookies.user;
  if (!user) {
    res.send(400).send({ error: 'No session' });
  } else {
    try {
      const decoded = jsonwebtoken.verify(user, secret);
      req.jwt = decoded;
      next();
    } catch (e) {
      console.log(e);
      res.send(400).send({ error: 'Bad session: ' + e.message });
    }
  }
};
