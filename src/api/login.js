import request from "@/utils/request";

// 生成二维码必需的key
export function getQrKey() {
  return request({
    url: "/login/qr/key",
    headers: {
      isToken: false,
    },
    method: "get",
  });
}

// 二维码生成接口
export function getQrImg(params) {
  return request({
    url: "/login/qr/create",
    headers: {
      isToken: false,
    },
    data:params
  });
}

// 获取国家编码列表
export function getCountryCodeList() {
  return request({
    url: "/countries/code/list",
    headers: {
      isToken: false,
    },
  })
}

// 游客登录
export function getVisitorLogin() {
  return request({
    url: "/register/anonimous",
    headers: {
      isToken: false,
    },
  })
}

// 获取用户详情
export function getUser(params) {
  return request({
    url: "/user/detail",
    data: params
  })
}


// 二维码检测扫码状态检测
export function getQrCheck(params){
  return request({
    url: "/login/qr/check",
    headers: {
      isToken: false,
    },
    data:params
  })
}


// export function login(username, password, code, uuid) {
//     const data = {
//       username,
//       password,
//       code,
//       uuid
//     }
//     return request({
//       'url': '/login',
//       headers: {
//         isToken: false
//       },
//       'method': 'post',
//       'data': data
//     })
//   }
