// Schema、Model、Entity或者Documents的关系请牢记，Schema生成Model，Model创造Entity，Model和Entity都可对数据库操作造成影响，但Model比Entity更具操作性。
const mongoose = require('mongoose')

/** ************ 定义模式loginSchema **************/
const blogSchema = mongoose.Schema({
  title: String,
  author: String,
  date: Date,
  labels: Array,
  content: String,
  isMyCreated: Boolean
})

/** ************ 定义模型Model **************/
const Blog = mongoose.model('Blog', blogSchema)

module.exports = Blog
