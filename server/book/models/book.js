// Schema、Model、Entity或者Documents的关系请牢记，Schema生成Model，Model创造Entity，Model和Entity都可对数据库操作造成影响，但Model比Entity更具操作性。
const mongoose = require('mongoose')

/** ************ 定义模式schema **************/
const bookSchema = mongoose.Schema({
  title: String,
  language: String,
  fileType: String,
  author: String,
  path: String,
  descreption: String
})

/** ************ 定义模型Model **************/
const Book = mongoose.model('Book', bookSchema)

module.exports = Book
