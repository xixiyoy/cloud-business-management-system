<template>
  <div class="view-account">
    <p class="view-account-title">公司名称</p>
    <div class="dividing-line"></div>
    <el-collapse v-model="activeNames">
      <div class="">
        <img class="base-information-icon" src="../assets/images/newAccountPage/arrow.png" alt="">
        <el-collapse-item title="基础信息" name="1">
          <el-form label-width="100px" class="demo-ruleForm">
            <el-row :gutter="1">
              <el-col :span="20">
                <el-button type="primary" round>{{account.customerStatusName}}</el-button>
              </el-col>
              <el-col :span="4">
                <el-button @click="handleModifyViewAccount">修改内容</el-button>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="客户名称: " prop="name">
                  <span>{{account.customerName}}</span>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="联系人: " prop="name">
                  <span>{{account.customerLinkerName}}</span>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="社会信用代码: " prop="name">
                  <span>{{account.creditCode}}</span>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="联系电话: " prop="name">
                  <span>{{account.customerLinkerPhone}}</span>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="企业电话: " prop="name">
                  <span>{{account.customerBusinessPhone}}</span>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="客户等级: " prop="name">
                  <span>{{account.customerLevelName}}</span>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="联系地址: " prop="name">
                  <span>{{account.customerAddress}}</span>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="企业邮箱: " prop="name">
                  <span>{{account.customerBusinessEmail}}</span>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="客户来源: " prop="region">
                  <span>{{account.customerFromWay}}</span>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="客户代表: " prop="name">
                  <span>{{account.customerRelUserName}}</span>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="创建人: " prop="region">
                  <span>{{account.createUserName}}</span>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="创建日期: " prop="name">
                  <span>{{account.createTime}}</span>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="12">
                <el-form-item label="备注: " prop="pass">
                  <span>{{account.remark}}</span>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </el-collapse-item>
        <img class="base-information-icon" src="../assets/images/newAccountPage/arrow.png" alt="">
        <el-collapse-item title="文档资料: " name="2">
          <el-form label-width="120px" class="demo-ruleForm">
            <el-row>
              <el-col :span="12">
                <el-form-item label="身份证复印件: " prop="name">
                  <img v-for="(image,index) in idCardImages" :key="index" :src="image" alt="">
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="营业执照复印件: " prop="name">
                  <img v-for="(image,index) in businessLicenseImages" :key="index" :src="image" alt="">
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="12">
                <el-form-item label="合同原件: " prop="name">
                  <img v-for="(image,index) in contractImages" :key="index" :src="image" alt="">
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </el-collapse-item>
        <img v-show="isAgentReport" class="base-information-icon" src="../assets/images/newAccountPage/arrow.png" alt="">
        <el-collapse-item title="财税信息" name="3">
          <el-form label-width="100px" class="demo-ruleForm">
            <el-row>
              <el-col :span="24">
                <el-button type="primary">代理记账</el-button>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="月服务费: " prop="name">
                  <span>{{ account.newestTask.price }}</span>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="服务周期: " prop="name">
                  <span>{{account.newestTask.number}}</span>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="服务开始月: " prop="name">
                  <span>{{account.newestTask.serviceStartMonth}}</span>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="剩余赠送月: " prop="name">
                  <span>{{ getLeftGifts(account.newestTask) }}</span>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="剩余服务月: " prop="name">
                  <span>{{ getLeftMonths(account.newestTask) }}</span>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="当前报税期: " prop="name">
                  <span>{{account.newestTask.taxDate}}</span>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="付费周期: " prop="name">
                  <span>{{account.newestTask.payCycle}}</span>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </el-collapse-item>
        <img class="base-information-icon" src="../assets/images/newAccountPage/arrow.png" alt="">
        <el-collapse-item title="流程列表: " name="4">
          <el-table
            :data="account.taskList"
            style="width: 100%">
            <el-table-column
              type="index">
            </el-table-column>
            <el-table-column
              prop="productName"
              :show-overflow-tooltip="true"
              label="产品名称">
            </el-table-column>
            <el-table-column
              prop="taskNo"
              :show-overflow-tooltip="true"
              label="订单编号">
            </el-table-column>
            <el-table-column
              prop="taskStatusName"
              label="服务状态">
            </el-table-column>
            <el-table-column
              prop="completeProgress"
              label="流程进度">
            </el-table-column>
            <el-table-column
              prop="price"
              label="服务金额">
            </el-table-column>
            <el-table-column
              prop="relUserName"
              label="负责人">
            </el-table-column>
            <el-table-column
              fixed="right"
              label="操作"
              width="100">
                <template slot-scope="scope">
                  <el-button size="mini" type="text" @click="handleEditTaskButtonClick(scope.$index)">查看</el-button>
                  <el-dialog
                    :visible="editTaskDialogVisible"
                    width="50%"
                    append-to-body>
                    <el-form>
                      <el-row :gutter="20">
                        <el-col :span="12">
                          <el-form-item label="产品名称：">
                            <span>{{account.taskList.productName}}</span>
                          </el-form-item>
                        </el-col>
                        <el-col :span="12">
                          <el-form-item label="财税顾问: ">
                            <span>{{account.taskList.relUserName}}</span>
                          </el-form-item>
                        </el-col>
                      </el-row>
                      <el-row :gutter="20">
                        <el-col :span="12">
                          <el-form-item label="服务单价: ">
                            <span>{{account.taskList.price}}</span>
                          </el-form-item>
                        </el-col>
                        <el-col :span="12">
                          <el-form-item label="会计助理: ">
                            <span>{{account.taskList.relHelpUserName}}</span>
                          </el-form-item>
                        </el-col>
                      </el-row>
                      <el-row :gutter="20">
                        <el-col :span="12">
                          <el-form-item label="服务周期: ">
                            <span>{{account.taskList.number}}</span>
                          </el-form-item>
                        </el-col>
                        <el-col :span="12">
                          <el-form-item label="赠送: ">
                            <span>{{account.taskList.giftNumber}}</span>
                          </el-form-item>
                        </el-col>
                      </el-row>
                      <el-row>
                        <el-col>
                          <el-form-item label="付费方式: ">
                            <span>{{account.taskList.payCycle}}</span>
                          </el-form-item>
                        </el-col>
                      </el-row>
                    </el-form>
                    <span slot="footer" class="dialog-footer">
                      <el-button @click="editTaskDialogVisible = false">取 消</el-button>
                    </span>
                  </el-dialog>
                </template>
            </el-table-column>
          </el-table>
        </el-collapse-item>
        <img v-show="isAgentReport" class="base-information-icon" src="../assets/images/newAccountPage/arrow.png" alt="">
        <el-collapse-item title="代帐收费: " name="5" v-show="isAgentReport">
          <el-table
            style="width: 100%">
            <el-table-column
              type="index">
            </el-table-column>
            <el-table-column
              prop="date"
              label="产品名称">
            </el-table-column>
            <el-table-column
              prop="name"
              :show-overflow-tooltip="true"
              label="订单编号">
            </el-table-column>
            <el-table-column
              prop="address"
              label="服务状态">
            </el-table-column>
            <el-table-column
              prop="address"
              label="流程进度">
            </el-table-column>
            <el-table-column
              prop="address"
              label="服务金额">
            </el-table-column>
            <el-table-column
              prop="address"
              label="负责人">
            </el-table-column>
            <el-table-column
              fixed="right"
              label="操作"
              width="100">
              <template>
                <el-button type="text" size="small">查看</el-button>
              </template>
            </el-table-column>
          </el-table>
          <div class="add-products-model">
            <el-dialog title="代帐报表" width="40%">
              <div slot="footer" class="dialog-footer">
                <el-button type="primary">确认</el-button>
                <el-button>取消</el-button>
              </div>
            </el-dialog>
          </div>
        </el-collapse-item>
      </div>
    </el-collapse>
  </div>
