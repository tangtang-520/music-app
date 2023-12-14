<template>
  <view class="phoneLogin">
    <view class="phone">
      <view class="countryCode" @tap="openCountryCode">
        <text style="margin-right: 5px">{{ countryCode }}</text>
        <u-icon name="arrow-down-fill" size="12"></u-icon>
      </view>
      <up-input
        v-model="phoneValue"
        placeholder="输入手机号"
        type="number"
        border="bottom"
      ></up-input>
    </view>
    <view class="code">
      <view style="width: 54%">
        <up-input
          v-model="codeValue"
          placeholder="请输入短信验证码"
          border="bottom"
          type="number"
        ></up-input>
      </view>
      <up-button
        style="width: auto"
        type="primary"
        :text="text"
        color="#d11d05"
        @tap="getCode"
        :disabled="disabled"
      ></up-button>
    </view>
    <up-button
      style="margin-top: 20px"
      type="primary"
      text="确定"
      color="#d11d05"
      shape="circle"
      @tap="tapLogin"
    ></up-button>
  </view>
</template>
<script setup>
import { getPhoneCode, getCheckCode, getLoginPhone } from "@/api/login";
import { toast } from "@/utils/common";
import { setToken, setUseId } from "@/utils/auth";
import useUserStore from "@/store/user";
const props = defineProps({
  countryCode: String,
});
const emit = defineEmits(["tapCode", "changPageLoad"]);

// 电话号码
const phoneValue = ref(null);
const codeValue = ref(null);
const disabled = ref(false);
const text = ref("获取验证码");

const openCountryCode = () => {
  emit("tapCode");
};

// 获取验证码
const getCode = () => {
  if (phoneValue.value === null || phoneValue.value === "") {
    return toast("请输入电话");
  }
  const params = {
    phone: phoneValue.value,
    ctcode: props.countryCode.split("+")[1],
    timestamp: Date.now(),
  };
  getPhoneCode(params).then((res) => {
    console.log(res);
    if (res) {
      let maxTime = 30;
      text.value = maxTime + "秒后重新发送";
      disabled.value = true;
      const texttimer = setInterval(() => {
        if (maxTime - 1 >= 0) {
          text.value = maxTime-- + "秒后重新发送";
        } else {
          disabled.value = false;
          text.value = "获取验证码";
          clearInterval(texttimer);
        }
      }, 1000);
    }
  });
};

// 验证验证码
const checkCode = () => {
  return new Promise((resolve) => {
    const params = {
      phone: phoneValue.value,
      captcha: codeValue.value,
      timestamp: Date.now(),
    };
    getCheckCode(params).then((res) => {
      console.log(res);
      resolve(res);
    });
  });
};

// 点击登录
const tapLogin = () => {
  if (phoneValue.value === null || phoneValue.value === "") {
    return toast("请输入电话");
  }
  if (codeValue.value === null || codeValue.value === "") {
    return toast("请输入验证码");
  }

  checkCode().then((res) => {
    emit("changPageLoad");
    const params = {
      phone: phoneValue.value,
      captcha: codeValue.value,
      timestamp: Date.now(),
    };
    getLoginPhone(params)
      .then((res) => {
        console.log(res);
        setToken(res.cookie);
        setUseId(res.userId);
        useUserStore().setProfile(res.profile);
        uni.reLaunch({
          url: "/pages/find/index",
        });
      })
      .finally(() => {
        emit("changPageLoad");
      });
  });
};
</script>
<style lang="scss" scoped>
.phoneLogin {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .phone {
    display: flex;
    align-items: center;
    background-color: #fefefe;
    border-radius: 30rpx;
    .countryCode {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0rpx 20rpx 0rpx 0rpx;
      border-right: 2rpx solid #eee;
      margin-right: 40rpx;
    }
  }
  .code {
    margin-top: 40rpx;
    display: flex;
    justify-content: space-between;
  }
}
</style>
