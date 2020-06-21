<template>
  <div class="time-axis">
      <div class="time-img">
          <img src="~assets/img/home/axis-time.jpg" alt="">
      </div>
      <div class="desc">
          <p class="info">Top Wineries To Visit In England</p>
          <p class="date">Tuesday, October 3, 2017</p>
      </div>
  </div>
</template>

<script>
export default {
    name:'TimeAxis'
}
</script>

<style scoped>
    .time-axis {
        display: flex;
        justify-content:space-around;
        height: 150px;
        margin-bottom: 10px;
    }

    .time-axis .time-img {
        flex: 1;
        margin-right: 10px;
    }

    .time-axis .time-img img{
        width: 100%;
        height: 100%;
        flex: 1;
        border-radius: 25px;
    }

    .time-axis .desc {
        flex: 1;
        position: relative;
        top: 0;
        bottom: 0;
        margin: auto 0;
    }

    .time-axis .desc .info{
        font-weight: 700;
        color: #232d37;
        margin-bottom: 25px;
    }

    .time-axis .desc .date{
        color: #b5aec4;
        font-weight: 400;
    }

</style>