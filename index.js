const fs = require('fs')
const getColors = require('get-image-colors')
const buffer = fs.readFileSync('image.jpg')

getColors(buffer, 'image/jpg').then(colors => {
  const spuds = colors.map(color => color.hsl())
  return sortingHat(spuds)
})

// sorting hat - group colors
const sortingHat = function(thingsToSort) {
  console.log('sorting', thingsToSort)
}