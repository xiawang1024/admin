<template>
  <div>
    <el-tree
      :data="treeData"
      :props="defaultProps"
      @node-click="handleNodeClick"
      @node-contextmenu="handleNodeContextmenu"
    />
    <!-- <div v-show="menuVisible">
      <el-menu
        id="rightClickMenu"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-menu-item
          index="1"
          class="menuItem"
        >
          <span slot="title">添加分类</span>
        </el-menu-item>
        <el-menu-item
          index="2"
          class="menuItem"
        >
          <span slot="title">修改分类</span>
        </el-menu-item>
        <el-menu-item
          index="3"
          class="menuItem"
        >
          <span slot="title">删除分类</span>
        </el-menu-item>
        <hr style="color: #ffffff">
        <el-menu-item
          index="4"
          class="menuItem"
        >
          <span slot="title">添加标签</span>
        </el-menu-item>
      </el-menu>
    </div> -->
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
  name: 'Tree',
  components: {
    ContextMenu
  },
  data() {
    return {
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
  methods: {
    handleNodeClick(one, two, three) {
      console.log(one, two, three)
    },
    handleNodeContextmenu(event, object, value, element) {
      const { clientWidth, clientHeight, nodeName } = event.target
      if (nodeName.toLowerCase() === 'span') {
        if (this.objectID !== object.id) {
          this.objectID = object.id
          this.menuVisible = true
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

