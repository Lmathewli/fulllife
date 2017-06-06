// TODO 还没想好怎么优化
var schedule = require('node-schedule')

function scheduleCronstyle () {
  schedule.scheduleJob('0-10 * * * * *', function () {
    console.log('scheduleCronstyle:' + new Date())
  })
}

scheduleCronstyle()
