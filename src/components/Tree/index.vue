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
import ContextMenu from '@/components/ContextMenu/index.vue'
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
      treeData: [
        {
          id: 1,
          label: '一级 1',
          children: [
            {
              id: 2,
              label: '二级 1-1',
              children: [
                {
                  id: 3,
                  label: '三级 1-1-1',
                  children: [
                    {
                      label: '四级 1-1-1-1'
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: 4,
          label: '一级 2',
          children: [
            {
              id: 5,
              label: '二级 2-1',
              children: [
                {
                  id: 6,
                  label: '三级 2-1-1'
                }
              ]
            },
            {
              id: 7,
              label: '二级 2-2',
              children: [
                {
                  id: 8,
                  label: '三级 2-2-1'
                }
              ]
            }
          ]
        }
      ],
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
      this.generateTags(node)
    },
    // TODO:右键点击
    handleNodeContextmenu(event, object, node, element) {
      const { clientWidth, clientHeight, nodeName } = event.target
      if (nodeName.toLowerCase() === 'span') {
        if (this.objectID !== object.id) {
          this.objectID = object.id
          this.menuVisible = true
          this.generateTags(node)
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
    generateTags(node) {
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

