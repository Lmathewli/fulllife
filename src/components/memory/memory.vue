<template>
  <div class="memory">
    <Breadcrumb>
        <Breadcrumb-item href="/">主页</Breadcrumb-item>
        <Breadcrumb-item href="/memories">纪念的事情</Breadcrumb-item>
    </Breadcrumb>
    <div>
      <div>
        <Icon type="heart"></Icon><label>主题：</label>
        <span v-text="memory.subject"></span>
      </div>
      <div>
        <Icon type="ios-time-outline"></Icon><label>发生的时间：</label>
        <span>{{memory.happenDate | formateTime}}</span>
      </div>
      <div>
        <Icon type="calendar"></Icon><label>提醒的时间：</label>
        <span>{{memory.expectDate | formateTime}}</span>
      </div>
      <div>
        <Icon type="document-text"></Icon><label>描述：</label>
        <span v-html="memory.descreption"></span>
      </div>
      <Button type="info" @click="router">编辑(Edit)</Button>
    </div>
  </div>
</template>

<script>
import {formatDate} from '../../common/js/date.js'
export default {
  data () {
    return {
      memory: {},
      urlId: ''
    }
  },
  props: ['id'],
  created () {
    this.urlId = this.id
    if (!this.urlId) {
      this.urlId = this.$route.query.id
    }
    this.$http.post('/api/memory/findone', {'id': this.urlId}).then(function (res) {
      this.$set(this, 'memory', res.body)
      this.memory = res.body
    })
  },
  filters: {
    formateTime (time) {
      return formatDate(time, 'yyyy/MM/dd hh:mm:ss')
    }
  },
  methods: {
    router () {
      this.$router.replace('/EditMemory?id=' + this.urlId)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
</style>
