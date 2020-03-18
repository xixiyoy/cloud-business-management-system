<template>
  <div class="home">
     <el-row>
       <el-col :span="6">
         <div class="home-header-data-show">
           <div style="100%;">
            <div class="date-show-custom">
              <p class="data-font-custom">总客户数</p>
              <p class="dynamic-value">288</p>
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
       </el-col>
       <el-col :span="6">
         <div class="home-header-data-show">
           <div style="100%;">
            <div class="date-show-custom">
              <p class="data-font-custom">订单总数</p>
              <p class="dynamic-value">288</p>
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
       </el-col>
       <el-col :span="6">
         <div class="home-header-data-show">
           <div style="100%;">
            <div class="date-show-custom">
              <p class="data-font-custom">总代帐数</p>
              <p class="dynamic-value">288</p>
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
       </el-col>
       <el-col :span="6">
         <div class="home-header-data-show">
           <div style="100%;">
            <div class="date-show-custom">
              <p class="data-font-custom">总开票数</p>
              <p class="dynamic-value">288</p>
            </div>
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
       </el-col>
     </el-row>
     <el-row style="margin-top:40px;">
       <el-col :span="16">
         <div class="line-chart-custom">
           <p class="chart-custom-title">概况</p>
          <ve-line :data="chartData" :settings="chartSettings" :extend="chartExtend"></ve-line>
         </div>
       </el-col>
       <el-col :span="8">
         <div class="histogram-custom">
           <ve-histogram :data="chartData" :settings="chartSettings"></ve-histogram>
         </div>
       </el-col>
     </el-row>
     <el-row style="margin-top:40px;">
       <el-col :span="8">
         <div class="team-member-custom">
           <p class="team-member-title">团队成员</p>
           <div class="dividing-line"></div>
         </div>
       </el-col>
       <el-col :span="8">
         <div class="team-member-custom">
            <el-badge :value="12" class="item" style="margin-top: 30px !important;margin-right: -10px !important;">
              <p class="team-member-title">接受通知</p>
            </el-badge>
          <div class="dividing-line"></div>
         </div>
       </el-col>
       <el-col :span="8">
         <div class="team-member-custom">
           <p class="team-member-title">进度跟踪</p>
           <div class="dividing-line"></div>
         </div>
       </el-col>
     </el-row>
  </div>
</template>
<script>
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
      chartData: {
        columns: ['日期', '访问用户', '总额', '下单率'],
        rows: [
          { 日期: '1 月', 访问用户: 1393, 总额: 1093, 下单率: 0.32 },
          { 日期: '2 月', 访问用户: 3530, 总额: 3230, 下单率: 0.26 },
          { 日期: '3 月', 访问用户: 2923, 总额: 2623, 下单率: 0.76 },
          { 日期: '4 月', 访问用户: 1723, 总额: 1423, 下单率: 0.49 },
          { 日期: '5 月', 访问用户: 3792, 总额: 3492, 下单率: 0.323 }
        ]
      }
    }
  }
}
</script>
<style scoped>
.home{
  width: 94%;
  margin: 0 auto;
  margin-top: 40px;
}
.home-header-data-show{
  width: 90%;
  height: 200px;
  border: 1px solid #DCDFE6;
  border-radius:5px;
  box-shadow: 0px 1px 4px 4px #ccc;
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
  padding: 37px 0px 0px 34px;
  line-height: 32px;
}
.dynamic-value{
  font-size: 25px;
  color:#32325D;
  padding: 0px 0px 0px 34px;
}
.date-icon-custom{
  width: 70px;
  padding-top: 36px;
  float: left;
}
.icon-custom{
  width: 30%;
  float: right;
}
.date-icon-second{
  float: right;
  margin-right: -49px;
  margin-top: 53px;
  width: 22px;
}
.date-total-show{
  width: 100%;
  margin-top: 136px;
}
.date-total-icon{
  width: 25px;
  padding-left: 34px;
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
  padding-left: 72px;
}
.line-chart-custom{
  width: 94%;
  border: 1px solid #DCDFE6;
  border-radius:5px;
  box-shadow: 0px 1px 4px 4px #ccc;
}
.histogram-custom{
  width: 94%;
  border: 1px solid #DCDFE6;
  border-radius:5px;
  box-shadow: 0px 1px 4px 4px #ccc;
}
.chart-custom-title{
  font-size: 23px;
  color: #DCDFE6;
}
.team-member-custom{
  width: 94%;
  border: 1px solid #DCDFE6;
  border-radius:5px;
  box-shadow: 0px 1px 4px 4px #ccc;
  height: 400px;
}
.team-member-title{
  font-size: 20px;
  color: #32325D;
  line-height: 85px;
  padding-left: 40px;
}
</style>
