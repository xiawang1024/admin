<template>
  <div class="platform-container">
    <div class="tool-bar">
      <el-button type="primary" @click="addDocSourceDialogVisible = true">新增</el-button>
    </div>
    <el-table :data="siteList" style="width: 100%">
      <el-table-column prop="plat" label="来源名称"></el-table-column>
      <el-table-column prop="desc" label="来源路径"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button type="prime" @click="beforeAlter(scope.$index, scope.row)">修改</el-button>
          <el-button type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog title="添加文稿来源" :visible.sync="addDocSourceDialogVisible">
      <el-form :model="docSourceForm">
        <el-form-item label="来源名称">
          <el-input v-model="docSourceForm.name"></el-input>
        </el-form-item>
        <el-form-item label="来源路径">
          <el-input v-model="docSourceForm.location"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="addDocSourceDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="handleAdd()">确 定</el-button>
      </div>
    </el-dialog>

    <el-dialog title="修改文稿来源" :visible.sync="alterDocSourceDialogVisible">
      <el-form :model="docSourceForm">
        <el-form-item label="来源名称">
          <el-input v-model="docSourceForm.name"></el-input>
        </el-form-item>
        <el-form-item label="来源路径">
          <el-input v-model="docSourceForm.location"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="alterDocSourceDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="handleAlter()">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "DocSource",
  data() {
    return {
      siteList: [
        {
          id: "1",
          plat: "网站名称",
          desc: "site.name",
          fileName: ""
        },
        {
          id: "2",
          plat: "生产服务器",
          desc: "factory.domain",
          fileName: ""
        },
        {
          id: "3",
          plat: "发布根目录",
          desc: "publish.root",
          fileName: ""
        },
        {
          id: "4",
          plat: "发布域名",
          desc: "site.domain",
          fileName: ""
        }
      ],
      addDocSourceDialogVisible: false,
      alterDocSourceDialogVisible: false,
      docSourceForm: {
        id: "",
        plat: "",
        desc: "",
        fileName: ""
      }
    };
  },
  methods: {
    handleAdd() {
      console.log("新增");
    },
    beforeAlter(index, row) {
      this.docSourceForm.id = row.id;
      this.docSourceForm.plat = row.plat;
      this.docSourceForm.desc = row.desc;
      this.alterDocSourceDialogVisible = true;
    },
    handleAlter() {
      console.log("修改");
    },
    handleDelete(index, row) {
      console.log("删除" + row.plat);
    }
  }
};
</script>

<style scoped>
.platform-container {
  margin: 30px;
}

.tool-bar {
  text-align: right;
}
</style>
