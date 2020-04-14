<template>
  <div class="agent-bookkeeping">进入流程后的页面
    <p class="new-account-page-title">代理记账<span>订单编号: {{agentOrder.baseInformation.task.taskNo}}</span></p>
    <div class="dividing-line"></div>
    <div class="agent-bookkeeping-main">
      <!-- <div class="agent-flow"></div> -->
      <el-collapse style="margin-top:40px;">
      <div class="">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <div style="float: right; padding: 3px 0">
                <el-date-picker
                  align="right"
                  type="year"
                  placeholder="选择年">
                </el-date-picker>
              </div>
            </div>
            <el-row :gutter="20">
              <el-col>
                <a-steps :current="0" class="four-steps">
                  <template slot="progressDot" slot-scope="{ description }">
                    <span class="ant-steps-icon-dot" :class="getStepsIconClass(description)"></span>
                  </template>
                  <a-step :title="taskFlow.monthLabel" :description="taskFlow.status" v-for="(taskFlow, index) in getTaskFlows(agentOrder.taskFlowList)" :key="index"/>
                </a-steps>
              </el-col>
            </el-row>
            <el-row :gutter="10" style="margin-top:50px;">
              <el-col :span="4" :offset="2"><i class="green"></i>服务中</el-col>
              <el-col :span="4"><i class="blue"></i>已完成</el-col>
              <el-col :span="4"><i class="red"></i>已终止</el-col>
              <el-col :span="4"><i class="warn"></i>交接中</el-col>
              <el-col :span="4"><i class="info"></i>未开始</el-col>
            </el-row>
          </el-card>
        <img class="base-information-icon" src="../assets/images/newAccountPage/arrow.png" alt="">
        <el-collapse-item title="基础信息" name="1">
          <el-form ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-row>
              <el-col :span="12">
                <el-form-item label="任务状态: " prop="name">
                  <span>{{agentOrder.baseInformation.task.taskStatusName}}</span>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="服务金额: " prop="name">
                  <span>{{agentOrder.baseInformation.task.price}}</span>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="12">
                <el-form-item label="客户名称: " prop="name">
                  <span>{{agentOrder.baseInformation.customer.customerName}}</span>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="联系电话: " prop="name">
                  <span>{{agentOrder.baseInformation.customer.customerLinkerPhone}}</span>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="12">
                <el-form-item label="联系人: " prop="name">
                  <span>{{agentOrder.baseInformation.customer.customerLinkerName}}</span>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="客户代表: " prop="name">
                  <span>{{agentOrder.baseInformation.customer.customerRelUserName}}</span>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="12">
                <el-form-item label="社会信用代码: " prop="name">
                  <span>{{agentOrder.baseInformation.customer.creditCode}}</span>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="会计助理: " prop="name">
                  <span>{{agentOrder.baseInformation.task.relHelpUserName}}</span>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="24">
                <el-form-item label="财税顾问: " prop="region">
                  <span>{{agentOrder.baseInformation.task.relUserName}}</span>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="12">
                <el-form-item label="创建人: " prop="pass">
                  <span>{{agentOrder.baseInformation.customer.createUserName}}</span>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="创建时间: " prop="pass">
                  <span>{{agentOrder.baseInformation.customer.createUTime}}</span>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </el-collapse-item>
        <img class="base-information-icon" src="../assets/images/newAccountPage/arrow.png" alt="">
        <el-collapse-item title="代帐信息" name="2">
          <el-form ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-row>
              <el-col :span="12">
                <el-form-item label="月服务费: " prop="name">
                  <span>{{agentOrder.baseInformation.task.price}}</span>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="服务周期: " prop="name">
                  <span>{{agentOrder.baseInformation.task.number}}</span>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="12">
                <el-form-item label="服务开始月: " prop="name">
                  <span>{{agentOrder.baseInformation.task.serviceStartMonth}}</span>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="赠送月: " prop="name">
                  <span>{{agentOrder.accountInformation.surplusGiftNum}}</span>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="12">
                <el-form-item label="剩余服务月: " prop="name">
                  <span>{{agentOrder.accountInformation.surplusNum}}</span>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="当前报税期: " prop="name">
                  <span>{{agentOrder.baseInformation.task.taxDate}}</span>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </el-collapse-item>
        <img class="base-information-icon" src="../assets/images/newAccountPage/arrow.png" alt="">
        <el-collapse-item title="交接信息: " name="3">
          <el-table
            :data="agentOrder.baseInformation.relList"
            style="width: 100%">
            <el-table-column
              label="操作时间"
              prop="createTime">
            </el-table-column>
            <el-table-column
              label="报税期"
              prop="taxDate">
            </el-table-column>
            <el-table-column
              label="操作人"
              prop="createUserName">
            </el-table-column>
            <el-table-column
              label="类型"
              prop="type">
            </el-table-column>
            <el-table-column
              label="备注"
              prop="remark">
            </el-table-column>
            <el-table-column
              label="交接资料"
              prop="relNotice">
            </el-table-column>
          </el-table>
        </el-collapse-item>
        <img class="base-information-icon" src="../assets/images/newAccountPage/arrow.png" alt="">
        <el-collapse-item title="环节备注: " name="4">
          <el-table
            :data="agentOrder.baseInformation.taskFlowList"
            style="width: 100%">
            <el-table-column
              label="操作时间"
              prop="createTime">
            </el-table-column>
            <el-table-column
              label="报税期"
              prop="taxDate">
            </el-table-column>
            <el-table-column
              label="财税顾问"
              prop="relUserName">
            </el-table-column>
            <el-table-column
              label="备注"
              prop="remark">
            </el-table-column>
          </el-table>
        </el-collapse-item>
      </div>
    </el-collapse>
    </div>
    <div class="agent-bookkeeping-slide">
      <el-row>
        <el-button @click="HandoverTaskDialogFormVisible = true">交接任务</el-button>
        <el-dialog title="交接任务: " :visible.sync="HandoverTaskDialogFormVisible" width="40%">
          <el-form>
            <el-form-item label="新负责人" required="">
              <el-select placeholder="请选择" v-model="getAllUser.list">
                <el-option
                v-for="item in list"
                :key="item.label"
                :label="item.label"
                :value="item.label"
                ></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="交接备注: ">
              <el-input autocomplete="off" v-model="transferTaskForm.remark"></el-input>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button type="primary" @click="HandoverTaskDialogFormVisible = false">确 定</el-button>
            <el-button @click="HandoverTaskDialogFormVisible = false">取 消</el-button>
          </div>
        </el-dialog>
      </el-row><br>
      <el-row>
        <el-button @click="WithdrawTaskDialogVisible = true">撤回任务</el-button>
        <el-dialog
          title="提示"
          :visible.sync="WithdrawTaskDialogVisible"
          width="30%">
          <span>确定要撤回交接吗?</span>
          <span slot="footer" class="dialog-footer">
            <el-button type="primary" @click="WithdrawTaskDialogVisible = false">确 认</el-button>
            <el-button @click="WithdrawTaskDialogVisible = false">取 消</el-button>
          </span>
        </el-dialog>
      </el-row><br>
      <el-row>
        <el-button  @click="receiveOuterVisible = true">接收任务</el-button>
        <el-dialog title="接收任务" :visible.sync="receiveOuterVisible" width="40%">
          <el-dialog
            width="30%"
            title="退回任务"
            :visible.sync="innerVisible"
            append-to-body>
            <el-form ref="ruleForm" label-width="100px" class="demo-ruleForm">
              <el-form-item label="退回备注: " prop="desc">
                <el-input type="textarea"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">确 认</el-button>
                <el-button @click="resetForm('ruleForm')">取 消</el-button>
              </el-form-item>
            </el-form>
          </el-dialog>
          <el-form ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="交接人: " prop="desc">
              <span>钱磊</span>
            </el-form-item>
            <el-form-item label="交接留言: " prop="desc">
              <el-input></el-input>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="innerVisible = true" style="float:left;">退回任务</el-button>
            <el-button type="primary" @click="receiveOuterVisible = false">确 认</el-button>
            <el-button @click="receiveOuterVisible = false">取 消</el-button>
          </div>
        </el-dialog>
      </el-row><br>
      <el-row>
        <el-button @click="carryOutTaskDialogFormVisible = true">完成记账</el-button>
        <el-dialog title="开始记账" :visible.sync="carryOutTaskDialogFormVisible" width="40%">
          <el-form>
            <el-form-item label="备注: ">
              <el-input autocomplete="off"></el-input>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button type="primary" @click="carryOutTaskDialogFormVisible = false">确 定</el-button>
            <el-button @click="carryOutTaskDialogFormVisible = false">取 消</el-button>
          </div>
        </el-dialog>
      </el-row><br>
      <el-row>
        <el-button @click="terminationTaskDialogFormVisible = true">终止任务</el-button>
        <el-dialog title="请确认是否种植任务?" :visible.sync="terminationTaskDialogFormVisible" width="40%">
          <el-form>
            <el-form-item label="终止原因: " required="">
              <el-input autocomplete="off" type="textarea"></el-input>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="terminationTaskDialogFormVisible = false">取 消</el-button>
            <el-button type="danger" @click="terminationTaskDialogFormVisible = false">确 定</el-button>
          </div>
        </el-dialog>
      </el-row>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'

