<template>
  <div class="recommend-item">
        <div class="blog-img">
            <img src="~assets/img/home/blog-map.jpg" alt="">
        </div>
        <recommend-info></recommend-info>
        <div class="blog-content">
          <h2 class="post-content">
              Tiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat.
          </h2>
        </div>
        <continue-button></continue-button>
  </div>
</template>

<script>
import RecommendInfo from './RecommendInfo'
import ContinueButton from 'components/content/continuebutton/ContinueButton'
export default {
    name: 'RecommendItem',
    components: {
      RecommendInfo,
      ContinueButton
    }
}
</script>

<style scoped>
    .recommend-item {
        /* background-color: red; */
        margin: 20px 20px 20px 10px;
        border-bottom: 1px solid #f4f6ff;
    }

    .blog-img img{
        border: 2px solid #a3c9c7;
        border-radius: 25px;
        width: 100%;
        height: 400px;
    }

    .post-content {
        color: #232d37;
        transition: all 0.5s ease;
    }
    .post-content:hover {
        color: #fc6c3f;
    }

</style>