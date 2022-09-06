const path = require('path');
const { baseUrl, paths } = require('./tsconfig.paths.json').compilerOptions;

module.exports = (config) => {
  const alias = Object.keys(paths).reduce((sum, key) => {
    const mapped = paths[key][0];
    sum[key.replace(/\/\*$/, '')] = path.resolve(__dirname, baseUrl, mapped.replace(/\*$/, ''));
    return sum;
  }, { ...config.alias });

  config.resolve = {
    ...config.resolve,
    alias
  };
  return config;
};
