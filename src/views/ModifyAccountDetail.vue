<template>
  <div class="modify-view-account">
    <p class="modify-view-account-title">修改信息</p>
    <div class="dividing-line"></div>
    <el-collapse v-model="activeNames">
      <div>
        <img class="base-information-icon" src="../assets/images/newAccountPage/arrow.png" alt="">
        <el-collapse-item title="基础信息" name="1">
          <el-form ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-row>
              <el-col :span="20">
                <el-button type="primary" round>{{updateCustomerForm.customerStatusName}}</el-button>
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
              <el-collapse-item
              title="订单列表"
              name="task-table">
                <div class="tasks-table">
                  <el-table
                    :data="updateCustomerForm.taskList">
                    <el-table-column label="序号"></el-table-column>
                    <el-table-column label="产品名称" prop="productName"></el-table-column>
                    <el-table-column label="服务单价" prop="price"></el-table-column>
                    <el-table-column label="服务周期（月）" prop="number"></el-table-column>
                    <el-table-column label="赠送（月）" prop="giftNumber"></el-table-column>
                    <el-table-column label="总额">
                      <template slot-scope="scope">
                        {{ scope.row.price * scope.row.number }}
                      </template>
                    </el-table-column>
                    <el-table-column label="操作">
                      <template slot-scope="scope">
                        <el-button size="mini" type="text" @click="handleEditTaskButtonClick(scope.$index)">编辑</el-button>
                        <el-dialog
                          :visible="editTaskDialogVisible"
                          width="40%">
                          <el-form>
                            <el-row :gutter="20">
                              <el-col :span="12">
                                <el-form-item label="产品名称：">
                                  <el-input
                                    v-model="editTaskForm.productName"
                                    disabled>
                                  </el-input>
                                </el-form-item>
                              </el-col>
                              <el-col :span="12">
                                <el-form-item label="财税顾问：">
                                  <el-select
                                    v-model="editTaskForm.relUserId"
                                    @change="handleEditTaskFormFinancialAdviserSelectChange">
                                    <el-option
                                      v-for="user in users"
                                      :key="user.userId"
                                      :label="user.userName"
                                      :value="user.userId">
                                    </el-option>
                                  </el-select>
                                </el-form-item>
                              </el-col>
                            </el-row>
                            <el-row :gutter="20">
                              <el-col :span="12">
                                <el-form-item label="服务单价：">
                                  <el-input-number
                                    :min="0.01"
                                    :step="0.01"
                                    v-model="editTaskForm.price">
                                  </el-input-number>
                                </el-form-item>
                              </el-col>
                              <el-col :span="12">
                                <el-form-item label="会计助理">
                                  <el-select
                                    v-model="editTaskForm.relHelpUserId"
                                    @change="handleEditTaskFormAccountingAssistantSelectChange">
                                    <el-option
                                      v-for="user in users"
                                      :key="user.userId"
                                      :label="user.userName"
                                      :value="user.userId">
                                    </el-option>
                                  </el-select>
                                </el-form-item>
                              </el-col>
                            </el-row>
                            <el-row :gutter="20">
                              <el-col :span="12">
                                <el-form-item label="服务周期：">
                                  <el-input-number
                                    :min="1"
                                    :step="1"
                                    v-model="editTaskForm.number">
                                  </el-input-number>
                                </el-form-item>
                              </el-col>
                              <el-col :span="12">
                                <el-form-item label="赠送：">
                                  <el-input-number
                                    :min="0"
                                    :step="1"
                                    v-model="editTaskForm.giftNumber">
                                  </el-input-number>
                                </el-form-item>
                              </el-col>
                            </el-row>
                            <el-row>
                              <el-col>
                                <el-form-item label="付费方式：">
                                  <el-select
                                    v-model="editTaskForm.payCycle">
                                    <el-option
                                      v-for="(paymentMethod, index) in paymentMethods"
                                      :key="index"
                                      :label="paymentMethod"
                                      :value="paymentMethod">
                                    </el-option>
                                  </el-select>
                                </el-form-item>
                              </el-col>
                            </el-row>
                          </el-form>
                          <span slot="footer" class="dialog-footer">
                            <el-button @click="editTaskDialogVisible = false">取 消</el-button>
                            <el-button type="primary" @click="editTaskDialogVisible = false">确 定</el-button>
                          </span>
                        </el-dialog>
                        <el-button size="mini" type="text" @click="handleDeleteTaskButtonClick(scope.$index)">删除</el-button>
                      </template>
                    </el-table-column>
                  </el-table>
                  <el-button type="primary" style="width: 100%;" @click="handleAddTaskButtonClick">添加产品</el-button>
                  <el-dialog
                    :visible="addTaskDialogVisible"
                    width="50%">
                    <el-form>
                      <el-row :gutter="20">
                        <el-col :span="12">
                          <el-form-item label="产品名称：">
                            <el-select
                              v-model="addTaskForm.productId"
                              @change="handleAddTaskFormProductSelectChange">
                              <el-option
                                v-for="product in products"
                                :key="product.productId"
                                :label="product.productName"
                                :value="product.productId">
                              </el-option>
                            </el-select>
                          </el-form-item>
                        </el-col>
                        <el-col :span="12">
                          <el-form-item label="财税顾问：">
                            <el-select
                              v-model="addTaskForm.relUserId"
                              @change="handleAddTaskFormFinancialAdviserSelectChange">
                              <el-option
                                v-for="user in users"
                                :key="user.userId"
                                :label="user.userName"
                                :value="user.userId">
                              </el-option>
                            </el-select>
                          </el-form-item>
                        </el-col>
                      </el-row>
                      <el-row :gutter="20">
                        <el-col :span="12">
                          <el-form-item label="服务单价：">
                            <el-input-number
                              :min="0.01"
                              :step="0.01"
                              v-model="addTaskForm.price">
                            </el-input-number>
                          </el-form-item>
                        </el-col>
                        <el-col :span="12">
                          <el-form-item label="会计助理">
                            <el-select
                              v-model="addTaskForm.relHelpUserId"
                              @change="handleAddTaskFormAccountingAssistantSelectChange">
                              <el-option
                                v-for="user in users"
                                :key="user.userId"
                                :label="user.userName"
                                :value="user.userId">
                              </el-option>
                            </el-select>
                          </el-form-item>
                        </el-col>
                      </el-row>
                      <el-row :gutter="20">
                        <el-col :span="12">
                          <el-form-item label="服务周期：">
                            <el-input-number
                              :min="1"
                              :step="1"
                              v-model="addTaskForm.number">
                            </el-input-number>
                          </el-form-item>
                        </el-col>
                        <el-col :span="12">
                          <el-form-item label="赠送：">
                            <el-input-number
                              :min="0"
                              :step="1"
                              v-model="addTaskForm.giftNumber">
                            </el-input-number>
                          </el-form-item>
                        </el-col>
                      </el-row>
                      <el-row>
                        <el-col>
                          <el-form-item label="付费方式：">
                            <el-select
                              v-model="addTaskForm.payCycle">
                              <el-option
                                v-for="(paymentMethod, index) in paymentMethods"
                                :key="index"
                                :label="paymentMethod"
                                :value="paymentMethod">
                              </el-option>
                            </el-select>
                          </el-form-item>
                        </el-col>
                      </el-row>
                    </el-form>
                    <span slot="footer" class="dialog-footer">
                      <el-button @click="addTaskDialogVisible = false">取 消</el-button>
                      <el-button type="primary" @click="handleAddTaskDialogOkButtonClick">确 定</el-button>
                    </span>
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
        customerName: '',
        customerLinkerName: '',
        creditCode: '',
        customerLinkerPhone: '',
        companyPhone: '',
        customerLevelValue: '',
        customerLevelName: '',
        customerRelUserId: '',
        customerRelUserName: '',
        customerFromWay: '',
        royaltyCoefficient: '',
        remark: '',
        customerAddress: '',
        customerBusinessEmail: '',
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
            relUserId: 2,
            relUserName: '孟星驰',
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
            taskStatusValue: '1',
            taskStatusName: '服务中',
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
          relUserId: 2,
          relUserName: '孟星驰',
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
      addProductDialogVisible: false,
      editTaskDialogVisible: false
    }
  },
  computed: {
    isAgentReport () {
      return this.account.taskList.filter(process => process.productName === '代理记账').length > 0
    },
    ...mapState({
      products: state => state.product.products.page.list,
      account: state => state.customer.customer
    })
  },
  methods: {
    async getCustomer () {
      await this.$store.dispatch('getCustomerById', this.customerId)
    },
    // 修改客户信息
    updateCustomer () {
      this.$store.dispatch('updateCustomer', this.updateCustomerForm).then(() => {
        Message({
          message: '修改成功',
          type: 'success'
        })
        this.$$route.push({ path: '/account' })
      }).catch(message => {
        Message({
          message,
          type: 'error'
        })
      })
    },
    handleUpdateCustomerButtonClick () {
      this.updateCustomer()
    },
    handleAddNewProduct () {
      this.addProductDialogVisible = true
    },
    // 4.21
    handleEditTaskButtonClick (index) {
      const task = this.createCustomerForm.taskList[index]
      this.editTaskForm = task
      this.editTaskDialogVisible = true
    },
    handleEditTaskFormFinancialAdviserSelectChange (id) {
      this.editTaskForm.relUserName = this.getUserName(id)
    },
    handleEditTaskFormAccountingAssistantSelectChange (id) {
      this.editTaskForm.relHelpUserName = this.getUserName(id)
    },
    // 今天
    handleAddTaskDialogOkButtonClick () {
      if (this.addTaskForm.productName === '代理记账') {
        this.addTaskForm.longTerm = '0'
      } else {
        this.addTaskForm.longTerm = '1'
      }
      this.createCustomerForm.taskList.push(Object.assign({}, this.addTaskForm))
      this.addTaskDialogVisible = false
    },
    handleDeleteTaskButtonClick (index) {
      this.createCustomerForm.taskList.splice(index, 1)
    },
    async addTask () {
      try {
        await this
          .$store
          .dispatch(
            'createTask',
            this.addTaskForm
          )
        console.log('success')
      } catch (message) {
        console.log(message)
      }
    },
    handleAddTaskFormFinancialAdviserSelectChange (id) {
      this.addTaskForm.relUserName = this.getUserName(id)
    },
    handleAddTaskFormAccountingAssistantSelectChange (id) {
      this.addTaskForm.relHelpUserName = this.getUserName(id)
    },
    handleAddTaskFormProductSelectChange (id) {
      // 根据产品 ID 获取产品名称并赋值给添加产品表单对应字段
      this.addTaskForm.productName = this.getProductNameById(id)
    },
    getProducts () {
      // 这里还需要增加获取失败时的提示
      this
        .$store
        .dispatch(
          'getProducts',
          this.getProductsForm
        )
    },
    getProductNameById (id) {
      return this
        .getProductById(id)
        .productName
    },
    handleEditTaskFormProductSelectChange (id) {
      // 根据产品 ID 获取产品名称并赋值给添加产品表单对应字段
      this.edit.productName = this.getProductNameById(id)
    }
  },
  mounted () {
    this.customerId = this.$route.query.customerId
    this.getCustomer().then(() => {
      this.updateCustomerForm = this.account
    })
    this.getProducts()
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
