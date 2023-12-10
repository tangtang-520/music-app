<template>
  <view class="content">
    <image class="qrimg" mode="scaleToFill" :src="qrImgSrc"></image>
	<view class="">

	</view>
  </view>
</template>

<script setup>
import { getQrKey, getQrImg } from "@/api/login";
const qrImgSrc = ref(null);


onShow(() => {
  getQrLoginKey();
});


const getQrLoginKey = () => {
  getQrKey().then((res) => {
    console.log(res);
    const params = {
      key: res.unikey,
      qrimg: true,
      timestamp: Date.now(),
    };
    getQrImg(params).then((res) => {
      console.log(res);
      qrImgSrc.value = res.qrimg;
    });
  });
};
</script>

<style lang="scss" scoped>
.content {
  margin: 0 auto;
  width: 200rpx;
  height: 200rpx;
  .qrimg {
    width: 100%;
    height: 100%;
  }
}
</style>
