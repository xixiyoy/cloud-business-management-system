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
              <el-dropdown>
                <el-button >
                  请选择<i class="el-icon-arrow-down el-icon--right"></i>
                </el-button>
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
      <el-tabs type="border-card" v-model="getFlowForm.type" @tab-click="handelTabClick">
        <el-tab-pane v-for="(tab, index) in flowLabels" :key="index" :label="tab.label" :name="tab.name">
        </el-tab-pane>
      </el-tabs>
      <div style="margin-top: 20px">
        <el-pagination
          background
          layout="total,prev, pager, next"
          @current-change="handleCurrentChangeClick"
          :current-page="getFlowForm.page"
          :total="tasks.total">
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
    title: '订单列表'
  },
  data () {
    return {
      advancedSearchDialogVisible: false,
      getFlowForm: {
        type: '',
        limit: 10,
        page: 1
      },
      flowLabels: []
    }
  },
  methods: {
    handleAdvancedSearch () {
      this.advancedSearchDialogVisible = true
    },
    handleCurrentChangeClick (currentPage) {
      this.getCustomersForm.page = currentPage
      this.getCustomers()
    },
    handleTabClick () {
      this.getFlowForm.page = 1
      this.getFlows()
    },
    getFlowLabels () {
      getLabels('flow').then(({ data: flowLabels }) => {
        this.flowLabels = flowLabels.map(flowLabel => {
          const name = Object.keys(flowLabel)[0]
          const label = flowLabel[name]
          return {
            label,
            name
          }
        })
        this.getFlowForm.type = this.flowLabels[0].name
      })
    },
    getFlows () {
      this.$store.dispatch('getTaskList', this.getFlowForm)
    }
  },
  mounted () {
    this.getFlowLabels()
  },
  computed: {
    ...mapState({
      flows: state => state.tasks.task
    })
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
.flow-table-show{
  margin-top: 20px;
}
</style>
