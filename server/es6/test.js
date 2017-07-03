// console.log(Number.isFinite(15))
// console.log(Number.isFinite('15'))
// console.log(Number.isNaN(NaN))
// console.log(Number.isInteger(3))
// console.log(Number.isInteger(3.0))
// console.log(Math.sign('aaa'))
let arrayLike = {
  '0': 'a',
  '1': 'b',
  '2': 'c',
  length: 3
}
console.log(Array.from(arrayLike))
