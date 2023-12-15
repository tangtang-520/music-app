<template>
  <view class="itemList">
    <view>
      <view class="nameIcon">
        <u-icon :name="iconName" size="22"> </u-icon>
        <view class="name">{{ name }}</view>
      </view>
    </view>
    <view class="rightIcon">
      <u-icon name="arrow-right" size="20"> </u-icon
    ></view>
  </view>
  <u-line v-if="line"></u-line>
</template>
<script setup>
const props = defineProps({
  iconName: String,
  name: String,
  line: {
    typeof: Boolean,
    default: true,
  },
});
</script>
<style lang="scss" scoped>
.itemList {
  width: 100%;
  display: flex;
  align-content: center;
  justify-content: space-between;
  padding: 20rpx 0rpx;
  .nameIcon {
    display: flex;
    align-items: center;
    .name {
      padding: 0rpx 20rpx;
    }
  }
  .rightIcon {
    display: flex;
    align-items: center;
  }
}
</style>
