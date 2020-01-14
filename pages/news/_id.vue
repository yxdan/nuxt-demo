<template>
  <div>
    <template v-if="title!== ''">
      <p>当前页面的title: {{title}}</p>
    </template>
    <p>news content newsId: {{$route.params.id}}</p>
    <nuxt-link to="/">首页</nuxt-link>
    <nuxt-link to="/news">新闻页面</nuxt-link>
  </div>
</template>

<script>
export default {
  name: "_id.vue",
  props:['error'],
  validate({params}) {
    return /^\d+$/.test(params.id)
  },
  data () {
    return {
        title: this.$route.params.title || ''
    }
  },
  head () {
    return {
        title: this.title,
        meta: [
            {
                hid: 'description', name: 'news', content: 'This is new page!'
            }
        ]
    }
  }
}
</script>

<style scoped>

</style>
