<template>
  <div>
    <el-input
      v-model="filterText"
      placeholder="搜索栏目"
      prefix-icon="el-icon-search"
      size="mini"
      clearable
    />
    <el-tree
      ref="websitTree"
      :data="treeData"
      :props="defaultProps"
      :highlight-current="true"
      :check-on-click-node="true"
      :filter-node-method="filterNode"
      @node-click="handleNodeClick"
      @node-contextmenu="handleNodeContextmenu"
    />
    <context-menu
      :visible="menuVisible"
      :left="menuLeft"
      :top="menuTop"
    />
  </div>
</template>

<script>
import ContextMenu from '@/components/cms/ContextMenu/index.vue'

import TreeData from './mockData.js'
export default {
  name: 'WebTree',
  components: {
    ContextMenu
  },
  data() {
    return {
      filterText: '',
      webSitTags: [],
      menuVisible: false,
      menuLeft: '0px',
      menuTop: '0px',
      treeData: TreeData,
      objectID: null,
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  watch: {
    filterText(val) {
      this.$refs.websitTree.filter(val)
    }
  },
  methods: {
    // TODO:左键点击
    handleNodeClick(object, node, element) {
      console.log(object, node, element)
      this.menuVisible = false
      this.webSitTags = []

      this.generateTags(node, 'left')
    },
    // TODO:右键点击
    handleNodeContextmenu(event, object, node, element) {
      const { clientWidth, clientHeight, nodeName } = event.target
      if (nodeName.toLowerCase() === 'span') {
        if (this.objectID !== object.id) {
          this.objectID = object.id
          this.menuVisible = true
          this.generateTags(node, 'right')
        } else {
          this.menuVisible = !this.menuVisible
        }
        document.addEventListener('click', e => {
          this.menuVisible = false
        })
        this.menuLeft = `${event.clientX + clientWidth / 2}px`
        this.menuTop = `${event.clientY + clientHeight}px`
      } else {
        return false
      }
    },
    filterNode(value, data) {
      if (!value) return true
      return data.label.indexOf(value) !== -1
    },
    /**
     * 生成treeTag
     */
    generateTags(node, direct) {
      this.direct = direct
      this.webSitTags = []
      this.findParentNode(node)
    },
    findParentNode(node) {
      if (node.parent) {
        this.findParentNode(node.parent)
        const nodeVal = {}
        nodeVal.id = node.data.id
        nodeVal.label = node.data.label
        this.webSitTags.push(nodeVal)
      } else {
        const webSiteTags = this.webSitTags
        /**
         * 操作清空
         */

        const direct = this.direct
        if (direct === 'left') {
          this.$store.dispatch('setContextMenu', {
            id: '0',
            label: ''
          })
        } else {
          this.$store.dispatch('setContextMenu', {})
        }
        /**
         * tree 路径
         */
        this.$store.dispatch('setTreeTags', webSiteTags)
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.el-menu-item {
  height: 36px;
  line-height: 36px;
}
</style>

