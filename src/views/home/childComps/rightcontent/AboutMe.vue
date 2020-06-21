<template>
  <div class="about-me">
      <div class="about-title">
          <h2>一名努力成长的程序员</h2>
      </div>
      <div class="about-head">
          <img src="~assets/img/home/head.jpg" alt="">
      </div>
      <div class="about-desc">
          <span class="headline">努力学习</span>
          <span>作为一名程序,必须努力学习,才能不断进步</span>
      </div>
  </div>
</template>

<script>
export default {
    name: 'AboutMe'
}
</script>

<style scoped>
    .about-me {
        text-align: center;
        margin-top: 2px;
    }

    .about-head img{
        margin-top: 20px;
        width: 150px;
        height: 150px;
        border-radius: 100px;
    }

    .about-title {
        background-color: #fee2d9;
    }

    .about-desc span{
        display: block;
        margin-top: 5px;
    }

    .about-desc .headline {
        font-size: 18px;
        font-weight: 700;
    }
</style>