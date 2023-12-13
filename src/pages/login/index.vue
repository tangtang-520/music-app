<template>
  <view class="loginPage">
    <view
      class="experience"
      @tap="toExperience"
      :style="'margin-top:' + marginTop + 'px'"
      >立即体验>>></view
    >
    <view class="loginCont">
      <phoneLogin
        v-if="false"
        :countryCode="countryCode"
        @tapCode="tapCode"
      ></phoneLogin>
      <qrLoginVue></qrLoginVue>
    </view>
    <view class="otherLogin">其他登录方式</view>

    <countyPopup
      ref="countyPopupRef"
      :countryData="countryData"
      @changCountryCode="changCountryCode"
    ></countyPopup>
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

const systemStore = useSystemStore();
const marginTop = systemStore.systemInfo?.statusBarHeight;

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
  background: linear-gradient(135deg, #ff9a9e, #fad0c4);
  display: block;
  .experience {
    position: absolute;
    right: 20rpx;
    color: #e3e3e3;
    font-size: 24rpx;
  }

  .loginCont {
    width: 280px;
    height: 280px;

    background-color: #fff;
    border-radius: 20rpx;
    position: absolute;
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%);
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
