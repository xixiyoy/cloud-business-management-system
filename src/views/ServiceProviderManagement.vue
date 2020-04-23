<template>
  <div class="service-provider-management">
    <el-tabs style="height: 120%;" tab-position="left">
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
                <el-input v-model="updateTenantForm.fullName"></el-input>
              </el-form-item>
            </el-form>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form label-width="100px" class="demo-ruleForm">
              <el-form-item label="简称" prop="name">
                <el-input v-model="updateTenantForm.shortName"></el-input>
              </el-form-item>
            </el-form>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form label-width="100px" class="demo-ruleForm">
              <el-form-item label="服务区域" prop="name" required>
                <el-input v-model="updateTenantForm.serviceArea"></el-input>
              </el-form-item>
            </el-form>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form label-width="100px" class="demo-ruleForm">
              <el-form-item label="服务热线" prop="name">
                <el-input v-model="updateTenantForm.serviceHotLine"></el-input>
              </el-form-item>
            </el-form>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form label-width="100px" class="demo-ruleForm">
              <el-form-item label="联系人" prop="name" required="">
                <el-input v-model="updateTenantForm.contactName"></el-input>
              </el-form-item>
            </el-form>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form  label-width="100px" class="demo-ruleForm">
              <el-form-item label="联系电话" prop="name" required="">
                <el-input v-model="updateTenantForm.contactMobile"></el-input>
              </el-form-item>
            </el-form>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form label-width="100px" class="demo-ruleForm">
              <el-form-item label="经营地址" prop="region" required="">
                  <el-input v-model="updateTenantForm.businessAddress"></el-input>
                </el-form-item>
            </el-form>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form label-width="100px" class="demo-ruleForm">
              <el-form-item label="企业域名" prop="name" required="">
                <el-input v-model="updateTenantForm.domainName"></el-input>
              </el-form-item>
            </el-form>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form label-width="100px" class="demo-ruleForm">
              <el-form-item label="备注信息" prop="desc" required="">
                <el-input type="textarea" v-model="updateTenantForm.remark"></el-input>
              </el-form-item>
            </el-form>
          </el-col>
        </el-row>
        <el-button type="primary" @click="handleSaveCompanyButtonClick">保存</el-button><br><br><br><br>
      </el-tab-pane>
      <el-tab-pane label="服务公司信息">
        <p class="service-provider-title">服务公司信息</p>
        <div class="dividing-line"></div>
        <el-row class="upload-logo-custom" :gutter="20">
          <el-col :span="8" v-for="(list, index) in companyList.page.list" :key="index"
          style="margin: 20px 0;">
            <el-card class="box-card">
              <div class="text item">
                <div>
                  <p class="team-member-title">{{ list.fullName }}</p><p>({{ list.shortName }})</p>
                  <div class="line-company"></div>
                    <p>{{ list.creditCode }}</p><br>
                    {{ list.servicePlate }}
                </div><br><br>
                <el-button type="text" style="float: left; padding: 3px 13px"  @click="handleEditServiceCompanyButtonClick(list)">编 辑</el-button>
                  <el-dialog title="编辑服务公司" :visible.sync="editServiceCompanyDialogFormVisible"         width="35%">
                  <el-form>
                    <el-form-item label="公司名称" required>
                      <el-input v-model="updateCompanyFrom.fullName"></el-input>
                    </el-form-item>
                    <el-form-item label="简称">
                      <el-input v-model="updateCompanyFrom.shortName"></el-input>
                    </el-form-item>
                    <el-form-item label="社会信用代码" required>
                      <el-input v-model="updateCompanyFrom.creditCode"></el-input>
                    </el-form-item>
                    <el-form-item label="服务板块" required>
                      <el-select v-model="updateCompanyFrom.shortName.servicePlate">
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
                    <el-button @click="editServiceCompanyDialogFormVisible = false">取 消</el-button>
                    <el-button type="primary" @click="handleUpdateCompanyButtonClick">确 定</el-button>
                  </div>
                </el-dialog>
                <el-button type="text"
                @click="handleCompanyDelete($index, row)"
                style="float: lefy; padding: 3px 0">删 除</el-button>
              </div>
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-button style="width: 100%;"><br><br><p style="font-size:40px;" @click="handleAddServiceCompanyButtonClick">+</p>添加服务公司<br><br><br><br></el-button>
            <el-dialog title="编辑服务公司" :visible.sync="addServiceCompanyDialogFormVisible" width="35%">
              <el-form>
                <el-form-item label="公司名称" required>
                  <el-input v-model="createServiceCompanyForm.fullName"></el-input>
                </el-form-item>
                <el-form-item label="简称">
                  <el-input v-model="createServiceCompanyForm.shortName"></el-input>
                </el-form-item>
                <el-form-item label="社会信用代码" required>
                  <el-input v-model="createServiceCompanyForm.creditCode"></el-input>
                </el-form-item>
                <el-form-item label="服务板块" required>
                  <el-select placeholder="请选择" v-model="createServiceCompanyForm.servicePlate">
                    <el-option
                      v-for="item in options"
                      :key="item"
                      :label="item"
                      :value="item">
                    </el-option>
                  </el-select>
                </el-form-item>
              </el-form>
              <div slot="footer" class="dialog-footer">
                <el-button @click="addServiceCompanyDialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="handleCreateCompanyButtonClick">确 定</el-button>
              </div>
            </el-dialog>
          </el-col>
        </el-row>
      </el-tab-pane>
      <el-tab-pane label="收款账户管理">
        <p class="service-provider-title">服务公司信息收款账户管理</p>
        <div class="dividing-line"></div>
        <el-row>
          <el-button type="primary" @click="addAccountsReceivableDialogVisible = true" class="upload-logo-custom">+新增收款账户</el-button>
          <el-dialog title="编辑收款账户" width="45%" :visible.sync="addAccountsReceivableDialogVisible">
            <el-form label-width="120px" class="demo-ruleForm"
            :data="collectAccounts.list">
              <el-form-item label="服务公司：" prop="tenantCompanyName" required="">
                <el-input v-model="createTenantAccountFrom.tenantCompanyName"></el-input>
              </el-form-item>
              <el-form-item label="账户名称：" prop="accountName" required="">
                <el-input v-model="createTenantAccountFrom.accountName"></el-input>
              </el-form-item>
              <el-form-item label="账号类型: " prop="accountType" required="">
                <el-radio-group v-model="radio" @change="handleAccountTypeRadioGroupChange">
                  <el-radio :label="3">银行账号</el-radio>
                  <el-radio :label="6">支付宝账号</el-radio>
                  <el-radio :label="9">微信账号</el-radio>
                  <el-radio :label="12">现金账号</el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item v-show="isBankAccount" label="账户名称：" prop="name" required="">
                <el-input v-model="createTenantAccountFrom.accountName"></el-input>
              </el-form-item>
              <el-form-item v-show="isBankAccount" label="银行卡号：" prop="name" required="">
                <el-input v-model="createTenantAccountFrom.account"></el-input>
              </el-form-item>
              <el-form-item v-show="isBankAccount" label="开户银行：" prop="name" required>
                <el-input v-model="createTenantAccountFrom.bank"></el-input>
              </el-form-item>
              <el-form-item v-show="isAlipayAccount" label="收款方名称：" prop="name" required>
                <el-input v-model="createTenantAccountFrom.accountName"></el-input>
              </el-form-item>
              <el-form-item v-show="isAlipayAccount" label="支付宝账号：" prop="name" required>
                <el-input v-model="createTenantAccountFrom.account"></el-input>
              </el-form-item>
              <el-form-item v-show="isWeChatAccount" label="收款人名称：" prop="name" required>
                <el-input v-model="createTenantAccountFrom.accountName"></el-input>
              </el-form-item>
              <el-form-item v-show="isWeChatAccount" label="微信账号：" prop="name" required>
                <el-input v-model="createTenantAccountFrom.account"></el-input>
              </el-form-item>
              <el-form-item v-show="isCashAccount" label="账户名称：" prop="name" required>
                <el-input v-model="createTenantAccountFrom.accountName"></el-input>
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
          :data="collectAccounts.page.list">
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
                  class="detail-button"
                  size="mini"
                  type="text"
                  @click="viewAccountsReceivableDialogVisible = true">详情</el-button>
                  <el-dialog title="编辑收款账户" width="45%" :visible.sync="viewAccountsReceivableDialogVisible">
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
          <el-checkbox-group v-model="checkedFlowConfigNames" @change="handleFlowConfigCheckbokGroupChange">
            <el-checkbox>提交申请 (由申请人的部门主管对其进行审核)</el-checkbox><br>
            <el-row
              v-for="flowConfig in flowConfigs"
              :key="flowConfig.id"
              ><br>
              <el-checkbox
                :label="flowConfig.name"
                ><br>
                {{ getFlowConfigCheckBoxLabel(flowConfig.name) }}
              </el-checkbox>
            </el-row>
          </el-checkbox-group>
        </el-row><br><br><br>
         <el-button type="primary" @click="handleModifyFLowConfigButtonClick">保存</el-button>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import { Message } from 'element-ui'
