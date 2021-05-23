module.exports = {
  configureWebpack: {
    devtool: 'source-map'
  },
  publicPath: './',
  filenameHashing: false,
  chainWebpack: config => {
    config.output.filename('[name].js')
  },
  devServer: {
    compress: true,
    // turn this off for time being as we don't utilize it and it brings in extra dependencies
    hot: false,
    hotOnly: false
  }
}
