<template>
  <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item>网站</el-breadcrumb-item>
    <el-breadcrumb-item
      v-for="item of treeTags"
      :key="item.id"
    >{{ item.label }}</el-breadcrumb-item>
    （{{ contextMenu.label }}）
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
    ...mapGetters(['treeTags', 'contextMenu'])
  }
}
</script>
<style lang="scss" scoped>
.el-breadcrumb {
  font-size: 12px;
}
</style>

