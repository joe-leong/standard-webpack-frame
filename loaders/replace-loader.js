// replece-loader.js
const authorName = 'jj'
exports = module.exports = function (source) {
  const matches = source.match(/\{\{author\}\}/g) || []
  for (const match of matches) {
    source = source.replace(match,authorName)
  }
  return source
}
