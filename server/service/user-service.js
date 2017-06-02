// TODO 还不知道怎么优化
const user = require('../models/user')

user.statics = {
  fetch: function (cb) {
    return this.find({}).sort('meta.updateAt').exec(cb)
  },
  findById: function (id, cb) {
    return this.findOne({_id: id}).exec(cb)
  }
}
