var express = require('express')
var path = require('path')
var port = process.env.port || 3333
var app = express()

app.set('views', './views/pages')

app.set('view engine', 'jade')

app.use(express.bodyParser())
app.use(express.static(path.join(__dirname, 'bower_components')))

app.listen(port)

console.log('full life started on port:' + port)

// 首页
app.get('/', function (req, res) {
  res.render('index', {
    title: 'imooc 首页',
    movies: [
      {
        title: 'X1-战警',
        _id: 1,
        poster: 'http://www.imooc.com/static/img/index/logo.png?t=1.1'
      },
      {
        title: 'X-2战警',
        _id: 2,
        poster: 'http://www.imooc.com/static/img/index/logo.png?t=1.1'
      },
      {
        title: 'X3-战警',
        _id: 3,
        poster: 'http://www.imooc.com/static/img/index/logo.png?t=1.1'
      },
      {
        title: 'X-4战警',
        _id: 4,
        poster: 'http://www.imooc.com/static/img/index/logo.png?t=1.1'
      }]
  })
})
// 首页
app.get('/movie/:id', function (req, res) {
  res.render('detail', {
    title: 'imooc 详情页'
  })
})// 首页
app.get('/admin/movie', function (req, res) {
  res.render('admin', {
    title: 'imooc 后台录入页',
    movie: {
      title: '',
      docter: '',
      country: '',
      year: '',
      poster: '',
      flash: '',
      summary: '',
      language: ''
    }
  })
})// 首页
app.get('/admin', function (req, res) {
  res.render('list', {
    title: 'imooc 列表页',
    movies: [
      {
        title: 'X-战警',
        _id: 1,
        docter: '何塞',
        country: '美国',
        year: 2014,
        language: 'english',
        flash: 'http://player.youku.com/player.php/sid/XNjA1Njc0NTUy/v.swf'
      }
    ]
  })
})
