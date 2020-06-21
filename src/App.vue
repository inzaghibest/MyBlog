<template>
  <div id="app">
    <main-nav-bar>
    </main-nav-bar>
    <router-view/>

  </div>
</template>

<script>
  import MainNavBar from 'components/content/mainnavbar/MainNavBar'
  export default {
    name: 'App',
    components: {
      MainNavBar
    }
  }  
</script>

<style>
/* 引入基础css样式 */
@import url('assets/css/base.css');
</style>
