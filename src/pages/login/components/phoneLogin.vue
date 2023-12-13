<template>
  <view class="phoneLogin">
    <view class="phone">
      <view class="countryCode" @tap="openCountryCode">
        <text style="margin-right: 5px">{{ countryCode }}</text>
        <u-icon name="arrow-down-fill" size="12"></u-icon>
      </view>
      <up-input
        v-model="phoneValue"
        placeholder="输入手机号"
        type="number"
        border="none"
        clearable
      ></up-input>
    </view>
    <up-button
      style="margin-top: 20px"
      type="primary"
      text="确定"
      color="#d11d05"
      shape="circle"
    ></up-button>
  </view>
</template>
<script setup>
const props = defineProps({
  countryCode: String,
});

const emit = defineEmits(["tapCode"]);

// 电话号码
const phoneValue = ref(null);
const openCountryCode = () => {
  emit("tapCode");
};
</script>
<style lang="scss" scoped>
.phone {
  display: flex;
  align-items: center;
  background-color: #fefefe;
  padding: 30rpx;
  border-radius: 30rpx;
  .countryCode {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0rpx 20rpx;
    border-right: 2rpx solid #eee;
    margin-right: 40rpx;
  }
}
</style>
