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
                <el-form-item label="客户名称: ">
                  <el-input v-model="updateCustomerForm.customerName" disabled></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="联系人: ">
                  <el-input v-model="updateCustomerForm.customerLinkerName" disabled></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="社会信用代码: ">
                  <el-input v-model="updateCustomerForm.creditCode" disabled></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="联系电话: ">
                  <el-input v-model="updateCustomerForm.customerLinkerPhone" disabled></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="企业电话: ">
                  <el-input v-model="updateCustomerForm.customerBusinessPhone"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="客户等级: ">
                  <el-input v-model="updateCustomerForm.customerLevelName"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="联系地址: ">
                  <el-input v-model="updateCustomerForm.customerAddress"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="企业邮箱: ">
                  <el-input v-model="updateCustomerForm.customerBusinessEmail"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="客户来源: ">
                  <el-input v-model="updateCustomerForm.customerFromWay"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="客户代表: ">
                  <el-input v-model="updateCustomerForm.customerRelUserName"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="12" v-show="isRoyaltyCoefficientShow">
                <el-form-item label="提成系数：">
                  <el-input v-model="updateCustomerForm.royaltyCoefficient"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="12">
                <el-form-item label="备注: ">
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
                  <el-upload
                  action
                  :http-request="handleIdCardCopyUploadHttpRequest"
                  :file-list="idCardCopyFiles"
                  list-type="picture">
                  <el-button size="small" type="primary">选择上传文件</el-button>
                  <div slot="tip">只能上传jpg/png文件，且不超过500kb</div>
                  </el-upload>
                  <img v-for="(url, index) in getImageUrls('身份证复印件图片')" :key="index" :src="url" style="width: 100px;">
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="营业执照复印件: " prop="name">
                  <el-upload
                  action
                  :http-request="handleBusinessLicenseCopyImageUploadHttpRequest"
                  list-type="picture">
                  <el-button size="small" type="primary">选择上传文件</el-button>
                  <div slot="tip">只能上传jpg/png文件，且不超过500kb</div>
                </el-upload>
                  <img v-for="(url,index) in getImageUrls('合同原件')" :key="index" :src="url" style="width: 100px;">
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="12">
                <el-form-item label="合同原件: " prop="name">
                <el-upload
                  action
                  :http-request="handleContractloadHttpRequest"
                  :file-list="contract"
                  list-type="picture">
                  <el-button size="small" type="primary">选择上传文件</el-button>
                  <div slot="tip">只能上传jpg/png文件，且不超过500kb</div>
                </el-upload>
                  <img v-for="(url,index) in getImageUrls('合同原件')" :key="index" :src="url" style="width: 100px;">
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
                    :data="taskList">
                    <el-table-column label="序号"></el-table-column>
                    <el-table-column label="产品名称" prop="productName"></el-table-column>
                    <el-table-column label="服务单价" prop="price"></el-table-column>
                    <el-table-column label="服务周期（月）" prop="number" v-if="isRoyaltyCoefficientShow"></el-table-column>
                    <el-table-column label="赠送（月）" prop="giftNumber" v-if="isRoyaltyCoefficientShow"></el-table-column>
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
                          width="50%">
                          <el-form>
                            <el-row :gutter="20">
                              <el-col :span="12">
                                <el-form-item label="产品名称：">
                                  <el-input
                                    v-model="updateTaskForm.productName"
                                    disabled>
                                  </el-input>
                                </el-form-item>
                              </el-col>
                              <el-col :span="12">
                                <el-form-item label="财税顾问：">
                                  <el-select
                                    v-model="updateTaskForm.relUserId"
                                    @change="handleupdateTaskFormFinancialAdviserSelectChange">
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
                                    v-model="updateTaskForm.price">
                                  </el-input-number>
                                </el-form-item>
                              </el-col>
                              <el-col :span="12">
                                <el-form-item label="会计助理">
                                  <el-select
                                    v-model="updateTaskForm.relHelpUserId"
                                    @change="handleupdateTaskFormAccountingAssistantSelectChange">
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
                                    v-model="updateTaskForm.number">
                                  </el-input-number>
                                </el-form-item>
                              </el-col>
                              <el-col :span="12">
                                <el-form-item label="赠送：">
                                  <el-input-number
                                    :min="0"
                                    :step="1"
                                    v-model="updateTaskForm.giftNumber">
                                  </el-input-number>
                                </el-form-item>
                              </el-col>
                            </el-row>
                            <el-row>
                              <el-col>
                                <el-form-item label="付费方式：">
                                  <el-select
                                    v-model="updateTaskForm.payCycle">
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
                        <el-button size="mini" type="text" @click="handleDeleteTaskButtonClick(scope.$index, scope.row)">删除</el-button>
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
                          <el-form-item label="财税顾问：" v-show="!isAngentDetail">
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
                          <el-form-item label="负责人：" v-show="isAngentDetail">
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
                          <el-form-item label="会计助理" v-show="!isAngentDetail">
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
                          <el-form-item label="服务周期：" v-show="!isAngentDetail">
                            <el-input-number
                              :min="1"
                              :step="1"
                              v-model="addTaskForm.number">
                            </el-input-number>
                          </el-form-item>
                        </el-col>
                        <el-col :span="12">
                          <el-form-item label="赠送：" v-show="!isAngentDetail">
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
                          <el-form-item label="付费方式：" v-show="!isAngentDetail">
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
      <el-button type="primary" @click="handleUpdateCustomerButtonClick">保 存</el-button>
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
      addTaskDialogVisible: false,
      addTaskForm: {
        // 产品名称
        productId: '',
        productName: '',
        // 财税顾问
        relUserId: '',
        relUserName: '',
        // 服务单价
        price: '',
        // 会计助理
        relHelpUserId: '',
        relHelpUserName: '',
        // 服务周期
        number: '',
        // 赠送
        giftNumber: '',
        // 付费方式
        payCycle: '',
        longTerm: '0'
      },
      isAngentDetail: false,
      updateTaskForm: {
        // 产品名称
        productId: '',
        productName: '',
        // 财税顾问
        relUserId: '',
        relUserName: '',
        // 服务单价
        price: '',
        // 会计助理
        relHelpUserId: '',
        relHelpUserName: '',
        // 服务周期
        number: '',
        // 赠送
        giftNumber: '',
        // 付费方式
        payCycle: '',
        longTerm: '0'
      },
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
        customerBusinessEmail: ''
      },
      taskList: [],
      addProductDialogVisible: false,
      editTaskDialogVisible: false,
      paymentMethods: [
        '月付',
        '季付',
        '年付'
      ],
      getUsersForm: {
        limit: 10,
        page: 1
      },
      // 上传文件
      idCardCopyFiles: [],
      idCardCopyUploadForm: {
        type: 'customer',
        dataId: 10,
        fileNameInfo: '身份证复印件图片',
        fileType: '身份证复印件图片'
      },
      businessLicenseCopyImageUploadForm: {
        type: 'customer',
        dataId: 10,
        fileNameInfo: '营业执照复印件',
        fileType: '营业执照复印件'
      },
      handleContractloadHttpRequestForm: {
        type: 'customer',
        dataId: 10,
        fileNameInfo: '合同原件',
        fileType: '合同原件'
      }
    }
  },
  methods: {
    // 上传文件的
    handleIdCardCopyUploadHttpRequest ({ file }) {
      const formData = new FormData()
      formData.append('file', file)
      this.idCardCopyUpload(formData)
    },
    handleBusinessLicenseCopyImageUploadHttpRequest ({ file }) {
      const formData = new FormData()
      formData.append('file', file)
      this.businessLicenseCopyImageUpload(formData)
    },
    handleContractloadHttpRequest ({ file }) {
      const formData = new FormData()
      formData.append('file', file)
      this.contractload(formData)
    },
    idCardCopyUpload (formData) {
      this.$store.dispatch('uploadFile', { formData, uploadFileForm: this.idCardCopyUploadForm }).then(file => {
        Message({
          message: '上传成功',
          type: 'success'
        })
        this.createCustomerForm.fileList.push(file)
      }).catch(message => {
        Message({
          message,
          type: 'error'
        })
      })
    },
    businessLicenseCopyImageUpload (formData) {
      this.$store.dispatch('uploadFile', { formData, uploadFileForm: this.businessLicenseCopyImageUploadForm }).then(file => {
        Message({
          message: '营业执照复印件图片上传成功！',
          type: 'success'
        })
        this
          .createCustomerForm
          .fileList
          .push(file)
      })
        .catch(message => {
          Message({
            message,
            type: 'error'
          })
        })
    },
    contractload (formData) {
      this.$store.dispatch('uploadFile', { formData, uploadFileForm: this.handleContractloadHttpRequestForm }).then(file => {
        Message({
          message: '合同原件图片上传成功！',
          type: 'success'
        })
        this
          .createCustomerForm
          .fileList
          .push(file)
      })
        .catch(message => {
          Message({
            message,
            type: 'error'
          })
        })
    },
    // 展示图片
    getImageUrls (type) {
      return this
        .account
        .fileList
        .filter(({ fileType }) => fileType === type)
        .map(({ fileUrl }) => `http://39.100.120.137/${fileUrl.replace('/data/wwwroot/default/', '')}`)
    },
    // 根据 ID 获取客户
    getCustomer () {
      this
        .$store
        .dispatch(
          'getCustomerById',
          this.customerId
        )
    },
    handleAddTaskDialogOkButtonClick () {
      if (this.addTaskForm.productName === '代理记账') {
        this.addTaskForm.longTerm = '0'
      } else {
        this.addTaskForm.longTerm = '1'
      }
      this.createTask()
    },
    // 修改客户信息
    updateCustomer () {
      this.$store.dispatch('updateCustomer', this.updateCustomerForm).then(() => {
        Message({
          message: '修改成功',
          type: 'success'
        })
        this.$router.push({ path: '/account' })
      }).catch(message => {
        Message({
          message,
          type: 'error'
        })
      })
    },
    // 订单的修改
    updateTask () {
      this.$store.dispatch('updateTask', this.updateTaskForm).then(() => {
        Message({
          message: '修改成功',
          type: 'success'
        })
      }).catch(message => {
        Message({
          message,
          type: 'error'
        })
      })
    },
    // 添加新订单
    createTask () {
      this.addTaskForm.customerId = this.customerId
      this.$store.dispatch('createTask', this.addTaskForm).then(() => {
        Message({
          message: '添加成功',
          type: 'success'
        })
        Object.keys(this.addTaskForm).forEach(key => {
          this.addTaskForm[key] = ''
        })
        this.taskList.push(Object.assign({}, this.addTaskForm))
        this.getCustomer()
        this.addTaskDialogVisible = false
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
      const task = this.updateCustomerForm.taskList[index]
      this.updateTaskForm = task
      this.editTaskDialogVisible = true
    },
    handleupdateTaskFormFinancialAdviserSelectChange (id) {
      this.updateCustomerForm.updateTaskForm.relUserName = this.getUserName(id)
    },
    handleupdateTaskFormAccountingAssistantSelectChange (id) {
      this.updateCustomerForm.updateTaskForm.relHelpUserName = this.getUserName(id)
    },
    handleDeleteTaskButtonClick (index, row) {
      const taskIds = [
        row.taskId
      ]
      this.$store.dispatch('deleteTask', taskIds).then(() => {
        Message({
          type: 'success',
          message: '删除订单成功'
        })
      }).catch(message => {
        Message({
          message,
          type: 'error'
        })
      })
    },
    async addTask () {
      try {
        this.addTaskForm.customerId = this.customerId
        await this
          .$store
          .dispatch(
            'createTask',
            this.addTaskForm
          )
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
    // 处理添加产品产品名称选择框改变事件
    handleAddTaskFormProductSelectChange (id) {
      // 根据产品 ID 获取产品名称并赋值给添加产品表单对应字段
      const productName = this.getProductNameById(id)
      if (productName === '代理记账') {
        this.isAngentDetail = false
      } else {
        this.isAngentDetail = true
      }
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
    // 根据 ID 获取产品
    getProductById (id) {
      return this
        .products
        .filter(({ productId }) => productId === id)[0]
    },
    getProductNameById (id) {
      return this
        .getProductById(id)
        .productName
    },
    handleupdateTaskFormProductSelectChange (id) {
      // 根据产品 ID 获取产品名称并赋值给添加产品表单对应字段
      this.edit.productName = this.getProductNameById(id)
    },
    handleAddTaskButtonClick () {
      this.addTaskDialogVisible = true
    },
    getUsers () {
      this
        .$store
        .dispatch(
          'getUserList',
          this.getUsersForm
        )
    },
    getUser (id) {
      return this
        .users
        .filter(({ userId }) => userId === id)[0]
    },
    getUserName (id) {
      return this
        .getUser(id)
        .userName
    },
    isTasksContainAgentReport () {
      return this.taskList.filter(({ productName }) => productName === '代理记账').length > 0
    }
  },
  mounted () {
    this.customerId = this.$route.query.customerId
    this.getCustomer()
    this.getProducts()
    // 基本信息
    this.updateCustomerForm.customerId = this.account.customerId
    this.updateCustomerForm.customerStatusName = this.account.customerStatusName
    this.updateCustomerForm.customerName = this.account.customerName
    this.updateCustomerForm.customerLinkerName = this.account.customerLinkerName
    this.updateCustomerForm.customerLinkerPhone = this.account.customerLinkerPhone
    this.updateCustomerForm.customerBusinessPhone = this.account.customerBusinessPhone
    this.updateCustomerForm.customerLevelName = this.account.customerLevelName
    this.updateCustomerForm.customerAddress = this.account.customerAddress
    this.updateCustomerForm.customerBusinessEmail = this.account.customerBusinessEmail
    this.updateCustomerForm.customerFromWay = this.account.customerFromWay
    this.updateCustomerForm.customerRelUserName = this.account.customerRelUserName
    this.updateCustomerForm.remark = this.account.remark
    this.updateCustomerForm.creditCode = this.account.creditCode
    this.taskList = this.account.taskList
    // 订单列表里的修改
  },
  computed: {
    isAgentReport () {
      return this.account.taskList.filter(process => process.productName === '代理记账').length > 0
    },
    ...mapState({
      products: state => state.product.products.page.list,
      account: state => state.customer.customer,
      users: state => state.sysUser.users.list
    }),
    isRoyaltyCoefficientShow () {
      return this.isTasksContainAgentReport()
    }
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
