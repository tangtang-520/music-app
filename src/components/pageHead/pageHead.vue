<template>
  <view class="headerCont" :style="'margin-top:' + marginTop + 'px'">
    <u-navbar :safeAreaInsetTop="true" fixed placeholder>
      <template #left>
        <view v-if="leftIcon" @tap="openSetPopup">
          <u-icon name="list" size="28"></u-icon>
        </view>
        <slot v-else name="left"></slot>
      </template>
      <template #center>
        <slot name="center"></slot>
      </template>
      <template #right>
        <slot name="right"></slot>
      </template>
    </u-navbar>
  </view>
</template>
<script setup>
import useSystemStore from "@/store/system";
const systemStore = useSystemStore();
const marginTop = systemStore.systemInfo?.statusBarHeight;

const props = defineProps({
  leftIcon: {
    type: Boolean,
    default: true,
  },
});

const emit = defineEmits([])

const openSetPopup = () => {
  // console.log();
  systemStore.setPopupShow()
}


</script>
<style lang="scss" scoped>
.headerCont {
  .seachBox {
    width: 80%;
    margin-left: 20rpx;
  }
}
</style>
