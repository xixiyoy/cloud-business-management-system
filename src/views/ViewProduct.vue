<template>
  <div class="create-product">
    <div class="create-product-title">产品详情
    <div class="dividing-line"></div>
    <div class="create-product-main">
      <el-form label-width="120px" class="demo-ruleForm">
        <el-row>
          <el-col :span="6">
             <el-form-item label="产品板块: " required>
              <div class="block">
                <el-cascader
                  v-model="productMoudleName"
                  @change="handleProductModuleChange"
                  :options="options">
                </el-cascader>
              </div>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="产品名称: " required>
              <el-input v-model="updateProductForm"></el-input>
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
                <el-form-item>
                  <el-input></el-input>
                </el-form-item>
              </el-col>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="6">
            <el-form-item label="产品单位: " required>
              <el-select placeholder="次" style="width:290px;">
                <el-option label="月"></el-option>
                <el-option label="人/天"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="概述: ">
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
import { mapState } from 'vuex'

export default {
    metaInfo: {
    title: '查看产品'
  },
  data () {
      return {}
  },
  methods: {
    async getProduct () {
      this.$store.dispatch('getProductById', this.productId)
    }
  },
  mounted () {
    this.productId = this.$store.query.productId
    this.getProduct()
  },
  computed: {
    ...mapState({
      product: state => state.product.product
    })
  }
}
</script>