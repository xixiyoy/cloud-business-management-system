<template>
  <div class="home">
     <el-row>
       <el-col :span="6">
         <div class="home-header-data-show">
          <el-card class="box-card">
            <div class="text item">
              <div style="100%;">
                <div class="date-show-custom">
                  <p class="data-font-custom">总客户数</p>
                  <p class="dynamic-value">{{ homeBaseInfo.customerCount }}</p><br><br>
                </div>
                <div class="icon-custom">
                  <img class="date-icon-custom" src="../assets/images/home/u167.png" alt="">
                </div>
                <img class="date-icon-second" src="../assets/images/home/u169.png" alt="">
              </div>
              <div class="date-total-show">
                <img class="date-total-icon" src="../assets/images/home/u171.svg" alt="">
                <span class="date-total-dynamic-value">3.48%</span>
                <span class="date-total-summary">自上个月以来</span>
              </div>
            </div>
          </el-card>
        </div>
       </el-col>
       <el-col :span="6">
         <div class="home-header-data-show">
           <el-card class="box-card">
            <div class="text item">
              <div style="100%;">
                <div class="date-show-custom">
                  <p class="data-font-custom">订单总数</p>
                  <p class="dynamic-value">{{ homeBaseInfo.accountCustomerCount }}</p><br><br>
                </div>
                <div class="icon-custom">
                  <img class="date-icon-custom" src="../assets/images/home/u177.png" alt="">
                </div>
                <img class="date-icon-second" src="../assets/images/home/u179.png" alt="">
              </div>
              <div class="date-total-show">
                <img class="date-total-icon" src="../assets/images/home/u171.svg" alt="">
                <span class="date-total-dynamic-value">3.48%</span>
                <span class="date-total-summary">自上个月以来</span>
              </div>
            </div>
          </el-card>
        </div>
       </el-col>
       <el-col :span="6">
         <div class="home-header-data-show">
           <el-card class="box-card">
            <div class="text item">
              <div style="100%;">
                <div class="date-show-custom">
                  <p class="data-font-custom">总代帐数</p>
                  <p class="dynamic-value">{{ homeBaseInfo.taskCount }}</p><br><br>
                </div>
                <div class="icon-custom">
                  <img class="date-icon-custom" src="../assets/images/home/u189.png" alt="">
                </div>
                <img class="date-icon-second" src="../assets/images/home/u191.png" alt="">
              </div>
              <div class="date-total-show">
                <img class="date-total-icon" src="../assets/images/home/u171.svg" alt="">
                <span class="date-total-dynamic-value">3.48%</span>
                <span class="date-total-summary">自上个月以来</span>
              </div>
            </div>
          </el-card>
        </div>
       </el-col>
       <el-col :span="6">
         <div class="home-header-data-show">
          <el-card class="box-card">
            <div class="text item">
              <div style="100%;">
                <div class="date-show-custom">
                  <p class="data-font-custom">总开票数</p>
                  <p class="dynamic-value">{{ homeBaseInfo.invoiceCount }}</p><br><br>
                </div><br><br>
                <div class="icon-custom">
                  <img class="date-icon-custom" src="../assets/images/home/u200.png" alt="">
                </div>
                <img class="date-icon-second" src="../assets/images/home/u203.png" alt="">
              </div>
              <div class="date-total-show">
                <img class="date-total-icon" src="../assets/images/home/u171.svg" alt="">
                <span class="date-total-dynamic-value">3.48%</span>
                <span class="date-total-summary">自上个月以来</span>
              </div>
            </div>
          </el-card>
        </div>
       </el-col>
     </el-row>
     <el-row style="margin-top:40px;">
       <el-col :span="16">
         <div class="chart-custom">
           <el-card class="box-card">
            <div class="text item">
              <p class="chart-custom-title">概况</p>
              <ve-line :data="chartData" :settings="chartSettings" :extend="chartExtend"></ve-line>
            </div>
          </el-card>
         </div>
       </el-col>
       <el-col :span="8">
         <div class="chart-custom">
          <el-card class="box-card">
            <div class="text item">
              <ve-histogram :data="chartData" :settings="chartSettings"></ve-histogram>
            </div>
          </el-card>
         </div>
       </el-col>
     </el-row>
     <el-row style="margin-top:40px;">
       <el-col :span="8">
         <div class="team-member-custom">
            <el-card class="box-card">
              <div class="text item">
                <p class="team-member-title">团队成员</p>
                    <el-table
                      :data="members.userList"
                      style="width: 100%">
                      <el-table-column
                        prop="userName"
                        align="left">
                      </el-table-column>
                    </el-table>
                <p></p>
              </div>
            </el-card>
         </div>
       </el-col>
       <el-col :span="8">
         <div class="team-member-custom">
            <el-card class="box-card">
              <div class="text item">
                <el-badge :value="homeBaseInfo.receiveTaskList.length" class="item">
                <p class="team-member-title">进度跟踪</p>
                </el-badge>
                <div v-for="(receiveTask, index) in homeBaseInfo.receiveTaskList" :key="index">
                  {{ receiveTask.relUserName }} 将 {{ receiveTask.productName }} 移交给你，请接受！
                </div>
              </div>
            </el-card>
         </div>
       </el-col>
       <el-col :span="8">
         <div class="team-member-custom">
            <el-card class="box-card">
              <div class="text item">
                <p class="team-member-title">进度跟踪</p>
                <div v-for="(taskFlow, index) in homeBaseInfo.taskFollwList" :key="index">
                  {{ taskFlow.customerName }}-{{ taskFlow.productName }} - 当前进度 {{ getMonth(taskFlow.taxDate) }} 月
                </div>
              </div>
            </el-card>
         </div>
       </el-col>
     </el-row><br><br><br>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'Home',
  data () {
    this.chartSettings = {
      metrics: ['总额'],
      dimension: ['日期'],
      yAxisName: ['总额']
    }
    this.chartExtend = {
      series: {
        smooth: false
      }
    }
    return {
      getHomeBaseForm: {
        type: 'business:home:all'
      },
      getDeptMembers: {},
      chartData: {
        columns: ['日期', '总额'],
        rows: [
          { 日期: '1 月', 总额: 1093 },
          { 日期: '2 月', 总额: 3230 },
          { 日期: '3 月', 总额: 2623 },
          { 日期: '4 月', 总额: 1423 },
          { 日期: '5 月', 总额: 3492 },
          { 日期: '6 月', 总额: 3492 },
          { 日期: '7 月', 总额: 3492 },
          { 日期: '8 月', 总额: 3492 },
          { 日期: '9 月', 总额: 3492 },
          { 日期: '10 月', 总额: 3492 },
          { 日期: '11 月', 总额: 3492 },
          { 日期: '12 月', 总额: 3492 }
        ]
      }
    }
  },
  methods: {
    getMembers () {
      this.$store.dispatch('getDeptMembers', this.getDeptMembers)
    },
    async getBaseInfo () {
      await this.$store.dispatch('getHomeBase', this.getHomeBaseForm)
    },
    getMonth (taxDate) {
      return new Date(taxDate).getMonth() + 1
    }
  },
  mounted () {
    this.getMembers()
    this.getBaseInfo().then(() => {
      this.chartData.rows = []
      const rows = this.homeBaseInfo.allTaskMap
      for (const dot in rows) {
        this.chartData.rows.push({
          日期: `${dot} 月`,
          总额: rows[dot]
        })
      }
    })
  },
  computed: {
    ...mapState({
      members: state => state.department.members,
      homeBaseInfo: state => state.home.home
    })
  }
}
</script>
<style scoped>
.home{
  width: 94%;
  margin: 0 auto;
  margin-top: 40px;
  height: 150%;
}
.home-header-data-show{
  width: 90%;
}
.dividing-line{
  width: 100%;
  height: 1px;
  background-color: #DCDFE6;
  margin-top: 25px;
}
.date-show-custom{
  width: 70%;
  float: left;
}
.date-icon-custom{
  float: right;
}
.data-font-custom{
  color: #8898AA;
  font-size: 20px;
  padding: 0px;
  line-height: 32px;
}
.dynamic-value{
  font-size: 25px;
  color:#32325D;
  padding: 0px;
}
.date-icon-custom{
  width: 70px;
  padding-top: 11px;
  float: left;
}
.icon-custom{
  width: 30%;
  float: right;
  height: 97px;
}
.date-icon-second{
  float: right;
  margin-right: -47px;
  margin-top: 33px;
  width: 22px;
}
.date-total-show{
  width: 100%;
}
.date-total-icon{
  width: 25px;
  padding-left: 0px;
  position: relative;
  top: 6px;
}
.date-total-dynamic-value{
  color: #44CE9C;
  font-size: 20px;
}
.date-total-summary{
  color: #8898AA;
  font-size: 20px;
  float: right;
}
.chart-custom{
  width: 94%;
}
.chart-custom-title{
  font-size: 25px;
  color: #8898AA;
  line-height: 60px;
  padding-left: 26px;
}
.team-member-custom{
  width: 94%;
  height: 400px;
}
.team-member-title{
  font-size: 20px;
  color: #32325D;
  line-height: 50px;
  padding-left: 40px;
}
</style>
