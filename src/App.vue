<script setup>
const showMsg = () => {
  ElMessageBox.alert('你好！')
}
</script>

<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <el-button type="primary" @click="showMsg">按钮</el-button>
  <hr>
  <el-icon :size="36">
    <Edit />
  </el-icon>
  <hr>
  <router-view></router-view>
</template>

<style>
#app {
  font-family: Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
