<style scoped>
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }
    .layout-breadcrumb{
        padding: 10px 15px 0;
    }
    .layout-content{
        min-height: 200px;
        margin: 15px;
        overflow: hidden;
        background: #fff;
        border-radius: 4px;
    }
    .layout-content-main{
        padding: 10px;
    }
    .layout-copy{
        text-align: center;
        padding: 10px 0 20px;
        color: #9ea7b4;
    }
    .layout-menu-left{
        background: #464c5b;
    }
    .layout-header{
        height: 60px;
        background: #fff;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
    }
    .layout-logo-left{
        width: 90%;
        height: 30px;
        text-align: center;
        line-height: 30px;
        color: #fff;
        background: #5b6270 no-repeat fixed;
        border-radius: 3px;
        margin: 15px auto;
    }
    .layout-ceiling-main a{
        color: #9ba7b5;
    }
    .layout-hide-text .layout-text{
        display: none;
    }
    .ivu-col{
        transition: width .2s ease-in-out;
    }
    .ivu-row-flex{
      height: 1024px;
    }
</style>
<template>
    <div id="app" class="layout" :class="{'layout-hide-text': spanLeft < 5}">
        <Row type="flex">
            <i-col :span="spanLeft" class="layout-menu-left">
                <Menu active-name="setActive" theme="dark" width="auto" @on-select="routeTo">
                    <div class="layout-logo-left">logo</div>
                    <Menu-item name="memories">
                        <Icon type="paper-airplane" :size="iconSize"></Icon>
                        <span class="layout-text"><a>那些事儿</a></span>
                    </Menu-item>
                    <Menu-item name="article">
                      <Icon type="ios-keypad" :size="iconSize"></Icon>
                      <span class="layout-text"><a>文章</a></span>
                    </Menu-item>
                    <Menu-item name="basetool">
                        <Icon type="ios-analytics" :size="iconSize"></Icon>
                        <span class="layout-text">工具</span>
                    </Menu-item>
                    <Menu-item name="story">
                      <Icon type="ios-analytics" :size="iconSize"></Icon>
                      <span class="layout-text"><a>故事</a></span>
                    </Menu-item>
                    <Menu-item name="blog">
                      <Icon type="edit" :size="iconSize"></Icon>
                      <span class="layout-text"><a>博客</a></span>
                    </Menu-item>
                    <Menu-item name="label">
                      <Icon type="edit" :size="iconSize"></Icon>
                      <span class="layout-text"><a>标签</a></span>
                    </Menu-item>
                </Menu>
            </i-col>
            <i-col :span="spanRight">
                <div class="layout-header">
                    <i-button type="text" @click="toggleClick">
                        <Icon type="navicon" size="32"></Icon>
                    </i-button>
                    <schedule :expectDate="memories"></schedule>
                </div>
                <div class="layout-content">
                    <div class="layout-content-main">
                      <router-view></router-view>
                    </div>
                </div>
                <div class="layout-copy">
                    2017-2018 &copy; Mathew Li
                </div>
            </i-col>
        </Row>
    </div>
</template>
<script>
import schedule from './components/schedule/schedule'
export default {
  data () {
    return {
      spanLeft: 5,
      spanRight: 19,
      memories: 'memories'
    }
  },
  computed: {
    iconSize () {
      return this.spanLeft === 5 ? 25 : 34
    }
  },
  created () {
  },
  methods: {
    toggleClick () {
      if (this.spanLeft === 5) {
        this.spanLeft = 2
        this.spanRight = 22
      } else {
        this.spanLeft = 5
        this.spanRight = 19
      }
    },
    routeTo (e) {
      this.$router.push(e)
    }
  },
  components: {
    schedule
  }
}
</script>

