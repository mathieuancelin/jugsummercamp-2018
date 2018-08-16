export function initDasboard(node) {
  const module = require('./dashboard');
  module.init(node);
}

export function initDasboardNew(node) {
  const module = require('./dashboard');
  module.init(node);
  setTimeout(() => {
    document.body.style.background = 'url(/assets/img/breaking.jpg) no-repeat center fixed';
    document.body.style.backgroundSize = 'cover';
  }, 300);
}

export function initAdminOld(node) {
  const module = require('./adminold');
  module.init(node);
}

export function initAdminNew(node) {
  const module = require('./adminnew');
  module.init(node);
}
