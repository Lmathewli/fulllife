<template>
  <div>
    <a href="/static/generic/web/viewer.HTML?file=/static/generic/web/jvm.pdf#page=5" target="blank">书籍</a>
    <button @click="isshowpdf = true">显示吧</button>
    <pdfView @closepdf="closepdf" v-show="isshowpdf" :pdfurl="pdfurls" :pdferr="pdferr" :maxscale='4' :minscale='0.6' :scale='1.1' ></pdfView>
  </div>
</template>

<script>
import pdfView from '../basetool/pdf'
export default {
  data: function () {
    return {
      pdfurls: '//cdn.mozilla.net/pdfjs/tracemonkey.pdf',
      isshowpdf: false
    }
  },
  methods: {
    closepdf () {
      this.isshowpdf = false
    },
    pdferr (errurl) {
      console.log(errurl)
    }
  },
  created () {
  },
  components: {
    pdfView
  }
}
</script>

<style scoped>

</style>
