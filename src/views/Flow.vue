<template>
  <div class="flow">
    <div class="flow-header-custom">
        <el-row :gutter="20" class="header-custom">
          <el-col :span="15"><div class="grid-content bg-purple">
            <el-button>
              <img id="u829_img" class="img " src="../assets/images/account/u829.png">
              <span style="padding-left:10px;">导出</span>
            </el-button></div></el-col>
          <el-col :span="2">
            <div class="grid-content bg-purple">
              <el-dropdown class="flow-dropdown">
                <span class="el-dropdown-link" style="color:#606266;">
                  请选择<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>未开始</el-dropdown-item>
                  <el-dropdown-item>服务中</el-dropdown-item>
                  <el-dropdown-item>已完成</el-dropdown-item>
                  <el-dropdown-item>已终止</el-dropdown-item>
                  <el-dropdown-item>全部</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </div>
          </el-col>
          <el-col :span="5">
            <div class="grid-content bg-purple">
              <div>
                <el-input placeholder="请输入内容" class="input-with-select">
                  <el-button slot="append" icon="el-icon-search"></el-button>
                </el-input>
              </div>
            </div>
          </el-col>
          <el-col :span="2" style="padding-right:0px;padding-left: 24px;">
            <div class="grid-content bg-purple">
              <el-button class="new-seetings" @click="handleAdvancedSearch">高级检索</el-button>
              <el-dialog title="高级检索" width="40%" :visible.sync="advancedSearchDialogVisible">
                <el-form label-position="top" label-width="120px">
                  <el-row gutter="20">
                    <el-col :span="12">
                      <el-form-item label="客户名称:">
                        <el-select style="width: 100%;"></el-select>
                      </el-form-item>
                    </el-col>
                    <el-col :span="12">
                      <el-form-item label="客户名称:">
                        <el-input></el-input>
                      </el-form-item>
                    </el-col>
                  </el-row>
                  <el-row gutter="20">
                    <el-col :span="12">
                      <el-form-item label="客户名称:">
                        <el-select style="width: 100%;"></el-select>
                      </el-form-item>
                    </el-col>
                    <el-col :span="12">
                      <el-form-item label="联系人:">
                        <el-input></el-input>
                      </el-form-item>
                    </el-col>
                  </el-row>
                  <el-row gutter="20">
                    <el-col :span="12">
                      <el-form-item label="客户状态:">
                        <el-select style="width: 100%;"></el-select>
                      </el-form-item>
                    </el-col>
                    <el-col :span="12">
                      <el-form-item label="联系电话:">
                        <el-select style="width: 100%;"></el-select>
                      </el-form-item>
                    </el-col>
                  </el-row>
                  <el-row gutter="20">
                    <el-col :span="12">
                      <el-form-item label="销售代表:">
                        <el-input></el-input>
                      </el-form-item>
                    </el-col>
                    <el-col :span="12">
                      <el-form-item label="客户等级:">
                        <el-select style="width: 100%;"></el-select>
                      </el-form-item>
                    </el-col>
                  </el-row>
                  <el-row gutter="20">
                    <el-col :span="12">
                      <el-form-item label="社会信用代码:">
                        <el-input></el-input>
                      </el-form-item>
                    </el-col>
                    <el-col :span="12">
                      <el-form-item label="服务年份:">
                        <el-date-picker style="width: 100%;"
                          type="date"
                          placeholder="选择日期">
                        </el-date-picker>
                      </el-form-item>
                    </el-col>
                  </el-row>
                </el-form>
                <div slot="footer" class="dialog-footer">
                  <el-button>重  置</el-button>
                  <el-button type="primary">开始检索</el-button>
                </div>
              </el-dialog>
            </div>
          </el-col>
        </el-row>
    </div>
    <div class="flow-table-show">
      <el-tabs type="border-card">
        <el-tab-pane>
          <span slot="label">全部</span>
          我的行程
        </el-tab-pane>
        <el-tab-pane label="我负责">消息中心</el-tab-pane>
        <el-tab-pane label="我创建">角色管理</el-tab-pane>
        <el-tab-pane label="部门">定时任务补偿</el-tab-pane>
        <el-tab-pane label="代我接收">定时任务补偿</el-tab-pane>
        <el-tab-pane label="移交代收">定时任务补偿</el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
export default {
  metaInfo: {
    title: '订单列表'
  },
  data () {
    return {
      advancedSearchDialogVisible: false
    }
  },
  methods: {
    handleAdvancedSearch () {
      this.advancedSearchDialogVisible = true
    }
  }
}
</script>

<style scoped>
.flow{
  width: 94%;
  margin: 0 auto;
  margin-top: 40px;
}
.flow-header-custom{
  width: 100%;
}
.flow-dropdown{
  border: 1px solid #DCDFE6;
  padding: 8px 18px !important;
  border-radius: 5px;
}
.flow-table-show{
  margin-top: 20px;
}
</style>
