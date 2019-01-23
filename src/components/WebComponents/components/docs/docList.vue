<template>
  <div>
    <el-table
      ref="multipleTable"
      :data="tableData3"
      :default-sort="{prop: 'publishTime', order: 'descending'}"
      tooltip-effect="dark"
      style="width: 100%"
      size="small"
      highlight-current-row="true"
      @selection-change="handleSelectionChange"
    >
      <el-table-column
        type="selection"
        width="55"
      />
      <el-table-column
        prop="id"
        label="ID/序号"
        width="100"
      />
      <el-table-column
        prop="title"
        label="标题"
        min-width="160"
        show-overflow-tooltip
      />
      <el-table-column
        prop=""
        label="查看"
        width="60"
      />
      <el-table-column
        prop="preview"
        label="预览"
        width="60"
      />
      <el-table-column
        prop="docType"
        label="类型"
        width="100"
      />
      <el-table-column
        prop="status"
        label="状态"
        width="100"
      />
      <el-table-column
        prop="mark"
        label="标记"
        width="100"
      />
      <el-table-column
        prop="createTime"
        label="创建时间"
        min-width="120"
        sortable
        show-overflow-tooltip
      />
      <el-table-column
        prop="publishTime"
        label="发布时间"
        min-width="120"
        sortable
        show-overflow-tooltip
      />
      <el-table-column
        prop="editor"
        label="撰稿人"
        width="120"
      />
      <el-table-column
        prop="click"
        label="点击"
        sortable
        width="100"
      />

    </el-table>
    <div style="margin-top: 20px">
      <el-button @click="toggleSelection([tableData3[1], tableData3[2]])">切换第二、第三行的选中状态</el-button>
      <el-button @click="toggleSelection()">取消选择</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData3: [
        {
          id: '1506/1506',
          title: '2019年-2020年度中原福塔户外广告牌招标公告',
          outLink: 'http://www.hndt.com',
          preview: '',
          docType: '图文',
          status: '已发布',
          mark: '标记',
          createTime: '2018-12-13 16:15',
          publishTime: '2018-12-13 16:18',
          editor: '谢飞',
          click: '123'
        },
        {
          id: '1507/1507',
          title: '2019年-2020年度中原福塔户外广告牌招标公告',
          outLink: 'http://www.hndt.com',
          preview: '',
          docType: '图文',
          status: '已发布',
          mark: '标记',
          createTime: '2018-12-14 16:15',
          publishTime: '2018-12-14 16:18',
          editor: '谢飞',
          click: '124'
        }
      ],
      multipleSelection: []
    }
  },

  methods: {
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row)
        })
      } else {
        this.$refs.multipleTable.clearSelection()
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val
    }
  }
}
</script>
