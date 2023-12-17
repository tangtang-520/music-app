<template>
  <view class="miniPlay">
    <!-- 音乐img -->
    <view class="musicInfo">
      <view class="imgBox">
        <up-image
          class="musicImg"
          :show-loading="true"
          :src="imgSrc"
          shape="circle"
          width="30px"
          height="30px"
        ></up-image>
      </view>
      <!-- 歌名 -->
      <view class="musicName">
        <view>{{ name }}</view>
        <view class="fontClass">
          <u-icon
            v-show="singer"
            name="minus"
            color="#707070"
            size="14"
          ></u-icon>
        </view>
        <view class="name fontClass">
          {{ singer.join("/") }}
        </view>
      </view>
    </view>

    <!-- 播放按钮 -->
    <view class="controls">
      <view class="play" @tap="musicPlay(0)">
        <up-image
          class="palyImg"
          :show-loading="true"
          :src="playImag"
          width="20px"
          height="20px"
        ></up-image>
      </view>
      <view>
        <up-image
          @tap="shouList"
          :show-loading="true"
          :src="playList"
          width="25px"
          height="25px"
        ></up-image>
      </view>
    </view>
  </view>
  <musicList
    ref="musicListRef"
    :listData="songList"
    @changeMusic="changeMusic"
  ></musicList>
</template>
<script setup>
import play from "@/static/play/play.png";
import stop from "@/static/play/stop.png";
import playList from "@/static/play/playlist.png";
import { getToken } from "@/utils/auth";
import { getLatelySongList, getSongSrc } from "@/api/find";
import useSongStrone from "@/store/song";

const playImag = ref(play);

const imgSrc = ref(null);
const name = ref(null);
const singer = ref([]);

const songList = ref([]);
const songIdArr = ref([]);
const SongSrc = ref(null);

const misic = () => {
  const params = {
    cookie: getToken(),
    limit: 10,
    timestamp: Date.now(),
  };
  getLatelySongList(params).then((res) => {
    songList.value = res.list;
    useSongStrone().setMusicList(res.list);
    imgSrc.value = res.list[0].data.al.picUrl;
    name.value = res.list[0].data.name;
    res.list[0].data.ar.forEach((ele) => {
      singer.value.push(ele.name);
    });

    res.list.forEach((item) => {
      songIdArr.value.push(item.resourceId);
    });

    getMusicRrc();
  });
};
misic();

// 获取音乐地址
const getMusicRrc = (id) => {
  const allIdArr = songIdArr.value.join(",");
  const params = {
    id: id || allIdArr,
    level: "standard", // 音质 standard标准
    timestamp: Date.now(),
  };
  getSongSrc(params).then((res) => {
    useSongStrone().setMusicSrcArr(res);
  });
};

const innerAudioContext = uni.createInnerAudioContext();
innerAudioContext.autoplay = false;

innerAudioContext.onError((res) => {
  console.log(res);
  console.log(res.errMsg);
  console.log(res.errCode);
});

const musicPlay = (id) => {
  playImag.value === play ? (playImag.value = stop) : (playImag.value = play);
  if (playImag.value === stop) {
    const sRcArr = useSongStrone().musicSrcArr.filter(
      (item) => item.id == Number(id)
    );
    console.log(sRcArr);
    innerAudioContext.src = sRcArr[0].url
    innerAudioContext.play();
  } else {
    innerAudioContext.pause();
  }
};

// 音乐列表
const musicListRef = ref(null);
const shouList = () => {
  musicListRef.value.open();
};

// 切换音乐
const changeMusic = (data) => {
  singer.value = [];
  console.log(data);
  musicPlay(data.resourceId);
  imgSrc.value = data.data.al.picUrl;
  name.value = data.data.name;
  data.data.ar.forEach((ele) => {
    singer.value.push(ele.name);
  });
};
</script>
<style lang="scss" scoped>
.miniPlay {
  box-sizing: border-box;
  width: 100%;
  height: 100rpx;
  position: fixed;
  bottom: var(--window-bottom);
  background-color: rgba(255, 255, 255, 0.973);
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 9999;
  padding: 0rpx 20rpx;
  border-top: 2rpx solid #f4f3f3;
  .musicInfo {
    display: flex;
    align-items: center;
  }
  .imgBox {
    width: 80rpx;
    height: 80rpx;
    background-color: #000;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .musicName {
    display: flex;
    margin-left: 30rpx;
    justify-content: center;
    align-items: center;
    .name {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .fontClass {
      font-size: 26rpx;
      color: #707070;
    }
  }
  .controls {
    display: flex;
    .play {
      width: 50rpx;
      height: 50rpx;
      position: relative;
      margin-right: 30rpx;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 2rpx solid #cbcbcb;
      border-radius: 50%;
    }
  }
}
</style>
