<template>
  <div>
    <Tag closable color="green" v-for="(label, index) in labels" :key="label._id" @on-close="removeLabel(index)">{{label.value}}</Tag>
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
    removeLabel (index) {
      this.labels.splice(index)
    },
    saveLabel () {
      if (this.newLabel === '') {
        return
      }
      this.labels.push(this.newLabel)
      this.newLabel = {
        value: ''
      }
    }
  },
  created () {
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
