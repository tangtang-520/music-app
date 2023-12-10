<template>
  <u-scroll-list indicatorActiveColor="#d11d05">
    <view class="listCont" v-for="(item, index) in list" :key="item.id">
      <up-image
        :lazy-load="true"
        :src="item.imgSrc"
        width="35px"
        height="35px"
        @click="click"
      ></up-image>
      <view class="itemSize">{{ item.name }}</view>
    </view>
  </u-scroll-list>
</template>
<script setup>
const list = [
  {
    id: 1,
    name: "排行榜",
    imgSrc: "/static/minimenu/leaderboard.png",
  },
  {
    id: 2,
    name: "每日推荐",
    imgSrc: "/static/minimenu/recommended.png",
  },
  {
    id: 3,
    name: "私人漫游",
    imgSrc: "/static/minimenu/radiostation.png",
  },
  {
    id: 4,
    name: "歌单",
    imgSrc: "/static/minimenu/songlist.png",
  },
  {
    id: 5,
    name: "有声书",
    imgSrc: "/static/minimenu/audiobook.png",
  },
  {
    id: 6,
    name: "数字专辑",
    imgSrc: "/static/minimenu/digitalalbum.png",
  },
];
const click = () => {};
</script>

<style lang="scss" scoped>
.listCont {
  width: 100rpx;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0rpx 30rpx;
  .itemSize {
    font-size: 24rpx;
    width: 100rpx;
    text-align: center;
  }
}
</style>
