<template>
  <div>
    <p>姓名:{{info.name}}</p>
    <p>年龄:{{info.age}}</p>
    <p>兴趣爱好:{{info.interest}}</p>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    name: "asyncData",
    // asyncData () {
    //    return axios.get('https://api.myjson.com/bins/8gdmr').then((res)=>{
    //         return {info: res.data}
    //     })
    // }
    async asyncData () {
      let {data} = await axios.get('https://api.myjson.com/bins/8gdmr')
      return {info: data}
    }
}
</script>

<style scoped>

</style>
