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


// 获取最近播放列表
export function getLatelySongList(params) {
  return request({
    url: "/record/recent/song?limit=10",
    method: "get",
    data:params
  });
}

// 获取歌曲url
export function getSongSrc(params) {
  return request({
    url: "/song/url/v1",
    method: "get",
    data:params
  });
}