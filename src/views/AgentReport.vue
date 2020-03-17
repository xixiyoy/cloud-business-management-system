<template>
  <div class="agent-report">
    <div class="agent-header-custom">
        <el-row :gutter="20" class="header-custom">
          <el-col :span="2"><div class="grid-content bg-purple">
            <el-button>
              <img id="u829_img" class="img " src="../assets/images/account/u829.png">
              <span style="padding-left:10px;">导出</span>
            </el-button></div>
          </el-col>
          <el-col :span="15">
            <div class="block">
              <el-date-picker
                v-model="value1"
                type="date"
                placeholder="统计年份">
              </el-date-picker>
            </div>
          </el-col>
          <el-col :span="2">
            <div class="grid-content bg-purple">
              <el-dropdown class="agent-dropdown">
                <span class="el-dropdown-link" style="color:#606266;">
                  请选择<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>全部</el-dropdown-item>
                  <el-dropdown-item>未申请</el-dropdown-item>
                  <el-dropdown-item>待确认</el-dropdown-item>
                  <el-dropdown-item>已确认</el-dropdown-item>
                  <el-dropdown-item>已驳回</el-dropdown-item>
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
        </el-row>
    </div>
    <div class="agent-table-show">
      <el-tabs type="border-card">
        <el-tab-pane>
          <span slot="label">全部</span>
          我的行程
        </el-tab-pane>
        <el-tab-pane label="我提交的">消息中心</el-tab-pane>
        <el-tab-pane label="部门相关">角色管理</el-tab-pane>
        <el-tab-pane label="业务待审1">定时任务补偿</el-tab-pane>
        <el-tab-pane label="财务待审1">定时任务补偿</el-tab-pane>
        <el-tab-pane label="出纳待审1">定时任务补偿</el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
export default {
  metaInfo: {
    title: '代帐报表'
  }
}
</script>

<style scoped>
.agent-report{
  width: 94%;
  margin: 0 auto;
  margin-top: 40px;
}
.agent-header-custom{
  width: 100%;
}
.agent-table-show{
  margin-top: 20px;
}
.agent-dropdown{
  border: 1px solid #DCDFE6;
  padding: 8px 18px !important;
  border-radius: 5px;
}
</style>
