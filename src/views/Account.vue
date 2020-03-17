<template>
  <div id="base" class="account-custom">
    <div class="account-header-custom">
        <el-row :gutter="20" class="header-custom">
          <el-col :span="3">
            <div class="grid-content bg-purple">
              <el-button type="primary" @click="handleClickCreateAccount">新建</el-button>
            </div>
          </el-col>
          <el-col :span="3"><div class="grid-content bg-purple">
            <el-button class="new-seetings">
              <img id="u829_img" class="img " src="../assets/images/account/u829.png">
              <span style="padding-left:10px;">导出</span>
            </el-button></div></el-col>
          <el-col :span="11" style="margin-right:25px;"><div class="grid-content bg-purple"></div></el-col>
          <el-col :span="2">
            <div class="grid-content bg-purple">
              <el-dropdown class="account-home-dropdown">
                <span class="el-dropdown-link" style="color:#606266;">
                  请选择<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
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
      <el-tabs type="border-card">
        <el-tab-pane>
          <span slot="label">全部</span>
          我的行程
        </el-tab-pane>
        <el-tab-pane label="我负责">消息中心</el-tab-pane>
        <el-tab-pane label="我创建">角色管理</el-tab-pane>
        <el-tab-pane label="部门">定时任务补偿</el-tab-pane>
      </el-tabs>
      <el-table
        ref="multipleTable"
        :data="tableData3"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange">
        <el-table-column
          type="selection">
        </el-table-column>
        <el-table-column
          prop="accountName"
          label="客户名称">
        </el-table-column>
        <el-table-column
          prop="accountSource"
          label="客户来源">
        </el-table-column>
        <el-table-column
          prop="contactPerson"
          label="联系人">
          <template slot-scope="scope">{{ scope.row.date }}</template>
        </el-table-column>
        <el-table-column
          prop="contactNumber"
          label="联系电话">
        </el-table-column>
        <el-table-column
          prop="accountStatus"
          label="客户状态"
          show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          prop="accountGrade"
          label="客户等级"
          show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          prop="SalesRepresentative"
          label="销售代表"
          show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          prop="OrderTotal"
          label="订单总额"
          show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          prop="operating"
          label="操作"
          show-overflow-tooltip>
        </el-table-column>
      </el-table>
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
    title: '客户'
  },
  data () {
    return {
      tableData3: [{
        accountName: '张三的公司',
        accountSource: '渠道-自拓渠道',
        contactPerson: '李四',
        contactNumber: '13131324033',
        accountStatus: '服务中',
        accountGrade: '普通',
        SalesRepresentative: '宇文化',
        OrderTotal: '2000.00',
        operating: '查看'
      }, {
        accountName: '李四的公司',
        accountSource: '渠道-自拓渠道',
        contactPerson: '李四',
        contactNumber: '13131324033',
        accountStatus: '服务中',
        accountGrade: 'VIP',
        SalesRepresentative: '宇文化',
        OrderTotal: '2000.00',
        operating: '查看'
      }],
      multipleSelection: [],
      advancedSearchDialogVisible: false
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
    handleClickCreateAccount () {
      this.$router.push({ path: '/new-account-page' })
    },
    handleAdvancedSearch () {
      this.advancedSearchDialogVisible = true
    }
  }
}
</script>

<style>
.account-custom{
  width: 94%;
  margin: 0 auto;
  margin-top: 40px;
}
.account-header-custom{
  width: 100%;
}
.el-dropdown{
  border: 1px solid #DCDFE6;
  padding: 12px 24px;
  border-radius:5px;
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
#base > div.account-header-custom > div > div:nth-child(2) > div > button{
  padding: 10px 21px;
}
.el-table td, .el-table th{
  padding: 19px 0;
}
.el-col-3{
  width:7.5%;
}
.account-home-dropdown{
  border: 1px solid #DCDFE6;
  padding: 10px 18px !important;
  border-radius: 5px;
}
</style>
