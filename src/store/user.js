import { getToken, setToken, getUseId, getUserInfo } from "@/utils/auth";
import { getVisitorLogin } from "@/api/login";

const useUserStore = defineStore("user", {
  state: () => ({
    token: getToken(),
    profile: getUserInfo(),
    userId: getUseId(),
  }),
  getters: {
    getDepartment: (state) => {
      return (data) => (state.department = data);
    },
  },
  actions: {
    // 退出系统
    logOut() {
      return new Promise((resolve) => {});
    },
  },
});

export default useUserStore;
