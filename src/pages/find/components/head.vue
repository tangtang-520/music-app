<template>
  <view class="headerCont" :style="'margin-top:' + marginTop + 'px'">
    <u-navbar :safeAreaInsetTop="true"  fixed placeholder>
      <template #left>
        <view class="u-nav-slot">
          <u-icon name="list" size="28"></u-icon>
        </view>
      </template>
      <template #center>
        <view class="seachBox">
          <u-search :placeholder="placeholder" v-model="searchValue" :showAction="false"></u-search>
        </view>
      </template>
    </u-navbar>
  </view>
</template>
<script setup>
import useSystemStore from "@/store/system";
const systemStore = useSystemStore();
const marginTop = systemStore.systemInfo?.statusBarHeight;

const searchValue = ref("");
const placeholder = ref('大家都在搜')



</script>
<style lang="scss" scoped>
.headerCont {
  .seachBox {
    width: 80%;
    margin-left: 20rpx;
  }
}
</style>
