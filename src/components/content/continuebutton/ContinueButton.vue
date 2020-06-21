<template>
  <div class="continue-button">
      <button class="continue">Continue Reading...</button>
  </div>
</template>

<script>
export default {
    name: "ContinueButton"
}
</script>

<style scoped>
    .continue {
        min-width: 170px;
        height: 40px;
        background-color: #fff;
        font-size: 14px;
        border: 1px solid #ebebeb;
        border-radius: 30px;
        color: #b5aeba;
        line-height: 40px;
        text-align: center;
        transition: all .7s ease;
    }
    .continue:hover{
        color: #000;
        border: 1px solid #000;
        border-radius: 30px;
        cursor: pointer;
    }

    .continue:focus{
        color: #000;
        border: 1px solid #000;
        border-radius: 30px;
        cursor: pointer;
    }
</style>