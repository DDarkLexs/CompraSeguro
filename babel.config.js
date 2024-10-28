module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo',"module:@expo/knex-expo-sqlite-dialect/babel-preset"],
    env: {
      production: {
        plugins: ['react-native-paper/babel'],
      },
    },
  };
};
