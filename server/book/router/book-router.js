const Book = require('../models/book')
const express = require('express')
const router = express.Router()

/** ************ 创建(create) 读取(get) 更新(update) 删除(delete) **************/

// 创建账号接口
router.post('/api/book/save', (req, res) => {
    // 这里的req.body能够使用就在index.js中引入了const bodyParser = require('body-parser')
  let newBook = new Book(
    req.body.book
  )
  // 保存数据newAccount数据进mongoDB
  newBook.save((err, data) => {
    if (err) {
      res.send(err)
    } else {
      res.send('create book successed')
    }
  })
})

router.get('/api/book/find', (req, res) => {
    // 通过模型去查找数据库
  Book.find((err, data) => {
    if (err) {
      res.send(err)
    } else {
      res.send(data)
    }
  })
})

router.post('/api/book/findone', (req, res) => {
  Book.findOne({_id: req.body.id}, (err, data) => {
    if (err) {
      res.send(err)
    } else {
      res.send(data)
    }
  })
})

router.post('/api/book/removeone', (req, res) => {
  Book.remove({_id: req.body.id}, (err) => {
    if (err) {
      res.send(err)
    }
    Book.find((err, data) => {
      if (err) {
        res.send(err)
      } else {
        res.send(data)
      }
    })
  })
})
module.exports = router
