<template>
  <div class="left-content">
      <image-list></image-list>
      <recommend-blog></recommend-blog>
  </div>
</template>

<script>
import ImageList from './ImageList'
import RecommendBlog from './RecomendBlog'
export default {
    name: 'LeftContent',
    components: {
        ImageList,
        RecommendBlog
    }
}
</script>

<style scoped>
    .left-content {
        flex: 7;
    }
</style>