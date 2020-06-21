<template>
  <div class="recommendInfo">
      <div class="post-left">
        <div class="post-author">
            By 张晓平
        </div>
        <span class="split"> | </span>
        <div class="post-date">
            2019-12-11
        </div>
      </div>


      <div class="post-right">
          <div class="post-share">
             <i class="i-share"></i>
          </div>
          <div class="post-favourite">
              <i class="i-like"></i>
              <span class="like">10</span>
          </div>
          <div class="post-comments">
              <i class="i-comment"></i>
              <span class="comment">12</span>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'RecommendInfo'
}
</script>

<style scoped>
    .recommendInfo {
        display: flex;
        width: 100%;
        height: 50px;
        color: #b5aec4;
        font-size: 14px;
        font-weight: 700;
        vertical-align: middle;
        margin-top: 10px;
    }

    .recommendInfo .post-left {
        display: flex;
        flex: 3;
        flex-direction: row;
    }

    .recommendInfo .post-left div{
        margin: 0 25px;
        transition: all .5s ease;
    }

    .recommendInfo .post-left div:hover{
        color: #000;
        cursor: pointer;
    }

    .recommendInfo .post-right div{
        margin: 0 25px;
        transition: all .5s ease;
    }

    .recommendInfo .post-right div:hover{
        color: #000;
        cursor: pointer;
    }

    .recommendInfo .post-right {
        position: relative;
        display: flex;
        /* justify-content: space-evenly; */
        flex: 2;
        flex-direction: row-reverse;
    }

    .recommendInfo .post-right .i-like::before{
        content: url('~assets/img/icon/heart.png');
    }

    .recommendInfo .post-right .i-comment::before{
        content: url('~assets/img/icon/message.png');
    }

    .recommendInfo .post-right .i-share::before{
        content: url('~assets/img/icon/share.png');
    }


</style>