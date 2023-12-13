import { getToken, removeToken, setToken } from '@/utils/auth';
import { getVisitorLogin } from "@/api/login";


const useUserStore = defineStore('user', {
  state: () => ({
    token: getToken(),
    profile:{},
    userId:null,
  }),
  getters: {
    getDepartment: state => {
      return data => (state.department = data);
    },
    
  },
  actions: {
    login() {
      getVisitorLogin().then( res => {
        setToken(res.cookie)
        this.userId = res.userId
      })
    },
    setUseId(id){
      this.userId = id
      console.log(this.userId);
    },

    setProfile(data){
      this.profile = data
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
