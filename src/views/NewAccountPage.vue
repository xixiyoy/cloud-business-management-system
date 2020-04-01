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
                  <el-input v-model="createProductForm.customerLevelName"></el-input>
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
                    <el-form :model="form">
                      <el-row :gutter="20">
                        <el-col :span="12">
                          <el-form-item label="产品名称：">
                            <el-input></el-input>
                          </el-form-item>
                        </el-col>
                        <el-col :span="12">
                          <el-form-item label="代账会计 ">
                            <el-input></el-input>
                          </el-form-item>
                        </el-col>
                      </el-row>
                      <el-row :gutter="20">
                        <el-col :span="12">
                          <el-form-item label="服务单价：" required="">
                            <el-input></el-input>
                          </el-form-item>
                        </el-col>
                        <el-col :span="12">
                          <el-form-item label="会计助理：">
                            <el-input></el-input>
                          </el-form-item>
                        </el-col>
                      </el-row>
                      <el-row :gutter="20">
                        <el-col :span="12">
                          <el-form-item label="赠送：" required="">
                            <el-input></el-input>
                          </el-form-item>
                        </el-col>
                        <el-col :span="12">
                          <el-form-item label="付费周期：" required="">
                            <el-input></el-input>
                          </el-form-item>
                        </el-col>
                      </el-row>
                      <el-row :gutter="20">
                        <el-col :span="12">
                          <el-form-item label="服务数量：">
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
      createProductForm: {
        customerName: '企享云-测试客户1',
        creditCode: '91845555',
        customerFromWay: '来源',
        customerFromDetail: '详细来源',
        customerLinkerName: '客户联系人',
        customerLinkerPhone: '18913932254',
        companyPhone: '',
        customerLevelValue: '0',
        customerLevelName: '普通',
        customerRelUserId: 2,
        customerRelUserName: '孟星驰',
        taskList: [{
          productId: 1,
          productName: '代理记账',
          longTerm: '0',
          price: 200,
          number: 10,
          giftNumber: 2,
          payCycle: '月付',
          relUserId: 2,
          relUserName: '孟星驰'
        }, {
          productId: 1,
          productName: '代理记账',
          longTerm: '0',
          price: 200,
          number: 10,
          giftNum: 2,
          payCycle: '月付',
          relUserId: 1,
          relUserName: 'mxc'
        }]
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
      selectedSource: '',
      sourceDetails: [],
      selectedSourceDetail: ''
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
    handleAddNewProduct () {
      this.addProductDialogVisible = true
    },
    getCustomers () {
      this.$store.dispatch('getCustomers', this.getCustomersForm)
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
      this.$store.dispatch('getChannelList')
    }
  },
  mounted () {
    // 调用当前methonds里的
    this.getChannelList()
    this.getCustomers()
  },
  computed: {
    ...mapState({
      channelList: state => state.channel.channels,
      customers: state => state.customer.customers
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
