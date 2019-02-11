<template>
  <div class="basicContent-wrap">
    <div class="tool-bar">
      <el-button type="warning" @click="handleSave">保存</el-button>
      <el-button type="warning" @click="handleSaveAddRelease">保存并发布</el-button>
    </div>
    <el-row :gutter="10">
      <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
        <el-form ref="docContentForm" :model="docContentForm" label-width="80px">
          <el-form-item label="正文标题">
            <el-input v-model="docContentForm.textTitle"/>
          </el-form-item>
          <el-form-item label="正文标题">
            <el-input v-model="docContentForm.textTitle"/>
          </el-form-item>
        </el-form>
      </el-col>
      <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
        <div class="grid-content bg-purple">右边</div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: 'BasicContent',
  data() {
    return {
      docContentForm: {
        textTitle: '',
        homePageTitle: '',
        docSource: '',
        docWriter: '',
        keyWords: [],
        abstract: '',
        tags: [],
        setTop: false,
        invisible: false
      }
    }
  },
  methods: {
    handleSave() {},
    handleSaveAddRelease() {}
  }
}
</script>
<style lang="scss" scoped>
.basicContent-wrap {
}

.tool-bar {
  text-align: right;
}
</style>

