module.exports = {
  devServer: {
    watchOptions: {
      ignored: {},
      aggregateTimeout: 300,
      poll: 3000
    }
  },
  transpileDependencies: ["vuetify"]
};
