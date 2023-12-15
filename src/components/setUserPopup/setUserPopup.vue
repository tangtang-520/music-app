<template>
  <u-popup
    closeOnClickOverlay
    :show="systemStore.popupShow"
    mode="left"
    @close="close"
    bgColor="#f6f2f2"
  >
    <view class="setUserPopup" :style="'margin-top:' + marginTop + 'px'">
      <userList :useProfile="useProfile"></userList>
      <myNews></myNews>
      <musicService></musicService>
      <order></order>
      <out></out>
    </view>
  </u-popup>
</template>
<script setup>
import useSystemStore from "@/store/system";
import useUserStore from "@/store/user";
import userList from "./userList.vue";
import myNews from "./myNews.vue";
import musicService from "./musicService.vue";
import order from "./order.vue";
import out from "./out.vue";

const systemStore = useSystemStore();
const userStore = useUserStore();
const marginTop = systemStore.systemInfo?.statusBarHeight;

const useProfile = userStore.profile;

console.log(useProfile);

const close = () => {
  systemStore.setPopupShow();
};

console.log(111);
</script>
<style lang="scss" scoped>
.setUserPopup {
  width: 80vw;
  max-width: 600rpx;
  padding: 30rpx;
  overflow: auto;
}
:deep(.u-popup__content) {
  overflow: auto;
}
</style>
