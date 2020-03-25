<template>
  <div class="serviceProduct">
      <p class="servuceProduct-title">下载中心</p>
      <div class="dividing-line"></div>
     <div class="serviceProduct-header">
       <el-row :gutter="20">
         <el-col :span="4">
           <div class="grid-content bg-purple">
             <el-date-picker
                type="date"
                placeholder="选择日期">
              </el-date-picker>
           </div>
         </el-col>
         <el-col :span="15">
           <el-dropdown>
            <el-button>
              全部模块<i class="el-icon-arrow-down el-icon--right"></i>
            </el-button>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>模块一</el-dropdown-item>
              <el-dropdown-item>模块二</el-dropdown-item>
              <el-dropdown-item>模块三</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
         </el-col>
         <el-col :span="4" style="float: right;">
            <div class="grid-content bg-purple">
              <div>
                <el-input placeholder="搜索产品名称" v-model="input5" class="input-with-select">
                  <el-button slot="append" icon="el-icon-search"></el-button>
                </el-input>
              </div>
            </div>
          </el-col>
       </el-row>
     </div>
     <div style="width:100%">
      <el-table
        border="dark"
        :data="tableData"
        :header-cell-style="serviceProductTableHeaderCellStyle"
        style="width: 100%">
        <el-table-column
          label="报表名称"
          prop="reportName">
        </el-table-column>
        <el-table-column
          label="报表分类"
          prop="reportType">
        </el-table-column>
        <el-table-column
          label="所属业务板块"
          prop="guidePrBusinessSegmentice">
        </el-table-column>
        <el-table-column
          label="下载次数"
          prop="doenloadTimes">
        </el-table-column>
        <el-table-column
          label="创建人"
          prop="founder">
        </el-table-column>
        <el-table-column
          label="创建日期"
          prop="createDate">
        </el-table-column>
        <el-table-column label="操作" width="180">
          <template slot-scope="scope">
            <el-button
              class="detail-button"
              size="mini"
              type="text">下载</el-button>
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
          :total="1000">
        </el-pagination>
      </div>
  </div>
</template>
<script>
export default {
  metaInfo: {
    title: '下载中心'
  },
  data () {
    return {
      tableData: [{
        reportName: '客户列表',
        reportType: '导出',
        guidePrBusinessSegmentice: '客户模块',
        doenloadTimes: '1',
        founder: '老刘',
        createDate: '2016-05-02'
      }, {
        reportName: '客户列表',
        reportType: '导出',
        guidePrBusinessSegmentice: '客户模块',
        doenloadTimes: '1',
        founder: '老刘',
        createDate: '2016-05-02'
      }, {
        reportName: '客户列表',
        reportType: '导出',
        guidePrBusinessSegmentice: '客户模块',
        doenloadTimes: '1',
        founder: '老刘',
        createDate: '2016-05-02'
      }, {
        reportName: '客户列表',
        reportType: '导出',
        guidePrBusinessSegmentice: '客户模块',
        doenloadTimes: '1',
        founder: '老刘',
        createDate: '2016-05-02'
      }]
    }
  },
  methods: {
    handleDelete (index, row) {
      console.log(index, row)
    },
    serviceProductTableHeaderCellStyle ({ row, column, rowIndex, columnIndex }) {
      if (rowIndex === 0) {
        return `
          background-color: #f5f7fa;
        `
      }
    }
  }
}
</script>

<style scoped>
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
    &:last-child {
      margin-bottom: 0;
    }
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
.el-table td, .el-table th.is-leaf{
  border: 1px solid #DCDFE6;
  text-align: center;
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
