<template>
  <view class="recommendListCont">
    <view class="recommendText">
      <text>推荐歌单</text>
      <u-icon name="arrow-right" color="#oooooo" size="14"></u-icon>
    </view>
    <view class="recommendListCont">
      <u-scroll-list :indicator="false">
        <view
          class="itemRecommend"
          v-for="(item, index) in recommendList"
          :key="item.id"
        >
          <view class="itemPic">
            <text class="playNumSty">{{ item?.playCount }}</text>
            <up-image
              :lazy-load="true"
              :src="item?.picUrl"
              width="140px"
              height="140px"
              :radius="10"
            ></up-image>
            <u-icon
              class="playIco"
              name="play-right-fill"
              color="#fff"
              size="28"
            ></u-icon>
          </view>

          <text class="itemName">{{ item.name }}</text>
        </view>
      </u-scroll-list>
    </view>
  </view>
</template>
<script setup>
import { getPersonalized } from "@/api/find";

// 获取推荐歌单（不需要登录）
const recommendList = ref([]);
const getSongRecommendList = () => {
  const params = {
    limit: 6,
  };
  getPersonalized(params)
    .then((res) => {
      // console.log(res);
      recommendList.value = res;
    })
    .finally(() => {
      // console.log(1111);
    });
};

getSongRecommendList();
</script>
<style lang="scss" scoped>
.recommendListCont {
  .recommendText {
    display: flex;
    align-items: center;
    margin-bottom: 20rpx;
  }
  .itemRecommend {
    .itemName {
      font-size: 26rpx;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2; /* 控制显示的行数 */
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
  .itemPic {
    position: relative;
    margin-bottom: 10rpx;
    .playNumSty {
      position: absolute;
      color: #fff;
      font-size: 12px;
      z-index: 99;
      top: 10rpx;
      right: 10rpx;
      font-weight: bold;
    }
    .playIco {
      position: absolute;
      bottom: 10rpx;
      right: 10rpx;
    }
  }

  .itemRecommend:nth-child(n):not(:last-child) {
    margin-right: 20rpx;
  }
}
</style>
