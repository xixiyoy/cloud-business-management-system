<template>
  <div id="base" class="account-custom">
    <div class="account-header-custom">
        <el-row :gutter="20" class="header-custom">
          <el-col :span="3">
            <div class="grid-content bg-purple">
              <el-button type="primary" @click="handleClickCreateAccount">新  建</el-button>
            </div>
          </el-col>
          <el-col :span="10"><div class="grid-content bg-purple">
            <el-button class="new-seetings">
              <img id="u829_img" class="img " src="../assets/images/account/u829.png">
              <span style="padding-left:10px;">导出</span>
            </el-button></div></el-col>
          <el-col :span="4">
            <div class="grid-content bg-purple">
              <el-dropdown style="float: right;">
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
                <el-input placeholder="请输入内容" class="input-with-select">
                  <el-button slot="append" icon="el-icon-search"></el-button>
                </el-input>
              </div>
            </div>
          </el-col>
          <el-col :span="1"><el-button type="text"></el-button></el-col>
          <el-col :span="3">
            <div class="grid-content bg-purple">
              <el-button class="new-seetings" style="float:right;" @click="handleAdvancedSearch">高级检索</el-button>
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
                      <el-form-item label="创建日期:">
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
    <div class="account-table-custom">
      <el-tabs type="border-card" v-model="getCustomersForm.type" @tab-click="handelTabClick">
        <el-tab-pane v-for="(tab, index) in accountLabels" :key="index" :label="tab.label" :name="tab.name">
          <el-table
            ref="multipleTable"
            :data="customers.list"
            tooltip-effect="dark"
            style="width: 100%"
            @selection-change="handleSelectionChange">
            <el-table-column
              fixed
              type="selection">
            </el-table-column>
            <el-table-column
              prop="customerName"
              :show-overflow-tooltip="true"
              label="客户名称">
            </el-table-column>
            <el-table-column
              prop="customerFromWay"
              label="客户来源">
            </el-table-column>
            <el-table-column
              prop="customerLinkerName"
              label="联系人">
            </el-table-column>
            <el-table-column
              prop="customerLinkerPhone"
              :show-overflow-tooltip="true"
              label="联系电话">
            </el-table-column>
            <el-table-column
              prop="customerStatusName"
              label="客户状态">
            </el-table-column>
            <el-table-column
              prop="customerLevelName"
              label="客户等级">
            </el-table-column>
            <el-table-column
              prop="customerRelUserName"
              label="销售代表">
            </el-table-column>
            <el-table-column
              prop="OrderTotal"
              label="订单总额">
                <template slot-scope="scope">
                  <p>{{ getTotalAmount(scope.row) }}</p>
                </template>
            </el-table-column>
            <el-table-column
              prop="operating"
              label="操作">
              <template slot-scope="scope">
                <el-button @click="handleViewAccountClick(scope.row)" type="text" size="small">查看</el-button>
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
          :current-page="getCustomersForm.page"
          :total="customers.totalCount">
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
    title: '客户列表'
  },
  data () {
    return {
      multipleSelection: [],
      advancedSearchDialogVisible: false,
      accountLabels: [],
      getCustomersForm: {
        type: '',
        limit: 10,
        page: 1
      }
    }
  },
  methods: {
    getTotalAmount (row) {
      return row.taskList.map(task => task.price * task.number).reduce((x, y) => x + y)
    },
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
    handleClickCreateAccount () {
      this.$router.push({ path: '/new-account-page' })
    },
    handleAdvancedSearch () {
      this.advancedSearchDialogVisible = true
    },
    handleViewAccountClick (row) {
      this.$router.push({ path: '/view-account', query: { customerId: row.customerId } })
    },
    getAccountLabels () {
      // 这个里面的customer 什么意思
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
      })
    },
    // 用vuex 获取表单
    getCustomers () {
      this.$store.dispatch('getCustomers', this.getCustomersForm)
    },
    handelTabClick () {
      this.getCustomersForm.page = 1
      this.getCustomers()
    },
    handleCurrentChangeClick (currentPage) {
      this.getCustomersForm.page = currentPage
      this.getCustomers()
    }
  },
  mounted () {
    this.getAccountLabels()
    this.getCustomers()
  },
  computed: {
    ...mapState({
      customers: state => state.customer.customers
    })
  }
}
</script>

<style scope>
.account-custom{
  width: 94%;
  margin: 0 auto;
  margin-top: 40px;
}
.account-header-custom{
  width: 100%;
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
.el-main{
  line-height: 10px;
}
#u829_img{
  position: relative;
  top: 2px;
}
.el-col-3{
  width:7.5%;
}
.el-tabs--border-card>.el-tabs__content{
  padding: 0;
}
</style>
