<template>
  <div class="view-account">
    <p class="view-account-title">公司名称</p>
    <div class="dividing-line"></div>
    <el-collapse v-model="activeNames" @change="handleChange">
      <div class="">
        <img class="base-information-icon" src="../assets/images/newAccountPage/arrow.png" alt="">
        <el-collapse-item title="基础信息" name="1">
          <el-form ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-row>
              <el-col :span="20">
                <el-button type="primary" round>显示服务状态</el-button>
              </el-col>
              <el-col :span="4">
                <el-button>修改内容</el-button>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="客户名称: " prop="name">
                  <span>张三的公司</span>
                </el-form-item>
              </el-col>
              <el-col :span="8"></el-col>
              <el-col :span="8">
                <el-form-item label="联系人: " prop="name">
                  <span>张三</span>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="社会信用代码: " prop="name">
                  <span>XXXX</span>
                </el-form-item>
              </el-col>
              <el-col :span="8"></el-col>
              <el-col :span="8">
                <el-form-item label="联系电话: " prop="name">
                  <span>13121111111</span>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="企业电话: " prop="name">
                  <span>0512-69999999</span>
                </el-form-item>
              </el-col>
              <el-col :span="8"></el-col>
              <el-col :span="8">
                <el-form-item label="客户等级: " prop="name">
                  <span>普通</span>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="联系地址: " prop="name">
                  <span>无</span>
                </el-form-item>
              </el-col>
              <el-col :span="8"></el-col>
              <el-col :span="8">
                <el-form-item label="企业邮箱: " prop="name">
                  <span>无</span>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="客户来源: " prop="region">
                  <span>渠道-网站</span>
                </el-form-item>
              </el-col>
              <el-col :span="8"></el-col>
              <el-col :span="8">
                <el-form-item label="客户代表: " prop="name">
                  <span>邓XX</span>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="12">
                <el-form-item label="备注: " prop="pass">
                  <span>客户要求高</span>
                </el-form-item>
              </el-col>
              <el-col :span="12"></el-col>
            </el-row>
          </el-form>
        </el-collapse-item>
        <img class="base-information-icon" src="../assets/images/newAccountPage/arrow.png" alt="">
        <el-collapse-item title="文档资料: " name="2">
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-row>
              <el-col :span="8">
                <el-form-item label="身份证复印件: " prop="name">
                  <img src="" alt="">
                </el-form-item>
              </el-col>
              <el-col :span="8"></el-col>
              <el-col :span="8">
                <el-form-item label="营业执照复印件: " prop="name">
                  <img src="" alt="">
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="6">
                <el-form-item label="合同原件" prop="name">
                  <img src="" alt="">
                </el-form-item>
              </el-col>
              <el-col :span="12"></el-col>
              <el-col :span="6"></el-col>
            </el-row>
          </el-form>
        </el-collapse-item>
        <img class="base-information-icon" src="../assets/images/newAccountPage/arrow.png" alt="">
        <el-collapse-item title="财税信息" name="3">
          <el-form ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-row>
              <el-col :span="24">
                <el-button type="primary">显示记账方式</el-button>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="月服务费: " prop="name">
                  <span>500.00</span>
                </el-form-item>
              </el-col>
              <el-col :span="8"></el-col>
              <el-col :span="8">
                <el-form-item label="服务周期: " prop="name">
                  <span>5月+赠送1月</span>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="服务开始月: " prop="name">
                  <span>2020-01</span>
                </el-form-item>
              </el-col>
              <el-col :span="8"></el-col>
              <el-col :span="8">
                <el-form-item label="剩余赠送月: " prop="name">
                  <span>1月</span>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="剩余服务月: " prop="name">
                  <span>5月</span>
                </el-form-item>
              </el-col>
              <el-col :span="8"></el-col>
              <el-col :span="8">
                <el-form-item label="当前报税期: " prop="name">
                  <span>2020-01</span>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="付费周期: " prop="name">
                  <span>季付</span>
                </el-form-item>
              </el-col>
              <el-col :span="16"></el-col>
            </el-row>
          </el-form>
        </el-collapse-item>
        <img class="base-information-icon" src="../assets/images/newAccountPage/arrow.png" alt="">
        <el-collapse-item title="流程列表: " name="4">
          <el-table
            :data="tableData"
            style="width: 100%">
            <el-table-column
              type="index"
              :index="indexMethod">
            </el-table-column>
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
                <el-button type="primary">确认</el-button>
                <el-button>取消</el-button>
              </div>
            </el-dialog>
          </div>
        </el-collapse-item>
        <img class="base-information-icon" src="../assets/images/newAccountPage/arrow.png" alt="">
        <el-collapse-item title="代帐报表: " name="4">
          <el-table
            :data="tableData"
            style="width: 100%">
            <el-table-column
              type="index"
              :index="indexMethod">
            </el-table-column>
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
                <el-button type="primary">确认</el-button>
                <el-button>取消</el-button>
              </div>
            </el-dialog>
          </div>
        </el-collapse-item>
      </div>
    </el-collapse>
  </div>
</template>
<script>
export default {
  metaInfo: {
    title: '客户详情'
  }
}
</script>

<style scoped>
.view-account{
  width: 94%;
  margin: 0 auto;
  margin-top: 40px;
  height: 150%;
}
.view-account-title{
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
</style>
