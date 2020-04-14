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
        :data="channelList.page.list"
        :header-cell-style="serviceProductTableHeaderCellStyle"
        border="ture"
        style="width: 100%">
        <el-table-column
          label="渠道商名称"
          :show-overflow-tooltip="true"
          prop="name">
        </el-table-column>
        <el-table-column
          label="联系人"
          prop="linkerName">
        </el-table-column>
        <el-table-column
          label="联系方式"
          prop="linkerMobile">
        </el-table-column>
        <el-table-column
          label="渠道负责人"
          prop="dutyUserName">
        </el-table-column>
        <el-table-column
          label="资源归属"
          prop="channelBelongName">
        </el-table-column>
        <el-table-column
          label="创建人"
          prop="createUserName">
        </el-table-column>
        <el-table-column
          label="创建日期"
          :show-overflow-tooltip="true"
          prop="createTime">
        </el-table-column>
        <el-table-column label="操作" width="180">
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="text"
              @click="handleViewChannelProvider(scope.row)">详情</el-button>
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
          :current-page="getChannelList.page"
          :total="channelList.page.totalCount">
        </el-pagination>
      </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'

export default {
  metaInfo: {
    title: '渠道商管理'
  },
  data () {
    return {
      getChannelList: {
        page: 1,
        limit: 10
      }
    }
  },
  methods: {
    handleDelete (index, row) {
      const channelIds = [
        row.channelId
      ]
      this.$store.dispatch('deleteChannel', channelIds).then(() => {
        this.getChannelList()
      })
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
    handleViewChannelProvider (row) {
      this.$router.push({ path: '/view-channel-provider', query: { channelId: row.channelId } })
    },
    getChannels () {
      this.$store.dispatch('getChannelList', this.getChannelList)
    },
    handleCurrentChangeClick (currentPage) {
      this.getChannelList.page = currentPage
      this.getChannels()
    }
  },
  mounted () {
    this.getChannels()
  },
  computed: {
    ...mapState({
      channelList: state => state.channel.channels
    })
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
