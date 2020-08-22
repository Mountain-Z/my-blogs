module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'components': '@/components',
        'views': '@/views',
        'common': 'components/common'
      }
    }
  }
}