<template>
  <div class="main-nav-bar">
      <nav-bar>
        <div class="titles" slot="left-nav">
            <img src="~assets/img/common/headnav.jpg" alt="">
            <div class="title">张晓平的个人博客</div>
        </div>
        <div slot="center-nav" class="center-nav">
                <a href="#">首页</a>
                <a href="#">博文</a>
                <a href="#">读书</a>
                <a href="#">联系</a>
        </div>
        <div class="search-group" slot="right-nav">
            <input type="text" placeholder="Search Here">
            <button>搜索</button>
        </div>
      </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
export default {
    name: 'MainNavBar',
    components: {
        NavBar
    }
}
</script>

<style scoped>
    .titles img {
        padding-top: 5px;
        height: 70px;
        border-radius: 5px;
    }
    
    .title {
        font-size: 14px;
        font-weight: 700;
    }

    .center-nav {
        display: flex;
        justify-content: space-evenly;
    }


    a{
        width: 150px;
        height: 100%;
        font-weight: 700;
        font-size: 20px;
    }

    a:hover{
        background-color: #d6b487;
        border-bottom: 2px solid rgb(167, 229, 240);
    }

    .nav-bar-right .search-group{
        position: relative;
        top: 40px;
    }

    .search-group input, button{
        height: 35px;
        margin-left: 5px;
    }

    .search-group input {
        border: 1px solid  #ebebeb;
    }

    .search-group button{
        width: 60px;
        background-color:  #a6dcef;
        border: none;
        border-radius: 5px;
         border: solid 1px #fff; 
    }

    .search-group button:hover{
        background-color: #e36387;
        color: #fff;
        border: 1px solid #a6dcef;
    }
</style>