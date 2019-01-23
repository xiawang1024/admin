<template>
  <div class="doc-head">
    <el-dropdown size="small">
      <el-button
        type="success"
        size="mini"
      >
        选中的文档<i class="el-icon-arrow-down el-icon--right"/>
      </el-button>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item
          v-for="item of currentDoc"
          :key="item.id"
        >{{ item.label }}</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <el-dropdown size="small">
      <el-button
        type="primary"
        size="mini"
      >
        当前栏目<i class="el-icon-arrow-down el-icon--right"/>
      </el-button>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item
          v-for="item of currentColumn"
          :key="item.id"
        >{{ item.label }}</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>
<script>
import { currentDoc, currentColumn } from './mockData.js'
export default {
  name: 'DocHead',
  data() {
    return {
      currentDoc,
      currentColumn
    }
  },
  methods: {
    handleClick() {
      alert('button click')
    }
  }
}
</script>
