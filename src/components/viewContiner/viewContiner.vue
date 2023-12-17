<template>
  <view class="continer">
    <view v-if="title !== ''" class="title">
      <view class="font">{{ title }}</view>
      <u-line></u-line>
    </view>
    <view class="viewContiner">
      <slot></slot>
    </view>
  </view>
</template>
<script setup>
const props = defineProps({
  title: {
    typeof: String,
    default: "",
  },
});
</script>
<style lang="scss" scoped>
.continer {
  margin: 40rpx 0rpx;
  background-color: #fff;
  border-radius: 20rpx;
  .viewContiner {
    border-radius: 10rpx;
    padding: 0rpx 20rpx;
  }
  .title {
    .font {
      font-size: 24rpx;
      padding: 20rpx;
    }
  }
}
</style>
