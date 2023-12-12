// 获取设备信息
const useSystemStore = defineStore('system', {
  state: () => ({
    systemInfo:{
        statusBarHeight: 30
    }
  }),
  getters: {
    getSystemInfoData: state => {
        return uni.getSystemInfo({
          success: function (res) {
            state.systemInfo = res
          },
          fail: function (err) {
            console.log('getSystemInfoErr:', err);
          }

      });
      }
  },
  actions: {
  }
});

export default useSystemStore;
