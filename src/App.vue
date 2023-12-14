<script>
import useSystemStore from "./store/system";
import useUserStore from "@/store/user";
import { getUserInfo } from "@/api/login";

// import
export default {
  onLaunch: function () {
    console.log("App Launch");
    // token标志来判断
    const token = uni.getStorageSync("OAUTH2");
    const getUseId = uni.getStorageSync("useId");
    
    if (token) {
      //存在则关闭启动页进入首页
      if (getUseId) {
        // 获取用户信息
         // #ifdef APP-PLUS || H5
        const params = {
          uid: getUseId,
          timestamp: Date.now(),
        };
        getUserInfo(params).then((res) => {
          useUserStore().setProfile(res.profile);
        });
        // #endif
        uni.reLaunch({
          url: "/pages/find/index",
          success: () => {
            // #ifdef APP-PLUS
            plus.navigator.closeSplashscreen();
            // #endif
          },
        });
      }
    } else {
      //不存在则跳转至登录页
      uni.reLaunch({
        url: "/pages/login/index",
        success: () => {
          // #ifdef APP-PLUS
          plus.navigator.closeSplashscreen();
            // #endif
        },
      });
    }
    
  },
  onShow: function () {
    console.log("App Show");
    // 获取设备信息
    const systemStore = useSystemStore();
    systemStore.getSystemInfoData;
  },
  onHide: function () {
    console.log("App Hide");
  },
};
</script>

<style lang="scss">
/* 注意要写在第一行，同时给style标签加入lang="scss"属性 */
@import "@/uni_modules/uview-plus/index.scss";
.app-continer {
  padding: 20rpx;
}
$appColor: #d11d05;
.pd10 {
  padding: 20rpx;
}
.mgb10 {
  margin-bottom: 20rpx;
}
</style>
