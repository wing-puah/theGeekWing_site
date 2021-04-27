const path = require('path');

module.exports = {
  webpack: (config) => {
    const alias = {
      components: path.join(__dirname, 'components'),
      UI: path.join(__dirname, 'components/UI'),
      styles: path.join(__dirname, 'components/styles'),
      reactHooks: path.join(__dirname, 'components/reactHooks'),
      layouts: path.join(__dirname, 'layouts'),
    };
    config.resolve.alias = {
      ...config.resolve.alias,
      ...alias,
    };
    // moduleAlias.forEach(({ key, pathname }) => {
    //   config.resolve.alias[key] = path.join(__dirname, pathname);
    // });
    return config;
  },
};
