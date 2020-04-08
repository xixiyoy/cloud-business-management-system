<template>
  <div class="modify-view-account">
    <p class="modify-view-account-title">公司名称</p>
    <div class="dividing-line"></div>
    <el-collapse v-model="activeNames">
      <div>
        <img class="base-information-icon" src="../assets/images/newAccountPage/arrow.png" alt="">
        <el-collapse-item title="基础信息" name="1">
          <el-form ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-row>
              <el-col :span="20">
                <el-button type="primary" round>{{updateCustomerForm.newestTask.taskStatusName}}</el-button>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="客户名称: " prop="name">
                  <el-input v-model="updateCustomerForm.customerName"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="联系人: " prop="name">
                  <el-input v-model="updateCustomerForm.customerLinkerName" disabled></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="社会信用代码: " prop="name">
                  <el-input v-model="updateCustomerForm.creditCode" disabled></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="联系电话: " prop="name">
                  <el-input v-model="updateCustomerForm.customerLinkerPhone" disabled></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="企业电话: " prop="name">
                  <el-input v-model="updateCustomerForm.customerBusinessPhone"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="客户等级: " prop="name">
                  <el-input v-model="updateCustomerForm.customerLevelName"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="联系地址: " prop="name">
                  <el-input v-model="updateCustomerForm.customerAddress"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="企业邮箱: " prop="name">
                  <el-input v-model="updateCustomerForm.customerBusinessEmail"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="客户来源: " prop="region">
                  <el-input v-model="updateCustomerForm.customerFromWay"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="客户代表: " prop="name">
                  <el-input v-model="updateCustomerForm.customerRelUserName"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="12">
                <el-form-item label="备注: " prop="pass">
                  <el-input v-model="updateCustomerForm.remark"></el-input>
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
        <img class="base-information-icon" src="../assets/images/newAccountPage/arrow.png" alt="">
        <el-collapse-item title="财税信息" name="3">
          <el-form ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-row>
              <el-col :span="24">
                <el-button type="primary">{{updateCustomerForm.newestTask.productName}}</el-button>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="月服务费: " prop="name">
                  <el-input v-model="updateCustomerForm.newestTask.price"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="服务周期: " prop="name">
                  <el-input v-model="updateCustomerForm.newestTask.number"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="服务开始月: " prop="name">
                  <el-input v-model="updateCustomerForm.newestTask.serviceStartMonth"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="剩余赠送月: " prop="name">
                  <el-input></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="剩余服务月: " prop="name">
                  <el-input></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="当前报税期: " prop="name">
                  <el-input></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="付费周期: " prop="name">
                  <el-input></el-input>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </el-collapse-item>
        <img class="base-information-icon" src="../assets/images/newAccountPage/arrow.png" alt="">
        <el-collapse-item title="流程列表: " name="4">
          <el-table
            :data="updateCustomerForm.taskList"
            style="width: 100%">
            <el-table-column
              prop="productName"
              label="产品名称">
            </el-table-column>
            <el-table-column
              prop="taskNo"
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
                  <el-button @click="handlemodify-viewAgentClick(scope.row)" type="text" size="small">查看</el-button>
                </template>
              <template>
                <el-button type="text" size="small">查看</el-button>
              </template>
            </el-table-column>
          </el-table>
          <div class="add-products-model">
            <el-button class="add-account-products" @click="handleAddNewProduct"> + 添加产品</el-button>
            <el-dialog title="添加产品" width="40%" :visible.sync="addProductDialogVisible">
              <el-form label-position="left">
                <el-row>
                  <el-col :span="12">
                  <el-form-item
                    label="产品名称: "
                    label-width="85px !important"
                    class="add-product-item" required="">
                    <el-input class="add-product-input"></el-input>
                  </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <el-form-item label="财税顾问: " label-width="85px !important" style="margin-left:0px;" required="">
                      <el-input class="add-product-input"></el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="12">
                  <el-form-item
                    label="服务单价: "
                    label-width="85px !important"
                    class="add-product-item"
                    required="">
                    <el-input class="add-product-input"></el-input>
                  </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <el-form-item label="会计助理: " label-width="85px !important" style="margin-left:0px;">
                      <el-input class="add-product-input"></el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="12">
                  <el-form-item
                    label="赠送: "
                    label-width="85px !important"
                    class="add-product-item">
                    <el-input class="add-product-input"></el-input>
                  </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <el-form-item label="付费周期: " label-width="85px !important" style="margin-left:0px;" required="">
                      <el-input class="add-product-input"></el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="12">
                    <el-form-item
                      label="服务周期: "
                      label-width="85px !important"
                      class="add-product-item"
                      required="">
                      <el-input class="add-product-input"></el-input>
                    </el-form-item>
                    </el-col>
                  <el-col :span="12"></el-col>
                </el-row>
              </el-form>
              <div slot="footer" class="dialog-footer">
                <el-button type="primary">确认</el-button>
                <el-button>取消</el-button>
              </div>
            </el-dialog>
          </div>
        </el-collapse-item>
        <img v-show="isAgentReport" class="base-information-icon" src="../assets/images/newAccountPage/arrow.png" alt="">
        <el-collapse-item title="代帐报表: " name="5" v-show="isAgentReport">
          <el-table
            style="width: 100%">
            <el-table-column
              prop="date"
              label="产品名称">
            </el-table-column>
            <el-table-column
              prop="name"
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
            <el-dialog title="代帐报表" width="40%" :visible.sync="addProductDialogVisible">
              <div slot="footer" class="dialog-footer">
                <el-button type="primary" @click="handleUpdateCustomerButtonClick">确认</el-button>
                <el-button>取消</el-button>
              </div>
            </el-dialog>
          </div>
        </el-collapse-item>
      </div>
    </el-collapse>
    <div>
      <el-button type="primary">保 存</el-button>
      <el-button>取 消</el-button>
    </div>
  </div>
