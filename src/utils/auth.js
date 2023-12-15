const TokenKey = "OAUTH2"; // 必须与oauth2自动存储的名称相同

export function getToken() {
  return uni.getStorageSync(TokenKey);
}

export function setToken(token) {
  return uni.setStorageSync(TokenKey, token);
}

export function removeToken() {
  return uni.removeStorageSync(TokenKey);
}

export function setUseId(id) {
  return uni.setStorageSync('useId', id);
}

export function getUseId() {
  return uni.getStorageSync('useId');
}

export function getUserInfo() {
  return uni.getStorageSync('profile');
}
export function setUserInfo(data) {
  return uni.setStorageSync('profile', data);
}

