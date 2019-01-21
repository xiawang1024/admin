<template>
  <el-form
    v-show="viewType.isShow"
    ref="form"
    label-width="80px"
    class="form-wrap"
  >
    <el-form-item
      label="视图："
      class="form-item"
    >
      <el-select
        v-model="viewType"
        placeholder="请选择"
      >
        <el-option
          v-for="item in viewTypeList"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </el-form-item>
  </el-form>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      viewTypeList: [
        {
          value: '1',
          label: '文档'
        },
        {
          value: '2',
          label: '模板'
        },
        {
          value: '3',
          label: '图片组'
        },
        {
          value: '4',
          label: '自定义列表'
        },
        {
          value: '5',
          label: 'HTML片段'
        },
        {
          value: '6',
          label: '废件箱'
        }
      ]
    }
  },
  computed: {
    ...mapGetters(['viewType'])
  },
  beforeRouteEnter(to, form, next) {
    console.log(to)
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

