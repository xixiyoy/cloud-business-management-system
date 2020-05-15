<template>
  <div class="diaryReport-custom">
    <div class="diaryReport-header-custom">
        <el-row :gutter="20">
          <el-col :span="3">
            <div class="grid-content bg-purple">
              <el-button type="primary" @click="handleNewDiaryReport">新建收支</el-button>
            </div>
          </el-col>
          <el-col :span="1"><el-button type="text"></el-button></el-col>
          <el-col :span="3"><div class="grid-content bg-purple">
            <el-button class="new-seetings">
              <img id="u829_img" class="img " src="../assets/images/account/u829.png">
              <span>导出</span>
            </el-button></div></el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="12">
            <div class="block">
              <el-date-picker
                type="date"
                placeholder="选择日期">
              </el-date-picker>
            </div>
          </el-col>
          <el-col :span="4">
            <div class="grid-content bg-purple">
              <el-dropdown>
                <el-button>
                  请选择<i class="el-icon-arrow-down el-icon--right"></i>
                </el-button>
                <el-dropdown-menu>
                  <el-dropdown-item>全部</el-dropdown-item>
                  <el-dropdown-item>待审核</el-dropdown-item>
                  <el-dropdown-item>已审核</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </div>
          </el-col>
          <el-col :span="3">
            <div class="grid-content bg-purple">
              <el-dropdown>
                <el-button>
                  请选择<i class="el-icon-arrow-down el-icon--right"></i>
                </el-button>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item v-for="(dept, index) in deptList" :key="index">{{dept.name}}</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </div>
          </el-col>
          <el-col :span="4">
            <el-input placeholder="请输入内容" class="input-with-select">
              <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
          </el-col>
        </el-row>
    </div>
    <div>
      <el-table
        border
        ref="multipleTable"
        :data="fianceList.list"
        tooltip-effect="dark"
        style="width: 100%"
        :header-cell-style="diaryReportTableHeaderCellStyle">
        <el-table-column
          type="selection"
          width="55">
        </el-table-column>
        <el-table-column
          prop="createTime"
          :show-overflow-tooltip="true"
          label="收支时间">
        </el-table-column>
        <el-table-column
          prop="comment"
          label="摘要">
        </el-table-column>
        <el-table-column
          prop="fianceDeptName"
          :show-overflow-tooltip="true"
          label="收支部门">
        </el-table-column>
        <el-table-column
          prop="fianceTypeName"
          label="收支类型">
        </el-table-column>
        <el-table-column
          prop="money"
          label="收支金额">
          <template slot-scope="scope">
            <p :class="isAmountColor(scope.row)">{{ scope.row.money }}</p>
          </template>
        </el-table-column>
        <el-table-column
          prop="balance"
          label="结余">
          <template slot-scope="scope">
            <span class="calculating-balance-show">{{ scope.row.balance }}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="createUserName"
          label="收支人员">
        </el-table-column>
        <el-table-column
          prop="customerName"
          :show-overflow-tooltip="true"
          label="客户名称">
        </el-table-column>
        <el-table-column
          prop="customerRelName"
          label="客户代表">
          </el-table-column>
        <el-table-column
          prop="statusName"
          label="核对状态">
        </el-table-column>
        <el-table-column
          prop="operating"
          label="操作">
          <template slot-scope="scope">
            <el-button @click="handleViewDiaryReportClick(scope.row)" type="text" size="small">查看</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div style="border:1px solid #e4e4e4;border-top:none;">
          <tr>
            <td class="total-model">合计</td>
            <td>
              <span class="total-tips">收款：<span class="amount-received-show">{{totalCash.incomeMoney}}</span></span>
              <span class="total-tips">支出：<span class="expenditure-show">{{totalCash.costMoney}}</span></span>
              <span class="total-tips">结余：<span class="calculating-balance-show">{{totalCash.incomeMoney-totalCash.costMoney}}</span></span>
            </td>
          </tr>
        </div>
      <div style="margin-top: 20px">
        <el-pagination
          background
          layout="total,prev, pager, next"
           @current-change="handleCurrentChangeClick"
          :current-page="getFiancesForm.page"
          :total="fianceList.totalCount">
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import { getLabels } from '../api/label'
import { mapState } from 'vuex'

export default {
  metaInfo: {
    title: '日记报表'
  },
  data () {
    return {
      multipleSelection: [],
      getFiancesForm: {
        page: 1,
        limit: 10
      },
      getTotalCashForm: {
        type: ''
      }
    }
  },
  methods: {
    diaryReportTableHeaderCellStyle ({ row, column, rowIndex, columnIndex }) {
      if (rowIndex === 0) {
        return `
          background-color: #f5f7fa;
        `
      }
    },
    handleNewDiaryReport () {
      this.$router.push({ path: '/new-diary-report' })
    },
    handleViewDiaryReportClick (row) {
      this.$router.push({ path: '/view-diary-report', query: { fianceId: row.fianceId } })
    },
    isAmountColor (row) {
      return Number.parseFloat(row.RAEamount) > 0 ? 'amount-green' : 'amount-red'
    },
    getFianceList () {
      this.$store.dispatch('getDiaryReportList', this.getFiancesForm)
    },
    getDeptsList () {
      // 对应actions 里面的名字
      this.$store.dispatch('getDeptList')
    },
    handleCurrentChangeClick (currentPage) {
      this.getFiancesForm.page = currentPage
      this.getFianceList()
    },
    getTotalCash () {
      this.$store.dispatch('getTotalCash', this.getTotalCashForm)
    },
    // a
    getAccountLabels () {
      getLabels('customer').then(({ data: accountLabels }) => {
        this.accountLabels = accountLabels.map(accountLabel => {
          const name = Object.keys(accountLabel)[0]
          const label = accountLabel[name]
          return {
            label,
            name
          }
        })
        this.getCustomersForm.type = this.accountLabels[0].name
        this.getTotalCash()
      })
    }
  },
  mounted () {
    this.getFianceList()
    this.getDeptsList()
    this.getTotalCash()
    this.getAccountLabels()
  },
  computed: {
    ...mapState({
      // 定义的变量名            文件名  state中定义的名字
      fianceList: state => state.fiance.fiances,
      deptList: state => state.department.depts,
      totalCash: state => state.fiance.totalCash
    })
  }
}
</script>

<style scoped>
.diaryReport-custom{
  width: 94%;
  margin: 0 auto;
  margin-top: 40px;
}
.diaryReport-header-custom{
  width: 100%;
}
.diaryReport-select-custom{
  float: right !important;
}
#app > section > section > main > div > div.diaryReport-header-custom > div:nth-child(2) > div:nth-child(3){
  width: 143px;
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
  line-height: 20px;
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
.amount-red{
  color: #FF0000;
}
.amount-green{
  color: green;
}
</style>
