const path = require('path');

// const { moduleAlias } = require('./alias.js');next.

module.exports = {
  webpack: (config) => {
    // config.resolve.alias.components = path.join(__dirname, 'components');
    // moduleAlias.forEach(({ key, pathname }) => {
    //   config.resolve.alias[key] = path.join(__dirname, pathname);
    // });
    return config;
  },
};
