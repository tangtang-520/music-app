import { getToken, removeToken } from '@/utils/auth';


const useUserStore = defineStore('user', {
  state: () => ({
    token: getToken(),
    name: '',
    avatar: '',
    permissions: [],
    authlist: [],
  }),
  getters: {
    getDepartment: state => {
      return data => (state.department = data);
    }
  },
  actions: {
    login() {
      
    },
    // 退出系统
    logOut() {
      return new Promise(resolve => {
        this.token = '';
        this.roles = [];
        this.permissions = [];
        removeToken();
        resolve();
      });
    }
  }
});

export default useUserStore;
