<template>
  <div>
    <Form ref="labels" :label-width="80">
      <Form-item v-for="(label, index) in labels" style="width:1000px" :key="label" :label="'标签' + (index + 1)">
        <Row>
          <Col span="18">
            <Input type="text" v-if="label.isEdit" v-model="label.value" placeholder="请输入..."></Input>
            <Tag closable v-else color="blue" @on-close="closeTag(label._id, index)">{{label.value}}</Tag>
          </Col>
          <Col span="4" offset="1">
            <Button type="ghost" @click="saveOne(index)">保存</Button>
            <Button type="ghost" @click="closeTag(label._id, index)">删除</Button>
          </Col>
        </Row>
      </Form-item>
      <Form-item>
        <Row>
          <Col span="12">
            <Button type="dashed" long @click="handleAdd" icon="plus-round">新增</Button>
          </Col>
        </Row>
      </Form-item>
    </Form>
    <ChildrenLabel @on-value-change="onValueChange"></ChildrenLabel>
  </div>
</template>
<script>
  import ChildrenLabel from './children-label.vue'
  export default {
    data () {
      return {
        labels: []
      }
    },
    created () {
      this.$http.get('/api/label/getLabels').then(function (res) {
        this.labels = res.body
      })
    },
    methods: {
      onValueChange (val) {
        this.labels = val
      },
      saveOne (index) {
        let params = {
          'label': this.labels[index]
        }
        this.$http.post('/api/label/saveLabel', params).then((res) => {
          this.labels[index].isEdit = false
        })
      },
      handleReset (name) {
        this.$refs[name].resetFields()
      },
      handleAdd () {
        this.labels.push({
          isEdit: true,
          value: ''
        })
      },
      closeTag (_id, index) {
        let params = {
          _id: _id
        }
        if (_id) {
          this.$http.post('/api/label/deleteOne', params).then((res) => {
            this.labels.splice(index, 1)
          })
        } else {
          this.labels.splice(index, 1)
        }
      }
    },
    components: {
      ChildrenLabel
    }
  }
</script>
