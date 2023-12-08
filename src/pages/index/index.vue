<template>
  <view class="content">
    <image class="qrimg" :src="qrImgSrc"></image>
	<view class="">
		111111111
	</view>
  </view>
</template>

<script setup>
import { getQrKey, getQrImg } from "@/api/login";
const qrImgSrc = ref(null);


onShow(() => {
  getQrLoginKey();
  onShareAppMessage()
});

const onShareAppMessage = (res) => { 
    if (res.from === 'button') {// 来自页面内分享按钮
      console.log(res.target)
    }
    return {
      title: '自定义分享标题',
      path: '/pages/test/test?id=123'
    }
  }


const getQrLoginKey = () => {
  getQrKey().then((res) => {
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
