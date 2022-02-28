module.exports = {
  plugins: [
    require('postcss-nested')(),
    require('postcss-import')(),
    require('postcss-simple-vars')(),
    require('autoprefixer')(),
    require('cssnano')({
      autoprefixer: false
    })
  ]
}
