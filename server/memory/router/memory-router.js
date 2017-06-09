const Memory = require('../models/memory')
const express = require('express')
const router = express.Router()

/** ************ 创建(create) 读取(get) 更新(update) 删除(delete) **************/

// 创建账号接口
router.post('/api/memory/save', (req, res) => {
    // 这里的req.body能够使用就在index.js中引入了const bodyParser = require('body-parser')
  let newMemory = new Memory(
    req.body.memory
  )
  // 保存数据newAccount数据进mongoDB
  newMemory.save((err, data) => {
    if (err) {
      res.send(err)
    } else {
      res.send('create memory successed')
    }
  })
})

router.get('/api/memory/find', (req, res) => {
    // 通过模型去查找数据库
  Memory.find((err, data) => {
    if (err) {
      res.send(err)
    } else {
      res.send(data)
    }
  })
})

router.get('/api/memory/findone', (req, res) => {
  console.log(req)
  Memory.findOne({_id: req.body.id}, (err, data) => {
    if (err) {
      res.send(err)
    } else {
      res.send(data)
    }
  })
})

module.exports = router
