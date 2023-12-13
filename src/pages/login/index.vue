<template>
  <view class="loginPage">
    <view
      class="experience"
      @tap="toExperience"
      :style="'margin-top:' + marginTop + 'px'"
      >立即体验 >>></view
    >
    <view class="loginCont">
      <view class="qrImgCont" @tap="loginChange"
        ><up-image
          class="arCodeImg"
          :show-loading="true"
          :src="loginLogImg"
          width="20px"
          height="20px"
        ></up-image
      ></view>
      <phoneLogin
        v-if="loginLogShow"
        :countryCode="countryCode"
        @tapCode="tapCode"
        @changPageLoad="changPageLoad"
      ></phoneLogin>
      <qrLoginVue v-show="!loginLogShow"></qrLoginVue>
    </view>
    <!-- <view class="otherLogin">其他登录方式</view> -->

    <countyPopup
      ref="countyPopupRef"
      :countryData="countryData"
      @changCountryCode="changCountryCode"
    ></countyPopup>
    <u-loading-page
      :loading="pageLoad"
      icon-size="36"
      bg-color="#7a7a7a00"
      loadingText=""
    ></u-loading-page>
  </view>
</template>

<script setup>
import countyPopup from "./components/countryPopup.vue";
import qrLoginVue from "./components/qrLogin.vue";
import phoneLogin from "./components/phoneLogin.vue";
import { getVisitorLogin, getCountryCodeList } from "@/api/login";
import { setToken } from "@/utils/auth";
import useSystemStore from "@/store/system";
import useUserStore from "@/store/user";
import phoneLogImg from "@/static/login/phone.png";
import qrLogImg from "@/static/login/arcode.png";

const systemStore = useSystemStore();
const marginTop = systemStore.systemInfo?.statusBarHeight;

// 页面加载
const pageLoad = ref(false);
const changPageLoad = () => {
  pageLoad.value = !pageLoad.value;
};

// 切换登录方式
const loginLogShow = ref(false);
const loginLogImg = ref(phoneLogImg);
const loginChange = () => {
  loginLogShow.value = !loginLogShow.value;
  loginLogShow.value
    ? (loginLogImg.value = qrLogImg)
    : (loginLogImg.value = phoneLogImg);
};

// 修改国家Code
const countryCode = ref("+86");
const countyPopupRef = ref(null);
const changCountryCode = (code) => {
  countryCode.value = "+" + code;
};
const tapCode = () => {
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

// 游客登录  无法获取用户信息只有uid
const toExperience = () => {
  getVisitorLogin().then((res) => {
    setToken(res.cookie);
    useUserStore().setUseId(res.userId);
    uni.reLaunch({
      url: "/pages/find/index",
    });
  });
};
</script>

<style lang="scss" scoped>
.loginPage {
  position: relative;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(135deg, #c850c0, #4158d0);
  display: block;
  .experience {
    position: absolute;
    right: 20rpx;
    color: #e8e8e8;
    font-size: 24rpx;
  }

  .loginCont {
    position: relative;
    width: 280px;
    height: 280px;
    padding: 20rpx;
    background-color: #fff;
    border-radius: 20rpx;
    position: absolute;
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%);
    overflow: hidden;
    .qrImgCont {
      position: absolute;
      top: -20rpx;
      left: -20rpx;
      width: 100rpx;
      height: 100rpx;
      background-color: #eaeaea;
      border-radius: 50%;
      .arCodeImg {
        position: absolute;
        top: 40rpx;
        right: 24rpx;
      }
    }
  }
  .otherLogin {
    font-size: 26rpx;
    color: #989494;
    position: absolute;
    bottom: 40rpx;
    left: 50%;
    transform: translate(-50%);
  }
}
</style>
