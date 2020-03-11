<template>
  <div class="diaryReport-custom">
    <div class="diaryReport-header-custom">
        <el-row :gutter="20">
          <el-col :span="3">
            <div class="grid-content bg-purple">
              <el-button class="diaryReport-button-custom" type="primary" index="/newDiaryReport">新建收支</el-button>
            </div>
          </el-col>
          <el-col :span="3"><div class="grid-content bg-purple">
            <el-button class="new-seetings">
              <img id="u829_img" class="img " src="../assets/images/account/u829.png">
              <span style="padding-left:10px;">导出</span>
            </el-button></div></el-col>
          <el-col :span="18"><div class="grid-content bg-purple"></div></el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="3">
            <div class="block">
              <el-date-picker
                v-model="value1"
                type="date"
                placeholder="选择日期">
              </el-date-picker>
            </div>
          </el-col>
          <el-col :span="13"><div class="grid-content bg-purple"></div></el-col>
          <el-col :span="4" class="diaryReport-select-custom">
            <div class="grid-content bg-purple">
              <el-dropdown class="diaryReport-select-custom">
                <span class="el-dropdown-link">
                  请选择<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>全部</el-dropdown-item>
                  <el-dropdown-item>待审核</el-dropdown-item>
                  <el-dropdown-item>已审核</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </div>
          </el-col>
          <el-col :span="4" class="diaryReport-select-custom">
            <div class="grid-content bg-purple">
              <el-dropdown class="diaryReport-select-custom">
                <span class="el-dropdown-link">
                  请选择<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>全部</el-dropdown-item>
                  <el-dropdown-item>财税一部</el-dropdown-item>
                  <el-dropdown-item>财税二部</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </div>
          </el-col>
        </el-row>
    </div>
    <div>
      <el-table
        ref="multipleTable"
        :data="tableData3"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange">
        <el-table-column
          type="selection"
          width="55">
        </el-table-column>
        <el-table-column
          prop="processingTime"
          label="收支时间"
          width="120">
        </el-table-column>
        <el-table-column
          prop="summary"
          label="摘要"
          width="140">
        </el-table-column>
        <el-table-column
          prop="RAEdepartment"
          label="收支部门"
          width="120">
          <template slot-scope="scope">{{ scope.row.date }}</template>
        </el-table-column>
        <el-table-column
          prop="RAEtypes"
          label="收支类型"
          width="120">
        </el-table-column>
        <el-table-column
          prop="RAEamount"
          label="收支金额"
          show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          prop="settlementBalance"
          label="结余"
          width="100"
          show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          prop="RAEperson"
          label="收支人员"
          show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          prop="accountName"
          label="客户名称"
          show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          prop="accountRepresentative"
          label="客户代表"
          width="120">
          </el-table-column>
          <el-table-column
          prop="checkStatus"
          label="核对状态"
          width="120">
          </el-table-column>
        <el-table-column
          prop="operating"
          label="操作"
          show-overflow-tooltip>
        </el-table-column>
      </el-table>
      <div style="border:1px solid #e4e4e4;border-top:none;">
          <tr>
            <td class="total-model">合计</td>
            <td>
              <span class="total-tips">收款：<span class="amount-received-show">1</span></span>
              <span class="total-tips">支出：<span class="expenditure-show">2</span></span>
              <span class="total-tips">结余：<span class="calculating-balance-show">3</span></span>
            </td>
          </tr>
        </div>
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
    title: '日记报表'
  },
  data () {
    return {
      tableData3: [{
        processingTime: '2020-01-04',
        summary: '2020年记账费',
        RAEdepartment: '财税二部',
        RAEtypes: '收款',
        RAEamount: '+500',
        settlementBalance: '500',
        RAEperson: '主演',
        accountName: '张三的公司',
        accountRepresentative: '等作文',
        checkStatus: '已审核',
        operating: '查看'
      }],
      multipleSelection: []
    }
  }
}
</script>

<style>
.diaryReport-custom{
  width: 94%;
  margin: 0 auto;
  margin-top: 40px;
}
.diaryReport-header-custom{
  width: 100%;
}
.el-dropdown{
  border: 1px solid #DCDFE6;
  padding: 12px 24px;
  border-radius:5px;
}
.diaryReport-select-custom{
  float: right !important;
}
#app > section > section > main > div > div.diaryReport-header-custom > div:nth-child(2) > div:nth-child(3){
  width: 133px;
}
.diaryReport-button-custom{
  padding: 14px 19px !important;
}
.title-name{
  font-family: '微软雅黑';
  font-weight: 400;
  font-size: 12px !important;
  color: #333 !important;
  padding-right: none;
  line-height: 20px;
}
.el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
.el-table td, .el-table th.is-leaf{
  border: 1px solid #DCDFE6;
  text-align: center;
}
.el-main{
  line-height: 10px;
}
#u829_img{
  position: relative;
  top: 2px;
}
.el-table td, .el-table th{
  padding: 19px 0;
}
.el-col-3{
  width:7.5%;
}
.el-table th, .el-table tr{
  background-color: #f9fafc;
}
.amount-received-show{
  color: #009900;
  font-size: 14px;
}
.expenditure-show{
  color: #FF0000;
  font-size: 14PX;
}
.calculating-balance-show{
  color: #FF9900;
  font-size: 14px;
}
.total-tips{
  font-size: 14px;
  color: #666666;
  padding: 0px 50px;
}
.total-model{
  padding: 20px 11px;
  border-right: 1px solid #e4e4e4;
}
</style>
