import { getToken, removeToken, setToken } from '@/utils/auth';
import { getVisitorLogin } from "@/api/login";


const useUserStore = defineStore('user', {
  state: () => ({
    token: getToken(),
    name: '',
    avatar: '',
    permissions: [],
    authlist: [],
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

    // 获取用户信息
    // getInfo() {
    //   return new Promise(async resolve => {
    //     let response = null;

    //     this.authlist = response?.data.perms || [];
    //     const data = {
    //       user: {
    //         userName: response?.data.name ?? 'developer',
    //         avatar: response?.data.avatar ?? defAva
    //       },
    //       // roles: isDev ? ['admin'] : this.rolesMatch(response),
    //       roles: ['admin'],
    //       permissions: isDev ? ['*:*:*'] : this.fetchPermissions(this.authlist)
    //     };
  
    //     const { user, roles, permissions } = data;
    //     if (roles && roles.length > 0) {
    //       // 验证返回的roles是否是一个非空数组
    //       this.roles = roles;
    //       this.permissions = permissions;
    //     } else {
    //       this.roles = ['common'];
    //     }
    //     this.name = user.userName;
    //     this.avatar = user.avatar;
    //     resolve(data);
    //   });
    // }
    
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
