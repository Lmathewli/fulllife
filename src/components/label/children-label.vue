<template>
  <div>
    <Tag closable color="green" v-for="(label, index) in labels" :key="label._id" @on-close="removeLabel(label, index)">{{label.value}}</Tag>
    <Tag style="border: none;backgroud-color: #fff"><Input type="text" style="float:left;" v-model="newLabel.value" placeholder="添加" @on-enter="saveLabel">
    </Input>
    </Tag>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      labels: [],
      newLabel: {
        value: ''
      }
    }
  },
  methods: {
    removeLabel (label, index) {
      let params = {
        _id: label._id
      }
      this.$http.post('/api/label/deleteOne', params).then((res) => {
        this.labels.splice(index)
      })
    },
    saveLabel () {
      if (this.newLabel === '') {
        return
      }
      let params = {
        label: this.newLabel
      }
      this.$http.post('/api/label/saveLabel', params).then((res) => {
        this.$http.get('/api/label/getLabels').then(function (res) {
          this.labels = res.body
          this.newLabel = {
            value: ''
          }
        })
      })
    }
  },
  created () {
    this.$http.get('/api/label/getLabels').then(function (res) {
      this.labels = res.body
    })
  },
  watch: {
    labels: function (values) {
      this.$emit('new-labels', values)
    }
  }

}
</script>

<style scoped>

</style>
