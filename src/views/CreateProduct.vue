<template>
  <div class="create-product">
    <div class="create-product-title">新增产品
    <div class="dividing-line"></div>
    <div class="create-product-main">
      <el-form label-width="120px" class="demo-ruleForm">
        <el-row>
          <el-col :span="7">
             <el-form-item label="产品板块: " prop="region" required>
              <el-select placeholder="请选择" style="width:290px;">
                <el-option label="工商服务" value="shanghai" v-model="createProductForm.productMoudelName"></el-option>
                <el-option label="银行服务" value="beijing"></el-option>
                <el-option label="人事服务" value="beijing"></el-option>
                <el-option label="知识产权" value="beijing"></el-option>
                <el-option label="法律服务" value="beijing"></el-option>
                <el-option label="其他服务" value="beijing"></el-option>
                <el-option label="行业资质许可证" value="beijing"></el-option>
                <el-option label="培训" value="beijing"></el-option>
              </el-select>
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
        productMoudelName: ''
      }
    }
  },
  methods: {
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