</template>
<script>
import { mapState } from 'vuex'

export default {
  metaInfo: {
    title: '客户详情'
  },
  data () {
    return {
      customerId: 0,
      activeNames: ['1'],
      idCardImages: [''],
      businessLicenseImages: [''],
      contractImages: [''],
      processList: [],
      editTaskDialogVisible: false
    }
  },
  mounted () {
    this.customerId = this.$route.query.customerId
    this.getCustomer()
    this.getUsers()
  },
  computed: {
    isAgentReport () {
      return this.account.taskList.filter(process => process.productName === '代理记账').length > 0
    },
    ...mapState({
      account: state => state.customer.customer,
      users: state => state.sysUser.users.list
    })
  },
  methods: {
    handleViewAgentClick (row) {
      this.$router.push({ path: '/agent-bookkeeping', query: { accountName: row.accountName } })
    },
    handleModifyViewAccount () {
      this.$router.push({ path: '/modify-account-detail', query: { customerId: this.customerId } })
    },
    // 写一个获取id 得方法
    async getCustomer () {
      await this.$store.dispatch('getCustomerById', this.customerId)
    },
    getLeftGifts (newestTask) {
      const { giftNumber, number, completeCount } = newestTask
      if (completeCount < number) {
        return giftNumber
      }
      return giftNumber - (number - completeCount)
    },
    getLeftMonths (newestTask) {
      const { number, completeCount } = newestTask
      return completeCount - number
    },
    handleEditTaskButtonClick (index) {
      const task = this.account.taskList[index]
      this.account.taskList = task
      this.editTaskDialogVisible = true
    },
    getUsers () {
      this
        .$store
        .dispatch(
          'getUserList',
          this.getUsersForm
        )
    }
  }
}
</script>

<style scoped>
.view-account{
  width: 94%;
  margin: 0 auto;
  margin-top: 40px;
  height: 150%;
}
.view-account-title{
  font-size: 20px;
  color: #333;
  text-align: left;
  line-height: 10px;
}
.dividing-line{
  width: 100%;
  height: 1px;
  background-color: #DCDFE6;
  margin-top: 25px;
}
.base-information-icon {
    margin-top: 13px;
    width: 17px;
    padding-right: 10px;
    float: left;
}
.el-form-item {
    margin-bottom: 0px;
}
</style>