import { createTenantAccount } from '../api/tenantCollectAccount'
import { createServiceCompany, updateServiceCompany } from '../api/tenantCompany'
export default {
  metaInfo: {
    title: '企业设置'
  },
  data () {
    return {
      tenantId: 1,
      radio: 3,
      tabPosition: 'left',
      fileList: [{ name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100' }, { name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100' }],
      dialogTableVisible: false,
      addServiceCompanyDialogFormVisible: false,
      editServiceCompanyDialogFormVisible: false,
      addAccountsReceivableDialogVisible: false,
      viewAccountsReceivableDialogVisible: false,
      checkedAccountType: '3',
      getServiceCompanyFrom: {
        limit: 10,
        page: 1
      },
      getTenantAccountListForm: {
        limit: 10,
        page: 1
      },
      updateTenantForm: {
        tenantId: 1,
        fullName: '苏州企享云网络科技有限公司',
        shortName: '企享云',
        logoUrl: null,
        serviceArea: '工业园区',
        serviceHotLine: null,
        contactName: '朱桂彬',
        contactMobile: '1898',
        contactRole: null,
        businessAddress: '工业园区',
        domainName: null,
        remark: null,
        createUserId: null,
        createUserName: null,
        createTime: null,
        updateUserId: null,
        updateUserName: null,
        updateTime: null
      },
      createServiceCompanyForm: {
        fullName: '',
        shortName: '',
        creditCode: '',
        servicePlate: ''
      },
      options: [
        '工商服务',
        '财税服务',
        '银行服务',
        '知识产权',
        '法律服务',
        '行业资质许可证',
        '其他服务',
        '培训'
      ],
      updateCompanyFrom: {
        tenantCompanyId: 2,
        tenantId: 1,
        fullName: '全称',
        shortName: '简称',
        creditCode: '11111',
        servicePlate: '工商注册',
        companyOrder: null,
        createUserId: 2,
        createUserName: '孟星驰',
        createTime: '2020-03-28 19:48:34',
        updateUserId: null,
        updateUserName: null,
        updateTime: null
      },
      checkedFlowConfigNames: [],
      updateFlowConfigForm: []
    }
  },
  methods: {
    handleRemove (index, row) {
      const tenantCollectAccountIds = [
        row.tenantCollectAccountId
      ]
      this.$store.dispatch('deleteTenantAccount', tenantCollectAccountIds).then(() => {
        this.getProviderList()
      })
    },
    handleModifyFLowConfigButtonClick () {
      this.$store.dispatch('updateFlowConfig', this.updateFlowConfigForm).then(() => {
        Message({
          message: '修改审核配置成功',
          type: 'success'
        })
      }).catch(message => {
        Message({
          message,
          type: 'error'
        })
      })
    },
    getFlowConfigCheckBoxLabel (flowConfigName) {
      if (flowConfigName === '待业务审批') {
        return `
          主管审核
          (由申请人的部门主管对其进行审核)
        `
      }
      if (flowConfigName === '待财务审批') {
        return `
          财务审核
          (由公司财务人员对其进行审核)
        `
      }
      if (flowConfigName === '待出纳审批') {
        return `
          出纳确认
          (有公司出纳最终确认)
        `
      }
    },
    handleFlowConfigCheckbokGroupChange (checkedFlowConfigNames) {
      this.updateFlowConfigForm = this.flowConfigs.map(({ id, name }) => {
        let value = '-1'
        checkedFlowConfigNames.forEach(checkedFlowConfigName => {
          if (name === checkedFlowConfigName) {
            value = '1'
          }
        })
        return {
          id,
          value
        }
      })
    },
    isCashAccount () {},
    handlePreview (file) {
      console.log(file)
    },
    handleEdit (index, row) {
      console.log(index, row)
    },
    handleAddServiceCompanyButtonClick () {
      this.addServiceCompanyDialogFormVisible = true
    },
    handleEditServiceCompanyButtonClick (list) {
      this.updateCompanyFrom = list
      this.editServiceCompanyDialogFormVisible = true
    },
    handleDelete (index, row) {
      console.log(index, row)
    },
    handleAccountTypeRadioGroupChange (label) {
      this.checkedAccountType = label
    },
    getProviderList () {
      this.$store.dispatch('getTenantAccountList', this.getTenantAccountListForm)
    },
    // handleViewProvider(row) {
    // }
    handleCreateCollectButtonClick () {
      createTenantAccount(this.getTenantAccountListForm).then(({ data: response }) => {
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
      this.createTenantAccount()
    },
    // 添加服务公司
    handleCreateCompanyButtonClick () {
      createServiceCompany(this.createServiceCompanyForm).then(({ data: response }) => {
        const { code, msg } = response
        if (code === 0) {
          Message({
            message: '保存成功',
            type: 'success'
          })
          this.getCompanies()
          this.addServiceCompanyDialogFormVisible = false
        } else {
          Message({
            message: msg,
            type: 'error'
          })
        }
      })
    },
    // 添加收款账户
    handleCreateTenantAccount () {
      this.createTenantAccountFrom()
    },
    createTenantAccountFrom () {
      this.$store.dispatch('createTenantAccount', this.createTenantAccountFrom).then(() => {
        Message({
          message: '保存成功',
          type: 'success'
        })
        // this.$router.push({ path: '/channel-dealer-management' })
      }).catch(message => {
        Message({
          message,
          type: 'error'
        })
      })
    },
    // 更新服务公司
    handleUpdateCompanyButtonClick () {
      updateServiceCompany(this.updateCompanyFrom).then(({ data: response }) => {
        const { code, msg } = response
        if (code === 0) {
          Message({
            message: '保存成功',
            type: 'success'
          })
          this.getCompanies()
          this.editServiceCompanyDialogFormVisible = false
        } else {
          Message({
            message: msg,
            type: 'error'
          })
        }
      })
    },
    handleSaveCompanyButtonClick () {
      createServiceCompany(this.updateTenantForm).then(({ data: response }) => {
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
      this.createServiceCompany()
    },
    // 删除服务公司
    handleCompanyDelete (index, row) {
      const tenantCompanyIds = [
        row.tenantCompanyId
      ]
      this.$store.dispatch('deleteServiceCompany', tenantCompanyIds).then(() => {
        this.getCompanies()
      })
    },
    createTenantAccount () {
      this.$store.dispatch('createTenantAccount', this.createTenantAccountFrom)
    },
    createServiceCompany () {
      this.$store.dispatch('createServiceCompany', this.createServiceCompanyForm)
    },
    // 基本信息 from 获取
    getTenant () {
      this.$store.dispatch('getTenantById').then(() => {
        this.updateTenantForm = this.tenantDetail
        this.getProviderList()
      })
    },
    // 服务公司的 list 的获取
    getCompanies () {
      this.$store.dispatch('getCompanyList', this.getServiceCompanyFrom)
    },
    // 获取所有收款账户 list
    getCollectAccounts () {
      this.$store.dispatch('getTenantAccountList', this.getTenantAccountListForm)
    },
    // 根据ID获取一个服务公司
    async getCompanyById () {
      await this.$store.dispatch('getServiceCompanyById', this.tenantId)
    },
    getFlowConfigs () {
      this.$store.dispatch('getFlowConfigs').then(() => {
        this.checkedFlowConfigNames = []
        this.updateFlowConfigForm = []
        this.flowConfigs.forEach(({ id, name, value }) => {
          this.updateFlowConfigForm.push({
            id,
            name,
            value
          })
          if (value === '1') {
            this.checkedFlowConfigNames.push(name)
          }
        })
      })
    }
  },
  mounted () {
    // 基本信息的获取1
    this.getTenant()
    // 所有公司list 获取
    this.getCompanies()
    // 所有收款账户的list获取
    this.getCollectAccounts()
    // 获取审核配置
    this.getFlowConfigs()
  },
  computed: {
    ...mapState({
      // 服务公司信息list获取
      companyList: state => state.tenantCompany.serviceCompanys,
      serviceCompany: state => state.tenantCompany.serviceCompany,
      // 获取基本信息 tenant 的form
      tenantDetail: state => state.tenant.tenant,
      // 收款账户里的获取所有的收款账户
      collectAccounts: state => state.tenantCollectAccount.tenantAccounts,
      flowConfigs: state => state.flowConfig.flowConfigs
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
.line-company{
  width: 100%;
  height: 1px;
  background-color: #DCDFE6;
  margin: 10px 0 25px 0;
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
.text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }
</style>
