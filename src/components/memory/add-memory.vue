<template>
  <div class="memory">
    <Form ref="memory" :model="memory" :label-width="80" :rules="ruleValidate" label-position="right">
      <Form-item label="主题：">
        <Input v-model="memory.subject" placeholder="subject" style="width: 300px;"></Input>
      </Form-item>
      <Form-item label="发生时间：">
        <Row>
          <Col span="5">
            <Form-item prop="date">
                <Date-picker type="date" format="yyyy/MM/dd" placeholder="date" v-model="memory.happenDate" style="width: 300px;"></Date-picker>
            </Form-item>
          </Col>
          <Col span="2" style="text-align: center">-</Col>
          <Col span="5">
            <Form-item prop="time">
                <Time-picker type="time" format="HH:mm:ss" placeholder="time" v-model="memory.happenTime" style="width: 300px;"></Time-picker>
            </Form-item>
          </Col>
        </Row>
      </Form-item>
      <Form-item label="提醒时间：">
        <Row>
          <Col span="5">
            <Form-item prop="date">
                <Date-picker type="date" format="yyyy/MM/dd" placeholder="date" v-model="memory.expectDate" style="width: 300px;"></Date-picker>
            </Form-item>
          </Col>
          <Col span="2" style="text-align: center">-</Col>
          <Col span="5">
            <Form-item prop="time">
                <Time-picker type="time" format="HH:mm:ss" placeholder="time" v-model="memory.expectTime" style="width: 300px;"></Time-picker>
            </Form-item>
          </Col>
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
export default {
  data () {
    return {
      memory: {
        subject: '',
        happenDate: '',
        happenTime: '',
        expectDate: '',
        expectTime: '',
        address: '',
        character: '',
        descreption: ''
      },
      ruleValidate: {
      }
    }
  },
  components: {
    Editor
  },
  methods: {
    saveMemory () {
      this.memory.descreption = this.$store.state.editorContent
      let params = {
        memory: this.memory
      }
      this.$http.post('/api/memory/save', params).then(function () {
        this.$router.replace('/Memory')
      })
    },
    handleSubmit () {
    },
    handleCancel () {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
  .ivu-input-wrapper
    display: block
</style>
