module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://39.100.120.137:8080',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '/api': ''
        }
      }
    }
  }
}
