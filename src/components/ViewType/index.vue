<template>
  <el-form
    ref="form"
    label-width="80px"
    class="form-wrap"
  >
    <el-form-item
      label="视图："
      class="form-item"
    >
      <el-select
        v-model="selectedType"
        placeholder="请选择"
      >
        <el-option
          v-for="item in viewType"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      viewType: [
        {
          value: '选项1',
          label: '文档'
        },
        {
          value: '选项2',
          label: '模板'
        },
        {
          value: '选项3',
          label: '图片组'
        },
        {
          value: '选项4',
          label: '自定义列表'
        },
        {
          value: '选项5',
          label: 'HTML片段'
        },
        {
          value: '选项6',
          label: '废件箱'
        }
      ],
      selectedType: '选项1'
    }
  }
}
</script>

<style lang="scss" scoped>
.form-wrap {
  height: 50px;
  .form-item {
    margin-bottom: 0;
    display: inline-block;
  }
}
</style>

