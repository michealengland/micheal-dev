const path = require('path')
exports.onCreateWebpackConfig = ({actions}) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@components': path.resolve(__dirname, 'src/components'),
        '@utilities': path.resolve(__dirname, 'src/utilities'),
        '@static': path.resolve(__dirname, 'static')
      }
    }
  })
}
