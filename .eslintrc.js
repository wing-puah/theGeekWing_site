import { alias } from 'alias';

const aliasSettings = alias.reduce((acc, { key, pathname }) => {
  const _acc = [...acc];
  _acc.push([key, pathname]);
  return _acc;
}, []);

const importResolverSettings = { 'import/resolver': { alias: aliasSettings } };

module.exports = {
  extends: ['airbnb', 'plugin:prettier/recommended'],
  settings: { ...importResolverSettings },
};
