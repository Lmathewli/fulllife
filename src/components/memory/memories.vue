<template>
  <div class='memory'>
    <div class="layout-breadcrumb">
      <Breadcrumb>
          <Breadcrumb-item href="/">主页</Breadcrumb-item>
      </Breadcrumb>
    </div>
    <router-link tag="span" class="layout-text" to="/editmemory">
      <a>来一个事情呗</a>
    </router-link>
    <Table border :columns='columns5' :data='memories'></Table>
  </div>
</template>

<script>
import {formatDate} from '../../common/js/date.js'
export default {
  data () {
    return {
      columns5: [
        {
          title: '主题',
          key: 'subject',
          sortable: true
        },
        {
          title: '发生日期',
          type: Date,
          key: 'happenDate',
          sortable: true
        },
        {
          title: '提醒日期',
          type: Date,
          key: 'expectDate',
          sortable: true
        },
        {
          title: '地址',
          key: 'address'
        },
        {
          title: '人物',
          key: 'character'
        },
        {
          title: '描述',
          key: 'descreption'
        },
        {
          title: '操作',
          key: 'action',
          width: 150,
          align: 'center',
          render: (h, params) => {
            return h('div', [
              h('Button', {
                props: {
                  type: 'primary',
                  size: 'small'
                },
                style: {
                  marginRight: '5px'
                },
                on: {
                  click: () => {
                    this.details(params.row._id)
                  }
                }
              }, '查看'),
              h('Button', {
                props: {
                  type: 'error',
                  size: 'small'
                },
                on: {
                  click: () => {
                    this.remove(params.row._id)
                  }
                }
              }, '删除')
            ])
          }
        }
      ],
      memories: []
    }
  },
  components: {
  },
  beforeCreate () {
    this.$http.get('/api/memory/find').then(function (res) {
      this.$set(this, 'memories', res.body)
      this.memories = res.body

      for (var index = 0; index < this.memories.length; index++) {
        this.memories[index].happenDate = formatDate(this.memories[index].happenDate, 'yyyy/MM/dd hh:mm:ss')
        this.memories[index].expectDate = formatDate(this.memories[index].expectDate, 'yyyy/MM/dd hh:mm:ss')
      }
    })
  },
  methods: {
    details (id) {
      this.$router.replace('/Memory?id=' + id)
    },
    remove (id) {
      this.$http.post('/api/memory/removeone', {id: id}).then(function (res) {
        this.$set(this, 'memories', res.body)
        this.memories = res.body

        for (var index = 0; index < this.memories.length; index++) {
          this.memories[index].happenDate = formatDate(this.memories[index].happenDate, 'yyyy/MM/dd hh:mm:ss')
          this.memories[index].expectDate = formatDate(this.memories[index].expectDate, 'yyyy/MM/dd hh:mm:ss')
        }
      })
    }
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style lang='stylus' rel='stylesheet/stylus'>
</style>
