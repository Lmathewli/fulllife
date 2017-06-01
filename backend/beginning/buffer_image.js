var fs = require('fs')

fs.readFile('logo.png', function (err, origin) {
  console.log(Buffer.isBuffer(origin))
  fs.writeFile('logo_buffer.png', origin, function (err) {
    if (err) console.log(err)
  })
  var base64Image = origin.toString('base64')

  console.log(base64Image)
  var decodedImage = new Buffer(base64Image, 'base64')

  console.log(Buffer.compare(origin, decodedImage))
  fs.writeFile('logo_decoded.png', decodedImage, function (err) {
    if (err) console.log(err)
  })
})
