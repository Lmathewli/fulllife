<template>
  <div id="app">
    <div class="header">
      <ul class="menu">
        <router-link tag="li" to="/">
          <a>文章</a>
        </router-link>
      </ul>
      <div class="add-article">
        <router-link tag="li" to="/addarticle">
          <a>增加文章（假装它是一个图标）</a>
        </router-link>
      </div>
    </div>
    <div class="content"></div>
    <div class="footer"></div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
#app
  height: 1024px
  margin: 0 auto
  text-align: center
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  color: #2c3e50
  background: url('http://meiriyiwen.com/images/new_feed/bg_48.jpg') no-repeat fixed center;
  background-size: 100%
  .header
    height: 20px
    padding: 15px
    opacity: 0.6
    background-color: #fff
    .menu
      li
        float: left
    .add-article
      float: right
</style>
