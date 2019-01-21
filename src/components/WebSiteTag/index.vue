<template>
  <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item>首页</el-breadcrumb-item>
    <el-breadcrumb-item>活动管理</el-breadcrumb-item>
    <el-breadcrumb-item>活动列表</el-breadcrumb-item>
    <el-breadcrumb-item>活动详情</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'WebSiteTag',
  data() {
    return {}
  },
  computed: {
    ...mapGetters([])
  }
}
</script>
<style lang="scss" scoped>
.el-breadcrumb {
  font-size: 12px;
}
</style>

