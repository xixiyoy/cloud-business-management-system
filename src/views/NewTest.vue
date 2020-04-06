<template>
  <div class="new-test">
    <a-steps :current="1" class="four-steps">
      <template slot="progressDot" slot-scope="{ description }">
        <span class="ant-steps-icon-dot" :class="getStepsIconClass(description)"></span>
      </template>
      <a-step title="1月" description="已完成" />
      <a-step title="2月" description="服务中"/>
      <a-step title="3月" description="未开始" />
      <a-step title="4月" description="未开始" />
      <a-step title="5月" description="交接中" />
      <a-step title="6月赠" description="未开始" />
      <a-step title="7月" description="未开始" />
      <a-step title="8月" description="未开始" />
      <a-step title="9月" description="未开始" />
      <a-step title="10月" description="未开始" />
      <a-step title="11月" description="未开始" />
      <a-step title="12月" description="未开始" />
    </a-steps>
  </div>
</template>

<script>
export default {
  name: 'NewTest',
  methods: {
    getStepsIconClass (description) {
      switch (description) {
        case '未开始': {
          return 'custom-wait'
        }
        case '已完成': {
          return 'custom-finish'
        }
        case '服务中': {
          return 'custom-process'
        }
        case '交接中': {
          return 'custom-jiaojie-zhong'
        }
      }
    }
  }
}
</script>

<style lang="scss">
.four-steps {
  .ant-steps-item-description {
    display: none;
  }
  .ant-steps-item-tail {
    top: 5px !important;
    margin: 0 0 0 73px !important;
  }
  .ant-steps-item-icon {
    width: 15px !important;
    height: 15px !important;
  }
  .ant-steps-icon-dot {
    border: 1px solid #e9e9e9;
  }
  .custom-finish {
    background-color: #0099cc !important;
  }
  .custom-process {
    background-color: #00cc01 !important;
  }
  .custom-wait {
    background-color: #fff !important;
  }
  .custom-jiaojie-zhong {
    background-color: #E6A23C !important;
  }
}
</style>
