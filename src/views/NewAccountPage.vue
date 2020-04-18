<template>
  <div class="new-account-page">
    <p class="new-account-page-title">新建客户</p>
    <div class="dividing-line"></div>
    <el-collapse v-model="activeNames">
      <div class="">
        <img class="base-information-icon" src="../assets/images/newAccountPage/arrow.png" alt="">
        <el-collapse-item title="基础信息" name="1">
          <el-form :model="createProductForm" label-width="120px" class="demo-ruleForm">
            <el-row>
              <el-col :span="8">
                <el-form-item label="客户名称: " prop="name">
                  <el-input v-model="createProductForm.customerName"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="联系人: " prop="name">
                  <el-input v-model="createProductForm.customerLinkerName"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="社会信用代码: " prop="name">
                  <el-input v-model="createProductForm.creditCode"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="联系电话: " prop="name">
                  <el-input v-model="createProductForm.customerLinkerPhone"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="企业电话: " prop="name">
                  <el-input v-model="createProductForm.companyPhone"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="客户等级: " prop="name">
                  <el-select
                  @change="handleLevelChange"
                  v-model="createProductForm.customerLevelName">
                    <el-option
                    v-for="levelName in levelNames"
                      :key="levelName"
                      :label="levelName"
                      :value="levelName">
                    </el-option>
                  </el-select>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="联系地址: " prop="name">
                  <el-input v-model="ruleForm.name"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="企业邮箱: " prop="name">
                  <el-input v-model="ruleForm.name"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="客户来源: " prop="region">
                  <el-select class="account-source-left-custom"
                   @change="handleSourceChange"
                    v-model="selectedSource"
                    placeholder="请选择">
                    <el-option
                      v-for="item in sources"
                      :key="item.label"
                      :label="item.label"
                      :value="item.label">
                    </el-option>
                  </el-select>
                  <el-select class="account-source-right-custom" v-model="selectedSourceDetail" placeholder="请选择">
                    <el-option
                      v-for="item in sourceDetails"
                      :key="item"
                      :label="item"
                      :value="item">
                    </el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="客户代表: " prop="name">
                  <el-input v-model="createProductForm.customerRelUserName"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="12">
                <el-form-item label="备注: " prop="pass">
                  <el-input type="textarea"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </el-collapse-item>
        <img class="base-information-icon" src="../assets/images/newAccountPage/arrow.png" alt="">
        <el-collapse-item title="订单列表: " name="2">
          <el-table
            :data="createProductForm.taskList"
            style="width: 100%">
            <el-table-column
              label="序号"
              prop="productId">
            </el-table-column>
            <el-table-column
              label="产品名称"
              prop="productName">
            </el-table-column>
            <el-table-column
              label="服务单价"
              prop="price">
            </el-table-column>
            <el-table-column
              label="服务周期"
              prop="payCycle">
            </el-table-column>
            <el-table-column
              label="赠送"
              prop="giftNumber">
            </el-table-column>
            <el-table-column
              label="付费周期"
              prop="payCycle">
            </el-table-column>
            <el-table-column
              label="总额"
              prop="totalAmount">
              <template slot-scope="scope">
                {{scope.row.price * scope.row.number }}
              </template>
            </el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  type="text"
                  @click="dialogFormVisible = true">编辑</el-button>
                  <el-dialog title="收货地址" :visible.sync="dialogFormVisible" width="40%">
                    <el-form>
                      <el-row :gutter="1">
                        <el-col :span="12">
                          <el-form-item label="产品名称：">
                            <el-input disabled>{{}}</el-input>
                          </el-form-item>
                        </el-col>
                        <el-col :span="12">
                          <el-form-item label="财务顾问: ">
                            <el-input v-model="updateTaskForm.relUserName"></el-input>
                          </el-form-item>
                        </el-col>
                      </el-row>
                      <el-row :gutter="1">
                        <el-col :span="12">
                          <el-form-item label="服务单价：" required="">
                            <el-input v-model="updateTaskForm.price"></el-input>
                          </el-form-item>
                        </el-col>
                        <el-col :span="12">
                          <el-form-item label="会计助理：">
                            <el-input v-model="updateTaskForm.relHelpUserName"></el-input>
                          </el-form-item>
                        </el-col>
                      </el-row>
                      <el-row :gutter="1">
                        <el-col :span="12">
                          <el-form-item label="服务周期：" required="">
                            <el-input v-model="updateTaskForm.payCycle"></el-input>
                          </el-form-item>
                        </el-col>
                        <el-col :span="12">
                          <el-form-item label="赠送：" required="">
                            <el-input v-model="updateTaskForm.giftNumber"></el-input>
                          </el-form-item>
                        </el-col>
                      </el-row>
                      <el-row :gutter="1">
                        <el-col :span="12">
                          <el-form-item label="付费方式:">
                            <el-input></el-input>
                          </el-form-item>
                        </el-col>
                      </el-row>
                    </el-form>
                    <div slot="footer" class="dialog-footer">
                      <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
                      <el-button @click="dialogFormVisible = false">取 消</el-button>
                    </div>
                  </el-dialog>
                <el-button
                  size="mini"
                  type="text"
                  @click="handleDelete(scope.$index, scope.row)">删除</el-button>
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
                    <el-select v-model="createTaskForm.productName">
                      <el-option v-for="product in productList.page.list" :key="product.productId" :label="product.productName" :value="product.productName"></el-option>
                    </el-select>
                    <!-- <div class="block">
                      <el-cascader
                        :options="options"
                        @change="handleProductNameChange"
                        ></el-cascader>
                    </div> -->
                  </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <el-form-item label="财税顾问: " label-width="85px !important" style="margin-left:0px;" required="">
                      <el-input v-model="createTaskForm.relUserName"></el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="12">
                  <el-form-item
                    label="服务单价: "
                    label-width="85px !important"
                    required="">
                    <el-input v-model="createTaskForm.price"></el-input>
                  </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <el-form-item label="会计助理: " label-width="85px !important">
                      <el-input v-model="createTaskForm.relHelpUserName"></el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="12">
                  <el-form-item
                  label-width="85px !important"
                    label="赠送: ">
                    <el-input type="number" v-model="createTaskForm.giftNumber"></el-input>
                  </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <el-form-item label="服务周期: " label-width="85px !important">
                      <el-input type="number" v-model="createTaskForm.number"></el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="12">
                    <el-form-item
                      label="付费方式: "
                      label-width="85px !important"
                      required>
                      <el-select v-model="createTaskForm.payCycle">
                        <el-option label="月付" value="月付"></el-option>
                        <el-option label="季付" value="季付"></el-option>
                        <el-option label="年付" value="年付"></el-option>
                      </el-select>
                    </el-form-item>
                    </el-col>
                  <el-col :span="12"></el-col>
                </el-row>
              </el-form>
              <div slot="footer" class="dialog-footer">
                <el-button type="primary" @click="handleAddTaskButtonClick">确认</el-button>
                <el-button @click="addProductDialogVisible = false">取消</el-button>
              </div>
            </el-dialog>
          </div>
        </el-collapse-item>
        <img class="base-information-icon" src="../assets/images/newAccountPage/arrow.png" alt="">
        <el-collapse-item title="文档资料: " name="3">
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-row>
              <el-col :span="8">
                <el-form-item label="身份证复印件: " prop="name">
                  <el-upload
                    class="upload-demo"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    :on-preview="handlePreview"
                    :on-remove="handleRemove"
                    :file-list="fileList2"
                    list-type="picture">
                    <el-button size="small" type="primary" class="IDnumber-upload">选择上传文件</el-button>
                    <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                    </el-upload>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="营业执照复印件: " prop="name">
                  <el-upload
                    class="upload-demo"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    :on-preview="handlePreview"
                    :on-remove="handleRemove"
                    :file-list="fileList2"
                    list-type="picture">
                    <el-button size="small" type="primary" class="IDnumber-upload">选择上传文件</el-button>
                    <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                  </el-upload>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="6">
                <el-form-item label="合同原件" prop="name">
                  <el-upload
                    class="upload-demo"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    :on-preview="handlePreview"
                    :on-remove="handleRemove"
                    :file-list="fileList2"
                    list-type="picture">
                    <el-button size="small" type="primary" class="IDnumber-upload">选择上传文件</el-button>
                    <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                  </el-upload>
                </el-form-item>
              </el-col>
              <el-col :span="12"></el-col>
              <el-col :span="6"></el-col>
            </el-row>
          </el-form>
        </el-collapse-item>
      </div>
    </el-collapse>
    <div style="margin-top:25px;">
       <el-button type="primary" @click="handleCreateAccountButtonClick">保存</el-button>
      <el-button>取消</el-button>
    </div><br><br><br><br><br><br><br>
  </div>
