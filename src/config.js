// 应用全局配置
export default {
    // #ifdef H5
    baseUrl: 'http://localhost:3000',
    // #endif

    // #ifdef APP-PLUS
    baseUrl: 'http://1.92.85.207:80',
    // #endif
    
    // 应用信息
    appInfo: {
      // 应用名称
      name: "music-app",
      // 应用版本
      version: "1.0.0",
      // 应用logo
      logo: "",
      // 官方网站
      site_url: "",
      // 政策协议
      agreements: [{
          title: "隐私政策",
          url: ""
        },
        {
          title: "用户服务协议",
          url: ""
        }
      ]
    }
  }
  