<template>
  <div class="right-content">
      <about-me></about-me>
      <div class="times">
          <h2>
            时间轴
          </h2>
      </div>
      <time-axis></time-axis>
      <time-axis></time-axis>
      <time-axis></time-axis>
      <time-axis></time-axis>
      <time-axis></time-axis>
      <time-axis></time-axis>
      <div class="times">
          <h2>
            时间轴
          </h2>
        </div>
        <div class="times">
          <h2>
            时间轴
          </h2>
        </div>
  </div>

</template>

<script>
import AboutMe from './AboutMe'
import TimeAxis from './TimeAxis'
export default {
    name: 'RightContent',
    components: {
        AboutMe,
        TimeAxis
    }
}
</script>

<style scoped>
    .right-content {
        flex: 3;
    }

    .times {
        background-color: #fee2d9;
        text-align: center;
        margin: 20px 0 20px;
    }
</style>