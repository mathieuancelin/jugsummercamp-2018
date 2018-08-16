import React from 'react';
import ReactDOM from 'react-dom';

export function initDasboard(node) {
  const module = require('./dashboard');
  module.init(node);
}

export function initAdminOld(node) {
  const module = require('./adminold');
  module.init(node);
}

export function initAdminNew(node) {
  const module = require('./adminnew');
  module.init(node);
}
