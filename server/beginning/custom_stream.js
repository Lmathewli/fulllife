var stream = require('stream')
var util = require('util')

function ReadStream () {
  stream.Readable.call(this)
}

util.inherits(ReadStream, stream.Readable)

ReadStream.prototype._read = function () {
  this.push('I ')
  this.push('hehe \n')
  this.push(null)
}
function WritStream () {
  stream.Writable.call(this)
  this._cached = new Buffer('')
}

util.inherits(WritStream, stream.Writable)

WritStream.prototype._write = function (chunk, encode, cb) {
  console.log(chunk.toString())
  cb()
}

function TransFormStram () {
  stream.Transform.call(this)
}

util.inherits(TransFormStram, stream.Transform)

TransFormStram.prototype._transform = function (chunk, encode, cb) {
  this.push(chunk)
  cb()
}
TransFormStram.prototype._flush = function (cb) {
  this.push('Oh Yeah!')
  cb()
}

var rs = new ReadStream()
var ws = new WritStream()
var ts = new TransFormStram()

rs.pipe(ts).pipe(ws)
