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
              <el-dropdown class="agent-dropdown" style="padding: 11px 20px !important;">
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
      <el-tabs type="border-card" v-model="activeTabName" class="agent-report-tabs">
        <!-- <el-tab-pane name='all' style="padding: none;">
          <span slot="label">全部</span>
          <el-table
            ref="multipleTable"
            :data="tableData"
            tooltip-effect="dark"
            style="width: 100%">
            <el-table-column
              type="selection"
              header-align="center">
            </el-table-column>
            <el-table-column
              prop="name"
              label="客户名称"
              header-align="center">
            </el-table-column>
            <el-table-column label="完成情况 (2020)"
                header-align="center">
              <el-table-column
                prop="province"
                label="1月"
                header-align="center">
              </el-table-column>
              <el-table-column
                prop="city"
                label="2月"
                header-align="center">
              </el-table-column>
              <el-table-column
                prop="address"
                label="3月"
                header-align="center">
              </el-table-column>
              <el-table-column
                prop="address"
                label="4月"
                header-align="center">
              </el-table-column>
              <el-table-column
                prop="address"
                label="5月"
                header-align="center">
              </el-table-column>
              <el-table-column
                prop="address"
                label="6月"
                header-align="center">
              </el-table-column>
              <el-table-column
                prop="address"
                label="7月"
                header-align="center">
              </el-table-column>
              <el-table-column
                prop="address"
                label="8月"
                header-align="center">
              </el-table-column>
              <el-table-column
                prop="address"
                label="9月"
                header-align="center">
              </el-table-column>
              <el-table-column
                prop="address"
                label="10月"
                header-align="center">
              </el-table-column>
              <el-table-column
                prop="address"
                label="11月"
                header-align="center">
              </el-table-column>
              <el-table-column
                prop="address"
                label="12月"
                header-align="center">
              </el-table-column>
            </el-table-column>
            <el-table-column
              prop="age"
              label="财税顾问"
              header-align="center"
              show-overflow-tooltip>
            </el-table-column>
            <el-table-column
              prop="accountGrade"
              label="部门"
              header-align="center"
              show-overflow-tooltip>
            </el-table-column>
            <el-table-column
              prop="SalesRepresentative"
              label="月服务费"
              header-align="center"
              show-overflow-tooltip>
            </el-table-column>
            <el-table-column
              prop="OrderTotal"
              label="状态"
              header-align="center"
              show-overflow-tooltip>
            </el-table-column>
            <el-table-column
              prop="operating"
              label="操作"
              header-align="center"
              show-overflow-tooltip>
            </el-table-column>
          </el-table>
        </el-tab-pane> -->
        <!-- <el-tab-pane label="我提交的">消息中心</el-tab-pane>
        <el-tab-pane label="部门相关">角色管理</el-tab-pane>
        <el-tab-pane label="业务待审1">定时任务补偿</el-tab-pane>
        <el-tab-pane label="财务待审1">定时任务补偿</el-tab-pane>
        <el-tab-pane label="出纳待审1">定时任务补偿</el-tab-pane> -->
        <el-tab-pane v-for="(tab, index) in agentReportTabs" :key="index" :label="tab.label" :name="tab.name">
          <el-table
            ref="multipleTable"
            :data="tableData"
            tooltip-effect="dark"
            style="width: 100%">
            <el-table-column
              type="selection"
              header-align="center">
            </el-table-column>
            <el-table-column
              prop="name"
              label="客户名称"
              header-align="center">
            </el-table-column>
            <el-table-column label="完成情况 (2020)"
                header-align="center">
              <el-table-column
                prop="province"
                label="1月"
                header-align="center">
              </el-table-column>
              <el-table-column
                prop="city"
                label="2月"
                header-align="center">
              </el-table-column>
              <el-table-column
                prop="address"
                label="3月"
                header-align="center">
              </el-table-column>
              <el-table-column
                prop="address"
                label="4月"
                header-align="center">
              </el-table-column>
              <el-table-column
                prop="address"
                label="5月"
                header-align="center">
              </el-table-column>
              <el-table-column
                prop="address"
                label="6月"
                header-align="center">
              </el-table-column>
              <el-table-column
                prop="address"
                label="7月"
                header-align="center">
              </el-table-column>
              <el-table-column
                prop="address"
                label="8月"
                header-align="center">
              </el-table-column>
              <el-table-column
                prop="address"
                label="9月"
                header-align="center">
              </el-table-column>
              <el-table-column
                prop="address"
                label="10月"
                header-align="center">
              </el-table-column>
              <el-table-column
                prop="address"
                label="11月"
                header-align="center">
              </el-table-column>
              <el-table-column
                prop="address"
                label="12月"
                header-align="center">
              </el-table-column>
            </el-table-column>
            <el-table-column
              prop="age"
              label="财税顾问"
              header-align="center"
              show-overflow-tooltip>
            </el-table-column>
            <el-table-column
              prop="accountGrade"
              label="部门"
              header-align="center"
              show-overflow-tooltip>
            </el-table-column>
            <el-table-column
              prop="SalesRepresentative"
              label="月服务费"
              header-align="center"
              show-overflow-tooltip>
            </el-table-column>
            <el-table-column
              prop="OrderTotal"
              label="状态"
              header-align="center"
              show-overflow-tooltip>
            </el-table-column>
            <el-table-column
              prop="operating"
              label="操作"
              header-align="center"
              show-overflow-tooltip>
            </el-table-column>
          </el-table>
        </el-tab-pane>
      </el-tabs>
      <div style="margin-top: 20px">
        <el-pagination
          background
          layout="total,prev, pager, next"
          :total="1000">
        </el-pagination>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  metaInfo: {
    title: '代帐报表'
  },
  data () {
    return {
      activeTabName: 'all',
      agentReportTabs: [
        {
          label: '全部',
          name: 'all'
        },
        {
          label: '我提交的',
          name: 'mine'
        },
        {
          label: '部门相关',
          name: 'department'
        }
      ],
      agentReportTable: [
        {
          name: 'Tom',
          age: 12
        },
        {
          name: 'James',
          age: 13
        }
      ]
    }
  },
  methods: {
    getTableData (activeTabName) {
      if (activeTabName === 'all') {
        return this.agentReportTable
      } else {
        return this.agentReportTable.filter(user => user.name === 'Tom')
      }
    }
  },
  computed: {

    tableData () {
      return this.getTableData(this.activeTabName)
    }
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

.agent-report-tabs .el-tabs__content {
  padding: none;
}
</style>
