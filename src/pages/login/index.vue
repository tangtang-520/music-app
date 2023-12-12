<template>
  <view class="loginPage">
    <view class="experience" @tap="toExperience" :style="'margin-top:' + marginTop + 'px'">立即体验>>></view>
    <!-- <up-image
      :show-loading="true"
      :src="qrImgSrc"
      width="80px"
      height="80px"
    ></up-image> -->
    <view>{{ dataRes }}</view>
    <view class="loginCont">
      <view class="phone">
        <view class="countryCode" @tap="tapCode">
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

    <countyPopup
      ref="countyPopupRef"
      :countryData="countryData"
      @changCountryCode="changCountryCode"
    ></countyPopup>
  </view>
</template>

<script setup>
import countyPopup from "./components/countryPopup.vue";
import {
  getQrKey,
  getQrImg,
  getCountryCodeList,
  getVisitorLogin,
  getQrCheck,
} from "@/api/login";
import { setToken } from "@/utils/auth";
import useSystemStore from "@/store/system";
import useUserStore from "@/store/user";

const systemStore = useSystemStore();
const marginTop = systemStore.systemInfo?.statusBarHeight;
const qrImgSrc = ref(null);
// 电话号码
const phoneValue = ref(null);

// 获取登录二维码
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
  //  const timer = setInterval(() => {
  //     const params = {
  //       key: res.unikey,
  //       timestamp: Date.now(),
  //     };
  //     getQrCheck(params).then((res) => {
  //       console.log(res);

  //       clearInterval(timer);
  //     });
  //   }, 3000);
  });
};
// getQrLoginKey();

// 轮询获取二维码接口扫描情况
const QrCheck = (key) => {
  const params = {
    key: key,
    timestamp: Date.now(),
  };
  getQrCheck(params).then((res) => {
    console.log(res);
  });
};

const countyPopupRef = ref(null);
const tapCode = () => {
  console.log(111);
  countyPopupRef.value.open();
};

// 获取国家信息
const countryData = ref([]);
const getCountryData = () => {
  getCountryCodeList().then((res) => {
    countryData.value = res;
  });
};
getCountryData();

// 修改国家Code
const countryCode = ref("+86");
const changCountryCode = (code) => {
  countryCode.value = "+" + code;
};

// 游客登录  无法获取用户信息只有uid
const dataRes = ref(null);
const toExperience = () => {
  getVisitorLogin().then((res) => {
    setToken(res.cookie);
    useUserStore().setUseId(res.userId)
  });
};

</script>

<style lang="scss" scoped>
.loginPage {
  position: relative;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(135deg, #ff9a9e, #fad0c4);
  display: block;
  .experience {
    position: absolute;
    right: 20rpx;
    color: #e3e3e3;
    font-size: 24rpx;
  }
  
  .loginCont {
    width: 80%;
    height: auto;
    position: absolute;
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%);

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
  }
}
</style>
