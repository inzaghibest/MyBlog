<template>
  <div class="home-content">
      <left-content></left-content>
      <right-content></right-content>
  </div>
</template>

<script>
import LeftContent from './leftcontent/LeftContent'
import RightContent from './rightcontent/RightContent'
export default {
    name: 'HomeContent',
    components: {
        LeftContent,
        RightContent
    }
}
</script>

<style scoped>
    .home-content {
        display: flex;
        position: relative;
        top: 5px;
        /* background-color: #dae9f4; */
        /* width: 1400px; */
        /* height: 800px; */
        justify-content: space-evenly;
        margin: 0 auto;
        z-index: 9;
    }
</style>