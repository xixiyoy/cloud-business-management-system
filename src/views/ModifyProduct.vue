<template>
  <div class="create-product">
    <div class="create-product-title">产品详情
    <div class="dividing-line"></div>
    <div class="create-product-main">
      <el-form label-width="120px" class="demo-ruleForm">
        <el-row>
          <el-col :span="6">
             <el-form-item label="产品板块: " prop="region" required>
              <el-select style="width:290px;">
                <el-option label="工商服务"></el-option>
                <el-option label="财税服务"></el-option>
                <el-option label="银行服务"></el-option>
                <el-option label="人事服务"></el-option>
                <el-option label="知识产权"></el-option>
                <el-option label="法律服务"></el-option>
                <el-option label="其他服务"></el-option>
                <el-option label="行业资质许可证"></el-option>
                <el-option label="培训"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="产品名称: " prop="name" required>
              <el-input placeholder="请输入"></el-input>
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
              <el-input placeholder="请输入"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-card>
            <div slot="header" class="clearfix">
              <span>产品描述：</span>
            </div>
            <froala id="edit" :tag="'textarea'" :config="config" v-model="model"></froala>
          </el-card>
        </el-row>
        <el-button>取 消</el-button>
        <el-button type="primary" @click="handleUpdateProductButtonClick">确 定</el-button>
      </el-form>
    </div>
    </div>
  </div>
</template>

<script>
import { Message } from 'element-ui'
import { mapState } from 'vuex'
export default {
  metaInfo: {
    title: '新建产品'
  },
  data () {
    return {
      productId: 1,
      updateProductForm: {},
      config: {
        events: {
          initialized: function () {
            console.log('initialized')
          }
        }
      },
      model: 'Edit Your Content Here!'
    }
  },
  methods: {
    getProduct () {
      this.$store.dispatch('getProductById', this.productId)
    },
    handleUpdateProductButtonClick () {
      this.$store.dispatch('updateProduct', this.product).then(({ data: response }) => {
        const { code, msg } = response
        if (code === 0) {
          Message({
            message: '保存成功',
            type: 'success'
          })
          this.$route.push({ path: '/service-product' })
        } else {
          Message({
            message: msg,
            type: 'error'
          })
        }
      })
    }
  },
  mounted () {
    this.productId = this.$route.query.productId
    this.getProduct()
    this.updateProductForm = this.product
  },
  computed: {
    ...mapState({
      product: state => state.product.product
    })
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
