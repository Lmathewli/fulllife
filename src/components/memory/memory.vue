<template>
  <div class="memory">
    <div>
      <Icon type="heart"></Icon><label>主题:</label><span v-text="memory.subject"></span>
    </div>
  </div>
</template>

<script>
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
    this.$http.get('/api/memory/findone', {'id': this.urlId}).then(function (res) {
      this.$set(this, 'memory', res.body)
      this.memory = res.body
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
</style>
