<template>
<div class="memory">
  <Form ref="memory" :model="memory" :label-width="80" :rules="ruleValidate" label-position="right">
    <Form-item label="主题：">
      <Input v-model="memory.subject" placeholder="subject" style="width: 300px;"></Input>
    </Form-item>
    <Form-item label="发生时间：">
      <Row>
        <Date-picker type="datetime" v-model="memory.happenDate" placeholder="Date" style="width: 300px"></Date-picker>
      </Row>
    </Form-item>
    <Form-item label="提醒时间：">
      <Row>
        <Date-picker type="datetime" v-model="memory.expectDate" placeholder="Date" style="width: 300px"></Date-picker>
      </Row>
    </Form-item>
    <Form-item label="地址：">
      <Input v-model="memory.address" placeholder="address" style="width: 300px;"></Input>
    </Form-item>
    <!--最好是一个select： 爷爷，奶奶，爸爸，妈妈，儿女，男女友。-->
    <Form-item label="人物：">
      <Input v-model="memory.character" placeholder="character" style="width: 300px;"></Input>
    </Form-item>
    <Form-item label="描述:">
      <div class="editor">
        <editor :editorContent="memory.descreption">
        </editor>
      </div>
    </Form-item>
    <Form-item>
      <Button type="primary" @click="saveMemory">提交</Button>
      <Button type="ghost" @click="handleCancel" style="margin-left: 10px">重置</Button>
    </Form-item>
  </Form>
</div>
</template>

<script>
import Editor from '../editor/editor'
import {
  formatDate
} from '../../common/js/date.js'
export default {
  data () {
    return {
      memory: {
        subject: '',
        happenDate: '',
        expectDate: '',
        address: '',
        character: '',
        descreption: ''
      },
      ruleValidate: {},
      urlId: ''
    }
  },
  props: ['memoryProp'],
  components: {
    Editor
  },
  methods: {
    saveMemory () {
      this.memory.descreption = this.$store.state.editorContent
      this.memory.happenDate = formatDate(this.memory.happenDate, 'yyyy/MM/dd hh:mm:ss')
      this.memory.expectDate = formatDate(this.memory.expectDate, 'yyyy/MM/dd hh:mm:ss')
      let params = {
        memory: this.memory
      }
      this.$http.post('/api/memory/save', params).then(function () {
        this.$router.replace('/Memories')
      })
    },
    handleCancel () {
      this.memory = {}
    }
  },
  created () {
    this.urlId = this.$route.query.id
    if (this.urlId) {
      this.$http.post('/api/memory/findone', {
        'id': this.urlId
      }).then(function (res) {
        this.$set(this, 'memory', res.body)
        this.memory = res.body
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
  .ivu-input-wrapper
    display: block
</style>
