var fs = require('fs')
// var source = fs.readFileSync('logo_buffer.png')
// fs.writeFileSync('stream_copy_logo.png', source)

var readStream = fs.createReadStream('./logo.png')

var writeStream = fs.createWriteStream('2.png')

readStream.on('data', function (chunk) {
  if (writeStream.write(chunk) === false) {
    console.log('still cached')
    readStream.pause()
  }
})

readStream.on('end', function () {
  writeStream.end()
})

writeStream.on('drain', function () {
  console.log('data drains')

  readStream.resume()
})
