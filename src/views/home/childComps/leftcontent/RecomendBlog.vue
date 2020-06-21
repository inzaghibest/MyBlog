<template>
  <div class="recommend">
      <div class="hot">
          <h2>推荐阅读</h2>
        <recommend-item></recommend-item>
      </div>
      <h2>博文列表</h2>
      <div class="articles">
          <div>
                <recommend-item></recommend-item>
          </div>
          <div>
                <recommend-item></recommend-item>
          </div>
          <div>
                <recommend-item></recommend-item>
          </div>
          <div>
                <recommend-item></recommend-item>
          </div>
      </div>
      <div class="reading">
          <h2>正在阅读</h2>
        <recommend-item></recommend-item>
        <recommend-item></recommend-item>
      </div>
  </div>
</template>

<script>
import RecommendItem from './RecommendItem'
export default {
    name: 'RecommendBlog',
    components: {
        RecommendItem
    }
}
</script>

<style scoped>
    .recommend {
        margin: 10px 30px 10px;
    }

    .articles {
        display: flex;
        flex-wrap: wrap;
        justify-content:space-evenly;
    }

    .articles div{
        width: 450px;
    }




</style>