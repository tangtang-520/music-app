<template>
  <view class="userCont">
    <up-image
      :show-loading="true"
      :src="useProfile?.avatarUrl"
      width="25px"
      height="25px"
      shape="circle"
    ></up-image>
    <text class="userName">{{useProfile?.nickname}}</text>
    <u-icon name="arrow-right" size="16"></u-icon>
  </view>
</template>
<script setup>

const props = defineProps({
    useProfile: {
        typeof: String,
        default: {}
    }
})


</script>
<style lang="scss" scoped>
.userCont{
    display: flex;
    align-items: center;
    .userName {
        margin-left: 20rpx;
    }
}
</style>
