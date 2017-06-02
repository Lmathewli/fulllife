var EventEmitter = require('events').EventEmitter
var life = new EventEmitter()
life.setMaxListeners(11)
life.on('求安慰', function (who) {
  console.log('给 ' + who + ' 1')
})
life.on('求安慰', function (who) {
  console.log('给 ' + who + ' 2')
})
life.on('求安慰', function (who) {
  console.log('给 ' + who + ' 3')
})
life.on('求安慰', function (who) {
  console.log('给 ' + who + ' 4')
})
life.on('求安慰', function (who) {
  console.log('给 ' + who + ' 5')
})
life.on('求安慰', function (who) {
  console.log('给 ' + who + ' 6')
})
life.on('求安慰', function (who) {
  console.log('给 ' + who + ' 7')
})
life.on('求安慰', function (who) {
  console.log('给 ' + who + ' 8')
})
life.on('求安慰', function (who) {
  console.log('给 ' + who + ' 9')
})
life.on('求安慰', function (who) {
  console.log('给 ' + who + ' 10')
})
life.on('求安慰', function (who) {
  console.log('给 ' + who + ' 11')
})
life.on('求溺爱', function (who) {
  console.log('给 ' + who + ' 11')
})
life.on('求溺爱', function (who) {
  console.log('给 ' + who + ' 11')
})

var hasConfortLister = life.emit('求安慰', '汉子')
var hasLoveLister = life.emit('求溺爱', '汉子')
var hasLister = life.emit('求玩坏', '汉子')

console.log(hasConfortLister)
console.log(hasLoveLister)
console.log(hasLister)

