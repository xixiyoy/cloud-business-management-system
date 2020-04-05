<template>
  <div class="service-provider-management">
    <el-tabs :tab-position="tabPosition" style="height: 120%;">
      <el-tab-pane label="基本信息">
        <p class="service-provider-title">基本信息</p>
        <div class="dividing-line"></div>
        <el-row>
          <el-col :span="4">
            <img src="" alt="">
          </el-col>
          <el-col :span="8">
            <img src="" alt="">
            <el-upload
              class="upload-demo upload-logo-custom"
              action="https://jsonplaceholder.typicode.com/posts/"
              list-type="picture">
              <el-button size="small" type="primary">上传企业logo</el-button>
              <div slot="tip" class="el-upload__tip">图片仅为png格式，建议尺寸为200*200(必须为1:1)</div>
            </el-upload>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form label-width="100px" class="demo-ruleForm">
              <el-form-item label="企业名称" prop="name" required="">
                <el-input placeholder="苏州企享汇信息科技有限公司"></el-input>
              </el-form-item>
            </el-form>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form label-width="100px" class="demo-ruleForm">
              <el-form-item label="简称" prop="name">
                <el-input placeholder="企享科技"></el-input>
              </el-form-item>
            </el-form>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form label-width="100px" class="demo-ruleForm">
              <el-form-item label="服务区域" prop="name" required="">
                <el-input placeholder="江苏省苏州市"></el-input>
              </el-form-item>
            </el-form>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form label-width="100px" class="demo-ruleForm">
              <el-form-item label="服务热线" prop="name">
                <el-input placeholder="400-1006-833"></el-input>
              </el-form-item>
            </el-form>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form label-width="100px" class="demo-ruleForm">
              <el-form-item label="联系人" prop="name" required="">
                <el-input placeholder="钱磊"></el-input>
              </el-form-item>
            </el-form>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form  label-width="100px" class="demo-ruleForm">
              <el-form-item label="联系电话" prop="name" required="">
                <el-input placeholder="13212049876"></el-input>
              </el-form-item>
            </el-form>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form label-width="100px" class="demo-ruleForm">
              <el-form-item label="经营地址" prop="region" required="">
                  <el-select placeholder="行政区域" style="width: 100%;">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                  </el-select>
                  <el-input></el-input>
                </el-form-item>
            </el-form>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form label-width="100px" class="demo-ruleForm">
              <el-form-item label="企业域名" prop="name" required="">
                <el-input placeholder="www.qixianghui.com"></el-input>
              </el-form-item>
            </el-form>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form label-width="100px" class="demo-ruleForm">
              <el-form-item label="备注信息" prop="desc" required="">
                <el-input type="textarea"></el-input>
              </el-form-item>
            </el-form>
          </el-col>
        </el-row>
        <el-button type="primary">保存</el-button><br><br><br><br>
      </el-tab-pane>
      <el-tab-pane label="服务公司信息">
        <p class="service-provider-title">服务公司信息</p>
        <div class="dividing-line"></div>
        <el-row class="upload-logo-custom">
          <el-col :span="8">
            <el-button style="width: 100%;" @click="addServiceCompanyDialogFormVisible = true"><br><br><p style="font-size:40px;">+</p>添加服务公司<br><br><br><br></el-button>
            <el-dialog title="编辑服务公司" :visible.sync="addServiceCompanyDialogFormVisible" width="35%">
              <el-form :model="form">
                <el-form-item label="公司名称" required="">
                  <el-input autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="简称">
                  <el-input autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="社会信用代码" required="">
                  <el-input autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="服务板块" required="">
                  <el-select v-model="value1" multiple placeholder="请选择">
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
              </el-form>
              <div slot="footer" class="dialog-footer">
                <el-button @click="addServiceCompanyDialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="addServiceCompanyDialogFormVisible = false">确 定</el-button>
              </div>
            </el-dialog>
          </el-col>
          <el-col :span="8"></el-col>
          <el-col :span="8"></el-col>
        </el-row>
      </el-tab-pane>
      <el-tab-pane label="收款账户管理">
        <p class="service-provider-title">服务公司信息收款账户管理</p>
        <div class="dividing-line"></div>
        <el-row>
          <el-button type="primary" @click="addAccountsReceivableDialogVisible = true" class="upload-logo-custom">+新增收款账户</el-button>
          <el-dialog title="编辑收款账户" width="35%" :visible.sync="addAccountsReceivableDialogVisible">
            <el-form label-width="120px" class="demo-ruleForm">
              <el-form-item label="服务公司：" prop="name" required="">
                <el-input></el-input>
              </el-form-item>
              <el-form-item label="账户名称：" prop="name" required="">
                <el-input></el-input>
              </el-form-item>
              <el-form-item label="账号类型: " prop="name" required="">
                <el-radio-group v-model="radio" @change="handleAccountTypeRadioGroupChange">
                  <el-radio :label="3">银行账号</el-radio>
                  <el-radio :label="6">支付宝账号</el-radio>
                  <el-radio :label="9">微信账号</el-radio>
                  <el-radio :label="12">现金账号</el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item v-show="isBankAccount" label="账户名称：" prop="name" required="">
                <el-input></el-input>
              </el-form-item>
              <el-form-item v-show="isBankAccount" label="银行卡号：" prop="name" required="">
                <el-input></el-input>
              </el-form-item>
              <el-form-item v-show="isBankAccount" label="开户银行：" prop="name" required>
                <el-input></el-input>
              </el-form-item>
              <el-form-item v-show="isAlipayAccount" label="收款方名称：" prop="name" required>
                <el-input></el-input>
              </el-form-item>
              <el-form-item v-show="isAlipayAccount" label="支付宝账号：" prop="name" required>
                <el-input></el-input>
              </el-form-item>
              <el-form-item v-show="isWeChatAccount" label="收款人名称：" prop="name" required>
                <el-input></el-input>
              </el-form-item>
              <el-form-item v-show="isWeChatAccount" label="微信账号：" prop="name" required>
                <el-input></el-input>
              </el-form-item>
              <el-form-item v-show="isCashAccount" label="账户名称：" prop="name" required>
                <el-input></el-input>
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button>取消</el-button>
              <el-button type="primary">保存</el-button>
            </div>
          </el-dialog>
        </el-row>
        <el-row>
          <el-table style="width: 100%"
          :data="providerManagementList.page.list">
            <el-table-column
              label="服务公司"
              prop="tenantCompanyName">
            </el-table-column>
            <el-table-column
              label="类型"
              prop="accountType">
            </el-table-column>
            <el-table-column
              label="卡号/账号"
              prop="account">
            </el-table-column>
            <el-table-column label="操作" width="180">
              <template slot-scope="scope">
                <el-button
                @click="handleViewProvider(scope.row)"
                  class="detail-button"
                  size="mini"
                  type="text">详情</el-button>
                <el-button
                  size="mini"
                  type="text"
                  @click="handleDelete(scope.$index, scope.row)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-row>
      </el-tab-pane>
      <el-tab-pane label="审核设置">
        <p class="service-provider-title">审核设置</p>
        <div class="dividing-line"></div>
        <el-row>
          <el-col :span="24" class="audit-settings-display">
            <div id="u581" class="ax_default box_1">
              <img id="u581_img" class="img " src="../assets/images/management/u581.png"/>
            </div>
            <!-- Unnamed (矩形) -->
            <div id="u582" class="ax_default box_1">
              <div id="u582_div" class=""></div>
              <div id="u582_text" class="text ">
                <p><span>员工</span></p>
              </div>
            </div>

            <!-- Unnamed (矩形) -->
            <div id="u583" class="ax_default box_1">
              <div id="u583_div" class=""></div>
              <div id="u583_text" class="text ">
                <p><span>主管</span></p>
              </div>
            </div>

            <!-- Unnamed (矩形) -->
            <div id="u584" class="ax_default box_1">
              <div id="u584_div" class=""></div>
              <div id="u584_text" class="text ">
                <p><span>财务</span></p>
              </div>
            </div>

            <!-- Unnamed (矩形) -->
            <div id="u585" class="ax_default box_1">
              <div id="u585_div" class=""></div>
              <div id="u585_text" class="text ">
                <p><span>出纳</span></p>
              </div>
            </div>

            <!-- Unnamed (水平线) -->
            <div id="u586" class="ax_default line">
              <img id="u586_img" class="img " src="../assets/images/management/u586.png"/>
            </div>

            <!-- Unnamed (水平线) -->
            <div id="u587" class="ax_default line">
              <img id="u587_img" class="img " src="../assets/images/management/u586.png"/>
            </div>

            <!-- Unnamed (水平线) -->
            <div id="u588" class="ax_default line">
              <img id="u588_img" class="img " src="../assets/images/management/u586.png"/>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <div style="margin: 150px 0;"></div>
          <el-checkbox-group v-model="checkList">
            <el-checkbox>
              <template>
                提交申请
                <span>由申请人的部门主管对其进行审核</span>
              </template>
            </el-checkbox>
            <el-checkbox label="主管审核"></el-checkbox><br>由申请人的部门主管对其进行审核<br>
            <el-checkbox label="财务审核"></el-checkbox><br>由公司财务人员对其进行审核<br>
            <el-checkbox label="出纳确认"></el-checkbox><br>有公司出纳最终确认<br>
          </el-checkbox-group>
        </el-row><br><br><br>
         <el-button type="primary">保存</el-button>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import { mapState } from 'vuex'

