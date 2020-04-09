<template>
  <div class="one-time-accounting">一次性记账的进入流程后的页面
    <p class="one-time-accounting-title">企业变更-普通<span>订单编号: cs-2020010101</span></p>
    <div class="dividing-line"></div>
    <div class="one-time-accounting-main">
      <!-- <div class="agent-flow"></div> -->
      <div>
        <el-card class="box-card">
          <el-row>
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
        </el-card>
      </div>
      <el-collapse style="margin-top:40px;">
      <div class="">
        <img class="base-information-icon" src="../assets/images/newAccountPage/arrow.png" alt="">
        <el-collapse-item title="基础信息" name="1">
          <el-form ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-row>
              <el-col :span="12">
                <el-form-item label="任务状态: " prop="name">
                  <span>服务中</span>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="服务金额: " prop="name">
                  <span>2500.00</span>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="12">
                <el-form-item label="客户名称: " prop="name">
                  <span>公司名</span>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="联系电话: " prop="name">
                  <span>13109879871</span>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="12">
                <el-form-item label="联系人: " prop="name">
                  <span>张三</span>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="客户代表: " prop="name">
                  <span>邓</span>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="12">
                <el-form-item label="社会信用代码: " prop="name">
                  <span>123456789</span>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="备注: " prop="name">
                  <span></span>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="24">
                <el-form-item label="工商专员: " prop="region">
                  <span>朱燕</span>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="12">
                <el-form-item label="创建人: " prop="pass">
                  <span>老刘</span>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="创建时间: " prop="pass">
                  <span>2020-01-04</span>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </el-collapse-item>
        <img class="base-information-icon" src="../assets/images/newAccountPage/arrow.png" alt="">
        <el-collapse-item title="交接信息: " name="3">
          <el-table
            :data="tableData"
            style="width: 100%">
            <el-table-column
              label="操作时间">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top">
                  <p>姓名: {{ scope.row.name }}</p>
                  <p>住址: {{ scope.row.address }}</p>
                  <div slot="reference" class="name-wrapper">
                    <el-tag size="medium">{{ scope.row.name }}</el-tag>
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              label="操作人">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top">
                  <p>姓名: {{ scope.row.name }}</p>
                  <p>住址: {{ scope.row.address }}</p>
                  <div slot="reference" class="name-wrapper">
                    <el-tag size="medium">{{ scope.row.name }}</el-tag>
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              label="类型">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top">
                  <p>姓名: {{ scope.row.name }}</p>
                  <p>住址: {{ scope.row.address }}</p>
                  <div slot="reference" class="name-wrapper">
                    <el-tag size="medium">{{ scope.row.name }}</el-tag>
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              label="备注">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top">
                  <p>姓名: {{ scope.row.name }}</p>
                  <p>住址: {{ scope.row.address }}</p>
                  <div slot="reference" class="name-wrapper">
                    <el-tag size="medium">{{ scope.row.name }}</el-tag>
                  </div>
                </el-popover>
              </template>
            </el-table-column>
          </el-table>
        </el-collapse-item>
      </div>
    </el-collapse>
    </div>
    <div class="one-time-accounting-slide">
      <el-row>
        <el-button @click="carryOutTaskDialogFormVisible = true">开始填报</el-button>
        <el-dialog title="企业变更" :visible.sync="carryOutTaskDialogFormVisible" width="40%">
          <el-form :model="form">
            <el-form-item label="备注: " required="">
              <el-input autocomplete="off" type="textarea"></el-input>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button type="primary" @click="carryOutTaskDialogFormVisible = false">确 定</el-button>
            <el-button @click="carryOutTaskDialogFormVisible = false">取 消</el-button>
          </div>
        </el-dialog>
      </el-row><br>
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
        <el-button @click="terminationTaskDialogFormVisible = true">终止任务</el-button>
        <el-dialog title="请确认是否终止任务?" :visible.sync="terminationTaskDialogFormVisible" width="40%">
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
      terminationTaskDialogFormVisible: false
    }
  },
  methods: {
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
    }
  }
}
</script>

<style lang="scss">
.one-time-accounting{
  width: 94%;
  margin: 0 auto;
  margin-top: 40px;
  height: 150%;
}
.one-time-accounting-main{
  width: 80%;
  float: left;
}
.one-time-accounting-slide{
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
</style>
