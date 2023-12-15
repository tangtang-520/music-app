<template>
  <view class="qrLogin">
    <up-image
      @tap="getQrLoginKey"
      :show-loading="true"
      :src="qrImgSrc"
      width="200"
      height="200"
    ></up-image>
    <view class="tips">请扫码登录</view>
  </view>
</template>
<script setup>
import { getQrKey, getQrImg, getQrCheck, getSubCountData, } from "@/api/login";
import { toast } from "@/utils/common";
import { setToken, setUseId, setUserInfo } from "@/utils/auth";
const qrImgSrc = ref(null);
const tipsShow = ref(false);

// 获取二维码图片

// 获取登录二维码
const getQrLoginKey = () => {
  tipsShow.value = false;
  getQrKey().then((res) => {
    const params = {
      key: res.unikey,
      qrimg: true,
      timestamp: Date.now(),
    };
    getQrImgSrc(params);
  });
};
getQrLoginKey();

const getQrImgSrc = (params) => {
  getQrImg(params).then((res) => {
    qrImgSrc.value = res.qrimg;
    QrCheck(params?.key);
  });
};

// 轮询获取二维码接口扫描情况
const QrCheck = (key) => {
  const pages = getCurrentPages() // 获取栈实例
  const currentRoute = pages[pages.length - 1].route; 
  const timer = setInterval(() => {
    var nowPage = getCurrentPages()
    var nowRoute = nowPage[nowPage.length - 1].route; 
    if( currentRoute !== nowRoute){
      clearInterval(timer);
      return
    }
    const params = {
      key: key,
      timestamp: Date.now(),
    };
    getQrCheck(params).then((res) => {
      if (res.code === 800) {
        toast("二维码已过期,请点击二维码重新获取");
        tipsShow.value = true;
        clearInterval(timer);
      }
      if (res.code === 803) {
        setToken(res.cookie);
        console.log(res);
        clearInterval(timer);
        accountData()
        uni.reLaunch({
          url: "/pages/find/index",
        });
      }
    });
  }, 3000);
};


// 获取账号信息
const accountData = () => {
  const params = {
    cookie: getToken()
  }
  getSubCountData(params).then( res => {
    setUseId(res.profile?.userId)
    setUserInfo(res?.profile);
  } )
}


</script>
<style lang="scss" scoped>
.qrLogin {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .tips {
    margin-top: 10rpx;
    font-size: 26rpx;
    color: #989494;
  }
}
</style>
