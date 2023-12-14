<template>
  <pageHead>
    <template #center>
      <view class="seachBox">
        <u-search
          :placeholder="placeholder"
          v-model="searchValue"
          :showAction="false"
        ></u-search>
      </view>
    </template>
  </pageHead>
</template>
<script setup>
const searchValue = ref("");
const placeholder = ref("大家都在搜");
</script>
<style lang="scss" scoped>
.headerCont {
  .seachBox {
    width: 80%;
    margin-left: 20rpx;
  }
}
</style>
