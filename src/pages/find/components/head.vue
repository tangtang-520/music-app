<template>
  <view class="headerCont" :style=" 'margin-top:'+ marginTop + 'px'">
    TOUBU
  </view>
</template>
<script setup>
import useSystemStore from "@/store/system";
const systemStore = useSystemStore();
const marginTop = systemStore.systemInfo?.statusBarHeight


</script>
<style lang="scss" scoped></style>
