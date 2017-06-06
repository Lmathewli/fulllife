<template>
  <div class='memory'>
    <router-link tag="span" class="layout-text" to="/addmemory">
      <a>来一个事情呗</a>
    </router-link>
    <Table border :columns='columns5' :data='memories'></Table>
  </div>
</template>

<script>
import {formatDate} from '../../common/js/date.js'
export default {
  data () {
    return {
      columns5: [
        {
          title: '主题',
          key: 'subject',
          sortable: true
        },
        {
          title: '发生日期',
          key: 'happenDate',
          sortable: true,
          filterMethod: function (value, row) {
            var time = new Date(value)
            return formatDate(time, 'yyyy/MM/dd')
          }
        },
        {
          title: '发生时间',
          key: 'happenTime',
          sortable: true,
          formatTime (value, row) {
            var Time = new Date(value)
            return formatDate(Time, 'hh:mm:ss')
          }
        },
        {
          title: '提醒日期',
          key: 'expectDate',
          sortable: true,
          filterMethod: function (value, row) {
            var time = new Date(value)
            return formatDate(time, 'yyyy/MM/dd')
          }
        },
        {
          title: '提醒时间',
          key: 'expectTime',
          sortable: true,
          filterMethod: function (value, row) {
            var Time = new Date(value)
            return formatDate(Time, 'hh:mm:ss')
          }
        },
        {
          title: '地址',
          key: 'address'
        },
        {
          title: '人物',
          key: 'character'
        },
        {
          title: '描述',
          key: 'descreption'
        }
      ],
      memories: []
    }
  },
  components: {
  },
  beforeCreate () {
    this.$http.get('/api/memory/find').then(function (res) {
      console.log(res)
      this.$set(this, 'memories', res.body)
      this.memories = res.body
    })
  },
  methods: {
  },
  filters: {
    formatDate (date) {
      var time = new Date(date)
      return formatDate(time, 'yyyy/MM/dd')
    },
    formatTime (time) {
      var Time = new Date(time)
      return formatDate(Time, 'hh:mm:ss')
    }
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style lang='stylus' rel='stylesheet/stylus'>
</style>
