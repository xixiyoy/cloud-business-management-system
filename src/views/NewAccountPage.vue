<template>
  <div class="create-account">
    <el-collapse v-model="activeNames" style="width: 50%; margin: 0 auto;">
      <el-collapse-item
        title="基础信息"
        name="base-info">
        <el-form label-width="150px" label-position="right">
          <el-row :gutter="20">
            <el-col :span="12">
              <el-form-item label="客户名称：">
                <el-input v-model="createCustomerForm.customerName"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="联系人：">
                <el-input v-model="createCustomerForm.customerLinkerName"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="12">
              <el-form-item label="社会信用代码：">
                <el-input v-model="createCustomerForm.creditCode"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="联系电话：">
                <el-input v-model="createCustomerForm.customerLinkerPhone"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="12">
              <el-form-item label="企业电话：">
                <el-input v-model="createCustomerForm.companyPhone"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="客户等级：">
                <el-select v-model="createCustomerForm.customerLevelValue" style="width: 100%;" @change="handleCustomerLevelSelectChange">
                  <el-option
                    v-for="(customerLevel, index)  in customerLevels"
                    :key="index"
                    :label="customerLevel.name"
                    :value="customerLevel.value">
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="12">
              <el-form-item label="联系地址：">
                <el-input></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="企业邮箱：">
                <el-input></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="12">
              <el-form-item label="客户来源：">
                <el-select
                  style="width: 50%;"
                  v-model="createCustomerForm.customerFromWay"
                  @change="handleCreateCustomerFormCustomerSourceSelectChange">
                  <el-option
                    v-for="(customerSource, index) in customerSources"
                    :key="index"
                    :label="customerSource"
                    :value="customerSource">
                  </el-option>
                </el-select>
                <el-select
                  style="width: 50%;"
                  v-model="createCustomerForm.customerFromDetail">
                  <el-option
                    v-for="(customerSourceDetail, index) in customerSourceDetails"
                    :key="index"
                    :label="customerSourceDetail"
                    :value="customerSourceDetail">
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="客户代表：">
                <el-select
                  v-model="createCustomerForm.customerRelUserId"
                  @change="handleCreateCustomerFormCustomerRepresentativeSelectChange" style="width: 100%;">
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
            <el-col :span="12" v-show="isRoyaltyCoefficientShow">
              <el-form-item label="提成系数：">
                <el-input v-model="createCustomerForm.royaltyCoefficient"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="备注：">
                <el-input v-model="createCustomerForm.remark"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </el-collapse-item>
      <el-collapse-item
        title="订单列表"
        name="task-table">
          <div class="tasks-table">
            <el-table
              :data="createCustomerForm.taskList">
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
              width="40%">
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
      <el-collapse-item title="文档资料: " name="doc-info">
        <el-form label-width="100px">
          <el-row>
            <el-col :span="8">
              <el-form-item label="身份证复印件: ">
                <el-upload
                  class="upload-demo"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  list-type="picture">
                  <el-button size="small" type="primary">选择上传文件</el-button>
                  <div slot="tip">只能上传jpg/png文件，且不超过500kb</div>
                  </el-upload>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="营业执照复印件: ">
                <el-upload
                  class="upload-demo"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  list-type="picture">
                  <el-button size="small" type="primary">选择上传文件</el-button>
                  <div slot="tip">只能上传jpg/png文件，且不超过500kb</div>
                </el-upload>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="6">
              <el-form-item label="合同原件：">
                <el-upload
                  class="upload-demo"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  list-type="picture">
                  <el-button size="small" type="primary">选择上传文件</el-button>
                  <div slot="tip">只能上传jpg/png文件，且不超过500kb</div>
                </el-upload>
              </el-form-item>
            </el-col>
            <el-col :span="12"></el-col>
            <el-col :span="6"></el-col>
          </el-row>
        </el-form>
      </el-collapse-item>
    </el-collapse>
    <div style="width: 50%; margin: 20px auto 0 auto;">
      <el-button type="primary" @click="handleCreateCustomerButtonClick">保 存</el-button>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { Message } from 'element-ui'

