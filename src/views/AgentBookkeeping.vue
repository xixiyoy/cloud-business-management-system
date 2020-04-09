<template>
  <div class="agent-bookkeeping">进入流程后的页面
    <p class="new-account-page-title">代理记账<span>订单编号: {{agentOrder.baseInformation.task.taskNo}}</span></p>
    <div class="dividing-line"></div>
    <div class="agent-bookkeeping-main">
      <div class="agent-flow"></div>
      <el-collapse style="margin-top:40px;">
      <div class="">
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
                  <span>{{agentOrder.baseInformation.accountInformation.surplusGiftNum}}</span>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="12">
                <el-form-item label="剩余服务月: " prop="name">
                  <span>{{agentOrder.baseInformation.accountInformation.surplusNum}}</span>
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
          <el-form :model="form">
            <el-form-item label="新负责人" required="">
              <el-select placeholder="请选择">
                <el-option label="一" value="shanghai"></el-option>
                <el-option label="二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="交接备注: ">
              <el-input autocomplete="off"></el-input>
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
          width="30%"
          :before-close="handleClose">
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
          <el-form :model="form">
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
          <el-form :model="form">
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
      taskId: 0
    }
  },
  computed: {
    ...mapState({
      agentOrder: state => state.task.task
    })
  },
  methods: {
    async getAgentOrderDetail () {
      this.$store.dispatch('getTaskById', this.getTaskDetail)
    }
  },
  mounted () {
    this.taskId = this.$route.query.taskId
    this.getAgentOrderDetail()
  }
}
</script>

<style scoped>
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
</style>
