<template>
  <!-- 头部 -->
  <headVue></headVue>
  <view class="app-continer">
    <!-- 排行榜 每日推荐等等 -->
    <minimenu></minimenu>
    <!-- 推荐歌单 -->
    <recommendList></recommendList>
  </view>
</template>
<script setup>
import headVue from "./components/head.vue";
import minimenu from "./components/minimenu.vue";
import recommendList from "./components/recommendList.vue";
</script>
<style lang="scss" scoped></style>
