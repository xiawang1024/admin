<template>
  <div class="component-form-container">
    <el-form :model="temForm">
      <el-form-item label="组件名称">
        <el-input v-model="temForm.name"></el-input>
      </el-form-item>
      <el-form-item label="所属栏目">
        <el-cascader
          :options="options"
          v-model="temForm.belongProgram"
          @change="selectProgram"
          change-on-select
          placeholder="请选择所属栏目"
        ></el-cascader>
      </el-form-item>
      <el-form-item label="描述">
        <el-input type="textarea" :rows="2" v-model="temForm.desc"></el-input>
      </el-form-item>

      <el-row :gutter="10">
        <el-col :xs="24" :sm="12" :md="16" :lg="16" :xl="16">
          <el-form-item label="组件内容">
            <el-input type="textarea" :rows="15" class="content-textara" v-model="temForm.desc"></el-input>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
          <el-form-item label="组件列表">
            <el-card class="component-card">
              <div class="component-box" v-for="component in componentList" :key="component.id">
                <span class="component-lable">{{component.lable}}</span>
                <el-button type="text" style="float:right">使用</el-button>
                <div class="component-desc">{{component.desc}}</div>
              </div>
            </el-card>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="dialogVisible = false">取 消</el-button>
      <el-button type="primary" @click="handleAdd()">保 存</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ConponentForm",
  data() {
    return {
      options: [],
      typeList: [
        {
          id: 1,
          name: "列表组件"
        },
        {
          id: 2,
          name: "公共组件"
        },
        {
          id: 3,
          name: "正文组件"
        }
      ],
      platList: [
        {
          id: 1,
          name: "电脑页面"
        },
        {
          id: 2,
          name: "JSON数据"
        },
        {
          id: 3,
          name: "XML数据"
        }
      ],
      chooseComponent: "",
      componentList: [
        {
          id: 1,
          lable: "加载更多",
          desc: "加载更多",
          value: ""
        },
        {
          id: 2,
          lable: "改版正文页顶部导航2",
          desc: "改版正文页顶部导航2",
          value: ""
        },
        {
          id: 3,
          lable: "加载更多",
          desc: "加载更多",
          value: ""
        },
        {
          id: 4,
          lable: "改版正文页顶部导航2",
          desc: "改版正文页顶部导航2",
          value: ""
        },
        {
          id: 5,
          lable: "加载更多",
          desc: "加载更多",
          value: ""
        },
        {
          id: 6,
          lable: "改版正文页顶部导航2",
          desc: "改版正文页顶部导航2",
          value: ""
        },
        {
          id: 7,
          lable: "加载更多",
          desc: "加载更多",
          value: ""
        },
        {
          id: 8,
          lable: "改版正文页顶部导航2",
          desc: "改版正文页顶部导航2",
          value: ""
        },
        {
          id: 9,
          lable: "加载更多",
          desc: "加载更多",
          value: ""
        },
        {
          id: 10,
          lable: "改版正文页顶部导航2",
          desc: "改版正文页顶部导航2",
          value: ""
        }
      ],
      temForm: {
        id: "",
        name: "",
        type: "",
        belongProgram: [],
        fitPlat: "",
        isEffective: true,
        desc: "",
        fileName: "",
        temContent: ""
      }
    };
  },
  methods: {
    selectProgram() {
      console.log(this.temForm.belongProgram);
    },
    search() {
      console.log("搜索" + this.selectWebSite + "---" + this.searchTem);
    },
    beforeAdd() {
      this.dialogTitle = "添加组件";
      this.dialogVisible = true;
    },
    handleAdd() {
      console.log("添加");
    },
    beforeAlter(index, row) {
      this.temForm.id = row.id;
      this.temForm.name = row.name;
      this.temForm.type = row.type;
      this.temForm.belongProgram = row.belongProgram;
      this.temForm.fitPlat = row.fitPlat;
      this.temForm.desc = row.desc;
      this.temForm.createTime = row.createTime;
      this.dialogTitle = "修改组件";
      this.dialogVisible = true;
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
.el-button + .el-button {
  margin-top: 5px;
  margin-left: 0px;
}

.component-form-container {
  margin: 30px;
}

.tool-bar {
  text-align: right;
}

.tool-bar .el-col {
  margin-left: 10px;
  margin-bottom: 10px;
}

.component-card {
  width: 100%;
  height: 320px;
  overflow-y: scroll;
}

.component-box {
  margin-bottom: 5px;
  padding: 5px 10px;
  border-radius: 4px;
  box-shadow: 0px 1px 3px 0 hsla(0, 0%, 0%, 0.2);
}

.component-lable {
  font-size: 110%;
  font-weight: 700;
}

.component-desc {
  color: hsl(0, 0%, 45%);
}
</style>
