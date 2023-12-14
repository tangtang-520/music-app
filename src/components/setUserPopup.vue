<template>
  <u-popup
    closeOnClickOverlay
    :show="systemStore.popupShow"
    mode="left"
    @close="close"
    @open="open"
  >
    <view class="setUserPopup"  :style="'margin-top:' + marginTop + 'px'"> xxx </view>
  </u-popup>
</template>
<script setup>
import useSystemStore from "@/store/system";
import useUserStore from "@/store/user";
const systemStore = useSystemStore();
const userStore = useUserStore()
const marginTop = systemStore.systemInfo?.statusBarHeight;

const close = () => {
    systemStore.setPopupShow()
};
const open = () => {}

console.log(userStore.profile);

</script>
<style lang="scss" scoped>
.setUserPopup {
  width: 80vw;
  max-width: 600rpx;
}
</style>
