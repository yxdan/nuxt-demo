<template>
  <div class="container">
    <div>
      <div>
        <ul class="nav-items">
          <li><nuxt-link to="/about">about</nuxt-link></li>
          <li><nuxt-link :to="{name: 'news', params: {newsId: 111}}">news</nuxt-link></li>
        </ul>
      </div>
      <div class="img_container">
        <img src="~static/2019_07_31_server_01.png" alt="">
      </div>
      <div class="test_img"></div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
export default {
  components: {
    Logo
  }
}
</script>

<style lang="less" scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.nav-items{
  width:80%;
  display: flex;
  height:60px;
  line-height:60px;
  background: #efefef;
  margin-bottom:10px;
  li{
    flex:1;
    list-style: none;
  }
}
.img_container{
  width:80%;
  img{
    width:100%;
  }
}
.test_img{
  width:500px;
  height:400px;
  margin:0 auto;
  background: url('~static/2019_07_31_server_01.png') center center;
}
</style>
