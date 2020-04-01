<template>
  <div class="create-channel-providerd">
    <p class="create-channel-providerd-title">新建渠道商</p>
    <div class="dividing-line"></div>
    <div class="create-channel-providerd-main">
      <el-row>
        <el-col :span="8">
          <el-form label-width="100px" class="demo-ruleForm">
            <el-form-item label="渠道商名称" prop="name" required="">
              <el-input v-model="createChannelForm.name"></el-input>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8">
          <el-form label-width="100px" class="demo-ruleForm">
            <el-form-item label="联系人" prop="name" required="">
              <el-input v-model="createChannelForm.linker_name"></el-input>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8">
          <el-form label-width="100px" class="demo-ruleForm">
            <el-form-item label="手机号" prop="name" required="">
              <el-input v-model="createChannelForm.linker_mobile"></el-input>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form label-width="100px" class="demo-ruleForm">
            <el-form-item label="资源归属" prop="region" required="">
              <el-select placeholder="请选择" v-model="createChannelForm.channelBelongName">
                <el-option label="负责人归属" value="shanghai"></el-option>
                <el-option label="公司资源" value="beijing"></el-option>
              </el-select>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form label-width="100px" class="demo-ruleForm">
            <el-form-item label="渠道负责人" prop="region" required="">
              <el-select placeholder="请选择" v-model="createChannelForm.dutyUserName">
                <el-option label="一" value="shanghai"></el-option>
                <el-option label="二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form ref="form" label-width="100px">
            <el-form-item label="备注">
              <el-input type="textarea" v-model="createChannelForm.remark"></el-input>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
    </div>
    <el-button>取消</el-button>
    <el-button type="primary">保存</el-button><br><br><br><br>
  </div>
</template>
<script>
import { Message } from 'element-ui'
import { createChannel } from '../api/channel'

export default {
  metaInfo: {
    title: '新建渠道商'
  },
  data () {
    return {
      createChannelForm: {
        name: '',
        linker_name: '',
        remark: '',
        channelBelongName: '',
        dutyUserName: ''
      }
    }
  },
  methods: {
    handelCreteChannelButtonClick () {
      createChannel(this.getChannelForm).then(({ data: response }) => {
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
      this.createChannel()
    },
    createChannel () {
      this.$store.dispatch('createChannel', this.createChannelForm)
    }
  }
}
</script>

<style scoped>
.create-channel-providerd{
  width: 94%;
  margin: 0 auto;
  margin-top: 40px;
}
.create-channel-providerd-title{
  font-size: 20px;
  color: #333;
  text-align: left;
  line-height: 10px;
}
.create-channel-providerd-main{
  margin-top: 20px;
}
</style>