export default {
  metaInfo: {
    title: '企业设置'
  },
  data () {
    return {
      radio: 3,
      tabPosition: 'left',
      fileList: [{ name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100' }, { name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100' }],
      dialogTableVisible: false,
      addServiceCompanyDialogFormVisible: false,
      addAccountsReceivableDialogVisible: false,
      accountsReceivable: [{
        serviceCompany: '企享汇',
        type: '现金账户',
        cardNumber: '12345678890'
      }, {
        serviceCompany: '企享汇',
        type: '微信账户',
        cardNumber: '12345678890'
      }, {
        serviceCompany: '企享汇',
        type: '现金账户',
        cardNumber: '12345678890'
      }],
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      value1: [],
      value2: [],
      accounts: [
        {
          company: 'A',
          type: '现金',
          accountDetail: {
            a: '',
            b: ''
          }
        },
        {
          company: 'B',
          type: '银行卡',
          accountDetail: {
            c: '',
            d: ''
          }
        }
      ],
      checkList: ['选中且禁用', '复选框 A'],
      checkedAccountType: '3',
      getTenantAccountListForm: {
        pageSize: 10,
        currPage: 1
      }
    }
  },
  methods: {
    handleRemove (file, fileList) {
      console.log(file, fileList)
    },
    handlePreview (file) {
      console.log(file)
    },
    handleEdit (index, row) {
      console.log(index, row)
    },
    handleDelete (index, row) {
      console.log(index, row)
    },
    handleAccountTypeRadioGroupChange (label) {
      this.checkedAccountType = label
      // console.log(this.checkedAccountType)
      // console.log(this.isBankAccount)
      // console.log(this.isAlipayAccount)
      // console.log(this.isWeChatAccount)
      // console.log(this.isCashkAccount)
    },
    getProviderList () {
      this.$store.dispatch('getTenantAccountList', this.getTenantAccountListForm).then(() => console.log(this.$store))
    }
    // handleViewProvider(row) {
    // }
  },
  mounted () {
    this.getProviderList()
  },
  computed: {
    ...mapState({
      providerManagementList: state => state.tenantCollectAccount.tenantAccounts
    }),
    isBankAccount () {
      return this.checkedAccountType === 3
    },
    isAlipayAccount () {
      return this.checkedAccountType === 6
    },
    isWeChatAccount () {
      return this.checkedAccountType === 9
    },
    isCashkAccount () {
      return this.checkedAccountType === 12
    }
  }
}
</script>

