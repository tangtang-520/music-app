<template>
  <!-- 头部 -->
  
  <findHead></findHead>
 
  <view class="app-continer">
    <!-- 排行榜 每日推荐等等 -->
    <minimenu></minimenu>
    <!-- 推荐歌单 -->
    <recommendList></recommendList>
    <setUserPopup ></setUserPopup>
  </view>

</template>
<script setup>
import findHead from "./components/findHead.vue";
import minimenu from "./components/minimenu.vue";
import recommendList from "./components/recommendList.vue";


</script>
<style lang="scss" scoped>
</style>
