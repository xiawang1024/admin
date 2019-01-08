<template>
  <div class="components-container">

    <split-pane
      :min-percent="10"
      :max-percent="30"
      :default-percent="15"
      split="vertical"
      @resize="resize"
    >
      <template slot="paneL">
        <div class="left-container">
          <el-scrollbar
            wrap-class="scrollbar-wrapper"
            style="height:100%;"
          >
            <tree/>
          </el-scrollbar>
        </div>
      </template>
      <template slot="paneR">
        <div class="right-container">
          <router-view />
        </div>
      </template>
    </split-pane>

  </div>
</template>

<script>
import splitPane from 'vue-splitpane'
import Tree from '@/components/Tree'

export default {
  name: 'WebSiteWrap',
  components: { splitPane, Tree },
  methods: {
    resize() {
      console.log('resize')
    }
  }
}
</script>

<style lang='scss' scoped>
.components-container {
  position: relative;
  height: calc(100vh - 124px);
  margin: 20px 10px;
}

.left-container {
  /* background-color: #f38181; */
  height: 100%;
  /* overflow: hidden; */
}

.right-container {
  // background-color: #fce38a;
  height: 100%;
}
</style>
