<template>
  <div class="dashboard-container">
    <div class="dashboard-text">name: {{ name }}</div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>卡片名称</span>
      </div>
      <div class="text item">
        {{ mmsrSession }}
      </div>
      <el-button @click="searchMMSRSessionByRedis()">测试</el-button>
    </el-card>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { searchMMSRSessionByRedis } from '@/api/my'
export default {
  name: 'Dashboard',
  computed: {
    ...mapGetters([
      'name'
    ])
  },
  created() {
    this.fetchData()
  },
  data: function() {
    return { 'mmsrSession': '' }
  },
  methods: {
    fetchData() {
    },
    searchMMSRSessionByRedis() {
      const param = {
        'sessionId': '4670759350771712'
      }
      searchMMSRSessionByRedis().then( ( response ) =>{
        console.log(response)
      })
      console.log(this.$data.mmsrSession)
      // this.data.mmsrSession = sessionMap.mmsrSession
      // alert(sessionMap)
    }
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
