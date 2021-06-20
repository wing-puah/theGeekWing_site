const path = require('path');

const fileAlias = {
  components: 'components',
  UI: 'components/UI',
  styles: 'components/styles',
  reactHooks: 'components/reactHooks',
  models: 'components/models',
  layouts: 'layouts',
  public: 'public',
};

module.exports = {
  webpack: (config) => {
    const alias = Object.entries(fileAlias).reduce((acc, [k, v]) => {
      acc[k] = path.join(__dirname, v);
      return acc;
    }, {});

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
