<template>
  <!-- 头部 -->
  <page-meta
    :page-style="systemStore.popupShow ? 'overflow:hidden' : 'overflow:auto'"
  ></page-meta>
  <findHead></findHead>
  <view class="app-continer" style="margin-bottom: 50px">
    <minimenu></minimenu>
    <recommendList></recommendList>
    <setUserPopup></setUserPopup>
  </view>
  <miniPlay></miniPlay>
</template>
<script setup>
import findHead from "./components/findHead.vue";
import minimenu from "./components/minimenu.vue";
import recommendList from "./components/recommendList.vue";
import useSystemStore from "@/store/system";
const systemStore = useSystemStore();
</script>
<style lang="scss" scoped>
.app-continer {
  // background-color: #f3f1f1;
}
</style>
