<template>
  <div class="create-product">
    <div class="create-product-title">新增产品
    <div class="dividing-line"></div>
    <div class="create-product-main">
      <el-form label-width="120px" class="demo-ruleForm">
        <el-row>
          <el-col :span="7">
             <el-form-item label="产品板块: " prop="region" required>
              <div class="block">
                <el-cascader
                  v-model="createProductForm.productMoudelName"
                  :options="options"
                  @change="handleNameChange"></el-cascader>
              </div>
              <!-- <el-select placeholder="请选择" style="width:290px;">
                  <el-option label="工商服务" v-model="createProductForm.productMoudelName"></el-option>
                  <el-option label="银行服务"></el-option>
                  <el-option label="人事服务"></el-option>
                  <el-option label="知识产权"></el-option>
                  <el-option label="法律服务"></el-option>
                  <el-option label="其他服务"></el-option>
                  <el-option label="行业资质许可证"></el-option>
                  <el-option label="培训"></el-option>
              </el-select> -->
             </el-form-item>
          </el-col>
          <el-col :span="7">
            <el-form-item label="产品名称: " prop="name" required>
              <el-input placeholder="请输入" v-model="createProductForm.productName"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="指导价格(元): " required>
              <el-col :span="11">
                <el-form-item prop="">
                  <el-input></el-input>
                </el-form-item>
              </el-col>
              <el-col class="line" :span="2" style="text-align: center;">至</el-col>
              <el-col :span="11">
                <el-form-item prop="">
                  <el-input></el-input>
                </el-form-item>
              </el-col>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="6">
            <el-form-item label="产品单位: " prop="region" required>
              <el-select placeholder="次" style="width:290px;">
                <el-option label="月" value="shanghai"></el-option>
                <el-option label="人/天" value="beijing"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="概述: " prop="name">
              <el-input placeholder="请输入" v-model="createProductForm.isUp"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-card>
            <div slot="header" class="clearfix">
              <span>产品描述：</span>
            </div>
            <froala id="edit" :tag="'textarea'" :config="config" v-model="createProductForm.productSummy"></froala>
          </el-card>
        </el-row>
        <el-button>取 消</el-button>
        <el-button type="primary">确 定</el-button>
      </el-form>
    </div>
    </div>
  </div>
</template>

<script>
import { Message } from 'element-ui'
import { createProduct } from '../api/product'

export default {
  metaInfo: {
    title: '新建产品'
  },
  data () {
    return {
      value: [],
      options: [{
        value: 'GSFW',
        label: '工商服务',
        children: [{
          value: 'zhuce',
          label: '注册'
        }, {
          value: 'biangeng',
          label: '变更'
        }, {
          value: 'zhuxiao',
          label: '注销'
        }, {
          value: 'qita',
          label: '其他'
        }]
      }, {
        value: 'YHFW',
        label: '银行服务',
        children: [{
          value: 'yhfw',
          label: '银行服务'
        }, {
          value: 'qita',
          label: '其他'
        }]
      }, {
        value: 'RSFW',
        label: '人事服务',
        children: [{
          value: 'sbgjj',
          label: '社保公积金'
        }, {
          value: 'jzzhk',
          label: '居住证户口'
        }, {
          value: 'lwzp',
          label: '劳务招聘'
        }, {
          value: 'qita',
          label: '其他'
        }]
      }, {
        value: 'ZSCQ',
        label: '知识产权',
        children: [{
          value: 'sb',
          label: '商标'
        }, {
          value: 'zzq',
          label: '著作权'
        }, {
          value: 'zl',
          label: '专利'
        }, {
          value: 'gltxrz',
          label: '管理体系认证'
        }, {
          value: 'qita',
          label: '其他'
        }]
      }, {
        value: 'FLFW',
        label: '法律服务',
        children: [{
          value: 'flfw',
          label: '法律服务'
        }, {
          value: 'qita',
          label: '其他'
        }]
      }, {
        value: 'QTFW',
        label: '其他服务',
        children: [{
          value: 'jj',
          label: '加急'
        }, {
          value: 'kz',
          label: '刻章'
        }, {
          value: 'ysbb',
          label: '遗失补办'
        }, {
          value: 'yccl',
          label: '异常处理'
        }, {
          value: 'qita',
          label: '其他'
        }]
      }, {
        value: 'HYZZXKZ',
        label: '行业资质许可证',
        children: [{
          value: 'dslzz',
          label: '电商类资质'
        }, {
          value: 'jzlzz',
          label: '建筑类资质'
        }, {
          value: 'rlzylzz',
          label: '人力资源来资质'
        }, {
          value: 'spcylzz',
          label: '食品餐饮类资质'
        }, {
          value: 'wlyxlzz',
          label: '网络游戏类资质'
        }, {
          value: 'whcbyyzz',
          label: '文化出版运营资质'
        }, {
          value: 'yllzz',
          label: '医疗类资质'
        }, {
          value: 'qita',
          label: '其他'
        }]
      }, {
        value: 'PX',
        label: '培训',
        children: [{
          value: 'zyjnpx',
          label: '职业技能培训'
        }, {
          value: 'ywpx',
          label: '业务培训'
        }, {
          value: 'qita',
          label: '其他'
        }]
      }],
      config: {
        events: {
          initialized: function () {
            console.log('initialized')
          }
        }
      },
      model: 'Edit Your Content Here!',
      createProductForm: {
        createProductForm: '',
        productSummy: '',
        isUp: '',
        productName: '',
        productMoudelName: '',
        activeIndex: '2'
      }
    }
  },
  methods: {
    handleNameChange (value) {
      console.log(value)
    },
    handleCreateProductButtonClick () {
      createProduct(this.getServiceProductFrom).then(({ data: response }) => {
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
      this.createProduct()
    },
    createProduct () {
      this.$store.dispatch('createProduct', this.createProductForm)
    }
  }
}
</script>

<style>
.create-product{
  width: 94%;
  margin: 0 auto;
  margin-top: 40px;
}
.create-product-title{
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
.create-product-main{
  margin-top: 25px;
}

.fr-wrapper > div:nth-child(1) {
  display: none;
}
</style>
