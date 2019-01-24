<template>
  <div class="personRole-container">
    <el-row type="flex" class="tool-bar" justify="end">
      <el-col :span="6">
        <el-select v-model="selectProgram" placeholder="请选择">
          <el-option
            v-for="program in programList"
            :key="program.id"
            :label="program.name"
            :value="program.id"
          ></el-option>
        </el-select>
      </el-col>
      <el-col :span="5">
        <el-input
          placeholder="名称/关键词"
          prefix-icon="el-icon-search"
          clearable
          @change="searchPersonRole"
          v-model="search"
        ></el-input>
      </el-col>
      <el-col :span="4">
        <el-button type="primary" @click="beforeAdd">新增人员</el-button>
      </el-col>
    </el-row>
    <el-table :data="roleList" style="width: 100%">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="栏目和角色:">
              <p
                v-for="(programAndRole,index) in props.row.programAndRoles"
                :key="index"
              >{{ programAndRole.program }} [{{programAndRole.role}}]</p>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column prop="name" label="名称"></el-table-column>
      <el-table-column prop="phone" label="手机号码"></el-table-column>
      <el-table-column prop="status" label="启用">
        <template slot-scope="scope">
          <el-switch v-model="scope.row.status" active-color="#13ce66" @change="change(scope.row)"></el-switch>
        </template>
      </el-table-column>
      <el-table-column prop="online" label="在线">
        <template slot-scope="scope">
          <el-tag type="success" v-if="scope.row.online">在线</el-tag>
          <el-tag type="info" v-else>离线</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="createTime" label="创建时间"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button type="warning" @click="handleDistribute(scope.$index, scope.row)">分配</el-button>
          <el-dropdown trigger="click" style="margin-left:20px;cursor:pointer;">
            <span class="el-dropdown-link">
              更多
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item @click.native="beforeAlter(scope.row)">修改资料</el-dropdown-item>
              <el-dropdown-item @click.native="handleCopy(scope.row)">拷贝并创建</el-dropdown-item>
              <el-dropdown-item @click.native="handleCopyData(scope.row)">复制数据</el-dropdown-item>
              <el-dropdown-item @click.native="handlePasteData(scope.row)">粘贴数据</el-dropdown-item>
              <el-dropdown-item @click.native="handleClear(scope.row)">清空数据</el-dropdown-item>
              <el-dropdown-item @click.native="handleDelete(scope.row)">删除</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog title="新增人员" :visible.sync="addPersonVisible">
      <el-form :model="personForm">
        <el-form-item label="姓名">
          <el-input v-model="personForm.name"></el-input>
        </el-form-item>
        <el-form-item label="手机号码">
          <el-input v-model="personForm.phone"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="personForm.password"></el-input>
        </el-form-item>
        <el-form-item label="确认密码">
          <el-input v-model="personForm.confirm"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="addPersonVisible = false">取 消</el-button>
        <el-button type="primary" @click="handleAdd()">确 定</el-button>
      </div>
    </el-dialog>

    <el-dialog title="修改资料" :visible.sync="alterPersonVisible">
      <el-form :model="personForm">
        <el-form-item label="姓名">
          <el-input v-model="personForm.name"></el-input>
        </el-form-item>
        <el-form-item label="手机号码">
          <el-input v-model="personForm.phone"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="personForm.password"></el-input>
        </el-form-item>
        <el-form-item label="确认密码">
          <el-input v-model="personForm.confirm"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="alterPersonVisible = false">取 消</el-button>
        <el-button type="primary" @click="handleAlter()">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "PersonRole",
  data() {
    return {
      selectProgram:"",
      programList:[],
      search:"",
      roleList: [
        {
          id: 1,
          name: "管理员",
          phone: "13656656565",
          programAndRoles: [
            {
              program: "河南广播网",
              role: "编辑"
            },
            {
              program: "河南广播网",
              role: "编辑"
            },
            {
              program: "河南广播网",
              role: "编辑"
            },
            {
              program: "河南广播网",
              role: "编辑"
            },
            {
              program: "河南广播网",
              role: "编辑"
            },
            {
              program: "河南广播网",
              role: "编辑"
            }
          ],
          status: false,
          online: true,
          createTime: "2018-01-02"
        },
        {
          id: 2,
          name: "主播",
          phone: "13656656565",
          program: "",
          role: "",
          status: true,
          online: false,
          createTime: "2018-01-02"
        }
      ],
      personForm: {
        id: "",
        name: "",
        password: "",
        confirm: ""
      },
      addPersonVisible: false,
      alterPersonVisible: false
    };
  },
  methods: {
    searchPersonRole() {},
    beforeAdd() {
      this.addPersonVisible = true;
    },
    handleAdd() {
      this.addPersonVisible = false;
    },
    change() {},
    handleDistribute(row) {
      this.$router.push({
        path: "/personAndAuthor/personRoleDistribute",
        query: {
          isAdd: false,
          permissionGroupId: row.id
        }
      });
    },
    beforeAlter(row) {
      this.personForm.name = row.name;
      this.personForm.phone = row.phone;
      this.alterPersonVisible = true;
    },
    handleAlter() {
      this.alterPersonVisible = false;
    },
    handleCopy(row) {},
    handleCopyData(row) {},
    handlePasteData(row) {},
    handleClear(row) {},
    handleDelete(row) {}
  }
};
</script>

<style scoped>
.el-button + .el-button {
  margin-top: 5px;
  margin-left: 0px;
}

.personRole-container {
  margin: 30px;
}

.tool-bar {
  text-align: right;
}

.tool-bar .el-col {
  margin-left: 20px;
  margin-bottom: 10px;
}
</style>
