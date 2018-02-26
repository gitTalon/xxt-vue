<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <router-view v-wechat-title='$route.meta.title'/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>


<style>

 @import '../static/css/talon_3g.css';
  html{border-top: 4px solid #329EFF;}
  
#app {

}
</style>
