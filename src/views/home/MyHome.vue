<template>
  <div id="my-home">
    <home-content></home-content>
  </div>
</template>

<script>
import HomeContent from './childComps/HomeContent'
export default {
    name: 'MyHome',
    components: {
      HomeContent
    }
}
</script>

<style scoped>

</style>