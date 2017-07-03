<template>
<div class="blog">
  <Form :model="blog" :label-width="80">
    <Form-item label="标题:">
      <Input v-model="blog.title" placeholder="请输入" style="width: 300px"></Input>
    </Form-item>
    <Form-item label="自创?">
      <Radio-group v-model="blog.isMyCreated">
        <Radio label="yes">是</Radio>
        <Radio label="no">否</Radio>
      </Radio-group>
    </Form-item>
    <Form-item label="作者:" v-show="blog.isMyCreated === 'no'">
      <Input v-model="blog.author" placeholder="请输入" style="width: 300px"></Input>
    </Form-item>
    <Form-item label="日期:">
      <Date-picker type="datetime" v-model="blog.date" placeholder="请输入" style="width: 300px"></Date-picker>
    </Form-item>
    <Form-item label="标签:">
      <OnlyLabel @new-labels="changeLabels"></OnlyLabel>
    </Form-item>
    <Form-item label="内容:">
      <MakeDownEditor :value="blog.content" @on-value-change="onValueChange"></MakeDownEditor>
    </Form-item>
    <Form-item>
      <Button type="primary" @click="saveBlog">提交</Button>
      <Button type="ghost" style="margin-left: 8px" @click="showModal">取消</Button>
      <Modal
        title="我是一个确认框"
        v-model="modalCancle"
        :styles="{top: '20px'}"
        @on-ok="comfirmCancle">
        <p>确定删除？</p>
      </Modal>
    </Form-item>
  </Form>
</div>
</template>

<script>
import MakeDownEditor from '../basetool/markdown-editor-2'
import OnlyLabel from '../label/only-label'
export default {
  data: function () {
    return {
      blog: {
        title: '',
        author: '',
        isMyCreated: 'yes',
        date: '',
        labels: [],
        content: ''
      },
      modalCancle: false,
      temLabels: []
    }
  },
  created () {
  },
  methods: {
    changeLabels (value) {
      this.blog.labels = value
    },
    saveBlog () {
      let params = {
        blog: this.blog
      }
      this.$http.post('/api/blog/saveBlog', params).then(function () {
        this.$router.replace('/')
      })
    },
    onValueChange (val) {
      this.blog.content = val
    },
    showModal () {
      this.modalCancle = true
    },
    comfirmCancle () {
      this.blog = {
        title: '',
        author: '',
        isMyCreated: 'yes',
        date: '',
        labels: [],
        content: ''
      }
      this.blog.content = ''
    }
  },
  watch: {
  },
  components: {
    MakeDownEditor, OnlyLabel
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
