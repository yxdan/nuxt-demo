<template>
  <div>
    <p v-if="error.statusCode === 404">您访问的页面不存在～</p>
    <p v-else>应用程序错误</p>
    <nuxt-link to="/">首页</nuxt-link>
  </div>
</template>

<script>
    export default {
        name: "error",
        props: ['error']
    }
</script>

<style scoped>

</style>
