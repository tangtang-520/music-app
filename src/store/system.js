// 获取设备信息
const useSystemStore = defineStore('system', {
  state: () => ({
    systemInfo:{
        statusBarHeight: 30
    },
    popupShow: false
  }),
  getters: {
    getSystemInfoData: state => {
        return uni.getSystemInfo({
          success: function (res) {
            console.log(res);
            state.systemInfo = res
          },
          fail: function (err) {
            console.log('getSystemInfoErr:', err);
          }

      });
      }
  },
  actions: {
    setPopupShow(){
      this.popupShow = !this.popupShow
    }
  }
});

export default useSystemStore;
