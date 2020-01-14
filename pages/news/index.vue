<template>
  <div>
    <p>这是新闻页面</p>
    <ul>
      <li><nuxt-link to="/">首页</nuxt-link></li>
      <li><nuxt-link to="/news/1">新闻1</nuxt-link></li>
      <li><nuxt-link to="/news/aa">新闻aa</nuxt-link></li>
      <li>
        <nuxt-link :to="{name: 'news-id', params: {id: 123, title: 'nuxt test'}}">特定页面设置title</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "index",
        layout: 'blog'
    }
</script>

<style scoped>

</style>