<style scoped>
.service-provider-management{
  width: 94%;
  margin: 0 auto;
  margin-top: 40px;
  height: 100%;
}
.el-container{
  height: 100%;
}
.dividing-line{
  width: 100%;
  height: 1px;
  background-color: #DCDFE6;
  margin-top: 25px;
}
.service-provider-title{
  font-size: 20px;
  color: #333;
  text-align: left;
  line-height: 10px;
  margin-top: 20px;
}
.upload-logo-custom{
  margin-top: 20px;
}
.audit-settings-display{
  width: 100%;
  margin-top: 40px;
}
.audit-settings-one{
  margin-top: 60px;
  width: 60px;
  height: 60px;
  border: 1px solid rgba(0,153,204,1);
}
#u581_img {
    border-width: 0px;
    position: absolute;
    left: 0px;
    top: 42px;
    width: 558px;
    height: 106px;
}
#u582 {
    border-width: 0px;
    position: absolute;
    left: 39px;
    top: 67px;
    width: 59px;
    height: 55px;
    color: #0099CC;
}
#u583 {
    border-width: 0px;
    position: absolute;
    left: 187px;
    top: 67px;
    width: 59px;
    height: 55px;
    color: #0099CC;
}
#u584 {
    border-width: 0px;
    position: absolute;
    left: 331px;
    top: 67px;
    width: 59px;
    height: 55px;
    color: #0099CC;
}
#u585 {
    border-width: 0px;
    position: absolute;
    left: 472px;
    top: 67px;
    width: 59px;
    height: 55px;
    color: #0099CC;
}
#u586 {
    border-width: 0px;
    position: absolute;
    left: 115px;
    top: 83px;
    width: 62px;
    height: 1px;
}
#u587 {
    border-width: 0px;
    position: absolute;
    left: 259px;
    top: 83px;
    width: 62px;
    height: 1px;
}
#u588 {
    border-width: 0px;
    position: absolute;
    left: 400px;
    top:83px;
    width: 62px;
    height: 1px;
}
#u582_div {
    border-width: 0px;
    position: absolute;
    left: 0px;
    top: 0px;
    width: 59px;
    height: 55px;
    background: inherit;
    background-color: rgba(255, 255, 255, 1);
    box-sizing: border-box;
    border-width: 1px;
    border-style: solid;
    border-color: rgba(0, 153, 204, 1);
    border-radius: 0px;
    -moz-box-shadow: none;
    -webkit-box-shadow: none;
    box-shadow: none;
    color: #0099CC;
}
#u583_div {
    border-width: 0px;
    position: absolute;
    left: 0px;
    top: 0px;
    width: 59px;
    height: 55px;
    background: inherit;
    background-color: rgba(255, 255, 255, 1);
    box-sizing: border-box;
    border-width: 1px;
    border-style: solid;
    border-color: rgba(0, 153, 204, 1);
    border-radius: 0px;
    -moz-box-shadow: none;
    -webkit-box-shadow: none;
    box-shadow: none;
    color: #0099CC;
}
#u584_div {
    border-width: 0px;
    position: absolute;
    left: 0px;
    top: 0px;
    width: 59px;
    height: 55px;
    background: inherit;
    background-color: rgba(255, 255, 255, 1);
    box-sizing: border-box;
    border-width: 1px;
    border-style: solid;
    border-color: rgba(0, 153, 204, 1);
    border-radius: 0px;
    -moz-box-shadow: none;
    -webkit-box-shadow: none;
    box-shadow: none;
    color: #0099CC;
}
#u585_div {
    border-width: 0px;
    position: absolute;
    left: 0px;
    top: 0px;
    width: 59px;
    height: 55px;
    background: inherit;
    background-color: rgba(255, 255, 255, 1);
    box-sizing: border-box;
    border-width: 1px;
    border-style: solid;
    border-color: rgba(0, 153, 204, 1);
    border-radius: 0px;
    -moz-box-shadow: none;
    -webkit-box-shadow: none;
    box-shadow: none;
    color: #0099CC;
}
#u585_text {
    border-width: 0px;
    position: absolute;
    left: 13px;
    top: 18px;
    width: 55px;
    word-wrap: break-word;
}
#u584_text {
    border-width: 0px;
    position: absolute;
    left: 13px;
    top: 18px;
    width: 55px;
    word-wrap: break-word;
}
#u583_text {
    border-width: 0px;
    position: absolute;
    left: 13px;
    top: 18px;
    width: 55px;
    word-wrap: break-word;
}
#u582_text {
    border-width: 0px;
    position: absolute;
    left: 13px;
    top: 18px;
    width: 55px;
    word-wrap: break-word;
}
</style>
