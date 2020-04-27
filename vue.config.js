module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://39.100.120.137:8080',
        ws: false,
        changeOrigin: true,
        pathRewrite: {
          '/api': ''
        }
      }
    }
  },
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  }
}
