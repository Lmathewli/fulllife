<template>
  <div class="addarticle">
    <div type="text/plain" id="editor" @keyup="getEditorContent" >
    </div>
  </div>
</template>

<script type="text/javascript">
import WangEditor from 'wangeditor'
export default {
  data () {
    return {
      dataInterface: {
        editorUpImgUrl: 'http://xxxx'  // 编辑器插入的图片上传地址
      },
      editor: ''  // 存放实例化的wangEditor对象，在多个方法中使用
    }
  },
  props: [
    'editorContent'
  ],
  mounted: function () {
    this.$nextTick(function () {
      this.editor = new WangEditor('editor')
      this.editor.create()  // 生成编辑器
    })
  },
  beforeDestroy () {
    this.destroyEditor()
  },
  methods: {
    destroyEditor () {  // 销毁编辑器，官方没有给出完美方案。此方案是作者给出的临时方案
      this.editor.destroy()  // 这个没有完全销毁实例，只是作了隐藏
      // $('#account--editor').remove();  // 不报错的话，这一步可以省略
      this.editor = null
      WangEditor.numberOfLocation--  // 手动清除地图的重复引用，作者的临时解决方案。否则单页面来回切换时，地图报错重复引用
    },
    getEditorContent () {  // 获取编辑器 内容区内容
      this.$store.state.editorContent = this.editor.$txt.html()  // 获取 html 格式
        // this.editor.$txt.text();  // 获取纯文本
        // this.editor.$txt.formatText();  // 获取格式化后的纯文本
      console.log(this.$store.state.editorContent)
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
  #editor, .editor
    width: 80%
    min-height: 330px
    height: auto
    .addarticle
      .wangEditor-container
        margin: 0 auto
</style>
