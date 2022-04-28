const spritesheet = require('spritesheet-js')

spritesheet('scripts/assets/*.png', { format: 'json', path: 'public/sprites' }, function (err) {
  if (err) throw err

  console.log('spritesheet successfully generated')
})
