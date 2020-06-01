module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://www.qixiangyun.net',
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
