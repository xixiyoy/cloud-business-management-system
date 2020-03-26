<template>
  <div class="channel-dealer-management">
      <p class="channel-dealer-management-title">渠道管理</p>
      <div class="dividing-line"></div>
     <div class="channel-dealer-management-header">
       <el-row :gutter="20">
         <el-col :span="3">
           <div class="grid-content bg-purple">
              <el-button type="primary" style="padding: 12px 26px;" @click="handleClickCreateChannelDealer">+新增渠道商</el-button>
            </div>
         </el-col>
         <el-col :span="7"><div class="grid-content bg-purple"></div></el-col>
         <el-col :span="10"><div class="grid-content bg-purple"></div></el-col>
         <el-col :span="4" style="float: right;">
            <div class="grid-content bg-purple">
              <div>
                <el-input placeholder="搜索渠道名称" class="input-with-select">
                  <el-button slot="append" icon="el-icon-search"></el-button>
                </el-input>
              </div>
            </div>
          </el-col>
       </el-row>
     </div>
     <div style="width:100%">
      <el-table
        :data="tableData"
        :header-cell-style="serviceProductTableHeaderCellStyle"
        style="width: 100%">
        <el-table-column
          label="渠道商名称"
          prop="name">
        </el-table-column>
        <el-table-column
          label="联系人"
          prop="contactPerson">
        </el-table-column>
        <el-table-column
          label="联系方式"
          prop="contactDetails">
        </el-table-column>
        <el-table-column
          label="渠道负责人"
          prop="principal">
        </el-table-column>
        <el-table-column
          label="资源归属"
          prop="resourceAttribution">
        </el-table-column>
        <el-table-column
          label="创建人"
          prop="createPerson">
        </el-table-column>
        <el-table-column
          label="创建日期"
          prop="createDate">
        </el-table-column>
        <el-table-column label="操作" width="180">
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="text"
              @click="handleViewChannelProvider">详情</el-button>
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
    title: '渠道商管理'
  },
  data () {
    return {
      tableData: [{
        name: '公司网站',
        contactPerson: '朱颜',
        contactDetails: '13256835746',
        principal: '朱颜',
        resourceAttribution: '公司资源',
        createPerson: '老刘',
        createDate: '2016-05-02'
      }, {
        name: '公司网站',
        contactPerson: '朱颜',
        contactDetails: '13256835746',
        principal: '朱颜',
        resourceAttribution: '自拓客户',
        createPerson: '钱磊',
        createDate: '2016-05-02'
      }, {
        name: '公司网站',
        contactPerson: '朱颜',
        contactDetails: '13256835746',
        principal: '朱颜',
        resourceAttribution: '自拓客户',
        createPerson: '钱磊',
        createDate: '2016-05-02'
      }, {
        name: '公司网站',
        contactPerson: '朱颜',
        contactDetails: '13256835746',
        principal: '朱颜',
        resourceAttribution: '自拓客户',
        createPerson: '钱磊',
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
    },
    handleClickCreateChannelDealer () {
      this.$router.push({ path: '/create-channel-provider' })
    },
    handleViewChannelProvider () {
      this.$router.push({ path: '/view-channel-provider' })
    }
  }
}
</script>

<style>
.channel-dealer-management{
  width: 94%;
  margin: 0 auto;
  margin-top: 40px;
}
.channel-dealer-management-header{
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
.channel-dealer-management-title{
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
</style>
