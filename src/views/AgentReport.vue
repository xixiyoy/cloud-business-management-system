<template>
  <div class="agent-report">
    <div class="agent-header-custom">
        <el-row :gutter="20" class="header-custom">
          <el-col :span="3"><div class="grid-content bg-purple">
            <el-button>
              <img id="u829_img" class="img " src="../assets/images/account/u829.png">
              <span style="padding-left:10px;">导出</span>
            </el-button></div>
          </el-col>
          <el-col :span="13">
            <div class="block">
              <el-date-picker
                type="date"
                placeholder="统计年份">
              </el-date-picker>
            </div>
          </el-col>
          <el-col :span="3">
            <div class="grid-content bg-purple">
              <el-dropdown style="float:right;">
                <el-button>
                  请选择<i class="el-icon-arrow-down el-icon--right"></i>
                </el-button>
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
      <el-tabs type="border-card" v-model="getAccountsForm.type" @tab-click="handelTabClick" class="agent-report-tabs">
        <el-tab-pane v-for="(tab, index) in accountLabels" :key="index" :label="tab.label" :name="tab.name">
          <el-table
            ref="multipleTable"
            :data="accounts.list"
            tooltip-effect="dark"
            style="width: 100%">
            <el-table-column
              type="selection"
              header-align="center">
            </el-table-column>
            <el-table-column
              prop="customerName"
              label="客户名称"
              :show-overflow-tooltip="true"
              header-align="center">
            </el-table-column>
            <el-table-column label="完成情况 (2020)"
                header-align="center"
                border="false">
              <el-table-column
                prop="province"
                label="1月"
                class-name="none-border">
                <template slot-scope="scope">
                  <i :class="getCompleteCircleClass(1, scope.row)"></i>
                </template>
              </el-table-column>
              <el-table-column
                prop="city"
                label="2月"
                class-name="none-border">
                <template slot-scope="scope">
                  <i :class="getCompleteCircleClass(2, scope.row)"></i>
                </template>
              </el-table-column>
              <el-table-column
                prop="address"
                label="3月"
                class-name="none-border">
                <template slot-scope="scope">
                  <i :class="getCompleteCircleClass(3, scope.row)"></i>
                </template>
              </el-table-column>
              <el-table-column
                prop="address"
                label="4月"
                class-name="none-border">
                <template slot-scope="scope">
                  <i :class="getCompleteCircleClass(4, scope.row)"></i>
                </template>
              </el-table-column>
              <el-table-column
                prop="address"
                label="5月"
                class-name="none-border">
                <template slot-scope="scope">
                  <i :class="getCompleteCircleClass(5, scope.row)"></i>
                </template>
              </el-table-column>
              <el-table-column
                prop="address"
                label="6月"
                class-name="none-border">
                <template slot-scope="scope">
                  <i :class="getCompleteCircleClass(6, scope.row)"></i>
                </template>
              </el-table-column>
              <el-table-column
                prop="address"
                label="7月"
                class-name="none-border">
                <template slot-scope="scope">
                  <i :class="getCompleteCircleClass(7, scope.row)"></i>
                </template>
              </el-table-column>
              <el-table-column
                prop="address"
                label="8月"
                class-name="none-border">
                <template slot-scope="scope">
                  <i :class="getCompleteCircleClass(8, scope.row)"></i>
                </template>
              </el-table-column>
              <el-table-column
                prop="address"
                label="9月"
                class-name="none-border">
                <template slot-scope="scope">
                  <i :class="getCompleteCircleClass(9, scope.row)"></i>
                </template>
              </el-table-column>
              <el-table-column
                prop="address"
                label="10月"
                class-name="none-border">
                <template slot-scope="scope">
                  <i :class="getCompleteCircleClass(10, scope.row)"></i>
                </template>
              </el-table-column>
              <el-table-column
                prop="address"
                label="11月"
                class-name="none-border">
                <template slot-scope="scope">
                  <i :class="getCompleteCircleClass(11, scope.row)"></i>
                </template>
              </el-table-column>
              <el-table-column
                prop="address"
                label="12月">
                <template slot-scope="scope">
                  <i :class="getCompleteCircleClass(12, scope.row)"></i>
                </template>
              </el-table-column>
            </el-table-column>
            <el-table-column
              prop="newestTask.relUserName"
              label="财税顾问"
              header-align="center">
            </el-table-column>
            <el-table-column
              prop="newestTask.relDeptName"
              label="部门"
              header-align="center"
              show-overflow-tooltip>
            </el-table-column>
            <el-table-column
              prop="newestTask.price"
              label="月服务费"
              header-align="center"
              show-overflow-tooltip>
            </el-table-column>
            <el-table-column
              prop="collectStatusName"
              label="收款状态"
              header-align="center"
              show-overflow-tooltip>
            </el-table-column>
            <el-table-column
              prop="royaltyStatusName"
              label="提成状态"
              header-align="center"
              show-overflow-tooltip>
            </el-table-column>
            <el-table-column
              prop="operating"
              label="操作"
              header-align="center">
              <template>
                <el-button type="text" icon="el-icon-search" @click="dialogFormVisible = true"></el-button>

                <!-- <el-dialog title="提交提成" :visible.sync="dialogFormVisible">
                  <el-form>
                    <el-form-item label="提成月数：" required>
                      <div class="block">
                        <el-date-picker
                          type="date"
                          placeholder="">
                        </el-date-picker>
                      </div>
                    </el-form-item>
                    <el-form-item label="提成金额：">
                      <el-input></el-input>
                    </el-form-item>
                  </el-form>
                  <div slot="footer" class="dialog-footer">
                    <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
                    <el-button @click="dialogFormVisible = false">取 消</el-button>
                  </div>
                </el-dialog> -->

              <!-- 展示部分 -->
              <!-- <el-dialog title="收款记录" :visible.sync="dialogTableVisible">
                <el-form>
                  <el-form-item label="审核状态：">
                    <span></span>
                  </el-form-item>
                  <el-form-item label="提交人：">
                    <span></span>
                  </el-form-item>
                  <el-form-item label="付款账户：">
                    <span></span>
                  </el-form-item>
                  <el-form-item label="收据编号：">
                    <span></span>
                  </el-form-item>
                  <el-form-item label="到账日期：">
                    <span></span>
                  </el-form-item>
                  <el-form-item label="收款月数：">
                    <span></span>
                  </el-form-item>
                  <el-form-item label="审批人：">
                    <span></span>
                  </el-form-item>
                  <el-form-item label="备注：">
                    <span></span>
                  </el-form-item>
                  <el-form-item label="创建日期：">
                    <span></span>
                  </el-form-item>
                </el-form>
              </el-dialog> -->

              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
        <el-row :gutter="10" style="margin-top:20px;">
          <el-col :span="3">
            <template>
              <el-radio-group v-model="radio">
                <el-radio label="未收款"></el-radio>
              </el-radio-group>
            </template>
          </el-col>
          <el-col :span="3">
            <template>
              <el-radio-group v-model="radio">
                <el-radio label="已收款"></el-radio>
              </el-radio-group>
            </template>
          </el-col>
          <el-col :span="3">
            <template>
              <el-radio-group v-model="radio">
                <el-radio label="已发提成"></el-radio>
              </el-radio-group>
            </template>
          </el-col>
        </el-row>
      </el-tabs>
      <div style="margin-top: 20px">
        <el-pagination
          background
          layout="total,prev, pager, next"
          @current-change="handleCurrentChangeClick"
          :current-page="getAccountsForm.page"
          :total="accounts.totalCount">
        </el-pagination>
      </div>
    </div>
    <!-- 提交弹窗 -->
    <el-dialog title="提交收款" :visible.sync="dialogFormVisible">
      <el-form>
        <el-form-item label="付款账户：">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="收据编号：">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="收款账户：" required>
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="收款月数：" required>
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="到账日期：" required>
          <div class="block">
            <el-date-picker
              type="date"
              placeholder="选择日期">
            </el-date-picker>
          </div>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
        <el-button @click="dialogFormVisible = false">取 消</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import { getLabels } from '../api/label'
