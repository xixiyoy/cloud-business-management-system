<template>
  <div id="billingList" class="billing-list">
    <div class="billing-list-header-custom">
        <el-row :gutter="20">
          <el-col :span="3">
            <div class="grid-content bg-purple">
              <el-button type="primary" @click="handleClickApplyInvoicing" style="padding: 14px 34px;">申请开票</el-button>
            </div>
          </el-col>
          <el-col :span="1"><el-button type="text"></el-button></el-col>
          <el-col :span="10"><div class="grid-content bg-purple">
            <el-button class="new-seetings">
              <img id="u829_img" class="img " src="../assets/images/account/u829.png">
              <span style="padding-left:10px;">数据导出</span>
            </el-button></div></el-col>
          <el-col :span="4">
            <div class="grid-content bg-purple">
              <el-dropdown style="float:right;">
                <el-button>
                  请选择<i class="el-icon-arrow-down el-icon--right"></i>
                </el-button>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>服务中</el-dropdown-item>
                  <el-dropdown-item>已完成</el-dropdown-item>
                  <el-dropdown-item>全部</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </div>
          </el-col>
          <el-col :span="5">
            <div class="grid-content bg-purple">
              <div>
                <el-input placeholder="搜索客户名称、联系方式" class="input-with-select">
                  <el-button slot="append" icon="el-icon-search"></el-button>
                </el-input>
              </div>
            </div>
          </el-col>
          <el-col :span="3">
            <div class="grid-content bg-purple"><el-button class="new-seetings">高级检索</el-button></div>
          </el-col>
        </el-row>
    </div>
    <div class="account-table-custom">
      <el-tabs type="border-card" v-model="getBillingListForm.type" @tab-click="handelTabClick">
        <el-tab-pane v-for="(tab,index) in billingLabels" :key="index" :label="tab.label" :name="tab.name">
          <el-table
            ref="multipleTable"
            :data="billingList.list"
            tooltip-effect="dark"
            style="width: 100%"
            @selection-change="handleSelectionChange">
            <el-table-column
              type="selection">
            </el-table-column>
            <el-table-column
              prop="invoiceCode"
              :show-overflow-tooltip="true"
              label="开票编号">
            </el-table-column>
            <el-table-column
              prop="invoiceTypeName"
              label="发票类型">
            </el-table-column>
            <el-table-column
              prop="invoiceMoney"
              label="开票金额">
            </el-table-column>
            <el-table-column
              prop="invoiceStateName"
              label="开票状态">
            </el-table-column>
            <el-table-column
              prop="invoiceHead"
              label="发票抬头">
            </el-table-column>
            <el-table-column
              prop="appliUserName"
              label="申请人">
            </el-table-column>
            <el-table-column
              prop="confirmUserName"
              label="开票人">
            </el-table-column>
            <el-table-column
              prop="appliTime"
              :show-overflow-tooltip="true"
              label="开票时间">
            </el-table-column>
            <el-table-column
              prop="operating"
              label="操作">
              <template slot-scope="scope">
                <el-button @click="handleViewBillingListClick(scope.row)" type="text" size="small">查看</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
      </el-tabs>
      <div style="margin-top: 20px">
        <el-pagination
          background
          layout="total,prev, pager, next"
          @current-change="handleCurrentChangeClick"
          :current-page="getBillingListForm.page"
          :total="billingList.totalCount">
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
    title: '开票列表'
  },
  data () {
    return {
      activeTabName: 'all',
      billingLabels: [],
      getBillingListForm: {
        type: '',
        limit: 10,
        page: 1
      },
      multipleSelection: []
    }
  },

  methods: {
    toggleSelection (rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row)
        })
      } else {
        this.$refs.multipleTable.clearSelection()
      }
    },
    handleSelectionChange (val) {
      this.multipleSelection = val
    },
    handleClickApplyInvoicing () {
      this.$router.push({ path: '/apply-invoicing' })
    },
    billingTableHeaderCellStyle ({ row, column, rowIndex, columnIndex }) {
      if (rowIndex === 0) {
        return `
          background-color: #f5f7fa;
        `
      }
    },
    handleViewBillingListClick (row) {
      this.$router.push({ path: '/view-invoicing', query: { invoiceId: row.invoiceId } })
    },
    getBillingLabels () {
      getLabels('invoice').then(({ data: billingLabels }) => {
        this.billingLabels = billingLabels.map(billingLabel => {
          const name = Object.keys(billingLabel)[0]
          const label = billingLabel[name]
          return {
            label,
            name
          }
        })
        this.getBillingListForm.type = this.billingLabels[0].name
      })
    },
    getBillings () {
      this.$store.dispatch('getBillings', this.getBillingListForm)
    },
    handelTabClick () {
      this.getBillingListForm.page = 1
      this.getBillings()
    },
    handleCurrentChangeClick (currentPage) {
      this.getBillingListForm.page = currentPage
      this.getBillings()
    }
  },
  mounted () {
    this.getBillingLabels()
    this.getBillings()
  },
  computed: {
    ...mapState({
      billingList: state => state.invoice.billings
    })
  }
}
</script>

<style>
.billing-table-header {
  background-color: black;
}
.billing-list{
  width: 94%;
  margin: 0 auto;
  margin-top: 40px;
}
.billing-list-header-custom{
  width: 100%;
}
#base > div.account-table-custom > div.el-table.el-table--fit.el-table--enable-row-hover.el-table--enable-row-transition > div.el-table__header-wrapper > table > thead > tr{
  background-color: rgb(249,250,252);
}
.el-button--primary{
    padding: 12px 34px;
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
</style>
