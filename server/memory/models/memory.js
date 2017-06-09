// Schema、Model、Entity或者Documents的关系请牢记，Schema生成Model，Model创造Entity，Model和Entity都可对数据库操作造成影响，但Model比Entity更具操作性。
const mongoose = require('mongoose')

/** ************ 定义模式schema **************/
const memorySchema = mongoose.Schema({
  subject: String,
  happenDate: Date,
  expectDate: Date,
  address: String,
  character: String,
  descreption: String
})

/** ************ 定义模型Model **************/
const Memory = mongoose.model('Memory', memorySchema)

module.exports = Memory
