<template>
  <div id="app">
    <div id="nav">
      <router-view></router-view>
      <!-- <router-link to="/">Home</router-link>
      <router-link to="/cart">Cart</router-link>
      <router-link to="/user">User</router-link> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
    
  }
}
</script>

<style>
#app {
  font-family: Helvetica Neue,Tahoma,Arial,PingFangSC-Regular,Hiragino Sans GB,Microsoft Yahei,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.van-picker__toolbar .van-picker__cancel, .van-picker__toolbar .van-picker__confirm{
        color: #FF3948;
    }
</style>
