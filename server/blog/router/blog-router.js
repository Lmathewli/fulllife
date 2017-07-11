const Blog = require('../models/blog')
const express = require('express')
const multiparty = require('multiparty')
const fs = require('fs')
const util = require('util')
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
router.post('/api/blog/saveFile', (req, res, next) => {
  var form = new multiparty.Form({uploadDir: 'E:\\gitcode\\fulllife\\static\\pdf'})
  form.parse(req, (err, fields, files) => {
    let fielsTmp = JSON.stringify(files, null, 2)
    if (err) {
      console.log(err)
    } else {
      let inputFile = files.file[0]
      if (!inputFile) {
        return
      }
      let uploadedPath = inputFile.path
      let dstPath = 'E:\\gitcode\\fulllife\\static\\pdf\\' + inputFile.originalFilename
      fs.rename(uploadedPath, dstPath, (err) => {
        if (err) {
          console.log('rename error' + err)
        } else {
          console.log('rename OK ')
        }
      })
    }
    res.writeHead(200, {'content-type': 'text/plain;charset=utf-8'})
    res.write('received upload: \n')
    res.end(util.inspect({fields: fields, files: fielsTmp}))
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
