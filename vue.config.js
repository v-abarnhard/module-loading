module.exports = {
  configureWebpack: {
    devtool: 'source-map'
  },
  publicPath: './',
  filenameHashing: false,
  chainWebpack: config => {
    config.output.filename('[name].js')

    config.module.rule('vue').uses.delete('cache-loader')
    config.module.rule('js').uses.delete('cache-loader')
    config.module.rule('ts').uses.delete('cache-loader')
    config.module.rule('tsx').uses.delete('cache-loader')

    // Allows the Vue CLI to be compiled in modern mode
    if (!process.env.VUE_CLI_MODERN_MODE || process.env.VUE_CLI_MODERN_BUILD) {
      config.plugins.delete('prefetch')
      config.plugin('preload')
        .tap(options => {
          options[0].rel = 'preload'
          options[0].fileWhitelist = options[0].fileWhitelist || []
          options[0].fileWhitelist.push(/chunk-vendors(.)+?\.js$/)
          options[0].fileWhitelist.push(/app.(js|css)$/)
          options[0].fileWhitelist.push(/BentonSans(.)+?\.ttf$/)
          options[0].include = 'allAssets'
          options[0].as = entry => {
            if (/\.css$/.test(entry)) return 'style'
            if (/\.ttf$/.test(entry)) return 'font'
            return 'script'
          }
          return options
        })
      config.plugin('html')
        .tap(options => {
          options[0].chunks = ['chunk-vendors', 'app']
          options[0].template = './public/index.html'
          options[0].filename = 'index.html'
          options[0].favicon = './public/favicon.ico'
          return options
        })
    }
  },
  devServer: {
    compress: true,
    // turn this off for time being as we don't utilize it and it brings in extra dependencies
    hot: false,
    hotOnly: false
  }
}
