<template>
  <div class="view-invoicing">
    <p class="view-invoicing-title">开票详情</p>
    <div class="dividing-line"></div>
    <div class="view-invoicing-main">
      <p><strong class="view-invoicing-title-custom">基本信息</strong></p>
      <el-form label-width="150px" class="demo-ruleForm">
        <el-row>
          <el-col :span="12">
            <el-form-item label="发票类型: " prop="name" required="">
              <span>KP11111111111</span>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="服务公司: " prop="name" required="">
              <span>苏州企享汇财务服务公司</span>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="发票抬头: " prop="name" required="">
              <span>张三公司名称</span>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="社会信用代码: " prop="name" required="">
              <span>1231231213</span>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="开票金额: " prop="name" required="">
              <span>500.00</span>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="开票状态: " prop="name" required="">
              <span>已开票</span>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item label="地址/电话: " prop="name">
              <span>苏州市工业园区星湖街111号 0512-88888888</span>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item label="开户行及账号: " prop="name">
              <span>苏州市工业园区星湖街农行支行 32 0180 21115 16123</span>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="申请人: " prop="name">
              <span>朱燕</span>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="申请时间: " prop="name">
              <span>2020-01-04 13:22:00</span>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item label="备注信息: " prop="name">
              <span>客户要求</span>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </div>
    <div class="view-invoicing-silde">
      <el-row>
        <el-col :span="24">
          <el-button>修改内容</el-button>
        </el-col>
      </el-row><br>
      <el-row>
        <el-col :span="24">
          <el-popover
            placement="top"
            width="160"
            v-model="visible">
            <p>确定要撤回申请？</p>
            <div style="text-align: right; margin: 0">
              <el-button type="primary" size="mini" @click="visible = false">确定</el-button>
              <el-button size="mini" type="text" @click="visible = false">取消</el-button>
            </div>
            <el-button slot="reference">撤回申请</el-button>
          </el-popover>
        </el-col>
      </el-row><br>
      <el-row>
        <el-col :span="24">
          <el-button :plain="true" @click="open2">确认开票</el-button>
        </el-col>
      </el-row><br>
      <el-row>
        <el-col :span="24">
          <el-button @click="turnDownDialogFormVisible = true">驳回申请</el-button>
          <el-dialog title="驳回申请" :visible.sync="turnDownDialogFormVisible" width="30%">
            <el-form :model="form">
              <el-form-item label="驳回原因" :label-width="120" required="">
                <el-input autocomplete="off"></el-input>
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button  type="primary" @click="turnDownDialogFormVisible = false">确 定</el-button>
              <el-button @click="turnDownDialogFormVisible = false">取 消</el-button>
            </div>
          </el-dialog>
        </el-col>
      </el-row><br>
      <el-row>
        <el-col :span="24">
          <el-button @click="voidDialogFormVisible = true">发票作废</el-button>
          <el-dialog title="发票作废" :visible.sync="voidDialogFormVisible" width="30%">
            <el-form :model="form">
              <el-form-item label="作废备注" :label-width="120" required="">
                <el-input autocomplete="off"></el-input>
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button  type="primary" @click="voidDialogFormVisible = false">确 定</el-button>
              <el-button @click="voidDialogFormVisible = false">取 消</el-button>
            </div>
          </el-dialog>
        </el-col>
      </el-row>
    </div>
    <br><br><br>
  </div>
</template>
<script>
export default {
  metaInfo: {
    title: '开票详情'
  },
  methods: {
    open2 () {
      this.$message({
        message: '开票成功',
        type: 'success'
      })
    }
  },
  data () {
    return {
      visible: false,
      turnDownDialogFormVisible: false,
      voidDialogFormVisible: false
    }
  }
}
</script>
<style scoped>
.view-invoicing{
  width: 94%;
  margin: 0 auto;
  margin-top: 40px;
}
.view-invoicing-title{
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
.view-invoicing-main{
  width: 78%;
  float: left;
}
.view-invoicing-silde{
  width: 20%;
  float: right;
  margin-top: 30px;
}
.view-invoicing-title-custom{
  line-height: 50px;
}
</style>
