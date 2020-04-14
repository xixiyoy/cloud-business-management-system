<template>
  <div class="serviceProduct">
      <p class="servuceProduct-title">服务产品</p>
      <div class="dividing-line"></div>
     <div class="serviceProduct-header">
       <el-row :gutter="20">
         <el-col :span="19">
           <div class="grid-content bg-purple">
              <el-button type="primary" style="padding: 12px 26px;" @click="handleCreateProduct">新建产品</el-button>
            </div>
         </el-col>
         <el-col :span="4" style="float: right;">
            <div class="grid-content bg-purple">
              <div>
                <el-input placeholder="搜索产品名称" class="input-with-select">
                  <el-button slot="append" icon="el-icon-search"></el-button>
                </el-input>
              </div>
            </div>
          </el-col>
       </el-row>
     </div>
     <div style="width:100%">
      <el-table
        :data="productList.page.list"
        :header-cell-style="serviceProductTableHeaderCellStyle"
        border="ture"
        style="width: 100%">
        <el-table-column
          label="产品板块"
          prop="productMoudleName">
        </el-table-column>
        <el-table-column
          label="产品名称"
          prop="productName">
        </el-table-column>
        <el-table-column
          label="指导价格"
          prop="productPrice">
        </el-table-column>
        <el-table-column
          label="创建日期"
          prop="createTime">
        </el-table-column>
        <el-table-column label="操作" width="180">
          <template slot-scope="scope">
            <el-button
              class="detail-button"
              size="mini"
              type="text"
              @click="handleViewProduct(scope.row)">详情</el-button>
            <el-button
              size="mini"
              type="text"
              @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
     </div>
     <div style="margin-top: 20px">
        <el-pagination
          background
          layout="total,prev, pager, next"
          @current-change="handleCurrentChangeClick"
          :current-page="getServiceProductList.page"
          :total="productList.page.totalCount">
        </el-pagination>
      </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'

export default {
  metaInfo: {
    title: '服务产品'
  },
  data () {
    return {
      getServiceProductList: {
        page: 1,
        limit: 10
      }
    }
  },
  methods: {
    handleDelete (index, row) {
      const productIds = [
        row.productId
      ]
      this.$store.dispatch('deleteProduct', productIds).then(() => {
        this.getServiceProductList()
      })
    },
    serviceProductTableHeaderCellStyle ({ row, column, rowIndex, columnIndex }) {
      if (rowIndex === 0) {
        return `
          background-color: #f5f7fa;
        `
      }
    },
    handleViewProduct (row) {
      this.$router.push({ path: '/modify-product', query: { productId: row.productId } })
    },
    handleCreateProduct () {
      this.$router.push({ path: '/create-product' })
    },
    getProductList () {
      this.$store.dispatch('getServiceProductList', this.getServiceProductList)
    },
    handleCurrentChangeClick (currentPage) {
      this.getFiancesForm.page = currentPage
      this.getServiceProductList()
    }
  },
  mounted () {
    this.getProductList()
  },
  computed: {
    ...mapState({
      productList: state => state.product.products
    })
  }
}
</script>

<style>
.serviceProduct{
  width: 94%;
  margin: 0 auto;
  margin-top: 40px;
}
.serviceProduct-header{
  padding-top: 20px;
}
.el-container{
  height: 100%;
}
.title-name{
  font-family: '微软雅黑';
  font-weight: 400;
  font-size: 12px !important;
  color: #333 !important;
  padding-right: none;
  line-height: 20px;
}
.el-row {
    margin-bottom: 20px;
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
.el-main{
  line-height: 10px;
}
#u829_img{
  position: relative;
  top: 2px;
}
.el-table td, .el-table th{
  padding: 19px 0;
}
.el-col-3{
  width:7.5%;
}

.el-table-column--selection{
  display: none;
}
.servuceProduct-title{
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
.el-tag{
  display: inline-block;
  height: 32px;
  padding: 0 10px;
  line-height: 30px;
  font-size: 14px !important;
  color: #111;
  border-style: solid;
  border-radius: 4px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  white-space: nowrap;
  background-color: #fff;
  border: none;
}
.el-button--danger{
  background-color: #fff !important;
  color: #111;
  border: none;
}
.detail-button{
  border: none;
}
</style>
