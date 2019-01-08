<template>
  <el-menu
    v-show="visible"
    id="rightClickMenu"
    background-color="#545c64"
    text-color="#fff"
    @select="handleSelect"
  >
    <el-menu-item
      v-for="item of menuList"
      :index="item.id.toString()"
      :key="item.id"
    >
      <span slot="title">{{ item.label }}</span>
    </el-menu-item>

  </el-menu>
</template>

<script>
const MENU_LIST = [
  {
    id: 1,
    label: '添加分类'
  },
  {
    id: 2,
    label: '修改分类'
  },
  {
    id: 3,
    label: '删除分类'
  },
  {
    id: 4,
    label: '自定义文档列表'
  }
]
export default {
  name: 'ContextMenu',
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    left: {
      type: String,
      default: '0px'
    },
    top: {
      type: String,
      default: '0px'
    }
  },
  data() {
    return {
      menuList: MENU_LIST
    }
  },
  watch: {
    left: function() {
      this.refreshPosition()
    },
    top: function() {
      this.refreshPosition()
    }
  },
  mounted() {
    setTimeout(() => {
      this.refreshPosition()
    }, 20)
  },
  methods: {
    refreshPosition() {
      const menu = document.querySelector('#rightClickMenu')
      menu.style.left = this.left
      menu.style.top = this.top
    },
    handleSelect(key, keyPath) {
      console.log('------------------------------------')
      console.log(key, keyPath)
      console.log('------------------------------------')
    }
  }
}
</script>

<style lang="scss" scoped>
#rightClickMenu {
  position: fixed;
  z-index: 100;
  width: 106px;
  border-radius: 4px;
  overflow: hidden;
  .el-menu-item {
    padding: 0 6px !important;
    height: 28px;
    line-height: 28px;
    text-align: left;
    font-size: 12px;
    &.is-active {
      color: #fff;
    }
  }
}
</style>

