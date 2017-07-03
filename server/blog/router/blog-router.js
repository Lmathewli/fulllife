const Blog = require('../models/blog')
const express = require('express')
const router = express.Router()

/** ************ 创建(create) 读取(get) 更新(update) 删除(delete) **************/

// 创建账号接口
router.post('/api/blog/saveBlog', (req, res) => {
  let blog = new Blog(
    req.body.blog
  )
  blog.save((err, data) => {
    if (err) {
      res.send(err)
    } else {
      res.send('createAccount successed')
    }
  })
})

router.get('/api/blog/getBlogs', (req, res) => {
  Blog.find((err, data) => {
    if (err) {
      res.send(err)
    } else {
      res.send(data)
    }
  })
})

module.exports = router
