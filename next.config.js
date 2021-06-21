const path = require('path');

const moduleAlias = [
  { key: 'layouts', pathname: 'layouts' },
  { key: 'pages', pathname: 'pages' },
  { key: 'components', pathname: 'components' },
  { key: 'store', pathname: 'store' },
  { key: 'styles', pathname: 'components/styles' },
  { key: 'UI', pathname: 'components/UI' },
  { key: 'reactHooks', pathname: 'components/reactHooks' },
  { key: 'models', pathname: 'components/models' },
];

module.exports = {
  webpack: (config) => {
    const alias = moduleAlias.reduce((acc, { key, pathname }) => {
      acc[key] = path.join(__dirname, pathname);
      return acc;
    }, {});

    config.resolve.alias = {
      ...config.resolve.alias,
      ...alias,
    };

    return config;
  },
};
