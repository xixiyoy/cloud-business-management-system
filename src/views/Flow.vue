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
      <el-tabs type="border-card" v-model="getFlowForm.type" @tab-click="handleTabClick">
        <el-tab-pane v-for="(tab, index) in flowLabels" :key="index" :label="tab.label" :name="tab.name">
          <el-card class="box-card" v-for="(task, index) in tasks.rows" :key="index" style="margin: 10px 0;">
            <div slot="header" class="clearfix">
              <el-row :gutter="20">
                <el-col :span="2">公司名称: 这里需要改</el-col>
                <el-col :span="2">DB 编号：{{ task.taskNo }}</el-col>
                <el-col :span="2">客户代表：{{ task.relUserName }}</el-col>
              </el-row>
              <div style="float: right; padding: 3px 0" v-if="!isAgentOrder(task)">
                <el-date-picker
                  align="right"
                  type="year"
                  placeholder="选择年">
                </el-date-picker>
              </div>
            </div>
            <el-row :gutter="20" v-if="!isAgentOrder(task)">
              <el-col>
                <a-steps :current="0" class="four-steps">
                  <template slot="progressDot" slot-scope="{ description }">
                    <span class="ant-steps-icon-dot" :class="getStepsIconClass(description)"></span>
                  </template>
                  <a-step :title="taskFlow.monthLabel" :description="taskFlow.status" v-for="(taskFlow, index) in getTaskFlows(task.taskFlowList)" :key="index"/>
                </a-steps>
              </el-col>
            </el-row>
            <el-row v-if="isAgentOrder(task)">
              <el-col :span="3">
                企业变更
              </el-col>
              <el-col :span="21">
                <a-steps :current="0" class="agent-order-steps">
                  <template slot="progressDot" slot-scope="{ description }">
                    <span class="ant-steps-icon-dot" :class="getStepsIconClass(description)"></span>
                  </template>
                  <a-step title="老刘" description="2020-01-01" />
                  <a-step title="服务中" description="服务中" />
                  <a-step title="未开始" description="未开始" />
                </a-steps>
              </el-col>
            </el-row>
            <el-row :gutter="10" style="margin-top:50px;">
              <el-col :span="4" :offset="2">服务中</el-col>
              <el-col :span="4">已完成</el-col>
              <el-col :span="4">已终止</el-col>
              <el-col :span="4">交接中</el-col>
              <el-col :span="4">未开始</el-col>
            </el-row>
            <el-row :gutter="10" v-if="!isAgentOrder(task)">
              <el-col>
                <el-button type="primary" round>进入流程 ></el-button>
              </el-col>
            </el-row>
            <el-row :gutter="10" v-if="isAgentOrder(task)">
              <el-col>
                <el-button type="primary" round>进入流程 ></el-button>
              </el-col>
            </el-row>
          </el-card>
        </el-tab-pane>
      </el-tabs>
      <div style="margin-top: 20px">
        <el-pagination
          background
          :page-size="2"
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

const isAgentOrder = longTerm => longTerm === null || longTerm === 0

export default {
  metaInfo: {
    title: '订单列表'
  },
  data () {
    return {
      advancedSearchDialogVisible: false,
      getFlowForm: {
        type: '',
        limit: 2,
        page: 1
      },
      flowLabels: [],
      year: [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12
      ]
    }
  },
  methods: {
    handleAdvancedSearch () {
      this.advancedSearchDialogVisible = true
    },
    handleCurrentChangeClick (currentPage) {
      this.getFlowForm.page = currentPage
      this.getFlows()
    },
    handleTabClick () {
      this.getFlowForm.page = 1
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
    getStepsIconClass (description) {
      switch (description) {
        case '未开始': {
          return 'custom-wait'
        }
        case '已完成': {
          return 'custom-finish'
        }
        case '服务中': {
          return 'custom-process'
        }
        case '交接中': {
          return 'custom-jiaojie-zhong'
        }
      }
    },
    getTaskFlows (taskFlows) {
      const availableTaskFlows = taskFlows.map(({ taxDate }) => ({
        month: getMonth(taxDate),
        monthLabel: `${getMonth(taxDate)} 月`,
        status: '已完成'
      })).sort((x, y) => x.month - y.month)
      return this.year.map(month => {
        const awailableTaskFlow = availableTaskFlows.filter(availableTaskFlow => availableTaskFlow.month === month)[0]
        if (awailableTaskFlow !== undefined) {
          return awailableTaskFlow
        }
        return {
          month,
          monthLabel: `${month} 月`,
          status: '未开始'
        }
      })
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
}

.agent-order-steps {
  .ant-steps-item-description {
    display: block;
  }
}
</style>
