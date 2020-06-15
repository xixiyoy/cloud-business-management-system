<template>
  <div class="flow">
    <div class="flow-header-custom">
        <el-row :gutter="20" class="header-custom">
          <el-col :span="12"><div class="grid-content bg-purple">
            <el-button>
              <span style="padding-left:10px;">导出</span>
            </el-button></div></el-col>
          <el-col :span="4">
            <div class="grid-content bg-purple">
              <el-select v-model="getFlowForm.taskStatusName" @change="handleStatusChange">
                <el-option
                  v-for="(tasksStatu, index) in taskStatus"
                  :key="index"
                  :label="tasksStatu.name"
                  :value="tasksStatu.value">
                </el-option>
              </el-select>
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
          <el-col :span="3">
            <div class="grid-content bg-purple">
              <el-button class="new-seetings" @click="handleAdvancedSearch" style="float:right;">高级检索</el-button>
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
      <el-tabs type="border-card" v-model="getFlowForm.type" @tab-click="handleTabClick">
        <el-tab-pane v-for="(tab, index) in flowLabels" :key="index" :label="tab.label" :name="tab.name">
          <el-table
            ref="multipleTable"
            :data="tasks.rows"
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
              prop="taskStatusName"
              label="产品状态">
            </el-table-column>
            <el-table-column
              prop="relUserName"
              label="负责会计">
            </el-table-column>
            <el-table-column
              prop="customerRelUserName"
              :show-overflow-tooltip="true"
              label="客户代表">
            </el-table-column>
            <el-table-column
              prop="serviceStartMonth:null"
              label="服务开始月">
            </el-table-column>
            <el-table-column
              prop="taxDate:null"
              label="当前报税期">
            </el-table-column>
            <el-table-column
              prop="price"
              label="服务金额">
            </el-table-column>
            <el-table-column
              prop="taskNo"
              :show-overflow-tooltip="true"
              label="订单编号">
            </el-table-column>
            <el-table-column
              prop="operating"
              label="操作">
              <template slot-scope="scope">
                <el-button @click="handleVieAgentaOrder(scope.row)" type="text" size="small">查看</el-button>
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

const getMonth = taxDate => new Date(taxDate).getMonth() + 1

const isAgentOrder = longTerm => longTerm === null || longTerm === '0'

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
      multipleSelection: [],
      flowLabels: [],
      taskStatus: [
        {
          name: '未开始',
          value: '0'
        },
        {
          name: '服务中',
          value: '1'
        },
        {
          name: '已完成',
          value: '3'
        },
        {
          name: '已终止',
          value: '2'
        },
        {
          name: '全部',
          value: '4'
        }
      ]
    }
  },
  methods: {
    // 通过状态筛选订单
    handleStatusChange (statusValue) {
      if (statusValue === '4') {
        delete this.getFlowForm.taskStatusValue
      } else {
        this.getFlowForm.taskStatusValue = statusValue
      }
      this.getFlows()
    },
    getNotAgentDate (createTime) {
      const date = new Date(createTime)
      return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
    },
    handleAdvancedSearch () {
      this.advancedSearchDialogVisible = true
    },
    handleCurrentChangeClick (currentPage) {
      this.getFlowForm.page = currentPage
      this.getFlows()
    },
    handleSelectionChange (val) {
      this.multipleSelection = val
    },
    handleVieAgentaOrder (row) {
      this.$router.push({ path: '/agent-bookkeeping', query: { taskId: row.taskId } })
    },
    handleTabClick () {
      this.getFlowForm.params.page = 1
      this.getFlows()
    },
    getFlowLabels () {
      getLabels('task').then(({ data: flowLabels }) => {
        this.flowLabels = flowLabels.map(flowLabel => {
          const name = Object.keys(flowLabel)[0]
          const label = flowLabel[name]
          return {
            label,
            name
          }
        })
        this.getFlowForm.type = this.flowLabels[0].name
        this.getFlows()
      })
    },
    getFlows () {
      this.$store.dispatch('getTaskList', this.getFlowForm)
    },
    isAgentOrder (task) {
      return isAgentOrder(task.longTerm)
    },
    getStepsIconClass (description, isAgent, status) {
      switch (description) {
        case '未开始': {
          return 'custom-wait'
        }
        case '已完成': {
          if (!isAgent) {
            if (status === '已完成') {
              return 'custom-finish'
            } else {
              return 'custom-wait'
            }
          }
          return 'custom-finish'
        }
        case '服务中': {
          return 'custom-process'
        }
        case '交接中': {
          return 'custom-jiaojie-zhong'
        }
        default: {
          if (description.startsWith('2')) {
            return 'custom-process'
          }
          return 'custom-forbiden'
        }
      }
    },
    getTaskFlows ({ serviceStartMonth: startDate, taskFlowList: taskFlows, giftNumber }) {
      const startMonth = getMonth(startDate)
      const availableTaskFlows = taskFlows.map(({ taxDate }) => ({
        month: getMonth(taxDate),
        monthLabel: `${getMonth(taxDate)} 月`,
        status: '已完成'
      })).sort((x, y) => x.month - y.month)
      let firstAvailableMonth = null
      let availableTaskCount = 0
      const temp = this.year.map(month => {
        const awailableTaskFlow = availableTaskFlows.filter(availableTaskFlow => availableTaskFlow.month === month)[0]
        if (awailableTaskFlow !== undefined) {
          availableTaskCount++
          if (firstAvailableMonth === null) {
            firstAvailableMonth = month
          }
          return awailableTaskFlow
        }
        return {
          month,
          monthLabel: `${month} 月`,
          status: '未开始'
        }
      })
      if (availableTaskCount === 0 && firstAvailableMonth === null) {
        temp[startMonth - 1].status = '服务中'
        temp.forEach(a => {
          if (a.month < startMonth) {
            temp[a.month - 1].status = '禁止'
          }
          // if (a.month === startMonth + giftNumber) {
          //   temp[a.month - 1].monthLabel = `${a.month} 月（赠）`
          // }
        })
      }
      if (availableTaskCount !== 0) {
        temp.forEach(a => {
          if (a.month > startMonth && a.month < firstAvailableMonth) {
            temp[a.month - 1].status = '服务中'
          }
          if (a.month < startMonth) {
            temp[a.month - 1].status = '禁止'
          }
          // if (a.month === startMonth + giftNumber) {
          //   temp[a.month - 1].monthLabel = `${a.month} 月（赠）`
          // }
        })
      }
      return temp
    }
  },
  mounted () {
    this.getFlowLabels()
  },
  computed: {
    ...mapState({
      tasks: state => state.task.tasks
    })
  }
}
</script>

<style lang="scss">
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

.agent-order-steps, .four-steps {
  .ant-steps-item-description {
    display: none;
  }
  .ant-steps-item-tail {
    top: 5px !important;
    margin: 0 0 0 73px !important;
  }
  .ant-steps-item-icon {
    width: 15px !important;
    height: 15px !important;
  }
  .ant-steps-icon-dot {
    border: 1px solid #e9e9e9;
  }
  .custom-finish {
    background-color: #0099cc !important;
  }
  .custom-process {
    background-color: #00cc01 !important;
  }
  .custom-wait {
    background-color: #fff !important;
  }
  .custom-jiaojie-zhong {
    background-color: #E6A23C !important;
  }
  .custom-forbiden {
    background-color: #909399 !important;
  }
}

.agent-order-steps {
  .ant-steps-item-description {
    display: block;
  }
}
.ant-steps-item {
  width: 16%;
}
</style>
