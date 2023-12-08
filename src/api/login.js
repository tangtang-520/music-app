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