export default {
  metaInfo: {
    title: '新建客户'
  },
  data () {
    return {
      activeNames: [
        'base-info',
        'task-table',
        'doc-info'
      ],
      customerLevels: [
        {
          name: '普通',
          value: '0'
        },
        {
          name: 'VIP',
          value: '1'
        }
      ],
      customerSources: [
        '老客户',
        '渠道',
        '同事'
      ],
      customerSourceDetails: [],
      createCustomerForm: {
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
        taskList: []
      },
      addTaskDialogVisible: false,
      editTaskDialogVisible: false,
      // 获取产品列表的表单
      getProductsForm: {
        limit: 10,
        page: 1
      },
      paymentMethods: [
        '月付',
        '季付',
        '年付'
      ],
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
      editTaskForm: {
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
      getUsersForm: {
        limit: 10,
        page: 1
      },
      getCustomersForm: {
        limit: 10,
        page: 1,
        type: 'business:customer:list:all'
      },
      getChannelsForm: {
        limit: 10,
        page: 1
      }
    }
  },
  methods: {
    // 获取产品列表
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
    // 处理添加产品产品名称选择框改变事件
    handleAddTaskFormProductSelectChange (id) {
      // 根据产品 ID 获取产品名称并赋值给添加产品表单对应字段
      this.addTaskForm.productName = this.getProductNameById(id)
    },
    handleEditTaskFormProductSelectChange (id) {
      // 根据产品 ID 获取产品名称并赋值给添加产品表单对应字段
      this.edit.productName = this.getProductNameById(id)
    },
    handleEditTaskButtonClick (index) {
      const task = this.createCustomerForm.taskList[index]
      this.editTaskForm = task
      this.editTaskDialogVisible = true
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
    handleCreateCustomerFormCustomerRepresentativeSelectChange (id) {
      this.createCustomerForm.customerRelUserName = this.getUserName(id)
    },
    handleAddTaskFormFinancialAdviserSelectChange (id) {
      this.addTaskForm.relUserName = this.getUserName(id)
    },
    handleAddTaskFormAccountingAssistantSelectChange (id) {
      this.addTaskForm.relHelpUserName = this.getUserName(id)
    },
    handleEditTaskFormFinancialAdviserSelectChange (id) {
      this.editTaskForm.relUserName = this.getUserName(id)
    },
    handleEditTaskFormAccountingAssistantSelectChange (id) {
      this.editTaskForm.relHelpUserName = this.getUserName(id)
    },
    handleCreateCustomerFormCustomerSourceSelectChange (customerSource) {
      switch (customerSource) {
        case '老客户': {
          this.customerSourceDetails = this.customers.map(({ customerName }) => customerName)
          break
        }
        case '渠道': {
          this.customerSourceDetails = this.channels.map(({ name }) => name)
          break
        }
        case '同事': {
          this.customerSourceDetails = this.users.map(({ userName }) => userName)
          break
        }
      }
    },
    handleAddTaskDialogOkButtonClick () {
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
    getCustomers () {
      this.$store.dispatch('getCustomers', this.getCustomersForm)
    },
    getChannels () {
      this.$store.dispatch('getChannelList', this.getChannelsForm)
    },
    isTasksContainAgentReport () {
      return this.createCustomerForm.taskList.filter(({ productName }) => productName === '代理记账').length > 0
    },
    getCustomerLevelName (value) {
      if (value === '0') {
        return '普通'
      }
      return 'VIP'
    },
    handleCustomerLevelSelectChange (value) {
      this.createCustomerForm.customerLevelName = this.getCustomerLevelName(value)
    },
    createCustomer () {
      this.$store.dispatch('createCustomer', this.createCustomerForm).then(() => {
        Message({
          message: '创建用户成功',
          type: 'success'
        })
      }).catch(message => {
        Message({
          message,
          type: 'error'
        })
      })
    },
    handleCreateCustomerButtonClick () {
      this.createCustomer()
    }
  },
  mounted () {
    this.getProducts()
    this.getUsers()
    this.getCustomers()
    this.getChannels()
  },
  computed: {
    ...mapState({
      products: state => state.product.products.page.list,
      users: state => state.sysUser.users.list,
      customers: state => state.customer.customers.list,
      channels: state => state.channel.channels.page.list
    }),
    isRoyaltyCoefficientShow () {
      return this.isTasksContainAgentReport()
    }
  }
}
</script>
