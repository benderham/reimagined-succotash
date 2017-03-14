const fs = require('fs')
const getColors = require('get-image-colors')
const buffer = fs.readFileSync('image.jpg')

const sortingHat = function(thingsToSort) {
  console.log('sorting', thingsToSort)
}

getColors(buffer, 'image/jpg').then(colors => {
  const spuds = colors.map(color => color.hsl())
  return sortingHat(spuds)
})