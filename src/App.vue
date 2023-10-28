<script setup>
</script>

<template>
  <div>

    <div class="top-sider">
      <router-link class="link-item" to="/">首页</router-link>
    </div>

    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped>
  .top-sider{
    width: 100vw;
    overflow-x: auto;
    height: 40px;
    background-color: #fcfcfc;
    border-bottom: 1px solid #f1f1f1;
  }
  .link-item{
    display: block;
    height: 40px;
    line-height: 40px;
    width: 100px;
    text-align: center;
    border-right: 1px solid #f1f1f1;
  }
  .content{
    padding: 16px;
  }
</style>