const getMonth = taxDate => new Date(taxDate).getMonth() + 1

export default {
  metaInfo: {
    title: '订单详情'
  },
  data () {
    return {
      HandoverTaskDialogFormVisible: false,
      WithdrawTaskDialogVisible: false,
      receiveOuterVisible: false,
      innerVisible: false,
      carryOutTaskDialogFormVisible: false,
      terminationTaskDialogFormVisible: false,
      taskId: 0,
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
      ],
      transferTaskForm: {
        taskId: 0,
        receiveUserId: 0,
        receiveUserName: '',
        remark: ''
      },
      getUserListForm: {},
      getCancelTaskForm: {
        taskId: 1
      },
      getreceiveTaskForm: {
        taskId: 1,
        remark: ''
      },
      completeTaskForm: {
        taskId: 1,
        remark: ''
      }
    }
  },
  computed: {
    ...mapState({
      agentOrder: state => state.task.task,
      allUser: state => state.sysUser.users,
      // 撤回任务
      cancelTask: state => state.task.cancelTask,
      // 接收任务
      receiveTask: state => state.task.receiveTask,
      // 完成记账
      completeTask: state => state.task.completeTask,
      // 终止任务
      stopTask: state => state.task.stopTask
    })
  },
  methods: {
    async getAgentOrderDetail () {
      this.$store.dispatch('getTaskById', this.taskId)
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
      console.log(taskFlows)
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
    },
    // 获取所有用户列表
    getAllUser () {
      this.$store.dispatch('getUserList', this.getUserListForm)
    },
    // 撤回任务
    getCancelTask () {
      this.$store.dispatch('getCancelTask', this.getCancelTaskForm)
    },
    // 接收任务
    getReceiveTask () {
      this.$store.dispatch('getReceiveTask', this.getreceiveTaskForm)
    },
    // 完成记账
    getCompleteTask () {
      this.$store.dispatch('getCompleteTask', this.completeTaskForm)
    },
    // 终止任务
    getStopTask () {
      this.$store.dispatch('getStopTask', this.stopTaskForm)
    }
  },
  mounted () {
    this.taskId = this.$route.query.taskId
    this.getAgentOrderDetail()
    this.getAllUser()
    this.getCancelTask()
    this.getReceiveTask()
    this.getCompleteTask()
    this.getStopTask()
  }
}
</script>

<style lang="scss">
.agent-bookkeeping{
  width: 94%;
  margin: 0 auto;
  margin-top: 40px;
  height: 150%;
}
.agent-bookkeeping-main{
  width: 80%;
  float: left;
}
.agent-bookkeeping-slide{
  width: 18%;
  float: right;
  margin-top: 40px;
}
.dividing-line{
  width: 100%;
  height: 1px;
  background-color: #DCDFE6;
  margin-top: 25px;
}
.agent-flow{
  width: 100%;
  margin-top: 40px;
  background-color: #F2F2F2;
  height: 155px;
}
.base-information-icon{
    margin-top: 13px;
    width: 17px;
    padding-right: 10px;
    float: left;
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
