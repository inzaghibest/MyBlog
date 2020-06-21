<template>
  <div class="image-list">
      <div class="image-item">
        <img src="~assets/img/home/home1.jpg" alt="">
        <a href="#">博客</a>
        <div class="image-desc">
          <h5>最近更新：5comment</h5>
          <span>
            这里有作者最新的博客文章
          </span>
        </div>
      </div>
      <div class="image-item">
        <img src="~assets/img/home/home2.jpg" alt="">
        <a href="#">读书</a>
          <div class="image-desc">
          <h5>最近更新：5comment</h5>
          <span>
            这里有作者最新的博客文章
          </span>
        </div>
      </div>
      <div class="image-item">
        <img src="~assets/img/home/home3.jpg" alt="">
        <a href="#">关注</a>
                <div class="image-desc">
          <h5>最近更新：5comment</h5>
          <span>
            这里有作者最新的博客文章
          </span>
        </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .image-list {
        position: relative;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        border-bottom: 2px solid #d9e1e8;
    }

    .image-list .image-item {
        position: relative;
        text-align: center;
    }

    .image-list .image-item .image-desc{
      transition: all .8s ease;
    }

    .image-list .image-item:hover .image-desc{
      visibility: visible;
      background-color:rgba(150, 128, 67, .5);
      height: 100px;
      /* transform: translate(0, -10px); */
    }

    .image-list .image-item .image-desc{
        visibility: hidden;
        position: absolute;
        height: 50px;
        bottom: 5px;
        left: 0;
        right: 0;
    }

    .image-list .image-item a{
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto auto;
        width: 150px;
        height: 40px;
        background-color: #fff;
        text-align: center;
        line-height: 40px;
        border-radius: 25px;
        font-weight: 700;
        color: #000;
        transition: all .5s ease;
    }

    .image-list .image-item a:hover{
        background-color: #F68657;
        color: #fff;
        
    }
    .image-list div img{
        width: 250px;
        height: 250px;
        /* border: 1px solid #fff; */
        border-radius: 25px;
    }
</style>