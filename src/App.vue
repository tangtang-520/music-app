<script>
import useSystemStore from "./store/system";
export default {
  onLaunch: function () {
    console.log("App Launch");
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
</style>
