const path = require('path');

module.exports = function override(config) {
  config.resolve = {
    ...config.resolve,
    alias: {
      ...config.alias,
      "@app": path.resolve(__dirname, 'src/app'),
      "@assets": path.resolve(__dirname, 'src/assets'),
      "@models": path.resolve(__dirname, 'src/models'),
      "@services": path.resolve(__dirname, 'src/services'),
      "@components": path.resolve(__dirname, 'src/presentation/components'),
      "@hooks": path.resolve(__dirname, 'src/presentation/hooks'),
      "@pages": path.resolve(__dirname, 'src/presentation/pages'),
      "@store": path.resolve(__dirname, 'src/presentation/store'),
      "@styles": path.resolve(__dirname, 'src/presentation/styles'),
      "@utils": path.resolve(__dirname, 'src/presentation/utils')
    },
  };

  return config;
};
