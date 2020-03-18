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
            <el-upload
              class="upload-demo upload-logo-custom"
              action="https://jsonplaceholder.typicode.com/posts/"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :file-list="fileList"
              list-type="picture">
              <el-button size="small" type="primary">上传企业logo</el-button>
              <div slot="tip" class="el-upload__tip">图片仅为png格式，建议尺寸为200*200(必须为1:1)</div>
            </el-upload>
          </el-col>
          <el-col :span="12"></el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form ref="ruleForm" label-width="100px" class="demo-ruleForm">
              <el-form-item label="企业名称" prop="name" required="">
                <el-input placeholder="苏州企享汇信息科技有限公司"></el-input>
              </el-form-item>
            </el-form>
          </el-col>
          <el-col :span="12"></el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form ref="ruleForm" label-width="100px" class="demo-ruleForm">
              <el-form-item label="简称" prop="name">
                <el-input placeholder="企享科技"></el-input>
              </el-form-item>
            </el-form>
          </el-col>
          <el-col :span="12"></el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form ref="ruleForm" label-width="100px" class="demo-ruleForm">
              <el-form-item label="服务区域" prop="name" required="">
                <el-input placeholder="江苏省苏州市"></el-input>
              </el-form-item>
            </el-form>
          </el-col>
          <el-col :span="12"></el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form ref="ruleForm" label-width="100px" class="demo-ruleForm">
              <el-form-item label="服务热线" prop="name">
                <el-input placeholder="400-1006-833"></el-input>
              </el-form-item>
            </el-form>
          </el-col>
          <el-col :span="12"></el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form ref="ruleForm" label-width="100px" class="demo-ruleForm">
              <el-form-item label="联系人" prop="name" required="">
                <el-input placeholder="钱磊"></el-input>
              </el-form-item>
            </el-form>
          </el-col>
          <el-col :span="12"></el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form ref="ruleForm" label-width="100px" class="demo-ruleForm">
              <el-form-item label="联系电话" prop="name" required="">
                <el-input placeholder="13212049876"></el-input>
              </el-form-item>
            </el-form>
          </el-col>
          <el-col :span="12"></el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form ref="ruleForm" label-width="100px" class="demo-ruleForm">
              <el-form-item label="经营地址" prop="region" required="">
                  <el-select placeholder="行政区域">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                  </el-select>
                  <el-input></el-input>
                </el-form-item>
            </el-form>
          </el-col>
          <el-col :span="12"></el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form ref="ruleForm" label-width="100px" class="demo-ruleForm">
              <el-form-item label="企业域名" prop="name" required="">
                <el-input placeholder="www.qixianghui.com"></el-input>
              </el-form-item>
            </el-form>
          </el-col>
          <el-col :span="12"></el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form ref="ruleForm" label-width="100px" class="demo-ruleForm">
              <el-form-item label="备注信息" prop="desc" required="">
                <el-input type="textarea"></el-input>
              </el-form-item>
            </el-form>
          </el-col>
          <el-col :span="12"></el-col>
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
                  <el-tag
                    v-for="tag in tags"
                    :key="tag.name"
                    closable
                    :type="tag.type">
                    {{tag.name}}
                  </el-tag>
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
            <div slot="footer" class="dialog-footer">
              <el-button>取消</el-button>
              <el-button type="primary">保存</el-button>
            </div>
          </el-dialog>
        </el-row>
        <el-row>
          <el-table style="width: 100%">
            <el-table-column
              label="服务公司"
              prop="name">
            </el-table-column>
            <el-table-column
              label="类型"
              prop="name">
            </el-table-column>
            <el-table-column
              label="卡号/账号"
              prop="name">
            </el-table-column>
            <el-table-column
              align="right">
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  @click="handleEdit (scope.$index, scope.row)">查看</el-button>
                <el-button
                  size="mini"
                  type="danger"
                  @click="handleDelete (scope.$index, scope.row)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-row>
      </el-tab-pane>
      <el-tab-pane label="审核设置">
        <p class="service-provider-title">审核设置</p>
        <div class="dividing-line"></div>
        <el-row>
          <el-col :span="12">
            <div class="audit-settings-display">
              <div class="audit-settings-one">
                <p>员工</p>
              </div>
            </div>
          </el-col>
          <el-col :span="12"></el-col>
        </el-row>
        <el-row>
          <div style="margin: 50px 0;"></div>
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
export default {
  metaInfo: {
    title: '企业设置'
  },
  data () {
    return {
      tabPosition: 'left',
      fileList: [{ name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100' }, { name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100' }],
      dialogTableVisible: false,
      addServiceCompanyDialogFormVisible: false,
      addAccountsReceivableDialogVisible: false,
      tags: [
        { name: '标签一', type: '' },
        { name: '标签二', type: 'success' },
        { name: '标签三', type: 'info' },
        { name: '标签四', type: 'warning' },
        { name: '标签五', type: 'danger' }
      ],
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
      checkList: ['选中且禁用', '复选框 A']
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
  border: 1px dashed #DCDFE6;
  width: 100%;
  height: 200px;
  margin-top: 20px;
  border-radius: 10px;
}
.audit-settings-one{
  margin-top: 60px;
  width: 60px;
  height: 60px;
  border: 1px solid rgba(0,153,204,1);
}
</style>