import { mapState } from 'vuex'
export default {
  metaInfo: {
    title: '代帐报表'
  },
  data () {
    return {
      dialogFormVisible: false,
      radio: 3,
      activeTabName: 'all',
      getAccountsForm: {
        type: '',
        limit: 10,
        page: 1,
        year: 2020
      },
      accountLabels: []
    }
  },
  methods: {
    getAccounts () {
      this.$store.dispatch('getAccounts', this.getAccountsForm)
    },
    getAccountLabels () {
      getLabels('account').then(({ data: accountLabels }) => {
        this.accountLabels = accountLabels.map(accountLabel => {
          const name = Object.keys(accountLabel)[0]
          const label = accountLabel[name]
          return {
            label,
            name
          }
        })
        this.getAccountsForm.type = this.accountLabels[0].name
      })
    },
    getAccountForTable (month, row) {
      return row.accountList.filter(account => new Date(account.currentMonth).getMonth() + 1 === month)[0] || null
    },
    getCompleteCircleClass (month, row) {
      const account = this.getAccountForTable(month, row)
      if (account === null) {
        return 'info'
      }
      return account.statusName === '已发提成' ? 'red' : 'green'
    },
    handleCurrentChangeClick (currentPage) {
      this.getAccountsForm.page = currentPage
      this.getAccounts()
    },
    handelTabClick () {
      this.getAccountsForm.page = 1
      this.getAccounts()
    },
    // 用来判断是否收款
    isReceiveMoney (collectStatusValue) {
    }
  },
  mounted () {
    this.getAccountLabels()
    this.getAccounts()
  },
  computed: {
    ...mapState({
      accounts: state => state.account.accounts
    })
  }
}
</script>

<style lang="scss">
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
.agent-report-tabs .el-tabs__content {
  padding: none;
}
.none-border {
  border-right: 0px solid #EBEEF5 !important;
}

.green {
  width:15px;
  height:15px;
  border-radius:50%;
  background-color:#67C23A;
  margin: 2px 5px 0 0px;
  display: inline-block;
}
.blue {
  width:15px;
  height:15px;
  border-radius:50%;
  background-color:#409EFF;
  margin: 2px 5px 0 0px;
  display: inline-block;
}
.red {
  width:15px;
  height:15px;
  border-radius:50%;
  background-color:red;
  margin: 2px 5px 0 0px;
  display: inline-block;
}
.warn {
  width:15px;
  height:15px;
  border-radius:50%;
  background-color:#E6A23C;
  margin: 2px 5px 0 0px;
  display: inline-block;
}
.info {
  width:15px;
  height:15px;
  border-radius:50%;
  background-color:#fff;
  margin: 2px 5px 0 0px;
  display: inline-block;
  border:1px solid rgb(232, 232, 232);
}
</style>
