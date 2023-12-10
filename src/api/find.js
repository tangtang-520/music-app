import request from "@/utils/request";

// 推荐歌单（不需要登录）
export function getPersonalized(params) {
    return request({
      url: "/personalized",
      headers: {
        isToken: false,
      },
      method: "get",
      data:params
    });
  }