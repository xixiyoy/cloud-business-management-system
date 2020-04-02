<template>
  <div class="view-channel-providerd">
    <p class="view-channel-providerd-title">查看渠道商详情</p>
    <div class="dividing-line"></div>
    <div class="view-channel-providerd-main">
      <el-row>
        <el-col :span="20">
          <el-form label-width="100px" class="demo-ruleForm">
            <el-form-item label="渠道商名称: " prop="name" required="">
              <span>{{channel.name}}</span>
            </el-form-item>
          </el-form>
        </el-col>
        <el-col :span="4">
          <el-button @click="modifyViewChannelProvider">修改内容</el-button>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8">
          <el-form label-width="100px" class="demo-ruleForm">
            <el-form-item label="联系人: " prop="name" required="">
              <span>{{channel.linkerName}}</span>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8">
          <el-form label-width="100px" class="demo-ruleForm">
            <el-form-item label="手机号: " prop="name" required="">
              <span>{{channel.linkerMobile}}</span>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form label-width="100px" class="demo-ruleForm">
            <el-form-item label="资源归属: " prop="region" required="">
              <span>{{channel.channelBelongName}}</span>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form label-width="100px" class="demo-ruleForm">
            <el-form-item label="渠道负责人: " prop="region" required="">
              <span>{{channel.dutyUserName}}</span>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form ref="form" label-width="100px">
            <el-form-item label="备注: ">
              <span>{{channel.remark}}</span>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
    </div>
    <br><br><br><br>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  metaInfo: {
    title: '查看详情'
  },
  data () {
    return {
      channel: {},
      channelId: 1
    }
  },
  methods: {
    modifyViewChannelProvider () {
      this.$router.push({ path: '/modify-channel-provider', query: { channelId: this.channelId } })
    },
    getChannel () {
      this.$store.dispatch('getChannelById', this.channelId)
    }
  },
  computed: {
    ...mapState({
      channel: state => state.channel.channel
    })
  },
  mounted () {
    this.channelId = this.$route.query.channelId
    this.getChannel()
  }
}
</script>

<style scoped>
.view-channel-providerd{
  width: 94%;
  margin: 0 auto;
  margin-top: 40px;
}
.view-channel-providerd-title{
  font-size: 20px;
  color: #333;
  text-align: left;
  line-height: 10px;
}
.view-channel-providerd-main{
  margin-top: 20px;
}
.dividing-line{
  width: 100%;
  height: 1px;
  background-color: #DCDFE6;
  margin-top: 25px;
}
</style>
