var http = require('http')

var request = require('request')

http
  .createServer(function (req, res) {
    request('http://www.imooc.com/static/img/common/logo.png?t=2.3').pipe(res)
  })
  .listen(8090)
