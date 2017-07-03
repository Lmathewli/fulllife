const Label = require('../models/label')
const express = require('express')
const router = express.Router()

/** ************ 创建(create) 读取(get) 更新(update) 删除(delete) **************/

// 创建账号接口
router.post('/api/label/saveLabel', (req, res) => {
  let label = new Label(
    req.body.label
  )
  label.save((err, data) => {
    if (err) {
      res.send(err)
    } else {
      res.send('label successed')
    }
  })
})

router.get('/api/label/getLabels', (req, res) => {
  Label.find((err, data) => {
    if (err) {
      res.send(err)
    } else {
      res.send(data)
    }
  })
})
router.post('/api/label/deleteAllLabel', (req, res) => {
  Label.remove({}, (err, data) => {
    if (err) {
      res.send(err)
    } else {
      res.send(data)
    }
  })
})
router.post('/api/label/deleteOne', (req, res) => {
  Label.remove({_id: req.body._id}, (err) => {
    if (err) {
      res.send(err)
    }
    res.send()
  })
})
module.exports = router
