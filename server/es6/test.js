// console.log(Number.isFinite(15))
// console.log(Number.isFinite('15'))
// console.log(Number.isNaN(NaN))
// console.log(Number.isInteger(3))
// console.log(Number.isInteger(3.0))
// console.log(Math.sign('aaa'))
// let arrayLike = {
//   '0': 'a',
//   '1': 'b',
//   '2': 'c',
//   length: 3
// }
// console.log(Array.from(arrayLike))
// Array.of(3, 11, 8) // [3,11,8]
// Array.of(3) // [3]
// Array.of('3', '4') // [ '3', '4' ]
// console.log([1, 4, -5, 10].findIndex((n) => n < 0))
// ['a', 'b', 'c'].fill(7, 1, 2) // [ 'a', 7, 'c' ]
// ['a', 7, 'c']
// for (let [index, elem] of ['a', 'b'].entries()) {
//   console.log(index, elem)
//   // 0 'a'
//   // 1 'b'
// }
// console.log(Array(3))
// let foo = 'bar'
// var baz = {foo}
// console.log(baz)
// function f (x, y) {
//   return {x, y}
// }
// console.log(f(1, 2))
// var birth = '2000/01/01'

// var Person = {
//   nameb: '张三',
//   // 等同于birth: birth
//   birth,
//   // 等同于hello: function ()...
//   hello: function () {
//     console.log('我的名字是', this.nameb)
//   }
// }
// console.log(Person.birth)
// console.log(Person.hello())

// console.log(+0 === -0)
// console.log(NaN === NaN)

// console.log(Object.is(+0, -0))
// console.log(Object.is(NaN, NaN))
// let z = {a: 3, b: 4}
// let n = { ... z}
// console.log(n)

// let s = Symbol()
// console.log(s)
// var s1 = Symbol.for('foo')
// var s2 = Symbol.for('foo')
// console.log(s1)
// console.log(s2)
// console.log(s1 === s2)
// let set = new Set()
// set.add(1)
// set.add(1)
// set.add(NaN)
// set.add(NaN)
// set.delete(NaN)
// console.log(set.has('1'))
// set.clear()
// for (let value of set) {
//   console.log(value)
// }
// function dedupe (array) {
//   return Array.from(new Set(array))
// }
// for (let value of dedupe([1, 2, 1, 2])) {
//   console.log(value)
// }
// let set = new Set(['red', 'green', 'blue'])
// set.forEach((value, key) => console.log(value))
// const myMap = new Map()
//   .set(true, 7)
//   .set({foo: 3}, ['abc'])

// console.log([...myMap])