</template>
<script>
import { Message } from 'element-ui'
import { mapState } from 'vuex'

export default {
  metaInfo: {
    title: '修改详情'
  },
  data () {
    return {
      customerId: 1,
      activeNames: ['1'],
      idCardImages: [''],
      businessLicenseImages: [''],
      contractImages: [''],
      updateCustomerForm: {
        customerId: 15,
        tenantId: 1,
        customerName: '企享',
        creditCode: '9184',
        customerFromWay: '来源',
        customerFromDetail: '详细来源',
        customerLinkerName: '客户联系人',
        customerLinkerPhone: '18913932254',
        customerBusinessPhone: null,
        customerBusinessEmail: null,
        customerAddress: null,
        customerStatusValue: '0',
        customerStatusName: '服务中',
        customerLevelValue: '0',
        customerLevelName: '普通',
        customerRelUserId: 3,
        customerRelUserName: '孟星驰',
        customerRelDeptId: 7,
        remark: null,
        createUserId: 2,
        createUserName: '孟星驰',
        createTime: '2020-03-18 10:42:58',
        updateUserId: 2,
        updateUserName: '孟星驰',
        updateTime: '2020-04-03 09:37:47',
        attribute1: null,
        attribute2: null,
        collectStatusValue: null,
        collectStatusName: null,
        royaltyStatusValue: null,
        royaltyStatusName: null,
        collectDate: null,
        royaltyDate: null,
        royaltyCoefficient: null,
        accountList: null,
        taskList: [
          {
            taskId: 10,
            longTerm: '0',
            tenant_id: null,
            customerId: 15,
            taskNo: 'DD20200318104257893',
            productId: 1,
            productName: '代理记账',
            price: 300,
            number: 2,
            giftNumber: 1,
            taxDate: '2020-06-01 00:00:00',
            completeCount: 4,
            taskStatusValue: '1',
            taskStatusName: '服务中',
            serviceStartMonth: '2020-03-01 00:00:00',
            relUserId: 3,
            relUserName: '胡歌',
            relDeptId: 7,
            relDeptName: null,
            relHelpUserId: null,
            relHelpUserName: null,
            transferredUserId: null,
            transferredUserName: null,
            receiveUserId: null,
            receiveUserName: null,
            createUserId: 2,
            createUserName: '孟星驰',
            createTime: '2020-03-18 10:42:58',
            updateUserId: null,
            updateUserName: null,
            updateTime: null,
            payCycle: '月付',
            completeProgress: '4+2/2+1',
            taskFlowList: null
          },
          {
            taskId: 11,
            longTerm: '1',
            tenant_id: null,
            customerId: 15,
            taskNo: 'DD20200318104257904',
            productId: 2,
            productName: '企业变更',
            price: 400,
            number: null,
            giftNumber: null,
            taxDate: '2020-03-01 00:00:00',
            completeCount: 0,
            taskStatusValue: '0',
            taskStatusName: '未开始',
            serviceStartMonth: null,
            relUserId: 3,
            relUserName: '胡歌',
            relDeptId: 7,
            relDeptName: null,
            relHelpUserId: null,
            relHelpUserName: null,
            transferredUserId: null,
            transferredUserName: null,
            receiveUserId: null,
            receiveUserName: null,
            createUserId: 2,
            createUserName: '孟星驰',
            createTime: '2020-03-18 10:42:58',
            updateUserId: null,
            updateUserName: null,
            updateTime: null,
            payCycle: null,
            completeProgress: null,
            taskFlowList: null
          }
        ],
        fileList: null,
        newestTask: {
          taskId: 10,
          longTerm: '0',
          tenant_id: null,
          customerId: 15,
          taskNo: 'DD20200318104257893',
          productId: 1,
          productName: '代理记账',
          price: 300,
          number: 2,
          giftNumber: 1,
          taxDate: '2020-06-01 00:00:00',
          completeCount: 4,
          taskStatusValue: '1',
          taskStatusName: '服务中',
          serviceStartMonth: '2020-03-01 00:00:00',
          relUserId: 3,
          relUserName: '胡歌',
          relDeptId: 7,
          relDeptName: null,
          relHelpUserId: null,
          relHelpUserName: null,
          transferredUserId: null,
          transferredUserName: null,
          receiveUserId: null,
          receiveUserName: null,
          createUserId: 2,
          createUserName: '孟星驰',
          createTime: '2020-03-18 10:42:58',
          updateUserId: null,
          updateUserName: null,
          updateTime: null,
          payCycle: '月付',
          completeProgress: null,
          taskFlowList: null
        }
      },
      addProductDialogVisible: false
    }
  },
  computed: {
    isAgentReport () {
      return this.account.taskList.filter(process => process.productName === '代理记账').length > 0
    },
    ...mapState({
      account: state => state.customer.customer
    })
  },
  methods: {
    async getCustomer () {
      await this.$store.dispatch('getCustomerById', this.customerId)
    },
    handleUpdateCustomerButtonClick () {
      this.$store.dispatch('updateCustomer', this.customer).then(({ data: response }) => {
        const { code, msg } = response
        if (code === 0) {
          Message({
            message: '保存成功',
            type: 'success'
          })
          this.$$route.push({ path: '/account' })
        } else {
          Message({
            message: msg,
            type: 'error'
          })
        }
      })
    },
    handleAddNewProduct () {
      this.addProductDialogVisible = true
    }
  },
  mounted () {
    this.customerId = this.$route.query.customerId
    this.getCustomer().then(() => {
      this.updateCustomerForm = this.account
    })
  }
}
</script>

<style scoped>
.modify-view-account{
  width: 94%;
  margin: 0 auto;
  margin-top: 40px;
  height: 150%;
}
.modify-view-account-title{
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
.add-products-model{
  padding-top: 25px;
}
</style>
