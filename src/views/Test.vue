<template>
  <div class="test" :class="currentMonth === '1'">
    <el-steps :active="2" align-center>
      <el-step title="已完成"></el-step>
      <el-step title="已完成"></el-step>
      <el-step title="进行中"></el-step>
      <el-step title="未开始"></el-step>
      <el-step title="未开始"></el-step>
      <el-step title="未开始"></el-step>
      <el-step title="未开始"></el-step>
      <el-step title="未开始"></el-step>
      <el-step title="未开始"></el-step>
      <el-step title="未开始"></el-step>
      <el-step title="未开始"></el-step>
      <el-step title="未开始"></el-step>
    </el-steps>
  </div>
</template>

<script>
export default {
  metaInfo: {
    title: '测试'
  },
  name: 'Test',
  data () {
    return {
      currentMonth: '1'
    }
  }
}
</script>

<style lang="scss">
$isFinishColor: rgba(16, 141, 233, 1);
$isFinishLineColor: red;
$isFinishCircleColor: yellow;
$isFinishCircleFontColor: green;
$isProcessLineColor: blue;
$isProcessCircleColor: red;

.red {

  .is-finish {

    color: black; // 底下文字颜色
    border-color: $isFinishLineColor; // 已完成线的颜色

    .el-step__icon {
      color: $isFinishCircleFontColor;
      border-color: red; // 已完成圈的颜色
    }

    .el-step__line {
      background-color: $isFinishLineColor;
    }
  }

  .is-process {

    color: black; // 底下文字颜色
    border-color: $isProcessLineColor; // 已完成线的颜色

    .el-step__icon {
      color: $isFinishCircleFontColor;
      border-color: $isProcessCircleColor; // 已完成圈的颜色
    }

    .el-step__line {
      background-color: $isProcessLineColor;
    }
  }
}

.blue {

  .is-finish {

    color: black; // 底下文字颜色
    border-color: blue; // 已完成线的颜色

    .el-step__icon {
      color: $isFinishCircleFontColor;
      border-color: $isFinishCircleColor; // 已完成圈的颜色
    }

    .el-step__line {
      background-color: $isFinishLineColor;
    }
  }

  .is-process {

    // color: black; // 底下文字颜色
    // border-color: $isProcessLineColor; // 已完成线的颜色

    // .el-step__icon {
    //   color: $isFinishCircleFontColor;
    //   border-color: $isProcessCircleColor; // 已完成圈的颜色
    // }

    // .el-step__line {
    //   background-color: $isProcessLineColor;
    // }
  }
}

.yellow {

  .is-finish {

    color: black; // 底下文字颜色
    border-color: $isFinishLineColor; // 已完成线的颜色

    .el-step__icon {
      color: $isFinishCircleFontColor;
      border-color: yellow; // 已完成圈的颜色
    }

    .el-step__line {
      background-color: $isFinishLineColor;
    }
  }

  .is-process {

    color: black; // 底下文字颜色
    border-color: $isProcessLineColor; // 已完成线的颜色

    .el-step__icon {
      color: $isFinishCircleFontColor;
      border-color: $isProcessCircleColor; // 已完成圈的颜色
    }

    .el-step__line {
      background-color: $isProcessLineColor;
    }
  }
}
</style>