</template>

<script>
import { Message } from 'element-ui'
import { createCustomer } from '../api/customer'
import { mapState } from 'vuex'

export default {
  metaInfo: {
    title: '新建客户'
  },
  data () {
    return {
      value: [],
      options: [{
        value: '工商服务',
        label: '工商服务',
        children: [{
          value: '注册',
          label: '注册'
        }, {
          value: '变更',
          label: '变更'
        }, {
          value: '注销',
          label: '注销'
        }, {
          value: '其他',
          label: '其他'
        }]
      }, {
        value: '银行服务',
        label: '银行服务',
        children: [{
          value: '银行服务',
          label: '银行服务'
        }, {
          value: '其他',
          label: '其他'
        }]
      }, {
        value: '人事服务',
        label: '人事服务',
        children: [{
          value: '社保公积金',
          label: '社保公积金'
        }, {
          value: '居住证户口',
          label: '居住证户口'
        }, {
          value: '劳务招聘',
          label: '劳务招聘'
        }, {
          value: '其他',
          label: '其他'
        }]
      }, {
        value: '知识产权',
        label: '知识产权',
        children: [{
          value: '商标',
          label: '商标'
        }, {
          value: '著作权',
          label: '著作权'
        }, {
          value: '专利',
          label: '专利'
        }, {
          value: '管理体系认证',
          label: '管理体系认证'
        }, {
          value: '其他',
          label: '其他'
        }]
      }, {
        value: '法律服务',
        label: '法律服务',
        children: [{
          value: '法律服务',
          label: '法律服务'
        }, {
          value: '其他',
          label: '其他'
        }]
      }, {
        value: '其他服务',
        label: '其他服务',
        children: [{
          value: '加急',
          label: '加急'
        }, {
          value: '刻章',
          label: '刻章'
        }, {
          value: '遗失补办',
          label: '遗失补办'
        }, {
          value: '异常处理',
          label: '异常处理'
        }, {
          value: '其他',
          label: '其他'
        }]
      }, {
        value: '行业资质许可证',
        label: '行业资质许可证',
        children: [{
          value: '电商类资质',
          label: '电商类资质'
        }, {
          value: '建筑类资质',
          label: '建筑类资质'
        }, {
          value: '人力资源来资质',
          label: '人力资源来资质'
        }, {
          value: '食品餐饮类资质',
          label: '食品餐饮类资质'
        }, {
          value: '网络游戏类资质',
          label: '网络游戏类资质'
        }, {
          value: '文化出版运营资质',
          label: '文化出版运营资质'
        }, {
          value: '医疗类资质',
          label: '医疗类资质'
        }, {
          value: '其他',
          label: '其他'
        }]
      }, {
        value: '培训',
        label: '培训',
        children: [{
          value: '职业技能培训',
          label: '职业技能培训'
        }, {
          value: '业务培训',
          label: '业务培训'
        }, {
          value: '其他',
          label: '其他'
        }]
      }],
      taskId: 1,
      createProductForm: {
        customerName: '',
        creditCode: '',
        customerFromWay: '',
        customerFromDetail: '',
        customerLinkerName: '',
        customerLinkerPhone: '',
        companyPhone: '',
        customerLevelValue: '',
        customerLevelName: '',
        customerRelUserId: 2,
        customerRelUserName: '',
        taskList: []
      },
      // 添加产品
      createTaskForm: {
        productId: 0,
        productName: '',
        number: 0,
        giftNumber: 0,
        payCycle: '',
        relHelpUserName: '',
        relUserName: ''
      },
      activeNames: ['1', '2', '3'],
      ruleForm: {
        name: '',
        region: '',
        pass: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        region: [
          { required: true, message: '请选择活动区域', trigger: 'change' }
        ],
        desc: [
          { required: true, message: '请填写活动形式', trigger: 'blur' }
        ]
      },
      tableData: [{
        serialNumber: '1',
        productName: '代理记账',
        servicePrice: '200',
        serviceCycle: '2个月',
        giveAway: '1个月',
        payCycle: '3',
        totalAmount: '3000'
      }],
      fileList2: [
        { name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100' },
        { name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100' }
      ],
      addProductDialogVisible: false,
      dialogTableVisible: false,
      dialogFormVisible: false,
      sources: [
        {
          label: '同事',
          sourceDetails: []
        },
        {
          label: '渠道',
          sourceDetails: []
        },
        {
          label: '客户',
          sourceDetails: []
        }
      ],
      levelNames: [
        '普通',
        'VIP'
      ],
      selectedSource: '',
      sourceDetails: [],
      selectedSourceDetail: '',
      updateTaskForm: {},
      getChannelFrom: {
        limit: 10,
        page: 1
      },
      getCustomersForm: {
        limit: 100,
        page: 1,
        type: 'business:customer:list:all'
      },
      getServiceProductForm: {
        limit: 10,
        page: 1
      },
      getUserListForm: {
        limit: 10,
        page: 1
      }
    }
  },
  methods: {
    handleSourceChange () {
      if (this.selectedSource === '渠道') {
        this.getChannelList()
        this.sourceDetails = this.channelList.page.list.map(channel => channel.name)
      } else if (this.selectedSource === '客户') {
        this.getCustomers()
        this.sourceDetails = this.customers.list.map(customer => customer.customerFromDetail)
      } else if (this.selectedSource === '同事') {
        this.getAllcolleagues()
        this.sourceDetails = this.colleague.list.map(user => user.userName)
      }
    },
    handleLevelChange () {
      if (this.reateProductForm.customerLevelName === '普通') {
        this.getCustomersForm()
        this.reateProductForm.customerLevelName = 0
      } else if (this.reateProductForm.customerLevelName === 'VIP') {
        this.getCustomersForm()
        this.reateProductForm.customerLevelName = 1
      }
    },
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    },
    handleDelete (index, row) {
      console.log(index, row)
    },
    getCustomers () {
      this.$store.dispatch('getCustomers', this.getCustomersForm)
    },
    handleAddNewProduct () {
      this.addProductDialogVisible = true
    },
    handleCreateAccountButtonClick () {
      createCustomer(this.createProductForm).then(({ data: response }) => {
        const { code, msg } = response
        if (code === 0) {
          Message({
            message: '保存成功',
            type: 'success'
          })
        } else {
          Message({
            message: msg,
            type: 'error'
          })
        }
      })
    },
    getChannelList () {
      this.$store.dispatch('getChannelList', this.getChannelFrom).then(() => console.log(this.channelList))
    },
    getProductList () {
      this.$store.dispatch('getServiceProductList', this.getServiceProductForm)
    },
    // 订单列表里的添加产品
    createProduct () {
      this.$store.dispatch('createtask', this.createTaskForm)
    },
    // 获取所有同事
    getAllcolleagues () {
      this.$store.dispatch('getUserList', this.getUserListForm)
    },
    // 添加产品里的修改后保存成功
    handleUpdateTaskButtonClick () {
      this.$store.dispatch('updateTask', this.taskId).then(({ data: response }) => {
        const { code, msg } = response
        if (code === 0) {
          Message({
            message: '保存成功',
            type: 'success'
          })
          this.$route.push({ path: '/new-account-page' })
        } else {
          Message({
            message: msg,
            type: 'error'
          })
        }
      })
    },
    handleProductNameChange (productNames) {
      this.createTaskForm.productName = productNames[0] + productNames[1]
    },
    // 添加产品成功
    handleAddTaskButtonClick () {
      this.$store.dispatch('createTask', this.createTaskForm).then(() => {
        Message({
          message: '保存成功',
          type: 'success'
        })
      }).catch(message => {
        Message({
          message,
          type: 'error'
        })
      })
    }
  },
  mounted () {
    // 调用当前methonds里的
    this.getChannelList()
    this.getCustomers()
    this.getProductList()
    this.getAllcolleagues()
  },
  computed: {
    ...mapState({
      channelList: state => state.channel.channels,
      productList: state => state.product.products,
      customers: state => state.customer.customers,
      task: state => state.task.task,
      // 获取所有同事的人名
      colleague: state => state.sysUser.users
    })
  }
}
</script>

<style>
.el-container{
  height: 100% !important;
}
.new-account-page{
  width: 94%;
  margin: 0 auto;
  margin-top: 40px;
}
.new-account-page-title{
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
.base-information-icon{
    margin-top: 13px;
    width: 17px;
    padding-right: 10px;
    float: left;
}
.account-source-left-custom{
  width: 49%;
  float: left;
}
.account-source-right-custom{
  width: 49%;
  float: right;
  margin-left: 0px !important;
}
.el-tag {
    background-color: #fff;
    border-color: #fff;
    display: inline-block;
    height: 32px;
    padding: 0 10px;
    line-height: 30px;
    font-size: 14px;
    color: #333;
    border-width: 1px;
    border-style: solid;
    border-radius: 4px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    white-space: nowrap;
}
.el-table .cell{
    font-size: 17px;
}
.el-form-item__label{
  width: 132px !important;
}
.el-form-item__content{
  margin-left: 135px !important;
}
.IDnumber-upload{
  padding: 14px 160px !important;
  background-color: #fff !important;
  color: #111 !important;
  border: 1px solid #DCDFE6 !important;
  width: 375px !important;
}
.add-account-products{
  width: 100%;
  border: 1px dotted #DCDFE6;
  text-align: center;
}
.add-products-model{
  padding-top: 25px;
}
.add-product-item{
  margin-left: 0px !important;
}
.add-product-input{
  width: 90% !important;
}
</style>
