<template>
  <div class="schedule">
  </div>
</template>

<script>
import NodeSchedule from 'node-schedule'
export default {
  data () {
    return {
      expect: '',
      memories: []
    }
  },
  props: ['expectDate'],
  created () {
    var that = this
    NodeSchedule.scheduleJob('30 50 * * * *', function () {
      that.$http.get('/api/memory/find').then(function (res) {
        that.$set(that, 'memories', res.body)
        that.memories = res.body

        that.memories.forEach(function (memory) {
          var now = new Date().getTime()
          that.expect = Date.parse(memory.expectDate)
          var offset = that.expect - now
          if (offset > 0 && offset < 24 * 60 * 60 * 1000) {
            that.$Notice.open({
              title: '提示消息',
              desc: 'hi, boy'
            })
          }
        }, this)
      })
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
  .schedule
    float: right
    margin-top: 20px
</style>
